import { getTranslations, getLocale } from "next-intl/server";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import FeaturedProject from "@/components/FeaturedProject";
import Footer from "@/components/Footer";
import { projects } from "@/content/projects";
import { profile } from "@/content/profile";

export default async function Home() {
  const locale = (await getLocale()) as "es" | "en";
  const t = await getTranslations("Home");
  const localeProjects = projects[locale];
  const p = profile[locale];

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Experience />

        <section id="proyectos" className="mx-auto max-w-5xl px-6 py-24">
          <div className="mb-10 flex items-end justify-between">
            <h2 className="font-display text-2xl font-semibold text-fg sm:text-3xl">
              {t("proyectosTitulo")}
            </h2>
            <span className="font-mono text-xs text-muted">
              {t("proyectosTotal", {
                count: String(localeProjects.length).padStart(2, "0"),
              })}
            </span>
          </div>
          <div className="space-y-6">
            {localeProjects.map((project, i) => (
              <FeaturedProject
                key={project.slug}
                project={project}
                reverse={i % 2 === 1}
              />
            ))}
          </div>
        </section>

        <section id="stack" className="border-t border-line">
          <div className="mx-auto max-w-5xl px-6 py-24">
            <h2 className="font-display text-2xl font-semibold text-fg sm:text-3xl">
              {t("stackTitulo")}
            </h2>
            <div className="mt-8 flex flex-wrap gap-3">
              {p.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-line bg-bg-elevated px-4 py-2 font-mono text-sm text-fg"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
