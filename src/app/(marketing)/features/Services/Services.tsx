import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Heading, Text } from "@/components/ui/Typography";
import { Link } from "@/components/ui/Link";
import { Icon } from "@/components/ui/Icon";
import { ROUTES } from "@/constants/routes";
import { HOME_SERVICES } from "./servicesData";
import { ServiceCard } from "./ServiceCard";

/**
 * Home services preview. Left-aligned heading/description sit above the
 * card grid, with the catalog CTA centered underneath.
 */
export function Services() {
  return (
    <Section spacing="lg">
      <Container size="xl">
        <div className="mb-10 flex flex-col gap-3 sm:max-w-xl">
          <Heading variant="h2" className="text-balance">
            Services for systems that need to perform
          </Heading>
          <Text variant="muted">
            We help teams design, build, and improve the software, cloud,
            AI, data, and infrastructure systems their operations depend
            on. Start with the area closest to your current problem.
          </Text>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {HOME_SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href={ROUTES.services}
            variant="unstyled"
            className="inline-flex h-12 items-center gap-2 rounded-full bg-accent px-8 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90"
          >
            Show More Services
            <Icon size="sm" aria-hidden>
              <path d="M5 12h14M13 6l6 6-6 6" />
            </Icon>
          </Link>
        </div>
      </Container>
    </Section>
  );
}
