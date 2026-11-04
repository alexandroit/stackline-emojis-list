# Stackline changelog

## 1.0.4 - 2026-11-04

- Publish the Stackline README with the correct package version.
- Preserve the original upstream README separately; runtime files remain unchanged.
- Verify the README inside the exact npm artifact before publication.

## 1.0.3 - 2026-11-04

- Remove obsolete HTTP/logging/bundling/lint dependencies from the generator, use native fetch and tests, and pin the maintained HTML parser.
- Keep the published emoji data unchanged and use patched Node.js for release verification.

## 1.0.0

- Adopt maintenance from `emojis-list@3.0.0` with preserved source history and license.
- Maintenance adoption with preserved runtime payload. No runtime defect correction is claimed. Reports remain visible for subsequent targeted reproduction.
- Add tested, reproducible artifact publication with npm provenance and immutable release evidence.
