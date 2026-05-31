import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Reveal } from "@/components/layout/Reveal";

export const Route = createFileRoute("/certificate")({
  head: () => ({
    meta: [
      { title: "Certificates & Compliance - Badlaav Foundation" },
      {
        name: "description",
        content:
          "Registration and compliance for Badlaav Foundation: 12A, 80G, CSR-1, Niti Aayog Darpan and PAN, with SDG alignment.",
      },
      { property: "og:title", content: "Certificates & Compliance - Badlaav Foundation" },
      { property: "og:description", content: "The documents CSR teams check." },
      { property: "og:url", content: "/certificate" },
    ],
    links: [{ rel: "canonical", href: "/certificate" }],
  }),
  component: Page,
});


// VERIFY ALL NUMBERS BELOW BEFORE PUBLISHING.
const registrations = [
  { figure: "12A", label: "Income tax registration", proof: "AAETB7121K25LK01" },
  { figure: "80G", label: "Tax exemption for donors", proof: "AAETB7121K25LK02 · valid 2026-27 to 2030-31" },
  { figure: "CSR-1", label: "CSR eligibility", proof: "CSR00047059" },
  { figure: "Darpan", label: "Niti Aayog Darpan", proof: "UA/2022/0318085" },
  { figure: "PAN", label: "Permanent Account Number", proof: "AAETB7121K" },
];

const sdgs = ["3 · Good Health", "4 · Quality Education", "5 · Gender Equality", "8 · Decent Work", "11 · Sustainable Communities"];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Certificates & Compliance"
        accent="var(--ink)"
        title="The documents, in full."
        intro="A registered nonprofit trust operating since 2019. Every registration below is current. This is the page CSR and compliance teams come to check."
      />

      <section id="registrations" style={{ backgroundColor: "var(--cream)" }}>
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <SectionHeader
            num="02"
            eyebrow="Registrations"
            accent="var(--teal)"
            title="Statutory registrations."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {/* VERIFY all registration numbers before publishing. */}
            {registrations.map((r, i) => (
              <Reveal
                key={r.figure}
                delay={i * 70}
                className="evidence flex flex-col"
              >
                <span className="evidence-figure">{r.figure}</span>
                <span className="mt-3 text-xs font-medium uppercase tracking-widest" style={{ color: "var(--ink)" }}>
                  {r.label}
                </span>
                <span className="mt-2 break-words font-mono text-sm" style={{ color: "var(--wg)" }}>
                  {r.proof}
                </span>
              </Reveal>
            ))}
          </div>
          <Reveal as="p" className="mt-8 text-sm" style={{ color: "var(--wg)" }}>
            Donations to Badlaav Foundation are eligible for 80G tax exemption.
            PAN is required for the certificate regardless of amount.
          </Reveal>
        </div>
      </section>

      <section id="sdg" style={{ backgroundColor: "var(--cream2)" }}>
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <SectionHeader
            num="03"
            eyebrow="Alignment"
            accent="var(--saffron)"
            title="UN Sustainable Development Goals."
          />
          <div className="mt-10 flex flex-wrap gap-3">
            {sdgs.map((s, i) => (
              <Reveal
                key={s}
                delay={i * 60}
                className="rounded-full border px-5 py-2.5 text-sm"
                style={{ borderColor: "var(--stone)", color: "var(--ink)", backgroundColor: "#fff" }}
              >
                {s}
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 flex flex-wrap gap-3">
            <Link to="/support" className="btn btn-lime">Become a partner</Link>
            <Link to="/about" className="btn btn-outline">About the trust</Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
