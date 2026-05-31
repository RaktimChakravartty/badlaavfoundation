import { useState } from "react";
import { Check, Copy } from "lucide-react";

type CopyFieldProps = {
  label: string;
  value: string;
  mono?: boolean;
};

// A labelled value row with a copy-to-clipboard control. Used for bank
// transfer details so donors can copy each field cleanly on any device.
export function CopyField({ label, value, mono = true }: CopyFieldProps) {
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* clipboard unavailable: silently ignore */
    }
  };

  return (
    <div
      className="flex items-center justify-between gap-3 border-b pb-2.5"
      style={{ borderColor: "var(--stone)" }}
    >
      <div className="flex min-w-0 flex-col gap-0.5">
        <dt
          className="text-xs uppercase tracking-widest"
          style={{ color: "var(--wg)" }}
        >
          {label}
        </dt>
        <dd
          className={`truncate ${mono ? "font-mono" : ""}`}
          style={{ color: "var(--ink)" }}
        >
          {value}
        </dd>
      </div>
      <button
        type="button"
        onClick={onCopy}
        aria-label={copied ? `${label} copied` : `Copy ${label}`}
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border transition-colors hover:bg-black/5"
        style={{ borderColor: "var(--stone)" }}
      >
        {copied ? (
          <Check className="h-4 w-4" strokeWidth={2} style={{ color: "var(--teal)" }} />
        ) : (
          <Copy className="h-4 w-4" strokeWidth={1.8} style={{ color: "var(--wg)" }} />
        )}
      </button>
    </div>
  );
}