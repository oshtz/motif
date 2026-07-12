const { app } = require("electron");
const { replacePortableExecutableAndRelaunch } = require("../../electron/portable-updater.cjs");

app.whenReady().then(async () => {
  await replacePortableExecutableAndRelaunch({
    app,
    currentExePath: process.env.MOTIF_RELAUNCH_CURRENT_EXE,
    newExePath: process.env.MOTIF_RELAUNCH_NEW_EXE,
    tempRoot: process.env.MOTIF_RELAUNCH_TEMP_ROOT,
  });
  app.quit();
}).catch((error) => {
  console.error(error);
  app.exit(1);
});
