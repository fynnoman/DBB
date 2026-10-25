import type { Metadata } from "next";
import { site } from "@/lib/site";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: `Kardiologischer Check-up | ${site.brand} ${site.city}`,
  description: "Kardiologischer Check-up bei DBB Kardio in Saarlouis.",
};

export default function KardioCheckupPage() {
  return (
    <PageHero
      eyebrow="Direkt buchbar"
      kicker="Kardiologischer Check-up"
      chapter="07"
      title="Kardiologischer Check-up."
    />
  );
}
