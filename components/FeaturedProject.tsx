import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import FeaturedProject from "@/components/FeaturedProject";
import Footer from "@/components/Footer";
import { projects } from "@/content/projects";
import { profile } from "@/content/profile";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Experience />

        <section id="proyectos" className="mx-auto max-w-5xl px-6 py-24">
          <div className="mb-10 flex items-end justify-between">
            <h2 className="font-display text-2xl font-semibold text-fg sm:text-3xl">
              Proyectos
            </h2>
            <span className="font-mono text-xs text-muted">
              {String(projects.length).padStart(2, "0")} total
            </span>
          </div>
          <div className="space-y-6">
            {projects.map((project, i) => (
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
              Stack
            </h2>
            <div className="mt-8 flex flex-wrap gap-3">
              {profile.stack.map((tech) => (
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
