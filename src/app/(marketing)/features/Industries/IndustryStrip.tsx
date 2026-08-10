"use client";

import { useState } from "react";
import { useMediaQuery } from "@/hooks";
import { HOME_INDUSTRIES } from "./industriesData";
import { IndustryPanel } from "./IndustryPanel";

/**
 * Interactive horizontal industries strip. Desktop expands panels on hover;
 * mobile uses snap-scroll + tap-to-expand for a polished touch experience.
 */
export function IndustryStrip() {
  const [activeId, setActiveId] = useState(HOME_INDUSTRIES[0].id);
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const prefersReducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");

  return (
    <div
      className="flex gap-3 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] snap-x snap-mandatory lg:overflow-visible lg:pb-0 lg:snap-none [&::-webkit-scrollbar]:hidden"
      onMouseLeave={() => {
        if (isDesktop) setActiveId(HOME_INDUSTRIES[0].id);
      }}
    >
      {HOME_INDUSTRIES.map((industry) => (
        <IndustryPanel
          key={industry.id}
          industry={industry}
          isActive={activeId === industry.id}
          onActivate={() => setActiveId(industry.id)}
          reducedMotion={prefersReducedMotion}
          isDesktop={isDesktop}
        />
      ))}
    </div>
  );
}
