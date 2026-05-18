import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { photographers } from "@/lib/data";
import { fetchDriveFiles } from "@/lib/google-drive";
import { driveUrl } from "@/lib/utils";
import { Nav } from "@/components/sections/Nav";

export const Route = createFileRoute("/portfolio/$slug")({
  component: PortfolioPage,
  loader: async ({ params }) => {
    const photographer = photographers.find((p) => p.slug === params.slug);
    if (!photographer) throw notFound();

    const images = await fetchDriveFiles(photographer.folderId).catch(() => []);
    return { photographer, images };
  },
});

function PortfolioPage() {
  const { photographer, images } = Route.useLoaderData();

  return (
    <main className="bg-background text-foreground min-h-screen">
      <Nav />

      <section className="pt-40 pb-32 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors mb-16"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Voltar
          </Link>

          <div className="mb-20 max-w-2xl">
            <p className="eyebrow">Portfólio individual</p>
            <h1 className="mt-4 font-serif text-5xl md:text-6xl lg:text-7xl">
              {photographer.name}
            </h1>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              {photographer.bio}
            </p>
          </div>

          {images.length > 0 ? (
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
              {images.map((img, i) => (
                <div key={img.id} className="overflow-hidden break-inside-avoid">
                  <img
                    src={driveUrl(img.id)}
                    alt={img.name.replace(/\.[^.]+$/, "")}
                    loading={i < 3 ? "eager" : "lazy"}
                    className="w-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="py-32 text-center border border-border">
              <p className="eyebrow mb-4">Em breve</p>
              <p className="text-muted-foreground text-sm">
                O portfólio de {photographer.name} está sendo preparado.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
