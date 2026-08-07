const VERTICAL_LINES = 12;
const HORIZONTAL_LINES = 7;

/**
 * Full-bleed, extremely faint engineering-grid backdrop for the Services
 * hero. Pure SVG lines (no gradients) so it stays crisp and reuses only the
 * `info` semantic token at very low opacity.
 */
export function HeroGridBackdrop() {
  return (
    <svg
      className="absolute inset-0 h-full w-full text-info/[0.07] dark:text-info/[0.12]"
      preserveAspectRatio="none"
      viewBox="0 0 100 100"
      aria-hidden="true"
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
  );
}
