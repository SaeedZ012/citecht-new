import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading, Text } from "@/components/ui/Typography";
import { Link } from "@/components/ui/Link";
import { Icon } from "@/components/ui/Icon";
import { ROUTES } from "@/constants/routes";
import { HOME_SERVICES } from "./servicesData";
import { ServiceCard } from "./ServiceCard";

/**
 * Home services preview — spotlight list with 3D capability visuals.
 * Intentionally distinct from the Services page photo-card catalog.
 */
export function Services() {
  return (
    <Section spacing="lg" className="bg-muted/50">
      <Container size="xl">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="flex flex-col gap-5 lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
            <Eyebrow>What we build</Eyebrow>

            <Heading variant="h2" className="text-balance">
              Services for systems that need to perform
            </Heading>

            <Text variant="muted" className="max-w-sm">
              Start with the capability closest to your current problem — then
              connect it into one operable system.
            </Text>

            <Link
              href={ROUTES.services}
              variant="unstyled"
              className="group mt-2 inline-flex items-center gap-2 self-start text-sm font-medium text-foreground"
            >
              View all services
              <Icon
                size="sm"
                className="transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </Icon>
            </Link>
          </div>

          <div className="flex flex-col gap-3 lg:col-span-8">
            {HOME_SERVICES.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
