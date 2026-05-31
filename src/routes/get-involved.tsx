import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Reveal } from "@/components/layout/Reveal";
import { LeadForm } from "@/components/forms/LeadForm";

export const Route = createFileRoute("/get-involved")({
  head: () => ({
    meta: [
      { title: "Get Involved - Badlaav Foundation" },
      { name: "description", content: "Three ways to get involved: volunteer, corporate volunteering, and attending events with safeguards." },
      { property: "og:title", content: "Get Involved - Badlaav Foundation" },
      { property: "og:description", content: "Volunteer, bring your team, or attend an event." },
      { property: "og:url", content: "/get-involved" },
    ],
    links: [{ rel: "canonical", href: "/get-involved" }],
  }),
  component: Page,
});


function Page() {
  return (
    <>
      <PageHero
        eyebrow="Get Involved"
        accent="var(--teal)"
        title="Three tracks. Pick yours."
        intro="Every track involves working with children in care, so each one carries child-safety requirements. We will brief you fully."
      />

      <section id="volunteer" style={{ backgroundColor: "var(--cream)" }}>
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <SectionHeader num="02" eyebrow="Track one" accent="var(--teal)" title="Volunteer.">
              <ul className="space-y-2 text-lg" style={{ color: "var(--wg)" }}>
                <li>Skills needed: teaching, sports, arts, computers, mentoring.</li>
                <li>Time commitment: a recurring weekly or fortnightly slot.</li>
                <li>Child-safety: a screening and orientation before you start.</li>
              </ul>
            </SectionHeader>
            <LeadForm
              kind="volunteer"
              title="Volunteer application"
              submitLabel="Apply to volunteer"
              fields={[
                { name: "name", label: "Name", required: true },
                { name: "email", label: "Email", type: "email", required: true },
                { name: "phone", label: "Phone", type: "tel" },
                { name: "skills", label: "Skills you can offer" },
                { name: "availability", label: "Availability", type: "textarea" },
              ]}
            />
          </div>
        </div>
      </section>

      <section id="corporate" style={{ backgroundColor: "var(--cream2)" }}>
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <SectionHeader num="03" eyebrow="Track two" accent="var(--plum)" title="Corporate volunteering.">
              <p className="text-lg" style={{ color: "var(--wg)" }}>
                Themed sessions for your team, run as a full day or a half day, and
                bundled with a CSR partnership where it fits.
              </p>
            </SectionHeader>
            <LeadForm
              kind="corporate"
              title="Bring your team"
              accent="var(--plum)"
              submitLabel="Talk to us"
              fields={[
                { name: "name", label: "Name", required: true },
                { name: "company", label: "Company", required: true },
                { name: "email", label: "Work email", type: "email", required: true },
                { name: "message", label: "What you have in mind", type: "textarea" },
              ]}
            />
          </div>
        </div>
      </section>

      <section id="events" style={{ backgroundColor: "var(--cream)" }}>
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <SectionHeader num="04" eyebrow="Track three" accent="var(--saffron)" title="Events.">
              <p className="text-lg" style={{ color: "var(--wg)" }}>
                Camps and competitions run through the year. Observer attendance is
                possible with safeguards in place. Register your interest and we
                will share dates.
              </p>
            </SectionHeader>
            <LeadForm
              kind="events"
              title="Register interest"
              accent="var(--saffron)"
              submitLabel="Register interest"
              fields={[
                { name: "name", label: "Name", required: true },
                { name: "email", label: "Email", type: "email", required: true },
                { name: "interest", label: "Which event", type: "textarea" },
              ]}
            />
          </div>
        </div>
      </section>
    </>
  );
}
