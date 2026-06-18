export default function Hero() {
  function scrollToCatalog() {
    document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section style={{ position: 'relative', backgroundColor: '#F5F7FA', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '0 2rem', overflow: 'hidden', gap: '1rem' }}>

      {/* BLOQUE 1: logo + flor de fondo */}
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img
          src="/flor_azul.svg"
          alt=""
          style={{ position: 'absolute', width: '420px', opacity: '0.08', pointerEvents: 'none', top: '50%', left: '50%', transform: 'translate(-52%, -55%)' }}/>
        <img
          src="/logo_azul.svg"
          alt="SARITOS"
          style={{ width: '800px', maxWidth: '94vw', position: 'relative', zIndex: 1 }}
        />
      </div>

      {/* BLOQUE 2: tagline + botón */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.6rem' }}>
        <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontWeight: 300, fontSize: '1.65rem', color: '#2E6DA4', margin: 0 }}>
          el detalle que lo cambia todo
        </p>
        <button
          onClick={scrollToCatalog}
          style={{ border: '1px solid #1A3A5C', color: '#1A3A5C', padding: '0.65rem 2rem', fontSize: '0.78rem', letterSpacing: '0.15em', fontFamily: 'Jost', textTransform: 'uppercase', background: 'transparent', cursor: 'pointer' }}
          onMouseOver={e => e.currentTarget.style.backgroundColor = '#D6E4F0'}
          onMouseOut={e => e.currentTarget.style.backgroundColor = 'transparent'}
        >
          ver colección
        </button>
      </div>

    </section>
  )
}
