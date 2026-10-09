import Hero from "@/components/Hero";
import Sprechzeiten from "@/components/Sprechzeiten";
import PortraitIntro from "@/components/PortraitIntro";
import Leistungen from "@/components/Leistungen";
import Praxis from "@/components/Praxis";
import Abrechnung from "@/components/Abrechnung";
import PatientenService from "@/components/PatientenService";
import Medikamente from "@/components/Medikamente";
import AbrechnungDatenschutz from "@/components/AbrechnungDatenschutz";
import Kontakt from "@/components/Kontakt";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Sprechzeiten />
      <PortraitIntro />

      <div className="border-t border-line bg-white/[0.62]">
        <Leistungen />
        <Praxis />
        <Abrechnung />
        <PatientenService />
        <Medikamente />
        <AbrechnungDatenschutz />
        <Kontakt />
      </div>
    </>
  );
}
