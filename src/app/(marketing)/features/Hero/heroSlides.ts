export interface HeroSlide {
  id: string;
  caption: string;
  imageSrc: string;
  imageAlt: string;
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: "software-development",
    caption: "Software Development",
    imageSrc: "/hero/slides/software-development.png",
    imageAlt: "3D software development visual",
  },
  {
    id: "mobile-app-development",
    caption: "Mobile App Development",
    imageSrc: "/hero/slides/mobile-app-development.png",
    imageAlt: "3D mobile app development visual",
  },
  {
    id: "ai-integration",
    caption: "AI Integration",
    imageSrc: "/hero/slides/ai-integration.png",
    imageAlt: "3D AI integration visual",
  },
  {
    id: "saas-development",
    caption: "SaaS Development",
    imageSrc: "/hero/slides/saas-development.png",
    imageAlt: "3D SaaS development visual",
  },
  {
    id: "automation",
    caption: "Automation",
    imageSrc: "/hero/slides/automation.png",
    imageAlt: "3D automation visual",
  },
  {
    id: "system-api-integration",
    caption: "System/API Integration",
    imageSrc: "/hero/slides/system-api-integration.png",
    imageAlt: "3D system and API integration visual",
  },
];
