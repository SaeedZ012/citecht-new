import type { ReactNode } from "react";

export type IndustryTone = "accent" | "info" | "success" | "warning" | "danger";

export interface Industry {
  title: string;
  description: string;
  tone: IndustryTone;
  icon: ReactNode;
}

function HealthIconPaths() {
  return (
    <>
      <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.8 1-1a5.5 5.5 0 0 0 0-7.6Z" />
      <path d="M8 12h2l1.5 3 2-6 1.5 3H18" />
    </>
  );
}

function TrendingUpIconPaths() {
  return (
    <>
      <path d="M3 17l6-6 4 4 8-8" />
      <path d="M17 7h4v4" />
    </>
  );
}

function ShoppingBagIconPaths() {
  return (
    <>
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
      <path d="M3 6h18" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </>
  );
}

function GraduationCapIconPaths() {
  return (
    <>
      <path d="M22 10 12 5 2 10l10 5 10-5Z" />
      <path d="M6 12v5c0 1.5 3 3 6 3s6-1.5 6-3v-5" />
    </>
  );
}

function TruckIconPaths() {
  return (
    <>
      <path d="M3 17h1a2 2 0 1 0 4 0h6a2 2 0 1 0 4 0h1a1 1 0 0 0 1-1v-3.5a1 1 0 0 0-.3-.7l-3-3A1 1 0 0 0 16 8h-2V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1Z" />
      <path d="M14 8v5h6.5" />
    </>
  );
}

function BuildingIconPaths() {
  return (
    <>
      <path d="M4 21V7l8-4 8 4v14" />
      <path d="M9 21v-6h6v6" />
      <path d="M9 9h.01M15 9h.01M9 13h.01M15 13h.01" />
    </>
  );
}

function PlaneIconPaths() {
  return (
    <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-1 .1-1.3.5l-.6.8c-.3.5-.2 1.1.3 1.4L9 12l-2 3H4l-1 1.5 3.5 1L8 21l1.5-1v-3l3-2 3.6 5.5c.3.5.9.6 1.4.3l.8-.6c.4-.3.6-.8.5-1.3Z" />
  );
}

function FactoryIconPaths() {
  return (
    <>
      <path d="M2 20h20" />
      <path d="M4 20V10l4 3V10l4 3V10l4 3V6l4 4v10" />
      <path d="M17 6V4h2v2" />
    </>
  );
}

export const INDUSTRIES: Industry[] = [
  {
    title: "Healthcare",
    description: "Patient portals, scheduling, and care-coordination tools built around privacy and uptime.",
    tone: "danger",
    icon: <HealthIconPaths />,
  },
  {
    title: "Finance",
    description: "Reporting dashboards, payment flows, and compliance-ready platforms teams can trust.",
    tone: "success",
    icon: <TrendingUpIconPaths />,
  },
  {
    title: "E-commerce & Retail",
    description: "Storefronts, inventory, and checkout systems built to hold up under real traffic.",
    tone: "accent",
    icon: <ShoppingBagIconPaths />,
  },
  {
    title: "Education",
    description: "Learning platforms, student portals, and course management that scale with enrollment.",
    tone: "info",
    icon: <GraduationCapIconPaths />,
  },
  {
    title: "Logistics & Supply Chain",
    description: "Real-time tracking, route planning, and fleet visibility across every shipment.",
    tone: "warning",
    icon: <TruckIconPaths />,
  },
  {
    title: "Real Estate",
    description: "Listing platforms, virtual tours, and agent-client management tools.",
    tone: "info",
    icon: <BuildingIconPaths />,
  },
  {
    title: "Travel & Hospitality",
    description: "Booking engines, itinerary tools, and guest-experience platforms.",
    tone: "accent",
    icon: <PlaneIconPaths />,
  },
  {
    title: "Manufacturing",
    description: "Production dashboards, inventory systems, and connected monitoring on the floor.",
    tone: "success",
    icon: <FactoryIconPaths />,
  },
];
