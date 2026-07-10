"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { profile } from "@/content/profile";

export default function Nav() {
  const locale = useLocale() as "es" | "en";
  const t = useTranslations("Nav");
  const pathname = usePathname();
  const p = profile[locale];

  const links = [
    { hash: "experiencia", label: t("experiencia") },
    { hash: "proyectos", label: t("proyectos") },
    { hash: "stack", label: t("stack") },
    { hash: "contacto", label: t("contacto") },
  ];

  const otherLocale = locale === "es" ? "en" : "es";

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-display text-sm font-semibold tracking-tight text-fg"
        >
          {p.name}
        </Link>
        <nav className="flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.hash}
              href={{ pathname: "/", hash: link.hash }}
              className="font-mono text-xs uppercase tracking-wider text-muted transition-colors hover:text-fg"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={pathname}
            locale={otherLocale}
            className="rounded-md border border-line px-2.5 py-1 font-mono text-xs uppercase tracking-wider text-muted transition-colors hover:border-accent hover:text-accent"
          >
            {otherLocale}
          </Link>
        </nav>
      </div>
    </header>
  );
}
