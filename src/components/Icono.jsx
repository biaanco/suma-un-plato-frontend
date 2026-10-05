const PATHS = {
  rice: <><path d="M4 12c0-4 3-7 8-7s8 3 8 7-3 7-8 7-8-3-8-7z" /><path d="M9 10h6M9 13h6" /></>,
  pasta: <><path d="M6 4v16M10 4v16M14 4v16M18 4v16" /></>,
  flour: <><path d="M7 8h10l-1 11H8L7 8z" /><path d="M9 8V5h6v3" /></>,
  oil: <><path d="M9 3h6v3l2 3v10a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V9l2-3V3z" /></>,
  sugar: <><rect x="5" y="7" width="14" height="12" rx="2" /><path d="M9 7V5h6v2" /></>,
  leaf: <><path d="M5 19c8 2 14-4 14-14C9 5 3 11 5 19z" /><path d="M5 19c3-6 7-9 11-11" /></>,
  bean: <><path d="M8 4c6 0 10 4 10 10 0 3-2 6-6 6-5 0-8-4-8-9 0-4 2-7 4-7z" /></>,
  can: <><rect x="7" y="6" width="10" height="14" rx="2" /><path d="M7 9h10" /></>,
  milk: <><path d="M8 3h8v3l1 3v10a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V9l1-3V3z" /><path d="M8 11h8" /></>,
  carrot: <><path d="M4 20l7-11 4 4-11 7z" /><path d="M14 9c1-3 3-4 5-4 0 2-1 4-4 5" /></>,
  apple: <><path d="M12 8c-3-3-8-1-8 4 0 4 3 8 5 8 1 0 2-1 3-1s2 1 3 1c2 0 5-4 5-8 0-5-5-7-8-4z" /><path d="M12 8V4" /></>,
  bread: <><path d="M5 11a4 4 0 0 1 4-4h6a4 4 0 0 1 0 8v4H5v-8z" /></>,
  egg: <><path d="M12 3c4 0 6 6 6 10a6 6 0 0 1-12 0c0-4 2-10 6-10z" /></>,
  cheese: <><path d="M4 12l14-6v10H4v-4z" /><circle cx="9" cy="14" r="1" /><circle cx="14" cy="13" r="1" /></>,
  bag: <><path d="M6 8h12l-1 12H7L6 8z" /><path d="M9 8a3 3 0 0 1 6 0" /></>,
  cuchara: <><ellipse cx="12" cy="6" rx="4" ry="5" /><path d="M12 11v9" /></>,

  // Nuevos
  comida: <><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" /><path d="M7 2v20" /><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" /></>,
  camion: <><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" /><path d="M15 18H9" /><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" /><circle cx="17" cy="18" r="2" /><circle cx="7" cy="18" r="2" /></>,
  entrega: <><path d="m16 16 2 2 4-4" /><path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14" /><path d="m7.5 4.27 9 5.15" /><polyline points="3.29 7 12 12 20.71 7" /><line x1="12" x2="12" y1="22" y2="12" /></>
}

export default function Icono({ nombre, size = 24 }) {
  const contenido = PATHS[nombre] || PATHS.bag
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
         strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      {contenido}
    </svg>
  )
}