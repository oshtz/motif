# Security and Privacy

Motif is local-first, not offline-only. Projects, generations, settings, and thumbnails stay in the local SQLite database by default. Generation requests, prompts, screenshots, and any referenced content are sent to the LLM or image provider selected in Settings. Local Ollama or LM Studio endpoints can keep that provider traffic on the device.

In the desktop app:

- the API listens only on an ephemeral `127.0.0.1` port;
- a random token created for each process is required for `/api` requests;
- the token is passed through the sandboxed preload bridge, not the page URL;
- provider credentials are encrypted with Electron `safeStorage` and kept outside SQLite;
- the renderer uses context isolation, Chromium sandboxing, a restrictive content security policy, blocked navigation, and no Node.js integration;
- only explicit `http:` and `https:` links may open in the system browser.

The standalone browser/API development mode does not have Electron's OS credential bridge and stores provider credentials in its local SQLite database. Treat that database as sensitive. Motif does not include telemetry code, but configured providers have their own logging and retention policies.

Report security issues privately to the maintainer rather than opening an issue containing credentials or private prompts.
