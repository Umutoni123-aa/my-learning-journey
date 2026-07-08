import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200">
      <nav className="max-w-5xl mx-auto flex items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="text-lg font-semibold text-primary-dark">
          My Learning Journey
        </Link>

        <ul className="flex items-center gap-4 sm:gap-6 text-sm sm:text-base">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-gray-700 hover:text-secondary transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
