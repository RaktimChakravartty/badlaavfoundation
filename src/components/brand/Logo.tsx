import { Wordmark } from "./Wordmark";

// Official "Badlaav Foundation" wordmark. The inline SVG inherits currentColor,
// so it renders ink on light surfaces (header) and cream on the ink footer.
export function Logo({ className }: { className?: string }) {
  return <Wordmark className={className} />;
}
