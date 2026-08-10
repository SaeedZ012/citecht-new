"use client";

import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading, Text } from "@/components/ui/Typography";
import { WORKFLOW_STEPS } from "./processSteps";
import { useWorkflowAutoplay } from "./useWorkflowAutoplay";
import { WorkflowTimeline } from "./WorkflowTimeline";
import { WorkflowIconStage } from "./WorkflowIconStage";
import { WorkflowContent } from "./WorkflowContent";

/**
 * Interactive workflow showcase — five phases, auto-plays, pauses on hover.
 */
export function Process() {
  const { activeIndex, goTo, setIsPaused } = useWorkflowAutoplay(
    WORKFLOW_STEPS.length
  );
  const activeStep = WORKFLOW_STEPS[activeIndex];

  return (
    <Section spacing="lg">
      <Container size="xl">
        <div
          className="flex flex-col gap-12"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
            <Eyebrow>How we work</Eyebrow>

            <Heading variant="h2" className="text-balance">
              From first conversation to a system you can run
            </Heading>

            <Text variant="muted">
              Five phases — from discovery through launch and support.
            </Text>
          </div>

          <WorkflowTimeline
            steps={WORKFLOW_STEPS}
            activeIndex={activeIndex}
            onSelect={goTo}
          />

          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
            <WorkflowIconStage step={activeStep} />
            <WorkflowContent step={activeStep} />
          </div>
        </div>
      </Container>
    </Section>
  );
}
