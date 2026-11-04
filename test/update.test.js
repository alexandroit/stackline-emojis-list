'use strict'

const assert = require('node:assert/strict')
const test = require('node:test')
const vm = require('node:vm')
const { generate } = require('../update.js')

test('generator preserves Unicode and quotes in valid CommonJS data', async () => {
  const source = await generate(async (url, options) => {
    assert.equal(new URL(url).protocol, 'https:')
    assert.ok(options.signal instanceof AbortSignal)
    return { ok: true, text: async () => '<ul><li>😀</li><li>&quot;✨</li></ul>' }
  })
  const context = { module: { exports: null } }
  vm.runInNewContext(source, context)
  assert.deepEqual(Array.from(context.module.exports), ['😀', '"✨'])
})

test('HTTP failures cannot become generated emoji data', async () => {
  await assert.rejects(generate(async () => ({ ok: false, status: 503 })), /HTTP 503/)
})

test('an empty or unexpected page cannot replace the emoji list', async () => {
  await assert.rejects(generate(async () => ({ ok: true, text: async () => '<p>Unavailable</p>' })), /no entries/)
})
