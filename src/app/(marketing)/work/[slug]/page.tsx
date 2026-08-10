import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { createMetadata } from "@/constants/metadata";
import { CTA } from "@/components/shared/CTA";
import { ROUTES } from "@/constants/routes";
import { WORK_PROJECTS, getWorkBySlug } from "@/data/work";
import { ProjectHeader, ProjectGallery } from "./features";

interface WorkPageProps {
  params: Promise<{ slug: string }>;
}

/** Statically generate every portfolio slug at build time — no backend. */
export function generateStaticParams() {
  return WORK_PROJECTS.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: WorkPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getWorkBySlug(slug);

  if (!project) {
    return createMetadata({ title: "Work" });
  }

  return createMetadata({
    title: project.title,
    description: project.description,
  });
}

/**
 * Portfolio project page — image gallery first, contact CTA at the bottom.
 * Placeholder content until real case studies replace the sample set.
 */
export default async function WorkProjectPage({ params }: WorkPageProps) {
  const { slug } = await params;
  const project = getWorkBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <ProjectHeader project={project} />
      <ProjectGallery project={project} />
      <CTA
        eyebrow="LET'S BUILD YOURS"
        title="Have a project like this in mind?"
        description="Tell us what you're building. We'll help you shape the architecture and a plan you can ship against."
        primaryLabel="Contact Us"
        primaryHref={ROUTES.contact}
        secondaryLabel="Back to Home"
        secondaryHref={ROUTES.home}
      />
    </>
  );
}
