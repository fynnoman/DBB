import Link from "next/link";
import { Reveal } from "@/components/Reveal";

export function PageCta({
  title,
  lead,
  primaryLabel = "TERMIN ANFRAGEN",
  primaryHref = "/#kontakt",
  secondaryLabel = "Zur Kontaktseite",
  secondaryHref = "/kontakt",
}: {
  title?: string;
  lead?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="relative">
      <div className="container-shell max-w-[1440px] py-[72px] md:py-[96px] px-4">
        <Reveal>
          <div className="relative overflow-hidden rounded-[28px] border border-line bg-white/70 backdrop-blur-sm">
            <div
              aria-hidden
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(60% 100% at 100% 0%, rgba(183,154,98,0.12), transparent 60%), radial-gradient(60% 100% at 0% 100%, rgba(35,79,67,0.06), transparent 60%)",
              }}
            />
            <div className="relative p-8 md:p-14 grid gap-6 md:gap-8 md:grid-cols-[1.4fr_1fr] items-center">
              <div>
                <div className="kicker mb-3">Nächster Schritt</div>
                <h3 className="font-display text-[clamp(24px,3vw,36px)] leading-[1.15] text-ink title-rule">
                  {title ?? "Sprechen wir persönlich."}
                </h3>
                <p className="text-muted text-[15px] md:text-[16px] leading-[1.75] mt-5 max-w-[520px]">
                  {lead ??
                    "Termine werden individuell vereinbart. Für Rückfragen zu Vorbereitung, Abrechnung oder speziellen Anliegen ist der direkte Weg der einfachste."}
                </p>
              </div>
              <div className="flex flex-wrap gap-3 md:justify-end">
                <Link
                  href={primaryHref}
                  className="min-h-[52px] px-6 rounded-full inline-flex items-center justify-center text-[12px] font-extrabold tracking-[0.05em] bg-gold text-white border border-gold hover:bg-gold-600 hover:shadow-cardHover transition-all duration-500 ease-editorial"
                >
                  {primaryLabel}
                </Link>
                <Link
                  href={secondaryHref}
                  className="min-h-[52px] px-6 rounded-full inline-flex items-center justify-center text-[12px] font-extrabold tracking-[0.05em] border border-line text-ink hover:border-gold transition-colors"
                >
                  {secondaryLabel}
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
