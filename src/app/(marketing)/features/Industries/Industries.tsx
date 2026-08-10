import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Heading, Text } from "@/components/ui/Typography";
import { IndustryStrip } from "./IndustryStrip";

/**
 * "One Team. Multiple Industries." — interactive expand strip that continues
 * the home Services chapter with premium, operable industry storytelling.
 */
export function Industries() {
  return (
    <Section spacing="lg" className="relative overflow-hidden bg-background">
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-accent/[0.06] blur-3xl" />
        <div className="absolute -right-20 bottom-10 h-64 w-64 rounded-full bg-info/[0.06] blur-3xl" />
      </div>

      <Container size="xl" className="relative">
        <div className="mx-auto mb-10 flex max-w-2xl flex-col items-center gap-4 text-center">
          <div className="flex items-center gap-2.5">
            <span className="h-5 w-0.5 shrink-0 bg-accent" aria-hidden="true" />
            <span className="text-sm font-medium text-muted-foreground">
              Industry Expertise
            </span>
          </div>

          <Heading variant="h2" className="text-balance">
            One Team.{" "}
            <span className="text-accent">Multiple Industries.</span>
          </Heading>

          <Text variant="muted">
            The same engineering discipline across FinTech, HealthTech,
            commerce, AI, enterprise, and startups — adapted to each
            industry&apos;s constraints.
          </Text>
        </div>

        <IndustryStrip />
      </Container>
    </Section>
  );
}
