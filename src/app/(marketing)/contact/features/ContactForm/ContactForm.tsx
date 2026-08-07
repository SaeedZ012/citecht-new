"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Select } from "@/components/ui/Select";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Text } from "@/components/ui/Typography";
import { isEmail, isNonEmpty } from "@/utils/validation";
import { ContactInfoPanel } from "./ContactInfoPanel";
import {
  BUDGET_OPTIONS,
  PROJECT_TYPE_OPTIONS,
  TIMELINE_OPTIONS,
} from "./contactFormData";

interface ContactFormValues {
  fullName: string;
  email: string;
  company: string;
  phone: string;
  projectType: string;
  budget: string;
  timeline: string;
  message: string;
}

type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>;

const INITIAL_VALUES: ContactFormValues = {
  fullName: "",
  email: "",
  company: "",
  phone: "",
  projectType: "",
  budget: "",
  timeline: "",
  message: "",
};

function validate(values: ContactFormValues): ContactFormErrors {
  const errors: ContactFormErrors = {};
  if (!isNonEmpty(values.fullName)) {
    errors.fullName = "Please enter your name.";
  }
  if (!isEmail(values.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!isNonEmpty(values.projectType)) {
    errors.projectType = "Please select a project type.";
  }
  if (!isNonEmpty(values.message)) {
    errors.message = "Please tell us a bit about your project.";
  }
  return errors;
}

/**
 * Contact form. This is a static site with no backend, so submission is
 * validated and acknowledged entirely on the client. Sits beside the
 * always-dark {@link ContactInfoPanel} in a two-column layout.
 */
export function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
      setValues(INITIAL_VALUES);
    }
  }

  return (
    <Section spacing="lg">
      <Container size="xl">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:items-stretch">
          <ContactInfoPanel />

          <div className="rounded-md border border-border bg-surface p-8 sm:p-10">
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Input
                  label="Full Name"
                  name="fullName"
                  placeholder="John Doe"
                  value={values.fullName}
                  onChange={handleChange}
                  error={errors.fullName}
                  autoComplete="name"
                />
                <Input
                  label="Email Address"
                  name="email"
                  type="email"
                  placeholder="john@company.com"
                  value={values.email}
                  onChange={handleChange}
                  error={errors.email}
                  autoComplete="email"
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <Input
                  label="Company Name"
                  name="company"
                  placeholder="Your company"
                  value={values.company}
                  onChange={handleChange}
                  hint="Optional"
                  autoComplete="organization"
                />
                <Input
                  label="Phone Number"
                  name="phone"
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  value={values.phone}
                  onChange={handleChange}
                  hint="Optional"
                  autoComplete="tel"
                />
              </div>

              <Select
                label="Project Type"
                name="projectType"
                placeholder="Select project type"
                options={PROJECT_TYPE_OPTIONS}
                value={values.projectType}
                onChange={handleChange}
                error={errors.projectType}
              />

              <div className="grid gap-5 sm:grid-cols-2">
                <Select
                  label="Budget Range"
                  name="budget"
                  placeholder="Select budget range"
                  options={BUDGET_OPTIONS}
                  value={values.budget}
                  onChange={handleChange}
                  hint="Optional"
                />
                <Select
                  label="Timeline"
                  name="timeline"
                  placeholder="Select timeline"
                  options={TIMELINE_OPTIONS}
                  value={values.timeline}
                  onChange={handleChange}
                  hint="Optional"
                />
              </div>

              <Textarea
                label="Project Details"
                name="message"
                rows={5}
                placeholder="Tell us what you're building, the problem you're solving, and any technical constraints we should know about."
                value={values.message}
                onChange={handleChange}
                error={errors.message}
              />

              <div className="mt-2 flex flex-wrap items-center gap-4">
                <Button type="submit" variant="accent" size="lg" className="gap-2">
                  Send Message
                  <Icon size="sm" aria-hidden>
                    <path d="M22 2 11 13" />
                    <path d="M22 2 15 22l-4-9-9-4 20-7Z" />
                  </Icon>
                </Button>
                {submitted ? (
                  <Text variant="bodySmall" className="text-success">
                    Thanks! Your message has been received — we&apos;ll be
                    in touch within 1 business day.
                  </Text>
                ) : null}
              </div>
            </form>
          </div>
        </div>
      </Container>
    </Section>
  );
}
