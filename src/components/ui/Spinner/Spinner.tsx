import type { HTMLAttributes } from "react";
import { cn } from "@/utils/cn";

export interface SpinnerProps extends HTMLAttributes<HTMLSpanElement> {
  size?: "sm" | "md" | "lg";
  label?: string;
}

const SIZE_STYLES: Record<NonNullable<SpinnerProps["size"]>, string> = {
  sm: "h-4 w-4 border-2",
  md: "h-6 w-6 border-2",
  lg: "h-8 w-8 border-[3px]",
};

/**
 * Accessible loading spinner. Announced to assistive tech via `role="status"`.
 */
export function Spinner({
  size = "md",
  label = "Loading",
  className,
  ...props
}: SpinnerProps) {
  return (
    <span role="status" aria-live="polite" {...props}>
      <span
        className={cn(
          "inline-block animate-spin rounded-full border-current border-t-transparent text-current",
          SIZE_STYLES[size],
          className
        )}
      />
      <span className="sr-only">{label}</span>
    </span>
  );
}
