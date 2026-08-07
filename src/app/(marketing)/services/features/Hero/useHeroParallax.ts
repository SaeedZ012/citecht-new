"use client";

import { useEffect, useRef, type RefObject } from "react";

export interface HeroParallaxRefs {
  /** Attach to the pointer-tracking stage; layers inside read `--pointer-x/y`. */
  stageRef: RefObject<HTMLDivElement | null>;
  /** Attach to the outer visual wrapper; reads `--scroll-shift` on itself. */
  wrapperRef: RefObject<HTMLDivElement | null>;
}

/** Clamp the pointer offset so motion stays subtle, never runs off-scale. */
const POINTER_DAMPING = 0.9;
/** Max vertical shift (px) applied to the visual as the hero scrolls by. */
const SCROLL_RANGE_PX = 16;

/**
 * Lightweight, cinematic parallax for the Services hero visual.
 *
 * - Pointer position sets `--pointer-x`/`--pointer-y` (−1..1) on the stage;
 *   each layer translates by its own multiplier via a CSS `transition`, so
 *   the easing is handled by the browser's compositor, not a JS animation
 *   loop.
 * - Scroll position sets `--scroll-shift` (px) on the wrapper for a subtle
 *   vertical drift as the section moves through the viewport.
 * - Fully disabled when the user prefers reduced motion, and all listeners
 *   are removed on unmount.
 */
export function useHeroParallax(): HeroParallaxRefs {
  const stageRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stage = stageRef.current;
    const wrapper = wrapperRef.current;
    if (!stage || !wrapper) return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;

    let pointerFrame: number | null = null;
    let scrollFrame: number | null = null;

    function handlePointerMove(event: PointerEvent) {
      if (pointerFrame !== null) return;
      pointerFrame = window.requestAnimationFrame(() => {
        pointerFrame = null;
        const rect = stage!.getBoundingClientRect();
        const relX = (event.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
        const relY = (event.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
        const x = Math.max(-1, Math.min(1, relX)) * POINTER_DAMPING;
        const y = Math.max(-1, Math.min(1, relY)) * POINTER_DAMPING;
        stage!.style.setProperty("--pointer-x", x.toFixed(3));
        stage!.style.setProperty("--pointer-y", y.toFixed(3));
      });
    }

    function handlePointerLeave() {
      stage!.style.setProperty("--pointer-x", "0");
      stage!.style.setProperty("--pointer-y", "0");
    }

    function handleScroll() {
      if (scrollFrame !== null) return;
      scrollFrame = window.requestAnimationFrame(() => {
        scrollFrame = null;
        const rect = wrapper!.getBoundingClientRect();
        const viewportMid = window.innerHeight / 2;
        const elementMid = rect.top + rect.height / 2;
        const progress = Math.max(
          -1,
          Math.min(1, (elementMid - viewportMid) / viewportMid)
        );
        wrapper!.style.setProperty(
          "--scroll-shift",
          (progress * SCROLL_RANGE_PX).toFixed(2)
        );
      });
    }

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    stage.addEventListener("pointerleave", handlePointerLeave);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      stage.removeEventListener("pointerleave", handlePointerLeave);
      window.removeEventListener("scroll", handleScroll);
      if (pointerFrame !== null) window.cancelAnimationFrame(pointerFrame);
      if (scrollFrame !== null) window.cancelAnimationFrame(scrollFrame);
    };
  }, []);

  return { stageRef, wrapperRef };
}
