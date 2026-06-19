import { useEffect, useState } from "react";

export default function DesktopTitleBar() {
  const [maximized, setMaximized] = useState(false);

  useEffect(() => {
    const motifWindow = window.motifWindow;
    if (!motifWindow) return;

    motifWindow.isMaximized().then(setMaximized).catch(console.error);
    return motifWindow.onMaximizedChange(setMaximized);
  }, []);

  const handleToggleMaximize = async () => {
    const nextMaximized = await window.motifWindow?.toggleMaximize();
    if (typeof nextMaximized === "boolean") {
      setMaximized(nextMaximized);
    }
  };

  return (
    <div
      data-testid="desktop-titlebar"
      className="motif-window-drag fixed top-0 left-0 right-0 z-50 h-8 flex items-center border-b border-white/5 bg-[#08080a] text-white/45 select-none"
    >
      <div className="flex items-center gap-2 px-3 text-[11px] font-medium">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          fill="none"
          viewBox="0 0 256 256"
          aria-hidden="true"
          className="text-white/35"
        >
          <path d="m87.15 226v-68.34c0.46-18 2.56-41.97 17.88-56.37 4.49-4.33 9.09-8.14 12.5-9.65-11.71 21.79-17.57 45.01-17.57 72.25v62.11h55.56v-65.83c0-20.19-6.56-47.89-19.31-70 4 2.62 12.21 9.11 15.75 13.34 11.28 13 16.92 25.66 17.25 53.69v68.8h78.79v-144.9c-0.89-22-13.03-50.91-47.48-52-26.31-0.83-49.2 14.69-66.82 34-4 4.64-7.5 9-9.45 12-23-26.85-55.65-45.61-93.98-46.2-9.09-0.15-14.26-0.23-22.27 0.56v196.6h79.15z" fill="currentColor" />
        </svg>
        <span>Motif</span>
      </div>

      <div className="flex-1 h-full" />

      <div className="motif-window-no-drag flex h-full">
        <button
          type="button"
          data-testid="window-minimize"
          onClick={() => window.motifWindow?.minimize()}
          className="h-8 w-11 flex items-center justify-center text-white/45 hover:text-white/80 hover:bg-white/8 transition"
          title="Minimize"
          aria-label="Minimize window"
        >
          <i className="bi bi-dash-lg text-[13px]" />
        </button>
        <button
          type="button"
          data-testid="window-maximize"
          onClick={handleToggleMaximize}
          className="h-8 w-11 flex items-center justify-center text-white/45 hover:text-white/80 hover:bg-white/8 transition"
          title={maximized ? "Restore" : "Maximize"}
          aria-label={maximized ? "Restore window" : "Maximize window"}
        >
          <i className={`bi ${maximized ? "bi-front" : "bi-square"} text-[11px]`} />
        </button>
        <button
          type="button"
          data-testid="window-close"
          onClick={() => window.motifWindow?.close()}
          className="h-8 w-12 flex items-center justify-center text-white/45 hover:text-white hover:bg-red-500 transition"
          title="Close"
          aria-label="Close window"
        >
          <i className="bi bi-x-lg text-[13px]" />
        </button>
      </div>
    </div>
  );
}
