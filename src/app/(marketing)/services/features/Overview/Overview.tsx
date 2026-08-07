import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Heading, Text } from "@/components/ui/Typography";
import { Icon } from "@/components/ui/Icon";
import { Image } from "@/components/ui/Image";

const DELIVERABLES = [
  {
    title: "Production-grade software",
    description: "Built to scale, tested, and maintained long after launch.",
  },
  {
    title: "Cloud-native infrastructure",
    description: "Environments engineered for reliability and change.",
  },
  {
    title: "Applied AI & automation",
    description:
      "Intelligence and automation embedded where they actually help.",
  },
  {
    title: "Connected systems",
    description:
      "APIs and integrations that keep your stack working as one.",
  },
];

/**
 * Services overview — the "what we deliver" chapter between the hero and the
 * service catalog. Delivery philosophy in text, paired with a supporting
 * image composition.
 */
export function Overview() {
  return (
    <Section spacing="lg">
      <Container size="xl">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-10">
          <div className="flex flex-col gap-6 lg:col-span-6">
            <div className="flex items-center gap-3">
              <span
                className="h-5 w-0.5 shrink-0 bg-accent"
                aria-hidden="true"
              />
              <span className="text-sm font-medium text-muted-foreground">
                What We Deliver
              </span>
            </div>

            <Heading variant="h2" className="text-balance">
              Outcomes, not just output.
            </Heading>

            <Text variant="body" className="max-w-lg text-muted-foreground">
              Every engagement starts with the same question: what does this
              system need to do for your business? From there we design,
              build, and ship — then stay close enough to keep it running
              well.
            </Text>

            <ul className="mt-2 flex flex-col gap-5">
              {DELIVERABLES.map((item) => (
                <li key={item.title} className="flex items-start gap-3">
                  <span
                    className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent"
                    aria-hidden="true"
                  >
                    <Icon size="sm">
                      <path d="M20 6 9 17l-5-5" />
                    </Icon>
                  </span>
                  <div className="flex flex-col gap-0.5">
                    <Text variant="label">{item.title}</Text>
                    <Text variant="muted">{item.description}</Text>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative lg:col-span-6">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md border border-border">
              <Image
                src="/services/custom-web-applications.jpg"
                alt="Engineers collaborating on a software product"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-6 h-32 w-32 overflow-hidden rounded-md border-4 border-background shadow-md sm:-left-10 sm:h-40 sm:w-40">
              <Image
                src="/services/cloud-infrastructure.jpg"
                alt="Cloud infrastructure hardware"
                fill
                sizes="160px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
