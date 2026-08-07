import type { HTMLAttributes } from "react";
import { cn } from "@/utils/cn";

export interface DividerProps extends HTMLAttributes<HTMLHRElement> {
  orientation?: "horizontal" | "vertical";
}

/**
 * Thin separator line. Renders a semantic `<hr>` for horizontal dividers.
 */
export function Divider({
  orientation = "horizontal",
  className,
  ...props
}: DividerProps) {
  return (
    <hr
      aria-orientation={orientation}
      className={cn(
        "border-0 bg-border",
        orientation === "horizontal" ? "h-px w-full" : "h-full w-px",
        className
      )}
      {...props}
    />
  );
}
