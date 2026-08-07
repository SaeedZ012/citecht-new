"use client";

import { useCallback, useSyncExternalStore } from "react";

/**
 * Track a CSS media query. SSR-safe: returns `false` on the server and during
 * the first client render, then the real value after hydration.
 */
export function useMediaQuery(query: string): boolean {
  const subscribe = useCallback(
    (onChange: () => void) => {
      const media = window.matchMedia(query);
      media.addEventListener("change", onChange);
      return () => media.removeEventListener("change", onChange);
    },
    [query]
  );

  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(query).matches,
    () => false
  );
}
