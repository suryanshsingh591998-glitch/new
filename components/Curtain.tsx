'use client';

/**
 * ShowtimeCountdown
 * -------------------------------------------------------------------------
 * A cinema-marquee countdown. At zero, the curtain opens, and once it has
 * fully finished opening the whole lock screen fades out to reveal your
 * content.
 *
 * Reveal sequence:
 *  1. Lock content fades out.
 *  2. Curtain parts + chrome fades (existing GSAP timeline, unchanged).
 *  3. The moment the curtain finishes opening, your real content mounts
 *     underneath the lock screen while it's still fully opaque, so there
 *     is never a visible flash of unpainted content.
 *  4. Once content has had a paint frame, the whole lock-screen overlay
 *     fades to transparent and unmounts, revealing your page already
 *     fully painted.
 *
 *  All the original fixes (children not mounted until safe, own audio that
 *  never overlaps yours, portal + scroll lock, killing ambient tweens
 *  before the reveal timeline starts, sequential/non-overlapping curtain
 *  timeline) are unchanged.
 *
 * Install once:
 *   npm install gsap
 *
 * Usage A — reveal in place:
 *   <ShowtimeCountdown targetDate={new Date('2026-08-11T00:00:00+05:30')} songSrc="/song.mp3">
 *     <YourHomepage />
 *   </ShowtimeCountdown>
 *
 * Usage B — redirect on completion (recommended if smoothness matters most):
 *   <ShowtimeCountdown
 *     targetDate={new Date('2026-08-11T00:00:00+05:30')}
 *     songSrc="/song.mp3"
 *     redirectTo="/live"
 *   />
 *   (redirectTo skips the fade entirely — there's no local content to mask
 *   a paint-in gap for, Next.js just serves the destination page.)
 *
 * Perf note: import this with
 *   next/dynamic(() => import('./ShowtimeCountdown'), { ssr: false })
 * on the one page that uses it, so its JS/GSAP never ships to any other route.
 */

import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { useRouter } from 'next/navigation';
import gsap from 'gsap';
import FlipClock from '@/components/ui/flip-clock';

export interface ShowtimeCountdownProps {
  /** Moment the countdown ends and the curtain opens. */
  targetDate?: Date;
  /** Scrolling ticker text above/below the marquee title. */
  tickerText?: string;
  /** Big marquee title on the lock screen (e.g. "NOW SHOWING"). */
  marqueeTitle?: string;
  /** Script-font subtitle under the marquee title. */
  marqueeSub?: string;
  /** Caption under the countdown ("doors open at midnight, IST"). */
  doorsText?: string;
  /** Optional audio file that plays only on the lock screen and stops at zero. */
  songSrc?: string;
  /** 0–1. Default 0.6. */
  songVolume?: number;
  /**
   * Optional route to navigate to when the countdown completes, instead of
   * opening the curtain in place. When set, `children` are ignored entirely
   * — this component is the whole page, and the real content lives at
   * `redirectTo`. This is the smoothest option if you have a real route for
   * "the show".
   */
  redirectTo?: string;
  /** Your actual page content. Not mounted until the countdown hits zero. Ignored when `redirectTo` is set. */
  children?: ReactNode;
  /**
   * Shows a small "Preview" button on the lock screen that triggers the
   * curtain-open early, so you can check the reveal without waiting for
   * the real countdown. Defaults to true — set to false for production.
   */
  showPreviewButton?: boolean;
}

interface Remaining {
  total: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const DEFAULT_TARGET = new Date('2026-11-11T00:00:00+05:30');

async function getRemaining(targetTime: number) {
  const res = await fetch('/api/time', { cache: 'no-store' });
  const { now } = await res.json();

  const diff = targetTime - now;

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, total: 0 };
  }

  const total = Math.floor(diff / 1000);

  return {
    total,
    days: Math.floor(total / 86400),
    hours: Math.floor((total % 86400) / 3600),
    minutes: Math.floor((total % 3600) / 60),
    seconds: total % 60,
  };
}

type UnitKey = 'days' | 'hours' | 'minutes' | 'seconds';

