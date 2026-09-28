import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { usuarioActual, cerrarSesion, destinoPorRol } from '../auth'

export default function Header() {
  const usuario = usuarioActual()
  const navigate = useNavigate()
  const [abierto, setAbierto] = useState(false)

  function salir() {
    cerrarSesion()
    navigate('/')
  }

  const destinoDonar = usuario ? '/donar' : '/registro'

  return (
    <header className="header">
      <div className="contenedor header-inner">
        <Link to="/" className="logo">
          <img src="/logo.jpg" alt="Suma un plato Fundación" />
        </Link>

        <nav className="nav">
          <Link to="/#como">Cómo funciona</Link>
          <Link to="/#necesidades">Necesidades de hoy</Link>
          {usuario ? (
            <>
              <Link to={destinoPorRol(usuario.rol)}>Mi espacio</Link>
              <button className="btn-fantasma" style={{ padding: '8px 16px', minHeight: 'auto' }} onClick={salir}>Salir</button>
            </>
          ) : (
            <Link to="/login">Ingresar</Link>
          )}
          <Link to={destinoDonar} className="btn-donar" style={{ padding: '10px 20px' }}>Quiero donar</Link>
        </nav>

        <div className="nav-mobile">
          <Link to={destinoDonar} className="btn-donar" style={{ padding: '8px 16px' }}>Donar</Link>
          <button className="icon-boton" aria-label="Abrir menú" onClick={() => setAbierto(!abierto)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
          </button>
        </div>
      </div>

      {abierto && (
        <div className="contenedor" style={{ paddingBottom: 12 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <Link to="/#como" onClick={() => setAbierto(false)}>Cómo funciona</Link>
            <Link to="/#necesidades" onClick={() => setAbierto(false)}>Necesidades de hoy</Link>
            {usuario ? (
              <>
                <Link to={destinoPorRol(usuario.rol)} onClick={() => setAbierto(false)}>Mi espacio</Link>
                <button className="btn-fantasma" onClick={salir}>Salir</button>
              </>
            ) : (
              <Link to="/login" onClick={() => setAbierto(false)}>Ingresar</Link>
            )}
          </div>
        </div>
      )}
    </header>
  )
}
