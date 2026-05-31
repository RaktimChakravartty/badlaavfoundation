import { createFileRoute } from "@tanstack/react-router";
import { Heart, HandCoins, Building2, Landmark, PieChart, HelpCircle, Sparkles, Repeat, TrendingUp, Tent, Megaphone, Users, Handshake } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Reveal } from "@/components/layout/Reveal";
import { EvidenceCard } from "@/components/media/EvidenceCard";
import { FaqAccordion } from "@/components/media/FaqAccordion";
import { CopyField } from "@/components/ui/CopyField";
import { KETTO_URL, EMAILS } from "@/lib/site";

export const Route = createFileRoute("/support")({
  head: () => ({
    meta: [
      { title: "Support - Badlaav Foundation" },
      {
        name: "description",
        content:
          "Support 250+ children: donate on Ketto with 80G exemption, partner through CSR, or transfer directly to the trust.",
      },
      { property: "og:title", content: "Support - Badlaav Foundation" },
      { property: "og:description", content: "Three honest ways to fund the work." },
      { property: "og:url", content: "/support" },
    ],
    links: [{ rel: "canonical", href: "/support" }],
  }),
  component: Page,
});


const csrTiers = [
  { figure: "₹2,50,000", label: "Leadership Camp Partner", proof: "Per year.", icon: Tent },
  { figure: "₹1,00,000", label: "Mega Event Sponsor", proof: "Per event.", icon: Megaphone },
  { figure: "₹3,60,000", label: "Skill Club Programme Partner", proof: "Per year.", icon: Users },
  { figure: "Custom", label: "Strategic Partner", proof: "Multi-year engagement.", icon: Handshake },
];

const bankRows: [string, string][] = [
  ["Account holder", "Badlaav Foundation"],
  ["Account number", "011588700000756"],
  ["IFSC", "YESB0000115"],
  ["Bank", "Yes Bank, Rajpur Road, Dehradun"],
  ["Account type", "Current"],
  ["SWIFT", "YESBINBBDEL"],
];

const allocation = [
  { label: "Skill Clubs & facilitators", pct: 55, color: "var(--teal)" },
  { label: "Camps & exposure", pct: 25, color: "var(--saffron)" },
  { label: "Materials & operations", pct: 20, color: "var(--plum)" },
];

