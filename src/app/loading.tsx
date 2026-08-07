import { Loader } from "@/components/ui/Loader";

/**
 * Global route loading fallback. Streamed while a route segment renders.
 */
export default function Loading() {
  return <Loader fullScreen message="Loading\u2026" />;
}
