import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Backend Blog",
  description:
    "Notes on APIs, databases, and server-side architecture from my learning journey.",
};

export default function BackendBlogPage() {
  return (
    <article>
      <h1 className="text-2xl font-bold text-primary-dark mb-4">
        Backend Development
      </h1>
      <p className="text-gray-700 leading-relaxed mb-4">
        As a frontend developer, I don't build backend systems myself, but I
        work with them constantly — every API I consume is a window into how
        someone designed the data underneath. Understanding what a REST
        endpoint expects, and why, has made me a better frontend developer.
      </p>
      <p className="text-gray-700 leading-relaxed">
        Learning to read API documentation closely, handle error responses
        gracefully, and structure requests correctly has been one of the most
        useful "adjacent" skills I've picked up outside of pure UI work.
      </p>
    </article>
  );
}
