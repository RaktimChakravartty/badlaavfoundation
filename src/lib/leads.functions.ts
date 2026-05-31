import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { supabaseAdmin } from "@/integrations/supabase/client.server";

const LeadSchema = z.object({
  kind: z.string().min(1).max(60),
  payload: z.record(z.string().min(1).max(60), z.string().max(4000)),
});

// Stores a lead / contact / programme-interest submission in Lovable Cloud.
// Writes via the admin client (service role) so no public table grants are
// needed; input is validated above before it ever reaches the database.
export const submitLead = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => LeadSchema.parse(data))
  .handler(async ({ data }) => {
    const { error } = await supabaseAdmin.from("leads").insert({
      kind: data.kind,
      payload: data.payload,
    });
    if (error) {
      console.error("lead insert failed", error.message);
      throw new Error("Could not save submission");
    }
    return { ok: true };
  });
