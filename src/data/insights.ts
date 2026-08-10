export interface InsightArticle {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  imageSrc: string;
  /** Highlighted in the Insights hero. Exactly one article should be featured. */
  featured?: boolean;
  content: string[];
}

/**
 * Static article content for the Insights section. This is a marketing
 * site with no CMS or backend — articles live here as data and are
 * statically generated per slug at build time. Shared across the Insights
 * page and the home page's "Featured Case Studies" section.
 */
export const INSIGHTS: InsightArticle[] = [
  {
    slug: "done-should-mean-operable",
    title: "Why \u201cdone\u201d should mean operable, not just shipped",
    excerpt:
      "A feature that works in the demo isn't finished until someone other than its author can run, monitor, and fix it. Here's how we define \u201cdone\u201d on every engagement.",
    category: "Process",
    readTime: "6 min read",
    date: "2026-01-14",
    imageSrc: "/services/system-api-integration.jpg",
    featured: true,
    content: [
      "Most delays we see after launch aren't caused by bad code — they're caused by a definition of \u201cdone\u201d that stopped at working, not at operable. A feature that behaves correctly in a demo can still be un-debuggable in production if nobody wrote down what it depends on, what normal looks like, or who to page when it isn't.",
      "On every engagement, we treat a piece of work as finished only when three things are true: it's monitored, so a failure surfaces before a customer reports it; it's documented well enough that an engineer who didn't write it can reason about it in minutes, not days; and it has a named owner, even if that owner is a rotating on-call responsibility rather than one person.",
      "This isn't extra process for its own sake — it's the difference between a system your team can operate confidently and one everyone quietly avoids touching. Building it in from the start is far cheaper than retrofitting it after the third 2am incident.",
      "In practice, that means runbooks are written alongside the feature, not after an outage forces one into existence. Dashboards ship with the pull request that introduces the metric they chart. And handoff isn't a meeting at the end of a project — it's a standard we hold ourselves to on the way there.",
    ],
  },
  {
    slug: "cloud-architecture-without-rewrite",
    title: "Choosing a cloud architecture that won't need a rewrite in a year",
    excerpt:
      "Most costly infrastructure mistakes aren't about picking the wrong provider — they're about designing for today's traffic with no clear path to tomorrow's.",
    category: "Cloud & Infrastructure",
    readTime: "7 min read",
    date: "2025-12-02",
    imageSrc: "/services/cloud-infrastructure.jpg",
    content: [
      "Teams rarely regret which cloud provider they picked. They regret architectural decisions made under early-stage pressure — a single database doing every job, a monolith with no clear seams, autoscaling bolted on after the first outage — that quietly become the ceiling on how far the product can grow.",
      "The fix isn't over-engineering for scale you don't have yet. It's designing a small number of clear boundaries early: separating stateful and stateless workloads, keeping data access behind an interface instead of scattered across the codebase, and choosing managed services for the undifferentiated parts of the stack so your team's time goes toward what actually differentiates the product.",
      "We also treat infrastructure as code from day one, even for small projects. It's not about ceremony — it's that a system you can rebuild from a repository in an afternoon is a system you can trust, audit, and hand off, long after the people who built it have moved on to the next thing.",
      "The result is an architecture that can absorb 10x growth in traffic without a rewrite, because the seams that would need to move were designed in from the start, not discovered during an incident.",
    ],
  },
  {
    slug: "where-ai-earns-its-place",
    title: "Where AI actually earns its place in a product roadmap",
    excerpt:
      "Not every workflow benefits from a model. Here's the filter we use to decide when applied AI is worth the engineering investment — and when it isn't.",
    category: "AI & Data",
    readTime: "5 min read",
    date: "2025-11-18",
    imageSrc: "/services/ai-integration.jpg",
    content: [
      "The most common AI mistake we see isn't a technical one — it's reaching for a model before confirming the problem actually needs one. If a deterministic rule, a lookup table, or a well-indexed query solves it reliably, that's almost always the better first move: cheaper to build, easier to debug, and predictable under edge cases.",
      "AI earns its place when the problem is genuinely probabilistic — matching unstructured text, ranking ambiguous options, summarizing variable input — and when being right most of the time, with a clear fallback for the rest, is an acceptable trade-off for the business.",
      "When it does fit, we treat the model as one component in a larger, observable system: inputs and outputs are logged, confidence thresholds route uncertain cases to a human or a simpler rule, and the model is versioned and evaluated the same way any other dependency would be.",
      "Applied well, AI doesn't sit at the center of the roadmap — it sits quietly inside a workflow, doing the one thing it's genuinely better at than the alternative, with a team that can explain exactly what happens when it's wrong.",
    ],
  },
  {
    slug: "cost-of-skipping-review",
    title: "The real cost of skipping code review under deadline pressure",
    excerpt:
      "Cutting review to hit a date rarely saves the time it looks like it saves. A look at where that debt actually resurfaces — and how to protect the process without slowing delivery.",
    category: "Software Engineering",
    readTime: "5 min read",
    date: "2025-10-27",
    imageSrc: "/services/custom-web-applications.jpg",
    content: [
      "Skipping review to hit a deadline feels like it buys time, because the cost doesn't show up immediately. It shows up three sprints later, in a bug that takes a day to trace because nobody else understood the change when it landed — or in a second engineer quietly re-solving a problem that was already solved, because the first solution was never visible to the team.",
      "Review isn't a quality gate bolted onto delivery; it's how knowledge about the system spreads past whoever wrote the code. Skip it consistently and you end up with a codebase only one or two people can safely change, which is its own kind of technical debt.",
      "The way to protect it under pressure isn't to make review heavier — it's to make it faster: smaller pull requests, a clear owner who reviews same-day, and a shared understanding that review comments about architecture matter more than nitpicks about style, which linting should catch automatically anyway.",
      "Teams that keep review lightweight but non-negotiable ship just as fast under deadline pressure — they just don't pay for it later.",
    ],
  },
  {
    slug: "automating-the-pipeline",
    title: "Automating the parts of your pipeline no one wants to babysit",
    excerpt:
      "The highest-leverage automation isn't glamorous — it's the manual deploy checklist, the flaky test rerun, and the report someone copies into a spreadsheet every Friday.",
    category: "DevOps & Reliability",
    readTime: "6 min read",
    date: "2025-09-30",
    imageSrc: "/services/automation.jpg",
    content: [
      "When teams ask us to \u201cautomate more,\u201d the highest-value targets are almost never the exciting ones. They're the manual deploy checklist someone runs from memory, the test suite with three known-flaky tests everyone reruns without thinking, and the weekly report a person still assembles by hand because the pipeline that generates it was never quite finished.",
      "Each of those is a small, boring risk that compounds: a step skipped under pressure, a flaky test that erodes trust in the suite, a report that's subtly wrong because a manual step introduced drift. None of them require sophisticated tooling to fix — they require someone to actually finish automating the last 20%.",
      "We approach this by asking a simple question for every recurring manual task: what happens the one time the person who normally does this is out? If the honest answer is \u201cit doesn't happen, or it happens wrong,\u201d that's the automation backlog, ranked by how bad the failure mode is.",
      "The payoff isn't just saved time — it's a system that behaves the same way regardless of who's on call that week, which is most of what \u201creliability\u201d actually means in practice.",
    ],
  },
  {
    slug: "handoff-checklist",
    title: "A practical checklist for handing off a system without losing context",
    excerpt:
      "Whether you're onboarding a new team or transitioning off a vendor, most knowledge loss happens in the handoff. Here's the checklist we use on every project.",
    category: "Process",
    readTime: "4 min read",
    date: "2025-08-19",
    imageSrc: "/services/saas-development.jpg",
    content: [
      "Most knowledge loss doesn't happen gradually — it happens in a single handoff meeting, when the people who understand a system hand it to people who don't, and the transfer is treated as a formality instead of a deliverable.",
      "We run every handoff against the same short checklist: architecture documented in diagrams a new engineer can follow without a live walkthrough, access and credentials transferred and verified (not just \u201csent\u201d), monitoring and alerting explained in terms of what each alert means and what to do about it, and a list of known issues and deferred decisions that didn't make it into a ticket.",
      "The test we hold ourselves to: could someone who has never spoken to our team resolve a routine incident using only what we left behind? If the answer is no, the handoff isn't done, regardless of what the contract says.",
      "It's a short list, but it's rarely followed completely — which is exactly why it's usually the reason a transition goes smoothly or turns into months of back-and-forth.",
    ],
  },
  {
    slug: "designing-interfaces-for-real-users",
    title: "Designing interfaces that hold up once real users show up",
    excerpt:
      "A polished prototype and a durable interface are different problems. What tends to break first once real data, real edge cases, and real users arrive.",
    category: "Product & Design",
    readTime: "5 min read",
    date: "2025-07-08",
    imageSrc: "/services/ui-ux-design.jpg",
    content: [
      "A prototype is designed around ideal data: short names, round numbers, a handful of rows. Production is designed around whatever actually shows up — empty states, thousand-item lists, names that don't fit the layout, and users who never read the instructions.",
      "Interfaces that hold up are the ones designed against those conditions from the start, not patched afterward. That means deciding what an empty state communicates before it ever ships empty, and testing layouts against real (or realistically messy) data instead of curated examples.",
      "It also means treating error and loading states as first-class design work, not an engineering afterthought bolted on during implementation. Users form their opinion of a product as much from how it behaves when something goes wrong as from how it looks when everything goes right.",
      "Design that survives contact with real usage isn't necessarily more elaborate — it's just been asked harder questions before it shipped.",
    ],
  },
];

/** Unique, ordered list of categories present in the article set. */
export const INSIGHT_CATEGORIES = Array.from(
  new Set(INSIGHTS.map((article) => article.category))
);

export function getFeaturedInsight(): InsightArticle {
  return INSIGHTS.find((article) => article.featured) ?? INSIGHTS[0];
}

export function getInsightBySlug(slug: string): InsightArticle | undefined {
  return INSIGHTS.find((article) => article.slug === slug);
}

/**
 * Deterministic preview set for the home Insights section.
 * Avoids Math.random() so SSR/dev HTML stays stable across requests.
 */
export function getRandomInsights(count: number): InsightArticle[] {
  const featured = getFeaturedInsight();
  const rest = INSIGHTS.filter((article) => article.slug !== featured.slug);
  return [featured, ...rest].slice(0, count);
}

/**
 * Formats an ISO date string for display. These pages are statically
 * generated server components, so this only ever runs at build time —
 * safe from the client/server locale-mismatch hydration issues that come
 * with formatting dates in client components.
 */
export function formatInsightDate(isoDate: string): string {
  return new Date(isoDate).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}
