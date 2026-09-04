import Image from "next/image";
import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";

export function EditorialSplit({
  src,
  alt,
  overline,
  kicker,
  heading,
  body,
  side = "left",
  aspect = "portrait",
}: {
  src: string;
  alt: string;
  overline?: string;
  kicker?: string;
  heading: ReactNode;
  body: ReactNode;
  side?: "left" | "right";
  aspect?: "portrait" | "square" | "wide";
}) {
  const ratio = aspect === "square" ? "1 / 1" : aspect === "wide" ? "4 / 3" : "3 / 4";
  const gridDir =
    side === "left"
      ? "md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]"
      : "md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]";

  const imageBlock = (
    <Reveal>
      <figure className="relative overflow-hidden rounded-[26px] border border-line group">
        <div className="relative" style={{ aspectRatio: ratio }}>
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 768px) 90vw, 45vw"
            className="object-cover transition-transform duration-[1400ms] ease-editorial group-hover:scale-[1.03]"
          />
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(24,24,24,0) 45%, rgba(24,24,24,0.7) 100%)",
            }}
          />
          <div
            aria-hidden
            className="absolute inset-[10px] rounded-[18px] pointer-events-none"
            style={{ boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.14)" }}
          />
          <div className="absolute top-5 right-5">
            <span className="text-[10px] tracking-[0.22em] uppercase font-extrabold text-white/70 bg-black/30 backdrop-blur-sm rounded-full px-3 py-1">
              Platzhalter
            </span>
          </div>
          {overline && (
            <div className="absolute bottom-5 left-5 md:bottom-7 md:left-7 flex items-center gap-3">
              <span aria-hidden className="inline-block h-px w-6 bg-gold" />
              <span className="text-[10px] tracking-[0.22em] uppercase font-extrabold text-white/95">
                {overline}
              </span>
            </div>
          )}
        </div>
      </figure>
    </Reveal>
  );

  const textBlock = (
    <Reveal delay={0.1}>
      <div className={side === "left" ? "md:pl-4" : "md:pr-4"}>
        {kicker && <div className="kicker mb-4">{kicker}</div>}
        <h2 className="font-display leading-[1.05] text-[clamp(28px,3.8vw,48px)] tracking-[-0.015em] title-rule">
          {heading}
        </h2>
        <div className="text-muted text-[15px] md:text-[17px] leading-[1.8] mt-7 max-w-[560px] space-y-4">
          {body}
        </div>
      </div>
    </Reveal>
  );

  return (
    <section className="relative">
      <div className="container-shell max-w-[1440px] px-4 py-16 md:py-24">
        <div className={`grid gap-10 md:gap-16 items-center ${gridDir}`}>
          {side === "left" ? (
            <>
              {imageBlock}
              {textBlock}
            </>
          ) : (
            <>
              {textBlock}
              {imageBlock}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
