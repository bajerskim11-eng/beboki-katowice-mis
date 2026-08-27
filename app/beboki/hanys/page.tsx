import { Bebok3DViewer } from '@/components/bebok-3d-viewer'

const HANYSA_IMAGE = '/beboki/hanys.jpeg'

export default function Hanys3DPage() {
  const modelUrl = process.env.NEXT_PUBLIC_HANYS_GLB_URL
  const iosModelUrl = process.env.NEXT_PUBLIC_HANYS_USDZ_URL

  return (
    <main style={{ minHeight: '100vh', padding: '48px 20px', background: '#f7f7f4', color: '#171717', fontFamily: 'system-ui, sans-serif' }}>
      <section style={{ maxWidth: 920, margin: '0 auto' }}>
        <p style={{ margin: 0, fontWeight: 800, letterSpacing: '.12em', textTransform: 'uppercase', fontSize: 12 }}>BEBOKI KATOWICE</p>
        <h1 style={{ fontSize: 'clamp(42px,7vw,76px)', lineHeight: .95, margin: '12px 0' }}>Hanys w 3D</h1>
        <p style={{ maxWidth: 620, fontSize: 18, lineHeight: 1.5, color: '#555' }}>
          Pierwszy prototyp podglądu Beboka. Obracaj, przybliżaj i — na kompatybilnym telefonie — przenieś postać do swojej przestrzeni w AR.
        </p>
        <Bebok3DViewer modelUrl={modelUrl} iosModelUrl={iosModelUrl} posterUrl={HANYSA_IMAGE} />
        {!modelUrl && (
          <div style={{ marginTop: 16, padding: 18, borderRadius: 16, background: '#fff3cd', border: '1px solid #e5cf7a' }}>
            <strong>Model 3D czeka na podpięcie.</strong><br />
            Viewer i przycisk AR są już przygotowane. Następny krok to wygenerowanie właściwego Hanysa GLB na podstawie istniejącej referencji.
          </div>
        )}
      </section>
    </main>
  )
}
