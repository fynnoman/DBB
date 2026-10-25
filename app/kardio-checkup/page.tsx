import type { Metadata } from "next";
import { site } from "@/lib/site";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: `Kardio Check-up | ${site.brand} ${site.city}`,
  description: "Kardio Check-up bei DBB Kardio in Saarlouis.",
};

export default function KardioCheckupPage() {
  return (
    <PageHero
      eyebrow="Direkt buchbar"
      kicker="Kardio Check-up"
      chapter="07"
      title="Kardio Check-up."
    />
  );
}
