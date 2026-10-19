import { useEffect, useState } from 'react'
import { get, post } from '../api'
import { usuarioActual } from '../auth'
import { cant, fechaHora } from '../format'
import PanelLayout from '../components/PanelLayout'
import Icono from '../components/Icono'
import './PanelDonaciones.css'

// Si la bandeja viene vacía, el esqueleto se mantiene hasta cumplir este tiempo
// desde que apareció. Si hay donaciones, se muestran apenas llegan.
const ESPERA_VACIO_MS = 5000
// Duración de la animación de salida de una tarjeta confirmada (igual que en el CSS)
const SALIDA_MS = 420

function EsqueletoDonaciones({ cantidad = 3 }) {
  return (
    <div className="esq-lista" role="status" aria-live="polite" aria-busy="true">
      <div className="esq-estado">
        <span className="esq-punto" aria-hidden="true"></span>
        Cargando donaciones…
      </div>
      {Array.from({ length: cantidad }).map((_, i) => (
        <div key={i} className="tarjeta esq-tarjeta" style={{ '--i': i }} aria-hidden="true">
          <div className="esq esq-circulo" />
          <div className="esq-textos">
            <div className="esq esq-linea" style={{ width: '42%' }} />
            <div className="esq esq-linea esq-linea-chica" style={{ width: '26%' }} />
          </div>
          <div className="esq esq-chip" />
        </div>
      ))}
    </div>
  )
}

