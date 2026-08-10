import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { Badge } from "@/components/ui/Badge";
import type { ServiceDetail } from "@/data/services";

export interface TechnologiesProps {
  service: ServiceDetail;
}

/**
 * Tools and technologies relevant to this service.
 */
export function Technologies({ service }: TechnologiesProps) {
  return (
    <SectionWrapper
      spacing="lg"
      title="Technologies & tools"
      description="Dependable, well-supported tools chosen for what they let us build and maintain — not the newest thing this week."
      className="bg-muted/40"
    >
      <ul className="flex flex-wrap gap-2.5">
        {service.technologies.map((tech) => (
          <li key={tech}>
            <Badge variant="neutral" className="px-3 py-1.5 text-sm font-medium">
              {tech}
            </Badge>
          </li>
        ))}
      </ul>
    </SectionWrapper>
  );
}
