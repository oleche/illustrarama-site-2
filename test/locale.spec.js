import { resolve } from 'path'
import { Nuxt, Builder } from 'nuxt'
import { JSDOM } from 'jsdom'

// We keep the nuxt and server instance
// So we can close them at the end of the test
let nuxt = null

describe('homepage', () => {
  beforeAll(async () => {
    const config = {
      dev: false,
      rootDir: resolve(__dirname, '..')
    }
    nuxt = new Nuxt(config)
    await new Builder(nuxt).build()
    await nuxt.server.listen(4000, 'localhost')
  }, 30000)

  test('/404 should display an error too', async () => {
    const context = {}
    const { html } = await nuxt.server.renderRoute('/404', context)
    expect(html).toContain('This page could not be found')
  })

  // Example of testing only generated html
  test('Route / exits and render HTML', async () => {
    const context = {}
    const { html } = await nuxt.server.renderRoute('/', context)
    expect(html).toContain('<title>Illustrarama | Source of illustration and design news | Página 1</title>')
  })

  // Example of testing via dom checking
  test('Route / exits and render HTML with CSS applied', async () => {
    const context = {}
    const { html } = await nuxt.server.renderRoute('/', context)
    const { window } = new JSDOM(html).window
    const element = window.document.querySelector('.title-brand')

    expect(element).not.toBe(null)
    expect(element.textContent).toContain('Illustrarama')
    expect(element.className).toContain('title-brand')
    expect(window.getComputedStyle(element).color).toBe('rgb(85, 85, 85)')
  })

  // Close server and ask nuxt to stop listening to file changes
  afterAll(async () => {
    await nuxt.close()
  })
})
