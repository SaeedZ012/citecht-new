/**
 * Soft muted band behind the tech marquee — no grid or pinstripes.
 */
export function TechStackBackdrop() {
  return (
    <div
      className="pointer-events-none absolute inset-0 bg-muted/50"
      aria-hidden="true"
    />
  );
}
