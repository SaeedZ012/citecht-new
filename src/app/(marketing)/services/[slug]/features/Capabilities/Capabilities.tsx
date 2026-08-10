import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { Card } from "@/components/ui/Card";
import { Heading, Text } from "@/components/ui/Typography";
import type { ServiceDetail } from "@/data/services";

export interface CapabilitiesProps {
  service: ServiceDetail;
}

/**
 * Key capabilities grid for a single service detail page.
 */
export function Capabilities({ service }: CapabilitiesProps) {
  return (
    <SectionWrapper
      spacing="lg"
      title="Key capabilities"
      description={`What ${service.title.toLowerCase()} covers when we partner with your team.`}
      className="bg-muted/40"
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {service.capabilities.map((item) => (
          <Card key={item.title} className="flex flex-col gap-2 p-6">
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
