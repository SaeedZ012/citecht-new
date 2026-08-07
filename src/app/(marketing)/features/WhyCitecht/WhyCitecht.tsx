import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Heading, Text } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Link } from "@/components/ui/Link";
import { ROUTES } from "@/constants/routes";
import { DOMAINS, PILLARS } from "./whyCitechtData";
import { PillarCard } from "./PillarCard";
import { OutcomeBand } from "./OutcomeBand";

/**
 * "Why Teams Work With CiTechT" — sits under the home services grid.
 *
 * Arrangement (deliberately distinct from a generic feature grid):
 *   1. Centered header with a domain-capability chip row underneath it.
 *   2. Three pillars mapped directly to "build, improve, automate,
 *      stabilize" from the section copy.
 *   3. An asymmetric outcome band that makes "dependable and easy to
 *      operate after launch" concrete, backed by operational stats.
 */
export function WhyCitecht() {
  return (
    <Section spacing="lg">
      <Container size="xl">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-5 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-xs font-semibold tracking-[0.15em] text-accent">
            <span
              className="h-1.5 w-1.5 rounded-full bg-accent"
              aria-hidden="true"
            />
            WHY CITECHT
          </span>

          <Heading variant="h2" className="text-balance">
            Why Teams Work With <span className="text-accent">CiTechT</span>
          </Heading>

          <Text variant="body" className="text-muted-foreground">
            We help teams build, improve, automate, and stabilize the
            software, cloud, data, AI, and infrastructure systems their
            operations depend on — with a focus on systems that are
            dependable and easy to operate after launch.
          </Text>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
          {DOMAINS.map((domain) => (
            <span
              key={domain.label}
              className="rounded-full border border-border bg-muted px-4 py-1.5 text-sm font-medium text-foreground"
            >
              {domain.label}
            </span>
          ))}
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {PILLARS.map((pillar) => (
            <PillarCard key={pillar.tag} pillar={pillar} />
          ))}
        </div>

        <div className="mt-6">
          <OutcomeBand />
        </div>

        <div className="mt-10 flex justify-center">
          <Link href={ROUTES.about} variant="unstyled" className="group inline-flex">
            <Button variant="accent" size="lg" className="gap-3">
              Learn More About Us
              <Icon
                size="sm"
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
