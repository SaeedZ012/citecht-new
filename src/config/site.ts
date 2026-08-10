/**
 * Static site configuration for this marketing website.
 * There is no backend or environment-specific runtime, so these are constants.
 */
export const siteConfig = {
  name: "CiTechT",
  logo: "/logo.png",
  description:
    "A modern technology services company helping teams build, improve, and stabilize software, cloud, data, AI, automation, and infrastructure systems.",
  url: "https://www.citecht.com",
  ogImage: "/og-image.png",
  creator: "CiTechT",
  locale: "en_US",
  keywords: [
    "CiTechT",
    "software development",
    "cloud infrastructure",
    "data",
    "AI",
    "automation",
    "technology services",
  ],
} as const;

export type SiteConfig = typeof siteConfig;
