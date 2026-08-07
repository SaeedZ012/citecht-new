import { Image } from "@/components/ui/Image";
import { Link } from "@/components/ui/Link";
import { Icon } from "@/components/ui/Icon";
import { Heading, Text } from "@/components/ui/Typography";
import type { HomeServiceItem } from "./servicesData";

export interface ServiceCardProps {
  service: HomeServiceItem;
}

/**
 * Light, contained service card: image on top, tag + title + description +
 * a "Read more" link below. The whole card links to the service route.
 */
export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Link
      href={service.href}
      variant="unstyled"
      className="group flex flex-col overflow-hidden rounded-md border border-border bg-surface transition-shadow hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
        <Image
          src={service.imageSrc}
          alt=""
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col gap-2 p-5">
        <span className="text-xs font-semibold uppercase tracking-wide text-accent">
          Service
        </span>
        <Heading variant="h4" as="h3">
          {service.title}
        </Heading>
        <Text variant="muted" className="flex-1">
          {service.description}
        </Text>
        <span className="mt-1 inline-flex items-center gap-1 text-sm font-medium text-foreground">
          Read more
          <Icon
            size="sm"
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
