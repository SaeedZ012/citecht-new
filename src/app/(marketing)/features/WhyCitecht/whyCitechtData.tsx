import type { ReactNode } from "react";

export interface Domain {
  label: string;
}

export interface Pillar {
  tag: string;
  title: string;
  description: string;
  icon: ReactNode;
}

export interface OutcomePoint {
  title: string;
  description: string;
}

export interface OperationalStat {
  value: string;
  label: string;
}

function BlueprintIconPaths() {
  return (
    <>
      <path d="M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-6l-2-2H5a2 2 0 0 0-2 2Z" />
      <path d="M7 12h10" />
      <path d="M7 16h6" />
    </>
  );
}

function RefreshIconPaths() {
  return (
    <>
      <path d="M21 12a9 9 0 0 1-15.3 6.36L3 16" />
      <path d="M3 12a9 9 0 0 1 15.3-6.36L21 8" />
      <path d="M3 21v-5h5" />
      <path d="M21 3v5h-5" />
    </>
  );
}

function ShieldCheckIconPaths() {
  return (
    <>
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="m9 12 2 2 4-4" />
    </>
  );
}

/** The systems Citecht works across — echoes the section description. */
export const DOMAINS: Domain[] = [
  { label: "Software" },
  { label: "Cloud" },
  { label: "Data" },
  { label: "AI" },
  { label: "Infrastructure" },
];

/** Three pillars mapping directly to "build, improve, automate, stabilize". */
export const PILLARS: Pillar[] = [
  {
    tag: "Build",
    title: "Built for production, not a demo",
    description:
      "New products and platforms engineered around real usage and load from day one — not prototypes dressed up for launch day.",
    icon: <BlueprintIconPaths />,
  },
  {
    tag: "Improve & Automate",
    title: "Modernized without the disruption",
    description:
      "We upgrade legacy systems and automate the manual work slowing your team down, without breaking what already works.",
    icon: <RefreshIconPaths />,
  },
  {
    tag: "Stabilize",
    title: "Steady, long after we ship",
    description:
      "Monitoring, documentation, and clear ownership so the system stays dependable long after the handoff.",
    icon: <ShieldCheckIconPaths />,
  },
];

/** What "dependable and easy to operate" concretely means once we hand off. */
export const OUTCOME_POINTS: OutcomePoint[] = [
  {
    title: "Documented",
    description: "Runbooks and architecture notes your team can actually use.",
  },
  {
    title: "Monitored",
    description:
      "Alerts and dashboards that catch problems before your users do.",
  },
  {
    title: "Owned",
    description: "A named engineer on call — never a ticket queue.",
  },
];

export const OPERATIONAL_STATS: OperationalStat[] = [
  { value: "99.9%", label: "average uptime maintained after launch" },
  { value: "<1 hr", label: "average response time on critical issues" },
];
