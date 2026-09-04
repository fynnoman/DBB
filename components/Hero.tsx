import Image from "next/image";
import { site } from "@/lib/site";

/**
 * Editorial hero.
 * Signature: a very faint gold ECG waveform sweeping across the section,
 * plus a 60bpm breathing pulse on the central logo mark.
 *
 * All entrance animations are pure CSS (fill-mode: both) so content is
 * present in the initial HTML and never gets stuck invisible.
 */
export default function Hero() {
  return (
    <section
      id="start"
      className="relative overflow-hidden isolate"
      aria-labelledby="hero-title"
    >
      {/* Ambient warm wash */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(1000px 500px at 50% -10%, rgba(183,154,98,0.14), transparent 60%), radial-gradient(600px 400px at 85% 110%, rgba(35,79,67,0.05), transparent 70%)",
        }}
      />

      {/* Signature ECG line */}
      <div className="ecg-track" aria-hidden>
        <div className="ecg-scroll animate-sweep">
          <EcgWave />
          <EcgWave />
        </div>
      </div>

      <div className="container-shell max-w-[1220px] min-h-[calc(100vh-88px)] grid place-items-center text-center py-[64px] md:py-[90px] min-w-0">
        <div className="max-w-[1000px] w-full min-w-0">
          <div
            className="mx-auto mb-6 w-[96px] h-[96px] md:w-[112px] md:h-[112px] rounded-full overflow-hidden relative animate-floatIn"
            style={{ animationDelay: "0.05s" }}
          >
            <div className="absolute inset-0 animate-pulse60 will-change-transform">
              <Image
                src="/logo.png"
                alt="DBB KARDIO"
                fill
                priority
                sizes="112px"
                className="object-contain"
              />
            </div>
          </div>

          <p
            className="kicker mb-4 animate-floatIn"
            style={{ animationDelay: "0.15s" }}
          >
            {site.descriptor}
          </p>

          <h1
            id="hero-title"
            className="font-display leading-[1.08] tracking-[-0.02em] text-ink text-[clamp(26px,5.8vw,88px)] m-0 animate-floatIn"
            style={{ animationDelay: "0.25s" }}
          >
            <span className="block sm:inline">Dr. medic Denisa</span>{" "}
            <span className="block sm:inline">Babeanu-Bauer</span>
          </h1>

          <div
            className="font-display leading-[1.15] tracking-[0.01em] mt-5 text-[clamp(17px,3.2vw,52px)] animate-floatIn break-words"
            style={{ animationDelay: "0.4s" }}
          >
            KARDIOLOGISCHE PRIVATPRAXIS
          </div>

          <div
            aria-hidden
            className="mx-auto mt-7 h-px w-[120px] bg-gradient-to-r from-transparent via-gold to-transparent animate-floatIn"
            style={{ animationDelay: "0.55s" }}
          />

          <p
            className="max-w-[820px] mx-auto mt-7 mb-8 text-[16px] md:text-[17px] leading-[1.7] text-[#4a4743] animate-floatIn"
            style={{ animationDelay: "0.7s" }}
          >
            Für Privatpatienten, Beihilfeberechtigte und Selbstzahler.
            <br className="hidden sm:inline" /> Gesetzlich Versicherte können
            Termine als Selbstzahler vereinbaren.
          </p>

          <div
            className="flex gap-2.5 justify-center flex-wrap animate-floatIn"
            style={{ animationDelay: "0.85s" }}
          >
            <a
              href="#kontakt"
              className="min-h-[48px] px-5 md:px-6 rounded-full inline-flex items-center justify-center text-[11px] md:text-[12px] font-extrabold tracking-[0.05em] bg-gold text-white border border-gold hover:bg-gold-600 hover:shadow-cardHover transition-all duration-500 ease-editorial"
            >
              TERMIN BUCHEN
            </a>
            <a
              href="#leistungen"
              className="min-h-[48px] px-5 md:px-6 rounded-full inline-flex items-center justify-center text-[11px] md:text-[12px] font-extrabold tracking-[0.05em] border border-gold text-ink hover:bg-gold/10 transition-all duration-500 ease-editorial"
            >
              LEISTUNGEN ANSEHEN
            </a>
          </div>
        </div>
      </div>

      {/* Down cue */}
      <div
        aria-hidden
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted text-[11px] tracking-[0.24em] uppercase flex flex-col items-center gap-2 animate-floatIn"
        style={{ animationDelay: "1.2s", opacity: 0.6 }}
      >
        <span>Scrollen</span>
        <span className="block h-[26px] w-px bg-gradient-to-b from-gold to-transparent" />
      </div>
    </section>
  );
}

function EcgWave() {
  return (
    <svg
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      aria-hidden
      className="text-gold"
    >
      <defs>
        <linearGradient id="ecgFade" x1="0" x2="1">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0" />
          <stop offset="20%" stopColor="currentColor" stopOpacity="0.5" />
          <stop offset="80%" stopColor="currentColor" stopOpacity="0.5" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
      </defs>
      <line
        x1="0"
        y1="60"
        x2="1200"
        y2="60"
        stroke="url(#ecgFade)"
        strokeWidth="1"
        opacity="0.35"
      />
      <path
        d="M0,60 L120,60
           Q135,54 150,60
           L200,60
           L206,58 L212,68 L215,60
           L222,60 L226,20 L232,100 L238,60
           L250,60
           Q270,52 290,60
           L400,60

           L520,60
           Q535,54 550,60
           L600,60
           L606,58 L612,68 L615,60
           L622,60 L626,20 L632,100 L638,60
           L650,60
           Q670,52 690,60
           L800,60

           L920,60
           Q935,54 950,60
           L1000,60
           L1006,58 L1012,68 L1015,60
           L1022,60 L1026,20 L1032,100 L1038,60
           L1050,60
           Q1070,52 1090,60
           L1200,60"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.85"
      />
    </svg>
  );
}
