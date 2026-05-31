import { Reveal } from "@/components/layout/Reveal";

type PhotoFigureProps = {
  src?: string;
  alt: string;
  caption: string;
  className?: string;
  aspect?: string;
  priority?: boolean;
};

// Duotone (ink over cream) real photograph with a field-report caption:
// a thin rule above small uppercase IBM Plex Sans. Lazy-loaded; alt required.
// When no src resolves, a labelled empty figure is shown (never stock).
export function PhotoFigure({
  src,
  alt,
  caption,
  className,
  aspect = "4 / 3",
  priority = false,
}: PhotoFigureProps) {
  return (
    <Reveal as="figure" className={className}>
      <div className="duotone w-full rounded-lg" style={{ aspectRatio: aspect }}>
        {src ? (
          <img
            src={src}
            alt={alt}
            loading={priority ? "eager" : "lazy"}
            fetchPriority={priority ? "high" : "auto"}
            decoding="async"
          />
        ) : (
          <div
            className="grid-texture flex h-full w-full items-end p-4"
            style={{ mixBlendMode: "normal" }}
          >
            <span
              className="text-xs uppercase tracking-widest"
              style={{ color: "var(--cream)" }}
            >
              Photo to supply
            </span>
          </div>
        )}
      </div>
      <figcaption className="figcap mt-3">{caption}</figcaption>
    </Reveal>
  );
}
