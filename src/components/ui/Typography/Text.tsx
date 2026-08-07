import type { ElementType, HTMLAttributes } from "react";
import { cn } from "@/utils/cn";

export type TextVariant =
  | "body"
  | "bodySmall"
  | "caption"
  | "label"
  | "muted";

const TEXT_STYLES: Record<TextVariant, string> = {
  body: "text-base leading-7 text-foreground",
  bodySmall: "text-sm leading-6 text-foreground",
  caption: "text-xs leading-5 text-muted-foreground",
  label: "text-sm font-medium leading-6 text-foreground",
  muted: "text-sm leading-6 text-muted-foreground",
};

const DEFAULT_TAG: Record<TextVariant, ElementType> = {
  body: "p",
  bodySmall: "p",
  caption: "span",
  label: "span",
  muted: "p",
};

export interface TextProps extends HTMLAttributes<HTMLElement> {
  /** Visual style of the text. */
  variant?: TextVariant;
  /** Override the rendered element. */
  as?: ElementType;
}

/**
 * Variant-driven body text. Centralizes typography so raw utility chains are
 * not repeated throughout the app.
 */
export function Text({ variant = "body", as, className, ...props }: TextProps) {
  const Component = as ?? DEFAULT_TAG[variant];
  return <Component className={cn(TEXT_STYLES[variant], className)} {...props} />;
}
