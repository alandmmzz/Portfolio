import Image from "next/image";
import { getTranslations, getLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { ArrowUpRight, GithubLogo, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import type { Project } from "@/content/projects";

export default async function FeaturedProject({
  project,
  reverse = false,
}: {
  project: Project;
  reverse?: boolean;
}) {
  const locale = await getLocale();
  const t = await getTranslations("FeaturedProject");

  return (
    <div className="group grid overflow-hidden rounded-lg border border-line bg-bg-elevated transition-colors hover:border-accent-dim md:grid-cols-2">
      <Link
        href={`/proyectos/${project.slug}`}
        className={`block ${reverse ? "md:order-2" : ""}`}
      >
        <div className="relative aspect-[16/10] overflow-hidden border-b border-line bg-bg md:aspect-auto md:h-full md:border-b-0 md:border-r">
          {project.cover && (
            <Image
              src={project.cover}
              alt={`${locale === "es" ? "Captura de" : "Screenshot of"} ${project.title}`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              sizes="(min-width: 768px) 50vw, 100vw"
              priority
            />
          )}
        </div>
      </Link>
      <div className="flex flex-col justify-center p-6 sm:p-8">
        <span className="font-mono text-[11px] uppercase tracking-wider text-accent">
          {t("destacado")}
        </span>
        <Link href={`/proyectos/${project.slug}`}>
          <h3 className="mt-3 font-display text-2xl font-semibold text-fg sm:text-3xl">
            {project.title}
          </h3>
        </Link>
        <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
          {project.summary}
        </p>
        {project.highlights && (
          <ul className="mt-5 space-y-1.5">
            {project.highlights.slice(0, 3).map((h) => (
              <li
                key={h}
                className="text-sm leading-relaxed text-muted before:mr-2 before:text-accent before:content-['—']"
              >
                {h}
              </li>
            ))}
          </ul>
        )}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded border border-line px-2 py-0.5 font-mono text-[11px] text-muted"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-5">
          <Link
            href={`/proyectos/${project.slug}`}
            className="flex items-center gap-1 font-mono text-xs text-muted transition-colors hover:text-fg"
          >
            {t("verMas")}
            <ArrowRight size={13} weight="bold" />
          </Link>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 font-mono text-xs text-muted transition-colors hover:text-accent"
            >
              <ArrowUpRight size={14} weight="bold" />
              {t("sitio")}
            </a>
          )}
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 font-mono text-xs text-muted transition-colors hover:text-fg"
            >
              <GithubLogo size={14} weight="bold" />
              {t("codigo")}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
