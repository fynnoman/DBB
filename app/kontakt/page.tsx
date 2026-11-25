import type { Metadata } from "next";
import { site } from "@/lib/site";
import { Reveal } from "@/components/Reveal";
import Kontakt from "@/components/Kontakt";

export const metadata: Metadata = {
  title: `Kontakt | ${site.brand}`,
  description:
    "Kontaktmöglichkeiten und Kontaktdaten der kardiologischen Privatpraxis Dr. medic Denisa Babeanu-Bauer in Saarlouis.",
};

export default function KontaktPage() {
  return (
    <Reveal>
      <Kontakt />
    </Reveal>
  );
}
