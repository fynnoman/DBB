import { MenuOnlySection } from "@/components/MenuOnly";
import { SectionTitle } from "@/components/SectionTitle";

export default function Kooperationen() {
  return (
    <MenuOnlySection id="kooperationen">
      <div className="container-shell max-w-[1440px] py-[72px] md:py-[96px] px-4">
        <SectionTitle
          kicker="Kooperationen"
          title="Eng vernetzt mit der kardiologischen Versorgung der Region."
          lead="Für weiterführende Diagnostik und invasive Untersuchungen arbeiten wir mit kardiologischen Kliniken und Zentren der Region zusammen, mit denen eine langjährige fachliche Zusammenarbeit besteht. Wenn eine Herzkatheteruntersuchung, elektrophysiologische Diagnostik oder eine andere invasive Maßnahme erforderlich ist, unterstützen wir bei der gezielten Weitervermittlung und Terminorganisation."
        />
      </div>
    </MenuOnlySection>
  );
}
