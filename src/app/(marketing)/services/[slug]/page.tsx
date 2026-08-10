import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { createMetadata } from "@/constants/metadata";
import { CTA } from "@/components/shared/CTA";
import { ROUTES } from "@/constants/routes";
import { SERVICES, getServiceBySlug } from "@/data/services";
import {
  Hero,
  Overview,
  Capabilities,
  Process,
  Technologies,
  Benefits,
  UseCases,
  FAQ,
  RelatedServices,
} from "./features";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

/** Statically generate every service slug at build time — no backend. */
export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return createMetadata({ title: "Services" });
  }

  return createMetadata({
    title: service.title,
    description: service.shortDescription,
  });
}

/**
 * Individual service detail page. Statically generated per slug from the
 * shared `SERVICES` catalog — composed from colocated feature sections.
 */
export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <Hero service={service} />
      <Overview service={service} />
      <Capabilities service={service} />
      <Process service={service} />
      <Technologies service={service} />
      <Benefits service={service} />
      <UseCases service={service} />
      <FAQ service={service} />
      <RelatedServices service={service} />
      <CTA
        title={service.ctaTitle}
        description={service.ctaDescription}
        secondaryLabel="All Services"
        secondaryHref={ROUTES.services}
      />
    </>
  );
}
