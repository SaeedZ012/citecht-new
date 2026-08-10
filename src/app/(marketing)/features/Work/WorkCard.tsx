import { Image } from "@/components/ui/Image";
import { Link } from "@/components/ui/Link";
import { Heading, Text } from "@/components/ui/Typography";
import type { WorkItem } from "./workData";

export interface WorkCardProps {
  item: WorkItem;
}

/**
 * Featured work card: image, category, title, description, and stack.
 */
export function WorkCard({ item }: WorkCardProps) {
  return (
    <Link
      href={item.href}
      variant="unstyled"
      className="group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-surface transition-colors hover:border-foreground/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-muted"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
        <Image
          src={item.imageSrc}
          alt=""
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        />
        <span className="absolute bottom-3 left-3 rounded-md bg-background/95 px-3 py-1 text-xs font-semibold text-foreground">
          {item.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-2 p-5">
        <Heading
          variant="h4"
          as="h3"
          className="transition-colors duration-300 group-hover:text-accent"
        >
          {item.title}
        </Heading>
        <Text variant="muted" className="flex-1">
          {item.description}
        </Text>

        <Text variant="muted" className="mt-2 text-xs">
          {item.tags.join(" · ")}
        </Text>
      </div>
    </Link>
  );
}
