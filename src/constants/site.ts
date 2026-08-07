/**
 * Static brand + social constants. Runtime/environment-aware values live in
 * `@/config/site`; this file holds values that never change per environment.
 */

export const SOCIAL_LINKS = {
  twitter: "https://twitter.com",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
} as const;

export const CONTACT = {
  email: "hello@example.com",
  phone: "+1 (000) 000-0000",
} as const;
