/**
 * Centralized route map for the marketing site. Reference routes from here
 * instead of hardcoding path strings across components.
 */
export const ROUTES = {
  home: "/",
  about: "/about",
  services: "/services",
  insights: "/insights",
  contact: "/contact",
  work: "/work",
} as const;

export type RouteKey = keyof typeof ROUTES;
export type RoutePath = (typeof ROUTES)[RouteKey];

/** Build a dedicated service detail path, e.g. `/services/ai-integration`. */
export function servicePath(slug: string): string {
  return `${ROUTES.services}/${slug}`;
}

/** Build a portfolio project path, e.g. `/work/logistics-operations-platform`. */
export function workPath(slug: string): string {
  return `${ROUTES.work}/${slug}`;
}
