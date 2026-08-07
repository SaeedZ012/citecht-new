import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { createMetadata } from "@/constants/metadata";
import { CTA } from "@/components/shared/CTA";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Heading, Text } from "@/components/ui/Typography";
import { Link } from "@/components/ui/Link";
import { Image } from "@/components/ui/Image";
import { Icon } from "@/components/ui/Icon";
import { ROUTES } from "@/constants/routes";
import {
  INSIGHTS,
  formatInsightDate,
  getInsightBySlug,
} from "@/data/insights";

interface InsightPageProps {
  params: Promise<{ slug: string }>;
}

/** Statically generate every article slug at build time — no backend. */
export function generateStaticParams() {
  return INSIGHTS.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: InsightPageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getInsightBySlug(slug);

  if (!article) {
    return createMetadata({ title: "Insights" });
  }

  return createMetadata({
    title: article.title,
    description: article.excerpt,
  });
}

/**
 * Individual article page. Statically generated per slug from the shared
 * `INSIGHTS` data — a simple, readable article layout capped at a text-
 * friendly width, bookended by the shared CTA.
 */
export default async function InsightArticlePage({ params }: InsightPageProps) {
  const { slug } = await params;
  const article = getInsightBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <>
      <Section spacing="lg" className="pb-0">
        <Container size="md">
          <Link
            href={ROUTES.insights}
            variant="unstyled"
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <Icon
              size="sm"
              aria-hidden
              className="transition-transform duration-300 group-hover:-translate-x-0.5"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </Icon>
            Back to Insights
          </Link>

          <div className="mt-6 flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-muted-foreground">
              <span className="rounded-full bg-accent/10 px-2.5 py-1 font-semibold tracking-wide text-accent">
                {article.category}
              </span>
              <span aria-hidden="true">&middot;</span>
              <span>{formatInsightDate(article.date)}</span>
              <span aria-hidden="true">&middot;</span>
              <span>{article.readTime}</span>
            </div>

            <Heading variant="h1" className="text-balance">
              {article.title}
            </Heading>

            <Text variant="body" className="max-w-2xl text-muted-foreground">
              {article.excerpt}
            </Text>
          </div>

          <div className="relative mt-10 aspect-[16/9] w-full overflow-hidden rounded-md border border-border">
            <Image
              src={article.imageSrc}
              alt=""
              fill
              priority
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
            />
          </div>
        </Container>
      </Section>

      <Section spacing="lg">
        <Container size="md">
          <div className="mx-auto flex max-w-2xl flex-col gap-6">
            {article.content.map((paragraph, index) => (
              <Text key={index} variant="body" className="leading-relaxed">
                {paragraph}
              </Text>
            ))}
          </div>
        </Container>
      </Section>

      <CTA />
    </>
  );
}
