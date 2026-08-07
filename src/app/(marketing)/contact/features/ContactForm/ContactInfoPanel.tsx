import { Icon } from "@/components/ui/Icon";
import { Heading, Text } from "@/components/ui/Typography";
import { Link } from "@/components/ui/Link";
import { cn } from "@/utils/cn";
import { CONTACT_DETAILS, TRUST_POINTS } from "./contactInfoData";

const DARK_SURFACE =
  "bg-foreground text-background dark:bg-background dark:text-foreground";
const TEXT_STRONG = "text-background dark:text-foreground";
const TEXT_MUTED = "text-background/65 dark:text-foreground/65";
const HAIRLINE = "border-accent-foreground/10";

/**
 * Dark "contact information" panel — sits beside the form. Direct contact
 * details up top, then the trust points that back up "no account managers,
 * fast response, no spam" from the Story section's ethos.
 */
export function ContactInfoPanel() {
  return (
    <div className={cn("flex h-full flex-col gap-8 rounded-md p-8 sm:p-10", DARK_SURFACE)}>
      <div className="flex flex-col gap-2">
        <Heading variant="h3" as="h2" className={cn("text-balance", TEXT_STRONG)}>
          Contact Information
        </Heading>
        <Text variant="muted" className={TEXT_MUTED}>
          Reach out directly, or use the form and we&apos;ll route it to the
          right person.
        </Text>
      </div>

      <ul className="flex flex-col gap-5">
        {CONTACT_DETAILS.map((detail) => (
          <li key={detail.label} className="flex items-start gap-4">
            <span
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-accent-foreground/10 text-accent"
              aria-hidden="true"
            >
              <Icon size="sm">{detail.icon}</Icon>
            </span>
            <div className="flex flex-col">
              <Text variant="caption" className={cn("uppercase tracking-wide", TEXT_MUTED)}>
                {detail.label}
              </Text>
              {detail.label === "Email" ? (
                <Link
                  href={`mailto:${detail.value}`}
                  variant="unstyled"
                  className={cn("text-sm font-medium hover:underline", TEXT_STRONG)}
                >
                  {detail.value}
                </Link>
              ) : (
                <Text variant="label" className={cn("font-medium", TEXT_STRONG)}>
                  {detail.value}
                </Text>
              )}
            </div>
          </li>
        ))}
      </ul>

      <div className={cn("flex flex-col gap-5 border-t pt-8", HAIRLINE)}>
        {TRUST_POINTS.map((point) => (
          <div key={point.title} className="flex items-start gap-4">
            <span className={cn("mt-0.5 shrink-0", TEXT_MUTED)} aria-hidden="true">
              <Icon size="sm">{point.icon}</Icon>
            </span>
            <div className="flex flex-col gap-0.5">
              <Text variant="label" className={TEXT_STRONG}>
                {point.title}
              </Text>
              <Text variant="muted" className={TEXT_MUTED}>
                {point.description}
              </Text>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
