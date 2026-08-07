"use client";

import { cn } from "@/utils/cn";
import { HERO_HAIRLINE, HERO_TEXT_FAINT } from "./heroTokens";
import { useHeroParallax } from "./useHeroParallax";

const CORE_POINT = { x: 100, y: 100 };

const NODES = [
  { id: "n1", x: 42, y: 46, size: 4.5 },
  { id: "n2", x: 158, y: 42, size: 3.5 },
  { id: "n3", x: 52, y: 158, size: 3.5 },
  { id: "n4", x: 152, y: 152, size: 4.5 },
  { id: "n5", x: 24, y: 108, size: 2.75 },
  { id: "n6", x: 176, y: 96, size: 2.75 },
] as const;

const SECONDARY_LINKS: ReadonlyArray<readonly [string, string]> = [
  ["n1", "n2"],
  ["n3", "n4"],
  ["n5", "n1"],
  ["n6", "n2"],
];

function getNode(id: string) {
  return NODES.find((node) => node.id === id)!;
}

const CAPABILITY_TAGS = [
  "SOFTWARE",
  "CLOUD",
  "DATA",
  "AI",
  "AUTOMATION",
  "INTEGRATION",
];

/**
 * Abstract "connected system" graphic — a core node linked to a small
 * network graph inside faint orbit rings, with lightweight pointer + scroll
 * parallax. Represents the company's capability: engineering many technical
 * systems into one coherent, connected architecture.
 */
export function HeroVisual() {
  const { stageRef, wrapperRef } = useHeroParallax();

  return (
    <div
      ref={wrapperRef}
      className="relative mx-auto w-full max-w-[440px] translate-y-[calc(var(--scroll-shift,0)*1px)]"
    >
      <div ref={stageRef} className="relative aspect-square w-full" aria-hidden="true">
        {/* Orbit rings: one static, one slowly rotating */}
        <div className="absolute inset-0 translate-x-[calc(var(--pointer-x,0)*8px)] translate-y-[calc(var(--pointer-y,0)*8px)] transition-transform duration-500 ease-out">
          <div className={cn("absolute inset-[6%] rounded-full border", HERO_HAIRLINE)} />
          <div className="absolute inset-[16%] animate-spin-slow rounded-full border border-dashed border-info/25" />
        </div>

        {/* Network graph */}
        <div className="absolute inset-0 translate-x-[calc(var(--pointer-x,0)*14px)] translate-y-[calc(var(--pointer-y,0)*14px)] transition-transform duration-500 ease-out">
          <svg viewBox="0 0 200 200" className="h-full w-full">
            <g className="stroke-info/40" strokeWidth="1">
              {NODES.map((node) => (
                <line
                  key={node.id}
                  x1={CORE_POINT.x}
                  y1={CORE_POINT.y}
                  x2={node.x}
                  y2={node.y}
                />
              ))}
            </g>
            <g className="stroke-info/15" strokeWidth="1">
              {SECONDARY_LINKS.map(([a, b]) => {
                const from = getNode(a);
                const to = getNode(b);
                return (
                  <line key={`${a}-${b}`} x1={from.x} y1={from.y} x2={to.x} y2={to.y} />
                );
              })}
            </g>
            <g className="fill-info">
              {NODES.map((node) => (
                <circle key={node.id} cx={node.x} cy={node.y} r={node.size} />
              ))}
            </g>
          </svg>
        </div>

        {/* Core node */}
        <div className="absolute inset-0 flex translate-x-[calc(var(--pointer-x,0)*22px)] translate-y-[calc(var(--pointer-y,0)*22px)] items-center justify-center transition-transform duration-500 ease-out">
          <div className="absolute h-24 w-24 rounded-full bg-info/25 blur-2xl" aria-hidden="true" />
          <div className="relative flex h-14 w-14 animate-breathe items-center justify-center rounded-md border border-info/50 bg-accent-foreground/[0.05]">
            <div className="h-5 w-5 rotate-45 rounded-[3px] bg-info" />
          </div>
        </div>
      </div>

      {/* Capability tags */}
      <div
        className={cn(
          "mt-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 border-t pt-5 font-mono text-[10px] tracking-[0.2em]",
          HERO_HAIRLINE,
          HERO_TEXT_FAINT
        )}
      >
        {CAPABILITY_TAGS.map((tag, index) => (
          <span key={tag} className="flex items-center gap-3">
            {tag}
            {index < CAPABILITY_TAGS.length - 1 ? (
              <span className="h-1 w-1 rounded-full bg-info/40" aria-hidden="true" />
            ) : null}
          </span>
        ))}
      </div>
    </div>
  );
}
