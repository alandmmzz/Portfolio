import type { Locale } from "@/i18n/routing";

export type Profile = {
  name: string;
  role: string;
  location: string;
  tagline: string;
  bio: string;
  email: string;
  links: {
    github: string;
    linkedin: string;
  };
  education: {
    degree: string;
    school: string;
    period: string;
  }[];
  languages: {
    name: string;
    level: string;
  }[];
  stack: string[];
};

const es: Profile = {
  name: "Aland Martinez",
  role: "Frontend Developer",
  location: "Montevideo, UY",
  tagline: "Construyo interfaces claras y rápidas, del wireframe al deploy.",
  bio: "Frontend developer con experiencia construyendo aplicaciones web modernas y responsive con React, JavaScript y Tailwind CSS. Me interesa crear interfaces limpias, componentes reutilizables y buenas experiencias de usuario.",
  email: "alandmmzz@gmail.com",
  links: {
    github: "https://github.com/alandmmzz",
    linkedin: "https://www.linkedin.com/in/aland-martinez/",
  },
  education: [
    {
      degree: "Ingeniería en Computación",
      school: "Universidad de la República (UdelaR)",
      period: "2021 — presente",
    },
    {
      degree: "Tecnólogo en Informática",
      school: "Instituto Tecnológico Superior de Buceo",
      period: "2026 — presente",
    },
    {
      degree: "Analista Genexus Jr.",
      school: "Jóvenes a Programar, Plan Ceibal",
      period: "2021",
    },
  ],
  languages: [
    { name: "Español", level: "Nativo" },
    { name: "Inglés", level: "Intermedio-avanzado" },
  ],
  stack: [
    "React",
    "TypeScript",
    "JavaScript",
    "HTML5 & CSS3",
    "Tailwind CSS",
    "SASS",
    "Bootstrap",
    "Figma",
    "Git",
  ],
};

const en: Profile = {
  ...es,
  tagline: "I build clear, fast interfaces, from wireframe to deploy.",
  bio: "Frontend developer with experience building modern, responsive web apps with React, JavaScript, and Tailwind CSS. I care about clean interfaces, reusable components, and good user experiences.",
  education: [
    {
      degree: "Computer Engineering",
      school: "Universidad de la República (UdelaR)",
      period: "2021 — present",
    },
    {
      degree: "IT Technologist",
      school: "Instituto Tecnológico Superior de Buceo",
      period: "2026 — present",
    },
    {
      degree: "Jr. Genexus Analyst",
      school: "Jóvenes a Programar, Plan Ceibal",
      period: "2021",
    },
  ],
  languages: [
    { name: "Spanish", level: "Native" },
    { name: "English", level: "Upper-intermediate" },
  ],
};

export const profile: Record<Locale, Profile> = { es, en };
