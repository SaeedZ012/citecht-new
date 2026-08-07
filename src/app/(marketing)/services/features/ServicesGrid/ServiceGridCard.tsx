import { Image } from "@/components/ui/Image";
import { Card, CardBody } from "@/components/ui/Card";
import { Heading, Text } from "@/components/ui/Typography";
import type { ServiceGridItem } from "./servicesGridData";

export interface ServiceGridCardProps {
  service: ServiceGridItem;
}

/**
 * Service catalog card: image on top, title + description below.
 * Uses a minor (not heavy) corner radius, distinct from the home page's
 * fully-rounded overlay cards.
 */
export function ServiceGridCard({ service }: ServiceGridCardProps) {
  return (
    <Card interactive className="group overflow-hidden rounded-md">
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
  );
}
