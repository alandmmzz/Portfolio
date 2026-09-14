import type { Locale } from "@/i18n/routing";

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
  category: "personal" | "client";
  featured?: boolean;
};

const es: Project[] = [
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
    category: "personal",
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
    category: "personal",
    cover: "/projects/game-crm/1.png",
    images: ["/projects/game-crm/1.png", "/projects/game-crm/2.png"],
    status: "en curso",
  },
  {
    slug: "luma-centro-estetico",
    title: "LUMA Centro Estético",
    year: "2026",
    role: "Proyecto para cliente · full-stack",
    summary:
      "Presencia digital editorial para un centro estético, con servicios, reservas online y gestión de turnos.",
    description:
      "Landing responsive para LUMA Centro Estético, con una identidad visual cálida y editorial, catálogo administrable de tratamientos, reservas online con validación de disponibilidad, pagos opcionales y panel para gestionar turnos, horarios y equipo.",
    highlights: [
      "Landing editorial responsive con SEO técnico y datos estructurados",
      "Catálogo de servicios y tratamientos administrable",
      "Reserva online con control de disponibilidad y prevención de solapamientos",
      "Panel administrativo, emails transaccionales y pagos opcionales",
    ],
    stack: ["Next.js", "PostgreSQL", "Drizzle ORM", "Better Auth", "Resend"],
    link: "https://www.luma.com.uy/",
    repo: "https://github.com/alandmmzz/LumaCentroEstetico",
    category: "client",
    cover: "/projects/luma/1.png",
    images: ["/projects/luma/1.png"],
    status: "live",
  },
  {
    slug: "pequenido",
    title: "Peque Nido",
    year: "2026",
    role: "Proyecto para cliente · ecommerce",
    summary:
      "Tienda online de juguetes y libros para bebés, con catálogo, carrito, checkout y panel de administración.",
    description:
      "Ecommerce para Peque Nido, con catálogo de juguetes y libros para primera infancia, fichas de producto con galería y video, carrito persistente, checkout con Mercado Pago o transferencia, zonas de envío configurables y gestión integral de productos y pedidos.",
    highlights: [
      "Catálogo filtrable por edad recomendada y categoría",
      "Carrito persistente y checkout con dos métodos de pago",
      "Precios promocionales y productos relacionados",
      "Panel administrativo para productos, pedidos y envíos",
    ],
    stack: ["Next.js", "PostgreSQL", "Drizzle ORM", "Mercado Pago", "Vercel Blob"],
    link: "https://www.pequenido.com.uy/",
    repo: "https://github.com/alandmmzz/PequeNido",
    category: "client",
    cover: "/projects/pequenido/1.png",
    images: ["/projects/pequenido/1.png"],
    status: "live",
  },
  {
    slug: "corte-fino",
    title: "Corte Fino",
    year: "2026",
    role: "Proyecto para cliente · web app",
    summary:
      "Experiencia web para un estudio de barbería y cuidado masculino, con foco en marca y conversión.",
    description:
      "Sitio web para Corte Fino, pensado para presentar la marca, comunicar sus servicios y convertir visitas en reservas desde una experiencia clara y mobile-first.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    link: "https://corte-fino-flame.vercel.app/",
    repo: "https://github.com/alandmmzz/CorteFino",
    category: "client",
    images: [],
    status: "live",
  },
];

