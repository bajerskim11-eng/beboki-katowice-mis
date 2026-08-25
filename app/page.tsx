import { Hero } from '@/components/hero'
import { Trailer } from '@/components/trailer'
import { CharacterPicker } from '@/components/character-picker'
import { CollabForm } from '@/components/collab-form'
import { Presale } from '@/components/presale'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <div className="min-h-dvh bg-background">
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5 sm:px-8">
          <span className="font-display text-lg font-bold tracking-widest uppercase">Beboki</span>
          <div className="flex items-center gap-1 text-sm">
            <a
              href="#beboki"
              className="hidden min-h-11 items-center rounded-full px-4 text-muted-foreground transition-colors hover:text-foreground sm:flex"
            >
              Postacie
            </a>
            <a
              href="#wspolpraca"
              className="hidden min-h-11 items-center rounded-full px-4 text-muted-foreground transition-colors hover:text-foreground sm:flex"
            >
              Współpraca
            </a>
            <a
              href="#presale"
              className="flex min-h-11 items-center rounded-full px-4 font-medium text-primary transition-colors hover:text-accent"
            >
              Presale
            </a>
          </div>
        </nav>
      </header>

      <main>
        <Hero />
        <Trailer />
        <CharacterPicker />
        <CollabForm />
        <Presale />
      </main>

      <SiteFooter />
    </div>
  )
}
