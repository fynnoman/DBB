import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Manrope } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FloatingBookingButton from "@/components/FloatingBookingButton";

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
  preload: true,
  variable: "--font-serif",
  fallback: ["Georgia", "serif"],
});

const sans = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
  variable: "--font-sans",
  fallback: ["system-ui", "-apple-system", "Segoe UI", "sans-serif"],
});

export const metadata: Metadata = {
  title:
    "DBB Kardio · Dr. medic Denisa Babeanu-Bauer · Kardiologische Privatpraxis St. Ingbert",
  description:
    "Präzise Diagnostik. Klare Einordnung. Persönliche Kardiologie in St. Ingbert. Echokardiographie, Speckle Tracking, Prävention, Cardio-Onkologie, Frauenherz.",
  metadataBase: new URL("https://dbb-kardio.de"),
  applicationName: "DBB Kardio",
  formatDetection: { telephone: true, address: true, email: true },
  openGraph: {
    title: "DBB Kardio · Kardiologische Privatpraxis Saarpfalz",
    description:
      "Ihre Gesundheit liegt mir am Herzen. Persönliche Kardiologie in St. Ingbert.",
    locale: "de_DE",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FBF7EE" },
    { media: "(prefers-color-scheme: dark)", color: "#0D3128" },
  ],
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`${serif.variable} ${sans.variable}`}>
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="DBB Kardio" />
      </head>
      <body className="font-sans bg-ivory-50 text-forest-800 antialiased overflow-x-hidden">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:z-[100] focus:top-4 focus:left-4 focus:rounded-full focus:bg-forest-800 focus:px-4 focus:py-2 focus:text-ivory-50"
        >
          Zum Inhalt springen
        </a>
        <Nav />
        <main id="main" className="relative">
          {children}
        </main>
        <Footer />
        <FloatingBookingButton />
      </body>
    </html>
  );
}
