// Signature seven-stop brand bar. Placed directly after every hero.
export function GradientBar({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`h-1.5 w-full ${className ?? ""}`}
      style={{ background: "var(--gradient-brand)" }}
    />
  );
}