// ============================================
// Informações de contato — edite aqui
// ============================================
// Número no formato internacional, apenas dígitos (sem +, espaços ou traços).
// Ex.: Brasil (55) + DDD (41) + número (999999999) => "5541999999999"
export const WHATSAPP_NUMBER = "5511940578701";

// Mensagem pré-preenchida ao abrir o WhatsApp
export const WHATSAPP_MESSAGE =
  "Olá! Gostaria de saber mais sobre os serviços da Ceconello Fotografia.";

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`;

// Links de portfólio individual de cada fotógrafa
export const PORTFOLIO_LINKS = {
  fernanda: "https://instagram.com/fernanda",
  thamires: "https://instagram.com/thamires",
};

export const INSTAGRAM_URL = "https://instagram.com/ceconellofotografia";
export const EMAIL = "ola@ceconellofotografia.com";
