"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { site } from "@/lib/site";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  return (
    <section id="kontakt" className="relative bg-ivory-50 py-20 sm:py-24 md:py-40 overflow-hidden cv-auto">
      <div className="mx-auto max-w-[1400px] px-4 md:px-8">
        <div className="grid gap-10 sm:gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="eyebrow rule-gold">Kontakt</p>
            <h2 className="mt-6 md:mt-8 font-serif text-forest-800 text-[clamp(2rem,7vw,4rem)] leading-[1.02] tracking-brand-tight">
              Ihre Nachricht an{" "}
              <span className="italic text-forest-700">die Praxis.</span>
            </h2>
            <p className="mt-6 md:mt-8 max-w-md text-[15px] md:text-lg leading-relaxed text-forest-700/90">
              Für organisatorische Fragen können Sie künftig dieses Formular nutzen. Medizinische
              Befunde und sensible Gesundheitsdaten bitte nicht übermitteln.
            </p>

            <div className="mt-8 md:mt-10 space-y-3 md:space-y-4">
              <InfoRow label="Praxis" value={`${site.address.street} · ${site.address.zipCity}`} />
              <InfoRow label="Etage" value={site.address.floor} />
              <InfoRow label="Telefon" value={site.phone} />
              <InfoRow label="E-Mail" value={site.email} />
              <InfoRow label="Sprechzeiten" value={site.hours} />
            </div>

            <div className="mt-8 md:mt-10 glass rounded-2xl border border-gold-400/40 p-4 sm:p-5">
              <p className="text-[11px] uppercase tracking-brand-wide text-gold-500">
                Kein Notfalldienst
              </p>
              <p className="mt-1.5 text-sm sm:text-[15px] text-forest-800 leading-relaxed">
                Bei akuten Beschwerden wählen Sie bitte{" "}
                <a
                  href="tel:112"
                  className="font-semibold underline underline-offset-2 inline-flex min-h-[24px] items-center"
                >
                  112
                </a>.
              </p>
            </div>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            onSubmit={(e) => e.preventDefault()}
            className="md:col-span-7 glass rounded-3xl p-5 sm:p-6 md:p-10"
          >
            <p className="eyebrow">Kontaktformular</p>
            <p className="mt-2 text-xs text-forest-500">Wird zum Praxisstart aktiviert.</p>

            <div className="mt-6 md:mt-8 grid gap-4 md:gap-5 md:grid-cols-2">
              <Field
                label="Name"
                value={form.name}
                onChange={(v) => setForm({ ...form, name: v })}
                autoComplete="name"
              />
              <Field
                label="E-Mail"
                type="email"
                inputMode="email"
                autoComplete="email"
                value={form.email}
                onChange={(v) => setForm({ ...form, email: v })}
              />
              <Field
                label="Telefon (optional)"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                value={form.phone}
                onChange={(v) => setForm({ ...form, phone: v })}
                className="md:col-span-2"
              />
              <FieldArea
                label="Ihre Nachricht"
                value={form.message}
                onChange={(v) => setForm({ ...form, message: v })}
                className="md:col-span-2"
              />
            </div>

            <p className="mt-4 md:mt-5 text-xs text-forest-500">
              Bitte übermitteln Sie hier keine Befunde oder sensiblen Gesundheitsdaten.
            </p>

            <div className="mt-6 md:mt-8 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3">
              <button
                type="submit"
                disabled
                className="inline-flex cursor-not-allowed items-center justify-center gap-2 rounded-full bg-forest-700/80 px-6 py-4 text-sm font-semibold text-ivory-50 ring-1 ring-gold-300/30 opacity-70 min-h-[52px]"
              >
                Nachricht senden
                <Arrow />
              </button>
              <a
                href={site.doctolibUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full glass px-6 py-4 text-sm font-semibold text-forest-800 hover:bg-white/70 transition-colors min-h-[52px]"
              >
                Direkt Termin buchen
              </a>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 border-b border-forest-800/10 pb-3 sm:pb-3.5">
      <span className="sm:w-28 shrink-0 text-[10px] uppercase tracking-brand-wide text-forest-500">
        {label}
      </span>
      <span className="font-serif text-forest-800 text-[15px] sm:text-lg leading-snug break-words min-w-0">
        {value}
      </span>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  className = "",
  inputMode,
  autoComplete,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  className?: string;
  inputMode?: "email" | "tel" | "text" | "url" | "search" | "numeric" | "decimal";
  autoComplete?: string;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="eyebrow">{label}</span>
      <input
        type={type}
        inputMode={inputMode}
        autoComplete={autoComplete}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full rounded-xl border border-forest-800/15 bg-white/70 px-4 py-3.5 font-serif text-forest-800 placeholder-forest-500/50 outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-300/40 transition-all min-h-[48px]"
      />
    </label>
  );
}

function FieldArea({
  label,
  value,
  onChange,
  className = "",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  className?: string;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="eyebrow">{label}</span>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={5}
        className="mt-2 w-full resize-none rounded-xl border border-forest-800/15 bg-white/70 px-4 py-3.5 font-serif text-forest-800 placeholder-forest-500/50 outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-300/40 transition-all"
      />
    </label>
  );
}

function Arrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M5 12h14M13 5l7 7-7 7"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
