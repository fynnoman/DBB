import type { Metadata } from "next";
import { site } from "@/lib/site";
import { PageHero } from "@/components/PageHero";
import { PageCta } from "@/components/PageCta";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: `Aktuelles & Abwesenheiten | ${site.brand}`,
  description:
    "Aktuelle Sprechzeiten, geplante Abwesenheiten und Vertretungsregelungen der Privatpraxis DBB Kardio in St. Ingbert.",
};

const news = [
  {
    date: "[Datum]",
    tag: "Sprechzeiten",
    title: "Angepasste Sprechzeiten",
    body: "Falls sich die regulären Sprechzeiten kurzfristig ändern, veröffentlichen wir das an dieser Stelle mit ausreichend Vorlauf.",
  },
  {
    date: "[Datum]",
    tag: "Urlaub",
    title: "Geplante Praxisabwesenheit",
    body: "Urlaubszeiten und Fortbildungen werden hier bekannt gegeben — inklusive der zuständigen kardiologischen Vertretung.",
  },
  {
    date: "[Datum]",
    tag: "Kurzfristig",
    title: "Puffer für dringliche Anliegen",
    body: "Für akute kardiologische Fragestellungen halten wir tageweise Puffer frei. Bitte telefonisch anfragen.",
  },
];

export default function AktuellesPage() {
  return (
    <>
      <PageHero
        eyebrow="Aktuelles"
        kicker="Aktuelles & Abwesenheiten"
        chapter="11"
        title={
          <>
            Was gerade wichtig ist.<br />
            <span className="text-muted italic">Sprechzeiten. Vertretungen. Hinweise.</span>
          </>
        }
        lead="An dieser Stelle veröffentlichen wir kurzfristige Änderungen der Sprechzeiten, geplante Urlaubszeiten und die jeweils zuständigen Vertretungen."
      />

      <section className="container-shell max-w-[1440px] pb-16 md:pb-24 px-4">
        <Reveal>
          <div className="max-w-[900px] mb-9 md:mb-10">
            <div className="kicker mb-3">Neueste Hinweise</div>
            <h2 className="font-display leading-[1.1] text-[clamp(28px,3.5vw,44px)] title-rule">
              Aktuell in der Praxis.
            </h2>
          </div>
        </Reveal>

        <ul className="grid gap-5">
          {news.map((n) => (
            <Reveal key={n.title} delay={0.05}>
              <li className="rounded-[22px] border border-line bg-white/70 p-7 md:p-8">
                <div className="flex flex-wrap items-center gap-4 mb-3">
                  <span className="text-[11px] tracking-[0.18em] uppercase font-extrabold text-gold">
                    {n.date}
                  </span>
                  <span className="inline-flex items-center rounded-full border border-line bg-white px-3 py-1 text-[11px] tracking-[0.05em] text-ink/75">
                    {n.tag}
                  </span>
                </div>
                <h3 className="font-display text-[22px] leading-[1.2] mb-2">
                  {n.title}
                </h3>
                <p className="text-muted text-[14px] md:text-[15px] leading-[1.75]">
                  {n.body}
                </p>
              </li>
            </Reveal>
          ))}
        </ul>
      </section>

      <section className="border-t border-line bg-white/[0.62]">
        <div className="container-shell max-w-[1440px] py-[72px] md:py-[100px] px-4">
          <div className="grid gap-10 md:grid-cols-2 items-start">
            <Reveal>
              <div>
                <div className="kicker mb-3">Reguläre Sprechzeiten</div>
                <h2 className="font-display leading-[1.1] text-[clamp(28px,3.5vw,44px)] title-rule">
                  Wann Sie uns erreichen.
                </h2>
                <p className="text-muted text-[15px] md:text-[16px] leading-[1.75] mt-6 max-w-[520px]">
                  Die regulären Sprechzeiten dienen als Orientierung. Termine werden
                  ausschließlich nach persönlicher Vereinbarung vergeben.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-[22px] border border-line bg-white/70 p-7 md:p-8">
                <ul className="divide-y divide-line text-[14px] leading-[1.7]">
                  <li className="flex justify-between py-3">
                    <span>Montag – Donnerstag</span>
                    <span className="text-muted">[wird ergänzt]</span>
                  </li>
                  <li className="flex justify-between py-3">
                    <span>Freitag</span>
                    <span className="text-muted">[wird ergänzt]</span>
                  </li>
                  <li className="flex justify-between py-3">
                    <span>Samstag / Sonntag</span>
                    <span className="text-muted">Geschlossen</span>
                  </li>
                </ul>
                <div className="mt-6 rounded-[16px] border border-[#e2c9c6] bg-[#fdf1ef] p-4">
                  <div className="text-[11px] tracking-[0.10em] uppercase font-extrabold text-[#b3261e] mb-1">
                    Notfall
                  </div>
                  <p className="text-[13px] leading-[1.6] text-ink m-0">
                    Bei akuten Beschwerden bitte die{" "}
                    <strong className="tracking-wider">
                      {site.emergencyNumber}
                    </strong>{" "}
                    wählen.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <PageCta
        title="Frage zur Erreichbarkeit?"
        lead="Für organisatorische Rückfragen steht Ihnen unser Kontaktformular jederzeit zur Verfügung."
        primaryLabel="KONTAKT AUFNEHMEN"
      />
    </>
  );
}