export default function ShowtimeCountdown({
  targetDate,
  tickerText = 'HAPPY BIRTHDAY SWEETY ·',
  marqueeTitle = "Sweety's Birthday",
  marqueeSub = "forever yours, made with all my love for Sweety ❤️",
  doorsText = 'celebrating Sweety',
  songSrc,
  songVolume = 0.6,
  redirectTo,
  children,
  showPreviewButton = true,
}: ShowtimeCountdownProps) {
  const router = useRouter();
  const effectiveTarget = targetDate ? new Date(targetDate) : DEFAULT_TARGET;

  // Both flip together, only once the lock screen has fully faded out.
  // `mounted` gates your children, `revealed` unmounts the overlay itself.
  const [mounted, setMounted] = useState(false);
  const [revealed, setRevealed] = useState(false);
  // False on both the server render and React's first client render (before
  // any effect has run) — that agreement is what avoids the hydration
  // mismatch. It flips true in an effect right after mount, which is also
  // the client's very next render, so it's still the frame the portal
  // content (and anything that depends on it) actually appears in.
  const [isClient, setIsClient] = useState(false);

  const rootRef = useRef<HTMLDivElement>(null);
  const chromeRef = useRef<HTMLDivElement>(null);
  const curtainLRef = useRef<HTMLDivElement>(null);
  const curtainRRef = useRef<HTMLDivElement>(null);
  const lockContentRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  const unlockedRef = useRef(false);
  const reduceMotionRef = useRef(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const builtRef = useRef<Record<UnitKey, boolean>>({ days: false, hours: false, minutes: false, seconds: false });

  useEffect(() => {
    reduceMotionRef.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setIsClient(true);
  }, []);

  /* ---------- lock body scroll while the lock screen is up ---------- */
  useEffect(() => {
    if (revealed) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = original;
    };
  }, [revealed]);

  /* ---------- lock-screen's own song: only ever plays here, never near your content ---------- */
  useEffect(() => {
    if (revealed || !songSrc || !isClient) return;
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = songVolume;
    const tryPlay = () => {
      audio.play().catch(() => {
        /* browser blocked autoplay; will retry on first interaction below */
      });
    };
    tryPlay();

    // Most browsers require a user gesture before audio can play with sound.
    window.addEventListener('pointerdown', tryPlay, { once: true });

    return () => {
      window.removeEventListener('pointerdown', tryPlay);
      audio.pause();
      audio.currentTime = 0;
    };
  }, [revealed, songSrc, songVolume, isClient]);

  /* ---------- odometer digit columns ---------- */
  const buildColumns = useCallback((el: HTMLDivElement, digits: number[]) => {
    el.innerHTML = '';
    for (const d of digits) {
      void d;
      const col = document.createElement('span');
      col.className = 'od-col';
      const strip = document.createElement('span');
      strip.className = 'od-strip';
      for (let i = 0; i < 10; i++) {
        const s = document.createElement('span');
        s.className = 'od-digit';
        s.textContent = String(i);
        strip.appendChild(s);
      }
      col.appendChild(strip);
      el.appendChild(col);
    }
  }, []);

  const setDigits = useCallback((el: HTMLDivElement, digits: number[], animate: boolean) => {
    [...el.children].forEach((col, i) => {
      const h = (col as HTMLElement).getBoundingClientRect().height;
      const strip = col.querySelector<HTMLElement>('.od-strip');
      if (!strip) return;
      if (animate && !reduceMotionRef.current) {
        gsap.to(strip, { y: -digits[i] * h, duration: 0.5, ease: 'power3.out' });
      } else {
        gsap.set(strip, { y: -digits[i] * h });
      }
    });
  }, []);

  const paintUnit = useCallback(
    (el: HTMLDivElement | null, key: UnitKey, value: string) => {
      if (!el) return;
      const digits = value.split('').map(Number);
      if (!builtRef.current[key]) {
        buildColumns(el, digits);
        builtRef.current[key] = true;
        requestAnimationFrame(() => setDigits(el, digits, false));
        return;
      }
      setDigits(el, digits, true);
    },
    [buildColumns, setDigits]
  );

  /* ---------- the reveal: curtain opens, then the whole lock screen fades out ---------- */
  const triggerUnlock = useCallback(() => {
    if (unlockedRef.current) return;
    unlockedRef.current = true;

    // Stop the clock and every ambient tween immediately, before the curtain
    // timeline even starts. Letting these keep running underneath it is what
    // caused the glitchy feel — they were fighting it for frames.
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    const finish = () => {
      if (redirectTo) {
        router.push(redirectTo);
        return;
      }
      // Mount real content now — it paints hidden behind the still-opaque
      // lock screen, so there's no visible flash of unpainted content.
      setMounted(true);
      requestAnimationFrame(() => {
        if (reduceMotionRef.current) {
          setRevealed(true);
          return;
        }
        gsap.to(rootRef.current, {
          opacity: 0,
          duration: 0.6,
          delay: 0.15,
          ease: 'power2.out',
          onComplete: () => setRevealed(true),
        });
      });
    };

    const curtainL = curtainLRef.current;
    const curtainR = curtainRRef.current;

    if (reduceMotionRef.current || !curtainL || !curtainR) {
      finish();
      return;
    }

    // Fade the lock-screen song out in step with the curtain
    if (audioRef.current && !audioRef.current.paused) {
      gsap.to(audioRef.current, { volume: 0, duration: 1.2, ease: 'power1.in' });
    }

    // Theatrical curtain opening from the reference:
    // Left: translate(-100%) rotate(20deg) scale(0, 2) from top right
    // Right: translate(100%) rotate(-20deg) scale(0, 2) from top left
    // Filter: brightness(180%) -> brightness(100%)
    const tl = gsap.timeline({ onComplete: finish });
    tl.to(lockContentRef.current, { opacity: 0, y: -18, duration: 0.45, ease: 'power2.inOut' })
      .addLabel('open', '+=0.04')
      .fromTo(
        curtainL,
        { xPercent: 0, rotation: 0, scaleX: 1, scaleY: 1, transformOrigin: 'top right', filter: 'brightness(180%)' },
        { xPercent: -100, rotation: 20, scaleX: 0, scaleY: 2, filter: 'brightness(100%)', duration: 2.2, ease: 'power2.inOut', force3D: true },
        'open'
      )
      .fromTo(
        curtainR,
        { xPercent: 0, rotation: 0, scaleX: 1, scaleY: 1, transformOrigin: 'top left', filter: 'brightness(180%)' },
        { xPercent: 100, rotation: -20, scaleX: 0, scaleY: 2, filter: 'brightness(100%)', duration: 2.2, ease: 'power2.inOut', force3D: true },
        'open'
      )
      .to(chromeRef.current, { opacity: 0, duration: 0.8, ease: 'power2.out' }, 'open+=0.5');
  }, [redirectTo, router]);

  /* ---------- Space and Enter key listener to trigger curtain opening ---------- */
  useEffect(() => {
    if (revealed || !isClient) return;
    const detectKey = (event: KeyboardEvent) => {
      if (event.keyCode === 13 || event.keyCode === 32 || event.key === 'Enter' || event.key === ' ') {
        triggerUnlock();
      }
    };
    document.addEventListener('keydown', detectKey);
    return () => document.removeEventListener('keydown', detectKey);
  }, [revealed, isClient, triggerUnlock]);

  /* ---------- countdown tick (stops entirely the moment unlock triggers) ---------- */
  useEffect(() => {
    if (revealed) return;
    async function paint() {
      const r = await getRemaining(effectiveTarget.getTime());
      if (r.total <= 0) triggerUnlock();
    }
    paint();
    intervalRef.current = setInterval(paint, 1000);
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [revealed, effectiveTarget, triggerUnlock]);

  const overlay = (
    <div className="showtime-root " ref={rootRef}>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Calistoga&family=Fraunces:ital,opsz,wght,SOFT,WONK@0,9..144,700,100,1;1,9..144,500,100,1&family=Outfit:wght@400;500;600;700&family=Syne:wght@700;800&display=swap"
      />

      {songSrc && <audio ref={audioRef} src={songSrc} loop preload="auto" />}

      <div ref={chromeRef}>
        <div className="vignette" />
        <div className="spotlight" />
        <div className="grain" />
      </div>

      {showPreviewButton && (
        <button
          type="button"
          className="preview-btn"
          onClick={triggerUnlock}
          aria-label="Preview curtain reveal"
        >
          <span>✨ Preview</span>
        </button>
      )}

      <div className="lock" id="scene">
        {/* Realistic Curtain Drapery - Layered directly behind the timer with gentle wind wave */}
        <div id="curtain" aria-hidden="true">
          <div className="left" ref={curtainLRef}>
            <div className="curtain-wave curtain-wave-left">
              <div className="curtain-texture" />
              <div className="curtain-velvet-color" />
              <div className="curtain-sheen" />
              <div className="curtain-floor-shadow" />
            </div>
          </div>
          <div className="right" ref={curtainRRef}>
            <div className="curtain-wave curtain-wave-right">
              <div className="curtain-texture" />
              <div className="curtain-velvet-color" />
              <div className="curtain-sheen" />
              <div className="curtain-floor-shadow" />
            </div>
          </div>
        </div>

        <div className="screen">
          <div className="lock-content" ref={lockContentRef}>

            <div className="deco-crown" aria-hidden="true">
              <span className="deco-bar" />
              <span className="deco-gem">◆</span>
              <span className="deco-bar" />
            </div>
            <h1 className="marquee-title">{marqueeTitle}</h1>
            <p className="marquee-sub">{marqueeSub}</p>

            <div className="flip-countdown-wrapper my-4 flex flex-col items-center w-full max-w-[100vw] overflow-visible">
              <div className="transform scale-[0.66] xs:scale-[0.76] sm:scale-90 md:scale-100 origin-center transition-transform">
                <FlipClock
                  countdown={true}
                  targetDate={effectiveTarget}
                  size="lg"
                  variant="theatre"
                  showDays="always"
                  showLabels={true}
                  onComplete={triggerUnlock}
                />
              </div>
              <div className="hero-caption mt-1 sm:mt-2">countdown to curtain call</div>
              {showPreviewButton && (
                <button
                  type="button"
                  className="curtain-preview-cta"
                  onClick={triggerUnlock}
                  aria-label="Open curtain preview"
                >
                  <span>✨ Open Curtain (Preview)</span>
                </button>
              )}
            </div>

            <div className="perforation" aria-hidden="true" />
            <p className="lock-foot">{doorsText}</p>
          </div>
        </div>
      </div>

      <style>{`
        @font-face {
          font-family: 'Maglite';
          src: url('/fonts/maglite/Maglite.otf') format('opentype'),
               url('/fonts/maglite/Maglite.ttf') format('truetype');
          font-weight: 100 900;
          font-style: normal;
          font-display: swap;
        }

        .showtime-root {
          --bg: #120d0a;
          --bg-2: #1b140d;
          --cream: #f3e6cf;
          --amber: #f0a83c;
          --amber-glow: rgba(240, 168, 60, 0.55);
          --maroon: #6e1f24;
          --maroon-2: #8c2a30;
          --muted: #a8957a;
          --film: #241a10;
          --font-title: 'Maglite', 'Fraunces', Georgia, serif;
          --font-sub: 'Maglite', 'Fraunces', Georgia, serif;
          --font-sans: 'Outfit', -apple-system, sans-serif;
          --gold: #d4af6a;

          position: fixed;
          inset: 0;
          width: 100vw;
          height: 100vh;
          height: 100dvh;
          z-index: 999;
          background: radial-gradient(120% 90% at 50% 40%, var(--bg-2) 0%, var(--bg) 70%);
          color: var(--cream);
          font-family: var(--font-sans);
          -webkit-font-smoothing: antialiased;
          overflow: hidden;
          isolation: isolate;
        }
        .showtime-root * {
          box-sizing: border-box;
        }

        /* Soft dark corners so the frame reads like it's lit by a single
           projector beam rather than flat-lit edge to edge. */
        .showtime-root .vignette {
          position: absolute;
          inset: 0;
          z-index: 4;
          pointer-events: none;
          background: radial-gradient(120% 85% at 50% 42%, transparent 45%, rgba(0, 0, 0, 0.55) 100%);
        }

        /* A slow, faint beam sweeping past the title — the one bit of
           ambient motion that reads as "cinema" rather than "loading". */
        .showtime-root .spotlight {
          position: absolute;
          top: -20%;
          left: -30%;
          width: 60%;
          height: 140%;
          z-index: 4;
          pointer-events: none;
          background: linear-gradient(
            100deg,
            transparent 0%,
            rgba(240, 168, 60, 0.05) 45%,
            rgba(240, 168, 60, 0.09) 50%,
            rgba(240, 168, 60, 0.05) 55%,
            transparent 100%
          );
          animation: showtime-sweep 9s ease-in-out infinite;
          mix-blend-mode: screen;
        }
        @keyframes showtime-sweep {
          0% { transform: translateX(0); }
          50% { transform: translateX(220%); }
          100% { transform: translateX(0); }
        }

        /* Very light grain so the amber/maroon gradients don't band on
           flat panels. */
        .showtime-root .grain {
          position: absolute;
          inset: 0;
          z-index: 5;
          pointer-events: none;
          opacity: 0.05;
          mix-blend-mode: overlay;
          background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>");
          background-size: 160px 160px;
        }

        .showtime-root .preview-btn {
          position: absolute;
          top: max(16px, env(safe-area-inset-top));
          right: max(16px, env(safe-area-inset-right));
          z-index: 1000;
          font-family: var(--font-sans);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #f7dfa5;
          background: rgba(30, 20, 14, 0.75);
          border: 1px solid rgba(229, 195, 120, 0.45);
          border-radius: 999px;
          padding: 8px 18px;
          cursor: pointer;
          backdrop-filter: blur(8px);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4), 0 0 12px rgba(240, 168, 60, 0.15);
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: all 0.25s ease;
        }
        .showtime-root .preview-btn:hover {
          background: rgba(229, 195, 120, 0.22);
          border-color: #f0a83c;
          color: #ffffff;
          transform: translateY(-1px) scale(1.02);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.6), 0 0 20px rgba(240, 168, 60, 0.4);
        }

        .showtime-root .curtain-preview-cta {
          margin-top: 14px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-sans);
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #fff4db;
          background: linear-gradient(135deg, rgba(140, 42, 48, 0.75) 0%, rgba(50, 15, 18, 0.85) 100%);
          border: 1px solid rgba(240, 168, 60, 0.5);
          border-radius: 999px;
          padding: 9px 24px;
          cursor: pointer;
          backdrop-filter: blur(6px);
          box-shadow: 0 6px 24px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.15);
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .showtime-root .curtain-preview-cta:hover {
          background: linear-gradient(135deg, rgba(180, 50, 60, 0.9) 0%, rgba(80, 20, 25, 0.95) 100%);
          border-color: #f7dfa5;
          transform: translateY(-2px) scale(1.03);
          box-shadow: 0 8px 30px rgba(240, 168, 60, 0.35), 0 0 18px rgba(240, 168, 60, 0.4);
          color: #ffffff;
        }

        .showtime-root .lock {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          padding: 0;
        }

        /* The actual "projector screen" — a real 16:9 box, centered, so the
           ticker and text are framed instead of stretching across whatever
           width the monitor happens to be. Shrinks by height on short
           screens and by width on narrow ones, whichever runs out first. */

      .showtime-root .screen {
        position: relative;
        z-index: 10;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        container-type: size;
      }

        /* ── REALISTIC THEATRE CURTAIN (LAYERED BEHIND TIMER) ─── */
        .showtime-root #curtain {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 2; /* Sits directly behind the timer screen (z-index: 10) */
          pointer-events: none;
          overflow: hidden;
        }

        .showtime-root #curtain .left,
        .showtime-root #curtain .right {
          position: absolute;
          top: 0;
          width: 50.15%;
          height: 100%;
          filter: brightness(180%);
          will-change: transform, filter;
          overflow: hidden;
          background-color: #1a060a;
        }

        .showtime-root #curtain .left {
          left: 0;
          transform-origin: top right;
          box-shadow: inset 24px 0 40px rgba(0, 0, 0, 0.5);
        }

        .showtime-root #curtain .right {
          left: 50%;
          transform-origin: top left;
          box-shadow: inset -24px 0 40px rgba(0, 0, 0, 0.5);
        }

        /* ── THEATRICAL CURTAIN WIND & BREEZE ANIMATION ── */
        .showtime-root .curtain-wave {
          position: absolute;
          top: 0;
          height: 100%;
          transform-origin: top center;
          will-change: transform;
          pointer-events: none;
        }

        /* Extra bleed past the center seam prevents any gap from opening during wind sway */
        .showtime-root .curtain-wave-left {
          left: 0;
          width: 108%;
          animation: curtain-breeze-left 8s ease-in-out infinite;
        }

        .showtime-root .curtain-wave-right {
          left: -8%;
          width: 108%;
          animation: curtain-breeze-right 9.5s ease-in-out infinite;
          animation-delay: -3.8s;
        }

        @keyframes curtain-breeze-left {
          0% {
            transform: skewX(0deg) translateX(0) scaleY(1);
          }
          18% {
            transform: skewX(-1.1deg) translateX(-0.3%) scaleY(1.005);
          }
          38% {
            transform: skewX(0.6deg) translateX(0.2%) scaleY(0.998);
          }
          60% {
            transform: skewX(-1.4deg) translateX(-0.4%) scaleY(1.008);
          }
          82% {
            transform: skewX(0.4deg) translateX(0.1%) scaleY(1.002);
          }
          100% {
            transform: skewX(0deg) translateX(0) scaleY(1);
          }
        }

        @keyframes curtain-breeze-right {
          0% {
            transform: skewX(0deg) translateX(0) scaleY(1);
          }
          20% {
            transform: skewX(1.1deg) translateX(0.3%) scaleY(1.005);
          }
          42% {
            transform: skewX(-0.5deg) translateX(-0.2%) scaleY(0.998);
          }
          64% {
            transform: skewX(1.5deg) translateX(0.4%) scaleY(1.008);
          }
          85% {
            transform: skewX(-0.3deg) translateX(-0.1%) scaleY(1.002);
          }
          100% {
            transform: skewX(0deg) translateX(0) scaleY(1);
          }
        }

        .showtime-root #curtain .right .curtain-texture,
        .showtime-root #curtain .right .curtain-velvet-color {
          transform: scaleX(-1);
        }

        /* High-detail cloth fold SVG drape texture */
        .showtime-root .curtain-texture {
          position: absolute;
          inset: 0;
          background-image: url("/curtain.svg");
          background-size: cover;
          background-repeat: no-repeat;
          mix-blend-mode: overlay;
          opacity: 0.9;
          pointer-events: none;
        }

        /* Deep Crimson Velvet Shading with subtle breathing swell */
        .showtime-root .curtain-velvet-color {
          position: absolute;
          inset: 0;
          background: 
            radial-gradient(130% 65% at 50% 10%, rgba(255, 255, 255, 0.22) 0%, transparent 60%),
            linear-gradient(180deg, rgba(0, 0, 0, 0.45) 0%, transparent 15%, transparent 75%, rgba(0, 0, 0, 0.75) 100%),
            repeating-linear-gradient(
              90deg,
              #3d070b 0px,
              #6e141a 22px,
              #9e1f26 48px,
              #bd2c34 58px,
              #6e141a 84px,
              #3d070b 106px
            );
          mix-blend-mode: multiply;
          pointer-events: none;
          animation: curtain-velvet-swell 8s ease-in-out infinite alternate;
        }

        @keyframes curtain-velvet-swell {
          0% {
            filter: brightness(100%);
          }
          50% {
            filter: brightness(107%);
          }
          100% {
            filter: brightness(100%);
          }
        }

        /* Silky Velvet Sheen with shimmering light motion */
        .showtime-root .curtain-sheen {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 50% 25%, rgba(255, 235, 205, 0.20) 0%, transparent 60%);
          mix-blend-mode: screen;
          pointer-events: none;
          animation: curtain-sheen-wave 7s ease-in-out infinite alternate;
        }

        @keyframes curtain-sheen-wave {
          0% {
            opacity: 0.16;
            transform: scale(1) translateY(0);
          }
          50% {
            opacity: 0.27;
            transform: scale(1.05) translateY(1.5%);
          }
          100% {
            opacity: 0.16;
            transform: scale(1) translateY(0);
          }
        }

        /* Natural subtle floor shadow with gentle depth pulse */
        .showtime-root .curtain-floor-shadow {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 80px;
          background: linear-gradient(0deg, rgba(0, 0, 0, 0.7) 0%, transparent 100%);
          pointer-events: none;
          animation: curtain-floor-sway 8.5s ease-in-out infinite alternate;
        }

        @keyframes curtain-floor-sway {
          0% {
            opacity: 0.65;
            transform: scaleY(1);
          }
          50% {
            opacity: 0.85;
            transform: scaleY(1.08);
          }
          100% {
            opacity: 0.65;
            transform: scaleY(1);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .showtime-root .curtain-wave,
          .showtime-root .curtain-sheen,
          .showtime-root .curtain-velvet-color,
          .showtime-root .curtain-floor-shadow {
            animation: none !important;
          }
        }

    .showtime-root .lock-content {
      position: relative;
      z-index: 10;
      width: 100%;
      height: 100%;
      padding: 3cqh 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
    }

        .showtime-root .deco-crown {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-bottom: 0.6cqh;
          opacity: 0.85;
        }
        .showtime-root .deco-crown .deco-bar {
          width: clamp(24px, 4cqw, 48px);
          height: 1px;
          background: linear-gradient(90deg, transparent, #dfb462);
        }
        .showtime-root .deco-crown .deco-bar:last-child {
          background: linear-gradient(90deg, #dfb462, transparent);
        }
        .showtime-root .deco-crown .deco-gem {
          font-size: 7px;
          color: #f7dfa5;
        }

        .showtime-root .marquee-title {
          font-family: var(--font-title);
          font-weight: 400;
          font-feature-settings: 'liga' 1, 'dlig' 1, 'calt' 1, 'swsh' 1;
          font-size: clamp(2.6rem, 7.5cqw, 5.2rem);
          letter-spacing: 0.015em;
          line-height: 1.05;
          text-transform: none;
          color: #fff9f0;
          text-shadow:
            0 2px 4px rgba(0, 0, 0, 0.95),
            0 0 20px rgba(240, 168, 60, 0.45),
            0 0 50px rgba(240, 168, 60, 0.18);
          margin: 0;
          display: block;
          text-align: center;
          max-width: 96%;
          animation: showtime-title-in 1.1s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        @keyframes showtime-title-in {
          from { opacity: 0; transform: translateY(10px) scale(0.98); letter-spacing: 0.08em; }
          to { opacity: 1; transform: translateY(0) scale(1); letter-spacing: 0.015em; }
        }
        .showtime-root .marquee-sub {
          font-family: var(--font-sub);
          font-style: normal;
          font-weight: 400;
          font-feature-settings: 'liga' 1, 'dlig' 1, 'calt' 1;
          font-size: clamp(1.15rem, 2.5cqw, 1.55rem);
          letter-spacing: 0.03em;
          color: #eed8b0;
          margin: 0.9cqh 0 0;
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.9), 0 0 16px rgba(238, 216, 176, 0.25);
          max-width: 90%;
        }

        .showtime-root .hero-days {
          position: relative;
          margin: 2.4cqh 0 0.5cqh;
        }
        .showtime-root .hero-days::before {
          content: '';
          position: absolute;
          inset: -14% -10%;
          z-index: -1;
          background: radial-gradient(50% 60% at 50% 45%, rgba(240, 168, 60, 0.16) 0%, transparent 75%);
          filter: blur(2px);
        }
        .showtime-root .flip-countdown-wrapper {
          position: relative;
          z-index: 15;
          margin-top: 2.2cqh;
          margin-bottom: 1cqh;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .showtime-root .hero-caption {
          font-family: var(--font-sans);
          font-size: clamp(10.5px, 1.4cqw, 12px);
          font-weight: 600;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: #e5c378;
          opacity: 0.95;
          margin-top: 16px;
          text-shadow: 0 1px 4px rgba(0, 0, 0, 0.95);
        }

        .showtime-root .rest-row {
          display: flex;
          gap: clamp(6px, 1.4cqw, 14px);
          margin-top: 2cqh;
          flex-wrap: wrap;
          justify-content: center;
        }
        .showtime-root .bulb-tile {
          position: relative;
          background: linear-gradient(180deg, var(--bg-2) 0%, rgba(18, 13, 10, 0.9) 100%);
          border: 1px solid rgba(243, 230, 207, 0.14);
          border-radius: 8px;
          padding: 1.2cqh 1.2cqw 0.8cqh;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5cqh;
          box-shadow: 0 14px 30px -14px rgba(0, 0, 0, 0.7), inset 0 1px 0 rgba(243, 230, 207, 0.06);
          overflow: hidden;
        }
        .showtime-root .bulb-tile::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--amber), transparent);
          opacity: 0.65;
        }
        .showtime-root .bulb-tile .od-number {
          display: flex;
          gap: 1px;
        }
        .showtime-root .bulb-label {
          font-family: var(--font-display);
          font-size: clamp(8.5px, 1.5cqw, 10.5px);
          letter-spacing: 0.22em;
          color: var(--muted);
        }

        .showtime-root .od-col {
          position: relative;
          width: clamp(16px, 4.2cqw, 26px);
          height: clamp(26px, 6.5cqw, 40px);
          overflow: hidden;
          display: inline-block;
          border-radius: 3px;
          background: linear-gradient(180deg, #1a130d 0%, #0d0906 100%);
          box-shadow: inset 0 0 0 1px rgba(212, 175, 106, 0.18), inset 0 2px 4px rgba(0, 0, 0, 0.6);
        }
        .showtime-root .od-col::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          height: 1px;
          background: rgba(0, 0, 0, 0.55);
          box-shadow: 0 1px 0 rgba(255, 255, 255, 0.03);
          z-index: 1;
          pointer-events: none;
        }
        .showtime-root .od-strip {
          display: flex;
          flex-direction: column;
        }
        .showtime-root .od-digit {
          height: clamp(26px, 6.5cqw, 40px);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-mono);
          font-weight: 700;
          font-size: clamp(1rem, 2.9cqw, 1.7rem);
          font-variant-numeric: tabular-nums;
          color: var(--amber);
          text-shadow: 0 0 10px var(--amber-glow);
        }

        .showtime-root .perforation {
          width: min(200px, 45%);
          height: 1px;
          margin-top: 2.2cqh;
          background: linear-gradient(90deg, transparent 0%, rgba(229, 195, 120, 0.75) 40%, rgba(229, 195, 120, 0.75) 60%, transparent 100%);
          position: relative;
          opacity: 0.9;
        }
        .showtime-root .perforation::after {
          content: '◆';
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          font-size: 7px;
          color: #e5c378;
          background: #120d0a;
          padding: 0 6px;
        }
        .showtime-root .lock-foot {
          margin-top: 1.4cqh;
          font-family: var(--font-sans);
          font-size: clamp(9.5px, 1.3cqw, 11px);
          font-weight: 600;
          letter-spacing: 0.28em;
          color: #c49f5c;
          text-transform: uppercase;
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.95);
        }

        @media (max-width: 640px) {
          .showtime-root {
            --rail: 8px;
          }
          .showtime-root .lock {
            padding: calc(var(--rail) + 6px);
          }
          .showtime-root .lock-content {
            padding: 10px 0 14px;
            justify-content: flex-start;
          }
          .showtime-root .bulb-rail.top {
            margin-bottom: 6px;
          }
          .showtime-root .bulb-rail.bottom {
            margin-top: 6px;
            margin-bottom: 0;
          }
          .showtime-root .marquee-title {
            margin-top: auto;
          }
          .showtime-root .lock-foot {
            margin-bottom: auto;
          }
          .showtime-root .preview-btn {
            top: max(10px, env(safe-area-inset-top));
            right: max(10px, env(safe-area-inset-right));
            padding: 5px 11px;
            font-size: 11px;
          }
        }

        @media (max-height: 520px) {
          .showtime-root .bulb-rail.top,
          .showtime-root .ticker,
          .showtime-root .corner {
            display: none;
          }
          .showtime-root .marquee-title {
            margin-top: 1cqh;
          }
        }


        @media (prefers-reduced-motion: reduce) {
          .showtime-root .ticker-track {
            animation: none !important;
          }
          .showtime-root .spotlight,
          .showtime-root .marquee-title,
          .showtime-root .marquee-title-star {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );

  return (
    <>
      {/* mounted flips true right as the lock screen starts to fade — your
          content paints hidden behind it, then the fade reveals an
          already-painted page. No autoplay of yours can fire, or overlap
          the lock-screen song, a moment before that. */}
      {mounted && !redirectTo && children}
      {!revealed && isClient && createPortal(overlay, document.body)}
    </>
  );
}