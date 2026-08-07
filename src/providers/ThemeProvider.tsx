"use client";

import { createContext, useContext } from "react";
import { themeConfig } from "@/config/theme";
import { useTheme } from "@/hooks/useTheme";
import type { Theme } from "@/constants/theme";
import type { WithChildren } from "@/types/common";

interface ThemeContextValue {
  theme: Theme;
  resolvedTheme: "light" | "dark";
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

/**
 * Provides theme state (light/dark/system) to the client tree and syncs the
 * `data-theme` attribute + `dark` class on the document element.
 */
export function ThemeProvider({ children }: WithChildren) {
  const value = useTheme(themeConfig.defaultTheme);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useThemeContext(): ThemeContextValue {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeContext must be used within a ThemeProvider");
  }
  return context;
}
