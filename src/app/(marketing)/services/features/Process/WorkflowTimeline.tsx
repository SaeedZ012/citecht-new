"use client";

import { motion } from "framer-motion";
import { useMediaQuery } from "@/hooks";
import { cn } from "@/utils/cn";
import { PROCESS_HAIRLINE } from "./processTokens";
import type { WorkflowStep } from "./processSteps";

export interface WorkflowTimelineProps {
  steps: WorkflowStep[];
  activeIndex: number;
  onSelect: (index: number) => void;
}

/**
 * Horizontal progress timeline. Two stacked rows rather than one:
 *
 * 1. Fixed-width (`h-14 w-14`), non-stretching nodes laid out with
 *    `justify-between` — this keeps the first/last node's *center* at an
 *    exact, predictable offset (half the node width) from the row's edges,
 *    so the connecting line underneath can be positioned with plain
 *    `left-7 right-7` and always meet every node precisely.
 * 2. A `grid` of labels with as many equal columns as steps — decoupled
 *    from row 1 so a label's text width never perturbs the node math above.
 *
 * Scrolls horizontally on narrow screens; every node is a real button so
 * steps are keyboard- and click-jumpable.
 */
export function WorkflowTimeline({ steps, activeIndex, onSelect }: WorkflowTimelineProps) {
  const prefersReducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const progress = steps.length > 1 ? activeIndex / (steps.length - 1) : 0;

  return (
    <nav aria-label="Workflow steps" className="-mx-6 overflow-x-auto px-6 pb-1 sm:mx-0 sm:overflow-visible sm:px-0">
      <div className="mx-auto min-w-[560px] sm:min-w-0">
        <div className="relative flex items-center justify-between">
          <div className={cn("absolute left-7 right-7 h-px border-t", PROCESS_HAIRLINE)} aria-hidden="true" />
          <div className="absolute left-7 right-7 h-px overflow-hidden" aria-hidden="true">
            <motion.div
              className="h-full bg-accent"
              initial={false}
              animate={{ width: `${progress * 100}%` }}
              transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            />
          </div>

          {steps.map((step, index) => {
            const isActive = index === activeIndex;
            const isComplete = index < activeIndex;

            return (
              <button
                key={step.id}
                type="button"
                onClick={() => onSelect(index)}
                aria-current={isActive ? "step" : undefined}
                aria-label={`Step ${step.number}: ${step.title}`}
                className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                {isActive ? (
                  <span className="animate-breathe pointer-events-none absolute -inset-2 rounded-full bg-accent/20 blur-md" aria-hidden="true" />
                ) : null}
                <span
                  className={cn(
                    "relative flex h-14 w-14 items-center justify-center rounded-full border font-mono text-sm font-semibold transition-all duration-500",
                    isActive
                      ? "scale-110 border-accent bg-accent text-accent-foreground"
                      : isComplete
                        ? "border-accent/50 bg-accent/10 text-accent"
                        : "border-border bg-background text-muted-foreground"
                  )}
                >
                  {step.number}
                </span>
              </button>
            );
          })}
        </div>

        <div
          className="mt-4 grid gap-2"
          style={{ gridTemplateColumns: `repeat(${steps.length}, minmax(0, 1fr))` }}
        >
          {steps.map((step, index) => {
            const isActive = index === activeIndex;
            const isComplete = index < activeIndex;

            return (
              <button
                key={step.id}
                type="button"
                onClick={() => onSelect(index)}
                tabIndex={-1}
                aria-hidden="true"
                className="flex flex-col items-center gap-0.5 text-center focus-visible:outline-none"
              >
                <span
                  className={cn(
                    "text-[11px] font-semibold tracking-[0.15em] transition-colors",
                    isActive
                      ? "text-accent"
                      : isComplete
                        ? "text-foreground"
                        : "text-muted-foreground"
                  )}
                >
                  {step.number} {step.title.toUpperCase()}
                </span>
                <span className="text-[11px] text-muted-foreground">{step.subtitle}</span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
