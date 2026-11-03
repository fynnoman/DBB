import type { Metadata } from "next";
import { site } from "@/lib/site";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: `Kontakt | ${site.brand}`,
  description:
    "Vorbereitung auf Ihren Termin, Abrechnung für Privatpatienten und Selbstzahler, Terminabsagen und Hinweise für medizinische Notfälle in der kardiologischen Privatpraxis Dr. medic Denisa Babeanu-Bauer in Saarlouis.",
};

export default function KontaktPage() {
  return (
    <section className="container-shell max-w-[900px] px-4 py-20 md:py-28">
      <Reveal>
        <section className="mb-14 md:mb-20">
          <p className="kicker mb-3">Gut vorbereitet zu Ihrem Termin</p>
          <h2 className="font-display text-[clamp(26px,2.8vw,36px)] leading-[1.15] mb-5">
            Was sollten Sie mitbringen?
          </h2>
          <p className="text-[16px] md:text-[17px] leading-[1.75] text-ink/85 mb-5">
            Bitte bringen Sie zu Ihrem Termin, soweit vorhanden, folgende
            Unterlagen mit:
          </p>
          <ul className="space-y-3 text-[16px] md:text-[17px] leading-[1.7] text-ink/85">
            {[
              "Aktuellen Medikamentenplan",
              "Relevante ärztliche Vorbefunde und Krankenhausberichte",
              "Aktuelle Laborwerte",
              "Frühere kardiologische Untersuchungsbefunde",
            ].map((item) => (
              <li key={item} className="flex gap-3 items-start">
                <span
                  aria-hidden
                  className="mt-[11px] inline-block h-px w-3 bg-gold flex-shrink-0"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      </Reveal>

      <Reveal>
        <section className="mb-14 md:mb-20">
          <p className="kicker mb-5">Privatpatienten & Selbstzahler</p>
          <div className="space-y-5 text-[16px] md:text-[17px] leading-[1.75] text-ink/85">
            <p>
              Meine Praxis steht sowohl privat als auch gesetzlich
              versicherten Patientinnen und Patienten offen.
            </p>
            <p>
              Die Abrechnung erfolgt nach der Gebührenordnung für Ärzte (GOÄ).
            </p>
            <p>
              Gesetzlich Versicherte sind als Selbstzahler herzlich
              willkommen. Da meine Praxis nicht an der vertragsärztlichen
              Versorgung teilnimmt, erfolgt keine Abrechnung über die
              gesetzlichen Krankenkassen.
            </p>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="mb-14 md:mb-20">
          <p className="kicker mb-5">Terminabsagen</p>
          <div className="space-y-5 text-[16px] md:text-[17px] leading-[1.75] text-ink/85">
            <p>
              Um ausreichend Zeit für eine individuelle Betreuung einplanen zu
              können, arbeite ich mit festen Terminen.
            </p>
            <p>
              Sollten Sie einen Termin nicht wahrnehmen können, bitte ich Sie,
              diesen möglichst spätestens 24 Stunden vorher abzusagen.
            </p>
            <p>
              So ermöglichen Sie es anderen Patientinnen und Patienten, den
              frei gewordenen Termin wahrzunehmen.
            </p>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <aside
          role="note"
          aria-labelledby="notfall-heading"
          className="rounded-[22px] border p-7 md:p-9"
          style={{
            backgroundColor: "#faf2e8",
            borderColor: "rgba(139, 26, 26, 0.22)",
          }}
        >
          <div
            className="text-[12px] tracking-[0.18em] uppercase font-extrabold mb-3"
            style={{ color: "#8b1a1a" }}
          >
            Wichtiger Hinweis
          </div>
          <h2
            id="notfall-heading"
            className="font-display text-[clamp(24px,2.6vw,32px)] leading-[1.2] mb-5"
            style={{ color: "#8b1a1a" }}
          >
            Medizinische Notfälle
          </h2>
          <div className="space-y-4 text-[16px] md:text-[17px] leading-[1.75] text-ink">
            <p>
              Unsere Praxis ist eine kardiologische Terminpraxis und keine
              Notaufnahme.
            </p>
            <p>
              Bei akuten Brustschmerzen, plötzlich auftretender Atemnot,
              Bewusstlosigkeit oder anderen Beschwerden, die auf einen
              medizinischen Notfall hinweisen, wählen Sie bitte unverzüglich
              den Notruf{" "}
              <a
                href="tel:112"
                className="font-extrabold underline-offset-4 hover:underline"
                style={{ color: "#8b1a1a" }}
              >
                112
              </a>
              .
            </p>
            <p>
              Bitte warten Sie in solchen Situationen nicht auf einen
              regulären Praxistermin.
            </p>
            <p className="font-semibold" style={{ color: "#8b1a1a" }}>
              Ihre Sicherheit hat oberste Priorität.
            </p>
          </div>
        </aside>
      </Reveal>

      <Reveal>
        <p className="mt-14 md:mt-20 text-center text-[17px] md:text-[18px] leading-[1.7] text-ink/85 italic">
          Vielen Dank für Ihr Verständnis und Ihre Mithilfe.
        </p>
      </Reveal>
    </section>
  );
}
