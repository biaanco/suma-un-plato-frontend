import { useEffect, useState } from 'react'
import { get, post } from '../api'
import { usuarioActual } from '../auth'
import { cant, fechaHora } from '../format'
import PanelLayout from '../components/PanelLayout'
import Icono from '../components/Icono'

function TarjetaDonacion({ donacion, usuarioId, onConfirmado }) {
  const [items, setItems] = useState(
    donacion.items.map(it => ({ ...it, cantidadReal: it.cantidad, vencimiento: '' }))
  )
  const [cargando, setCargando] = useState(false)
  const [error, setError] = useState('')

  function cambiar(indice, campo, valor) {
    const copia = items.map((it, i) => i === indice ? { ...it, [campo]: valor } : it)
    setItems(copia)
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
        {error && <div className="alerta alerta-error">{error}</div>}
        <div className="tabla-scroll">
          <table className="tabla">
            <thead><tr><th>Alimento</th><th>Declarado</th><th>Cantidad real</th><th>Vencimiento</th></tr></thead>
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
  const [mensaje, setMensaje] = useState('')

  function cargar() {
    get('/panel/revisar').then(setDonaciones).catch(() => {})
  }

  useEffect(() => { cargar() }, [])

  function confirmado(id) {
    setMensaje('Donación #' + id + ' ingresada al stock. Las barras del index ya se actualizaron.')
    setDonaciones(prev => prev.filter(d => d.id !== id))
  }

  return (
    <PanelLayout titulo="Donaciones por revisar" seccion="revisar">
      <p className="medida" style={{ color: 'var(--tinta-suave)', marginBottom: 24 }}>
        La bandeja de entrada del depósito. Revisá lo que trajo cada donante, ajustá cantidades, cargá el vencimiento de los perecederos y confirmá el ingreso.
      </p>
      {mensaje && <div className="alerta alerta-ok">{mensaje}</div>}
      {donaciones.length === 0 ? (
        <div className="tarjeta tarjeta-pad" style={{ textAlign: 'center', color: 'var(--tinta-suave)' }}>No hay donaciones esperando revisión.</div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {donaciones.map(d => (
            <TarjetaDonacion key={d.id} donacion={d} usuarioId={usuario.id} onConfirmado={confirmado} />
          ))}
        </div>
      )}
    </PanelLayout>
  )
}
