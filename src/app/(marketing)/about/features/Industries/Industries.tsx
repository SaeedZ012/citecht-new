import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Heading, Text } from "@/components/ui/Typography";
import { Link } from "@/components/ui/Link";
import { Icon } from "@/components/ui/Icon";
import { ROUTES } from "@/constants/routes";
import { INDUSTRIES } from "./industriesData";
import { IndustryCard } from "./IndustryCard";

/**
 * Industries We Serve — sits under the Story section. A centered header,
 * a tone-tinted icon grid, and a closing prompt for industries not listed.
 */
export function Industries() {
  return (
    <Section spacing="lg" className="bg-muted/40">
      <Container size="xl">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-accent">
            <span className="h-px w-6 bg-accent" aria-hidden="true" />
            INDUSTRY EXPERTISE
          </span>

          <Heading variant="h2" className="text-balance">
            Industries We Serve
          </Heading>

          <Text variant="body" className="text-muted-foreground">
            Our engineering experience spans a wide range of industries,
            each with its own systems, compliance needs, and pace of change.
          </Text>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {INDUSTRIES.map((industry) => (
            <IndustryCard key={industry.title} industry={industry} />
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-5 text-center">
          <Text variant="muted">
            Don&apos;t see your industry? We&apos;ve delivered systems across
            dozens of verticals — chances are we&apos;ve seen something
            close to yours.
          </Text>

          <Link
            href={ROUTES.contact}
            variant="unstyled"
            className="group inline-flex h-12 items-center gap-2 rounded-full bg-accent px-8 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90"
          >
            Discuss Your Industry
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
