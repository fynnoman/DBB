"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "framer-motion";
import { nav, site } from "@/lib/site";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [condensed, setCondensed] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    setCondensed(y > 40);
  });

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={false}
        animate={{
          paddingTop: condensed ? 8 : 14,
          paddingBottom: condensed ? 8 : 14,
        }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-50"
        style={{ paddingTop: `calc(var(--sait) + 8px)` }}
      >
        <div className="mx-auto max-w-[1400px] px-3 md:px-8">
          <div className="glass rounded-full pl-4 pr-2 md:pl-6 md:pr-3 flex items-center justify-between h-12 md:h-16">
            <Link
              href="/"
              className="flex items-baseline gap-1.5 md:gap-2"
              aria-label="DBB Kardio · Startseite"
            >
              <span className="font-serif text-lg md:text-2xl leading-none tracking-brand-tight text-forest-800">
                DBB
              </span>
              <span className="font-serif italic text-lg md:text-2xl leading-none text-gold-400">
                Kardio
              </span>
              <span className="hidden lg:inline text-[11px] uppercase tracking-brand-wide text-forest-500 ml-3 border-l border-forest-800/10 pl-3">
                {site.descriptor}
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-1">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  prefetch
                  className="relative px-3 py-2 text-sm font-medium text-forest-700 hover:text-forest-900 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={site.doctolibUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-ivory-50 bg-forest-700 hover:bg-forest-800 transition-colors"
              >
                <BookIcon />
                Termin buchen
              </a>
            </nav>

            {/* Mobile: compact Doctolib chip + hamburger */}
            <div className="flex items-center gap-1.5 md:hidden">
              <a
                href={site.doctolibUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Termin bei Doctolib buchen"
                className="inline-flex items-center gap-1.5 rounded-full bg-forest-700 px-3.5 text-xs font-semibold text-ivory-50 min-h-[44px]"
              >
                <BookIcon />
                Termin
              </a>
              <button
                type="button"
                className="grid place-items-center rounded-full text-forest-800 min-h-[44px] min-w-[44px]"
                onClick={() => setOpen((v) => !v)}
                aria-label={open ? "Menü schließen" : "Menü öffnen"}
                aria-expanded={open}
              >
                <BurgerIcon open={open} />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div
              className="absolute inset-0 bg-forest-900/50 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ y: -16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -16, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-x-3 top-20 glass rounded-3xl p-3 pt-2"
              style={{ top: `calc(var(--sait) + 68px)` }}
            >
              <ul className="divide-y divide-forest-800/10">
                {nav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      prefetch
                      onClick={() => setOpen(false)}
                      className="block px-2 py-4 font-serif text-2xl text-forest-800 min-h-[52px]"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <a
                href={site.doctolibUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mt-3 flex items-center justify-center gap-2 rounded-2xl px-5 py-4 text-base font-semibold text-ivory-50 bg-forest-700 min-h-[52px]"
              >
                <BookIcon />
                Termin bei Doctolib buchen
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function BookIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M8 3v3M16 3v3M4 9h16M6 21h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function BurgerIcon({ open }: { open: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d={open ? "M6 6l12 12" : "M4 8h16"}
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d={open ? "M6 18l12-12" : "M4 16h16"}
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}
