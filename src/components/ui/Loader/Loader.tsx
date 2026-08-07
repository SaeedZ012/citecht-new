import { cn } from "@/utils/cn";
import { Spinner } from "@/components/ui/Spinner";
import { Text } from "@/components/ui/Typography";

export interface LoaderProps {
  /** Optional message displayed beneath the spinner. */
  message?: string;
  /** Fill the parent height and center the loader. */
  fullScreen?: boolean;
  className?: string;
}

/**
 * Centered loading state built on top of {@link Spinner}. Use for route-level
 * `loading.tsx` files or async section fallbacks.
 */
export function Loader({ message, fullScreen = false, className }: LoaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-3 text-muted-foreground",
        fullScreen ? "min-h-screen" : "py-12",
        className
      )}
    >
      <Spinner size="lg" />
      {message ? <Text variant="muted">{message}</Text> : null}
    </div>
  );
}
