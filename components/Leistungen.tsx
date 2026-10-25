import { Stagger, StaggerItem } from "@/components/Reveal";

type Tone = "default" | "warm" | "forest";

type Group = {
  title: string;
  items: string[];
  tone?: Tone;
};

const groups: Group[] = [
  {
    title: "Kardiologische Vorsorge und Nachsorge",
    items: [
      "Vorsorge und Prävention der kardiovaskulären Erkrankungen",
      "Nachsorge aller Herzerkrankungen (KHK, Herzklappenfehler, Herzinfarkt, Bypass- und Herzklappenoperationen, Herzrhythmusstörungen, Herzinsuffizienz, angeborene Herzfehler, Herzmuskelentzündung, Bluthochdruck, Lungenhochdruck)",
    ],
  },
  {
    title: "Kardiologische Diagnostik",
    tone: "warm",
    items: [
      "Ruhe-EKG",
      "Vektorkardiographie",
      "Belastungsergometrie",
      "Echokardiographie und Speckle-Tracking-Analyse",
      "Stressechokardiographie (Echokardiographie unter Belastung)",
      "Duplexsonographie der Halsgefässe",
      "Langzeit-EKG mit KI-gestützter Analyse",
      "Langzeit-Blutdruckmessung",
    ],
  },
  {
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

export default function Leistungen() {
  return (
    <section
      id="leistungen"
      className="relative border-y border-line bg-white/[0.35] cv-auto"
    >
      <div className="container-shell max-w-[1440px] py-[72px] md:py-[96px] px-4">
        <Stagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
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
                  <h3 className="font-display text-[27px] md:text-[27px] mb-6 leading-tight">
                    {g.title}
                  </h3>
                  <ul className="space-y-3 text-[18px] md:text-[17px] leading-[1.7] text-ink/85">
                    {g.items.map((it) => (
                      <li key={it} className="flex gap-3 items-start">
                        <span
                          aria-hidden
                          className="mt-[12px] md:mt-[11px] inline-block h-px w-3 bg-gold flex-shrink-0"
                        />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </StaggerItem>
            );
          })}
        </Stagger>

        <Stagger className="grid md:grid-cols-2 gap-5 md:gap-6 mt-5 md:mt-6">
          {checkups.map((c) => (
            <StaggerItem key={c.title}>
              <article className="group relative h-full overflow-hidden border border-gold/50 bg-gradient-to-br from-gold-50/80 to-white/60 rounded-[22px] p-7 md:p-9 card-lift flex flex-col">
                <span
                  aria-hidden
                  className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent"
                />
                <h3 className="font-display text-[27px] md:text-[27px] mb-6 leading-tight">
                  {c.title}
                </h3>
                <a
                  href={c.href}
                  className="mt-auto inline-flex items-center justify-center gap-2 min-h-[48px] rounded-full bg-gold text-white px-6 text-[13px] md:text-[12px] font-extrabold tracking-[0.14em] uppercase hover:bg-gold-600 hover:shadow-cardHover transition-all duration-500 ease-editorial"
                >
                  Termin buchen
                  <span aria-hidden>→</span>
                </a>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
