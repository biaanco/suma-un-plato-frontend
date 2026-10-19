import { useEffect, useState } from 'react'
import { get, post } from '../api'
import { usuarioActual } from '../auth'
import { cant, fechaHora } from '../format'
import PanelLayout from '../components/PanelLayout'
import Icono from '../components/Icono'

function TarjetaDonacion({ donacion, usuarioId, onConfirmado }) {
  const [items, setItems] = useState(
    donacion.items.map(it => ({ ...it, cantidadReal: it.cantidad, vencimiento: '' }))
  )
  const [cargando, setCargando] = useState(false)
  const [error, setError] = useState('')

  function cambiar(indice, campo, valor) {
    const copia = items.map((it, i) => i === indice ? { ...it, [campo]: valor } : it)
    setItems(copia)
  }

  async function confirmar() {
    for (const it of items) {
      if (it.categoria === 'perecedero' && !it.vencimiento) {
        setError('Cargá el vencimiento de los perecederos.')
        return
      }
    }
    setError('')
    setCargando(true)
    try {
      await post('/panel/revisar/confirmar', {
        donacionId: donacion.id,
        usuarioId,
        items: items.map(it => ({ alimentoId: it.alimentoId, cantidad: Number(it.cantidadReal), vencimiento: it.vencimiento }))
      })
      onConfirmado(donacion.id)
    } catch (err) {
      setError(err.message)
      setCargando(false)
    }
  }

  return (
    <details className="tarjeta" open>
      <summary style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 12, padding: 20, cursor: 'pointer', listStyle: 'none' }}>
        <span className="icono-circulo" style={{ width: 40, height: 40, fontWeight: 700 }}>#{donacion.id}</span>
        <div style={{ flex: 1,
