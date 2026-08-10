import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { Heading, Text } from "@/components/ui/Typography";
import { Icon } from "@/components/ui/Icon";
import type { ServiceDetail } from "@/data/services";

export interface FAQProps {
  service: ServiceDetail;
}

/**
 * Service FAQ — native disclosure elements for accessible expand/collapse
 * without extra client state.
 */
export function FAQ({ service }: FAQProps) {
  return (
    <SectionWrapper
      spacing="lg"
      title="Frequently asked questions"
      description={`Common questions about our ${service.title.toLowerCase()} engagements.`}
      className="bg-muted/40"
    >
      <div className="mx-auto flex max-w-3xl flex-col divide-y divide-border border-y border-border">
        {service.faqs.map((faq) => (
          <details key={faq.question} className="group py-5">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-left marker:content-none [&::-webkit-details-marker]:hidden">
              <Heading variant="h4" as="h3" className="text-base sm:text-lg">
                {faq.question}
              </Heading>
              <span
                className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-border text-muted-foreground transition-transform duration-300 group-open:rotate-45"
                aria-hidden="true"
              >
                <Icon size="sm">
                  <path d="M12 5v14M5 12h14" />
                </Icon>
              </span>
            </summary>
            <Text variant="muted" className="mt-3 max-w-2xl leading-relaxed">
              {faq.answer}
            </Text>
          </details>
        ))}
      </div>
    </SectionWrapper>
  );
}
