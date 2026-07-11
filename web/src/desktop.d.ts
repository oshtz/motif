export {};

declare global {
  interface Window {
    motifDesktop?: {
      getSessionToken: () => string;
      getPreviewToken: () => string;
    };
    motifWindow?: {
      minimize: () => Promise<void>;
      toggleMaximize: () => Promise<boolean>;
      close: () => Promise<void>;
      isMaximized: () => Promise<boolean>;
      onMaximizedChange: (callback: (maximized: boolean) => void) => () => void;
    };
  }
}
