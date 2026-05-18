import type { DriveFile } from "@/lib/google-drive";
import { driveUrl } from "@/lib/utils";

// Em cada grupo de 8, os índices 0 e 3 recebem row-span-2 para o layout escalonado
function getSpan(i: number): string {
  const pos = i % 8;
  return pos === 0 || pos === 3 ? "row-span-2" : "";
}

interface PortfolioProps {
  images: DriveFile[];
}

export function Portfolio({ images }: PortfolioProps) {
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

        {images.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-[200px] md:grid-rows-[260px] auto-rows-[200px] md:auto-rows-[260px] gap-3 md:gap-4">
            {images.map((img, i) => (
              <div key={img.id} className={`overflow-hidden ${getSpan(i)}`}>
                <img
                  src={driveUrl(img.id)}
                  alt={img.name.replace(/\.[^.]+$/, "")}
                  loading="lazy"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="py-32 text-center border border-border">
            <p className="text-muted-foreground text-sm">
              Galeria sendo preparada.
            </p>
          </div>
        )}

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
