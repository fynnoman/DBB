import type { Metadata } from "next";
import { site } from "@/lib/site";
import UntersuchungenContent from "@/components/UntersuchungenContent";

export const metadata: Metadata = {
  title: `Untersuchungen | ${site.brand}`,
  description:
    "Ablauf der kardiologischen Untersuchung und patientenverständliche Erklärungen zu allen angebotenen Untersuchungen in der kardiologischen Privatpraxis Dr. medic Denisa Babeanu-Bauer in Saarlouis.",
};

export default function UntersuchungenPage() {
  return <UntersuchungenContent />;
}
