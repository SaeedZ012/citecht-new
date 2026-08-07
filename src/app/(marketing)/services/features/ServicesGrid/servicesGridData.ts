export interface ServiceGridItem {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
}

export const SERVICES_GRID: ServiceGridItem[] = [
  {
    id: "software-development",
    title: "Software Development",
    description:
      "Full-stack products engineered for performance and longevity.",
    imageSrc: "/services/custom-web-applications.jpg",
  },
  {
    id: "mobile-app-development",
    title: "Mobile App Development",
    description: "Native and cross-platform apps built for everyday use.",
    imageSrc: "/services/mobile-solutions.jpg",
  },
  {
    id: "cloud-infrastructure",
    title: "Cloud Infrastructure",
    description: "Scalable, secure environments that grow with your business.",
    imageSrc: "/services/cloud-infrastructure.jpg",
  },
  {
    id: "ai-integration",
    title: "AI Integration",
    description: "Applied AI embedded into real, working workflows.",
    imageSrc: "/services/ai-integration.jpg",
  },
  {
    id: "saas-development",
    title: "SaaS Development",
    description: "End-to-end SaaS platforms, from architecture to billing.",
    imageSrc: "/services/saas-development.jpg",
  },
  {
    id: "automation",
    title: "Automation",
    description: "Automated pipelines that remove repetitive manual work.",
    imageSrc: "/services/automation.jpg",
  },
  {
    id: "system-api-integration",
    title: "System & API Integration",
    description: "Connected systems that share data reliably in real time.",
    imageSrc: "/services/system-api-integration.jpg",
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    description: "Interfaces designed around real user behavior.",
    imageSrc: "/services/ui-ux-design.jpg",
  },
];
