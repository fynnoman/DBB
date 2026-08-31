import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ServicesGrid from "@/components/ServicesGrid";
import ScaleToBackground from "@/components/ScaleToBackground";
import PraxisGallery from "@/components/PraxisGallery";
import ErsterTermin from "@/components/ErsterTermin";
import SelbstzahlerInfo from "@/components/SelbstzahlerInfo";
import ContactSection from "@/components/ContactSection";

export default function HomePage() {
  return (
    <>
      <Hero />

      <AboutSection />

      <ScaleToBackground
        image="https://images.unsplash.com/photo-1631815587646-b85a1bb027e1?q=80&w=1800&auto=format&fit=crop"
        eyebrow="Diagnostik · Speckle Tracking"
        headline={
          <>
            Ein präziser Blick auf die{" "}
            <span className="italic text-gold-300">Funktion des Herzens.</span>
          </>
        }
        paragraph="Hochauflösender Herzultraschall mit Speckle-Tracking-Analyse macht selbst feinste Veränderungen der Herzfunktion sichtbar – lange bevor sie Beschwerden verursachen."
      />

      <ServicesGrid />

      <PraxisGallery />

      <ErsterTermin />

      <SelbstzahlerInfo />

      <ContactSection />
    </>
  );
}
