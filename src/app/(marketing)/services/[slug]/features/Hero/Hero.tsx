import { Link } from "@/components/ui/Link";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { PageHero } from "@/components/shared/PageHero";
import { ROUTES, servicePath } from "@/constants/routes";
import type { ServiceDetail } from "@/data/services";
import { getServiceVisual } from "../serviceVisuals";
import { HeroVisual } from "./HeroVisual";

export interface HeroProps {
  service: ServiceDetail;
}

/**
 * Service detail hero — shared page shell with the capability visual.
 */
export function Hero({ service }: HeroProps) {
  const visualSrc = getServiceVisual(service.slug);

  return (
    <PageHero
      eyebrow={service.eyebrow}
      title={service.headline}
      description={service.description}
      top={
        <Link
          href={ROUTES.services}
          variant="unstyled"
          className="group inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <Icon
            size="sm"
            aria-hidden
            className="transition-transform duration-300 group-hover:-translate-x-0.5"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </Icon>
          Back to Services
        </Link>
      }
      actions={
        <>
          <Link href={ROUTES.contact} variant="unstyled" className="inline-flex">
            <Button variant="accent" size="lg" className="gap-2">
              Start a project
              <Icon size="sm">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </Icon>
            </Button>
          </Link>
          <Link
            href={`${servicePath(service.slug)}#overview`}
            variant="unstyled"
            className="inline-flex"
          >
            <Button variant="outline" size="lg">
              Explore the service
            </Button>
          </Link>
        </>
      }
      media={
        <div className="w-full max-w-xl lg:ml-auto">
          <HeroVisual visualSrc={visualSrc} title={service.title} />
        </div>
      }
    />
  );
}
