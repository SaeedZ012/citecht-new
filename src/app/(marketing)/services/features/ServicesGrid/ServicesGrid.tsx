import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { SERVICES_GRID } from "./servicesGridData";
import { ServiceGridCard } from "./ServiceGridCard";

/**
 * Full service catalog — image-led cards across the core capabilities.
 */
export function ServicesGrid() {
  return (
    <SectionWrapper
      id="catalog"
      spacing="lg"
      className="bg-muted/50"
      eyebrow="Catalog"
      title="Our services"
      description="Start with the capability closest to your problem — or combine several into one system."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {SERVICES_GRID.map((service) => (
          <ServiceGridCard key={service.id} service={service} />
        ))}
      </div>
    </SectionWrapper>
  );
}
