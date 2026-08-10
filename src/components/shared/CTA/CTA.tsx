import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Heading, Text } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
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
  eyebrow = "Start a conversation",
  title = "Have a system to build, fix, or improve?",
  description = "Tell us what is slowing the work down. We will talk through the situation and help identify a sensible next step.",
  primaryLabel = "Start a project",
  primaryHref = ROUTES.contact,
  secondaryLabel = "Explore services",
  secondaryHref = ROUTES.services,
}: CTAProps) {
  return (
    <Section spacing="lg">
      <Container size="lg">
        <div className="relative isolate overflow-hidden rounded-lg border border-border bg-foreground px-6 py-16 text-center dark:bg-background sm:px-12 sm:py-20">
          <CTABackdrop />

          <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-6">
            <Eyebrow variant="pill" onDark>
              {eyebrow}
            </Eyebrow>

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
