import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { SERVICES_GRID } from "./servicesGridData";
import { ServiceGridCard } from "./ServiceGridCard";

/**
 * Full service catalog — eight image-led cards, four per row on desktop.
 */
export function ServicesGrid() {
  return (
    <SectionWrapper
      spacing="lg"
      title="Our core services"
      description="Eight focused capabilities we bring to every engagement — start with the one closest to your current problem, or combine several into one system."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {SERVICES_GRID.map((service) => (
          <ServiceGridCard key={service.id} service={service} />
        ))}
      </div>
    </SectionWrapper>
  );
}
