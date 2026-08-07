const COLUMNS = 24;
const ROWS = 10;
const DOT_RADIUS = 0.55;

/**
 * Faint dot-grid backdrop for the Insights hero — an editorial texture
 * distinct from the line-grids used on the Home/Services/About heroes —
 * paired with a soft accent glow. Pure SVG and semantic tokens, no
 * gradients.
 */
export function HeroBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <svg
        className="absolute inset-0 h-full w-full text-foreground/[0.06]"
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
      >
        {Array.from({ length: ROWS + 1 }).map((_, row) =>
          Array.from({ length: COLUMNS + 1 }).map((_, col) => (
            <circle
              key={`${row}-${col}`}
              cx={(col / COLUMNS) * 100}
              cy={(row / ROWS) * 100}
              r={DOT_RADIUS}
              fill="currentColor"
            />
          ))
        )}
      </svg>

      <div
        className="animate-breathe absolute left-[-8%] top-0 h-72 w-72 rounded-full bg-accent/10 blur-3xl"
        style={{ animationDelay: "-3s" }}
      />

      <div className="absolute inset-x-0 bottom-0 h-px bg-border" />
    </div>
  );
}
