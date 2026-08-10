/**
 * Static brand + social constants. Runtime/environment-aware values live in
 * `@/config/site`; this file holds values that never change per environment.
 */

export const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/citecht/",
  },
  {
    label: "X",
    href: "https://x.com/CiTechT",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@CiTechTOfficial",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/citecht/",
  },
] as const;

export const CONTACT = {
  email: "contact@citecht.com",
  phone: "",
} as const;
