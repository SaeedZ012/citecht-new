import type { ElementType, HTMLAttributes } from "react";
import { cn } from "@/utils/cn";

export type ContainerSize = "sm" | "md" | "lg" | "xl" | "full";

const SIZE_STYLES: Record<ContainerSize, string> = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-6xl",
  xl: "max-w-7xl",
  full: "max-w-none",
};

export interface ContainerProps extends HTMLAttributes<HTMLElement> {
  size?: ContainerSize;
  as?: ElementType;
}

/**
 * Centers content with a max-width and consistent horizontal padding.
 * Prevents repeating `mx-auto max-w-* px-*` chains across the app.
 */
export function Container({
  size = "xl",
  as,
  className,
  ...props
}: ContainerProps) {
  const Component = as ?? "div";
  return (
    <Component
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        SIZE_STYLES[size],
        className
      )}
      {...props}
    />
  );
}
