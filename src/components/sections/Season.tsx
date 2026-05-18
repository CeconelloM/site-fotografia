import { availableDates } from "@/lib/data";

export function Season() {
  return (
    <section className="py-24 lg:py-32 px-6 lg:px-12 bg-foreground text-background">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-background/60 text-[0.7rem] uppercase tracking-[0.4em]">
          Temporada 2026
        </p>
        <h2 className="mt-6 font-serif text-3xl md:text-5xl leading-tight">
          Próximos casamentos em
          <span className="italic"> Maio, Junho e Julho de 2026</span>
        </h2>
        <p className="mt-8 text-background/70 max-w-xl mx-auto leading-relaxed">
          Agenda confirmada com noivos por todo o Brasil. Restam poucas datas
          disponíveis para a temporada de outono e inverno.
        </p>
        <div className="mt-12 flex flex-wrap justify-center gap-8 text-background/80">
          {availableDates.map((t) => (
            <div key={t} className="text-xs uppercase tracking-[0.3em] border-t border-background/30 pt-4 px-6">
              {t}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
