import { useEffect, useState } from 'react'
import { get, post } from '../api'
import { usuarioActual } from '../auth'
import { cant, fecha, colorSemaforo, claseSemaforo } from '../format'
import PanelLayout from '../components/PanelLayout'
import Icono from '../components/Icono'

export default function PanelStock() {
  const usuario = usuarioActual()
  const [lotes, setLotes] = useState([])
  const [cat, setCat] = useState('')
  const [q, setQ] = useState('')
  const [ajustes, setAjustes] = useState({})

  function cargar() {
    const params = new URLSearchParams()
    if (cat) params.set('cat', cat)
    if (q) params.set('q', q)
    get('/panel/stock?' + params.toString()).then(l => {
      setLotes(l)
      const inicial = {}
      l.forEach(x => { inicial[x.id] = x.cantidad })
      setAjustes(inicial)
    }).catch(() => {})
  }

  useEffect(() => { cargar() }, [])

  function filtrar(e) {
    e.preventDefault()
    cargar()
  }

  async function ajustar(loteId) {
    await post('/panel/stock/ajustar', { loteId, cantidad: Number(ajustes[loteId]), usuarioId: usuario.id })
    cargar()
  }

  const total = lotes.reduce((suma, l) => suma + l.cantidad, 0)

  return (
    <PanelLayout titulo="Stock del depósito" seccion="stock">
      <p className="medida" style={{ color: 'var(--tinta-suave)', marginBottom: 24 }}>
        El inventario vivo, lote por lote. Filtrá por categoría o buscá un producto. Si hubo un error de conteo, corregí un lote acá mismo y queda registrado el ajuste.
      </p>

      <form onSubmit={filtrar} style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'flex-end', marginBottom: 24 }}>
        <div>
          <label className="label-campo">Buscar</label>
          <input className="campo" value={q} onChange={e => setQ(e.target.value)} placeholder="Ej: arroz" style={{ width: 220 }} />
        </div>
        <div>
          <label className="label-campo">Categoría</label>
          <select className="campo" value={cat} onChange={e => setCat(e.target.value)} style={{ width: 190 }}>
            <option value="">Todas</option>
            <option value="no_perecedero">No perecederos</option>
            <option value="perecedero">Perecederos</option>
          </select>
        </div>
        <button className="btn-fantasma">Filtrar</button>
        <span style={{ marginLeft: 'auto', fontSize: 14, color: 'var(--tinta-suave)' }}>Total mostrado: <strong className="tabular">{cant(total)}</strong></span>
      </form>

      <div className="tarjeta tabla-scroll">
        <table className="tabla">
          <thead><tr><th>Producto</th><th>Lote</th><th>Cantidad</th><th>Origen</th><th>Vencimiento</th><th>Estado</th><th></th></tr></thead>
          <tbody>
            {lotes.length === 0 ? (
              <tr><td colSpan="7" style={{ textAlign: 'center', color: 'var(--tinta-suave)', padding: 32 }}>No hay lotes que coincidan.</td></tr>
            ) : lotes.map(l => (
              <tr key={l.id}>
                <td><div style={{ display: 'flex', alignItems: 'center', gap: 8 }}><span style={{ color: 'var(--naranja-hover)' }}><Icono nombre={l.icono} size={20} /></span><span style={{ fontWeight: 500 }}>{l.nombre}</span></div></td>
                <td style={{ color: 'var(--tinta-suave)' }}>#{l.id}</td>
                <td className="tabular" style={{ fontWeight: 500 }}>{cant(l.cantidad)} {l.unidad}</td>
                <td style={{ color: 'var(--tinta-suave)', fontSize: 14 }}>{l.origen ? 'Donación #' + l.origen : 'Carga directa'}</td>
                <td className="tabular">{l.vencimiento ? fecha(l.vencimiento) : '—'}</td>
                <td><span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14, fontWeight: 500, color: colorSemaforo(l.semaforo.clase) }}><span className={claseSemaforo(l.semaforo.clase)}></span>{l.semaforo.texto}</span></td>
                <td>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                    <input type="number" min="0" step="0.5" value={ajustes[l.id] ?? l.cantidad} onChange={e => setAjustes({ ...ajustes, [l.id]: e.target.value })} className="campo tabular" style={{ width: 80, padding: '4px 8px' }} />
                    <button className="btn-fantasma" style={{ padding: '6px 12px', minHeight: 'auto' }} onClick={() => ajustar(l.id)}>Ajustar</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </PanelLayout>
  )
}
