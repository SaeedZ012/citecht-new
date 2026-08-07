import { Image } from "@/components/ui/Image";
import { Link } from "@/components/ui/Link";
import { siteConfig } from "@/config/site";
import { ROUTES } from "@/constants/routes";
import { cn } from "@/utils/cn";

export type LogoSize = "sm" | "md" | "lg" | "xl";

const SIZE_STYLES: Record<LogoSize, string> = {
  sm: "h-8",
  md: "h-10",
  lg: "h-12",
  xl: "h-14",
};

export interface LogoProps {
  size?: LogoSize;
  className?: string;
}

/**
 * Brand logo linking to the home page. Used in the navbar and footer.
 */
export function Logo({ size = "md", className }: LogoProps) {
  return (
    <Link
      href={ROUTES.home}
      variant="unstyled"
      className={cn("inline-flex shrink-0 items-center", className)}
      aria-label={`${siteConfig.name} home`}
    >
      <Image
        src={siteConfig.logo}
        alt={siteConfig.name}
        width={500}
        height={300}
        priority
        className={cn("w-auto", SIZE_STYLES[size])}
      />
    </Link>
  );
}
