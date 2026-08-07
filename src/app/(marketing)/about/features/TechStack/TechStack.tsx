import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Heading, Text } from "@/components/ui/Typography";
import { TECH_ROW_ONE, TECH_ROW_TWO } from "./techStackData";
import { TechRow } from "./TechRow";
import { TechStackBackdrop } from "./TechStackBackdrop";

/**
 * Technologies We Master — a light, full-bleed band under Industries. Two
 * marquee rows loop in opposite directions (left / right) for a sense of
 * constant, effortless motion across a broad, current stack.
 */
export function TechStack() {
  return (
    <Section spacing="lg" className="relative isolate overflow-hidden bg-background">
      <TechStackBackdrop />

      <Container size="xl" className="relative">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-accent">
            <span className="h-px w-6 bg-accent" aria-hidden="true" />
            OUR TECH STACK
          </span>

          <Heading variant="h2" className="text-balance">
            Technologies We Master
          </Heading>

          <Text variant="muted">
            Dependable, well-supported tools — not the newest thing this
            week — chosen for what they let us build and maintain.
          </Text>
        </div>
      </Container>

      <div className="relative mt-12 flex flex-col gap-4">
        <TechRow items={TECH_ROW_ONE} direction="left" duration={38} />
        <TechRow items={TECH_ROW_TWO} direction="right" duration={44} />
      </div>
    </Section>
  );
}
