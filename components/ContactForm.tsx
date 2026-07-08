"use client";

import { useState, FormEvent } from "react";
import Button from "@/components/Button";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");
  const [name, setName] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // In a real app this is where you'd call an API or send an email.
    // For this assignment, we just confirm the message was "sent".
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div className="p-6 rounded-lg bg-primary/10 border border-primary/20 text-center">
        <p className="text-primary-dark font-semibold text-lg">
          Thanks{name ? `, ${name}` : ""}! Your message has been sent.
        </p>
        <p className="text-gray-600 text-sm mt-1">
          I'll get back to you as soon as I can.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-4 text-sm text-secondary hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Your message..."
          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      <Button type="submit">Send Message</Button>
    </form>
  );
}
