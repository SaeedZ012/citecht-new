"use client";

import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Link } from "@/components/ui/Link";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/shared/Logo";
import { MAIN_NAV } from "@/constants/navigation";
import { ROUTES } from "@/constants/routes";
import { useDisclosure } from "@/hooks/useDisclosure";
import { cn } from "@/utils/cn";

/** Nav link styles — black when inactive, accent blue + underline when active. */
function navLinkClass(isActive: boolean, className?: string) {
  return cn(
    "rounded-md px-3 py-2 text-sm font-medium transition-colors",
    isActive
      ? "text-accent underline underline-offset-4"
      : "text-foreground hover:text-foreground/80",
    className
  );
}

const SERVICE_MENU = [
  {
    label: "Web Development",
    href: ROUTES.services,
    description: "Fast, maintainable websites and web apps.",
  },
  {
    label: "UI/UX Design",
    href: ROUTES.services,
    description: "Design systems and accessible interfaces.",
  },
  {
    label: "Consulting",
    href: ROUTES.services,
    description: "Architecture, performance, and scalability.",
  },
  {
    label: "Maintenance",
    href: ROUTES.services,
    description: "Monitoring, updates, and improvements.",
  },
];

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className={cn("h-4 w-4", className)}
    >
      <path
        d="M6 8l4 4 4-4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Top-level site navigation: a wordmark on the left and inline links
 * (with a "Services" mega-menu) aligned to the right. Collapses into a
 * toggled menu on small screens.
 */
export function Navbar() {
  const pathname = usePathname();
  const menu = useDisclosure();

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background">
      <Container>
        <div className="flex h-20 items-center justify-between gap-4">
          <Logo size="xl" />

          <nav
            aria-label="Primary"
            className="hidden items-center gap-1 lg:flex"
          >
            {MAIN_NAV.map((item) => {
              const isActive = pathname === item.href;

              if (item.label === "Services") {
                return (
                  <div key={item.href} className="group relative">
                    <Link
                      href={item.href}
                      variant="unstyled"
                      aria-haspopup="true"
                      aria-current={isActive ? "page" : undefined}
                      className={navLinkClass(isActive, "inline-flex items-center gap-1")}
                    >
                      {item.label}
                      <ChevronDown className="transition-transform group-hover:rotate-180" />
                    </Link>

                    <div className="pointer-events-none invisible absolute left-1/2 top-full z-50 w-80 -translate-x-1/2 pt-3 opacity-0 transition group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:visible group-focus-within:opacity-100">
                      <div className="rounded-lg border border-border bg-surface p-2 shadow-md">
                        {SERVICE_MENU.map((sub) => (
                          <Link
                            key={sub.label}
                            href={sub.href}
                            variant="unstyled"
                            className="flex flex-col gap-0.5 rounded-md px-3 py-2 transition-colors hover:bg-muted"
                          >
                            <span className="text-sm font-medium text-foreground">
                              {sub.label}
                            </span>
                            <span className="text-xs text-muted-foreground">
                              {sub.description}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  variant="unstyled"
                  aria-current={isActive ? "page" : undefined}
                  className={navLinkClass(isActive)}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            aria-expanded={menu.isOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
            onClick={menu.toggle}
          >
            <span aria-hidden="true">{menu.isOpen ? "\u2715" : "\u2630"}</span>
          </Button>
        </div>

        {menu.isOpen ? (
          <nav
            id="mobile-menu"
            aria-label="Mobile"
            className="flex flex-col gap-1 border-t border-border py-3 lg:hidden"
          >
            {MAIN_NAV.map((item) => {
              const isActive = pathname === item.href;

              return (
              <Link
                key={item.href}
                href={item.href}
                variant="unstyled"
                onClick={menu.close}
                aria-current={isActive ? "page" : undefined}
                className={navLinkClass(isActive, "hover:bg-muted")}
              >
                {item.label}
              </Link>
              );
            })}

            <div className="mt-1 flex flex-col gap-1 border-t border-border pt-2">
              <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Services
              </span>
              {SERVICE_MENU.map((sub) => (
                <Link
                  key={sub.label}
                  href={sub.href}
                  variant="unstyled"
                  onClick={menu.close}
                  className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted"
                >
                  {sub.label}
                </Link>
              ))}
            </div>
          </nav>
        ) : null}
      </Container>
    </header>
  );
}
