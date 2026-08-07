"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const AUTOPLAY_MS = 4500;

export interface WorkflowAutoplay {
  activeIndex: number;
  /** Jump directly to a step (used by clickable timeline nodes). */
  goTo: (index: number) => void;
  setIsPaused: (paused: boolean) => void;
}

/**
 * Drives the Workflow showcase's auto-advance: a self-rearming timeout
 * (rather than `setInterval`) so that jumping to a step via `goTo` — or
 * pausing on hover — naturally resets the wait for the *next* step instead
 * of fighting a fixed-cadence interval. Wraps infinitely; keeps advancing
 * regardless of `prefers-reduced-motion` (only the visual transitions react
 * to that — see `WorkflowIconStage`/`WorkflowContent`), matching the same
 * pattern already used by the home hero carousel.
 */
export function useWorkflowAutoplay(stepCount: number): WorkflowAutoplay {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = useCallback(
    (index: number) => {
      setActiveIndex(((index % stepCount) + stepCount) % stepCount);
    },
    [stepCount]
  );

  useEffect(() => {
    if (isPaused || stepCount <= 1) return undefined;

    timeoutRef.current = setTimeout(() => {
      setActiveIndex((previous) => (previous + 1) % stepCount);
    }, AUTOPLAY_MS);

    return () => {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, [activeIndex, isPaused, stepCount]);

  return { activeIndex, goTo, setIsPaused };
}
