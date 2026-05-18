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

const MAX_HOME_PHOTOS = 8;

export const Route = createFileRoute("/")({
  component: Index,
  loader: async () => {
    const files = await fetchDriveFiles(generalFolderId).catch(() => []);
    return { generalImages: files.slice(0, MAX_HOME_PHOTOS) };
  },
  head: () => ({
    meta: [
      { title: "Ceconello Fotografia — Eternizando histórias" },
      {
        name: "description",
        content:
          "Fotografia de casamentos e eventos por Fernanda e Thamires. Imagens atemporais, narrativa delicada e olhar autoral.",
      },
      { property: "og:title", content: "Ceconello Fotografia — Eternizando histórias" },
      {
        property: "og:description",
        content: "Fotografia de casamentos e eventos. Olhar autoral, registros atemporais.",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500&family=Inter:wght@300;400;500&display=swap",
      },
    ],
  }),
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
