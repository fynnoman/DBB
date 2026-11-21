import { site } from "@/lib/site";

export const metadata = {
  title: "Impressum · DBB Kardio",
};

export default function ImpressumPage() {
  return (
    <section className="container-shell max-w-3xl py-24 md:py-32">
      <p className="kicker mb-3">Impressum</p>
      <p className="text-muted text-[16px] leading-[1.6] mt-2">
        Angaben gemäß § 5 DDG.
      </p>

      <div className="mt-10 space-y-8 text-muted leading-[1.7]">
        <div>
          <p className="kicker">Praxis</p>
          <p className="mt-2 font-display text-[26px] text-ink">
            {site.fullName}
          </p>
          <p>{site.descriptor}</p>
          <p>
            {site.address.street}
            <br />
            {site.address.zipCity}
            <br />
            Stadtteil {site.address.district}
          </p>
        </div>

        <div>
          <p className="kicker">Kontakt</p>
          <p className="mt-2">Telefon: {site.phone}</p>
          <p>E-Mail: {site.email}</p>
        </div>

        <div>
          <p className="kicker">Berufsbezeichnung</p>
          <p className="mt-2">
            Ärztin, Fachärztin für Innere Medizin und Kardiologie. Verliehen in
            der Bundesrepublik Deutschland.
          </p>
        </div>

        <div>
          <p className="kicker">Zuständige Kammer und Aufsichtsbehörde</p>
          <p className="mt-2 text-ink">Ärztekammer des Saarlandes</p>
          <p>
            Faktoreistraße 4
            <br />
            66111 Saarbrücken
            <br />
            Telefon: 0681 / 4003-0
            <br />
            E-Mail: info@aeksaar.de
            <br />
            <a
              href="https://www.aerztekammer-saarland.de"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-gold/60 underline-offset-4 hover:text-ink"
            >
              www.aerztekammer-saarland.de
            </a>
          </p>
        </div>

        <div>
          <p className="kicker">Berufsrechtliche Regelungen</p>
          <p className="mt-2">
            Berufsordnung für die Ärztinnen und Ärzte des Saarlandes.
            Heilberufekammergesetz des Saarlandes. Gebührenordnung für Ärzte
            (GOÄ). Die genannten Regelungen sind über die Ärztekammer des
            Saarlandes einsehbar.
          </p>
        </div>

        <div>
          <p className="kicker">Berufshaftpflichtversicherung</p>
          <p className="mt-2">
            Name und Anschrift der Berufshaftpflichtversicherung werden auf
            Anfrage mitgeteilt. Geltungsbereich: Bundesrepublik Deutschland.
          </p>
        </div>

        <div>
          <p className="kicker">Umsatzsteuer</p>
          <p className="mt-2">
            Heilbehandlungen im Bereich der Humanmedizin sind nach § 4 Nr. 14
            Umsatzsteuergesetz (UStG) von der Umsatzsteuer befreit. Eine
            Umsatzsteuer-Identifikationsnummer wird daher nicht ausgewiesen.
          </p>
        </div>

        <div>
          <p className="kicker">Redaktionell verantwortlich</p>
          <p className="mt-2">
            Inhaltlich verantwortlich gemäß § 18 Abs. 2 Medienstaatsvertrag
            (MStV): {site.fullName}, Anschrift wie oben.
          </p>
        </div>

        <div>
          <p className="kicker">EU-Streitschlichtung</p>
          <p className="mt-2">
            Die Europäische Kommission stellt eine Plattform zur
            Online-Streitbeilegung (OS) bereit:{" "}
            <a
              href="https://ec.europa.eu/consumers/odr"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-gold/60 underline-offset-4 hover:text-ink"
            >
              ec.europa.eu/consumers/odr
            </a>
            . Zur Teilnahme an einem Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle sind wir nach § 36 VSBG weder
            verpflichtet noch bereit.
          </p>
        </div>

        <div>
          <p className="kicker">Haftung für Inhalte und Links</p>
          <p className="mt-2">
            Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene
            Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
            verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter
            jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
            Informationen zu überwachen oder nach Umständen zu forschen, die
            auf eine rechtswidrige Tätigkeit hinweisen. Für die Inhalte
            externer Links sind ausschließlich deren Betreiber verantwortlich.
          </p>
        </div>

        <div>
          <p className="kicker">Rechtlicher Hinweis</p>
          <p className="mt-2 text-ink">Inhalt des Online-Angebotes</p>
          <p className="mt-2">
            Die auf unseren Internetseiten zur Verfügung gestellten Inhalte sind
            unseres Erachtens verlässlich und sorgfältig erarbeitet. Wir
            übernehmen jedoch keine Gewährleistung für die Vollständigkeit,
            Richtigkeit und Genauigkeit sämtlicher Inhalte auf den Webseiten.
            Wir übernehmen keinerlei Gewähr für die Aktualität, Korrektheit,
            Vollständigkeit oder Qualität der bereitgestellten Informationen.
            Haftungsansprüche gegen den Autor, welche sich auf Schäden
            materieller oder ideeller Art beziehen, die durch die Nutzung oder
            Nichtnutzung der dargebotenen Informationen bzw. durch die Nutzung
            fehlerhafter und unvollständiger Informationen verursacht wurden,
            sind grundsätzlich ausgeschlossen, sofern seitens des Autors kein
            nachweislich vorsätzliches oder grob fahrlässiges Verschulden
            vorliegt.
          </p>
          <p className="mt-4">
            Die auf unserer Homepage für Sie bereitgestellten
            Gesundheitsinformationen dürfen weder als Ersatz für professionelle
            Beratung und/oder Behandlung durch approbierte Ärztinnen und Ärzte
            angesehen werden, noch dürfen aufgrund der Informationen
            eigenständig Diagnosen gestellt oder Behandlungen begonnen oder
            abgesetzt werden. Beachten Sie bitte, dass unsere
            Gesundheitsinformationen nicht den Arztbesuch ersetzen.
          </p>
          <p className="mt-4">
            Alle Angebote sind frei bleibend und unverbindlich. Wir behalten es
            uns ausdrücklich vor, Teile der Seiten oder das gesamte Angebot
            ohne gesonderte Ankündigung zu verändern, zu ergänzen, zu löschen
            oder die Veröffentlichung zeitweise oder endgültig einzustellen.
          </p>
        </div>

        <div>
          <p className="kicker">Verweise und Links</p>
          <p className="mt-2">
            Trotz sorgfältiger Kontrolle externer Links übernehmen wir keine
            Haftung für deren Inhalte. Für den Inhalt verlinkter Stellen sind
            ausschließlich deren Betreiber verantwortlich. Bei direkten oder
            indirekten Verweisen auf fremde Internet-Seiten („Links"), die
            außerhalb des Verantwortungsbereiches des Autors liegen, würde eine
            Haftungsverpflichtung ausschließlich in dem Fall in Kraft treten,
            in dem wir von den Inhalten Kenntnis hätten und es uns technisch
            möglich und zumutbar wäre, die Nutzung im Falle rechtswidriger
            Inhalte zu verhindern. Wir erklären hiermit ausdrücklich, dass zum
            Zeitpunkt der Link-Setzung keine illegalen Inhalte auf den zu
            verlinkenden Seiten erkennbar waren. Auf die aktuelle und zukünftige
            Gestaltung, die Inhalte oder die Urheberschaft der
            gelinkten/verknüpften Seiten haben wir keinerlei Einfluss. Deshalb
            distanzieren wir uns hiermit ausdrücklich von allen Inhalten aller
            gelinkten/verknüpften Seiten, die nach der Link-Setzung verändert
            wurden. Diese Feststellung gilt für alle innerhalb des eigenen
            Internet-Angebotes gesetzten Links und Verweise sowie für
            Fremdeinträge in vom Autor eingerichteten Gästebüchern,
            Diskussionsforen und Mailing-Listen. Für illegale, fehlerhafte oder
            unvollständige Inhalte und insbesondere für Schäden, die aus der
            Nutzung oder Nichtnutzung solcherart dargebotenen Informationen
            entstehen, haftet allein der Anbieter der Seite, auf welche
            verwiesen wurde, nicht derjenige, der über Links auf die jeweilige
            Veröffentlichung lediglich verweist.
          </p>
        </div>

        <div>
          <p className="kicker">Urheber- und Kennzeichenrecht</p>
          <p className="mt-2">
            Wir sind bestrebt, in allen Publikationen die Urheberrechte der
            verwendeten Grafiken, Tondokumente, Videosequenzen und Texte zu
            beachten, selbst erstellte Grafiken, Tondokumente, Videosequenzen
            und Texte zu nutzen oder auf lizenzfreie Grafiken, Tondokumente,
            Videosequenzen und Texte zurückzugreifen. Alle innerhalb des
            Internet-Angebotes genannten und ggf. durch Dritte geschützten
            Marken- und Warenzeichen unterliegen uneingeschränkt den
            Bestimmungen des jeweils gültigen Kennzeichenrechts und den
            Besitzrechten der jeweiligen eingetragenen Eigentümer. Allein
            aufgrund der bloßen Nennung ist nicht der Schluss zu ziehen, dass
            Markenzeichen nicht durch Rechte Dritter geschützt sind. Das
            Copyright für veröffentlichte, vom Autor selbst erstellte Objekte
            bleibt allein beim Autor der Seiten. Eine Vervielfältigung oder
            Verwendung solcher Grafiken, Tondokumente, Videosequenzen und Texte
            in anderen elektronischen oder gedruckten Publikationen ist ohne
            ausdrückliche Zustimmung des Autors nicht gestattet.
          </p>
        </div>

        <div>
          <p className="kicker">Hinweis zum Allgemeinen Gleichbehandlungsgesetz (AGG)</p>
          <p className="mt-2">
            Aus Gründen der leichteren Lesbarkeit wird teilweise auf eine
            geschlechterspezifische Differenzierung verzichtet. Entsprechende
            Begriffe gelten im Sinne der Gleichbehandlung für alle Geschlechter.
          </p>
        </div>

        <div>
          <p className="kicker">Copyright</p>
          <p className="mt-2">
            Vervielfältigung der hier veröffentlichten Inhalte und Grafiken nur
            mit ausdrücklicher schriftlicher Genehmigung.
          </p>
        </div>
      </div>
    </section>
  );
}
