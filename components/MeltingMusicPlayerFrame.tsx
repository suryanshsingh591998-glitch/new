"use client";

import { useState } from "react";
import Image from "next/image";

interface MeltingMusicPlayerFrameProps {
  src: string;
  alt?: string;
  title?: string;
  artist?: string;
  onPrev?: () => void;
  onNext?: () => void;
  className?: string;
  sizes?: string;
}

export default function MeltingMusicPlayerFrame({
  src,
  alt = "Music Player Album Art",
  onPrev,
  onNext,
  className = "",
  sizes = "300px",
}: MeltingMusicPlayerFrameProps) {
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <div
      className={`relative select-none ${className}`}
      style={{
        aspectRatio: "449 / 805",
        filter: "drop-shadow(0 14px 28px rgba(0,0,0,0.18)) drop-shadow(0 4px 10px rgba(0,0,0,0.1))",
      }}
    >
      {/* ── 1. PHOTO BEHIND ARTWORK CUTOUT (Left: 6.68%, Top: 3.85%, Width: 86.64%, Height: 42.73%) ── */}
      <div
        className="absolute overflow-hidden z-0 bg-[#1c1c1e]"
        style={{
          left: "6.68%",
          top: "3.85%",
          width: "86.64%",
          height: "42.73%",
          borderRadius: "5.5%",
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority
          sizes={sizes}
          className={`object-cover transition-all duration-700 ease-out hover:scale-105 ${
            isPlaying ? "brightness-100" : "brightness-85 contrast-95"
          }`}
        />

        {/* Subtle glossy sheen over album art */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.02) 40%, transparent 60%)",
          }}
        />

        {/* Mini Now Playing Equalizer Pill (top right corner of artwork when playing) */}
        {isPlaying && (
          <div className="absolute top-2.5 right-2.5 bg-black/45 backdrop-blur-md px-1.5 py-1 rounded-full flex items-end gap-[1.5px] z-10 pointer-events-none">
            <div className="w-[2px] h-2.5 bg-white/90 rounded-full animate-[bounce_1s_infinite_100ms]" />
            <div className="w-[2px] h-3.5 bg-white/90 rounded-full animate-[bounce_0.8s_infinite_200ms]" />
            <div className="w-[2px] h-2 bg-white/90 rounded-full animate-[bounce_1.2s_infinite_150ms]" />
          </div>
        )}
      </div>

      {/* ── 2. EXACT TRANSPARENT MELTING FRAME OVERLAY ── */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <Image
          src="/frames/melting_player_frame.png"
          alt="Melting Player Frame"
          fill
          priority
          sizes={sizes}
          className="object-contain"
        />
      </div>

      {/* ── 3. INTERACTIVE CLICK TARGETS (Matches button locations on the frame) ── */}

      {/* Prev Track Target */}
      <button
        type="button"
        data-no-flip="true"
        onPointerDown={(e) => e.stopPropagation()}
        onMouseDown={(e) => e.stopPropagation()}
        onTouchStart={(e) => e.stopPropagation()}
        onPointerUp={(e) => e.stopPropagation()}
        onMouseUp={(e) => e.stopPropagation()}
        onClick={(e) => {
          e.stopPropagation();
          if (onPrev) onPrev();
        }}
        className="absolute z-20 cursor-pointer rounded-full hover:bg-white/10 active:scale-90 transition-all"
        style={{
          left: "22%",
          top: "63%",
          width: "16%",
          height: "7%",
        }}
        aria-label="Previous track"
        title="Previous photo"
      />

      {/* Play / Pause Toggle Target */}
      <button
        type="button"
        data-no-flip="true"
        onPointerDown={(e) => e.stopPropagation()}
        onMouseDown={(e) => e.stopPropagation()}
        onTouchStart={(e) => e.stopPropagation()}
        onPointerUp={(e) => e.stopPropagation()}
        onMouseUp={(e) => e.stopPropagation()}
        onClick={(e) => {
          e.stopPropagation();
          setIsPlaying((prev) => !prev);
        }}
        className="absolute z-20 cursor-pointer rounded-full hover:bg-white/10 active:scale-90 transition-all flex items-center justify-center"
        style={{
          left: "44%",
          top: "62.5%",
          width: "14%",
          height: "8%",
        }}
        aria-label={isPlaying ? "Pause playback" : "Play playback"}
        title={isPlaying ? "Pause" : "Play"}
      >
        {/* If paused, show a subtle play icon overlay */}
        {!isPlaying && (
          <div className="w-5 h-5 bg-white/95 rounded-full flex items-center justify-center shadow-md pointer-events-none">
            <svg viewBox="0 0 24 24" className="w-3 h-3 text-[#333333] fill-current ml-0.5 pointer-events-none">
              <path d="M8 5v14l11-7z" className="pointer-events-none" />
            </svg>
          </div>
        )}
      </button>

      {/* Next Track Target */}
      <button
        type="button"
        data-no-flip="true"
        onPointerDown={(e) => e.stopPropagation()}
        onMouseDown={(e) => e.stopPropagation()}
        onTouchStart={(e) => e.stopPropagation()}
        onPointerUp={(e) => e.stopPropagation()}
        onMouseUp={(e) => e.stopPropagation()}
        onClick={(e) => {
          e.stopPropagation();
          if (onNext) onNext();
        }}
        className="absolute z-20 cursor-pointer rounded-full hover:bg-white/10 active:scale-90 transition-all"
        style={{
          left: "64%",
          top: "63%",
          width: "16%",
          height: "7%",
        }}
        aria-label="Next track"
        title="Next photo"
      />
    </div>
  );
}
