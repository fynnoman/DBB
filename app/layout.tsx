import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { MenuOnlyProvider } from "@/components/MenuOnly";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingBar from "@/components/BookingBar";
import { site } from "@/lib/site";

const serif = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
  preload: true,
  variable: "--font-serif",
  fallback: ["Georgia", "Times New Roman", "serif"],
});

const sans = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  preload: true,
  variable: "--font-sans",
  fallback: ["system-ui", "-apple-system", "Segoe UI", "sans-serif"],
});

export const metadata: Metadata = {
  title: `${site.fullName} | ${site.descriptor} ${site.city}`,
  description:
    "Kardiologische Privatpraxis Dr. medic Denisa Babeanu-Bauer in St. Ingbert. Echokardiographie, Speckle Tracking, Cardio-Onkologie, Frauenherz. Für Privatpatienten, Beihilfeberechtigte und Selbstzahler.",
  metadataBase: new URL("https://dbb-kardio.de"),
  applicationName: site.brand,
  formatDetection: { telephone: true, address: true, email: true },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: `${site.brand} · ${site.descriptor} ${site.city}`,
    description:
      "Persönliche Kardiologie in St. Ingbert. Für Privatpatienten, Beihilfeberechtigte und Selbstzahler.",
    locale: "de_DE",
    type: "website",
    images: [{ url: "/logo.png", width: 512, height: 512 }],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbfaf7" },
    { media: "(prefers-color-scheme: dark)", color: "#fbfaf7" },
  ],
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  colorScheme: "light",
};

const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: `${site.fullName} · ${site.descriptor}`,
  description:
    "Kardiologische Privatpraxis in St. Ingbert. Echokardiographie, Speckle Tracking, Prävention, Cardio-Onkologie, Frauenherz.",
  medicalSpecialty: "Cardiovascular",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    postalCode: "66386",
    addressLocality: "St. Ingbert",
    addressCountry: "DE",
  },
  areaServed: "Saarland, St. Ingbert, Saarbrücken, Saarpfalz",
  image: "/logo.png",
  priceRange: "GOÄ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`${serif.variable} ${sans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
        />
      </head>
      <body className="antialiased overflow-x-hidden">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:z-[100] focus:top-4 focus:left-4 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-cream"
        >
          Zum Inhalt springen
        </a>
        <MenuOnlyProvider>
          <Header />
          <main id="main" className="relative">
            {children}
          </main>
          <BookingBar />
          <Footer />
        </MenuOnlyProvider>
      </body>
    </html>
  );
}
