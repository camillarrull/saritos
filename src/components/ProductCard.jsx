import { useCart } from '../App'
import { useState } from 'react'

export default function ProductCard({ product, showNewBadge = false }) {
  const { addToCart } = useCart()
  const [lightbox, setLightbox] = useState(false)

  const stock = product.stock ?? null
  const sinStock = stock !== null && stock === 0

  return (
    <>
      <div className="group flex flex-col transition-transform duration-300 hover:scale-[1.02]">
        <div
          className="relative overflow-hidden bg-arena"
          style={{ aspectRatio: '3/4', cursor: product.image_url ? 'zoom-in' : 'default' }}
          onClick={() => product.image_url && setLightbox(true)}
        >
          {product.image_url ? (
            <img
              src={product.image_url}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <img src="/flor.png" alt="" className="w-16 h-16 opacity-30 object-contain" />
            </div>
          )}
          {showNewBadge && product.is_new && !sinStock && (
            <span
              className="absolute top-2 left-2 px-2 py-0.5 text-xs tracking-widest uppercase font-jost"
              style={{ backgroundColor: '#C9BC9F', color: '#5C4F3A' }}
            >
              nuevo
            </span>
          )}
          {sinStock && (
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{ backgroundColor: 'rgba(248, 246, 243, 0.62)', backdropFilter: 'grayscale(60%)', WebkitBackdropFilter: 'grayscale(60%)' }}
            >
              <span
                className="px-4 py-1.5 font-jost text-xs tracking-[0.25em] uppercase"
                style={{ backgroundColor: 'rgba(248, 246, 243, 0.9)', color: '#1A3A5C', border: '1px solid #1A3A5C' }}
              >
                sin stock
              </span>
            </div>
          )}
        </div>

        <div className="pt-3 flex flex-col gap-1">
          <h3 className="text-cacao text-sm tracking-wide font-jost font-light leading-tight truncate">
            {product.name}
          </h3>
          <p className="text-carao text-sm font-jost font-light">
            ${Number(product.price).toLocaleString('es-AR')}
          </p>
          <button
            onClick={() => !sinStock && addToCart(product)}
            disabled={sinStock}
            className="mt-1 border text-sm py-2 px-4 transition-colors font-jost tracking-wide"
            style={{
              borderColor: sinStock ? '#A0BFDA' : '#1A3A5C',
              color: sinStock ? '#A0BFDA' : '#1A3A5C',
              cursor: sinStock ? 'not-allowed' : 'pointer',
              backgroundColor: 'transparent',
            }}
          >
            {sinStock ? 'sin stock' : '+ agregar al pedido'}
          </button>
        </div>
      </div>

      {/* lightbox */}
      {lightbox && (
        <div
          onClick={() => setLightbox(false)}
          style={{
            position: 'fixed', inset: 0, zIndex: 100,
            backgroundColor: 'rgba(0,0,0,0.85)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'zoom-out',
          }}
        >
          <button
            onClick={() => setLightbox(false)}
            style={{
              position: 'absolute', top: '1rem', right: '1rem',
              background: 'none', border: 'none', color: '#fff',
              fontSize: '2rem', lineHeight: 1, cursor: 'pointer',
              padding: '0.5rem',
            }}
            aria-label="Cerrar"
          >
            ✕
          </button>
          <img
            src={product.image_url}
            alt={product.name}
            style={{ maxHeight: '90vh', maxWidth: '90vw', objectFit: 'contain' }}
          />
        </div>
      )}
    </>
  )
}
