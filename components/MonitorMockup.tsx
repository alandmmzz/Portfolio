import Image from "next/image";

export default function MonitorMockup({
  src,
  alt,
  emptyLabel,
  priority = false,
}: {
  src?: string;
  alt: string;
  emptyLabel?: string;
  priority?: boolean;
}) {
  return (
    <div className="relative mx-auto w-full select-none">
      {/* Monitor body */}
      <div
        className="relative rounded-[14px] bg-gradient-to-b from-[#3a3a3f] via-[#232326] to-[#131315] p-[3px] shadow-[0_1px_0_rgba(255,255,255,0.08)_inset,0_20px_40px_-15px_rgba(0,0,0,0.6)] ring-1 ring-black/50"
        style={{ boxShadow: "0 1px 0 rgba(255,255,255,0.08) inset, 0 24px 48px -16px rgba(0,0,0,0.55)" }}
      >
        <div className="rounded-[11px] bg-gradient-to-b from-[#18181a] to-[#0c0c0d] p-2.5 sm:p-3">
          {/* Camera dot */}
          <div className="absolute left-1/2 top-[9px] h-[3px] w-[3px] -translate-x-1/2 rounded-full bg-black/70 ring-1 ring-white/5" />
          {/* Screen */}
          <div className="relative overflow-hidden rounded-[3px] bg-black">
            {/* Browser chrome */}
            <div className="flex h-5 items-center gap-1.5 bg-[#e4e4e8] px-2.5 sm:h-6">
              <span className="h-1.5 w-1.5 rounded-full bg-[#ff5f57] sm:h-2 sm:w-2" />
              <span className="h-1.5 w-1.5 rounded-full bg-[#febc2e] sm:h-2 sm:w-2" />
              <span className="h-1.5 w-1.5 rounded-full bg-[#28c840] sm:h-2 sm:w-2" />
              <div className="ml-2 h-3 flex-1 rounded-full bg-white/70 sm:h-3.5" />
            </div>
            <div className="relative aspect-[16/10] w-full bg-bg">
              {src ? (
                <>
                  <Image
                    src={src}
                    alt={alt}
                    fill
                    priority={priority}
                    className="object-cover object-top"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                  {/* Glass reflection */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-transparent" />
                  <div className="pointer-events-none absolute -inset-full rotate-12 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />
                </>
              ) : (
                <div className="flex h-full items-center justify-center">
                  <span className="font-mono text-xs text-muted">{emptyLabel}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Stand neck */}
      <div className="relative mx-auto -mt-px h-4 w-8 bg-gradient-to-b from-[#232326] to-[#101011] sm:h-5 sm:w-10" />
      <div
        className="relative mx-auto h-2.5 w-16 bg-gradient-to-b from-[#2c2c30] to-[#131315] sm:h-3 sm:w-20"
        style={{ clipPath: "polygon(20% 0, 80% 0, 100% 100%, 0% 100%)" }}
      />
      {/* Base */}
      <div className="mx-auto h-1.5 w-24 rounded-full bg-gradient-to-b from-[#2c2c30] to-[#0e0e0f] sm:w-28" />
      {/* Contact shadow */}
      <div className="mx-auto -mt-0.5 h-3 w-32 rounded-full bg-black/50 blur-md sm:w-40" />
    </div>
  );
}
