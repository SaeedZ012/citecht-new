import { Icon } from "@/components/ui/Icon";
import { Heading, Text } from "@/components/ui/Typography";
import { cn } from "@/utils/cn";
import type { ProcessStep } from "./processSteps";

export interface ProcessStepRowProps {
  step: ProcessStep;
  isRight: boolean;
}

/**
 * A single zig-zag timeline row: content sits left or right of a central
 * icon node depending on `isRight`, keeping the timeline line centered.
 */
export function ProcessStepRow({ step, isRight }: ProcessStepRowProps) {
  return (
    <div className="relative grid gap-5 sm:grid-cols-[1fr_auto_1fr] sm:items-start sm:gap-8">
      <div
        className={cn(
          "flex flex-col gap-3 sm:row-start-1",
          isRight ? "sm:col-start-3" : "sm:col-start-1"
        )}
      >
        <span className="text-xs font-semibold tracking-[0.2em] text-accent">
          STEP {step.step}
        </span>

        <Heading variant="h4" as="h3">
          {step.title}
        </Heading>

        <Text variant="muted">{step.description}</Text>

        <ul className="flex flex-col gap-1.5">
          {step.items.map((item) => (
            <li
              key={item}
              className="flex items-center gap-2 text-sm text-muted-foreground"
            >
              <Icon size="sm" className="shrink-0 text-accent">
                <path d="M20 6 9 17l-5-5" />
              </Icon>
              <Text as="span" variant="bodySmall">
                {item}
              </Text>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex justify-center sm:col-start-2 sm:row-start-1">
        <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-sm">
          <Icon size="sm">{step.icon}</Icon>
        </span>
      </div>
    </div>
  );
}
