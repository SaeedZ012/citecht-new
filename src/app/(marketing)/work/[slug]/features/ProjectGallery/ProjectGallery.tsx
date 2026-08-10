import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Image } from "@/components/ui/Image";
import type { WorkProject } from "@/data/work";

export interface ProjectGalleryProps {
  project: WorkProject;
}

/**
 * Portfolio gallery — project pictures only, masonry-style responsive grid.
 */
export function ProjectGallery({ project }: ProjectGalleryProps) {
  const [hero, ...rest] = project.gallery;

  return (
    <Section spacing="lg">
      <Container size="xl">
        <div className="flex flex-col gap-4">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-md border border-border bg-muted">
            <Image
              src={hero}
              alt={`${project.title} — main view`}
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover"
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {rest.map((src, index) => (
              <div
                key={`${src}-${index}`}
                className="relative aspect-[4/3] w-full overflow-hidden rounded-md border border-border bg-muted"
              >
                <Image
                  src={src}
                  alt={`${project.title} — view ${index + 2}`}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
