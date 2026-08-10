import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Heading, Text } from "@/components/ui/Typography";
import { Link } from "@/components/ui/Link";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { ROUTES, servicePath } from "@/constants/routes";
import type { ServiceDetail } from "@/data/services";
import { getServiceVisual } from "../serviceVisuals";
import { HeroBackdrop } from "./HeroBackdrop";
import { HeroVisual } from "./HeroVisual";

export interface HeroProps {
  service: ServiceDetail;
}

/**
 * Service detail hero — light editorial composition with an interactive 3D
 * capability visual. Deliberately bright (not the dark listing hero).
 */
export function Hero({ service }: HeroProps) {
  const visualSrc = getServiceVisual(service.slug);

  return (
    <Section
      spacing="none"
      className="relative isolate overflow-hidden bg-background"
    >
      <HeroBackdrop />

      <Container size="xl" className="relative py-14 sm:py-16 lg:py-20">
        <Link
          href={ROUTES.services}
          variant="unstyled"
          className="group mb-8 inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <Icon
            size="sm"
            aria-hidden
            className="transition-transform duration-300 group-hover:-translate-x-0.5"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </Icon>
          Back to Services
        </Link>

        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="flex flex-col gap-6 lg:col-span-6">
            <div className="animate-fade-rise flex items-center gap-3">
              <span className="h-5 w-0.5 shrink-0 bg-accent" aria-hidden="true" />
              <span className="font-mono text-xs tracking-[0.25em] text-muted-foreground">
                {service.eyebrow}
              </span>
            </div>

            <Heading
              variant="display"
              className="animate-fade-rise text-balance text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-[1.08]"
              style={{ animationDelay: "90ms" }}
            >
              {service.headline}
            </Heading>

            <Text
              variant="body"
              className="animate-fade-rise max-w-lg text-base leading-relaxed text-muted-foreground"
              style={{ animationDelay: "180ms" }}
            >
              {service.description}
            </Text>

            <div
              className="animate-fade-rise flex flex-col gap-3 sm:flex-row sm:items-center"
              style={{ animationDelay: "270ms" }}
            >
              <Link href={ROUTES.contact} variant="unstyled" className="group inline-flex">
                <Button variant="accent" size="lg" className="gap-3">
                  Start a Project
                  <Icon
                    size="sm"
                    className="transition-transform duration-300 group-hover:translate-x-0.5"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </Icon>
                </Button>
              </Link>
              <Link
                href={`${servicePath(service.slug)}#overview`}
                variant="unstyled"
                className="inline-flex"
              >
                <Button variant="outline" size="lg">
                  Explore the service
                </Button>
              </Link>
            </div>
          </div>

          <div
            className="animate-fade-rise w-full lg:col-span-6"
            style={{ animationDelay: "160ms" }}
          >
            <HeroVisual visualSrc={visualSrc} title={service.title} />
          </div>
        </div>
      </Container>
    </Section>
  );
}
