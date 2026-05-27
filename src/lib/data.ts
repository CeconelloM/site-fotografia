import { PORTFOLIO_LINKS } from "./contact";
import { driveUrl } from "./utils";

export interface Photographer {
  slug: string;
  name: string;
  img: string;
  bio: string;
  externalPortfolio: string;
  folderId: string;
}

// ─── Portfólio geral (página inicial) ────────────────────────────────────────
// ID da pasta pública no Google Drive com as fotos institucionais da empresa
export const generalFolderId = "1yG1GkLL6yHkyl8rm5jmsc9wIa2TUAnZ0";

// ─── Fotógrafas ───────────────────────────────────────────────────────────────
// folderId = ID da pasta pública no Google Drive (qualquer pessoa com o link pode ver)
// Para adicionar fotos: basta jogar arquivos na pasta — o site atualiza automaticamente.
export const photographers: Photographer[] = [
  {
    slug: "fernanda",
    name: "Fernanda",
    img: driveUrl("1gsWpN1yjVxD-_AgyjI8ktGxXRdOysMKh"),
    bio: "Sou apaixonada por luz natural e pequenos gestos, e busco traduzir cada cerimônia em imagens que respiram emoção. Com mais de uma década registrando histórias pelo Brasil, meu foco é capturar a essência de cada casal. Minha fotografia narra momentos únicos com sensibilidade, transformando suas memórias afetivas em registros eternos que atravessarão gerações.",
    externalPortfolio: PORTFOLIO_LINKS.fernanda,
    folderId: "1_lviRX7LuoU8_eg8JmZthMVrISCXSdGn",
  },
  {
    slug: "tamires",
    name: "Tamires",
    img: driveUrl("1j5dPuAKWwdkJqF4Rs3-D2TmBDH7y4hdZ"),
    bio: "Sou apaixonada pela emoção que cada foto transmite. Cada clique é uma oportunidade de transmitir sentimentos e aflorar uma visão que poucos podem ter daquela beleza do cotidiano. Minhas imagens buscam narrar uma história que possam transmitir um olhar que dura de gerações em gerações, captando instantes em memórias ...",
    externalPortfolio: PORTFOLIO_LINKS.thamires,
    folderId: "1urmdJkbImqcdPssevWr3eFNPVi9pyukC",
  },
];

// ─── Serviços ─────────────────────────────────────────────────────────────────
export const services = [
  {
    title: "Casamentos",
    desc: "Pré-wedding, cobertura completa do making of e da festa, além de galeria online para acesso às fotos.",
    whatsappMessage: "Quero saber mais sobre Casamento",
  },
  {
    title: "Gestantes e Infantil",
    desc: "Ensaios de gestante, newborn, família e aniversário em locações externas, com direção de luz e estética personalizada.",
    whatsappMessage: "Quero saber mais sobre Gestantes e Infantil",
  },
  {
    title: "Eventos Corporativos",
    desc: "Cobertura editorial de lançamentos, conferências e celebrações de marca com entrega ágil e profissional.",
    whatsappMessage: "Quero saber mais sobre Evento Corporativo",
  },
];

export const availableDates = ["Maio · 4 datas", "Junho · 6 datas", "Julho · 3 datas"];
