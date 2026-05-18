import { Instagram, MessageCircle, Mail, MapPin } from "lucide-react";
import { WHATSAPP_URL, INSTAGRAM_URL, EMAIL } from "@/lib/contact";

export function Footer() {
  return (
    <footer id="contato" className="bg-background pt-32 pb-12 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="eyebrow">Contato</p>
          <h2 className="mt-4 text-4xl md:text-6xl lg:text-7xl font-serif">
            Vamos contar a <span className="italic">sua história</span>?
          </h2>
          <a
            href={WHATSAPP_URL}
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
            <a
              href={`mailto:${EMAIL}`}
              className="mt-3 flex items-center gap-2 text-sm hover:text-muted-foreground transition-colors"
            >
              <Mail className="w-4 h-4" />
              {EMAIL}
            </a>
          </div>
          <div>
            <p className="eyebrow">Acompanhe</p>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex items-center gap-2 text-sm hover:text-muted-foreground transition-colors"
            >
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
