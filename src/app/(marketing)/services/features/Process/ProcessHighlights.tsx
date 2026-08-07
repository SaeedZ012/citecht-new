import { Icon } from "@/components/ui/Icon";
import { Heading, Text } from "@/components/ui/Typography";
import { cn } from "@/utils/cn";
import { PROCESS_PANEL, PROCESS_TEXT_MUTED } from "./processTokens";
import { PROCESS_HIGHLIGHTS } from "./processHighlightsData";

/**
 * "What working with us looks like" — a compact strip of engagement-model
 * details sitting under the interactive showcase.
 */
export function ProcessHighlights() {
  return (
    <div
      className={cn(
        "relative mx-auto mt-14 grid max-w-5xl gap-6 rounded-lg border p-6 sm:mt-16 sm:grid-cols-3 sm:p-8",
        PROCESS_PANEL
      )}
    >
      {PROCESS_HIGHLIGHTS.map((highlight) => (
        <div key={highlight.title} className="flex items-start gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
            <Icon size="sm">{highlight.icon}</Icon>
          </span>
          <div className="flex flex-col gap-1">
            <Heading variant="h4" className="text-base">
              {highlight.title}
            </Heading>
            <Text variant="muted" className={PROCESS_TEXT_MUTED}>
              {highlight.description}
            </Text>
          </div>
        </div>
      ))}
    </div>
  );
}
