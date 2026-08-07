import { useId, type SelectHTMLAttributes } from "react";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/utils/cn";

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  hint?: string;
  options: SelectOption[];
  /** Label for the disabled placeholder option (e.g. "Select an option"). */
  placeholder?: string;
  ref?: React.Ref<HTMLSelectElement>;
}

/**
 * Labeled dropdown with the same error/hint messaging and a11y wiring as
 * {@link Input} and {@link Textarea}, plus a chevron affordance since native
 * `<select>` styling is otherwise inconsistent across browsers.
 */
export function Select({
  label,
  error,
  hint,
  options,
  placeholder,
  id,
  className,
  ref,
  ...props
}: SelectProps) {
  const generatedId = useId();
  const fieldId = id ?? generatedId;
  const describedById = error
    ? `${fieldId}-error`
    : hint
      ? `${fieldId}-hint`
      : undefined;

  return (
    <div className="flex flex-col gap-1.5">
      {label ? (
        <label htmlFor={fieldId} className="text-sm font-medium text-foreground">
          {label}
        </label>
      ) : null}
      <div className="relative">
        <select
          id={fieldId}
          ref={ref}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedById}
          className={cn(
            "h-10 w-full appearance-none rounded-md border border-border bg-background px-3 pr-9 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
            error && "border-danger focus-visible:ring-danger",
            className
          )}
          {...props}
        >
          {placeholder ? (
            <option value="" disabled>
              {placeholder}
            </option>
          ) : null}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <Icon
          size="sm"
          aria-hidden
          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
        >
          <path d="m6 9 6 6 6-6" />
        </Icon>
      </div>
      {error ? (
        <p id={`${fieldId}-error`} className="text-xs text-danger">
          {error}
        </p>
      ) : hint ? (
        <p id={`${fieldId}-hint`} className="text-xs text-muted-foreground">
          {hint}
        </p>
      ) : null}
    </div>
  );
}
