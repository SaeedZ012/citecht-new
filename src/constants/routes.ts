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
} as const;

export type RouteKey = keyof typeof ROUTES;
export type RoutePath = (typeof ROUTES)[RouteKey];
