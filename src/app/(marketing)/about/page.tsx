import { createMetadata } from "@/constants/metadata";
import { CTA } from "@/components/shared/CTA";
import { Hero, Story, Industries, TechStack } from "./features";
import { Process } from "../services/features";

export const metadata = createMetadata({ title: "About" });

/**
 * About page. Composes colocated feature sections only — no business logic.
 */
export default function AboutPage() {
  return (
    <>
      <Hero />
      <Story />
      <Industries />
      <TechStack />
      <Process />
      <CTA />
    </>
  );
}
