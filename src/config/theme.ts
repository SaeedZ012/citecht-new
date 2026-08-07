import type { Theme } from "@/constants/theme";

/**
 * Theme runtime configuration. Static token values live in globals.css;
 * this controls default behavior for the ThemeProvider.
 */
export const themeConfig = {
  defaultTheme: "system" as Theme,
  enableSystem: true,
  disableTransitionOnChange: false,
} as const;

export type ThemeConfig = typeof themeConfig;
