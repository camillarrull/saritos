const WA = import.meta.env.VITE_WHATSAPP_NUMBER || '5493517522474'

export default function Hero({ featuredProduct }) {
  function scrollToCatalog() {
    document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth' })
  }

  const title = featuredProduct ? featuredProduct.name : null
  const imageUrl = featuredProduct?.image_url || null

  return (
    <section style={{
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
        padding: '5rem 4rem 5rem 6rem',
        gap: '1.4rem',
      }}>
        {featuredProduct && (
          <span style={{
            fontFamily: 'Jost',
            fontSize: '0.68rem',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: '#2E6DA4',
            fontWeight: 300,
          }}>
            destacado
          </span>
        )}

        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontWeight: 300,
          fontSize: '3.8rem',
          color: '#1A3A5C',
          margin: 0,
          lineHeight: 1.08,
        }}>
          {title ? (
            title
          ) : (
            <>el detalle que{' '}
              <span style={{ fontStyle: 'italic', color: '#2E6DA4' }}>lo cambia</span>
              {' '}todo</>
          )}
        </h1>

        {featuredProduct?.description && (
          <p style={{
            fontFamily: 'Jost',
            fontWeight: 300,
            fontSize: '0.88rem',
            color: '#5A7FA0',
            margin: 0,
            lineHeight: 1.7,
            maxWidth: '30ch',
          }}>
            {featuredProduct.description}
          </p>
        )}

        {featuredProduct && (
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '2rem',
            color: '#1A3A5C',
            margin: 0,
            fontWeight: 400,
          }}>
            ${featuredProduct.price?.toLocaleString('es-AR')}
          </p>
        )}

        <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap', marginTop: '0.4rem' }}>
          {featuredProduct ? (
            <a
              href={`https://wa.me/${WA}?text=Hola! Me interesa ${encodeURIComponent(featuredProduct.name)}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                backgroundColor: '#1A3A5C',
                color: '#FFFFFF',
                padding: '0.75rem 2.2rem',
                fontFamily: 'Jost',
                fontSize: '0.72rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                textDecoration: 'none',
              }}
            >
              consultar
            </a>
          ) : null}
          <button
            onClick={scrollToCatalog}
            style={{
              border: '1px solid #1A3A5C',
              color: '#1A3A5C',
              padding: '0.75rem 2.2rem',
              fontFamily: 'Jost',
              fontSize: '0.72rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              background: 'transparent',
              cursor: 'pointer',
            }}
          >
            ver colección
          </button>
        </div>
      </div>

      {/* imagen derecha */}
      <div style={{ position: 'relative', overflow: 'hidden', backgroundColor: '#EBF0F5' }}>
        {imageUrl ? (
          <>
            <img
              src={imageUrl}
              alt={featuredProduct?.name || ''}
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, #F5F7FA 0%, transparent 6%)' }} />
          </>
        ) : (
          <div style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            color: '#A0BFDA',
          }}>
            <svg xmlns="http://www.w3.org/2000/svg" style={{ width: '3rem', height: '3rem' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p style={{ fontFamily: 'Jost', fontSize: '0.75rem', letterSpacing: '0.1em', textAlign: 'center', maxWidth: '16ch' }}>
              marcá un producto como destacado desde el admin
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
