import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading, Text } from "@/components/ui/Typography";
import { IndustryStrip } from "./IndustryStrip";

/**
 * "One Team. Multiple Industries." — interactive expand strip that continues
 * the home Services chapter with operable industry storytelling.
 */
export function Industries() {
  return (
    <Section spacing="lg" className="bg-background">
      <Container size="xl">
        <div className="mx-auto mb-10 flex max-w-2xl flex-col items-center gap-4 text-center">
          <Eyebrow>Industry expertise</Eyebrow>

          <Heading variant="h2" className="text-balance">
            One team. Multiple industries.
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
