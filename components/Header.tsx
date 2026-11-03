"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { site } from "@/lib/site";

type MenuLink = {
  href: string;
  label: string;
  group?: string;
};

const menuLinks: MenuLink[] = [
  { href: "/", label: "Home", group: "Praxis" },
  { href: "/wichtige-informationen", label: "Wichtige Informationen", group: "Praxis" },
  { href: "/datenschutz", label: "Datenschutz", group: "Rechtliches" },
  { href: "/impressum", label: "Impressum", group: "Rechtliches" },
  { href: "/barrierefreiheit", label: "Barrierefreiheit", group: "Rechtliches" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node))
        setOpen(false);
    };
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onEsc);
    };
  }, [open]);

  const groupedMenu = menuLinks.reduce<Record<string, MenuLink[]>>((acc, link) => {
    const g = link.group ?? "Weitere";
    if (!acc[g]) acc[g] = [];
    acc[g].push(link);
    return acc;
  }, {});

  return (
    <header
      className={`sticky top-0 z-[1000] transition-[background,box-shadow] duration-500 ease-editorial ${
        scrolled
          ? "bg-white/98 shadow-header backdrop-blur-md"
          : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="container-shell min-h-[76px] md:min-h-[88px] py-[11px] grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 md:gap-4 xl:gap-6">
        {/* Brand */}
        <Link
          href="/"
          className="flex items-center gap-3 group min-w-0"
        >
          <span className="relative block w-[42px] h-[42px] md:w-[52px] md:h-[52px] xl:w-[62px] xl:h-[62px] rounded-full overflow-hidden flex-shrink-0">
            <Image
              src="/logo.png"
              alt="DBB KARDIO Logo"
              fill
              priority
              sizes="62px"
              className="object-contain"
            />
          </span>
          <span className="min-w-0 flex-1">
            <span className="block font-display text-[16px] md:text-[22px] xl:text-[26px] tracking-[0.05em] md:tracking-brand text-ink leading-tight whitespace-nowrap overflow-hidden text-ellipsis">
              {site.brand}
            </span>
            <span className="block text-[11px] md:text-[12px] xl:text-[14px] text-muted mt-[3px] leading-tight whitespace-nowrap overflow-hidden text-ellipsis">
              <span className="hidden md:inline">{site.descriptor} · </span>
              <span>{site.city}</span>
            </span>
          </span>
        </Link>

        {/* Actions */}
        <div className="flex items-center gap-1.5 md:gap-2 flex-shrink-0">
          <button
            type="button"
            className="hidden sm:inline-flex min-h-[44px] px-[18px] rounded-full items-center justify-center text-[13px] font-extrabold tracking-[.05em] bg-gold text-white border border-gold hover:bg-gold-600 transition-colors duration-500 ease-editorial"
          >
            TERMIN BUCHEN
          </button>
          <button
            type="button"
            aria-label="Telefon"
            className="hidden sm:grid w-11 h-11 rounded-full border border-forest/40 text-white bg-forest hover:bg-forest/90 place-items-center transition-colors"
          >
            <PhoneIcon />
          </button>
          <button
            type="button"
            aria-label="E-Mail"
            className="hidden sm:grid w-11 h-11 rounded-full border border-line place-items-center text-ink/80 hover:text-ink hover:border-gold transition-colors"
          >
            <MailIcon />
          </button>

          <div className="relative" ref={wrapRef}>
            <button
              type="button"
              aria-label={open ? "Menü schließen" : "Menü öffnen"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="w-10 h-10 md:w-11 md:h-11 rounded-full border border-line grid place-items-center hover:border-gold transition-colors"
            >
              <BurgerIcon open={open} />
            </button>

            <AnimatePresence>
              {open && (
                <motion.div
                  initial={{ opacity: 0, y: -6, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -6, scale: 0.98 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute right-0 top-[54px] w-[min(400px,92vw)] rounded-[20px] border border-line bg-white shadow-menu p-[18px] origin-top-right"
                >
                  <h4 className="font-display text-[22px] mt-1 mb-3">Menü</h4>
                  <div className="max-h-[70vh] overflow-y-auto -mx-[18px] px-[18px] pr-2">
                    {Object.entries(groupedMenu).map(([group, links]) => (
                      <div key={group} className="mb-4 last:mb-0">
                        <div className="text-[11px] tracking-[0.18em] uppercase font-extrabold text-gold mb-1.5 mt-3 first:mt-0">
                          {group}
                        </div>
                        <ul>
                          {links.map((link) => {
                            const active = pathname === link.href;
                            return (
                              <li key={link.href}>
                                <Link
                                  href={link.href}
                                  onClick={() => setOpen(false)}
                                  className={`block py-[10px] border-b border-line last:border-b-0 text-[15px] transition-colors ${
                                    active
                                      ? "text-ink font-semibold"
                                      : "text-ink/85 hover:text-ink"
                                  }`}
                                >
                                  {link.label}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* ECG line as the bottom border of the navbar */}
      <div className="ecg-navbar" aria-hidden>
        <div className="ecg-navbar__scroll">
          <EcgWave />
          <EcgWave />
        </div>
      </div>
    </header>
  );
}

function EcgWave() {
  // Realistic cardiac complex per cycle (width 400 within a 1200 viewBox → 3 cycles):
  //   flat baseline → P-wave (round bump) → short PR segment →
  //   small Q dip → tall R spike → deep S dip → return to baseline →
  //   long ST segment (T-wave kept well away from the spike) →
  //   T-wave (round bump) → flat baseline.
  // viewBox is kept shallow so the R spike visually dominates even in a thin bar.
  return (
    <svg
      viewBox="0 0 1200 60"
      preserveAspectRatio="none"
      aria-hidden
      className="text-gold"
    >
      <defs>
        <linearGradient id="ecgFade" x1="0" x2="1">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0" />
          <stop offset="15%" stopColor="currentColor" stopOpacity="1" />
          <stop offset="85%" stopColor="currentColor" stopOpacity="1" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M0,30 L60,30
           Q78,22 96,30
           L130,30
           L138,34 L142,2 L146,56 L150,30
           L220,30
           Q238,20 256,30
           L300,30

           L360,30
           Q378,22 396,30
           L430,30
           L438,34 L442,2 L446,56 L450,30
           L520,30
           Q538,20 556,30
           L600,30

           L660,30
           Q678,22 696,30
           L730,30
           L738,34 L742,2 L746,56 L750,30
           L820,30
           Q838,20 856,30
           L900,30

           L960,30
           Q978,22 996,30
           L1030,30
           L1038,34 L1042,2 L1046,56 L1050,30
           L1120,30
           Q1138,20 1156,30
           L1200,30"
        fill="none"
        stroke="url(#ecgFade)"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}
function BurgerIcon({ open }: { open: boolean }) {
  return (
    <span className="relative block w-[18px] h-[12px]">
      <span
        className={`absolute left-0 right-0 h-[1.5px] bg-ink transition-all duration-500 ease-editorial ${
          open ? "top-[5px] rotate-45" : "top-0"
        }`}
      />
      <span
        className={`absolute left-0 right-0 top-[5px] h-[1.5px] bg-ink transition-opacity duration-300 ${
          open ? "opacity-0" : "opacity-100"
        }`}
      />
      <span
        className={`absolute left-0 right-0 h-[1.5px] bg-ink transition-all duration-500 ease-editorial ${
          open ? "top-[5px] -rotate-45" : "top-[10px]"
        }`}
      />
    </span>
  );
}
