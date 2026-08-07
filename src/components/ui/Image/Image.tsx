import NextImage, { type ImageProps as NextImageProps } from "next/image";
import { cn } from "@/utils/cn";

export interface ImageProps extends NextImageProps {
  /** Rounds the image corners. */
  rounded?: boolean;
}

/**
 * Thin wrapper over `next/image` that enforces optimization defaults and
 * consistent styling. Always requires `alt` for accessibility.
 */
export function Image({ rounded = false, className, alt, ...props }: ImageProps) {
  return (
    <NextImage
      alt={alt}
      className={cn(rounded && "rounded-md", className)}
      {...props}
    />
  );
}
