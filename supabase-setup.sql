-- Enable Row Level Security (RLS) on Enquiries table
ALTER TABLE public."Enquiries" ENABLE ROW LEVEL SECURITY;

-- Create a policy to allow anyone to insert enquiries
-- This is appropriate for a contact form where users submit their information
CREATE POLICY "Allow public inserts on Enquiries"
ON public."Enquiries"
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Optional: Create a policy to allow admins to view all enquiries
-- You can create a separate service role policy for this
CREATE POLICY "Allow authenticated users to view all Enquiries"
ON public."Enquiries"
FOR SELECT
TO authenticated
USING (true);

-- Note: The 'anon' role (used by your website visitors) can only INSERT
-- The 'authenticated' role (for logged-in users) can INSERT and SELECT
-- For production, you might want to add rate limiting or additional validation
