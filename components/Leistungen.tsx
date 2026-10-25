import Link from "next/link";
import { SectionTitle } from "@/components/SectionTitle";
import { Stagger, StaggerItem } from "@/components/Reveal";

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
      "Nachsorge und langfristige Betreuung aller Krankheitsbilder",
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
      "Labordiagnostik inklusive genetischer Testung",
    ],
  },
  {
    kicker: "Schwerpunkte",
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
  { title: "Kardiologischer Check-up", href: "#kontakt" },
  { title: "Executive Check-up", href: "#kontakt" },
];

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
          {groups.map((g) => (
            <StaggerItem key={g.title}>
              <article className="h-full bg-white/40 border border-line rounded-[20px] p-7 md:p-9 card-lift">
                <div className="kicker">{g.kicker}</div>
                <h3 className="font-display text-[22px] md:text-[26px] mt-3 mb-6 leading-tight">
                  {g.title}
                </h3>
                <ul className="space-y-3 text-[16px] md:text-[17px] leading-[1.65] text-ink/85">
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
          ))}

          <StaggerItem>
            <article className="h-full relative overflow-hidden border border-gold/40 bg-gradient-to-br from-gold-50/70 to-white/60 rounded-[20px] p-7 md:p-9 card-lift">
              <span
                aria-hidden
                className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent"
              />
              <div className="kicker text-gold">Direkt buchbar</div>
              <h3 className="font-display text-[22px] md:text-[26px] mt-3 mb-6 leading-tight">
                Kardiologische Check-ups
              </h3>
              <div className="space-y-3">
                {checkups.map((c) => (
                  <a
                    key={c.title}
                    href={c.href}
                    className="group flex items-center justify-between gap-4 rounded-[14px] border border-gold/50 bg-white/80 px-5 py-4 hover:border-gold hover:bg-white hover:shadow-cardHover transition-all duration-500 ease-editorial"
                  >
                    <span className="text-[16px] md:text-[17px] font-semibold text-ink">
                      {c.title}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] md:text-[12px] tracking-[0.12em] font-extrabold uppercase text-gold group-hover:gap-2 transition-all duration-500 ease-editorial">
                      Buchen
                      <span aria-hidden>→</span>
                    </span>
                  </a>
                ))}
              </div>
            </article>
          </StaggerItem>
        </Stagger>

        <div className="mt-10 md:mt-14 flex justify-center">
          <Link
            href="/leistungen"
            className="inline-flex items-center gap-2 text-[14px] md:text-[15px] font-semibold tracking-[0.02em] text-forest border-b border-gold/60 pb-1 hover:border-gold hover:text-gold transition-colors duration-500 ease-editorial"
          >
            Alle Leistungen und Schwerpunkte entdecken
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
