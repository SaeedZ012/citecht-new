import { Image } from "@/components/ui/Image";
import { Link } from "@/components/ui/Link";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { PageHero } from "@/components/shared/PageHero";
import { ROUTES } from "@/constants/routes";

/**
 * Services hero — light two-column shell shared with other marketing pages.
 */
export function Hero() {
  return (
    <PageHero
      eyebrow="Services"
      title={
        <>
          Software, cloud, and data — built as one{" "}
          <span className="text-accent">connected system.</span>
        </>
      }
      description="Product engineering, infrastructure, and applied AI for teams that need systems that hold up after launch."
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
          <Link href="#catalog" variant="unstyled" className="inline-flex">
            <Button variant="outline" size="lg">
              Browse services
            </Button>
          </Link>
        </>
      }
      media={
        <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-md border border-border bg-muted sm:aspect-[4/3] lg:max-w-xl">
          <Image
            src="/services/custom-web-applications.jpg"
            alt="Developer workspace with code on screen"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 48vw"
            className="object-cover"
          />
        </div>
      }
    />
  );
}
