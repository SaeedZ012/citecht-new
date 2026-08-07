import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Heading, Text } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Link } from "@/components/ui/Link";
import { ROUTES } from "@/constants/routes";
import { CTABackdrop } from "./CTABackdrop";

export interface CTAProps {
  /** Small uppercase tag above the headline. */
  eyebrow?: string;
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

/**
 * Premium, reusable closing call-to-action.
 *
 * Designed to bookend every marketing page with a confident, tech-forward
 * final impression: a forced-dark surface (flips per theme, same technique
 * as the Services hero) framed by a hairline grid, a soft glow, and orbit
 * rings — all built from semantic tokens only. Copy and destinations are
 * fully configurable via props so this single component can be dropped at
 * the end of any page.
 */
export function CTA({
  eyebrow = "LET'S BUILD TOGETHER",
  title = "Let's engineer your next digital transformation.",
  description = "We partner with ambitious teams to design, build, and scale digital solutions that move business forward. Tell us what you're building, and we'll help you ship it.",
  primaryLabel = "Start a Project",
  primaryHref = ROUTES.contact,
  secondaryLabel = "Explore Services",
  secondaryHref = ROUTES.services,
}: CTAProps) {
  return (
    <Section spacing="lg">
      <Container size="lg">
        <div className="relative isolate overflow-hidden rounded-lg border border-border bg-foreground px-6 py-16 text-center dark:bg-background sm:px-12 sm:py-20">
          <CTABackdrop />

          <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-background/20 px-4 py-1.5 text-xs font-semibold tracking-[0.15em] text-background/70 dark:border-foreground/20 dark:text-foreground/70">
              <span
                className="h-1.5 w-1.5 rounded-full bg-accent"
                aria-hidden="true"
              />
              {eyebrow}
            </span>

            <Heading
              variant="h2"
              className="text-balance text-background dark:text-foreground"
            >
              {title}
            </Heading>

            <Text
              variant="body"
              className="max-w-xl text-background/70 dark:text-foreground/70"
            >
              {description}
            </Text>

            <div className="mt-2 flex flex-col items-center gap-4 sm:flex-row">
              <Link
                href={primaryHref}
                variant="unstyled"
                className="group inline-flex"
              >
                <Button variant="accent" size="lg" className="gap-3">
                  {primaryLabel}
                  <Icon
                    size="sm"
                    className="transition-transform duration-300 group-hover:translate-x-0.5"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </Icon>
                </Button>
              </Link>

              <Link href={secondaryHref} variant="unstyled" className="inline-flex">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-background/25 bg-transparent text-background hover:border-background/40 hover:bg-background/10 dark:border-foreground/25 dark:text-foreground dark:hover:border-foreground/40 dark:hover:bg-foreground/10"
                >
                  {secondaryLabel}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
