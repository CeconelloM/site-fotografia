import { Link } from "@tanstack/react-router";
import { photographers } from "@/lib/data";

export function Duo() {
  return (
    <section id="duo" className="py-32 lg:py-44 px-6 lg:px-12 bg-[var(--color-cream)]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="eyebrow">Sobre</p>
          <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl">Dois olhares, uma história</h2>
          <p className="mt-6 max-w-2xl mx-auto text-muted-foreground leading-relaxed">
            Somos Fernanda e Tamires. Juntas, registramos casamentos e momentos
            preciosos com a delicadeza de quem entende que cada história é única.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
          {photographers.map((p) => (
            <div key={p.name} className="flex flex-col">
              <div className="aspect-[4/5] overflow-hidden mb-8 bg-muted">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  onError={(e) => { e.currentTarget.style.display = "none"; }}
                />
              </div>
              <p className="eyebrow">Fotógrafa</p>
              <h3 className="font-serif text-3xl md:text-4xl mt-2 mb-4">{p.name}</h3>
              <p className="text-muted-foreground leading-relaxed">{p.bio}</p>
              <Link
                to="/portfolio/$slug"
                params={{ slug: p.slug }}
                className="mt-8 inline-flex items-center justify-center self-start border border-foreground px-7 py-3 text-[0.7rem] uppercase tracking-[0.3em] hover:bg-foreground hover:text-background transition-colors"
              >
                Portfólio individual
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
