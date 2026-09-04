import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";

export function PullQuote({
  children,
  author,
  role,
}: {
  children: ReactNode;
  author?: string;
  role?: string;
}) {
  return (
    <section className="relative">
      <div className="container-shell max-w-[1440px] px-4 py-[72px] md:py-[112px]">
        <Reveal>
          <div className="max-w-[960px] mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-8 md:mb-10">
              <span
                aria-hidden
                className="h-px w-16 bg-gradient-to-r from-transparent to-gold"
              />
              <span className="font-display italic text-[13px] text-muted tracking-wide">
                Haltung
              </span>
              <span
                aria-hidden
                className="h-px w-16 bg-gradient-to-l from-transparent to-gold"
              />
            </div>
            <blockquote className="font-display italic text-ink leading-[1.2] tracking-[-0.01em] text-[clamp(26px,3.4vw,44px)]">
              <span className="text-gold text-[1.4em] leading-none align-[-0.1em] pr-2">
                &ldquo;
              </span>
              {children}
              <span className="text-gold text-[1.4em] leading-none align-[-0.1em] pl-1">
                &rdquo;
              </span>
            </blockquote>
            {author && (
              <footer className="mt-10 md:mt-12 text-[12px] tracking-[0.18em] uppercase font-extrabold text-ink">
                {author}
                {role && (
                  <span className="block mt-1 font-normal text-muted tracking-[0.10em] text-[11px] normal-case">
                    {role}
                  </span>
                )}
              </footer>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
