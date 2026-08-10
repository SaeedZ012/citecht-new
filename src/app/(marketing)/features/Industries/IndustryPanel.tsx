"use client";

import { motion } from "framer-motion";
import { Heading, Text } from "@/components/ui/Typography";
import { cn } from "@/utils/cn";
import type { HomeIndustry } from "./industriesData";
import { IndustryMockup } from "./IndustryMockup";
import { INDUSTRY_PANEL_HEIGHT_CLASS } from "./industryTokens";

export interface IndustryPanelProps {
  industry: HomeIndustry;
  isActive: boolean;
  onActivate: () => void;
  reducedMotion: boolean;
  isDesktop: boolean;
}

/**
 * One industry panel in the horizontal strip. Width expands on hover/tap;
 * height stays fixed so the row never jumps.
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
        "group relative snap-center overflow-hidden rounded-lg border text-left transition-colors duration-300",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        INDUSTRY_PANEL_HEIGHT_CLASS,
        isActive
          ? "border-accent/40 bg-surface"
          : "border-border bg-muted/30 hover:bg-surface",
        "shrink-0",
        isActive
          ? "w-[min(100%,22rem)] lg:w-auto"
          : "w-[min(78vw,16rem)] lg:w-auto"
      )}
      style={
        isDesktop
          ? {
              height: "30rem",
              flexGrow: isActive ? 3.6 : 1,
              flexBasis: 0,
              flexShrink: 1,
              minWidth: isActive ? "18rem" : "4.75rem",
            }
          : { height: "30rem" }
      }
      transition={
        reducedMotion
          ? { duration: 0.2 }
          : {
              layout: {
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
              },
            }
      }
    >
      <div className="relative flex h-full flex-col p-4 sm:p-5">
        <div className="flex shrink-0 items-center justify-between gap-3">
          <span className="font-mono text-[11px] tracking-[0.2em] text-accent">
            {industry.label}
          </span>
          <span
            className={cn(
              "h-1.5 w-1.5 shrink-0 rounded-full transition-colors duration-300",
              isActive ? "bg-accent" : "bg-border group-hover:bg-accent/60"
            )}
            aria-hidden="true"
          />
        </div>

        <div
          className={cn(
            "mt-3 flex min-h-0 flex-col",
            isActive ? "gap-1.5" : "flex-1"
          )}
        >
          <Heading
            variant="h4"
            as="h3"
            className={cn(
              "leading-tight",
              !isActive &&
                isDesktop &&
                "[writing-mode:vertical-rl] rotate-180 text-base tracking-wide"
            )}
          >
            {industry.title}
          </Heading>

          {isActive ? (
            <motion.div
              initial={reducedMotion ? false : { opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <Text variant="muted" className="line-clamp-3 max-w-sm text-sm leading-relaxed">
                {industry.description}
              </Text>
            </motion.div>
          ) : null}
        </div>

        {isActive ? (
          <div className="mt-4 flex min-h-0 flex-1 flex-col">
            <motion.div
              initial={reducedMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1],
                delay: reducedMotion ? 0 : 0.04,
              }}
              className="min-h-0 flex-1 overflow-hidden"
            >
              <IndustryMockup id={industry.id} className="h-full" />
            </motion.div>

            <div className="mt-3 flex shrink-0 items-baseline gap-2 border-t border-border pt-3">
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
