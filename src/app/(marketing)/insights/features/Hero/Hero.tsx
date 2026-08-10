import { Heading, Text } from "@/components/ui/Typography";
import { Link } from "@/components/ui/Link";
import { Image } from "@/components/ui/Image";
import { Icon } from "@/components/ui/Icon";
import { PageHero } from "@/components/shared/PageHero";
import { ROUTES } from "@/constants/routes";
import { getFeaturedInsight, formatInsightDate } from "@/data/insights";

/**
 * Insights hero — shared shell with the featured article as the visual.
 */
export function Hero() {
  const featured = getFeaturedInsight();

  return (
    <PageHero
      eyebrow="Insights"
      title={
        <>
          Field notes from the engineers{" "}
          <span className="text-accent">building your systems.</span>
        </>
      }
      description="Practical writing on software, cloud, data, and AI — decisions, trade-offs, and lessons from real projects."
      media={
        <Link
          href={`${ROUTES.insights}/${featured.slug}`}
          variant="unstyled"
          className="group block w-full max-w-xl lg:ml-auto"
        >
          <article className="overflow-hidden rounded-md border border-border bg-surface transition-colors group-hover:border-foreground/20">
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
              <Image
                src={featured.imageSrc}
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 48vw"
                priority
                className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
            <div className="flex flex-col gap-3 p-5 sm:p-6">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
                <span className="font-medium text-accent">{featured.category}</span>
                <span aria-hidden="true">·</span>
                <span>{formatInsightDate(featured.date)}</span>
                <span aria-hidden="true">·</span>
                <span>{featured.readTime}</span>
              </div>

              <Heading variant="h3" as="h2" className="text-balance text-xl sm:text-2xl">
                {featured.title}
              </Heading>

              <Text variant="muted" className="line-clamp-2">
                {featured.excerpt}
              </Text>

              <span className="mt-1 inline-flex items-center gap-1.5 text-sm font-medium text-foreground">
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
      }
    />
  );
}
