import { Reveal } from "@/components/Reveal";

const hours = [
  { label: "Montag bis Donnerstag", value: "[wird ergänzt]" },
  { label: "Freitag", value: "[wird ergänzt]" },
  { label: "Samstag und Sonntag", value: "Geschlossen" },
];

export default function Sprechzeiten() {
  return (
    <section id="sprechzeiten" className="relative cv-auto">
      <div className="container-shell max-w-[1220px] py-[56px] md:py-[80px] px-4">
        <div className="grid gap-10 md:gap-12 md:grid-cols-[1fr_1.1fr] items-start">
          <Reveal>
            <div>
              <div className="kicker mb-3">Sprechzeiten</div>
              <h2 className="font-display leading-[1.1] text-[clamp(28px,3.6vw,44px)] tracking-[-0.015em] title-rule">
                Wann Sie uns erreichen.
              </h2>
              <p className="text-muted text-[15px] md:text-[16px] leading-[1.75] mt-6 max-w-[480px]">
                Termine werden ausschließlich nach persönlicher Vereinbarung
                vergeben. Für Rückrufe und organisatorische Fragen sind wir
                innerhalb der angegebenen Zeiten erreichbar.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-[22px] border border-line bg-white/70 p-7 md:p-8">
              <ul className="divide-y divide-line text-[14px] md:text-[15px] leading-[1.7]">
                {hours.map((row) => (
                  <li key={row.label} className="flex justify-between py-3">
                    <span>{row.label}</span>
                    <span className="text-muted">{row.value}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-[16px] border border-forest/25 bg-forest/[0.06] p-4">
                <div className="text-[11px] tracking-[0.14em] uppercase font-extrabold text-forest mb-1.5">
                  Terminabsage
                </div>
                <p className="text-[13px] md:text-[14px] leading-[1.65] text-ink m-0">
                  Bitte sagen Sie vereinbarte Termine spätestens 24 Stunden
                  vorher ab. Nur so können wir den freiwerdenden Platz an
                  andere Patientinnen und Patienten vergeben. Später oder nicht
                  abgesagte Termine müssen wir in Rechnung stellen.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
