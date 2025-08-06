# NeonDB and SMTP Email Integration Steps

## Overview
This document outlines the steps required to integrate NeonDB (PostgreSQL) and SMTP email functionality to make the application form in the `apply/` section fully functional. The form will save data to a database and send email notifications upon submission.

## Prerequisites
1. NeonDB account (https://neon.tech/)
2. SMTP email service credentials (e.g., Gmail, SendGrid, etc.)
3. Environment variables setup

## Step 1: Set up NeonDB

### 1.1 Create NeonDB Account and Database
1. Sign up at https://neon.tech/
2. Create a new PostgreSQL database
3. Note down the connection details:
   - Host
   - Database name
   - User
   - Password
   - Connection string

### 1.2 Create Database Table
Create a table to store form submissions with the following structure:

```sql
CREATE TABLE form_submissions (
  id SERIAL PRIMARY KEY,
  full_name VARCHAR(255) NOT NULL,
  mobile VARCHAR(20) NOT NULL,
  email VARCHAR(255) NOT NULL,
  linkedin TEXT,
  wellness_practices TEXT[],
  health_experience TEXT,
  wellness_themes TEXT[],
  wellness_themes_other TEXT,
  land_usage TEXT,
  engagement_style TEXT,
  service_charge_agreement TEXT,
  financial_readiness TEXT,
  shared_infra_support TEXT,
  skills_contribution TEXT,
  referred_by TEXT,
  final_thoughts TEXT,
  pledge BOOLEAN NOT NULL,
  submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## Step 2: Set up Environment Variables

Create a `.env.local` file in the project root with the following variables:

```env
# NeonDB Connection
DATABASE_URL=your_neon_db_connection_string

# SMTP Configuration
SMTP_HOST=your_smtp_host
SMTP_PORT=your_smtp_port
SMTP_USER=your_smtp_user
SMTP_PASSWORD=your_smtp_password
SMTP_FROM=your_from_email
SMTP_FROM_NAME=Kenn EcoEstates
```

## Step 3: Install Required Dependencies

Run the following command to install the necessary packages:

```bash
npm install pg dotenv
npm install --save-dev @types/pg
```

## Step 4: Create Database Connection Utility

Create a new file `lib/db.ts`:

```typescript
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

export const query = (text: string, params?: any[]) => pool.query(text, params);
```

## Step 5: Create Email Utility

Create a new file `lib/email.ts`:

```typescript
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransporter({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD
  }
});

export const sendEmail = async (to: string, subject: string, html: string) => {
  try {
    const info = await transporter.sendMail({
      from: `${process.env.SMTP_FROM_NAME} <${process.env.SMTP_FROM}>`,
      to,
      subject,
      html
    });
    
    console.log('Email sent: %s', info.messageId);
    return info;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};

export const sendNotificationEmail = async (formData: any) => {
  const html = `
    <h2>New Application Submission</h2>
    <p><strong>Name:</strong> ${formData.fullName}</p>
    <p><strong>Email:</strong> ${formData.email}</p>
    <p><strong>Mobile:</strong> ${formData.mobile}</p>
    <p><strong>LinkedIn:</strong> ${formData.linkedin || 'N/A'}</p>
    <h3>Wellness Practices</h3>
    <p>${formData.wellnessPractices.join(', ')}</p>
    <h3>Health Experience</h3>
    <p>${formData.healthExperience}</p>
    <h3>Wellness Themes</h3>
    <p>${formData.wellnessThemes.join(', ')}${formData.wellnessThemesOther ? ` (Other: ${formData.wellnessThemesOther})` : ''}</p>
  `;
  
  return sendEmail(process.env.SMTP_FROM!, 'New Application Submission', html);
};

export const sendConfirmationEmail = async (formData: any) => {
  const html = `
    <h2>Thank You for Your Application</h2>
    <p>Dear ${formData.fullName},</p>
    <p>Thank you for submitting your application to Kenn EcoEstates. We have received your application and will review it shortly.</p>
    <p>You will receive a confirmation with a PDF deck and FAQs shortly.</p>
    <p>Best regards,<br>The Kenn EcoEstates Team</p>
  `;
  
  return sendEmail(formData.email, 'Application Received - Kenn EcoEstates', html);
};
```

## Step 6: Update Form Submission Handler

Modify the `handleSubmit` function in `app/apply/page.tsx`:

```typescript
import { query } from '@/lib/db';
import { sendNotificationEmail, sendConfirmationEmail } from '@/lib/email';

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  try {
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
    
    console.log('Form saved with ID:', result.rows[0].id);
    
    // Send notification email
    await sendNotificationEmail(formData);
    
    // Send confirmation email to applicant
    await sendConfirmationEmail(formData);
    
    alert('Thank you for your application! You will receive a confirmation email with a PDF deck and FAQs shortly.');
    
    // Optionally redirect to a thank you page
    // router.push('/apply/thank-you');
  } catch (error) {
    console.error('Error submitting form:', error);
    alert('There was an error submitting your application. Please try again later.');
  }
};
```

## Step 7: Install Nodemailer

Run the following command to install nodemailer:

```bash
npm install nodemailer
npm install --save-dev @types/nodemailer
```

## Step 8: Update tsconfig.json

Ensure that the `lib` array in `tsconfig.json` includes `es2020` or higher to support the features used by nodemailer:

```json
{
  "compilerOptions": {
    "lib": ["dom", "dom.iterable", "es2020"],
    // other options...
  }
}
```

## Step 9: Test the Integration

1. Start the development server: `npm run dev`
2. Navigate to the application form at `/apply`
3. Fill out and submit the form
4. Check:
   - Database for the new record
   - Email inbox for notification and confirmation emails

## Additional Considerations

1. **Security**: Never expose database credentials in client-side code
2. **Error Handling**: Implement proper error handling and user feedback
3. **Validation**: Consider adding server-side validation
4. **Rate Limiting**: Implement rate limiting to prevent abuse
5. **Logging**: Add comprehensive logging for debugging and monitoring

## Troubleshooting

1. **Database Connection Issues**:
   - Verify the DATABASE_URL in `.env.local`
   - Check NeonDB dashboard for connection status
   - Ensure SSL settings are correct

2. **Email Sending Issues**:
   - Verify SMTP credentials
   - Check spam/junk folders
   - Ensure proper email formatting

3. **Environment Variables**:
   - Ensure `.env.local` is in the project root
   - Restart the development server after changing environment variables
