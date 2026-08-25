import { Play } from 'lucide-react'

export function Trailer() {
  return (
    <section id="zapowiedz" className="scroll-mt-20 px-5 py-16 sm:px-8 md:py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-display text-center text-3xl font-bold tracking-tight uppercase sm:text-4xl">
          Zapowiedź
        </h2>
        <p className="mt-3 text-center leading-relaxed text-muted-foreground text-pretty">
          Zobacz pierwsze klatki i zapowiedź
        </p>

        {/* Placeholder pod film z YouTube — wystarczy podmienić na <iframe> */}
        <div className="mt-10 overflow-hidden rounded-3xl border border-border bg-card shadow-2xl shadow-black/50">
          <div className="relative flex aspect-video items-center justify-center bg-muted">
            <div className="flex flex-col items-center gap-4 px-6 text-center">
              <span className="flex size-16 items-center justify-center rounded-full bg-primary/15 ring-1 ring-primary/40">
                <Play className="size-7 text-primary" aria-hidden="true" />
              </span>
              <p className="text-sm tracking-widest text-muted-foreground uppercase">
                Tutaj wstaw film z YouTube
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
