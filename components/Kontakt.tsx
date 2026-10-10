"use client";

import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export default function Kontakt() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  return (
    <section id="kontakt" className="relative cv-auto">
      <div className="container-shell max-w-[1440px] py-[72px] md:py-[100px] px-4">
        <Reveal>
          <div className="mb-9 md:mb-10 max-w-[900px]">
            <div className="kicker mb-3">Kontakt & Termin</div>
            <h2 className="font-display leading-[1.1] text-[clamp(30px,4vw,50px)] title-rule">
              Termin online buchen.
            </h2>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-[.9fr_1.1fr] gap-5">
          <Reveal>
            <div className="rounded-[22px] border border-line bg-white/60 p-7 md:p-8 h-full">
              <ContactRow label="Adresse">
                {site.address.street}
                <br />
                {site.address.zipCity}
              </ContactRow>
              <ContactRow label="Telefon">{site.phone}</ContactRow>
              <ContactRow label="E-Mail">{site.email}</ContactRow>
              <div className="pt-4 mt-2">
                <div className="text-[12px] tracking-[0.14em] font-extrabold uppercase text-forest mb-1.5">
                  Terminabsage
                </div>
                <p className="text-[14px] leading-[1.6] text-ink m-0">
                  Bitte sagen Sie Termine spätestens 24 Stunden vorher ab. Nicht
                  oder zu spät abgesagte Termine müssen wir in Rechnung
                  stellen.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              className="rounded-[22px] border border-line bg-white/60 p-7 md:p-8 h-full"
              onSubmit={(e) => {
                e.preventDefault();
                setStatus("sending");
                setTimeout(() => setStatus("sent"), 800);
              }}
            >
              <h3 className="font-display text-[24px] mt-0 mb-1">
                Kontaktformular
              </h3>
              <p className="text-muted text-[13px] mb-5">
                Wir melden uns zeitnah persönlich zurück.
              </p>

              <Field label="Name" name="name" type="text" required />
              <Field label="E-Mail" name="email" type="email" required />
              <Field label="Telefon (optional)" name="phone" type="tel" />

              <label className="block text-[12px] text-muted mt-3 mb-1.5">
                Ihre Nachricht
              </label>
              <textarea
                name="message"
                required
                className="w-full border border-line rounded-[12px] px-3.5 py-3.5 min-h-[130px] bg-white focus:border-gold focus:outline-none transition-colors"
              />

              <button
                type="submit"
                disabled={status !== "idle"}
                className="mt-5 min-h-[48px] px-6 rounded-full inline-flex items-center justify-center text-[12px] font-extrabold tracking-[0.05em] bg-gold text-white border border-gold hover:bg-gold-600 hover:shadow-cardHover transition-all duration-500 ease-editorial disabled:opacity-70"
              >
                {status === "idle"
                  ? "NACHRICHT SENDEN"
                  : status === "sending"
                    ? "WIRD GESENDET…"
                    : "NACHRICHT ERHALTEN"}
              </button>
              {status === "sent" && (
                <p className="text-forest mt-3 text-[13px]">
                  Vielen Dank, wir melden uns bei Ihnen.
                </p>
              )}
            </form>
          </Reveal>
        </div>

        <Reveal>
          <div className="mt-10 md:mt-12 overflow-hidden rounded-[22px] border border-line bg-white/70">
            <div className="px-6 pt-6 md:px-8 md:pt-8">
              <div className="kicker mb-2">Anfahrt</div>
              <h3 className="font-display text-[22px] md:text-[26px] leading-[1.2]">
                So finden Sie zu uns.
              </h3>
              <p className="text-muted text-[14px] md:text-[15px] leading-[1.7] mt-2 max-w-[560px]">
                {site.address.street}, {site.address.zipCity}. Praxis im
                Stadtteil {site.address.district}.
              </p>
            </div>
            <div className="relative mt-6 aspect-[16/9] md:aspect-[21/9] w-full">
              <iframe
                src={site.mapsEmbed}
                title="Karte zur Praxis"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full border-0"
                allowFullScreen
              />
            </div>
            <div className="flex items-center justify-end px-6 pb-6 md:px-8 md:pb-8 pt-4">
              <a
                href={site.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[40px] px-5 rounded-full items-center justify-center text-[11px] font-extrabold tracking-[0.1em] uppercase border border-line text-ink hover:border-gold transition-colors"
              >
                In Google Maps öffnen
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ContactRow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="py-3 border-b border-line last:border-b-0 text-[14px] leading-[1.6]">
      <div className="text-[12px] tracking-[0.10em] font-extrabold uppercase text-ink mb-1">
        {label}
      </div>
      <div className="text-muted">{children}</div>
    </div>
  );
}

function Field({
  label,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <>
      <label className="block text-[12px] text-muted mt-3 mb-1.5">
        {label}
      </label>
      <input
        {...props}
        className="w-full border border-line rounded-[12px] px-3.5 py-3.5 bg-white focus:border-gold focus:outline-none transition-colors"
      />
    </>
  );
}
