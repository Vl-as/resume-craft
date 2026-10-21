import Link from "next/link";

const navLinks = [
  {
    label: "Templates",
    href: "#templates",
  },
  {
    label: "Features",
    href: "#features",
  },
];

interface NavBarProps {
  className?: string;
}

function NavBar({ className }: NavBarProps) {
  return (
    <nav className={className}>
      <ul className="flex items-center gap-8 text-sm font-medium text-[var(--text-muted)]">
        {navLinks.map(({ label, href }) => (
          <li key={href}>
            <Link
              className="group relative inline-flex rounded-sm py-2 text-[var(--text-muted)] transition-colors duration-200 hover:text-[var(--accent-strong)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
              href={href}
            >
              {label}
              <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 rounded-full bg-[var(--accent)] transition-transform duration-200 group-hover:scale-x-100" />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
