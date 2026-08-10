import { cn } from "@/utils/cn";
import type { TechItem } from "./techStackData";
import { TechLogo } from "./TechLogo";

export interface TechRowProps {
  items: TechItem[];
  direction: "left" | "right";
  duration: number;
}

function TechBadge({ item, hidden }: { item: TechItem; hidden?: boolean }) {
  return (
    <span
      aria-hidden={hidden}
      className="mr-3 flex shrink-0 items-center gap-2.5 rounded-md border border-border bg-background px-4 py-2.5 text-sm font-medium text-foreground"
    >
      <TechLogo icon={item.icon} className="h-5 w-5 shrink-0 text-foreground" />
      {item.name}
    </span>
  );
}

/**
 * One infinitely-looping marquee row. Items are rendered twice back-to-back
 * so `translateX(-50%)` lands cleanly on the seam.
 */
export function TechRow({ items, direction, duration }: TechRowProps) {
  const loopItems = [...items, ...items];

  return (
    <div className="marquee tech-marquee">
      <div
        className={cn(
          "marquee__track",
          direction === "right" && "marquee__track--reverse"
        )}
        style={{ animationDuration: `${duration}s` }}
      >
        {loopItems.map((item, index) => (
          <TechBadge
            key={`${item.name}-${index}`}
            item={item}
            hidden={index >= items.length}
          />
        ))}
      </div>
    </div>
  );
}
