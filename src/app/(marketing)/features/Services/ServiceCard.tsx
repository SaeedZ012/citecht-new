import { Image } from "@/components/ui/Image";
import { Link } from "@/components/ui/Link";
import { Icon } from "@/components/ui/Icon";
import { Heading, Text } from "@/components/ui/Typography";
import { cn } from "@/utils/cn";
import type { HomeServiceItem } from "./servicesData";

export interface ServiceCardProps {
  service: HomeServiceItem;
  index: number;
}

/**
 * Home service spotlight row — editorial list item with a floating 3D visual
 * well. Deliberately not a photo card (those live on the Services catalog).
 */
export function ServiceCard({ service, index }: ServiceCardProps) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <Link
      href={service.href}
      variant="unstyled"
      className={cn(
        "group relative grid items-center gap-5 rounded-lg border border-transparent bg-background/70 p-4 transition-colors sm:grid-cols-[7.5rem_1fr_auto] sm:gap-6 sm:p-5",
        "hover:border-border hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-muted"
      )}
    >
      <div className="relative mx-auto flex h-28 w-28 items-center justify-center sm:mx-0 sm:h-24 sm:w-24">
        <span
          className="absolute inset-0 rounded-full bg-accent/[0.07]"
          aria-hidden="true"
        />
        <span
          className="absolute inset-2 rounded-full border border-dashed border-accent/20"
          aria-hidden="true"
        />
        <div className="animate-visual-bob relative h-[72%] w-[72%]">
          <Image
            src={service.visualSrc}
            alt=""
            fill
            sizes="96px"
            unoptimized
            className="object-contain transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>

      <div className="flex min-w-0 flex-col gap-1.5 text-center sm:text-left">
        <span className="font-mono text-[11px] tracking-[0.2em] text-accent">
          {number}
        </span>
        <Heading
          variant="h4"
          as="h3"
          className="transition-colors group-hover:text-accent"
        >
          {service.title}
        </Heading>
        <Text variant="muted" className="max-w-md">
          {service.description}
        </Text>
      </div>

      <span
        className="mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-accent-foreground sm:mx-0"
        aria-hidden="true"
      >
        <Icon
          size="sm"
          className="transition-transform duration-300 group-hover:translate-x-0.5"
        >
          <path d="M5 12h14M13 6l6 6-6 6" />
        </Icon>
      </span>
    </Link>
  );
}
