import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/PageHero";
import { Reveal } from "@/components/layout/Reveal";
import { PhotoFigure } from "@/components/media/PhotoFigure";
import { PHOTOS } from "@/lib/images";

export const Route = createFileRoute("/stories")({
  head: () => ({
    meta: [
      { title: "Stories - Badlaav Foundation" },
      {
        name: "description",
        content:
          "A photo-essay of real outcomes: Project Shaurya, the first Class 10 batch, an elected Cultural Minister, and the facilitators who came back.",
      },
      { property: "og:title", content: "Stories - Badlaav Foundation" },
      { property: "og:description", content: "Real outcomes, told as a field record." },
      { property: "og:url", content: "/stories" },
      { property: "og:image", content: PHOTOS.session },
    ],
    links: [{ rel: "canonical", href: "/stories" }],
  }),
  component: Page,
});

const stories = [
  {
    id: "shaurya",
    num: "01",
    fig: "FIG. 01 / APTITUDE CLUB, PROJECT SHAURYA",
    src: PHOTOS.session,
    alt: "Students preparing for a written examination in the aptitude club",
    title: "Four of seven cleared the written examination",
    lines: [
      "Project Shaurya prepares children for a competitive entrance examination.",
      "Four of seven girls cleared the written examination. A first for any shelter home programme in Dehradun.",
    ],
  },
  {
    id: "class10",
    num: "02",
    fig: "FIG. 02 / FIRST CLASS 10 BATCH",
    src: PHOTOS.group,
    alt: "The first batch of students to sit the Class 10 board examination from the home",
    title: "100% pass rate, first-ever batch",
    lines: [
      "The first batch to sit Class 10 boards from the home passed in full.",
      "A baseline has been set. Every cohort after them now has proof it can be done.",
    ],
  },
  {
    id: "meenakshi",
    num: "03",
    fig: "FIG. 03 / CULTURAL MINISTRY",
    src: PHOTOS.field4,
    alt: "Meenakshi leading a cultural activity as elected Cultural Minister",
    title: "Meenakshi, elected Cultural Minister",
    lines: [
      "Once quiet at the back of the room, Meenakshi now runs the cultural calendar for her home.",
      "She was elected by her peers. The role was earned, not assigned.",
    ],
  },
  {
    id: "return",
    num: "04",
    fig: "FIG. 04 / ALUMNI FACILITATORS",
    src: PHOTOS.field2,
    alt: "Alumni facilitators running a Skill Club for younger children",
    title: "The facilitators who came back",
    lines: [
      "Arjun Shah, Vishnu Paswan and Sheetal Chauhan grew up in the system and returned to lead it.",
      "They now run Skill Clubs for the children who came after them.",
    ],
  },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Stories"
        accent="var(--terra)"
        title="A field record of real outcomes."
        intro="No pity framing. Each entry is a documented result, photographed where it happened and captioned plainly."
      />

      {stories.map((s, i) => (
        <section
          key={s.id}
          id={s.id}
          style={{ backgroundColor: i % 2 === 0 ? "var(--cream)" : "var(--cream2)" }}
        >
          <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
            <div
              className={`grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14 ${
                i % 2 === 1 ? "lg:[&>figure]:order-2" : ""
              }`}
            >
              <PhotoFigure src={s.src} alt={s.alt} caption={s.fig} aspect="4 / 3" />
              <Reveal>
                <span className="section-num">{s.num}</span>
                <h2 className="mt-2" style={{ color: "var(--ink)" }}>
                  {s.title}
                </h2>
                <div className="mt-5 space-y-3 text-lg" style={{ color: "var(--wg)" }}>
                  {s.lines.map((l) => (
                    <p key={l}>{l}</p>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      ))}

      <section style={{ backgroundColor: "var(--ink)", color: "var(--cream)" }}>
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
          <Reveal>
            <h2 style={{ color: "var(--cream)" }}>The record keeps growing.</h2>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/support" className="btn btn-lime">Support the work</Link>
              <Link to="/our-model" className="btn btn-ghost">See the model</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
