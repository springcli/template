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

  const project = path.join(temp, 'minimal')

  await springci(template, project, { force: true })

  expect(fs.existsSync(project)).toBe(true)
  expect(fs.existsSync(path.join(project, 'README.md'))).toBe(true)
})

  const project = path.join(temp, 'maximal')

  await springci(template, project, { force: true })

  expect(fs.existsSync(project)).toBe(true)
  expect(fs.existsSync(path.join(project, 'README.md'))).toBe(true)
})
