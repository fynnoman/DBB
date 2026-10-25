import type { Metadata } from "next";
import { site } from "@/lib/site";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: `Executive Check-up | ${site.brand} ${site.city}`,
  description: "Executive Check-up bei DBB Kardio in Saarlouis.",
};

export default function ExecutiveCheckupPage() {
  return (
    <PageHero
      eyebrow="Direkt buchbar"
      kicker="Executive Check-up"
      chapter="08"
      title="Executive Check-up."
    />
  );
}
