const { contextBridge, ipcRenderer } = require("electron");

if (process.isMainFrame) {
  const sessionToken = ipcRenderer.sendSync("motif-desktop:session-token");
  const previewToken = ipcRenderer.sendSync("motif-desktop:preview-token");

  contextBridge.exposeInMainWorld("motifDesktop", {
    getSessionToken: () => sessionToken,
    getPreviewToken: () => previewToken,
  });

  contextBridge.exposeInMainWorld("motifWindow", {
    minimize: () => ipcRenderer.invoke("motif-window:minimize"),
    toggleMaximize: () => ipcRenderer.invoke("motif-window:toggle-maximize"),
    close: () => ipcRenderer.invoke("motif-window:close"),
    isMaximized: () => ipcRenderer.invoke("motif-window:is-maximized"),
    onMaximizedChange: (callback) => {
      const handler = (_event, maximized) => callback(Boolean(maximized));
      ipcRenderer.on("motif-window:maximized", handler);
      return () => ipcRenderer.removeListener("motif-window:maximized", handler);
    },
  });
}
