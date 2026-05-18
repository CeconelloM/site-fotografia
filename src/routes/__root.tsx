import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";

function StatusPage({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">{children}</div>
    </div>
  );
}

function NotFoundComponent() {
  return (
    <StatusPage>
      <h1 className="text-7xl font-bold text-foreground">404</h1>
      <h2 className="mt-4 text-xl font-semibold text-foreground">Página não encontrada</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        A página que você está procurando não existe ou foi movida.
      </p>
      <div className="mt-6">
        <Link
          to="/"
          className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Voltar ao início
        </Link>
      </div>
    </StatusPage>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();

  return (
    <StatusPage>
      <h1 className="text-xl font-semibold tracking-tight text-foreground">
        Algo deu errado
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Ocorreu um erro inesperado. Tente novamente ou volte para o início.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-2">
        <button
          onClick={() => {
            router.invalidate();
            reset();
          }}
          className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Tentar novamente
        </button>
        <a
          href="/"
          className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
        >
          Voltar ao início
        </a>
      </div>
    </StatusPage>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Ceconello Fotografia" },
      { name: "description", content: "Fotografia de casamentos e eventos por Fernanda e Thamires. Imagens atemporais, narrativa delicada e olhar autoral." },
      { name: "author", content: "Ceconello Fotografia" },
      { property: "og:title", content: "Ceconello Fotografia" },
      { property: "og:description", content: "Fotografia de casamentos e eventos. Olhar autoral, registros atemporais." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
