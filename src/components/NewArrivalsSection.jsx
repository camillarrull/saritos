import ProductGrid from './ProductGrid'

export default function NewArrivalsSection({ products }) {
  const newProducts = products.filter(p => p.is_new)

  if (newProducts.length === 0) return null

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
        <ProductGrid products={newProducts} showNewBadge={true} />
      </div>
    </section>
  )
}
