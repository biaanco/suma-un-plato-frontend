import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { post } from '../api'
import { guardarUsuario, destinoPorRol } from '../auth'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [cargando, setCargando] = useState(false)

  async function enviar(e) {
    e.preventDefault()
    setError('')
    setCargando(true)
    try {
      const usuario = await post('/auth/login', { email, password })
      guardarUsuario(usuario)
      navigate(destinoPorRol(usuario.rol))
    } catch (err) {
      setError(err.message)
      setCargando(false)
    }
  }

  return (
    <>
      <Header />
      <main className="contenedor" style={{ padding: '56px 16px' }}>
        <div style={{ maxWidth: 380, margin: '0 auto' }}>
          <div className="tarjeta tarjeta-pad">
            <h1 className="font-display" style={{ fontSize: 26, marginTop: 0 }}>Ingresar</h1>
            {error && <div className="alerta alerta-error">{error}</div>}
            <form onSubmit={enviar}>
              <div style={{ marginBottom: 16 }}>
                <label className="label-campo" htmlFor="email">Email</label>
                <input className="campo" id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} required />
              </div>
              <div style={{ marginBottom: 16 }}>
                <label className="label-campo" htmlFor="password">Contraseña</label>
                <input className="campo" id="password" type="password" value={password} onChange={e => setPassword(e.target.value)} required />
              </div>
              <button type="submit" className="btn-donar ancho" disabled={cargando}>{cargando ? 'Ingresando…' : 'Ingresar'}</button>
            </form>
            <p style={{ fontSize: 14, color: 'var(--tinta-suave)', textAlign: 'center', marginTop: 20 }}>
              ¿Sos donante nuevo? <Link to="/registro" style={{ color: 'var(--naranja)', fontWeight: 600 }}>Creá tu cuenta</Link>
            </p>
          </div>
          <div style={{ marginTop: 24, fontSize: 12, color: 'var(--tinta-suave)', textAlign: 'center', lineHeight: 1.8 }}>
            <p style={{ fontWeight: 600, margin: 0 }}>Cuentas de prueba</p>
            Admin: admin@sumaunplato.org / admin123<br />
            Donante: maria@example.com / maria123<br />
            Merendero: angelitos@example.com / merendero123
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
