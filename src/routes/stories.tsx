import { createFileRoute, Link } from "@tanstack/react-router";
import {
  BookOpen,
  ClipboardCheck,
  GraduationCap,
  Drama,
  UserCheck,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
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

type Chapter = {
  id: string;
  num: string;
  word: string;
  accent: string;
  fig: string;
  src: string;
  alt: string;
  tag: { icon: LucideIcon; label: string };
  title: string;
  lines: string[];
  source: string;
};

const chapters: Chapter[] = [
  {
    id: "shaurya",
    num: "01",
    word: "Chapter One",
    accent: "var(--teal)",
    fig: "FIG. 01 / APTITUDE CLUB, PROJECT SHAURYA",
    src: PHOTOS.session,
    alt: "Students preparing for a written examination in the aptitude club",
    tag: { icon: ClipboardCheck, label: "Project Shaurya" },
    title: "Four of seven cleared the written examination",
    lines: [
      "Project Shaurya prepares children for a competitive entrance examination.",
      "Four of seven girls cleared the written examination. A first for any shelter home programme in Dehradun.",
    ],
    source: "Aptitude Skill Club, led by Sheetal Chauhan",
  },
  {
    id: "class10",
    num: "02",
    word: "Chapter Two",
    accent: "var(--lime)",
    fig: "FIG. 02 / FIRST CLASS 10 BATCH",
    src: PHOTOS.group,
    alt: "The first batch of students to sit the Class 10 board examination from the home",
    tag: { icon: GraduationCap, label: "First batch" },
    title: "100% pass rate, first-ever batch",
    lines: [
      "The first batch to sit Class 10 boards from the home passed in full.",
      "A baseline has been set. Every cohort after them now has proof it can be done.",
    ],
    source: "Class 10 board examination",
  },
  {
    id: "meenakshi",
    num: "03",
    word: "Chapter Three",
    accent: "var(--plum)",
    fig: "FIG. 03 / CULTURAL MINISTRY",
    src: PHOTOS.field4,
    alt: "Meenakshi leading a cultural activity as elected Cultural Minister",
    tag: { icon: Drama, label: "Cultural Ministry" },
    title: "Meenakshi, elected Cultural Minister",
    lines: [
      "Once quiet at the back of the room, Meenakshi now runs the cultural calendar for her home.",
      "She was elected by her peers. The role was earned, not assigned.",
    ],
    source: "Dagdya Bal Sabha, Cultural Ministry",
  },
  {
    id: "return",
    num: "04",
    word: "Chapter Four",
    accent: "var(--saffron)",
    fig: "FIG. 04 / ALUMNI FACILITATORS",
    src: PHOTOS.field2,
    alt: "Alumni facilitators running a Skill Club for younger children",
    tag: { icon: UserCheck, label: "Alumni facilitators" },
    title: "The facilitators who came back",
    lines: [
      "Arjun Shah, Vishnu Paswan and Sheetal Chauhan grew up in the system and returned to lead it.",
      "They now run Skill Clubs for the children who came after them.",
    ],
    source: "Three active alumni facilitators",
  },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Stories"
        accent="var(--terra)"
        icon={BookOpen}
        meta="Field Record / Four entries"
        title="A field record, told in chapters."
        intro="No pity framing. Each chapter is a documented result, photographed where it happened and captioned plainly."
      />

      {chapters.map((c, i) => {
        const TagIcon = c.tag.icon;
        const flip = i % 2 === 1;
        return (
          <section
            key={c.id}
            id={c.id}
            style={{ backgroundColor: i % 2 === 0 ? "var(--cream)" : "var(--cream2)" }}
          >
            <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
              <div
                className={`grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14 ${
                  flip ? "lg:[&>figure]:order-2" : ""
                }`}
              >
                <PhotoFigure
                  src={c.src}
                  alt={c.alt}
                  caption={c.fig}
                  aspect="4 / 3"
                  tag={
                    <>
                      <TagIcon className="h-3.5 w-3.5" strokeWidth={1.8} />
                      {c.tag.label}
                    </>
                  }
                />
                <Reveal
                  className="chapter-rail pl-6 lg:pl-8"
                  style={{ color: c.accent }}
                >
                  <span
                    className="eyebrow"
                    style={{ color: c.accent }}
                  >
                    {c.word}
                  </span>
                  <div className="mt-1 flex items-baseline gap-4">
                    <span className="chapter-index" style={{ color: c.accent, opacity: 0.5 }}>
                      {c.num}
                    </span>
                  </div>
                  <h2 className="mt-1" style={{ color: "var(--ink)" }}>
                    {c.title}
                  </h2>
                  <div className="mt-5 space-y-3 text-lg" style={{ color: "var(--wg)" }}>
                    {c.lines.map((l) => (
                      <p key={l}>{l}</p>
                    ))}
                  </div>
                  <p
                    className="mt-6 border-t pt-4 text-xs uppercase tracking-widest"
                    style={{ borderColor: "var(--stone)", color: "var(--wg)" }}
                  >
                    Source: {c.source}
                  </p>
                </Reveal>
              </div>
            </div>
          </section>
        );
      })}

      <section style={{ backgroundColor: "var(--ink)", color: "var(--cream)" }}>
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
          <Reveal>
            <span className="eyebrow" style={{ color: "var(--lime)" }}>
              <BookOpen className="h-4 w-4" strokeWidth={1.6} />
              The record continues
            </span>
            <h2 className="mt-6" style={{ color: "var(--cream)" }}>The record keeps growing.</h2>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/support" className="btn btn-lime">
                Support the work
                <ArrowRight className="h-4 w-4" strokeWidth={2} />
              </Link>
              <Link to="/our-model" className="btn btn-ghost">See the model</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
