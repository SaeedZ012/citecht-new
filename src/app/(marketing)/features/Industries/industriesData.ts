export type IndustryId =
  | "fintech"
  | "healthtech"
  | "ecommerce"
  | "ai-saas"
  | "enterprise"
  | "startups";

export interface HomeIndustry {
  id: IndustryId;
  label: string;
  title: string;
  description: string;
  metric: string;
  metricLabel: string;
}

/**
 * Home industries strip — six verticals CiTechT ships systems for.
 * Copy stays concrete and operable, matching the rest of the marketing tone.
 */
export const HOME_INDUSTRIES: HomeIndustry[] = [
  {
    id: "fintech",
    label: "01",
    title: "FinTech",
    description:
      "Payment flows, ledgers, and compliance-ready dashboards teams can audit and operate.",
    metric: "99.9%",
    metricLabel: "settlement uptime",
  },
  {
    id: "healthtech",
    label: "02",
    title: "HealthTech",
    description:
      "Care workflows, scheduling, and patient surfaces designed around privacy and uptime.",
    metric: "HIPAA",
    metricLabel: "ready patterns",
  },
  {
    id: "ecommerce",
    label: "03",
    title: "E-commerce",
    description:
      "Catalog, checkout, and inventory systems built to hold up under real traffic spikes.",
    metric: "10x",
    metricLabel: "peak traffic ready",
  },
  {
    id: "ai-saas",
    label: "04",
    title: "AI & SaaS",
    description:
      "Multi-tenant platforms with applied AI where a model actually earns its place.",
    metric: "RAG",
    metricLabel: "grounded assistants",
  },
  {
    id: "enterprise",
    label: "05",
    title: "Enterprise",
    description:
      "Internal platforms and integrations that connect teams without fragile glue code.",
    metric: "SSO",
    metricLabel: "org-ready access",
  },
  {
    id: "startups",
    label: "06",
    title: "Startups",
    description:
      "MVPs with durable seams — ship fast without painting yourself into a rewrite.",
    metric: "8 wks",
    metricLabel: "typical MVP path",
  },
];
