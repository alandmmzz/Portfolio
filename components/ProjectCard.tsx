import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, GithubLogo, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import type { Project } from "@/content/projects";

const statusLabel: Record<Project["status"], string> = {
  live: "live",
  "en curso": "en curso",
  archivado: "archivado",
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group overflow-hidden rounded-lg border border-line bg-bg-elevated transition-colors hover:border-accent-dim">
      <Link href={`/proyectos/${project.slug}`} className="block">
        <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden border-b border-line bg-bg">
          {project.cover ? (
            <Image
              src={project.cover}
              alt={`Captura de ${project.title}`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          ) : (
            <span className="font-mono text-xs text-muted">sin capturas todavía</span>
          )}
        </div>
        <div className="p-5 pb-4">
          <div className="flex items-center justify-between gap-3">
            <h3 className="font-display text-lg font-semibold text-fg">
              {project.title}
            </h3>
            <span className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-muted">
              <span
                className={`h-1.5 w-1.5 rounded-full ${
                  project.status === "live" ? "bg-accent" : "bg-muted"
                }`}
              />
              {statusLabel[project.status]}
            </span>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            {project.summary}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.stack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="rounded border border-line px-2 py-0.5 font-mono text-[11px] text-muted"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Link>

      <div className="flex items-center gap-4 border-t border-line px-5 py-3">
        <Link
          href={`/proyectos/${project.slug}`}
          className="flex items-center gap-1 font-mono text-xs text-muted transition-colors hover:text-fg"
        >
          Ver más
          <ArrowRight size={13} weight="bold" />
        </Link>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="ml-auto flex items-center gap-1 font-mono text-xs text-muted transition-colors hover:text-accent"
          >
            <ArrowUpRight size={14} weight="bold" />
            Sitio
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
            Código
          </a>
        )}
      </div>
    </div>
  );
}
