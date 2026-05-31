import { createFileRoute } from "@tanstack/react-router";
import { RotateCcw, HandCoins, AlertCircle, Mail, ReceiptText } from "lucide-react";
import { LegalDoc, type LegalSection } from "@/components/layout/LegalDoc";
import { EMAILS } from "@/lib/site";

export const Route = createFileRoute("/refund")({
  head: () => ({
    meta: [
      { title: "Badlaav Foundation - Refund Policy" },
      {
        name: "description",
        content:
          "Our donation refund policy: contributions are final, with a clear path to correct genuine transaction errors.",
      },
      { property: "og:title", content: "Badlaav Foundation - Refund Policy" },
      { property: "og:description", content: "How we handle refunds and errors." },
      { property: "og:url", content: "/refund" },
    ],
    links: [{ rel: "canonical", href: "/refund" }],
  }),
  component: Page,
});

const sections: LegalSection[] = [
  {
    num: "02",
    eyebrow: "The principle",
    title: "Donations are final.",
    icon: HandCoins,
    accent: "var(--lime)",
    body: (
      <>
        <p>
          A donation to Badlaav Foundation is a voluntary contribution to our
          work with children in care. Once a donation is made, it is treated as
          final and is generally not refundable, because funds are committed to
          programmes soon after they are received.
        </p>
      </>
    ),
  },
  {
    num: "03",
    eyebrow: "The exception",
    title: "Genuine transaction errors.",
    icon: AlertCircle,
    accent: "var(--saffron)",
    body: (
      <>
        <p>
          We will review a refund request in good faith where there has been a
          genuine error, such as:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>A duplicate payment for the same donation.</li>
          <li>An incorrect amount caused by a clear technical error.</li>
          <li>An unauthorised transaction reported promptly.</li>
        </ul>
        <p>
          Please raise such requests within 7 days of the transaction so we can
          verify the records.
        </p>
      </>
    ),
  },
  {
    num: "04",
    eyebrow: "How to ask",
    title: "Requesting a review.",
    icon: Mail,
    accent: "var(--teal)",
    body: (
      <>
        <p>
          Write to{" "}
          <a href={`mailto:${EMAILS.give}`} style={{ color: "var(--teal)" }}>
            {EMAILS.give}
          </a>{" "}
          with the date, amount and payment reference. Approved refunds are
          returned to the original payment method, and timelines depend on Ketto
          and your bank or card provider.
        </p>
      </>
    ),
  },
  {
    num: "05",
    eyebrow: "Tax",
    title: "80G certificates and refunds.",
    icon: ReceiptText,
    accent: "var(--plum)",
    body: (
      <>
        <p>
          If an 80G certificate has already been issued for a donation that is
          later refunded, the certificate is no longer valid and should not be
          used for any tax claim.
        </p>
      </>
    ),
  },
];

function Page() {
  return (
    <LegalDoc
      eyebrow="Refund Policy"
      heroIcon={RotateCcw}
      title="Clear, fair, and honest."
      intro="Donations fund the work and are final, but genuine transaction errors are reviewed promptly and in good faith."
      updated="May 2026"
      sections={sections}
    />
  );
}
