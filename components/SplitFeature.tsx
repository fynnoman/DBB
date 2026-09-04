import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";

type SplitFeatureItem = {
  numeral: string;
  kicker: string;
  title: string;
  body: string;
};

export function SplitFeature({
  eyebrow,
  heading,
  intro,
  items,
}: {
  eyebrow?: string;
  heading: ReactNode;
  intro?: ReactNode;
  items: SplitFeatureItem[];
}) {
  return (
    <section className="relative">
      <div className="container-shell max-w-[1440px] px-4 py-[80px] md:py-[128px]">
        <Reveal>
          <div className="max-w-[900px] mb-14 md:mb-20">
            {eyebrow && <div className="kicker mb-4">{eyebrow}</div>}
            <h2 className="font-display leading-[1.05] text-[clamp(32px,4.4vw,58px)] tracking-[-0.015em] title-rule">
              {heading}
            </h2>
            {intro && (
              <p className="text-muted text-[16px] md:text-[18px] leading-[1.75] mt-7 max-w-[680px]">
                {intro}
              </p>
            )}
          </div>
        </Reveal>

        <div className="divide-y divide-line border-y border-line">
          {items.map((item) => (
            <Reveal key={item.numeral} delay={0.05}>
              <article className="grid grid-cols-1 md:grid-cols-[minmax(0,0.4fr)_minmax(0,1fr)] gap-6 md:gap-14 py-10 md:py-14 group">
                <div className="flex md:block items-baseline gap-6">
                  <span className="font-display text-gold/70 leading-[0.85] tracking-[-0.03em] text-[clamp(64px,8vw,132px)] transition-colors duration-500 ease-editorial group-hover:text-gold">
                    {item.numeral}
                  </span>
                  <span
                    aria-hidden
                    className="hidden md:block h-px w-16 mt-6 bg-gradient-to-r from-gold/70 to-transparent"
                  />
                </div>
                <div className="md:pt-6">
                  <div className="kicker mb-3">{item.kicker}</div>
                  <h3 className="font-display text-[clamp(22px,2.4vw,32px)] leading-[1.2] mb-4 max-w-[24ch]">
                    {item.title}
                  </h3>
                  <p className="text-muted text-[15px] md:text-[17px] leading-[1.75] max-w-[60ch]">
                    {item.body}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
