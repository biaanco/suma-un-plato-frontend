# Suma un Plato — Frontend

Aplicación web de **Suma un Plato**, una plataforma para gestionar donaciones de alimentos destinadas a comedores y merenderos de Laboulaye.

Desde acá los vecinos y comercios ven qué hace falta y registran sus donaciones, los merenderos cargan sus necesidades y el coordinador maneja el depósito y las entregas.

> Backend: [suma-un-plato-backend](https://github.com/biaanco/suma-un-plato-backend)

---

## Tecnologías

- **React 18**
- **Vite 5**
- **React Router 6**
- **Playwright** para los tests end-to-end
- Desplegado en **Vercel**

## Pantallas

### Públicas y donantes

| Ruta | Pantalla |
|---|---|
| `/` | Inicio: necesidades publicadas, urgencias y estadísticas |
| `/login` | Iniciar sesión |
| `/registro` | Crear una cuenta de donante |
| `/perfil` | Perfil del donante y notificaciones |
| `/donar` | Registrar una donación |
| `/donacion-confirmada/:id` | Comprobante de la donación |
| `/mis-donaciones` | Historial de donaciones del usuario |

### Merendero

| Ruta | Pantalla |
|---|---|
| `/merendero` | Planilla de necesidades (incluye pedir productos que no están en el catálogo con "Otros") y confirmación de entregas recibidas |

### Panel del coordinador (admin)

| Ruta | Pantalla |
|---|---|
| `/panel` | Dashboard |
| `/panel/revisar` | Revisar donaciones e ingresarlas al depósito |
| `/panel/stock` | Stock por alimento y lote, con ajustes |
| `/panel/planillas` | Necesidades cargadas por los merenderos |
| `/panel/sugeridos` | Productos sugeridos por merenderos para aprobar o unir |
| `/panel/publicar` | Publicar necesidades en la web y marcarlas como urgentes |
| `/panel/entrega` | Preparar entregas para cada merendero |
| `/panel/merenderos` | Alta y edición de merenderos |
| `/panel/historial` | Historial de movimientos del depósito |

Después del login, cada usuario va a su pantalla según el rol: `admin` → `/panel`, `merendero` → `/merendero`, donante → `/perfil`.

## Estructura del proyecto

```
src/
├── components/   # Header, Footer, PanelLayout, SelectorBuscable, Icono
├── pages/        # Una página por ruta
├── api.js        # Cliente HTTP: agrega el token JWT y maneja los errores
├── auth.js       # Sesión del usuario en localStorage y redirección por rol
├── format.js     # Formato de cantidades
├── App.jsx       # Definición de rutas
├── main.jsx      # Punto de entrada
└── styles.css    # Estilos globales
public/           # Logo, favicon e imagen principal
```

## Cómo correrlo en local

### Requisitos

- Node.js 18 o superior
- El [backend](https://github.com/biaanco/suma-un-plato-backend) corriendo en `http://localhost:8080`

### Instalación

```bash
npm install
npm run dev
```

La app queda en `http://localhost:5173`.

### Variables de entorno

| Variable | Descripción |
|---|---|
| `VITE_API_URL` | URL base de la API, por ej. `http://localhost:8080/api` |

En desarrollo se toma de `.env.development`. Si no está definida (como en el build de producción), se usa el backend desplegado en Render.

### Scripts

| Comando | Qué hace |
|---|---|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de producción en `dist/` |
| `npm run preview` | Sirve el build localmente |
| `npm run test:e2e` | Corre los tests de Playwright |
| `npm run test:e2e:ui` | Tests en modo interactivo |
| `npm run test:e2e:report` | Abre el último reporte HTML |

## Tests end-to-end

Los tests usan Playwright con Chromium. La primera vez hay que instalar el navegador:

```bash
npx playwright install chromium
```

En local, Playwright levanta el front solo (o reutiliza el que ya esté abierto). El backend tiene que estar corriendo.

```bash
npm run test:e2e
```

Para probar contra la app publicada:

```bash
BASE_URL=https://tu-app.vercel.app npm run test:e2e
```

Los tiempos de espera son largos a propósito: el backend en el plan gratis de Render puede tardar cerca de un minuto en despertar.

## Despliegue

El frontend se despliega en **Vercel** con `vite build`. El archivo `vercel.json` redirige todas las rutas a `index.html` para que React Router funcione al recargar o entrar directo a una URL.

Si el backend cambia de URL, hay que definir `VITE_API_URL` en las variables de entorno del proyecto en Vercel.
