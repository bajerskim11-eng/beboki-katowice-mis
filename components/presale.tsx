import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Check, Smartphone } from 'lucide-react'

const zawartosc = [
  'Wszystkie 4 Beboki: Hanys, Hopla, Fachura, Podciep',
  'Pełna kampania „Serce Śląska” w Katowicach',
  'Odznaki i sekrety prawdziwych miejsc miasta',
  'Dostęp do wersji testowej przed premierą',
]

export function Presale() {
  return (
    <section id="presale" className="scroll-mt-20 px-5 py-16 sm:px-8 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-5">
        <Card className="rounded-3xl border-primary/40 bg-card p-0 shadow-2xl shadow-black/50 lg:col-span-3">
          <CardContent className="p-7 sm:p-10">
            <p className="text-xs tracking-widest text-primary uppercase">Presale</p>
            <h2 className="font-display mt-4 text-3xl font-bold tracking-tight uppercase sm:text-4xl">
              Zestaw 4 Beboków
            </h2>
            <p className="font-display mt-6 text-6xl font-bold text-accent sm:text-7xl">
              299 <span className="text-3xl sm:text-4xl">zł</span>
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Cena przedpremierowa — obowiązuje do dnia premiery.
            </p>

            <ul className="mt-8 flex flex-col gap-3">
              {zawartosc.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                  <span className="text-sm leading-relaxed text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <Button
              size="lg"
              className="mt-9 h-13 w-full rounded-full text-base font-semibold sm:w-auto sm:px-10"
            >
              Zamawiam Presale
            </Button>
          </CardContent>
        </Card>

        <Card className="rounded-3xl border-border bg-muted/40 p-0 lg:col-span-2">
          <CardContent className="flex h-full flex-col p-7 sm:p-10">
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-accent/15 px-3 py-1.5 text-xs tracking-widest text-accent uppercase">
              <Smartphone className="size-4" aria-hidden="true" />
              Wsparcie
            </span>
            <h3 className="font-display mt-5 text-2xl font-bold uppercase">Wpłaty BLIK</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground text-pretty">
              Chcesz wsparcić produkcję niezależnie od presale? Wyślij dowolną kwotę BLIK-iem na
              telefon.
            </p>

            <div className="mt-7 rounded-2xl border border-dashed border-accent/50 bg-background p-5 text-center">
              <p className="text-xs tracking-widest text-muted-foreground uppercase">
                Numer telefonu
              </p>
              <p className="font-display mt-2 text-2xl font-bold tracking-wider text-accent">
                [TUTAJ WPISZ NUMER]
              </p>
            </div>

            <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
              W tytule przelewu wpisz swój nick — wsparcie trafi na listę podziękowań w grze.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
