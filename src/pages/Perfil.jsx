import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { get } from '../api'
import { usuarioActual } from '../auth'
import { cant } from '../format'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Icono from '../components/Icono'

export default function Perfil() {
  const usuario = usuarioActual()
  const navigate = useNavigate()
  const [necesidades, setNecesidades] = useState([])
  const [notis, setNotis] = useState([])
  const [totalDon, setTotalDon] = useState(0)

  useEffect(() => {
    if (!usuario || usuario.rol !== 'donante') {
      navigate('/login')
      return
    }
    get('/publico/necesidades').then(setNecesidades).catch(() => {})
    get('/notificaciones/usuario/' + usuario.id).then(setNotis).catch(() => {})
    get('/donaciones/usuario/' + usuario.id).then(d => setTotalDon(d.length)).catch(() => {})
  }, [])

  if (!usuario || usuario.rol !== 'donante') {
    return null
  }

  const primerNombre = usuario.nombre.split(' ')[0]

  return (
    <>
      <Header />
      <main className="contenedor" style={{ padding: '48px 16px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: 16, marginBottom: 32 }}>
          <div>
            <h1 className="font-display" style={{ fontSize: 34, margin: 0 }}>Hola, {primerNombre}</h1>
            <p style={{ color: 'var(--tinta-suave)', marginTop: 4 }}>Gracias por sumar. Estas son las necesidades de hoy.</p>
          </div>
          <div style={{ display: 'flex', gap: 12 }}>
            <Link to="/mis-donaciones" className="btn-fantasma">Mis donaciones ({totalDon})</Link>
            <Link to="/donar" className="btn-donar">Armar donación</Link>
          </div>
        </div>

        {notis.length > 0 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 32 }}>
            {notis.map(n => (
              <div key={n.id} className="alerta alerta-ok" style={{ marginBottom: 0, display: 'flex', alignItems: 'center', gap: 8 }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M5 13l4 4L19 7" /></svg>
                {n.mensaje}
              </div>
            ))}
          </div>
        )}

        <div className="grid grid-3">
          {necesidades.map(n => (
            <article key={n.id} className="tarjeta tarjeta-hover tarjeta-pad" style={{ position: 'relative' }}>
              {n.urgente && <span className="chip chip-urgente" style={{ position: 'absolute', top: 16, right: 16 }}>Urgente</span>}
              <div className="icono-circulo" style={{ marginBottom: 16 }}><Icono nombre={n.icono} /></div>
              <h3 style={{ fontSize: 20, margin: '0 0 4px' }}>{n.nombre}</h3>
              <p style={{ fontSize: 14, color: 'var(--tinta-suave)', marginTop: 0 }}>{n.categoria === 'perecedero' ? 'Perecedero' : 'No perecedero'}</p>
              <div className="progreso-riel" style={{ marginBottom: 8 }}>
                <div className="progreso-relleno" style={{ width: n.pct + '%' }}></div>
              </div>
              <p className="tabular" style={{ fontSize: 14, color: n.completa ? 'var(--verde)' : 'var(--tinta-suave)' }}>
                {n.completa ? 'Cubierto · ¡gracias!' : cant(n.cubierto) + ' de ' + cant(n.objetivo) + ' ' + n.unidad + ' cubiertos'}
              </p>
              <Link to="/donar" className="btn-verde ancho" style={{ marginTop: 16 }}>Voy a donar esto</Link>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}
