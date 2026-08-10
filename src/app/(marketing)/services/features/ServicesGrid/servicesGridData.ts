import { SERVICES } from "@/data/services";
import { servicePath } from "@/constants/routes";

export interface ServiceGridItem {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  href: string;
}

/** Full catalog cards — derived from the shared services data. */
export const SERVICES_GRID: ServiceGridItem[] = SERVICES.map((service) => ({
  id: service.slug,
  title: service.title,
  description: service.shortDescription,
  imageSrc: service.imageSrc,
  href: servicePath(service.slug),
}));
