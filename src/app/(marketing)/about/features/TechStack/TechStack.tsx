import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading, Text } from "@/components/ui/Typography";
import { TECH_ROW_ONE, TECH_ROW_TWO } from "./techStackData";
import { TechRow } from "./TechRow";
import { TechStackBackdrop } from "./TechStackBackdrop";

/**
 * Tech stack marquee — official logos, opposite-direction rows.
 */
export function TechStack() {
  return (
    <Section spacing="lg" className="relative isolate overflow-hidden">
      <TechStackBackdrop />

      <Container size="xl" className="relative">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
          <Eyebrow>Tech stack</Eyebrow>

          <Heading variant="h2" className="text-balance">
            Technologies we work with
          </Heading>

          <Text variant="muted">
            Dependable tools chosen for what they let us build and maintain —
            not whatever shipped this week.
          </Text>
        </div>
      </Container>

      <div className="relative mt-12 flex flex-col gap-3">
        <TechRow items={TECH_ROW_ONE} direction="left" duration={40} />
        <TechRow items={TECH_ROW_TWO} direction="right" duration={46} />
      </div>
    </Section>
  );
}
