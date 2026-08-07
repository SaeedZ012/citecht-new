import type { WithChildren } from "@/types/common";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";

/**
 * Standard marketing page shell: Navbar, a growing main region, and Footer.
 * Compose page content as children — pages should not repeat this scaffolding.
 */
export function PageWrapper({ children }: WithChildren) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
