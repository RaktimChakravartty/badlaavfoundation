import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, ChevronDown, Heart } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { ROUTE_ICONS, PROGRAMMES_ICON, PROGRAMME_ACCENT } from "@/lib/nav-icons";

const programmes = [
  { label: "CARE", to: "/care" as const },
  { label: "Dagdya", to: "/dagdya" as const },
  { label: "Camp Infinity", to: "/camp-infinity" as const },
];

const links = [
  { label: "About", to: "/about" as const },
  { label: "Our Model", to: "/our-model" as const },
  { label: "Stories", to: "/stories" as const },
  { label: "Get Involved", to: "/get-involved" as const },
];

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [progOpen, setProgOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="sticky top-0 z-50 w-full border-b backdrop-blur transition-colors"
      style={{
        backgroundColor: scrolled ? "rgba(247,243,235,0.9)" : "var(--cream)",
        borderColor: "var(--stone)",
        color: "var(--ink)",
      }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8">
        <Link to="/" className="flex items-center" aria-label="Badlaav Foundation home">
          <Logo className="h-7 w-auto sm:h-8" />
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-6 min-[900px]:flex">
          {links.slice(0, 2).map((l) => {
            const Icon = ROUTE_ICONS[l.to];
            return (
              <Link
                key={l.to}
                to={l.to}
                className="flex items-center gap-1.5 text-sm transition-opacity hover:opacity-70"
              >
                <Icon className="h-4 w-4" strokeWidth={1.6} />
                {l.label}
              </Link>
            );
          })}

          <div className="relative" onMouseLeave={() => setProgOpen(false)}>
            <button
              className="flex items-center gap-1.5 text-sm transition-opacity hover:opacity-70"
              onMouseEnter={() => setProgOpen(true)}
              onClick={() => setProgOpen((v) => !v)}
              aria-expanded={progOpen}
            >
              <PROGRAMMES_ICON className="h-4 w-4" strokeWidth={1.6} />
              Programmes <ChevronDown className="h-4 w-4" />
            </button>
            {progOpen && (
              <div
                className="absolute left-0 top-full min-w-56 rounded-xl border p-1.5 shadow-xl"
                style={{ backgroundColor: "#fff", borderColor: "var(--stone)" }}
              >
                {programmes.map((p) => {
                  const Icon = ROUTE_ICONS[p.to];
                  return (
                    <Link
                      key={p.to}
                      to={p.to}
                      className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm transition-colors hover:bg-black/5"
                    >
                      <Icon
                        className="h-4 w-4"
                        strokeWidth={1.6}
                        style={{ color: PROGRAMME_ACCENT[p.to] }}
                      />
                      {p.label}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          {links.slice(2).map((l) => {
            const Icon = ROUTE_ICONS[l.to];
            return (
              <Link
                key={l.to}
                to={l.to}
                className="flex items-center gap-1.5 text-sm transition-opacity hover:opacity-70"
              >
                <Icon className="h-4 w-4" strokeWidth={1.6} />
                {l.label}
              </Link>
            );
          })}

          <Link to="/support" className="btn btn-lime" style={{ padding: "10px 22px" }}>
            <Heart className="h-4 w-4" strokeWidth={2} />
            Support Us
          </Link>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-3 min-[900px]:hidden">
          <Link to="/support" className="btn btn-lime" style={{ padding: "10px 16px" }}>
            <Heart className="h-4 w-4" strokeWidth={2} />
            Support
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="p-1"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div
          className="border-t min-[900px]:hidden"
          style={{ borderColor: "var(--stone)", backgroundColor: "var(--cream)" }}
        >
          <div className="flex flex-col px-5 py-3">
            {links.map((l) => {
              const Icon = ROUTE_ICONS[l.to];
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 border-b py-3 text-sm"
                  style={{ borderColor: "var(--stone)" }}
                >
                  <Icon className="h-4 w-4" strokeWidth={1.6} />
                  {l.label}
                </Link>
              );
            })}
            <div className="py-3">
              <p className="mb-2 text-xs uppercase tracking-widest" style={{ color: "var(--wg)" }}>
                Programmes
              </p>
              {programmes.map((p) => {
                const Icon = ROUTE_ICONS[p.to];
                return (
                  <Link
                    key={p.to}
                    to={p.to}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 py-2 pl-1 text-sm"
                  >
                    <Icon
                      className="h-4 w-4"
                      strokeWidth={1.6}
                      style={{ color: PROGRAMME_ACCENT[p.to] }}
                    />
                    {p.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
