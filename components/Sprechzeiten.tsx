import { Reveal } from "@/components/Reveal";

const hours = [
  { label: "Montag bis Donnerstag", value: "[wird ergänzt]" },
  { label: "Freitag", value: "[wird ergänzt]" },
  { label: "Samstag und Sonntag", value: "Geschlossen" },
];

export default function Sprechzeiten() {
  return (
    <section id="sprechzeiten" className="relative cv-auto">
      <div className="container-shell max-w-[720px] py-[56px] md:py-[80px] px-4">
        <Reveal>
          <div className="text-center mb-8">
            <div className="kicker mb-3">Öffnungszeiten</div>
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
          </div>
        </Reveal>
      </div>
    </section>
  );
}
