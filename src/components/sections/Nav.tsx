export function Nav() {
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
