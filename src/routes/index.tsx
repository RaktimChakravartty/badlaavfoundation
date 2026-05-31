import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Users,
  GraduationCap,
  ClipboardCheck,
  UserCheck,
  Sprout,
  Landmark,
  Compass,
  Quote,
  AlertTriangle,
  Workflow,
  LayoutGrid,
  BarChart3,
  BookOpen,
  Repeat,
  Sparkles,
} from "lucide-react";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { SpectrumSpine } from "@/components/layout/SpectrumSpine";
import { Reveal } from "@/components/layout/Reveal";
import { PhotoFigure } from "@/components/media/PhotoFigure";
import { EvidenceCard } from "@/components/media/EvidenceCard";
import { IconBadge } from "@/components/ui/IconBadge";
import { PHOTOS } from "@/lib/images";
import { KETTO_URL } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Badlaav Foundation - A system that works without us" },
      {
        name: "description",
        content:
          "Badlaav Foundation helps 250+ children in Dehradun's child care institutions become leaders, not recipients. Skill Clubs, child-led governance, and results you can point to.",
      },
      { property: "og:title", content: "Badlaav Foundation - A system that works without us" },
      {
        property: "og:description",
        content:
          "Children in care become leaders, not recipients. See the model and the proof.",
      },
      { property: "og:url", content: "/" },
      { property: "og:image", content: PHOTOS.hero },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const programmes = [
  {
    num: "i",
    name: "CARE",
    full: "Skills built inside the home",
    desc: "Skill Clubs and a co-facilitation model, so a session happens even when the facilitator does not arrive.",
    to: "/care" as const,
    accent: "var(--teal)",
    icon: Sprout,
    offset: "lg:mt-0",
  },
  {
    num: "ii",
    name: "Dagdya",
    full: "Leadership and governance",
    desc: "A child-led Bal Sabha with seven ministries. Seven children run them. Nobody appointed them.",
    to: "/dagdya" as const,
    accent: "var(--plum)",
    icon: Landmark,
    offset: "lg:mt-16",
  },
  {
    num: "iii",
    name: "Camp Infinity",
    full: "Exposure and experiential learning",
    desc: "Camps and outings that move learning beyond the walls of the home and into the world.",
    to: "/camp-infinity" as const,
    accent: "var(--saffron)",
    icon: Compass,
    offset: "lg:mt-8",
  },
];

const evidence = [
  { figure: "250+", label: "children reached", proof: "Inside government Child Care Institutions in Dehradun.", icon: Users },
  { figure: "100%", label: "first Class 10 batch passed", proof: "The first cohort to sit boards from the home.", icon: GraduationCap },
  { figure: "4 of 7", label: "cleared the written examination", proof: "Through Project Shaurya.", icon: ClipboardCheck },
  { figure: "3", label: "alumni facilitators", proof: "Grew up in the system and returned to lead it.", icon: UserCheck },
];

const modelSteps = [
  { name: "CARE", desc: "builds the skills children are not taught inside the home.", icon: Sprout, accent: "var(--teal)" },
  { name: "Dagdya", desc: "hands them the governance and ownership of their own community.", icon: Landmark, accent: "var(--plum)" },
  { name: "Camp Infinity", desc: "opens the world beyond the walls of the home.", icon: Compass, accent: "var(--saffron)" },
];

