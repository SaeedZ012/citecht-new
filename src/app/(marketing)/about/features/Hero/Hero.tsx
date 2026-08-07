import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Heading, Text } from "@/components/ui/Typography";
import { Link } from "@/components/ui/Link";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { ROUTES } from "@/constants/routes";
import { HeroBackdrop } from "./HeroBackdrop";
import { HeroJourney } from "./HeroJourney";

/**
 * About hero. Same full-height, two-column language as the Home and
 * Services heroes — eyebrow, headline, description, CTAs on the left — but
 * the right side trades the image carousel / connected-system graphic for an
 * open "journey" timeline, since this page's job is to build trust in the
 * team and its track record.
 */
export function Hero() {
  return (
    <Section
      spacing="none"
      className="relative isolate overflow-hidden min-h-[calc(100dvh-5rem)]"
    >
      <HeroBackdrop />

      <Container
        size="xl"
        className="relative flex min-h-[calc(100dvh-5rem)] items-center py-16 lg:py-10"
      >
        <div className="grid w-full items-center gap-12 lg:grid-cols-2 lg:gap-10">
          <div className="flex flex-col gap-5 lg:max-w-xl">
            <div className="animate-fade-rise flex items-center gap-2.5">
              <span className="h-5 w-0.5 shrink-0 bg-accent" aria-hidden="true" />
              <span className="text-sm font-medium text-muted-foreground">
                Our Story
              </span>
            </div>

            <Heading
              variant="display"
              className="animate-fade-rise text-balance text-3xl leading-[1.12] sm:text-4xl lg:text-[2.65rem] lg:leading-[1.1]"
              style={{ animationDelay: "90ms" }}
            >
              A small, senior team built for systems that{" "}
              <span className="text-accent">can&apos;t afford to fail.</span>
            </Heading>

            <Text
              variant="body"
              className="animate-fade-rise max-w-md text-base leading-relaxed text-muted-foreground"
              style={{ animationDelay: "180ms" }}
            >
              CiTechT started with a simple frustration: too many technology
              partners disappear after launch. We build software, cloud,
              data, and AI systems as the people who stay accountable when
              something breaks — not just the ones who shipped it.
            </Text>

            <div
              className="animate-fade-rise flex flex-wrap items-center gap-3"
              style={{ animationDelay: "270ms" }}
            >
              <Link href={ROUTES.contact} variant="unstyled" className="group inline-flex">
                <Button variant="accent" size="lg" className="gap-3">
                  Get in Touch
                  <Icon
                    size="sm"
                    className="transition-transform duration-300 group-hover:translate-x-0.5"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </Icon>
                </Button>
              </Link>

              <Link href={ROUTES.services} variant="unstyled" className="inline-flex">
                <Button variant="outline" size="lg">
                  Our Services
                </Button>
              </Link>
            </div>
          </div>

          <div
            className="animate-fade-rise lg:justify-self-end"
            style={{ animationDelay: "220ms" }}
          >
            <HeroJourney />
          </div>
        </div>
      </Container>
    </Section>
  );
}
