"use client";

import { useMemo, useState } from "react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Heading, Text } from "@/components/ui/Typography";
import { cn } from "@/utils/cn";
import { INSIGHTS, INSIGHT_CATEGORIES } from "@/data/insights";
import { ArticleCard } from "@/components/shared/ArticleCard";

const ALL_LABEL = "All";

/**
 * Latest Articles — a filterable grid. Filtering happens entirely on the
 * client against the static article list already sent with the page (no
 * fetch, no backend), matching this site's lightweight, static-first rules.
 */
export function ArticlesGrid() {
  const [activeCategory, setActiveCategory] = useState<string>(ALL_LABEL);

  const filtered = useMemo(
    () =>
      activeCategory === ALL_LABEL
        ? INSIGHTS
        : INSIGHTS.filter((article) => article.category === activeCategory),
    [activeCategory]
  );

  return (
    <Section spacing="lg">
      <Container size="xl">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-col gap-2">
            <Heading variant="h2" className="text-balance">
              Latest Articles
            </Heading>
            <Text variant="muted">
              Browse by topic, or scan everything we&apos;ve published.
            </Text>
          </div>

          <div
            className="flex flex-wrap gap-2"
            role="group"
            aria-label="Filter articles by category"
          >
            {[ALL_LABEL, ...INSIGHT_CATEGORIES].map((category) => {
              const isActive = category === activeCategory;
              return (
                <button
                  key={category}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveCategory(category)}
                  className={cn(
                    "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
                    isActive
                      ? "border-accent bg-accent text-accent-foreground"
                      : "border-border bg-transparent text-foreground hover:bg-muted"
                  )}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>

        {filtered.length === 0 ? (
          <Text variant="muted" className="mt-10 text-center">
            No articles in this category yet.
          </Text>
        ) : null}
      </Container>
    </Section>
  );
}
