"use client";

import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { profile } from "@/content/profile";

export default function StatusBar() {
  const [time, setTime] = useState<string | null>(null);
  const locale = useLocale() as "es" | "en";
  const t = useTranslations("StatusBar");
  const p = profile[locale];

  useEffect(() => {
    const timeLocale = locale === "es" ? "es-UY" : "en-US";
    const update = () =>
      setTime(
        new Date().toLocaleTimeString(timeLocale, {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "America/Montevideo",
        })
      );
    update();
    const id = setInterval(update, 1000 * 30);
    return () => clearInterval(id);
  }, [locale]);

  return (
    <div className="inline-flex items-center gap-3 rounded-full border border-line bg-bg-elevated px-4 py-1.5 font-mono text-xs text-muted">
      <span className="relative flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
      </span>
      <span>{t("disponible")}</span>
      <span className="text-line">·</span>
      <span>{p.location}</span>
      {time && (
        <>
          <span className="text-line">·</span>
          <span suppressHydrationWarning>{time}</span>
        </>
      )}
    </div>
  );
}