const faqs = [
  {
    q: "Is my donation eligible for tax exemption?",
    a: "Yes. Badlaav Foundation holds 80G registration, so donations are eligible for tax exemption. Your PAN is required for the certificate regardless of the amount.",
  },
  {
    q: "Will I get a receipt and an 80G certificate?",
    a: "Yes. You receive a receipt for every contribution, and an 80G certificate is issued against the PAN you provide.",
  },
  {
    q: "Can my company route this through CSR?",
    a: "Yes. Badlaav Foundation is CSR-1 registered (CSR00047059), so company contributions count toward statutory CSR. Write to csr@badlaavfoundation.in to set up a partnership.",
  },
  {
    q: "How is my money used?",
    a: "Funds go to Skill Clubs and facilitators, camps and exposure, and materials and operations. The indicative split is shown in the section above, against an annual budget of 15 to 18 Lakh.",
  },
  {
    q: "Can I give monthly instead of once?",
    a: "Yes. You can set up a recurring monthly contribution on Ketto, or use the bank transfer details for a standing instruction.",
  },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Support"
        accent="var(--lime)"
        title="Three honest ways to fund the work."
        intro="Every rupee funds skills, leadership and exposure for 250+ children. Choose the path that fits you."
      />

      <section id="individual" style={{ backgroundColor: "var(--cream)" }}>
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <SectionHeader
              num="02"
              eyebrow="Individuals"
              accent="var(--lime)"
              icon={HandCoins}
              title="Give once, or give every month."
            >
              <p className="text-lg" style={{ color: "var(--wg)" }}>
                Donations to Badlaav Foundation are eligible for 80G tax
                exemption. PAN is required for the certificate regardless of
                amount.
              </p>
              <div className="mt-6">
                <a href={KETTO_URL} target="_blank" rel="noopener noreferrer" className="btn btn-lime">
                  <Heart className="h-4 w-4" strokeWidth={2} />
                  Donate on Ketto
                </a>
              </div>
            </SectionHeader>
            <Reveal className="grid gap-4">
              <EvidenceCard figure="₹4,000" label="Spark" proof="One child for a year." accent="var(--lime)" icon={Sparkles} />
              <EvidenceCard figure="₹15,000" label="Sustain" proof="One Skill Club for a quarter." accent="var(--lime)" icon={Repeat} delay={70} />
              <EvidenceCard figure="₹60,000" label="Transform" proof="One Skill Club for a full year." accent="var(--lime)" icon={TrendingUp} delay={140} />
            </Reveal>
          </div>
        </div>
      </section>

      <section id="csr" style={{ backgroundColor: "var(--cream2)" }}>
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <SectionHeader
            num="03"
            eyebrow="For companies"
            accent="var(--plum)"
            icon={Building2}
            title="CSR partnerships."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {csrTiers.map((t, i) => (
              <EvidenceCard key={t.label} {...t} accent="var(--plum)" delay={i * 70} />
            ))}
          </div>
          <Reveal as="p" className="mt-8 text-sm" style={{ color: "var(--wg)" }}>
            Badlaav Foundation is CSR-1 registered (CSR00047059), so your
            contribution counts toward statutory CSR. Partnerships:{" "}
            <a href={`mailto:${EMAILS.csr}`} style={{ color: "var(--plum)" }}>{EMAILS.csr}</a>.
          </Reveal>
        </div>
      </section>

      <section id="bank" style={{ backgroundColor: "var(--cream)" }}>
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <SectionHeader
            num="04"
            eyebrow="Direct transfer"
            accent="var(--teal)"
            icon={Landmark}
            title="Bank transfer details."
          />
          {/* VERIFY all bank details below before publishing. */}
          <Reveal
            className="mt-10 max-w-2xl rounded-xl border bg-white p-7"
            style={{ borderColor: "var(--stone)" }}
          >
            <dl className="grid gap-3 text-sm">
              {bankRows.map(([k, v]) => (
                <CopyField key={k} label={k} value={v} mono={k !== "Bank" && k !== "Account holder" && k !== "Account type"} />
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      <section id="allocation" style={{ backgroundColor: "var(--cream2)" }}>
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <SectionHeader
            num="05"
            eyebrow="Transparency"
            accent="var(--saffron)"
            icon={PieChart}
            title="Where your money goes."
          />
          <div className="mt-10 max-w-3xl space-y-5">
            {allocation.map((a, i) => (
              <Reveal key={a.label} delay={i * 80}>
                <div className="flex items-baseline justify-between text-sm">
                  <span style={{ color: "var(--ink)" }}>{a.label}</span>
                  <span className="font-display text-lg" style={{ color: "var(--ink)" }}>{a.pct}%</span>
                </div>
                <div className="mt-2 h-2.5 w-full overflow-hidden rounded-full" style={{ backgroundColor: "var(--stone)" }}>
                  <div className="h-full rounded-full" style={{ width: `${a.pct}%`, backgroundColor: a.color }} />
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal as="p" className="mt-6 text-sm" style={{ color: "var(--wg)" }}>
            An honest, indicative split of an annual budget of 15 to 18 Lakh. No
            inflated claims.
          </Reveal>
        </div>
      </section>

      <section id="faq" style={{ backgroundColor: "var(--cream)" }}>
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <SectionHeader
            num="06"
            eyebrow="Questions"
            accent="var(--teal)"
            icon={HelpCircle}
            title="Before you give."
          />
          <div className="mt-10">
            <FaqAccordion items={faqs} />
          </div>
        </div>
      </section>
    </>
  );
}
