import { Card } from "@/components/ui/Card";
import { Heading, Text } from "@/components/ui/Typography";
import { Icon } from "@/components/ui/Icon";
import type { Pillar } from "./whyCitechtData";

export interface PillarCardProps {
  pillar: Pillar;
}

/**
 * One of the three "build / improve & automate / stabilize" pillars.
 * Icon-led card with a tag, title, and supporting description.
 */
export function PillarCard({ pillar }: PillarCardProps) {
  return (
    <Card interactive className="flex flex-col gap-4 p-6 sm:p-7">
      <span className="flex h-11 w-11 items-center justify-center rounded-md bg-accent/10 text-accent">
        <Icon size="md">{pillar.icon}</Icon>
      </span>

      <div className="flex flex-col gap-2">
        <Text
          variant="caption"
          className="font-semibold uppercase tracking-wide text-accent"
        >
          {pillar.tag}
        </Text>
        <Heading variant="h4" as="h3">
          {pillar.title}
        </Heading>
        <Text variant="muted">{pillar.description}</Text>
      </div>
    </Card>
  );
}
