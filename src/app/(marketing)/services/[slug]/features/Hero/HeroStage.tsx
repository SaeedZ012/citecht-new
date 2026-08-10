/**
 * Light stage framing for the service detail 3D visual — pedestal and
 * orbit rings. Kept quiet so the 3D asset stays the focus.
 */
export function HeroStage() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      <div className="absolute inset-[8%] rounded-[1.75rem] border border-border/80 bg-surface" />
      <div className="absolute inset-[12%] rounded-[1.35rem] bg-muted/50" />

      <div className="absolute inset-[6%] flex items-center justify-center">
        <div className="absolute h-[88%] w-[88%] rounded-full border border-dashed border-accent/20" />
        <div className="absolute h-[70%] w-[70%] rounded-full border border-info/15" />
      </div>

      <div
        className="absolute bottom-[7%] left-[18%] right-[18%] h-[20%] origin-bottom rounded-[50%] border border-info/10 bg-info/[0.05]"
        style={{ transform: "rotateX(68deg) scaleY(0.55)" }}
      />
    </div>
  );
}
