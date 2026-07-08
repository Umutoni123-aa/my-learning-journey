import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "All my blog posts on frontend, backend, and mobile development in one place.",
};

const posts = [
  {
    href: "/blog/frontend",
    title: "Frontend Development",
    excerpt: "Notes on React, Next.js, and building interfaces people enjoy using.",
  },
  {
    href: "/blog/backend",
    title: "Backend Development",
    excerpt: "APIs, databases, and the server-side logic behind the scenes.",
  },
  {
    href: "/blog/mobile",
    title: "Mobile Development",
    excerpt: "Exploring how to bring the same ideas to phones and tablets.",
  },
];

export default function BlogPage() {
  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-800 mb-4">All Posts</h2>
      <div className="grid sm:grid-cols-1 gap-4">
        {posts.map((post) => (
          <Link
            key={post.href}
            href={post.href}
            className="block p-5 rounded-lg border border-gray-200 hover:border-secondary hover:shadow-sm transition"
          >
            <h3 className="font-semibold text-primary-dark">{post.title}</h3>
            <p className="text-sm text-gray-600 mt-1">{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
