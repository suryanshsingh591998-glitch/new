"use client";

import { useEffect, useRef, useState } from "react";
import { PageFlip } from "page-flip";
import Image from "next/image";
import { Film } from "lucide-react";
import {
  PageTableContents,
  PageEditorialCollage,
  PageWhosThatGirl,
  PageInstagramGirl,
  PageThingsAbout,
  PageFactsWithPhotos,
  PageThingsILoveAboutYou,
  PageMeetTheQueen,
  PageFavouriteMemory,
  PageNumberedMemories,
  PageHeartSpreadLeft,
  PageHeartSpreadRight,
  PagePhotoDumpPart1,
  PageScatteredPolaroids,
  PageHeartfeltMessage,
  PageDiagonalFilmstrip,
  PageBackCoverFlipbook,
} from "./MagazinePages";
import MagazineVideoModal from "./MagazineVideoModal";

/* ------------------------------------------------------------------
 * 📖 MAGAZINE COVER CONFIGURATION
 * ------------------------------------------------------------------
 * Change the cover image, text, or dimensions directly in code here:
 * ------------------------------------------------------------------ */
export const COVER_CONFIG = {
  // Birthday Girl Image from /ref
  coverImage: "/ref/girl.jpg",
  imagePosition: "center 20%",
  // Crisp natural editorial grade
  imageFilter: "contrast(102%) brightness(102%) saturate(102%)",

  // Exact VOUGUE Magazine Typography & Text
  masthead: "VOUGUE",
  issue: "ISSUE NO.2026",
  headlineName: "SWEETY",
  headlineSub1: "TIMELESS AND",
  headlineSub2: "BEAUTIFUL,",
  headlineSub3: "THE STORY OF SWEETY",
  age: "BIRTHDAY",
  editionLine1: "SPECIAL",
  editionLine2: "EDITION",
  featureTag: "FEATURING",
  featureRole: "THE GIRL WHO HAS MY WHOLE HEART",
  modelName: "SWEETY",
  barcode: "SWEETY2026B",

  // Magazine proportions (1:1.41 authentic Vogue / A4 portrait size)
  pageWidth: 425,
  pageHeight: 600,
};

