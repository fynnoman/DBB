import type { Metadata } from "next";
import Image from "next/image";
import { site } from "@/lib/site";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: `Über mich | ${site.fullName}`,
  description: `${site.fullName}. Fachärztin für Innere Medizin und Kardiologie in Saarlouis-Fraulautern. Werdegang, Schwerpunkte und persönliche Haltung.`,
};

export default function UeberMichPage() {
  return (
    <>
      <section className="container-shell max-w-[900px] px-4 pt-20 md:pt-28 pb-10 md:pb-14">
        <Reveal>
          <p className="kicker mb-5">Über mich</p>
          <h1 className="font-display text-[clamp(32px,4vw,52px)] leading-[1.08] tracking-[-0.015em] title-rule">
            Ihr Herz in guten Händen.
          </h1>
          <p className="mt-7 font-display text-[clamp(20px,2.1vw,26px)] text-gold leading-[1.4]">
            Moderne Kardiologie. Persönliche Betreuung. Individuelle Medizin.
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <div
            className="relative mx-auto my-10 md:my-14 rounded-[28px] overflow-hidden border border-[rgba(183,154,98,0.42)] shadow-soft"
            style={{
              width: "min(430px, 82vw)",
              aspectRatio: "4 / 5",
            }}
          >
            <Image
              src="/portrait-babeanu-bauer.jpg"
              alt={`Portrait ${site.fullName}`}
              fill
              sizes="(max-width: 640px) 82vw, 430px"
              className="object-cover"
              priority
            />
            <div
              aria-hidden
              className="absolute inset-[10px] rounded-[20px] pointer-events-none"
              style={{ boxShadow: "inset 0 0 0 1px rgba(183,154,98,0.35)" }}
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="space-y-5 text-[17px] md:text-[18px] leading-[1.75] text-ink/85">
            <p>
              Herzlich willkommen in meiner kardiologischen Privatpraxis in
              Saarlouis-Fraulautern.
            </p>
            <p>
              Als Fachärztin für Innere Medizin und Kardiologie verbinde ich
              langjährige klinische und ambulante Erfahrung mit moderner
              kardiologischer Diagnostik und einer individuellen,
              patientenorientierten Betreuung.
            </p>
            <p>
              Mein Anspruch ist es, Herz-Kreislauf-Erkrankungen frühzeitig zu
              erkennen, bestehende Erkrankungen sorgfältig zu begleiten und
              gemeinsam mit Ihnen ein auf Ihre Bedürfnisse abgestimmtes
              Behandlungskonzept zu entwickeln.
            </p>
            <p>
              Ein besonderer Schwerpunkt liegt auf der modernen
              Echokardiographie einschließlich Speckle-Tracking, der
              Diagnostik komplexer Herzerkrankungen sowie der kardiologischen
              Vorsorge und langfristigen Nachsorge.
            </p>
            <p className="text-ink">
              Im Mittelpunkt stehen Sie, mit Ihrer Gesundheit, Ihren Fragen
              und Ihren individuellen Bedürfnissen.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="container-shell max-w-[900px] px-4 py-14 md:py-20 border-t border-line">
        <Reveal>
          <p className="kicker mb-4">Vita</p>
          <h2 className="font-display text-[clamp(26px,3vw,38px)] leading-[1.15] mb-8">
            {site.fullName}
          </h2>

          <p className="text-ink/85 leading-[1.75] mb-9">
            Geboren 1983 in Rumänien.
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <VitaBlock title="Medizinstudium">
            <VitaItem years="2001 – 2007">
              Universitätsklinikum Craiova, Rumänien
            </VitaItem>
            <VitaItem years="2007">
              Dissertation Lizenzarbeit: „Akute fetale Hypoxie, klinische
              und paraklinische Diagnostik sowie therapeutisches Vorgehen"
            </VitaItem>
            <VitaItem years="2007">
              Weiterbildungszulassungsprüfung (Rumänien)
            </VitaItem>
          </VitaBlock>

          <VitaBlock title="Facharztausbildung">
            <VitaItem years="2008 – 2010">
              Innere Medizin und Kardiologie, Universitätsklinikum Craiova,
              Rumänien
            </VitaItem>
            <VitaItem years="2010 – 2014">
              Innere Medizin und Kardiologie, Marienhaus Klinikum Saarlouis
              (Chefarzt: Dr. med. Walter Blank)
            </VitaItem>
            <VitaItem years="2014">
              Kardiologie, Medizinische Klinik I – Kardiologie und
              Angiologie, SHG-Kliniken Völklingen (Chefarzt: Dr. med. Cem
              Özbek)
              <ul className="mt-2 space-y-1 text-[15px] text-ink/80">
                <li>• Funktionsabteilung / Echokardiographielabor</li>
                <li>• Zentrale Notaufnahme und Notaufnahmestation</li>
                <li>• Sekundärnotarzt</li>
              </ul>
            </VitaItem>
            <VitaItem years="11/2014">
              Facharztanerkennung für Innere Medizin und Kardiologie,
              Ärztekammer des Saarlandes
            </VitaItem>
          </VitaBlock>

          <VitaBlock title="Klinische Tätigkeit als Fachärztin">
            <VitaItem years="2014 – 2019">
              Kardiologie, Medizinische Klinik I – Kardiologie und
              Angiologie, SHG-Kliniken Völklingen
              <ul className="mt-2 space-y-1 text-[15px] text-ink/80">
                <li>• Funktionsabteilung / Echokardiographielabor</li>
                <li>
                  • Zentrale Notaufnahme und Notaufnahmestation
                  (Funktionsoberärztin)
                </li>
              </ul>
            </VitaItem>
          </VitaBlock>

          <VitaBlock title="Ambulante Tätigkeit">
            <VitaItem years="2019 – 2026">
              Ärztliche Leiterin – Kardiologie und Angiologie, MVZ SHG
              Saarbrücken GmbH
            </VitaItem>
          </VitaBlock>

          <VitaBlock title="Zusatzqualifikationen und Kurse">
            <VitaBullet>
              Europäische Qualifikation EACVI für Echokardiographie bei
              Erwachsenen (seit 2020) – Rezertifizierung in 2025
            </VitaBullet>
            <VitaBullet>
              Level 1 Certification Programme on Cardio-Oncology (European
              Society of Cardiology, 2025)
            </VitaBullet>
            <VitaBullet>
              Level 1 Certification Programme on Artificial Intelligence in
              Cardiovascular Imaging (European Society of Cardiology, 2026)
            </VitaBullet>
            <VitaBullet>
              Stress-Echokardiographiekurs (Ludwigsburg, 2014)
            </VitaBullet>
            <VitaBullet>
              Stress-Echokardiographiekurs (European Society of Cardiology,
              2026)
            </VitaBullet>
            <VitaBullet>
              Strain Imaging Echo Course (Berlin, 2018)
            </VitaBullet>
          </VitaBlock>

          <VitaBlock title="Mitgliedschaften">
            <VitaBullet>
              EACVI (European Association of Cardiology Imaging)
            </VitaBullet>
            <VitaBullet>
              European Association of Preventive Cardiology (European
              Society of Cardiology)
            </VitaBullet>
            <VitaBullet>
              Heart Failure Association (European Society of Cardiology)
            </VitaBullet>
            <VitaBullet>
              Council of Cardio-Oncology (European Society of Cardiology)
            </VitaBullet>
            <VitaBullet>
              Deutsche Gesellschaft für Amyloidkrankheiten e.V.
            </VitaBullet>
            <VitaBullet>
              DEGUM Deutsche Gesellschaft für Ultraschall in der Medizin
            </VitaBullet>
          </VitaBlock>

          <VitaBlock title="Eigene Vorträge">
            <VitaBullet>
              2008: „Klinische und therapeutische Aspekte des
              Lateralinfarkts", Craiova
            </VitaBullet>
            <VitaBullet>
              2008: Klinisches Audit: „Skin Test Anergy – a prognostic
              marker for heart failure." Jurnalul Roman de Cardiologie,
              Band 23, Beilage A 200, Seite A146, ISSN 1583-2996, 47.
              Kardiologischen Kongress in Sinaia 2008, Rumänien
            </VitaBullet>
            <VitaBullet>
              2010: Vortrag Leitlinien der Europäischen Gesellschaft für
              Kardiologie zu STEMI/NSTEMI, kardiologisches Symposium
              Craiova, Rumänien
            </VitaBullet>
            <VitaBullet>
              2017: „Kardiale Amyloidose", SHG-Kliniken Völklingen
            </VitaBullet>
            <VitaBullet>
              2018: „Sportlerherz", SHG-Kliniken Völklingen
            </VitaBullet>
            <VitaBullet>
              2023: „Herzinsuffizienz – Herausforderungen in der Praxis",
              Echokardiographie Kurs für Kardiologen, SHG-Kliniken
              Völklingen
            </VitaBullet>
          </VitaBlock>

          <VitaBlock title="Sprachen">
            <VitaBullet>Rumänisch – Muttersprache</VitaBullet>
            <VitaBullet>Deutsch – Zweitsprache</VitaBullet>
            <VitaBullet>Englisch – fortgeschrittene Kenntnisse</VitaBullet>
            <VitaBullet>
              Hindi, Spanisch, Italienisch, Französisch – Grundkenntnisse
            </VitaBullet>
          </VitaBlock>
        </Reveal>
      </section>
    </>
  );
}

function VitaBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-9 last:mb-0">
      <div className="text-[12px] tracking-[0.18em] uppercase font-extrabold text-gold mb-3">
        {title}
      </div>
      <div className="space-y-4">{children}</div>
    </div>
  );
}

function VitaItem({
  years,
  children,
}: {
  years: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid md:grid-cols-[140px_1fr] gap-x-5 gap-y-1 text-[15px] md:text-[16px] leading-[1.65] text-ink/85">
      <div className="font-semibold text-ink">{years}</div>
      <div>{children}</div>
    </div>
  );
}

function VitaBullet({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-3 items-start text-[15px] md:text-[16px] leading-[1.65] text-ink/85">
      <span
        aria-hidden
        className="mt-[11px] inline-block h-px w-3 bg-gold flex-shrink-0"
      />
      <span>{children}</span>
    </div>
  );
}
