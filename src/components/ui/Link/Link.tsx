import NextLink, { type LinkProps as NextLinkProps } from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/utils/cn";

export type LinkVariant = "default" | "muted" | "unstyled";

const VARIANT_STYLES: Record<LinkVariant, string> = {
  default:
    "text-primary underline-offset-4 hover:underline focus-visible:underline",
  muted:
    "text-muted-foreground underline-offset-4 hover:text-foreground hover:underline",
  unstyled: "",
};

export interface LinkProps
  extends NextLinkProps,
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof NextLinkProps> {
  variant?: LinkVariant;
  /** Render an external link with safe `rel` and a new tab. */
  external?: boolean;
  children: ReactNode;
}

/**
 * Navigation link built on `next/link` for internal client-side transitions.
 * Set `external` for third-party URLs to apply secure `rel`/`target` defaults.
 */
export function Link({
  variant = "default",
  external = false,
  className,
  children,
  ...props
}: LinkProps) {
  const externalProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <NextLink
      className={cn(VARIANT_STYLES[variant], className)}
      {...externalProps}
      {...props}
    >
      {children}
    </NextLink>
  );
}
