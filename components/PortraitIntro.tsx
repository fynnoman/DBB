"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export default function PortraitIntro() {
  const [open, setOpen] = useState(false);

  return (
    <section
      id="ueber"
      className="container-shell max-w-[1440px] py-[62px] md:py-[76px] px-4 text-center"
    >
      <Reveal>
        <div
          className="relative mx-auto mb-6 rounded-[28px] overflow-hidden border border-[rgba(183,154,98,0.42)] shadow-soft group"
          style={{
            width: "min(430px, 82vw)",
            aspectRatio: "4 / 5",
          }}
        >
          <Image
            src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=900&auto=format&fit=crop&q=80"
            alt="Platzhalter-Portrait der Ärztin, Schwarz-Weiß"
            fill
            sizes="(max-width: 640px) 82vw, 430px"
            className="object-cover grayscale contrast-105 transition-transform duration-[1200ms] ease-editorial group-hover:scale-[1.02]"
            priority
          />
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(24,24,24,0.10) 0%, rgba(24,24,24,0.35) 55%, rgba(24,24,24,0.78) 100%)",
            }}
          />

          <div
            aria-hidden
            className="absolute inset-0 grid place-items-center pointer-events-none"
          >
            <span className="font-display text-white/25 tracking-[0.22em] text-[clamp(28px,6vw,54px)] uppercase select-none">
              Platzhalter
            </span>
          </div>

          <div className="absolute inset-x-0 bottom-0 p-6 md:p-7 text-left">
            <div className="text-[11px] tracking-[0.18em] uppercase font-extrabold text-gold">
              Portraitfoto folgt
            </div>
            <div className="mt-1.5 font-display text-white text-[18px] md:text-[20px] leading-tight">
              {site.fullName}
            </div>
            <div className="mt-1 text-white/75 text-[12px] md:text-[13px]">
              Das eigene Portrait der Ärztin wird in Kürze eingefügt.
            </div>
          </div>

          <div
            aria-hidden
            className="absolute inset-[10px] rounded-[20px] pointer-events-none"
            style={{ boxShadow: "inset 0 0 0 1px rgba(183,154,98,0.35)" }}
          />
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="bio-details"
          className="min-h-[48px] px-6 rounded-full inline-flex items-center justify-center text-[12px] font-extrabold tracking-[0.05em] bg-gold text-white border border-gold hover:bg-gold-600 hover:shadow-cardHover transition-all duration-500 ease-editorial"
        >
          ÜBER MICH
        </button>
      </Reveal>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id="bio-details"
            key="bio"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="max-w-[900px] mx-auto mt-7 text-left border border-line rounded-[22px] p-7 md:p-8 bg-white/60 backdrop-blur-sm">
              <div className="kicker">Vita und beruflicher Werdegang</div>
              <h3 className="font-display text-[26px] md:text-[28px] mt-2 mb-3">
                {site.fullName}
              </h3>
              <p className="text-muted leading-[1.75]">
                Die Ärztin ist Mitglied der Deutschen Gesellschaft für
                Amyloid-Krankheiten e.V. und bringt besondere Expertise in der
                Diagnostik seltener Herzerkrankungen wie der kardialen
                Amyloidose mit. Weitere Stationen, Qualifikationen und
                Schwerpunkte folgen in Kürze an dieser Stelle.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
