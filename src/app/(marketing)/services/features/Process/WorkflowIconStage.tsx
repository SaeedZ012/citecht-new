"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Icon } from "@/components/ui/Icon";
import { useMediaQuery } from "@/hooks";
import { cn } from "@/utils/cn";
import { PROCESS_HAIRLINE } from "./processTokens";
import type { WorkflowStep } from "./processSteps";

export interface WorkflowIconStageProps {
  step: WorkflowStep;
}

/**
 * Quiet icon stage for the active workflow step — no particles or orbit rings.
 */
export function WorkflowIconStage({ step }: WorkflowIconStageProps) {
  const prefersReducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");

  return (
    <div className="relative mx-auto flex aspect-square w-full max-w-sm items-center justify-center overflow-hidden rounded-lg border border-border bg-muted/40">
      <div
        className={cn(
          "relative flex h-28 w-28 items-center justify-center rounded-lg border bg-surface sm:h-32 sm:w-32",
          PROCESS_HAIRLINE
        )}
        aria-label="Active workflow phase icon"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={step.id}
            initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: prefersReducedMotion ? 0.15 : 0.35 }}
            className="flex items-center justify-center text-accent"
          >
            <Icon size="lg" className="h-14 w-14 sm:h-16 sm:w-16">
              {step.icon}
            </Icon>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
