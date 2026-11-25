import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";

const items = [
  {
    kicker: "Privatpatienten",
    body: "Abrechnung der ärztlichen Leistungen nach der Gebührenordnung für Ärzte (GOÄ).",
  },
  {
    kicker: "Selbstzahler",
    body: "Auch gesetzlich versicherte Patientinnen und Patienten sind willkommen. Die Behandlung wird privatärztlich nach GOÄ abgerechnet.",
  },
];

export default function Abrechnung() {
  return (
    <section
      id="patienten"
      className="relative border-y border-line bg-white/[0.35] cv-auto"
    >
      <div className="container-shell max-w-[1440px] py-[72px] md:py-[96px] px-4">
        <Reveal>
          <div className="max-w-[900px] mb-7 md:mb-9">
            <h2 className="text-[clamp(20px,3vw,36px)] tracking-[0.08em] uppercase font-extrabold text-gold leading-[1.15]">
              Abrechnung
            </h2>
          </div>
        </Reveal>

        <Stagger className="grid md:grid-cols-2 gap-4 md:gap-5">
          {items.map((it) => (
            <StaggerItem key={it.kicker}>
              <article className="h-full bg-white/60 border border-line rounded-[20px] p-6 md:p-7 card-lift">
                <h3 className="font-display text-[19px] md:text-[22px] mt-0 mb-2.5 leading-[1.25]">
                  {it.kicker}
                </h3>
                <p className="text-muted text-[15px] md:text-[16px] leading-[1.65] m-0">
                  {it.body}
                </p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
