"use client";

import { useEffect, useState, type CSSProperties } from "react";
import { Image } from "@/components/ui/Image";
import { cn } from "@/utils/cn";
import { useHeroParallax } from "../../../features/Hero/useHeroParallax";
import { HeroStage } from "./HeroStage";

export interface HeroVisualProps {
  visualSrc: string;
  title: string;
}

/**
 * Interactive 3D capability visual for a service detail hero — pointer tilt,
 * soft float, and a light stage. Replaces the photo crop used elsewhere.
 */
export function HeroVisual({ visualSrc, title }: HeroVisualProps) {
  const { stageRef, wrapperRef } = useHeroParallax();
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setPrefersReducedMotion(media.matches);

    const onChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="relative mx-auto w-full max-w-md sm:max-w-lg lg:ml-auto lg:mr-0 lg:max-w-xl"
      style={
        {
          "--scroll-shift": "0",
          transform: prefersReducedMotion
            ? undefined
            : "translate3d(0, calc(var(--scroll-shift) * 1px), 0)",
        } as CSSProperties
      }
    >
      <div
        ref={stageRef}
        className="relative aspect-square w-full perspective-[1400px]"
        style={
          {
            "--pointer-x": "0",
            "--pointer-y": "0",
          } as CSSProperties
        }
      >
        <div
          className={cn(
            "relative h-full w-full transform-gpu transition-transform duration-500 ease-out [transform-style:preserve-3d]",
            !prefersReducedMotion &&
              "[transform:rotateX(calc(var(--pointer-y)*-6deg))_rotateY(calc(var(--pointer-x)*9deg))]"
          )}
        >
          <HeroStage />

          <div className="absolute inset-[16%] flex items-center justify-center">
            <div
              className={cn(
                "relative h-full w-full",
                !prefersReducedMotion && "animate-float-3d"
              )}
              style={
                prefersReducedMotion
                  ? undefined
                  : ({
                      transform:
                        "translate3d(calc(var(--pointer-x) * 10px), calc(var(--pointer-y) * 10px), 0)",
                    } as CSSProperties)
              }
            >
              <Image
                src={visualSrc}
                alt={`${title} 3D visual`}
                fill
                priority
                unoptimized
                sizes="(max-width: 1024px) 90vw, 40vw"
                className="object-contain drop-shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
