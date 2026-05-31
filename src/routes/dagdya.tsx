import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Landmark,
  HeartPulse,
  Trophy,
  GraduationCap,
  Drama,
  Scale,
  ShieldCheck,
  Cpu,
  Shield,
  Vote,
  type LucideIcon,
} from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Reveal } from "@/components/layout/Reveal";
import { PhotoFigure } from "@/components/media/PhotoFigure";
import { IconBadge } from "@/components/ui/IconBadge";
import { PHOTOS } from "@/lib/images";

const ACCENT = "var(--plum)";

export const Route = createFileRoute("/dagdya")({
  head: () => ({
    meta: [
      { title: "Dagdya - Badlaav Foundation" },
      { name: "description", content: "Dagdya: a child-led Bal Sabha with seven ministries and four houses. Children run it. Nobody appointed them." },
      { property: "og:title", content: "Dagdya - Badlaav Foundation" },
      { property: "og:description", content: "Child-led governance, elected by peers." },
      { property: "og:url", content: "/dagdya" },
      { property: "og:image", content: PHOTOS.field4 },
    ],
    links: [{ rel: "canonical", href: "/dagdya" }],
  }),
  component: Page,
});

const ministries: { n: string; d: string; icon: LucideIcon }[] = [
  { n: "Health", d: "Tracks wellbeing and hygiene drives.", icon: HeartPulse },
  { n: "Sports", d: "Runs fixtures and the sports calendar.", icon: Trophy },
  { n: "Education", d: "Peer study support and reading.", icon: GraduationCap },
  { n: "Cultural", d: "Meenakshi runs the cultural calendar.", icon: Drama },
  { n: "Legal", d: "Rights awareness and grievance support.", icon: Scale },
  { n: "Discipline", d: "Peer-led conduct and routines.", icon: ShieldCheck },
  { n: "Technology", d: "Computer access and digital skills.", icon: Cpu },
];

const houses = [
  { n: "Gaura Devi", c: "var(--teal)" },
  { n: "Tilu Rauteli", c: "var(--terra)" },
  { n: "Bachendri Pal", c: "var(--sky)" },
  { n: "Basanti Bisht", c: "var(--saffron)" },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Dagdya / Leadership and Governance"
        accent={ACCENT}
        icon={Landmark}
        meta="Programme ii / Governance"
        title={<>Children run this. <span style={{ color: "var(--lime)" }}>Nobody appointed them.</span></>}
        intro="Dagdya is a child-led Bal Sabha. Children stand for election, win the trust of their peers, and govern their own community through seven ministries."
      />

      <section id="balsabha" style={{ backgroundColor: "var(--cream)" }}>
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <SectionHeader num="02" eyebrow="The assembly" accent={ACCENT} title="The Bal Sabha and its elections.">
              <p className="text-lg" style={{ color: "var(--wg)" }}>
                Candidates campaign, peers vote, and ministers take office. The
                process is real, and so is the responsibility that follows it.
              </p>
            </SectionHeader>
            <PhotoFigure
              src={PHOTOS.field4}
              alt="Children participating in a Bal Sabha session"
              caption="FIG. 01 / BAL SABHA IN SESSION"
              aspect="4 / 5"
              tag={
                <>
                  <Vote className="h-3.5 w-3.5" strokeWidth={1.8} />
                  Elected by peers
                </>
              }
            />
          </div>
        </div>
      </section>

      <section id="ministries" style={{ backgroundColor: "var(--cream2)" }}>
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <SectionHeader num="03" eyebrow="Seven ministries" accent={ACCENT} title="What each ministry does." />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {ministries.map((m, i) => (
              <Reveal
                key={m.n}
                delay={i * 50}
                className="gradient-ring flex flex-col rounded-xl border bg-white p-6 transition-transform hover:-translate-y-1"
                style={{ borderColor: "var(--stone)", borderTop: `4px solid ${ACCENT}` }}
              >
                <IconBadge icon={m.icon} accent={ACCENT} />
                <h3 className="mt-4" style={{ color: "var(--ink)" }}>{m.n}</h3>
                <p className="mt-2 text-sm" style={{ color: "var(--wg)" }}>{m.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="houses" style={{ backgroundColor: "var(--cream)" }}>
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <SectionHeader num="04" eyebrow="Four houses" accent={ACCENT} title="Named for women who led." >
            <p className="text-lg" style={{ color: "var(--wg)" }}>
              The houses compete through the year and carry the names of women
              from Uttarakhand who led in their own right.
            </p>
          </SectionHeader>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {houses.map((h, i) => (
              <Reveal
                key={h.n}
                delay={i * 60}
                className="gradient-ring flex items-center gap-4 rounded-xl border bg-white p-6 transition-transform hover:-translate-y-1"
                style={{ borderColor: "var(--stone)", borderTop: `4px solid ${h.c}` }}
              >
                <IconBadge icon={Shield} accent={h.c} />
                <h3 style={{ color: "var(--ink)" }}>{h.n}</h3>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="stand" style={{ backgroundColor: "var(--ink)", color: "var(--cream)" }}>
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
          <Reveal className="gradient-ring max-w-3xl rounded-2xl p-8 lg:p-10" style={{ backgroundColor: "rgba(247,243,235,0.04)" }}>
            <span className="eyebrow" style={{ color: "var(--lime)" }}>
              <Vote className="h-4 w-4" strokeWidth={1.6} />
              A government that children run
            </span>
            <h2 className="mt-6" style={{ color: "var(--cream)" }}>
              Ministers are elected, not assigned.{" "}
              <span style={{ color: "var(--lime)" }}>The responsibility is real.</span>
            </h2>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/stories" className="btn btn-lime">Read what they have done</Link>
              <Link to="/get-involved" className="btn btn-ghost">Get involved</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
