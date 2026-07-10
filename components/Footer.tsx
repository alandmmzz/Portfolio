import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react/dist/ssr";
import { getTranslations, getLocale } from "next-intl/server";
import { profile } from "@/content/profile";

export default async function Footer() {
  const locale = (await getLocale()) as "es" | "en";
  const t = await getTranslations("Footer");
  const p = profile[locale];

  return (
    <footer id="contacto" className="border-t border-line">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <div>
            <h2 className="font-display text-2xl font-semibold text-fg">
              {t("titulo")}
            </h2>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">
              {t("subtitulo")}
            </p>
          </div>
          <a
            href={`mailto:${p.email}`}
            className="shrink-0 rounded-md bg-fg px-5 py-2.5 font-mono text-sm text-bg transition-opacity hover:opacity-85"
          >
            {p.email}
          </a>
        </div>
        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-line pt-6 font-mono text-xs text-muted sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} {p.name}</span>
          <div className="flex gap-5">
            <a
              href={p.links.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 transition-colors hover:text-fg"
            >
              <GithubLogo size={15} weight="bold" />
              {t("github")}
            </a>
            <a
              href={p.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 transition-colors hover:text-fg"
            >
              <LinkedinLogo size={15} weight="bold" />
              {t("linkedin")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
