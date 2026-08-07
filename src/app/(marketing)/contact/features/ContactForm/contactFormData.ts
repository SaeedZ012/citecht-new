import type { SelectOption } from "@/components/ui/Select";

export const PROJECT_TYPE_OPTIONS: SelectOption[] = [
  { value: "custom-web", label: "Custom Web Application" },
  { value: "mobile", label: "Mobile App" },
  { value: "cloud", label: "Cloud Infrastructure" },
  { value: "ai", label: "AI Integration" },
  { value: "saas", label: "SaaS Platform" },
  { value: "integration", label: "System / API Integration" },
  { value: "not-sure", label: "Not sure yet" },
];

export const BUDGET_OPTIONS: SelectOption[] = [
  { value: "under-10k", label: "Under $10k" },
  { value: "10k-25k", label: "$10k – $25k" },
  { value: "25k-50k", label: "$25k – $50k" },
  { value: "50k-100k", label: "$50k – $100k" },
  { value: "100k-plus", label: "$100k+" },
  { value: "not-sure", label: "Not sure yet" },
];

export const TIMELINE_OPTIONS: SelectOption[] = [
  { value: "asap", label: "As soon as possible" },
  { value: "1-month", label: "Within 1 month" },
  { value: "1-3-months", label: "1–3 months" },
  { value: "3-plus-months", label: "3+ months" },
  { value: "exploring", label: "Just exploring" },
];
