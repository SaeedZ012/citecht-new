import type { ReactNode } from "react";
import { cn } from "@/utils/cn";
import type { IndustryId } from "./industriesData";

export interface IndustryMockupProps {
  id: IndustryId;
  className?: string;
}

function Shell({
  title,
  children,
  className,
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex h-full min-h-0 flex-col overflow-hidden rounded-md border border-border bg-surface",
        className
      )}
    >
      <div className="flex shrink-0 items-center border-b border-border bg-muted/50 px-3 py-2">
        <span className="truncate text-[10px] font-medium tracking-wide text-muted-foreground">
          {title}
        </span>
      </div>
      <div className="min-h-0 flex-1 overflow-hidden p-3">{children}</div>
    </div>
  );
}

function FinTechMockup() {
  return (
    <Shell title="ledger.citecht.app">
      <div className="flex h-full flex-col gap-2.5">
        <div className="rounded-md border border-border bg-muted/50 p-2.5">
          <p className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
            Available balance
          </p>
          <p className="mt-1 text-base font-semibold text-foreground">$248,920.14</p>
          <p className="mt-0.5 text-[11px] text-success">+12.4% this month</p>
        </div>
        <div className="flex h-12 items-end gap-1.5 px-0.5">
          {[40, 55, 48, 70, 62, 85, 78].map((height, index) => (
            <span
              key={index}
              className="flex-1 rounded-sm bg-accent/80"
              style={{ height: `${height * 0.35}px` }}
              aria-hidden="true"
            />
          ))}
        </div>
        <div className="flex flex-col gap-1.5">
          {["Stripe payout", "Vendor ACH", "Card settlement"].map((row) => (
            <div
              key={row}
              className="flex items-center justify-between rounded-md border border-border px-2.5 py-1.5"
            >
              <span className="text-[11px] text-foreground">{row}</span>
              <span className="text-[11px] font-medium text-muted-foreground">Cleared</span>
            </div>
          ))}
        </div>
      </div>
    </Shell>
  );
}

function HealthTechMockup() {
  return (
    <Shell title="care.ops">
      <div className="grid grid-cols-2 gap-2">
        {[
          { label: "Heart rate", value: "72 bpm" },
          { label: "SpO₂", value: "98%" },
          { label: "Next visit", value: "Thu 09:30" },
          { label: "Care team", value: "3 online" },
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-md border border-border bg-muted/40 p-2.5"
          >
            <p className="text-[10px] text-muted-foreground">{item.label}</p>
            <p className="mt-1 text-sm font-semibold text-foreground">{item.value}</p>
          </div>
        ))}
      </div>
      <div className="mt-2 rounded-md border border-border px-2.5 py-2">
        <p className="text-[10px] font-medium uppercase tracking-wider text-accent">
          Care queue
        </p>
        <p className="mt-1 text-[11px] text-foreground">
          Follow-up labs · assigned · due today
        </p>
      </div>
    </Shell>
  );
}

function EcommerceMockup() {
  return (
    <Shell title="storefront">
      <div className="flex h-full flex-col gap-2">
        <div className="grid min-h-0 flex-1 grid-cols-2 gap-2">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="overflow-hidden rounded-md border border-border"
            >
              <div className="h-12 bg-muted sm:h-14" />
              <div className="space-y-1 p-2">
                <div className="h-1.5 w-3/4 rounded-full bg-border" />
                <div className="h-1.5 w-1/2 rounded-full bg-accent/40" />
              </div>
            </div>
          ))}
        </div>
        <div className="flex shrink-0 items-center justify-between rounded-md bg-accent px-3 py-2 text-[11px] font-medium text-accent-foreground">
          <span>Checkout ready</span>
          <span>2 items</span>
        </div>
      </div>
    </Shell>
  );
}

function AiSaasMockup() {
  return (
    <Shell title="assistant / workspace">
      <div className="flex flex-col gap-2">
        <div className="rounded-md border border-border bg-muted/50 px-2.5 py-2 text-[11px] text-muted-foreground">
          Summarize open tickets by urgency…
        </div>
        <div className="rounded-md border border-accent/30 bg-accent/5 px-2.5 py-2 text-[11px] text-foreground">
          14 tickets need review. 3 are blocked on billing. Draft replies ready.
        </div>
        <div className="grid grid-cols-3 gap-1.5">
          {["Precision", "Latency", "Cost"].map((label) => (
            <div
              key={label}
              className="rounded-md border border-border px-2 py-1.5 text-center"
            >
              <p className="text-[9px] text-muted-foreground">{label}</p>
              <p className="text-[11px] font-semibold text-foreground">
                {label === "Precision" ? "94%" : label === "Latency" ? "1.2s" : "$0.04"}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Shell>
  );
}

function EnterpriseMockup() {
  return (
    <Shell title="ops.control">
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          {["Orgs", "Roles", "Integrations"].map((tab, index) => (
            <span
              key={tab}
              className={cn(
                "rounded-md px-2 py-1 text-[10px] font-medium",
                index === 0
                  ? "bg-accent text-accent-foreground"
                  : "bg-muted text-muted-foreground"
              )}
            >
              {tab}
            </span>
          ))}
        </div>
        {["North America", "EMEA", "APAC"].map((region) => (
          <div
            key={region}
            className="flex items-center justify-between rounded-md border border-border px-2.5 py-2"
          >
            <span className="text-[11px] font-medium text-foreground">{region}</span>
            <span className="h-1.5 w-16 overflow-hidden rounded-full bg-muted">
              <span className="block h-full w-2/3 rounded-full bg-info" />
            </span>
          </div>
        ))}
      </div>
    </Shell>
  );
}

function StartupsMockup() {
  return (
    <Shell title="growth.board">
      <div className="flex flex-col gap-3">
        <div className="grid grid-cols-3 gap-1.5">
          {[
            { label: "MRR", value: "$42k" },
            { label: "Activation", value: "38%" },
            { label: "NPS", value: "61" },
          ].map((kpi) => (
            <div
              key={kpi.label}
              className="rounded-md border border-border bg-muted/40 p-2 text-center"
            >
              <p className="text-[9px] text-muted-foreground">{kpi.label}</p>
              <p className="text-sm font-semibold text-foreground">{kpi.value}</p>
            </div>
          ))}
        </div>
        <div className="relative h-16 overflow-hidden rounded-md border border-border bg-muted/30">
          <svg
            viewBox="0 0 120 40"
            className="absolute inset-0 h-full w-full text-accent"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polyline
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              points="0,32 20,28 40,30 60,18 80,20 100,8 120,10"
            />
          </svg>
        </div>
        <p className="text-[11px] text-muted-foreground">
          Weekly active · trending up
        </p>
      </div>
    </Shell>
  );
}

/**
 * Compact product UI mockups for the industries strip — CSS-only scenes
 * built from semantic tokens (no stock photos, no gradients).
 */
export function IndustryMockup({ id, className }: IndustryMockupProps) {
  const mockup = {
    fintech: <FinTechMockup />,
    healthtech: <HealthTechMockup />,
    ecommerce: <EcommerceMockup />,
    "ai-saas": <AiSaasMockup />,
    enterprise: <EnterpriseMockup />,
    startups: <StartupsMockup />,
  }[id];

  return <div className={cn("h-full w-full min-h-0", className)}>{mockup}</div>;
}
