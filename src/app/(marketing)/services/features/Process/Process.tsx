import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Heading, Text } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Link } from "@/components/ui/Link";
import { ROUTES } from "@/constants/routes";
import { ProcessStepRow } from "./ProcessStepRow";
import { PROCESS_STEPS } from "./processSteps";

/**
 * Delivery methodology — a vertical, zig-zag timeline that walks a visitor
 * through how an engagement moves from discovery to long-term support.
 */
export function Process() {
  return (
    <Section spacing="lg" className="bg-muted/40">
      <Container size="lg">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-1.5 text-xs font-semibold tracking-[0.15em] text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            OUR METHODOLOGY
          </span>

          <Heading variant="h2" className="text-balance">
            Our Proven Process
          </Heading>

          <Text variant="body" className="text-muted-foreground text-balance">
            From the first conversation to ongoing support — a clear,
            structured approach that ships reliable software every time.
          </Text>
        </div>

        <div className="relative mx-auto mt-16 max-w-4xl sm:mt-20">
          <div
            className="absolute left-1/2 top-2 bottom-2 hidden w-px -translate-x-1/2 bg-border sm:block"
            aria-hidden="true"
          />

          <div className="flex flex-col gap-12 sm:gap-16">
            {PROCESS_STEPS.map((step, index) => (
              <ProcessStepRow
                key={step.step}
                step={step}
                isRight={index % 2 === 1}
              />
            ))}
          </div>
        </div>

        <div className="mt-16 flex justify-center sm:mt-20">
          <Link href={ROUTES.contact} variant="unstyled" className="group inline-flex">
            <Button variant="accent" size="lg" className="gap-3">
              Start Your Project
              <Icon
                size="sm"
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </Icon>
            </Button>
          </Link>
        </div>
      </Container>
    </Section>
  );
}
