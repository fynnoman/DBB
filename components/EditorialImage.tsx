import Image from "next/image";
import { Reveal } from "@/components/Reveal";

export function EditorialImage({
  src,
  alt,
  caption,
  overline,
  aspect = "wide",
  fullBleed = false,
}: {
  src: string;
  alt: string;
  caption?: string;
  overline?: string;
  aspect?: "wide" | "portrait" | "square" | "cinema";
  fullBleed?: boolean;
}) {
  const ratio =
    aspect === "portrait"
      ? "3 / 4"
      : aspect === "square"
        ? "1 / 1"
        : aspect === "cinema"
          ? "21 / 9"
          : "16 / 9";
  return (
    <section className="relative">
      <div
        className={
          fullBleed
            ? "w-full py-8 md:py-14"
            : "container-shell max-w-[1440px] px-4 py-12 md:py-20"
        }
      >
        <Reveal>
          <figure
            className={`relative overflow-hidden group ${
              fullBleed
                ? "border-y border-line"
                : "rounded-[24px] md:rounded-[28px] border border-line"
            }`}
          >
            <div className="relative" style={{ aspectRatio: ratio }}>
              <Image
                src={src}
                alt={alt}
                fill
                sizes="(max-width: 1440px) 100vw, 1440px"
                className="object-cover transition-transform duration-[1400ms] ease-editorial group-hover:scale-[1.03]"
              />
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(24,24,24,0) 40%, rgba(24,24,24,0.78) 100%)",
                }}
              />
              <div
                aria-hidden
                className="absolute inset-[10px] rounded-[18px] pointer-events-none"
                style={{ boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.14)" }}
              />
              {overline && (
                <div className="absolute top-5 left-5 md:top-8 md:left-8 flex items-center gap-3">
                  <span
                    aria-hidden
                    className="inline-block h-px w-6 bg-gold"
                  />
                  <span className="text-[10px] tracking-[0.22em] uppercase font-extrabold text-white/95">
                    {overline}
                  </span>
                </div>
              )}
              <div className="absolute top-5 right-5 md:top-8 md:right-8">
                <span className="text-[10px] tracking-[0.22em] uppercase font-extrabold text-white/70 bg-black/30 backdrop-blur-sm rounded-full px-3 py-1">
                  Platzhalter
                </span>
              </div>
              {caption && (
                <figcaption className="absolute inset-x-0 bottom-0 p-6 md:p-12 text-white">
                  <p className="font-display italic text-white/95 text-[clamp(18px,2.2vw,30px)] leading-[1.3] max-w-[820px]">
                    {caption}
                  </p>
                </figcaption>
              )}
            </div>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
