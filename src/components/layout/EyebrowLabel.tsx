export function EyebrowLabel({
  children,
  className,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <span className={`eyebrow ${className ?? ""}`} style={style}>
      {children}
    </span>
  );
}