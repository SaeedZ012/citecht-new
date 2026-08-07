"use client";

import { useEffect, useRef, useState } from "react";
import { Image } from "@/components/ui/Image";
import { cn } from "@/utils/cn";
import { HERO_SLIDES } from "./heroSlides";
import { HERO_OBJECT_LAYER_CLASS, HeroStage } from "./HeroStage";

const INTERVAL_MS = 3000;
const SLIDE_COUNT = HERO_SLIDES.length;

interface CarouselIndices {
  active: number;
  previous: number;
}

/**
 * Rotating hero visuals: fixed stage, auto-advancing 3D visual + caption
 * every 3s. Each transition is a true horizontal scroll — the outgoing
 * image slides fully off to the left while the next one slides in from
 * the right at the same time, rather than a fade with a small nudge.
 */
export function HeroCarousel() {
  const [{ active: activeIndex, previous: previousIndex }, setIndices] =
    useState<CarouselIndices>({ active: 0, previous: 0 });
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");

    // Whether the user prefers reduced motion is only knowable
    // client-side. Syncing it here (instead of a lazy useState
    // initializer that would read `window` during render) keeps the SSR
    // markup and the first client render identical, avoiding a
    // hydration mismatch.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setPrefersReducedMotion(media.matches);

    const onChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (SLIDE_COUNT <= 1) return;

    intervalRef.current = setInterval(() => {
      setIndices((prev) => ({
        active: (prev.active + 1) % SLIDE_COUNT,
        previous: prev.active,
      }));
    }, INTERVAL_MS);

    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, []);

  const activeSlide = HERO_SLIDES[activeIndex];

  return (
    <div className="flex w-full max-w-xl flex-col items-center gap-5 lg:max-w-2xl lg:gap-6">
      <div
        className="relative aspect-[4/5] w-full min-h-[280px] max-h-[min(52vh,420px)] sm:min-h-[320px]"
        aria-roledescription="carousel"
        aria-label="Featured services"
      >
        <HeroStage />

        {HERO_SLIDES.map((slide, index) => {
          const isActive = index === activeIndex;
          const isExiting = !isActive && index === previousIndex;

          return (
            <div
              key={slide.id}
              className={cn(
                HERO_OBJECT_LAYER_CLASS,
                "pointer-events-none",
                prefersReducedMotion
                  ? isActive
                    ? "z-[3] opacity-100"
                    : "z-[2] opacity-0"
                  : cn(
                      "transition-[opacity,transform] duration-[800ms] ease-[cubic-bezier(0.4,0,0.2,1)] will-change-transform",
                      isActive
                        ? "z-[3] translate-x-0 opacity-100"
                        : isExiting
                          ? "z-[2] -translate-x-[130%] opacity-0"
                          : "z-[1] translate-x-[130%] opacity-0"
                    )
              )}
              aria-hidden={!isActive}
            >
              <Image
                src={slide.imageSrc}
                alt={slide.imageAlt}
                width={480}
                height={480}
                priority={index === 0}
                unoptimized
                className="h-auto max-h-[108%] w-auto max-w-[112%] object-contain"
              />
            </div>
          );
        })}

        <div
          className="absolute bottom-[4%] left-1/2 z-[1] flex -translate-x-1/2 flex-col items-center gap-2"
          aria-hidden="true"
        >
          <span className="h-1 w-14 rounded-full bg-info/45 sm:w-16" />
          <span className="h-1 w-20 rounded-full bg-info/45 sm:w-24" />
        </div>
      </div>

      <p
        key={activeSlide.id}
        className={cn(
          "min-h-8 text-center text-2xl font-bold text-info sm:text-3xl",
          !prefersReducedMotion && "hero-caption-in"
        )}
        aria-live="polite"
      >
        {activeSlide.caption}
      </p>
    </div>
  );
}
