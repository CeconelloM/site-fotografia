export function Hero() {
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
