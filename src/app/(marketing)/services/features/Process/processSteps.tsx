import type { ReactNode } from "react";

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  items: string[];
  icon: ReactNode;
}

function SearchIconPaths() {
  return (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.3-4.3" />
    </>
  );
}

function DesignIconPaths() {
  return (
    <>
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5Z" />
    </>
  );
}

function CodeIconPaths() {
  return (
    <>
      <path d="M16 18l6-6-6-6" />
      <path d="M8 6l-6 6 6 6" />
    </>
  );
}

function LaunchIconPaths() {
  return (
    <>
      <path d="M22 2 11 13" />
      <path d="M22 2 15 22l-4-9-9-4 20-7Z" />
    </>
  );
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Discovery & Strategy",
    description:
      "We dig into your business, users, and technical constraints — turning ambiguity into a clear, actionable plan.",
    items: ["Stakeholder interviews", "Technical audit", "Scope & roadmap"],
    icon: <SearchIconPaths />,
  },
  {
    step: "02",
    title: "Architecture & Design",
    description:
      "Engineers and designers map the system — data architecture, integrations, and interface — before a line of code ships.",
    items: ["System architecture", "UI/UX design", "Tech stack selection"],
    icon: <DesignIconPaths />,
  },
  {
    step: "03",
    title: "Development & Integration",
    description:
      "We build in focused sprints — writing clean, tested code and integrating every system, API, and service it depends on.",
    items: ["Agile sprints", "Code reviews", "API & system integration"],
    icon: <CodeIconPaths />,
  },
  {
    step: "04",
    title: "Deployment & Support",
    description:
      "We don't just ship and leave. Ongoing monitoring and support keep your systems reliable long after launch.",
    items: ["CI/CD deployment", "Uptime monitoring", "Ongoing support & SLAs"],
    icon: <LaunchIconPaths />,
  },
];
