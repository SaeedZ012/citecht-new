import { Card } from "@/components/ui/Card";
import { Heading, Text } from "@/components/ui/Typography";
import { Icon } from "@/components/ui/Icon";
import { OPERATIONAL_STATS, OUTCOME_POINTS } from "./whyCitechtData";

/**
 * Closing band: spells out what "dependable and easy to operate" means in
 * practice, paired with the operational stats that back it up.
 */
export function OutcomeBand() {
  return (
    <div className="grid gap-6 lg:grid-cols-[1.6fr_1fr]">
      <Card className="flex flex-col gap-6 p-6 sm:p-8">
        <div className="flex flex-col gap-2">
          <Heading variant="h3" as="h3" className="text-balance">
            Dependable after launch — not just at launch.
          </Heading>
          <Text variant="muted" className="max-w-xl">
            Every system we hand off comes with what it needs to keep running
            smoothly, so your team never has to reverse-engineer it later.
          </Text>
        </div>

        <ul className="grid gap-5 sm:grid-cols-3">
          {OUTCOME_POINTS.map((point) => (
            <li key={point.title} className="flex flex-col gap-1.5">
              <span
                className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/10 text-accent"
                aria-hidden="true"
              >
                <Icon size="sm">
                  <path d="M20 6 9 17l-5-5" />
                </Icon>
              </span>
              <Text variant="label">{point.title}</Text>
              <Text variant="muted">{point.description}</Text>
            </li>
          ))}
        </ul>
      </Card>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
        {OPERATIONAL_STATS.map((stat) => (
          <Card
            key={stat.label}
            className="flex flex-1 flex-col justify-center gap-1.5 p-6"
          >
            <Heading variant="h2" as="span" className="text-accent">
              {stat.value}
            </Heading>
            <Text variant="muted">{stat.label}</Text>
          </Card>
        ))}
      </div>
    </div>
  );
}
