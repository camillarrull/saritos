import ProductCard from './ProductCard'

export default function ProductGrid({ products, showNewBadge = false }) {
  if (products.length === 0) {
    return (
      <div className="text-center py-20 text-carao font-jost font-light">
        No hay productos en esta categoría todavía.
      </div>
    )
  }

  // placeholders invisibles para completar la última fila (4 cols en desktop)
  const remainder = products.length % 4
  const placeholders = remainder === 0 ? [] : Array(4 - remainder).fill(null)

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
      {products.map(product => (
        <ProductCard key={product.id} product={product} showNewBadge={showNewBadge} />
      ))}
      {placeholders.map((_, i) => (
        <div key={`ph-${i}`} aria-hidden="true" />
      ))}
    </div>
  )
}
