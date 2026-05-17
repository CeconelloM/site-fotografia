import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/contact";

/**
 * Botão flutuante de WhatsApp.
 * Aparece fixo no canto inferior direito em todas as páginas.
 * Para alterar número/mensagem, edite src/lib/contact.ts
 */
export function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-foreground text-background shadow-lg hover:scale-105 hover:bg-foreground/90 transition-all duration-300"
    >
      <MessageCircle className="w-6 h-6" strokeWidth={1.5} />
      <span className="sr-only">WhatsApp</span>
    </a>
  );
}
