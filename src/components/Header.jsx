import { useCart } from '../App'
import { useState } from 'react'

const NAV = ['lo nuevo', 'aros', 'collares', 'accesorios']

export default function Header({ activeCategory, onCategory }) {
  const { totalItems, setCartOpen } = useCart()
  const [menuOpen, setMenuOpen] = useState(false)

  function handleNav(cat) {
    setMenuOpen(false)
    if (cat === 'lo nuevo') {
      document.getElementById('novedades')?.scrollIntoView({ behavior: 'smooth' })
    } else {
      document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth' })
      onCategory && onCategory(cat)
    }
  }

  return (
    <header style={{ borderBottom: '1px solid #A0BFDA', backgroundColor: '#FFFFFF', position: 'sticky', top: 0, zIndex: 40 }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem', display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center', minHeight: '56px' }}>

        {/* izquierda: nav desktop / hamburger mobile */}
        <div>
          {/* nav desktop */}
          <nav className="hidden md:flex" style={{ gap: '2rem', alignItems: 'center' }}>
            {NAV.map(cat => (
              <button key={cat} onClick={() => handleNav(cat)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'Jost', fontWeight: 300, fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: activeCategory === cat ? '#1A3A5C' : '#5A7FA0', borderBottom: activeCategory === cat ? '1px solid #1A3A5C' : '1px solid transparent', paddingBottom: '2px', whiteSpace: 'nowrap' }}>
                {cat}
              </button>
            ))}
          </nav>

          {/* hamburger mobile */}
          <button className="flex md:hidden" onClick={() => setMenuOpen(v => !v)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#1A3A5C', padding: '0.4rem' }} aria-label="Menú">
            <svg xmlns="http://www.w3.org/2000/svg" style={{ width: '1.4rem', height: '1.4rem' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>

        {/* centro: logo */}
        <a href="/" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 1rem', overflow: 'visible', height: '56px' }}>
          <img src="/logo_azul.svg" alt="SARITOS" style={{ width: '160px', objectFit: 'contain', position: 'absolute' }} className="md:w-[220px]" />
        </a>

        {/* derecha: carrito */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
          <button onClick={() => setCartOpen(true)} style={{ position: 'relative', padding: '0.4rem', color: '#1A3A5C', background: 'none', border: 'none', cursor: 'pointer' }} aria-label="Abrir carrito">
            <svg xmlns="http://www.w3.org/2000/svg" style={{ height: '1.4rem', width: '1.4rem' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            {totalItems > 0 && (
              <span style={{ position: 'absolute', top: 0, right: 0, backgroundColor: '#1A3A5C', color: '#FFFFFF', fontSize: '0.6rem', borderRadius: '9999px', width: '1rem', height: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Jost' }}>
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* menú mobile desplegable */}
      {menuOpen && (
        <div className="md:hidden" style={{ borderTop: '1px solid #A0BFDA', backgroundColor: '#FFFFFF' }}>
          {NAV.map(cat => (
            <button key={cat} onClick={() => handleNav(cat)} style={{ display: 'block', width: '100%', textAlign: 'left', padding: '0.9rem 1.5rem', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'Jost', fontWeight: 300, fontSize: '0.82rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: activeCategory === cat ? '#1A3A5C' : '#5A7FA0', borderBottom: '1px solid #EEF3F8' }}>
              {cat}
            </button>
          ))}
        </div>
      )}
    </header>
  )
}
