import PraxisGallery from "@/components/PraxisGallery";
import ErsterTermin from "@/components/ErsterTermin";
import SelbstzahlerInfo from "@/components/SelbstzahlerInfo";
import { site } from "@/lib/site";

export const metadata = {
  title: "Praxis · DBB Kardio",
  description:
    "Ein Blick in die kardiologische Privatpraxis in der Poststraße 43, 66386 St. Ingbert. Anfahrt, Anmeldung, Räume.",
};

export default function PraxisPage() {
  return (
    <>
      <section
        className="relative bg-ivory-50 pt-28 sm:pt-32 md:pt-40 pb-12 md:pb-16"
        style={{ paddingTop: "calc(var(--sait) + 96px)" }}
      >
        <div className="mx-auto max-w-[1400px] px-4 md:px-8 grid gap-8 md:gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="eyebrow rule-gold">Praxis</p>
            <h1 className="mt-6 md:mt-8 font-serif text-forest-800 text-[clamp(2.25rem,8vw,5rem)] leading-[1.02] tracking-brand-tight">
              Ein Ort für{" "}
              <span className="italic text-forest-700">Herzgesundheit.</span>
            </h1>
            <p className="mt-5 md:mt-6 max-w-2xl text-[15px] md:text-lg leading-relaxed text-forest-700/90">
              Sie finden uns in der Poststraße 43 in St. Ingbert. Ein Aufzug führt Sie in die 5.
              Etage. Wir freuen uns auf Sie.
            </p>
          </div>

          <div className="md:col-span-5">
            <div className="glass rounded-3xl p-5 sm:p-6">
              <p className="eyebrow">Adresse</p>
              <p className="mt-3 font-serif text-xl sm:text-2xl text-forest-800 leading-snug">
                {site.address.street}
                <br />
                {site.address.zipCity}
              </p>
              <p className="mt-2 text-sm text-forest-700/80">{site.address.floor}</p>

              <div className="mt-5 md:mt-6 grid grid-cols-2 gap-3 text-sm">
                <a
                  href="https://maps.google.com/?q=Poststra%C3%9Fe+43,+66386+St.+Ingbert"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full glass px-4 py-3 text-center font-medium text-forest-800 hover:bg-white/70 transition-colors min-h-[44px] inline-flex items-center justify-center"
                >
                  Google Maps
                </a>
                <a
                  href="https://maps.apple.com/?q=Poststra%C3%9Fe+43,+66386+St.+Ingbert"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full glass px-4 py-3 text-center font-medium text-forest-800 hover:bg-white/70 transition-colors min-h-[44px] inline-flex items-center justify-center"
                >
                  Apple Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PraxisGallery />
      <ErsterTermin />
      <SelbstzahlerInfo />
    </>
  );
}
