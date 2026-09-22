import Icono from './Icono'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="contenedor footer-grid">
        <div>
          <div className="logo" style={{ marginBottom: 12 }}>
            <span style={{ color: 'var(--naranja)' }}><Icono nombre="cuchara" size={24} /></span>
            <span className="logo-nombre">Suma un plato</span>
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
          <p>Tel: 3385-000000</p>
          <p>hola@sumaunplato.org</p>
        </div>
        <div>
          <h4>Cómo llegar</h4>
          <div className="tarjeta" style={{ height: 96, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--tinta-suave)', fontSize: 14 }}>
            Mapa del depósito
          </div>
        </div>
      </div>
      <div style={{ borderTop: '1px solid var(--borde)', padding: '16px 0', textAlign: 'center', color: 'var(--tinta-suave)', fontSize: 12 }}>
        Las donaciones son de alimentos, no de dinero · Suma un plato
      </div>
    </footer>
  )
}
