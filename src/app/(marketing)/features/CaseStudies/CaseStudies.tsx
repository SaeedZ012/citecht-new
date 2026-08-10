import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading, Text } from "@/components/ui/Typography";
import { Link } from "@/components/ui/Link";
import { Button } from "@/components/ui/Button";
import { ROUTES } from "@/constants/routes";
import { getRandomInsights } from "@/data/insights";
import { CaseStudyCard } from "./CaseStudyCard";

/**
 * Home insights preview — editorial tiles from the Insights catalog.
 */
export function CaseStudies() {
  const articles = getRandomInsights(3);

  return (
    <Section spacing="lg">
      <Container size="xl">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex max-w-3xl flex-col gap-3">
            <Eyebrow>From the team</Eyebrow>
            <Heading variant="h2" className="text-balance">
              Practical thinking from our engineers
            </Heading>
            <Text variant="muted">
              Notes on software, cloud, data, and AI — written for teams that
              need systems that stay operable after launch.
            </Text>
          </div>

          <Link href={ROUTES.insights} variant="unstyled" className="inline-flex shrink-0">
            <Button variant="outline" size="md">
              View all insights
            </Button>
          </Link>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <CaseStudyCard key={article.slug} article={article} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
