import type { LucideIcon } from "lucide-react";

type IconBadgeProps = {
  icon: LucideIcon;
  accent?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
};

const SIZES = {
  sm: { box: "h-9 w-9", icon: 18 },
  md: { box: "h-11 w-11", icon: 22 },
  lg: { box: "h-14 w-14", icon: 26 },
} as const;

// Consistent icon treatment used site-wide: a rounded square on cream with a
// subtle full-spectrum gradient ring and an accent-tinted line icon. Keeps the
// icon language uniform across nav, cards, stats and pages.
export function IconBadge({ icon: Icon, accent = "var(--teal)", size = "md", className }: IconBadgeProps) {
  const s = SIZES[size];
  return (
    <span
      className={`gradient-ring inline-flex shrink-0 items-center justify-center rounded-xl ${s.box} ${className ?? ""}`}
      style={{ backgroundColor: "color-mix(in oklab, var(--cream2) 92%, transparent)" }}
      aria-hidden="true"
    >
      <Icon size={s.icon} strokeWidth={1.6} color={accent} />
    </span>
  );
}