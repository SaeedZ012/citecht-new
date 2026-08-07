import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Heading, Text } from "@/components/ui/Typography";
import { Link } from "@/components/ui/Link";
import { Icon } from "@/components/ui/Icon";
import { ROUTES } from "@/constants/routes";
import { HeroCarousel } from "./HeroCarousel";

/**
 * Home hero. Two-column layout with eyebrow, headline, CTA on the left and a
 * rotating visual carousel on the right.
 */
export function Hero() {
  return (
    <Section
      spacing="none"
      className="overflow-hidden min-h-[calc(100dvh-5rem)]"
    >
      <Container
        size="xl"
        className="flex min-h-[calc(100dvh-5rem)] items-center"
      >
        <div className="grid w-full items-center gap-8 py-8 lg:grid-cols-2 lg:gap-10 lg:py-10">
          <div className="flex flex-col gap-4 lg:max-w-xl lg:gap-5">
            <div className="flex items-center gap-2.5">
              <span
                className="h-5 w-0.5 shrink-0 bg-accent"
                aria-hidden="true"
              />
              <span className="text-sm font-medium text-muted-foreground">
                Shaping Smarter Systems
              </span>
            </div>

            <Heading
              variant="display"
              className="text-balance text-3xl leading-[1.12] sm:text-4xl lg:text-[2.65rem] lg:leading-[1.1]"
            >
              Software, cloud, and data systems that make business{" "}
              <span className="text-accent">transparent.</span>
            </Heading>

            <Text
              variant="body"
              className="max-w-md text-base leading-relaxed text-muted-foreground"
            >
              We remove complexity from the software lifecycle with composable
              engineering that integrates effortlessly across your stack.
            </Text>

            <Link
              href={ROUTES.contact}
              variant="unstyled"
              className="inline-flex h-12 items-center gap-3 self-start rounded-full bg-accent pl-6 pr-1.5 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90"
            >
              Get in touch
              <span
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent-foreground text-accent"
                aria-hidden="true"
              >
                <Icon size="sm">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </Icon>
              </span>
            </Link>
          </div>

          <div className="w-full lg:flex lg:justify-end">
            <HeroCarousel />
          </div>
        </div>
      </Container>
    </Section>
  );
}
