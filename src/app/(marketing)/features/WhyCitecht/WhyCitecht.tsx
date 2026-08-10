import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading, Text } from "@/components/ui/Typography";
import { Link } from "@/components/ui/Link";
import { Icon } from "@/components/ui/Icon";
import { ROUTES } from "@/constants/routes";
import { OPERATIONAL_STATS, PILLARS } from "./whyCitechtData";
import { PillarCard } from "./PillarCard";

/**
 * Why CiTechT — editorial list aligned with the home Services section.
 */
export function WhyCitecht() {
  return (
    <Section spacing="lg">
      <Container size="xl">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="flex flex-col gap-5 lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
            <Eyebrow>Why CiTechT</Eyebrow>

            <Heading variant="h2" className="text-balance">
              Built to run, not just to launch
            </Heading>

            <Text variant="muted" className="max-w-sm">
              We build, improve, and stabilize the systems operations depend on
              — with the same care after handoff as before.
            </Text>

            <Link
              href={ROUTES.about}
              variant="unstyled"
              className="group mt-2 inline-flex items-center gap-2 self-start text-sm font-medium text-foreground"
            >
              About the team
              <Icon
                size="sm"
                className="transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </Icon>
            </Link>
          </div>

          <div className="lg:col-span-8">
            <div className="divide-y divide-border border-y border-border">
              {PILLARS.map((pillar, index) => (
                <PillarCard key={pillar.tag} pillar={pillar} index={index} />
              ))}
            </div>

            <dl className="mt-10 grid gap-6 sm:grid-cols-3">
              {OPERATIONAL_STATS.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <Heading variant="h3" as="span">
                      {stat.value}
                    </Heading>
                    <Text variant="muted" className="mt-1">
                      {stat.label}
                    </Text>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Container>
    </Section>
  );
}
