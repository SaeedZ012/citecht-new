/**
 * Static service catalog for the marketing site. Detail pages are generated
 * from this data at build time — no CMS or backend.
 */

export interface ServicePoint {
  title: string;
  description: string;
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceDetail {
  slug: string;
  title: string;
  shortDescription: string;
  imageSrc: string;
  /** Hero eyebrow label. */
  eyebrow: string;
  headline: string;
  description: string;
  overviewTitle: string;
  overviewBody: string;
  overviewPoints: ServicePoint[];
  capabilities: ServicePoint[];
  process: ServicePoint[];
  technologies: string[];
  benefits: ServicePoint[];
  useCases: ServicePoint[];
  faqs: ServiceFaq[];
  ctaTitle: string;
  ctaDescription: string;
}

export const SERVICES: ServiceDetail[] = [
  {
    slug: "software-development",
    title: "Software Development",
    shortDescription:
      "Full-stack products engineered for performance and longevity.",
    imageSrc: "/services/custom-web-applications.jpg",
    eyebrow: "SOFTWARE DEVELOPMENT",
    headline: "Custom software built to run your operations — not the other way around.",
    description:
      "We design and ship full-stack products that match how your team actually works: clear architecture, measurable performance, and a codebase your engineers can own after handoff.",
    overviewTitle: "Production software, not prototypes.",
    overviewBody:
      "Every engagement starts with the workflow the product has to support. From there we shape the architecture, build the surfaces people use every day, and leave you with something operable — monitored, documented, and ready to evolve.",
    overviewPoints: [
      {
        title: "Architecture first",
        description:
          "Boundaries, data ownership, and failure modes decided before features pile up.",
      },
      {
        title: "Ship in increments",
        description:
          "Working software in weeks, with scope you can see and adjust as reality changes.",
      },
      {
        title: "Built for handoff",
        description:
          "Docs, tests, and ownership clear enough that your team can run it without us.",
      },
    ],
    capabilities: [
      {
        title: "Custom web applications",
        description:
          "Internal tools, customer portals, and operational dashboards shaped around real workflows.",
      },
      {
        title: "API & backend services",
        description:
          "Reliable APIs and service layers that keep data consistent across your stack.",
      },
      {
        title: "Legacy modernization",
        description:
          "Incremental rewrites that replace brittle systems without freezing delivery.",
      },
      {
        title: "Performance engineering",
        description:
          "Profiling, caching, and query design so the product stays fast as usage grows.",
      },
      {
        title: "Quality & observability",
        description:
          "Automated tests, logging, and dashboards that make failures visible early.",
      },
      {
        title: "Team augmentation",
        description:
          "Senior engineers embedded with your team when you need capacity without losing quality.",
      },
    ],
    process: [
      {
        title: "Diagnose the workflow",
        description:
          "We map how work actually moves today — bottlenecks, workarounds, and the constraints your team has been living with.",
      },
      {
        title: "Blueprint the system",
        description:
          "Architecture, milestones, and success criteria agreed before build starts, so scope stays honest.",
      },
      {
        title: "Build and validate",
        description:
          "Incremental delivery with demos, reviews, and instrumentation baked in from the first merge.",
      },
      {
        title: "Handoff and stabilize",
        description:
          "Runbooks, training, and a post-launch support window so the system stays operable after go-live.",
      },
    ],
    technologies: [
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "Python",
      "PostgreSQL",
      "GraphQL",
      "Docker",
    ],
    benefits: [
      {
        title: "Software that fits the business",
        description:
          "Features map to real decisions and workflows — not generic templates.",
      },
      {
        title: "Lower long-term cost",
        description:
          "Clear seams and docs mean the next change doesn't require a rewrite.",
      },
      {
        title: "Faster, safer iteration",
        description:
          "Tests and observability let your team ship without guessing in production.",
      },
      {
        title: "Ownership stays with you",
        description:
          "We build so your engineers can maintain and extend the product independently.",
      },
    ],
    useCases: [
      {
        title: "Operational platforms",
        description:
          "Replace spreadsheets and tribal knowledge with a system your whole team can trust.",
      },
      {
        title: "Customer-facing products",
        description:
          "Ship a polished web product with the performance and reliability users expect.",
      },
      {
        title: "Internal tooling",
        description:
          "Build the dashboards and workflows that remove hours of manual coordination.",
      },
    ],
    faqs: [
      {
        question: "Do you build greenfield products or improve existing ones?",
        answer:
          "Both. We start net-new products when the current tools can't carry the business, and we modernize existing systems when the foundation is sound but the seams need work.",
      },
      {
        question: "Will our team be able to maintain what you build?",
        answer:
          "Yes — that's a definition of done for us. We document ownership, leave clear runbooks, and prefer stacks your team can hire for and support long term.",
      },
      {
        question: "How do you handle changing requirements mid-project?",
        answer:
          "Milestones and scope are agreed upfront, but we leave room for reality. Changes go through a clear trade-off conversation so dates and budget stay honest.",
      },
    ],
    ctaTitle: "Ready to build software your team can operate?",
    ctaDescription:
      "Tell us what the system needs to do for the business. We'll help you shape the architecture and a plan you can ship against.",
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    shortDescription: "Native and cross-platform apps built for everyday use.",
    imageSrc: "/services/mobile-solutions.jpg",
    eyebrow: "MOBILE APP DEVELOPMENT",
    headline: "Mobile products people reach for because they make the day easier.",
    description:
      "We design and build native and cross-platform apps that feel fast, stay reliable offline, and fit into the systems your business already runs.",
    overviewTitle: "Apps shaped around real use — not feature lists.",
    overviewBody:
      "A good mobile product earns its place in someone's pocket. We focus on the journeys that matter most, the offline and sync cases that usually break later, and a release process your team can keep running after launch.",
    overviewPoints: [
      {
        title: "Platform-aware design",
        description:
          "Patterns that feel native on iOS and Android without fighting the platform.",
      },
      {
        title: "Offline-first thinking",
        description:
          "Sync, conflict handling, and degraded modes planned before users hit a dead zone.",
      },
      {
        title: "Release discipline",
        description:
          "Store submissions, crash monitoring, and staged rollouts as part of delivery — not afterthoughts.",
      },
    ],
    capabilities: [
      {
        title: "Cross-platform apps",
        description:
          "React Native and Flutter products that share logic without sacrificing feel.",
      },
      {
        title: "Native iOS & Android",
        description:
          "Swift and Kotlin when platform depth, performance, or hardware access demands it.",
      },
      {
        title: "Backend & sync",
        description:
          "APIs, auth, and data sync that keep mobile clients consistent with your core systems.",
      },
      {
        title: "Push & notifications",
        description:
          "Timely, relevant alerts wired into the workflows the app is meant to support.",
      },
      {
        title: "App Store readiness",
        description:
          "Review guidelines, privacy disclosures, and release pipelines handled as delivery work.",
      },
      {
        title: "Post-launch iteration",
        description:
          "Crash analytics, store feedback, and a cadence for shipping improvements safely.",
      },
    ],
    process: [
      {
        title: "Map critical journeys",
        description:
          "We identify the few flows that must feel effortless — and the edge cases that usually break trust.",
      },
      {
        title: "Prototype the experience",
        description:
          "Interactive designs validate navigation and key screens before engineering invests heavily.",
      },
      {
        title: "Build for devices that fail",
        description:
          "Network drops, background limits, and store constraints are treated as first-class requirements.",
      },
      {
        title: "Ship and observe",
        description:
          "Staged releases, crash monitoring, and a clear path for the next iteration after launch.",
      },
    ],
    technologies: [
      "React Native",
      "Flutter",
      "Swift",
      "Kotlin",
      "TypeScript",
      "Node.js",
      "Firebase",
      "PostgreSQL",
    ],
    benefits: [
      {
        title: "Faster time to useful",
        description:
          "Cross-platform where it helps, native where it matters — chosen for the job, not the trend.",
      },
      {
        title: "Fewer production surprises",
        description:
          "Offline, sync, and store requirements are designed in, not discovered after launch.",
      },
      {
        title: "One product, connected stack",
        description:
          "The app sits cleanly on your APIs and data — not as a parallel system nobody owns.",
      },
      {
        title: "Sustainable releases",
        description:
          "Your team gets a release process they can run without a fire drill every update.",
      },
    ],
    useCases: [
      {
        title: "Field & operations apps",
        description:
          "Give teams on the move a reliable way to capture work and sync when connectivity returns.",
      },
      {
        title: "Customer mobile products",
        description:
          "Ship a polished consumer or B2B app that mirrors the quality of your web experience.",
      },
      {
        title: "Companion experiences",
        description:
          "Extend an existing platform with mobile-specific workflows your users actually need.",
      },
    ],
    faqs: [
      {
        question: "Should we build native or cross-platform?",
        answer:
          "It depends on hardware needs, team skills, and how much UI must feel platform-native. We recommend based on those constraints — not a default preference.",
      },
      {
        question: "Do you handle App Store and Play Store submissions?",
        answer:
          "Yes. Store listings, privacy requirements, and review feedback are part of delivery, with a process your team can repeat after handoff.",
      },
      {
        question: "How do you keep the app in sync with our backend?",
        answer:
          "We design the API and sync model with the mobile client, including auth, conflict handling, and clear ownership of shared data.",
      },
    ],
    ctaTitle: "Planning a mobile product that has to earn daily use?",
    ctaDescription:
      "Share the journeys that matter most. We'll help you choose the right platform approach and a plan to ship confidently.",
  },
  {
    slug: "cloud-infrastructure",
    title: "Cloud Infrastructure",
    shortDescription: "Scalable, secure environments that grow with your business.",
    imageSrc: "/services/cloud-infrastructure.jpg",
    eyebrow: "CLOUD INFRASTRUCTURE",
    headline: "Cloud environments designed for today's load — and tomorrow's growth.",
    description:
      "We plan, build, and harden cloud infrastructure with clear boundaries, infrastructure as code, and operational practices your team can run without constant firefighting.",
    overviewTitle: "Architecture that absorbs change.",
    overviewBody:
      "Most costly cloud mistakes aren't about picking the wrong provider — they're about designing for today's traffic with no path to tomorrow's. We put the right seams in early so growth doesn't force a rewrite.",
    overviewPoints: [
      {
        title: "Boundaries before scale",
        description:
          "Stateful vs. stateless, data access behind interfaces, and managed services for undifferentiated work.",
      },
      {
        title: "Infrastructure as code",
        description:
          "Environments you can rebuild from a repository — auditable, repeatable, and handoff-ready.",
      },
      {
        title: "Operable by default",
        description:
          "Monitoring, alerts, and runbooks ship with the infrastructure, not after the first outage.",
      },
    ],
    capabilities: [
      {
        title: "Cloud architecture",
        description:
          "AWS and multi-environment designs matched to traffic, compliance, and team capacity.",
      },
      {
        title: "Containers & orchestration",
        description:
          "Docker-based workloads with clear deploy paths and resource limits that hold under load.",
      },
      {
        title: "Networking & security",
        description:
          "Least-privilege access, network segmentation, and secrets handling that survive audits.",
      },
      {
        title: "CI/CD pipelines",
        description:
          "Automated builds and promotions that make releases boring — in the best way.",
      },
      {
        title: "Observability",
        description:
          "Metrics, logs, and traces wired so failures surface before customers report them.",
      },
      {
        title: "Cost & reliability tuning",
        description:
          "Right-sizing, autoscaling, and SLOs that balance spend against real reliability needs.",
      },
    ],
    process: [
      {
        title: "Audit the current estate",
        description:
          "We inventory workloads, dependencies, and the operational pain your team is already feeling.",
      },
      {
        title: "Design the target seams",
        description:
          "Clear boundaries, environment strategy, and a migration path that doesn't freeze delivery.",
      },
      {
        title: "Implement as code",
        description:
          "Provision, harden, and automate so the environment is reproducible — not tribal knowledge.",
      },
      {
        title: "Operate and hand off",
        description:
          "Dashboards, alerts, and runbooks with a support window while your team takes ownership.",
      },
    ],
    technologies: [
      "AWS",
      "Docker",
      "Terraform",
      "Kubernetes",
      "GitHub Actions",
      "PostgreSQL",
      "Redis",
      "CloudWatch",
    ],
    benefits: [
      {
        title: "Growth without a rewrite",
        description:
          "Seams designed early absorb traffic spikes and new services without starting over.",
      },
      {
        title: "Fewer 2am incidents",
        description:
          "Monitoring and ownership are part of the architecture, not a later project.",
      },
      {
        title: "Auditable environments",
        description:
          "Infrastructure as code means you can rebuild, review, and explain what runs where.",
      },
      {
        title: "Spend you can explain",
        description:
          "Capacity and managed services chosen for the workload — not for the brochure.",
      },
    ],
    useCases: [
      {
        title: "Greenfield cloud foundations",
        description:
          "Stand up a production-ready environment before the product outgrows a single box.",
      },
      {
        title: "Migration without freeze",
        description:
          "Move workloads incrementally while the business keeps shipping features.",
      },
      {
        title: "Reliability recovery",
        description:
          "Stabilize brittle infrastructure with clearer boundaries, automation, and observability.",
      },
    ],
    faqs: [
      {
        question: "Do you only work with AWS?",
        answer:
          "AWS is where we do most of our work, but the principles — clear boundaries, infrastructure as code, and operable defaults — transfer. We'll recommend based on your constraints.",
      },
      {
        question: "Can you work with an existing cloud account?",
        answer:
          "Yes. Most engagements start from an estate that's already running. We improve what's there and only replace what can't carry the next stage of growth.",
      },
      {
        question: "How do you avoid over-engineering early?",
        answer:
          "We design a small number of durable seams and use managed services for undifferentiated work — enough for 10x growth without building for scale you don't have yet.",
      },
    ],
    ctaTitle: "Need infrastructure that can grow without a rewrite?",
    ctaDescription:
      "Tell us what you're running today and where it hurts. We'll help you design seams and an environment your team can operate.",
  },
  {
    slug: "ai-integration",
    title: "AI Integration",
    shortDescription: "Applied AI embedded into real, working workflows.",
    imageSrc: "/services/ai-integration.jpg",
    eyebrow: "AI INTEGRATION",
    headline: "AI that earns its place inside a workflow — not a slide deck.",
    description:
      "We add applied AI where a model is genuinely better than a rule or a query: observable, versioned, and wired into the systems your team already trusts.",
    overviewTitle: "Models as components, not the center of the roadmap.",
    overviewBody:
      "Not every problem needs a model. When it does, we treat AI as one piece of a larger system — with clear inputs, fallbacks, and evaluation — so the business gets leverage without gambling on black boxes.",
    overviewPoints: [
      {
        title: "Fit before features",
        description:
          "We confirm the problem is probabilistic before investing in a model.",
      },
      {
        title: "Observable by design",
        description:
          "Inputs, outputs, and confidence thresholds are logged and reviewable.",
      },
      {
        title: "Human fallbacks",
        description:
          "Uncertain cases route to a rule or a person — never a silent failure.",
      },
    ],
    capabilities: [
      {
        title: "Workflow embedding",
        description:
          "Assistants, ranking, and extraction wired into tools people already use.",
      },
      {
        title: "RAG & knowledge systems",
        description:
          "Grounded answers from your documents and data — with citations you can check.",
      },
      {
        title: "Model evaluation",
        description:
          "Versioned prompts and models evaluated the same way any other dependency would be.",
      },
      {
        title: "Safety & guardrails",
        description:
          "Input filtering, output checks, and policy constraints matched to business risk.",
      },
      {
        title: "Data pipelines",
        description:
          "Clean, labeled, and permission-aware data paths that keep models useful over time.",
      },
      {
        title: "Cost-aware serving",
        description:
          "Caching, routing, and model selection so unit economics stay sensible at scale.",
      },
    ],
    process: [
      {
        title: "Filter the opportunity",
        description:
          "We separate problems that need a model from ones a deterministic approach solves better.",
      },
      {
        title: "Prototype with guardrails",
        description:
          "A thin, measurable slice proves value — with fallbacks and logging from day one.",
      },
      {
        title: "Integrate into the stack",
        description:
          "APIs, auth, and observability connect the model to the workflow it has to support.",
      },
      {
        title: "Evaluate and iterate",
        description:
          "Ongoing evaluation and cost monitoring keep quality from drifting after launch.",
      },
    ],
    technologies: [
      "Python",
      "OpenAI",
      "LangChain",
      "PostgreSQL",
      "Redis",
      "TypeScript",
      "AWS",
      "Docker",
    ],
    benefits: [
      {
        title: "AI that earns ROI",
        description:
          "Investment goes where a model is better than the alternative — not where it's fashionable.",
      },
      {
        title: "Explainable behavior",
        description:
          "Your team can see what the system did and what happens when confidence is low.",
      },
      {
        title: "Lower operational risk",
        description:
          "Fallbacks and reviews prevent brittle demos from becoming production liabilities.",
      },
      {
        title: "Fits your existing stack",
        description:
          "Models plug into current products and data — they don't demand a parallel platform.",
      },
    ],
    useCases: [
      {
        title: "Document & support workflows",
        description:
          "Summarize, classify, and route unstructured input with a human in the loop when needed.",
      },
      {
        title: "Search & recommendations",
        description:
          "Rank ambiguous options using your own data, with metrics that track relevance over time.",
      },
      {
        title: "Internal copilots",
        description:
          "Give teams grounded answers from policies, tickets, and product knowledge — not generic chat.",
      },
    ],
    faqs: [
      {
        question: "How do you decide if AI is the right approach?",
        answer:
          "If a rule, lookup, or well-indexed query solves it reliably, that's usually better. AI earns its place when the problem is genuinely probabilistic and being right most of the time — with a clear fallback — is acceptable.",
      },
      {
        question: "Will our data leave our environment?",
        answer:
          "We design around your data-residency and privacy requirements, including private deployments and vendor choices that match your constraints.",
      },
      {
        question: "How do you keep quality from drifting?",
        answer:
          "Models and prompts are versioned and evaluated. Logging and review loops catch regressions before they become a customer problem.",
      },
    ],
    ctaTitle: "Have a workflow where AI might actually help?",
    ctaDescription:
      "Describe the decision or bottleneck. We'll help you decide whether a model belongs there — and how to ship it safely if it does.",
  },
  {
    slug: "saas-development",
    title: "SaaS Development",
    shortDescription: "End-to-end SaaS platforms, from architecture to billing.",
    imageSrc: "/services/saas-development.jpg",
    eyebrow: "SAAS DEVELOPMENT",
    headline: "Multi-tenant platforms built for customers, billing, and the long haul.",
    description:
      "We design and build SaaS products with tenancy, auth, billing, and operations treated as core product work — so growth doesn't outrun the foundation.",
    overviewTitle: "SaaS is a system, not just an app.",
    overviewBody:
      "A durable SaaS product needs more than screens. We engineer tenancy boundaries, subscription flows, and operational visibility so you can onboard customers, collect revenue, and keep the platform healthy as usage grows.",
    overviewPoints: [
      {
        title: "Tenancy by design",
        description:
          "Data isolation and shared infrastructure chosen deliberately — not bolted on later.",
      },
      {
        title: "Revenue-ready flows",
        description:
          "Plans, trials, and billing events wired into the product, not a spreadsheet afterthought.",
      },
      {
        title: "Operate at scale",
        description:
          "Admin tools, audit trails, and monitoring so support and engineering stay aligned.",
      },
    ],
    capabilities: [
      {
        title: "Multi-tenant architecture",
        description:
          "Isolation models matched to compliance needs and cost, with clear upgrade paths.",
      },
      {
        title: "Auth & permissions",
        description:
          "Organization-aware access control that scales from first customer to enterprise deals.",
      },
      {
        title: "Billing & subscriptions",
        description:
          "Plan changes, invoices, and webhook-driven lifecycle events integrated into the product.",
      },
      {
        title: "Onboarding & admin",
        description:
          "Self-serve setup and internal tools that keep customer success from becoming a bottleneck.",
      },
      {
        title: "Usage metering",
        description:
          "Instrumentation that supports fair limits, packaging, and product decisions.",
      },
      {
        title: "Platform reliability",
        description:
          "Backups, migrations, and deploy practices that keep customer data safe through change.",
      },
    ],
    process: [
      {
        title: "Define the product seams",
        description:
          "Tenancy, packaging, and the first customer journey — agreed before the build sprawls.",
      },
      {
        title: "Ship a revenue-capable core",
        description:
          "Auth, billing, and the primary workflow land early so you can learn from real usage.",
      },
      {
        title: "Harden for growth",
        description:
          "Admin, metering, and reliability work catch up before the next wave of customers arrives.",
      },
      {
        title: "Operate and expand",
        description:
          "A release cadence and ownership model that supports continuous packaging and feature work.",
      },
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Stripe",
      "Redis",
      "AWS",
      "Docker",
    ],
    benefits: [
      {
        title: "Faster path to paying customers",
        description:
          "Billing and onboarding are product features from the start — not a phase-two project.",
      },
      {
        title: "Tenancy you can explain",
        description:
          "Clear isolation and access models make enterprise conversations and audits easier.",
      },
      {
        title: "Room to package and price",
        description:
          "Metering and plan structures that let you change packaging without rewriting the core.",
      },
      {
        title: "Operations that scale with you",
        description:
          "Admin and monitoring keep support from depending on engineering tribal knowledge.",
      },
    ],
    useCases: [
      {
        title: "New SaaS products",
        description:
          "Go from idea to a multi-tenant MVP with auth, billing, and a clear path to scale.",
      },
      {
        title: "Single-tenant to multi-tenant",
        description:
          "Evolve a successful internal or bespoke product into a platform you can sell.",
      },
      {
        title: "Packaging & billing overhaul",
        description:
          "Replace brittle subscription logic with flows that match how you actually sell.",
      },
    ],
    faqs: [
      {
        question: "Do you integrate with Stripe or other billing providers?",
        answer:
          "Yes. We wire subscription lifecycle events into the product so plan changes, trials, and failures are handled in software — not manually.",
      },
      {
        question: "How do you approach multi-tenancy?",
        answer:
          "We choose isolation based on compliance, cost, and team capacity — from shared schemas with strong row-level controls to stronger separation when the risk profile demands it.",
      },
      {
        question: "Can you help after the MVP launches?",
        answer:
          "Absolutely. Many engagements continue into packaging, enterprise features, and reliability work once real customers are on the platform.",
      },
    ],
    ctaTitle: "Building a SaaS product that has to collect revenue and scale?",
    ctaDescription:
      "Share your packaging and first customer journey. We'll help you design tenancy, billing, and a core you can grow on.",
  },
  {
    slug: "automation",
    title: "Automation",
    shortDescription: "Automated pipelines that remove repetitive manual work.",
    imageSrc: "/services/automation.jpg",
    eyebrow: "AUTOMATION",
    headline: "Pipelines that take repetitive work off your team's plate — reliably.",
    description:
      "We design and build automation that replaces fragile manual handoffs with observable, owned workflows — so people spend time on judgment, not copy-paste.",
    overviewTitle: "Automation that survives contact with reality.",
    overviewBody:
      "The automations that fail are the ones nobody can see or fix. We build pipelines with clear triggers, retries, and ownership so when something breaks, the right person knows — and the business keeps moving.",
    overviewPoints: [
      {
        title: "Start from the bottleneck",
        description:
          "We automate the steps that waste the most hours or introduce the most errors.",
      },
      {
        title: "Visible failure modes",
        description:
          "Retries, alerts, and dead-letter paths so silent failures don't pile up.",
      },
      {
        title: "Owned end to end",
        description:
          "Every pipeline has a named owner and a runbook — not a mystery script.",
      },
    ],
    capabilities: [
      {
        title: "Business process automation",
        description:
          "Approvals, notifications, and handoffs that used to live in inboxes and spreadsheets.",
      },
      {
        title: "Data pipelines",
        description:
          "Scheduled and event-driven jobs that keep systems and reports in sync.",
      },
      {
        title: "CI/CD & release automation",
        description:
          "Build, test, and promote paths that make shipping routine instead of risky.",
      },
      {
        title: "Integration workflows",
        description:
          "Cross-system orchestration when one tool's automation isn't enough on its own.",
      },
      {
        title: "Error handling & recovery",
        description:
          "Idempotent jobs, retries, and escalation paths designed for messy real input.",
      },
      {
        title: "Ops dashboards",
        description:
          "Visibility into queue depth, failure rates, and SLA breaches before customers notice.",
      },
    ],
    process: [
      {
        title: "Find the high-cost steps",
        description:
          "We measure where time and errors concentrate — then pick the automations with clear ROI.",
      },
      {
        title: "Design for failure",
        description:
          "Triggers, retries, and human escalation paths are specified before code lands.",
      },
      {
        title: "Implement and instrument",
        description:
          "Pipelines ship with logging and alerts so operations can trust them day one.",
      },
      {
        title: "Hand off ownership",
        description:
          "Runbooks and owners make sure the automation stays maintained after launch.",
      },
    ],
    technologies: [
      "Python",
      "Node.js",
      "n8n",
      "GitHub Actions",
      "AWS",
      "PostgreSQL",
      "Redis",
      "Docker",
    ],
    benefits: [
      {
        title: "Hours returned to the team",
        description:
          "Repetitive work moves to systems so people focus on exceptions and decisions.",
      },
      {
        title: "Fewer silent errors",
        description:
          "Observable pipelines catch failures that manual processes bury until they hurt.",
      },
      {
        title: "Consistent execution",
        description:
          "The process runs the same way every time — not depending on who remembered the steps.",
      },
      {
        title: "Room to scale volume",
        description:
          "Throughput grows without growing headcount at the same rate.",
      },
    ],
    useCases: [
      {
        title: "Ops & finance handoffs",
        description:
          "Replace email chains and spreadsheet updates with reliable, auditable workflows.",
      },
      {
        title: "Data sync between tools",
        description:
          "Keep CRM, billing, and product systems aligned without nightly manual exports.",
      },
      {
        title: "Release & environment automation",
        description:
          "Standardize how code moves from commit to production with fewer human touchpoints.",
      },
    ],
    faqs: [
      {
        question: "Should we use no-code tools or custom automation?",
        answer:
          "Both have a place. We use orchestration tools when speed and visibility matter most, and custom services when reliability, volume, or logic complexity outgrow them.",
      },
      {
        question: "How do you prevent automations from becoming unmaintainable?",
        answer:
          "Ownership, documentation, and observability are part of delivery. If nobody can explain a pipeline, we don't consider it done.",
      },
      {
        question: "What if a step still needs a human?",
        answer:
          "That's normal. We design human-in-the-loop steps with clear queues and SLAs instead of pretending everything can be fully automatic.",
      },
    ],
    ctaTitle: "Ready to take repetitive work off your team's plate?",
    ctaDescription:
      "Point us at the bottleneck. We'll help you design an automation path that's reliable, visible, and owned.",
  },
  {
    slug: "system-api-integration",
    title: "System & API Integration",
    shortDescription: "Connected systems that share data reliably in real time.",
    imageSrc: "/services/system-api-integration.jpg",
    eyebrow: "SYSTEM & API INTEGRATION",
    headline: "Systems that share data reliably — without fragile point-to-point glue.",
    description:
      "We design and build API and system integrations that keep your stack working as one: clear contracts, resilient delivery, and ownership that survives vendor changes.",
    overviewTitle: "Integration as architecture, not duct tape.",
    overviewBody:
      "Most integration debt comes from one-off connections nobody wanted to own. We put contracts, retries, and monitoring in place so data moves reliably across your tools — and the next connection doesn't make the graph worse.",
    overviewPoints: [
      {
        title: "Contracts first",
        description:
          "Payloads, auth, and versioning agreed so producers and consumers don't surprise each other.",
      },
      {
        title: "Resilient delivery",
        description:
          "Retries, idempotency, and dead-letter handling for the failures networks always cause.",
      },
      {
        title: "Owned connections",
        description:
          "Every integration has a clear owner, runbook, and path to change safely.",
      },
    ],
    capabilities: [
      {
        title: "API design & implementation",
        description:
          "REST and GraphQL interfaces that are stable, documented, and easy for partners to adopt.",
      },
      {
        title: "Third-party integrations",
        description:
          "CRM, payments, ERP, and SaaS connectors with auth and webhook handling done properly.",
      },
      {
        title: "Event-driven sync",
        description:
          "Queues and events that keep systems aligned without brittle polling loops.",
      },
      {
        title: "Data mapping & transforms",
        description:
          "Clear mappings between systems so fields don't silently drift out of meaning.",
      },
      {
        title: "Legacy bridging",
        description:
          "Adapters that let modern products talk to older systems without a big-bang rewrite.",
      },
      {
        title: "Integration observability",
        description:
          "Tracing and alerts across hops so failures are found at the seam, not guessed at.",
      },
    ],
    process: [
      {
        title: "Map the data flows",
        description:
          "We chart what moves where, who owns it, and which failures currently go unnoticed.",
      },
      {
        title: "Define the contracts",
        description:
          "Schemas, auth, SLAs, and versioning rules agreed before glue code multiplies.",
      },
      {
        title: "Build resilient connectors",
        description:
          "Idempotent handlers, retries, and monitoring land with the first integration — not later.",
      },
      {
        title: "Handoff with runbooks",
        description:
          "Your team gets ownership of each connection, including how to debug and evolve it.",
      },
    ],
    technologies: [
      "Node.js",
      "TypeScript",
      "GraphQL",
      "REST",
      "PostgreSQL",
      "Redis",
      "AWS",
      "Docker",
    ],
    benefits: [
      {
        title: "One connected stack",
        description:
          "Teams stop reconciling the same data across tools that don't talk to each other.",
      },
      {
        title: "Fewer brittle handoffs",
        description:
          "Resilient delivery replaces scripts that break quietly when a vendor changes a field.",
      },
      {
        title: "Faster partner onboarding",
        description:
          "Stable APIs and docs make the next integration a project, not a research expedition.",
      },
      {
        title: "Clear ownership",
        description:
          "When something fails at a seam, everyone knows who owns the fix.",
      },
    ],
    useCases: [
      {
        title: "CRM ↔ product ↔ billing",
        description:
          "Keep customer and revenue data consistent across the systems that depend on it.",
      },
      {
        title: "Partner & marketplace APIs",
        description:
          "Expose stable interfaces so partners can build on your platform confidently.",
      },
      {
        title: "Legacy modernization bridges",
        description:
          "Connect new products to systems of record while you migrate at a sustainable pace.",
      },
    ],
    faqs: [
      {
        question: "Do you work with our existing vendors and tools?",
        answer:
          "Yes. Most work starts from the stack you already run. We design connectors and contracts around those systems rather than forcing a rip-and-replace.",
      },
      {
        question: "How do you handle vendor API changes?",
        answer:
          "Versioned adapters, contract tests, and monitoring catch breaking changes early. Ownership and runbooks make response time predictable.",
      },
      {
        question: "Can you help design APIs for external partners?",
        answer:
          "Absolutely. We design for stability, documentation, auth, and rate limits so partners can integrate without constant back-and-forth.",
      },
    ],
    ctaTitle: "Need your systems to share data without fragile glue?",
    ctaDescription:
      "Tell us which tools need to talk. We'll help you design contracts and integrations your team can own.",
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    shortDescription: "Interfaces designed around real user behavior.",
    imageSrc: "/services/ui-ux-design.jpg",
    eyebrow: "UI/UX DESIGN",
    headline: "Interfaces shaped by how people actually work — not how decks look.",
    description:
      "We design product experiences and design systems that reduce friction, support accessibility, and give engineering clear specs they can ship without reinterpretation.",
    overviewTitle: "Design that survives implementation.",
    overviewBody:
      "Pretty screens aren't enough if the workflow still fights the user. We start from tasks and constraints, then build interfaces and systems that stay coherent as the product grows — and that engineers can implement faithfully.",
    overviewPoints: [
      {
        title: "Behavior over decoration",
        description:
          "Flows and information architecture come before visual polish.",
      },
      {
        title: "Systems, not one-offs",
        description:
          "Components and patterns that keep the product consistent as features multiply.",
      },
      {
        title: "Built for shipping",
        description:
          "Specs, states, and accessibility requirements that engineering can execute without guesswork.",
      },
    ],
    capabilities: [
      {
        title: "Product UX",
        description:
          "End-to-end flows for web and mobile products grounded in real tasks and constraints.",
      },
      {
        title: "Design systems",
        description:
          "Tokens, components, and documentation that keep UI coherent across teams and releases.",
      },
      {
        title: "Interaction & states",
        description:
          "Empty, loading, error, and edge states designed — not left to improvisation.",
      },
      {
        title: "Accessibility",
        description:
          "Contrast, focus, and semantics treated as product quality, not a late checklist.",
      },
      {
        title: "Prototype & validate",
        description:
          "Interactive prototypes that test the risky parts of a flow before build cost climbs.",
      },
      {
        title: "Engineering partnership",
        description:
          "Close collaboration so design intent survives implementation trade-offs.",
      },
    ],
    process: [
      {
        title: "Understand the work",
        description:
          "Interviews and task analysis reveal where users hesitate, improvise, or abandon the flow.",
      },
      {
        title: "Structure the experience",
        description:
          "Information architecture and key journeys are settled before high-fidelity polish.",
      },
      {
        title: "Design the system",
        description:
          "Components, states, and accessibility requirements land as a coherent kit for engineering.",
      },
      {
        title: "Support the build",
        description:
          "We stay close through implementation so edge cases and trade-offs stay intentional.",
      },
    ],
    technologies: [
      "Figma",
      "Design Tokens",
      "Storybook",
      "React",
      "Tailwind CSS",
      "Accessibility (WCAG)",
      "Prototyping",
      "Design Systems",
    ],
    benefits: [
      {
        title: "Less user friction",
        description:
          "Flows match real tasks, so people complete work without workarounds.",
      },
      {
        title: "Faster engineering",
        description:
          "Clear components and states reduce back-and-forth and rework during build.",
      },
      {
        title: "Consistency at scale",
        description:
          "A design system keeps new features from inventing one-off patterns.",
      },
      {
        title: "Inclusive by default",
        description:
          "Accessibility baked in expands who can use the product successfully.",
      },
    ],
    useCases: [
      {
        title: "New product UX",
        description:
          "Shape the first experience so early customers can succeed without hand-holding.",
      },
      {
        title: "Complex workflow redesign",
        description:
          "Simplify dense operational tools without losing the power expert users need.",
      },
      {
        title: "Design system foundation",
        description:
          "Give product and engineering a shared kit so UI quality stays high as the team grows.",
      },
    ],
    faqs: [
      {
        question: "Do you only design, or do you also implement?",
        answer:
          "We do both. Many engagements pair design with frontend engineering so the experience ships as intended — not as a reinterpretation.",
      },
      {
        question: "Will you work with our existing brand?",
        answer:
          "Yes. We extend your visual language into product patterns rather than inventing a parallel look that fights the brand.",
      },
      {
        question: "How do you handle accessibility?",
        answer:
          "Accessibility requirements are part of the design deliverable — contrast, focus order, semantics, and states — not a separate phase after launch.",
      },
    ],
    ctaTitle: "Need an interface that matches how people actually work?",
    ctaDescription:
      "Tell us about the product and the friction you're seeing. We'll help you shape flows and a system engineering can ship.",
  },
];

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return SERVICES.find((service) => service.slug === slug);
}

/** Featured services shown on the home page preview grid. */
export const HOME_SERVICE_SLUGS = [
  "software-development",
  "mobile-app-development",
  "cloud-infrastructure",
  "ai-integration",
] as const;

/** Primary services highlighted in the navbar mega-menu. */
export const NAV_SERVICE_SLUGS = [
  "software-development",
  "mobile-app-development",
  "cloud-infrastructure",
  "ai-integration",
] as const;

