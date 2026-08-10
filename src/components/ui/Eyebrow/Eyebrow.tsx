import type { HTMLAttributes } from "react";
import { cn } from "@/utils/cn";

export type EyebrowVariant = "bar" | "pill" | "dash";

export interface EyebrowProps extends HTMLAttributes<HTMLSpanElement> {
  /** Visual treatment. Default `bar` matches most marketing sections. */
  variant?: EyebrowVariant;
  /** Invert colors for forced-dark surfaces (CTA, dark heroes). */
  onDark?: boolean;
}

const VARIANT_STYLES: Record<
  EyebrowVariant,
  { root: string; mark: string; text: string }
> = {
  bar: {
    root: "inline-flex items-center gap-2.5",
    mark: "h-5 w-0.5 shrink-0 bg-accent",
    text: "text-sm font-medium text-muted-foreground",
  },
  pill: {
    root: "inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5",
    mark: "h-1.5 w-1.5 shrink-0 rounded-full bg-accent",
    text: "text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground",
  },
  dash: {
    root: "inline-flex items-center gap-3",
    mark: "h-px w-6 shrink-0 bg-accent",
    text: "text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground",
  },
};

/**
 * Shared section eyebrow. Use one of three variants site-wide so headers
 * feel intentional rather than independently restyled per page.
 */
export function Eyebrow({
  variant = "bar",
  onDark = false,
  className,
  children,
  ...props
}: EyebrowProps) {
  const styles = VARIANT_STYLES[variant];

  return (
    <span
      className={cn(
        styles.root,
        onDark && "border-background/20 dark:border-foreground/20",
        className
      )}
      {...props}
    >
      <span className={styles.mark} aria-hidden="true" />
      <span
        className={cn(
          styles.text,
          onDark && "text-background/70 dark:text-foreground/70"
        )}
      >
        {children}
      </span>
    </span>
  );
}
