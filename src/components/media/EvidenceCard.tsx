import { Reveal } from "@/components/layout/Reveal";
import type { LucideIcon } from "lucide-react";

type EvidenceCardProps = {
  figure: string;
  label: string;
  proof: string;
  accent?: string;
  delay?: number;
  icon?: LucideIcon;
};

// Bordered evidence card: hairline border, large Rajdhani figure, label,
// one line of proof or source. Replaces any gradient stat band.
export function EvidenceCard({ figure, label, proof, accent, delay, icon: Icon }: EvidenceCardProps) {
  return (
    <Reveal
      className="evidence gradient-ring flex flex-col transition-transform duration-200 hover:-translate-y-1"
      delay={delay}
      style={accent ? { borderTop: `3px solid ${accent}` } : undefined}
    >
      {Icon ? (
        <Icon
          className="mb-4 h-6 w-6"
          strokeWidth={1.6}
          style={{ color: accent ?? "var(--teal)" }}
        />
      ) : null}
      <span className="evidence-figure">{figure}</span>
      <span
        className="mt-3 text-xs font-medium uppercase tracking-widest"
        style={{ color: "var(--ink)" }}
      >
        {label}
      </span>
      <span className="mt-2 text-sm leading-relaxed" style={{ color: "var(--wg)" }}>
        {proof}
      </span>
    </Reveal>
  );
}
