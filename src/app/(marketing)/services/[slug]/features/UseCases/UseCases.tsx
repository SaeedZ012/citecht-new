import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { Card } from "@/components/ui/Card";
import { Heading, Text } from "@/components/ui/Typography";
import type { ServiceDetail } from "@/data/services";

export interface UseCasesProps {
  service: ServiceDetail;
}

/**
 * Relevant use cases / solutions for this service.
 */
export function UseCases({ service }: UseCasesProps) {
  return (
    <SectionWrapper
      spacing="lg"
      title="Where this service fits"
      description="Common problems we solve with this capability — start with the one closest to yours."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {service.useCases.map((item) => (
          <Card key={item.title} className="flex flex-col gap-2 border-t-2 border-t-accent p-6">
            <Heading variant="h4" as="h3">
              {item.title}
            </Heading>
            <Text variant="muted">{item.description}</Text>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
