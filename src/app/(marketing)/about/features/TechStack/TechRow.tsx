import { Icon } from "@/components/ui/Icon";
import { cn } from "@/utils/cn";
import { CATEGORY_ICONS, type TechItem } from "./techStackData";

export interface TechRowProps {
  items: TechItem[];
  direction: "left" | "right";
  duration: number;
}

function TechBadge({ item, hidden }: { item: TechItem; hidden?: boolean }) {
  return (
    <span
      aria-hidden={hidden}
      className="mr-4 flex shrink-0 items-center gap-2.5 rounded-md border border-border bg-surface px-5 py-3 text-sm font-medium text-foreground shadow-sm"
    >
      <Icon size="sm" className="text-accent">
        {CATEGORY_ICONS[item.category]}
      </Icon>
      {item.name}
    </span>
  );
}

/**
 * One infinitely-looping marquee row. The item list is rendered twice, back
 * to back, as a single flat run — once accessible, once `aria-hidden` for
 * assistive tech — with per-badge trailing margin instead of a flex `gap`
 * on the track. That keeps the two halves exactly identical in width, so
 * the `translateX(-50%)` loop lands precisely on the seam with no jump.
 */
export function TechRow({ items, direction, duration }: TechRowProps) {
  const loopItems = [...items, ...items];

  return (
    <div className="marquee">
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
