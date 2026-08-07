import type { ReactNode } from "react";

export interface Milestone {
  value: string;
  label: string;
  icon: ReactNode;
}

function FlagIconPaths() {
  return (
    <>
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <path d="M4 22V15" />
    </>
  );
}

function ClockIconPaths() {
  return (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </>
  );
}

function RocketIconPaths() {
  return (
    <>
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </>
  );
}

function UsersIconPaths() {
  return (
    <>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </>
  );
}

/** A short "journey" arc — founding through today — used by the hero visual. */
export const MILESTONES: Milestone[] = [
  { value: "2015", label: "Where the team started", icon: <FlagIconPaths /> },
  { value: "10+", label: "Years of experience", icon: <ClockIconPaths /> },
  { value: "200+", label: "Projects delivered", icon: <RocketIconPaths /> },
  { value: "50+", label: "Happy clients", icon: <UsersIconPaths /> },
];

export const FOCUS_AREAS = ["SOFTWARE", "CLOUD", "DATA", "AI", "INFRASTRUCTURE"];
