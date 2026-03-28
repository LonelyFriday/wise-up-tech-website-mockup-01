export default function Badge({ children, className = "" }) {
  return (
    <span className={`text-[11px] font-semibold uppercase tracking-wider px-3 py-1 bg-off-white text-text-muted rounded-full border border-border-light ${className}`}>
      {children}
    </span>
  );
}
