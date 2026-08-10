import type { ReactNode } from "react";

export interface WorkflowMetric {
  label: string;
  value: string;
}

export interface WorkflowStep {
  id: string;
  number: string;
  title: string;
  heading: string;
  description: string;
  bullets: string[];
  metrics: WorkflowMetric[];
  icon: ReactNode;
}

function ScannerIconPaths() {
  return (
    <>
      <circle cx="11" cy="11" r="7" />
      <circle cx="11" cy="11" r="3" />
      <path d="M21 21l-4.3-4.3" />
    </>
  );
}

function BlueprintCubeIconPaths() {
  return (
    <>
      <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3Z" />
      <path d="M12 12V3M12 12l8-4.5M12 12l-8-4.5" />
    </>
  );
}

function TerminalIconPaths() {
  return (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M8 9l3 3-3 3M13 15h3" />
    </>
  );
}

function CloudIntegrationIconPaths() {
  return (
    <>
      <path d="M7 18a4 4 0 0 1-1-7.874A5 5 0 0 1 15.9 8.02 4.5 4.5 0 0 1 17.5 17H7Z" />
      <path d="M9 21v-3M12 21v-3M15 21v-3" />
    </>
  );
}

function RocketIconPaths() {
  return (
    <>
      <path d="M12 2c3 2 4.5 6 4.5 9.5 0 2-1 3.8-2.2 5L12 19l-2.3-2.5C8.5 15.3 7.5 13.5 7.5 11.5 7.5 8 9 4 12 2Z" />
      <circle cx="12" cy="10" r="1.7" />
      <path d="M9 17l-2 4M15 17l2 4" />
    </>
  );
}

/** Five engagement phases for the workflow showcase. */
export const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    id: "diagnostics",
    number: "01",
    title: "Diagnostics",
    heading: "Find the real constraint",
    description:
      "We map architecture, data flow, and workflow friction before proposing a build path.",
    bullets: ["Technical audit", "Risk and bottleneck mapping"],
    metrics: [
      { label: "Duration", value: "1–2 wks" },
      { label: "Deliverable", value: "Findings" },
    ],
    icon: <ScannerIconPaths />,
  },
  {
    id: "blueprint",
    number: "02",
    title: "Blueprint",
    heading: "Design before code",
    description:
      "Architecture, data models, and interface direction land in one reviewable plan.",
    bullets: ["System architecture", "Stack and UX direction"],
    metrics: [
      { label: "Duration", value: "1–3 wks" },
      { label: "Deliverable", value: "Plan" },
    ],
    icon: <BlueprintCubeIconPaths />,
  },
  {
    id: "engineering",
    number: "03",
    title: "Engineering",
    heading: "Build in short, tested cycles",
    description:
      "Modular code ships in focused sprints — reviewed and tested before it reaches production.",
    bullets: ["Weekly demos", "Tests and code review"],
    metrics: [
      { label: "Duration", value: "4–10 wks" },
      { label: "Coverage", value: "90%+" },
    ],
    icon: <TerminalIconPaths />,
  },
  {
    id: "integration",
    number: "04",
    title: "Integration",
    heading: "Connect the stack",
    description:
      "Cloud, APIs, and services wired together so data moves reliably across the system.",
    bullets: ["Cloud setup", "API and CI/CD wiring"],
    metrics: [
      { label: "Uptime", value: "99.9%" },
      { label: "Deploys", value: "Automated" },
    ],
    icon: <CloudIntegrationIconPaths />,
  },
  {
    id: "optimization",
    number: "05",
    title: "Optimization",
    heading: "Launch, then stay close",
    description:
      "We tune performance, go live, and keep monitoring so the system holds after handoff.",
    bullets: ["Launch monitoring", "Post-launch support"],
    metrics: [
      { label: "Support", value: "30 days" },
      { label: "Monitoring", value: "24/7" },
    ],
    icon: <RocketIconPaths />,
  },
];
