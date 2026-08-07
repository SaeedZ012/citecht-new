import type { WithChildren } from "@/types/common";

import { ThemeProvider } from "@/providers/ThemeProvider";

/**
 * Composes all app-wide client providers. Keep this thin: this is a static
 * marketing site, so the only global concern is theme (dark mode).
 */
export function AppProviders({ children }: WithChildren) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
