import { Heading, Text } from "@/components/ui/Typography";
import { Icon } from "@/components/ui/Icon";
import { MILESTONES, FOCUS_AREAS } from "./aboutHeroData";

/**
 * "Our Journey" — an open, unboxed vertical timeline from founding to today.
 * The About hero's visual counterpart to the Home carousel and Services
 * connected-system graphic: no card boundary, just icon markers on a
 * hairline, framed by a slow-spinning orbit ring and a soft accent glow.
 */
export function HeroJourney() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div
        className="animate-spin-slow pointer-events-none absolute -right-8 -top-12 h-40 w-40 rounded-full border border-dashed border-accent/25"
        style={{ animationDuration: "70s" }}
        aria-hidden="true"
      />
      <div
        className="animate-breathe pointer-events-none absolute -left-10 bottom-4 h-32 w-32 rounded-full bg-accent/10 blur-2xl"
        style={{ animationDelay: "-2.5s" }}
        aria-hidden="true"
      />

      <span className="relative inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-muted-foreground">
        <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
        OUR JOURNEY
      </span>

      <div className="relative mt-8 flex flex-col gap-8">
        <div
          className="absolute bottom-4 left-[27px] top-4 w-px bg-accent/20"
          aria-hidden="true"
        />

        {MILESTONES.map((milestone, index) => (
          <div
            key={milestone.label}
            className="animate-fade-rise relative flex items-center gap-5"
            style={{ animationDelay: `${index * 110}ms` }}
          >
            <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-border bg-surface text-accent shadow-sm">
              <Icon size="md">{milestone.icon}</Icon>
            </span>
            <div className="flex flex-col">
              <Heading variant="h3" as="span" className="leading-none">
                {milestone.value}
              </Heading>
              <Text variant="muted" className="mt-1">
                {milestone.label}
              </Text>
            </div>
          </div>
        ))}
      </div>

      <div className="relative mt-8 max-w-xs border-t border-border pt-4 font-mono text-[10px] tracking-[0.2em] text-muted-foreground/70">
        {FOCUS_AREAS.join("  ·  ")}
      </div>
    </div>
  );
}
