"use client";

import React from "react";
import Book from "./Book";

/* ------------------------------------------------------------------
 * SECTION 4: SCRAPBOOK DESK — RICH BESPOKE DOODLE WALLPAPER
 * ------------------------------------------------------------------
 * Warm natural parchment canvas adorned with 25+ handcrafted antique
 * gold (#9f773a) celebration & scrapbook doodles spread thoughtfully
 * throughout the entire perimeter, giving plenty of breathing space
 * whether the 3D album is closed or fully opened.
 * ------------------------------------------------------------------ */

// ── HANDCRAFTED CELEBRATION & SCRAPBOOK DOODLES (#9f773a) ──

function ScrapbookCamera({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 90 75" fill="none" stroke="currentColor" strokeWidth={1.3} strokeLinecap="round" strokeLinejoin="round" className={className} style={style} aria-hidden="true">
      <rect x={12} y={22} width={66} height={46} rx={4} />
      <path d="M28 22 L34 14 L56 14 L62 22 Z" />
      <circle cx={45} cy={45} r={16} />
      <circle cx={45} cy={45} r={10} strokeDasharray="3 2" />
      <circle cx={45} cy={45} r={4} fill="currentColor" opacity={0.5} />
      <circle cx={66} cy={32} r={3} />
      <rect x={20} y={30} width={8} height={5} rx={1} />
      <path d="M72 10 L73 13 L76 14 L73 15 L72 18 L71 15 L68 14 L71 13 Z" fill="currentColor" opacity={0.7} />
    </svg>
  );
}

