import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Youtube, Linkedin, Mail, Phone } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { subscribeNewsletter } from "@/lib/newsletter.functions";
import {
  EMAILS,
  SOCIAL,
  PHONE_DISPLAY,
  WHATSAPP_URL,
  CERTIFICATIONS,
  MISSION,
} from "@/lib/site";

const navGroups = [
  {
    title: "Explore",
    links: [
      { label: "About", to: "/about" },
      { label: "Our Model", to: "/our-model" },
      { label: "Stories", to: "/stories" },
      { label: "Get Involved", to: "/get-involved" },
    ],
  },
  {
    title: "Programmes",
    links: [
      { label: "CARE", to: "/care" },
      { label: "Dagdya", to: "/dagdya" },
      { label: "Camp Infinity", to: "/camp-infinity" },
    ],
  },
  {
    title: "Act",
    links: [
      { label: "Support Us", to: "/support" },
      { label: "Certificate", to: "/certificate" },
    ],
  },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const [error, setError] = useState(false);
  const [sending, setSending] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSending(true);
    setError(false);
    try {
      await subscribeNewsletter({ data: { email: email.trim() } });
      setDone(true);
    } catch {
      setError(true);
    } finally {
      setSending(false);
    }
  };

  return (
    <footer className="text-cream" style={{ backgroundColor: "var(--ink)", color: "var(--cream)" }}>
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo className="h-7 w-auto" />
            <p className="mt-4 max-w-xs text-sm" style={{ color: "rgba(247,243,235,0.7)" }}>
              {MISSION}
            </p>
            <p
              className="mt-4 text-2xl"
              style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--lime)" }}
            >
              बदलाव हम से है
            </p>
          </div>

          {navGroups.map((g) => (
            <div key={g.title} className="lg:col-span-2">
              <h4 className="mb-3 text-xs uppercase tracking-widest" style={{ color: "rgba(247,243,235,0.5)" }}>
                {g.title}
              </h4>
              <ul className="space-y-2">
                {g.links.map((l) => (
                  <li key={l.to}>
                    <Link to={l.to} className="text-sm transition-opacity hover:opacity-70">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="lg:col-span-2">
            <h4 className="mb-3 text-xs uppercase tracking-widest" style={{ color: "rgba(247,243,235,0.5)" }}>
              Contact
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" />
                <a href={`mailto:${EMAILS.give}`} className="hover:opacity-70">{EMAILS.give}</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" />
                <a href={`mailto:${EMAILS.csr}`} className="hover:opacity-70">{EMAILS.csr}</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" />
                <a href={`mailto:${EMAILS.info}`} className="hover:opacity-70">{EMAILS.info}</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                <a href={WHATSAPP_URL} className="hover:opacity-70">{PHONE_DISPLAY}</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter + social on one row: form left, filled social icons right */}
        <div className="mt-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="w-full max-w-md">
            <h4 className="mb-3 text-xs uppercase tracking-widest" style={{ color: "rgba(247,243,235,0.5)" }}>
              Stay in the loop
            </h4>
            {done ? (
              <p className="text-sm" style={{ color: "var(--lime)" }}>
                Thank you. You are on the list.
              </p>
            ) : (
              <>
                <form onSubmit={onSubmit} className="flex gap-2">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email"
                    aria-label="Email for newsletter"
                    className="w-full rounded-lg border bg-transparent px-4 py-3 text-sm outline-none placeholder:text-cream/40"
                    style={{ borderColor: "rgba(247,243,235,0.25)" }}
                  />
                  <button type="submit" disabled={sending} className="btn btn-lime disabled:opacity-60" style={{ padding: "12px 20px" }}>
                    {sending ? "..." : "Join"}
                  </button>
                </form>
                {error ? (
                  <p className="mt-2 text-sm" style={{ color: "var(--terra)" }}>
                    Something went wrong. Please try again.
                  </p>
                ) : null}
              </>
            )}
          </div>

          {/* Filled social icons, right-aligned next to the Join button */}
          <div className="flex gap-3 md:justify-end">
            {[
              { href: SOCIAL.instagram, label: "Instagram", Icon: Instagram },
              { href: SOCIAL.facebook, label: "Facebook", Icon: Facebook },
              { href: SOCIAL.youtube, label: "YouTube", Icon: Youtube },
              { href: SOCIAL.linkedin, label: "LinkedIn", Icon: Linkedin },
            ].map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl transition-transform hover:-translate-y-0.5"
                style={{ backgroundColor: "var(--lime)", color: "var(--ink)" }}
              >
                <Icon className="h-5 w-5" fill="currentColor" stroke="var(--ink)" strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>

        {/* Certifications strip */}
        <div
          className="mt-10 flex flex-wrap gap-x-6 gap-y-2 border-t pt-6 text-xs"
          style={{ borderColor: "rgba(247,243,235,0.15)", color: "rgba(247,243,235,0.6)" }}
        >
          {CERTIFICATIONS.map((c) => (
            <span key={c}>{c}</span>
          ))}
        </div>

        <div
          className="mt-6 flex flex-col gap-3 text-xs sm:flex-row sm:items-center sm:justify-between"
          style={{ color: "rgba(247,243,235,0.5)" }}
        >
          <p>© {new Date().getFullYear()} Badlaav Foundation</p>
          <div className="flex gap-5">
            <Link to="/terms" className="hover:opacity-70">Terms</Link>
            <Link to="/privacy" className="hover:opacity-70">Privacy</Link>
            <Link to="/refund" className="hover:opacity-70">Refund</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}