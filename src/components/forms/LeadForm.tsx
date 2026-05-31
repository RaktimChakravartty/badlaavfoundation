import { useState } from "react";
import { Reveal } from "@/components/layout/Reveal";
import { submitLead } from "@/lib/leads.functions";

export type LeadField = {
  name: string;
  label: string;
  type?: "text" | "email" | "tel" | "textarea";
  required?: boolean;
  placeholder?: string;
};

type LeadFormProps = {
  kind: string;
  title: string;
  note?: string;
  fields: LeadField[];
  submitLabel?: string;
  accent?: string;
};

// Accessible lead-capture form. Submits to a server function backed by
// Lovable Cloud. Shows a confirmation state on success.
export function LeadForm({
  kind,
  title,
  note,
  fields,
  submitLabel = "Send",
  accent = "var(--lime)",
}: LeadFormProps) {
  const [values, setValues] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  const onChange = (name: string, v: string) =>
    setValues((s) => ({ ...s, [name]: v }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await submitLead({ data: { kind, payload: values } });
      setStatus("done");
    } catch {
      setStatus("error");
    }
  };

  if (status === "done") {
    return (
      <Reveal
        className="rounded-xl border p-7"
        style={{ borderColor: "var(--stone)", backgroundColor: "var(--cream2)" }}
      >
        <p className="font-display text-2xl" style={{ color: "var(--ink)" }}>
          Thank you.
        </p>
        <p className="mt-2 text-sm" style={{ color: "var(--wg)" }}>
          We have your message and will be in touch soon.
        </p>
      </Reveal>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-xl border p-6 lg:p-7"
      style={{ borderColor: "var(--stone)", backgroundColor: "var(--cream2)" }}
      aria-label={title}
    >
      <h3 style={{ color: "var(--ink)" }}>{title}</h3>
      {note ? (
        <p className="mt-2 text-sm" style={{ color: "var(--wg)" }}>
          {note}
        </p>
      ) : null}
      <div className="mt-5 grid gap-4">
        {fields.map((f) => (
          <label key={f.name} className="block">
            <span className="mb-1.5 block text-xs uppercase tracking-widest" style={{ color: "var(--ink)" }}>
              {f.label}
              {f.required ? " *" : ""}
            </span>
            {f.type === "textarea" ? (
              <textarea
                required={f.required}
                rows={4}
                value={values[f.name] ?? ""}
                onChange={(e) => onChange(f.name, e.target.value)}
                placeholder={f.placeholder}
                className="w-full rounded-lg border bg-white px-4 py-3 text-sm outline-none focus:border-[color:var(--ink)]"
                style={{ borderColor: "var(--stone)", color: "var(--ink)" }}
              />
            ) : (
              <input
                type={f.type ?? "text"}
                required={f.required}
                value={values[f.name] ?? ""}
                onChange={(e) => onChange(f.name, e.target.value)}
                placeholder={f.placeholder}
                className="w-full rounded-lg border bg-white px-4 py-3 text-sm outline-none focus:border-[color:var(--ink)]"
                style={{ borderColor: "var(--stone)", color: "var(--ink)" }}
              />
            )}
          </label>
        ))}
      </div>
      {status === "error" ? (
        <p className="mt-3 text-sm" style={{ color: "var(--terra)" }}>
          Something went wrong. Please try again or email us directly.
        </p>
      ) : null}
      <button
        type="submit"
        disabled={status === "sending"}
        className="btn btn-lime mt-5 disabled:opacity-60"
        style={{ backgroundColor: accent }}
      >
        {status === "sending" ? "Sending..." : submitLabel}
      </button>
    </form>
  );
}
