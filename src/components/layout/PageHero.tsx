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
};

// Cream inner-page hero, left-anchored, with the single page SpectrumSpine.
export function PageHero({
  id = "intro",
  eyebrow,
  title,
  intro,
  accent = "var(--teal)",
  children,
  icon: Icon,
}: PageHeroProps) {
  return (
    <section id={id} style={{ backgroundColor: "var(--cream2)" }}>
      <div className="mx-auto max-w-7xl px-5 pb-12 pt-16 lg:px-8 lg:pb-16 lg:pt-24">
        <Reveal className="max-w-4xl">
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
