import { useEffect, useRef, useState } from 'react'
import { get, post } from '../api'
import { usuarioActual } from '../auth'
import { cant, fecha, colorSemaforo, claseSemaforo } from '../format'
import PanelLayout from '../components/PanelLayout'
import Icono from '../components/Icono'
import './PanelDonaciones.css' // tokens, brillo y keyframes compartidos del esqueleto
import './PanelStock.css'

// Solo en la carga inicial: si no hay lotes, el esqueleto se mantiene hasta este tiempo.
const ESPERA_VACIO_MS = 5000
const DESTELLO_MS = 1200

// Anchos variados para que el esqueleto no parezca una grilla mecánica
const ANCHOS_PRODUCTO = [150, 110, 170, 125, 140, 100]
const ANCHOS_ORIGEN = [96, 84, 110, 90, 100, 80]

function FilasEsqueleto({ cantidad = 6 }) {
  return Array.from({ length: cantidad }).map((_, i) => (
    <tr key={i} className="esq-fila" style={{ '--i': i }} aria-hidden="true">
      <td>
        <div className="esq-celda-producto">
          <div className="esq esq-icono" />
          <div className="esq esq-linea" style={{ width: ANCHOS_PRODUCTO[i % 6] }} />
        </div>
      </td>
      <td><div className="esq esq-linea" style={{ width: 36 }} /></td>
      <td><div className="esq esq-linea" style={{ width: 72 }} /></td>
      <td><div className="esq esq-linea esq-linea-chica" style={{ width: ANCHOS_ORIGEN[i % 6] }} /></td>
      <td><div className="esq esq-linea" style={{ width: 80 }} /></td>
      <td>
        <div className="esq-celda-producto">
          <div className="esq esq-semaforo" />
          <div className="esq esq-linea esq-linea-chica" style={{ width: 70 }} />
        </div>
      </td>
      <td>
        <div className="esq-celda-producto">
          <div className="esq esq-input" />
          <div className="esq esq-boton" />
        </div>
      </td>
    </tr>
  ))
}

