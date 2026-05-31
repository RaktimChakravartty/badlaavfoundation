import { createFileRoute } from "@tanstack/react-router";
import { Lock, Database, Settings2, Cookie, ShieldCheck, Mail } from "lucide-react";
import { LegalDoc, type LegalSection } from "@/components/layout/LegalDoc";
import { EMAILS } from "@/lib/site";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Badlaav Foundation - Privacy" },
      {
        name: "description",
        content:
          "How Badlaav Foundation collects, uses and protects your data, written to align with India's Digital Personal Data Protection Act.",
      },
      { property: "og:title", content: "Badlaav Foundation - Privacy" },
      {
        property: "og:description",
        content:
          "How Badlaav Foundation collects, uses and protects your personal data, in plain language and aligned with India's DPDP Act.",
      },
      { property: "og:url", content: "https://badlaavfoundation.lovable.app/privacy" },
    ],
    links: [{ rel: "canonical", href: "https://badlaavfoundation.lovable.app/privacy" }],
  }),
  component: Page,
});

const sections: LegalSection[] = [
  {
    num: "02",
    eyebrow: "What we hold",
    title: "The data we collect.",
    icon: Database,
    accent: "var(--teal)",
    body: (
      <>
        <p>
          We collect only what we need to do our work and stay accountable:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Contact details you submit through our forms, such as your name, email, phone number and message.</li>
          <li>Volunteer, partnership and event interest you share with us.</li>
          <li>Newsletter email addresses, only when you choose to subscribe.</li>
          <li>Basic, non-identifying technical data needed to keep the site running.</li>
        </ul>
        <p>
          Donations are processed on Ketto. Payment information is handled by
          Ketto and the relevant payment providers, not stored by us.
        </p>
      </>
    ),
  },
  {
    num: "03",
    eyebrow: "How we use it",
    title: "Why we use your data.",
    icon: Settings2,
    accent: "var(--plum)",
    body: (
      <>
        <p>We use the information you give us to:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Respond to your message, application or partnership enquiry.</li>
          <li>Issue receipts and 80G certificates where applicable.</li>
          <li>Send updates you have asked to receive.</li>
          <li>Meet our legal, tax and CSR reporting obligations.</li>
        </ul>
        <p>
          We do not sell your data. We do not share it for advertising. We share
          it only with service providers who help us operate, and only as needed.
        </p>
      </>
    ),
  },
  {
    num: "04",
    eyebrow: "Cookies",
    title: "Cookies we use.",
    icon: Cookie,
    accent: "var(--saffron)",
    body: (
      <>
        <p>
          We use only essential cookies that keep the site working. We do not
          use advertising or cross-site tracking cookies. You can clear or block
          cookies in your browser settings at any time.
        </p>
      </>
    ),
  },
  {
    num: "05",
    eyebrow: "Your rights",
    title: "Your rights under the DPDP Act.",
    icon: ShieldCheck,
    accent: "var(--teal)",
    body: (
      <>
        <p>
          In line with India's Digital Personal Data Protection Act, 2023, you
          may:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Ask what personal data of yours we hold.</li>
          <li>Ask us to correct or update it.</li>
          <li>Ask us to erase it, where we are not required to keep it.</li>
          <li>Withdraw your consent to receive updates.</li>
        </ul>
        <p>
          To exercise any of these, write to us using the contact below and we
          will respond within a reasonable time.
        </p>
      </>
    ),
  },
  {
    num: "06",
    eyebrow: "Contact",
    title: "Reach our team.",
    icon: Mail,
    accent: "var(--plum)",
    body: (
      <>
        <p>
          For any privacy question or request, write to{" "}
          <a href={`mailto:${EMAILS.info}`} style={{ color: "var(--teal)" }}>
            {EMAILS.info}
          </a>
          . Badlaav Foundation is a registered nonprofit trust based in Dehradun,
          Uttarakhand.
        </p>
      </>
    ),
  },
];

function Page() {
  return (
    <LegalDoc
      eyebrow="Privacy"
      heroIcon={Lock}
      title="Your data, handled with care."
      intro="We collect the least we can, use it only for the work, and never sell it. This policy is written to align with India's DPDP Act."
      updated="May 2026"
      sections={sections}
    />
  );
}
