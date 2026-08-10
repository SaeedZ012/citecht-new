/**
 * Maps each service slug to a light 3D capability visual.
 * Falls back to the software visual when a dedicated asset isn't available.
 */
const SERVICE_VISUALS: Record<string, string> = {
  "software-development": "/hero/slides/software-development.png",
  "mobile-app-development": "/hero/slides/mobile-app-development.png",
  "cloud-infrastructure": "/hero/slides/system-api-integration.png",
  "ai-integration": "/hero/slides/ai-integration.png",
  "saas-development": "/hero/slides/saas-development.png",
  automation: "/hero/slides/automation.png",
  "system-api-integration": "/hero/slides/system-api-integration.png",
  "ui-ux-design": "/hero/slides/saas-development.png",
};

export function getServiceVisual(slug: string): string {
  return SERVICE_VISUALS[slug] ?? "/hero/slides/software-development.png";
}
