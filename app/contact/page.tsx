import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with me — I'd love to hear from you.",
};

export default function ContactPage() {
  return (
    <section className="max-w-2xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-3xl sm:text-4xl font-bold text-primary-dark mb-4">
        Get in Touch
      </h1>
      <p className="text-gray-600 mb-8">
        Have a question, an opportunity, or just want to say hi? Fill out the
        form below.
      </p>

      <ContactForm />
    </section>
  );
}
