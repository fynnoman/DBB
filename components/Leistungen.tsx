import { SectionTitle } from "@/components/SectionTitle";
import { Stagger, StaggerItem } from "@/components/Reveal";

type Tone = "default" | "warm" | "forest";

type Group = {
  kicker: string;
  title: string;
  items: string[];
  tone?: Tone;
};

const groups: Group[] = [
  {
    kicker: "Vorsorge und Nachsorge",
    title: "Kardiologische Vorsorge und Nachsorge",
    items: [
      "Herz-Kreislauf-Vorsorge und Prävention",
      "Nachsorge und langfristige Betreuung aller Krankheitsbilder (KHK, Herzklappenfehler, Herzinfarkt, Bypass- und Herzklappenoperationen, Herzrhythmusstörungen, Herzinsuffizienz, angeborene Herzfehler, Herzmuskelentzündung, Bluthochdruck, Lungenhochdruck)",
    ],
  },
  {
    kicker: "Diagnostik",
    title: "Kardiologische Diagnostik",
    tone: "warm",
    items: [
      "Echokardiographie",
      "Speckle-Tracking-Analyse",
      "Ruhe-EKG",
      "Belastungsergometrie",
      "Langzeit-EKG mit KI-gestützter Analyse",
      "Langzeit-Blutdruckmessung",
      "Stressechokardiographie",
      "Carotis-Duplexsonographie",
      "Labordiagnostik inklusive genetischer Testung bei bestimmten klinischen Fragen",
    ],
  },
  {
    kicker: "Schwerpunkte",
    title: "Weitere kardiologische Leistungen",
    tone: "forest",
    items: [
      "Präoperative kardiologische Risikobeurteilung",
      "Kardiologische Zweitmeinung",
      "Kardio-Onkologie",
      "Kardio-Rheumatologie",
      "Frauenherzsprechstunde",
      "Abklärung seltener Herzerkrankungen",
    ],
  },
];

const checkups = [
  { title: "Kardiologischer Check-up", href: "#kontakt" },
  { title: "Executive Check-up", href: "#kontakt" },
];

const toneStyles: Record<Tone, string> = {
  default: "bg-white/40 border-line",
  warm: "bg-gradient-to-br from-gold-50/70 to-white/40 border-gold/35",
  forest:
    "bg-gradient-to-br from-[rgba(35,79,67,0.06)] to-white/40 border-[rgba(35,79,67,0.22)]",
};

const kickerStyles: Record<Tone, string> = {
  default: "text-gold",
  warm: "text-gold",
  forest: "text-forest",
};

export default function Leistungen() {
  return (
    <section
      id="leistungen"
      className="relative border-y border-line bg-white/[0.35] cv-auto"
    >
      <div className="container-shell max-w-[1440px] py-[72px] md:py-[96px] px-4">
        <SectionTitle
          kicker="Leistungen"
          title="Kardiologische Diagnostik und Betreuung."
        />

        <Stagger className="grid md:grid-cols-2 gap-5 md:gap-6">
          {groups.map((g) => {
            const tone: Tone = g.tone ?? "default";
            return (
              <StaggerItem key={g.title}>
                <article
                  className={`group relative h-full rounded-[22px] border p-7 md:p-9 card-lift overflow-hidden ${toneStyles[tone]}`}
                >
                  {tone !== "default" && (
                    <span
                      aria-hidden
                      className={`pointer-events-none absolute top-0 left-0 right-0 h-px ${
                        tone === "warm"
                          ? "bg-gradient-to-r from-transparent via-gold to-transparent"
                          : "bg-gradient-to-r from-transparent via-forest to-transparent"
                      }`}
                    />
                  )}
                  <div className="flex items-start justify-between gap-3">
                    <div className={`kicker ${kickerStyles[tone]}`}>
                      {g.kicker}
                    </div>
                    {tone !== "default" && (
                      <span
                        aria-hidden
                        className={`inline-block h-1.5 w-1.5 rounded-full mt-1 ${
                          tone === "warm" ? "bg-gold" : "bg-forest"
                        }`}
                      />
                    )}
                  </div>
                  <h3 className="font-display text-[23px] md:text-[27px] mt-3 mb-6 leading-tight">
                    {g.title}
                  </h3>
                  <ul className="space-y-3 text-[16px] md:text-[17px] leading-[1.7] text-ink/85">
                    {g.items.map((it) => (
                      <li key={it} className="flex gap-3 items-start">
                        <span
                          aria-hidden
                          className="mt-[11px] inline-block h-px w-3 bg-gold flex-shrink-0"
                        />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </StaggerItem>
            );
          })}

          <StaggerItem>
            <article className="group relative h-full overflow-hidden border border-gold/50 bg-gradient-to-br from-gold-50/80 to-white/60 rounded-[22px] p-7 md:p-9 card-lift">
              <span
                aria-hidden
                className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent"
              />
              <div className="flex items-start justify-between gap-3">
                <div className="kicker text-gold">Direkt buchbar</div>
                <span
                  aria-hidden
                  className="inline-block h-1.5 w-1.5 rounded-full mt-1 bg-gold"
                />
              </div>
              <h3 className="font-display text-[23px] md:text-[27px] mt-3 mb-6 leading-tight">
                Kardiologische Check-ups
              </h3>
              <div className="space-y-3">
                {checkups.map((c) => (
                  <a
                    key={c.title}
                    href={c.href}
                    className="group/btn flex items-center justify-between gap-4 rounded-[14px] border border-gold/50 bg-white/85 px-5 py-4 hover:border-gold hover:bg-white hover:shadow-cardHover transition-all duration-500 ease-editorial"
                  >
                    <span className="text-[16px] md:text-[17px] font-semibold text-ink">
                      {c.title}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] md:text-[12px] tracking-[0.14em] font-extrabold uppercase text-gold group-hover/btn:gap-2 transition-all duration-500 ease-editorial">
                      Buchen
                      <span aria-hidden>→</span>
                    </span>
                  </a>
                ))}
              </div>
            </article>
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  );
}
