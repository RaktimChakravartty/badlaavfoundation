import type { ReactNode } from "react";
import { PageHero } from "./PageHero";
import { SectionHeader } from "./SectionHeader";
import type { LucideIcon } from "lucide-react";

export type LegalSection = {
  num: string;
  eyebrow: string;
  title: string;
  icon: LucideIcon;
  accent?: string;
  body: ReactNode;
};

type LegalDocProps = {
  eyebrow: string;
  heroIcon: LucideIcon;
  title: string;
  intro: string;
  updated: string;
  sections: LegalSection[];
};

// Shared brand-styled layout for legal pages (Privacy, Terms, Refund). Keeps
// the field-report system consistent: cream surfaces, iconized section headers
// and readable prose. Alternating cream tones separate sections.
export function LegalDoc({
  eyebrow,
  heroIcon,
  title,
  intro,
  updated,
  sections,
}: LegalDocProps) {
  return (
    <>
      <PageHero eyebrow={eyebrow} icon={heroIcon} accent="var(--teal)" title={title} intro={intro}>
        <p className="mt-5 text-xs uppercase tracking-widest" style={{ color: "var(--wg)" }}>
          Last updated {updated}
        </p>
      </PageHero>

      {sections.map((s, i) => (
        <section
          key={s.num}
          style={{ backgroundColor: i % 2 === 0 ? "var(--cream)" : "var(--cream2)" }}
        >
          <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
            <SectionHeader
              num={s.num}
              eyebrow={s.eyebrow}
              title={s.title}
              icon={s.icon}
              accent={s.accent ?? "var(--teal)"}
            />
            <div
              className="legal-prose mt-8 max-w-3xl space-y-4 text-base leading-relaxed"
              style={{ color: "var(--wg)" }}
            >
              {s.body}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}