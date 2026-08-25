'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Check, Pickaxe, Footprints, Wrench, Flashlight } from 'lucide-react'
import { cn } from '@/lib/utils'

const beboki = [
  {
    id: 'hanys',
    name: 'Hanys',
    color: 'Zielony',
    role: 'Budowniczy',
    desc: 'Spokojny i silny. Kilofem przebija zawały i buduje przejścia dla całej ekipy.',
    image: '/beboki/hanys.jpeg',
    icon: Pickaxe,
    ring: 'oklch(0.72 0.16 145)',
  },
  {
    id: 'hopla',
    name: 'Hopla',
    color: 'Różowa',
    role: 'Zwiadowczyni',
    desc: 'Zwinna i szybka. Wspina się najwyżej i pierwsza wypatruje bezpiecznej drogi.',
    image: '/beboki/hopla.jpeg',
    icon: Footprints,
    ring: 'oklch(0.75 0.17 5)',
  },
  {
    id: 'fachura',
    name: 'Fachura',
    color: 'Niebieski',
    role: 'Wynalazca',
    desc: 'Inteligentny konstruktor. Rozbraja pułapki i naprawia to, co inni psują.',
    image: '/beboki/fachura.jpeg',
    icon: Wrench,
    ring: 'oklch(0.68 0.16 255)',
  },
  {
    id: 'podciep',
    name: 'Podciep',
    color: 'Fioletowy',
    role: 'Latarnik',
    desc: 'Jego magiczna lampa odsłania ukryte ścieżki i sekrety podziemi Katowic.',
    image: '/beboki/podciep.jpeg',
    icon: Flashlight,
    ring: 'oklch(0.65 0.16 305)',
  },
]

export function CharacterPicker() {
  const [selected, setSelected] = useState<string | null>(null)

  return (
    <section id="beboki" className="scroll-mt-20 px-5 py-16 sm:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-center text-3xl font-bold tracking-tight uppercase sm:text-4xl">
          Wybierz swojego Beboka
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center leading-relaxed text-muted-foreground text-pretty">
          Każdy Bebok ma jedną specjalną umiejętność. Bez wszystkich czterech nie wyjdziesz z
          podziemi.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {beboki.map((b) => {
            const isSelected = selected === b.id
            const Icon = b.icon
            return (
              <Card
                key={b.id}
                className={cn(
                  'overflow-hidden rounded-3xl border-border bg-card p-0 transition-all duration-300',
                  isSelected
                    ? 'shadow-2xl shadow-black/60 ring-2 ring-primary'
                    : 'hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40',
                )}
              >
                <div
                  className="relative aspect-4/5 bg-muted"
                  style={{ boxShadow: `inset 0 -120px 120px -80px ${b.ring}` }}
                >
                  <Image
                    src={b.image || '/placeholder.svg'}
                    alt={`${b.name} — ${b.role}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-top"
                  />
                  <span
                    className="absolute top-3 left-3 rounded-full px-3 py-1 text-[11px] font-semibold tracking-widest uppercase backdrop-blur-sm"
                    style={{ backgroundColor: `${b.ring}`, color: 'oklch(0.17 0.01 60)' }}
                  >
                    {b.color}
                  </span>
                </div>

                <CardContent className="flex flex-col gap-3 p-5">
                  <div className="flex items-center gap-2">
                    <Icon className="size-5 text-accent" aria-hidden="true" />
                    <h3 className="font-display text-2xl font-bold uppercase">{b.name}</h3>
                  </div>
                  <p className="text-xs tracking-widest text-primary uppercase">{b.role}</p>
                  <p className="min-h-16 text-sm leading-relaxed text-muted-foreground">{b.desc}</p>
                  <Button
                    variant={isSelected ? 'default' : 'outline'}
                    className="mt-1 h-11 w-full rounded-full"
                    aria-pressed={isSelected}
                    onClick={() => setSelected(isSelected ? null : b.id)}
                  >
                    {isSelected ? (
                      <>
                        <Check className="size-4" aria-hidden="true" />
                        Wybrany
                      </>
                    ) : (
                      'Wybieram'
                    )}
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <p aria-live="polite" className="mt-6 text-center text-sm text-muted-foreground">
          {selected
            ? `Twój Bebok: ${beboki.find((b) => b.id === selected)?.name}`
            : 'Nie wybrano jeszcze Beboka.'}
        </p>
      </div>
    </section>
  )
}
