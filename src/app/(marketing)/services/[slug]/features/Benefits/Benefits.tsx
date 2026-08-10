import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Heading, Text } from "@/components/ui/Typography";
import { Icon } from "@/components/ui/Icon";
import type { ServiceDetail } from "@/data/services";

export interface BenefitsProps {
  service: ServiceDetail;
}

/**
 * Why choose this service — outcome-led benefits list.
 */
export function Benefits({ service }: BenefitsProps) {
  return (
    <Section spacing="lg">
      <Container size="xl">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="flex flex-col gap-4 lg:col-span-4">
            <div className="flex items-center gap-3">
              <span className="h-5 w-0.5 shrink-0 bg-accent" aria-hidden="true" />
              <span className="text-sm font-medium text-muted-foreground">
                Why Citecht
              </span>
            </div>
            <Heading variant="h2" className="text-balance">
              Why teams choose this service
            </Heading>
            <Text variant="muted">
              Outcomes that matter after launch — not just a delivery milestone.
            </Text>
          </div>

          <ul className="grid gap-6 sm:grid-cols-2 lg:col-span-8">
            {service.benefits.map((item) => (
              <li key={item.title} className="flex items-start gap-3">
                <span
                  className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent"
                  aria-hidden="true"
                >
                  <Icon size="sm">
                    <path d="M20 6 9 17l-5-5" />
                  </Icon>
                </span>
                <div className="flex flex-col gap-1">
                  <Text variant="label">{item.title}</Text>
                  <Text variant="muted">{item.description}</Text>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
