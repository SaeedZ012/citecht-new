"use client";

import { motion } from "framer-motion";
import { Heading, Text } from "@/components/ui/Typography";
import { cn } from "@/utils/cn";
import type { HomeIndustry } from "./industriesData";
import { IndustryMockup } from "./IndustryMockup";

export interface IndustryPanelProps {
  industry: HomeIndustry;
  isActive: boolean;
  onActivate: () => void;
  reducedMotion: boolean;
  isDesktop: boolean;
}

/**
 * One industry panel in the horizontal strip. Expands on hover (desktop) or
 * tap (mobile) to reveal an industry-specific product mockup with light 3D depth.
 */
export function IndustryPanel({
  industry,
  isActive,
  onActivate,
  reducedMotion,
  isDesktop,
}: IndustryPanelProps) {
  return (
    <motion.button
      type="button"
      layout={!reducedMotion}
      onMouseEnter={() => {
        if (isDesktop) onActivate();
      }}
      onFocus={onActivate}
      onClick={onActivate}
      aria-expanded={isActive}
      aria-label={`${industry.title}. ${industry.description}`}
      className={cn(
        "group relative snap-center overflow-hidden rounded-xl border text-left transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        isActive
          ? "border-accent/40 bg-surface shadow-md"
          : "border-border bg-muted/30 hover:bg-surface/90",
        "min-h-[24rem] shrink-0",
        isActive
          ? "w-[min(100%,22rem)] lg:w-auto"
          : "w-[min(78vw,16rem)] lg:w-auto"
      )}
      style={
        isDesktop
          ? {
              flexGrow: isActive ? 3.6 : 1,
              flexBasis: 0,
              flexShrink: 1,
              minWidth: isActive ? "18rem" : "4.75rem",
            }
          : undefined
      }
      transition={
        reducedMotion
          ? { duration: 0.2 }
          : { layout: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } }
      }
    >
      {isActive ? (
        <span
          className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full bg-accent/15 blur-3xl"
          aria-hidden="true"
        />
      ) : null}

      <div className={cn("relative flex h-full flex-col gap-3 p-4 sm:p-5", isActive && "gap-4")}>
        <div className="flex items-center justify-between gap-3">
          <span className="font-mono text-[11px] tracking-[0.2em] text-accent">
            {industry.label}
          </span>
          <span
            className={cn(
              "h-1.5 w-1.5 shrink-0 rounded-full transition-colors",
              isActive ? "bg-accent" : "bg-border group-hover:bg-accent/60"
            )}
            aria-hidden="true"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <Heading
            variant="h4"
            as="h3"
            className={cn(
              "leading-tight",
              !isActive && isDesktop && "[writing-mode:vertical-rl] rotate-180 text-base tracking-wide"
            )}
          >
            {industry.title}
          </Heading>

          {isActive ? (
            <motion.div
              initial={reducedMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <Text variant="muted" className="max-w-sm text-sm leading-relaxed">
                {industry.description}
              </Text>
            </motion.div>
          ) : null}
        </div>

        {isActive ? (
          <div className="mt-auto">
            <div style={{ perspective: "1200px" }}>
              <motion.div
                initial={
                  reducedMotion
                    ? { opacity: 1 }
                    : { opacity: 0, y: 18, rotateX: 8, rotateY: -8, scale: 0.96 }
                }
                animate={{
                  opacity: 1,
                  y: 0,
                  rotateX: reducedMotion ? 0 : 4,
                  rotateY: reducedMotion ? 0 : -6,
                  scale: 1,
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                  delay: reducedMotion ? 0 : 0.08,
                }}
                className="origin-bottom [transform-style:preserve-3d]"
              >
                <div className="relative">
                  <span
                    className="pointer-events-none absolute inset-x-6 -bottom-3 h-8 rounded-[100%] bg-foreground/10 blur-md"
                    aria-hidden="true"
                  />
                  <IndustryMockup id={industry.id} />
                </div>
              </motion.div>
            </div>

            <div className="mt-4 flex items-baseline gap-2 border-t border-border pt-3">
              <span className="text-sm font-semibold text-foreground">
                {industry.metric}
              </span>
              <span className="text-xs text-muted-foreground">
                {industry.metricLabel}
              </span>
            </div>
          </div>
        ) : (
          !isDesktop && (
            <p className="mt-auto text-[11px] text-muted-foreground">
              Tap to explore
            </p>
          )
        )}
      </div>
    </motion.button>
  );
}
