import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Heading, Text } from "@/components/ui/Typography";
import { Link } from "@/components/ui/Link";
import { Icon } from "@/components/ui/Icon";
import { ROUTES } from "@/constants/routes";
import { WORK_ITEMS } from "./workData";
import { WorkCard } from "./WorkCard";

/**
 * "Featured Work" — sample project archetypes across the systems CiTechT
 * builds, sitting between the trust-building sections and the closing CTA.
 */
export function Work() {
  return (
    <Section spacing="lg">
      <Container size="xl">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-5 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-xs font-semibold tracking-[0.15em] text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            PORTFOLIO
          </span>

          <Heading variant="h2" className="text-balance">
            Featured Work
          </Heading>

          <Text variant="body" className="text-muted-foreground">
            A sample of the platforms, dashboards, and AI-assisted tools
            we&apos;ve shipped for teams that needed systems built right the
            first time.
          </Text>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {WORK_ITEMS.map((item) => (
            <WorkCard key={item.id} item={item} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href={ROUTES.contact}
            variant="unstyled"
            className="group inline-flex h-12 items-center gap-2 rounded-full bg-accent px-8 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90"
          >
            Start a Project
            <Icon
              size="sm"
              aria-hidden
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </Icon>
          </Link>
        </div>
      </Container>
    </Section>
  );
}
