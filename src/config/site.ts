/**
 * Static site configuration for this marketing website.
 * There is no backend or environment-specific runtime, so these are constants.
 */
export const siteConfig = {
  name: "Citecht",
  logo: "/logo.png",
  description:
    "A modern marketing website built with Next.js, showcasing our products and services.",
  url: "https://www.citecht.com",
  ogImage: "/og-image.png",
  creator: "Citecht",
  locale: "en_US",
  keywords: [
    "Citecht",
    "marketing",
    "next.js",
    "web",
    "services",
  ],
} as const;

export type SiteConfig = typeof siteConfig;