const en: Project[] = [
  {
    slug: "coffee-lovers",
    title: "Coffee Lovers",
    year: "2026",
    role: "Personal project · full-stack",
    summary:
      "Coffee-tasting app with profiles, private groups, a social feed, and push notifications.",
    description:
      "A coffee-tasting log: record every coffee you try (brand, roast, brewing method) and rate it across sensory attributes — aroma, acidity, sweetness, body, bitterness, aftertaste, and balance. Sign in with GitHub or Google, a shared coffee catalog, private groups to share your history with whoever you choose, a chronological feed with reactions and comments, push notifications, an installable PWA, and a French press calculator that adjusts ratios based on strength and number of cups.",
    highlights: [
      "GitHub/Google auth (NextAuth) with profiles and personal stats",
      "Groups act as privacy circles, not review containers",
      "Social feed with reactions, comments, and push notifications (even with the app closed)",
      "Installable PWA with install and notification banners on mobile only",
      "Standalone coffee calculator with a press inventory and automatic dosing",
      "Admin panels for the coffee catalog, brand logos, and users",
    ],
    stack: ["Next.js", "PostgreSQL", "NextAuth", "Web Push", "PWA"],
    link: "https://real-coffee-lovers.vercel.app/",
    repo: "https://github.com/alandmmzz/coffee-lovers",
    category: "personal",
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
    role: "Personal project · full-stack",
    summary:
      "Social app to track what your friends are playing: hours, progress, and profile compatibility.",
    description:
      "An app to track your friends' games: what they're playing, how many hours they've put in, and what patterns show up across different profiles. It auto-imports from Steam (games, hours, achievements) and can link with World of Warcraft (character, ilvl, raid progress). A player role is generated with AI based on most-played genres, with a genre radar chart and friend-compatibility insights — including a Tinder-style 'GameFinder' with personalized recommendations.",
    highlights: [
      "Automatic import from Steam (games, hours, achievements) and World of Warcraft linking",
      "Player role and insights generated with the Claude API based on played genres",
      "Tinder-style GameFinder with personalized recommendations between friends",
      "Public profiles with GitHub/Google auth, mobile-first with an iOS-style bottom bar",
    ],
    stack: ["Next.js", "Supabase", "Tailwind CSS", "Claude API", "Steam API"],
    link: "https://gamecrm.vercel.app/",
    repo: "https://github.com/alandmmzz/gamecrm",
    category: "personal",
    cover: "/projects/game-crm/1.png",
    images: ["/projects/game-crm/1.png", "/projects/game-crm/2.png"],
    status: "en curso",
  },
  {
    slug: "luma-centro-estetico",
    title: "LUMA Centro Estético",
    year: "2026",
    role: "Client project · full-stack",
    summary:
      "Editorial digital presence for a beauty center, with services, online booking, and appointment management.",
    description:
      "Responsive website for LUMA Centro Estético, with a warm editorial identity, an admin-managed treatment catalog, online booking with availability validation, optional payments, and a dashboard for appointments, schedules, and team members.",
    highlights: [
      "Responsive editorial landing page with technical SEO and structured data",
      "Admin-managed services and treatments catalog",
      "Online booking with availability control and overlap prevention",
      "Admin dashboard, transactional emails, and optional payments",
    ],
    stack: ["Next.js", "PostgreSQL", "Drizzle ORM", "Better Auth", "Resend"],
    link: "https://www.luma.com.uy/",
    repo: "https://github.com/alandmmzz/LumaCentroEstetico",
    category: "client",
    cover: "/projects/luma/1.png",
    images: ["/projects/luma/1.png"],
    status: "live",
  },
  {
    slug: "pequenido",
    title: "Peque Nido",
    year: "2026",
    role: "Client project · ecommerce",
    summary:
      "Online store for baby toys and books, with catalog, cart, checkout, and an admin dashboard.",
    description:
      "Ecommerce platform for Peque Nido, with a catalog of toys and books for early childhood, product galleries and video, a persistent cart, checkout with Mercado Pago or bank transfer, configurable shipping zones, and full product and order management.",
    highlights: [
      "Catalog filterable by recommended age and category",
      "Persistent cart and checkout with two payment methods",
      "Promotional pricing and related products",
      "Admin dashboard for products, orders, and shipping",
    ],
    stack: ["Next.js", "PostgreSQL", "Drizzle ORM", "Mercado Pago", "Vercel Blob"],
    link: "https://www.pequenido.com.uy/",
    repo: "https://github.com/alandmmzz/PequeNido",
    category: "client",
    cover: "/projects/pequenido/1.png",
    images: ["/projects/pequenido/1.png"],
    status: "live",
  },
  {
    slug: "corte-fino",
    title: "Corte Fino",
    year: "2026",
    role: "Personal project · web app",
    summary:
      "Web experience for a barbershop focused on brand presence, services, and conversion.",
    description:
      "Website for Corte Fino, designed to present the brand, communicate its services, and turn visits into bookings through a clear, mobile-first experience.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    link: "https://corte-fino-flame.vercel.app/",
    repo: "https://github.com/alandmmzz/CorteFino",
    category: "client",
    images: [],
    status: "live",
  },
];

export const projects: Record<Locale, Project[]> = { es, en };
