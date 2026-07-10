import type { Locale } from "@/i18n/routing";

export type Role = {
  title: string;
  company: string;
  period: string;
  bullets: string[];
};

const es: Role[] = [
  {
    title: "Frontend Developer / UX-UI",
    company: "Asignet",
    period: "2024 — presente",
    bullets: [
      "Desarrollo y mantenimiento de aplicaciones web con HTML, CSS y JavaScript.",
      "Construcción de componentes UI reutilizables y accesibles, validando estándares de accesibilidad.",
      "Implementación de diseños responsive con CSS y jQuery, en conjunto con equipos de Backend y Producto.",
      "Comunicación en inglés con equipos internacionales.",
      "Creación de íconos y gráficos en Adobe Illustrator para mantener consistencia visual.",
    ],
  },
  {
    title: "RPA Developer Semi-Senior",
    company: "Asignet",
    period: "2022 — presente",
    bullets: [
      "Desarrollo de soluciones de automatización para optimizar procesos de negocio.",
      "Mantenimiento y optimización de workflows automatizados.",
      "Documentación de scripts y soluciones técnicas para asegurar mantenibilidad y transferencia de conocimiento.",
    ],
  },
];

const en: Role[] = [
  {
    title: "Frontend Developer / UX-UI",
    company: "Asignet",
    period: "2024 — present",
    bullets: [
      "Developed and maintained web applications with HTML, CSS, and JavaScript.",
      "Built reusable, accessible UI components, validating accessibility standards.",
      "Implemented responsive designs with CSS and jQuery, working alongside Backend and Product teams.",
      "Communicated in English with international teams.",
      "Created icons and graphics in Adobe Illustrator to keep visual consistency.",
    ],
  },
  {
    title: "RPA Developer Semi-Senior",
    company: "Asignet",
    period: "2022 — present",
    bullets: [
      "Developed automation solutions to optimize business processes.",
      "Maintained and optimized automated workflows.",
      "Documented scripts and technical solutions to ensure maintainability and knowledge transfer.",
    ],
  },
];

export const experience: Record<Locale, Role[]> = { es, en };
