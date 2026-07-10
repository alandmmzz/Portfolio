import Image from "next/image";
import { notFound } from "next/navigation";
import { getTranslations, getLocale } from "next-intl/server";
import { ArrowLeft, ArrowUpRight, GithubLogo } from "@phosphor-icons/react/dist/ssr";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { projects } from "@/content/projects";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    projects[locale].map((project) => ({ locale, slug: project.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const project = projects[locale as "es" | "en"].find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { slug } = await params;
  const locale = (await getLocale()) as "es" | "en";
  const t = await getTranslations("ProjectPage");
  const project = projects[locale].find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <>
      <Nav />
      <main>
        <section className="border-b border-line">
          <div className="mx-auto max-w-5xl px-6 py-16">
            <Link
              href={{ pathname: "/", hash: "proyectos" }}
              className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-muted transition-colors hover:text-fg"
            >
              <ArrowLeft size={13} weight="bold" />
              {t("volver")}
            </Link>
            <div className="mt-6 flex flex-wrap items-start justify-between gap-6">
              <div>
                <h1 className="font-display text-3xl font-semibold text-fg sm:text-4xl">
                  {project.title}
                </h1>
                <p className="mt-2 font-mono text-sm text-muted">
                  {project.role} · {project.year}
                </p>
              </div>
              <div className="flex shrink-0 flex-wrap gap-3">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 rounded-md border border-line px-4 py-2 font-mono text-sm text-fg transition-colors hover:border-accent hover:text-accent"
                  >
                    <ArrowUpRight size={15} weight="bold" />
                    {t("verSitio")}
                  </a>
                )}
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 rounded-md border border-line px-4 py-2 font-mono text-sm text-fg transition-colors hover:border-accent hover:text-accent"
                  >
                    <GithubLogo size={15} weight="bold" />
                    {t("codigo")}
                  </a>
                )}
              </div>
            </div>
            <p className="mt-6 max-w-2xl text-pretty leading-relaxed text-muted">
              {project.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded border border-line px-2.5 py-1 font-mono text-xs text-muted"
                >
                  {tech}
                </span>
              ))}
            </div>
            {project.highlights && (
              <ul className="mt-8 max-w-2xl space-y-2 border-t border-line pt-8">
                {project.highlights.map((h) => (
                  <li
                    key={h}
                    className="text-sm leading-relaxed text-muted before:mr-2 before:text-accent before:content-['—']"
                  >
                    {h}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>

        {project.images.length > 0 && (
        <section className="mx-auto max-w-5xl px-6 py-16">
          <div className="grid gap-6">
            {project.images.map((src, i) => (
              <div
                key={src}
                className="relative aspect-video overflow-hidden rounded-lg border border-line bg-bg-elevated"
              >
                <Image
                  src={src}
                  alt={`${project.title} — ${t("captura")} ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority={i === 0}
                />
              </div>
            ))}
          </div>
        </section>
        )}
      </main>
      <Footer />
    </>
  );
}
