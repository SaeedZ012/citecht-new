import { Image } from "@/components/ui/Image";
import { Link } from "@/components/ui/Link";
import { Card, CardBody } from "@/components/ui/Card";
import { Heading, Text } from "@/components/ui/Typography";
import type { ServiceGridItem } from "./servicesGridData";

export interface ServiceGridCardProps {
  service: ServiceGridItem;
}

/**
 * Service catalog card: image on top, title + description below.
 * The whole card links to the dedicated service detail page.
 */
export function ServiceGridCard({ service }: ServiceGridCardProps) {
  return (
    <Link href={service.href} variant="unstyled" className="group block h-full">
      <Card interactive className="h-full overflow-hidden rounded-md">
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <Image
            src={service.imageSrc}
            alt=""
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <CardBody className="flex flex-col gap-2 p-5">
          <Heading variant="h4" as="h3">
            {service.title}
          </Heading>
          <Text variant="muted">{service.description}</Text>
        </CardBody>
      </Card>
    </Link>
  );
}
