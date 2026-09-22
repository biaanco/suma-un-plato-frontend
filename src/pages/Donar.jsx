import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { get, post } from '../api'
import { usuarioActual } from '../auth'
import { cant } from '../format'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Icono from '../components/Icono'

export default function Donar() {
  const usuario = usuarioActual()
  const navigate = useNavigate()
  const [catalogo, setCatalogo] = useState([])
  const [carrito, setCarrito] = useState({})
  const [cantidades, setCantidades] = useState({})
  const [nota, setNota] = useState('')
  const [error, setError] = useState('')
  const [cargando, setCargando] = useState(false)

  useEffect(() => {
    if (!usuario || usuario.rol !== 'donante') {
      navigate('/login')
      return
    }
    get('/alimentos').then(setCatalogo).catch(() => {})
  }, [])

  if (!usuario || usuario.rol !== 'donante') {
    return null
  }

  function agregar(alimento) {
    const suma = Number(cantidades[alimento.id]) || 1
    setCarrito(prev => ({ ...prev, [alimento.id]: (prev[alimento.id] || 0) + suma }))
  }

  function quitar(id) {
    const copia = { ...carrito }
    delete copia[id]
    setCarrito(copia)
  }

  async function confirmar() {
    const items = Object.keys(carrito).map(id => ({ alimentoId: Number(id), cantidad: carrito[id] }))
    if (items.length === 0) {
      setError('Tu donación está vacía.')
      return
    }
    setError('')
    setCargando(true)
    try {
      const donacion = await post('/donaciones', { donanteId: usuario.id, nota, items })
      navigate('/donacion-confirmada/' + donacion.id)
    } catch (err) {
      setError(err.message)
      setCargando(false)
    }
  }

  const noPerecederos = catalogo.filter(a => a.categoria === 'no_perecedero')
  const perecederos = catalogo.filter(a => a.categoria === 'perecedero')
  const idsCarrito = Object.keys(carrito)
  const totalItems = idsCarrito.reduce((suma, id) => suma + carrito[id], 0)

  function nombrePorId(id) {
    const a = catalogo.find(x => x.id === Number(id))
    return a ? a : { nombre: '', unidad: '', icono: 'bag' }
  }

  function grupo(titulo, lista) {
    return (
      <section style={{ marginBottom: 40 }}>
        <h2 className="font-display" style={{ fontSize: 22 }}>{titulo}</h2>
        <div className="grid grid-2">
          {lista.map(a => (
            <div key={a.id} className="tarjeta" style={{ padding: 16, display: 'flex', alignItems: 'center', gap: 12 }}>
              <div className="icono-circulo" style={{ width: 44, height: 44 }}><Icono nombre={a.icono} size={20} /></div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontWeight: 600 }}>{a.nombre}</div>
                <div style={{ fontSize: 12, color: 'var(--tinta-suave)' }}>unidad: {a.unidad}</div>
              </div>
              <input type="number" min="0.5" step="0.5" value={cantidades[a.id] || 1}
                     onChange={e => setCantidades({ ...cantidades, [a.id]: e.target.value })}
                     className="campo" style={{ width: 72, textAlign: 'center', padding: '6px 8px' }} />
              <button className="btn-verde" style={{ padding: '8px 12px' }} onClick={() => agregar(a)} aria-label={'Agregar ' + a.nombre}>+</button>
            </div>
          ))}
        </div>
      </section>
    )
  }

  return (
    <>
      <Header />
      <main className="contenedor" style={{ padding: '40px 16px' }}>
        <div style={{ marginBottom: 32 }}>
          <h1 className="font-display" style={{ fontSize: 34, margin: 0 }}>Armá tu donación</h1>
          <p className="medida" style={{ color: 'var(--tinta-suave)' }}>Elegí de la lista, como en una compra. La unidad ya viene cargada para que no tengas que adivinar.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 32 }} className="donar-grid">
          <div>
            {grupo('No perecederos', noPerecederos)}
            {grupo('Perecederos', perecederos)}
          </div>

          <aside>
            <div className="tarjeta tarjeta-pad">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                <h2 className="font-display" style={{ fontSize: 20, margin: 0 }}>Tu donación</h2>
                <span className="chip chip-suave">{cant(totalItems)} ítems</span>
              </div>
              {error && <div className="alerta alerta-error">{error}</div>}
              {idsCarrito.length === 0 ? (
                <p style={{ color: 'var(--tinta-suave)', fontSize: 14, textAlign: 'center', padding: '24px 0' }}>Todavía no agregaste nada.<br />Elegí de la lista.</p>
              ) : (
                <>
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 16px' }}>
                    {idsCarrito.map(id => {
                      const a = nombrePorId(id)
                      return (
                        <li key={id} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 0', borderTop: '1px solid var(--borde)' }}>
                          <span style={{ color: 'var(--naranja-hover)' }}><Icono nombre={a.icono} size={20} /></span>
                          <div style={{ flex: 1, minWidth: 0 }}>
                            <div style={{ fontWeight: 500 }}>{a.nombre}</div>
                            <div className="tabular" style={{ fontSize: 14, color: 'var(--tinta-suave)' }}>{cant(carrito[id])} {a.unidad}</div>
                          </div>
                          <button className="btn-icono" onClick={() => quitar(id)} aria-label={'Quitar ' + a.nombre}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M6 7h12M9 7V5h6v2M8 7l1 12h6l1-12" /></svg>
                          </button>
                        </li>
                      )
                    })}
                  </ul>
                  <label className="label-campo" htmlFor="nota">Nota (opcional)</label>
                  <input className="campo" id="nota" value={nota} onChange={e => setNota(e.target.value)} placeholder="Ej: paso el jueves a la tarde" style={{ marginBottom: 12 }} />
                  <button className="btn-donar ancho" onClick={confirmar} disabled={cargando}>{cargando ? 'Confirmando…' : 'Confirmar donación'}</button>
                </>
              )}
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </>
  )
}
