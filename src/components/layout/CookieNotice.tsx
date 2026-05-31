import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Cookie, X } from "lucide-react";

const STORAGE_KEY = "badlaav.cookie.ack";

// Slim, India DPDP-aware notice. We only use essential cookies, so this is a
// notice with a single acknowledgement rather than a consent wall. The choice
// is remembered in localStorage and never blocks the page.
export function CookieNotice() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setShow(true);
    } catch {
      /* storage blocked: do not nag */
    }
  }, []);

  const dismiss = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }
    setShow(false);
  };

  if (!show) return null;

  return (
    <div
      className="fixed inset-x-3 bottom-3 z-[60] mx-auto max-w-3xl rounded-xl border p-4 shadow-xl sm:inset-x-5 sm:bottom-5 sm:p-5"
      style={{ backgroundColor: "var(--cream2)", borderColor: "var(--stone)" }}
      role="region"
      aria-label="Cookie notice"
    >
      <div className="flex items-start gap-3">
        <Cookie className="mt-0.5 h-5 w-5 shrink-0" strokeWidth={1.6} style={{ color: "var(--saffron)" }} />
        <div className="flex-1 text-sm" style={{ color: "var(--wg)" }}>
          <p>
            We use only essential cookies to keep this site working. We do not
            track you for advertising. Read more in our{" "}
            <Link to="/privacy" className="underline" style={{ color: "var(--teal)" }}>
              Privacy Policy
            </Link>
            .
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={dismiss}
              className="btn btn-lime"
              style={{ padding: "10px 22px" }}
            >
              Got it
            </button>
          </div>
        </div>
        <button
          type="button"
          onClick={dismiss}
          aria-label="Dismiss cookie notice"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-colors hover:bg-black/5"
        >
          <X className="h-5 w-5" style={{ color: "var(--wg)" }} />
        </button>
      </div>
    </div>
  );
}