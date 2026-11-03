import type { Metadata } from "next";
import { site } from "@/lib/site";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: `Wichtige Informationen | ${site.brand}`,
  description: `Wichtige Informationen zur kardiologischen Privatpraxis ${site.brand} in ${site.city}. Adresse, Öffnungszeiten und organisatorische Hinweise.`,
};

const hours = [
  { label: "Montag bis Freitag", value: "8 bis 13 Uhr" },
  {
    label: "Montag, Dienstag und Donnerstag Nachmittag",
    value: "nach Vereinbarung",
  },
  { label: "Samstag und Sonntag", value: "Geschlossen" },
];

export default function WichtigeInformationenPage() {
  return (
    <section className="container-shell max-w-[1100px] px-4 py-20 md:py-28">
      <Reveal>
        <div className="mb-10 md:mb-14">
          <p className="kicker mb-3">Wichtige Informationen</p>
          <h1 className="font-display text-[clamp(33px,4vw,55px)] leading-[1.1] title-rule">
            Alles Wichtige auf einen Blick.
          </h1>
        </div>
      </Reveal>

      <div className="grid gap-5 md:gap-6 md:grid-cols-2">
        <Reveal>
          <article className="h-full rounded-[22px] border border-line bg-white/70 p-7 md:p-8">
            <div className="kicker mb-3">Adresse</div>
            <address className="not-italic text-[16px] leading-[1.7] text-ink">
              <span className="font-display text-[20px]">{site.brand}</span>
              <br />
              {site.address.street}
              <br />
              {site.address.zipCity}
            </address>
          </article>
        </Reveal>

        <Reveal delay={0.05}>
          <article className="h-full rounded-[22px] border border-line bg-white/70 p-7 md:p-8">
            <div className="kicker mb-3">Kontakt</div>
            <ul className="text-[16px] leading-[1.8] text-ink">
              <li>Telefon: {site.phone}</li>
              <li>E-Mail: {site.email}</li>
            </ul>
          </article>
        </Reveal>

        <Reveal delay={0.1}>
          <article className="h-full rounded-[22px] border border-line bg-white/70 p-7 md:p-8 md:col-span-2">
            <div className="kicker mb-3">Öffnungszeiten</div>
            <ul className="divide-y divide-line text-[15px] md:text-[16px] leading-[1.7]">
              {hours.map((row) => (
                <li key={row.label} className="flex justify-between py-3">
                  <span>{row.label}</span>
                  <span className="text-muted">{row.value}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-[13px] leading-[1.6] text-muted">
              Termine ausschließlich nach Vereinbarung.
            </p>
          </article>
        </Reveal>

        <Reveal delay={0.15}>
          <article className="h-full rounded-[22px] border-l-4 border-gold bg-gold-50/80 p-7 md:p-8 md:col-span-2">
            <div className="text-[13px] tracking-[0.14em] font-extrabold uppercase text-gold-700 mb-2">
              Terminabsage
            </div>
            <p className="text-[16px] leading-[1.65] text-ink m-0 font-medium">
              Sollten Sie den Termin nicht wahrnehmen können, bitten wir um
              eine Absage spätestens 24 Stunden vorher.
            </p>
          </article>
        </Reveal>

        <Reveal delay={0.2}>
          <article className="h-full rounded-[22px] border border-line bg-white/70 p-7 md:p-8 md:col-span-2">
            <div className="kicker mb-3">Barrierefreiheit</div>
            <p className="text-[16px] leading-[1.7] text-ink m-0">
              Die Praxis ist barrierefrei über den Hinterhof erreichbar.
            </p>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
