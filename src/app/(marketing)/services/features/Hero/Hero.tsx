import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Heading, Text } from "@/components/ui/Typography";
import { Link } from "@/components/ui/Link";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { ROUTES } from "@/constants/routes";
import { siteConfig } from "@/config/site";
import { cn } from "@/utils/cn";
import { HeroVisual } from "./HeroVisual";
import { HeroGridBackdrop } from "./HeroGridBackdrop";
import { HERO_DARK_SURFACE, HERO_TEXT_MUTED, HERO_TEXT_STRONG } from "./heroTokens";

/**
 * Services hero. An editorial, technical "capabilities" statement — same
 * typography, spacing, and blue accent as the home hero, on a deep dark
 * surface with an asymmetric layout and a connected-systems visual. This is
 * the same brand's next chapter, not a separate visual language.
 */
export function Hero() {
  return (
    <Section
      spacing="none"
      className={cn(
        "relative isolate overflow-hidden min-h-[calc(100dvh-5rem)]",
        HERO_DARK_SURFACE
      )}
    >
      <HeroGridBackdrop />

      <span
        className={cn(
          "pointer-events-none absolute left-5 top-1/2 hidden -translate-y-1/2 -rotate-90 whitespace-nowrap font-mono text-[10px] tracking-[0.35em] lg:block",
          HERO_TEXT_MUTED
        )}
        aria-hidden="true"
      >
        {siteConfig.name.toUpperCase()} — CAPABILITIES
      </span>

      <Container
        size="xl"
        className="relative flex min-h-[calc(100dvh-5rem)] items-center py-20 lg:py-16"
      >
        <div className="grid w-full gap-16 lg:grid-cols-12 lg:items-center lg:gap-6">
          <div className="flex flex-col gap-7 lg:col-span-6 lg:col-start-1">
            <div className="animate-fade-rise flex items-center gap-3">
              <span className="h-5 w-0.5 shrink-0 bg-accent" aria-hidden="true" />
              <span className={cn("font-mono text-xs tracking-[0.25em]", HERO_TEXT_MUTED)}>
                (01) CAPABILITIES
              </span>
            </div>

            <Heading
              variant="display"
              className={cn(
                "animate-fade-rise text-balance text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl lg:leading-[1.05]",
                HERO_TEXT_STRONG
              )}
              style={{ animationDelay: "90ms" }}
            >
              Software, cloud, and data —<br />
              engineered into a single,{" "}
              <span className="text-accent">connected system.</span>
            </Heading>

            <Text
              variant="body"
              className={cn(
                "animate-fade-rise max-w-md text-base leading-relaxed",
                HERO_TEXT_MUTED
              )}
              style={{ animationDelay: "180ms" }}
            >
              From product engineering to cloud infrastructure and applied
              AI, we design and build the technical foundations ambitious
              companies run on.
            </Text>

            <div className="animate-fade-rise" style={{ animationDelay: "270ms" }}>
              <Link href={ROUTES.contact} variant="unstyled" className="group inline-flex">
                <Button variant="accent" size="lg" className="gap-3">
                  Start a Project
                  <Icon
                    size="sm"
                    className="transition-transform duration-300 group-hover:translate-x-0.5"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </Icon>
                </Button>
              </Link>
            </div>
          </div>

          <div
            className="animate-fade-rise lg:col-span-5 lg:col-start-8"
            style={{ animationDelay: "220ms" }}
          >
            <HeroVisual />
          </div>
        </div>
      </Container>
    </Section>
  );
}
