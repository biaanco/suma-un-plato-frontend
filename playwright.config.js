import { defineConfig, devices } from '@playwright/test'

// URL del front a probar. Por defecto, el entorno local (npm run dev).
// Para probar la app publicada: BASE_URL=https://tu-app.vercel.app
const URL_APP = process.env.BASE_URL || 'http://localhost:5173'

export default defineConfig({
  testDir: './tests',
  // Render (plan gratis) puede tardar ~1 minuto en "despertar", por eso los tiempos largos
  timeout: 120_000,
  expect: { timeout: 60_000 },
  retries: 1,
  reporter: [['list'], ['html', { open: 'never' }]],
  use: {
    baseURL: URL_APP,
    screenshot: 'on',
    trace: 'retain-on-failure',
    video: 'retain-on-failure'
  },
  // En local, Playwright levanta el front solo (o reutiliza el que ya tengas abierto).
  // El backend tiene que estar corriendo en http://localhost:8080
  webServer: process.env.BASE_URL ? undefined : {
    command: 'npm run dev',
    url: 'http://localhost:5173',
    reuseExistingServer: true,
    timeout: 60_000
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } }
  ]
})
