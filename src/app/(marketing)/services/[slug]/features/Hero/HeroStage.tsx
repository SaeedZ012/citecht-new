/**
 * Light stage framing for the service detail 3D visual — pedestal, orbit
 * rings, and soft wells. No photo panels; keeps the composition bright.
 */
export function HeroStage() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      <div className="animate-breathe absolute -left-[10%] top-[6%] h-44 w-44 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute -right-[6%] bottom-[8%] h-52 w-52 rounded-full bg-info/10 blur-3xl" />

      <div className="absolute inset-[8%] rounded-[1.75rem] border border-border/80 bg-surface shadow-sm" />
      <div className="absolute inset-[12%] rounded-[1.35rem] bg-muted/50" />

      <div className="absolute inset-[6%] flex items-center justify-center">
        <div className="animate-orbit absolute h-[88%] w-[88%] rounded-full border border-dashed border-accent/20" />
        <div className="animate-orbit-reverse absolute h-[70%] w-[70%] rounded-full border border-info/15" />
      </div>

      <div
        className="absolute bottom-[7%] left-[18%] right-[18%] h-[20%] origin-bottom rounded-[50%] border border-info/10 bg-info/[0.05]"
        style={{ transform: "rotateX(68deg) scaleY(0.55)" }}
      />
      <div className="absolute bottom-[11%] left-1/2 h-3 w-[36%] -translate-x-1/2 rounded-full bg-accent/15 blur-md" />
    </div>
  );
}
