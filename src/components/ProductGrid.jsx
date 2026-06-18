import ProductCard from './ProductCard'

export default function ProductGrid({ products, showNewBadge = false }) {
  if (products.length === 0) {
    return (
      <div className="text-center py-20 text-carao font-jost font-light">
        No hay productos en esta categoría todavía.
      </div>
    )
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
      {products.map(product => (
        <ProductCard key={product.id} product={product} showNewBadge={showNewBadge} />
      ))}
    </div>
  )
}
