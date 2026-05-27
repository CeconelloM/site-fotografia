import { driveUrl } from "./utils";

export interface Depoimento {
  id: string;
  nome: string;
  tipoServico: string;
  texto: string;
  fotoClienteUrl: string;
}

// Para adicionar a foto de um cliente, substitua a string vazia pelo ID
// da imagem no Google Drive (mesma forma que o portfólio das fotógrafas).
// Ex.: fotoClienteUrl: driveUrl("ID_DO_ARQUIVO_NO_DRIVE")
export const depoimentos: Depoimento[] = [
  {
    id: "1",
    nome: "Fernanda & Rodrigo",
    tipoServico: "Casamento",
    texto:
      "Desde o primeiro contato até a entrega das fotos, tudo foi simplesmente perfeito. Elas capturaram cada olhar, cada detalhe e cada emoção do nosso dia de um jeito que vai nos emocionar para sempre. O álbum é lindo demais.",
    fotoClienteUrl: "",
  },
  {
    id: "2",
    nome: "Camila & Lucas",
    tipoServico: "Pré-Wedding",
    texto:
      "Fizemos nosso ensaio externo com a Ceconello e foi uma experiência incrível. A direção é muito natural e o olhar delas para a luz é único. As fotos ficaram com uma estética que a gente não imaginava que seria possível alcançar.",
    fotoClienteUrl: "",
  },
  {
    id: "3",
    nome: "Ana Luiza",
    tipoServico: "Ensaio Gestante",
    texto:
      "Registraram minha gestação com tanta delicadeza e afeto. Cada imagem conta uma história diferente. Tenho certeza que meu filho vai olhar essas fotos e sentir todo o amor que estava presente naquele momento especial.",
    fotoClienteUrl: "",
  },
];
