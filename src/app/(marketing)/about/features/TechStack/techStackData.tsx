import type { ReactNode } from "react";

export type TechCategory = "frontend" | "backend" | "database" | "mobile" | "cloud";

export interface TechItem {
  name: string;
  category: TechCategory;
}

function CodeIconPaths() {
  return (
    <>
      <path d="M16 18l6-6-6-6" />
      <path d="M8 6l-6 6 6 6" />
    </>
  );
}

function ServerIconPaths() {
  return (
    <>
      <rect x="2" y="3" width="20" height="8" rx="2" />
      <rect x="2" y="13" width="20" height="8" rx="2" />
      <path d="M6 7h.01M6 17h.01" />
    </>
  );
}

function DatabaseIconPaths() {
  return (
    <>
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
      <path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
    </>
  );
}

function SmartphoneIconPaths() {
  return (
    <>
      <rect x="6" y="2" width="12" height="20" rx="2" />
      <path d="M11 18h2" />
    </>
  );
}

function CloudIconPaths() {
  return <path d="M17.5 19a4.5 4.5 0 0 0 0-9 6 6 0 0 0-11.4-2A5 5 0 0 0 6 18h11.5Z" />;
}

/** One icon per category — badges reference this, not per-technology logos. */
export const CATEGORY_ICONS: Record<TechCategory, ReactNode> = {
  frontend: <CodeIconPaths />,
  backend: <ServerIconPaths />,
  database: <DatabaseIconPaths />,
  mobile: <SmartphoneIconPaths />,
  cloud: <CloudIconPaths />,
};

/** Top row — scrolls left. Frontend + backend fundamentals. */
export const TECH_ROW_ONE: TechItem[] = [
  { name: "React", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "Vue.js", category: "frontend" },
  { name: "Angular", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "Node.js", category: "backend" },
  { name: "Python", category: "backend" },
  { name: "Django", category: "backend" },
  { name: "Express", category: "backend" },
];

/** Bottom row — scrolls right. Data, mobile, and cloud. */
export const TECH_ROW_TWO: TechItem[] = [
  { name: "NestJS", category: "backend" },
  { name: "GraphQL", category: "backend" },
  { name: "PostgreSQL", category: "database" },
  { name: "MongoDB", category: "database" },
  { name: "MySQL", category: "database" },
  { name: "Redis", category: "database" },
  { name: "React Native", category: "mobile" },
  { name: "Flutter", category: "mobile" },
  { name: "Swift", category: "mobile" },
  { name: "Kotlin", category: "mobile" },
  { name: "Docker", category: "cloud" },
  { name: "AWS", category: "cloud" },
];