function TarjetaDonacion({ donacion, usuarioId, onConfirmado }) {
  const [items, setItems] = useState(
    donacion.items.map(it => ({ ...it, cantidadReal: it.cantidad, vencimiento: '' }))
  )
  const [cargando, setCargando] = useState(false)
  const [error, setError] = useState('')

  function cambiar(indice, campo, valor) {
    setItems(prev => prev.map((it, i) => i === indice ? { ...it, [campo]: valor } : it))
  }

  async function confirmar() {
    for (const it of items) {
      if (it.categoria === 'perecedero' && !it.vencimiento) {
        setError('Cargá el vencimiento de los perecederos.')
        return
      }
    }
    setError('')
    setCargando(true)
    try {
      await post('/panel/revisar/confirmar', {
        donacionId: donacion.id,
        usuarioId,
        items: items.map(it => ({ alimentoId: it.alimentoId, cantidad: Number(it.cantidadReal), vencimiento: it.vencimiento }))
      })
      onConfirmado(donacion.id)
    } catch (err) {
      setError(err.message)
      setCargando(false)
    }
  }

  return (
    <details className="tarjeta" open>
      <summary style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 12, padding: 20, cursor: 'pointer', listStyle: 'none' }}>
        <span className="icono-circulo" style={{ width: 40, height: 40, fontWeight: 700 }}>#{donacion.id}</span>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontWeight: 600 }}>{donacion.donante} <span style={{ fontSize: 12, color: 'var(--tinta-suave)', fontWeight: 400 }}>· {donacion.tipoDonante || 'donante'}</span></div>
          <div style={{ fontSize: 14, color: 'var(--tinta-suave)' }}>{donacion.items.length} ítems · {fechaHora(donacion.creadoEn)}</div>
        </div>
        <span className="chip chip-suave">Registrada</span>
      </summary>

      <div style={{ borderTop: '1px solid var(--borde)', padding: 20 }}>
        {error && <div className="alerta alerta-error aparecer">{error}</div>}
        <div className="tabla-scroll">
          <table className="tabla">
            <thead><tr><th>Producto</th><th>Declarado</th><th>Cantidad real</th><th>Vencimiento</th></tr></thead>
            <tbody>
              {items.map((it, i) => (
                <tr key={i}>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span style={{ color: 'var(--naranja-hover)' }}><Icono nombre={it.icono} size={20} /></span>
                      <span style={{ fontWeight: 500 }}>{it.nombre}</span>
                      <span style={{ fontSize: 12, color: 'var(--tinta-suave)' }}>{it.categoria === 'perecedero' ? 'perecedero' : 'no perec.'}</span>
                    </div>
                  </td>
                  <td className="tabular" style={{ color: 'var(--tinta-suave)' }}>{cant(it.cantidad)} {it.unidad}</td>
                  <td>
                    <input type="number" min="0" step="0.5" value={it.cantidadReal} onChange={e => cambiar(i, 'cantidadReal', e.target.value)} className="campo tabular" style={{ width: 96, padding: '6px 8px' }} /> <span style={{ fontSize: 12, color: 'var(--tinta-suave)' }}>{it.unidad}</span>
                  </td>
                  <td>
                    {it.categoria === 'perecedero' ? (
                      <input type="date" value={it.vencimiento} onChange={e => cambiar(i, 'vencimiento', e.target.value)} className="campo" style={{ width: 160, padding: '6px 8px' }} />
                    ) : (<span style={{ fontSize: 12, color: 'var(--tinta-suave)' }}>—</span>)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {donacion.nota && <p style={{ fontSize: 14, color: 'var(--tinta-suave)', marginTop: 12 }}>Nota del donante: <em>{donacion.nota}</em></p>}
        <div style={{ marginTop: 20 }}>
          <button className="btn-verde" onClick={confirmar} disabled={cargando}>{cargando ? 'Confirmando…' : 'Confirmar ingreso'}</button>
        </div>
      </div>
    </details>
  )
}

export default function PanelDonaciones() {
  const usuario = usuarioActual()
  const [donaciones, setDonaciones] = useState([])
  const [saliendo, setSaliendo] = useState(() => new Set())
  const [mensaje, setMensaje] = useState('')
  const [estado, setEstado] = useState('cargando') // 'cargando' | 'listo' | 'error'
  const [errorCarga, setErrorCarga] = useState('')
  const [intento, setIntento] = useState(0)

  useEffect(() => {
    let activo = true          // evita setState tras desmontar (y el doble efecto de StrictMode)
    let temporizador = null
    const inicio = Date.now()

    setEstado('cargando')
    setErrorCarga('')

    get('/panel/revisar')
      .then(datos => {
        if (!activo) return
        const lista = Array.isArray(datos) ? datos : []
        const mostrar = () => {
          if (!activo) return
          setDonaciones(lista)
          setEstado('listo')
        }
        if (lista.length > 0) {
          mostrar()
        } else {
          const restante = Math.max(0, ESPERA_VACIO_MS - (Date.now() - inicio))
          temporizador = setTimeout(mostrar, restante)
        }
      })
      .catch(err => {
        if (!activo) return
        setErrorCarga(err?.message || 'No se pudieron cargar las donaciones.')
        setEstado('error')
      })

    return () => {
      activo = false
      clearTimeout(temporizador)
    }
  }, [intento])

  function confirmado(id) {
    setMensaje('Donación #' + id + ' ingresada al stock. Las barras del index ya se actualizaron.')
    // Primero se anima la salida, después se quita de la lista
    setSaliendo(prev => new Set(prev).add(id))
    setTimeout(() => {
      setDonaciones(prev => prev.filter(d => d.id !== id))
      setSaliendo(prev => {
        const copia = new Set(prev)
        copia.delete(id)
        return copia
      })
    }, SALIDA_MS)
  }

  return (
    <PanelLayout titulo="Donaciones por revisar" seccion="revisar">
      <p className="medida" style={{ color: 'var(--tinta-suave)', marginBottom: 24 }}>
        La bandeja de entrada del depósito. Revisá lo que trajo cada donante, ajustá cantidades, cargá el vencimiento de los perecederos y confirmá el ingreso.
      </p>

      {mensaje && <div key={mensaje} className="alerta alerta-ok aparecer">{mensaje}</div>}

      {estado === 'cargando' && <EsqueletoDonaciones />}

      {estado === 'error' && (
        <div className="alerta alerta-error aparecer" role="alert">
          {errorCarga}{' '}
          <button className="btn-link-reintentar" onClick={() => setIntento(n => n + 1)}>Reintentar</button>
        </div>
      )}

      {estado === 'listo' && donaciones.length === 0 && (
        <div className="tarjeta tarjeta-pad vacio-donaciones aparecer" role="status">
          No hay donaciones esperando revisión.
        </div>
      )}

      {estado === 'listo' && donaciones.length > 0 && (
        <div className="lista-donaciones">
          {donaciones.map((d, i) => (
            <div
              key={d.id}
              className="donacion-item"
              data-saliendo={saliendo.has(d.id) || undefined}
              style={{ '--i': Math.min(i, 8) }}
            >
              <div className="donacion-item-interior">
                <TarjetaDonacion donacion={d} usuarioId={usuario.id} onConfirmado={confirmado} />
              </div>
            </div>
          ))}
        </div>
      )}
    </PanelLayout>
  )
}
