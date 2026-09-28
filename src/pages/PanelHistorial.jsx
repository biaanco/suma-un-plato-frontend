import { useEffect, useState } from 'react'
import { get } from '../api'
import { cant, fechaHora } from '../format'
import PanelLayout from '../components/PanelLayout'

const BADGE = {
  ingreso: { background: '#ffffff', color: '#000000' },
  ajuste: { background: '#bbbbbb', color: '#000000' },
  egreso: { background: '#000000', color: '#ffffff' }
}

export default function PanelHistorial() {
  const [datos, setDatos] = useState({ donado: [], entregado: [], movimientos: [] })
  const [tipo, setTipo] = useState('')

  function cargar(filtro) {
    const q = filtro ? '?tipo=' + filtro : ''
    get('/panel/historial' + q).then(setDatos).catch(() => {})
  }

  useEffect(() => { cargar('') }, [])

  function cambiarTipo(valor) {
    setTipo(valor)
    cargar(valor)
  }

  function signo(t, cantidad) {
    if (cantidad === null || cantidad === undefined) return '—'
    const n = Math.abs(Number(cantidad))
    return (t === 'egreso' ? '-' : '+') + cant(n)
  }

  return (
    <PanelLayout titulo="Historial y reportes" seccion="historial">
      <p className="medida" style={{ color: 'var(--tinta-suave)', marginBottom: 24 }}>
        El registro de todos los movimientos —ingreso, ajuste, egreso— y reportes simples. Es lo que sirve para rendir cuentas y para la presentación final.
      </p>

      <div className="grid grid-2" style={{ marginBottom: 32 }}>
        <div className="tarjeta tarjeta-pad">
          <h3 style={{ marginTop: 0, fontSize: 16 }}>Qué se donó</h3>
          {datos.donado.length === 0 ? <p style={{ fontSize: 14, color: 'var(--tinta-suave)' }}>Sin datos.</p> : (
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 6 }}>
              {datos.donado.map((d, i) => <li key={i} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 14 }}><span>{d.nombre}</span><span className="tabular" style={{ fontWeight: 500 }}>{cant(d.total)} {d.unidad}</span></li>)}
            </ul>
          )}
        </div>
        <div className="tarjeta tarjeta-pad">
          <h3 style={{ marginTop: 0, fontSize: 16 }}>Qué se entregó</h3>
          {datos.entregado.length === 0 ? <p style={{ fontSize: 14, color: 'var(--tinta-suave)' }}>Sin datos.</p> : (
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 6 }}>
              {datos.entregado.map((d, i) => <li key={i} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 14 }}><span>{d.nombre}</span><span className="tabular" style={{ fontWeight: 500 }}>{cant(d.total)} {d.unidad}</span></li>)}
            </ul>
          )}
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
        <h2 className="font-display" style={{ fontSize: 20, margin: 0 }}>Movimientos</h2>
        <select className="campo" value={tipo} onChange={e => cambiarTipo(e.target.value)} style={{ marginLeft: 'auto', width: 180 }}>
          <option value="">Todos</option>
          <option value="ingreso">Ingresos</option>
          <option value="ajuste">Ajustes</option>
          <option value="egreso">Egresos</option>
        </select>
      </div>

      <div className="tarjeta tabla-scroll">
        <table className="tabla">
          <thead><tr><th>Fecha</th><th>Tipo</th><th>Alimento</th><th>Cantidad</th><th>Detalle</th><th>Responsable</th></tr></thead>
          <tbody>
            {datos.movimientos.length === 0 ? (
              <tr><td colSpan="6" style={{ textAlign: 'center', color: 'var(--tinta-suave)', padding: 32 }}>Sin movimientos.</td></tr>
            ) : datos.movimientos.map((m, i) => (
              <tr key={i}>
                <td className="tabular" style={{ color: 'var(--tinta-suave)', whiteSpace: 'nowrap' }}>{fechaHora(m.fecha)}</td>
                <td><span className="chip" style={BADGE[m.tipo]}>{m.tipo}</span></td>
                <td style={{ fontWeight: 500 }}>{m.alimento || '—'}</td>
                <td className="tabular" style={{ color: m.tipo === 'egreso' ? 'var(--sem-rojo)' : (m.tipo === 'ingreso' ? 'var(--verde)' : 'inherit') }}>{signo(m.tipo, m.cantidad)}</td>
                <td style={{ fontSize: 14, color: 'var(--tinta-suave)' }}>{m.detalle}</td>
                <td style={{ fontSize: 14, color: 'var(--tinta-suave)' }}>{m.usuario || '—'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </PanelLayout>
  )
}
