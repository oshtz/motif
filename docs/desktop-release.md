# Desktop Release

Motif packages the existing web and Express application in Electron for Windows and macOS. The packaged API binds an ephemeral port on `127.0.0.1`, serves the built UI from the same origin, and stores `motif.db` in Electron's per-user data directory.

## Local checks

Use Node.js 22 and install from the single root lockfile.

```bash
npm ci
npm run check:desktop-security
npm run check:release
npm test
npm run desktop:pack
npm run desktop:smoke
```

Desktop commands force-rebuild `better-sqlite3` for Electron before packaging. Run `npm rebuild better-sqlite3` before returning to Node-only tests in the same working tree; CI uses separate clean jobs.

Platform builds never publish directly:

```bash
npm run desktop:dist:win -- --publish never
npm run desktop:dist:mac -- --publish never
```

## Release contract

- `package.json`, `api/package.json`, `web/package.json`, and `package-lock.json` must have the same version.
- A publishing tag must be exactly `v<package version>`.
- Existing tags and releases are immutable. Fix forward with a new version.
- Windows and macOS jobs upload workflow artifacts only. One final job verifies both sets and publishes once.
- Manual dispatch builds and verifies artifacts but does not publish a GitHub Release.

User-facing assets are `Motif-*-Portable.exe` and `Motif-*-universal.dmg`. `latest-mac.yml`, the universal macOS zip, and `SHA256SUMS-windows.txt` support updates. GitHub also adds its two source archives.

The portable executable uses the latest GitHub Release, verifies its executable against `SHA256SUMS-windows.txt`, replaces itself, and rolls back if replacement fails. Windows installer builds ended after v0.2.0; installed users can switch to the portable executable without moving their per-user Motif data.

## Required secrets

The Windows portable executable is intentionally published without Authenticode signing and may show SmartScreen warnings. Its SHA-256 manifest is verified before publication.

macOS builds require signing and notarization credentials:

| Secret | Purpose |
| --- | --- |
| `MAC_CSC_LINK` | Base64-encoded Developer ID Application `.p12` |
| `MAC_CSC_PASSWORD` | Certificate password |
| `MAC_CSC_KEY_PASSWORD` | Optional alias for `MAC_CSC_PASSWORD` |
| `APPLE_ID` | Notarization Apple ID |
| `APPLE_APP_SPECIFIC_PASSWORD` | Apple app-specific password |
| `APPLE_TEAM_ID` | Apple Developer Team ID |

The workflow verifies the Windows portable executable and checksum, plus macOS universal architecture, code signatures, Gatekeeper assessment, notarization staples, updater metadata, and internal checksums before publication.

## Release procedure

1. Set the same new version in all workspace package files and regenerate `package-lock.json` with `npm install --package-lock-only`.
2. Run the local checks above and create tag `v<version>`.
3. Push the tag. Do not create a release manually.
4. Confirm portable, unpacked app, universal app bundle, and universal DMG smoke jobs pass with isolated user-data directories on Windows, Apple Silicon, and Intel.
5. Confirm the release has exactly five uploaded assets: portable EXE, Windows checksum, universal DMG, universal zip, and `latest-mac.yml`.
6. Install the previous public version, update to the new version, restart, and confirm the version plus existing projects, settings, and provider credentials remain available.

The last upgrade check requires real previously published artifacts and remains a manual release gate.
