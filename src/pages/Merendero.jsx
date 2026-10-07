import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { get, post, del } from '../api'
import { usuarioActual } from '../auth'
import { cant, fecha } from '../format'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Icono from '../components/Icono'


const URG = {
  alta: { background: '#000000', color: '#ffffff' },
  media: { background: '#bbbbbb', color: '#000000' },
  baja: { background: '#ffffff', color: '#000000' }
}
const ESTADO = { pendiente: 'Pendiente', parcial: 'Parcial', cubierta: 'Cubierta' }

export default function Merendero() {
  const usuario = usuarioActual()
  const navigate = useNavigate()
  const [merendero, setMerendero] = useState(null)
  const [noVinculado, setNoVinculado] = useState(false)
  const [alimentos, setAlimentos] = useState([])
  const [planilla, setPlanilla] = useState([])
  const [entregas, setEntregas] = useState([])
  const [form, setForm] = useState({ alimentoId: '', cantidad: '', urgencia: 'media' })
  const [mensaje, setMensaje] = useState('')

  useEffect(() => {
    if (!usuario || usuario.rol !== 'merendero') {
      navigate('/login')
      return
    }
    get('/alimentos').then(setAlimentos).catch(() => {})
    get('/merenderos/usuario/' + usuario.id)
      .then(m => { setMerendero(m); cargar(m.id) })
      .catch(() => setNoVinculado(true))
  }, [])

  function cargar(id) {
    get('/merenderos/' + id + '/planilla').then(setPlanilla).catch(() => {})
    get('/merenderos/' + id + '/entregas').then(setEntregas).catch(() => {})
  }

  if (!usuario || usuario.rol !== 'merendero') {
    return null
  }

  if (noVinculado) {
    return (<><Header /><main className="contenedor" style={{ padding: '64px 16px' }}><div className="tarjeta tarjeta-pad" style={{ textAlign: 'center', color: 'var(--tinta-suave)' }}>Tu cuenta todavía no está vinculada a un merendero activo. Contactá al coordinador.</div></main><Footer /></>)
  }

  if (!merendero) {
    return (<><Header /><main className="contenedor" style={{ padding: '80px 16px', textAlign: 'center' }}><span className="cargando"></span></main><Footer /></>)
  }

  async function agregar(e) {
    e.preventDefault()
    if (!form.alimentoId || !form.cantidad) return
    await post('/merenderos/' + merendero.id + '/planilla', { alimentoId: Number(form.alimentoId), cantidad: Number(form.cantidad), urgencia: form.urgencia })
    setForm({ alimentoId: '', cantidad: '', urgencia: 'media' })
    setMensaje('Necesidad agregada a tu planilla.')
    cargar(merendero.id)
  }

  async function quitar(id) {
    await del('/merenderos/planilla/' + id)
    cargar(merendero.id)
  }

  async function recibir(entregaId) {
    await post('/merenderos/entrega/recibir', { entregaId, merenderoId: merendero.id })
    setMensaje('¡Recepción confirmada! Gracias por cerrar el círculo.')
    cargar(merendero.id)
  }

  return (
    <>
      <Header />
      <main className="contenedor" style={{ padding: '48px 16px' }}>
        <div style={{ marginBottom: 32 }}>
          <h1 className="font-display" style={{ fontSize: 34, margin: 0 }}>{merendero.nombre}</h1>
          <p style={{ color: 'var(--tinta-suave)', marginTop: 4 }}>{merendero.direccion} · {merendero.horarios}</p>
        </div>
        {mensaje && <div className="alerta alerta-ok">{mensaje}</div>}

        {entregas.length > 0 && (
          <section style={{ marginBottom: 40 }}>
            <h2 className="font-display" style={{ fontSize: 22 }}>Entregas en camino</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {entregas.map(e => (
                <div key={e.id} className="tarjeta tarjeta-pad">
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
                    <span style={{ fontWeight: 600 }}>Entrega #{e.id}</span>
                    <span style={{ fontSize: 14, color: 'var(--tinta-suave)' }}>{fecha(e.creadoEn)}</span>
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 16px', display: 'flex', flexWrap: 'wrap', gap: '4px 24px', fontSize: 14, color: 'var(--tinta-suave)' }}>
                    {e.items.map((it, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 6 }}><span style={{ color: 'var(--naranja-hover)' }}><Icono nombre={it.icono} size={16} /></span>{it.nombre} · <span className="tabular">{cant(it.cantidad)} {it.unidad}</span></li>
                    ))}
                  </ul>
                  <button className="btn-verde" onClick={() => recibir(e.id)}>Confirmar que la recibí</button>
                </div>
              ))}
            </div>
          </section>
        )}

        <div className="grid" style={{ gridTemplateColumns: '1fr', gap: 32 }}>
          <div className="merendero-grid" style={{ display: 'grid', gap: 32 }}>
            <section className="tarjeta tarjeta-pad">
              <h2 className="font-display" style={{ fontSize: 20, marginTop: 0 }}>Cargar necesidad</h2>
              <form onSubmit={agregar}>
               <div style={{ marginBottom: 16 }}>
                  <label className="label-campo">Producto</label>
                  <select className="campo" value={form.alimentoId} onChange={e => setForm({ ...form, alimentoId: e.target.value })} required>
                    <option value="">Elegí del catálogo…</option>
                    {alimentos.map(a => <option key={a.id} value={a.id}>{a.nombre} ({a.unidad})</option>)}
                  </select>
                </div>
                <div style={{ marginBottom: 16 }}>
                  <label className="label-campo">Cantidad</label>
                  <input className="campo" type="number" step="0.5" min="0.5" value={form.cantidad} onChange={e => setForm({ ...form, cantidad: e.target.value })} style={{ width: 160 }} required />
                </div>
                <div style={{ marginBottom: 16 }}>
                  <span className="label-campo">Urgencia</span>
                  <div style={{ display: 'flex', gap: 8 }}>
                    {['baja', 'media', 'alta'].map(u => (
                      <label key={u} className="pildora">
                        <input type="radio" name="urg" checked={form.urgencia === u} onChange={() => setForm({ ...form, urgencia: u })} />
                        <span style={{ textTransform: 'capitalize' }}>{u}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <button className="btn-donar ancho">Agregar a mi planilla</button>
              </form>
            </section>

            <section>
              <h2 className="font-display" style={{ fontSize: 20, marginTop: 0, marginBottom: 16 }}>Mi planilla de necesidades</h2>
              {planilla.length === 0 ? (
                <div className="tarjeta tarjeta-pad" style={{ textAlign: 'center', color: 'var(--tinta-suave)' }}>Todavía no cargaste necesidades. Empezá con lo que más te falta esta semana.</div>
              ) : (
                <div className="tarjeta tabla-scroll">
                  <table className="tabla">
                    <thead><tr><th>Producto</th><th>Cantidad</th><th>Urgencia</th><th>Estado</th><th></th></tr></thead>
                    <tbody>
                      {planilla.map(p => (
                        <tr key={p.id}>
                          <td><div style={{ display: 'flex', alignItems: 'center', gap: 8 }}><span style={{ color: 'var(--naranja-hover)' }}><Icono nombre={p.icono} size={20} /></span><span style={{ fontWeight: 500 }}>{p.nombre}</span></div></td>
                          <td className="tabular">{cant(p.cantidad)} {p.unidad}</td>
                          <td><span className="chip" style={URG[p.urgencia]}>{p.urgencia}</span></td>
                          <td style={{ fontSize: 14, color: 'var(--tinta-suave)' }}>{ESTADO[p.estado]}</td>
                          <td><button className="btn-icono" onClick={() => quitar(p.id)} aria-label="Quitar"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M6 7h12M9 7V5h6v2M8 7l1 12h6l1-12" /></svg></button></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
