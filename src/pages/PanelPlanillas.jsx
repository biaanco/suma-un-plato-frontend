import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { get } from '../api'
import { cant } from '../format'
import PanelLayout from '../components/PanelLayout'

const URG = {
  alta: { background: '#000000', color: '#ffffff' },
  media: { background: '#bbbbbb', color: '#000000' },
  baja: { background: '#ffffff', color: '#000000' }
}
const ESTADO = { pendiente: 'Pendiente', parcial: 'Parcial', cubierta: 'Cubierta' }

export default function PanelPlanillas() {
  const [datos, setDatos] = useState({ agregado: [], porMerendero: [] })

  useEffect(() => {
    get('/panel/planillas').then(setDatos).catch(() => {})
  }, [])

  return (
    <PanelLayout titulo="Planillas de necesidades" seccion="planillas">
      <p className="medida" style={{ color: 'var(--tinta-suave)', marginBottom: 24 }}>
        Lo que pidieron todos los merenderos, con su cantidad y urgencia. Es la materia prima para decidir qué publicar en el index.
      </p>

      <section className="tarjeta tarjeta-pad" style={{ marginBottom: 32 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
          <h2 className="font-display" style={{ fontSize: 20, margin: 0 }}>Total pedido por alimento</h2>
          <Link to="/panel/publicar" className="btn-donar" style={{ padding: '8px 16px' }}>Publicar necesidades</Link>
        </div>
        {datos.agregado.length === 0 ? (
          <p style={{ color: 'var(--tinta-suave)', fontSize: 14 }}>No hay pedidos cargados por los merenderos.</p>
        ) : (
          <div className="grid grid-3">
            {datos.agregado.map((a, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid var(--borde)', borderRadius: 12, padding: '12px 16px' }}>
                <span style={{ fontWeight: 500 }}>{a.nombre}</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span className="chip" style={URG[a.urgencia]}>{a.urgencia}</span>
                  <span className="tabular" style={{ fontWeight: 600 }}>{cant(a.total)} {a.unidad}</span>
                </span>
              </div>
            ))}
          </div>
        )}
      </section>

      <h2 className="font-display" style={{ fontSize: 20, marginBottom: 16 }}>Detalle por merendero</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        {datos.porMerendero.map((m, i) => (
          <div key={i} className="tarjeta tarjeta-pad">
            <div style={{ marginBottom: 12 }}>
              <h3 style={{ fontSize: 18, margin: 0 }}>{m.nombre}</h3>
              <p style={{ fontSize: 14, color: 'var(--tinta-suave)', margin: 0 }}>{m.referente} · {m.horarios}</p>
            </div>
            {m.items.length === 0 ? (
              <p style={{ fontSize: 14, color: 'var(--tinta-suave)' }}>Sin necesidades cargadas.</p>
            ) : (
              <div className="tabla-scroll">
                <table className="tabla">
                  <thead><tr><th>Alimento</th><th>Cantidad</th><th>Urgencia</th><th>Estado</th></tr></thead>
                  <tbody>
                    {m.items.map((p, j) => (
                      <tr key={j}>
                        <td style={{ fontWeight: 500 }}>{p.nombre}</td>
                        <td className="tabular">{cant(p.cantidad)} {p.unidad}</td>
                        <td><span className="chip" style={URG[p.urgencia]}>{p.urgencia}</span></td>
                        <td style={{ fontSize: 14, color: 'var(--tinta-suave)' }}>{ESTADO[p.estado]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        ))}
      </div>
    </PanelLayout>
  )
}
