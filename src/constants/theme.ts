/** Persisted theme preference key and available theme values. */
export const THEME_STORAGE_KEY = "theme";

export const THEMES = ["light", "dark", "system"] as const;

export type Theme = (typeof THEMES)[number];
