const CLAVE = 'sap_usuario'

export function guardarUsuario(usuario) {
  localStorage.setItem(CLAVE, JSON.stringify(usuario))
}

export function usuarioActual() {
  const dato = localStorage.getItem(CLAVE)
  if (!dato) {
    return null
  }
  try {
    return JSON.parse(dato)
  } catch (e) {
    return null
  }
}

export function cerrarSesion() {
  localStorage.removeItem(CLAVE)
}

export function destinoPorRol(rol) {
  if (rol === 'admin') {
    return '/panel'
  }
  if (rol === 'merendero') {
    return '/merendero'
  }
  return '/perfil'
}
