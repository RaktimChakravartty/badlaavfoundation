// The seven-stop spectrum, used at most once per page as a single thin
// signature divider. Never a band behind content.
const STOPS = [
  "var(--sky)",
  "var(--teal)",
  "var(--lime)",
  "var(--saffron)",
  "var(--terra)",
  "var(--plum)",
  "var(--ink)",
];

export function SpectrumSpine({ className }: { className?: string }) {
  return (
    <div
      className={`flex h-[3px] w-full overflow-hidden ${className ?? ""}`}
      role="presentation"
      aria-hidden="true"
    >
      {STOPS.map((c) => (
        <span key={c} className="h-full flex-1" style={{ backgroundColor: c }} />
      ))}
    </div>
  );
}
