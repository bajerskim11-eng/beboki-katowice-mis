'use client'

import Script from 'next/script'

export function Bebok3DViewer({ modelUrl, iosModelUrl, posterUrl }: { modelUrl?: string; iosModelUrl?: string; posterUrl?: string }) {
  return (
    <>
      <Script type="module" src="https://ajax.googleapis.com/ajax/libs/model-viewer/4.1.0/model-viewer.min.js" />
      <div style={{ width: '100%', maxWidth: 720, margin: '0 auto' }}>
        {/* @ts-expect-error model-viewer is a web component */}
        <model-viewer
          src={modelUrl || undefined}
          ios-src={iosModelUrl || undefined}
          poster={posterUrl}
          alt="Bebok Hanys — model 3D"
          camera-controls
          auto-rotate
          ar
          ar-modes="webxr scene-viewer quick-look"
          shadow-intensity="1"
          exposure="1"
          style={{ width: '100%', height: 560, background: 'linear-gradient(180deg,#eef3f1,#d9e1df)', borderRadius: 24 }}
        >
          <button slot="ar-button" style={{ position: 'absolute', right: 16, bottom: 16, padding: '12px 18px', borderRadius: 999, border: 0, background: '#111', color: '#fff', fontWeight: 700 }}>
            📱 Zobacz w AR
          </button>
        </model-viewer>
      </div>
    </>
  )
}
