import { Container } from "@/components/ui/Container";
import { Link } from "@/components/ui/Link";
import { Text } from "@/components/ui/Typography";
import { Logo } from "@/components/shared/Logo";
import { FOOTER_NAV } from "@/constants/navigation";
import { SOCIAL_LINKS } from "@/constants/site";
import { siteConfig } from "@/config/site";
import { cn } from "@/utils/cn";
import {
  FOOTER_DARK_SURFACE,
  FOOTER_HAIRLINE,
  FOOTER_LINK,
  FOOTER_TEXT_MUTED,
  FOOTER_TEXT_STRONG,
} from "./footerTokens";

/**
 * Site footer with grouped navigation, brand blurb, and social links.
 * Always a dark surface (regardless of site theme) for a clear, grounded
 * close to every page — content colors are tuned "on dark" for contrast.
 * Server component — renders no client-side interactivity.
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={cn("border-t", FOOTER_HAIRLINE, FOOTER_DARK_SURFACE)}>
      <Container>
        <div className="grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-3">
            <Logo size="lg" className="brightness-0 invert" />
            <Text variant="muted" className={cn("max-w-xs", FOOTER_TEXT_MUTED)}>
              {siteConfig.description}
            </Text>
          </div>

          {FOOTER_NAV.map((group) => (
            <nav key={group.title} aria-label={group.title}>
              <h2 className={cn("mb-3 text-sm font-semibold", FOOTER_TEXT_STRONG)}>
                {group.title}
              </h2>
              <ul className="flex flex-col gap-2">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      variant="unstyled"
                      className={cn("text-sm transition-colors", FOOTER_LINK)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <nav aria-label="Social">
            <h2 className={cn("mb-3 text-sm font-semibold", FOOTER_TEXT_STRONG)}>
              Follow
            </h2>
            <ul className="flex flex-col gap-2">
              {SOCIAL_LINKS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    external
                    variant="unstyled"
                    className={cn("text-sm transition-colors", FOOTER_LINK)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className={cn("border-t py-6", FOOTER_HAIRLINE)}>
          <Text variant="caption" className={FOOTER_TEXT_MUTED}>
            &copy; {year} {siteConfig.name}. All rights reserved.
          </Text>
        </div>
      </Container>
    </footer>
  );
}
