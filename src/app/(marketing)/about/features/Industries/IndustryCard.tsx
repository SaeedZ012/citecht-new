import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { Heading, Text } from "@/components/ui/Typography";
import { cn } from "@/utils/cn";
import type { Industry, IndustryTone } from "./industriesData";

const TONE_STYLES: Record<IndustryTone, string> = {
  accent: "bg-accent/10 text-accent",
  info: "bg-info/10 text-info",
  success: "bg-success/10 text-success",
  warning: "bg-warning/10 text-warning",
  danger: "bg-danger/10 text-danger",
};

export interface IndustryCardProps {
  industry: Industry;
}

/**
 * Industry card: a tone-tinted icon badge (drawn from the semantic status
 * tokens, not arbitrary colors) above a title and description.
 */
export function IndustryCard({ industry }: IndustryCardProps) {
  return (
    <Card interactive className="flex flex-col gap-4 rounded-md p-6">
      <span
        className={cn(
          "flex h-12 w-12 items-center justify-center rounded-lg",
          TONE_STYLES[industry.tone]
        )}
        aria-hidden="true"
      >
        <Icon size="md">{industry.icon}</Icon>
      </span>

      <div className="flex flex-col gap-1.5">
        <Heading variant="h4" as="h3">
          {industry.title}
        </Heading>
        <Text variant="muted">{industry.description}</Text>
      </div>
    </Card>
  );
}
