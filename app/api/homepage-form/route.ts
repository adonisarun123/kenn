import { Pool } from 'pg';
import { NextRequest, NextResponse } from 'next/server';
import { sendHomepageLeadNotificationEmail, sendHomepageLeadConfirmationEmail } from '@/lib/email';

export const dynamic = 'force-dynamic';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const validateData = (data: any) => {
  if (!data.name || !data.email || !data.phone) {
    return 'Name, email, and phone are required.';
  }
  if (!/\S+@\S+\.\S+/.test(data.email)) {
    return 'Invalid email address.';
  }
  return null;
};

export async function POST(request: NextRequest) {
  let formData;
  try {
    formData = await request.json();
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Invalid JSON body.' }, { status: 400 });
  }

  const validationError = validateData(formData);
  if (validationError) {
    return NextResponse.json({ success: false, message: validationError }, { status: 400 });
  }

  try {
    const client = await pool.connect();
    const result = await client.query(
      'INSERT INTO homepage_leads (name, email, phone, location, interests, intent) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id',
      [formData.name, formData.email, formData.phone, formData.location, formData.interests, formData.intent]
    );
    const insertedId = result.rows[0].id;
    client.release();

    // Send notification and confirmation emails without awaiting
    sendHomepageLeadNotificationEmail(formData).catch(err => console.error('Failed to send lead notification email:', err));
    sendHomepageLeadConfirmationEmail(formData).catch(err => console.error('Failed to send lead confirmation email:', err));

    return NextResponse.json({ success: true, id: insertedId, message: 'Lead captured successfully.' });
  } catch (error) {
    console.error('Database insert error:', error);
    return NextResponse.json({ success: false, message: 'An error occurred while saving the data.' }, { status: 500 });
  }
}
