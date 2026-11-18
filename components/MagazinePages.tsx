"use client";

import React, { useState } from "react";
import Image from "next/image";
import MeltingMusicPlayerFrame from "./MeltingMusicPlayerFrame";

/* ==========================================================================
 * 📖 EDITORIAL FLIPBOOK PAGES (FLIPBOOK + EDITORIAL TEMPLATE HYBRID)
 * ========================================================================== */

export const FLIPBOOK_CONFIG = {
  name: "SWEETY",
  fullName: "SWEETY",
  age: "BIRTHDAY",
  date: "SPECIAL DAY",
  sender: "YOUR FAVORITE PERSON",
  accentColor: "#6b5836", // Olive-gold foil color used in template
};

/** 35mm Filmstrip Border Helper */
export function FilmstripFrame({
  src,
  alt = "Filmstrip",
  className = "",
  orientation = "horizontal",
}: {
  src: string;
  alt?: string;
  className?: string;
  orientation?: "horizontal" | "vertical";
}) {
  const isHoriz = orientation === "horizontal";
  return (
    <div
      className={`relative bg-black p-1 shadow-md rounded-[1px] select-none ${className}`}
      style={{
        display: "flex",
        flexDirection: isHoriz ? "column" : "row",
        justifyContent: "space-between",
      }}
    >
      {/* Top/Left Sprocket Holes */}
      <div
        className={`flex ${isHoriz ? "justify-around py-0.5" : "flex-col justify-around px-0.5"} overflow-hidden`}
      >
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="w-1.5 h-1.5 bg-white/90 rounded-[0.5px] mx-0.5" />
        ))}
      </div>

      {/* Film Photo */}
      <div className="relative aspect-[16/10] w-full bg-[#18181b] overflow-hidden my-0.5">
        <Image src={src} alt={alt} fill priority className="object-cover" sizes="180px" />
      </div>

      {/* Bottom/Right Sprocket Holes */}
      <div
        className={`flex ${isHoriz ? "justify-around py-0.5" : "flex-col justify-around px-0.5"} overflow-hidden`}
      >
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="w-1.5 h-1.5 bg-white/90 rounded-[0.5px] mx-0.5" />
        ))}
      </div>
    </div>
  );
}

/* ==========================================================================
 * 1. PAGE 1: TABLE OF CONTENTS (Spread 1, Left Page)
 * ========================================================================== */
