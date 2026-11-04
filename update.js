'use strict'

const cheerio = require('cheerio')
const fs = require('node:fs')
const url = 'https://twitter.github.io/twemoji/2/test/preview.html'

async function generate (request = fetch) {
  const response = await request(url, { signal: AbortSignal.timeout(30000) })
  if (!response.ok) throw new Error(`Emoji download returned HTTP ${response.status}`)
  const $ = cheerio.load(await response.text())
  const emojis = $('li').map(function () { return $(this).text() }).get()
  if (emojis.length === 0) throw new Error('Emoji download contained no entries')
  return 'module.exports = ' + JSON.stringify(emojis, null, 2) + '\n'
}

module.exports = { generate }

if (require.main === module) {
  generate().then(source => {
    fs.writeFileSync('index.js', source, 'utf8')
    console.info('Saved emoji data to index.js')
  }).catch(error => {
    console.error(error.message)
    process.exitCode = 1
  })
}
