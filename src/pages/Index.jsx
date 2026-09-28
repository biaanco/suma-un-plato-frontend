import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { get } from '../api'
import { usuarioActual } from '../auth'
import { cant } from '../format'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Icono from '../components/Icono'

export default function Index() {
  const usuario = usuarioActual()
  const { hash, key } = useLocation()
  const [necesidades, setNecesidades] = useState([])
  const [stats, setStats] = useState({ kgMes: 0, merenderos: 0, entregas: 0 })

  useEffect(() => {
    get('/publico/necesidades').then(setNecesidades).catch(() => {})
    get('/publico/estadisticas').then(setStats).catch(() => {})
  }, [])

  // Cuando se llega con #como o #necesidades (desde el menú), baja a esa sección
  useEffect(() => {
    if (!hash) return
    document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth' })
  }, [hash, key])

  const pasos = [
    { icono: 'bag', titulo: 'Elegís qué donar', texto: 'Mirás las necesidades reales de hoy y armás tu aporte, como un carrito.' },
    { icono: 'box', titulo: 'Lo llevás al depósito', texto: 'Av. Independencia 450, Laboulaye. Lunes a viernes de 9 a 13 y de 16 a 19 h.' },
    { icono: 'users', titulo: 'Nosotros lo hacemos llegar', texto: 'Lo registramos, lo cuidamos y lo entregamos al comedor que lo necesita.' }
  ]

  return (
    <>
      <Header />
      <main>
        <section className="contenedor hero">
          <div className="hero-grid">
            <div className="reveal">
              <span className="chip chip-suave" style={{ marginBottom: 20 }}>Laboulaye · Comedores y merenderos</span>
              <h1>Que la solidaridad de cada familia llegue a la mesa de quien más lo necesita.</h1>
              <p style={{ fontSize: 19, color: 'var(--tinta-suave)' }} className="medida">
                Conectamos a los comedores y merenderos de Laboulaye con las personas que quieren ayudar.
                Sin intermediarios confusos ni mensajes que se pierden: tu aporte se registra y llega a donde hace falta.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 32 }}>
                <Link to={usuario ? '/donar' : '/registro'} className="btn-donar">Quiero donar</Link>
                <a href="#necesidades" className="btn-fantasma">Ver qué se necesita</a>
              </div>
            </div>
            <div className="hero-imagen reveal">
              <div className="hero-halo"></div>
              <div className="hero-foto">
                <img src="/hero.jpg" alt="Voluntarios armando cajas con alimentos en un depósito" />
              </div>
            </div>
          </div>
        </section>

        <section id="como" className="seccion seccion-clara">
          <div className="contenedor">
            <h2 className="centro" style={{ marginBottom: 48 }}>Cómo funciona</h2>
            <div className="grid grid-3">
              {pasos.map((p, i) => (
                <div key={i} className="centro">
                  <div className="icono-circulo" style={{ width: 64, height: 64, margin: '0 auto 16px' }}><Icono nombre={p.icono} size={32} /></div>
                  <h3 style={{ fontSize: 20, margin: '0 0 8px' }}>{p.titulo}</h3>
                  <p style={{ color: 'var(--tinta-suave)' }}>{p.texto}</p>
                </div>
              ))}
            </div>
            <div className="franja-transparencia" style={{ marginTop: 48 }}>
              <p>Todo lo que entra se registra en un solo lugar. Sabés que tu aporte llega a donde hace falta.</p>
            </div>
          </div>
        </section>

        <section id="necesidades" className="contenedor seccion">
          <div style={{ marginBottom: 40 }}>
            <h2 style={{ marginBottom: 8 }}>Necesidades de hoy</h2>
            <p className="medida" style={{ color: 'var(--tinta-suave)' }}>Datos reales del depósito, en tiempo real. Donás lo que hace falta, no cualquier cosa.</p>
          </div>
          {necesidades.length === 0 ? (
            <p style={{ color: 'var(--tinta-suave)' }}>Por ahora no hay necesidades publicadas. Volvé pronto.</p>
          ) : (
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
                  <p className="tabular" style={{ fontSize: 14, color: n.completa ? 'var(--verde)' : 'var(--tinta-suave)', fontWeight: n.completa ? 600 : 400 }}>
                    {n.completa ? 'Cubierto · ¡gracias!' : cant(n.cubierto) + ' de ' + cant(n.objetivo) + ' ' + n.unidad + ' cubiertos'}
                  </p>
                  <Link to={usuario && usuario.rol === 'donante' ? '/donar' : '/registro'} className="btn-verde ancho" style={{ marginTop: 16 }}>Voy a donar esto</Link>
                </article>
              ))}
            </div>
          )}
        </section>

        <section className="banda">
          <div className="contenedor">
            <div className="grid grid-3 centro" style={{ marginBottom: 48 }}>
              <div><div className="stat-num tabular">{cant(stats.kgMes)} kg</div><div style={{ color: 'rgba(255,255,255,.7)' }}>donados este mes</div></div>
              <div><div className="stat-num tabular">{stats.merenderos}</div><div style={{ color: 'rgba(255,255,255,.7)' }}>merenderos en la red</div></div>
              <div><div className="stat-num tabular">{stats.entregas}</div><div style={{ color: 'rgba(255,255,255,.7)' }}>entregas realizadas</div></div>
            </div>
            <blockquote style={{ maxWidth: 640, margin: '0 auto', textAlign: 'center' }}>
              <p className="font-display" style={{ fontSize: 22 }}>"Antes no sabíamos con qué íbamos a cocinar. Ahora llegamos a la semana tranquilos."</p>
              <footer style={{ color: 'rgba(255,255,255,.6)', marginTop: 12 }}>— Rosa, referente de merendero</footer>
            </blockquote>
            <p style={{ textAlign: 'center', color: 'rgba(255,255,255,.5)', fontSize: 14, marginTop: 32 }}>Las donaciones son de alimentos, no de dinero.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
