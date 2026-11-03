export const metadata = {
  title: "Barrierefreiheit · DBB Kardio",
};

export default function BarrierefreiheitPage() {
  return (
    <section className="container-shell max-w-3xl py-24 md:py-32">
      <p className="kicker mb-3">Barrierefreiheit</p>
      <h1 className="font-display text-[clamp(33px,4vw,55px)] leading-[1.1] title-rule">
        Zugänglich für alle.
      </h1>

      <div className="mt-10 space-y-6 text-muted leading-[1.75]">
        <p>
          Die Praxis ist barrierefrei über den Hinterhof erreichbar.
        </p>
      </div>
    </section>
  );
}
