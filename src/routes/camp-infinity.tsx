import { createFileRoute } from "@tanstack/react-router";
import { Compass, Users, CalendarDays, MapPin, Tent, Mountain } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Reveal } from "@/components/layout/Reveal";
import { PhotoFigure } from "@/components/media/PhotoFigure";
import { EvidenceCard } from "@/components/media/EvidenceCard";
import { PHOTOS } from "@/lib/images";
import { KETTO_URL } from "@/lib/site";

const ACCENT = "var(--saffron)";

export const Route = createFileRoute("/camp-infinity")({
  head: () => ({
    meta: [
      { title: "Camp Infinity - Badlaav Foundation" },
      { name: "description", content: "Camp Infinity: the annual outing and a three-day Leadership Camp at Tilwari for 35 student leaders." },
      { property: "og:title", content: "Camp Infinity - Badlaav Foundation" },
      { property: "og:description", content: "Learning beyond the walls of the home." },
      { property: "og:url", content: "/camp-infinity" },
      { property: "og:image", content: PHOTOS.campInfinity },
    ],
    links: [{ rel: "canonical", href: "/camp-infinity" }],
  }),
  component: Page,
});


function Page() {
  return (
    <>
      <PageHero
        eyebrow="Camp Infinity / Exposure and Experiential Learning"
        accent={ACCENT}
        icon={Compass}
        meta="Programme iii / Exposure"
        title="Learning beyond the walls of the home."
        intro="Camps and outings give children the exposure that a shelter cannot. New places, new people, and the confidence that comes with both."
      />

      <section id="outing" style={{ backgroundColor: "var(--cream)" }}>
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <SectionHeader num="02" eyebrow="The outing" accent={ACCENT} title="The annual outing.">
              <p className="text-lg" style={{ color: "var(--wg)" }}>
                Once a year the children step out of the home together for a day
                built around discovery, not instruction.
              </p>
            </SectionHeader>
            <PhotoFigure
              src={PHOTOS.campInfinity}
              alt="Children on a Camp Infinity outing"
              caption="FIG. 01 / CAMP INFINITY 2024"
              aspect="4 / 5"
              priority
              tag={
                <>
                  <Mountain className="h-3.5 w-3.5" strokeWidth={1.8} />
                  Beyond the home
                </>
              }
            />
          </div>
        </div>
      </section>

      <section id="camp" style={{ backgroundColor: "var(--cream2)" }}>
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <SectionHeader num="03" eyebrow="Leadership Camp" accent={ACCENT} title="Three days at Tilwari." />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <EvidenceCard figure="35" label="student leaders" proof="Selected across the homes." accent={ACCENT} icon={Users} />
            <EvidenceCard figure="3" label="days" proof="Residential leadership camp." accent={ACCENT} icon={CalendarDays} delay={70} />
            <EvidenceCard figure="Tilwari" label="location" proof="On the banks of the Ganga." accent={ACCENT} icon={MapPin} delay={140} />
          </div>
          <PhotoFigure
            className="mt-10"
            src={PHOTOS.camp2}
            alt="Student leaders at the residential Leadership Camp at Tilwari"
            caption="FIG. 02 / LEADERSHIP CAMP, TILWARI"
            aspect="16 / 9"
            tag={
              <>
                <Tent className="h-3.5 w-3.5" strokeWidth={1.8} />
                Residential camp
              </>
            }
          />
        </div>
      </section>

      <section id="ketto" style={{ backgroundColor: "var(--ink)", color: "var(--cream)" }}>
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
          <Reveal className="gradient-ring max-w-3xl rounded-2xl p-8 lg:p-10" style={{ backgroundColor: "rgba(247,243,235,0.04)" }}>
            <span className="eyebrow" style={{ color: "var(--lime)" }}>
              <Tent className="h-4 w-4" strokeWidth={1.6} />
              Live campaign
            </span>
            <h2 className="mt-6" style={{ color: "var(--cream)" }}>Fund the next Camp Infinity.</h2>
            <p className="mt-4 max-w-xl text-lg" style={{ color: "rgba(247,243,235,0.75)" }}>
              Our Ketto campaign covers travel, materials and the Leadership Camp.
            </p>
            <div className="mt-8">
              <a href={KETTO_URL} target="_blank" rel="noopener noreferrer" className="btn btn-lime">Donate on Ketto</a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
