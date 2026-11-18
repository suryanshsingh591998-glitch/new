"use client";

import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import {
  Download,
  Share2,
  Copy,
  Check,
  Volume2,
  VolumeX,
  Play,
  Pause,
  Maximize2,
  Minimize2,
  X,
  Film,
  Sparkles,
} from "lucide-react";

interface MagazineVideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  name?: string;
}

/* ── HANDCRAFTED SCRAPBOOK & GOLD FOIL DOODLES (Theme: #9f773a) ── */

function SweetBowDoodle({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 90 70"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx={45} cy={28} r={5} fill="currentColor" opacity={0.25} />
      <circle cx={45} cy={28} r={5} />
      <path d="M42 26 C28 14 14 20 18 34 C21 44 38 34 42 30" />
      <path d="M26 24 C30 28 36 29 40 28" opacity={0.6} strokeDasharray="2 2" />
      <path d="M48 26 C62 14 76 20 72 34 C69 44 52 34 48 30" />
      <path d="M64 24 C60 28 54 29 50 28" opacity={0.6} strokeDasharray="2 2" />
      <path d="M42 32 Q34 46 24 58 Q34 54 38 60 Q42 48 44 33" />
      <path d="M48 32 Q56 46 66 58 Q56 54 52 60 Q48 48 46 33" />
    </svg>
  );
}

function PostageStampDoodle({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x={14} y={14} width={52} height={52} rx={2} strokeDasharray="4 2" />
      <rect x={20} y={20} width={40} height={40} rx={1} />
      <path
        d="M40 50 C32 44 28 38 28 33 C28 29 31 26 35 26 C38 26 39.5 28 40 29 C40.5 28 42 26 45 26 C49 26 52 29 52 33 C52 38 48 44 40 50 Z"
        fill="currentColor"
        opacity={0.55}
      />
      <text
        x={40}
        y={57}
        textAnchor="middle"
        fontSize={6}
        fontFamily="serif"
        fill="currentColor"
        letterSpacing="0.16em"
        opacity={0.85}
      >
        SWEETY
      </text>
    </svg>
  );
}

function SparkleStar({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="-20 -20 40 40" fill="currentColor" className={className} aria-hidden="true">
      <path d="M0 -18 C0 -4 4 0 18 0 C4 0 0 4 0 18 C0 4 -4 0 -18 0 C-4 0 0 -4 0 -18 Z" />
      <circle cx={0} cy={0} r={2.5} fill="#FFF9ED" />
    </svg>
  );
}

function HeartDoodle({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 60"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.3}
      className={className}
      aria-hidden="true"
    >
      <path
        d="M30 48 C16 38 8 28 8 18 C8 10 14 5 21 5 C26 5 28 8 30 11 C32 8 34 5 39 5 C46 5 52 10 52 18 C52 28 44 38 30 48 Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx={30} cy={22} r={2} fill="currentColor" opacity={0.4} />
    </svg>
  );
}

function WhatsAppThemeIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.41 1.56 1.56 2.41 3.63 2.41 5.83 0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24zm4.52 11.53c-.25-.13-1.47-.72-1.7-.8-.23-.09-.39-.13-.56.13-.17.25-.64.8-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.01-1.24-.74-.66-1.24-1.48-1.39-1.73-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.45-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.16 0-.43.06-.66.31-.23.25-.87.85-.87 2.07s.89 2.4 1.02 2.57c.12.17 1.76 2.68 4.25 3.76.59.26 1.06.41 1.42.52.6.19 1.14.16 1.57.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.18-.48-.3z" />
    </svg>
  );
}

function InstagramThemeIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export default function MagazineVideoModal({
  isOpen,
  onClose,
  name = "Sweety",
}: MagazineVideoModalProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(26);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedCaption, setCopiedCaption] = useState(false);
  const [showInstaTip, setShowInstaTip] = useState(false);
  const [controlsVisible, setControlsVisible] = useState(true);
  const [isDownloading, setIsDownloading] = useState(false);
  const [mounted, setMounted] = useState(false);

  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll and listen for Escape key when modal is open
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose]);

  // Auto-play when opened
  useEffect(() => {
    if (!isOpen) {
      if (videoRef.current) {
        videoRef.current.pause();
      }
      return;
    }
    const timer = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play().catch(() => {
          if (videoRef.current) {
            videoRef.current.muted = true;
            setIsMuted(true);
            videoRef.current.play().catch(() => {});
          }
        });
      }
    }, 200);
    return () => clearTimeout(timer);
  }, [isOpen]);

  const handleMouseMove = () => {
    setControlsVisible(true);
    if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
    if (isPlaying) {
      controlsTimeoutRef.current = setTimeout(() => {
        setControlsVisible(false);
      }, 2500);
    }
  };

  if (!isOpen || !mounted) return null;

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
      setControlsVisible(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    const next = !videoRef.current.muted;
    videoRef.current.muted = next;
    setIsMuted(next);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    setCurrentTime(videoRef.current.currentTime);
    if (videoRef.current.duration && !isNaN(videoRef.current.duration)) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!videoRef.current) return;
    const seekTime = Number(e.target.value);
    videoRef.current.currentTime = seekTime;
    setCurrentTime(seekTime);
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const handleDownloadClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (isDownloading) return;
    setIsDownloading(true);

    try {
      const res = await fetch("/videos/magazine-flip.mp4");
      if (!res.ok) throw new Error("Fetch failed");
      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${name.toLowerCase()}-birthday-magazine.mp4`;
      document.body.appendChild(a);
      a.click();
      setTimeout(() => {
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      }, 100);
    } catch {
      // Fallback direct download
      const a = document.createElement("a");
      a.href = "/api/download-video";
      a.download = `${name.toLowerCase()}-birthday-magazine.mp4`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } finally {
      setTimeout(() => setIsDownloading(false), 1200);
    }
  };

  const handleShareNative = async () => {
    const shareData = {
      title: `${name}'s Birthday Magazine`,
      text: `Happy Birthday ${name}! 📖💖 Watch her special Birthday Magazine film! ✨`,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        const res = await fetch("/videos/magazine-flip.mp4");
        if (res.ok && navigator.canShare) {
          const blob = await res.blob();
          const file = new File([blob], `${name.toLowerCase()}-birthday-magazine.mp4`, {
            type: "video/mp4",
          });
          if (navigator.canShare({ files: [file] })) {
            await navigator.share({
              ...shareData,
              files: [file],
            });
            return;
          }
        }
        await navigator.share(shareData);
      } catch (err) {
        if ((err as Error).name !== "AbortError") {
          handleShareWhatsApp();
        }
      }
    } else {
      handleShareWhatsApp();
    }
  };

  const handleShareWhatsApp = () => {
    const text = encodeURIComponent(
      `🎉 Watch ${name}'s Special Birthday Magazine flip open! 📖💖✨\n${window.location.origin}`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, "_blank");
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2400);
  };

  const handleCopyCaption = () => {
    navigator.clipboard.writeText(
      `Happy Birthday Sweety! 👑✨ The prettiest girl and the love of my life 💖🎂 #BirthdayQueen #Sweety`
    );
    setCopiedCaption(true);
    setTimeout(() => setCopiedCaption(false), 2400);
  };

  const progressPct = duration > 0 ? (currentTime / duration) * 100 : 0;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Birthday Magazine Film"
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/75 backdrop-blur-md p-3 sm:p-6 select-none overflow-y-auto"
      onClick={onClose}
    >
      {/* ── THEME FOLIO: WARM NATURAL PARCHMENT & ANTIQUE GOLD KEEPSAKE CARD ── */}
      <div
        className="relative w-full max-w-4xl bg-[#FAF7F2] border-2 border-[#c59a45]/55 ring-1 ring-[#9f773a]/25 rounded-2xl sm:rounded-3xl shadow-[0_25px_80px_rgba(0,0,0,0.65)] overflow-hidden flex flex-col my-auto max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Scrapbook Doodle Ornaments */}
        <div className="absolute top-2.5 left-4 pointer-events-none opacity-30">
          <SweetBowDoodle className="w-9 h-7 text-[#9f773a]" />
        </div>
        <div className="absolute top-3 right-16 pointer-events-none opacity-35">
          <SparkleStar className="w-4 h-4 text-[#9f773a]" />
        </div>
        <div className="absolute top-2 right-28 pointer-events-none opacity-15 hidden sm:block">
          <PostageStampDoodle className="w-12 h-12 text-[#9f773a]" />
        </div>

        {/* ── Antique Scrapbook Folio Header ── */}
        <div className="relative flex items-center justify-between px-6 py-4 border-b border-[#e5d8c3] bg-gradient-to-r from-[#FAF7F2] via-[#F4EFE6] to-[#FAF7F2]">
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-0.5">
              <span className="text-[10px] font-mono tracking-[0.24em] text-[#9f773a] uppercase font-semibold">
                ✦ SPECIAL BIRTHDAY ARCHIVE · SWEETY ✦
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-serif tracking-wide text-[#2b2118] font-semibold">
              The Birthday Magazine Film
            </h2>
            <p className="font-['Caveat',cursive] text-base sm:text-lg text-[#8a6839] leading-none mt-0.5">
              Every photograph, flipbook page, and your song — saved as a living keepsake
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-[#FFFDF9] hover:bg-[#F0E6D8] text-[#8a6839] hover:text-[#2b2118] border border-[#c59a45]/50 flex items-center justify-center transition-all cursor-pointer active:scale-95 shadow-sm"
            aria-label="Close dialog"
          >
            <X className="w-4 h-4 text-[#9f773a]" />
          </button>
        </div>

        {/* ── Framed Keepsake Mat Board Stage ── */}
        <div className="p-2 sm:p-4 bg-[#F2ECE1] border-b border-[#e5d8c3]">
          <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onClick={togglePlay}
            className="relative w-full bg-[#FAF7F2] rounded-xl overflow-hidden border border-[#d8c7b0] shadow-md aspect-[16/10] sm:aspect-[16/9] max-h-[54vh] cursor-pointer group flex items-center justify-center"
          >
            {/* The Screen Recording Video */}
            <video
              ref={videoRef}
              playsInline
              loop
              preload="auto"
              className="w-full h-full object-contain bg-[#FAF7F2]"
              onTimeUpdate={handleTimeUpdate}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            >
              <source src="/videos/magazine-flip.mp4" type="video/mp4" />
              <source src="/videos/magazine-flip.webm" type="video/webm" />
            </video>

            {/* Play Indicator when paused */}
            {!isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center bg-[#2b2118]/25 backdrop-blur-[1px] transition-all">
                <div className="w-14 h-14 rounded-full bg-[#FAF7F2] border-2 border-[#9f773a] text-[#9f773a] flex items-center justify-center shadow-xl hover:scale-105 transition-all">
                  <Play className="w-6 h-6 fill-current translate-x-0.5 text-[#9f773a]" />
                </div>
              </div>
            )}

            {/* Antique Music Badge (Top Right) */}
            <div
              className="absolute top-3 right-3 z-30 pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={toggleMute}
                className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF7F2]/95 hover:bg-[#FAF7F2] text-[#5a4328] text-[11px] font-serif tracking-wider border border-[#c59a45]/60 shadow-md backdrop-blur-sm transition-all active:scale-95 cursor-pointer"
              >
                {isMuted ? (
                  <>
                    <VolumeX className="w-3.5 h-3.5 text-[#9f773a]" />
                    <span className="font-semibold">Unmute Melody</span>
                  </>
                ) : (
                  <>
                    <Volume2 className="w-3.5 h-3.5 text-[#9f773a]" />
                    <span className="font-semibold">Playing: Sweety Song</span>
                  </>
                )}
              </button>
            </div>

            {/* Antique Theme Video Controls Bar (Slides up on hover / pause) */}
            <div
              onClick={(e) => e.stopPropagation()}
              className={`absolute inset-x-0 bottom-0 z-20 px-4 py-3 bg-gradient-to-t from-[#FAF7F2]/95 via-[#FAF7F2]/80 to-transparent flex flex-col gap-2 transition-opacity duration-300 ${
                controlsVisible || !isPlaying
                  ? "opacity-100 pointer-events-auto"
                  : "opacity-0 pointer-events-none"
              }`}
            >
              {/* Antique Gold Scrubber Bar */}
              <div className="relative w-full flex items-center h-3 group/bar cursor-pointer">
                <input
                  type="range"
                  min="0"
                  max={duration || 26}
                  step="0.05"
                  value={currentTime}
                  onChange={handleSeek}
                  className="absolute inset-0 w-full h-full opacity-0 z-20 cursor-pointer"
                  aria-label="Seek video"
                />
                <div className="w-full h-1.5 bg-[#e2d5c0] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#9f773a] to-[#c59a45]"
                    style={{ width: `${progressPct}%` }}
                  />
                </div>
                <div
                  className="absolute w-3 h-3 rounded-full bg-[#9f773a] border border-[#FAF7F2] shadow-sm pointer-events-none -translate-x-1/2 scale-0 group-hover/bar:scale-100 transition-transform"
                  style={{ left: `${progressPct}%` }}
                />
              </div>

              {/* Bottom Controls Row */}
              <div className="flex items-center justify-between text-xs text-[#5a4328]">
                <div className="flex items-center gap-2.5">
                  <button
                    type="button"
                    onClick={togglePlay}
                    className="p-1 rounded-full hover:bg-[#e8dcce] text-[#9f773a] transition-all cursor-pointer"
                    aria-label={isPlaying ? "Pause" : "Play"}
                  >
                    {isPlaying ? (
                      <Pause className="w-4 h-4 fill-current" />
                    ) : (
                      <Play className="w-4 h-4 fill-current" />
                    )}
                  </button>

                  <div className="font-mono text-[11px] text-[#8a6839] tracking-wider font-semibold">
                    <span>{formatTime(currentTime)}</span>
                    <span className="opacity-40 mx-1">/</span>
                    <span>{formatTime(duration)}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={toggleMute}
                    className="p-1 rounded-full hover:bg-[#e8dcce] text-[#8a6839] transition-all cursor-pointer"
                    aria-label={isMuted ? "Unmute" : "Mute"}
                  >
                    {isMuted ? (
                      <VolumeX className="w-4 h-4 text-[#9f773a]" />
                    ) : (
                      <Volume2 className="w-4 h-4 text-[#9f773a]" />
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={toggleFullscreen}
                    className="p-1 rounded-full hover:bg-[#e8dcce] text-[#8a6839] transition-all cursor-pointer"
                    aria-label="Toggle Fullscreen"
                  >
                    {isFullscreen ? (
                      <Minimize2 className="w-4 h-4" />
                    ) : (
                      <Maximize2 className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Theme Keepsake Actions: Antique Gold & Warm Stationery ── */}
        <div className="p-4 sm:p-5 bg-gradient-to-b from-[#FAF7F2] to-[#F7F2E7] flex flex-col gap-3.5">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            {/* Primary Antique Gold Leaf Download Button */}
            <a
              href="/api/download-video"
              download={`${name.toLowerCase()}-birthday-magazine.mp4`}
              onClick={handleDownloadClick}
              className="flex items-center justify-center sm:justify-start gap-2.5 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#9f773a] via-[#b98d45] to-[#9f773a] hover:brightness-105 active:scale-95 text-[#FAF7F2] font-serif font-bold text-xs tracking-wider uppercase shadow-md shadow-[#9f773a]/30 border border-[#f5dfa8]/60 transition-all cursor-pointer select-none"
            >
              {isDownloading ? (
                <>
                  <span className="w-4 h-4 border-2 border-[#FAF7F2] border-t-transparent rounded-full animate-spin" />
                  <span>Saving MP4 Video...</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4 stroke-[2.5]" />
                  <span>Download Magazine Video (MP4)</span>
                  <span className="text-[10px] opacity-85 font-mono lowercase tracking-normal px-2 py-0.5 rounded-full bg-black/15">
                    with music
                  </span>
                </>
              )}
            </a>

            {/* Social Share Group — Warm Scrapbook Stationery Pills */}
            <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap justify-center">
              {/* WhatsApp Button */}
              <button
                type="button"
                onClick={handleShareWhatsApp}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#FFFDF9] hover:bg-[#F2ECE1] text-[#3d2e1e] border border-[#c59a45]/50 hover:border-[#9f773a] text-xs font-serif font-semibold tracking-wider transition-all cursor-pointer active:scale-95 shadow-sm"
                title="Send on WhatsApp"
              >
                <WhatsAppThemeIcon className="w-3.5 h-3.5 text-[#9f773a]" />
                <span>WhatsApp</span>
              </button>

              {/* Instagram Guide Button */}
              <button
                type="button"
                onClick={() => setShowInstaTip(!showInstaTip)}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#FFFDF9] hover:bg-[#F2ECE1] text-[#3d2e1e] border border-[#c59a45]/50 hover:border-[#9f773a] text-xs font-serif font-semibold tracking-wider transition-all cursor-pointer active:scale-95 shadow-sm"
                title="How to post to Instagram Story"
              >
                <InstagramThemeIcon className="w-3.5 h-3.5 text-[#9f773a]" />
                <span>Instagram</span>
              </button>

              {/* Native Mobile Share Button */}
              <button
                type="button"
                onClick={handleShareNative}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#FFFDF9] hover:bg-[#F2ECE1] text-[#3d2e1e] border border-[#c59a45]/50 hover:border-[#9f773a] text-xs font-serif font-semibold tracking-wider transition-all cursor-pointer active:scale-95 shadow-sm"
                title="Open system share sheet"
              >
                <Share2 className="w-3.5 h-3.5 text-[#9f773a]" />
                <span className="hidden sm:inline">Share</span>
              </button>

              {/* Copy Link Button */}
              <button
                type="button"
                onClick={handleCopyLink}
                className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-[#FFFDF9] hover:bg-[#F2ECE1] text-[#3d2e1e] border border-[#c59a45]/50 hover:border-[#9f773a] text-xs font-mono transition-all cursor-pointer active:scale-95 shadow-sm"
                title="Copy website link"
              >
                {copiedLink ? (
                  <>
                    <Check className="w-3 h-3 text-[#9f773a]" />
                    <span className="text-[#9f773a] font-semibold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3 text-[#9f773a]" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* ── Theme Instagram Note Card (Styled like an antique stationery letter) ── */}
          {showInstaTip && (
            <div className="p-3.5 rounded-2xl bg-[#FFFDF9] border border-[#d8c3a5] text-xs text-[#4a3a28] flex flex-col gap-2.5 animate-fade-in shadow-md">
              <div className="flex items-center justify-between border-b border-[#e8dcce] pb-1.5">
                <span className="font-serif italic font-semibold text-[#2b2118]">
                  How to post on your Instagram Story or Reel:
                </span>
                <button
                  type="button"
                  onClick={() => setShowInstaTip(false)}
                  className="text-[#9f773a] hover:text-[#2b2118] text-xs px-1"
                >
                  ✕
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-[11px] leading-relaxed">
                <div className="p-2.5 rounded-xl bg-[#FAF7F2] border border-[#e5d8c3]">
                  <span className="font-serif font-bold text-[#9f773a] block mb-0.5">
                    1. Save Video
                  </span>
                  Tap <strong className="text-[#2b2118]">Download Video</strong> to save the flipbook recording to your photos.
                </div>
                <div className="p-2.5 rounded-xl bg-[#FAF7F2] border border-[#e5d8c3]">
                  <span className="font-serif font-bold text-[#9f773a] block mb-0.5">
                    2. Open Instagram
                  </span>
                  Tap <strong className="text-[#2b2118]">+ Story</strong> or <strong className="text-[#2b2118]">Reel</strong>, and choose the video from your gallery.
                </div>
                <div className="p-2.5 rounded-xl bg-[#FAF7F2] border border-[#e5d8c3] flex flex-col justify-between gap-1.5">
                  <div>
                    <span className="font-serif font-bold text-[#9f773a] block mb-0.5">
                      3. Tag & Wish
                    </span>
                    Tag <strong className="text-[#2b2118]">@{name.toLowerCase()}</strong> to share the birthday love!
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyCaption}
                    className="flex items-center justify-center gap-1 py-1 px-2.5 rounded-full bg-[#9f773a]/15 hover:bg-[#9f773a]/25 text-[#725224] text-[10px] font-serif font-semibold transition-all border border-[#9f773a]/30 cursor-pointer"
                  >
                    {copiedCaption ? (
                      <Check className="w-2.5 h-2.5 text-[#9f773a]" />
                    ) : (
                      <Copy className="w-2.5 h-2.5 text-[#9f773a]" />
                    )}
                    <span>{copiedCaption ? "Caption Copied!" : "Copy Caption 💖"}</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* ── Theme Keepsake Footer Signoff ── */}
          <div className="flex items-center justify-between pt-1 border-t border-[#e8dcce] text-[11px]">
            <span className="font-['Caveat',cursive] text-lg text-[#9f773a]">
              &ldquo;From the first page to the last, made with love for {name} ✨&rdquo;
            </span>
            <span className="font-serif italic text-[#8a6839] opacity-80 hidden sm:inline">
              Vogue Birthday Edition · Issue 000456
            </span>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
