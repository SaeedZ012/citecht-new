import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading, Text } from "@/components/ui/Typography";
import { Image } from "@/components/ui/Image";

const DELIVERABLES = [
  {
    title: "Production software",
    description: "Built to scale and stay maintainable after launch.",
  },
  {
    title: "Cloud infrastructure",
    description: "Reliable environments that can change without drama.",
  },
  {
    title: "AI & integrations",
    description: "Automation and APIs where they earn their place.",
  },
];

/**
 * Services overview — what we deliver, before the catalog.
 */
export function Overview() {
  return (
    <Section spacing="lg">
      <Container size="xl">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-14">
          <div className="flex flex-col gap-5 lg:col-span-6">
            <Eyebrow>What we deliver</Eyebrow>

            <Heading variant="h2" className="text-balance">
              Outcomes, not just output
            </Heading>

            <Text variant="muted" className="max-w-md">
              We start with what the system needs to do for the business — then
              design, build, and keep it operable.
            </Text>

            <ul className="mt-2 flex flex-col gap-4">
              {DELIVERABLES.map((item) => (
                <li key={item.title} className="flex flex-col gap-0.5 border-l border-border pl-4">
                  <Text variant="label">{item.title}</Text>
                  <Text variant="muted">{item.description}</Text>
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
          </div>
        </div>
      </Container>
    </Section>
  );
}
