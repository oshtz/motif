import fs from "fs";
import path from "path";
import { _electron as electron } from "playwright";

process.env.MOTIF_DISABLE_UPDATER ??= "1";

function findExecutable() {
  const candidates = process.platform === "darwin"
    ? [
        "release/mac-arm64/Motif.app/Contents/MacOS/Motif",
        "release/mac/Motif.app/Contents/MacOS/Motif",
      ]
    : process.platform === "win32"
      ? ["release/win-unpacked/Motif.exe"]
      : ["release/linux-unpacked/motif"];

  const executablePath = candidates
    .map((candidate) => path.resolve(candidate))
    .find((candidate) => fs.existsSync(candidate));

  if (!executablePath) {
    throw new Error(`No packaged Motif executable found for ${process.platform}`);
  }

  return executablePath;
}

const app = await electron.launch({ executablePath: findExecutable() });
let appClosed = false;

try {
  const page = await app.firstWindow({ timeout: 30000 });
  await page.waitForSelector('[data-testid="desktop-titlebar"]', { timeout: 30000 });
  const isMac = process.platform === "darwin";

  const restoreAndFocus = async () => {
    await app.evaluate(({ BrowserWindow }) => {
      const window = BrowserWindow.getAllWindows()[0];
      window?.restore();
      window?.show();
      window?.focus();
    });
    await page.bringToFront().catch(() => {});
    await page.waitForTimeout(500);
  };

  const controls = await Promise.all([
    page.locator('[data-testid="window-minimize"]').count(),
    page.locator('[data-testid="window-maximize"]').count(),
    page.locator('[data-testid="window-close"]').count(),
  ]);

  await page.locator('[data-testid="window-minimize"]').click();
  await page.waitForTimeout(300);
  const minimized = await app.evaluate(
    ({ BrowserWindow }) => BrowserWindow.getAllWindows()[0]?.isMinimized() ?? false
  );
  await restoreAndFocus();

  await page.locator('[data-testid="window-maximize"]').click({ force: true });
  await page.waitForTimeout(500);
  const maximized = await app.evaluate(
    ({ BrowserWindow }) => BrowserWindow.getAllWindows()[0]?.isMaximized() ?? false
  );

  let restored = true;
  if (!isMac || maximized) {
    await page.locator('[data-testid="window-maximize"]').click({ force: true });
    await page.waitForTimeout(500);
    restored = await app.evaluate(
      ({ BrowserWindow }) => !(BrowserWindow.getAllWindows()[0]?.isMaximized() ?? true)
    );
  }
  await restoreAndFocus();

  const appClosePromise = app.waitForEvent("close", { timeout: 5000 })
    .then(() => true)
    .catch(() => false);
  const windowClosePromise = page.waitForEvent("close", { timeout: 5000 })
    .then(() => true)
    .catch(() => false);
  await page.locator('[data-testid="window-close"]').click({ force: true });
  const [appClosedByButton, windowClosedByButton] = await Promise.all([
    appClosePromise,
    windowClosePromise,
  ]);
  const remainingWindows = appClosedByButton
    ? 0
    : await app.evaluate(({ BrowserWindow }) => BrowserWindow.getAllWindows().length)
      .catch(() => 0);
  const closed = appClosedByButton || windowClosedByButton || remainingWindows === 0;
  appClosed = appClosedByButton;

  const result = {
    controls,
    minimized,
    maximized,
    restored,
    closed,
    appClosedByButton,
    windowClosedByButton,
    remainingWindows,
  };
  console.log(JSON.stringify(result, null, 2));

  const failed = controls.some((count) => count !== 1) ||
    !minimized ||
    (!isMac && (!maximized || !restored)) ||
    !closed;

  if (failed) {
    process.exitCode = 1;
  }
} finally {
  if (!appClosed) {
    await app.close().catch(() => {});
  }
}
