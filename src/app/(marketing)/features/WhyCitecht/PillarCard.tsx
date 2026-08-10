import { Heading, Text } from "@/components/ui/Typography";
import type { Pillar } from "./whyCitechtData";

export interface PillarCardProps {
  pillar: Pillar;
  index: number;
}

/**
 * Simple numbered pillar row — no icon cards.
 */
export function PillarCard({ pillar, index }: PillarCardProps) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <div className="grid gap-3 py-6 sm:grid-cols-[3.5rem_minmax(0,1fr)] sm:gap-6">
      <span className="font-mono text-xs tracking-[0.16em] text-accent">
        {number}
      </span>

      <div className="flex min-w-0 flex-col gap-1.5">
        <Text
          variant="caption"
          className="font-medium tracking-[0.12em] text-muted-foreground uppercase"
        >
          {pillar.tag}
        </Text>
        <Heading variant="h4" as="h3">
          {pillar.title}
        </Heading>
        <Text variant="muted" className="max-w-lg">
          {pillar.description}
        </Text>
      </div>
    </div>
  );
}
