export function SiteFooter() {
  return (
    <footer className="border-t border-border px-5 py-12 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center">
        <p className="font-display text-xl font-bold tracking-widest uppercase">Beboki</p>
        <p className="text-sm leading-relaxed text-muted-foreground text-pretty">
          Gra tworzona na Śląsku, w Katowicach — przez ludzi, którzy znają te ulice na pamięć.
        </p>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Beboki: Katowice — Misja. Wszelkie prawa zastrzeżone.
        </p>
      </div>
    </footer>
  )
}