export default function PanelStock() {
  const usuario = usuarioActual()
  const [lotes, setLotes] = useState([])
  const [cat, setCat] = useState('')
  const [q, setQ] = useState('')
  // Solo guarda los valores que el usuario editó: { [loteId]: valor }
  const [ajustes, setAjustes] = useState({})
  const [estado, setEstado] = useState('cargando') // 'cargando' | 'listo' | 'error'
  const [errorCarga, setErrorCarga] = useState('')
  const [errorAjuste, setErrorAjuste] = useState('')
  const [guardando, setGuardando] = useState(null)
  const [ajustado, setAjustado] = useState(null)

  const pedidoRef = useRef(0)          // descarta respuestas viejas si se filtra rápido
  const montadoRef = useRef(true)
  const esperaRef = useRef(null)
  const destelloRef = useRef(null)

  useEffect(() => {
    montadoRef.current = true
    cargar({ esperaVacio: true })
    return () => {
      montadoRef.current = false
      clearTimeout(esperaRef.current)
      clearTimeout(destelloRef.current)
    }
  }, [])

  function vigente(id) {
    return montadoRef.current && id === pedidoRef.current
  }

  function cargar({ esperaVacio = false, silencioso = false } = {}) {
    const id = ++pedidoRef.current
    clearTimeout(esperaRef.current)
    const inicio = Date.now()

    if (!silencioso) {
      setEstado('cargando')
      setErrorCarga('')
    }

    const params = new URLSearchParams()
    if (cat) params.set('cat', cat)
    if (q.trim()) params.set('q', q.trim())

    return get('/panel/stock?' + params.toString())
      .then(datos => {
        if (!vigente(id)) return
        const lista = Array.isArray(datos) ? datos : []
        const mostrar = () => {
          if (!vigente(id)) return
          setLotes(lista)
          if (!silencioso) setAjustes({})
          setEstado('listo')
        }
        const restante = esperaVacio && lista.length === 0
          ? Math.max(0, ESPERA_VACIO_MS - (Date.now() - inicio))
          : 0
        if (restante > 0) esperaRef.current = setTimeout(mostrar, restante)
        else mostrar()
      })
      .catch(err => {
        if (!vigente(id) || silencioso) return
        setErrorCarga(err?.message || 'No se pudo cargar el stock.')
        setEstado('error')
      })
  }

  function filtrar(e) {
    e.preventDefault()
    cargar()
  }

  function editar(loteId, valor) {
    setAjustes(prev => ({ ...prev, [loteId]: valor }))
  }

  function tieneCambio(lote) {
    const v = ajustes[lote.id]
    return v !== undefined && v !== '' && Number(v) !== lote.cantidad
  }

  async function ajustar(loteId) {
    const valor = Number(ajustes[loteId])
    if (!Number.isFinite(valor) || valor < 0) {
      setErrorAjuste('Ingresá una cantidad válida para el lote #' + loteId + '.')
      return
    }
    setErrorAjuste('')
    setGuardando(loteId)
    try {
      await post('/panel/stock/ajustar', { loteId, cantidad: valor, usuarioId: usuario.id })
      if (!montadoRef.current) return
      // Actualización inmediata de la fila, sin volver a mostrar el esqueleto
      setLotes(prev => prev.map(l => l.id === loteId ? { ...l, cantidad: valor } : l))
      setAjustes(prev => {
        const copia = { ...prev }
        delete copia[loteId]
        return copia
      })
      setAjustado(loteId)
      clearTimeout(destelloRef.current)
      destelloRef.current = setTimeout(() => setAjustado(null), DESTELLO_MS)
      // Recarga silenciosa para traer el semáforo actualizado, conservando otras ediciones
      cargar({ silencioso: true })
    } catch (err) {
      if (montadoRef.current) setErrorAjuste(err?.message || 'No se pudo ajustar el lote.')
    } finally {
      if (montadoRef.current) setGuardando(null)
    }
  }

  const total = lotes.reduce((suma, l) => suma + l.cantidad, 0)
  const cargando = estado === 'cargando'

  return (
    <PanelLayout titulo="Stock del depósito" seccion="stock">
      <p className="medida" style={{ color: 'var(--tinta-suave)', marginBottom: 24 }}>
        El inventario vivo, lote por lote. Filtrá por categoría o buscá un producto. Si hubo un error de conteo, corregí un lote acá mismo y queda registrado el ajuste.
      </p>

      <form onSubmit={filtrar} style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'flex-end', marginBottom: 24 }}>
        <div>
          <label className="label-campo" htmlFor="stock-buscar">Buscar</label>
          <input id="stock-buscar" className="campo" value={q} onChange={e => setQ(e.target.value)} placeholder="Ej: arroz" style={{ width: 220 }} />
        </div>
        <div>
          <label className="label-campo" htmlFor="stock-categoria">Categoría</label>
          <select id="stock-categoria" className="campo" value={cat} onChange={e => setCat(e.target.value)} style={{ width: 190 }}>
            <option value="">Todas</option>
            <option value="no_perecedero">No perecederos</option>
            <option value="perecedero">Perecederos</option>
          </select>
        </div>
        <button className="btn-fantasma" disabled={cargando}>Filtrar</button>

        <div className="stock-resumen" role="status" aria-live="polite">
          {cargando ? (
            <span key="cargando" className="esq-estado">
              <span className="esq-punto" aria-hidden="true"></span>
              Cargando stock…
            </span>
          ) : estado === 'listo' ? (
            <span key="total" className="aparecer">
              Total mostrado: <strong className="tabular">{cant(total)}</strong>
            </span>
          ) : null}
        </div>
      </form>

      {errorAjuste && <div key={errorAjuste} className="alerta alerta-error aparecer" role="alert">{errorAjuste}</div>}

      {estado === 'error' ? (
        <div className="alerta alerta-error aparecer" role="alert">
          {errorCarga}{' '}
          <button className="btn-link-reintentar" onClick={() => cargar({ esperaVacio: true })}>Reintentar</button>
        </div>
      ) : (
        <div className="tarjeta tabla-scroll" aria-busy={cargando}>
          <table className="tabla">
            <thead><tr><th>Producto</th><th>Lote</th><th>Cantidad</th><th>Origen</th><th>Vencimiento</th><th>Estado</th><th></th></tr></thead>
            <tbody>
              {cargando ? (
                <FilasEsqueleto />
              ) : lotes.length === 0 ? (
                <tr className="aparecer">
                  <td colSpan="7" style={{ textAlign: 'center', color: 'var(--tinta-suave)', padding: 32 }}>No hay lotes que coincidan.</td>
                </tr>
              ) : lotes.map((l, i) => (
                <tr key={l.id} className={'fila-entrar' + (ajustado === l.id ? ' fila-ajustada' : '')} style={{ '--i': Math.min(i, 12) }}>
                  <td><div style={{ display: 'flex', alignItems: 'center', gap: 8 }}><span style={{ color: 'var(--naranja-hover)' }}><Icono nombre={l.icono} size={20} /></span><span style={{ fontWeight: 500 }}>{l.nombre}</span></div></td>
                  <td style={{ color: 'var(--tinta-suave)' }}>#{l.id}</td>
                  <td className="tabular" style={{ fontWeight: 500 }}>{cant(l.cantidad)} {l.unidad}</td>
                  <td style={{ color: 'var(--tinta-suave)', fontSize: 14 }}>{l.origen ? 'Donación #' + l.origen : 'Carga directa'}</td>
                  <td className="tabular">{l.vencimiento ? fecha(l.vencimiento) : '—'}</td>
                  <td><span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14, fontWeight: 500, color: colorSemaforo(l.semaforo.clase) }}><span className={claseSemaforo(l.semaforo.clase)}></span>{l.semaforo.texto}</span></td>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <input
                        type="number" min="0" step="0.5"
                        aria-label={'Nueva cantidad del lote #' + l.id}
                        value={ajustes[l.id] ?? l.cantidad}
                        onChange={e => editar(l.id, e.target.value)}
                        onKeyDown={e => { if (e.key === 'Enter' && tieneCambio(l)) ajustar(l.id) }}
                        className="campo tabular"
                        style={{ width: 80, padding: '4px 8px' }}
                      />
                      <button
                        type="button"
                        className="btn-fantasma btn-ajustar"
                        style={{ padding: '6px 12px', minHeight: 'auto' }}
                        onClick={() => ajustar(l.id)}
                        disabled={!tieneCambio(l) || guardando === l.id}
                      >
                        {guardando === l.id ? 'Ajustando…' : 'Ajustar'}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </PanelLayout>
  )
}
