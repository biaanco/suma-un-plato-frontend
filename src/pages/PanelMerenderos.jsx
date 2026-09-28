import { useEffect, useState } from 'react'
import { get, post, put } from '../api'
import PanelLayout from '../components/PanelLayout'

function TarjetaMerendero({ merendero, onCambio }) {
  const [editar, setEditar] = useState(false)
  const [datos, setDatos] = useState(merendero)

  function cambiar(campo, valor) {
    setDatos({ ...datos, [campo]: valor })
  }

  async function guardar() {
    await put('/merenderos/' + merendero.id, datos)
    setEditar(false)
    onCambio()
  }

  async function alternar() {
    await post('/merenderos/' + merendero.id + '/toggle', {})
    onCambio()
  }

  return (
    <div className="tarjeta tarjeta-pad" style={{ opacity: merendero.activo ? 1 : 0.6 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, marginBottom: 12 }}>
        <div>
          <h3 style={{ fontSize: 18, margin: 0 }}>{merendero.nombre}</h3>
          <p style={{ fontSize: 14, color: 'var(--tinta-suave)', margin: 0 }}>{merendero.direccion || 'Sin dirección'}</p>
        </div>
        <span className={merendero.activo ? 'chip chip-verde' : 'chip chip-gris'}>{merendero.activo ? 'Activo' : 'Inactivo'}</span>
      </div>
      <div style={{ fontSize: 14, color: 'var(--tinta-suave)', display: 'flex', flexDirection: 'column', gap: 4, marginBottom: 16 }}>
        <div>Referente: <span style={{ color: 'var(--tinta)' }}>{merendero.referente || '—'}</span></div>
        <div>Tel: <span style={{ color: 'var(--tinta)' }}>{merendero.telefono || '—'}</span></div>
        <div>Capacidad: <span className="tabular" style={{ color: 'var(--tinta)' }}>{merendero.capacidad || '—'}</span> · Horarios: <span style={{ color: 'var(--tinta)' }}>{merendero.horarios || '—'}</span></div>
        <div>Acceso: <span style={{ color: 'var(--tinta)' }}>{merendero.email || '—'}</span></div>
      </div>
      <div style={{ display: 'flex', gap: 8 }}>
        <button className="btn-fantasma" style={{ padding: '6px 12px', minHeight: 'auto', fontSize: 14 }} onClick={() => setEditar(!editar)}>Editar</button>
        <button className="btn-fantasma" style={{ padding: '6px 12px', minHeight: 'auto', fontSize: 14 }} onClick={alternar}>{merendero.activo ? 'Desactivar' : 'Activar'}</button>
      </div>
      {editar && (
        <div style={{ marginTop: 16, borderTop: '1px solid var(--borde)', paddingTop: 16, display: 'flex', flexDirection: 'column', gap: 8 }}>
          <input className="campo" value={datos.nombre || ''} onChange={e => cambiar('nombre', e.target.value)} placeholder="Nombre" />
          <input className="campo" value={datos.direccion || ''} onChange={e => cambiar('direccion', e.target.value)} placeholder="Dirección" />
          <input className="campo" value={datos.referente || ''} onChange={e => cambiar('referente', e.target.value)} placeholder="Referente" />
          <input className="campo" value={datos.telefono || ''} onChange={e => cambiar('telefono', e.target.value)} placeholder="Teléfono" />
          <input className="campo" type="number" value={datos.capacidad || ''} onChange={e => cambiar('capacidad', e.target.value)} placeholder="Capacidad" />
          <input className="campo" value={datos.horarios || ''} onChange={e => cambiar('horarios', e.target.value)} placeholder="Horarios" />
          <button className="btn-verde" style={{ padding: '6px 12px', minHeight: 'auto', fontSize: 14, alignSelf: 'flex-start' }} onClick={guardar}>Guardar</button>
        </div>
      )}
    </div>
  )
}

export default function PanelMerenderos() {
  const [merenderos, setMerenderos] = useState([])
  const [crear, setCrear] = useState(false)
  const [nuevo, setNuevo] = useState({ nombre: '', referente: '', direccion: '', telefono: '', capacidad: '', horarios: '', email: '', password: '' })
  const [mensaje, setMensaje] = useState('')
  const [error, setError] = useState('')

  function cargar() {
    get('/merenderos').then(setMerenderos).catch(() => {})
  }

  useEffect(() => { cargar() }, [])

  function cambiar(campo, valor) {
    setNuevo({ ...nuevo, [campo]: valor })
  }

  async function guardarNuevo(e) {
    e.preventDefault()
    setError('')
    try {
      await post('/merenderos', nuevo)
      setMensaje('Merendero "' + nuevo.nombre + '" creado. Ya puede ingresar con su email.')
      setNuevo({ nombre: '', referente: '', direccion: '', telefono: '', capacidad: '', horarios: '', email: '', password: '' })
      setCrear(false)
      cargar()
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <PanelLayout titulo="Merenderos" seccion="merenderos">
      <p className="medida" style={{ color: 'var(--tinta-suave)', marginBottom: 24 }}>
        La gestión de la red. Este es el único lugar donde nacen los merenderos, y solo el administrador puede hacerlo. Al crearlos, se les genera su cuenta para que carguen sus necesidades.
      </p>
      {mensaje && <div className="alerta alerta-ok">{mensaje}</div>}

      <div className="tarjeta tarjeta-pad" style={{ marginBottom: 32 }}>
        <button className="btn-fantasma" onClick={() => setCrear(!crear)}>+ Crear nuevo merendero</button>
        {crear && (
          <form onSubmit={guardarNuevo} className="grid grid-2" style={{ marginTop: 20 }}>
            {error && <div className="alerta alerta-error" style={{ gridColumn: '1 / -1' }}>{error}</div>}
            <div><label className="label-campo">Nombre del merendero</label><input className="campo" value={nuevo.nombre} onChange={e => cambiar('nombre', e.target.value)} required /></div>
            <div><label className="label-campo">Referente</label><input className="campo" value={nuevo.referente} onChange={e => cambiar('referente', e.target.value)} /></div>
            <div><label className="label-campo">Dirección</label><input className="campo" value={nuevo.direccion} onChange={e => cambiar('direccion', e.target.value)} /></div>
            <div><label className="label-campo">Teléfono</label><input className="campo" value={nuevo.telefono} onChange={e => cambiar('telefono', e.target.value)} /></div>
            <div><label className="label-campo">Capacidad (personas)</label><input className="campo" type="number" value={nuevo.capacidad} onChange={e => cambiar('capacidad', e.target.value)} /></div>
            <div><label className="label-campo">Horarios</label><input className="campo" value={nuevo.horarios} onChange={e => cambiar('horarios', e.target.value)} placeholder="Lun a Vie 16-18h" /></div>
            <div><label className="label-campo">Email (para ingresar)</label><input className="campo" type="email" value={nuevo.email} onChange={e => cambiar('email', e.target.value)} required /></div>
            <div><label className="label-campo">Contraseña</label><input className="campo" type="password" value={nuevo.password} onChange={e => cambiar('password', e.target.value)} required minLength={6} /></div>
            <div style={{ gridColumn: '1 / -1' }}><button className="btn-donar">Crear merendero</button></div>
          </form>
        )}
      </div>

      <div className="grid grid-2">
        {merenderos.map(m => (
          <TarjetaMerendero key={m.id} merendero={m} onCambio={cargar} />
        ))}
      </div>
    </PanelLayout>
  )
}
