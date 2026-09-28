import { useEffect, useState } from 'react'
import { get, post } from '../api'
import { usuarioActual } from '../auth'
import { cant, fecha, fechaHora, claseSemaforo } from '../format'
import PanelLayout from '../components/PanelLayout'
import Icono from '../components/Icono'

export default function PanelEntrega() {
  const usuario = usuarioActual()
  const [merenderos, setMerenderos] = useState([])
  const [sel, setSel] = useState('')
  const [necesidades, setNecesidades] = useState([])
  const [cantidades, setCantidades] = useState({})
  const [pendientes, setPendientes] = useState([])
  const [mensaje, setMensaje] = useState('')
  const [error, setError] = useState('')

  function cargarPendientes() {
    get('/panel/entrega/pendientes').then(setPendientes).catch(() => {})
  }

  useEffect(() => {
    get('/merenderos').then(l => setMerenderos(l.filter(m => m.activo))).catch(() => {})
    cargarPendientes()
  }, [])

  function elegir(id) {
    setSel(id)
    setNecesidades([])
    setMensaje('')
    if (!id) return
    get('/panel/entrega/necesidades/' + id).then(lista => {
      setNecesidades(lista)
      const inicial = {}
      lista.forEach(n => { inicial[n.alimentoId] = n.sugerido })
      setCantidades(inicial)
    }).catch(() => {})
  }

  async function preparar() {
    const items = necesidades.map(n => ({ alimentoId: n.alimentoId, cantidad: Number(cantidades[n.alimentoId]) || 0 }))
    setError('')
    try {
      await post('/panel/entrega/preparar', { merenderoId: Number(sel), usuarioId: usuario.id, items })
      setMensaje('Entrega preparada por FEFO. El stock ya se descontó. Esperando que el merendero confirme la recepción.')
      setNecesidades([])
      setSel('')
      cargarPendientes()
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <PanelLayout titulo="Preparar entrega" seccion="entrega">
      <p className="medida" style={{ color: 'var(--tinta-suave)', marginBottom: 24 }}>
        Elegí un merendero, mirá lo que pidió y el sistema te sugiere los lotes por <strong>FEFO</strong>: los próximos a vencer salen primero. Al confirmar, el stock se descuenta solo.
      </p>
      {mensaje && <div className="alerta alerta-ok">{mensaje}</div>}
      {error && <div className="alerta alerta-error">{error}</div>}

      <div style={{ marginBottom: 32 }}>
        <label className="label-campo">Merendero</label>
        <select className="campo" value={sel} onChange={e => elegir(e.target.value)} style={{ maxWidth: 320 }}>
          <option value="">Elegí un merendero…</option>
          {merenderos.map(m => <option key={m.id} value={m.id}>{m.nombre}</option>)}
        </select>
      </div>

      {sel && necesidades.length === 0 && (
        <div className="tarjeta tarjeta-pad" style={{ textAlign: 'center', color: 'var(--tinta-suave)', marginBottom: 32 }}>Este merendero no tiene necesidades pendientes.</div>
      )}

      {sel && necesidades.length > 0 && (
        <div className="tarjeta tarjeta-pad" style={{ marginBottom: 32 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {necesidades.map(n => (
              <div key={n.alimentoId} style={{ border: '1px solid var(--borde)', borderRadius: 12, padding: 16 }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                  <span style={{ color: 'var(--naranja-hover)' }}><Icono nombre={n.icono} /></span>
                  <span style={{ fontWeight: 600, fontSize: 18 }}>{n.nombre}</span>
                  <span style={{ fontSize: 14, color: 'var(--tinta-suave)' }}>Pide <strong className="tabular">{cant(n.pedido)} {n.unidad}</strong> · disponible <strong className="tabular">{cant(n.disponible)}</strong></span>
                  <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 8 }}>
                    <label style={{ fontSize: 14, color: 'var(--tinta-suave)' }}>Entregar</label>
                    <input type="number" min="0" step="0.5" max={n.disponible} value={cantidades[n.alimentoId] ?? 0} onChange={e => setCantidades({ ...cantidades, [n.alimentoId]: e.target.value })} className="campo tabular" style={{ width: 96, padding: '6px 8px' }} />
                    <span style={{ fontSize: 14, color: 'var(--tinta-suave)' }}>{n.unidad}</span>
                  </div>
                </div>
                {n.lotes.length > 0 ? (
                  <>
                    <div style={{ fontSize: 12, color: 'var(--tinta-suave)', marginBottom: 8 }}>Lotes sugeridos por vencimiento (FEFO):</div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                      {n.lotes.map((l, i) => (
                        <span key={l.id} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12, border: i === 0 ? '1px solid var(--naranja)' : '1px solid var(--borde)', borderRadius: 9999, padding: '4px 10px' }}>
                          <span className={claseSemaforo(l.semaforo.clase)}></span>
                          #{l.id} · {cant(l.cantidad)} {n.unidad} · {l.vencimiento ? fecha(l.vencimiento) : 'sin venc.'}
                        </span>
                      ))}
                    </div>
                  </>
                ) : (<p style={{ fontSize: 14, color: 'var(--sem-rojo)' }}>Sin stock disponible de este alimento.</p>)}
              </div>
            ))}
          </div>
          <div style={{ marginTop: 24 }}>
            <button className="btn-verde" onClick={preparar}>Confirmar entrega (FEFO)</button>
          </div>
        </div>
      )}

      <section>
        <h2 className="font-display" style={{ fontSize: 20, marginBottom: 16 }}>Entregas esperando recepción</h2>
        {pendientes.length === 0 ? (
          <p style={{ color: 'var(--tinta-suave)', fontSize: 14 }}>No hay entregas pendientes de confirmar.</p>
        ) : (
          <div className="tarjeta tabla-scroll">
            <table className="tabla">
              <thead><tr><th>Entrega</th><th>Merendero</th><th>Preparada</th><th>Estado</th></tr></thead>
              <tbody>
                {pendientes.map(e => (
                  <tr key={e.id}>
                    <td style={{ fontWeight: 500 }}>#{e.id}</td>
                    <td>{e.merendero}</td>
                    <td style={{ color: 'var(--tinta-suave)' }}>{fechaHora(e.creadoEn)}</td>
                    <td><span className="chip chip-suave">Preparada</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </PanelLayout>
  )
}
