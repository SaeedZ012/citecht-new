const VERTICAL_LINES = 18;
const HORIZONTAL_LINES = 8;

/**
 * Full-bleed, extremely faint grid backdrop for the Tech Stack band —
 * same technique as the About hero grid, tuned for this light surface.
 */
export function TechStackBackdrop() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full text-foreground/[0.04]"
      preserveAspectRatio="none"
      viewBox="0 0 100 100"
      aria-hidden="true"
    >
      {Array.from({ length: VERTICAL_LINES + 1 }).map((_, index) => {
        const x = (index / VERTICAL_LINES) * 100;
        return (
          <line key={`v-${index}`} x1={x} y1={0} x2={x} y2={100} stroke="currentColor" strokeWidth="0.15" />
        );
      })}
      {Array.from({ length: HORIZONTAL_LINES + 1 }).map((_, index) => {
        const y = (index / HORIZONTAL_LINES) * 100;
        return (
          <line key={`h-${index}`} x1={0} y1={y} x2={100} y2={y} stroke="currentColor" strokeWidth="0.15" />
        );
      })}
    </svg>
  );
}
