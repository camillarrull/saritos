import { useCart } from '../App'

export default function ProductCard({ product, showNewBadge = false }) {
  const { addToCart } = useCart()

  const stock = product.stock ?? null
  const sinStock = stock !== null && stock === 0
  const pocaStock = stock !== null && stock > 0 && stock <= 3

  return (
    <div className="group flex flex-col transition-transform duration-300 hover:scale-[1.02]">
      <div className="relative overflow-hidden bg-arena" style={{ aspectRatio: '3/4' }}>
        {product.image_url ? (
          <img
            src={product.image_url}
            alt={product.name}
            className="w-full h-full object-cover"
            style={{ opacity: sinStock ? 0.5 : 1 }}
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
          <span
            className="absolute top-2 left-2 px-2 py-0.5 text-xs tracking-widest uppercase font-jost"
            style={{ backgroundColor: '#F5F7FA', color: '#5A7FA0', border: '1px solid #A0BFDA' }}
          >
            sin stock
          </span>
        )}
      </div>

      <div className="pt-3 flex flex-col gap-1">
        <h3 className="text-cacao text-sm tracking-wide font-jost font-light leading-tight">
          {product.name}
        </h3>
        <p className="text-carao text-sm font-jost font-light">
          ${Number(product.price).toLocaleString('es-AR')}
        </p>
        {pocaStock && (
          <p style={{ fontFamily: 'Jost', fontSize: '0.7rem', color: '#C08B3A', fontWeight: 300, letterSpacing: '0.05em' }}>
            últimas {stock} unidades
          </p>
        )}
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
  )
}
