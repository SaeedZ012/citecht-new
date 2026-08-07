import type { ReactNode } from "react";
import { Section, type SectionSpacing } from "@/components/ui/Section";
import { Container, type ContainerSize } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Typography";
import { Text } from "@/components/ui/Typography";
import { cn } from "@/utils/cn";

export interface SectionWrapperProps {
  children: ReactNode;
  /** Optional section eyebrow/title. */
  title?: string;
  /** Optional supporting description shown under the title. */
  description?: string;
  spacing?: SectionSpacing;
  containerSize?: ContainerSize;
  /** Center the heading block. */
  centered?: boolean;
  id?: string;
  className?: string;
}

/**
 * Composes {@link Section} + {@link Container} with an optional heading block.
 * Use inside page feature sections to avoid repeating layout scaffolding.
 */
export function SectionWrapper({
  children,
  title,
  description,
  spacing = "md",
  containerSize = "xl",
  centered = false,
  id,
  className,
}: SectionWrapperProps) {
  return (
    <Section spacing={spacing} id={id} className={className}>
      <Container size={containerSize}>
        {title || description ? (
          <div className={cn("mb-10 flex flex-col gap-3", centered && "text-center")}>
            {title ? <Heading variant="h2">{title}</Heading> : null}
            {description ? (
              <Text
                variant="muted"
                className={cn("max-w-2xl", centered && "mx-auto")}
              >
                {description}
              </Text>
            ) : null}
          </div>
        ) : null}
        {children}
      </Container>
    </Section>
  );
}
