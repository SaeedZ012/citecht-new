import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Heading, Text } from "@/components/ui/Typography";
import { Image } from "@/components/ui/Image";
import type { ServiceDetail } from "@/data/services";
import { getServiceVisual } from "../serviceVisuals";

export interface OverviewProps {
  service: ServiceDetail;
}

/**
 * Service overview — principle panels + floating 3D accent.
 * Intentionally not a photo+checklist layout (that pattern already lives on
 * the Services listing Overview and elsewhere).
 */
export function Overview({ service }: OverviewProps) {
  const visualSrc = getServiceVisual(service.slug);

  return (
    <Section spacing="lg" id="overview" className="relative bg-muted/40">
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute -left-20 top-16 h-64 w-64 rounded-full bg-accent/[0.06] blur-3xl" />
        <div className="absolute -right-16 bottom-10 h-56 w-56 rounded-full bg-info/[0.06] blur-3xl" />
      </div>

      <Container size="xl" className="relative">
        <div className="grid items-end gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="flex flex-col gap-4 lg:col-span-7">
            <div className="flex items-center gap-3">
              <span className="h-5 w-0.5 shrink-0 bg-accent" aria-hidden="true" />
              <span className="text-sm font-medium text-muted-foreground">
                How this service works
              </span>
            </div>

            <Heading variant="h2" className="text-balance">
              {service.overviewTitle}
            </Heading>

            <Text variant="body" className="max-w-xl text-muted-foreground">
              {service.overviewBody}
            </Text>
          </div>

          <div className="relative mx-auto h-36 w-36 lg:col-span-5 lg:mx-0 lg:justify-self-end lg:h-44 lg:w-44">
            <span
              className="absolute inset-0 rounded-full bg-accent/[0.08]"
              aria-hidden="true"
            />
            <span
              className="absolute inset-3 rounded-full border border-dashed border-accent/25"
              aria-hidden="true"
            />
            <div className="animate-visual-bob relative h-full w-full">
              <div className="absolute inset-5">
                <Image
                  src={visualSrc}
                  alt=""
                  fill
                  unoptimized
                  sizes="176px"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        <ol className="mt-12 grid gap-4 sm:grid-cols-3">
          {service.overviewPoints.map((point, index) => (
            <li
              key={point.title}
              className="group relative flex flex-col gap-4 overflow-hidden rounded-lg border border-border bg-background p-6 transition-colors hover:border-accent/40"
            >
              <span
                className="absolute inset-x-0 top-0 h-0.5 bg-accent opacity-70 transition-opacity group-hover:opacity-100"
                aria-hidden="true"
              />
              <span className="font-mono text-xs tracking-[0.22em] text-accent">
                {String(index + 1).padStart(2, "0")}
              </span>
              <Heading variant="h4" as="h3">
                {point.title}
              </Heading>
              <Text variant="muted">{point.description}</Text>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
