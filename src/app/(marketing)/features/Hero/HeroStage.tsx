import { HERO_VERTICAL_LINE_COUNT } from "./heroBackdrop";

/** Icon layer centered over the stage panels. */
export const HERO_OBJECT_LAYER_CLASS =
  "absolute inset-x-[12%] top-[6%] z-[2] flex h-[70%] items-center justify-center px-2 sm:inset-x-[10%]";

/**
 * Static hero stage: uniform thin vertical lines and twin periwinkle panels.
 */
export function HeroStage() {
  return (
    <>
      <div
        className="absolute left-[4%] top-[4%] z-0 flex h-[58%] items-stretch gap-[2px] sm:left-[5%] sm:gap-[3px]"
        aria-hidden="true"
      >
        {Array.from({ length: HERO_VERTICAL_LINE_COUNT }).map((_, index) => (
          <span
            key={index}
            className="block h-full shrink-0 bg-info/30"
            style={{ width: "1.5px" }}
          />
        ))}
      </div>
      <div
        className="absolute left-[12%] top-[6%] z-[1] h-[70%] w-[40%] bg-info/12 sm:left-[14%]"
        aria-hidden="true"
      />
      <div
        className="absolute right-[6%] top-[6%] z-[1] h-[70%] w-[44%] rounded-tr-[2.75rem] bg-info/15 sm:right-[8%] sm:rounded-tr-[3.25rem]"
        aria-hidden="true"
      />
    </>
  );
}
