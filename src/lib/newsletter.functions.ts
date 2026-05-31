import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { supabaseAdmin } from "@/integrations/supabase/client.server";

const NewsletterSchema = z.object({
  email: z.string().trim().email().max(255),
});

// Captures a newsletter sign-up in Lovable Cloud. Writes via the admin client
// (service role) so no public table grants are needed; the email is validated
// above before it reaches the database. Duplicate emails are treated as success
// so the visitor always sees a friendly confirmation.
export const subscribeNewsletter = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => NewsletterSchema.parse(data))
  .handler(async ({ data }) => {
    const email = data.email.toLowerCase();
    const { error } = await supabaseAdmin
      .from("newsletter_subscribers")
      .insert({ email });
    if (error && error.code !== "23505") {
      console.error("newsletter insert failed", error.message);
      throw new Error("Could not save subscription");
    }
    return { ok: true };
  });