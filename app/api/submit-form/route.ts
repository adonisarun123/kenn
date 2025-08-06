import { NextResponse } from 'next/server';
import { query } from '@/lib/db';
import { sendNotificationEmail, sendConfirmationEmail } from '@/lib/email';

// Force dynamic rendering
export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    
    // Save to database
    const result = await query(
      `INSERT INTO form_submissions (
        full_name, mobile, email, linkedin, wellness_practices, health_experience,
        wellness_themes, wellness_themes_other, land_usage, engagement_style,
        service_charge_agreement, financial_readiness, shared_infra_support,
        skills_contribution, referred_by, final_thoughts, pledge
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17)
      RETURNING id`,
      [
        formData.fullName,
        formData.mobile,
        formData.email,
        formData.linkedin,
        formData.wellnessPractices,
        formData.healthExperience,
        formData.wellnessThemes,
        formData.wellnessThemesOther,
        formData.landUsage,
        formData.engagementStyle,
        formData.serviceChargeAgreement,
        formData.financialReadiness,
        formData.sharedInfraSupport,
        formData.skillsContribution,
        formData.referredBy,
        formData.finalThoughts,
        formData.pledge
      ]
    );
    
    // The form data was successfully saved to the database.
    
    // Send notification email
    await sendNotificationEmail(formData);
    
    // Send confirmation email to applicant
    await sendConfirmationEmail(formData);
    
    return NextResponse.json({ 
      success: true, 
      id: result.rows[0].id,
      message: 'Form submitted successfully'
    });
  } catch (error) {
    console.error('Error submitting form:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to submit form. Please try again later.' 
    }, { status: 500 });
  }
}
