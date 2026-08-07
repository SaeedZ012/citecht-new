const VERTICAL_LINES = 16;
const HORIZONTAL_LINES = 6;

/**
 * Decorative, purely visual backdrop for the closing CTA: a faint
 * engineering grid, a slow-breathing glow, and two hairline orbit rings.
 * Every element uses semantic tokens at low opacity — no gradients, no
 * hardcoded colors — and respects `prefers-reduced-motion` via the shared
 * `animate-breathe` / `animate-spin-slow` utilities.
 */
export function CTABackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <svg
        className="absolute inset-0 h-full w-full text-background/[0.06] dark:text-foreground/[0.06]"
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
        className="animate-breathe absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/25 blur-3xl"
        style={{ animationDelay: "-2s" }}
      />

      <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full border border-background/10 dark:border-foreground/10" />
      <div
        className="animate-spin-slow absolute -right-20 -top-20 h-56 w-56 rounded-full border border-dashed border-background/15 dark:border-foreground/15"
        style={{ animationDuration: "90s" }}
      />

      <span className="absolute left-6 top-6 h-8 w-8 border-l border-t border-background/20 dark:border-foreground/20 sm:left-8 sm:top-8" />
      <span className="absolute bottom-6 right-6 h-8 w-8 border-b border-r border-background/20 dark:border-foreground/20 sm:bottom-8 sm:right-8" />
    </div>
  );
}
