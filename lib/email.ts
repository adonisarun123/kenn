import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
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
    
    // Email sent successfully
    return info;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};

export const sendNotificationEmail = async (formData: any) => {
  const html = `
    <h2>New Application Submission</h2>
    <h3>Applicant Details</h3>
    <p><strong>Full Name:</strong> ${formData.fullName}</p>
    <p><strong>Email:</strong> ${formData.email}</p>
    <p><strong>Mobile:</strong> ${formData.mobile}</p>
    <p><strong>LinkedIn:</strong> ${formData.linkedin || 'N/A'}</p>

    <h3>Health & Wellness Vision</h3>
    <p><strong>Wellness Practices:</strong> ${formData.wellnessPractices && formData.wellnessPractices.length > 0 ? formData.wellnessPractices.join(', ') : 'N/A'}</p>
    <p><strong>Health Experience:</strong> ${formData.healthExperience}</p>
    <p><strong>Wellness Themes:</strong> ${formData.wellnessThemes && formData.wellnessThemes.length > 0 ? formData.wellnessThemes.join(', ') : 'N/A'}${formData.wellnessThemesOther ? ` (Other: ${formData.wellnessThemesOther})` : ''}</p>

    <h3>Vision & Community</h3>
    <p><strong>Vision for the Future:</strong> ${formData.vision}</p>
    <p><strong>Vision Elaboration:</strong> ${formData.visionElaboration}</p>
    <p><strong>Community Expectations:</strong> ${formData.communityExpectations}</p>
    <p><strong>Community Contributions:</strong> ${formData.communityContributions}</p>

    <h3>Sustainability</h3>
    <p><strong>Sustainability Alignment:</strong> ${formData.sustainabilityAlignment}</p>
    <p><strong>Sustainability Practices:</strong> ${formData.sustainabilityPractices}</p>

    <h3>Financials</h3>
    <p><strong>Funding Sources:</strong> ${formData.fundingSources && formData.fundingSources.length > 0 ? formData.fundingSources.join(', ') : 'N/A'}${formData.fundingSourcesOther ? ` (Other: ${formData.fundingSourcesOther})` : ''}</p>
    <p><strong>Investment Level:</strong> ${formData.investmentLevel}</p>
    <p><strong>Investment Timeline:</strong> ${formData.investmentTimeline}</p>
    <p><strong>Investment Strategy:</strong> ${formData.investmentStrategy}</p>

    <h3>Additional Information</h3>
    <p><strong>Referral Source:</strong> ${formData.referralSource}${formData.referralSourceOther ? ` (Other: ${formData.referralSourceOther})` : ''}</p>
    <p><strong>Final Thoughts:</strong> ${formData.finalThoughts}</p>
    <p><strong>Pledge Agreement:</strong> ${formData.pledgeAgreement ? 'Agreed' : 'Not Agreed'}</p>
  `;
  
  return sendEmail(process.env.SALES_EMAIL || process.env.SMTP_FROM!, 'New Application Submission', html);
};

export const sendHomepageLeadNotificationEmail = async (formData: any) => {
  const html = `
    <h2>New Homepage Lead Submission</h2>
    <p><strong>Name:</strong> ${formData.name}</p>
    <p><strong>Email:</strong> ${formData.email}</p>
    <p><strong>Phone:</strong> ${formData.phone}</p>
    <p><strong>Location:</strong> ${formData.location || 'N/A'}</p>
    <p><strong>Wellness Interests:</strong> ${formData.interests || 'N/A'}</p>
    <p><strong>Intent:</strong> ${formData.intent || 'N/A'}</p>
  `;

  return sendEmail(process.env.SALES_EMAIL || process.env.SMTP_FROM!, 'New Homepage Lead', html);
};

export const sendHomepageLeadConfirmationEmail = async (formData: any) => {
  const html = `
    <h2>Thank You for Your Interest</h2>
    <p>Dear ${formData.name},</p>
    <p>Thank you for your interest in Kenn EcoEstates. We have received your initial details. To complete your application, please proceed to the full application form.</p>
    <p>Best regards,<br>The Kenn EcoEstates Team</p>
  `;

  return sendEmail(formData.email, 'Interest Received - Kenn EcoEstates', html);
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
