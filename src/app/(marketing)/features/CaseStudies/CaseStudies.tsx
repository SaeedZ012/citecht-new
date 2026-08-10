import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Heading, Text } from "@/components/ui/Typography";
import { getRandomInsights } from "@/data/insights";
import { CaseStudyCard } from "./CaseStudyCard";

/**
 * "Featured case studies" — left-aligned split-color heading and insight
 * tiles that mirror a clean editorial card pattern (image well, accent
 * label, clamped title, Read more).
 */
export function CaseStudies() {
  const articles = getRandomInsights(4);

  return (
    <Section spacing="lg">
      <Container size="xl">
        <div className="flex max-w-3xl flex-col gap-3">
          <Heading variant="h2" className="text-balance">
            Featured{" "}
            <span className="text-accent">case studies</span>
          </Heading>

          <Text variant="muted">
            A closer look at how we think through the problems our clients
            bring us, straight from our engineering notes.
          </Text>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {articles.map((article) => (
            <CaseStudyCard key={article.slug} article={article} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
