# Next.js Form Integration Solutions

## Problem Summary
The current implementation causes build errors because Node.js-specific modules (`pg` and `nodemailer`) are being imported in client-side components. These modules aren't available in the browser environment.

## Recommended Solutions

### Solution 1: API Routes Approach (Recommended)

#### Overview
Move all database and email logic to API routes that run on the server, where Node.js modules are available.

#### Implementation Steps
1. Create a new API route at `app/api/submit-form/route.ts`
2. Move database and email logic to this API route
3. Update the form component to make a fetch request to this endpoint

#### Benefits
- Follows Next.js best practices
- Keeps sensitive operations on the server
- Resolves build errors
- Better separation of concerns

### Solution 2: Server Actions (Next.js 14)

#### Overview
Use Next.js Server Actions to handle form submission directly on the server.

#### Implementation Steps
1. Create a server action function in a separate file
2. Import and call this server action from your form component
3. Handle database and email operations within the server action

#### Benefits
- Modern Next.js 14 approach
- Automatic handling of server/client boundaries
- Built-in error handling and revalidation

### Solution 3: External Service Integration

#### Overview
Use third-party services that work via HTTP APIs instead of Node.js libraries.

#### Implementation Steps
1. Replace nodemailer with a service like Resend, SendGrid, or EmailJS
2. Use a database service with HTTP APIs instead of direct PostgreSQL connections
3. Keep logic in client components but use fetch requests

#### Benefits
- No build errors
- Simplified deployment
- Managed services

### Solution 4: Conditional Imports

#### Overview
Only import Node.js modules when running on the server.

#### Implementation Steps
1. Use dynamic imports with `server-only` conditions
2. Check environment before importing Node.js modules
3. Guard server-only code with appropriate checks

#### Benefits
- Minimal code changes
- Keeps logic in components

#### Drawbacks
- More complex
- Not as clean as other approaches

## Detailed Implementation for Solution 1 (API Routes)

### Step 1: Create API Route
Create `app/api/submit-form/route.ts`:

```typescript
import { NextResponse } from 'next/server';
import { query } from '@/lib/db';
import { sendNotificationEmail, sendConfirmationEmail } from '@/lib/email';

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
    
    console.log('Form saved with ID:', result.rows[0].id);
    
    // Send notification email
    await sendNotificationEmail(formData);
    
    // Send confirmation email to applicant
    await sendConfirmationEmail(formData);
    
    return NextResponse.json({ success: true, id: result.rows[0].id });
  } catch (error) {
    console.error('Error submitting form:', error);
    return NextResponse.json({ success: false, error: 'Failed to submit form' }, { status: 500 });
  }
}
```

### Step 2: Update Form Component
Modify `app/apply/page.tsx` to call the API route:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  try {
    const response = await fetch('/api/submit-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    
    const result = await response.json();
    
    if (result.success) {
      alert('Thank you for your application! You will receive a confirmation email with a PDF deck and FAQs shortly.');
      // Optionally redirect to a thank you page
      // router.push('/apply/thank-you');
    } else {
      alert('There was an error submitting your application. Please try again later.');
    }
  } catch (error) {
    console.error('Error submitting form:', error);
    alert('There was an error submitting your application. Please try again later.');
  }
};
```

## Detailed Implementation for Solution 2 (Server Actions)

### Step 1: Create Server Action
Create `lib/actions.ts`:

```typescript
'use server';

import { query } from '@/lib/db';
import { sendNotificationEmail, sendConfirmationEmail } from '@/lib/email';

export async function submitForm(formData: any) {
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
    
    return { success: true, id: result.rows[0].id };
  } catch (error) {
    console.error('Error submitting form:', error);
    return { success: false, error: 'Failed to submit form' };
  }
}
```

### Step 2: Update Form Component
Modify `app/apply/page.tsx` to use the server action:

```typescript
import { submitForm } from '@/lib/actions';

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  try {
    const result = await submitForm(formData);
    
    if (result.success) {
      alert('Thank you for your application! You will receive a confirmation email with a PDF deck and FAQs shortly.');
      // Optionally redirect to a thank you page
      // router.push('/apply/thank-you');
    } else {
      alert('There was an error submitting your application. Please try again later.');
    }
  } catch (error) {
    console.error('Error submitting form:', error);
    alert('There was an error submitting your application. Please try again later.');
  }
};
```

## Recommendation
I recommend using **Solution 1 (API Routes)** as it:
1. Follows established Next.js patterns
2. Clearly separates client and server concerns
3. Is well-documented and widely used
4. Provides clear error handling
5. Is compatible with all Next.js versions

This approach will resolve your build errors while maintaining a clean, maintainable codebase.
