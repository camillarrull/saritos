const WA = import.meta.env.VITE_WHATSAPP_NUMBER || '5493517522474'

export default function Hero({ featuredProduct }) {
  function scrollToCatalog() {
    document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth' })
  }

  if (featuredProduct) {
    return (
      <section style={{
        position: 'relative',
        backgroundColor: '#F5F7FA',
        minHeight: '88vh',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        overflow: 'hidden',
      }}>
        {/* texto izquierda */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '4rem 3rem 4rem 5rem',
          gap: '1.2rem',
        }}>
          <span style={{ fontFamily: 'Jost', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#2E6DA4', fontWeight: 300 }}>
            destacado
          </span>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontWeight: 300, fontSize: '3.2rem', color: '#1A3A5C', margin: 0, lineHeight: 1.1 }}>
            {featuredProduct.name}
          </h1>
          {featuredProduct.description && (
            <p style={{ fontFamily: 'Jost', fontWeight: 300, fontSize: '0.9rem', color: '#5A7FA0', margin: 0, lineHeight: 1.6, maxWidth: '28ch' }}>
              {featuredProduct.description}
            </p>
          )}
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.8rem', color: '#1A3A5C', margin: 0, fontWeight: 400 }}>
            ${featuredProduct.price?.toLocaleString('es-AR')}
          </p>
          <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
            <a
              href={`https://wa.me/${WA}?text=Hola! Me interesa ${encodeURIComponent(featuredProduct.name)}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                backgroundColor: '#1A3A5C',
                color: '#FFFFFF',
                padding: '0.7rem 2rem',
                fontFamily: 'Jost',
                fontSize: '0.75rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                textDecoration: 'none',
              }}
            >
              consultar
            </a>
            <button
              onClick={scrollToCatalog}
              style={{
                border: '1px solid #1A3A5C',
                color: '#1A3A5C',
                padding: '0.7rem 2rem',
                fontFamily: 'Jost',
                fontSize: '0.75rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                background: 'transparent',
                cursor: 'pointer',
              }}
            >
              ver todo
            </button>
          </div>
        </div>

        {/* foto derecha */}
        <div style={{ position: 'relative', overflow: 'hidden' }}>
          <img
            src={featuredProduct.image_url}
            alt={featuredProduct.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, #F5F7FA 0%, transparent 8%)' }} />
        </div>
      </section>
    )
  }

  return (
    <section style={{ position: 'relative', backgroundColor: '#F5F7FA', height: '90vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '0 2rem', overflow: 'hidden', gap: '1rem' }}>
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img src="/flor_azul.svg" alt="" style={{ position: 'absolute', width: '420px', opacity: '0.06', pointerEvents: 'none', top: '50%', left: '50%', transform: 'translate(-52%, -55%)' }} />
        <img src="/logo_azul.svg" alt="SARITOS" style={{ width: '700px', maxWidth: '90vw', position: 'relative', zIndex: 1 }} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.6rem' }}>
        <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontWeight: 300, fontSize: '1.65rem', color: '#2E6DA4', margin: 0 }}>
          el detalle que lo cambia todo
        </p>
        <button
          onClick={scrollToCatalog}
          style={{ border: '1px solid #1A3A5C', color: '#1A3A5C', padding: '0.65rem 2rem', fontSize: '0.78rem', letterSpacing: '0.15em', fontFamily: 'Jost', textTransform: 'uppercase', background: 'transparent', cursor: 'pointer' }}
        >
          ver colección
        </button>
      </div>
    </section>
  )
}
