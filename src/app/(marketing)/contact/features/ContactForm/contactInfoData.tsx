import type { ReactNode } from "react";
import { CONTACT } from "@/constants/site";

export interface ContactDetail {
  label: string;
  value: string;
  icon: ReactNode;
}

export interface TrustPoint {
  title: string;
  description: string;
  icon: ReactNode;
}

function MailIconPaths() {
  return (
    <>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 6-10 7L2 6" />
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

export const CONTACT_DETAILS: ContactDetail[] = [
  { label: "Email", value: CONTACT.email, icon: <MailIconPaths /> },
  { label: "Response time", value: "Within 1 business day", icon: <ClockIconPaths /> },
];

function UserCheckIconPaths() {
  return (
    <>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="m17 11 2 2 4-4" />
    </>
  );
}

function ZapIconPaths() {
  return <path d="M13 2 4.5 13.5H11L10 22l9.5-11.5H13z" />;
}

function LockIconPaths() {
  return (
    <>
      <rect x="4" y="11" width="16" height="10" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    </>
  );
}

export const TRUST_POINTS: TrustPoint[] = [
  {
    title: "Straight to the team",
    description: "No account managers in between — you hear directly from engineers.",
    icon: <UserCheckIconPaths />,
  },
  {
    title: "Fast response",
    description: "We read every message and reply within one business day.",
    icon: <ZapIconPaths />,
  },
  {
    title: "No spam, ever",
    description: "Your details are used only to respond to this inquiry.",
    icon: <LockIconPaths />,
  },
];
