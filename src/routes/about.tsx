import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Reveal } from "@/components/layout/Reveal";
import { PhotoFigure } from "@/components/media/PhotoFigure";
import { LeadForm } from "@/components/forms/LeadForm";
import { PHOTOS, BRAND } from "@/lib/images";
import { MISSION } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About - Badlaav Foundation" },
      {
        name: "description",
        content:
          "Founded in 2019 by Pawan Singh Mehta and Sakshi, Badlaav Foundation works inside government Child Care Institutions in Dehradun.",
      },
      { property: "og:title", content: "About - Badlaav Foundation" },
      { property: "og:description", content: "The story, the mission, and the people since 2019." },
      { property: "og:url", content: "/about" },
      { property: "og:image", content: PHOTOS.hero },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: Page,
});


const values = [
  { t: "Evidence over appeal", d: "We show results, not sentiment." },
  { t: "Children as leaders", d: "Ownership is the method, not a slogan." },
  { t: "Built to outlast us", d: "The work continues without its founders." },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="About"
        accent="var(--teal)"
        title="Working inside the system since 2019."
        intro="Badlaav Foundation is a registered nonprofit trust in Dehradun, Uttarakhand, working inside government Child Care Institutions."
      />

      <section id="mission" style={{ backgroundColor: "var(--cream)" }}>
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <SectionHeader
              num="02"
              eyebrow="Mission"
              accent="var(--teal)"
              title="Why Badlaav exists."
            >
              <p className="text-lg" style={{ color: "var(--wg)" }}>
                {MISSION} We build the skills, leadership and exposure that let a
                child leave care ready for a life of their own.
              </p>
            </SectionHeader>
            <PhotoFigure
              src={PHOTOS.hero}
              alt="Children at a Badlaav Foundation home in Dehradun"
              caption="FIG. 01 / DEHRADUN, UTTARAKHAND"
              aspect="4 / 3"
            />
          </div>
        </div>
      </section>

      <section id="inside" style={{ backgroundColor: "var(--cream2)" }}>
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <SectionHeader
              num="03"
              eyebrow="The setting"
              accent="var(--plum)"
              title="What working inside government care means."
            >
              <p className="text-lg" style={{ color: "var(--wg)" }}>
                We run our programmes inside government Child Care Institutions,
                reaching 250+ children. We do not build parallel shelters. We
                strengthen the system that already holds these children.
              </p>
            </SectionHeader>
            <PhotoFigure
              src={BRAND.valley}
              alt="The Dehradun valley in Uttarakhand, where Badlaav Foundation works"
              caption="VIEW / DEHRADUN VALLEY, UTTARAKHAND"
              aspect="4 / 3"
            />
          </div>
        </div>
      </section>

      <section id="people" style={{ backgroundColor: "var(--cream)" }}>
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <SectionHeader
            num="04"
            eyebrow="The people"
            accent="var(--saffron)"
            title="Co-founded, and co-run."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:max-w-4xl">
            {[
              { n: "Pawan Singh Mehta", r: "Co-founder" },
              { n: "Sakshi", r: "Co-founder" },
            ].map((p, i) => (
              <Reveal
                key={p.n}
                delay={i * 80}
                className="rounded-xl border bg-white p-7"
                style={{ borderColor: "var(--stone)" }}
              >
                <h3 style={{ color: "var(--ink)" }}>{p.n}</h3>
                <p className="mt-1 text-xs uppercase tracking-widest" style={{ color: "var(--saffron)" }}>
                  {p.r}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="values" style={{ backgroundColor: "var(--cream2)" }}>
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <SectionHeader
            num="05"
            eyebrow="Values"
            accent="var(--lime)"
            title="What we hold to."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal
                key={v.t}
                delay={i * 80}
                className="rounded-xl border bg-white p-7"
                style={{ borderColor: "var(--stone)", borderTop: "4px solid var(--lime)" }}
              >
                <h3 style={{ color: "var(--ink)" }}>{v.t}</h3>
                <p className="mt-2 text-sm" style={{ color: "var(--wg)" }}>{v.d}</p>
              </Reveal>
            ))}
          </div>
          <Reveal as="p" className="mt-8 text-sm uppercase tracking-widest" style={{ color: "var(--wg)" }}>
            SDG alignment: 3, 4, 5, 8, 11
          </Reveal>
        </div>
      </section>

      <section id="contact" style={{ backgroundColor: "var(--cream)" }}>
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <SectionHeader
              num="06"
              eyebrow="Contact"
              accent="var(--teal)"
              title="Talk to us."
            >
              <p className="text-lg" style={{ color: "var(--wg)" }}>
                Questions about our work, a visit, or a partnership? Send a note
                and we will reply.
              </p>
            </SectionHeader>
            <LeadForm
              kind="contact"
              title="Send a message"
              submitLabel="Send message"
              fields={[
                { name: "name", label: "Name", required: true },
                { name: "email", label: "Email", type: "email", required: true },
                { name: "message", label: "Message", type: "textarea", required: true },
              ]}
            />
          </div>
        </div>
      </section>
    </>
  );
}
