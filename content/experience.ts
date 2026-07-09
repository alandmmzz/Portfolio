export type Role = {
  title: string;
  company: string;
  period: string;
  bullets: string[];
};

export const experience: Role[] = [
  {
    title: "Frontend Developer",
    company: "Asignet",
    period: "2025 — presente",
    bullets: [
      "Desarrollo y mantenimiento de aplicaciones web con React y JavaScript.",
      "Construcción de componentes UI reutilizables y accesibles.",
      "Implementación de diseños responsive con Tailwind CSS.",
      "Integración con APIs REST y manejo de estado de la aplicación.",
    ],
  },
  {
    title: "RPA Developer",
    company: "Asignet",
    period: "2023 — 2025",
    bullets: [
      "Desarrollo de soluciones de automatización para optimizar procesos.",
      "Integración de sistemas internos y APIs.",
      "Análisis de requerimientos y propuesta de soluciones eficientes.",
    ],
  },
];
