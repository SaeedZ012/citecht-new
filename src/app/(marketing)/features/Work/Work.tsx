import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading, Text } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Link } from "@/components/ui/Link";
import { ROUTES } from "@/constants/routes";
import { WORK_ITEMS } from "./workData";
import { WorkCard } from "./WorkCard";

/**
 * Featured work — sample project archetypes across systems CiTechT builds.
 */
export function Work() {
  return (
    <Section spacing="lg" className="bg-muted/50">
      <Container size="xl">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-5 text-center">
          <Eyebrow>Selected work</Eyebrow>

          <Heading variant="h2" className="text-balance">
            Featured work
          </Heading>

          <Text variant="body" className="text-muted-foreground">
            A sample of the platforms, dashboards, and AI-assisted tools
            we&apos;ve shipped for teams that needed systems built right the
            first time.
          </Text>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {WORK_ITEMS.map((item) => (
            <WorkCard key={item.id} item={item} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link href={ROUTES.contact} variant="unstyled" className="group inline-flex">
            <Button variant="accent" size="lg" className="gap-2">
              Start a project
              <Icon
                size="sm"
                aria-hidden
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </Icon>
            </Button>
          </Link>
        </div>
      </Container>
    </Section>
  );
}
