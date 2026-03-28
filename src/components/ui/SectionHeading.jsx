import RevealOnScroll from './RevealOnScroll';

const badgeVariants = {
  primary: "bg-navy/10 text-navy",
  accent: "bg-warm-yellow text-golden-muted",
};

export default function SectionHeading({ badge, title, subtitle, variant = "primary", className = "" }) {
  return (
    <RevealOnScroll className={className}>
      <div className="text-center max-w-2xl mx-auto mb-16">
        {badge && (
          <div className={`inline-block px-3 py-1 mb-4 rounded-lg text-xs font-bold uppercase tracking-wider ${badgeVariants[variant]}`}>
            {badge}
          </div>
        )}
        <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-5 font-heading">
          {title}
        </h2>
        {subtitle && (
          <p className="text-text-muted text-lg">{subtitle}</p>
        )}
      </div>
    </RevealOnScroll>
  );
}
