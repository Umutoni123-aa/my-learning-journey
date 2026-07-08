import Link from "next/link";

const categories = [
  { href: "/blog", label: "All Posts" },
  { href: "/blog/frontend", label: "Frontend" },
  { href: "/blog/backend", label: "Backend" },
  { href: "/blog/mobile", label: "Mobile Development" },
];

export default function BlogSidebar() {
  return (
    <aside className="w-full sm:w-48 shrink-0 border-b sm:border-b-0 sm:border-r border-gray-200 pb-4 sm:pb-0 sm:pr-6">
      <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
        Categories
      </h2>
      <ul className="flex flex-row flex-wrap sm:flex-col gap-2 sm:gap-1">
        {categories.map((cat) => (
          <li key={cat.href}>
            <Link
              href={cat.href}
              className="block text-gray-700 hover:text-secondary text-sm py-1 transition-colors"
            >
              {cat.label}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
