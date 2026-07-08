import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frontend Blog",
  description:
    "Thoughts and lessons learned building frontend interfaces with React and Next.js.",
};

export default function FrontendBlogPage() {
  return (
    <article>
      <h1 className="text-2xl font-bold text-primary-dark mb-4">
        Frontend Development
      </h1>
      <p className="text-gray-700 leading-relaxed mb-4">
        Frontend work is where an idea becomes something people can actually
        touch. Lately I've been deepening my understanding of component-based
        architecture — thinking in reusable pieces rather than one giant page.
      </p>
      <p className="text-gray-700 leading-relaxed">
        Tools like Tailwind CSS have made styling faster without losing
        control, and the App Router in Next.js has changed how I think about
        layouts, routing, and rendering.
      </p>
    </article>
  );
}
