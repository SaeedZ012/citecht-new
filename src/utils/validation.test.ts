import { describe, expect, it } from "vitest";

import { isEmail, isNonEmpty } from "./validation";

describe("isEmail", () => {
  it("accepts a well-formed email address", () => {
    expect(isEmail("hello@citecht.com")).toBe(true);
  });

  it("trims surrounding whitespace before validating", () => {
    expect(isEmail("  hello@citecht.com  ")).toBe(true);
  });

  it("rejects a value without a domain", () => {
    expect(isEmail("hello@")).toBe(false);
  });

  it("rejects an empty string", () => {
    expect(isEmail("")).toBe(false);
  });
});

describe("isNonEmpty", () => {
  it("returns true for text with visible characters", () => {
    expect(isNonEmpty("Citecht")).toBe(true);
  });

  it("returns false for whitespace-only input", () => {
    expect(isNonEmpty("   ")).toBe(false);
  });
});