export default function Book() {
  const bookRef = useRef<HTMLDivElement>(null);
  const pageFlipRef = useRef<PageFlip | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [isDesktop, setIsDesktop] = useState(true);
  const [scale, setScale] = useState(1);
  const [isRotated, setIsRotated] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isAutoFlipping, setIsAutoFlipping] = useState(false);

  useEffect(() => {
    if (!isAutoFlipping) return;
    const interval = setInterval(() => {
      const pf = pageFlipRef.current;
      if (!pf) return;
      if (currentPage >= (totalPages || 18) - 1) {
        try {
          (pf as any).flip?.(0);
        } catch {
          // ignore
        }
      } else {
        handleNext();
      }
    }, 2800);
    return () => clearInterval(interval);
  }, [isAutoFlipping, currentPage, totalPages]);

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const desktop = w >= 900 && h >= 680;
      setIsDesktop(desktop);

      if (desktop) {
        setScale(1);
      } else {
        if (isRotated) {
          // 16:9 Rotated Mode: Book width (850) runs vertically, height (600) runs horizontally
          const padH = 110;
          const padW = 20;
          const maxLen = Math.max(300, h - padH);
          const maxBreadth = Math.max(200, w - padW);
          const sLen = maxLen / 850;
          const sBreadth = maxBreadth / 600;
          setScale(Math.min(sLen, sBreadth));
        } else {
          // Normal 2-page landscape spread: 850px wide x 600px tall
          const padX = 16;
          const padY = 120;
          const maxW = Math.max(300, w - padX);
          const maxH = Math.max(200, h - padY);
          const sW = maxW / 850;
          const sH = maxH / 600;
          setScale(Math.min(sW, sH));
        }
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isRotated]);

  const toggleRotate = () => {
    setIsRotated((prev) => !prev);
  };

  useEffect(() => {
    if (!bookRef.current) return;

    // Authentic A4 Magazine Dimensions (425 x 600 each page, 850 x 600 two-page spread)
    const pageFlip = new PageFlip(bookRef.current, {
      width: COVER_CONFIG.pageWidth,
      height: COVER_CONFIG.pageHeight,
      size: "fixed",
      autoSize: true,
      showCover: true,
      drawShadow: true,
      maxShadowOpacity: 0.5,
      usePortrait: false, // Always show both two pages in landscape view
      mobileScrollSupport: false,
      swipeDistance: 20,
      startPage: 0,
      disableFlipByClick: true,
      clickEventForward: true,
    });

    pageFlipRef.current = pageFlip;
    if (typeof window !== "undefined") {
      (window as any).__pageFlip = pageFlip;
    }

    pageFlip.on("flip", (e) => {
      setCurrentPage(e.data as number);
    });

    pageFlip.on("init", () => {
      setTotalPages(pageFlip.getPageCount());
    });

    const pages = bookRef.current.querySelectorAll<HTMLElement>(".book-page");
    if (pages && pages.length > 0) {
      try {
        pageFlip.loadFromHTML(pages);
      } catch (err) {
        console.warn("pageFlip loadFromHTML error:", err);
      }
    }

    // Intercept mouse/pointer/touch events on buttons and interactive elements
    // in the capture phase so PageFlip never receives them and never triggers a page flip.
    const container = bookRef.current;
    const preventFlipOnInteractive = (e: Event) => {
      const el = e.target as Element | null;
      if (
        el?.closest?.(
          'button, a, input, textarea, select, [role="button"], [data-no-flip="true"], .interactive'
        )
      ) {
        e.stopPropagation();
      }
    };

    container.addEventListener("pointerdown", preventFlipOnInteractive, { capture: true });
    container.addEventListener("mousedown", preventFlipOnInteractive, { capture: true });
    container.addEventListener("touchstart", preventFlipOnInteractive, { capture: true, passive: true });
    container.addEventListener("pointerup", preventFlipOnInteractive, { capture: true });
    container.addEventListener("mouseup", preventFlipOnInteractive, { capture: true });
    container.addEventListener("touchend", preventFlipOnInteractive, { capture: true });

    return () => {
      container.removeEventListener("pointerdown", preventFlipOnInteractive, { capture: true });
      container.removeEventListener("mousedown", preventFlipOnInteractive, { capture: true });
      container.removeEventListener("touchstart", preventFlipOnInteractive, { capture: true });
      container.removeEventListener("pointerup", preventFlipOnInteractive, { capture: true });
      container.removeEventListener("mouseup", preventFlipOnInteractive, { capture: true });
      container.removeEventListener("touchend", preventFlipOnInteractive, { capture: true });
      try {
        pageFlip.destroy();
      } catch (err) {
        // ignore cleanup error
      }
      pageFlipRef.current = null;
    };
  }, []);

  const handlePrev = () => {
    const pf = pageFlipRef.current;
    if (!pf) return;
    try {
      pf.flipPrev();
    } catch {
      try {
        (pf as any).turnToPrevPage?.();
      } catch {
        // ignore
      }
    }
  };

  const handleNext = () => {
    const pf = pageFlipRef.current;
    if (!pf) return;
    try {
      pf.flipNext();
    } catch {
      try {
        (pf as any).turnToNextPage?.();
      } catch {
        // ignore
      }
    }
  };

  const isCover = currentPage === 0;
  const isBackCover = totalPages > 0 && currentPage >= totalPages - 1;
  const isOriginalRefImage = COVER_CONFIG.coverImage.includes("magzine-ref/cover.jpg");

  return (
    <div className="flex flex-col items-center justify-center w-full select-none">
      {/* ── Top Bar: 16:9 Rotation Indicator & Video Share Option ── */}
      <div className="flex items-center justify-between w-full max-w-[850px] px-3 mb-2 z-30">
        <div className="text-[11px] font-mono tracking-widest text-[#9f773a] opacity-80 uppercase font-medium">
          {isRotated ? "16:9 Widescreen View" : "Landscape Editorial"}
        </div>
        <div className="flex items-center gap-2">
          {/* Auto-Play Flipbook */}
          <button
            type="button"
            onClick={() => setIsAutoFlipping(!isAutoFlipping)}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase backdrop-blur-md shadow-md transition-all cursor-pointer active:scale-95 ${
              isAutoFlipping
                ? "bg-[#d4af37] text-[#141210] font-bold border border-[#d4af37]"
                : "bg-[#1c1815]/80 hover:bg-[#1c1815] text-[#e8d5be] border border-[#9f773a]/40"
            }`}
            aria-label="Auto-play page flips"
          >
            {isAutoFlipping ? (
              <>
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                  <rect x="6" y="4" width="4" height="16" rx="1" />
                  <rect x="14" y="4" width="4" height="16" rx="1" />
                </svg>
                <span>Pause</span>
              </>
            ) : (
              <>
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-[#d4af37]">
                  <path d="M8 5v14l11-7z" />
                </svg>
                <span>Auto Flip</span>
              </>
            )}
          </button>

          {/* Video & Share Modal Button */}
          <button
            type="button"
            onClick={() => setIsVideoModalOpen(true)}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-gradient-to-r from-[#9f773a]/30 via-[#d4af37]/45 to-[#9f773a]/30 hover:brightness-125 text-[#f5e7d5] border border-[#d4af37]/60 backdrop-blur-md shadow-md transition-all cursor-pointer active:scale-95"
            aria-label="Download Magazine Flipping Video & Share"
          >
            <Film className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Film & Share</span>
          </button>

          {/* Rotate Button */}
          <button
            type="button"
            onClick={toggleRotate}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-[#1c1815]/80 hover:bg-[#1c1815] text-[#e8d5be] border border-[#9f773a]/40 backdrop-blur-md shadow-md transition-all cursor-pointer active:scale-95"
            aria-label={isRotated ? "Switch to 9:16 portrait" : "Rotate to 16:9 landscape"}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className={`w-3.5 h-3.5 transition-transform duration-300 ${isRotated ? "rotate-90 text-[#f5e7d5]" : "text-[#d8c3a5]"}`}>
              <rect x="2" y="5" width="20" height="14" rx="2" />
              <path d="M2 10h20" strokeDasharray="2 2" opacity={0.4} />
            </svg>
            <span>{isRotated ? "Rotate (9:16)" : "Rotate (16:9)"}</span>
          </button>
        </div>
      </div>

      {/* ── Book Container: Auto-scales cleanly to fit both desktop and mobile in landscape ── */}
      <div
        className="relative flex items-center justify-center transition-all duration-500 ease-out"
        style={{
          width: (isRotated ? 600 : 850) * scale,
          height: (isRotated ? 850 : 600) * scale,
        }}
      >
        <div
          className="shrink-0 flex items-center justify-center transition-transform duration-500 ease-out"
          style={{
            width: 850,
            height: 600,
            transform: `${isRotated ? "rotate(90deg) " : ""}scale(${scale})`,
            transformOrigin: "center center",
          }}
        >
          <div
            ref={bookRef}
            className="w-[850px] h-[600px] transition-transform duration-500 ease-out"
            style={{
              transform: isCover
                ? `translateX(-${COVER_CONFIG.pageWidth / 2}px)`
                : isBackCover
                  ? `translateX(${COVER_CONFIG.pageWidth / 2}px)`
                  : "translateX(0px)",
            }}
          >
            {/* ── FRONT COVER: EXACT VOUGUE MAGAZINE COVER WITH GIRL IMAGE ── */}
            <div
              className="book-page relative overflow-hidden bg-[#c8b8a3] text-white shadow-2xl rounded-md select-none"
              style={{ width: COVER_CONFIG.pageWidth, height: COVER_CONFIG.pageHeight, isolation: "isolate" }}
              data-density="hard"
            >
              {/* 1. Photo Layer with Option B Editorial Filter */}
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src={COVER_CONFIG.coverImage}
                  alt="Vogue Magazine Birthday Cover"
                  fill
                  priority
                  draggable={false}
                  className="object-cover pointer-events-none select-none transition-transform duration-700"
                  style={{
                    objectPosition: COVER_CONFIG.imagePosition || "center 22%",
                    filter:
                      COVER_CONFIG.imageFilter ||
                      "sepia(16%) saturate(84%) contrast(93%) brightness(103%)",
                  }}
                />
              </div>

              {/* 2. Option B Film Grain (Transparent noise texture; mix-blend-mode: soft-light) */}
              {!isOriginalRefImage && (
                <div
                  className="absolute inset-0 pointer-events-none z-10"
                  style={{
                    opacity: 0.13,
                    mixBlendMode: "soft-light",
                    backgroundImage:
                      "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.88' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.42'/%3E%3C/svg%3E\")",
                  }}
                  aria-hidden="true"
                />
              )}

              {/* 2b. Option B Film Vignette (Subtle radial edge darkening) */}
              {!isOriginalRefImage && (
                <div
                  className="absolute inset-0 pointer-events-none z-10"
                  style={{
                    background:
                      "radial-gradient(ellipse at center, transparent 52%, rgba(42, 27, 18, 0.15) 100%)",
                  }}
                  aria-hidden="true"
                />
              )}

              {/* 3. Pixel-Perfect Editorial Typography Layer (Exact Bodoni Moda Magazine Typeface) */}
              {!isOriginalRefImage && (
                <div className="absolute inset-0 z-20 pointer-events-none select-none">
                  {/* ─ Masthead: VOUGUE (Didone high-contrast serif, tight tracking, edge-to-edge) ─ */}
                  <div className="absolute top-[2.2%] left-0 right-0 px-[14px] text-center select-none">
                    <h1
                      className="font-medium uppercase text-white select-none m-0"
                      style={{
                        fontFamily: "'Bodoni Moda', Didot, 'Bodoni 72', 'Times New Roman', serif",
                        fontWeight: 500,
                        fontSize: "94px",
                        lineHeight: 0.82,
                        letterSpacing: "-0.075em",
                        textShadow: "0 2px 10px rgba(0,0,0,0.75)",
                        whiteSpace: "nowrap",
                        display: "block",
                      }}
                    >
                      {COVER_CONFIG.masthead}
                    </h1>
                  </div>

                  {/* ─ Issue Line: ISSUE NO.000456 ─ */}
                  <div className="absolute top-[16%] right-[5.8%] text-right">
                    <span
                      className="font-normal text-[9px] tracking-[0.18em] text-white/95 uppercase"
                      style={{
                        fontFamily: "'Bodoni Moda', Didot, 'Bodoni 72', serif",
                        textShadow: "0 1px 4px rgba(0,0,0,0.85)",
                      }}
                    >
                      {COVER_CONFIG.issue}
                    </span>
                  </div>

                  {/* ─ Left Upper Headline Block ─ */}
                  <div className="absolute top-[27%] left-[6%] max-w-[50%] flex flex-col items-start text-left">
                    <span
                      className="text-[23px] font-medium tracking-[-0.045em] text-white leading-[0.88] uppercase"
                      style={{
                        fontFamily: "'Bodoni Moda', Didot, 'Bodoni 72', serif",
                        fontWeight: 500,
                        textShadow: "0 2px 8px rgba(0,0,0,0.85)",
                      }}
                    >
                      {COVER_CONFIG.headlineName}
                    </span>
                    <span
                      className="text-[11px] font-normal tracking-[0.04em] text-white/95 leading-[1.25] uppercase mt-1.5"
                      style={{
                        fontFamily: "'Bodoni Moda', Didot, 'Bodoni 72', serif",
                        textShadow: "0 1px 4px rgba(0,0,0,0.85)",
                      }}
                    >
                      {COVER_CONFIG.headlineSub1}<br />
                      {COVER_CONFIG.headlineSub2}<br />
                      <span className="italic">{COVER_CONFIG.headlineSub3}</span>
                    </span>
                  </div>

                  {/* ─ Right Middle: 20 BIRTHDAY EDITION ─ */}
                  <div className="absolute top-[42%] right-[6%] flex flex-col items-end text-right">
                    <span
                      className="font-medium text-[68px] leading-[0.82] tracking-[-0.03em] text-white"
                      style={{
                        fontFamily: "'Bodoni Moda', Didot, 'Bodoni 72', serif",
                        fontWeight: 500,
                        textShadow: "0 3px 12px rgba(0,0,0,0.85)",
                      }}
                    >
                      {COVER_CONFIG.age}
                    </span>
                    <span
                      className="font-medium text-[27px] tracking-[-0.045em] leading-[0.88] text-white uppercase mt-0.5"
                      style={{
                        fontFamily: "'Bodoni Moda', Didot, 'Bodoni 72', serif",
                        fontWeight: 500,
                        textShadow: "0 2px 10px rgba(0,0,0,0.85)",
                      }}
                    >
                      {COVER_CONFIG.editionLine1}<br />
                      {COVER_CONFIG.editionLine2}
                    </span>
                  </div>

                  {/* ─ Bottom Left: FEATURING SUPER MODEL ISABELLA MASON ─ */}
                  <div className="absolute bottom-[5.2%] left-[6%] max-w-[56%] flex flex-col items-start text-left">
                    <span
                      className="text-[11px] tracking-[0.1em] text-white/90 leading-tight uppercase font-normal"
                      style={{
                        fontFamily: "'Bodoni Moda', Didot, 'Bodoni 72', serif",
                        textShadow: "0 1px 4px rgba(0,0,0,0.85)",
                      }}
                    >
                      {COVER_CONFIG.featureTag}<br />
                      {COVER_CONFIG.featureRole}
                    </span>
                    <span
                      className="text-[22px] font-medium tracking-[-0.045em] text-white leading-[0.9] uppercase mt-1"
                      style={{
                        fontFamily: "'Bodoni Moda', Didot, 'Bodoni 72', serif",
                        fontWeight: 500,
                        textShadow: "0 2px 8px rgba(0,0,0,0.85)",
                      }}
                    >
                      {COVER_CONFIG.modelName}
                    </span>
                  </div>

                  {/* ─ Bottom Right: Realistic Barcode Card ─ */}
                  <div className="absolute bottom-[4.2%] right-[6%]">
                    <div className="bg-white px-2 py-1 rounded-sm shadow-md flex flex-col items-center justify-center">
                      <svg viewBox="0 0 100 24" className="w-[82px] h-[16px]">
                        <rect x="2" y="0" width="2" height="24" fill="#000" />
                        <rect x="6" y="0" width="1" height="24" fill="#000" />
                        <rect x="9" y="0" width="3" height="24" fill="#000" />
                        <rect x="14" y="0" width="1.5" height="24" fill="#000" />
                        <rect x="18" y="0" width="2.5" height="24" fill="#000" />
                        <rect x="23" y="0" width="1" height="24" fill="#000" />
                        <rect x="26" y="0" width="3.5" height="24" fill="#000" />
                        <rect x="32" y="0" width="1.5" height="24" fill="#000" />
                        <rect x="36" y="0" width="2" height="24" fill="#000" />
                        <rect x="40" y="0" width="3" height="24" fill="#000" />
                        <rect x="45" y="0" width="1" height="24" fill="#000" />
                        <rect x="48" y="0" width="2.5" height="24" fill="#000" />
                        <rect x="53" y="0" width="1.5" height="24" fill="#000" />
                        <rect x="56" y="0" width="3" height="24" fill="#000" />
                        <rect x="61" y="0" width="1" height="24" fill="#000" />
                        <rect x="64" y="0" width="2" height="24" fill="#000" />
                        <rect x="68" y="0" width="3.5" height="24" fill="#000" />
                        <rect x="74" y="0" width="1.5" height="24" fill="#000" />
                        <rect x="78" y="0" width="2" height="24" fill="#000" />
                        <rect x="82" y="0" width="1" height="24" fill="#000" />
                        <rect x="85" y="0" width="3" height="24" fill="#000" />
                        <rect x="90" y="0" width="1.5" height="24" fill="#000" />
                        <rect x="94" y="0" width="2.5" height="24" fill="#000" />
                      </svg>
                      <span className="font-mono text-[7px] text-black font-bold tracking-[0.12em] mt-0.5">
                        {COVER_CONFIG.barcode}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* 4. Subtle Glossy Magazine Spine Crease & Sheen Overlay */}
              <div
                className="absolute inset-0 pointer-events-none select-none z-30"
                style={{
                  background:
                    "linear-gradient(to right, rgba(0,0,0,0.25) 0%, rgba(255,255,255,0.06) 2%, rgba(0,0,0,0.03) 5%, transparent 12%, transparent 95%, rgba(0,0,0,0.12) 100%)",
                }}
              />
            </div>

            {/* ── SPREAD 1 (LEFT): TABLE OF CONTENTS ── */}
            <div
              className="book-page relative overflow-hidden bg-[#faf8f4] text-[#1c1917] shadow-md select-none"
              style={{ width: COVER_CONFIG.pageWidth, height: COVER_CONFIG.pageHeight }}
            >
              <PageTableContents />
            </div>

            {/* ── SPREAD 1 (RIGHT): 7-PHOTO EDITORIAL COLLAGE ── */}
            <div
              className="book-page relative overflow-hidden bg-[#faf8f4] shadow-md select-none"
              style={{ width: COVER_CONFIG.pageWidth, height: COVER_CONFIG.pageHeight }}
            >
              <PageEditorialCollage />
            </div>

            {/* ── SPREAD 2 (LEFT): "WHO'S THAT GIRL?" EDITORIAL SPOTLIGHT ── */}
            <div
              className="book-page relative overflow-hidden bg-[#faf8f4] text-[#1c1917] shadow-md select-none"
              style={{ width: COVER_CONFIG.pageWidth, height: COVER_CONFIG.pageHeight }}
            >
              <PageWhosThatGirl />
            </div>

            {/* ── SPREAD 2 (RIGHT): "INSTAGRAM GIRL" 4-POST FEED ── */}
            <div
              className="book-page relative overflow-hidden bg-[#faf8f4] text-[#1c1917] shadow-md select-none"
              style={{ width: COVER_CONFIG.pageWidth, height: COVER_CONFIG.pageHeight }}
            >
              <PageInstagramGirl />
            </div>

            {/* ── SPREAD 3 (LEFT): CHAPTER 01 - THINGS ABOUT HER ── */}
            <div
              className="book-page relative overflow-hidden bg-[#faf8f4] text-[#1c1917] shadow-md select-none"
              style={{ width: COVER_CONFIG.pageWidth, height: COVER_CONFIG.pageHeight }}
            >
              <PageThingsAbout />
            </div>

            {/* ── SPREAD 3 (RIGHT): 12 FACTS & PHOTO STRIP ── */}
            <div
              className="book-page relative overflow-hidden bg-[#faf8f4] text-[#1c1917] shadow-md select-none"
              style={{ width: COVER_CONFIG.pageWidth, height: COVER_CONFIG.pageHeight }}
            >
              <PageFactsWithPhotos />
            </div>

            {/* ── SPREAD 4 (LEFT): THINGS I LOVE ABOUT YOU (5 REASONS) ── */}
            <div
              className="book-page relative overflow-hidden bg-[#faf8f4] text-[#1c1917] shadow-md select-none"
              style={{ width: COVER_CONFIG.pageWidth, height: COVER_CONFIG.pageHeight }}
            >
              <PageThingsILoveAboutYou />
            </div>

            {/* ── SPREAD 4 (RIGHT): MEET THE BIRTHDAY QUEEN (PORTRAIT SPOTLIGHT) ── */}
            <div
              className="book-page relative overflow-hidden bg-[#f6f2ea] text-[#1c1917] shadow-md select-none"
              style={{ width: COVER_CONFIG.pageWidth, height: COVER_CONFIG.pageHeight }}
            >
              <PageMeetTheQueen />
            </div>

            {/* ── SPREAD 5 (LEFT): CHAPTER 02 - FAVOURITE MEMORY OF US ── */}
            <div
              className="book-page relative overflow-hidden bg-[#faf8f4] text-[#1c1917] shadow-md select-none"
              style={{ width: COVER_CONFIG.pageWidth, height: COVER_CONFIG.pageHeight }}
            >
              <PageFavouriteMemory />
            </div>

            {/* ── SPREAD 5 (RIGHT): NUMBERED MEMORIES COLLAGE (01-06) ── */}
            <div
              className="book-page relative overflow-hidden bg-[#faf8f4] text-[#1c1917] shadow-md select-none"
              style={{ width: COVER_CONFIG.pageWidth, height: COVER_CONFIG.pageHeight }}
            >
              <PageNumberedMemories />
            </div>

            {/* ── SPREAD 6 (LEFT): "MY ONLY LOVE" 11-PHOTO HEART (LEFT HALF) ── */}
            <div
              className="book-page relative overflow-hidden bg-[#fff2f5] text-[#1c1917] shadow-md select-none"
              style={{ width: COVER_CONFIG.pageWidth, height: COVER_CONFIG.pageHeight }}
            >
              <PageHeartSpreadLeft />
            </div>

            {/* ── SPREAD 6 (RIGHT): "MY ONLY LOVE" 11-PHOTO HEART (RIGHT HALF) ── */}
            <div
              className="book-page relative overflow-hidden bg-[#fff2f5] text-[#1c1917] shadow-md select-none"
              style={{ width: COVER_CONFIG.pageWidth, height: COVER_CONFIG.pageHeight }}
            >
              <PageHeartSpreadRight />
            </div>

            {/* ── SPREAD 7 (LEFT): CHAPTER 03 - PHOTO DUMP (PART 1) ── */}
            <div
              className="book-page relative overflow-hidden bg-[#faf8f4] text-[#1c1917] shadow-md select-none"
              style={{ width: COVER_CONFIG.pageWidth, height: COVER_CONFIG.pageHeight }}
            >
              <PagePhotoDumpPart1 />
            </div>

            {/* ── SPREAD 7 (RIGHT): SCATTERED POLAROIDS ARCHIVE ── */}
            <div
              className="book-page relative overflow-hidden bg-[#f7f4ed] text-[#1c1917] shadow-md select-none"
              style={{ width: COVER_CONFIG.pageWidth, height: COVER_CONFIG.pageHeight }}
            >
              <PageScatteredPolaroids />
            </div>

            {/* ── SPREAD 8 (LEFT): CHAPTER 04 - HEARTFELT MESSAGE ── */}
            <div
              className="book-page relative overflow-hidden bg-[#faf8f4] text-[#1c1917] shadow-md select-none"
              style={{ width: COVER_CONFIG.pageWidth, height: COVER_CONFIG.pageHeight }}
            >
              <PageHeartfeltMessage />
            </div>

            {/* ── SPREAD 8 (RIGHT): DIAGONAL 35MM FILMSTRIP MEMORIES ── */}
            <div
              className="book-page relative overflow-hidden bg-[#faf8f4] text-[#1c1917] shadow-md select-none"
              style={{ width: COVER_CONFIG.pageWidth, height: COVER_CONFIG.pageHeight }}
            >
              <PageDiagonalFilmstrip />
            </div>

            {/* ── BACK COVER: HAPPY BIRTHDAY "THIS IS YOUR STORY" ── */}
            <div
              className="book-page relative overflow-hidden bg-[#141210] text-white shadow-2xl rounded-md select-none"
              data-density="hard"
              style={{ width: COVER_CONFIG.pageWidth, height: COVER_CONFIG.pageHeight }}
            >
              <PageBackCoverFlipbook />
            </div>
          </div>
        </div>
      </div>

      {/* ── UNIFIED CONTROLS: Works beautifully on both desktop & mobile in landscape ── */}
      <div className="flex items-center justify-center gap-2.5 sm:gap-3 mt-4 px-4 sm:px-5 py-2 rounded-full bg-[#1c1815]/85 backdrop-blur-md border border-[#9f773a]/30 shadow-lg z-30 select-none">
        <button
          type="button"
          aria-label="Previous Page"
          onClick={handlePrev}
          disabled={isCover}
          className={`px-3 sm:px-3.5 py-1.5 text-xs font-semibold tracking-wider uppercase rounded-full bg-[#9f773a]/25 hover:bg-[#9f773a]/40 active:scale-95 text-[#f5e7d5] border border-[#9f773a]/40 transition-all cursor-pointer shadow-sm touch-manipulation ${isCover ? "opacity-30 cursor-not-allowed pointer-events-none" : ""}`}
        >
          ‹ Prev
        </button>

        <span className="text-[11px] font-mono text-[#e8d5be] font-semibold tracking-widest px-2 sm:px-3 min-w-[75px] sm:min-w-[90px] text-center">
          {isCover
            ? "COVER"
            : isBackCover
              ? "BACK"
              : `${currentPage} - ${Math.min(currentPage + 1, (totalPages || 18) - 1)} / ${totalPages || 18}`}
        </span>

        <button
          type="button"
          aria-label="Next Page"
          onClick={handleNext}
          disabled={isBackCover}
          className={`px-3 sm:px-3.5 py-1.5 text-xs font-semibold tracking-wider uppercase rounded-full bg-[#9f773a]/25 hover:bg-[#9f773a]/40 active:scale-95 text-[#f5e7d5] border border-[#9f773a]/40 transition-all cursor-pointer shadow-sm touch-manipulation ${isBackCover ? "opacity-30 cursor-not-allowed pointer-events-none" : ""}`}
        >
          Next ›
        </button>

        <div className="w-[1px] h-4 bg-[#9f773a]/30 mx-0.5" />

        <button
          type="button"
          aria-label="Download Video & Share Reel"
          onClick={() => setIsVideoModalOpen(true)}
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold tracking-wider uppercase rounded-full bg-gradient-to-r from-[#9f773a]/25 via-[#d4af37]/35 to-[#9f773a]/25 hover:brightness-125 text-[#f5e7d5] border border-[#d4af37]/60 transition-all cursor-pointer shadow-sm touch-manipulation active:scale-95"
        >
          <Film className="w-3.5 h-3.5 text-[#d4af37]" />
          <span>Film & Share</span>
        </button>

        <button
          type="button"
          aria-label={isRotated ? "Switch to Portrait View" : "Rotate to 16:9 Landscape View"}
          onClick={toggleRotate}
          className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold tracking-wider uppercase rounded-full transition-all cursor-pointer shadow-sm touch-manipulation active:scale-95 ${isRotated
              ? "bg-[#d8c3a5] text-[#1c1815] border border-[#d8c3a5] font-bold shadow-md"
              : "bg-[#9f773a]/25 hover:bg-[#9f773a]/40 text-[#f5e7d5] border border-[#9f773a]/40"
            }`}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`w-3.5 h-3.5 transition-transform duration-300 ${isRotated ? "rotate-90" : ""}`}
          >
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="M7 15l2-2 2 2" />
            <path d="M17 9l-2 2-2-2" />
          </svg>
          <span>{isRotated ? "9:16" : "16:9"}</span>
        </button>
      </div>

      {/* ── Magazine Flipping Video & Social Share Modal ── */}
      <MagazineVideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        name="Sweety"
      />
    </div>
  );
} 
