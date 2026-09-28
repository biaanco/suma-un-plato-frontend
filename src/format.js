export function cant(n) {
  const numero = Number(n)
  if (Number.isNaN(numero)) {
    return '0'
  }
  return numero.toLocaleString('es-AR', { maximumFractionDigits: 2 })
}

export function fecha(valor) {
  if (!valor) {
    return '—'
  }
  const d = new Date(valor)
  if (Number.isNaN(d.getTime())) {
    return '—'
  }
  return d.toLocaleDateString('es-AR', { day: '2-digit', month: '2-digit', year: 'numeric' })
}

export function fechaHora(valor) {
  if (!valor) {
    return '—'
  }
  const d = new Date(valor)
  if (Number.isNaN(d.getTime())) {
    return '—'
  }
  return d.toLocaleString('es-AR', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' })
}

export function claseSemaforo(clase) {
  if (clase === 'verde') return 'punto punto-verde'
  if (clase === 'ambar') return 'punto punto-ambar'
  if (clase === 'rojo') return 'punto punto-rojo'
  return 'punto punto-neutro'
}

export function colorSemaforo(clase) {
  if (clase === 'verde') return '#777777'
  if (clase === 'ambar') return '#444444'
  if (clase === 'rojo') return '#000000'
  return '#555555'
}
