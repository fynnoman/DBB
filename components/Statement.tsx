import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";

export function Statement({
  eyebrow,
  children,
  footer,
  tone = "forest",
}: {
  eyebrow?: string;
  children: ReactNode;
  footer?: ReactNode;
  tone?: "forest" | "ink";
}) {
  const bg =
    tone === "forest"
      ? "bg-forest text-cream"
      : "bg-ink text-cream";

  return (
    <section className={`relative ${bg} overflow-hidden`}>
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          background:
            "radial-gradient(600px 400px at 90% -10%, rgba(183,154,98,0.9), transparent 60%), radial-gradient(500px 300px at 5% 110%, rgba(183,154,98,0.6), transparent 60%)",
        }}
      />
      <span
        aria-hidden
        className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent"
      />

      <div className="container-shell max-w-[1440px] px-4 py-[88px] md:py-[140px] relative">
        {eyebrow && (
          <Reveal>
            <div className="inline-flex items-center gap-3 mb-8 md:mb-10">
              <span
                aria-hidden
                className="h-px w-10 bg-gradient-to-r from-gold to-transparent"
              />
              <span className="text-[11px] tracking-[0.22em] uppercase font-extrabold text-gold">
                {eyebrow}
              </span>
            </div>
          </Reveal>
        )}
        <Reveal delay={0.05}>
          <div className="font-display leading-[1.08] tracking-[-0.015em] text-[clamp(30px,4.6vw,64px)] max-w-[22ch]">
            {children}
          </div>
        </Reveal>
        {footer && (
          <Reveal delay={0.15}>
            <div className="mt-10 md:mt-14 text-cream/75 text-[14px] md:text-[15px] leading-[1.7] max-w-[640px]">
              {footer}
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
