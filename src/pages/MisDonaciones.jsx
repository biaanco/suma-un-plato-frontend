import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { get } from '../api'
import { usuarioActual } from '../auth'
import { cant, fecha } from '../format'
import Header from '../components/Header'
import Footer from '../components/Footer'

const ESTADOS = ['registrada', 'ingresada', 'asignada', 'entregada']
const LABELS = { registrada: 'Registrada', ingresada: 'Ingresada', asignada: 'Asignada', entregada: 'Entregada' }

export default function MisDonaciones() {
  const usuario = usuarioActual()
  const navigate = useNavigate()
  const [donaciones, setDonaciones] = useState([])

  useEffect(() => {
    if (!usuario || usuario.rol !== 'donante') {
      navigate('/login')
      return
    }
    get('/donaciones/usuario/' + usuario.id).then(setDonaciones).catch(() => {})
  }, [])

  if (!usuario || usuario.rol !== 'donante') {
    return null
  }

  function color(indice, actual) {
    if (indice < actual) return '#000000'
    if (indice === actual) return '#777777'
    return '#ffffff'
  }

  return (
    <>
      <Header />
      <main className="contenedor" style={{ padding: '48px 16px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 16, marginBottom: 32 }}>
          <div>
            <h1 className="font-display" style={{ fontSize: 34, margin: 0 }}>Mis donaciones</h1>
            <p style={{ color: 'var(--tinta-suave)', marginTop: 4 }}>Seguí el recorrido de cada aporte, de registrada a entregada.</p>
          </div>
          <Link to="/donar" className="btn-donar">Nueva donación</Link>
        </div>

        {donaciones.length === 0 ? (
          <div className="tarjeta tarjeta-pad" style={{ textAlign: 'center' }}>
            <p style={{ color: 'var(--tinta-suave)' }}>Todavía no hiciste ninguna donación.</p>
            <Link to="/donar" className="btn-donar">Armar mi primera donación</Link>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {donaciones.map(d => {
              const actual = ESTADOS.indexOf(d.estado)
              return (
                <article key={d.id} className="tarjeta tarjeta-pad">
                  <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: 12, marginBottom: 20 }}>
                    <div>
                      <span style={{ fontWeight: 600 }}>Donación #{d.id}</span>
                      <span style={{ color: 'var(--tinta-suave)', fontSize: 14, marginLeft: 8 }}>{fecha(d.creadoEn)}</span>
                    </div>
                    <span className={d.estado === 'entregada' ? 'chip chip-verde' : 'chip chip-suave'}>{LABELS[d.estado]}</span>
                  </div>

                  <div className="timeline">
                    {ESTADOS.map((estado, i) => (
                      <div key={estado} style={{ display: 'contents' }}>
                        <div className="timeline-paso">
                          <div className="timeline-circulo" style={{ background: color(i, actual) }}>
                            {i < actual ? (
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><path d="M5 13l4 4L19 7" /></svg>
                            ) : (i + 1)}
                          </div>
                          <span className="timeline-label" style={{ color: i <= actual ? '#000000' : '#777777' }}>{LABELS[estado]}</span>
                        </div>
                        {i < 3 && <div className="timeline-linea" style={{ background: i < actual ? '#000000' : '#cccccc' }}></div>}
                      </div>
                    ))}
                  </div>

                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexWrap: 'wrap', gap: '4px 24px', color: 'var(--tinta-suave)', fontSize: 14 }}>
                    {d.items.map((it, i) => (
                      <li key={i} className="tabular">{it.nombre} · {cant(it.cantidad)} {it.unidad}</li>
                    ))}
                  </ul>
                </article>
              )
            })}
          </div>
        )}
      </main>
      <Footer />
    </>
  )
}
