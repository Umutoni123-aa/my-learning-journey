import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about my background, my software engineering studies, and the goals driving my learning journey.",
};

export default function AboutPage() {
  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-3xl sm:text-4xl font-bold text-primary-dark mb-6">
        About Me
      </h1>

      <p className="text-gray-700 leading-relaxed mb-4">
        I'm a second-year Software Engineering student and a frontend
        developer. My journey so far has centered on building interfaces —
        turning designs and APIs into interfaces people actually enjoy using,
        alongside the software engineering theory that supports it.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        I care about building things that are clean, usable, and genuinely
        helpful — whether that's a storefront, a wellness platform, or a small
        tool that solves a real problem. I enjoy going deep on the frontend:
        component design, state management, and connecting to real APIs.
      </p>

      <h2 className="text-xl font-semibold text-primary-dark mt-10 mb-3">
        My Goals
      </h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Become a confident, skilled frontend developer.</li>
        <li>Build products that matter to the communities I'm part of.</li>
        <li>Keep learning — one project, one concept at a time.</li>
      </ul>
    </section>
  );
}
