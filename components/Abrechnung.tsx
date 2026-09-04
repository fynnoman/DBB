import { SectionTitle } from "@/components/SectionTitle";
import { Stagger, StaggerItem } from "@/components/Reveal";

const items = [
  {
    kicker: "Privatpatienten",
    title: "Private Krankenversicherung",
    body: "Abrechnung der ärztlichen Leistungen nach der Gebührenordnung für Ärzte (GOÄ).",
  },
  {
    kicker: "Beihilfe",
    title: "Beihilfeberechtigte",
    body: "Auch beihilfeberechtigte Patientinnen und Patienten können sämtliche angebotenen Leistungen in Anspruch nehmen.",
  },
  {
    kicker: "Gesetzlich versichert",
    title: "GKV als Selbstzahler",
    body: "Gesetzlich Versicherte sind als Selbstzahler willkommen. Die Behandlung wird privatärztlich nach GOÄ abgerechnet.",
  },
];

export default function Abrechnung() {
  return (
    <section
      id="patienten"
      className="relative border-y border-line bg-white/[0.35] cv-auto"
    >
      <div className="container-shell max-w-[1440px] py-[72px] md:py-[96px] px-4">
        <SectionTitle kicker="Patienteninformation" title="Abrechnung." />

        <Stagger className="grid md:grid-cols-3 gap-4 md:gap-5">
          {items.map((it) => (
            <StaggerItem key={it.title}>
              <article className="h-full bg-white/60 border border-line rounded-[20px] p-7 card-lift">
                <div className="kicker">{it.kicker}</div>
                <h3 className="font-display text-[22px] mt-2.5 mb-2.5">
                  {it.title}
                </h3>
                <p className="text-muted leading-[1.65] m-0">{it.body}</p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
