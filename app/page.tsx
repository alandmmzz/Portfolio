import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import ProjectCard from "@/components/ProjectCard";
import FeaturedProject from "@/components/FeaturedProject";
import Footer from "@/components/Footer";
import { projects } from "@/content/projects";
import { profile } from "@/content/profile";

export default function Home() {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

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
          {featured && <FeaturedProject project={featured} />}
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {rest.map((project) => (
              <ProjectCard key={project.slug} project={project} />
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
