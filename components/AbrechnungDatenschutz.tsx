import { MenuOnlySection } from "@/components/MenuOnly";
import { SectionTitle } from "@/components/SectionTitle";
import { Stagger, StaggerItem } from "@/components/Reveal";

export default function AbrechnungDatenschutz() {
  return (
    <MenuOnlySection id="abrechnung-datenschutz">
      <div className="border-y border-line bg-white/[0.35]">
        <div className="container-shell max-w-[1440px] py-[72px] md:py-[96px] px-4">
          <SectionTitle
            kicker="Abrechnung & Datenschutz"
            title="Transparent geregelt, von Anfang an."
          />

          <Stagger className="grid md:grid-cols-2 gap-4 md:gap-5">
            <StaggerItem>
              <article className="h-full bg-white/60 border border-line rounded-[20px] p-7 card-lift">
                <div className="kicker">Private Verrechnungsstelle</div>
                <h3 className="font-display text-[22px] mt-2.5 mb-2.5">
                  Abrechnung über eine PVS
                </h3>
                <p className="text-muted leading-[1.65]">
                  Die privatärztliche Abrechnung kann über eine private
                  Verrechnungsstelle erfolgen. Hierfür ist, soweit
                  erforderlich, Ihre Einwilligung zur Datenübermittlung
                  notwendig.
                </p>
              </article>
            </StaggerItem>

            <StaggerItem>
              <article className="h-full bg-white/60 border border-line rounded-[20px] p-7 card-lift">
                <div className="kicker">Labor & Datenübermittlung</div>
                <h3 className="font-display text-[22px] mt-2.5 mb-2.5">
                  Einwilligung & Datenschutz
                </h3>
                <p className="text-muted leading-[1.65]">
                  Wenn Untersuchungen über ein Kooperationslabor erfolgen oder
                  Daten zur Abrechnung an eine PVS übermittelt werden, erhalten
                  Sie die hierfür notwendigen Datenschutz- und
                  Einwilligungsformulare bereits zu Beginn der Behandlung.
                </p>
              </article>
            </StaggerItem>
          </Stagger>
        </div>
      </div>
    </MenuOnlySection>
  );
}
