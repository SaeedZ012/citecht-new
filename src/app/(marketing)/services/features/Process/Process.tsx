"use client";

import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Heading, Text } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Link } from "@/components/ui/Link";
import { cn } from "@/utils/cn";
import { ROUTES } from "@/constants/routes";
import { WORKFLOW_STEPS } from "./processSteps";
import { PROCESS_HAIRLINE, PROCESS_TEXT_MUTED } from "./processTokens";
import { useWorkflowAutoplay } from "./useWorkflowAutoplay";
import { WorkflowTimeline } from "./WorkflowTimeline";
import { WorkflowIconStage } from "./WorkflowIconStage";
import { WorkflowContent } from "./WorkflowContent";
import { ProcessHighlights } from "./ProcessHighlights";

/**
 * Interactive, auto-playing workflow showcase on a light surface. Steps
 * through five engagement phases on its own, is click-jumpable, and pauses
 * while the pointer is over it. Shared by the Services and About pages.
 */
export function Process() {
  const { activeIndex, goTo, setIsPaused } = useWorkflowAutoplay(WORKFLOW_STEPS.length);
  const activeStep = WORKFLOW_STEPS[activeIndex];

  return (
    <Section spacing="lg" className="bg-background">
      <Container size="xl">
        <div
          className="relative isolate overflow-hidden rounded-lg border border-border bg-background px-6 py-14 sm:px-10 sm:py-16 lg:px-14 lg:py-20"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
            <span
              className={cn(
                "inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold tracking-[0.15em] text-accent",
                PROCESS_HAIRLINE
              )}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
              ENGINEERING WORKFLOW
            </span>

            <Heading variant="h2" className="text-balance">
              From Complexity to a <span className="text-accent">Production-Ready</span> System
            </Heading>

            <Text variant="body" className={cn("text-balance", PROCESS_TEXT_MUTED)}>
              Five connected phases — playing out automatically below — take
              every engagement from first conversation to long-term ownership.
            </Text>
          </div>

          <div className="relative mt-14 sm:mt-16">
            <WorkflowTimeline steps={WORKFLOW_STEPS} activeIndex={activeIndex} onSelect={goTo} />
          </div>

          <div className="relative mt-14 grid gap-10 sm:mt-16 lg:grid-cols-2 lg:items-center lg:gap-16">
            <WorkflowIconStage step={activeStep} />
            <WorkflowContent step={activeStep} />
          </div>

          <ProcessHighlights />

          <div className="relative mt-14 flex justify-center sm:mt-16">
            <Link href={ROUTES.contact} variant="unstyled" className="group inline-flex">
              <Button variant="accent" size="lg" className="gap-3">
                Start Your Project
                <Icon size="sm" className="transition-transform duration-300 group-hover:translate-x-0.5">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </Icon>
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