export function PageTableContents() {
  const items = [
    { num: "02", title: "EDITORIAL GALLERY", sub: "exclusive moments and fashion snapshots" },
    { num: "04", title: "WHO'S THAT GIRL?", sub: "an iconic profile of the birthday queen" },
    { num: "06", title: "THE INSTAGRAM QUEEN", sub: "curated aesthetic feed & golden hour glow" },
    { num: "08", title: `THINGS ABOUT ${FLIPBOOK_CONFIG.name}`, sub: "fun facts, personality and little traits" },
    { num: "10", title: "12 THINGS I ADORE ABOUT YOU", sub: "the traits that make you my favourite person" },
    { num: "12", title: "5 REASONS YOU OWN MY HEART", sub: "why you are the love of my life" },
    { num: "14", title: "MY ONLY LOVE · HEART SPREAD", sub: "11-photo heart mosaic celebrating you" },
    { num: "16", title: "FAVOURITE MEMORY OF US", sub: "every moment with you is unforgettable" },
    { num: "18", title: "PHOTO DUMP & POLAROIDS", sub: "spontaneous laughs, smiles, and film rolls" },
    { num: "20", title: "MY MESSAGE TO YOU", sub: "a love letter celebrating your 15th chapter" },
  ];

  return (
    <div className="relative w-full h-full bg-[#faf8f4] text-[#1c1917] p-4 flex select-none overflow-hidden font-sans">
      {/* Subtle paper texture overlay */}
      <div className="absolute inset-0 bg-[#e7e0d3]/15 pointer-events-none" />

      {/* Left Column: Vertical Large "TABLE CONTENTS" Header */}
      <div className="w-11 flex items-center justify-center border-r border-[#1c1917]/20 pr-2 mr-3">
        <span
          className="text-[18px] font-bold tracking-[0.26em] uppercase text-[#1c1917] whitespace-nowrap rotate-[-90deg]"
          style={{ fontFamily: "'Bodoni Moda', serif" }}
        >
          TABLE CONTENTS
        </span>
      </div>

      {/* Right Column: Numbered Items with Subtitles */}
      <div className="flex-1 flex flex-col justify-between py-1">
        {items.map((item, idx) => (
          <div key={idx} className="border-b border-[#1c1917]/10 pb-1">
            <div className="flex items-baseline gap-2.5">
              <span
                className="font-mono text-[13px] font-medium tracking-tight text-[#6b5836]"
                style={{ fontFamily: "'Bodoni Moda', serif" }}
              >
                {item.num}
              </span>
              <span
                className="text-[10px] font-bold tracking-[0.06em] text-[#1c1917] uppercase"
                style={{ fontFamily: "'Bodoni Moda', serif" }}
              >
                {item.title}
              </span>
            </div>
            <p className="text-[7.5px] text-[#57534e] italic tracking-wide ml-6 -mt-0.5">
              {item.sub}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ==========================================================================
 * 2. PAGE 2: 7-PHOTO EDITORIAL COLLAGE (Spread 1, Right Page)
 * ========================================================================== */
export function PageEditorialCollage() {
  return (
    <div className="relative w-full h-full bg-[#faf8f4] p-3 flex flex-col gap-1.5 select-none overflow-hidden">
      {/* Top Row: Photo 1 (wider) + Photo 2 (narrower portrait) */}
      <div className="flex gap-1.5 h-[30%]">
        <div className="relative w-[62%] h-full bg-[#e7e5e4] shadow-sm overflow-hidden">
          <Image src="/ref/girl1.jpg" alt="Sweety Memory 1" fill priority className="object-cover object-center" sizes="220px" />
        </div>
        <div className="relative w-[38%] h-full bg-[#e7e5e4] shadow-sm overflow-hidden">
          <Image src="/ref/girl2.jpg" alt="Sweety Memory 2" fill priority className="object-cover object-top" sizes="150px" />
        </div>
      </div>

      {/* Middle Row: Photo 3 + Photo 4 */}
      <div className="flex gap-1.5 h-[28%]">
        <div className="relative w-[48%] h-full bg-[#e7e5e4] shadow-sm overflow-hidden">
          <Image src="/ref/girl3.jpg" alt="Sweety Memory 3" fill priority className="object-cover object-top" sizes="180px" />
        </div>
        <div className="relative w-[52%] h-full bg-[#e7e5e4] shadow-sm overflow-hidden">
          <Image src="/ref/girl4.jpg" alt="Sweety Memory 4" fill priority className="object-cover object-center" sizes="180px" />
        </div>
      </div>

      {/* Lower Row: Photo 5 + Photo 6 */}
      <div className="flex gap-1.5 h-[23%]">
        <div className="relative w-[50%] h-full bg-[#e7e5e4] shadow-sm overflow-hidden">
          <Image src="/ref/girl5.jpg" alt="Sweety Memory 5" fill priority className="object-cover object-top" sizes="180px" />
        </div>
        <div className="relative w-[50%] h-full bg-[#e7e5e4] shadow-sm overflow-hidden">
          <Image src="/ref/girl6.jpg" alt="Sweety Memory 6" fill priority className="object-cover object-top" sizes="180px" />
        </div>
      </div>

      {/* Bottom Row: Full Width Panorama Photo */}
      <div className="relative w-full h-[19%] bg-[#e7e5e4] shadow-sm overflow-hidden">
        <Image src="/ref/girl7.jpg" alt="Sweety Full Panorama" fill priority className="object-cover object-center" sizes="380px" />
      </div>
    </div>
  );
}

/* ==========================================================================
 * 3. PAGE 3: "WHO'S THAT GIRL?" (Spread 2, Left Page - From New Template)
 * ========================================================================== */
export function PageWhosThatGirl() {
  return (
    <div className="relative w-full h-full bg-[#faf8f4] text-[#1c1917] p-4 flex select-none overflow-hidden font-sans">
      {/* Left Column: Tall Vertical Portrait */}
      <div className="relative w-[44%] h-full bg-[#e7e5e4] shadow-md rounded-[1px] overflow-hidden border border-[#1c1917]/10">
        <Image src="/ref/girl.jpg" alt="Who's that girl" fill priority className="object-cover object-top" sizes="180px" />
      </div>

      {/* Right Column: Editorial Profile & Biography */}
      <div className="w-[56%] pl-4 flex flex-col justify-between py-1">
        <div>
          {/* Header */}
          <span className="text-[7.5px] font-mono tracking-[0.25em] text-[#78716c] uppercase block">
            SPOTLIGHT
          </span>
          <div className="mt-1">
            <h2
              className="text-[32px] font-medium tracking-tight uppercase leading-[0.88] text-[#1c1917]"
              style={{ fontFamily: "'Bodoni Moda', serif" }}
            >
              Who’s
            </h2>
            <span
              className="text-[28px] font-normal leading-none block -mt-0.5"
              style={{ fontFamily: "'Aesthetic Script', 'Playfair Display', cursive", color: FLIPBOOK_CONFIG.accentColor }}
            >
              that girl?
            </span>
          </div>

          <div className="h-[0.5px] w-full bg-[#1c1917]/15 my-2" />

          {/* Profile Text */}
          <div className="space-y-2 text-[#44403c]">
            <p className="text-[9.5px] leading-[1.45] text-justify font-sans">
              The girl with the sweetest smile, the most captivating eyes, and the gentlest soul in this whole world. She turns every simple second into pure magic, radiating warmth, innocence, and unmatched grace.
            </p>
            <p className="text-[9.5px] leading-[1.45] text-justify font-sans">
              My favourite person, my happy place, and the girl who has my whole heart. An angel was born—and I am the luckiest guy alive to call you mine. Happy Birthday, Sweety!
            </p>
          </div>
        </div>

        {/* Bottom Tag */}
        <div className="border-t border-[#1c1917]/15 pt-2 flex items-center justify-between">
          <span className="text-[7px] font-mono tracking-wider uppercase text-[#78716c]">
            EDITION NO. {FLIPBOOK_CONFIG.age}
          </span>
          <span className="text-[8px] font-bold tracking-widest uppercase text-[#6b5836]" style={{ fontFamily: "'Bodoni Moda', serif" }}>
            THE QUEEN OF MY HEART
          </span>
        </div>
      </div>
    </div>
  );
}

/* ==========================================================================
 * 4. PAGE 4: "INSTAGRAM GIRL" (Spread 2, Right Page - Authentic Instagram Frame)
 * ========================================================================== */

/** Authentic Instagram Heart Icon (Red filled when liked) */
function InstagramHeartIcon({ filled = true, className = "w-3 h-3" }: { filled?: boolean; className?: string }) {
  if (filled) {
    return (
      <svg viewBox="0 0 24 24" className={`${className} text-[#ff3040] fill-[#ff3040] shrink-0`} aria-hidden="true">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className={`${className} text-[#262626] shrink-0`} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

/** Authentic Instagram Comment Bubble Outline Icon */
function InstagramCommentIcon({ className = "w-3 h-3" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={`${className} text-[#262626] shrink-0`} fill="none" stroke="currentColor" strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" />
    </svg>
  );
}

/** Authentic Instagram Direct Message / Share Paper Airplane Icon */
function InstagramShareIcon({ className = "w-3 h-3" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={`${className} text-[#262626] shrink-0`} fill="none" stroke="currentColor" strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  );
}

/** Authentic Instagram Carousel Dots Indicator with blue active dot */
function InstagramCarouselDots({
  count = 3,
  activeIndex = 1,
  className = "",
  dotClass = "w-1 h-1",
  activeDotClass = "w-1.5 h-1.5",
}: {
  count?: number;
  activeIndex?: number;
  className?: string;
  dotClass?: string;
  activeDotClass?: string;
}) {
  return (
    <div className={`flex items-center justify-center gap-[3px] ${className}`}>
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className={`rounded-full transition-all duration-200 ${
            i === activeIndex
              ? `${activeDotClass} bg-[#0095f6]`
              : `${dotClass} bg-[#dbdbdb]`
          }`}
        />
      ))}
    </div>
  );
}

/** Authentic Instagram Bookmark / Save Ribbon Icon */
function InstagramBookmarkIcon({ saved = false, className = "w-3 h-3" }: { saved?: boolean; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`${className} text-[#262626] shrink-0 ${saved ? "fill-[#262626]" : ""}`}
      fill={saved ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth={1.9}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
    </svg>
  );
}

/** Instagram Horizontal Three Dots Icon */
function InstagramMoreIcon({ className = "w-3 h-3" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={`${className} text-[#262626] shrink-0`} fill="currentColor" aria-hidden="true">
      <circle cx="5" cy="12" r="1.6" />
      <circle cx="12" cy="12" r="1.6" />
      <circle cx="19" cy="12" r="1.6" />
    </svg>
  );
}

/** Circular Avatar with fallback silhouette placeholder */
function InstagramAvatar({
  src,
  alt = "Avatar",
  size = "w-4 h-4",
  useSilhouette = false,
}: {
  src?: string;
  alt?: string;
  size?: string;
  useSilhouette?: boolean;
}) {
  if (useSilhouette || !src) {
    return (
      <div className={`${size} rounded-full bg-[#c7c7c7] flex items-center justify-center overflow-hidden shrink-0 border border-black/5`}>
        <svg viewBox="0 0 24 24" fill="#ffffff" className="w-[85%] h-[85%] translate-y-[2px]">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        </svg>
      </div>
    );
  }
  return (
    <div className={`${size} rounded-full overflow-hidden relative shrink-0 ring-1 ring-black/10 bg-zinc-200`}>
      <Image src={src} alt={alt} fill className="object-cover" sizes="40px" />
    </div>
  );
}

export function PageInstagramGirl() {
  const posts = [
    {
      img: "/ref/girl2.jpg",
      likes: 2410,
      comments: "520",
      time: "YESTERDAY",
      caption: "birthday celebrations begin ✨ with my favourite person ♡",
    },
    {
      img: "/ref/girl3.jpg",
      likes: 2890,
      comments: "642",
      time: "2 DAYS AGO",
      caption: "keeping each other smiling always 🤍",
    },
    {
      img: "/ref/girl4.jpg",
      likes: 3514,
      comments: "1,024",
      time: "3 DAYS AGO",
      caption: "birthday eve vibes 💫 my heart is full",
    },
    {
      img: "/ref/girl5.jpg",
      likes: 3120,
      comments: "815",
      time: "5 DAYS AGO",
      caption: "pure smiles & grace ♡ celebrating life",
    },
  ];

  // Interactive like & bookmark states (pre-liked like reference image 1)
  const [likedState, setLikedState] = useState<Record<number, boolean>>({
    0: true,
    1: true,
    2: true,
    3: true,
  });
  const [savedState, setSavedState] = useState<Record<number, boolean>>({});
  const [viewMode, setViewMode] = useState<"grid" | "featured" | "player">("grid");
  const [featuredIdx, setFeaturedIdx] = useState<number>(2); // Default to Post 3 (birthday mood)

  const toggleLike = (idx: number) => {
    setLikedState((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  const toggleSave = (idx: number) => {
    setSavedState((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  const formatLikes = (baseLikes: number, isLiked: boolean) => {
    const total = isLiked ? baseLikes : baseLikes - 1;
    return total.toLocaleString("en-US");
  };

  const username = FLIPBOOK_CONFIG.name.charAt(0).toUpperCase() + FLIPBOOK_CONFIG.name.slice(1).toLowerCase();
  const currentFeatured = posts[featuredIdx];

  return (
    <div className="relative w-full h-full bg-[#faf8f4] text-[#1c1917] p-2.5 select-none overflow-hidden flex flex-col justify-between font-sans">
      {/* Top Header with Editorial Title & View Mode Switcher */}
      <div className="flex items-center justify-between border-b border-[#1c1917]/15 pb-1 px-0.5 shrink-0">
        <div>
          <h2
            className="text-[23px] font-normal text-[#1c1917] leading-none"
            style={{ fontFamily: "'Aesthetic Script', 'Playfair Display', cursive", color: FLIPBOOK_CONFIG.accentColor }}
          >
            Instagram girl
          </h2>
          <span className="text-[6.5px] font-mono tracking-widest text-[#78716c] uppercase block mt-0.5">
            @{username.toLowerCase()}_angel • 24.10K FOLLOWERS
          </span>
        </div>

        {/* View Toggle Pill */}
        <div className="flex items-center gap-1 bg-[#1c1917]/5 p-0.5 rounded-full border border-[#1c1917]/10">
          <button
            type="button"
            data-no-flip="true"
            onPointerDown={(e) => e.stopPropagation()}
            onMouseDown={(e) => e.stopPropagation()}
            onClick={(e) => {
              e.stopPropagation();
              setViewMode("grid");
            }}
            className={`text-[7px] px-1.5 py-0.5 rounded-full transition-all font-medium cursor-pointer ${
              viewMode === "grid"
                ? "bg-white text-[#1c1917] shadow-xs"
                : "text-[#78716c] hover:text-[#1c1917]"
            }`}
            title="Grid feed view"
          >
            ⊞ Grid
          </button>
          <button
            type="button"
            data-no-flip="true"
            onPointerDown={(e) => e.stopPropagation()}
            onMouseDown={(e) => e.stopPropagation()}
            onClick={(e) => {
              e.stopPropagation();
              setViewMode("featured");
            }}
            className={`text-[7px] px-1.5 py-0.5 rounded-full transition-all font-medium cursor-pointer ${
              viewMode === "featured"
                ? "bg-white text-[#1c1917] shadow-xs"
                : "text-[#78716c] hover:text-[#1c1917]"
            }`}
            title="Single frame spotlight"
          >
            ▢ Insta
          </button>
          <button
            type="button"
            data-no-flip="true"
            onPointerDown={(e) => e.stopPropagation()}
            onMouseDown={(e) => e.stopPropagation()}
            onClick={(e) => {
              e.stopPropagation();
              setViewMode("player");
            }}
            className={`text-[7px] px-1.5 py-0.5 rounded-full transition-all font-medium cursor-pointer ${
              viewMode === "player"
                ? "bg-white text-[#1c1917] shadow-xs"
                : "text-[#78716c] hover:text-[#1c1917]"
            }`}
            title="Melting music player frame"
          >
            ♫ Player
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      {viewMode === "grid" ? (
        /* ── 2x2 GRID OF AUTHENTIC INSTAGRAM POST FRAMES ── */
        <div className="grid grid-cols-2 gap-1.5 my-auto flex-1 items-center py-1">
          {posts.map((post, idx) => {
            const isLiked = likedState[idx] !== false;
            const isSaved = savedState[idx] === true;

            return (
              <div
                key={idx}
                data-no-flip="true"
                role="button"
                onPointerDown={(e) => e.stopPropagation()}
                onMouseDown={(e) => e.stopPropagation()}
                onClick={(e) => {
                  e.stopPropagation();
                  setFeaturedIdx(idx);
                  setViewMode("featured");
                }}
                className="bg-white rounded-[10px] shadow-[0_2px_8px_rgba(0,0,0,0.06),0_1px_2px_rgba(0,0,0,0.04)] border border-neutral-200/90 p-1.5 flex flex-col justify-between cursor-pointer transition-all duration-200 hover:shadow-[0_4px_14px_rgba(0,0,0,0.12)] hover:-translate-y-0.5 group"
                title="Click to view full frame spotlight"
              >
                {/* Header: Circular Avatar + Username + More dots */}
                <div className="flex items-center justify-between px-0.5 mb-1">
                  <div className="flex items-center gap-1 min-w-0">
                    <InstagramAvatar src={post.img} alt={username} size="w-3.5 h-3.5" />
                    <span className="text-[7px] font-semibold text-[#262626] leading-none truncate">
                      {username}
                    </span>
                  </div>
                  <InstagramMoreIcon className="w-2.5 h-2.5 opacity-60 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </div>

                {/* Photo Aperture / Cutout inside White Frame */}
                <div className="relative aspect-[1/0.82] w-full bg-[#f2f2f2] rounded-[3px] overflow-hidden border border-black/[0.06]">
                  <Image
                    src={post.img}
                    alt={post.caption}
                    fill
                    priority
                    className="object-cover transition-transform duration-300 group-hover:scale-105 pointer-events-none"
                    sizes="160px"
                  />
                </div>

                {/* Action Bar (Heart, Comment, Share, Carousel Dots, Bookmark) */}
                <div className="px-0.5 pt-1">
                  <div className="flex items-center justify-between mb-0.5">
                    {/* Left Actions */}
                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        data-no-flip="true"
                        onPointerDown={(e) => e.stopPropagation()}
                        onMouseDown={(e) => e.stopPropagation()}
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleLike(idx);
                        }}
                        className="hover:scale-120 active:scale-90 transition-transform cursor-pointer"
                        aria-label="Like post"
                      >
                        <InstagramHeartIcon filled={isLiked} className="w-2.5 h-2.5 pointer-events-none" />
                      </button>
                      <button
                        type="button"
                        data-no-flip="true"
                        onPointerDown={(e) => e.stopPropagation()}
                        onMouseDown={(e) => e.stopPropagation()}
                        onClick={(e) => {
                          e.stopPropagation();
                          setFeaturedIdx(idx);
                          setViewMode("featured");
                        }}
                        className="hover:scale-120 active:scale-90 transition-transform cursor-pointer"
                        aria-label="Comment"
                      >
                        <InstagramCommentIcon className="w-2.5 h-2.5 pointer-events-none" />
                      </button>
                      <button
                        type="button"
                        data-no-flip="true"
                        onPointerDown={(e) => e.stopPropagation()}
                        onMouseDown={(e) => e.stopPropagation()}
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                        className="hover:scale-120 active:scale-90 transition-transform cursor-pointer"
                        aria-label="Share"
                      >
                        <InstagramShareIcon className="w-2.5 h-2.5 pointer-events-none" />
                      </button>
                    </div>

                    {/* Centered Carousel Indicator Dots */}
                    <InstagramCarouselDots
                      count={3}
                      activeIndex={1}
                      dotClass="w-[2.5px] h-[2.5px]"
                      activeDotClass="w-[3.5px] h-[3.5px]"
                    />

                    {/* Right Bookmark Action */}
                    <button
                      type="button"
                      data-no-flip="true"
                      onPointerDown={(e) => e.stopPropagation()}
                      onMouseDown={(e) => e.stopPropagation()}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleSave(idx);
                      }}
                      className="hover:scale-120 active:scale-90 transition-transform cursor-pointer"
                      aria-label="Save post"
                    >
                      <InstagramBookmarkIcon saved={isSaved} className="w-2.5 h-2.5 pointer-events-none" />
                    </button>
                  </div>

                  {/* Likes */}
                  <p className="text-[6px] font-semibold text-[#262626] leading-none mb-0.5">
                    {formatLikes(post.likes, isLiked)} likes
                  </p>

                  {/* Caption */}
                  <p className="text-[5.5px] text-[#262626] leading-tight truncate">
                    <span className="font-semibold text-[#262626] mr-1">{username}</span>
                    {post.caption}
                  </p>

                  {/* Comments link */}
                  <p className="text-[5px] text-[#8e8e8e] leading-none mt-0.5">
                    View all {post.comments} comments
                  </p>

                  {/* Timestamp */}
                  <p className="text-[4.5px] text-[#8e8e8e] uppercase tracking-[0.06em] leading-none mt-0.5">
                    {post.time}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      ) : viewMode === "featured" ? (
        /* ── SINGLE FEATURED INSTAGRAM FRAME (EXACT SCALE OF TEMPLATE) ── */
        <div className="flex-1 flex flex-col justify-center items-center my-auto w-full px-1">
          <div className="w-full max-w-[325px] bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.12),0_2px_8px_rgba(0,0,0,0.06)] border border-neutral-200/90 p-3 flex flex-col justify-between">
            {/* Header: Circular Avatar + Username + More */}
            <div className="flex items-center justify-between px-1 mb-2">
              <div className="flex items-center gap-2">
                <InstagramAvatar src={currentFeatured.img} alt={username} size="w-7 h-7" />
                <div className="flex flex-col">
                  <span className="text-[11.5px] font-semibold text-[#262626] leading-tight">
                    {username}
                  </span>
                  <span className="text-[8px] text-[#8e8e8e] leading-none mt-0.5">Original audio</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[8.5px] font-mono text-[#78716c] bg-zinc-100 px-1.5 py-0.5 rounded-full">
                  {featuredIdx + 1}/{posts.length}
                </span>
                <InstagramMoreIcon className="w-4 h-4 cursor-pointer text-[#262626]" />
              </div>
            </div>

            {/* Photo Aperture Cutout with Left & Right Arrows */}
            <div className="relative aspect-square w-full bg-[#f2f2f2] rounded-[4px] overflow-hidden border border-black/[0.06] group">
              <Image
                src={currentFeatured.img}
                alt={currentFeatured.caption}
                fill
                priority
                className="object-cover"
                sizes="340px"
              />

              {/* Prev Arrow */}
              {featuredIdx > 0 && (
                <button
                  type="button"
                  data-no-flip="true"
                  onPointerDown={(e) => e.stopPropagation()}
                  onMouseDown={(e) => e.stopPropagation()}
                  onClick={(e) => {
                    e.stopPropagation();
                    setFeaturedIdx((prev) => Math.max(0, prev - 1));
                  }}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white/85 hover:bg-white text-black shadow-md flex items-center justify-center text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                  aria-label="Previous photo"
                >
                  ‹
                </button>
              )}

              {/* Next Arrow */}
              {featuredIdx < posts.length - 1 && (
                <button
                  type="button"
                  data-no-flip="true"
                  onPointerDown={(e) => e.stopPropagation()}
                  onMouseDown={(e) => e.stopPropagation()}
                  onClick={(e) => {
                    e.stopPropagation();
                    setFeaturedIdx((prev) => Math.min(posts.length - 1, prev + 1));
                  }}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white/85 hover:bg-white text-black shadow-md flex items-center justify-center text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                  aria-label="Next photo"
                >
                  ›
                </button>
              )}
            </div>

            {/* Actions Bar */}
            <div className="px-1 pt-2.5">
              <div className="flex items-center justify-between mb-1.5">
                {/* Left 3 Action Icons */}
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    data-no-flip="true"
                    onPointerDown={(e) => e.stopPropagation()}
                    onMouseDown={(e) => e.stopPropagation()}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleLike(featuredIdx);
                    }}
                    className="hover:scale-120 active:scale-90 transition-transform p-0.5 cursor-pointer"
                    aria-label="Like photo"
                  >
                    <InstagramHeartIcon filled={likedState[featuredIdx] !== false} className="w-5 h-5 pointer-events-none" />
                  </button>
                  <button
                    type="button"
                    data-no-flip="true"
                    onPointerDown={(e) => e.stopPropagation()}
                    onMouseDown={(e) => e.stopPropagation()}
                    className="hover:scale-120 active:scale-90 transition-transform p-0.5 cursor-pointer"
                    aria-label="Comment"
                  >
                    <InstagramCommentIcon className="w-5 h-5 pointer-events-none" />
                  </button>
                  <button
                    type="button"
                    data-no-flip="true"
                    onPointerDown={(e) => e.stopPropagation()}
                    onMouseDown={(e) => e.stopPropagation()}
                    className="hover:scale-120 active:scale-90 transition-transform p-0.5 cursor-pointer"
                    aria-label="Share"
                  >
                    <InstagramShareIcon className="w-5 h-5 pointer-events-none" />
                  </button>
                </div>

                {/* Centered Carousel Indicator Dots */}
                <InstagramCarouselDots
                  count={posts.length}
                  activeIndex={featuredIdx}
                  dotClass="w-[5px] h-[5px]"
                  activeDotClass="w-[6px] h-[6px]"
                />

                {/* Right Bookmark Action */}
                <button
                  type="button"
                  data-no-flip="true"
                  onPointerDown={(e) => e.stopPropagation()}
                  onMouseDown={(e) => e.stopPropagation()}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleSave(featuredIdx);
                  }}
                  className="hover:scale-120 active:scale-90 transition-transform p-0.5 cursor-pointer"
                  aria-label="Bookmark photo"
                >
                  <InstagramBookmarkIcon saved={savedState[featuredIdx] === true} className="w-5 h-5 pointer-events-none" />
                </button>
              </div>

              {/* Likes */}
              <p className="text-[10px] font-semibold text-[#262626] leading-tight mb-1">
                {formatLikes(currentFeatured.likes, likedState[featuredIdx] !== false)} likes
              </p>

              {/* Caption */}
              <p className="text-[9.5px] text-[#262626] leading-snug">
                <span className="font-semibold text-[#262626] mr-1.5">{username}</span>
                {currentFeatured.caption}
              </p>

              {/* Comments link */}
              <p className="text-[8.5px] text-[#8e8e8e] leading-tight mt-1 hover:underline cursor-pointer">
                View all {currentFeatured.comments} comments
              </p>

              {/* Timestamp */}
              <p className="text-[7.5px] text-[#8e8e8e] uppercase tracking-[0.08em] leading-tight mt-1">
                {currentFeatured.time}
              </p>
            </div>
          </div>
        </div>
      ) : (
        /* ── MELTING MUSIC PLAYER FRAME SPOTLIGHT ── */
        <div className="flex-1 flex flex-col justify-center items-center my-auto w-full px-2 py-1">
          <div className="w-[235px]">
            <MeltingMusicPlayerFrame
              src={currentFeatured.img}
              alt={currentFeatured.caption}
              title="iPhone"
              artist={`Now Playing: ${currentFeatured.caption.split("#")[0].trim()}`}
              onPrev={() => setFeaturedIdx((prev) => (prev > 0 ? prev - 1 : posts.length - 1))}
              onNext={() => setFeaturedIdx((prev) => (prev < posts.length - 1 ? prev + 1 : 0))}
            />
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="text-center pt-1 border-t border-[#1c1917]/10 flex items-center justify-between px-1">
        <span className="text-[7px] italic text-[#78716c] font-serif">
          Always photogenic, endlessly iconic
        </span>
        {viewMode !== "grid" && (
          <button
            type="button"
            data-no-flip="true"
            onPointerDown={(e) => e.stopPropagation()}
            onMouseDown={(e) => e.stopPropagation()}
            onClick={(e) => {
              e.stopPropagation();
              setViewMode("grid");
            }}
            className="text-[7.5px] font-semibold text-[#6b5836] hover:underline cursor-pointer"
          >
            ← Back to 4-Post Feed
          </button>
        )}
      </div>
    </div>
  );
}

/* ==========================================================================
 * 5. PAGE 5: CHAPTER 01 - THINGS ABOUT HER (Spread 3, Left Page)
 * ========================================================================== */
export function PageThingsAbout() {
  return (
    <div className="relative w-full h-full bg-[#faf8f4] text-[#1c1917] p-5 select-none overflow-hidden flex flex-col justify-between">
      {/* Top Header */}
      <div className="text-center border-b border-[#1c1917]/15 pb-2">
        <span className="text-[8px] font-mono tracking-[0.25em] text-[#78716c] uppercase block">
          CHAPTER 01
        </span>
        <div className="mt-1">
          <span
            className="text-[14px] tracking-[0.14em] uppercase text-[#44403c] block font-light"
            style={{ fontFamily: "'Bodoni Moda', serif" }}
          >
            THINGS ABOUT
          </span>
          <h2
            className="text-[34px] font-normal tracking-[-0.03em] uppercase leading-none mt-0.5"
            style={{
              fontFamily: "'Bodoni Moda', serif",
              color: FLIPBOOK_CONFIG.accentColor,
            }}
          >
            {FLIPBOOK_CONFIG.name}
          </h2>
        </div>
        <div className="flex items-center justify-center gap-2 mt-2">
          <div className="h-[0.5px] w-8 bg-[#1c1917]/20" />
          <span className="text-[7px] tracking-[0.2em] font-medium text-[#78716c] uppercase">
            GET TO KNOW MY SWEETEST GIRL &amp; THE LOVE OF MY LIFE
          </span>
          <div className="h-[0.5px] w-8 bg-[#1c1917]/20" />
        </div>
      </div>

      {/* Main Body: Hero Photo (Left) + Quote & Polaroid (Right) */}
      <div className="flex gap-4 my-auto h-[68%]">
        {/* Left Hero Photo */}
        <div className="relative w-[52%] h-full bg-[#e7e5e4] shadow-md rounded-[1px] overflow-hidden">
          <Image src="/ref/girl8.jpg" alt="Sweety Hero" fill priority className="object-cover object-top" sizes="200px" />
        </div>

        {/* Right Side: Big Quote & Mini Taped Polaroid */}
        <div className="w-[48%] flex flex-col justify-between">
          {/* Big Quote */}
          <div>
            <span
              className="text-[44px] leading-none block -mb-3 opacity-60"
              style={{ fontFamily: "'Bodoni Moda', serif", color: FLIPBOOK_CONFIG.accentColor }}
            >
              “
            </span>
            <p
              className="text-[12px] italic leading-[1.35] text-[#292524] font-medium"
              style={{ fontFamily: "'Bodoni Moda', Georgia, serif" }}
            >
              Being with you makes every ordinary day feel like the sweetest dream come true.
            </p>
          </div>

          {/* Mini Polaroid with Washi Tape */}
          <div className="relative bg-white p-1 pb-3 shadow-md rounded-[1px] rotate-[3deg] border border-black/5 mt-auto">
            {/* Washi tape strip */}
            <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-8 h-3 bg-[#d6d3d1]/80 shadow-xs rotate-[-2deg]" />
            <div className="relative aspect-square w-full bg-[#f5f5f4] overflow-hidden">
              <Image src="/ref/girl.jpg" alt="Sweety Mini" fill priority className="object-cover object-top" sizes="120px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ==========================================================================
 * 6. PAGE 6: 12 FACTS & TRAITS WITH PHOTO STRIP (Spread 3, Right Page)
 * ========================================================================== */
export function PageFactsWithPhotos() {
  const factsCol1 = [
    { num: "01", t: "MESMERIZING EYES", d: "I could get lost in them forever" },
    { num: "02", t: "SWEETEST SMILE", d: "Melts away all my stress in a second" },
    { num: "03", t: "GRACEFUL DANCER", d: "Dancing to Maula Mere so beautifully" },
    { num: "04", t: "TRADITIONAL CHARM", d: "Looks like an angel in saree & lehenga" },
    { num: "05", t: "HER SILVER JHUMKAS", d: "The cute chime every time she turns" },
    { num: "06", t: "NOSE RING GLOW", d: "That tiny sparkle made just for her" },
  ];

  const factsCol2 = [
    { num: "07", t: "CUTE GIGGLES", d: "Her infectious laugh that makes my day" },
    { num: "08", t: "PUREST SOUL", d: "Caring, genuine, and so full of love" },
    { num: "09", t: "MY SAFE PLACE", d: "Her voice brings me instant peace" },
    { num: "10", t: "MY FOREVER CRUSH", d: "Falling more in love every single day" },
    { num: "11", t: "SWEET 15 MAGIC", d: "Growing more gorgeous year after year" },
    { num: "12", t: "FOREVER MINE", d: "Held in my heart today and always" },
  ];

  return (
    <div className="relative w-full h-full bg-[#faf8f4] text-[#1c1917] p-3 select-none overflow-hidden flex gap-2">
      {/* Left Columns (Facts 01 - 12) */}
      <div className="w-[64%] flex gap-2 justify-between py-1">
        {/* Column 1 */}
        <div className="w-[49%] flex flex-col justify-between">
          {factsCol1.map((f, i) => (
            <div key={i} className="border-b border-[#1c1917]/10 pb-1">
              <span className="font-mono text-[9px] font-bold text-[#6b5836] block">{f.num}</span>
              <span className="text-[7.5px] font-bold tracking-wider uppercase text-[#1c1917] block leading-tight">
                {f.t}
              </span>
              <span className="text-[6.5px] text-[#78716c] block leading-tight">{f.d}</span>
            </div>
          ))}
        </div>

        {/* Column 2 */}
        <div className="w-[49%] flex flex-col justify-between">
          {factsCol2.map((f, i) => (
            <div key={i} className="border-b border-[#1c1917]/10 pb-1">
              <span className="font-mono text-[9px] font-bold text-[#6b5836] block">{f.num}</span>
              <span className="text-[7.5px] font-bold tracking-wider uppercase text-[#1c1917] block leading-tight">
                {f.t}
              </span>
              <span className="text-[6.5px] text-[#78716c] block leading-tight">{f.d}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right Column: Vertical Stack of 6 Photos */}
      <div className="w-[36%] flex flex-col justify-between gap-1 py-1">
        {[
          "/ref/girl1.jpg",
          "/ref/girl2.jpg",
          "/ref/girl3.jpg",
          "/ref/girl4.jpg",
          "/ref/girl5.jpg",
          "/ref/girl6.jpg",
        ].map((img, idx) => (
          <div key={idx} className="relative w-full aspect-[4/3] bg-[#e7e5e4] shadow-xs rounded-[1px] overflow-hidden">
            <Image src={img} alt={`Sweety Thumb ${idx}`} fill priority className="object-cover object-center" sizes="120px" />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ==========================================================================
 * 7. PAGE 7: "WHAT I LOVE ABOUT YOU.." (Spread 4, Left Page - From New Template)
 * ========================================================================== */
export function PageThingsILoveAboutYou() {
  const reasons = [
    {
      num: "01",
      title: "YOUR RADIANT SMILE",
      desc: "The way your face lights up whenever we talk, making my entire day brighter.",
      img: "/ref/girl1.jpg",
    },
    {
      num: "02",
      title: "YOUR PURE HEART",
      desc: "The sweetest, most caring soul who understands me better than anyone ever could.",
      img: "/ref/girl2.jpg",
    },
    {
      num: "03",
      title: "YOUR UNMATCHED GRACE",
      desc: "From your gorgeous looks to your sweet selfies, you leave me in awe.",
      img: "/ref/girl3.jpg",
    },
    {
      num: "04",
      title: "OUR SWEET TALKS",
      desc: "Late night laughs, whispering dreams, and all the silly moments only we share.",
      img: "/ref/girl4.jpg",
    },
    {
      num: "05",
      title: "JUST BEING MY SWEETY",
      desc: "No one in this world compares to you. You are my princess, my love, and my world.",
      img: "/ref/girl5.jpg",
    },
  ];

  return (
    <div className="relative w-full h-full bg-[#faf8f4] text-[#1c1917] p-4 select-none overflow-hidden flex flex-col justify-between">
      {/* Header */}
      <div className="border-b border-[#1c1917]/15 pb-1.5">
        <h2
          className="text-[26px] font-medium tracking-tight text-[#1c1917] leading-none"
          style={{ fontFamily: "'Bodoni Moda', serif" }}
        >
          5 reasons you own my heart..
        </h2>
        <span
          className="text-[15px] font-normal block mt-0.5"
          style={{ fontFamily: "'Aesthetic Script', 'Playfair Display', cursive", color: FLIPBOOK_CONFIG.accentColor }}
        >
          5 reasons why you are the love of my life
        </span>
      </div>

      {/* 5 Reasons Stack */}
      <div className="my-auto space-y-2">
        {reasons.map((r, i) => (
          <div key={i} className="flex items-center gap-3 border-b border-[#1c1917]/10 pb-1.5">
            {/* Small Photo Thumbnail */}
            <div className="relative w-9 h-11 bg-[#e7e5e4] rounded-[1px] shadow-xs overflow-hidden shrink-0 border border-black/10">
              <Image src={r.img} alt={`Reason ${r.num}`} fill priority className="object-cover" sizes="50px" />
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="flex items-baseline gap-1.5">
                <span className="font-mono text-[9px] font-bold text-[#6b5836]">{r.num}.</span>
                <span className="text-[8px] font-bold tracking-wider uppercase text-[#1c1917]">
                  {r.title}
                </span>
              </div>
              <p className="text-[7.5px] text-[#57534e] leading-tight mt-0.5">
                {r.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Footer */}
      <div className="text-right border-t border-[#1c1917]/15 pt-1">
        <span className="text-[8px] font-mono tracking-widest text-[#78716c] uppercase">
          FOREVER YOURS · ALL MY LOVE ♡
        </span>
      </div>
    </div>
  );
}

/* ==========================================================================
 * 8. PAGE 8: "MEET THE BIRTHDAY QUEEN" (Spread 4, Right Page - From New Template)
 * ========================================================================== */
export function PageMeetTheQueen() {
  return (
    <div className="relative w-full h-full bg-[#f6f2ea] text-[#1c1917] p-5 select-none overflow-hidden flex flex-col items-center justify-between">
      {/* Background Floral Overlay */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(#d6c7b2 1.5px, transparent 1.5px), radial-gradient(#d6c7b2 1.5px, #f6f2ea 1.5px)",
          backgroundSize: "24px 24px",
          backgroundPosition: "0 0, 12px 12px",
        }}
      />

      {/* Top Header */}
      <div className="text-center relative z-10">
        <span className="text-[7.5px] font-mono tracking-[0.25em] text-[#78716c] uppercase block">
          PORTRAIT SPOTLIGHT
        </span>
        <h3
          className="text-[20px] tracking-[0.1em] uppercase text-[#1c1917] font-normal mt-0.5"
          style={{ fontFamily: "'Bodoni Moda', serif" }}
        >
          {FLIPBOOK_CONFIG.fullName}
        </h3>
      </div>

      {/* Central Glowing Polaroid Frame */}
      <div className="relative z-10 bg-white p-2.5 pb-6 shadow-2xl rounded-[1px] rotate-[-2deg] border border-black/10 w-[78%]">
        {/* Washi tape at top */}
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-12 h-3.5 bg-[#e7e5e4]/90 shadow-xs rotate-[1deg]" />

        {/* Photo */}
        <div className="relative aspect-[4/5] w-full bg-[#e7e5e4] overflow-hidden">
          <Image src="/ref/girl10.jpg" alt="Meet the queen Sweety" fill priority className="object-cover object-top" sizes="260px" />
        </div>

        {/* Handwritten Polaroid Caption */}
        <div className="text-center mt-2.5">
          <p
            className="text-[20px] font-normal text-[#1c1917] leading-none"
            style={{ fontFamily: "'Aesthetic Script', 'Playfair Display', cursive", color: FLIPBOOK_CONFIG.accentColor }}
          >
            Meet my birthday princess
          </p>
          <span className="text-[7px] text-zinc-500 tracking-wider font-mono block mt-1 uppercase">
            15 NEVER LOOKED SO BEAUTIFUL
          </span>
        </div>
      </div>

      {/* Bottom Tag */}
      <div className="relative z-10 text-center">
        <span className="text-[7.5px] italic text-[#78716c] font-serif">
          {FLIPBOOK_CONFIG.date} • SWEET 15 SPECIAL EDITION
        </span>
      </div>
    </div>
  );
}

/* ==========================================================================
 * 9. PAGE 9: CHAPTER 02 - FAVOURITE MEMORY OF US (Spread 5, Left Page)
 * ========================================================================== */
export function PageFavouriteMemory() {
  return (
    <div className="relative w-full h-full bg-[#faf8f4] text-[#1c1917] p-4 select-none overflow-hidden flex flex-col justify-between">
      {/* Header */}
      <div>
        <span className="text-[8px] font-mono tracking-[0.25em] text-[#78716c] uppercase block">
          CHAPTER 02
        </span>
        <div className="mt-0.5">
          <h2
            className="text-[28px] font-normal tracking-[-0.02em] uppercase leading-none"
            style={{ fontFamily: "'Bodoni Moda', serif" }}
          >
            FAVOURITE
          </h2>
          <span
            className="text-[22px] italic leading-none block -mt-0.5"
            style={{ fontFamily: "'Bodoni Moda', Georgia, serif", color: FLIPBOOK_CONFIG.accentColor }}
          >
            Memory Of Us
          </span>
        </div>
        <div className="border-t border-b border-[#1c1917]/15 py-0.5 mt-1 text-center">
          <span className="text-[6.5px] tracking-[0.16em] uppercase text-[#78716c] font-medium block">
            EVERY MOMENT WITH YOU BECOMES MY GREATEST TREASURE
          </span>
        </div>
      </div>

      {/* Center Hero: Melting Music Player Frame */}
      <div className="flex items-center justify-center my-auto py-1">
        <div className="w-[195px]">
          <MeltingMusicPlayerFrame
            src="/ref/girl.jpg"
            alt="Favourite Memory"
            title="iPhone"
            artist="Our Love Story • Sweety's Birthday"
          />
        </div>
      </div>

      {/* Bottom Editorial Caption */}
      <div className="border-t border-[#1c1917]/15 pt-1.5">
        <p className="text-[8.5px] text-[#44403c] leading-[1.35] text-justify tracking-wide">
          From our late night talks to every sweet laugh we share, every single second with you is etched into my heart.
          Being with you is the greatest blessing of my life. Happy Birthday to the girl who holds my entire world!
        </p>
      </div>
    </div>
  );
}

/* ==========================================================================
 * 10. PAGE 10: NUMBERED MEMORIES COLLAGE (01 - 06) (Spread 5, Right Page)
 * ========================================================================== */
export function PageNumberedMemories() {
  return (
    <div className="relative w-full h-full bg-[#faf8f4] text-[#1c1917] p-3.5 select-none overflow-hidden flex flex-col justify-between">
      {/* Row 1: Card 01 + Horizontal Photo */}
      <div className="flex gap-2 h-[31%]">
        <div className="w-[32%] bg-white p-2 shadow-xs border border-[#1c1917]/10 flex flex-col justify-between">
          <span className="font-mono text-[10px] font-bold text-[#6b5836]">01</span>
          <span className="text-[8px] font-bold uppercase tracking-wider text-[#1c1917] leading-tight">
            THE DAY WE BEGAN
          </span>
          <span className="text-[6.5px] text-[#78716c] leading-tight">When you first stole my heart</span>
        </div>
        <div className="w-[68%] relative bg-[#e7e5e4] shadow-sm overflow-hidden">
          <Image src="/ref/girl3.jpg" alt="Sweety Memory 1" fill priority className="object-cover object-center" sizes="240px" />
        </div>
      </div>

      {/* Row 2: Photo + Card 02 + Card 03 + Photo */}
      <div className="flex gap-2 h-[31%]">
        <div className="w-[28%] relative bg-[#e7e5e4] shadow-sm overflow-hidden">
          <Image src="/ref/girl4.jpg" alt="Sweety Memory 2" fill priority className="object-cover object-top" sizes="120px" />
        </div>
        <div className="w-[44%] bg-white p-2 shadow-xs border border-[#1c1917]/10 flex flex-col justify-between">
          <span className="font-mono text-[10px] font-bold text-[#6b5836]">02 &amp; 03</span>
          <span className="text-[8px] font-bold uppercase tracking-wider text-[#1c1917] leading-tight">
            SWEET TALKS &amp; SMILES
          </span>
          <span className="text-[6.5px] text-[#78716c] leading-tight">Laughing together for hours</span>
        </div>
        <div className="w-[28%] relative bg-[#e7e5e4] shadow-sm overflow-hidden">
          <Image src="/ref/girl5.jpg" alt="Sweety Memory 3" fill priority className="object-cover object-top" sizes="120px" />
        </div>
      </div>

      {/* Row 3: Wide Photo + Card 04, 05, 06 */}
      <div className="flex gap-2 h-[33%]">
        <div className="w-[60%] relative bg-[#e7e5e4] shadow-sm overflow-hidden">
          <Image src="/ref/girl6.jpg" alt="Sweety Memory 4" fill priority className="object-cover object-center" sizes="220px" />
        </div>
        <div className="w-[40%] bg-white p-2 shadow-xs border border-[#1c1917]/10 flex flex-col justify-between">
          <span className="font-mono text-[10px] font-bold text-[#6b5836]">04 - 06</span>
          <span className="text-[8px] font-bold uppercase tracking-wider text-[#1c1917] leading-tight">
            FOREVER &amp; ALWAYS
          </span>
          <span className="text-[6.5px] text-[#78716c] leading-tight">Holding your hand into our future</span>
        </div>
      </div>
    </div>
  );
}

/* ==========================================================================
 * 💖 SPREAD 6: "MY ONLY LOVE" 11-PHOTO HEART MOSAIC SPREAD (850px x 600px)
 * ========================================================================== */

export function HeartMosaicCanvas() {
  const heartTiles = [
    // Row 1 (Top Lobes)
    { id: 1, src: "/ref/girl1.jpg", style: { left: "275px", top: "92px", width: "146px", height: "90px" } },
    { id: 2, src: "/ref/girl2.jpg", style: { left: "429px", top: "92px", width: "146px", height: "90px" } },

    // Row 2 (3 Main Tiles)
    { id: 3, src: "/ref/girl3.jpg", style: { left: "197px", top: "186px", width: "146px", height: "114px" } },
    { id: 4, src: "/ref/girl.jpg", style: { left: "347px", top: "186px", width: "156px", height: "114px" } },
    { id: 5, src: "/ref/girl4.jpg", style: { left: "507px", top: "186px", width: "146px", height: "114px" } },

    // Row 3 (3 Mid Tiles)
    { id: 6, src: "/ref/girl5.jpg", style: { left: "242px", top: "304px", width: "118px", height: "86px" } },
    { id: 7, src: "/ref/girl6.jpg", style: { left: "364px", top: "304px", width: "122px", height: "86px" } },
    { id: 8, src: "/ref/girl7.jpg", style: { left: "490px", top: "304px", width: "118px", height: "86px" } },

    // Row 4 (2 Lower Tiles)
    { id: 9, src: "/ref/girl8.jpg", style: { left: "311px", top: "394px", width: "110px", height: "72px" } },
    { id: 10, src: "/ref/girl9.jpg", style: { left: "429px", top: "394px", width: "110px", height: "72px" } },

    // Row 5 (Bottom Tip Tile)
    { id: 11, src: "/ref/girl10.jpg", style: { left: "383px", top: "470px", width: "84px", height: "62px" } },
  ];

  return (
    <div
      className="w-[850px] h-[600px] relative select-none overflow-hidden"
      style={{
        background: "radial-gradient(ellipse at 50% 50%, #ffffff 25%, #fff2f5 65%, #fde6ec 100%)",
      }}
    >
      {/* 1. Top Header: "My only love" */}
      <div className="absolute top-[26px] left-0 w-[850px] flex items-center justify-center z-30 select-none">
        <div
          className="flex items-center text-[28px] font-normal tracking-[0.02em] text-[#4a2e2e] leading-none"
          style={{ fontFamily: "'Playfair Display', 'Bodoni Moda', Georgia, serif" }}
        >
          <span className="w-[425px] text-right pr-3.5">My only</span>
          <span className="w-[425px] text-left pl-3.5">love</span>
        </div>
      </div>

      {/* 2. Top-Left Ribbon Bow Doodle */}
      <div className="absolute top-[34px] left-[105px] z-20 pointer-events-none select-none">
        <svg viewBox="0 0 40 40" className="w-10 h-10 text-[#ea7a94] opacity-80" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 18c-3-6-10-8-12-4s2 8 8 5l4-1" />
          <path d="M20 18c3-6 10-8 12-4s-2 8-8 5l-4-1" />
          <circle cx="20" cy="18" r="2.5" fill="#ea7a94" />
          <path d="M19 20c-2 6-6 12-9 14" />
          <path d="M21 20c2 6 6 12 9 14" />
        </svg>
      </div>

      {/* 3. Top-Right Strawberry Heart Doodle */}
      <div className="absolute top-[34px] right-[105px] z-20 pointer-events-none select-none">
        <svg viewBox="0 0 40 40" className="w-11 h-11 text-[#ea7a94] opacity-80" fill="none" stroke="currentColor" strokeWidth="1.4">
          <path d="M20 32s-10-6.5-13-13c-2.5-5.5 1-11 6.5-10 3.5.7 5.5 4 6.5 5 1-1 3-4.3 6.5-5 5.5-1 9 4.5 6.5 10-3 6.5-13 13-13 13z" strokeDasharray="2 2" />
          <path d="M16 19c0 3 2 6 4 7 2-1 4-4 4-7s-1.5-4-4-4-4 1-4 4z" fill="#f43f5e" opacity="0.8" stroke="none" />
          <path d="M18 14c0-2 2-3 2-3s2 1 2 3" stroke="#15803d" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>

      {/* 4. Mid-Left Tied Ribbon Bow Doodle */}
      <div className="absolute top-[300px] left-[115px] z-20 pointer-events-none select-none">
        <svg viewBox="0 0 32 32" className="w-7 h-7 text-[#ea7a94] opacity-75" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
          <path d="M16 15c-3-4-8-5-9-2s2 5 6 3l3-1" />
          <path d="M16 15c3-4 8-5 9-2s-2 5-6 3l-3-1" />
          <circle cx="16" cy="15" r="2" fill="#ea7a94" />
          <path d="M15 16c-1.5 4-4 8-6 10" />
          <path d="M17 16c1.5 4 4 8 6 10" />
        </svg>
      </div>

      {/* 5. Bottom-Left Heartfelt Quote */}
      <div className="absolute bottom-[32px] left-[175px] max-w-[215px] z-20 select-none">
        <p className="text-[12px] italic text-[#4a2e2e]/90 leading-[1.35]" style={{ fontFamily: "serif" }}>
          To the girl who holds my whole heart,
          <br />
          Happy Birthday Sweety. Forever yours.
        </p>
      </div>

      {/* 6. Bottom-Right Sparkle Ribbon Flourish */}
      <div className="absolute bottom-[34px] right-[175px] z-20 select-none">
        <div className="flex items-center gap-1.5 text-[#ea7a94] opacity-80 text-[13px] tracking-widest font-mono">
          <span>✦</span>
          <span>˚ ༘</span>
          <span className="text-[16px]">♡</span>
          <span>⋆｡˚</span>
        </div>
      </div>

      {/* 7. The 11-Photo Heart Shape */}
      <div className="relative w-full h-full z-10">
        {heartTiles.map((tile) => (
          <div
            key={tile.id}
            className="absolute bg-white shadow-md rounded-[1px] border border-white/90 overflow-hidden transition-transform duration-300 hover:scale-[1.03] hover:z-30"
            style={tile.style}
          >
            <div className="relative w-full h-full bg-[#fceef2]">
              <Image
                src={tile.src}
                alt={`Heart memory ${tile.id}`}
                fill
                priority
                className="object-cover"
                sizes="180px"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Left half of the "My only love" 2-page heart spread */
export function PageHeartSpreadLeft() {
  return (
    <div className="relative w-[425px] h-[600px] overflow-hidden select-none">
      <div className="absolute top-0 left-0 w-[850px] h-[600px]">
        <HeartMosaicCanvas />
      </div>
    </div>
  );
}

/** Right half of the "My only love" 2-page heart spread */
export function PageHeartSpreadRight() {
  return (
    <div className="relative w-[425px] h-[600px] overflow-hidden select-none">
      <div className="absolute top-0 left-[-425px] w-[850px] h-[600px]">
        <HeartMosaicCanvas />
      </div>
    </div>
  );
}

/* ==========================================================================
 * 11. PAGE 11: CHAPTER 03 - PHOTO DUMP (Part 1) (Spread 6, Left Page)
 * ========================================================================== */
export function PagePhotoDumpPart1() {
  return (
    <div className="relative w-full h-full bg-[#faf8f4] text-[#1c1917] p-3.5 select-none overflow-hidden flex flex-col justify-between">
      {/* Header Top Left + Photo Top Right */}
      <div className="flex gap-2 h-[28%]">
        <div className="w-[50%] flex flex-col justify-center">
          <span className="text-[7.5px] font-mono tracking-[0.2em] text-[#78716c] uppercase block">
            CHAPTER 03
          </span>
          <h2
            className="text-[28px] font-normal tracking-tight uppercase leading-none mt-0.5"
            style={{ fontFamily: "'Bodoni Moda', serif" }}
          >
            PHOTO
          </h2>
          <span
            className="text-[24px] italic leading-none block -mt-1"
            style={{ fontFamily: "'Bodoni Moda', Georgia, serif", color: FLIPBOOK_CONFIG.accentColor }}
          >
            DUMP
          </span>
          <span className="text-[6.5px] tracking-[0.16em] uppercase text-[#78716c] mt-1 block">
            COLLECTION OF LITTLE MOMENTS
          </span>
        </div>
        <div className="w-[50%] relative bg-[#e7e5e4] shadow-sm overflow-hidden">
          <Image src="/ref/girl3.jpg" alt="Dump 1" fill priority className="object-cover object-top" sizes="180px" />
        </div>
      </div>

      {/* Middle Row: 2 Photos */}
      <div className="flex gap-2 h-[26%]">
        <div className="w-[50%] relative bg-[#e7e5e4] shadow-sm overflow-hidden">
          <Image src="/ref/girl4.jpg" alt="Dump 2" fill priority className="object-cover object-top" sizes="180px" />
        </div>
        <div className="w-[50%] relative bg-[#e7e5e4] shadow-sm overflow-hidden">
          <Image src="/ref/girl5.jpg" alt="Dump 3" fill priority className="object-cover object-center" sizes="180px" />
        </div>
      </div>

      {/* Lower Row: Polaroid Frame + 35mm Filmstrip */}
      <div className="flex gap-2 h-[24%] items-center">
        {/* Polaroid frame */}
        <div className="w-[38%] bg-white p-1 pb-3 shadow-md border border-black/10">
          <div className="relative aspect-square w-full bg-[#e7e5e4] overflow-hidden">
            <Image src="/ref/girl6.jpg" alt="Dump Polar" fill priority className="object-cover object-top" sizes="120px" />
          </div>
        </div>
        {/* Horizontal Filmstrip */}
        <div className="w-[62%] h-full">
          <FilmstripFrame src="/ref/girl7.jpg" className="w-full h-full" orientation="horizontal" />
        </div>
      </div>

      {/* Bottom Wide Photo */}
      <div className="relative w-full h-[18%] bg-[#e7e5e4] shadow-sm overflow-hidden">
        <Image src="/ref/girl8.jpg" alt="Dump Bottom" fill priority className="object-cover object-center" sizes="360px" />
      </div>
    </div>
  );
}

/* ==========================================================================
 * 12. PAGE 12: SCATTERED POLAROIDS MOSAIC (Spread 6, Right Page - From New Template)
 * ========================================================================== */
export function PageScatteredPolaroids() {
  return (
    <div
      className="relative w-full h-full p-4 select-none overflow-hidden"
      style={{
        backgroundColor: "#f7f4ed",
        backgroundImage: "linear-gradient(to right, rgba(0,0,0,0.03) 1px, transparent 1px)",
        backgroundSize: "16px 100%",
      }}
    >
      {/* Top Header */}
      <div className="text-center mb-1">
        <span className="text-[7.5px] font-mono tracking-[0.2em] text-[#78716c] uppercase">
          POLAROID ARCHIVE
        </span>
        <h3
          className="text-[21px] font-normal text-[#1c1917] leading-none mt-0.5"
          style={{ fontFamily: "'Aesthetic Script', 'Playfair Display', cursive", color: FLIPBOOK_CONFIG.accentColor }}
        >
          Cherished little memories
        </h3>
      </div>

      {/* 5 Layered Overlapping Polaroids */}
      <div className="relative w-full h-[88%]">
        {/* Polaroid 1 (Top Left) */}
        <div className="absolute top-[1.5%] left-[3%] w-[46%] bg-white p-1.5 pb-5 shadow-lg rounded-[1px] rotate-[-5deg] border border-black/10 z-10">
          <div className="relative aspect-[4/3] w-full bg-[#e7e5e4] overflow-hidden">
            <Image src="/ref/girl1.jpg" alt="Snap 1" fill priority className="object-cover object-top" sizes="160px" />
          </div>
          <span className="text-[13.5px] font-normal text-[#1c1917] block text-center mt-1 leading-tight" style={{ fontFamily: "'Aesthetic Script', 'Playfair Display', cursive" }}>
            candid laughs
          </span>
        </div>

        {/* Polaroid 2 (Top Right) */}
        <div className="absolute top-[1.5%] right-[3%] w-[46%] bg-white p-1.5 pb-5 shadow-lg rounded-[1px] rotate-[4deg] border border-black/10 z-10">
          <div className="relative aspect-[4/3] w-full bg-[#e7e5e4] overflow-hidden">
            <Image src="/ref/girl2.jpg" alt="Snap 2" fill priority className="object-cover object-top" sizes="160px" />
          </div>
          <span className="text-[13.5px] font-normal text-[#1c1917] block text-center mt-1 leading-tight" style={{ fontFamily: "'Aesthetic Script', 'Playfair Display', cursive" }}>
            golden times
          </span>
        </div>

        {/* Polaroid 3 (Center Foreground) */}
        <div className="absolute top-[32%] left-[22%] w-[56%] bg-white p-2 pb-6 shadow-2xl rounded-[1px] rotate-[-1deg] border border-black/15 z-20">
          {/* Washi tape strip */}
          <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-10 h-3 bg-[#e7e5e4]/90 shadow-xs rotate-[2deg]" />
          <div className="relative aspect-square w-full bg-[#e7e5e4] overflow-hidden">
            <Image src="/ref/girl3.jpg" alt="Snap 3" fill priority className="object-cover object-top" sizes="180px" />
          </div>
          <span className="text-[18px] font-normal text-[#1c1917] block text-center mt-1.5 leading-tight" style={{ fontFamily: "'Aesthetic Script', 'Playfair Display', cursive", color: FLIPBOOK_CONFIG.accentColor }}>
            unforgettable moments
          </span>
        </div>

        {/* Polaroid 4 (Bottom Left) */}
        <div className="absolute bottom-[2%] left-[3%] w-[45%] bg-white p-1.5 pb-4.5 shadow-lg rounded-[1px] rotate-[3deg] border border-black/10 z-10">
          <div className="relative aspect-[4/3] w-full bg-[#e7e5e4] overflow-hidden">
            <Image src="/ref/girl4.jpg" alt="Snap 4" fill priority className="object-cover object-center" sizes="160px" />
          </div>
          <span className="text-[13.5px] font-normal text-[#1c1917] block text-center mt-1 leading-tight" style={{ fontFamily: "'Aesthetic Script', 'Playfair Display', cursive" }}>
            best vibes only
          </span>
        </div>

        {/* Polaroid 5 (Bottom Right) */}
        <div className="absolute bottom-[3%] right-[3%] w-[47%] bg-white p-1.5 pb-4.5 shadow-lg rounded-[1px] rotate-[-4deg] border border-black/10 z-10">
          <div className="relative aspect-[4/3] w-full bg-[#e7e5e4] overflow-hidden">
            <Image src="/ref/girl5.jpg" alt="Snap 5" fill priority className="object-cover object-top" sizes="160px" />
          </div>
          <span className="text-[13.5px] font-normal text-[#1c1917] block text-center mt-1 leading-tight" style={{ fontFamily: "'Aesthetic Script', 'Playfair Display', cursive" }}>
            forever &amp; always
          </span>
        </div>
      </div>
    </div>
  );
}

/* ==========================================================================
 * 13. PAGE 13: CHAPTER 04 - HEARTFELT MESSAGE (Spread 7, Left Page)
 * ========================================================================== */
export function PageHeartfeltMessage() {
  return (
    <div className="relative w-full h-full bg-[#faf8f4] text-[#1c1917] p-5 select-none overflow-hidden flex flex-col justify-between">
      {/* Header */}
      <div className="border-b border-[#1c1917]/15 pb-2 text-center">
        <span className="text-[8px] font-mono tracking-[0.25em] text-[#78716c] uppercase block">
          CHAPTER 04
        </span>
        <h2
          className="text-[28px] font-normal tracking-tight uppercase leading-none mt-1"
          style={{ fontFamily: "'Bodoni Moda', serif" }}
        >
          A LOVE LETTER TO YOU
        </h2>
        <span
          className="text-[14px] italic leading-none block mt-0.5"
          style={{ fontFamily: "'Bodoni Moda', Georgia, serif", color: FLIPBOOK_CONFIG.accentColor }}
        >
          To my sweet Sweety on her birthday
        </span>
      </div>

      {/* Letter Body */}
      <div className="my-auto space-y-3 px-2">
        <p className="text-[11px] leading-[1.5] text-[#292524] text-justify font-semibold" style={{ fontFamily: "serif" }}>
          Dearest Sweety,
        </p>
        <p className="text-[9.5px] leading-[1.55] text-[#44403c] text-justify">
          Happy Birthday to the prettiest, sweetest girl in the universe! Watching you step into this new chapter makes me realize just how lucky I am to have you by my side. You bring so much peace, pure joy, and warmth into my world.
        </p>
        <p className="text-[9.5px] leading-[1.55] text-[#44403c] text-justify">
          Every time you smile, every time you laugh, and every time I look into your eyes, I fall in love with you all over again. I promise to always protect that beautiful smile, support your dreams, and cherish you through every single chapter ahead.
        </p>
      </div>

      {/* Signature & Mini Photo */}
      <div className="flex justify-between items-end border-t border-[#1c1917]/15 pt-2">
        <div>
          <span className="text-[8px] tracking-wider uppercase text-[#78716c] block">WITH ALL MY LOVE &amp; HEART,</span>
          <span
            className="text-[22px] font-normal text-[#1c1917] leading-tight block mt-0.5"
            style={{ fontFamily: "'Aesthetic Script', 'Playfair Display', cursive" }}
          >
            Your Boyfriend ♡
          </span>
        </div>
        <div className="relative w-16 aspect-square bg-[#e7e5e4] rounded-[1px] shadow-sm overflow-hidden border border-white">
          <Image src="/ref/girl6.jpg" alt="Mini Sign" fill priority className="object-cover object-top" sizes="70px" />
        </div>
      </div>
    </div>
  );
}

/* ==========================================================================
 * 14. PAGE 14: DIAGONAL 35MM FILM RIBBON (Spread 7, Right Page - From New Template)
 * ========================================================================== */
export function PageDiagonalFilmstrip() {
  return (
    <div className="relative w-full h-full bg-[#faf8f4] text-[#1c1917] p-4 select-none overflow-hidden flex flex-col justify-between">
      {/* Top Header */}
      <div className="text-center border-b border-[#1c1917]/15 pb-1">
        <span className="text-[7.5px] font-mono tracking-[0.25em] text-[#78716c] uppercase block">
          MEMORIES IN MOTION
        </span>
        <h3
          className="text-[20px] font-medium tracking-tight uppercase leading-none mt-0.5"
          style={{ fontFamily: "'Bodoni Moda', serif" }}
        >
          FILMSTRIP MEMORIES
        </h3>
      </div>

      {/* Diagonal Filmstrip Crossing Area */}
      <div className="relative w-full h-[80%] overflow-hidden my-auto">
        {/* Strip 1: Angled -12deg */}
        <div
          className="absolute -left-6 top-3 w-[115%] bg-black p-1 shadow-xl rotate-[-12deg] z-10"
        >
          <div className="flex justify-around py-0.5 overflow-hidden">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="w-1.5 h-1.5 bg-white/90 rounded-[0.5px] mx-0.5" />
            ))}
          </div>
          <div className="grid grid-cols-3 gap-1 my-0.5">
            {["/ref/girl7.jpg", "/ref/girl8.jpg", "/ref/girl9.jpg"].map((src, i) => (
              <div key={i} className="relative aspect-[16/10] bg-zinc-800 overflow-hidden">
                <Image src={src} alt={`Film ${i}`} fill priority className="object-cover object-top" sizes="120px" />
              </div>
            ))}
          </div>
          <div className="flex justify-around py-0.5 overflow-hidden">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="w-1.5 h-1.5 bg-white/90 rounded-[0.5px] mx-0.5" />
            ))}
          </div>
        </div>

        {/* Strip 2: Angled 10deg */}
        <div
          className="absolute -left-6 bottom-4 w-[115%] bg-black p-1 shadow-xl rotate-[10deg] z-10"
        >
          <div className="flex justify-around py-0.5 overflow-hidden">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="w-1.5 h-1.5 bg-white/90 rounded-[0.5px] mx-0.5" />
            ))}
          </div>
          <div className="grid grid-cols-3 gap-1 my-0.5">
            {["/ref/girl2.jpg", "/ref/girl3.jpg", "/ref/girl4.jpg"].map((src, i) => (
              <div key={i} className="relative aspect-[16/10] bg-zinc-800 overflow-hidden">
                <Image src={src} alt={`Film2 ${i}`} fill priority className="object-cover object-top" sizes="120px" />
              </div>
            ))}
          </div>
          <div className="flex justify-around py-0.5 overflow-hidden">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="w-1.5 h-1.5 bg-white/90 rounded-[0.5px] mx-0.5" />
            ))}
          </div>
        </div>

        {/* Center Floating Polaroid Accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[46%] bg-white p-1.5 pb-4 shadow-2xl rounded-[1px] rotate-[-2deg] border border-black/15 z-20">
          <div className="relative aspect-square w-full bg-[#e7e5e4] overflow-hidden">
            <Image src="/ref/girl10.jpg" alt="Center Film" fill priority className="object-cover object-top" sizes="160px" />
          </div>
          <span className="text-[12px] text-[#1c1917] block text-center mt-1" style={{ fontFamily: "'Aesthetic Script', 'Playfair Display', cursive", color: FLIPBOOK_CONFIG.accentColor }}>
            Golden reel
          </span>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center pt-1 border-t border-[#1c1917]/10">
        <span className="text-[7px] italic text-[#78716c] font-serif">
          Frame by frame, the best story ever told
        </span>
      </div>
    </div>
  );
}

/* ==========================================================================
 * 15. PAGE 15: BACK COVER - "HAPPY BIRTHDAY - This is your story"
 * (Hard Back Cover)
 * ========================================================================== */
export function PageBackCoverFlipbook() {
  return (
    <div className="relative w-full h-full bg-[#141210] text-white p-6 select-none overflow-hidden flex flex-col justify-between">
      {/* Top Foil Title */}
      <div className="text-center mt-2">
        <h2
          className="text-[34px] font-medium tracking-[0.02em] uppercase leading-none text-white"
          style={{ fontFamily: "'Bodoni Moda', serif" }}
        >
          HAPPY
        </h2>
        <h3
          className="text-[30px] font-medium tracking-[0.02em] uppercase leading-none mt-1"
          style={{
            fontFamily: "'Bodoni Moda', serif",
            color: "#d4af6a", // gold foil
          }}
        >
          BIRTHDAY SWEETY
        </h3>
        <p className="text-[16px] text-white/80 mt-1" style={{ fontFamily: "'Aesthetic Script', 'Playfair Display', cursive" }}>
          Cheers to forever with you
        </p>
      </div>

      {/* Center Hero Portrait Photo with Soft Glow */}
      <div className="relative w-[78%] mx-auto aspect-[4/5] bg-zinc-900 rounded-[2px] shadow-2xl overflow-hidden border border-white/20 my-auto">
        <Image src="/ref/girl.jpg" alt="Back Hero" fill priority className="object-cover object-top" sizes="280px" />
      </div>

      {/* Bottom Message & Barcode */}
      <div className="flex justify-between items-end border-t border-white/15 pt-3">
        {/* Left: Barcode */}
        <div className="bg-white px-2 py-1 rounded-[1px] shadow-md flex flex-col items-center">
          <svg viewBox="0 0 100 24" className="w-[70px] h-[14px]">
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
          <span className="font-mono text-[6px] text-black font-bold tracking-[0.1em] mt-0.5">
            SPECIAL EDITION
          </span>
        </div>

        {/* Right: Closing Note */}
        <div className="text-right">
          <span className="text-[18px] text-[#d4af6a] block leading-tight" style={{ fontFamily: "'Aesthetic Script', 'Playfair Display', cursive" }}>
            This is our story
          </span>
          <span className="text-[7px] tracking-[0.18em] text-white/60 uppercase block">
            WRITTEN WITH LOVE, FOR SWEETY
          </span>
          <span className="text-[8px] font-bold text-white/90 tracking-wider block mt-0.5 uppercase">
            FOREVER &amp; ALWAYS YOURS
          </span>
        </div>
      </div>
    </div>
  );
}
