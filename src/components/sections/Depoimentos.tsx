import { depoimentos } from "@/lib/depoimentos";

function Stars() {
  return (
    <div className="flex gap-1" aria-label="5 estrelas">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="w-3.5 h-3.5 text-zinc-400 opacity-80" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export function Depoimentos() {
  return (
    <section id="depoimentos" className="py-32 lg:py-44 px-6 lg:px-12 bg-zinc-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="eyebrow !text-zinc-500">Depoimentos</p>
          <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-serif text-white">
            O que dizem <span className="italic">sobre nós</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-zinc-800">
          {depoimentos.map((d) => (
            <div
              key={d.id}
              className="bg-zinc-900 p-10 lg:p-14 flex flex-col"
            >
              <Stars />

              <p className="font-serif italic text-zinc-200 leading-relaxed flex-1 mt-8 text-lg">
                &ldquo;{d.texto}&rdquo;
              </p>

              <div className="mt-10 pt-8 border-t border-zinc-800 flex items-center gap-4">
                {d.fotoClienteUrl ? (
                  <img
                    src={d.fotoClienteUrl}
                    alt={d.nome}
                    className="w-11 h-11 rounded-full object-cover grayscale shrink-0"
                  />
                ) : (
                  <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center shrink-0">
                    <span className="font-serif text-base text-zinc-900">
                      {d.nome.charAt(0)}
                    </span>
                  </div>
                )}
                <div>
                  <p className="font-serif text-sm text-white">{d.nome}</p>
                  <p className="text-[0.65rem] uppercase tracking-[0.25em] text-zinc-500 mt-0.5">
                    {d.tipoServico}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border border-white/40 text-white px-10 py-4 text-xs uppercase tracking-[0.3em] hover:bg-white hover:text-zinc-900 transition-colors"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="currentColor"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="currentColor"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="currentColor"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="currentColor"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Ver todas as avaliações no Google
          </a>
        </div>
      </div>
    </section>
  );
}
