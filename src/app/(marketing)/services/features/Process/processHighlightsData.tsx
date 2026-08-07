import type { ReactNode } from "react";

export interface ProcessHighlight {
  title: string;
  description: string;
  icon: ReactNode;
}

function CalendarIconPaths() {
  return (
    <>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </>
  );
}

function ShieldIconPaths() {
  return <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />;
}

function LifeBuoyIconPaths() {
  return (
    <>
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <path d="m4.93 4.93 4.24 4.24M14.83 14.83l4.24 4.24M14.83 9.17l4.24-4.24M4.93 19.07l4.24-4.24" />
    </>
  );
}

/**
 * "What working with us looks like" — engagement-model details (cadence,
 * scope, post-launch support) that pair naturally with the step-by-step
 * process flow, without repeating the "Documented / Monitored / Owned"
 * operational points already covered on the home page.
 */
export const PROCESS_HIGHLIGHTS: ProcessHighlight[] = [
  {
    title: "Weekly Check-ins",
    description:
      "A standing call every week, plus async updates in between — never radio silence.",
    icon: <CalendarIconPaths />,
  },
  {
    title: "Fixed Scope, No Surprises",
    description:
      "Milestones and budget agreed upfront, so the plan doesn't drift mid-project.",
    icon: <ShieldIconPaths />,
  },
  {
    title: "30 Days of Support Included",
    description:
      "Every engagement includes a month of post-launch support after handoff, at no extra cost.",
    icon: <LifeBuoyIconPaths />,
  },
];
