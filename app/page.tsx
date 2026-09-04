import Hero from "@/components/Hero";
import PortraitIntro from "@/components/PortraitIntro";
import Leistungen from "@/components/Leistungen";
import Praxis from "@/components/Praxis";
import Abrechnung from "@/components/Abrechnung";
import PatientenService from "@/components/PatientenService";
import Medikamente from "@/components/Medikamente";
import Kooperationen from "@/components/Kooperationen";
import AbrechnungDatenschutz from "@/components/AbrechnungDatenschutz";
import Kontakt from "@/components/Kontakt";

export default function HomePage() {
  return (
    <>
      <Hero />
      <PortraitIntro />

      <div className="border-t border-line bg-white/[0.62]">
        <Leistungen />
        <Praxis />
        <Abrechnung />
        <PatientenService />
        <Medikamente />
        <Kooperationen />
        <AbrechnungDatenschutz />
        <Kontakt />
      </div>
    </>
  );
}
