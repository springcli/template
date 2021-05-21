const fs = require('fs')
const path = require('path')
const { default: springci, inject } = require('springci')

const template = path.join(__dirname, '..')
const temp = path.join(__dirname, '..', 'dist')

beforeAll(async () => {
  jest.spyOn(console, 'log').mockImplementation()
  jest.spyOn(console, 'clear').mockImplementation()
})

afterAll(async () => {
  jest.clearAllMocks()
  fs.rmdirSync(temp, { recursive: true })
})

// TODO: minimal template test
test('minimal', async () => {
  inject([
    'minimal',
    '0.1.0',
    'minimal template',
    'wannaspring',
    'https://github.com/wannaSpring',
    'wannaspring',
    [],
    false,
    'npm'
  ])

  const project = path.join(temp, 'minimal')

  await springci(template, project, { force: true })

  expect(fs.existsSync(project)).toBe(true)
  expect(fs.existsSync(path.join(project, 'README.md'))).toBe(true)
})

// TODO: maximal template test
test('maximal', async () => {
  inject([
    'maximal',
    '0.1.0',
    'maximal template',
    'wannaspring',
    'https://github.com/wannaSpring',
    'wannaspring',
    [
      'foo',
      'bar'
    ],
    false,
    'npm'
  ])

  const project = path.join(temp, 'maximal')

  await springci(template, project, { force: true })

  expect(fs.existsSync(project)).toBe(true)
  expect(fs.existsSync(path.join(project, 'README.md'))).toBe(true)
})
