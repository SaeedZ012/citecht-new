import { Image } from "@/components/ui/Image";
import { Heading, Text } from "@/components/ui/Typography";
import { Link } from "@/components/ui/Link";
import { Icon } from "@/components/ui/Icon";
import { ROUTES } from "@/constants/routes";
import type { InsightArticle } from "@/data/insights";

export interface CaseStudyCardProps {
  article: InsightArticle;
}

/**
 * Home insight tile: image, accent category, title, and read affordance.
 */
export function CaseStudyCard({ article }: CaseStudyCardProps) {
  return (
    <Link
      href={`${ROUTES.insights}/${article.slug}`}
      variant="unstyled"
      className="group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-surface transition-colors hover:border-foreground/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
        <Image
          src={article.imageSrc}
          alt=""
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5 sm:p-6">
        <span className="text-sm font-semibold text-accent">{article.category}</span>

        <Heading
          variant="h4"
          as="h3"
          className="line-clamp-2 text-lg leading-snug transition-colors duration-300 group-hover:text-accent"
        >
          {article.title}
        </Heading>

        <Text variant="muted" className="line-clamp-2">
          {article.excerpt}
        </Text>

        <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-medium text-foreground">
          Read more
          <Icon
            size="sm"
            aria-hidden
            className="transition-transform duration-300 group-hover:translate-x-0.5"
          >
            <path d="M5 12h14M13 6l6 6-6 6" />
          </Icon>
        </span>
      </div>
    </Link>
  );
}
