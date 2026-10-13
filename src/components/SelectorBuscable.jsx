import { useState, useRef, useEffect } from 'react'

// Quita tildes y pasa a minúsculas para comparar
const normalizar = s => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()

export default function SelectorBuscable({ opciones, valor, onChange, placeholder = 'Elegí del catálogo…' }) {
  const [abierto, setAbierto] = useState(false)
  const [texto, setTexto] = useState('')
  const [resaltado, setResaltado] = useState(0)
  const caja = useRef(null)
  const buscador = useRef(null)
  const lista = useRef(null)

  const etiqueta = a => `${a.nombre} (${a.unidad})`
  const seleccionado = opciones.find(a => String(a.id) === String(valor))

  // Solo los que empiezan con lo escrito
  const t = normalizar(texto.trim())
  const filtradas = opciones.filter(a => normalizar(a.nombre).startsWith(t))

  // Cerrar al hacer clic afuera
  useEffect(() => {
    function fuera(e) { if (caja.current && !caja.current.contains(e.target)) setAbierto(false) }
    document.addEventListener('mousedown', fuera)
    return () => document.removeEventListener('mousedown', fuera)
  }, [])

  // Al abrir: limpiar búsqueda y poner el cursor en el buscador
  useEffect(() => {
    if (abierto) { setTexto(''); setResaltado(0); buscador.current?.focus() }
  }, [abierto])

  // Mantener visible la opción resaltada
  useEffect(() => {
    lista.current?.children[resaltado]?.scrollIntoView({ block: 'nearest' })
  }, [resaltado])

  function elegir(a) {
    onChange(String(a.id))
    setAbierto(false)
  }

  function teclas(e) {
    if (e.key === 'ArrowDown') { e.preventDefault(); setResaltado(r => Math.min(r + 1, filtradas.length - 1)) }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setResaltado(r => Math.max(r - 1, 0)) }
    else if (e.key === 'Enter') { e.preventDefault(); if (filtradas[resaltado]) elegir(filtradas[resaltado]) }
    else if (e.key === 'Escape') setAbierto(false)
  }

  return (
    <div ref={caja} style={{ position: 'relative' }}>
      {/* Parte cerrada: se ve como el select */}
      <button
        type="button"
        className="campo"
        onClick={() => setAbierto(!abierto)}
        style={{ width: '100%', textAlign: 'left', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', background: '#ffffff' }}
      >
        <span>{seleccionado ? etiqueta(seleccionado) : placeholder}</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 9l6 6 6-6" /></svg>
      </button>

      {/* Parte desplegada: buscador + lista filtrada */}
      {abierto && (
        <div style={{
          position: 'absolute', zIndex: 20, left: 0, right: 0, marginTop: 4,
          background: '#ffffff', border: '1px solid var(--borde)', borderRadius: 8,
          boxShadow: '0 6px 20px rgba(0,0,0,0.10)', overflow: 'hidden'
        }}>
          <div style={{ padding: 8, borderBottom: '1px solid var(--borde)' }}>
            <input
              ref={buscador}
              className="campo"
              value={texto}
              onChange={e => { setTexto(e.target.value); setResaltado(0) }}
              onKeyDown={teclas}
              placeholder="Escribí para buscar…"
              autoComplete="off"
            />
          </div>
          <ul ref={lista} style={{ listStyle: 'none', margin: 0, padding: 4, maxHeight: 280, overflowY: 'auto' }}>
            {filtradas.length === 0 && <li style={{ padding: 10, color: 'var(--tinta-suave)' }}>Sin coincidencias</li>}
            {filtradas.map((a, i) => (
              <li
                key={a.id}
                onMouseDown={() => elegir(a)}
                onMouseEnter={() => setResaltado(i)}
                style={{
                  padding: '8px 12px', borderRadius: 6, cursor: 'pointer',
                  background: i === resaltado ? '#1d64d8' : 'transparent',
                  color: i === resaltado ? '#ffffff' : 'inherit'
                }}
              >
                {etiqueta(a)}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
