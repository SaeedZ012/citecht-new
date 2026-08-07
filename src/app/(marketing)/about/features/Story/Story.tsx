import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Heading, Text } from "@/components/ui/Typography";
import { Icon } from "@/components/ui/Icon";
import { Image } from "@/components/ui/Image";
import { STORY_POINTS } from "./storyData";

/**
 * About story — the "who we are" chapter between the hero and the values
 * grid. An image composition of the team paired with the founding story and
 * how that translates into how engagements run today.
 */
export function Story() {
  return (
    <Section spacing="lg">
      <Container size="xl">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-10">
          <div className="relative order-2 lg:order-1 lg:col-span-6">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md border border-border">
              <Image
                src="/about/team-collaboration.jpg"
                alt="The CiTechT team working together around a shared table"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-6 h-32 w-32 overflow-hidden rounded-md border-4 border-background shadow-md sm:-right-10 sm:h-40 sm:w-40">
              <Image
                src="/about/pair-programming.jpg"
                alt="Two engineers reviewing code together"
                fill
                sizes="160px"
                className="object-cover"
              />
            </div>
          </div>

          <div className="order-1 flex flex-col gap-6 lg:order-2 lg:col-span-6">
            <div className="flex items-center gap-3">
              <span className="h-5 w-0.5 shrink-0 bg-accent" aria-hidden="true" />
              <span className="text-sm font-medium text-muted-foreground">
                Who We Are
              </span>
            </div>

            <Heading variant="h2" className="text-balance">
              Built by engineers who&apos;ve felt the pain of bad handoffs.
            </Heading>

            <Text variant="body" className="max-w-lg text-muted-foreground">
              CiTechT started with a pattern we kept running into: a vendor
              ships a project, then disappears the moment something breaks.
              We built the team we wished we&apos;d had — small, senior, and
              still on the line long after launch day.
            </Text>

            <Text variant="body" className="max-w-lg text-muted-foreground">
              That shows up in how we work today: fewer people between you
              and the code, and a bias toward systems that are boring to
              operate — in the best possible way.
            </Text>

            <ul className="mt-2 flex flex-col gap-5">
              {STORY_POINTS.map((point) => (
                <li key={point.title} className="flex items-start gap-3">
                  <span
                    className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent"
                    aria-hidden="true"
                  >
                    <Icon size="sm">
                      <path d="M20 6 9 17l-5-5" />
                    </Icon>
                  </span>
                  <div className="flex flex-col gap-0.5">
                    <Text variant="label">{point.title}</Text>
                    <Text variant="muted">{point.description}</Text>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}
