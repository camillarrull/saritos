import { useState } from 'react'
import ProductGrid from './ProductGrid'

const PAGE_SIZE = 10

export default function NewArrivalsSection({ products }) {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)
  const newProducts = products.filter(p => p.is_new)

  if (newProducts.length === 0) return null

  const visible = newProducts.slice(0, visibleCount)
  const hasMore = newProducts.length > visibleCount

  return (
    <section className="bg-papel py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-6 mb-12">
          <img src="/flor_azul.svg" alt="" className="h-8 w-8 object-contain opacity-50" />
          <h2
            className="text-cacao text-4xl md:text-5xl"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontWeight: 300 }}
          >
            lo que llegó
          </h2>
          <img src="/flor_azul.svg" alt="" className="h-8 w-8 object-contain opacity-50" />
        </div>
        <ProductGrid products={visible} showNewBadge={true} />
        {hasMore && (
          <div className="text-center mt-12">
            <button
              onClick={() => setVisibleCount(v => v + PAGE_SIZE)}
              style={{
                border: '1px solid #1A3A5C',
                color: '#1A3A5C',
                padding: '0.65rem 2.5rem',
                fontFamily: 'Jost',
                fontSize: '0.72rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                background: 'transparent',
                cursor: 'pointer',
              }}
            >
              ver más
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
