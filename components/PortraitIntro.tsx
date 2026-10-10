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
            src="/portrait-babeanu-bauer.png"
            alt={`Portrait ${site.fullName}`}
            fill
            sizes="(max-width: 640px) 82vw, 430px"
            className="object-cover transition-transform duration-[1200ms] ease-editorial group-hover:scale-[1.02]"
            priority
          />

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
                Weitere Stationen, Qualifikationen und Schwerpunkte folgen in
                Kürze an dieser Stelle.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
