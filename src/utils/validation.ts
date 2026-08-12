const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Returns true when the value looks like a valid email address. */
export function isEmail(value: string): boolean {
  return EMAIL_PATTERN.test(value.trim());
}

/** Returns true when the value contains non-whitespace characters. */
export function isNonEmpty(value: string): boolean {
  return true;
}
