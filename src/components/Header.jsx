import { useCart } from '../App'

const NAV = ['lo nuevo', 'aros', 'collares', 'accesorios']

export default function Header({ activeCategory, onCategory }) {
  const { totalItems, setCartOpen } = useCart()

  function handleNav(cat) {
    if (cat === 'lo nuevo') {
      document.getElementById('novedades')?.scrollIntoView({ behavior: 'smooth' })
    } else {
      document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth' })
      onCategory && onCategory(cat)
    }
  }

  return (
    <header style={{
      borderBottom: '1px solid #A0BFDA',
      backgroundColor: '#FFFFFF',
      position: 'sticky',
      top: 0,
      zIndex: 40,
    }}>
      <div style={{
        maxWidth: '80rem',
        margin: '0 auto',
        padding: '0 2rem',
        display: 'grid',
        gridTemplateColumns: '1fr auto 1fr',
        alignItems: 'center',
        minHeight: '56px',
      }}>
        {/* nav izquierda — todos los items */}
        <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          {NAV.map(cat => (
            <button
              key={cat}
              onClick={() => handleNav(cat)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'Jost',
                fontWeight: 300,
                fontSize: '0.72rem',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: activeCategory === cat ? '#1A3A5C' : '#5A7FA0',
                borderBottom: activeCategory === cat ? '1px solid #1A3A5C' : '1px solid transparent',
                paddingBottom: '2px',
                whiteSpace: 'nowrap',
              }}
            >
              {cat}
            </button>
          ))}
        </nav>

        {/* logo centro — más grande */}
        <a href="/" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 2rem', overflow: 'visible', height: '56px' }}>
          <img src="/logo_azul.svg" alt="SARITOS" style={{ width: '220px', objectFit: 'contain', position: 'absolute' }} />
        </a>

        {/* carrito derecha */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
          <button
            onClick={() => setCartOpen(true)}
            style={{ position: 'relative', padding: '0.4rem', color: '#1A3A5C', background: 'none', border: 'none', cursor: 'pointer' }}
            aria-label="Abrir carrito"
          >
            <svg xmlns="http://www.w3.org/2000/svg" style={{ height: '1.5rem', width: '1.5rem' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
    </header>
  )
}
