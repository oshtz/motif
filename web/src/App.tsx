import { lazy, Suspense, useEffect } from "react";
import { useAppStore, useSettingsStore } from "./store";
import { fetchGenerations, fetchMotifs } from "./api";
import DesktopTitleBar from "./components/DesktopTitleBar";
import TopBar from "./components/TopBar";
import PromptBar from "./components/PromptBar";
import ChatSidebar from "./components/ChatSidebar";
import MasonryGrid from "./components/MasonryGrid";

const SettingsModal = lazy(() => import("./components/SettingsView"));
const AnalyticsModal = lazy(() => import("./components/AnalyticsModal"));
const PreviewView = lazy(() => import("./components/PreviewView"));
const CompareView = lazy(() => import("./components/CompareView"));
const BatchCompareView = lazy(() => import("./components/BatchCompareView"));
const BoardView = lazy(() => import("./components/BoardView"));
const ShaderOverlay = lazy(() => import("./components/ShaderOverlay"));
const isDesktopRuntime = new URLSearchParams(window.location.search).get("motifDesktop") === "1";

function ViewFallback() {
  return (
    <div className="flex-1 flex items-center justify-center text-white/25">
      <i className="bi bi-arrow-repeat animate-spin text-xl" />
    </div>
  );
}

export default function App() {
  const {
    setGenerations,
    setMotifs,
    activeMotifId,
    activeTab,
    styleDropperMode,
    exitDropperMode,
    editMode,
    exitEditMode,
    dropperHoveredRect,
    dropperHoveredTexture,
    showSettings,
    showAnalytics,
  } = useAppStore();
  const { loaded, loadSettings, loadGenomes } = useSettingsStore();
  const keepGalleryMounted = activeTab === "gallery" || activeTab === "preview";

  useEffect(() => {
    loadSettings();
    loadGenomes();
    // Show skeleton placeholders while loading initial generations
    const placeholderIds = useAppStore.getState().addPlaceholders(6);
    fetchGenerations()
      .then((gens) => {
        const { removeStreamingVariant } = useAppStore.getState();
        for (const id of placeholderIds) removeStreamingVariant(id);
        setGenerations(gens);
      })
      .catch((err) => {
        console.error(err);
        const { removeStreamingVariant } = useAppStore.getState();
        for (const id of placeholderIds) removeStreamingVariant(id);
      });
    fetchMotifs().then(setMotifs).catch(console.error);
  }, [loadSettings, loadGenomes, setGenerations, setMotifs]);

  // Escape key exits dropper mode or edit mode
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (styleDropperMode) exitDropperMode();
        if (editMode) exitEditMode();
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [styleDropperMode, exitDropperMode, editMode, exitEditMode]);

  // Exit dropper mode when switching to preview
  useEffect(() => {
    if (activeTab === "preview" && styleDropperMode) exitDropperMode();
  }, [activeTab, styleDropperMode, exitDropperMode]);

  if (!loaded) {
    return (
      <div className="h-screen flex flex-col">
        {isDesktopRuntime && <DesktopTitleBar />}
        <div className="flex-1 flex items-center justify-center text-white/30">
          <i className="bi bi-arrow-repeat animate-spin text-2xl" />
        </div>
      </div>
    );
  }

  return (
    <div className={`h-screen flex flex-col ${isDesktopRuntime ? "pt-20" : "pt-12"}`}>
      {isDesktopRuntime && <DesktopTitleBar />}
      <TopBar desktop={isDesktopRuntime} />

      {/* Style dropper mode banner */}
      {styleDropperMode && (
        <div className={`fixed ${isDesktopRuntime ? "top-24" : "top-14"} left-1/2 -translate-x-1/2 z-50 bg-purple-500/15 border border-purple-500/25 backdrop-blur-sm rounded-xl px-4 py-2 flex items-center gap-3 text-sm text-purple-300 shadow-lg`}>
          <i className="bi bi-eyedropper" />
          <span>Click a generation to apply the picked-up style</span>
          <button
            onClick={exitDropperMode}
            className="text-purple-400 hover:text-purple-200 transition ml-1"
          >
            <i className="bi bi-x-lg" />
          </button>
        </div>
      )}

      {/* Keep gallery mounted so grid layout is preserved when returning from preview */}
      {keepGalleryMounted && (
        <div className={activeTab === "gallery" ? "flex-1 flex overflow-hidden" : "hidden"}>
          {/* Chat sidebar inside a motif */}
          {activeMotifId !== null && <ChatSidebar />}

          {/* Masonry grid */}
          <div className={`flex-1 overflow-auto ${activeMotifId === null ? "pb-24" : ""}`}>
            <MasonryGrid />
          </div>
        </div>
      )}
      {/* Bottom prompt bar only on home (no active motif) */}
      {activeTab === "gallery" && activeMotifId === null && <PromptBar />}
      {activeTab === "preview" && (
        <Suspense fallback={<ViewFallback />}>
          <PreviewView />
        </Suspense>
      )}
      {activeTab === "compare" && (
        <Suspense fallback={<ViewFallback />}>
          <CompareView />
        </Suspense>
      )}
      {activeTab === "batch-compare" && (
        <Suspense fallback={<ViewFallback />}>
          <BatchCompareView />
        </Suspense>
      )}
      {activeTab === "board" && (
        <Suspense fallback={<ViewFallback />}>
          <BoardView />
        </Suspense>
      )}
      {showSettings && (
        <Suspense fallback={null}>
          <SettingsModal />
        </Suspense>
      )}
      {showAnalytics && (
        <Suspense fallback={null}>
          <AnalyticsModal />
        </Suspense>
      )}

      {/* Floating GLSL overlay for dropper target hover (source card uses CSS ring only) */}
      {styleDropperMode && (
        <Suspense fallback={null}>
          <ShaderOverlay
            active={dropperHoveredRect != null}
            rect={dropperHoveredRect}
            textureCanvas={dropperHoveredTexture}
          />
        </Suspense>
      )}
    </div>
  );
}
