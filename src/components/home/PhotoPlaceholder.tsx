// Renders a real photograph when `src` is given; otherwise a brand fallback
// block naming the photo that will go there. Real photos never AI-generated.
export function PhotoPlaceholder({
  label,
  className,
  tone = "cream",
  src,
}: {
  label: string;
  className?: string;
  tone?: "ink" | "stone" | "cream";
  src?: string;
}) {
  if (src) {
    return (
      <div
        className={`relative overflow-hidden rounded-xl ${className ?? ""}`}
        style={{ border: "1px solid var(--stone)" }}
      >
        <img
          src={src}
          alt={label}
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <div className="grid-texture pointer-events-none absolute inset-0" aria-hidden="true" />
      </div>
    );
  }

  const bg =
    tone === "ink"
      ? "color-mix(in srgb, var(--ink) 88%, black)"
      : tone === "stone"
        ? "var(--stone)"
        : "var(--cream2)";
  const fg = tone === "ink" ? "rgba(247,243,235,0.55)" : "var(--wg)";
  const border = tone === "ink" ? "rgba(247,243,235,0.2)" : "var(--stone)";
  return (
    <div
      className={`grid-texture relative flex items-end overflow-hidden rounded-xl ${className ?? ""}`}
      style={{ backgroundColor: bg, border: `1px solid ${border}` }}
      role="img"
      aria-label={label}
    >
      <span
        className="m-3 rounded-md px-2.5 py-1 text-[10px] uppercase tracking-widest"
        style={{ color: fg, border: `1px solid ${fg}` }}
      >
        Photo · {label}
      </span>
    </div>
  );
}