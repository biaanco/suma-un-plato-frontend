import { useEffect, useState } from 'react'
import { get, post } from '../api'
import { cant } from '../format'
import PanelLayout from '../components/PanelLayout'
import Icono from '../components/Icono'

export default function PanelPublicar() {
  const [alimentos, setAlimentos] = useState([])
  const [publicadas, setPublicadas] = useState([])
  const [alimentoId, setAlimentoId] = useState('')
  const [objetivo, setObjetivo] = useState('')
  const [urgente, setUrgente] = useState(false)
  const [mensaje, setMensaje] = useState('')

  function cargar() {
    get('/alimentos').then(setAlimentos).catch(() => {})
    get('/panel/publicadas').then(setPublicadas).catch(() => {})
  }

  useEffect(() => { cargar() }, [])

  async function publicar(e) {
    e.preventDefault()
    if (!alimentoId || !objetivo) return
    await post('/panel/publicar', { alimentoId: Number(alimentoId), objetivo: Number(objetivo), urgente })
    setMensaje('Necesidad publicada en el index.')
    setAlimentoId('')
    setObjetivo('')
    setUrgente(false)
    cargar()
  }

  async function alternar(id) {
    await post('/panel/publicar/urgente', { id })
    cargar()
  }

  async function retirar(id) {
    await post('/panel/publicar/quitar', { id })
    cargar()
  }

  return (
    <PanelLayout titulo="Publicar necesidades" seccion="publicar">
      <p className="medida" style={{ color: 'var(--tinta-suave)', marginBottom: 24 }}>
        Desde las planillas de los merenderos, elegí qué mostrar en el index y con qué cantidad objetivo. Esto es exactamente lo que verá María como "Necesidades de hoy".
      </p>
      {mensaje && <div className="alerta alerta-ok">{mensaje}</div>}

      <div className="grid grid-2" style={{ alignItems: 'start' }}>
        <section className="tarjeta tarjeta-pad">
          <h2 className="font-display" style={{ fontSize: 20, marginTop: 0 }}>Publicar / actualizar</h2>
          <form onSubmit={publicar}>
            <div style={{ marginBottom: 16 }}>
              <label className="label-campo">Alimento</label>
              <select className="campo" value={alimentoId} onChange={e => setAlimentoId(e.target.value)} required>
                <option value="">Elegí un alimento…</option>
                {alimentos.map(a => <option key={a.id} value={a.id}>{a.nombre} ({a.unidad})</option>)}
              </select>
            </div>
            <div style={{ marginBottom: 16 }}>
              <label className="label-campo">Cantidad objetivo</label>
              <input className="campo" type="number" step="0.5" min="0.5" value={objetivo} onChange={e => setObjetivo(e.target.value)} style={{ width: 160 }} required />
            </div>
            <label style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer', marginBottom: 16 }}>
              <input type="checkbox" checked={urgente} onChange={e => setUrgente(e.target.checked)} style={{ width: 20, height: 20 }} />
              <span style={{ fontWeight: 500 }}>Marcar como urgente</span>
            </label>
            <button className="btn-donar">Publicar</button>
          </form>
        </section>

        <section>
          <h2 className="font-display" style={{ fontSize: 20, marginTop: 0, marginBottom: 16 }}>Publicadas ahora ({publicadas.length})</h2>
          {publicadas.length === 0 ? (
            <p style={{ color: 'var(--tinta-suave)', fontSize: 14 }}>Todavía no publicaste ninguna necesidad.</p>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {publicadas.map(n => (
                <div key={n.id} className="tarjeta" style={{ padding: 20, position: 'relative' }}>
                  {n.urgente && <span className="chip chip-urgente" style={{ position: 'absolute', top: 16, right: 16 }}>Urgente</span>}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                    <div className="icono-circulo" style={{ width: 40, height: 40 }}><Icono nombre={n.icono} size={20} /></div>
                    <div><div style={{ fontWeight: 600 }}>{n.nombre}</div><div style={{ fontSize: 12, color: 'var(--tinta-suave)' }}>{n.categoria === 'perecedero' ? 'Perecedero' : 'No perecedero'}</div></div>
                  </div>
                  <div className="progreso-riel" style={{ marginBottom: 4 }}><div className="progreso-relleno" style={{ width: n.pct + '%' }}></div></div>
                  <div className="tabular" style={{ fontSize: 14, color: 'var(--tinta-suave)', marginBottom: 12 }}>{cant(n.cubierto)} de {cant(n.objetivo)} {n.unidad}</div>
                  <div style={{ display: 'flex', gap: 8 }}>
                    <button className="btn-fantasma" style={{ padding: '6px 12px', minHeight: 'auto', fontSize: 14 }} onClick={() => alternar(n.id)}>{n.urgente ? 'Quitar urgente' : 'Marcar urgente'}</button>
                    <button className="btn-icono" style={{ fontSize: 14 }} onClick={() => retirar(n.id)}>Retirar</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </PanelLayout>
  )
}
