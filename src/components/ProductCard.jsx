import { useCart } from '../App'

export default function ProductCard({ product, showNewBadge = false }) {
  const { addToCart } = useCart()

  return (
    <div className="group flex flex-col transition-transform duration-300 hover:scale-[1.02]">
      <div className="relative overflow-hidden bg-arena" style={{ aspectRatio: '3/4' }}>
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
        {showNewBadge && product.is_new && (
          <span
            className="absolute top-2 left-2 px-2 py-0.5 text-xs tracking-widest uppercase font-jost"
            style={{ backgroundColor: '#C9BC9F', color: '#5C4F3A' }}
          >
            nuevo
          </span>
        )}
      </div>

      <div className="pt-3 flex flex-col gap-2">
        <h3 className="text-cacao text-sm tracking-wide font-jost font-light leading-tight">
          {product.name}
        </h3>
        <p className="text-carao text-sm font-jost font-light">
          ${Number(product.price).toLocaleString('es-AR')}
        </p>
        <button
          onClick={() => addToCart(product)}
          className="mt-1 border text-sm py-2 px-4 transition-colors font-jost tracking-wide hover:bg-arena"
          style={{ borderColor: '#1A3A5C', color: '#1A3A5C' }}
        >
          + agregar al pedido
        </button>
      </div>
    </div>
  )
}
