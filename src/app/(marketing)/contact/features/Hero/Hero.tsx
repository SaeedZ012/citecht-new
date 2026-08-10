import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading, Text } from "@/components/ui/Typography";

/**
 * Contact hero. Compact, centered header — the form below is the main
 * event on this page, so the hero stays brief and doesn't compete with it.
 */
export function Hero() {
  return (
    <Section spacing="lg" className="pb-0">
      <Container size="lg">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
          <Eyebrow variant="dash">Contact</Eyebrow>

          <Heading variant="h1" className="text-balance">
            Let&apos;s talk about your project.
          </Heading>

          <Text variant="body" className="text-muted-foreground">
            Tell us what you&apos;re building, and we&apos;ll connect you
            with the right engineers to help you plan it.
          </Text>
        </div>
      </Container>
    </Section>
  );
}
