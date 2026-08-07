import NextImage from "next/image";
import { cn } from "@/utils/cn";

export type AvatarSize = "sm" | "md" | "lg" | "xl";

const SIZE_PX: Record<AvatarSize, number> = {
  sm: 32,
  md: 40,
  lg: 56,
  xl: 80,
};

export interface AvatarProps {
  src?: string;
  alt: string;
  /** Shown as a fallback (e.g. initials) when `src` is absent. */
  fallback?: string;
  size?: AvatarSize;
  className?: string;
}

/**
 * Circular user avatar with an initials fallback when no image is provided.
 */
export function Avatar({
  src,
  alt,
  fallback,
  size = "md",
  className,
}: AvatarProps) {
  const dimension = SIZE_PX[size];

  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-muted text-muted-foreground",
        className
      )}
      style={{ width: dimension, height: dimension }}
    >
      {src ? (
        <NextImage
          src={src}
          alt={alt}
          width={dimension}
          height={dimension}
          className="h-full w-full object-cover"
        />
      ) : (
        <span className="text-sm font-medium" aria-hidden="true">
          {fallback ?? alt.charAt(0).toUpperCase()}
        </span>
      )}
    </span>
  );
}
