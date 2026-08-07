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

const GRID_COLUMNS = 12;
const GRID_ROWS = 12;

const PARTICLES = [
  { top: "10%", left: "16%", size: 6, delay: "-0.5s", duration: "5.5s" },
  { top: "20%", left: "84%", size: 4, delay: "-2.1s", duration: "6.5s" },
  { top: "80%", left: "12%", size: 5, delay: "-3.4s", duration: "7s" },
  { top: "86%", left: "78%", size: 4, delay: "-1.2s", duration: "5s" },
  { top: "50%", left: "4%", size: 3, delay: "-4s", duration: "6s" },
  { top: "46%", left: "94%", size: 3, delay: "-2.8s", duration: "6.8s" },
];

/**
 * Left-side visual for the active workflow step: a local engineering grid,
 * ambient glow, orbit rings, drifting particles, and a bordered icon stage
 * whose contents crossfade + scale between steps.
 */
export function WorkflowIconStage({ step }: WorkflowIconStageProps) {
  const prefersReducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");

  return (
    <div className="relative mx-auto flex aspect-square w-full max-w-sm items-center justify-center overflow-hidden rounded-xl">
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full text-foreground/[0.06]"
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
        aria-hidden="true"
      >
        {Array.from({ length: GRID_COLUMNS + 1 }).map((_, index) => {
          const x = (index / GRID_COLUMNS) * 100;
          return (
            <line key={`v-${index}`} x1={x} y1={0} x2={x} y2={100} stroke="currentColor" strokeWidth="0.35" />
          );
        })}
        {Array.from({ length: GRID_ROWS + 1 }).map((_, index) => {
          const y = (index / GRID_ROWS) * 100;
          return (
            <line key={`h-${index}`} x1={0} y1={y} x2={100} y2={y} stroke="currentColor" strokeWidth="0.35" />
          );
        })}
      </svg>

      <div className="animate-breathe pointer-events-none absolute h-56 w-56 rounded-full bg-accent/15 blur-3xl" aria-hidden="true" />

      <div className={cn("pointer-events-none absolute inset-4 rounded-full border", PROCESS_HAIRLINE)} aria-hidden="true" />
      <div
        className="animate-spin-slow pointer-events-none absolute inset-10 rounded-full border border-dashed border-accent/25"
        style={{ animationDuration: "50s" }}
        aria-hidden="true"
      />
      <div
        className={cn("animate-spin-slow pointer-events-none absolute inset-16 rounded-full border border-dashed", PROCESS_HAIRLINE)}
        style={{ animationDuration: "70s", animationDirection: "reverse" }}
        aria-hidden="true"
      />

      {!prefersReducedMotion
        ? PARTICLES.map((particle, index) => (
            <span
              key={index}
              className="animate-particle pointer-events-none absolute rounded-full bg-accent/50"
              style={{
                top: particle.top,
                left: particle.left,
                width: particle.size,
                height: particle.size,
                animationDelay: particle.delay,
                animationDuration: particle.duration,
              }}
              aria-hidden="true"
            />
          ))
        : null}

      <div
        className={cn(
          "relative flex h-32 w-32 items-center justify-center rounded-xl border bg-surface sm:h-36 sm:w-36",
          PROCESS_HAIRLINE
        )}
        aria-roledescription="carousel"
        aria-label="Active workflow phase icon"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={step.id}
            initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.7, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.7, y: -16 }}
            transition={{ duration: prefersReducedMotion ? 0.2 : 0.5, ease: [0.4, 0, 0.2, 1] }}
            className="flex items-center justify-center text-accent"
          >
            {/* Nested so Framer Motion's crossfade transform and the
                continuous CSS float never fight over the same element. */}
            <div className={prefersReducedMotion ? undefined : "animate-float"}>
              <Icon size="lg" className="h-16 w-16 sm:h-20 sm:w-20">
                {step.icon}
              </Icon>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
