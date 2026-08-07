import type { HTMLAttributes } from "react";
import { cn } from "@/utils/cn";
import type { Intent } from "@/types/ui";

export type BadgeVariant = Intent;

const VARIANT_STYLES: Record<BadgeVariant, string> = {
  neutral: "bg-muted text-muted-foreground",
  info: "bg-info text-info-foreground",
  success: "bg-success text-success-foreground",
  warning: "bg-warning text-warning-foreground",
  danger: "bg-danger text-danger-foreground",
};

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

/**
 * Small status label with intent-based coloring.
 */
export function Badge({ variant = "neutral", className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        VARIANT_STYLES[variant],
        className
      )}
      {...props}
    />
  );
}
