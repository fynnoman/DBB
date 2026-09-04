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
          {/* Symbolic still-life until the real portrait is delivered. */}
          <Image
            src="https://images.unsplash.com/photo-1682706841281-f723c5bfcd83?w=900&auto=format&fit=crop&q=80"
            alt="ECG-Herzrhythmus, symbolisches Bild"
            fill
            sizes="(max-width: 640px) 82vw, 430px"
            className="object-cover transition-transform duration-[1200ms] ease-editorial group-hover:scale-[1.02]"
            priority
          />
          {/* Warm gradient wash so the caption stays readable */}
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(24,24,24,0.10) 0%, rgba(24,24,24,0.35) 55%, rgba(24,24,24,0.72) 100%)",
            }}
          />
          {/* Placeholder caption pinned to the bottom */}
          <div className="absolute inset-x-0 bottom-0 p-6 md:p-7 text-left">
            <div className="text-[11px] tracking-[0.18em] uppercase font-extrabold text-gold">
              Portraitfoto folgt
            </div>
            <div className="mt-1.5 font-display text-white text-[18px] md:text-[20px] leading-tight">
              {site.fullName}
            </div>
            <div className="mt-1 text-white/75 text-[12px] md:text-[13px]">
              Symbolisches Bild bis zur Übergabe des professionellen Fotos.
            </div>
          </div>

          {/* Inner golden hairline ring */}
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
              <div className="kicker">Vita & beruflicher Werdegang</div>
              <h3 className="font-display text-[26px] md:text-[28px] mt-2 mb-3">
                {site.fullName}
              </h3>
              <p className="text-muted leading-[1.75]">
                Hier kann Ihre Vita mit beruflichen Stationen, Qualifikationen,
                Schwerpunkten, Zertifizierungen und Mitgliedschaften
                übersichtlich eingetragen werden.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
