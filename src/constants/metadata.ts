import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

/**
 * Default, app-wide metadata. Route segments can spread and override this
 * via their own `metadata` export or `generateMetadata`.
 */
export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.creator }],
  creator: siteConfig.creator,
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [{ url: siteConfig.ogImage }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

/**
 * Build page-level metadata by merging overrides onto the defaults.
 */
export function createMetadata(overrides: Metadata = {}): Metadata {
  return { ...defaultMetadata, ...overrides };
}
