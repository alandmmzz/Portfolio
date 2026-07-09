# Portfolio

Next.js + TypeScript + Tailwind v4. Minimalista, estilo Vercel/v0.

## Correr en local

```bash
npm install
npm run dev
```

## Cómo agregar un proyecto nuevo

1. Creá una carpeta con imágenes en `public/projects/<slug>/` (ej: `public/projects/mi-app/1.png`).
2. Sumá un objeto al array en `content/projects.ts`:

```ts
{
  slug: "mi-app",
  title: "Mi App",
  year: "2026",
  role: "Front-End",
  summary: "Una línea corta para la card.",
  description: "Párrafo más largo para la página de detalle.",
  stack: ["Next.js", "TypeScript"],
  link: "https://mi-app.com", // opcional
  cover: "/projects/mi-app/1.png",
  images: ["/projects/mi-app/1.png", "/projects/mi-app/2.png"],
  status: "live", // "live" | "en curso" | "archivado"
}
```

Con eso alcanza — la home y la página de detalle (`/proyectos/[slug]`) se generan solas.

## Editar tus datos personales

Todo en `content/profile.ts`: nombre, bio, mail, links de GitHub/LinkedIn y stack.

⚠️ Antes de deployar: revisá `content/profile.ts`, hay dos `TODO` (mail y URL de LinkedIn) para confirmar con tus datos reales.

## Deploy

Conectá el repo en [vercel.com/new](https://vercel.com/new) y deployá — no requiere variables de entorno.
