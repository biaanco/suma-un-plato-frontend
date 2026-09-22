const BASE = 'http://localhost:8080/api'

async function pedir(ruta, opciones) {
  const respuesta = await fetch(BASE + ruta, {
    headers: { 'Content-Type': 'application/json' },
    ...opciones
  })
  let datos = null
  const texto = await respuesta.text()
  if (texto) {
    datos = JSON.parse(texto)
  }
  if (!respuesta.ok) {
    const mensaje = datos && datos.error ? datos.error : 'Ocurrió un error'
    throw new Error(mensaje)
  }
  return datos
}

export function get(ruta) {
  return pedir(ruta, { method: 'GET' })
}

export function post(ruta, cuerpo) {
  return pedir(ruta, { method: 'POST', body: JSON.stringify(cuerpo) })
}

export function put(ruta, cuerpo) {
  return pedir(ruta, { method: 'PUT', body: JSON.stringify(cuerpo) })
}

export function del(ruta) {
  return pedir(ruta, { method: 'DELETE' })
}
