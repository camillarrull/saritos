const CATEGORIES = ['todas', 'lo nuevo', 'aros', 'collares', 'accesorios']

export default function FilterPills({ active, onChange }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center', marginBottom: '2.5rem' }}>
      {CATEGORIES.map(cat => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          style={{
            padding: '0.4rem 1.2rem',
            fontSize: '0.75rem',
            borderRadius: '9999px',
            border: '1px solid #1A3A5C',
            backgroundColor: active === cat ? '#1A3A5C' : 'transparent',
            color: active === cat ? '#FFFFFF' : '#1A3A5C',
            fontFamily: 'Jost',
            fontWeight: 300,
            letterSpacing: '0.08em',
            textTransform: 'capitalize',
            cursor: 'pointer',
            transition: 'background-color 0.2s, color 0.2s',
          }}
        >
          {cat}
        </button>
      ))}
    </div>
  )
}
