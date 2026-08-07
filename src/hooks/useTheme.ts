"use client";

import { useCallback, useEffect, useState } from "react";
import { THEME_STORAGE_KEY, type Theme } from "@/constants/theme";
import { useMediaQuery } from "@/hooks/useMediaQuery";

type ResolvedTheme = "light" | "dark";

function getStoredTheme(fallback: Theme): Theme {
  if (typeof window === "undefined") {
    return fallback;
  }
  return (
    (window.localStorage.getItem(THEME_STORAGE_KEY) as Theme | null) ?? fallback
  );
}

/**
 * Persisted theme state with system-preference support.
 *
 * `resolvedTheme` is derived from the selected theme and the OS preference, so
 * no `setState`-in-effect is required. A single effect syncs the result to the
 * DOM (`dark` class + `data-theme`) and `localStorage`.
 */
export function useTheme(defaultTheme: Theme) {
  const [theme, setThemeState] = useState<Theme>(() =>
    getStoredTheme(defaultTheme)
  );
  const prefersDark = useMediaQuery("(prefers-color-scheme: dark)");

  const resolvedTheme: ResolvedTheme =
    theme === "system" ? (prefersDark ? "dark" : "light") : theme;

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", resolvedTheme === "dark");
    root.dataset.theme = resolvedTheme;
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme, resolvedTheme]);

  const setTheme = useCallback((next: Theme) => {
    setThemeState(next);
  }, []);

  return { theme, resolvedTheme, setTheme };
}
