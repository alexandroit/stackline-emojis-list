# @stackline/emojis-list

> Complete list of standard emojis.

[![npm version](https://img.shields.io/npm/v/@stackline/emojis-list.svg?style=flat-square)](https://www.npmjs.com/package/@stackline/emojis-list)
[![license](https://img.shields.io/npm/l/@stackline/emojis-list.svg?style=flat-square)](https://github.com/alexandroit/stackline-emojis-list)
[![GitHub repository](https://img.shields.io/badge/GitHub-repository-181717?style=flat-square&logo=github)](https://github.com/alexandroit/stackline-emojis-list)
[![Docs](https://img.shields.io/badge/docs-alexandro.net-0f766e?style=flat-square)](https://alexandro.net/docs/vanilla/emojis-list/)
[![Reddit community](https://img.shields.io/badge/community-r%2FStackline-ff4500?style=flat-square&logo=reddit&logoColor=white)](https://www.reddit.com/r/Stackline/)

**[Documentation](https://alexandro.net/docs/vanilla/emojis-list/)** | **[npm](https://www.npmjs.com/package/@stackline/emojis-list)** | **[Issues](https://github.com/alexandroit/stackline-emojis-list/issues)** | **[Repository](https://github.com/alexandroit/stackline-emojis-list)**

**Current package version:** `1.0.2`

---

## Why this package?

`@stackline/emojis-list` is the Stackline-maintained distribution of `emojis-list@3.0.0`. It is an independent continuation of [emojis-list](https://github.com/kikobeats/emojis-list); original authors and licenses remain credited below.

## Compatibility

| Item | Value |
| :--- | :--- |
| Package | `@stackline/emojis-list@1.0.2` |
| API target | `emojis-list@3.0.0` |
| Supported Node.js | `>= 4` |
| License | `MIT` |
| Main entry | `./index.js` |
| Runtime dependencies | `none` |

## Installation

```bash
npm install @stackline/emojis-list
```

Preserve existing imports and plugin resolution with an npm alias:

```bash
npm install emojis-list@npm:@stackline/emojis-list
```

## Usage and API reference

> Complete list of standard Unicode Hex Character Code that represent emojis.

**NOTE**: The lists is related with the Unicode Hex Character Code. The representation of the emoji depend of the system. Will be possible that the system don't have all the representations.

## Install

```bash
npm install @stackline/emojis-list --save
```

## Usage

```js
const emojis = require('@stackline/emojis-list')
console.log(emojis[0])
// => 🀄
```

## Related

* [emojis-unicode](https://github.com/Kikobeats/emojis-unicode) – Complete list of standard Unicode codes that represent emojis.
* [emojis-keywords](https://github.com/Kikobeats/emojis-keywords) – Complete list of am emoji shortcuts.
* [is-emoji-keyword](https://github.com/Kikobeats/is-emoji-keyword) – Check if a word is a emoji shortcut.
* [is-standard-emoji](https://github.com/kikobeats/is-standard-emoji) – Simply way to check if a emoji is a standard emoji.
* [trim-emoji](https://github.com/Kikobeats/trim-emoji) – Deletes ':' from the begin and the end of an emoji shortcut.

## License

MIT © [Kiko Beats](http://www.kikobeats.com)

## Credits and original authors

- Original project: [emojis-list](https://github.com/kikobeats/emojis-list).
- Kiko Beats.
- Copyright © 2015 Kiko Beats.
- Stackline maintenance: [Alexandro Paixao Marques](https://www.linkedin.com/in/aleinfo/) and [Stackline contributors](https://github.com/alexandroit).

Original copyright, license notices and contributor acknowledgements remain part of this distribution. Stackline maintenance does not replace authorship of the original work.

## Community and Links

- [Stackline website](https://alexandro.net/)
- [GitHub projects](https://github.com/alexandroit)
- [npm packages](https://www.npmjs.com/~alex360qc)
- [Reddit community — r/Stackline](https://www.reddit.com/r/Stackline/)
- [Maintainer LinkedIn](https://www.linkedin.com/in/aleinfo/)

Use this repository's issue tracker for reproducible bugs and feature requests. Join r/Stackline for examples, usage questions and release discussions.
