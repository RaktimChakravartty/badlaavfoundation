import { createFileRoute } from "@tanstack/react-router";
import {
  Sprout,
  Trophy,
  Laptop,
  Target,
  Music,
  Swords,
  BookText,
  Palette,
  Flower2,
  ClipboardCheck,
  GraduationCap,
  UserCheck,
  Users2,
  type LucideIcon,
} from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Reveal } from "@/components/layout/Reveal";
import { PhotoFigure } from "@/components/media/PhotoFigure";
import { EvidenceCard } from "@/components/media/EvidenceCard";
import { IconBadge } from "@/components/ui/IconBadge";
import { LeadForm } from "@/components/forms/LeadForm";
import { PHOTOS, BRAND } from "@/lib/images";

const ACCENT = "var(--teal)";

export const Route = createFileRoute("/care")({
  head: () => ({
    meta: [
      { title: "CARE - Badlaav Foundation" },
      {
        name: "description",
        content:
          "CARE: eight Skill Clubs and the CHAMP co-facilitation model, with Project Shaurya and a 100% Class 10 pass rate.",
      },
      { property: "og:title", content: "CARE - Badlaav Foundation" },
      { property: "og:description", content: "Eight Skill Clubs. The CHAMP model. Results." },
      { property: "og:url", content: "/care" },
      { property: "og:image", content: PHOTOS.session },
    ],
    links: [{ rel: "canonical", href: "/care" }],
  }),
  component: Page,
});

const clubs: { n: string; f: string; icon: LucideIcon }[] = [
  { n: "Sports", f: "Arjun Shah, B.P.Ed", icon: Trophy },
  { n: "Computer", f: "Vishnu Paswan, B.Tech CS", icon: Laptop },
  { n: "Aptitude", f: "Sheetal Chauhan, Defence prep", icon: Target },
  { n: "Music", f: "Skill Club", icon: Music },
  { n: "Boxing", f: "Skill Club", icon: Swords },
  { n: "Literary", f: "Skill Club", icon: BookText },
  { n: "Arts and Craft", f: "Skill Club", icon: Palette },
  { n: "Yoga", f: "Daily, external", icon: Flower2 },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="CARE / Creating A Road to Empowerment"
        accent={ACCENT}
        icon={Sprout}
        meta="Programme i / Skills"
        title="Eight Skill Clubs. One commitment each."
        intro="Every child commits to one Skill Club and shows up for it. The clubs build the practical and academic skills the home does not teach."
      />

      <section id="clubs" style={{ backgroundColor: "var(--cream)" }}>
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <SectionHeader num="02" eyebrow="The clubs" accent={ACCENT} title="The eight Skill Clubs." />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {clubs.map((c, i) => (
              <Reveal
                key={c.n}
                delay={i * 50}
                className="gradient-ring flex flex-col rounded-xl border bg-white p-6 transition-transform hover:-translate-y-1"
                style={{ borderColor: "var(--stone)", borderTop: `4px solid ${ACCENT}` }}
              >
                <IconBadge icon={c.icon} accent={ACCENT} />
                <h3 className="mt-4" style={{ color: "var(--ink)" }}>{c.n}</h3>
                <p className="mt-1 text-xs uppercase tracking-widest" style={{ color: ACCENT }}>{c.f}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="champ" style={{ backgroundColor: "var(--cream2)" }}>
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <SectionHeader num="03" eyebrow="The model" accent={ACCENT} title="The CHAMP co-facilitation model.">
              <p className="text-lg" style={{ color: "var(--wg)" }}>
                Each facilitator works alongside trained child mentors who can
                lead the session themselves. So a session happens even when the
                facilitator does not arrive.
              </p>
            </SectionHeader>
            <PhotoFigure
              src={PHOTOS.field2}
              alt="A Skill Club session co-facilitated by child mentors"
              caption="FIG. 01 / SKILL CLUB SESSION"
              aspect="4 / 5"
              tag={
                <>
                  <Users2 className="h-3.5 w-3.5" strokeWidth={1.8} />
                  Child mentors co-leading
                </>
              }
            />
          </div>
        </div>
      </section>

      <section id="results" style={{ backgroundColor: "var(--cream)" }}>
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <SectionHeader num="04" eyebrow="Results" accent={ACCENT} title="What CARE has produced." />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <EvidenceCard figure="4 of 7" label="cleared the written examination" proof="Through Project Shaurya." accent={ACCENT} icon={ClipboardCheck} />
            <EvidenceCard figure="100%" label="first Class 10 batch passed" proof="The first cohort to sit boards from the home." accent={ACCENT} icon={GraduationCap} delay={70} />
            <EvidenceCard figure="3" label="alumni facilitators" proof="Returned to run the clubs." accent={ACCENT} icon={UserCheck} delay={140} />
          </div>
        </div>
      </section>

      <section id="interest" style={{ backgroundColor: "var(--cream2)" }}>
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <SectionHeader num="05" eyebrow="Get involved" accent={ACCENT} title="Lead or support a Skill Club." />
          <Reveal className="flow-ring mt-12 overflow-hidden rounded-2xl bg-white">
            <div className="grid lg:grid-cols-2">
              <div className="relative min-h-[260px]">
                <img
                  src={BRAND.skills}
                  alt="A still life of instruments, tools and materials from the Skill Clubs"
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div
                  className="absolute inset-0 flex flex-col justify-end p-7 lg:p-9"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent 30%, color-mix(in oklab, var(--ink) 78%, transparent) 100%)",
                  }}
                >
                  <p className="font-display text-2xl font-semibold leading-tight sm:text-3xl" style={{ color: "var(--cream)" }}>
                    Have a skill to teach, or want to fund a club?
                  </p>
                  <p className="mt-2 max-w-sm text-sm" style={{ color: "rgba(247,243,235,0.82)" }}>
                    Tell us and we will find the right fit. One child, one Skill
                    Club, one steady commitment.
                  </p>
                </div>
              </div>
              <div className="p-2 sm:p-4">
                <LeadForm
                  kind="care-interest"
                  title="Express interest"
                  accent={ACCENT}
                  submitLabel="Send interest"
                  fields={[
                    { name: "name", label: "Name", required: true },
                    { name: "email", label: "Email", type: "email", required: true },
                    { name: "skill", label: "Skill or club of interest" },
                    { name: "message", label: "Message", type: "textarea" },
                  ]}
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
