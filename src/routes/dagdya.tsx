import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Reveal } from "@/components/layout/Reveal";
import { PhotoFigure } from "@/components/media/PhotoFigure";
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


const ministries = [
  ["Health", "Tracks wellbeing and hygiene drives."],
  ["Sports", "Runs fixtures and the sports calendar."],
  ["Education", "Peer study support and reading."],
  ["Cultural", "Meenakshi runs the cultural calendar."],
  ["Legal", "Rights awareness and grievance support."],
  ["Discipline", "Peer-led conduct and routines."],
  ["Technology", "Computer access and digital skills."],
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
        title={<>Children run this. <span className="" style={{ color: "var(--lime)" }}>Nobody appointed them.</span></>}
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
            <PhotoFigure src={PHOTOS.field4} alt="Children participating in a Bal Sabha session" caption="FIG. 01 / BAL SABHA IN SESSION" aspect="4 / 5" />
          </div>
        </div>
      </section>

      <section id="ministries" style={{ backgroundColor: "var(--cream2)" }}>
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <SectionHeader num="03" eyebrow="Seven ministries" accent={ACCENT} title="What each ministry does." />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {ministries.map(([n, d], i) => (
              <Reveal key={n} delay={i * 50} className="rounded-xl border bg-white p-6" style={{ borderColor: "var(--stone)", borderTop: `4px solid ${ACCENT}` }}>
                <h3 style={{ color: "var(--ink)" }}>{n}</h3>
                <p className="mt-2 text-sm" style={{ color: "var(--wg)" }}>{d}</p>
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
              <Reveal key={h.n} delay={i * 60} className="rounded-xl border bg-white p-6" style={{ borderColor: "var(--stone)", borderTop: `4px solid ${h.c}` }}>
                <h3 style={{ color: "var(--ink)" }}>{h.n}</h3>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
