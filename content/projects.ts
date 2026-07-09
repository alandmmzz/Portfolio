export type Project = {
  slug: string;
  title: string;
  year: string;
  role: string;
  summary: string;
  description: string;
  highlights?: string[];
  stack: string[];
  link?: string;
  repo?: string;
  cover?: string;
  images: string[];
  status: "live" | "en curso" | "archivado";
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "coffee-lovers",
    title: "Coffee Lovers",
    year: "2026",
    role: "Proyecto personal · full-stack",
    summary:
      "App de catación de café con perfiles, grupos privados, feed social y notificaciones push.",
    description:
      "Ficha de catación de café: registrás cada café que probás (marca, tueste, método de preparación) y lo valorás en atributos sensoriales — aroma, acidez, dulzor, cuerpo, amargor, retrogusto y balance. Login con GitHub o Google, catálogo compartido de cafés, grupos privados para compartir tu historial con quien quieras, feed cronológico, reacciones y comentarios, notificaciones push, PWA instalable en el celular y una calculadora de prensa francesa que ajusta proporciones según intensidad y cantidad de tazas.",
    highlights: [
      "Auth con GitHub/Google (NextAuth) y perfiles con estadísticas propias",
      "Grupos como círculos de privacidad, no contenedores de reviews",
      "Feed social con reacciones, comentarios y notificaciones push (incluso con la app cerrada)",
      "PWA instalable, con banners de instalación y de notificaciones solo en mobile",
      "Calculadora de café standalone, con inventario de prensas y reparto automático",
      "Paneles de admin para catálogo de cafés, logos de marca y usuarios",
    ],
    stack: ["Next.js", "PostgreSQL", "NextAuth", "Web Push", "PWA"],
    link: "https://real-coffee-lovers.vercel.app/",
    repo: "https://github.com/alandmmzz/coffee-lovers",
    cover: "/projects/coffee-lovers/1.png",
    images: [
      "/projects/coffee-lovers/1.png",
      "/projects/coffee-lovers/2.png",
      "/projects/coffee-lovers/3.png",
    ],
    status: "en curso",
    featured: true,
  },
  {
    slug: "game-crm",
    title: "Game CRM",
    year: "2026",
    role: "Proyecto personal · full-stack",
    summary:
      "App social para seguir qué juegan tus amigos: horas, progreso y compatibilidad de perfiles.",
    description:
      "Una app para hacer seguimiento de los juegos de tus amigos: qué están jugando, cuántas horas llevan y qué patrones hay entre distintos perfiles. Importa automáticamente desde Steam (juegos, horas, logros) y se puede vincular con World of Warcraft (personaje, ilvl, progreso de raid). Un rol de jugador se genera con IA en base a los géneros más jugados, con un gráfico radar de géneros e insights de compatibilidad con amigos — incluye un 'GameFinder' estilo Tinder con recomendaciones personalizadas.",
    highlights: [
      "Importación automática desde Steam (juegos, horas, logros) y vínculo con World of Warcraft",
      "Rol de jugador e insights generados con la API de Claude en base a géneros jugados",
      "GameFinder estilo Tinder con recomendaciones personalizadas entre amigos",
      "Perfiles públicos con auth GitHub/Google, mobile-first con bottom bar estilo iOS",
    ],
    stack: ["Next.js", "Supabase", "Tailwind CSS", "Claude API", "Steam API"],
    link: "https://gamecrm.vercel.app/",
    repo: "https://github.com/alandmmzz/gamecrm",
    cover: "/projects/game-crm/1.png",
    images: ["/projects/game-crm/1.png", "/projects/game-crm/2.png"],
    status: "en curso",
  },
];
