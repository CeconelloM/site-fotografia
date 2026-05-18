import { createFileRoute } from "@tanstack/react-router";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { Duo } from "@/components/sections/Duo";
import { Portfolio } from "@/components/sections/Portfolio";
import { Season } from "@/components/sections/Season";
import { Services } from "@/components/sections/Services";
import { Footer } from "@/components/sections/Footer";
import { fetchDriveFiles } from "@/lib/google-drive";
import { generalFolderId } from "@/lib/data";

const MAX_HOME_PHOTOS = 10;

export const Route = createFileRoute("/")({
  component: Index,
  loader: async () => {
    const files = await fetchDriveFiles(generalFolderId).catch((err) => {
      console.error("[Portfolio Home] Erro ao buscar fotos do Drive:", err);
      return [];
    });
    return { generalImages: files.slice(0, MAX_HOME_PHOTOS) };
  },
});

function Index() {
  const { generalImages } = Route.useLoaderData();
  return (
    <main className="bg-background text-foreground">
      <Nav />
      <Hero />
      <Duo />
      <Portfolio images={generalImages} />
      <Season />
      <Services />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
