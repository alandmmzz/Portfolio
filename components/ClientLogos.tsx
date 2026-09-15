import Image from "next/image";
import { getTranslations } from "next-intl/server";

const clients = [
  { name: "LUMA", src: "/client-logos/luma.png", className: "h-10 w-auto" },
  { name: "Peque Nido", src: "/client-logos/pequenido.png", className: "h-16 w-16" },
  { name: "Corte Fino", src: "/client-logos/corte-fino.png", className: "h-10 w-auto" },
];

export default async function ClientLogos() {
  const t = await getTranslations("Home");

  return (
    <section aria-labelledby="client-logos-title" className="border-y border-line">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-6 py-12 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-xs">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
            {t("clientesEyebrow")}
          </p>
          <h2 id="client-logos-title" className="mt-2 font-display text-xl font-semibold text-fg">
            {t("clientesTitulo")}
          </h2>
        </div>
        <div className="flex flex-wrap items-center gap-8 sm:gap-10" aria-label={t("clientesTitulo")}>
          {clients.map((client) => (
            <div key={client.name} className="flex h-16 min-w-24 items-center justify-center opacity-75 grayscale transition-all hover:opacity-100 hover:grayscale-0">
              <Image src={client.src} alt={client.name} width={200} height={80} className={`${client.className} object-contain`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
