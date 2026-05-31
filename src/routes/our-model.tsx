import { createFileRoute, Link } from "@tanstack/react-router";
import { Users } from "lucide-react";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { PageHero } from "@/components/layout/PageHero";
import { Reveal } from "@/components/layout/Reveal";
import { PhotoFigure } from "@/components/media/PhotoFigure";
import { EvidenceCard } from "@/components/media/EvidenceCard";
import { PHOTOS } from "@/lib/images";

export const Route = createFileRoute("/our-model")({
  head: () => ({
    meta: [
      { title: "Our Model - Badlaav Foundation" },
      {
        name: "description",
        content:
          "Badlaav is a method, not a service: the CHAMP co-facilitation model and a three-programme progression built to keep running without its founders.",
      },
      { property: "og:title", content: "Our Model - Badlaav Foundation" },
      { property: "og:description", content: "A system designed to run without us." },
      { property: "og:url", content: "/our-model" },
    ],
    links: [{ rel: "canonical", href: "/our-model" }],
  }),
  component: Page,
});


const steps = [
  {
    name: "CARE builds skills",
    desc: "Eight Skill Clubs give children the practical, academic and creative skills the home does not teach.",
    accent: "var(--teal)",
  },
  {
    name: "Dagdya builds governance",
    desc: "A child-led Bal Sabha with seven ministries hands children ownership of their own community.",
    accent: "var(--plum)",
  },
  {
    name: "Camp Infinity builds exposure",
    desc: "Camps and outings move learning beyond the walls of the home and into the world.",
    accent: "var(--saffron)",
  },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Our Model"
        accent="var(--teal)"
        title={
          <>
            A method, not a service. Built to run{" "}
            <span className="" style={{ color: "var(--lime)" }}>
              without us.
            </span>
          </>
        }
        intro="Badlaav is a system. The children inside it are the ones who keep it running, which is exactly why it survives a missing founder, a missing facilitator, or a missing year of funding."
      />

      <section id="champ" style={{ backgroundColor: "var(--cream)" }}>
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <SectionHeader
              num="02"
              eyebrow="The engine"
              accent="var(--teal)"
              title="The CHAMP co-facilitation model."
            >
              <div className="space-y-4 text-lg" style={{ color: "var(--wg)" }}>
                <p>
                  Every Skill Club pairs an adult facilitator with trained child
                  mentors, so leadership is shared from the start.
                </p>
                <p>
                  The child mentors are not assistants. They can run the session
                  on their own, which means the learning never depends on a
                  single adult being in the room.
                </p>
                <p className="font-display text-2xl" style={{ color: "var(--ink)" }}>
                  When the facilitator does not arrive, the session still
                  happens.
                </p>
              </div>
            </SectionHeader>
            <PhotoFigure
              src={PHOTOS.field2}
              alt="Child mentors co-facilitating a Skill Club session"
              caption="FIG. 01 / CHAMP CO-FACILITATION"
              aspect="4 / 5"
            />
          </div>
        </div>
      </section>

      <section id="progression" style={{ backgroundColor: "var(--cream2)" }}>
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <SectionHeader
            num="03"
            eyebrow="One progression"
            accent="var(--saffron)"
            title="Three programmes that build on each other."
          />
          <ol className="mt-12 space-y-5 lg:max-w-4xl">
            {steps.map((s, i) => (
              <Reveal
                key={s.name}
                delay={i * 80}
                className="flex gap-5 rounded-xl border bg-white p-6 lg:p-7"
                style={{ borderColor: "var(--stone)", borderLeft: `4px solid ${s.accent}` }}
              >
                <span className="font-display text-3xl font-semibold" style={{ color: s.accent }}>
                  0{i + 1}
                </span>
                <div>
                  <h3 style={{ color: "var(--ink)" }}>{s.name}</h3>
                  <p className="mt-2 text-base" style={{ color: "var(--wg)" }}>
                    {s.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section id="leaders" style={{ backgroundColor: "var(--cream)" }}>
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <SectionHeader
              num="04"
              eyebrow="Who runs it"
              accent="var(--plum)"
              title="The children are the leaders, not the recipients."
            >
              <p className="text-lg" style={{ color: "var(--wg)" }}>
                Children elect their own ministers, run their own clubs, and mentor
                the children who come after them. Ownership is the point. A child
                who leads a session learns more than a child who attends one.
              </p>
            </SectionHeader>
            <PhotoFigure
              src={PHOTOS.field6}
              alt="Children leading an activity for younger children at the home"
              caption="FIG. 02 / CHILDREN LEADING"
              aspect="4 / 3"
              tag={
                <>
                  <Users className="h-3.5 w-3.5" strokeWidth={1.8} />
                  Led by children
                </>
              }
            />
          </div>
        </div>
      </section>

      <section id="resilience" style={{ backgroundColor: "var(--ink)", color: "var(--cream)" }}>
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
          <Reveal className="max-w-4xl">
            <span className="eyebrow" style={{ color: "var(--lime)" }}>
              The test of a system
            </span>
            <p className="mt-6 font-display text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
              A session survives a missing facilitator because the children were
              built to{" "}
              <span className="" style={{ color: "var(--lime)" }}>
                lead it themselves.
              </span>
            </p>
          </Reveal>
        </div>
      </section>

      <section id="outcomes" style={{ backgroundColor: "var(--cream2)" }}>
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <SectionHeader
            num="06"
            eyebrow="What it produces"
            accent="var(--lime)"
            title="Outcomes, not activity."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <EvidenceCard figure="8" label="Skill Clubs" proof="Each child commits to one club." />
            <EvidenceCard figure="7" label="ministries" proof="Run by elected child ministers." delay={70} />
            <EvidenceCard figure="4 of 7" label="cleared the written examination" proof="Through Project Shaurya." delay={140} />
            <EvidenceCard figure="3" label="alumni facilitators" proof="Returned to lead the system." delay={210} />
          </div>
          <Reveal className="mt-10 flex flex-wrap gap-3">
            <Link to="/care" className="btn btn-outline">Explore CARE</Link>
            <Link to="/dagdya" className="btn btn-outline">Explore Dagdya</Link>
            <Link to="/camp-infinity" className="btn btn-outline">Explore Camp Infinity</Link>
            <Link to="/support" className="btn btn-lime">Support our work</Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
