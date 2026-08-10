import type { NavItem } from "@/types/navigation";

import { ROUTES } from "@/constants/routes";

/** Primary header navigation. */
export const MAIN_NAV: NavItem[] = [
  { label: "Home", href: ROUTES.home },
  { label: "Services", href: ROUTES.services },
  { label: "About", href: ROUTES.about },
  { label: "Insights", href: ROUTES.insights },
  { label: "Contact", href: ROUTES.contact },
];

/** Grouped footer navigation. */
export const FOOTER_NAV: { title: string; items: NavItem[] }[] = [
  {
    title: "Company",
    items: [
      { label: "Services", href: ROUTES.services },
      { label: "About", href: ROUTES.about },
      { label: "Insights", href: ROUTES.insights },
    ],
  },
  {
    title: "Support",
    items: [{ label: "Contact", href: ROUTES.contact }],
  },
];
