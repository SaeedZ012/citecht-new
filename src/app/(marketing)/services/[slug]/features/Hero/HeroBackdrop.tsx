/**
 * Soft light atmosphere for the service detail hero — semantic orbs only.
 */
export function HeroBackdrop() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-muted/30" />
      <div className="animate-breathe absolute -left-[12%] -top-[20%] h-[26rem] w-[26rem] rounded-full bg-accent/[0.08] blur-3xl" />
      <div className="absolute -bottom-[18%] -right-[10%] h-[24rem] w-[24rem] rounded-full bg-info/[0.08] blur-3xl" />
      <div className="absolute left-[45%] top-[20%] h-36 w-36 rounded-full bg-background/90 blur-2xl" />
    </div>
  );
}
