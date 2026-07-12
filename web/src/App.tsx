import { lazy, Suspense, useEffect, useLayoutEffect, useRef } from "react";
import { useAppStore, useSettingsStore } from "./store";
import { fetchMotifs } from "./api";
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
const isDesktopRuntime = Boolean(window.motifDesktop);

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
    loadGenerations,
    generationsLoading,
    generationsError,
    streamingVariants,
  } = useAppStore();
  const { loaded, onboardingComplete, loadSettings, loadGenomes } = useSettingsStore();
  const keepGalleryMounted = activeTab === "gallery" || activeTab === "preview";
  const galleryScrollRef = useRef<HTMLDivElement>(null);
  const galleryScrollPosition = useRef(0);
  const previousTab = useRef(activeTab);
  const initialGalleryPositioned = useRef(false);
  const streamingCountsByMotif = useRef(new Map<string, number>());

  useEffect(() => {
    loadSettings();
    loadGenomes();
    void loadGenerations();
    fetchMotifs().then(setMotifs).catch(console.error);
  }, [loadSettings, loadGenomes, loadGenerations, setGenerations, setMotifs]);

  useEffect(() => {
    if (loaded && !onboardingComplete) useAppStore.getState().setShowSettings(true);
  }, [loaded, onboardingComplete]);

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

  useEffect(() => {
    if (initialGalleryPositioned.current || generationsLoading) return;
    const frame = requestAnimationFrame(() => {
      const scroller = galleryScrollRef.current;
      if (!scroller) return;
      scroller.scrollTo({ top: 0 });
      initialGalleryPositioned.current = true;
    });
    return () => cancelAnimationFrame(frame);
  }, [generationsLoading]);

  useEffect(() => {
    const motifKey = (motifId?: string | null) => motifId ?? "__all__";
    const currentCounts = new Map<string, number>();
    for (const variant of streamingVariants) {
      const key = motifKey(variant.motifId);
      currentCounts.set(key, (currentCounts.get(key) ?? 0) + 1);
    }
    const activeKey = motifKey(activeMotifId);
    const hasNewActiveVariant =
      (currentCounts.get(activeKey) ?? 0) >
      (streamingCountsByMotif.current.get(activeKey) ?? 0);
    streamingCountsByMotif.current = currentCounts;

    if (hasNewActiveVariant && activeTab === "gallery") {
      galleryScrollRef.current?.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [activeMotifId, activeTab, streamingVariants]);

  useLayoutEffect(() => {
    if (previousTab.current === "preview" && activeTab === "gallery") {
      const scroller = galleryScrollRef.current;
      if (scroller) scroller.scrollTop = galleryScrollPosition.current;
    }
    previousTab.current = activeTab;
  }, [activeTab]);

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
    <div className={`h-dvh flex flex-col ${isDesktopRuntime ? "pt-20" : "pt-12"}`}>
      {isDesktopRuntime && <DesktopTitleBar />}
      <TopBar desktop={isDesktopRuntime} />
      <div className="sr-only" role="status" aria-live="polite">
        {generationsLoading ? "Loading generations" : generationsError || ""}
      </div>

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
        <div className={activeTab === "gallery" ? "relative flex-1 flex overflow-hidden" : "hidden"}>
          {/* Chat sidebar inside a motif */}
          {activeMotifId !== null && <ChatSidebar />}

          {/* Masonry grid */}
          <div
            ref={galleryScrollRef}
            data-testid="gallery-scroller"
            className={`flex-1 overflow-auto ${activeMotifId === null ? "pb-24" : ""}`}
            style={{ overflowAnchor: "none" }}
            onScroll={(event) => {
              if (useAppStore.getState().activeTab === "gallery") {
                galleryScrollPosition.current = event.currentTarget.scrollTop;
              }
            }}
          >
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
