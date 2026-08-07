const VERTICAL_LINES = 14;
const HORIZONTAL_LINES = 6;

/**
 * Full-bleed, extremely faint engineering-grid backdrop for the About hero,
 * plus a soft accent glow and hairline corner brackets. Mirrors the visual
 * language of the Home/Services heroes (grid + accent glow) while staying on
 * a light surface — pure SVG lines and semantic tokens, no gradients.
 */
export function HeroBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <svg
        className="absolute inset-0 h-full w-full text-foreground/[0.04]"
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
      >
        {Array.from({ length: VERTICAL_LINES + 1 }).map((_, index) => {
          const x = (index / VERTICAL_LINES) * 100;
          return (
            <line
              key={`v-${index}`}
              x1={x}
              y1={0}
              x2={x}
              y2={100}
              stroke="currentColor"
              strokeWidth="0.15"
            />
          );
        })}
        {Array.from({ length: HORIZONTAL_LINES + 1 }).map((_, index) => {
          const y = (index / HORIZONTAL_LINES) * 100;
          return (
            <line
              key={`h-${index}`}
              x1={0}
              y1={y}
              x2={100}
              y2={y}
              stroke="currentColor"
              strokeWidth="0.15"
            />
          );
        })}
      </svg>

      <div
        className="animate-breathe absolute right-[-10%] top-1/3 h-80 w-80 -translate-y-1/2 rounded-full bg-accent/10 blur-3xl"
        style={{ animationDelay: "-1.5s" }}
      />

      <span className="absolute left-6 top-6 h-8 w-8 border-l border-t border-border sm:left-8 sm:top-8" />
      <span className="absolute bottom-6 right-6 h-8 w-8 border-b border-r border-border sm:bottom-8 sm:right-8" />
    </div>
  );
}
