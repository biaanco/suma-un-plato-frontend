import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { usuarioActual, cerrarSesion } from '../auth'
import { get } from '../api'
import Icono from './Icono'

const MENU = [
  { clave: 'dashboard', ruta: '/panel', texto: 'Dashboard', icono: 'grid' },
  { clave: 'revisar', ruta: '/panel/revisar', texto: 'Donaciones por revisar', icono: 'inbox' },
  { clave: 'stock', ruta: '/panel/stock', texto: 'Stock del depósito', icono: 'box' },
  { clave: 'planillas', ruta: '/panel/planillas', texto: 'Planillas de necesidades', icono: 'clipboard' },
  { clave: 'publicar', ruta: '/panel/publicar', texto: 'Publicar necesidades', icono: 'megaphone' },
  { clave: 'entrega', ruta: '/panel/entrega', texto: 'Preparar entrega', icono: 'truck' },
  { clave: 'merenderos', ruta: '/panel/merenderos', texto: 'Merenderos', icono: 'users' },
  { clave: 'historial', ruta: '/panel/historial', texto: 'Historial y reportes', icono: 'history' }
]

const ICONOS = {
  grid: <><rect x="4" y="4" width="7" height="7" rx="1" /><rect x="13" y="4" width="7" height="7" rx="1" /><rect x="4" y="13" width="7" height="7" rx="1" /><rect x="13" y="13" width="7" height="7" rx="1" /></>,
  inbox: <><path d="M4 13l2-8h12l2 8v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-5z" /><path d="M4 13h4l1 2h6l1-2h4" /></>,
  box: <><path d="M4 8l8-4 8 4v8l-8 4-8-4V8z" /><path d="M4 8l8 4 8-4M12 12v8" /></>,
  clipboard: <><rect x="6" y="4" width="12" height="17" rx="2" /><path d="M9 4V3h6v1" /><path d="M9 10h6M9 14h4" /></>,
  megaphone: <><path d="M4 10v4l10 4V6L4 10z" /><path d="M14 8a4 4 0 0 1 0 8" /></>,
  truck: <><rect x="2" y="7" width="12" height="9" rx="1" /><path d="M14 10h4l3 3v3h-7" /><circle cx="7" cy="18" r="1.6" /><circle cx="17" cy="18" r="1.6" /></>,
  users: <><circle cx="9" cy="8" r="3" /><path d="M3 20a6 6 0 0 1 12 0" /><path d="M16 6a3 3 0 0 1 0 6M21 20a5 5 0 0 0-4-5" /></>,
  history: <><path d="M3 12a9 9 0 1 0 3-6.7L3 8" /><path d="M3 4v4h4M12 8v4l3 2" /></>
}

export default function PanelLayout({ titulo, seccion, children }) {
  const usuario = usuarioActual()
  const navigate = useNavigate()
  const [abierto, setAbierto] = useState(false)
  const [pendientes, setPendientes] = useState(0)

  useEffect(() => {
    if (!usuario || usuario.rol !== 'admin') {
      navigate('/login')
      return
    }
    get('/panel/revisar').then(lista => setPendientes(lista.length)).catch(() => {})
  }, [])

  if (!usuario || usuario.rol !== 'admin') {
    return null
  }

  function salir() {
    cerrarSesion()
    navigate('/')
  }

  return (
    <div className="panel">
      {abierto && <div className="sidebar-backdrop" onClick={() => setAbierto(false)}></div>}
      <aside className={abierto ? 'sidebar abierto' : 'sidebar'}>
        <div className="sidebar-top">
          <span style={{ color: 'var(--naranja)' }}><Icono nombre="cuchara" size={24} /></span>
          <span className="logo-nombre" style={{ color: '#fff' }}>Suma un plato</span>
        </div>
        <nav className="sidebar-nav">
          {MENU.map(item => (
            <Link key={item.clave} to={item.ruta} className={item.clave === seccion ? 'sidebar-link activo' : 'sidebar-link'} onClick={() => setAbierto(false)}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">{ICONOS[item.icono]}</svg>
              <span>{item.texto}</span>
              {item.clave === 'revisar' && pendientes > 0 && <span className="sidebar-badge">{pendientes}</span>}
            </Link>
          ))}
        </nav>
        <div className="sidebar-bottom">
          <Link to="/" className="sidebar-link">Ver sitio público</Link>
          <button className="sidebar-link" style={{ width: '100%', textAlign: 'left', background: 'none', border: 'none' }} onClick={salir}>Cerrar sesión</button>
        </div>
      </aside>

      <div className="panel-main">
        <div className="panel-top">
          <button className="icon-boton" style={{ display: 'inline-flex' }} aria-label="Abrir menú" onClick={() => setAbierto(true)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
          </button>
          <h1>{titulo}</h1>
          <span style={{ marginLeft: 'auto', color: 'var(--tinta-suave)', fontSize: 14 }}>Hola, {usuario.nombre}</span>
        </div>
        <main className="panel-contenido">{children}</main>
      </div>
    </div>
  )
}
