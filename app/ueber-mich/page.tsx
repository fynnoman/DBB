import type { Metadata } from "next";
import { site } from "@/lib/site";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: `Über mich | ${site.fullName}`,
  description: `${site.fullName}. Vita, Facharztausbildung, Zusatzqualifikationen und Mitgliedschaften.`,
};

export default function UeberMichPage() {
  return (
    <section className="container-shell max-w-[900px] px-4 pt-20 md:pt-28 pb-14 md:pb-20">
      <Reveal>
        <p className="kicker mb-4">Vita</p>
        <h1 className="font-display text-[clamp(28px,3.4vw,42px)] leading-[1.12] tracking-[-0.015em] mb-8">
          {site.fullName}
        </h1>
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
            Kardiologie, Medizinische Klinik I, Kardiologie und
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
            Kardiologie, Medizinische Klinik I, Kardiologie und
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
            Ärztliche Leiterin, Kardiologie und Angiologie, MVZ SHG
            Saarbrücken GmbH
          </VitaItem>
        </VitaBlock>

        <VitaBlock title="Zusatzqualifikationen und Kurse">
          <VitaBullet>
            Europäische Qualifikation EACVI für Echokardiographie bei
            Erwachsenen (seit 2020), Rezertifizierung in 2025
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
            2008: Klinisches Audit: „Skin Test Anergy, a prognostic
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
            2023: „Herzinsuffizienz, Herausforderungen in der Praxis",
            Echokardiographie Kurs für Kardiologen, SHG-Kliniken
            Völklingen
          </VitaBullet>
        </VitaBlock>

        <VitaBlock title="Sprachen">
          <VitaBullet>Rumänisch, Muttersprache</VitaBullet>
          <VitaBullet>Deutsch, Zweitsprache</VitaBullet>
          <VitaBullet>Englisch, fortgeschrittene Kenntnisse</VitaBullet>
          <VitaBullet>
            Hindi, Spanisch, Italienisch, Französisch, Grundkenntnisse
          </VitaBullet>
        </VitaBlock>
      </Reveal>
    </section>
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
