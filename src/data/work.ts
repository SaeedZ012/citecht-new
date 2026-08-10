/**
 * Static portfolio projects for the marketing site. Detail pages are
 * generated from this data at build time — placeholder content and imagery
 * until real case studies are ready.
 */

export interface WorkProject {
  slug: string;
  category: string;
  title: string;
  description: string;
  /** Cover image used on the home Featured Work cards. */
  imageSrc: string;
  tags: string[];
  /** Project gallery — pics only on the portfolio detail page. */
  gallery: string[];
}

export const WORK_PROJECTS: WorkProject[] = [
  {
    slug: "logistics-operations-platform",
    category: "Custom Web Platform",
    title: "Logistics Operations Platform",
    description:
      "Real-time shipment tracking and exception alerts, replacing a patchwork of spreadsheets with one live operations view.",
    imageSrc: "/services/custom-web-applications.jpg",
    tags: ["Next.js", "PostgreSQL", "AWS"],
    gallery: [
      "/services/custom-web-applications.jpg",
      "/hero/software-development.jpg",
      "/services/system-api-integration.jpg",
      "/about/team-collaboration.jpg",
      "/services/cloud-infrastructure.jpg",
    ],
  },
  {
    slug: "financial-insights-dashboard",
    category: "SaaS Analytics",
    title: "Financial Insights Dashboard",
    description:
      "A multi-tenant reporting dashboard that turns scattered financial data into one dependable source of truth.",
    imageSrc: "/services/saas-development.jpg",
    tags: ["React", "Node.js", "Redis"],
    gallery: [
      "/services/saas-development.jpg",
      "/hero/data-analytics.jpg",
      "/services/ui-ux-design.jpg",
      "/about/pair-programming.jpg",
      "/services/automation.jpg",
    ],
  },
  {
    slug: "ai-assisted-support-console",
    category: "AI Integration",
    title: "AI-Assisted Support Console",
    description:
      "An internal console that triages and summarizes support tickets with AI, cutting response time without adding headcount.",
    imageSrc: "/services/ai-integration.jpg",
    tags: ["Python", "OpenAI API", "Docker"],
    gallery: [
      "/services/ai-integration.jpg",
      "/hero/ai-integration.jpg",
      "/services/mobile-solutions.jpg",
      "/services/custom-web-applications.jpg",
      "/about/team-collaboration.jpg",
    ],
  },
];

export function getWorkBySlug(slug: string): WorkProject | undefined {
  return WORK_PROJECTS.find((project) => project.slug === slug);
}