function Index() {
  return (
    <>
      {/* 01 Hero */}
      <section id="hero" style={{ backgroundColor: "var(--cream2)" }}>
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 lg:grid-cols-12 lg:gap-12 lg:px-8 lg:py-24">
          <Reveal className="lg:col-span-7">
            <span className="eyebrow" style={{ color: "var(--teal)" }}>
              <Sparkles className="h-4 w-4" strokeWidth={1.6} />
              Badlaav Foundation / Since 2019
            </span>
            <h1 className="mt-5">
              Not a programme.
              <br />A system that works{" "}
              <span style={{ color: "var(--lime)" }}>without us.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg" style={{ color: "var(--wg)" }}>
              Children in care become leaders, not recipients. We built it so the
              work continues when we are not in the room.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/our-model" className="btn btn-lime">
                See how we do it
                <ArrowRight className="h-4 w-4" strokeWidth={2} />
              </Link>
              <Link to="/support" className="btn btn-outline">
                Support our work
              </Link>
            </div>
          </Reveal>

          <PhotoFigure
            className="lg:col-span-5"
            src={PHOTOS.hero}
            alt="Children leading a session at a Badlaav Foundation home in Dehradun"
            caption="FIG. 01 / CHILDREN LEADING A SESSION, DEHRADUN"
            aspect="4 / 5"
            priority
          />
        </div>
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SpectrumSpine className="mb-0" />
        </div>
      </section>

      {/* 02 The problem */}
      <section id="problem" style={{ backgroundColor: "var(--cream)" }}>
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <SectionHeader
            num="02"
            eyebrow="The problem"
            accent="var(--terra)"
            icon={AlertTriangle}
            title={
              <>
                3.7 lakh children.
                <br />A system that stops at eighteen.
              </>
            }
          />
          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:max-w-4xl">
            <Reveal as="p" className="text-lg" style={{ color: "var(--wg)" }}>
              Children in government care age out at eighteen with a certificate
              and nowhere to go. The structure that held them simply ends.
            </Reveal>
            <Reveal as="p" className="text-lg" delay={80} style={{ color: "var(--wg)" }}>
              Badlaav exists so that a missed child does not become a missed
              citizen. We build the skills, the leadership, and the exposure that
              outlast the home.
            </Reveal>
          </div>
        </div>
      </section>

      {/* 03 The model in one line */}
      <section id="model" style={{ backgroundColor: "var(--cream2)" }}>
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <SectionHeader
            num="03"
            eyebrow="The model"
            accent="var(--teal)"
            icon={Workflow}
            title="One progression, built to run without us."
          />
          <div className="mt-10 grid gap-6 lg:max-w-5xl lg:grid-cols-3">
            {modelSteps.map((m, i) => (
              <Reveal
                as="div"
                key={m.name}
                delay={i * 70}
                className="flex items-start gap-4"
              >
                <IconBadge icon={m.icon} accent={m.accent} />
                <p className="text-base" style={{ color: "var(--wg)" }}>
                  <strong style={{ color: "var(--ink)" }}>{m.name}</strong> {m.desc}
                </p>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-8">
            <Link
              to="/our-model"
              className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-widest"
              style={{ color: "var(--teal)" }}
            >
              Read the full model
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 04 Programmes */}
      <section id="programmes" style={{ backgroundColor: "var(--cream)" }}>
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <SectionHeader
            num="04"
            eyebrow="The programmes"
            accent="var(--saffron)"
            icon={LayoutGrid}
            title="Three programmes, one system."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3 md:items-start">
            {programmes.map((p, i) => (
              <Reveal
                key={p.name}
                delay={i * 90}
                className={`group gradient-ring flex flex-col rounded-xl border bg-white p-7 transition-transform hover:-translate-y-1 ${p.offset}`}
                style={{ borderColor: "var(--stone)", borderTop: `4px solid ${p.accent}` }}
              >
                <div className="flex items-center justify-between">
                  <IconBadge icon={p.icon} accent={p.accent} size="lg" />
                  <span
                    className="font-display text-2xl font-semibold lowercase"
                    style={{ color: p.accent }}
                  >
                    {p.num}
                  </span>
                </div>
                <h3 className="mt-5" style={{ color: "var(--ink)" }}>
                  {p.name}
                </h3>
                <p
                  className="mt-1 text-xs uppercase tracking-widest"
                  style={{ color: p.accent }}
                >
                  {p.full}
                </p>
                <p className="mt-4 flex-1 text-sm" style={{ color: "var(--wg)" }}>
                  {p.desc}
                </p>
                <Link
                  to={p.to}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-widest"
                  style={{ color: p.accent }}
                >
                  Explore {p.name}
                  <ArrowRight className="h-4 w-4" strokeWidth={2} />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 05 Evidence */}
      <section id="evidence" style={{ backgroundColor: "var(--cream2)" }}>
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <SectionHeader
            num="05"
            eyebrow="The evidence"
            accent="var(--lime)"
            icon={BarChart3}
            title="Results you can point to."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {evidence.map((e, i) => (
              <EvidenceCard key={e.label} {...e} accent="var(--lime)" delay={i * 70} />
            ))}
          </div>
        </div>
      </section>

      {/* 06 Proof band (ink) with portrait */}
      <section id="proof" style={{ backgroundColor: "var(--ink)", color: "var(--cream)" }}>
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-24 lg:grid-cols-12 lg:gap-14 lg:px-8 lg:py-32">
          <PhotoFigure
            className="lg:col-span-5"
            src={PHOTOS.field4}
            alt="Meenakshi leading a cultural activity as elected Cultural Minister"
            caption="FIG. 04 / CULTURAL MINISTRY"
            aspect="4 / 5"
          />
          <Reveal className="lg:col-span-7">
            <span className="eyebrow" style={{ color: "var(--lime)" }}>
              <Quote className="h-4 w-4" strokeWidth={1.6} />
              Meenakshi / Cultural Minister
            </span>
            <p
              className="mt-6 font-display text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl"
              style={{ color: "var(--cream)" }}
            >
              Once quiet at the back of the room, she now runs the cultural
              calendar for her home as{" "}
              <span style={{ color: "var(--lime)" }}>elected Cultural Minister.</span>
            </p>
          </Reveal>
        </div>
      </section>

      {/* 07 Stories preview */}
      <section id="stories" style={{ backgroundColor: "var(--cream)" }}>
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <SectionHeader
            num="06"
            eyebrow="Field record"
            accent="var(--terra)"
            icon={BookOpen}
            title="Stories, told as evidence."
          />
          <div className="mt-12 grid gap-10 md:grid-cols-2 lg:gap-14">
            <div>
              <PhotoFigure
                src={PHOTOS.session}
                alt="Aptitude club session preparing students for a written examination"
                caption="FIG. 02 / APTITUDE CLUB, PROJECT SHAURYA"
              />
              <Reveal className="mt-5">
                <h3 style={{ color: "var(--ink)" }}>
                  Four of seven cleared the written examination
                </h3>
                <p className="mt-2 text-sm" style={{ color: "var(--wg)" }}>
                  Through Project Shaurya. A first for any shelter home programme
                  in Dehradun.
                </p>
              </Reveal>
            </div>
            <div className="md:mt-16">
              <PhotoFigure
                src={PHOTOS.group}
                alt="The first batch of students to sit the Class 10 board examination from the home"
                caption="FIG. 03 / FIRST CLASS 10 BATCH"
              />
              <Reveal className="mt-5">
                <h3 style={{ color: "var(--ink)" }}>
                  100% pass rate, first-ever batch
                </h3>
                <p className="mt-2 text-sm" style={{ color: "var(--wg)" }}>
                  The first batch to sit Class 10 boards from the home passed in
                  full.
                </p>
              </Reveal>
            </div>
          </div>
          <Reveal className="mt-10">
            <Link to="/stories" className="btn btn-outline">
              Read all stories
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 08 The return */}
      <section id="return" style={{ backgroundColor: "var(--cream2)" }}>
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <SectionHeader
            num="07"
            eyebrow="The return"
            accent="var(--plum)"
            icon={Repeat}
            title={
              <>
                Three came back as{" "}
                <span style={{ color: "var(--lime)" }}>facilitators.</span>
              </>
            }
          />
          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:max-w-4xl">
            <Reveal as="p" className="text-lg" style={{ color: "var(--wg)" }}>
              Arjun Shah, Vishnu Paswan and Sheetal Chauhan grew up in the system
              and returned to lead it, now running Skill Clubs for the children
              who came after them.
            </Reveal>
            <Reveal as="p" className="text-lg" delay={80} style={{ color: "var(--wg)" }}>
              Those who moved on to lives of their own are also success. The point
              was never to keep them. It was to make them ready.
            </Reveal>
          </div>
        </div>
      </section>

      {/* 09 Final CTA (ink) */}
      <section id="cta" style={{ backgroundColor: "var(--ink)", color: "var(--cream)" }}>
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
          <Reveal className="gradient-ring max-w-3xl rounded-2xl p-8 lg:p-10" style={{ backgroundColor: "rgba(247,243,235,0.04)" }}>
            <span className="eyebrow" style={{ color: "var(--lime)" }}>
              <Sparkles className="h-4 w-4" strokeWidth={1.6} />
              One decision
            </span>
            <h2 className="mt-6" style={{ color: "var(--cream)" }}>
              250+ children. One system.{" "}
              <span style={{ color: "var(--lime)" }}>One decision from you.</span>
            </h2>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={KETTO_URL} target="_blank" rel="noopener noreferrer" className="btn btn-lime">
                Donate on Ketto
                <ArrowRight className="h-4 w-4" strokeWidth={2} />
              </a>
              <Link to="/certificate" className="btn btn-ghost">
                Read the proof
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
