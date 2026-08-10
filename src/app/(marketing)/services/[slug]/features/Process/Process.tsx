import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Heading, Text } from "@/components/ui/Typography";
import type { ServiceDetail } from "@/data/services";

export interface ProcessProps {
  service: ServiceDetail;
}

/**
 * How we work for this service — numbered steps, one purpose per section.
 */
export function Process({ service }: ProcessProps) {
  return (
    <Section spacing="lg">
      <Container size="xl">
        <div className="mb-10 flex flex-col gap-3 sm:max-w-xl">
          <div className="flex items-center gap-3">
            <span className="h-5 w-0.5 shrink-0 bg-accent" aria-hidden="true" />
            <span className="text-sm font-medium text-muted-foreground">
              How We Work
            </span>
          </div>
          <Heading variant="h2" className="text-balance">
            A clear path from problem to operable delivery.
          </Heading>
          <Text variant="muted">
            The same engagement discipline we use across CiTechT — scoped to{" "}
            {service.title.toLowerCase()}.
          </Text>
        </div>

        <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {service.process.map((step, index) => (
            <li
              key={step.title}
              className="flex flex-col gap-3 border-t border-border pt-6"
            >
              <span className="font-mono text-xs tracking-[0.2em] text-accent">
                {String(index + 1).padStart(2, "0")}
              </span>
              <Heading variant="h4" as="h3">
                {step.title}
              </Heading>
              <Text variant="muted">{step.description}</Text>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
