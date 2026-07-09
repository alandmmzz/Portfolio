"use client";

import { useEffect, useState } from "react";
import { profile } from "@/content/profile";

export default function StatusBar() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const update = () =>
      setTime(
        new Date().toLocaleTimeString("es-UY", {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "America/Montevideo",
        })
      );
    update();
    const id = setInterval(update, 1000 * 30);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="inline-flex items-center gap-3 rounded-full border border-line bg-bg-elevated px-4 py-1.5 font-mono text-xs text-muted">
      <span className="relative flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
      </span>
      <span>disponible para proyectos</span>
      <span className="text-line">·</span>
      <span>{profile.location}</span>
      {time && (
        <>
          <span className="text-line">·</span>
          <span suppressHydrationWarning>{time}</span>
        </>
      )}
    </div>
  );
}
