import Image from "next/image";
import { site } from "@/lib/site";

/**
 * Editorial hero.
 * The signature ECG line now lives in the navbar's bottom edge.
 * This section keeps only a very soft warm wash and a 60bpm breathing
 * pulse on the central logo mark.
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

      <div className="container-shell max-w-[1220px] min-h-[calc(100vh-88px)] grid place-items-center text-center pt-[12px] pb-[64px] md:pt-[32px] md:pb-[90px] min-w-0">
        <div className="max-w-[1100px] w-full min-w-0">
          <div
            className="mx-auto mb-5 md:mb-7 w-[132px] h-[132px] md:w-[160px] md:h-[160px] rounded-full overflow-hidden relative animate-floatIn -mt-2 md:mt-0"
            style={{ animationDelay: "0.05s" }}
          >
            <div className="absolute inset-0 animate-pulse60 will-change-transform">
              <Image
                src="/logo.png"
                alt="DBB KARDIO"
                fill
                priority
                sizes="(min-width: 768px) 320px, 264px"
                quality={95}
                className="object-contain"
              />
            </div>
          </div>

          <p
            className="font-display leading-[1.1] tracking-[-0.005em] mb-4 md:mb-5 text-[clamp(29px,3.1vw,42px)] font-semibold text-gold animate-floatIn"
            style={{ animationDelay: "0.15s" }}
          >
            {site.descriptor}
          </p>

          <h1
            id="hero-title"
            className="font-display leading-[1.06] tracking-[-0.02em] text-ink text-[clamp(36px,5vw,78px)] m-0 animate-floatIn"
            style={{ animationDelay: "0.25s" }}
          >
            <span className="block sm:inline">Dr. medic Denisa</span>{" "}
            <span className="block sm:inline">Babeanu-Bauer</span>
          </h1>

          <p
            className="max-w-[820px] mx-auto mt-5 md:mt-6 mb-6 md:mb-7 text-[18px] md:text-[18px] leading-[1.7] text-[#4a4743] animate-floatIn"
            style={{ animationDelay: "0.55s" }}
          >
            Für Privatpatienten und Selbstzahler.
          </p>

          <div
            className="flex justify-center animate-floatIn"
            style={{ animationDelay: "0.7s" }}
          >
            <button
              type="button"
              className="min-h-[48px] px-5 md:px-6 rounded-full inline-flex items-center justify-center text-[12px] md:text-[13px] font-extrabold tracking-[0.05em] bg-gold text-white border border-gold hover:bg-gold-600 hover:shadow-cardHover transition-all duration-500 ease-editorial"
            >
              TERMIN BUCHEN
            </button>
          </div>
        </div>
      </div>

    </section>
  );
}
