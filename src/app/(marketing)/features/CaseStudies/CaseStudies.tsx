import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Heading, Text } from "@/components/ui/Typography";
import { Link } from "@/components/ui/Link";
import { Icon } from "@/components/ui/Icon";
import { ArticleCard } from "@/components/shared/ArticleCard";
import { ROUTES } from "@/constants/routes";
import { getRandomInsights } from "@/data/insights";

/**
 * "Featured Case Studies" — a rotating sample of engineering write-ups
 * pulled from Insights, sitting between Featured Work and the closing CTA.
 * A left-aligned header with an inline "View All" link (distinct from the
 * centered treatment above it in Featured Work) keeps consecutive sections
 * from feeling repetitive.
 */
export function CaseStudies() {
  const articles = getRandomInsights(3);

  return (
    <Section spacing="lg" className="bg-muted/40">
      <Container size="xl">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-col gap-3 sm:max-w-xl">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-accent">
              <span className="h-px w-6 bg-accent" aria-hidden="true" />
              CASE STUDIES
            </span>

            <Heading variant="h2" className="text-balance">
              Featured Case Studies
            </Heading>

            <Text variant="muted">
              A closer look at how we think through the problems our
              clients bring us, straight from our engineering notes.
            </Text>
          </div>

          <Link
            href={ROUTES.insights}
            variant="unstyled"
            className="group inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-accent"
          >
            View All Insights
            <Icon
              size="sm"
              aria-hidden
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </Icon>
          </Link>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
