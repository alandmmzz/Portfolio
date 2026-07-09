export type Role = {
  title: string;
  company: string;
  period: string;
  bullets: string[];
};

export const experience: Role[] = [
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
