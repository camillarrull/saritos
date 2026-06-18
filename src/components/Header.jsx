import { useCart } from '../App'
import { useEffect, useState } from 'react'

export default function Header() {
  const { totalItems, setCartOpen } = useCart()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > window.innerHeight * 0.7)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      style={{
        borderBottom: '1px solid #A0BFDA',
        backgroundColor: '#FFFFFF',
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? 'auto' : 'none',
        transform: visible ? 'translateY(0)' : 'translateY(-100%)',
        transition: 'opacity 0.4s ease, transform 0.4s ease',
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 40,
      }}
    >
      <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '0.85rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ width: '2rem' }} />

        <a href="/">
          <img src="/flor_azul.svg" alt="SARITOS" style={{ height: '2rem', objectFit: 'contain' }} />
        </a>

        <button
          onClick={() => setCartOpen(true)}
          style={{ position: 'relative', padding: '0.5rem', color: '#1A3A5C', background: 'none', border: 'none', cursor: 'pointer' }}
          aria-label="Abrir carrito"
        >
          <svg xmlns="http://www.w3.org/2000/svg" style={{ height: '1.5rem', width: '1.5rem' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
          {totalItems > 0 && (
            <span style={{ position: 'absolute', top: 0, right: 0, backgroundColor: '#1A3A5C', color: '#FFFFFF', fontSize: '0.65rem', borderRadius: '9999px', width: '1.1rem', height: '1.1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Jost' }}>
              {totalItems}
            </span>
          )}
        </button>
      </div>
    </header>
  )
}
