"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { site } from "@/lib/site";

const HERO_IMG =
  "https://images.unsplash.com/photo-1580281657527-47f249e8f4df?q=80&w=1600&auto=format&fit=crop";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [0, 140]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], reduced ? [1, 1] : [1, 1.06]);

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden bg-ivory-50 min-h-[100dvh]"
      style={{ paddingTop: "calc(var(--sait) + 88px)" }}
    >
      {/* Ambient warm gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(80vw_60vh_at_10%_-10%,rgba(210,177,94,0.28),transparent_60%),radial-gradient(80vw_60vh_at_100%_10%,rgba(51,74,46,0.22),transparent_65%)]" />
        <div className="bg-noise relative h-full w-full" />
      </div>

      <div className="relative mx-auto grid max-w-[1400px] grid-cols-1 gap-8 px-4 md:grid-cols-12 md:gap-10 md:px-8 md:pt-24 lg:pt-32">
        {/* Left: editorial text block */}
        <motion.div
          style={{ opacity }}
          className="md:col-span-6 flex flex-col"
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="eyebrow"
          >
            {site.descriptor} · {site.location}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 md:mt-6 font-serif text-forest-800 leading-[0.98] tracking-brand-tight text-[clamp(2.25rem,10vw,5.5rem)]"
          >
            Ihre Gesundheit
            <span className="block italic text-forest-700">
              liegt mir am
              <span className="text-gold-400"> Herzen.</span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 md:mt-8 max-w-xl text-base md:text-lg leading-relaxed text-forest-700/90"
          >
            {site.claim}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 md:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
          >
            <a
              href={site.doctolibUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-forest-700 px-6 py-4 text-sm font-semibold text-ivory-50 ring-1 ring-gold-300/30 hover:bg-forest-800 transition-colors min-h-[52px]"
            >
              Termin bei Doctolib buchen
              <Arrow />
            </a>
            <a
              href="#leistungen"
              className="inline-flex items-center justify-center gap-2 rounded-full glass px-6 py-4 text-sm font-semibold text-forest-800 hover:bg-white/70 transition-colors min-h-[52px]"
            >
              Leistungen entdecken
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="mt-10 md:mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4 md:pb-10 md:pr-6"
          >
            <MetaItem
              label="Adresse"
              value={`${site.address.street} · ${site.address.zipCity}`}
            />
            <MetaItem label="Sprechzeiten" value={site.hours} />
            <MetaItem label="Ausrichtung" value={site.audience} />
          </motion.div>
        </motion.div>

        {/* Right: parallax card with portrait/ambient */}
        <motion.div
          style={{ y, scale }}
          className="md:col-span-6 relative pb-16 md:pb-0"
        >
          <div className="relative h-[60dvh] max-h-[560px] md:h-[78dvh] md:max-h-none w-full overflow-hidden rounded-[28px] md:rounded-[36px] ring-1 ring-forest-800/10 bg-forest-900">
            <Image
              src={HERO_IMG}
              alt="Kardiologische Diagnostik"
              fill
              priority
              fetchPriority="high"
              sizes="(min-width: 768px) 50vw, 100vw"
              quality={78}
              className="object-cover"
              draggable={false}
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-forest-900/55 via-forest-900/10 to-transparent" />

            {/* liquid glass badge */}
            <div className="absolute left-4 top-4 md:left-6 md:top-6">
              <div className="glass rounded-full px-3.5 py-2 text-[10px] md:text-[11px] uppercase tracking-brand-wide text-forest-800">
                Privatpraxis · Saarpfalz
              </div>
            </div>

            {/* signature block */}
            <div className="absolute inset-x-4 bottom-4 md:inset-x-6 md:bottom-6">
              <div className="glass-dark rounded-2xl px-4 py-3.5 md:px-6 md:py-5 text-ivory-50">
                <p className="eyebrow text-gold-300">Ihre Kardiologin</p>
                <p className="mt-1 font-serif text-xl md:text-3xl leading-tight">
                  Dr. medic Denisa <span className="italic text-gold-300">Babeanu-Bauer</span>
                </p>
                <p className="mt-2 text-[13px] md:text-sm text-ivory-100/85 max-w-md leading-snug">
                  Persönlich. Ruhig. Präzise. Für Menschen, die ihre Herzgesundheit ernst nehmen.
                </p>
              </div>
            </div>
          </div>

          {/* floating vitals card — desktop only */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="hidden lg:block absolute -left-8 top-20"
          >
            <div className="glass rounded-2xl px-4 py-3 w-[220px]">
              <p className="eyebrow">Live · Echo</p>
              <p className="mt-1 font-serif text-forest-800 text-2xl">
                LV-EF 62<span className="text-gold-400">%</span>
              </p>
              <SineWave />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* scroll cue — hidden on mobile to avoid overlap with floating CTA */}
      <div className="hidden md:flex absolute inset-x-0 bottom-6 justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 1 }}
          className="flex flex-col items-center gap-2 text-forest-700/70"
        >
          <span className="text-[10px] uppercase tracking-brand-wide">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="h-8 w-px bg-forest-700/40"
          />
        </motion.div>
      </div>
    </section>
  );
}

function MetaItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-l border-forest-800/15 pl-3">
      <p className="eyebrow">{label}</p>
      <p className="mt-1 text-xs leading-snug text-forest-700">{value}</p>
    </div>
  );
}

function Arrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M5 12h14M13 5l7 7-7 7"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SineWave() {
  return (
    <svg viewBox="0 0 200 40" className="mt-2 h-8 w-full text-gold-400">
      <path
        d="M0 20 Q 15 5, 30 20 T 60 20 T 90 20 L 100 6 L 108 34 L 116 12 L 124 28 L 132 20 T 200 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      />
    </svg>
  );
}
