import { test, expect } from '@playwright/test'

test('ruta protegida redirige a login y el admin puede ingresar al panel', async ({ page }) => {
  await test.step('Sin sesión, /panel redirige a /login', async () => {
    await page.goto('/panel')
    await expect(page).toHaveURL(/\/login$/)
    await expect(page.getByRole('heading', { name: 'Ingresar' })).toBeVisible()
  })

  await test.step('Login con usuario admin', async () => {
    await page.fill('#email', 'admin@sumaunplato.org')
    await page.fill('#password', 'admin123')
    await page.click('button[type=submit]')
  })

  await test.step('Entra al panel protegido', async () => {
    await expect(page).toHaveURL(/\/panel$/)
    await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible()
  })
})

test('login fallido muestra error y un donante no puede entrar al panel', async ({ page }) => {
  await test.step('Contraseña incorrecta muestra mensaje de error', async () => {
    await page.goto('/login')
    await page.fill('#email', 'admin@sumaunplato.org')
    await page.fill('#password', 'claveIncorrecta')
    await page.click('button[type=submit]')
    await expect(page.locator('.alerta-error')).toContainText('incorrectos')
    await expect(page).toHaveURL(/\/login$/)
  })

  await test.step('Donante logueado que intenta abrir /panel vuelve a /login', async () => {
    await page.fill('#email', 'maria@example.com')
    await page.fill('#password', 'maria123')
    await page.click('button[type=submit]')
    await expect(page).toHaveURL(/\/perfil$/)
    await page.goto('/panel')
    await expect(page).toHaveURL(/\/login$/)
  })
})
