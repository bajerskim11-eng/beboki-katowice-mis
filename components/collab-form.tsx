'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle2, Handshake } from 'lucide-react'

export function CollabForm() {
  const [sent, setSent] = useState(false)

  return (
    <section id="wspolpraca" className="scroll-mt-20 px-5 py-16 sm:px-8 md:py-24">
      <div className="mx-auto max-w-3xl">
        <Card className="rounded-3xl border-border bg-card p-0 shadow-2xl shadow-black/50">
          <CardContent className="p-7 sm:p-12">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/15 px-3 py-1.5 text-xs tracking-widest text-primary uppercase">
              <Handshake className="size-4" aria-hidden="true" />
              Współpraca
            </span>
            <h2 className="font-display mt-5 text-3xl font-bold tracking-tight uppercase sm:text-4xl">
              Twórzmy Beboki razem
            </h2>
            <p className="mt-3 leading-relaxed text-muted-foreground text-pretty">
              Jesteś grafikiem, dźwiękowcem, testerem albo znasz Katowice na wylot? Zostaw kontakt —
              odezwiemy się przed premierą.
            </p>

            {sent ? (
              <div
                role="status"
                className="mt-8 flex items-start gap-3 rounded-2xl border border-primary/40 bg-primary/10 p-5"
              >
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                <p className="text-sm leading-relaxed">
                  Dziękujemy! Zapisaliśmy Cię do współpracy — damy znać, gdy ruszamy z produkcją.
                </p>
              </div>
            ) : (
              <form
                className="mt-8 flex flex-col gap-5"
                onSubmit={(e) => {
                  e.preventDefault()
                  setSent(true)
                }}
              >
                <div className="flex flex-col gap-2">
                  <Label htmlFor="nick" className="text-sm">
                    Imię / Nick
                  </Label>
                  <Input
                    id="nick"
                    name="nick"
                    required
                    autoComplete="nickname"
                    placeholder="np. Hanys z Nikiszowca"
                    className="h-12 rounded-xl bg-background text-base"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="email" className="text-sm">
                    E-mail
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    inputMode="email"
                    placeholder="ty@example.com"
                    className="h-12 rounded-xl bg-background text-base"
                  />
                </div>
                <Button type="submit" size="lg" className="h-13 w-full rounded-full text-base font-semibold">
                  Zapisz mnie do współpracy
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
