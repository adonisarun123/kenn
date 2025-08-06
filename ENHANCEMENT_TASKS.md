# Form Enhancement Tasks - Prioritized Action Plan

## Task Overview
Based on the requirements, here are the tasks organized by priority and logical implementation order:

## Priority 1: Core Form Functionality Issues
### Task 1.1: Fix Form Input Visibility ⚠️ **CRITICAL**
- **Issue**: Form inputs are white on white background, making them invisible
- **Action**: Update CSS/styling for form inputs to have proper contrast
- **Impact**: Users can't see what they're typing
- **Status**: ✅ **COMPLETED**

### Task 1.2: Add Form Validation ⚠️ **HIGH**
- **Issue**: No validation for required fields in the application form
- **Action**: Implement client-side and server-side validation
- **Impact**: Prevents incomplete/invalid submissions
- **Status**: ✅ **COMPLETED**

## Priority 2: Email Configuration Issues
### Task 2.1: Complete Lead Email Data ⚠️ **HIGH**
- **Issue**: Lead notification email doesn't include all submitted form data
- **Action**: Update email template to include all form fields
- **Impact**: Sales team gets incomplete information
- **Status**: ✅ **COMPLETED**

### Task 2.2: Update Lead Email Recipient ⚠️ **MEDIUM**
- **Issue**: Lead emails are being sent to the same email as sender
- **Action**: Add separate environment variable for sales team email
- **Impact**: Proper routing of lead notifications
- **Status**: ✅ **COMPLETED**

## Priority 3: Homepage Form Integration
### Task 3.1: Homepage Form Validation & Redirect ⚠️ **MEDIUM**
- **Issue**: Homepage form redirects to /apply without validation or completion check
- **Action**: Add validation before redirect, ensure form completion
- **Impact**: Better user experience and data integrity
- **Status**: ✅ **COMPLETED**

### Task 3.2: Homepage Form Data Persistence ⚠️ **MEDIUM**
- **Issue**: Homepage form data is not saved to database
- **Action**: Create API endpoint for homepage form submission
- **Impact**: Capture all leads, not just application form leads
- **Status**: ✅ **COMPLETED**

### Task 3.3: Homepage Form Email Notifications ⚠️ **MEDIUM**
- **Issue**: Homepage form doesn't send lead emails
- **Action**: Implement email notifications for homepage form submissions
- **Impact**: Sales team gets notified of all leads
- **Status**: ✅ **COMPLETED**

## Implementation Strategy

### Phase 1: Critical UI/UX Fixes
1. **Fix form input visibility** (Task 1.1)
2. **Add form validation** (Task 1.2)

### Phase 2: Email System Enhancement
3. **Complete lead email data** (Task 2.1)
4. **Update email recipient** (Task 2.2)

### Phase 3: Homepage Integration
5. **Homepage form validation** (Task 3.1)
6. **Homepage form data persistence** (Task 3.2)
7. **Homepage form email notifications** (Task 3.3)

## Technical Requirements

### Environment Variables Needed
```env
# Current
SMTP_FROM=sender@domain.com
SMTP_FROM_NAME="Kenn EcoEstates"

# New Addition
SALES_EMAIL=sales@kennecoestates.com  # New variable for lead notifications
```

### Files to Modify
- `app/apply/page.tsx` - Form styling and validation
- `lib/email.ts` - Email templates and recipient configuration
- `app/page.tsx` - Homepage form (need to locate and analyze)
- `app/api/submit-form/route.ts` - Enhanced email data
- New: `app/api/homepage-form/route.ts` - Homepage form submission

### Database Considerations
- Current `form_submissions` table handles application form
- May need separate table or additional fields for homepage form data

## Success Criteria
- [ ] Users can clearly see form inputs while typing
- [ ] All required fields are validated before submission
- [ ] Lead emails contain complete form data
- [ ] Sales team receives notifications at correct email address
- [ ] Homepage form validates before redirect
- [ ] Homepage form data is saved to database
- [ ] Homepage form triggers email notifications

## Next Steps
1. Start with Task 1.1 (Form Input Visibility) as it's the most critical user experience issue
2. Proceed through tasks in priority order
3. Update this document with ✅ **COMPLETED** status as each task is finished
4. Test each phase before moving to the next

---

**Last Updated**: Initial creation
**Total Tasks**: 7
**Completed**: 2/7
**In Progress**: 1/7
**Pending**: 4/7
