import type { ReactNode } from "react";

export interface WorkflowMetric {
  label: string;
  value: string;
}

export interface WorkflowStep {
  id: string;
  /** Zero-padded index shown on the timeline node, e.g. "01". */
  number: string;
  /** Short label under the timeline node. */
  title: string;
  /** One or two words under the title on the timeline. */
  subtitle: string;
  /** Small mono badge shown above the heading in the content panel. */
  badge: string;
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

/**
 * The five phases of an engagement, driving the auto-playing Workflow
 * showcase. Purely data — no hardcoded steps in the components that render
 * this array.
 */
export const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    id: "diagnostics",
    number: "01",
    title: "Diagnostics",
    subtitle: "Audit & discovery",
    badge: "PHASE 01 · DISCOVERY",
    heading: "Diagnosing the system, not just the symptoms.",
    description:
      "We trace every operational headache back to its root — architecture, data flow, and the constraints your team has been quietly working around.",
    bullets: [
      "Stakeholder & workflow interviews",
      "Full technical & infrastructure audit",
      "Risk and bottleneck mapping",
    ],
    metrics: [
      { label: "Avg. duration", value: "1–2 wks" },
      { label: "Deliverable", value: "Findings report" },
    ],
    icon: <ScannerIconPaths />,
  },
  {
    id: "blueprint",
    number: "02",
    title: "Blueprint",
    subtitle: "Architecture & design",
    badge: "PHASE 02 · ARCHITECTURE",
    heading: "Engineering the blueprint before writing a line of code.",
    description:
      "System architecture, data models, and interface design come together into one reviewable plan — so every later decision has something solid to stand on.",
    bullets: [
      "System & data architecture",
      "UI/UX design and prototyping",
      "Tech stack & platform selection",
    ],
    metrics: [
      { label: "Avg. duration", value: "1–3 wks" },
      { label: "Deliverable", value: "Architecture doc" },
    ],
    icon: <BlueprintCubeIconPaths />,
  },
  {
    id: "engineering",
    number: "03",
    title: "Engineering",
    subtitle: "Build & integrate",
    badge: "PHASE 03 · ENGINEERING",
    heading: "Building in focused, continuously tested sprints.",
    description:
      "Clean, modular code shipped in short cycles — every module isolated, automatically tested, and reviewed before it ever reaches production.",
    bullets: [
      "Agile sprints with weekly demos",
      "Automated testing & code review",
      "API & third-party integration",
    ],
    metrics: [
      { label: "Avg. duration", value: "4–10 wks" },
      { label: "Test coverage", value: "90%+" },
    ],
    icon: <TerminalIconPaths />,
  },
  {
    id: "integration",
    number: "04",
    title: "Integration",
    subtitle: "Cloud & connectivity",
    badge: "PHASE 04 · INTEGRATION",
    heading: "Connecting every system into one reliable stack.",
    description:
      "Cloud infrastructure, APIs, and third-party services are wired together and hardened — so data moves reliably across your entire stack.",
    bullets: [
      "Cloud infrastructure provisioning",
      "Secure API & service integration",
      "CI/CD pipeline configuration",
    ],
    metrics: [
      { label: "Uptime target", value: "99.9%" },
      { label: "Deploys", value: "Automated" },
    ],
    icon: <CloudIntegrationIconPaths />,
  },
  {
    id: "optimization",
    number: "05",
    title: "Optimization",
    subtitle: "Launch & scale",
    badge: "PHASE 05 · OPTIMIZATION",
    heading: "Tuning for performance, then staying on call.",
    description:
      "We profile, optimize, and launch — then stay close with monitoring and support so the system keeps performing long after go-live.",
    bullets: [
      "Performance profiling & tuning",
      "Production launch & monitoring",
      "Ongoing support & SLAs",
    ],
    metrics: [
      { label: "Post-launch support", value: "30 days" },
      { label: "Monitoring", value: "24/7" },
    ],
    icon: <RocketIconPaths />,
  },
];
