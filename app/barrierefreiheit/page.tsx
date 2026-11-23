import { site } from "@/lib/site";

export const metadata = {
  title: "Barrierefreiheit · DBB Kardio",
};

export default function BarrierefreiheitPage() {
  return (
    <section className="container-shell max-w-3xl py-24 md:py-32">
      <p className="kicker mb-3">Barrierefreiheit</p>
      <h1 className="font-display text-[32px] md:text-[38px] text-ink leading-[1.2]">
        Erklärung zur Barrierefreiheit
      </h1>

      <div className="mt-10 space-y-8 text-muted leading-[1.75] text-[16px]">
        <p>
          Wir legen großen Wert darauf, dass die Leistungen und
          Informationen der Praxis für alle Menschen zugänglich sind.
        </p>
        <p>
          Diese Website wurde nach den aktuellen Standards der
          Barrierefreiheit gestaltet. Wir orientieren uns an den
          Richtlinien der Web Content Accessibility Guidelines (WCAG) und
          dem Barrierefreiheitsstärkungsgesetz (BFSG), um sicherzustellen,
          dass die Inhalte für alle Nutzerinnen und Nutzer zugänglich sind.
        </p>

        <div>
          <p className="kicker">Geltungsbereich</p>
          <p className="mt-2">
            Diese Erklärung zur Barrierefreiheit gilt für die Website der
            kardiologischen Privatpraxis {site.fullName} in {site.city}.
          </p>
        </div>

        <div>
          <p className="kicker">
            Stand der Vereinbarkeit mit den Anforderungen
          </p>
          <p className="mt-2">
            Die Anforderungen des Barrierefreiheitsstärkungsgesetzes (BFSG)
            und der BITV 2.0 sind noch nicht vollständig erfüllt. Einzelne
            Inhalte sind noch nicht vollständig barrierefrei.
          </p>
          <p className="mt-2">
            Zum Beispiel: Downloads, die vor 2025 eingestellt wurden. Später
            eingestellte PDF-Dateien werden vermehrt in barrierefreier
            Version erstellt bzw. schnellstmöglich durch eine solche
            ersetzt.
          </p>
        </div>

        <div>
          <p className="kicker">Kontinuierliche Verbesserung</p>
          <p className="mt-2">
            Wir arbeiten kontinuierlich daran, die Barrierefreiheit dieser
            Website zu verbessern. Sollten Sie auf Barrieren stoßen oder
            Verbesserungsvorschläge haben, freuen wir uns über Ihre
            Rückmeldung.
          </p>
        </div>

        <div>
          <p className="kicker">Barrieren melden</p>
          <p className="mt-2">
            Wenn Sie Barrieren auf dieser Website feststellen oder
            Anmerkungen zur Barrierefreiheit haben, kontaktieren Sie uns
            bitte:
          </p>
          <p className="mt-4 text-ink font-display text-[22px]">
            {site.brand}
          </p>
          <p>{site.descriptor}</p>
          <p>{site.fullName}</p>
          <p className="mt-2">
            {site.address.street}
            <br />
            {site.address.zipCity}
            <br />
            Deutschland
          </p>
          <p className="mt-2">
            Telefon: {site.phone}
            <br />
            E-Mail: {site.email}
          </p>
        </div>

        <div>
          <p className="kicker">Durchsetzungsverfahren</p>
          <p className="mt-2">
            Sollte innerhalb von sechs Wochen keine zufriedenstellende
            Antwort auf Ihre Hinweise oder Anfragen zur Barrierefreiheit
            erfolgen, können Sie sich an die Schlichtungsstelle nach § 16
            BGG wenden:
          </p>
          <p className="mt-4 text-ink">Schlichtungsstelle BGG</p>
          <p>
            Mauerstraße 53
            <br />
            10117 Berlin
          </p>
          <p className="mt-2">
            Telefon: 030 18 527 2805
            <br />
            E-Mail: info@schlichtungsstelle-bgg.de
            <br />
            Website:{" "}
            <a
              href="https://www.schlichtungsstelle-bgg.de"
              className="underline underline-offset-4 decoration-gold/70 hover:text-ink transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.schlichtungsstelle-bgg.de
            </a>
          </p>
        </div>

        <div>
          <p className="kicker">Physische Barrierefreiheit</p>
          <p className="mt-2">
            Die Praxis ist barrierefrei über den Hinterhof erreichbar.
          </p>
        </div>

        <div>
          <p className="kicker">Erstellung dieser Erklärung</p>
          <p className="mt-2">
            Diese Erklärung wurde im November 2026 erstellt und zuletzt am
            23. November 2026 überprüft.
          </p>
        </div>
      </div>
    </section>
  );
}
