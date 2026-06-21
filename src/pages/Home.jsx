import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'
import Banner from '../components/Banner'
import Header from '../components/Header'
import Hero from '../components/Hero'
import NewArrivalsSection from '../components/NewArrivalsSection'
import FilterPills from '../components/FilterPills'
import ProductGrid from '../components/ProductGrid'
import CartDrawer from '../components/CartDrawer'

export default function Home() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeCategory, setActiveCategory] = useState('todas')
  const [visibleCount, setVisibleCount] = useState(10)

  function handleCategory(cat) {
    setActiveCategory(cat)
    setVisibleCount(10)
  }

  useEffect(() => {
    async function fetchProducts() {
      const { data } = await supabase
        .from('products')
        .select('*')
        .eq('active', true)
        .order('created_at', { ascending: false })
      setProducts(data || [])
      setLoading(false)
    }
    fetchProducts()
  }, [])

  const featuredProduct = products.find(p => p.featured) || null

  const filtered = products.filter(p => {
    if (activeCategory === 'todas') return true
    if (activeCategory === 'lo nuevo') return p.is_new
    return p.category === activeCategory
  })

  const visible = filtered.slice(0, visibleCount)
  const hasMore = filtered.length > visibleCount

  return (
    <div className="min-h-screen bg-papel">
      <Banner />
      <Header activeCategory={activeCategory} onCategory={handleCategory} />
      <Hero featuredProduct={featuredProduct} />

      <section id="novedades">
        <NewArrivalsSection products={products} />
      </section>

      <section id="catalogo" className="bg-papel py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-6 mb-12">
            <img src="/flor_azul.svg" alt="" className="h-8 w-8 object-contain opacity-50" />
            <h2
              className="text-cacao text-4xl md:text-5xl"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontWeight: 300 }}
            >
              todo
            </h2>
            <img src="/flor_azul.svg" alt="" className="h-8 w-8 object-contain opacity-50" />
          </div>

          <FilterPills active={activeCategory} onChange={handleCategory} />

          {loading ? (
            <div className="text-center py-20 text-carao font-jost font-light">cargando...</div>
          ) : (
            <>
              <ProductGrid products={visible} />
              {hasMore && (
                <div className="text-center mt-12">
                  <button
                    onClick={() => setVisibleCount(v => v + 10)}
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
            </>
          )}
        </div>
      </section>

      <footer className="text-center py-10 text-sm font-jost font-light" style={{ borderTop: '1px solid #A0BFDA', color: '#2E6DA4' }}>
        <img src="/flor_azul.svg" alt="" className="h-6 w-6 opacity-40 inline-block mb-3" />
        <p>SARITOS — el detalle que lo cambia todo</p>
      </footer>

      <CartDrawer />
    </div>
  )
}