function SweetBow({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 90 70" fill="none" stroke="currentColor" strokeWidth={1.3} strokeLinecap="round" strokeLinejoin="round" className={className} style={style} aria-hidden="true">
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

function ButterflyDoodle({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 80 70" fill="none" stroke="currentColor" strokeWidth={1.3} strokeLinecap="round" strokeLinejoin="round" className={className} style={style} aria-hidden="true">
      <line x1={40} y1={22} x2={40} y2={52} strokeWidth={1.8} />
      <circle cx={40} cy={18} r={2.5} fill="currentColor" />
      <path d="M39 16 Q34 10 28 12" />
      <path d="M41 16 Q46 10 52 12" />
      <circle cx={27} cy={12} r={1.2} fill="currentColor" />
      <circle cx={53} cy={12} r={1.2} fill="currentColor" />
      <path d="M39 26 C26 12 12 22 14 36 C16 46 38 40 39 34" />
      <path d="M39 36 C24 38 18 52 26 58 C34 62 38 48 39 44" />
      <path d="M41 26 C54 12 68 22 66 36 C64 46 42 40 41 34" />
      <path d="M41 36 C56 38 62 52 54 58 C46 62 42 48 41 44" />
      <circle cx={26} cy={28} r={2} fill="currentColor" opacity={0.5} />
      <circle cx={54} cy={28} r={2} fill="currentColor" opacity={0.5} />
    </svg>
  );
}

function PostageStamp({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth={1.3} strokeLinecap="round" strokeLinejoin="round" className={className} style={style} aria-hidden="true">
      <rect x={14} y={14} width={52} height={52} rx={2} strokeDasharray="4 2" />
      <rect x={20} y={20} width={40} height={40} rx={1} />
      <path
        d="M40 50 C32 44 28 38 28 33 C28 29 31 26 35 26 C38 26 39.5 28 40 29 C40.5 28 42 26 45 26 C49 26 52 29 52 33 C52 38 48 44 40 50 Z"
        fill="currentColor"
        opacity={0.65}
      />
      <text x={40} y={57} textAnchor="middle" fontSize={6} fontFamily="sans-serif" fill="currentColor" letterSpacing="0.12em" opacity={0.8}>
        SWEETY
      </text>
    </svg>
  );
}

function HeartSparkle({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth={1.3} className={className} style={style} aria-hidden="true">
      <path
        d="M30 48 C16 38 8 28 8 18 C8 10 14 5 21 5 C26 5 28 8 30 11 C32 8 34 5 39 5 C46 5 52 10 52 18 C52 28 44 38 30 48 Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx={30} cy={22} r={2.5} fill="currentColor" opacity={0.5} />
      <path d="M30 0 L31 3 L34 4 L31 5 L30 8 L29 5 L26 4 L29 3 Z" fill="currentColor" opacity={0.7} />
      <circle cx={8} cy={34} r={1.2} fill="currentColor" opacity={0.5} />
      <circle cx={52} cy={34} r={1.2} fill="currentColor" opacity={0.5} />
    </svg>
  );
}

function HeartArrowDoodle({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth={1.3} strokeLinecap="round" strokeLinejoin="round" className={className} style={style} aria-hidden="true">
      <path d="M50 78C28 62 15 47 15 32c0-12 9-20 19-20 7 0 13 4 16 10 3-6 9-10 16-10 10 0 19 8 19 20 0 15-13 30-35 46z" />
      <path d="M10 12l80 76" strokeWidth={1.6} />
      <path d="M78 78l12 10M88 88l10-12" strokeWidth={1.6} />
      <path d="M12 24 L14 14 L24 16" />
      <circle cx={50} cy={38} r={2} fill="currentColor" opacity={0.5} />
    </svg>
  );
}

function BirthdayCake({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 100 120" fill="none" stroke="currentColor" strokeWidth={1.3} className={className} style={style} aria-hidden="true">
      <line x1={32} y1={36} x2={32} y2={48} />
      <path d="M32 23 C30 27, 30 30, 32 33 C34 30, 34 27, 32 23 Z" fill="currentColor" opacity={0.75} />
      <line x1={50} y1={30} x2={50} y2={48} />
      <path d="M50 15 C48 20, 48 24, 50 27 C52 24, 52 20, 50 15 Z" fill="currentColor" opacity={0.85} />
      <line x1={68} y1={36} x2={68} y2={48} />
      <path d="M68 23 C66 27, 66 30, 68 33 C70 30, 70 27, 68 23 Z" fill="currentColor" opacity={0.75} />
      <rect x={24} y={48} width={52} height={26} rx={3} />
      <path d="M24 55 Q30 59 37 55 Q44 59 50 55 Q57 59 63 55 Q70 59 76 55" />
      <circle cx={37} cy={64} r={1.3} fill="currentColor" opacity={0.7} />
      <circle cx={50} cy={64} r={1.5} fill="currentColor" opacity={0.8} />
      <circle cx={63} cy={64} r={1.3} fill="currentColor" opacity={0.7} />
      <rect x={12} y={74} width={76} height={34} rx={3.5} />
      <path d="M12 83 Q18 88 25 83 Q31 88 38 83 Q44 88 50 83 Q56 88 63 83 Q69 88 75 83 Q82 88 88 83" />
      <path d="M6 108 L94 108" strokeWidth={1.8} />
    </svg>
  );
}

function CelebrationCupcake({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 80 100" fill="none" stroke="currentColor" strokeWidth={1.3} className={className} style={style} aria-hidden="true">
      <line x1={40} y1={18} x2={40} y2={34} strokeWidth={1.6} />
      <path d="M40 6 C38 10, 38 13, 40 16 C42 13, 42 10, 40 6 Z" fill="currentColor" opacity={0.8} />
      <circle cx={40} cy={12} r={1.2} fill="currentColor" />
      <path d="M40 0 L41 3 L43 4 L41 5 L40 8 L39 5 L37 4 L39 3 Z" fill="currentColor" opacity={0.6} />
      <path d="M22 52 Q18 42 28 38 Q34 32 40 34 Q46 32 52 38 Q62 42 58 52 Z" strokeLinejoin="round" />
      <path d="M28 46 Q40 50 52 46" strokeDasharray="3 2" opacity={0.65} />
      <path d="M24 54 L30 84 L50 84 L56 54 Z" strokeLinejoin="round" />
      <line x1={32} y1={54} x2={35} y2={84} opacity={0.5} />
      <line x1={40} y1={54} x2={40} y2={84} opacity={0.5} />
      <line x1={48} y1={54} x2={45} y2={84} opacity={0.5} />
    </svg>
  );
}

function GiftBoxClassic({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth={1.3} className={className} style={style} aria-hidden="true">
      <rect x={22} y={42} width={56} height={46} rx={3} />
      <rect x={18} y={32} width={64} height={12} rx={2} />
      <line x1={50} y1={32} x2={50} y2={88} strokeWidth={1.8} />
      <line x1={22} y1={64} x2={78} y2={64} strokeWidth={1.8} />
      <path d="M50 32 C38 18, 22 20, 26 28 C29 34, 44 32, 50 32 Z" />
      <path d="M50 32 C62 18, 78 20, 74 28 C71 34, 56 32, 50 32 Z" />
      <circle cx={50} cy={32} r={3} fill="currentColor" />
      <path d="M47 34 Q38 42 34 50" strokeLinecap="round" />
      <path d="M53 34 Q62 42 66 50" strokeLinecap="round" />
    </svg>
  );
}

function ToastingFlutes({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth={1.3} className={className} style={style} aria-hidden="true">
      <g transform="rotate(12 38 60)">
        <path d="M30 18 C30 40 34 50 38 52 C42 50 46 40 46 18 Z" />
        <line x1={38} y1={52} x2={38} y2={82} strokeWidth={1.6} />
        <line x1={26} y1={82} x2={50} y2={82} strokeWidth={1.6} strokeLinecap="round" />
        <line x1={33} y1={24} x2={43} y2={24} strokeDasharray="2 2" opacity={0.6} />
      </g>
      <g transform="rotate(-12 62 60)">
        <path d="M54 18 C54 40 58 50 62 52 C66 50 70 40 70 18 Z" />
        <line x1={62} y1={52} x2={62} y2={82} strokeWidth={1.6} />
        <line x1={50} y1={82} x2={74} y2={82} strokeWidth={1.6} strokeLinecap="round" />
        <line x1={57} y1={24} x2={67} y2={24} strokeDasharray="2 2" opacity={0.6} />
      </g>
      <path d="M50 14 L51 17 L54 18 L51 19 L50 22 L49 19 L46 18 L49 17 Z" fill="currentColor" />
      <circle cx={42} cy={8} r={1.3} fill="currentColor" opacity={0.7} />
      <circle cx={58} cy={9} r={1.3} fill="currentColor" opacity={0.7} />
    </svg>
  );
}

function BirthdayCrown({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 100 80" fill="none" stroke="currentColor" strokeWidth={1.3} className={className} style={style} aria-hidden="true">
      <path d="M16 62 Q50 68 84 62" strokeLinecap="round" />
      <path d="M14 68 Q50 74 86 68" strokeLinecap="round" />
      <path d="M16 62 L18 36 L34 48 L50 24 L66 48 L82 36 L84 62" strokeLinejoin="round" />
      <circle cx={18} cy={34} r={3} fill="currentColor" />
      <circle cx={34} cy={46} r={2.5} fill="currentColor" />
      <circle cx={50} cy={21} r={3.5} fill="currentColor" />
      <circle cx={66} cy={46} r={2.5} fill="currentColor" />
      <circle cx={82} cy={34} r={3} fill="currentColor" />
      <circle cx={50} cy={46} r={1.8} fill="currentColor" />
      <path d="M50 8 L51 12 L55 13 L51 14 L50 18 L49 14 L45 13 L49 12 Z" fill="currentColor" opacity={0.8} />
    </svg>
  );
}

function CelebrationBalloonDuo({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 80 110" fill="none" stroke="currentColor" strokeWidth={1.3} className={className} style={style} aria-hidden="true">
      <g>
        <path d="M26 8 C12 8 8 24 8 36 C8 50 22 62 26 66 C30 62 44 50 44 36 C44 24 40 8 26 8 Z" opacity={0.85} />
        <polygon points="24,66 28,66 26,70" fill="currentColor" />
        <path d="M26 70 Q32 78 26 86 Q20 94 30 104" strokeLinecap="round" opacity={0.7} />
      </g>
      <g>
        <path d="M52 18 C38 18 34 32 34 44 C34 56 48 68 52 72 C56 68 70 56 70 44 C70 32 66 18 52 18 Z" />
        <polygon points="50,72 54,72 52,76" fill="currentColor" />
        <path d="M52 76 Q46 84 54 92 Q62 100 50 108" strokeLinecap="round" />
      </g>
      <path d="M68 12 L69 15 L72 16 L69 17 L68 20 L67 17 L64 16 L67 15 Z" fill="currentColor" opacity={0.7} />
    </svg>
  );
}

function ChampagneBottlePop({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 90 110" fill="none" stroke="currentColor" strokeWidth={1.3} className={className} style={style} aria-hidden="true">
      <g transform="rotate(22 45 65)">
        <path d="M36 40 C36 48 30 56 30 68 L30 102 C30 106 34 108 45 108 C56 108 60 106 60 102 L60 68 C60 56 54 48 54 40 L54 26 L36 26 Z" />
        <line x1={36} y1={34} x2={54} y2={34} strokeDasharray="2 2" />
        <rect x={34} y={64} width={22} height={24} rx={2} strokeDasharray="3 2" />
        <circle cx={45} cy={76} r={4} strokeWidth={1} />
        <circle cx={45} cy={76} r={1.5} fill="currentColor" />
        <rect x={41} y={8} width={8} height={10} rx={2} strokeWidth={1.3} />
        <line x1={45} y1={20} x2={45} y2={25} strokeDasharray="2 2" opacity={0.6} />
      </g>
      <circle cx={24} cy={22} r={2} fill="currentColor" opacity={0.7} />
      <circle cx={18} cy={32} r={1.5} fill="currentColor" opacity={0.6} />
      <circle cx={32} cy={14} r={1.8} fill="currentColor" opacity={0.8} />
      <path d="M12 20 L13 23 L16 24 L13 25 L12 28 L11 25 L8 24 L11 23 Z" fill="currentColor" opacity={0.75} />
    </svg>
  );
}

function ChampagneCoupeDoodle({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 80 120" fill="none" stroke="currentColor" strokeWidth={1.4} className={className} style={style} aria-hidden="true">
      <path d="M14 36 C14 58, 26 68, 40 68 C54 68, 66 58, 66 36 Z" />
      <line x1={12} y1={36} x2={68} y2={36} strokeLinecap="round" />
      <line x1={40} y1={68} x2={40} y2={104} strokeWidth={1.8} />
      <line x1={20} y1={108} x2={60} y2={108} strokeWidth={1.4} strokeLinecap="round" />
      <circle cx={40} cy={26} r={2.2} fill="currentColor" opacity={0.8} />
      <circle cx={32} cy={20} r={1.6} fill="currentColor" opacity={0.65} />
      <circle cx={48} cy={16} r={2} fill="currentColor" opacity={0.75} />
      <path d="M24 12 L25 15 L28 16 L25 17 L24 20 L23 17 L20 16 L23 15 Z" fill="currentColor" opacity={0.6} />
    </svg>
  );
}

function PartyPopperCannon({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 90 90" fill="none" stroke="currentColor" strokeWidth={1.3} className={className} style={style} aria-hidden="true">
      <polygon points="18,74 24,48 50,74" strokeLinejoin="round" />
      <ellipse cx={37} cy={61} rx={18} ry={6} transform="rotate(-45 37 61)" />
      <path d="M42 46 Q54 36 66 40 Q76 44 82 32" strokeLinecap="round" />
      <path d="M48 52 Q62 58 72 50 Q80 44 86 52" strokeLinecap="round" />
      <path d="M60 28 L61 31 L64 32 L61 33 L60 36 L59 33 L56 32 L59 31 Z" fill="currentColor" />
      <circle cx={54} cy={46} r={1.8} fill="currentColor" />
      <circle cx={70} cy={36} r={1.6} fill="currentColor" />
    </svg>
  );
}

function PartyHornNoiseMaker({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 100 80" fill="none" stroke="currentColor" strokeWidth={1.3} className={className} style={style} aria-hidden="true">
      <polygon points="12,46 12,54 72,66 72,34" strokeLinejoin="round" />
      <rect x={6} y={47} width={6} height={6} rx={1} fill="currentColor" />
      <line x1={28} y1={43} x2={28} y2={57} opacity={0.6} />
      <line x1={44} y1={40} x2={44} y2={60} opacity={0.6} />
      <ellipse cx={72} cy={50} rx={3} ry={16} fill="none" />
      <path d="M75 42 Q86 36 94 40" strokeLinecap="round" />
      <path d="M75 50 Q88 52 96 46" strokeLinecap="round" />
      <path d="M86 30 L87 33 L90 34 L87 35 L86 38 L85 35 L82 34 L85 33 Z" fill="currentColor" />
    </svg>
  );
}

function SealedLoveLetter({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 90 70" fill="none" stroke="currentColor" strokeWidth={1.3} className={className} style={style} aria-hidden="true">
      <rect x={12} y={16} width={66} height={44} rx={3} />
      <path d="M12 16 L45 42 L78 16" />
      <line x1={12} y1={60} x2={36} y2={36} opacity={0.6} />
      <line x1={78} y1={60} x2={54} y2={36} opacity={0.6} />
      <circle cx={45} cy={42} r={6.5} fill="#ffffff" stroke="currentColor" strokeWidth={1.3} />
      <path
        d="M45 46 C41 42 39 40 39 37 C39 34.5 41 33 43 33 C44.2 33 44.8 33.8 45 34.2 C45.2 33.8 45.8 33 47 33 C49 33 51 34.5 51 37 C51 40 49 42 45 46 Z"
        fill="currentColor"
      />
      <path d="M8 12 L9 15 L12 16 L9 17 L8 20 L7 17 L4 16 L7 15 Z" fill="currentColor" opacity={0.7} />
      <path d="M82 14 L83 17 L86 18 L83 19 L82 22 L81 19 L78 18 L81 17 Z" fill="currentColor" opacity={0.7} />
    </svg>
  );
}

function MusicalMelody({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth={1.3} className={className} style={style} aria-hidden="true">
      <path
        d="M32 64 C28 64 24 61 24 57 C24 52 28 48 33 48 C36 48 38 49 39 51 L41 24 C41 18 36 12 32 16 C28 20 28 32 38 40 C46 46 48 54 44 62 C40 70 30 72 26 68 L26 72"
        strokeLinecap="round"
      />
      <g transform="translate(46, 18)">
        <ellipse cx={8} cy={24} rx={3.5} ry={2.5} fill="currentColor" transform="rotate(-20 8 24)" />
        <ellipse cx={22} cy={20} rx={3.5} ry={2.5} fill="currentColor" transform="rotate(-20 22 20)" />
        <line x1={11} y1={23} x2={11} y2={8} strokeWidth={1.4} />
        <line x1={25} y1={19} x2={25} y2={4} strokeWidth={1.4} />
        <line x1={11} y1={8} x2={25} y2={4} strokeWidth={2.4} />
      </g>
    </svg>
  );
}

function CrescentMoonDoodle({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 90 90" fill="none" stroke="currentColor" strokeWidth={1.3} className={className} style={style} aria-hidden="true">
      <path d="M48 10 C68 18 78 40 70 62 C62 80 40 84 22 78 C42 76 54 58 52 40 C50 26 40 16 48 10 Z" />
      <path d="M46 18 C60 26 66 42 60 58 C55 70 40 73 30 71" strokeDasharray="3 2" opacity={0.7} />
      <circle cx={54} cy={22} r={1.4} fill="currentColor" />
      <circle cx={62} cy={34} r={1.4} fill="currentColor" />
      <circle cx={64} cy={48} r={1.4} fill="currentColor" />
      <path d="M26 34 L27 37 L30 38 L27 39 L26 42 L25 39 L22 38 L25 37 Z" fill="currentColor" opacity={0.7} />
    </svg>
  );
}

function BespokeBirthdayDateSeal({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="-50 -50 100 100" fill="none" stroke="currentColor" strokeWidth={1.3} className={className} style={style} aria-hidden="true">
      <circle r={46} />
      <circle r={41} strokeDasharray="3 2" />
      <circle r={32} />
      <circle cx={0} cy={-36.5} r={1.4} fill="currentColor" />
      <circle cx={36.5} cy={0} r={1.4} fill="currentColor" />
      <circle cx={0} cy={36.5} r={1.4} fill="currentColor" />
      <circle cx={-36.5} cy={0} r={1.4} fill="currentColor" />
      <text
        x={0}
        y={-3}
        textAnchor="middle"
        dominantBaseline="central"
        fill="currentColor"
        fontSize={10}
        fontFamily="sans-serif"
        fontWeight={700}
        letterSpacing="0.12em"
      >
        OCT 23
      </text>
      <text
        x={0}
        y={11}
        textAnchor="middle"
        dominantBaseline="central"
        fill="currentColor"
        fontSize={7}
        fontFamily="sans-serif"
        fontWeight={500}
        letterSpacing="0.2em"
        opacity={0.8}
      >
        2026
      </text>
    </svg>
  );
}

function VintageVipTicket({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 100 56" fill="none" stroke="currentColor" strokeWidth={1.3} className={className} style={style} aria-hidden="true">
      <path d="M6 10 C6 7 8 5 11 5 L89 5 C92 5 94 7 94 10 L94 22 C90 22 87 25 87 28 C87 31 90 34 94 34 L94 46 C94 49 92 51 89 51 L11 51 C8 51 6 49 6 46 L6 34 C10 34 13 31 13 28 C13 25 10 22 6 22 Z" />
      <rect x={15} y={9} width={70} height={38} rx={2} strokeDasharray="3 2" opacity={0.7} />
      <text
        x={50}
        y={22}
        textAnchor="middle"
        dominantBaseline="central"
        fill="currentColor"
        fontSize={8.5}
        fontFamily="sans-serif"
        fontWeight={700}
        letterSpacing="0.16em"
      >
        VIP PASS
      </text>
      <text
        x={50}
        y={35}
        textAnchor="middle"
        dominantBaseline="central"
        fill="currentColor"
        fontSize={5.5}
        fontFamily="sans-serif"
        fontWeight={500}
        letterSpacing="0.2em"
        opacity={0.8}
      >
        ADMIT ONE • 2026
      </text>
    </svg>
  );
}

function BotanicalSprig({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 60 120" fill="none" stroke="currentColor" strokeWidth={1.3} className={className} style={style} aria-hidden="true">
      <path d="M30 110 Q26 70 34 30 Q36 18 32 10" strokeLinecap="round" />
      <path d="M28 95 C18 92, 16 82, 28 85" fill="none" />
      <path d="M30 92 C38 88, 42 78, 30 82" fill="none" />
      <path d="M27 75 C16 70, 14 60, 27 64" fill="none" />
      <path d="M31 71 C42 66, 44 56, 32 61" fill="none" />
      <path d="M29 52 C18 46, 18 36, 30 41" fill="none" />
      <path d="M33 48 C44 42, 44 32, 34 38" fill="none" />
      <circle cx={20} cy={82} r={1.5} fill="currentColor" />
      <circle cx={42} cy={61} r={1.5} fill="currentColor" />
    </svg>
  );
}

function FlowerBlossom({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  const petals = Array.from({ length: 5 }, (_, i) => i * 72);
  return (
    <svg viewBox="-40 -40 80 80" fill="none" stroke="currentColor" strokeWidth={1.3} className={className} style={style} aria-hidden="true">
      {petals.map((a) => (
        <path key={a} d="M0 0 C-10 -16, -6 -28, 0 -32 C6 -28, 10 -16, 0 0" transform={`rotate(${a})`} />
      ))}
      <circle r={7} />
      <circle r={2.5} fill="currentColor" />
    </svg>
  );
}

function DaisyRosette({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  const petals = Array.from({ length: 8 }, (_, i) => i * 45);
  return (
    <svg viewBox="-50 -50 100 100" fill="none" stroke="currentColor" strokeWidth={1.3} className={className} style={style} aria-hidden="true">
      <circle r={44} strokeDasharray="3 2" />
      <circle r={36} />
      {petals.map((a) => (
        <ellipse key={a} cx={0} cy={-22} rx={7} ry={14} transform={`rotate(${a})`} />
      ))}
      <circle r={12} />
      <circle r={4} fill="currentColor" />
    </svg>
  );
}

function PartyPennants({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 160 50" fill="none" stroke="currentColor" strokeWidth={1.3} className={className} style={style} aria-hidden="true">
      <path d="M4 8 Q80 28 156 8" strokeLinecap="round" />
      <polygon points="18,10 32,13 25,36" strokeLinejoin="round" />
      <polygon points="44,15 58,18 51,41" strokeLinejoin="round" />
      <polygon points="72,19 88,19 80,43" strokeLinejoin="round" />
      <polygon points="102,18 116,15 109,41" strokeLinejoin="round" />
      <polygon points="128,13 142,10 135,36" strokeLinejoin="round" />
    </svg>
  );
}

function ShootingStarConstellation({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 100 60" fill="none" stroke="currentColor" strokeWidth={1.3} className={className} style={style} aria-hidden="true">
      <path d="M12 48 Q44 42 72 26" strokeLinecap="round" opacity={0.5} />
      <path d="M24 54 Q52 46 76 30" strokeDasharray="2 3" opacity={0.4} />
      <path d="M78 20 L80 26 L86 28 L80 30 L78 36 L76 30 L70 28 L76 26 Z" fill="currentColor" />
      <circle cx={78} cy={28} r={2} fill="white" />
      <circle cx={56} cy={34} r={1.5} fill="currentColor" opacity={0.7} />
      <circle cx={38} cy={42} r={1.3} fill="currentColor" opacity={0.6} />
    </svg>
  );
}

function SparkleStar({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="-20 -20 40 40" fill="currentColor" className={className} style={style} aria-hidden="true">
      <path d="M0 -18 C0 -4 4 0 18 0 C4 0 0 4 0 18 C0 4 -4 0 -18 0 C-4 0 0 -4 0 -18 Z" />
      <circle cx={0} cy={0} r={2} fill="white" />
    </svg>
  );
}

export default function DoodleBackgroundDemo() {
  return (
    <div className="stage">
      <style>{`
        .stage {
          --bg-parchment: #FAF7F2;
          --doodle-ink: #9f773a;

          position: relative;
          min-height: 100dvh;
          width: 100%;
          overflow: hidden;
          background: var(--bg-parchment);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Soft warm ambient parchment ground */
        .stage__ground {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(85% 75% at 50% 30%, #FFFDF9 0%, #FAF6EE 55%, #F0E8DA 100%);
        }

        /* Gentle edge vignette */
        .stage__vignette {
          position: absolute;
          inset: 0;
          background: radial-gradient(135% 115% at 50% 50%, transparent 55%, rgba(140, 110, 75, 0.08) 100%);
          pointer-events: none;
        }

        /* Bespoke doodle placement layer */
        .stage__doodles {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 1;
        }

        .stage__book-wrapper {
          position: relative;
          z-index: 5;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          max-width: 100vw;
        }

        .stage__book-shadow {
          position: absolute;
          bottom: 2%;
          left: 50%;
          width: 70%;
          height: 38px;
          transform: translateX(-50%);
          background: radial-gradient(ellipse at center, rgba(90, 65, 40, 0.18) 0%, transparent 72%);
          filter: blur(12px);
          pointer-events: none;
        }

        @media (min-width: 1400px) {
          .stage__book-wrapper {
            transform: scale(1.05);
            transform-origin: center center;
          }
        }

        @media (max-width: 960px) {
          .stage__book-wrapper {
            transform: scale(min(0.95, calc((100vw - 36px) / 850)));
            transform-origin: center center;
          }
        }

        @media (max-width: 768px) {
          .stage__book-wrapper {
            transform: scale(min(0.92, calc((100vw - 28px) / 425)));
            transform-origin: center center;
          }
        }
      `}</style>

      {/* Warm ambient parchment ground */}
      <div className="stage__ground" />
      <div className="stage__vignette" />

      {/* ── BESPOKE NON-OVERLAPPING DOODLE WALLPAPER (Warm Antique Gold #9f773a) ── */}
      <div className="stage__doodles">

        {/* ================================================================= */}
        {/* 1. LEFT FLANK (Distributed in staggered non-overlapping columns)  */}
        {/* ================================================================= */}

        {/* Outer Left Column 1 (x: 2% to 6%) */}
        <div className="absolute top-[4%] left-[3%] opacity-45">
          <SweetBow className="w-[66px] sm:w-[80px] text-[#9f773a] -rotate-6" />
        </div>
        <div className="absolute top-[23%] left-[4%] opacity-45">
          <ScrapbookCamera className="w-[64px] sm:w-[74px] text-[#9f773a] rotate-6" />
        </div>
        <div className="absolute top-[42%] left-[3%] opacity-45">
          <HeartArrowDoodle className="w-[52px] sm:w-[62px] text-[#9f773a] -rotate-8" />
        </div>
        <div className="absolute top-[61%] left-[4%] opacity-45">
          <HeartSparkle className="w-[46px] sm:w-[54px] text-[#9f773a] rotate-8" />
        </div>
        <div className="absolute top-[78%] left-[3%] opacity-40">
          <ButterflyDoodle className="w-[58px] sm:w-[68px] text-[#9f773a] rotate-14" />
        </div>
        <div className="absolute bottom-[3%] left-[4%] opacity-45">
          <BirthdayCake className="w-[60px] sm:w-[72px] text-[#9f773a] -rotate-4" />
        </div>

        {/* Staggered Mid-Left Column 2 (x: 12% to 18%) */}
        <div className="hidden sm:block absolute top-[13%] left-[15%] opacity-40">
          <PartyPennants className="w-[100px] lg:w-[120px] text-[#9f773a] -rotate-3" />
        </div>
        <div className="hidden sm:block absolute top-[32%] left-[16%] opacity-45">
          <PostageStamp className="w-[50px] lg:w-[58px] text-[#9f773a] rotate-8" />
        </div>
        <div className="hidden sm:block absolute top-[51%] left-[15%] opacity-45">
          <ToastingFlutes className="w-[54px] lg:w-[62px] text-[#9f773a] -rotate-8" />
        </div>
        <div className="hidden sm:block absolute top-[70%] left-[16%] opacity-40">
          <FlowerBlossom className="w-[42px] lg:w-[48px] text-[#9f773a] rotate-15" />
        </div>
        <div className="hidden sm:block absolute bottom-[5%] left-[16%] opacity-45">
          <GiftBoxClassic className="w-[52px] lg:w-[60px] text-[#9f773a] rotate-6" />
        </div>

        {/* Inner Left Flank (Near top corners of book) */}
        <div className="hidden md:block absolute top-[4%] left-[22%] opacity-45">
          <BirthdayCrown className="w-[60px] lg:w-[68px] text-[#9f773a] rotate-4" />
        </div>


        {/* ================================================================= */}
        {/* 2. TOP BANNER (Above book, airy & balanced)                       */}
        {/* ================================================================= */}
        <div className="hidden lg:block absolute top-[3%] left-[35%] opacity-45">
          <PartyPopperCannon className="w-[58px] text-[#9f773a] -rotate-10" />
        </div>
        <div className="hidden md:block absolute top-[2.5%] left-1/2 -translate-x-1/2 opacity-45">
          <BespokeBirthdayDateSeal className="w-[64px] text-[#9f773a]" />
        </div>
        <div className="hidden lg:block absolute top-[3%] right-[35%] opacity-45">
          <CelebrationBalloonDuo className="w-[52px] text-[#9f773a] rotate-8" />
        </div>


        {/* ================================================================= */}
        {/* 3. RIGHT FLANK (Distributed in staggered non-overlapping columns) */}
        {/* ================================================================= */}

        {/* Inner Right Flank (Near top corner of book) */}
        <div className="hidden md:block absolute top-[4%] right-[22%] opacity-45">
          <ChampagneBottlePop className="w-[52px] lg:w-[60px] text-[#9f773a] -rotate-6" />
        </div>

        {/* Staggered Mid-Right Column 2 (right: 12% to 18%) */}
        <div className="hidden sm:block absolute top-[13%] right-[15%] opacity-40">
          <ShootingStarConstellation className="w-[80px] lg:w-[92px] text-[#9f773a] rotate-6" />
        </div>
        <div className="hidden sm:block absolute top-[32%] right-[16%] opacity-40">
          <MusicalMelody className="w-[52px] lg:w-[60px] text-[#9f773a] -rotate-6" />
        </div>
        <div className="hidden sm:block absolute top-[51%] right-[15%] opacity-40">
          <CrescentMoonDoodle className="w-[58px] lg:w-[66px] text-[#9f773a] -rotate-10" />
        </div>
        <div className="hidden sm:block absolute top-[70%] right-[16%] opacity-40">
          <BotanicalSprig className="w-[34px] h-[78px] text-[#9f773a] rotate-14" />
        </div>
        <div className="hidden sm:block absolute bottom-[5%] right-[16%] opacity-45">
          <VintageVipTicket className="w-[66px] lg:w-[74px] text-[#9f773a] -rotate-4" />
        </div>

        {/* Outer Right Column 1 (right: 2% to 6%) */}
        <div className="absolute top-[4%] right-[3%] opacity-40">
          <ButterflyDoodle className="w-[60px] sm:w-[70px] text-[#9f773a] -rotate-10" />
        </div>
        <div className="absolute top-[23%] right-[4%] opacity-45">
          <SealedLoveLetter className="w-[62px] sm:w-[72px] text-[#9f773a] rotate-8" />
        </div>
        <div className="absolute top-[42%] right-[3%] opacity-45">
          <CelebrationCupcake className="w-[50px] sm:w-[58px] text-[#9f773a] rotate-6" />
        </div>
        <div className="absolute top-[61%] right-[4%] opacity-45">
          <GiftBoxClassic className="w-[54px] sm:w-[64px] text-[#9f773a] -rotate-8" />
        </div>
        <div className="absolute top-[78%] right-[3%] opacity-45">
          <HeartSparkle className="w-[44px] sm:w-[52px] text-[#9f773a] -rotate-8" />
        </div>
        <div className="absolute bottom-[3%] right-[4%] opacity-40">
          <DaisyRosette className="w-[60px] sm:w-[70px] text-[#9f773a] rotate-15" />
        </div>


        {/* ================================================================= */}
        {/* 4. BOTTOM ROW (Under book & controls, airy & balanced)            */}
        {/* ================================================================= */}
        <div className="hidden md:block absolute bottom-[3.5%] left-[33%] opacity-40">
          <PartyHornNoiseMaker className="w-[58px] text-[#9f773a] rotate-8" />
        </div>
        <div className="hidden sm:block absolute bottom-[2%] left-1/2 -translate-x-1/2 opacity-45">
          <SweetBow className="w-[50px] text-[#9f773a]" />
        </div>
        <div className="hidden md:block absolute bottom-[3.5%] right-[33%] opacity-45">
          <ChampagneCoupeDoodle className="w-[46px] text-[#9f773a] -rotate-8" />
        </div>


        {/* ================================================================= */}
        {/* 5. AIRY STARDUST SPARKLES (Delicate champagne shimmer)            */}
        {/* ================================================================= */}
        <SparkleStar className="absolute top-[9%] left-[9%] w-3.5 h-3.5 text-[#9f773a]/35" />
        <SparkleStar className="absolute top-[9%] right-[9%] w-3.5 h-3.5 text-[#9f773a]/35" />
        <SparkleStar className="hidden md:block absolute top-[6%] left-[29%] w-3 h-3 text-[#9f773a]/30" />
        <SparkleStar className="hidden md:block absolute top-[6%] right-[29%] w-3 h-3 text-[#9f773a]/30" />
        <SparkleStar className="absolute top-[37%] left-[9%] w-3 h-3 text-[#9f773a]/30" />
        <SparkleStar className="absolute top-[37%] right-[9%] w-3 h-3 text-[#9f773a]/30" />
        <SparkleStar className="absolute top-[56%] left-[9%] w-3.5 h-3.5 text-[#9f773a]/35" />
        <SparkleStar className="absolute top-[56%] right-[9%] w-3.5 h-3.5 text-[#9f773a]/35" />
        <SparkleStar className="absolute bottom-[16%] left-[10%] w-3 h-3 text-[#9f773a]/30" />
        <SparkleStar className="absolute bottom-[16%] right-[10%] w-3 h-3 text-[#9f773a]/30" />
      </div>

      {/* ── THE HERO CENTERPIECE: 3D SPIRAL SKETCHBOOK ── */}
      <div className="stage__book-wrapper">
        <div className="stage__book-shadow" />
        <Book />
      </div>
    </div>
  );
}