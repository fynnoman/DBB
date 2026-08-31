"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { services } from "@/lib/site";

const icons: Record<string, React.ReactNode> = {
  echokardiographie: <path d="M4 12h3l2-6 4 12 3-9 2 3h4" />,
  praevention: (
    <>
      <path d="M12 3l7 3v5c0 4-3 7-7 9-4-2-7-5-7-9V6l7-3Z" />
      <path d="M9 12l2 2 4-5" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  "check-up": (
    <>
      <path d="M4 6h16M4 12h10M4 18h16" strokeLinecap="round" />
      <circle cx="18" cy="12" r="2" fill="currentColor" stroke="none" />
    </>
  ),
  "rhythmus-blutdruck": <path d="M3 12h4l2-4 3 8 3-6 2 2h4" />,
  "cardio-onkologie": (
    <>
      <path d="M12 21s-7-4.5-7-11a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 6.5-7 11-7 11Z" />
      <circle cx="17" cy="6" r="2.4" />
    </>
  ),
  frauenherz: (
    <>
      <path d="M12 21s-7-4.5-7-11a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 6.5-7 11-7 11Z" />
      <path d="M12 15l1.2-1.2M12 15l-1.2-1.2" strokeLinecap="round" />
    </>
  ),
  "seltene-herzerkrankungen": (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M8 12l3 3 5-6" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  "weitere-verfahren": (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 8v8M8 12h8" strokeLinecap="round" />
    </>
  ),
  "firmen-check-up": (
    <>
      <path d="M4 21V9l8-5 8 5v12" />
      <path d="M9 21v-6h6v6" />
    </>
  ),
};

export default function ServicesGrid() {
  return (
    <section
      id="leistungen"
      className="relative bg-ivory-100 py-20 sm:py-24 md:py-40 overflow-hidden cv-auto"
    >
      <div className="absolute inset-0 bg-noise" aria-hidden />

      <div className="relative mx-auto max-w-[1400px] px-4 md:px-8">
        <div className="grid gap-8 md:gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="eyebrow rule-gold">Leistungen</p>
            <h2 className="mt-6 md:mt-8 font-serif text-forest-800 text-[clamp(2rem,7vw,4rem)] leading-[1.02] tracking-brand-tight">
              Präzise Diagnostik.{" "}
              <span className="italic text-forest-700">Klare Einordnung.</span>
            </h2>
            <p className="mt-5 md:mt-6 max-w-md text-[15px] md:text-lg leading-relaxed text-forest-700/90">
              Ein modernes Spektrum kardiologischer Untersuchungen, individuell auf Ihre
              Fragestellung abgestimmt und in ruhiger, verständlicher Sprache erklärt.
            </p>
          </div>

          <div className="md:col-span-7">
            <ul className="grid gap-3 sm:gap-4 sm:grid-cols-2">
              {services.map((s, i) => (
                <motion.li
                  key={s.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.6,
                    delay: (i % 3) * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <Link
                    href={`/leistungen#${s.slug}`}
                    prefetch={false}
                    className="group relative flex h-full flex-col justify-between rounded-3xl glass p-5 sm:p-6 transition-transform duration-500 ease-cozy active:scale-[0.99] md:hover:-translate-y-1 min-h-[180px]"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-forest-700 text-gold-300">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          aria-hidden
                        >
                          {icons[s.slug]}
                        </svg>
                      </div>
                      <span className="text-[10px] uppercase tracking-brand-wide text-forest-500">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="mt-6 sm:mt-8">
                      <h3 className="font-serif text-lg sm:text-xl md:text-2xl leading-tight text-forest-800">
                        {s.title}
                      </h3>
                      <p className="mt-2 sm:mt-3 text-[13px] sm:text-sm leading-relaxed text-forest-700/85">
                        {s.short}
                      </p>
                    </div>
                    <div className="mt-5 flex items-center justify-between">
                      <span className="text-sm font-medium text-forest-700">
                        Mehr erfahren
                      </span>
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-forest-800/5 text-forest-800 transition-transform group-hover:translate-x-1 group-hover:bg-gold-300/40">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
                          <path
                            d="M5 12h14M13 5l7 7-7 7"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </div>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
