import { Image } from "@/components/ui/Image";
import { Card, CardBody } from "@/components/ui/Card";
import { Heading, Text } from "@/components/ui/Typography";
import { Link } from "@/components/ui/Link";
import { ROUTES } from "@/constants/routes";
import type { InsightArticle } from "@/data/insights";
import { formatInsightDate } from "@/data/insights";

export interface ArticleCardProps {
  article: InsightArticle;
}

/**
 * A single article preview. The whole card is one link so the entire
 * surface is clickable. Used by the Insights page grid.
 */
export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Link
      href={`${ROUTES.insights}/${article.slug}`}
      variant="unstyled"
      className="group block h-full"
    >
      <Card
        interactive
        className="flex h-full flex-col overflow-hidden rounded-lg shadow-none hover:shadow-none hover:border-foreground/20"
      >
        <div className="relative aspect-[16/10] w-full overflow-hidden">
          <Image
            src={article.imageSrc}
            alt=""
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </div>
        <CardBody className="flex flex-1 flex-col gap-3 p-5">
          <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
            <span className="rounded-full bg-accent/10 px-2.5 py-1 font-semibold tracking-wide text-accent">
              {article.category}
            </span>
            <span aria-hidden="true">&middot;</span>
            <span>{article.readTime}</span>
          </div>

          <Heading variant="h4" as="h3" className="text-balance leading-snug">
            {article.title}
          </Heading>

          <Text variant="muted" className="line-clamp-3">
            {article.excerpt}
          </Text>

          <Text variant="caption" className="mt-auto pt-2 text-muted-foreground/80">
            {formatInsightDate(article.date)}
          </Text>
        </CardBody>
      </Card>
    </Link>
  );
}
