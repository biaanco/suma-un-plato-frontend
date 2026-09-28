import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { get } from '../api'
import { cant, colorSemaforo, claseSemaforo } from '../format'
import PanelLayout from '../components/PanelLayout'
import Icono from '../components/Icono'

export default function Panel() {
  const [datos, setDatos] = useState(null)

  useEffect(() => {
    get('/panel/dashboard').then(setDatos).catch(() => {})
  }, [])

  return (
    <PanelLayout titulo="Dashboard" seccion="dashboard">
      {!datos ? (
        <span className="cargando"></span>
      ) : (
        <>
          <div className="grid grid-4" style={{ marginBottom: 32 }}>
            <div className="kpi">
              <div style={{ fontSize: 14, color: 'var(--tinta-suave)', marginBottom: 8 }}>Stock total</div>
              <div className="kpi-num tabular">{cant(datos.stockTotal)}</div>
              <div style={{ fontSize: 12, color: 'var(--tinta-suave)' }}>ítems en depósito</div>
            </div>
            <div className="kpi">
              <div style={{ fontSize: 14, color: 'var(--tinta-suave)', marginBottom: 8 }}>Por revisar</div>
              <div className="kpi-num tabular" style={{ color: 'var(--naranja)' }}>{datos.porRevisar}</div>
              <div style={{ fontSize: 12, color: 'var(--tinta-suave)' }}>donaciones esperando</div>
            </div>
            <div className="kpi">
              <div style={{ fontSize: 14, color: 'var(--tinta-suave)', marginBottom: 8 }}>Urgentes sin cubrir</div>
              <div className="kpi-num tabular" style={{ color: 'var(--sem-rojo)' }}>{datos.urgentesSinCubrir}</div>
              <div style={{ fontSize: 12, color: 'var(--tinta-suave)' }}>necesidades críticas</div>
            </div>
            <div className="kpi">
              <div style={{ fontSize: 14, color: 'var(--tinta-suave)', marginBottom: 8 }}>Por vencer</div>
              <div className="kpi-num tabular" style={{ color: 'var(--sem-ambar)' }}>{datos.porVencer}</div>
              <div style={{ fontSize: 12, color: 'var(--tinta-suave)' }}>lotes en 15 días</div>
            </div>
          </div>

          <div className="grid grid-2">
            <section className="tarjeta tarjeta-pad">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                <h2 className="font-display" style={{ fontSize: 20, margin: 0 }}>Semáforo de vencimientos</h2>
                <Link to="/panel/stock" style={{ fontSize: 14, color: 'var(--naranja)', fontWeight: 600 }}>Ver stock</Link>
              </div>
              {datos.semaforo.length === 0 ? (
                <p style={{ color: 'var(--tinta-suave)', fontSize: 14 }}>No hay lotes con vencimiento cargado.</p>
              ) : (
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {datos.semaforo.map(l => (
                    <li key={l.id} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 0', borderTop: '1px solid var(--borde)' }}>
                      <span className={claseSemaforo(l.semaforo.clase)}></span>
                      <span style={{ color: 'var(--tinta-suave)' }}><Icono nombre={l.icono} size={20} /></span>
                      <span style={{ flex: 1, fontWeight: 500 }}>{l.nombre} <span style={{ color: 'var(--tinta-suave)', fontWeight: 400, fontSize: 14 }}>· {cant(l.cantidad)} {l.unidad}</span></span>
                      <span className="tabular" style={{ fontSize: 14, fontWeight: 600, color: colorSemaforo(l.semaforo.clase) }}>{l.semaforo.texto}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>

            <section className="tarjeta tarjeta-pad">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                <h2 className="font-display" style={{ fontSize: 20, margin: 0 }}>Necesidades pendientes</h2>
                <Link to="/panel/publicar" style={{ fontSize: 14, color: 'var(--naranja)', fontWeight: 600 }}>Publicar</Link>
              </div>
              {datos.necesidadesPendientes.length === 0 ? (
                <p style={{ color: 'var(--tinta-suave)', fontSize: 14 }}>¡Todo cubierto por ahora!</p>
              ) : (
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 16 }}>
                  {datos.necesidadesPendientes.map((n, i) => (
                    <li key={i}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                        <span style={{ fontWeight: 500 }}>{n.nombre} {n.urgente && <span className="chip chip-urgente" style={{ marginLeft: 4 }}>Urgente</span>}</span>
                        <span className="tabular" style={{ fontSize: 14, color: 'var(--tinta-suave)' }}>{cant(n.cubierto)}/{cant(n.objetivo)} {n.unidad}</span>
                      </div>
                      <div className="progreso-riel"><div className="progreso-relleno" style={{ width: n.pct + '%' }}></div></div>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          </div>
        </>
      )}
    </PanelLayout>
  )
}
