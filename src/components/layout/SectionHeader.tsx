import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import type { LucideIcon } from "lucide-react";

type SectionHeaderProps = {
  num: string;
  eyebrow: string;
  title: ReactNode;
  accent?: string;
  className?: string;
  children?: ReactNode;
  icon?: LucideIcon;
};

// Major-section opener: oversized Rajdhani numeral, small uppercase eyebrow,
// large left-aligned Rajdhani headline. Left-anchored, never centred.
export function SectionHeader({
  num,
  eyebrow,
  title,
  accent = "var(--teal)",
  className,
  children,
  icon: Icon,
}: SectionHeaderProps) {
  return (
    <Reveal className={className}>
      <div className="flex items-start gap-5 lg:gap-7">
        <span className="section-num shrink-0">{num}</span>
        <div className="pt-2">
          <span className="eyebrow" style={{ color: accent }}>
            {Icon ? <Icon className="h-4 w-4" strokeWidth={1.6} /> : null}
            {eyebrow}
          </span>
          <h2 className="mt-3 max-w-3xl" style={{ color: "var(--ink)" }}>
            {title}
          </h2>
        </div>
      </div>
      {children ? <div className="mt-6 max-w-2xl">{children}</div> : null}
    </Reveal>
  );
}
