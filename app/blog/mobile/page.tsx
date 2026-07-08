import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobile Development Blog",
  description:
    "Exploring mobile app development and how it compares to building for the web.",
};

export default function MobileBlogPage() {
  return (
    <article>
      <h1 className="text-2xl font-bold text-primary-dark mb-4">
        Mobile Development
      </h1>
      <p className="text-gray-700 leading-relaxed mb-4">
        I focus on frontend web development, but I like keeping an eye on
        mobile because so many of the same principles carry over — responsive
        layouts, component reuse, and clean state management all show up
        again, just under different screen constraints.
      </p>
      <p className="text-gray-700 leading-relaxed">
        It's not an area I build in day-to-day, but understanding how mobile
        interfaces think about space and touch has made me more thoughtful
        about responsive design on the web.
      </p>
    </article>
  );
}
