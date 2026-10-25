import type { Metadata } from "next";
import { site } from "@/lib/site";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: `Basis Check-up | ${site.brand} ${site.city}`,
  description: "Basis Check-up bei DBB Kardio in Saarlouis.",
};

export default function BasisCheckupPage() {
  return (
    <PageHero
      eyebrow="Direkt buchbar"
      kicker="Basis Check-up"
      chapter="07"
      title="Basis Check-up."
    />
  );
}
