import { createFileRoute } from "@tanstack/react-router";
import { ScrollText, FileText, HandCoins, Copyright, ShieldAlert, Gavel } from "lucide-react";
import { LegalDoc, type LegalSection } from "@/components/layout/LegalDoc";
import { EMAILS } from "@/lib/site";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Badlaav Foundation - Terms" },
      {
        name: "description",
        content:
          "The terms that govern your use of the Badlaav Foundation website and donations made through it.",
      },
      { property: "og:title", content: "Badlaav Foundation - Terms" },
      { property: "og:description", content: "The terms for using this site." },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: Page,
});

const sections: LegalSection[] = [
  {
    num: "02",
    eyebrow: "Using the site",
    title: "Use of this website.",
    icon: FileText,
    accent: "var(--teal)",
    body: (
      <>
        <p>
          This website is operated by Badlaav Foundation, a registered nonprofit
          trust in Dehradun, Uttarakhand. By using it you agree to use it
          lawfully and not to disrupt, misuse or attempt to gain unauthorised
          access to it.
        </p>
        <p>
          We work with children in care, so any request to visit, volunteer or
          attend an event is subject to our child-safety requirements.
        </p>
      </>
    ),
  },
  {
    num: "03",
    eyebrow: "Giving",
    title: "Donations.",
    icon: HandCoins,
    accent: "var(--lime)",
    body: (
      <>
        <p>
          Donations are voluntary and are used to fund our programmes for
          children in government Child Care Institutions. Payments are processed
          on Ketto. Refunds are governed by our Refund Policy, and tax exemption
          is subject to our valid 80G registration.
        </p>
      </>
    ),
  },
  {
    num: "04",
    eyebrow: "Content",
    title: "Intellectual property.",
    icon: Copyright,
    accent: "var(--plum)",
    body: (
      <>
        <p>
          The Badlaav Foundation name, logo, text, photographs and design on this
          site belong to the foundation and may not be reproduced for commercial
          use without written permission. Photographs of children are used with
          care and may not be copied or redistributed.
        </p>
      </>
    ),
  },
  {
    num: "05",
    eyebrow: "Limits",
    title: "Liability.",
    icon: ShieldAlert,
    accent: "var(--saffron)",
    body: (
      <>
        <p>
          We work to keep the information on this site accurate and the site
          available, but we provide it as is. To the extent permitted by law, we
          are not liable for losses arising from your use of the site or from
          third-party services linked from it, such as the payment platform.
        </p>
      </>
    ),
  },
  {
    num: "06",
    eyebrow: "Jurisdiction",
    title: "Governing law.",
    icon: Gavel,
    accent: "var(--teal)",
    body: (
      <>
        <p>
          These terms are governed by the laws of India, and the courts at
          Dehradun, Uttarakhand have jurisdiction. Questions about these terms can
          be sent to{" "}
          <a href={`mailto:${EMAILS.info}`} style={{ color: "var(--teal)" }}>
            {EMAILS.info}
          </a>
          .
        </p>
      </>
    ),
  },
];

function Page() {
  return (
    <LegalDoc
      eyebrow="Terms"
      heroIcon={ScrollText}
      title="The terms of use."
      intro="Plain terms for using this site and giving through it. No fine print designed to trip you up."
      updated="May 2026"
      sections={sections}
    />
  );
}
