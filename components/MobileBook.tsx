"use client";

import { useEffect, useRef, useState } from "react";
import { PageFlip } from "page-flip";
import Image from "next/image";
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

export default function MobileBook() {
  const bookRef = useRef<HTMLDivElement>(null);
  const pageFlipRef = useRef<PageFlip | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const desktop = w >= 768;
      setIsDesktop(desktop);

      if (desktop) {
        // Desktop is 100% UNTOUCHED (native 850x600, scale = 1)
        setScale(1);
      } else {
        // Mobile Single Page is 425 x 600 scaled to fit phone screen
        const maxW = w - 24; // 12px margin on left & right
        const maxH = h - 100; // room for top padding and bottom control bar
        const sW = maxW / 425;
        const sH = maxH / 600;
        setScale(Math.min(1, Math.min(sW, sH)));
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!bookRef.current) return;

    const desktopQuery = window.matchMedia("(min-width: 768px)").matches;

    // Authentic A4 Magazine Dimensions (425 x 600, Ratio 1 : 1.41)
    const pageFlip = new PageFlip(bookRef.current, {
      width: COVER_CONFIG.pageWidth,
      height: COVER_CONFIG.pageHeight,
      size: "fixed",
      autoSize: true,
      showCover: true,
      drawShadow: true,
      maxShadowOpacity: 0.5,
      usePortrait: !desktopQuery,
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

    // Fix library portrait flipPrev coordinate bug where rect.left was omitted in single-page mode:
    const fc = (pageFlip as any).getFlipController?.();
    if (fc) {
      const origFlipPrev = fc.flipPrev.bind(fc);
      fc.flipPrev = function (corner: any = "top") {
        try {
          const render = (pageFlip as any).getRender?.();
          const rect = render?.getRect?.();
          const orientation = render?.getOrientation?.();
          if (orientation === "portrait" && rect) {
            this.flip(
              {
                x: rect.left + 10,
                y: corner === "top" ? 1 : ((pageFlip as any).getSettings?.()?.height || 600) - 2,
              },
              corner
            );
          } else {
            origFlipPrev(corner);
          }
        } catch {
          origFlipPrev(corner);
        }
      };
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
      if (!isDesktop) {
        const render = (pf as any).getRender?.();
        const rect = render?.getRect?.();
        const fc = (pf as any).getFlipController?.();
        if (rect && fc && typeof fc.flip === "function") {
          fc.flip({
            x: rect.left + 10,
            y: 1,
          });
        } else if (typeof (pf as any).turnToPrevPage === "function") {
          (pf as any).turnToPrevPage();
        } else {
          pf.flipPrev();
        }
      } else {
        pf.flipPrev();
      }
    } catch {
      try {
        (pf as any).turnToPrevPage?.() || pf.flipPrev();
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
  const isBackCover = currentPage === totalPages - 1 && totalPages > 0;
  const isOriginalRefImage = COVER_CONFIG.coverImage.includes("magzine-ref/cover.jpg");

  return (
    <div className={`flex flex-col items-center justify-center ${isDesktop ? "" : "w-full select-none"}`}>
      {/* ── ON DESKTOP: Exact original layout without outer scale. ON MOBILE: auto-scale to fit phone width ── */}
      <div
        className={isDesktop ? "" : "relative flex items-center justify-center"}
        style={
          isDesktop
            ? undefined
            : {
              width: 425 * scale,
              height: 600 * scale,
            }
        }
      >
        <div
          className={isDesktop ? "" : "shrink-0"}
          style={
            isDesktop
              ? undefined
              : {
                width: 425,
                height: 600,
                transform: `scale(${scale})`,
                transformOrigin: "center center",
              }
          }
        >
          <div
            ref={bookRef}
            className="w-[425px] h-[600px] md:w-[850px] md:h-[600px] transition-transform duration-500 ease-out"
            style={{
              transform:
                isDesktop && isCover
                  ? `translateX(-${COVER_CONFIG.pageWidth / 2}px)`
                  : isDesktop && isBackCover
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

      {/* ── DESKTOP CONTROLS (Exact Original) vs MOBILE CONTROLS ── */}
      {isDesktop ? (
        <div className="flex items-center justify-center gap-3 mt-4 z-30 select-none">
          <button
            type="button"
            aria-label="Previous Page"
            onClick={() => pageFlipRef.current?.flipPrev()}
            className="px-3.5 py-1.5 text-xs font-medium tracking-wider uppercase rounded-full bg-[#9f773a]/15 hover:bg-[#9f773a]/25 active:scale-95 text-[#5c4935] border border-[#9f773a]/30 backdrop-blur-md transition-all cursor-pointer shadow-sm"
          >
            ‹ Prev
          </button>

          <span className="text-[11px] font-mono text-[#7a5c32] font-semibold tracking-widest px-2">
            {currentPage + 1} / {totalPages || 7}
          </span>

          <button
            type="button"
            aria-label="Next Page"
            onClick={() => pageFlipRef.current?.flipNext()}
            className="px-3.5 py-1.5 text-xs font-medium tracking-wider uppercase rounded-full bg-[#9f773a]/15 hover:bg-[#9f773a]/25 active:scale-95 text-[#5c4935] border border-[#9f773a]/30 backdrop-blur-md transition-all cursor-pointer shadow-sm"
          >
            Next ›
          </button>
        </div>
      ) : (
        <div className="flex items-center justify-center gap-3 mt-3 px-4 py-2 rounded-full bg-[#1c1815]/85 backdrop-blur-md border border-[#9f773a]/30 shadow-lg z-30 select-none">
          <button
            type="button"
            aria-label="Previous Page"
            onClick={handlePrev}
            disabled={currentPage === 0}
            className={`px-3.5 py-1.5 text-xs font-semibold tracking-wider uppercase rounded-full bg-[#9f773a]/25 hover:bg-[#9f773a]/40 active:scale-95 text-[#f5e7d5] border border-[#9f773a]/40 transition-all cursor-pointer shadow-sm touch-manipulation ${currentPage === 0 ? "opacity-40 cursor-not-allowed" : ""}`}
          >
            ‹ Prev
          </button>

          <span className="text-[11px] font-mono text-[#e8d5be] font-semibold tracking-widest px-2">
            {currentPage + 1} <span className="opacity-40">/</span> {totalPages || 18}
          </span>

          <button
            type="button"
            aria-label="Next Page"
            onClick={handleNext}
            disabled={currentPage >= (totalPages || 18) - 1}
            className={`px-3.5 py-1.5 text-xs font-semibold tracking-wider uppercase rounded-full bg-[#9f773a]/25 hover:bg-[#9f773a]/40 active:scale-95 text-[#f5e7d5] border border-[#9f773a]/40 transition-all cursor-pointer shadow-sm touch-manipulation ${currentPage >= (totalPages || 18) - 1 ? "opacity-40 cursor-not-allowed" : ""}`}
          >
            Next ›
          </button>
        </div>
      )}
    </div>
  );
} 
