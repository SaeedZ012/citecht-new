import { createMetadata } from "@/constants/metadata";
import { CTA } from "@/components/shared/CTA";
import { Hero, ArticlesGrid } from "./features";

export const metadata = createMetadata({
  title: "Insights",
  description:
    "Practical thinking on software, cloud, data, and AI from the CiTechT team.",
});

/**
 * Insights page (`/insights`). Composes colocated feature sections only.
 */
export default function InsightsPage() {
  return (
    <>
      <Hero />
      <ArticlesGrid />
      <CTA />
    </>
  );
}
