import Link from "next/link";
import { profile } from "@/content/profile";

const links = [
  { href: "/#experiencia", label: "Experiencia" },
  { href: "/#proyectos", label: "Proyectos" },
  { href: "/#stack", label: "Stack" },
  { href: "/#contacto", label: "Contacto" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-display text-sm font-semibold tracking-tight text-fg"
        >
          {profile.name}
        </Link>
        <nav className="flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-mono text-xs uppercase tracking-wider text-muted transition-colors hover:text-fg"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
