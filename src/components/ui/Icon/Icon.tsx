import type { SVGProps } from "react";
import { cn } from "@/utils/cn";

export type IconSize = "sm" | "md" | "lg";

const SIZE_STYLES: Record<IconSize, string> = {
  sm: "h-4 w-4",
  md: "h-5 w-5",
  lg: "h-6 w-6",
};

export interface IconProps extends SVGProps<SVGSVGElement> {
  /** Accessible label; omit for purely decorative icons. */
  label?: string;
  size?: IconSize;
}

/**
 * Consistent wrapper for inline SVG icons. Handles sizing and the aria
 * hidden/label pattern so consumers don't repeat accessibility boilerplate.
 *
 * @example
 * <Icon label="Search" size="md">
 *   <path d="..." />
 * </Icon>
 */
export function Icon({
  label,
  size = "md",
  className,
  children,
  ...props
}: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={label ? undefined : true}
      aria-label={label}
      role={label ? "img" : undefined}
      className={cn(SIZE_STYLES[size], className)}
      {...props}
    >
      {children}
    </svg>
  );
}
