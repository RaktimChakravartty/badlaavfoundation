import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import { SpectrumSpine } from "./SpectrumSpine";
import type { LucideIcon } from "lucide-react";

type PageHeroProps = {
  id?: string;
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  accent?: string;
  children?: ReactNode;
  icon?: LucideIcon;
  /** Left-hand case-file reference shown in the meta band. */
  kicker?: string;
  /** Right-hand reference shown in the meta band. */
  meta?: string;
};

// Cream inner-page header with a thin "case file" meta band above the title.
// The band, the accent dot and the per-page accent colour make each header
// read a little differently from its body while keeping one templatised
// system across every page. Closes with the single page SpectrumSpine.
export function PageHero({
  id = "intro",
  eyebrow,
  title,
  intro,
  accent = "var(--teal)",
  children,
  icon: Icon,
  kicker = "Badlaav Foundation",
  meta = "Dehradun / Est. 2019",
}: PageHeroProps) {
  return (
    <section id={id} style={{ backgroundColor: "var(--cream2)" }}>
      <div className="mx-auto max-w-7xl px-5 pb-12 pt-12 lg:px-8 lg:pb-16 lg:pt-16">
        <Reveal className="dossier-meta">
          <span className="dossier-ref">
            <span className="dossier-dot" style={{ backgroundColor: accent }} />
            {kicker}
          </span>
          <span className="dossier-ref">{meta}</span>
        </Reveal>
        <Reveal className="mt-8 max-w-4xl lg:mt-10" delay={60}>
          <span className="eyebrow" style={{ color: accent }}>
            {Icon ? <Icon className="h-4 w-4" strokeWidth={1.6} /> : null}
            {eyebrow}
          </span>
          <h1 className="mt-5">{title}</h1>
          {intro ? (
            <p className="mt-6 max-w-2xl text-lg" style={{ color: "var(--wg)" }}>
              {intro}
            </p>
          ) : null}
          {children}
        </Reveal>
      </div>
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SpectrumSpine />
      </div>
    </section>
  );
}
