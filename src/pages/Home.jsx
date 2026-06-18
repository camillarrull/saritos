import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'
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
  const [activeSub, setActiveSub] = useState(null)

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

  const filtered = products
    .filter(p => activeCategory === 'todas' || p.category === activeCategory)
    .filter(p => activeCategory !== 'aros' || !activeSub || p.subcategory === activeSub)

  return (
    <div className="min-h-screen bg-papel">
      <Header />
      <Hero />

      <NewArrivalsSection products={products} />

      <div style={{ borderTop: '1px solid #A0BFDA', margin: '0 auto', maxWidth: '4rem' }} />

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

          <FilterPills
            active={activeCategory}
            activeSub={activeSub}
            onChange={cat => { setActiveCategory(cat); setActiveSub(null) }}
            onChangeSub={setActiveSub}
          />

          {loading ? (
            <div className="text-center py-20 text-carao font-jost font-light">cargando...</div>
          ) : (
            <ProductGrid products={filtered} />
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
