import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge conditional class names and resolve Tailwind conflicts.
 *
 * Combines `clsx` (conditional class composition) with `tailwind-merge`
 * (deduplicates conflicting Tailwind utilities, keeping the last one).
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
