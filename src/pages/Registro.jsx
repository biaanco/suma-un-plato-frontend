import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { post } from '../api'
import { guardarUsuario } from '../auth'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Registro() {
  const navigate = useNavigate()
  const [datos, setDatos] = useState({
    nombre: '',
    apellido: '',
    dni: '',
    email: '',
    telefono: '',
    password: '',
    tipoDonante: 'persona'
  })
  const [error, setError] = useState('')
  const [cargando, setCargando] = useState(false)

  function cambiar(campo, valor) {
    setDatos({ ...datos, [campo]: valor })
  }

  // El DNI solo admite números (se descartan puntos, espacios, letras)
  function cambiarDni(valor) {
    cambiar('dni', valor.replace(/\D/g, '').slice(0, 8))
  }

  async function enviar(e) {
    e.preventDefault()
    setError('')

    if (datos.dni.length < 7 || datos.dni.length > 8) {
      setError('El DNI debe tener 7 u 8 números.')
      return
    }

    setCargando(true)
    try {
      const usuario = await post('/auth/registro', datos)
      guardarUsuario(usuario)
      navigate('/donar')
    } catch (err) {
      setError(err.message)
      setCargando(false)
    }
  }

  const tipos = [{ v: 'persona', t: 'Persona' }, { v: 'comercio', t: 'Comercio' }, { v: 'organizacion', t: 'Organización' }]

  return (
    <>
      <Header />
      <main className="contenedor" style={{ padding: '56px 16px' }}>
        <div style={{ maxWidth: 440, margin: '0 auto' }}>
          <div className="tarjeta tarjeta-pad">
            <h1 className="font-display" style={{ fontSize: 28, margin: '0 0 4px' }}>Sumate como donante</h1>
            <p style={{ color: 'var(--tinta-suave)', marginTop: 0 }}>Sumate para ayudar a los merenderos.</p>
            {error && <div className="alerta alerta-error">{error}</div>}
            <form onSubmit={enviar}>
              <div style={{ marginBottom: 16 }}>
                <label className="label-campo">Nombre</label>
                <input className="campo" value={datos.nombre} onChange={e => cambiar('nombre', e.target.value)} required />
              </div>
              <div style={{ marginBottom: 16 }}>
                <label className="label-campo">Apellido</label>
                <input className="campo" value={datos.apellido} onChange={e => cambiar('apellido', e.target.value)} required />
              </div>
              <div style={{ marginBottom: 16 }}>
                <label className="label-campo">DNI</label>
                <input
                  className="campo"
                  inputMode="numeric"
                  placeholder="Sin puntos, ej: 30123456"
                  value={datos.dni}
                  onChange={e => cambiarDni(e.target.value)}
                  required
                />
              </div>
              <div style={{ marginBottom: 16 }}>
                <label className="label-campo">Email</label>
                <input className="campo" type="email" value={datos.email} onChange={e => cambiar('email', e.target.value)} required />
              </div>
              <div style={{ marginBottom: 16 }}>
                <label className="label-campo">Teléfono</label>
                <input className="campo" value={datos.telefono} onChange={e => cambiar('telefono', e.target.value)} />
              </div>
              <div style={{ marginBottom: 16 }}>
                <label className="label-campo">Contraseña</label>
                <input className="campo" type="password" value={datos.password} onChange={e => cambiar('password', e.target.value)} required minLength={6} />
              </div>
              <div style={{ marginBottom: 16 }}>
                <span className="label-campo">Dono como</span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {tipos.map(op => (
                    <label key={op.v} className="pildora">
                      <input type="radio" name="tipo" checked={datos.tipoDonante === op.v} onChange={() => cambiar('tipoDonante', op.v)} />
                      <span>{op.t}</span>
                    </label>
                  ))}
                </div>
              </div>
              <button type="submit" className="btn-donar ancho" disabled={cargando}>{cargando ? 'Creando cuenta…' : 'Crear cuenta y donar'}</button>
            </form>
            <p style={{ fontSize: 14, color: 'var(--tinta-suave)', textAlign: 'center', marginTop: 20 }}>
              ¿Ya tenés cuenta? <Link to="/login" style={{ color: 'var(--naranja)', fontWeight: 600 }}>Ingresá</Link>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}