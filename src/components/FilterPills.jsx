const CATEGORIES = ['todas', 'aros', 'collares', 'bolsos', 'accesorios']
const AROS_SUB = ['todos los días', 'fiesta']

export default function FilterPills({ active, activeSub, onChangeSub, onChange }) {
  return (
    <div className="flex flex-col items-center gap-3 mb-10">
      <div className="flex flex-wrap gap-2 justify-center">
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            onClick={() => onChange(cat)}
            className="px-4 py-1.5 text-sm rounded-full border transition-colors font-jost capitalize"
            style={{
              borderColor: '#1A3A5C',
              backgroundColor: active === cat ? '#1A3A5C' : 'transparent',
              color: active === cat ? '#FFFFFF' : '#1A3A5C',
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {active === 'aros' && (
        <div className="flex gap-2 justify-center">
          {AROS_SUB.map(sub => (
            <button
              key={sub}
              onClick={() => onChangeSub(activeSub === sub ? null : sub)}
              className="px-3 py-1 text-xs rounded-full border transition-colors font-jost capitalize"
              style={{
                borderColor: '#2E6DA4',
                backgroundColor: activeSub === sub ? '#2E6DA4' : 'transparent',
                color: activeSub === sub ? '#FFFFFF' : '#2E6DA4',
              }}
            >
              {sub}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
