import { ROUTES } from "@/constants/routes";

export interface HomeServiceItem {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  href: string;
}

export const HOME_SERVICES: HomeServiceItem[] = [
  {
    id: "custom-web-applications",
    title: "Custom Web Applications",
    description: "Web applications built around how your team works.",
    imageSrc: "/services/custom-web-applications.jpg",
    href: ROUTES.services,
  },
  {
    id: "mobile-solutions",
    title: "Mobile Solutions",
    description: "Mobile apps designed for everyday use.",
    imageSrc: "/services/mobile-solutions.jpg",
    href: ROUTES.services,
  },
  {
    id: "cloud-infrastructure",
    title: "Cloud Infrastructure",
    description: "Cloud environments planned around changing business needs.",
    imageSrc: "/services/cloud-infrastructure.jpg",
    href: ROUTES.services,
  },
  {
    id: "ai-integration",
    title: "AI Integration",
    description: "AI added where it can support a real workflow.",
    imageSrc: "/services/ai-integration.jpg",
    href: ROUTES.services,
  },
];
