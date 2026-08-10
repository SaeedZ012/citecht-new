import { HOME_SERVICE_SLUGS, getServiceBySlug } from "@/data/services";
import { servicePath } from "@/constants/routes";

/** Map featured home services to the light 3D hero visuals. */
const SERVICE_VISUALS: Record<(typeof HOME_SERVICE_SLUGS)[number], string> = {
  "software-development": "/hero/slides/software-development.png",
  "mobile-app-development": "/hero/slides/mobile-app-development.png",
  "cloud-infrastructure": "/hero/slides/system-api-integration.png",
  "ai-integration": "/hero/slides/ai-integration.png",
};

export interface HomeServiceItem {
  id: string;
  title: string;
  description: string;
  /** Photo asset (unused on home — kept for shared typing if needed). */
  imageSrc: string;
  /** Light 3D visual used by the home spotlight UI. */
  visualSrc: string;
  href: string;
}

/** Home preview items — four featured services from the shared catalog. */
export const HOME_SERVICES: HomeServiceItem[] = HOME_SERVICE_SLUGS.map((slug) => {
  const service = getServiceBySlug(slug);

  if (!service) {
    throw new Error(`Missing home service for slug: ${slug}`);
  }

  return {
    id: service.slug,
    title: service.title,
    description: service.shortDescription,
    imageSrc: service.imageSrc,
    visualSrc: SERVICE_VISUALS[slug],
    href: servicePath(service.slug),
  };
});
