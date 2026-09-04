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
  { href: "/aerztin", label: "Über mich", group: "Praxis" },
  { href: "/praxis", label: "Praxis & Räumlichkeiten", group: "Praxis" },
  { href: "/leistungen", label: "Leistungen — Übersicht", group: "Leistungen" },
  { href: "/basis-checkup", label: "Basis Check-up", group: "Leistungen" },
  { href: "/executive-checkup", label: "Executive Check-up", group: "Leistungen" },
  { href: "/firmen-checkup", label: "Kardio-Check-up für Firmen", group: "Leistungen" },
  { href: "/nachsorge", label: "Nachsorge", group: "Leistungen" },
  { href: "/patienten", label: "Privatpatienten & Beihilfe", group: "Patienten" },
  { href: "/gkv-selbstzahler", label: "GKV als Selbstzahler", group: "Patienten" },
  { href: "/aktuelles", label: "Aktuelles & Abwesenheiten", group: "Patienten" },
  { href: "/medikamente", label: "Medikamente erklärt", group: "Patienten" },
  { href: "/pvs-datenschutz", label: "PVS & Datenschutz", group: "Patienten" },
  { href: "/kooperationen", label: "Kooperationen", group: "Netzwerk" },
  { href: "/kontakt", label: "Kontakt", group: "Kontakt" },
  { href: "/datenschutz", label: "Datenschutz", group: "Rechtliches" },
  { href: "/impressum", label: "Impressum", group: "Rechtliches" },
  { href: "/barrierefreiheit", label: "Barrierefreiheit", group: "Rechtliches" },
];

const primaryNav = [
  { href: "/aerztin", label: "Über mich" },
  { href: "/leistungen", label: "Leistungen" },
  { href: "/praxis", label: "Praxis" },
  { href: "/patienten", label: "Patienteninfo" },
  { href: "/kontakt", label: "Kontakt" },
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

  const bookHref = "/kontakt";
  const groupedMenu = menuLinks.reduce<Record<string, MenuLink[]>>((acc, link) => {
    const g = link.group ?? "Weitere";
    if (!acc[g]) acc[g] = [];
    acc[g].push(link);
    return acc;
  }, {});

  return (
    <header
      className={`sticky top-0 z-[1000] transition-[background,border-color,box-shadow] duration-500 ease-editorial ${
        scrolled
          ? "bg-white/98 border-b border-[rgba(183,154,98,0.45)] shadow-header backdrop-blur-md"
          : "bg-white/92 border-b border-transparent"
      }`}
      style={{ willChange: scrolled ? "auto" : "auto" }}
    >
      <div className="container-shell min-h-[76px] md:min-h-[88px] py-[11px] grid grid-cols-[minmax(0,1fr)_auto] lg:grid-cols-[minmax(0,1fr)_auto_auto] items-center gap-3 md:gap-4 xl:gap-6">
        {/* Brand */}
        <Link
          href="/#start"
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
            <span className="block font-display text-[15px] md:text-[20px] xl:text-[24px] tracking-[0.05em] md:tracking-brand text-ink leading-tight whitespace-nowrap overflow-hidden text-ellipsis">
              {site.brand}
            </span>
            <span className="block text-[10px] md:text-[11px] xl:text-[13px] text-muted mt-[3px] leading-tight whitespace-nowrap overflow-hidden text-ellipsis">
              <span className="hidden md:inline">{site.descriptor} · </span>
              <span>{site.city}</span>
            </span>
          </span>
        </Link>

        {/* Desktop primary nav */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-6 text-[12px] xl:text-[13px] text-ink/85">
          {primaryNav.map((item) => {
            const active =
              pathname === item.href ||
              (item.href !== "/" && pathname?.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative py-1 transition-colors hover:text-ink after:content-[''] after:absolute after:left-0 after:right-0 after:-bottom-0.5 after:h-px after:bg-gold after:origin-left after:transition-transform after:duration-500 after:ease-editorial ${
                  active
                    ? "text-ink after:scale-x-100"
                    : "after:scale-x-0 hover:after:scale-x-100"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-1.5 md:gap-2 flex-shrink-0">
          <a
            href={bookHref}
            className="hidden sm:inline-flex min-h-[44px] px-[18px] rounded-full items-center justify-center text-[12px] font-extrabold tracking-[.05em] bg-gold text-white border border-gold hover:bg-gold-600 transition-colors duration-500 ease-editorial"
          >
            TERMIN BUCHEN
          </a>
          <a
            href={bookHref}
            aria-label="Telefon"
            className="hidden sm:grid w-11 h-11 rounded-full border border-line place-items-center text-ink/80 hover:text-ink hover:border-gold transition-colors"
          >
            <PhoneIcon />
          </a>
          <a
            href={bookHref}
            aria-label="E-Mail"
            className="hidden sm:grid w-11 h-11 rounded-full border border-line place-items-center text-ink/80 hover:text-ink hover:border-gold transition-colors"
          >
            <MailIcon />
          </a>

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
                  <h4 className="font-display text-[20px] mt-1 mb-3">Menü</h4>
                  <div className="max-h-[70vh] overflow-y-auto -mx-[18px] px-[18px] pr-2">
                    {Object.entries(groupedMenu).map(([group, links]) => (
                      <div key={group} className="mb-4 last:mb-0">
                        <div className="text-[10px] tracking-[0.18em] uppercase font-extrabold text-gold mb-1.5 mt-3 first:mt-0">
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
                                  className={`block py-[10px] border-b border-line last:border-b-0 text-[14px] transition-colors ${
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
    </header>
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
