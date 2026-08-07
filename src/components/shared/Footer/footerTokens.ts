/**
 * Shared "always dark" surface + text tokens for the footer.
 *
 * Same technique used by the Services hero and Tech Stack band: pairing
 * each token with its `dark:` inverse so the footer stays a deep, dark
 * surface in both site themes — built entirely from existing semantic
 * tokens, no hardcoded colors.
 */
export const FOOTER_DARK_SURFACE =
  "bg-foreground text-background dark:bg-background dark:text-foreground";

/** Full-strength "on dark" text (headings, links on hover). */
export const FOOTER_TEXT_STRONG = "text-background dark:text-foreground";

/** Secondary "on dark" text (nav links, description, copyright). */
export const FOOTER_TEXT_MUTED = "text-background/65 dark:text-foreground/65";

/** Link color that brightens to full strength on hover/focus. */
export const FOOTER_LINK =
  "text-background/65 hover:text-background dark:text-foreground/65 dark:hover:text-foreground";

/** Theme-independent hairline (accent-foreground is white in both themes). */
export const FOOTER_HAIRLINE = "border-accent-foreground/10";
