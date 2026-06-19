import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'

const EMPTY_FORM = { name: '', description: '', price: '', category: '', subcategory: '', is_new: false, featured: false }
const CATEGORIES = ['aros', 'collares', 'accesorios']
const AROS_SUB = ['todos los días', 'fiesta']

export default function Admin() {
  const [authed, setAuthed] = useState(sessionStorage.getItem('saritos_admin') === 'true')
  const [password, setPassword] = useState('')
  const [products, setProducts] = useState([])
  const [form, setForm] = useState(EMPTY_FORM)
  const [editingId, setEditingId] = useState(null)
  const [imageFile, setImageFile] = useState(null)
  const [loading, setLoading] = useState(false)
  const [msg, setMsg] = useState('')

  function login() {
    if (password === import.meta.env.VITE_ADMIN_PASSWORD) {
      sessionStorage.setItem('saritos_admin', 'true')
      setAuthed(true)
    } else {
      alert('Contraseña incorrecta')
    }
  }

  async function fetchProducts() {
    const { data } = await supabase.from('products').select('*').order('created_at', { ascending: false })
    setProducts(data || [])
  }

  useEffect(() => {
    if (authed) fetchProducts()
  }, [authed])

  async function uploadImage(file) {
    const ext = file.name.split('.').pop()
    const filename = `${Date.now()}.${ext}`
    const { error } = await supabase.storage.from('product-images').upload(filename, file)
    if (error) throw error
    const { data } = supabase.storage.from('product-images').getPublicUrl(filename)
    return data.publicUrl
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setMsg('')
    try {
      let imageUrl = editingId ? products.find(p => p.id === editingId)?.image_url : null
      if (imageFile) {
        imageUrl = await uploadImage(imageFile)
      }
      const payload = {
        name: form.name,
        description: form.description,
        price: parseFloat(form.price),
        category: form.category,
        subcategory: form.category === 'aros' ? form.subcategory : null,
        is_new: form.is_new,
        featured: form.featured,
        image_url: imageUrl,
      }
      if (editingId) {
        await supabase.from('products').update(payload).eq('id', editingId)
        setMsg('Producto actualizado')
      } else {
        await supabase.from('products').insert({ ...payload, active: true })
        setMsg('Producto creado')
      }
      setForm(EMPTY_FORM)
      setEditingId(null)
      setImageFile(null)
      fetchProducts()
    } catch (err) {
      setMsg('Error: ' + err.message)
    }
    setLoading(false)
  }

  function startEdit(product) {
    setEditingId(product.id)
    setForm({
      name: product.name,
      description: product.description || '',
      price: product.price,
      category: product.category || '',
      subcategory: product.subcategory || '',
      is_new: product.is_new,
      featured: product.featured || false,
    })
    setImageFile(null)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function cancelEdit() {
    setEditingId(null)
    setForm(EMPTY_FORM)
    setImageFile(null)
  }

  async function toggleActive(product) {
    await supabase.from('products').update({ active: !product.active }).eq('id', product.id)
    fetchProducts()
  }

  async function toggleNew(product) {
    await supabase.from('products').update({ is_new: !product.is_new }).eq('id', product.id)
    fetchProducts()
  }

  async function toggleFeatured(product) {
    if (!product.featured) {
      await supabase.from('products').update({ featured: false }).neq('id', '00000000-0000-0000-0000-000000000000')
    }
    await supabase.from('products').update({ featured: !product.featured }).eq('id', product.id)
    fetchProducts()
  }

  async function deleteProduct(id) {
    if (!confirm('¿Segura que querés eliminar este producto?')) return
    await supabase.from('products').delete().eq('id', id)
    fetchProducts()
  }

  if (!authed) {
    return (
      <div className="min-h-screen bg-papel flex items-center justify-center px-4">
        <div className="bg-white p-8 rounded shadow max-w-sm w-full">
          <img src="/logo.png" alt="SARITOS" className="h-10 object-contain mx-auto mb-6" />
          <h1 className="text-xl font-semibold text-center mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Panel de administración</h1>
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={e => setPassword(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && login()}
            className="w-full border border-gray-200 px-3 py-2 rounded mb-3 text-sm"
          />
          <button onClick={login} className="w-full bg-cacao text-papel py-2 rounded text-sm hover:opacity-90">
            Entrar
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Admin — SARITOS</h1>
          <a href="/" className="text-sm text-blue-600 underline">← ver tienda</a>
        </div>

        <div className="bg-white rounded shadow p-6 mb-8">
          <h2 className="text-lg font-semibold mb-4">{editingId ? 'Editar producto' : 'Agregar producto'}</h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input required placeholder="Nombre *" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="border border-gray-200 px-3 py-2 rounded text-sm" />
            <input required placeholder="Precio *" type="number" value={form.price} onChange={e => setForm({ ...form, price: e.target.value })} className="border border-gray-200 px-3 py-2 rounded text-sm" />
            <select value={form.category} onChange={e => setForm({ ...form, category: e.target.value, subcategory: '' })} className="border border-gray-200 px-3 py-2 rounded text-sm text-gray-500">
              <option value="">Sin categoría</option>
              {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
            {form.category === 'aros' && (
              <select value={form.subcategory} onChange={e => setForm({ ...form, subcategory: e.target.value })} className="border border-gray-200 px-3 py-2 rounded text-sm text-gray-500">
                <option value="">Subcategoría de aros</option>
                {AROS_SUB.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            )}
            <input placeholder="Descripción" value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} className="border border-gray-200 px-3 py-2 rounded text-sm" />
            <div className="flex flex-col gap-1">
              <label className="text-xs text-gray-500">Foto del producto</label>
              <input type="file" accept="image/*" onChange={e => setImageFile(e.target.files[0])} className="text-sm" />
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="is_new" checked={form.is_new} onChange={e => setForm({ ...form, is_new: e.target.checked })} />
              <label htmlFor="is_new" className="text-sm">Marcar como "nuevo"</label>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="featured" checked={form.featured} onChange={e => setForm({ ...form, featured: e.target.checked })} />
              <label htmlFor="featured" className="text-sm">Producto destacado (hero)</label>
            </div>
            <div className="md:col-span-2 flex gap-3">
              <button type="submit" disabled={loading} className="bg-cacao text-papel px-6 py-2 rounded text-sm hover:opacity-90 disabled:opacity-50">
                {loading ? 'Guardando...' : editingId ? 'Guardar cambios' : 'Agregar producto'}
              </button>
              {editingId && (
                <button type="button" onClick={cancelEdit} className="px-6 py-2 rounded text-sm border border-gray-200 hover:bg-gray-50">
                  Cancelar
                </button>
              )}
            </div>
            {msg && <p className="md:col-span-2 text-sm text-green-700">{msg}</p>}
          </form>
        </div>

        <div className="bg-white rounded shadow overflow-hidden">
          <h2 className="text-lg font-semibold p-4 border-b">Productos ({products.length})</h2>
          {products.length === 0 ? (
            <p className="text-center py-10 text-gray-400 text-sm">No hay productos todavía</p>
          ) : (
            <div className="divide-y">
              {products.map(p => (
                <div key={p.id} className="flex items-center gap-4 p-4">
                  <div className="w-12 h-12 bg-gray-100 flex-shrink-0 overflow-hidden rounded">
                    {p.image_url ? <img src={p.image_url} alt="" className="w-full h-full object-cover" /> : <div className="w-full h-full" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm truncate">{p.name}</p>
                    <p className="text-xs text-gray-400">{p.category || 'sin categoría'} · ${p.price}</p>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <button onClick={() => toggleActive(p)} className={`text-xs px-2 py-1 rounded ${p.active ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-400'}`}>
                      {p.active ? 'activo' : 'oculto'}
                    </button>
                    <button onClick={() => toggleNew(p)} className={`text-xs px-2 py-1 rounded ${p.is_new ? 'bg-amber-100 text-amber-700' : 'bg-gray-100 text-gray-400'}`}>
                      {p.is_new ? 'nuevo' : 'normal'}
                    </button>
                    <button onClick={() => toggleFeatured(p)} className={`text-xs px-2 py-1 rounded ${p.featured ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-400'}`}>
                      {p.featured ? '★ destacado' : 'destacar'}
                    </button>
                    <button onClick={() => startEdit(p)} className="text-xs px-2 py-1 rounded border border-gray-200 hover:bg-gray-50">editar</button>
                    <button onClick={() => deleteProduct(p.id)} className="text-xs px-2 py-1 rounded bg-red-50 text-red-500 hover:bg-red-100">eliminar</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
