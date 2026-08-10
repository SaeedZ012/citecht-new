const VERTICAL_LINES = 16;
const HORIZONTAL_LINES = 6;

/**
 * Decorative backdrop for the closing CTA: a faint engineering grid and
 * corner marks. Kept quiet on purpose — no pulsing orbs or spinning rings.
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

      <span className="absolute left-6 top-6 h-8 w-8 border-l border-t border-background/20 dark:border-foreground/20 sm:left-8 sm:top-8" />
      <span className="absolute bottom-6 right-6 h-8 w-8 border-b border-r border-background/20 dark:border-foreground/20 sm:bottom-8 sm:right-8" />
    </div>
  );
}
