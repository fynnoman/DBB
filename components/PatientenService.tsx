import { MenuOnlySection } from "@/components/MenuOnly";
import { SectionTitle } from "@/components/SectionTitle";
import { Stagger, StaggerItem } from "@/components/Reveal";

export default function PatientenService() {
  return (
    <MenuOnlySection id="patienten-service">
      <div className="container-shell max-w-[1440px] py-[72px] md:py-[96px] px-4">
        <SectionTitle
          kicker="Patienteninformation"
          title="Aktuelles, Abwesenheiten & wichtige Hinweise."
          lead="Urlaub, Fortbildungen, kurzfristige Abwesenheiten und organisatorische Hinweise werden hier aktuell veröffentlicht."
        />

        <Stagger className="grid md:grid-cols-3 gap-4 md:gap-5">
          <StaggerItem>
            <article className="h-full bg-white/60 border border-line rounded-[20px] p-7 card-lift">
              <div className="kicker">Aktuelles</div>
              <h3 className="font-display text-[22px] mt-2.5 mb-2.5">
                Urlaub & Fortbildung
              </h3>
              <p className="text-muted leading-[1.65]">
                Hier informieren wir frühzeitig über Urlaubszeiten,
                Fortbildungen und vorübergehende Änderungen der
                Erreichbarkeit.
              </p>
            </article>
          </StaggerItem>

          <StaggerItem>
            <article className="h-full bg-white/60 border border-line rounded-[20px] p-7 card-lift">
              <div className="kicker">Prävention</div>
              <h3 className="font-display text-[22px] mt-2.5 mb-2.5">
                Herz-Risiko-Check
              </h3>
              <p className="text-muted leading-[1.65]">
                Ein digitaler Herz-Risiko-Check kann zukünftig zur
                orientierenden Einschätzung klassischer kardiovaskulärer
                Risikofaktoren angeboten werden.
              </p>
              <div className="mt-5">
                <a
                  href="#"
                  className="inline-flex min-h-[44px] px-5 rounded-full items-center justify-center text-[12px] font-extrabold tracking-[0.05em] border border-gold text-ink hover:bg-gold/10 transition-all duration-500 ease-editorial"
                >
                  RISIKO-CHECK ÖFFNEN
                </a>
              </div>
            </article>
          </StaggerItem>

          <StaggerItem>
            <article className="h-full bg-white/60 border border-line rounded-[20px] p-7 card-lift">
              <div className="kicker">Wissen</div>
              <h3 className="font-display text-[22px] mt-2.5 mb-2.5">
                Medikamente verständlich erklärt
              </h3>
              <p className="text-muted leading-[1.65]">
                Wirkung, typische Einsatzgebiete und wichtige Nebenwirkungen
                häufiger Herz-Kreislauf-Medikamente werden in einer eigenen
                Wissensrubrik erklärt.
              </p>
              <div className="mt-5">
                <a
                  href="#medikamente"
                  className="inline-flex min-h-[44px] px-5 rounded-full items-center justify-center text-[12px] font-extrabold tracking-[0.05em] border border-gold text-ink hover:bg-gold/10 transition-all duration-500 ease-editorial"
                >
                  MEDIKAMENTE ANSEHEN
                </a>
              </div>
            </article>
          </StaggerItem>
        </Stagger>
      </div>
    </MenuOnlySection>
  );
}
