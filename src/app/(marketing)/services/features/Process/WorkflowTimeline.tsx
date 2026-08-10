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
 * Horizontal step timeline — numbers on the line, short titles below.
 */
export function WorkflowTimeline({
  steps,
  activeIndex,
  onSelect,
}: WorkflowTimelineProps) {
  const prefersReducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const progress = steps.length > 1 ? activeIndex / (steps.length - 1) : 0;

  return (
    <nav
      aria-label="Workflow steps"
      className="-mx-6 overflow-x-auto px-6 pb-1 sm:mx-0 sm:overflow-visible sm:px-0"
    >
      <div className="mx-auto min-w-[520px] sm:min-w-0">
        <div className="relative flex items-center justify-between">
          <div
            className={cn("absolute left-6 right-6 h-px border-t", PROCESS_HAIRLINE)}
            aria-hidden="true"
          />
          <div className="absolute left-6 right-6 h-px overflow-hidden" aria-hidden="true">
            <motion.div
              className="h-full bg-accent"
              initial={false}
              animate={{ width: `${progress * 100}%` }}
              transition={
                prefersReducedMotion
                  ? { duration: 0 }
                  : { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
              }
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
                className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <span
                  className={cn(
                    "relative flex h-12 w-12 items-center justify-center rounded-full border font-mono text-sm font-semibold transition-colors duration-300",
                    isActive
                      ? "border-accent bg-accent text-accent-foreground"
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
          className="mt-3 grid gap-2"
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
                className="text-center focus-visible:outline-none"
              >
                <span
                  className={cn(
                    "text-xs font-medium transition-colors duration-300",
                    isActive
                      ? "text-accent"
                      : isComplete
                        ? "text-foreground"
                        : "text-muted-foreground"
                  )}
                >
                  {step.title}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
