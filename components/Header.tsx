"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { site } from "@/lib/site";
import { useMenuOnly } from "@/components/MenuOnly";

type MenuLink = {
  hash?: string;
  href?: string;
  label: string;
  reveal?: string;
};

const menuLinks: MenuLink[] = [
  { hash: "ueber", label: "Über mich" },
  { hash: "praxis", label: "Praxis & Räumlichkeiten" },
  { hash: "leistungen", label: "Leistungen" },
  { hash: "basis-checkup", label: "Basis Check-up" },
  { hash: "executive-checkup", label: "Executive Check-up" },
  { hash: "firmen-checkup", label: "Kardio-Check-up für Firmen" },
  { hash: "nachsorge", label: "Nachsorge" },
  { hash: "patienten", label: "Privatpatienten & Beihilfe" },
  {
    hash: "patienten-service",
    label: "Aktuelles & Abwesenheiten",
    reveal: "patienten-service",
  },
  { hash: "medikamente", label: "Medikamente erklärt", reveal: "medikamente" },
  { hash: "kooperationen", label: "Kooperationen", reveal: "kooperationen" },
  {
    hash: "abrechnung-datenschutz",
    label: "PVS & Datenschutz",
    reveal: "abrechnung-datenschutz",
  },
  { hash: "patienten", label: "GKV als Selbstzahler" },
  { hash: "kontakt", label: "Kontakt" },
  { href: "/datenschutz", label: "Datenschutz" },
  { href: "/impressum", label: "Impressum" },
  { href: "/barrierefreiheit", label: "Barrierefreiheit" },
];

const primaryNav = [
  { hash: "ueber", label: "Über mich" },
  { hash: "leistungen", label: "Leistungen" },
  { hash: "praxis", label: "Praxis" },
  { hash: "patienten", label: "Patienteninfo" },
  { hash: "kontakt", label: "Kontakt" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const { reveal } = useMenuOnly();
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === "/";

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

  const goToHash = (hash: string) => {
    if (isHome) {
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      else window.location.hash = hash;
    } else {
      router.push(`/#${hash}`);
    }
  };

  const goToReveal = (id: string) => {
    if (isHome) {
      reveal(id);
    } else {
      router.push(`/?menu=${id}#${id}`);
    }
  };

  const handleMenuClick = (link: MenuLink, e: React.MouseEvent) => {
    setOpen(false);
    if (link.reveal) {
      e.preventDefault();
      goToReveal(link.reveal);
      return;
    }
    if (link.hash) {
      e.preventDefault();
      goToHash(link.hash);
    }
  };

  const primaryHref = (hash: string) => (isHome ? `#${hash}` : `/#${hash}`);
  const bookHref = isHome ? "#kontakt" : "/#kontakt";

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
          {primaryNav.map((item) => (
            <a
              key={item.hash}
              href={primaryHref(item.hash)}
              onClick={(e) => {
                if (isHome) {
                  e.preventDefault();
                  goToHash(item.hash);
                }
              }}
              className="relative py-1 transition-colors hover:text-ink after:content-[''] after:absolute after:left-0 after:right-0 after:-bottom-0.5 after:h-px after:bg-gold after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-500 after:ease-editorial"
            >
              {item.label}
            </a>
          ))}
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
                  <ul className="max-h-[70vh] overflow-y-auto -mx-[18px] px-[18px]">
                    {menuLinks.map((link, i) => {
                      if (link.href) {
                        return (
                          <li key={link.href + link.label + i}>
                            <Link
                              href={link.href}
                              onClick={() => setOpen(false)}
                              className="block py-[10px] border-b border-line last:border-b-0 text-[14px] text-ink/85 hover:text-ink transition-colors"
                            >
                              {link.label}
                            </Link>
                          </li>
                        );
                      }
                      return (
                        <li key={(link.hash ?? "") + link.label + i}>
                          <a
                            href={
                              link.hash
                                ? isHome
                                  ? `#${link.hash}`
                                  : `/#${link.hash}`
                                : "#"
                            }
                            onClick={(e) => handleMenuClick(link, e)}
                            className="block py-[10px] border-b border-line last:border-b-0 text-[14px] text-ink/85 hover:text-ink transition-colors"
                          >
                            {link.label}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
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
