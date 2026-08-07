import type { ReactNode } from "react";
import { PageWrapper } from "@/components/shared/PageWrapper";

/**
 * Marketing shell layout. Wraps all public pages with the Navbar/Footer chrome
 * so individual pages only compose their own content.
 */
export default function MarketingLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <PageWrapper>{children}</PageWrapper>;
}
