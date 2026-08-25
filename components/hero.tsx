import { Button } from '@/components/ui/button'
import { Play, MapPin } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pt-16 pb-20 sm:px-8 md:pt-24 md:pb-28">
      {/* poświata kopalnianej lampy */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-40 h-[420px] opacity-60 blur-3xl"
        style={{
          background:
            'radial-gradient(60% 60% at 50% 40%, oklch(0.7 0.18 48 / 0.35), transparent 70%)',
        }}
      />
      <div className="relative mx-auto max-w-5xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-2 text-xs tracking-widest text-muted-foreground uppercase">
          <MapPin className="size-4 text-primary" aria-hidden="true" />
          Katowice · Górny Śląsk
        </span>

        <h1 className="font-display mt-8 text-[clamp(2.5rem,11vw,7rem)] leading-[0.9] font-bold tracking-tight text-balance uppercase">
          Beboki:
          <span className="block bg-gradient-to-b from-accent to-primary bg-clip-text text-transparent">
            Katowice — Misja
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty sm:text-xl">
          Gra, w której całe miasto jest planszą. Odnajdź Serce Śląska!
        </p>

        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Button
            render={<a href="#zapowiedz" />}
            nativeButton={false}
            size="lg"
            className="h-13 w-full rounded-full px-8 text-base font-semibold sm:w-auto"
          >
            <Play className="size-5" aria-hidden="true" />
            Obejrzyj Zapowiedź
          </Button>
          <Button
            render={<a href="#beboki" />}
            nativeButton={false}
            size="lg"
            variant="outline"
            className="h-13 w-full rounded-full border-border bg-card/60 px-8 text-base sm:w-auto"
          >
            Wybierz swojego Beboka
          </Button>
        </div>

        <dl className="mx-auto mt-14 grid max-w-2xl grid-cols-3 gap-4 border-t border-border pt-8 text-center">
          {[
            { k: '40', v: 'Beboków do uratowania' },
            { k: '4', v: 'Klasy z unikalnymi zdolnościami' },
            { k: '1', v: 'Miasto jako plansza' },
          ].map((item) => (
            <div key={item.k}>
              <dt className="font-display text-3xl font-bold text-accent sm:text-4xl">{item.k}</dt>
              <dd className="mt-1 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                {item.v}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
