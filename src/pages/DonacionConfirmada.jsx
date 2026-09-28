import { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { get } from '../api'
import { usuarioActual } from '../auth'
import { cant } from '../format'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Icono from '../components/Icono'

export default function DonacionConfirmada() {
  const { id } = useParams()
  const usuario = usuarioActual()
  const navigate = useNavigate()
  const [donacion, setDonacion] = useState(null)

  useEffect(() => {
    if (!usuario || usuario.rol !== 'donante') {
      navigate('/login')
      return
    }
    get('/donaciones/' + id).then(setDonacion).catch(() => navigate('/perfil'))
  }, [id])

  if (!donacion) {
    return (<><Header /><main className="contenedor" style={{ padding: '80px 16px', textAlign: 'center' }}><span className="cargando"></span></main><Footer /></>)
  }

  const primerNombre = usuario.nombre.split(' ')[0]

  return (
    <>
      <Header />
      <main className="contenedor" style={{ padding: '56px 16px' }}>
        <div style={{ maxWidth: 620, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}>
            <svg className="check-svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="46" /><path d="M30 52l14 14 27-30" /></svg>
          </div>
          <h1 className="font-display" style={{ fontSize: 34, margin: '0 0 12px' }}>¡Gracias, {primerNombre}! Te esperamos en el depósito</h1>
          <p className="medida" style={{ color: 'var(--tinta-suave)', margin: '0 auto 32px' }}>
            Tu donación quedó registrada. El coordinador ya la ve en el sistema. Cuando la lleves, la revisamos y pasa a formar parte del stock que llega a los comedores.
          </p>

          <div className="tarjeta tarjeta-pad" style={{ textAlign: 'left', marginBottom: 24 }}>
            <h2 style={{ fontSize: 18, marginTop: 0 }}>Lo que te comprometiste a llevar</h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {donacion.items.map((it, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 0', borderTop: i === 0 ? 'none' : '1px solid var(--borde)' }}>
                  <span style={{ color: 'var(--naranja-hover)' }}><Icono nombre={it.icono} size={20} /></span>
                  <span style={{ flex: 1 }}>{it.nombre}</span>
                  <span className="tabular" style={{ color: 'var(--tinta-suave)' }}>{cant(it.cantidad)} {it.unidad}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-2" style={{ textAlign: 'left', marginBottom: 32 }}>
            <div className="tarjeta" style={{ padding: 16 }}>
              <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 4 }}>Dirección</div>
              <div style={{ color: 'var(--tinta-suave)', fontSize: 14 }}>Av. Independencia 450, Laboulaye</div>
            </div>
            <div className="tarjeta" style={{ padding: 16 }}>
              <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 4 }}>Horarios</div>
              <div style={{ color: 'var(--tinta-suave)', fontSize: 14 }}>Lunes a viernes de 9 a 13 y de 16 a 19 h</div>
            </div>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 12 }}>
            <Link to="/mis-donaciones" className="btn-donar">Seguir mi donación</Link>
            <Link to="/perfil" className="btn-fantasma">Volver a mi espacio</Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
