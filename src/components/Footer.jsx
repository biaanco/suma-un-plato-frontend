export default function Footer() {
  return (
    <footer className="footer">
      <div className="contenedor footer-grid">
        <div>
          <div className="logo" style={{ marginBottom: 12 }}>
            <img
              src="/logo.jpg"
              alt="Suma un plato"
              style={{ height: 48, width: 'auto', display: 'block', borderRadius: 8 }}
            />
          </div>
          <p>Conectamos lo que sobra con quien lo necesita, en Laboulaye.</p>
        </div>
        <div>
          <h4>Depósito</h4>
          <p>Av. Independencia 450, Laboulaye</p>
          <p>Lunes a viernes de 9 a 13 y de 16 a 19 h</p>
        </div>
        <div>
          <h4>Contacto</h4>
          <p>Tel: 3385-235684</p>
          <p>info@sumaunplato.com.ar</p>
        </div>
        <div>
          <h4>Cómo llegar</h4>
          <div className="tarjeta" style={{ padding: 0, overflow: 'hidden' }}>
            <iframe
              title="Mapa del depósito de Suma un plato"
              src="https://www.google.com/maps?q=Avenida+Independencia+450,+Laboulaye,+Córdoba,+Argentina&output=embed"
              width="100%"
              height="160"
              style={{ border: 0, display: 'block' }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
      <div style={{ borderTop: '1px solid var(--borde)', padding: '16px 0', textAlign: 'center', color: 'var(--blanco)', fontSize: 12 }}>
        Las donaciones no solo son de alimentos. No se aceptan donaciones de dinero · Suma un plato
      </div>
    </footer>
  )
}
