# Interactive Desktop Testing

Automated smoke tests launch packaged Electron executables twice with an isolated user-data directory. They verify the app version, loopback same-origin URL, absence of token-bearing query parameters, preload bridge, local database creation, persistence across restart, and window controls.

Before a release, test each distributed format on its target OS:

1. Run the Windows portable executable or mount the universal macOS DMG in a clean user account or VM.
2. Launch Motif and configure a disposable provider credential.
3. Create a project and generation, quit, reopen, and confirm both persist.
4. Exercise minimize, maximize/restore, close, an external HTTPS link, and a blocked non-web navigation attempt.
5. Confirm the expected unsigned Windows status and checksum metadata, or macOS Gatekeeper/notarization status.
6. Upgrade from the previous public version and confirm the displayed version, projects, settings, and credential availability.
7. Repeat the portable Windows check from a writable folder and confirm self-update rollback leaves the prior executable usable after a forced replacement failure.

Browser Playwright checks remain useful for web behavior, but they do not replace packaged Electron, DMG, signing, notarization, or upgrade proof.
