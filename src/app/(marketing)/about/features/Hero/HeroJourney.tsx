import { Heading, Text } from "@/components/ui/Typography";
import { Icon } from "@/components/ui/Icon";
import { MILESTONES, FOCUS_AREAS } from "./aboutHeroData";

/**
 * Quiet journey timeline for the About hero — no orbit rings or glow.
 */
export function HeroJourney() {
  return (
    <div className="w-full max-w-md lg:ml-auto">
      <span className="font-mono text-[11px] tracking-[0.16em] text-muted-foreground">
        Our journey
      </span>

      <div className="relative mt-8 flex flex-col gap-7">
        <div
          className="absolute bottom-3 left-[27px] top-3 w-px bg-border"
          aria-hidden="true"
        />

        {MILESTONES.map((milestone) => (
          <div key={milestone.label} className="relative flex items-center gap-5">
            <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-border bg-surface text-accent">
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

      <p className="mt-8 border-t border-border pt-4 text-xs text-muted-foreground">
        {FOCUS_AREAS.map((area) => area.charAt(0) + area.slice(1).toLowerCase()).join(" · ")}
      </p>
    </div>
  );
}
