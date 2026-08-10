import { Link } from "@/components/ui/Link";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { PageHero } from "@/components/shared/PageHero";
import { ROUTES } from "@/constants/routes";
import { HeroJourney } from "./HeroJourney";

/**
 * About hero — shared page shell with the team journey on the right.
 */
export function Hero() {
  return (
    <PageHero
      eyebrow="About"
      title={
        <>
          A small senior team for systems that{" "}
          <span className="text-accent">can&apos;t afford to fail.</span>
        </>
      }
      description="We build software, cloud, data, and AI systems — and stay accountable after launch, not only at handoff."
      actions={
        <>
          <Link href={ROUTES.contact} variant="unstyled" className="inline-flex">
            <Button variant="accent" size="lg" className="gap-2">
              Get in touch
              <Icon size="sm">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </Icon>
            </Button>
          </Link>
          <Link href={ROUTES.services} variant="unstyled" className="inline-flex">
            <Button variant="outline" size="lg">
              Our services
            </Button>
          </Link>
        </>
      }
      media={<HeroJourney />}
    />
  );
}
