# NeonDB Database Setup Guide

## Required Table Creation

You need to execute the following SQL in your NeonDB console to create the required table:

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

## Homepage Leads Table

To capture initial interest from the homepage, a separate table is used.

```sql
CREATE TABLE homepage_leads (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50) NOT NULL,
  location VARCHAR(255),
  interests TEXT,
  intent TEXT,
  submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## How to Check if Table Exists

### Option 1: Using NeonDB Console
1. Log into your NeonDB dashboard at https://console.neon.tech/
2. Navigate to your database
3. Go to the SQL Editor
4. Run this query to check if the table exists:

```sql
SELECT table_name 
FROM information_schema.tables 
WHERE table_schema = 'public' 
AND table_name = 'form_submissions';
```

If the table exists, you'll see `form_submissions` in the results.

### Option 2: Check Table Structure
To see the complete table structure:

```sql
SELECT column_name, data_type, is_nullable, column_default
FROM information_schema.columns
WHERE table_name = 'form_submissions'
ORDER BY ordinal_position;
```

### Option 3: Using psql (if you have it installed)
```bash
psql "your_database_connection_string"
\dt form_submissions
```

## Verification Steps

1. **Check if table exists**: Run the first query above
2. **Verify table structure**: Run the second query to ensure all columns are present
3. **Test connection**: Try inserting a test record:

```sql
INSERT INTO form_submissions (
  full_name, mobile, email, pledge
) VALUES (
  'Test User', '1234567890', 'test@example.com', true
);
```

4. **Check the test record**:
```sql
SELECT * FROM form_submissions WHERE full_name = 'Test User';
```

5. **Clean up test data**:
```sql
DELETE FROM form_submissions WHERE full_name = 'Test User';
```

## Environment Variables Check

Make sure your `.env.local` file contains:

```env
DATABASE_URL=your_actual_neon_connection_string
```

The connection string should look like:
```
postgresql://username:password@host/database?sslmode=require
```

## Common Issues

1. **Table doesn't exist**: Run the CREATE TABLE statement
2. **Connection issues**: Verify your DATABASE_URL is correct
3. **SSL errors**: Ensure `sslmode=require` is in your connection string
4. **Permission errors**: Make sure your database user has CREATE and INSERT permissions

## Next Steps After Table Creation

1. Test the form submission in your application
2. Check that data is being inserted correctly
3. Verify email functionality is working
4. Monitor logs for any errors

Let me know if you encounter any issues during the setup process!
