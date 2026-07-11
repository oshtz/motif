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

User-facing assets are `Motif-*-Setup.exe`, `Motif-*-Portable.exe`, and the architecture-specific macOS DMGs. `latest.yml`, `latest-mac.yml`, zip files, blockmaps, and SHA-256 manifests support updates and verification.

The installed Windows app uses the normal Electron updater. The portable executable uses the latest GitHub Release, verifies its executable against `SHA256SUMS-windows.txt`, replaces itself, and rolls back if replacement fails. Both use the same per-user Electron data directory.

## Required secrets

Tagged Windows releases require valid Authenticode credentials:

| Secret | Purpose |
| --- | --- |
| `WINDOWS_CODESIGN_CERTIFICATE` | Base64-encoded Windows code-signing certificate |
| `WINDOWS_CODESIGN_PASSWORD` | Certificate password |

macOS builds require signing and notarization credentials:

| Secret | Purpose |
| --- | --- |
| `MAC_CSC_LINK` | Base64-encoded Developer ID Application `.p12` |
| `MAC_CSC_PASSWORD` | Certificate password |
| `MAC_CSC_KEY_PASSWORD` | Optional alias for `MAC_CSC_PASSWORD` |
| `APPLE_ID` | Notarization Apple ID |
| `APPLE_APP_SPECIFIC_PASSWORD` | Apple app-specific password |
| `APPLE_TEAM_ID` | Apple Developer Team ID |

The workflow verifies Authenticode on every tagged Windows executable and verifies macOS code signatures, Gatekeeper assessment, notarization staples, updater metadata, and final checksums before publication.

## Release procedure

1. Set the same new version in all workspace package files and regenerate `package-lock.json` with `npm install --package-lock-only`.
2. Run the local checks above and create tag `v<version>`.
3. Push the tag. Do not create a release manually.
4. Confirm installer, portable, unpacked app, app bundle, and DMG smoke jobs pass with isolated user-data directories.
5. Confirm the release contains both checksum manifests and both updater metadata files.
6. Install the previous public version, update to the new version, restart, and confirm the version plus existing projects, settings, and provider credentials remain available.

The last upgrade check requires real previously published artifacts and remains a manual release gate.
