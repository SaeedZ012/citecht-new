import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { Card, CardHeader, CardBody } from "@/components/ui/Card";
import { Heading, Text } from "@/components/ui/Typography";

const VALUES = [
  {
    title: "Craft",
    description: "We sweat the details, from pixels to performance.",
  },
  {
    title: "Clarity",
    description: "We communicate simply and set clear expectations.",
  },
  {
    title: "Integrity",
    description: "We do the right thing, even when no one is watching.",
  },
];

/**
 * About values grid.
 */
export function Values() {
  return (
    <SectionWrapper
      title="Our values"
      description="The principles that guide how we work."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {VALUES.map((value) => (
          <Card key={value.title}>
            <CardHeader>
              <Heading variant="h4" as="h3">
                {value.title}
              </Heading>
            </CardHeader>
            <CardBody>
              <Text variant="muted">{value.description}</Text>
            </CardBody>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
