import { services } from "@/lib/data";
import { WHATSAPP_NUMBER } from "@/lib/contact";

export function Services() {
  return (
    <section id="servicos" className="py-32 lg:py-44 px-6 lg:px-12 bg-[var(--color-cream)]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="eyebrow">Serviços</p>
          <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl">O que fotografamos</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-px bg-border">
          {services.map((s, i) => (
            <div key={s.title} className="bg-[var(--color-cream)] p-10 lg:p-14 flex flex-col min-h-[320px]">
              <span className="font-serif italic text-muted-foreground text-sm">
                0{i + 1}
              </span>
              <h3 className="font-serif text-2xl md:text-3xl mt-6 mb-6">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed flex-1">{s.desc}</p>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(s.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 text-xs uppercase tracking-[0.25em] border-b border-foreground pb-1 self-start hover:opacity-60 transition-opacity"
              >
                Consultar
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
