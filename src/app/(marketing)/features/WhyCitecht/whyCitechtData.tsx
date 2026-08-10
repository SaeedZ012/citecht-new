export interface Pillar {
  tag: string;
  title: string;
  description: string;
}

export interface OperationalStat {
  value: string;
  label: string;
}

/** Three pillars: build, improve, stabilize. */
export const PILLARS: Pillar[] = [
  {
    tag: "Build",
    title: "Built for production, not a demo",
    description:
      "Products and platforms engineered for real usage and load from day one.",
  },
  {
    tag: "Improve",
    title: "Modernized without the disruption",
    description:
      "Upgrade legacy systems and automate slow work without breaking what runs.",
  },
  {
    tag: "Stabilize",
    title: "Steady, long after we ship",
    description:
      "Monitoring, documentation, and clear ownership after handoff.",
  },
];

export const OPERATIONAL_STATS: OperationalStat[] = [
  { value: "99.9%", label: "uptime after launch" },
  { value: "<1 hr", label: "critical response" },
  { value: "Owned", label: "named engineer on call" },
];
