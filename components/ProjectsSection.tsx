"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import FeaturedProject from "@/components/FeaturedProject";
import type { Project } from "@/content/projects";

type Filter = "all" | "personal" | "client";

export default function ProjectsSection({ projects }: { projects: Project[] }) {
  const t = useTranslations("Home");
  const [filter, setFilter] = useState<Filter>("all");
  const filteredProjects = projects.filter(
    (project) => filter === "all" || project.category === filter,
  );

  const filters: { value: Filter; label: string }[] = [
    { value: "all", label: t("filtroTodos") },
    { value: "personal", label: t("filtroPersonal") },
    { value: "client", label: t("filtroCliente") },
  ];

  return (
    <>
      <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex flex-wrap gap-2" role="group" aria-label={t("proyectosTitulo")}>
          {filters.map((item) => (
            <button
              key={item.value}
              type="button"
              onClick={() => setFilter(item.value)}
              aria-pressed={filter === item.value}
              className={`rounded-md border px-3 py-2 font-mono text-xs transition-colors ${
                filter === item.value
                  ? "border-accent bg-accent text-bg"
                  : "border-line bg-bg-elevated text-muted hover:border-accent-dim hover:text-fg"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
        <span className="font-mono text-xs text-muted">
          {t("proyectosTotal", { count: String(filteredProjects.length).padStart(2, "0") })}
        </span>
      </div>
      <div className="space-y-6">
        {filteredProjects.map((project, i) => (
          <FeaturedProject key={project.slug} project={project} reverse={i % 2 === 1} />
        ))}
      </div>
    </>
  );
}
