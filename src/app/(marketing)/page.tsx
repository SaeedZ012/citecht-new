import { Hero, Services, Industries, WhyCitecht, Work, CaseStudies } from "./features";
import { CTA } from "@/components/shared/CTA";

/**
 * Home page (`/`). Composes marketing feature sections only — no logic.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Industries />
      <WhyCitecht />
      <Work />
      <CaseStudies />
      <CTA />
    </>
  );
}
