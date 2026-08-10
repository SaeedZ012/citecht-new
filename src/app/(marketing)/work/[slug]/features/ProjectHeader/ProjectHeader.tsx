import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Heading, Text } from "@/components/ui/Typography";
import { Link } from "@/components/ui/Link";
import { Icon } from "@/components/ui/Icon";
import { ROUTES } from "@/constants/routes";
import type { WorkProject } from "@/data/work";

export interface ProjectHeaderProps {
  project: WorkProject;
}

/**
 * Compact portfolio header — title and category only; the gallery is the focus.
 */
export function ProjectHeader({ project }: ProjectHeaderProps) {
  return (
    <Section spacing="lg" className="pb-0">
      <Container size="xl">
        <Link
          href={ROUTES.home}
          variant="unstyled"
          className="group inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <Icon
            size="sm"
            aria-hidden
            className="transition-transform duration-300 group-hover:-translate-x-0.5"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </Icon>
          Back to Home
        </Link>

        <div className="mt-8 flex flex-col gap-3 sm:max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            {project.category}
          </span>
          <Heading variant="h1" className="text-balance">
            {project.title}
          </Heading>
          <Text variant="muted">{project.description}</Text>
        </div>
      </Container>
    </Section>
  );
}
