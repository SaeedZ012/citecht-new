import type { ElementType, HTMLAttributes } from "react";
import { cn } from "@/utils/cn";

export type SectionSpacing = "none" | "sm" | "md" | "lg";

const SPACING_STYLES: Record<SectionSpacing, string> = {
  none: "",
  sm: "py-8 sm:py-12",
  md: "py-12 sm:py-16",
  lg: "py-16 sm:py-24",
};

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  spacing?: SectionSpacing;
  as?: ElementType;
}

/**
 * Vertical rhythm wrapper for page sections. Standardizes block padding so
 * spacing stays consistent between sections.
 */
export function Section({
  spacing = "md",
  as,
  className,
  ...props
}: SectionProps) {
  const Component = as ?? "section";
  return (
    <Component
      className={cn(SPACING_STYLES[spacing], className)}
      {...props}
    />
  );
}
