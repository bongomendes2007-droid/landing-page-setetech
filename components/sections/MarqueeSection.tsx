export default function MarqueeSection() {
  const items = [
    'AGROSETE',
    'SETE Esportivo',
    'SETE Tech',
    'SETE TV NEWS',
  ]

  const track = [...items, ...items, ...items, ...items]

  return (
    <section
      className="overflow-hidden select-none"
      style={{
        background: 'var(--color-surface)',
        borderTop: '1px solid var(--color-border)',
        borderBottom: '1px solid var(--color-border)',
        paddingTop: '20px',
        paddingBottom: '20px',
      }}
      aria-hidden
    >
      <div className="marquee-track flex items-center gap-16">
        {track.map((name, i) => (
          <div key={i} className="flex items-center gap-4 shrink-0">
            <span className="h-px w-8 block" style={{ background: 'var(--color-accent3)' }} />
            <span
              className="text-sm font-semibold tracking-widest uppercase whitespace-nowrap opacity-50 hover:opacity-100 transition-opacity duration-300"
              style={{ fontFamily: 'var(--font-syne)', color: 'var(--color-subtle)' }}
            >
              {name}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
