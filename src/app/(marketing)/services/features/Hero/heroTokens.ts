/**
 * Shared "always dark" surface + text tokens for the Services hero.
 *
 * Built entirely from existing semantic color tokens — no hardcoded colors.
 * The hero stays a deep, editorial dark surface in both the light and dark
 * site themes by pairing each token with its `dark:` inverse:
 *   - light theme: `foreground` is near-black, `background` is white
 *   - dark theme:  `background` is near-black, `foreground` is white
 * so `bg-foreground dark:bg-background` always resolves to a dark surface.
 */
export const HERO_DARK_SURFACE =
  "bg-foreground text-background dark:bg-background dark:text-foreground";

/** Full-strength "on dark" text (headline). */
export const HERO_TEXT_STRONG = "text-background dark:text-foreground";

/** Secondary "on dark" text (supporting copy). */
export const HERO_TEXT_MUTED = "text-background/65 dark:text-foreground/65";

/** Tertiary "on dark" text (labels, index marks, tags). */
export const HERO_TEXT_FAINT = "text-background/40 dark:text-foreground/40";

/** Stable, theme-independent hairline (accent-foreground is white in both themes). */
export const HERO_HAIRLINE = "border-accent-foreground/10";
