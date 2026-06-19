export default function Hero({ featuredProduct }) {
  function scrollToCatalog() {
    document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section style={{
      backgroundColor: '#F8F6F3',
      minHeight: '60vh',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      overflow: 'hidden',
    }}>
      {/* izquierda: tagline fija siempre */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 'clamp(2rem, 5vw, 5rem) clamp(1.5rem, 5vw, 6rem)',
        gap: '1.2rem',
      }}>
        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontWeight: 300,
          fontSize: 'clamp(1.8rem, 3.2vw, 2.8rem)',
          color: '#1A3A5C',
          margin: 0,
          lineHeight: 1.1,
        }}>
          el detalle que<br />
          <span style={{ fontStyle: 'italic', color: '#2E6DA4' }}>lo cambia todo</span>
        </h1>
        <button
          onClick={scrollToCatalog}
          style={{
            alignSelf: 'flex-start',
            border: '1px solid #1A3A5C',
            color: '#1A3A5C',
            padding: '0.65rem 2rem',
            fontFamily: 'Jost',
            fontSize: '0.72rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            background: 'transparent',
            cursor: 'pointer',
          }}
        >
          ver colección
        </button>
      </div>

      {/* derecha: solo foto */}
      <div style={{ overflow: 'hidden', backgroundColor: '#EBF0F5', position: 'relative' }}>
        {featuredProduct?.image_url ? (
          <>
          <img
            src={featuredProduct.image_url}
            alt=""
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 60%, #F8F6F3 100%)' }} />
          </>
        ) : (
          <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src="/flor_azul.svg" alt="" style={{ width: '40%', opacity: 0.1 }} />
          </div>
        )}
      </div>
    </section>
  )
}
