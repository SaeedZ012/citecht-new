import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Heading, Text } from "@/components/ui/Typography";
import { Link } from "@/components/ui/Link";
import { Image } from "@/components/ui/Image";
import { Icon } from "@/components/ui/Icon";
import { ROUTES } from "@/constants/routes";
import { getFeaturedInsight, formatInsightDate } from "@/data/insights";
import { HeroBackdrop } from "./HeroBackdrop";

/**
 * Insights hero. Rather than a generic graphic, the right side spotlights
 * the featured article itself — the hero and the content it's pointing to
 * are the same thing, so nothing here is decorative filler.
 */
export function Hero() {
  const featured = getFeaturedInsight();

  return (
    <Section spacing="none" className="relative isolate overflow-hidden">
      <HeroBackdrop />

      <Container size="xl" className="relative py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-10">
          <div className="flex flex-col gap-5">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-accent">
              <span className="h-px w-6 bg-accent" aria-hidden="true" />
              INSIGHTS
            </span>

            <Heading variant="display" className="text-balance text-4xl leading-[1.1] sm:text-5xl">
              Field notes from the engineers building your systems.
            </Heading>

            <Text variant="body" className="max-w-lg text-base leading-relaxed text-muted-foreground">
              Practical thinking on software, cloud, data, and AI — how we
              make decisions, what we&apos;ve learned from real projects, and
              what we&apos;d tell a team about to make the same choices.
            </Text>
          </div>

          <Link href={`${ROUTES.insights}/${featured.slug}`} variant="unstyled" className="group block">
            <article className="overflow-hidden rounded-md border border-border bg-surface transition-shadow group-hover:shadow-md">
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <Image
                  src={featured.imageSrc}
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col gap-3 p-6 sm:p-7">
                <div className="flex items-center gap-3 text-xs font-medium text-muted-foreground">
                  <span className="rounded-full bg-accent/10 px-2.5 py-1 font-semibold tracking-wide text-accent">
                    {featured.category}
                  </span>
                  <span aria-hidden="true">&middot;</span>
                  <span>{formatInsightDate(featured.date)}</span>
                  <span aria-hidden="true">&middot;</span>
                  <span>{featured.readTime}</span>
                </div>

                <Heading variant="h3" as="h2" className="text-balance">
                  {featured.title}
                </Heading>

                <Text variant="muted">{featured.excerpt}</Text>

                <span className="mt-1 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
                  Read article
                  <Icon
                    size="sm"
                    aria-hidden
                    className="transition-transform duration-300 group-hover:translate-x-0.5"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </Icon>
                </span>
              </div>
            </article>
          </Link>
        </div>
      </Container>
    </Section>
  );
}
