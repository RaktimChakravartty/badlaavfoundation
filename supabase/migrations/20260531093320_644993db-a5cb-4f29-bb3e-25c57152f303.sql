-- Submissions are written only by the server (service_role, which bypasses RLS).
-- Remove the permissive public INSERT policies and direct grants.
DROP POLICY IF EXISTS "Anyone can submit a lead" ON public.leads;
DROP POLICY IF EXISTS "Anyone can subscribe" ON public.newsletter_subscribers;

REVOKE INSERT ON public.leads FROM anon, authenticated;
REVOKE INSERT ON public.newsletter_subscribers FROM anon, authenticated;