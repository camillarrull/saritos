const CATEGORIES = ['todas', 'lo nuevo', 'aros', 'collares', 'pulseras', 'accesorios', 'de fiesta']

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
            borderRadius: '0',
            border: 'none',
            borderBottom: active === cat ? '1px solid #1A3A5C' : '1px solid transparent',
            backgroundColor: 'transparent',
            color: active === cat ? '#1A3A5C' : '#5A7FA0',
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
