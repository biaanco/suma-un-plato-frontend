import { useEffect, useState } from 'react'
import { get, post } from '../api'
import { cant } from '../format'
import PanelLayout from '../components/PanelLayout'
import SelectorBuscable from '../components/SelectorBuscable'

const UNIDADES = ['u', 'kg', 'L', 'paq']
const ICONOS = ['bag', 'rice', 'pasta', 'flour', 'oil', 'sugar', 'leaf', 'bean', 'can', 'milk', 'carrot', 'apple', 'bread', 'egg', 'cheese']

function TarjetaSugerido({ sugerido, catalogo, onListo }) {
  const [datos, setDatos] = useState(sugerido)
  const [unirCon, setUnirCon] = useState('')
  const [error, setError] = useState('')

  function cambiar(campo, valor) {
    setDatos({ ...datos, [campo]: valor })
  }

  async function aprobar() {
    setError('')
    try {
      const r = await post('/alimentos/' + sugerido.id + '/aprobar', datos)
      onListo(r.mensaje)
    } catch (err) {
      setError(err.message)
    }
  }

  async function unir() {
    setError('')
    try {
      const r = await post('/alimentos/' + sugerido.id + '/unir', { alimentoId: Number(unirCon) })
      onListo(r.mensaje)
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <div className="tarjeta tarjeta-pad">
      <div style={{ marginBottom: 16 }}>
        <h3 style={{ fontSize: 18, margin: 0 }}>{sugerido.nombre}</h3>
        <p style={{ fontSize: 14, color: 'var(--tinta-suave)', margin: 0 }}>
          Lo pidió {sugerido.merendero || 'un merendero'} · <span className="tabular">{cant(sugerido.cantidad)} {sugerido.unidad}</span>
        </p>
      </div>
      {error && <div className="alerta alerta-error">{error}</div>}

      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <label className="label-campo" style={{ margin: 0 }}>Nombre en el catálogo</label>
        <input className="campo" value={datos.nombre} onChange={e => cambiar('nombre', e.target.value)} maxLength={60} />
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          <select className="campo" value={datos.unidad} onChange={e => cambiar('unidad', e.target.value)} aria-label="Unidad" style={{ width: 90 }}>
            {UNIDADES.map(u => <option key={u} value={u}>{u}</option>)}
          </select>
          <select className="campo" value={datos.categoria} onChange={e => cambiar('categoria', e.target.value)} aria-label="Categoría" style={{ flex: '1 1 160px', width: 'auto' }}>
            <option value="no_perecedero">No perecedero</option>
            <option value="perecedero">Perecedero</option>
          </select>
          <select className="campo" value={datos.icono} onChange={e => cambiar('icono', e.target.value)} aria-label="Ícono" style={{ width: 110 }}>
            {ICONOS.map(i => <option key={i} value={i}>{i}</option>)}
          </select>
        </div>
        <button className="btn-verde" style={{ padding: '6px 12px', minHeight: 'auto', fontSize: 14, alignSelf: 'flex-start' }} onClick={aprobar}>Agregar al catálogo</button>
      </div>

      <div style={{ marginTop: 16, borderTop: '1px solid var(--borde)', paddingTop: 16, display: 'flex', flexDirection: 'column', gap: 8 }}>
        <span style={{ fontSize: 14, color: 'var(--tinta-suave)' }}>¿Ya existe con otro nombre? Pasá el pedido a ese producto:</span>
        <SelectorBuscable opciones={catalogo} valor={unirCon} onChange={setUnirCon} />
        <button className="btn-fantasma" style={{ padding: '6px 12px', minHeight: 'auto', fontSize: 14, alignSelf: 'flex-start' }} onClick={unir} disabled={!unirCon}>Usar ese producto</button>
      </div>
    </div>
  )
}

export default function PanelSugeridos() {
  const [sugeridos, setSugeridos] = useState(null)
  const [catalogo, setCatalogo] = useState([])
  const [mensaje, setMensaje] = useState('')

  function cargar() {
    get('/alimentos/sugeridos').then(setSugeridos).catch(() => setSugeridos([]))
    get('/alimentos').then(setCatalogo).catch(() => {})
  }

  useEffect(() => { cargar() }, [])

  function listo(texto) {
    setMensaje(texto)
    cargar()
    window.dispatchEvent(new Event('sugeridos-cambio'))
  }

  return (
    <PanelLayout titulo="Productos sugeridos" seccion="sugeridos">
      <p className="medida" style={{ color: 'var(--tinta-suave)', marginBottom: 24 }}>
        Productos que pidieron los merenderos con la opción "Otros" porque no estaban en la lista. Corregí el nombre si hace falta y sumalo al catálogo para que aparezca la próxima vez, o pasá el pedido a un producto que ya existe.
      </p>
      {mensaje && <div className="alerta alerta-ok">{mensaje}</div>}
      {!sugeridos ? (
        <span className="cargando"></span>
      ) : sugeridos.length === 0 ? (
        <div className="tarjeta tarjeta-pad" style={{ textAlign: 'center', color: 'var(--tinta-suave)' }}>No hay productos nuevos para revisar.</div>
      ) : (
        <div className="grid grid-2">
          {sugeridos.map(s => <TarjetaSugerido key={s.id} sugerido={s} catalogo={catalogo} onListo={listo} />)}
        </div>
      )}
    </PanelLayout>
  )
}
