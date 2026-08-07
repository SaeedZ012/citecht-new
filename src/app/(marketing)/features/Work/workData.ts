export interface WorkItem {
  id: string;
  category: string;
  title: string;
  description: string;
  imageSrc: string;
  tags: string[];
}

/**
 * Representative project archetypes across the systems CiTechT builds.
 * Kept generic (no fabricated client names) while still reading as
 * concrete, shipped outcomes.
 */
export const WORK_ITEMS: WorkItem[] = [
  {
    id: "logistics-operations-platform",
    category: "Custom Web Platform",
    title: "Logistics Operations Platform",
    description:
      "Real-time shipment tracking and exception alerts, replacing a patchwork of spreadsheets with one live operations view.",
    imageSrc: "/services/custom-web-applications.jpg",
    tags: ["Next.js", "PostgreSQL", "AWS"],
  },
  {
    id: "financial-insights-dashboard",
    category: "SaaS Analytics",
    title: "Financial Insights Dashboard",
    description:
      "A multi-tenant reporting dashboard that turns scattered financial data into one dependable source of truth.",
    imageSrc: "/services/saas-development.jpg",
    tags: ["React", "Node.js", "Redis"],
  },
  {
    id: "ai-assisted-support-console",
    category: "AI Integration",
    title: "AI-Assisted Support Console",
    description:
      "An internal console that triages and summarizes support tickets with AI, cutting response time without adding headcount.",
    imageSrc: "/services/ai-integration.jpg",
    tags: ["Python", "OpenAI API", "Docker"],
  },
];
