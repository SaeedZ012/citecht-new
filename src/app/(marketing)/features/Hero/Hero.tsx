import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Heading, Text } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Icon } from "@/components/ui/Icon";
import { Link } from "@/components/ui/Link";
import { ROUTES } from "@/constants/routes";
import { HeroCarousel } from "./HeroCarousel";

/**
 * Home hero. Two-column layout with eyebrow, headline, CTAs on the left and a
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
        <div className="grid w-full items-center gap-10 py-10 lg:grid-cols-2 lg:gap-12 lg:py-12">
          <div className="flex flex-col gap-5 lg:max-w-xl">
            <Eyebrow>Software · Cloud · Data · AI · Infrastructure</Eyebrow>

            <Heading
              variant="display"
              className="text-balance text-3xl leading-[1.12] sm:text-4xl lg:text-[2.65rem] lg:leading-[1.1]"
            >
              Software, cloud, and data systems that{" "}
              <span className="text-accent">hold up in production.</span>
            </Heading>

            <Text
              variant="body"
              className="max-w-md text-base leading-relaxed text-muted-foreground"
            >
              CiTechT helps teams build, improve, automate, and stabilize the
              software, cloud, data, AI, and infrastructure systems their
              business actually runs on.
            </Text>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href={ROUTES.contact}
                variant="unstyled"
                className="inline-flex"
              >
                <Button variant="accent" size="lg" className="gap-2">
                  Start a project
                  <Icon size="sm">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </Icon>
                </Button>
              </Link>
              <Link
                href={ROUTES.services}
                variant="unstyled"
                className="inline-flex"
              >
                <Button variant="outline" size="lg">
                  Explore services
                </Button>
              </Link>
            </div>
          </div>

          <div className="w-full lg:flex lg:justify-end">
            <HeroCarousel />
          </div>
        </div>
      </Container>
    </Section>
  );
}
