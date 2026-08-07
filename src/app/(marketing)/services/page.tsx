import { createMetadata } from "@/constants/metadata";
import { CTA } from "@/components/shared/CTA";
import { ROUTES } from "@/constants/routes";
import { Hero, Overview, ServicesGrid, Process } from "./features";

export const metadata = createMetadata({ title: "Services" });

/**
 * Services page. Composes colocated feature sections only.
 */
export default function ServicesPage() {
  return (
    <>
      <Hero />
      <Overview />
      <ServicesGrid />
      <Process />
      <CTA secondaryLabel="Meet the Team" secondaryHref={ROUTES.about} />
    </>
  );
}
