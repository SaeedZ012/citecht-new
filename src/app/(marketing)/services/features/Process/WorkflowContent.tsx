"use client";

import { AnimatePresence, motion, type Variants } from "framer-motion";
import { Icon } from "@/components/ui/Icon";
import { Heading, Text } from "@/components/ui/Typography";
import { useMediaQuery } from "@/hooks";
import { cn } from "@/utils/cn";
import { PROCESS_HAIRLINE, PROCESS_PANEL, PROCESS_TEXT_MUTED } from "./processTokens";
import type { WorkflowStep } from "./processSteps";

export interface WorkflowContentProps {
  step: WorkflowStep;
}

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.4, 0, 0.2, 1] } },
};

/**
 * Right-side content for the active workflow step: badge, heading,
 * description, bullets, and metric cards — all staggered in together via
 * Framer Motion whenever the active step changes.
 */
export function WorkflowContent({ step }: WorkflowContentProps) {
  const prefersReducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");

  return (
    <div className="relative min-h-[440px] sm:min-h-[380px]">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={step.id}
          variants={prefersReducedMotion ? undefined : containerVariants}
          initial={prefersReducedMotion ? { opacity: 0 } : "hidden"}
          animate={prefersReducedMotion ? { opacity: 1 } : "show"}
          exit={{ opacity: 0 }}
          transition={{ duration: prefersReducedMotion ? 0.2 : 0.3 }}
          className="flex flex-col gap-5"
        >
          <motion.span
            variants={prefersReducedMotion ? undefined : itemVariants}
            className={cn(
              "inline-flex w-fit items-center gap-2 rounded-full border px-4 py-1.5 text-[11px] font-semibold tracking-[0.15em] text-accent",
              PROCESS_HAIRLINE
            )}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            {step.badge}
          </motion.span>

          <motion.div variants={prefersReducedMotion ? undefined : itemVariants}>
            <Heading variant="h3" className="text-balance">
              {step.heading}
            </Heading>
          </motion.div>

          <motion.div variants={prefersReducedMotion ? undefined : itemVariants}>
            <Text variant="body" className={cn("max-w-xl", PROCESS_TEXT_MUTED)}>
              {step.description}
            </Text>
          </motion.div>

          <motion.ul variants={prefersReducedMotion ? undefined : itemVariants} className="flex flex-col gap-2.5">
            {step.bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-2.5 text-sm text-foreground">
                <Icon size="sm" className="mt-0.5 shrink-0 text-accent">
                  <path d="M20 6 9 17l-5-5" />
                </Icon>
                {bullet}
              </li>
            ))}
          </motion.ul>

          <motion.div
            variants={prefersReducedMotion ? undefined : itemVariants}
            className="mt-1 grid grid-cols-2 gap-3 sm:max-w-sm"
          >
            {step.metrics.map((metric) => (
              <div key={metric.label} className={cn("rounded-lg border px-4 py-3", PROCESS_PANEL)}>
                <div className="text-lg font-semibold text-accent">{metric.value}</div>
                <div className={cn("mt-0.5 text-xs", PROCESS_TEXT_MUTED)}>{metric.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
