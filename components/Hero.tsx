import Image from "next/image";
import { ArrowRight, EnvelopeSimple } from "@phosphor-icons/react/dist/ssr";
import { getTranslations, getLocale } from "next-intl/server";
import StatusBar from "./StatusBar";
import { profile } from "@/content/profile";

export default async function Hero() {
  const locale = (await getLocale()) as "es" | "en";
  const t = await getTranslations("Hero");
  const p = profile[locale];

  return (
    <section className="relative overflow-hidden border-b border-line">
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]" />

      <div className="relative mx-auto grid max-w-5xl gap-12 px-6 py-24 sm:py-32 lg:grid-cols-[1fr_320px] lg:items-end lg:gap-8">
        <div>
          <StatusBar />
          <h1 className="mt-8 text-balance font-display text-4xl font-semibold leading-[1.1] tracking-tight text-fg sm:text-6xl">
            {p.tagline}
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted sm:text-lg">
            {p.bio}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#proyectos"
              className="flex items-center gap-1.5 rounded-md bg-fg px-5 py-2.5 font-mono text-sm text-bg transition-opacity hover:opacity-85"
            >
              {t("verProyectos")}
              <ArrowRight size={14} weight="bold" />
            </a>
            <a
              href={`mailto:${p.email}`}
              className="flex items-center gap-1.5 rounded-md border border-line px-5 py-2.5 font-mono text-sm text-fg transition-colors hover:border-accent hover:text-accent"
            >
              <EnvelopeSimple size={14} weight="bold" />
              {p.email}
            </a>
          </div>
        </div>

        <div className="relative hidden h-[420px] lg:block">
          <div className="absolute inset-x-[-40%] bottom-0 top-1/4 rounded-full bg-accent/10 blur-3xl" />
          <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)]">
            <Image
              src="/aland.webp"
              alt={p.name}
              fill
              className="object-contain object-bottom"
              sizes="320px"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
