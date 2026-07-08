import Link from "next/link";

const tabs = [
  { href: "/blog/frontend", label: "Frontend" },
  { href: "/blog/backend", label: "Backend" },
  { href: "/blog/mobile", label: "Mobile" },
];

export default function BlogNav() {
  return (
    <nav className="flex gap-4 border-b border-gray-200 px-4 sm:px-6 py-3 text-sm">
      {tabs.map((tab) => (
        <Link
          key={tab.href}
          href={tab.href}
          className="text-gray-600 hover:text-primary font-medium transition-colors"
        >
          {tab.label}
        </Link>
      ))}
    </nav>
  );
}
