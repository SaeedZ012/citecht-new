import { createMetadata } from "@/constants/metadata";
import { Hero, ContactForm } from "./features";

export const metadata = createMetadata({ title: "Contact" });

/**
 * Contact page. Composes the hero and the colocated contact form.
 */
export default function ContactPage() {
  return (
    <>
      <Hero />
      <ContactForm />
    </>
  );
}
