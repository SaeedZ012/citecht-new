import type { ReactNode } from "react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading, Text } from "@/components/ui/Typography";
import { cn } from "@/utils/cn";

export interface PageHeroProps {
  eyebrow: string;
  /** Display heading — may include accent spans. */
  title: ReactNode;
  description: string;
  /** Primary / secondary CTAs. */
  actions?: ReactNode;
  /** Right-column visual (image, journey, featured card, etc.). */
  media: ReactNode;
  /** Optional row above the two-column grid (e.g. back link). */
  top?: ReactNode;
  /**
   * Compact height for pages where the content below is the main focus
   * (e.g. Contact). Default matches the home full-viewport hero.
   */
  compact?: boolean;
  className?: string;
}

/**
 * Shared marketing page hero — same light two-column shell as the home hero.
 * Pages supply copy, actions, and a right-side media slot.
 */
export function PageHero({
  eyebrow,
  title,
  description,
  actions,
  media,
  top,
  compact = false,
  className,
}: PageHeroProps) {
  return (
    <Section
      spacing="none"
      className={cn(
        "overflow-hidden border-b border-border",
        !compact && "min-h-[calc(100dvh-5rem)]",
        className
      )}
    >
      <Container
        size="xl"
        className={cn(
          "flex items-center",
          compact ? "py-14 sm:py-16 lg:py-20" : "min-h-[calc(100dvh-5rem)]"
        )}
      >
        <div className="w-full py-10 lg:py-12">
          {top ? <div className="mb-8">{top}</div> : null}

          <div className="grid w-full items-center gap-10 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col gap-5 lg:max-w-xl">
              <Eyebrow>{eyebrow}</Eyebrow>

              <Heading
                variant="display"
                className="text-balance text-3xl leading-[1.12] sm:text-4xl lg:text-[2.65rem] lg:leading-[1.1]"
              >
                {title}
              </Heading>

              <Text
                variant="body"
                className="max-w-md text-base leading-relaxed text-muted-foreground"
              >
                {description}
              </Text>

              {actions ? (
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  {actions}
                </div>
              ) : null}
            </div>

            <div className="w-full lg:flex lg:justify-end">{media}</div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
