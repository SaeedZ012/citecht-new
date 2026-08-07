import type { ElementType, HTMLAttributes } from "react";
import { cn } from "@/utils/cn";

export type HeadingVariant = "display" | "h1" | "h2" | "h3" | "h4";

const HEADING_STYLES: Record<HeadingVariant, string> = {
  display:
    "text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl",
  h1: "text-4xl font-bold tracking-tight text-foreground sm:text-5xl",
  h2: "text-3xl font-semibold tracking-tight text-foreground sm:text-4xl",
  h3: "text-2xl font-semibold tracking-tight text-foreground",
  h4: "text-xl font-semibold tracking-tight text-foreground",
};

const DEFAULT_TAG: Record<HeadingVariant, ElementType> = {
  display: "h1",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
};

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  /** Visual style of the heading. */
  variant?: HeadingVariant;
  /** Override the rendered element (defaults to a semantic tag per variant). */
  as?: ElementType;
}

/**
 * Semantic, variant-driven heading. Use this instead of writing raw
 * text/font utility classes so typography stays consistent app-wide.
 */
export function Heading({
  variant = "h2",
  as,
  className,
  ...props
}: HeadingProps) {
  const Component = as ?? DEFAULT_TAG[variant];
  return (
    <Component className={cn(HEADING_STYLES[variant], className)} {...props} />
  );
}
