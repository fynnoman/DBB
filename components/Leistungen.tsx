import Link from "next/link";
import { Reveal } from "@/components/Reveal";

type Group = {
  kicker: string;
  title: string;
  items: string[];
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
    kicker: "Weitere Leistungen",
    title: "Weitere kardiologische Leistungen",
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
  {
    href: "/basis-checkup",
    kicker: "Direkt buchbar",
    title: "Kardiologischer Check-up",
    body: "Strukturierte kardiologische Ersteinschätzung mit Anamnese, Untersuchung, EKG und Basis-Echokardiographie.",
  },
  {
    href: "/executive-checkup",
    kicker: "Direkt buchbar",
    title: "Executive Check-up",
    body: "Umfassende kardiovaskuläre Risikoanalyse mit erweiterter Diagnostik, Ergometrie und ausführlichem Bericht.",
  },
];

export default function Leistungen() {
  return (
    <section
      id="leistungen"
      className="relative border-y border-line bg-white/[0.35] cv-auto"
    >
      <div className="container-shell max-w-[1200px] py-[72px] md:py-[96px] px-4">
        <Reveal>
          <div className="mb-10 md:mb-14 max-w-[720px]">
            <div className="kicker mb-3">Leistungen</div>
          </div>
        </Reveal>

        <div className="divide-y divide-line">
          {groups.map((g) => (
            <Reveal key={g.title}>
              <div className="grid md:grid-cols-[260px_1fr] gap-6 md:gap-10 py-8 md:py-10">
                <div>
                  <div className="text-[11px] tracking-[0.14em] font-extrabold uppercase text-gold">
                    {g.kicker}
                  </div>
                  <h3 className="font-display text-[22px] md:text-[26px] leading-[1.2] mt-2 text-forest">
                    {g.title}
                  </h3>
                </div>
                <ul className="columns-1 md:columns-2 gap-x-10 text-ink/85 text-[15px] md:text-[16px] leading-[1.75] space-y-1.5">
                  {g.items.map((it) => (
                    <li
                      key={it}
                      className="break-inside-avoid pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[0.75em] before:w-2 before:h-px before:bg-gold"
                    >
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}

          <Reveal>
            <div className="grid md:grid-cols-[260px_1fr] gap-6 md:gap-10 py-8 md:py-10">
              <div>
                <div className="text-[11px] tracking-[0.14em] font-extrabold uppercase text-gold">
                  Check-ups
                </div>
                <h3 className="font-display text-[22px] md:text-[26px] leading-[1.2] mt-2 text-forest">
                  Kardiologische Check-ups
                </h3>
                <p className="text-muted text-[14px] leading-[1.65] mt-3">
                  Als Pakete direkt buchbar.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {checkups.map((c) => (
                  <Link
                    key={c.href}
                    href={c.href}
                    className="group block rounded-[18px] border border-gold/35 bg-gradient-to-br from-gold-50/60 to-white/60 p-6 transition-colors duration-500 ease-editorial hover:border-gold"
                  >
                    <div className="text-[11px] tracking-[0.14em] font-extrabold uppercase text-gold">
                      {c.kicker}
                    </div>
                    <div className="font-display text-[20px] md:text-[22px] leading-[1.2] mt-2 text-ink">
                      {c.title}
                    </div>
                    <p className="text-ink/80 text-[14px] md:text-[15px] leading-[1.7] mt-2 m-0">
                      {c.body}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-[12px] font-extrabold tracking-[0.08em] uppercase text-gold group-hover:gap-2 transition-all duration-500 ease-editorial">
                      Mehr erfahren
                      <span aria-hidden>→</span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="mt-10 md:mt-12 flex justify-center">
            <Link
              href="/leistungen"
              className="inline-flex items-center gap-2 text-[13px] md:text-[14px] font-semibold tracking-[0.02em] text-forest border-b border-gold/60 pb-1 hover:border-gold hover:text-gold transition-colors duration-500 ease-editorial"
            >
              Alle Leistungen und Schwerpunkte entdecken
              <span aria-hidden>→</span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
