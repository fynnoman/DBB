import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import type { ReactNode } from "react";

export function PageHero({
  kicker,
  title,
  lead,
  chapter,
  eyebrow,
  align = "left",
}: {
  kicker: string;
  title: ReactNode;
  lead?: ReactNode;
  chapter?: string;
  eyebrow?: string;
  align?: "left" | "center";
}) {
  return (
    <section className="relative isolate overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(65% 55% at 85% 10%, rgba(183,154,98,0.14) 0%, rgba(183,154,98,0) 55%), radial-gradient(45% 45% at 10% 95%, rgba(35,79,67,0.08) 0%, rgba(35,79,67,0) 55%), linear-gradient(180deg, #fbfaf7 0%, #f6f2e9 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(24,24,24,0.6) 1px, transparent 0)",
          backgroundSize: "3px 3px",
        }}
      />
      {chapter && (
        <div
          aria-hidden
          className="pointer-events-none absolute -right-4 md:right-4 lg:right-10 top-1/2 -translate-y-1/2 font-display text-gold/[0.07] leading-none select-none text-[clamp(260px,42vw,560px)] tracking-[-0.04em]"
        >
          {chapter}
        </div>
      )}

      <div className="container-shell max-w-[1440px] relative px-4 pt-14 md:pt-24 pb-16 md:pb-28">
        <Reveal>
          <nav
            aria-label="Breadcrumb"
            className={`flex items-center gap-2 text-[11px] tracking-[0.18em] uppercase text-muted mb-10 md:mb-14 ${
              align === "center" ? "justify-center" : ""
            }`}
          >
            <Link
              href="/"
              className="hover:text-ink transition-colors underline-offset-4 hover:underline decoration-gold/60"
            >
              Start
            </Link>
            <span aria-hidden className="text-gold/70">
              /
            </span>
            <span className="text-ink/85">{kicker}</span>
          </nav>
        </Reveal>

        <div className={align === "center" ? "text-center" : ""}>
          {eyebrow && (
            <Reveal>
              <div
                className={`inline-flex items-center gap-3 mb-6 md:mb-8 ${
                  align === "center" ? "" : ""
                }`}
              >
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
            <h1
              className={`font-display leading-[0.98] tracking-[-0.02em] text-ink text-[clamp(44px,8vw,112px)] ${
                align === "center" ? "mx-auto max-w-[16ch]" : "max-w-[18ch]"
              }`}
            >
              {title}
            </h1>
          </Reveal>

          {lead && (
            <Reveal delay={0.15}>
              <p
                className={`text-muted text-[17px] md:text-[20px] leading-[1.65] mt-8 md:mt-12 max-w-[720px] ${
                  align === "center" ? "mx-auto" : ""
                }`}
              >
                {lead}
              </p>
            </Reveal>
          )}
        </div>

        <Reveal delay={0.25}>
          <div
            className={`mt-14 md:mt-20 flex items-center gap-4 ${
              align === "center" ? "justify-center" : ""
            }`}
          >
            {chapter && (
              <span className="font-display italic text-muted text-[13px] tracking-wide">
                Kapitel {chapter}
              </span>
            )}
            <span
              aria-hidden
              className="h-px flex-1 max-w-[220px] bg-gradient-to-r from-gold via-gold/40 to-transparent"
            />
            <Heartline />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Heartline() {
  return (
    <svg
      width="80"
      height="16"
      viewBox="0 0 80 16"
      aria-hidden
      className="text-gold/80"
    >
      <path
        d="M0 8 L18 8 L22 3 L28 13 L34 1 L40 15 L46 5 L52 8 L80 8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
