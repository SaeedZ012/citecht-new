import type { SimpleIcon } from "simple-icons";

export interface TechLogoProps {
  icon: Pick<SimpleIcon, "title" | "hex" | "path">;
  className?: string;
}

/**
 * Official tech mark. Uses brand hex when it reads well; falls back to
 * currentColor for near-black / near-white marks so dark mode stays legible.
 */
export function TechLogo({ icon, className }: TechLogoProps) {
  const hex = icon.hex.toLowerCase();
  const useBrandColor = hex !== "000000" && hex !== "ffffff";

  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill={useBrandColor ? `#${icon.hex}` : "currentColor"}
    >
      <title>{icon.title}</title>
      <path d={icon.path} />
    </svg>
  );
}
