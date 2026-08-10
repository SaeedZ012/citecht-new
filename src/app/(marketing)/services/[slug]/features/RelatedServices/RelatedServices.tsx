import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { servicePath } from "@/constants/routes";
import { SERVICES, type ServiceDetail } from "@/data/services";
import { ServiceGridCard } from "../../../features/ServicesGrid/ServiceGridCard";

export interface RelatedServicesProps {
  service: ServiceDetail;
}

/**
 * Three related services so detail pages connect back into the catalog.
 */
export function RelatedServices({ service }: RelatedServicesProps) {
  const index = SERVICES.findIndex((item) => item.slug === service.slug);
  const related = [1, 2, 3].map(
    (offset) => SERVICES[(index + offset) % SERVICES.length]
  );

  return (
    <SectionWrapper
      spacing="lg"
      title="Related services"
      description="Combine capabilities into one connected system — or explore the next area closest to your problem."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {related.map((item) => (
          <ServiceGridCard
            key={item.slug}
            service={{
              id: item.slug,
              title: item.title,
              description: item.shortDescription,
              imageSrc: item.imageSrc,
              href: servicePath(item.slug),
            }}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
