"use client";

import React from "react";
import Image from "next/image";

/* ==========================================================================
 * 🎨 SCRAPBOOK SHARED SVG ASSETS & DECORATIVE ACCENTS
 * ========================================================================== */

/** Metallic Silver Ring Binder Spine for Pages 1 & 9 */
export function BinderRings({ side = "left" }: { side?: "left" | "right" }) {
  const isLeft = side === "left";
  return (
    <div
      className={`absolute top-0 bottom-0 ${
        isLeft ? "left-0" : "right-0"
      } w-8 z-30 pointer-events-none flex flex-col justify-around py-6 select-none`}
    >
      {[0, 1, 2, 3, 4, 5].map((idx) => (
        <div
          key={idx}
          className={`relative flex items-center ${isLeft ? "justify-start" : "justify-end"}`}
          style={{ height: 28 }}
        >
          {/* Punched paper hole */}
          <div
            className={`w-3.5 h-3.5 rounded-full bg-[#1b1715] shadow-inner border border-black/30 ${
              isLeft ? "ml-2" : "mr-2"
            }`}
          />
          {/* Metallic spiral ring looping through hole */}
          <svg
            viewBox="0 0 40 20"
            className={`absolute ${isLeft ? "-left-1" : "-right-1"} w-8 h-5 drop-shadow-md`}
          >
            <defs>
              <linearGradient id={`ringGrad-${idx}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f3f4f6" />
                <stop offset="35%" stopColor="#9ca3af" />
                <stop offset="60%" stopColor="#e5e7eb" />
                <stop offset="85%" stopColor="#4b5563" />
                <stop offset="100%" stopColor="#1f2937" />
              </linearGradient>
            </defs>
            <path
              d={isLeft ? "M 2 10 C 2 2, 28 2, 28 10 C 28 18, 2 18, 2 10" : "M 38 10 C 38 2, 12 2, 12 10 C 12 18, 38 18, 38 10"}
              fill="none"
              stroke={`url(#ringGrad-${idx})`}
              strokeWidth="4"
              strokeLinecap="round"
            />
            {/* Specular highlight */}
            <path
              d={isLeft ? "M 8 5 C 14 3, 22 4, 25 7" : "M 32 5 C 26 3, 18 4, 15 7"}
              fill="none"
              stroke="#ffffff"
              strokeWidth="1.5"
              strokeLinecap="round"
              opacity="0.8"
            />
          </svg>
        </div>
      ))}
    </div>
  );
}

/** Silver Compact Digital Camera Sticker */
export function RetroSilverDigicam({
  className = "",
  stars = true,
}: {
  className?: string;
  stars?: boolean;
}) {
  return (
    <div className={`relative pointer-events-none select-none ${className}`}>
      <svg viewBox="0 0 110 75" className="w-full h-full drop-shadow-xl">
        <defs>
          <linearGradient id="camBody" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f8f9fa" />
            <stop offset="30%" stopColor="#e2e8f0" />
            <stop offset="70%" stopColor="#cbd5e1" />
            <stop offset="100%" stopColor="#94a3b8" />
          </linearGradient>
          <linearGradient id="lensRing" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="50%" stopColor="#64748b" />
            <stop offset="100%" stopColor="#1e293b" />
          </linearGradient>
          <radialGradient id="lensGlass" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="60%" stopColor="#0f172a" />
            <stop offset="90%" stopColor="#0284c7" />
            <stop offset="100%" stopColor="#0369a1" />
          </radialGradient>
        </defs>
        {/* Camera body with rounded edges */}
        <rect x="5" y="8" width="100" height="62" rx="7" fill="url(#camBody)" stroke="#94a3b8" strokeWidth="1.5" />
        {/* Shutter button top */}
        <rect x="22" y="4" width="16" height="5" rx="2" fill="#cbd5e1" stroke="#64748b" strokeWidth="1" />
        {/* Flash unit */}
        <rect x="76" y="14" width="18" height="10" rx="2" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="1" />
        <rect x="79" y="16" width="12" height="6" rx="1" fill="#e0f2fe" opacity="0.9" />
        {/* Viewfinder window */}
        <rect x="62" y="15" width="8" height="7" rx="1.5" fill="#334155" stroke="#64748b" strokeWidth="1" />
        {/* Large telescopic lens ring */}
        <circle cx="44" cy="42" r="24" fill="url(#lensRing)" stroke="#475569" strokeWidth="1.5" />
        <circle cx="44" cy="42" r="20" fill="#0f172a" />
        <circle cx="44" cy="42" r="15" fill="url(#lensGlass)" />
        {/* Lens reflection */}
        <ellipse cx="39" cy="37" rx="5" ry="3" fill="#ffffff" opacity="0.6" transform="rotate(-30 39 37)" />
        {/* Grip detail & logo */}
        <path d="M 94 28 L 94 62" stroke="#64748b" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
        <text x="12" y="22" fontSize="5" fontWeight="bold" fill="#475569" fontFamily="sans-serif" letterSpacing="0.05em">
          DIGITAL
        </text>
      </svg>
      {/* Mini red & black star stickers on camera */}
      {stars && (
        <>
          <span className="absolute top-1 left-2 text-[10px] text-[#7a1329] drop-shadow-sm font-bold">★</span>
          <span className="absolute -bottom-1 -right-1 text-[12px] text-zinc-800 drop-shadow-sm font-bold">★</span>
        </>
      )}
    </div>
  );
}

/** White Instax Mini Camera for Page 3 */
export function RetroInstaxCamera({ className = "" }: { className?: string }) {
  return (
    <div className={`relative pointer-events-none select-none ${className}`}>
      <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-2xl">
        <defs>
          <radialGradient id="instaxBody" cx="40%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="80%" stopColor="#f1f5f9" />
            <stop offset="100%" stopColor="#e2e8f0" />
          </radialGradient>
        </defs>
        {/* Soft rounded silhouette */}
        <rect x="10" y="10" width="80" height="80" rx="22" fill="url(#instaxBody)" stroke="#cbd5e1" strokeWidth="2" />
        {/* Shutter button */}
        <circle cx="28" cy="26" r="6" fill="#f8fafc" stroke="#94a3b8" strokeWidth="1.5" />
        {/* Flash reflector */}
        <rect x="64" y="18" width="18" height="12" rx="3" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1" />
        <rect x="67" y="20" width="12" height="8" rx="2" fill="#bae6fd" opacity="0.8" />
        {/* Viewfinder */}
        <circle cx="73" cy="38" r="4.5" fill="#1e293b" stroke="#cbd5e1" strokeWidth="1" />
        {/* Center lens barrel */}
        <circle cx="48" cy="56" r="26" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
        <circle cx="48" cy="56" r="20" fill="#334155" stroke="#0f172a" strokeWidth="2" />
        <circle cx="48" cy="56" r="12" fill="#090d16" />
        <ellipse cx="44" cy="52" rx="4" ry="2.5" fill="#ffffff" opacity="0.7" transform="rotate(-30 44 52)" />
        {/* Selfie mirror */}
        <circle cx="34" cy="46" r="3" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="0.8" />
        {/* Instax logo branding */}
        <text x="38" y="26" fontSize="6" fontWeight="bold" fill="#64748b" fontFamily="sans-serif">
          instax
        </text>
      </svg>
    </div>
  );
}

/** Metallic Safety Pin SVG */
export function SafetyPin({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 25" className={`drop-shadow-md select-none pointer-events-none ${className}`}>
      <defs>
        <linearGradient id="pinSilver" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f3f4f6" />
          <stop offset="50%" stopColor="#9ca3af" />
          <stop offset="100%" stopColor="#4b5563" />
        </linearGradient>
      </defs>
      {/* Needle bar */}
      <path d="M 8 18 L 48 18" stroke="url(#pinSilver)" strokeWidth="2.5" strokeLinecap="round" />
      {/* Top arched bar */}
      <path d="M 8 8 L 46 8" stroke="url(#pinSilver)" strokeWidth="2.5" strokeLinecap="round" />
      {/* Left coiled loop */}
      <circle cx="8" cy="13" r="5.5" fill="none" stroke="url(#pinSilver)" strokeWidth="2.5" />
      {/* Right clasp cap */}
      <rect x="42" y="5" width="14" height="16" rx="3.5" fill="url(#pinSilver)" stroke="#374151" strokeWidth="0.8" />
      <path d="M 45 13 L 53 13" stroke="#1f2937" strokeWidth="1" />
    </svg>
  );
}

/** Red Metallic Bulldog / Binder Clip */
export function RedBulldogClip({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={`drop-shadow-lg select-none pointer-events-none ${className}`}>
      {/* Silver wire arms */}
      <path d="M 12 18 L 16 4 C 18 2, 22 2, 24 4 L 28 18" fill="none" stroke="#d1d5db" strokeWidth="2.5" strokeLinecap="round" />
      {/* Red clamp base */}
      <path d="M 6 18 L 34 18 L 31 36 L 9 36 Z" fill="#7a1329" stroke="#4a0b18" strokeWidth="1.5" />
      {/* Specular sheen on clamp */}
      <path d="M 10 21 L 30 21" stroke="#b91c1c" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

/** Brown Wooden Sewing Button */
export function WoodenButton({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 30 30" className={`drop-shadow-md select-none pointer-events-none ${className}`}>
      <circle cx="15" cy="15" r="13" fill="#8c5835" stroke="#5c381e" strokeWidth="1.5" />
      <circle cx="15" cy="15" r="9.5" fill="#a46b43" stroke="#6e4225" strokeWidth="1" strokeDasharray="2 1" />
      {/* 4 thread holes */}
      <circle cx="12" cy="12" r="1.5" fill="#2e1a0e" />
      <circle cx="18" cy="12" r="1.5" fill="#2e1a0e" />
      <circle cx="12" cy="18" r="1.5" fill="#2e1a0e" />
      <circle cx="18" cy="18" r="1.5" fill="#2e1a0e" />
      {/* Thread cross */}
      <line x1="12" y1="12" x2="18" y2="18" stroke="#f5ede6" strokeWidth="1" />
      <line x1="18" y1="12" x2="12" y2="18" stroke="#f5ede6" strokeWidth="1" />
    </svg>
  );
}

/** Red Ribbon Bow Sticker */
export function RedBowSticker({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 32" className={`drop-shadow-md select-none pointer-events-none ${className}`}>
      {/* Left loop */}
      <path d="M 20 14 C 14 6, 2 6, 4 14 C 6 20, 16 16, 20 14 Z" fill="#991b1b" stroke="#7f1d1d" strokeWidth="1" />
      <path d="M 16 12 C 12 8, 6 8, 7 13" stroke="#f87171" strokeWidth="1" fill="none" opacity="0.6" />
      {/* Right loop */}
      <path d="M 20 14 C 26 6, 38 6, 36 14 C 34 20, 24 16, 20 14 Z" fill="#991b1b" stroke="#7f1d1d" strokeWidth="1" />
      <path d="M 24 12 C 28 8, 34 8, 33 13" stroke="#f87171" strokeWidth="1" fill="none" opacity="0.6" />
      {/* Tails */}
      <path d="M 18 16 C 16 22, 10 26, 6 28 L 12 24 L 14 28 C 16 24, 18 18, 18 16 Z" fill="#b91c1c" />
      <path d="M 22 16 C 24 22, 30 26, 34 28 L 28 24 L 26 28 C 24 24, 22 18, 22 16 Z" fill="#b91c1c" />
      {/* Center knot */}
      <ellipse cx="20" cy="14" rx="4" ry="3.5" fill="#7f1d1d" stroke="#5c1111" strokeWidth="1" />
    </svg>
  );
}

/** Halftone Dot Burst Pattern (Burgundy or Black) */
export function HalftoneBurst({
  color = "#7a1329",
  className = "",
}: {
  color?: string;
  className?: string;
}) {
  return (
    <svg viewBox="0 0 100 100" className={`pointer-events-none select-none ${className}`}>
      <g fill={color}>
        <circle cx="50" cy="50" r="14" opacity="0.95" />
        <circle cx="50" cy="22" r="7" opacity="0.85" />
        <circle cx="50" cy="78" r="7" opacity="0.85" />
        <circle cx="22" cy="50" r="7" opacity="0.85" />
        <circle cx="78" cy="50" r="7" opacity="0.85" />
        <circle cx="30" cy="30" r="8" opacity="0.9" />
        <circle cx="70" cy="30" r="8" opacity="0.9" />
        <circle cx="30" cy="70" r="8" opacity="0.9" />
        <circle cx="70" cy="70" r="8" opacity="0.9" />
        {/* Outer mini dots */}
        <circle cx="12" cy="36" r="3.5" opacity="0.6" />
        <circle cx="88" cy="36" r="3.5" opacity="0.6" />
        <circle cx="12" cy="64" r="3.5" opacity="0.6" />
        <circle cx="88" cy="64" r="3.5" opacity="0.6" />
        <circle cx="36" cy="12" r="3.5" opacity="0.6" />
        <circle cx="64" cy="12" r="3.5" opacity="0.6" />
        <circle cx="36" cy="88" r="3.5" opacity="0.6" />
        <circle cx="64" cy="88" r="3.5" opacity="0.6" />
        <circle cx="6" cy="50" r="2" opacity="0.4" />
        <circle cx="94" cy="50" r="2" opacity="0.4" />
        <circle cx="50" cy="6" r="2" opacity="0.4" />
        <circle cx="50" cy="94" r="2" opacity="0.4" />
      </g>
    </svg>
  );
}

/** Burgundy Outline Star Doodle */
export function BurgundyStarDoodle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 60" className={`pointer-events-none select-none ${className}`}>
      <path
        d="M 30 2 L 38 21 L 58 23 L 43 37 L 48 57 L 30 46 L 12 57 L 17 37 L 2 23 L 22 21 Z"
        fill="none"
        stroke="#7a1329"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Red Swirl Doodle */
export function RedSwirlBadge({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={`pointer-events-none select-none ${className}`}>
      <circle cx="20" cy="20" r="16" fill="#7a1329" />
      <path
        d="M 20 20 m 0 -10 a 10 10 0 0 1 10 10 a 7 7 0 0 1 -7 7 a 4 4 0 0 1 -4 -4 a 2 2 0 0 1 2 -2"
        fill="none"
        stroke="#ffffff"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Red Fender Stratocaster Electric Guitar Sticker */
export function ElectricGuitarSticker({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 50 120" className={`drop-shadow-lg select-none pointer-events-none ${className}`}>
      {/* Guitar neck */}
      <rect x="23" y="15" width="4" height="65" fill="#fde047" stroke="#b45309" strokeWidth="0.8" />
      {/* Headstock */}
      <path d="M 22 15 L 22 2 C 24 0, 29 2, 29 6 L 27 15 Z" fill="#d97706" />
      {/* Tuners */}
      <circle cx="20" cy="5" r="1.5" fill="#e2e8f0" />
      <circle cx="20" cy="8" r="1.5" fill="#e2e8f0" />
      <circle cx="20" cy="11" r="1.5" fill="#e2e8f0" />
      {/* Frets */}
      {[25, 35, 45, 55, 65].map((f) => (
        <line key={f} x1="23" y1={f} x2="27" y2={f} stroke="#9ca3af" strokeWidth="0.8" />
      ))}
      {/* Guitar Body (Sunburst Burgundy/Red) */}
      <path
        d="M 25 70 C 15 65, 8 75, 12 88 C 8 98, 14 116, 25 116 C 36 116, 42 98, 38 88 C 42 75, 35 65, 25 70 Z"
        fill="#7f1d1d"
        stroke="#450a0a"
        strokeWidth="2"
      />
      {/* Inner sunburst yellow highlight */}
      <ellipse cx="25" cy="94" rx="9" ry="14" fill="#b91c1c" />
      <ellipse cx="25" cy="94" rx="5" ry="9" fill="#f59e0b" opacity="0.8" />
      {/* Pickguard (white) */}
      <path d="M 20 80 C 16 84, 18 96, 25 96 C 27 96, 29 90, 27 80 Z" fill="#f8fafc" />
      {/* Pickups */}
      <rect x="22" y="82" width="6" height="2" rx="0.5" fill="#1e293b" />
      <rect x="22" y="87" width="6" height="2" rx="0.5" fill="#1e293b" />
      <rect x="22" y="92" width="6" height="2" rx="0.5" fill="#1e293b" />
    </svg>
  );
}

/** Collage Letter Cutout for Titles */
export function CutoutLetter({
  letter,
  bg = "#7a1329",
  text = "#ffffff",
  rotate = 0,
}: {
  letter: string;
  bg?: string;
  text?: string;
  rotate?: number;
}) {
  return (
    <span
      className="inline-flex items-center justify-center font-black uppercase text-xs px-1.5 py-1 rounded-[2px] shadow-sm select-none border border-black/20"
      style={{
        backgroundColor: bg,
        color: text,
        transform: `rotate(${rotate}deg)`,
        fontFamily: "'Montserrat', sans-serif",
      }}
    >
      {letter}
    </span>
  );
}

/* ==========================================================================
 * 📖 THE 9 SCRAPBOOK TEMPLATE PAGES (EXACT REPLICA OF THE IMAGE)
 * ========================================================================== */

/**
 * PAGE 1: "Archieve" Binder Page
 * - Spiral binder rings along left edge
 * - Burgundy 3D bubble title "Archieve" + script subtitle
 * - Electric guitar sticker
 * - 4-photo grid (2x2) with kraft "MEMORIES" tape & swirl
 * - Silver digicam at bottom right
 */
export function ScrapbookPage1() {
  return (
    <div className="relative w-full h-full bg-[#f8f5ee] overflow-hidden select-none">
      {/* Dot Grid Paper Texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: "radial-gradient(#c4b9a8 1.2px, transparent 1.2px)",
          backgroundSize: "14px 14px",
        }}
      />

      {/* Ring Binder Rings on Left */}
      <BinderRings side="left" />

      {/* Burgundy Star Doodles */}
      <BurgundyStarDoodle className="absolute top-4 left-7 w-16 h-16 opacity-85 rotate-[-12deg]" />
      <BurgundyStarDoodle className="absolute -bottom-2 -left-2 w-20 h-20 opacity-85 rotate-[18deg]" />

      {/* Burgundy Halftone Dot Burst on Middle Right */}
      <HalftoneBurst color="#7a1329" className="absolute top-28 right-0 w-28 h-28 opacity-90 translate-x-8" />

      {/* Top Header: "Archieve" Retro 3D Bubble Title */}
      <div className="absolute top-5 left-12 right-6 flex items-start justify-between z-20">
        <div>
          <h2
            className="text-[40px] font-black leading-[0.85] tracking-tight uppercase"
            style={{
              fontFamily: "'Shrikhand', 'Montserrat', cursive",
              color: "#ffffff",
              WebkitTextStroke: "2.5px #7a1329",
              textShadow: "3px 3px 0px #7a1329, 4px 4px 0px rgba(0,0,0,0.25)",
            }}
          >
            Archieve
          </h2>
          <span
            className="text-[12px] text-[#7a1329] font-medium tracking-wide block -mt-1 ml-1"
            style={{ fontFamily: "'Reenie Beanie', 'Caveat', cursive" }}
          >
            Memories through the lens
          </span>
        </div>

        {/* Electric Guitar Sticker on Top Right */}
        <ElectricGuitarSticker className="w-9 h-22 rotate-[16deg] -mt-2" />
      </div>

      {/* Center 4-Photo Album Grid with Kraft "MEMORIES" Tape */}
      <div className="absolute top-[28%] left-[16%] right-[8%] z-10">
        <div className="relative bg-white/70 p-2.5 rounded-sm shadow-lg border border-[#e2d8c7]">
          {/* 2x2 Photo Grid */}
          <div className="grid grid-cols-2 gap-2">
            {[
              { src: "/ref/girl1.jpg", alt: "Memory 1" },
              { src: "/ref/girl2.jpg", alt: "Memory 2" },
              { src: "/ref/girl3.jpg", alt: "Memory 3" },
              { src: "/ref/girl4.jpg", alt: "Memory 4" },
            ].map((p, i) => (
              <div key={i} className="relative aspect-[4/5] bg-[#e8e2d5] overflow-hidden border border-white shadow-sm">
                <Image src={p.src} alt={p.alt} fill priority className="object-cover" sizes="160px" />
              </div>
            ))}
          </div>

          {/* Center Kraft Paper Tape: "MEMORIES" */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-[#cbb28b] px-3.5 py-1 shadow-md border-t border-b border-[#a88a5e] rotate-[-2deg]">
            <span
              className="text-[10px] font-mono font-bold tracking-[0.25em] text-[#3d2914] uppercase block"
              style={{ textShadow: "0 1px 1px rgba(255,255,255,0.4)" }}
            >
              MEMORIES
            </span>
          </div>

          {/* Red Swirl Sticker on Right */}
          <RedSwirlBadge className="absolute -top-3 -right-3 w-7 h-7 drop-shadow-md z-20" />
        </div>
      </div>

      {/* Bottom Right: Retro Silver Digicam & Silver Stars */}
      <div className="absolute bottom-4 right-5 z-20 w-32 h-22 rotate-[-6deg]">
        <RetroSilverDigicam className="w-full h-full" />
      </div>
      <div className="absolute bottom-6 left-16 text-zinc-400 text-xs flex gap-2">
        <span>★</span>
        <span className="text-[15px] -mt-1 text-zinc-500">★</span>
      </div>
    </div>
  );
}

/**
 * PAGE 2: "memories" Tilted Polaroids & Cutout Note
 * - Deep burgundy torn paper top & bottom
 * - 3 cascading tilted polaroids on left with washi tape & red bow
 * - Lined notebook card with "memories" magazine cutout letters
 * - Silver digicam at bottom right
 */
export function ScrapbookPage2() {
  return (
    <div className="relative w-full h-full bg-[#fbf8f2] overflow-hidden select-none">
      {/* Torn Paper Header in Deep Burgundy */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-[#6e0f22] z-0 overflow-hidden">
        {/* Halftone Dot pattern inside header */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "radial-gradient(#ffffff 1.5px, transparent 1.5px)",
            backgroundSize: "8px 8px",
          }}
        />
        {/* Jagged Torn Paper Bottom Edge */}
        <svg viewBox="0 0 100 12" preserveAspectRatio="none" className="absolute bottom-0 w-full h-3 fill-[#fbf8f2]">
          <path d="M 0 12 L 0 5 Q 5 2, 10 6 Q 15 9, 20 4 Q 25 2, 30 7 Q 35 10, 40 5 Q 45 3, 50 8 Q 55 11, 60 5 Q 65 2, 70 7 Q 75 9, 80 4 Q 85 2, 90 7 Q 95 10, 100 4 L 100 12 Z" />
        </svg>
      </div>

      {/* Torn Paper Footer in Deep Burgundy */}
      <div className="absolute bottom-0 right-0 w-44 h-24 bg-[#6e0f22] z-0 rounded-tl-[80px] overflow-hidden">
        <svg viewBox="0 0 50 30" preserveAspectRatio="none" className="absolute -top-1 -left-1 w-full h-full fill-[#fbf8f2] rotate-180 opacity-20">
          <path d="M 0 0 L 50 0 L 50 30 Z" />
        </svg>
      </div>

      {/* Left Column: 3 Cascading Polaroids */}
      <div className="absolute top-12 left-5 z-10 flex flex-col gap-1 w-[46%]">
        {/* Polaroid 1 (Top) */}
        <div className="relative bg-white p-1.5 pb-5 shadow-lg rounded-[2px] rotate-[-5deg] border border-black/5">
          {/* Burgundy washi tape */}
          <div className="absolute -top-2 left-6 w-12 h-4 bg-[#7a1329]/80 shadow-sm rotate-[4deg] z-20" />
          <div className="relative aspect-square w-full bg-[#f0eae1] overflow-hidden">
            <Image src="/ref/girl5.jpg" alt="Polaroid 1" fill priority className="object-cover" sizes="150px" />
          </div>
        </div>

        {/* Polaroid 2 (Middle) */}
        <div className="relative bg-white p-1.5 pb-5 shadow-lg rounded-[2px] rotate-[3deg] -mt-2 z-10 border border-black/5">
          <div className="relative aspect-square w-full bg-[#f0eae1] overflow-hidden">
            <Image src="/ref/girl6.jpg" alt="Polaroid 2" fill priority className="object-cover" sizes="150px" />
          </div>
        </div>

        {/* Polaroid 3 (Bottom) */}
        <div className="relative bg-white p-1.5 pb-5 shadow-xl rounded-[2px] rotate-[-3deg] -mt-2 z-20 border border-black/5">
          {/* Red Ribbon Bow Sticker */}
          <RedBowSticker className="absolute -bottom-2 -left-2 w-8 h-7 z-30" />
          <div className="relative aspect-square w-full bg-[#f0eae1] overflow-hidden">
            <Image src="/ref/girl7.jpg" alt="Polaroid 3" fill priority className="object-cover" sizes="150px" />
          </div>
        </div>
      </div>

      {/* Right Column: Lined Journal Card with Cutout Letters "memories" */}
      <div className="absolute top-20 right-5 w-[42%] z-10 bg-[#fffdfa] p-3 rounded-md shadow-md border-2 border-dashed border-[#7a1329]/60">
        {/* Cutout Letters "memories" */}
        <div className="flex flex-wrap items-center justify-center gap-1 mb-2">
          <CutoutLetter letter="m" bg="#7a1329" text="#fff" rotate={-4} />
          <CutoutLetter letter="e" bg="#b45309" text="#fff" rotate={3} />
          <CutoutLetter letter="m" bg="#365314" text="#fff" rotate={-2} />
          <CutoutLetter letter="o" bg="#7a1329" text="#fff" rotate={5} />
          <CutoutLetter letter="r" bg="#1e3a8a" text="#fff" rotate={-3} />
          <CutoutLetter letter="i" bg="#d97706" text="#fff" rotate={2} />
          <CutoutLetter letter="e" bg="#7a1329" text="#fff" rotate={-4} />
          <CutoutLetter letter="s" bg="#b45309" text="#fff" rotate={4} />
        </div>

        {/* Writing Lines with handwritten text */}
        <div className="space-y-2.5 pt-1">
          <div className="border-b border-[#e5decb] pb-0.5">
            <span className="text-[11px] text-[#5c4935]" style={{ fontFamily: "'Reenie Beanie', cursive" }}>
              Cherished little days
            </span>
          </div>
          <div className="border-b border-[#e5decb] pb-0.5">
            <span className="text-[11px] text-[#5c4935]" style={{ fontFamily: "'Reenie Beanie', cursive" }}>
              Filled with warm smiles
            </span>
          </div>
          <div className="border-b border-[#e5decb] pb-0.5">
            <span className="text-[11px] text-[#5c4935]" style={{ fontFamily: "'Reenie Beanie', cursive" }}>
              Forever in my heart
            </span>
          </div>
        </div>

        {/* Red swirl doodle inside card */}
        <div className="flex justify-end mt-2">
          <RedSwirlBadge className="w-5 h-5 opacity-90" />
        </div>
      </div>

      {/* Bottom Right: Retro Silver Digicam */}
      <div className="absolute bottom-8 right-6 z-20 w-32 h-22 rotate-[8deg]">
        <RetroSilverDigicam className="w-full h-full" />
      </div>
    </div>
  );
}

/**
 * PAGE 3: "A moment we'll never forget" / Tattered Polaroid Collage
 * - Deep burgundy textured background
 * - Ripped / torn cream stationery paper in center
 * - Handwritten cursive quote top right
 * - 5 floating scattered mini polaroids
 * - White Fujifilm Instax Mini camera at bottom left
 */
export function ScrapbookPage3() {
  return (
    <div className="relative w-full h-full bg-[#650e20] overflow-hidden select-none">
      {/* Torn Cream Paper Center Sheet */}
      <div className="absolute inset-y-6 inset-x-4 bg-[#fbf8f0] shadow-2xl overflow-hidden rounded-[2px]">
        {/* Torn top jagged edge */}
        <svg viewBox="0 0 100 8" preserveAspectRatio="none" className="absolute top-0 w-full h-3 fill-[#650e20] z-0">
          <path d="M 0 0 L 0 5 Q 8 8, 15 3 Q 25 1, 35 6 Q 45 8, 55 3 Q 65 1, 75 6 Q 85 8, 95 3 L 100 5 L 100 0 Z" />
        </svg>

        {/* Torn bottom jagged edge */}
        <svg viewBox="0 0 100 8" preserveAspectRatio="none" className="absolute bottom-0 w-full h-3 fill-[#650e20] z-0">
          <path d="M 0 8 L 0 3 Q 10 0, 20 5 Q 30 8, 40 2 Q 50 0, 60 5 Q 70 8, 80 2 Q 90 0, 100 4 L 100 8 Z" />
        </svg>

        {/* Top Right Handwritten Quote */}
        <div className="absolute top-5 right-5 text-right z-10">
          <p
            className="text-[20px] font-bold text-[#650e20] leading-[0.95]"
            style={{ fontFamily: "'Reenie Beanie', 'Caveat', cursive" }}
          >
            “A moment<br />
            we’ll never<br />
            forget”
          </p>
        </div>

        {/* 5 Scattered Mini Polaroids */}
        {/* Polaroid 1 (Top Left) */}
        <div className="absolute top-10 left-5 w-24 bg-white p-1 pb-4 shadow-lg rotate-[-12deg] z-10 border border-black/5">
          <div className="relative aspect-square w-full bg-[#e8e2d5] overflow-hidden">
            <Image src="/ref/girl8.jpg" alt="P1" fill priority className="object-cover" sizes="90px" />
          </div>
        </div>

        {/* Polaroid 2 (Top Center) */}
        <div className="absolute top-22 left-32 w-22 bg-white p-1 pb-4 shadow-md rotate-[9deg] z-10 border border-black/5">
          <div className="relative aspect-square w-full bg-[#e8e2d5] overflow-hidden">
            <Image src="/ref/girl9.jpg" alt="P2" fill priority className="object-cover" sizes="85px" />
          </div>
        </div>

        {/* Polaroid 3 (Middle Right) */}
        <div className="absolute top-36 right-5 w-22 bg-white p-1 pb-4 shadow-lg rotate-[-8deg] z-10 border border-black/5">
          <div className="relative aspect-square w-full bg-[#e8e2d5] overflow-hidden">
            <Image src="/ref/girl10.jpg" alt="P3" fill priority className="object-cover" sizes="85px" />
          </div>
        </div>

        {/* Polaroid 4 (Center Left) */}
        <div className="absolute top-44 left-6 w-26 bg-white p-1.5 pb-5 shadow-xl rotate-[14deg] z-20 border border-black/5">
          <div className="relative aspect-square w-full bg-[#e8e2d5] overflow-hidden">
            <Image src="/ref/girl11.jpg" alt="P4" fill priority className="object-cover" sizes="100px" />
          </div>
        </div>

        {/* Polaroid 5 (Bottom Right) */}
        <div className="absolute bottom-12 right-10 w-24 bg-white p-1 pb-4 shadow-md rotate-[4deg] z-10 border border-black/5">
          <div className="relative aspect-square w-full bg-[#e8e2d5] overflow-hidden">
            <Image src="/ref/girl1.jpg" alt="P5" fill priority className="object-cover" sizes="90px" />
          </div>
        </div>

        {/* Bottom Left: White Fujifilm Instax Mini Camera */}
        <div className="absolute bottom-3 left-4 w-28 h-28 z-30 drop-shadow-2xl">
          <RetroInstaxCamera className="w-full h-full" />
        </div>
      </div>
    </div>
  );
}

/**
 * PAGE 4: Meadow & Sky / Postcard & Stamp Collage
 * - Cheerful blue sky with fluffy clouds top
 * - Rolling green hills bottom
 * - Kraft "POSTCARD" pinned with safety pin
 * - Postage-stamp edge photos
 * - Black LCD viewfinder screen
 * - Wooden button, red ribbon bow, cute chibi sticker
 */
export function ScrapbookPage4() {
  return (
    <div className="relative w-full h-full bg-[#8bc6f2] overflow-hidden select-none">
      {/* Fluffy White Clouds */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-48 h-20 bg-white/90 rounded-full blur-[1px] shadow-sm" />
      <div className="absolute top-2 left-1/3 w-32 h-16 bg-white/90 rounded-full" />
      <div className="absolute top-6 right-12 w-28 h-16 bg-white/80 rounded-full" />

      {/* Rolling Green Hills at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-48 z-0">
        {/* Back Hill */}
        <div className="absolute -bottom-8 -left-12 -right-12 h-44 bg-[#8cb833] rounded-t-[50%]" />
        {/* Front Hill */}
        <div className="absolute -bottom-12 -left-8 -right-8 h-40 bg-[#7ba62a] rounded-t-[60%]" />
      </div>

      {/* Wooden Button Top Right */}
      <WoodenButton className="absolute top-36 right-6 w-7 h-7 z-20" />

      {/* Kraft POSTCARD on Upper Left */}
      <div className="absolute top-20 left-4 w-[60%] bg-[#d8c3a5] p-2 rounded-sm shadow-md border border-[#b89b76] z-10 rotate-[-3deg]">
        <div className="flex justify-between items-center border-b border-[#9e825e] pb-1">
          <span className="font-mono text-[9px] font-bold tracking-[0.2em] text-[#4a3520] uppercase">
            POSTCARD
          </span>
          {/* Postmark stamp */}
          <div className="w-5 h-5 rounded-full border border-[#8a6845] flex items-center justify-center text-[7px] text-[#8a6845] font-bold">
            ★
          </div>
        </div>
        {/* Safety Pin */}
        <SafetyPin className="absolute -top-3 -left-2 w-10 h-5 rotate-[-15deg] z-30" />
      </div>

      {/* Postage Stamp Photo 1 (Scalloped Edge) */}
      <div className="absolute top-28 right-6 w-28 bg-white p-1.5 pb-2 shadow-lg rotate-[4deg] z-20 border-2 border-dashed border-[#cbd5e1]">
        <div className="relative aspect-[4/3] w-full bg-[#f1f5f9] overflow-hidden">
          <Image src="/ref/girl2.jpg" alt="Stamp 1" fill priority className="object-cover" sizes="110px" />
        </div>
      </div>

      {/* Black LCD / Viewfinder Screen Photo */}
      <div className="absolute top-44 left-5 w-40 bg-[#1e293b] p-1.5 rounded-md shadow-2xl border-2 border-[#475569] z-20 rotate-[-2deg]">
        <div className="relative aspect-[16/10] w-full bg-black overflow-hidden rounded-sm">
          <Image src="/ref/girl3.jpg" alt="Screen" fill priority className="object-cover" sizes="160px" />
          <span className="absolute top-1 left-1.5 text-[6px] text-red-500 font-mono font-bold animate-pulse">● REC</span>
        </div>
      </div>

      {/* Tilted Photo on Hill (Right) with Red Pin */}
      <div className="absolute bottom-20 right-5 w-32 bg-white p-1.5 pb-4 shadow-xl rotate-[6deg] z-10 border border-black/5">
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-red-600 shadow-md border border-red-800" />
        <div className="relative aspect-[4/3] w-full bg-[#f1f5f9] overflow-hidden">
          <Image src="/ref/girl4.jpg" alt="Hill Photo" fill priority className="object-cover" sizes="130px" />
        </div>
      </div>

      {/* Red Ribbon Bow on Left */}
      <RedBowSticker className="absolute bottom-24 left-3 w-8 h-7 z-30 rotate-[-12deg]" />

      {/* Cute Chibi Mascot on Hill */}
      <div className="absolute bottom-6 left-28 z-30 w-16 h-20">
        <Image src="/elements/billa.png" alt="Mascot" fill priority className="object-contain drop-shadow-xl" sizes="70px" />
      </div>
    </div>
  );
}

/**
 * PAGE 5: Vinyl CD / Grid Journal / "Our story will never end"
 * - Soft grid paper background
 * - Vinyl CD top left with curved text "Our story will never end"
 * - 2 mini polaroids top right with red sparkle stars
 * - 2-frame photobooth filmstrip pinned with safety pin
 * - Clipped polaroid with red bulldog clip
 * - Note box with quote + Chibi cat with headphones
 */
export function ScrapbookPage5() {
  return (
    <div className="relative w-full h-full bg-[#faf9f5] overflow-hidden select-none">
      {/* Light Notebook Grid Lines */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(#dedad0 1px, transparent 1px), linear-gradient(90deg, #dedad0 1px, transparent 1px)",
          backgroundSize: "16px 16px",
        }}
      />

      {/* Top Left: Vinyl CD with Arched Curved Text */}
      <div className="absolute top-4 left-4 z-10 w-36 h-36">
        <svg viewBox="0 0 140 140" className="w-full h-full drop-shadow-xl">
          <defs>
            <path id="cdTextPath" d="M 20 70 A 50 50 0 0 1 120 70" />
            <radialGradient id="cdSheen" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="35%" stopColor="#e2e8f0" />
              <stop offset="65%" stopColor="#cbd5e1" />
              <stop offset="85%" stopColor="#f1f5f9" />
              <stop offset="100%" stopColor="#94a3b8" />
            </radialGradient>
          </defs>
          {/* Arched red text above CD */}
          <text fill="#b91c1c" fontSize="11" fontWeight="bold" fontFamily="'Caveat', cursive">
            <textPath href="#cdTextPath" startOffset="50%" textAnchor="middle">
              Our story will never end
            </textPath>
          </text>
          {/* CD outer disc */}
          <circle cx="70" cy="70" r="48" fill="url(#cdSheen)" stroke="#cbd5e1" strokeWidth="1.5" />
          <circle cx="70" cy="70" r="42" fill="none" stroke="#e2e8f0" strokeWidth="0.8" opacity="0.8" />
          <circle cx="70" cy="70" r="36" fill="none" stroke="#ffffff" strokeWidth="0.8" opacity="0.8" />
          {/* Center sticker (rolling meadow landscape) */}
          <circle cx="70" cy="70" r="22" fill="#8bc6f2" />
          <path d="M 48 78 Q 60 68, 70 72 Q 80 76, 92 70 L 92 92 L 48 92 Z" fill="#7fa92e" />
          <circle cx="70" cy="70" r="6" fill="#7a1329" stroke="#ffffff" strokeWidth="1.5" />
        </svg>
      </div>

      {/* Top Right: 2 Mini Polaroids with Sparkle Stars */}
      <div className="absolute top-6 right-5 z-10 flex flex-col gap-2 items-end">
        <div className="relative w-20 bg-white p-1 pb-3 shadow-md rotate-[6deg] border border-black/5">
          <div className="relative aspect-square w-full bg-[#f1f5f9] overflow-hidden">
            <Image src="/ref/girl5.jpg" alt="Mini 1" fill priority className="object-cover" sizes="80px" />
          </div>
        </div>
        <div className="relative w-20 bg-white p-1 pb-3 shadow-md rotate-[-8deg] -mt-1 border border-black/5">
          <div className="relative aspect-square w-full bg-[#f1f5f9] overflow-hidden">
            <Image src="/ref/girl6.jpg" alt="Mini 2" fill priority className="object-cover" sizes="80px" />
          </div>
        </div>
        <span className="text-[#b91c1c] text-sm -mr-1">✦</span>
      </div>

      {/* Center Left: 2-Frame Filmstrip Pinned with Safety Pin */}
      <div className="absolute top-44 left-6 z-20 w-24 bg-[#7a1329] p-1.5 pt-3 pb-2 shadow-2xl rounded-sm rotate-[-4deg]">
        <SafetyPin className="absolute -top-3 left-4 w-9 h-4 rotate-[-10deg] z-30" />
        <div className="space-y-1.5">
          <div className="relative aspect-[4/3] w-full bg-white overflow-hidden rounded-[1px]">
            <Image src="/ref/girl7.jpg" alt="Strip 1" fill priority className="object-cover" sizes="90px" />
          </div>
          <div className="relative aspect-[4/3] w-full bg-white overflow-hidden rounded-[1px]">
            <Image src="/ref/girl8.jpg" alt="Strip 2" fill priority className="object-cover" sizes="90px" />
          </div>
        </div>
      </div>

      {/* Center Right: Polaroid with Red Bulldog Clip */}
      <div className="absolute top-44 right-6 z-10 w-32 bg-white p-1.5 pb-5 shadow-xl rotate-[4deg] border border-black/5">
        <RedBulldogClip className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 z-30" />
        <div className="relative aspect-[4/3] w-full bg-[#f1f5f9] overflow-hidden">
          <Image src="/ref/girl9.jpg" alt="Clipped" fill priority className="object-cover" sizes="120px" />
        </div>
      </div>

      {/* Bottom Note Box with Quote */}
      <div className="absolute bottom-5 left-16 right-16 z-10 bg-white/80 p-2.5 rounded-sm shadow-sm border border-[#e2d8c7] text-center">
        <p className="text-[13px] text-[#4a3520] font-medium leading-tight" style={{ fontFamily: "'Caveat', cursive" }}>
          “Little moments that made<br />this journey unforgettable.”
        </p>
      </div>

      {/* Red Swirl at Bottom Left */}
      <RedSwirlBadge className="absolute bottom-5 left-4 w-8 h-8 z-20" />

      {/* Chibi Cat Character with Headphones at Bottom Right */}
      <div className="absolute bottom-2 right-4 w-16 h-20 z-20">
        <Image src="/elements/billa5.png" alt="Cat" fill priority className="object-contain drop-shadow-lg" sizes="65px" />
      </div>
    </div>
  );
}

/**
 * PAGE 6: "SMILE" 4-Tile Burgundy Grid / Graph Paper
 * - Notebook grid background
 * - 4 square photo frames in 2x2 layout with rich burgundy borders
 * - Kraft tape "SMILE" (for that's a reason) across center
 * - Cute chibi characters perched on corners
 * - Starburst doodles + romantic quote at bottom
 */
export function ScrapbookPage6() {
  return (
    <div className="relative w-full h-full bg-[#faf9f5] overflow-hidden select-none">
      {/* Grid Lines */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(#dedad0 1px, transparent 1px), linear-gradient(90deg, #dedad0 1px, transparent 1px)",
          backgroundSize: "16px 16px",
        }}
      />

      {/* Sparkle Starburst on Top Left */}
      <span className="absolute top-10 left-6 text-[#7a1329] text-xl font-bold opacity-80">✦</span>

      {/* 2x2 Burgundy Photo Grid */}
      <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[82%] z-10">
        <div className="relative grid grid-cols-2 gap-2.5 p-2.5">
          {[
            { src: "/ref/girl10.jpg", alt: "Tile 1", rot: "-2deg" },
            { src: "/ref/girl11.jpg", alt: "Tile 2", rot: "1deg" },
            { src: "/ref/girl1.jpg", alt: "Tile 3", rot: "2deg" },
            { src: "/ref/girl2.jpg", alt: "Tile 4", rot: "-1deg" },
          ].map((tile, idx) => (
            <div
              key={idx}
              className="relative aspect-square bg-[#7a1329] p-1.5 shadow-xl rounded-[2px]"
              style={{ transform: `rotate(${tile.rot})` }}
            >
              <div className="relative w-full h-full bg-[#f1f5f9] overflow-hidden rounded-[1px]">
                <Image src={tile.src} alt={tile.alt} fill priority className="object-cover" sizes="140px" />
              </div>
            </div>
          ))}

          {/* Center Diagonal Kraft Tape: "SMILE" */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-[#d4be99] px-3.5 py-1 shadow-md border-t border-b border-[#a88a5e] rotate-[-6deg]">
            <span className="text-[10px] font-black tracking-[0.2em] text-[#3d2914] uppercase block">
              SMILE
            </span>
            <span className="text-[6px] tracking-widest text-[#5c3e1e] block -mt-0.5 text-center">
              for that's a reason
            </span>
          </div>

          {/* Cute Chibi Mascot Perched on Top Right Corner */}
          <div className="absolute -top-6 -right-2 w-14 h-16 z-40">
            <Image src="/elements/billa.png" alt="Chibi Top" fill priority className="object-contain drop-shadow-md" sizes="60px" />
          </div>
        </div>
      </div>

      {/* Cute Chibi Mascot Sitting on Bottom Left */}
      <div className="absolute bottom-8 left-5 w-14 h-16 z-20">
        <Image src="/elements/billa5.png" alt="Chibi Bottom" fill priority className="object-contain drop-shadow-md" sizes="60px" />
      </div>

      {/* Black & White Striped Star on Bottom Right */}
      <div className="absolute bottom-12 right-6 z-20 w-8 h-8 rotate-[12deg] drop-shadow-md">
        <svg viewBox="0 0 30 30" className="w-full h-full fill-[#1e293b]">
          <path d="M 15 2 L 19 11 L 29 12 L 21 19 L 24 28 L 15 23 L 6 28 L 9 19 L 1 12 L 11 11 Z" stroke="#ffffff" strokeWidth="1.5" />
        </svg>
      </div>

      {/* Romantic Quote at Bottom Center */}
      <div className="absolute bottom-5 left-14 right-14 text-center z-10">
        <p className="text-[13px] text-[#4a3520] font-medium leading-tight" style={{ fontFamily: "'Caveat', cursive" }}>
          “Completely and perfectly<br />incandescently happy.”
        </p>
      </div>
    </div>
  );
}

/**
 * PAGE 7: Retro Collage / Checkered Footer / Folded Journal
 * - Radiating comic halftone rays in top right
 * - Burgundy organic cloud/blob with white ribbon bow
 * - Postage stamp photo with metal pushpin
 * - Folded cream letter/journal memo
 * - Burgundy camera sticker bottom left
 * - Maroon & cream checkerboard bottom border
 */
export function ScrapbookPage7() {
  return (
    <div className="relative w-full h-full bg-[#fbf8f2] overflow-hidden select-none">
      {/* Top Right Radiating Halftone Rays */}
      <div className="absolute -top-10 -right-10 w-44 h-44 pointer-events-none opacity-80">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-[#7a1329]">
          <path d="M 50 50 L 100 20 L 100 35 Z" opacity="0.7" />
          <path d="M 50 50 L 100 60 L 100 75 Z" opacity="0.6" />
          <path d="M 50 50 L 60 100 L 75 100 Z" opacity="0.5" />
          <path d="M 50 50 L 20 100 L 35 100 Z" opacity="0.6" />
        </svg>
      </div>

      {/* Sparkle Star Doodles Top Left */}
      <div className="absolute top-5 left-5 text-[#7a1329] text-2xl font-bold">
        ✦
      </div>

      {/* Burgundy Organic Shape & White Bow on Top Center */}
      <div className="absolute top-8 left-16 z-0 w-24 h-20 bg-[#7a1329] rounded-[40%_60%_70%_30%/40%_50%_60%_50%] shadow-md opacity-95">
        {/* White Ribbon Bow */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-8 text-white drop-shadow-md">
          <svg viewBox="0 0 40 30" className="w-full h-full fill-white stroke-zinc-300 stroke-1">
            <path d="M 20 15 C 14 5, 2 5, 5 15 C 8 20, 16 18, 20 15 Z" />
            <path d="M 20 15 C 26 5, 38 5, 35 15 C 32 20, 24 18, 20 15 Z" />
            <circle cx="20" cy="15" r="3.5" fill="#e5e7eb" />
          </svg>
        </div>
      </div>

      {/* Postage Stamp Photo Pinned with Silver Pushpin */}
      <div className="absolute top-36 left-7 w-28 bg-white p-1 pb-3 shadow-xl rotate-[-4deg] z-10 border-2 border-dashed border-[#cbd5e1]">
        {/* Silver Pushpin */}
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-zinc-300 border border-zinc-500 shadow-md flex items-center justify-center">
          <div className="w-1.5 h-1.5 rounded-full bg-white" />
        </div>
        <div className="relative aspect-square w-full bg-[#f1f5f9] overflow-hidden">
          <Image src="/ref/girl3.jpg" alt="Stamp" fill priority className="object-cover" sizes="110px" />
        </div>
      </div>

      {/* Folded Journal Memo on Upper Right */}
      <div className="absolute top-24 right-5 w-44 bg-[#fffef7] p-3 rounded-sm shadow-xl border border-[#ded8c8] rotate-[6deg] z-10">
        <div className="space-y-2">
          <div className="border-b border-[#e5decb] pb-0.5">
            <span className="text-[12px] text-[#4a3520]" style={{ fontFamily: "'Reenie Beanie', cursive" }}>
              A story woven with light
            </span>
          </div>
          <div className="border-b border-[#e5decb] pb-0.5">
            <span className="text-[12px] text-[#4a3520]" style={{ fontFamily: "'Reenie Beanie', cursive" }}>
              Every photograph a memory
            </span>
          </div>
          <div className="border-b border-[#e5decb] pb-0.5">
            <span className="text-[12px] text-[#4a3520]" style={{ fontFamily: "'Reenie Beanie', cursive" }}>
              You shine the brightest
            </span>
          </div>
        </div>

        {/* Diagonal Striped Paper Fold at Bottom of Memo */}
        <div className="absolute -bottom-10 right-0 w-full h-12 overflow-hidden pointer-events-none">
          <div
            className="w-full h-full opacity-60"
            style={{
              backgroundImage: "repeating-linear-gradient(45deg, #7a1329, #7a1329 4px, #fbf8f2 4px, #fbf8f2 8px)",
            }}
          />
        </div>
      </div>

      {/* Burgundy Vintage Camera Sticker Bottom Left */}
      <div className="absolute bottom-12 left-6 z-20 w-28 h-20 rotate-[4deg]">
        <RetroSilverDigicam className="w-full h-full" />
      </div>

      {/* Maroon & Cream Checkerboard Horizontal Bottom Border */}
      <div
        className="absolute bottom-0 left-0 right-0 h-6 z-10 border-t border-black/10"
        style={{
          backgroundImage: "repeating-conic-gradient(#7a1329 0% 25%, #f5efe3 0% 50%)",
          backgroundSize: "14px 14px",
        }}
      />
    </div>
  );
}

/**
 * PAGE 8: "JOURNEY" Photobooth Strip & "dumps" Collage
 * - Checkerboard borders top and bottom
 * - Cutout letters "JOURNEY" with starbursts and red cinema ticket
 * - 4-photo photobooth strip on left with burgundy border & pushpins
 * - Horizontal photo frame + "dumps" polaroid with red clip
 * - Memo note with quote & heart stickers
 */
export function ScrapbookPage8() {
  return (
    <div className="relative w-full h-full bg-[#fbf8f2] overflow-hidden select-none">
      {/* Top Checkerboard Border */}
      <div
        className="absolute top-0 left-0 right-0 h-5 z-20 border-b border-black/10"
        style={{
          backgroundImage: "repeating-conic-gradient(#7a1329 0% 25%, #f5efe3 0% 50%)",
          backgroundSize: "12px 12px",
        }}
      />

      {/* Bottom Checkerboard Border */}
      <div
        className="absolute bottom-0 left-0 right-0 h-5 z-20 border-t border-black/10"
        style={{
          backgroundImage: "repeating-conic-gradient(#7a1329 0% 25%, #f5efe3 0% 50%)",
          backgroundSize: "12px 12px",
        }}
      />

      {/* Left Column: 4-Frame Retro Photobooth Strip */}
      <div className="absolute top-9 left-5 bottom-8 w-[28%] bg-[#7a1329] p-1.5 pt-4 pb-3 shadow-2xl rounded-sm z-10 flex flex-col justify-between">
        {/* Silver Pushpins at top */}
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 flex gap-3 z-30">
          <div className="w-3.5 h-3.5 rounded-full bg-zinc-300 border border-zinc-500 shadow-md" />
        </div>

        {[
          { src: "/ref/girl4.jpg", alt: "Frame 1" },
          { src: "/ref/girl5.jpg", alt: "Frame 2" },
          { src: "/ref/girl6.jpg", alt: "Frame 3" },
          { src: "/ref/girl7.jpg", alt: "Frame 4" },
        ].map((item, idx) => (
          <div key={idx} className="relative aspect-[4/3] w-full bg-white overflow-hidden rounded-[1px] shadow-sm">
            <Image src={item.src} alt={item.alt} fill priority className="object-cover" sizes="100px" />
          </div>
        ))}
      </div>

      {/* Black Halftone Flower Icon at Bottom Left */}
      <div className="absolute bottom-6 left-2 z-20 opacity-80">
        <HalftoneBurst color="#1e293b" className="w-10 h-10" />
      </div>

      {/* Right Column Layout */}
      <div className="absolute top-8 right-4 left-[35%] bottom-8 z-10 flex flex-col justify-between">
        {/* Title: Cutout Letters "JOURNEY" + Cinema Ticket */}
        <div>
          <div className="flex items-center gap-1 mb-1">
            <span className="text-[#7a1329] text-sm">✦</span>
            <CutoutLetter letter="J" bg="#7a1329" text="#fff" rotate={-3} />
            <CutoutLetter letter="O" bg="#b45309" text="#fff" rotate={2} />
            <CutoutLetter letter="U" bg="#1e3a8a" text="#fff" rotate={-2} />
            <CutoutLetter letter="R" bg="#7a1329" text="#fff" rotate={3} />
            <CutoutLetter letter="N" bg="#365314" text="#fff" rotate={-3} />
            <CutoutLetter letter="E" bg="#b45309" text="#fff" rotate={2} />
            <CutoutLetter letter="Y" bg="#7a1329" text="#fff" rotate={-2} />
            <span className="text-[#7a1329] text-sm">✦</span>
          </div>

          {/* Vintage Cinema Ticket Stub */}
          <div className="inline-block bg-[#b91c1c] text-white text-[7px] font-mono font-bold px-2 py-0.5 rounded-[2px] shadow-sm rotate-[-3deg] border border-white/40">
            ★ CINEMA ★ TICKET
          </div>
        </div>

        {/* Horizontal Photo Frame */}
        <div className="relative w-full bg-white p-1.5 pb-2 shadow-lg rounded-[2px] border border-black/5">
          <div className="relative aspect-[16/10] w-full bg-[#f1f5f9] overflow-hidden rounded-[1px]">
            <Image src="/ref/girl8.jpg" alt="Horiz" fill priority className="object-cover" sizes="180px" />
          </div>
        </div>

        {/* Lower Row: Polaroid with Red Clip & "dumps" + Lined Memo Note */}
        <div className="flex gap-2 items-end">
          {/* Handwritten Quote Note */}
          <div className="w-[46%] bg-[#fffdfa] p-2 rounded-sm shadow-md border border-[#e2d8c7]">
            <p className="text-[11px] text-[#4a3520] leading-tight" style={{ fontFamily: "'Reenie Beanie', cursive" }}>
              Take time<br />
              to do what<br />
              makes your<br />
              soul happy.
            </p>
            <div className="flex gap-1 text-[8px] mt-1">
              <span>💛</span>
              <span>✨</span>
              <span>🥰</span>
            </div>
          </div>

          {/* Polaroid with Red Clip and "dumps" */}
          <div className="relative w-[52%] bg-white p-1 pb-4 shadow-xl rotate-[3deg] border border-black/5">
            <RedBulldogClip className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 z-30" />
            <div className="relative aspect-square w-full bg-[#f1f5f9] overflow-hidden">
              <Image src="/ref/girl9.jpg" alt="Dumps" fill priority className="object-cover" sizes="110px" />
            </div>
            {/* Cutout Letters "dumps" */}
            <div className="flex justify-center gap-0.5 mt-1">
              <span className="text-[7px] font-black uppercase text-white bg-[#7a1329] px-1 py-0.2 rounded-sm">d</span>
              <span className="text-[7px] font-black uppercase text-white bg-[#b45309] px-1 py-0.2 rounded-sm">u</span>
              <span className="text-[7px] font-black uppercase text-white bg-[#1e3a8a] px-1 py-0.2 rounded-sm">m</span>
              <span className="text-[7px] font-black uppercase text-white bg-[#365314] px-1 py-0.2 rounded-sm">p</span>
              <span className="text-[7px] font-black uppercase text-white bg-[#7a1329] px-1 py-0.2 rounded-sm">s</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * PAGE 9: "Together & Forever" / Ring Binder Finale
 * - Ring binder spiral on left
 * - Burgundy 3D bubble title "Together" + script subtitle
 * - Large horizontal album photo with silver stars
 * - Handwritten heartfelt quote note
 * - Silver digicam bottom right + halftone dots
 */
export function ScrapbookPage9() {
  return (
    <div className="relative w-full h-full bg-[#f8f5ee] overflow-hidden select-none">
      {/* Dot Grid Paper Texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: "radial-gradient(#c4b9a8 1.2px, transparent 1.2px)",
          backgroundSize: "14px 14px",
        }}
      />

      {/* Spiral Binder Rings on Left */}
      <BinderRings side="left" />

      {/* Burgundy Star Outlines on Corners */}
      <BurgundyStarDoodle className="absolute top-4 left-7 w-16 h-16 opacity-85 rotate-[-10deg]" />
      <BurgundyStarDoodle className="absolute -bottom-2 -left-2 w-20 h-20 opacity-85 rotate-[15deg]" />

      {/* Halftone Dot Patterns on Right */}
      <HalftoneBurst color="#7a1329" className="absolute bottom-20 right-0 w-24 h-24 opacity-80 translate-x-6" />

      {/* Headline: Retro 3D Bubble Title "Together" */}
      <div className="absolute top-6 left-12 right-6 z-20">
        <h2
          className="text-[44px] font-black leading-[0.85] tracking-tight uppercase"
          style={{
            fontFamily: "'Shrikhand', 'Montserrat', cursive",
            color: "#ffffff",
            WebkitTextStroke: "2.5px #7a1329",
            textShadow: "3px 3px 0px #7a1329, 4px 4px 0px rgba(0,0,0,0.25)",
          }}
        >
          Together
        </h2>
        <span
          className="text-[14px] text-[#7a1329] font-medium tracking-wide block -mt-1 ml-1"
          style={{ fontFamily: "'Reenie Beanie', 'Caveat', cursive" }}
        >
          &amp; for Memory
        </span>
      </div>

      {/* Large Horizontal Binder Album Photo */}
      <div className="absolute top-[28%] left-[16%] right-[8%] z-10">
        <div className="relative bg-white p-2.5 pb-3 shadow-xl rounded-sm border border-[#e2d8c7]">
          {/* Silver Star Stickers on Corners */}
          <span className="absolute top-1 left-1 text-zinc-400 text-xs">★</span>
          <span className="absolute top-1 right-1 text-zinc-400 text-xs">★</span>

          <div className="relative aspect-[16/11] w-full bg-[#f1f5f9] overflow-hidden rounded-sm">
            <Image src="/ref/girl10.jpg" alt="Together" fill priority className="object-cover" sizes="260px" />
          </div>
        </div>

        {/* Journal Quote Note Below Photo */}
        <div className="mt-4 bg-[#fffef9] p-3 rounded-sm shadow-md border border-[#e2d8c7] text-center">
          <p
            className="text-[14px] text-[#4a3520] font-medium leading-snug"
            style={{ fontFamily: "'Caveat', cursive" }}
          >
            “Thank you for all the laughter,<br />teamwork, and memories we created.”
          </p>
        </div>
      </div>

      {/* Bottom Right: Silver Compact Digicam */}
      <div className="absolute bottom-5 right-5 z-20 w-32 h-22 rotate-[-5deg]">
        <RetroSilverDigicam className="w-full h-full" />
      </div>
    </div>
  );
}

/**
 * PAGE 10: Scrapbook Back Cover
 * - Deep burgundy canvas backing
 * - "MADE WITH LOVE" gold foil stamp
 * - Barcode & cute celebration badge
 */
export function ScrapbookBackCover() {
  return (
    <div
      className="relative w-full h-full bg-[#5a0d1e] text-white overflow-hidden select-none flex flex-col items-center justify-between p-8"
      style={{
        backgroundImage: "radial-gradient(#7a1329 1px, transparent 1px)",
        backgroundSize: "20px 20px",
      }}
    >
      {/* Top Foil Title */}
      <div className="text-center mt-6">
        <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-[#e2b87f] block">
          SCRAPBOOK MEMOIR
        </span>
        <h3
          className="text-3xl font-black uppercase text-white mt-1"
          style={{ fontFamily: "'Shrikhand', cursive" }}
        >
          Forever &amp; Always
        </h3>
      </div>

      {/* Center Keepsake Mascot */}
      <div className="relative w-36 h-36">
        <Image src="/elements/billa5.png" alt="Mascot" fill priority className="object-contain drop-shadow-2xl" sizes="150px" />
      </div>

      {/* Bottom Barcode Card */}
      <div className="flex flex-col items-center mb-4">
        <div className="bg-white px-3 py-1.5 rounded-sm shadow-md flex flex-col items-center justify-center">
          <svg viewBox="0 0 100 24" className="w-[90px] h-[18px]">
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
          <span className="font-mono text-[7px] text-black font-bold tracking-[0.14em] mt-0.5">
            SPECIAL EDITION 2026
          </span>
        </div>
        <span className="text-[10px] text-white/70 font-medium tracking-wider mt-2" style={{ fontFamily: "'Caveat', cursive" }}>
          Made with all my love ❤️
        </span>
      </div>
    </div>
  );
}
