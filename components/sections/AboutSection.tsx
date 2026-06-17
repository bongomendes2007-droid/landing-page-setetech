'use client'

export default function AboutSection() {
  return (
    <section
      id="sobre"
      className="overflow-x-clip min-h-screen flex flex-col justify-center py-20 md:py-28 lg:py-32"
      style={{
        backgroundImage: 'url(https://res.cloudinary.com/dnth1inmv/image/upload/v1781729975/Design_sem_nome_6_xvkbwl.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#FFF7EA',
      }}
    >
      <div className="px-8 md:px-16 lg:px-24" style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

          {/* Bloco de texto */}
          <div style={{ maxWidth: '640px', width: '100%' }}>
            <span style={{
              display: 'inline-block',
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#6A00FF',
              fontFamily: 'var(--font-dm-sans)',
              marginBottom: '12px',
            }}>
              NOSSA HISTÓRIA
            </span>

            <h2 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(28px, 3.5vw, 48px)',
              fontWeight: 400,
              color: '#0D0D0D',
              lineHeight: 1.1,
              marginBottom: '24px',
            }}>
              Tecnologia feita <br />
              <em style={{
                fontStyle: 'italic',
                background: 'linear-gradient(90deg, #6A00FF, #D600FF)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                no Piauí, para o Brasil.
              </em>
            </h2>

            <p style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '16px',
              lineHeight: 1.7,
              color: '#444444',
              marginBottom: '16px',
            }}>
              Nascemos em Teresina, PI, com a missão de democratizar acesso a soluções digitais de alto
              nível para empresas regionais e o setor público. Acreditamos que a distância dos grandes
              centros não deve ser obstáculo para acessar tecnologia de ponta.
            </p>

            <p style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '16px',
              lineHeight: 1.7,
              color: '#444444',
            }}>
              Em 5 anos, transformamos negócios de 12 municípios piauienses — de PMEs locais a secretarias
              e autarquias — com sistemas modernos, rápidos e fáceis de usar.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
