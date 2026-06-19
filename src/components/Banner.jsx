const WA = import.meta.env.VITE_WHATSAPP_NUMBER || '5493517522474'

export default function Banner() {
  return (
    <div style={{
      backgroundColor: '#1A3A5C',
      color: '#FFFFFF',
      textAlign: 'center',
      padding: '0.55rem 1rem',
      fontSize: '0.72rem',
      letterSpacing: '0.08em',
      fontFamily: 'Jost',
      fontWeight: 300,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '1.5rem',
      flexWrap: 'wrap',
    }}>
      <span>Pago con transferencia o efectivo</span>
      <span style={{ opacity: 0.4 }}>·</span>
      <span>10% de descuento comprando 3 o más productos</span>
      <span style={{ opacity: 0.4 }}>·</span>
      <a
        href={`https://wa.me/${WA}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: '#FFFFFF', textDecoration: 'underline', textUnderlineOffset: '3px' }}
      >
        Pedidos por WhatsApp
      </a>
    </div>
  )
}
