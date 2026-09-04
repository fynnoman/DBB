import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import type { ReactNode } from "react";

export function PageHero({
  kicker,
  title,
  lead,
  chapter,
  eyebrow,
}: {
  kicker: string;
  title: ReactNode;
  lead?: ReactNode;
  chapter?: string;
  eyebrow?: string;
}) {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(60% 60% at 100% 0%, rgba(183,154,98,0.10) 0%, rgba(183,154,98,0) 60%), radial-gradient(60% 60% at 0% 100%, rgba(35,79,67,0.06) 0%, rgba(35,79,67,0) 60%)",
        }}
      />
      <div className="container-shell max-w-[1440px] pt-14 md:pt-24 pb-14 md:pb-20 px-4 relative">
        <Reveal>
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-[12px] tracking-[0.10em] uppercase text-muted mb-6 md:mb-8"
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
            <span className="text-ink/80">{kicker}</span>
          </nav>
        </Reveal>

        <div className="grid gap-10 md:gap-14 md:grid-cols-[minmax(0,1fr)_auto] items-end">
          <div className="max-w-[880px]">
            <Reveal>
              {eyebrow && (
                <div className="kicker mb-4">{eyebrow}</div>
              )}
              <h1 className="font-display leading-[1.03] text-[clamp(38px,6vw,74px)] tracking-[-0.015em] text-ink">
                {title}
              </h1>
            </Reveal>
            {lead && (
              <Reveal delay={0.1}>
                <p className="text-muted text-[17px] md:text-[19px] leading-[1.7] mt-7 md:mt-9 max-w-[720px]">
                  {lead}
                </p>
              </Reveal>
            )}
          </div>

          {chapter && (
            <Reveal delay={0.2}>
              <div className="hidden md:flex flex-col items-end gap-2 pb-2">
                <span
                  aria-hidden
                  className="h-px w-16 bg-gradient-to-r from-transparent to-gold"
                />
                <span className="font-display italic text-muted text-[15px]">
                  Kapitel
                </span>
                <span className="font-display text-[64px] leading-none text-gold/80 tracking-[-0.02em]">
                  {chapter}
                </span>
              </div>
            </Reveal>
          )}
        </div>

        <Reveal delay={0.15}>
          <span
            aria-hidden
            className="mt-10 md:mt-14 inline-block h-px w-24 bg-gradient-to-r from-gold to-transparent"
          />
        </Reveal>
      </div>
    </section>
  );
}
