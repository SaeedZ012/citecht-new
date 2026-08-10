"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Icon } from "@/components/ui/Icon";
import { Heading, Text } from "@/components/ui/Typography";
import { useMediaQuery } from "@/hooks";
import { cn } from "@/utils/cn";
import { PROCESS_TEXT_MUTED } from "./processTokens";
import type { WorkflowStep } from "./processSteps";

export interface WorkflowContentProps {
  step: WorkflowStep;
}

/**
 * Active step copy — heading, short description, bullets, and metrics.
 * Fixed min-height keeps the section from jumping between steps.
 */
export function WorkflowContent({ step }: WorkflowContentProps) {
  const prefersReducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");

  return (
    <div className="relative min-h-[280px] sm:min-h-[260px]">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={step.id}
          initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: prefersReducedMotion ? 0.15 : 0.3 }}
          className="flex flex-col gap-4"
        >
          <span className="font-mono text-xs tracking-[0.16em] text-accent">
            {step.number}
          </span>

          <Heading variant="h3" className="text-balance">
            {step.heading}
          </Heading>

          <Text variant="muted" className={cn("max-w-xl", PROCESS_TEXT_MUTED)}>
            {step.description}
          </Text>

          <ul className="flex flex-col gap-2">
            {step.bullets.map((bullet) => (
              <li
                key={bullet}
                className="flex items-start gap-2.5 text-sm text-foreground"
              >
                <Icon size="sm" className="mt-0.5 shrink-0 text-accent">
                  <path d="M20 6 9 17l-5-5" />
                </Icon>
                {bullet}
              </li>
            ))}
          </ul>

          <div className="mt-1 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {step.metrics.map((metric) => (
              <div key={metric.label} className="flex items-baseline gap-2">
                <span className="font-semibold text-foreground">{metric.value}</span>
                <span className={PROCESS_TEXT_MUTED}>{metric.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
