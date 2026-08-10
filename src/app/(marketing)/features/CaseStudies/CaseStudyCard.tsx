import { Image } from "@/components/ui/Image";
import { Heading } from "@/components/ui/Typography";
import { Link } from "@/components/ui/Link";
import { Icon } from "@/components/ui/Icon";
import { ROUTES } from "@/constants/routes";
import type { InsightArticle } from "@/data/insights";

export interface CaseStudyCardProps {
  article: InsightArticle;
}

/**
 * Home case-study card modeled on a clean insight-tile pattern: soft image
 * well on top, accent category, clamped title, and a "Read more" affordance.
 * Dedicated to the home section so Insights grid cards stay unchanged.
 */
export function CaseStudyCard({ article }: CaseStudyCardProps) {
  return (
    <Link
      href={`${ROUTES.insights}/${article.slug}`}
      variant="unstyled"
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-shadow hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
        <Image
          src={article.imageSrc}
          alt=""
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5 sm:p-6">
        <span className="text-sm font-semibold text-accent">Case Study</span>

        <Heading
          variant="h4"
          as="h3"
          className="line-clamp-2 text-lg leading-snug"
        >
          {article.title}
        </Heading>

        <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-medium text-foreground">
          Read more
          <Icon
            size="sm"
            aria-hidden
            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          >
            <path d="M7 17 17 7" />
            <path d="M7 7h10v10" />
          </Icon>
        </span>
      </div>
    </Link>
  );
}
