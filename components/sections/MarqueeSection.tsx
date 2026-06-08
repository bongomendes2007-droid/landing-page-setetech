export default function MarqueeSection() {
  const items = [
    'AGROSETE',
    'SETE Esportivo',
    'SETE Tech',
    'SETE TV NEWS',
  ]

  // Duplicate for seamless loop
  const track = [...items, ...items, ...items, ...items]

  return (
    <section
      className="overflow-hidden py-5 select-none"
      style={{ background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}
      aria-hidden
    >
      <div className="marquee-track flex items-center gap-16">
        {track.map((name, i) => (
          <div
            key={i}
            className="flex items-center gap-4 shrink-0"
          >
            <span
              className="h-px w-8 block"
              style={{ background: 'var(--color-accent3)' }}
            />
            <span
              className="text-sm font-semibold tracking-widest uppercase whitespace-nowrap"
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
