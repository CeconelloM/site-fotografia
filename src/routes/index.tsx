import { createFileRoute } from "@tanstack/react-router";
import { Instagram, MessageCircle, Mail, MapPin } from "lucide-react";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { WHATSAPP_URL, PORTFOLIO_LINKS, INSTAGRAM_URL, EMAIL } from "@/lib/contact";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Ceconello Fotografia — Eternizando histórias" },
      {
        name: "description",
        content:
          "Fotografia de casamentos e eventos por Fernanda e Thamires. Imagens atemporais, narrativa delicada e olhar autoral.",
      },
      { property: "og:title", content: "Ceconello Fotografia — Eternizando histórias" },
      {
        property: "og:description",
        content: "Fotografia de casamentos e eventos. Olhar autoral, registros atemporais.",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500&family=Inter:wght@300;400;500&display=swap",
      },
    ],
  }),
});

const portfolio = [
  { src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=900&q=80", alt: "Noivos sob luz natural", span: "row-span-2" },
  { src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=700&q=80", alt: "Cerimônia ao ar livre", span: "" },
  { src: "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?w=700&q=80", alt: "Detalhes da noiva", span: "" },
  { src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=900&q=80", alt: "Buquê e aliança", span: "row-span-2" },
  { src: "https://images.unsplash.com/photo-1525772764200-be829a350797?w=700&q=80", alt: "Primeira dança", span: "" },
  { src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=700&q=80", alt: "Mesa do casamento", span: "" },
  { src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=700&q=80", alt: "Retrato dos noivos", span: "" },
  { src: "https://images.unsplash.com/photo-1522413452208-996ff3f3e740?w=700&q=80", alt: "Festa", span: "" },
];

function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        <a href="#top" className="font-serif text-xl tracking-wide">
          Ceconello<span className="text-muted-foreground"> · Fotografia</span>
        </a>
        <div className="hidden md:flex items-center gap-10 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <a href="#duo" className="hover:text-foreground transition-colors">Sobre</a>
          <a href="#portfolio" className="hover:text-foreground transition-colors">Portfólio</a>
          <a href="#servicos" className="hover:text-foreground transition-colors">Serviços</a>
          <a href="#contato" className="hover:text-foreground transition-colors">Contato</a>
        </div>
        <a
          href="#contato"
          className="hidden md:inline-flex text-xs uppercase tracking-[0.2em] border border-foreground px-5 py-2.5 hover:bg-foreground hover:text-background transition-colors"
        >
          Reservar
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section id="top" className="relative h-screen min-h-[700px] w-full overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=85"
        alt="Casamento ao entardecer"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-foreground/30" />
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <p className="text-background/80 text-[0.7rem] uppercase tracking-[0.4em] mb-8">
          Fotografia autoral · desde 2014
        </p>
        <h1 className="font-serif text-background text-5xl md:text-7xl lg:text-8xl leading-[1.05] max-w-5xl">
          Ceconello Fotografia
          <span className="block italic text-background/90 mt-3 text-4xl md:text-6xl lg:text-7xl">
            eternizando histórias
          </span>
        </h1>
        <p className="mt-10 text-background/85 max-w-xl text-base md:text-lg font-light leading-relaxed">
          Casamentos, retratos e eventos registrados com sensibilidade,
          delicadeza e um olhar que atravessa o tempo.
        </p>
        <a
          href="#contato"
          className="mt-12 inline-flex items-center gap-3 bg-background text-foreground px-10 py-4 text-xs uppercase tracking-[0.3em] hover:bg-background/90 transition-colors"
        >
          Reservar data
        </a>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-background/60 text-[0.65rem] uppercase tracking-[0.3em]">
        ↓ role para descobrir
      </div>
    </section>
  );
}

function Duo() {
  const photographers = [
    {
      name: "Fernanda",
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80",
      bio: "Apaixonada por luz natural e pequenos gestos, Fernanda traduz cada cerimônia em imagens que respiram emoção. Mais de uma década registrando histórias pelo Brasil.",
      portfolio: PORTFOLIO_LINKS.fernanda,
    },
    {
      name: "Thamires",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&q=80",
      bio: "Com olhar documental e estética atemporal, Thamires captura o invisível — os olhares, o silêncio antes do sim, o riso que se eterniza no álbum.",
      portfolio: PORTFOLIO_LINKS.thamires,
    },
  ];
  return (
    <section id="duo" className="py-32 lg:py-44 px-6 lg:px-12 bg-[var(--color-cream)]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="eyebrow">A dupla</p>
          <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl">Duas olhares, uma história</h2>
          <p className="mt-6 max-w-2xl mx-auto text-muted-foreground leading-relaxed">
            Somos Fernanda e Thamires. Juntas, registramos casamentos e momentos
            preciosos com a delicadeza de quem entende que cada história é única.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
          {photographers.map((p) => (
            <div key={p.name} className="flex flex-col">
              <div className="aspect-[4/5] overflow-hidden mb-8">
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <p className="eyebrow">Fotógrafa</p>
              <h3 className="font-serif text-3xl md:text-4xl mt-2 mb-4">{p.name}</h3>
              <p className="text-muted-foreground leading-relaxed">{p.bio}</p>
              <a
                href={p.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center self-start border border-foreground px-7 py-3 text-[0.7rem] uppercase tracking-[0.3em] hover:bg-foreground hover:text-background transition-colors"
              >
                Portfólio individual
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  return (
    <section id="portfolio" className="py-32 lg:py-44 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div>
            <p className="eyebrow">Portfólio</p>
            <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl max-w-xl">
              Histórias que <span className="italic">permanecem</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md leading-relaxed">
            Uma seleção de momentos capturados nos últimos anos — entre véus,
            risos e luzes que insistem em ficar.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-[200px] md:grid-rows-[260px] auto-rows-[200px] md:auto-rows-[260px] gap-3 md:gap-4">
          {portfolio.map((img, i) => (
            <div key={i} className={`overflow-hidden ${img.span}`}>
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          ))}
        </div>
        <div className="mt-16 flex justify-center">
          <a
            href="#contato"
            className="inline-flex items-center gap-3 border border-foreground px-10 py-4 text-xs uppercase tracking-[0.3em] hover:bg-foreground hover:text-background transition-colors"
          >
            Ver portfólio completo
          </a>
        </div>
      </div>
    </section>
  );
}

function Season() {
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
          {["Maio · 4 datas", "Junho · 6 datas", "Julho · 3 datas"].map((t) => (
            <div key={t} className="text-xs uppercase tracking-[0.3em] border-t border-background/30 pt-4 px-6">
              {t}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      title: "Casamentos",
      desc: "Cobertura completa do making of à festa. Narrativa documental, álbum impresso e galeria online.",
    },
    {
      title: "Retratos",
      desc: "Ensaios de pré-wedding, família e gestante em locação externa, com direção de luz e estética cinematográfica.",
    },
    {
      title: "Eventos Corporativos",
      desc: "Cobertura editorial de lançamentos, conferências e celebrações de marca com entrega ágil e profissional.",
    },
  ];
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
              <a href="#contato" className="mt-8 text-xs uppercase tracking-[0.25em] border-b border-foreground pb-1 self-start hover:opacity-60 transition-opacity">
                Consultar
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contato" className="bg-background pt-32 pb-12 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="eyebrow">Contato</p>
          <h2 className="mt-4 text-4xl md:text-6xl lg:text-7xl font-serif">
            Vamos contar a <span className="italic">sua história</span>?
          </h2>
          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-12 inline-flex items-center gap-3 bg-foreground text-background px-10 py-4 text-xs uppercase tracking-[0.3em] hover:bg-foreground/90 transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            Conversar no WhatsApp
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-12 pt-16 border-t border-border">
          <div>
            <p className="eyebrow">Estúdio</p>
            <p className="mt-3 flex items-start gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
              Rua das Flores, 123 — Curitiba, PR
            </p>
          </div>
          <div>
            <p className="eyebrow">Escreva-nos</p>
            <a href="mailto:ola@ceconellofotografia.com" className="mt-3 flex items-center gap-2 text-sm hover:text-muted-foreground transition-colors">
              <Mail className="w-4 h-4" />
              ola@ceconellofotografia.com
            </a>
          </div>
          <div>
            <p className="eyebrow">Acompanhe</p>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="mt-3 flex items-center gap-2 text-sm hover:text-muted-foreground transition-colors">
              <Instagram className="w-4 h-4" />
              @ceconellofotografia
            </a>
          </div>
        </div>

        <div className="mt-20 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p className="font-serif text-base text-foreground">Ceconello Fotografia</p>
          <p>© 2026 — Todos os direitos reservados. Fernanda & Thamires.</p>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main className="bg-background text-foreground">
      <Nav />
      <Hero />
      <Duo />
      <Portfolio />
      <Season />
      <Services />
      <Footer />
    </main>
  );
}
