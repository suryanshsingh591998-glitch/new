"use client";

import React from "react";
import LanyardBadge, { Ornament, BirthdayCake } from "@/components/ui/lanyard-badge";

// ─────────────────────────────────────────────────────────────────────────────
// BESPOKE CELEBRATION & GEOMETRIC DOODLES (Harmonious Antique Gold #9f773a Theme)
// ─────────────────────────────────────────────────────────────────────────────

function LotusMandala({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  const petals = Array.from({ length: 12 }, (_, i) => i * 30);
  const beads = Array.from({ length: 24 }, (_, i) => i * 15);
  return (
    <svg viewBox="-100 -100 200 200" fill="none" stroke="currentColor" strokeWidth={1.3} className={className} style={style} aria-hidden="true">
      <circle r={96} />
      <circle r={90} strokeDasharray="3 3" />
      <circle r={76} />
      <circle r={52} />
      <circle r={24} />
      <circle r={7} fill="currentColor" />
      {petals.map((a) => (
        <path key={a} d="M0 -24 C 14 -40, 16 -64, 0 -76 C -16 -64, -14 -40, 0 -24" transform={`rotate(${a})`} />
      ))}
      {petals.map((a) => (
        <path key={`in-${a}`} d="M0 -8 C 8 -16, 8 -20, 0 -24 C -8 -20, -8 -16, 0 -8" transform={`rotate(${a + 15})`} opacity={0.7} />
      ))}
      {beads.map((a) => (
        <circle key={`b-${a}`} cx={0} cy={-83} r={1.6} fill="currentColor" transform={`rotate(${a})`} />
      ))}
      {petals.map((a) => (
        <line key={`r-${a}`} x1={0} y1={-90} x2={0} y2={-96} strokeWidth={1.8} transform={`rotate(${a})`} />
      ))}
    </svg>
  );
}

function SunburstRosette({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  const rays = Array.from({ length: 16 }, (_, i) => i * 22.5);
  return (
    <svg viewBox="-100 -100 200 200" fill="none" stroke="currentColor" strokeWidth={1.3} className={className} style={style} aria-hidden="true">
      <circle r={94} />
      <circle r={82} />
      <circle r={64} />
      <circle r={42} />
      <circle r={18} />
      <polygon points="0,-36 9,-12 36,0 9,12 0,36 -9,12 -36,0 -9,-12" strokeWidth={1.4} />
      <polygon points="0,-24 6,-8 24,0 6,8 0,24 -6,8 -24,0 -6,-8" strokeWidth={1} transform="rotate(45)" opacity={0.75} />
      {rays.map((a) => (
        <circle key={`arch-${a}`} cx={0} cy={-53} r={18} transform={`rotate(${a})`} opacity={0.5} />
      ))}
      {rays.map((a) => (
        <ellipse key={`drop-${a}`} cx={0} cy={-73} rx={4.5} ry={8} transform={`rotate(${a})`} />
      ))}
      {rays.map((a) => (
        <circle key={`dot-${a}`} cx={0} cy={-88} r={1.8} fill="currentColor" transform={`rotate(${a + 11.25})`} />
      ))}
      <circle r={5} fill="currentColor" />
    </svg>
  );
}

function FloralCrest({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  const petals = Array.from({ length: 8 }, (_, i) => i * 45);
  return (
    <svg viewBox="-80 -80 160 160" fill="none" stroke="currentColor" strokeWidth={1.3} className={className} style={style} aria-hidden="true">
      <circle r={76} strokeDasharray="4 3" />
      <circle r={68} />
      <circle r={48} />
      <circle r={20} />
      {petals.map((a) => (
        <ellipse key={a} cx={0} cy={-34} rx={12} ry={20} transform={`rotate(${a})`} />
      ))}
      {petals.map((a) => (
        <ellipse key={`s-${a}`} cx={0} cy={-58} rx={6} ry={9} transform={`rotate(${a + 22.5})`} />
      ))}
      {petals.map((a) => (
        <circle key={`c-${a}`} cx={0} cy={-72} r={1.5} fill="currentColor" transform={`rotate(${a})`} />
      ))}
      <circle r={6} fill="currentColor" />
    </svg>
  );
}

function StarMandala({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  const points = Array.from({ length: 6 }, (_, i) => i * 60);
  return (
    <svg viewBox="-80 -80 160 160" fill="none" stroke="currentColor" strokeWidth={1.3} className={className} style={style} aria-hidden="true">
      <circle r={74} />
      <circle r={64} strokeDasharray="3 3" />
      <circle r={46} />
      <circle r={22} />
      <polygon points="0,-46 39.8,23 -39.8,23" strokeWidth={1.2} />
      <polygon points="0,46 39.8,-23 -39.8,-23" strokeWidth={1.2} />
      {points.map((a) => (
        <circle key={a} cx={0} cy={-55} r={4.5} transform={`rotate(${a})`} />
      ))}
      {points.map((a) => (
        <circle key={`dot-${a}`} cx={0} cy={-69} r={1.6} fill="currentColor" transform={`rotate(${a + 30})`} />
      ))}
      <circle r={5} fill="currentColor" />
    </svg>
  );
}

function CrescentMoonMandala({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 90 90" fill="none" stroke="currentColor" strokeWidth={1.3} className={className} style={style} aria-hidden="true">
      <path d="M48 10 C68 18 78 40 70 62 C62 80 40 84 22 78 C42 76 54 58 52 40 C50 26 40 16 48 10 Z" />
      <path d="M46 18 C60 26 66 42 60 58 C55 70 40 73 30 71" strokeDasharray="3 2" opacity={0.7} />
      <circle cx={54} cy={22} r={1.4} fill="currentColor" />
      <circle cx={62} cy={34} r={1.4} fill="currentColor" />
      <circle cx={64} cy={48} r={1.4} fill="currentColor" />
      <circle cx={58} cy={62} r={1.4} fill="currentColor" />
      <circle cx={46} cy={72} r={1.4} fill="currentColor" />
      <line x1={48} y1={10} x2={40} y2={24} strokeDasharray="1.5 1.5" opacity={0.6} />
      <path d="M40 24 L41 27 L44 28 L41 29 L40 32 L39 29 L36 28 L39 27 Z" fill="currentColor" />
      <path d="M26 34 L27 37 L30 38 L27 39 L26 42 L25 39 L22 38 L25 37 Z" fill="currentColor" opacity={0.6} />
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
      {petals.map((a) => (
        <circle key={`d-${a}`} cx={0} cy={-40} r={1.4} fill="currentColor" transform={`rotate(${a + 22.5})`} />
      ))}
    </svg>
  );
}

function GiftBoxClassic({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth={1.4} className={className} style={style} aria-hidden="true">
      <rect x={22} y={42} width={56} height={46} rx={3} />
      <rect x={18} y={32} width={64} height={12} rx={2} />
      <line x1={50} y1={32} x2={50} y2={88} strokeWidth={2} />
      <line x1={22} y1={64} x2={78} y2={64} strokeWidth={2} />
      <path d="M50 32 C38 18, 22 20, 26 28 C29 34, 44 32, 50 32 Z" />
      <path d="M50 32 C62 18, 78 20, 74 28 C71 34, 56 32, 50 32 Z" />
      <circle cx={50} cy={32} r={3.5} fill="currentColor" />
      <path d="M47 34 Q38 42 34 50" strokeLinecap="round" />
      <path d="M53 34 Q62 42 66 50" strokeLinecap="round" />
      <path d="M12 24 L13 27 L16 28 L13 29 L12 32 L11 29 L8 28 L11 27 Z" fill="currentColor" opacity={0.65} />
      <path d="M86 38 L87 41 L90 42 L87 43 L86 46 L85 43 L82 42 L85 41 Z" fill="currentColor" opacity={0.65} />
    </svg>
  );
}

function GiftBoxTall({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 70 100" fill="none" stroke="currentColor" strokeWidth={1.3} className={className} style={style} aria-hidden="true">
      <rect x={18} y={36} width={34} height={56} rx={2.5} />
      <rect x={14} y={28} width={42} height={10} rx={2} />
      <line x1={35} y1={28} x2={35} y2={92} strokeWidth={1.8} />
      <line x1={18} y1={60} x2={52} y2={60} strokeWidth={1.3} strokeDasharray="2 2" />
      <path d="M35 28 C26 14 12 16 16 24 C19 30 30 28 35 28 Z" />
      <path d="M35 28 C44 14 58 16 54 24 C51 30 40 28 35 28 Z" />
      <circle cx={35} cy={28} r={3} fill="currentColor" />
      <path d="M33 30 Q24 40 22 52" strokeLinecap="round" />
      <path d="M37 30 Q46 40 48 52" strokeLinecap="round" />
      <path d="M10 20 L11 23 L14 24 L11 25 L10 28 L9 25 L6 24 L9 23 Z" fill="currentColor" opacity={0.6} />
      <path d="M60 40 L61 43 L64 44 L61 45 L60 48 L59 45 L56 44 L59 43 Z" fill="currentColor" opacity={0.6} />
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
        {/* Popped flying cork */}
        <rect x={41} y={8} width={8} height={10} rx={2} strokeWidth={1.3} />
        <line x1={45} y1={20} x2={45} y2={25} strokeDasharray="2 2" opacity={0.6} />
      </g>
      <circle cx={24} cy={22} r={2} fill="currentColor" opacity={0.7} />
      <circle cx={18} cy={32} r={1.5} fill="currentColor" opacity={0.6} />
      <circle cx={32} cy={14} r={1.8} fill="currentColor" opacity={0.8} />
      <circle cx={20} cy={12} r={1.2} fill="currentColor" opacity={0.5} />
      <path d="M12 20 L13 23 L16 24 L13 25 L12 28 L11 25 L8 24 L11 23 Z" fill="currentColor" opacity={0.75} />
      <path d="M38 6 L39 9 L42 10 L39 11 L38 14 L37 11 L34 10 L37 9 Z" fill="currentColor" opacity={0.75} />
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
      <circle cx={50} cy={4} r={1.5} fill="currentColor" opacity={0.8} />
    </svg>
  );
}

function ChampagneCoupeDoodle({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 80 120" fill="none" stroke="currentColor" strokeWidth={1.4} className={className} style={style} aria-hidden="true">
      <path d="M14 36 C14 58, 26 68, 40 68 C54 68, 66 58, 66 36 Z" />
      <line x1={12} y1={36} x2={68} y2={36} strokeLinecap="round" />
      <line x1={18} y1={42} x2={62} y2={42} strokeDasharray="3 2" opacity={0.7} />
      <line x1={40} y1={68} x2={40} y2={104} strokeWidth={1.8} />
      <path d="M22 108 C30 105, 50 105, 58 108" strokeWidth={1.8} strokeLinecap="round" />
      <line x1={20} y1={108} x2={60} y2={108} strokeWidth={1.4} />
      <circle cx={40} cy={26} r={2.2} fill="currentColor" opacity={0.8} />
      <circle cx={32} cy={20} r={1.6} fill="currentColor" opacity={0.65} />
      <circle cx={48} cy={16} r={2} fill="currentColor" opacity={0.75} />
      <circle cx={38} cy={10} r={1.3} fill="currentColor" opacity={0.6} />
      <circle cx={45} cy={6} r={1.8} fill="currentColor" opacity={0.7} />
      <path d="M24 12 L25 15 L28 16 L25 17 L24 20 L23 17 L20 16 L23 15 Z" fill="currentColor" opacity={0.6} />
      <path d="M56 8 L57 11 L60 12 L57 13 L56 16 L55 13 L52 12 L55 11 Z" fill="currentColor" opacity={0.6} />
    </svg>
  );
}

function CelebrationBalloonDuo({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 80 110" fill="none" stroke="currentColor" strokeWidth={1.3} className={className} style={style} aria-hidden="true">
      <g>
        <path d="M26 8 C12 8 8 24 8 36 C8 50 22 62 26 66 C30 62 44 50 44 36 C44 24 40 8 26 8 Z" opacity={0.85} />
        <ellipse cx={26} cy={34} rx={10} ry={16} strokeDasharray="3 2" opacity={0.5} />
        <polygon points="24,66 28,66 26,70" fill="currentColor" />
        <path d="M26 70 Q32 78 26 86 Q20 94 30 104" strokeLinecap="round" opacity={0.7} />
      </g>
      <g>
        <path d="M52 18 C38 18 34 32 34 44 C34 56 48 68 52 72 C56 68 70 56 70 44 C70 32 66 18 52 18 Z" />
        <circle cx={46} cy={32} r={3} fill="currentColor" opacity={0.3} />
        <polygon points="50,72 54,72 52,76" fill="currentColor" />
        <path d="M52 76 Q46 84 54 92 Q62 100 50 108" strokeLinecap="round" />
      </g>
      <path d="M68 12 L69 15 L72 16 L69 17 L68 20 L67 17 L64 16 L67 15 Z" fill="currentColor" opacity={0.7} />
      <circle cx={14} cy={18} r={1.3} fill="currentColor" opacity={0.6} />
    </svg>
  );
}

function PartyPopperCannon({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 90 90" fill="none" stroke="currentColor" strokeWidth={1.3} className={className} style={style} aria-hidden="true">
      <polygon points="18,74 24,48 50,74" strokeLinejoin="round" />
      <line x1={20} y1={66} x2={40} y2={66} strokeDasharray="2 2" opacity={0.7} />
      <line x1={22} y1={56} x2={32} y2={66} opacity={0.6} />
      <ellipse cx={37} cy={61} rx={18} ry={6} transform="rotate(-45 37 61)" />
      <path d="M42 46 Q54 36 66 40 Q76 44 82 32" strokeLinecap="round" />
      <path d="M48 52 Q62 58 72 50 Q80 44 86 52" strokeLinecap="round" />
      <path d="M38 38 Q46 22 58 20 Q70 18 74 8" strokeLinecap="round" />
      <path d="M60 28 L61 31 L64 32 L61 33 L60 36 L59 33 L56 32 L59 31 Z" fill="currentColor" />
      <path d="M78 22 L79 24 L81 25 L79 26 L78 28 L77 26 L75 25 L77 24 Z" fill="currentColor" opacity={0.8} />
      <circle cx={54} cy={46} r={1.8} fill="currentColor" />
      <circle cx={70} cy={36} r={1.6} fill="currentColor" />
      <circle cx={80} cy={44} r={1.5} fill="currentColor" />
      <circle cx={66} cy={16} r={1.4} fill="currentColor" />
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
      <line x1={58} y1={37} x2={58} y2={63} opacity={0.6} />
      <ellipse cx={72} cy={50} rx={3} ry={16} fill="none" />
      <path d="M75 42 Q86 36 94 40" strokeLinecap="round" />
      <path d="M75 50 Q88 52 96 46" strokeLinecap="round" />
      <path d="M75 58 Q85 64 92 60" strokeLinecap="round" />
      <path d="M86 30 L87 33 L90 34 L87 35 L86 38 L85 35 L82 34 L85 33 Z" fill="currentColor" />
      <circle cx={88} cy={54} r={1.5} fill="currentColor" />
      <circle cx={82} cy={66} r={1.3} fill="currentColor" />
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
      <polygon points="50,38 54,46 50,54 46,46" strokeWidth={1.1} />
      <circle cx={50} cy={46} r={1.5} fill="currentColor" />
      <circle cx={30} cy={66} r={1.4} fill="currentColor" />
      <circle cx={50} cy={68} r={1.6} fill="currentColor" />
      <circle cx={70} cy={66} r={1.4} fill="currentColor" />
      <path d="M50 8 L51 12 L55 13 L51 14 L50 18 L49 14 L45 13 L49 12 Z" fill="currentColor" opacity={0.8} />
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
      <circle cx={14} cy={38} r={1.4} fill="currentColor" opacity={0.5} />
      <circle cx={66} cy={34} r={1.4} fill="currentColor" opacity={0.5} />
    </svg>
  );
}

function BirthdayCandleSingle({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 60 100" fill="none" stroke="currentColor" strokeWidth={1.3} className={className} style={style} aria-hidden="true">
      <path d="M30 10 C27 16 27 22 30 26 C33 22 33 16 30 10 Z" fill="currentColor" opacity={0.8} />
      <circle cx={30} cy={20} r={1.6} fill="white" />
      <line x1={30} y1={26} x2={30} y2={32} strokeWidth={1.5} />
      <rect x={22} y={32} width={16} height={52} rx={2} />
      <path d="M22 36 Q25 44 26 42 Q28 36 30 36 Q32 46 34 42 Q36 36 38 36" />
      <line x1={22} y1={52} x2={38} y2={56} strokeDasharray="2 2" opacity={0.6} />
      <line x1={22} y1={66} x2={38} y2={70} strokeDasharray="2 2" opacity={0.6} />
      <ellipse cx={30} cy={86} rx={22} ry={6} />
      <path d="M16 86 C16 92 44 92 44 86" />
      <path d="M30 2 L31 5 L34 6 L31 7 L30 10 L29 7 L26 6 L29 5 Z" fill="currentColor" opacity={0.7} />
      <circle cx={14} cy={22} r={1.2} fill="currentColor" opacity={0.5} />
      <circle cx={46} cy={22} r={1.2} fill="currentColor" opacity={0.5} />
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
      <circle cx={45} cy={42} r={7} fill="#ffffff" stroke="currentColor" strokeWidth={1.3} />
      <path
        d="M45 46 C41 42 39 40 39 37 C39 34.5 41 33 43 33 C44.2 33 44.8 33.8 45 34.2 C45.2 33.8 45.8 33 47 33 C49 33 51 34.5 51 37 C51 40 49 42 45 46 Z"
        fill="currentColor"
      />
      <path d="M8 12 L9 15 L12 16 L9 17 L8 20 L7 17 L4 16 L7 15 Z" fill="currentColor" opacity={0.7} />
      <path d="M82 14 L83 17 L86 18 L83 19 L82 22 L81 19 L78 18 L81 17 Z" fill="currentColor" opacity={0.7} />
      <circle cx={45} cy={8} r={1.3} fill="currentColor" opacity={0.6} />
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
      <path d="M14 26 L15 28.5 L17.5 29.5 L15 30.5 L14 33 L13 30.5 L10.5 29.5 L13 28.5 Z" fill="currentColor" opacity={0.7} />
      <circle cx={62} cy={56} r={1.4} fill="currentColor" />
      <circle cx={20} cy={40} r={1.2} fill="currentColor" opacity={0.6} />
    </svg>
  );
}

function VintageVipTicket({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 100 56" fill="none" stroke="currentColor" strokeWidth={1.3} className={className} style={style} aria-hidden="true">
      <path d="M6 10 C6 7 8 5 11 5 L89 5 C92 5 94 7 94 10 L94 22 C90 22 87 25 87 28 C87 31 90 34 94 34 L94 46 C94 49 92 51 89 51 L11 51 C8 51 6 49 6 46 L6 34 C10 34 13 31 13 28 C13 25 10 22 6 22 Z" />
      <rect x={15} y={9} width={70} height={38} rx={2} strokeDasharray="3 2" opacity={0.7} />
      <path d="M22 28 L23 29.5 L25 30 L23 30.5 L22 32 L21 30.5 L19 30 L21 29.5 Z" fill="currentColor" />
      <path d="M78 28 L79 29.5 L81 30 L79 30.5 L78 32 L77 30.5 L75 30 L77 29.5 Z" fill="currentColor" />
      <text
        x={50}
        y={22}
        textAnchor="middle"
        dominantBaseline="central"
        fill="currentColor"
        fontSize={8.5}
        fontFamily='"Oswald", "Arial Narrow", sans-serif'
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
        fontFamily='"Oswald", "Arial Narrow", sans-serif'
        fontWeight={500}
        letterSpacing="0.22em"
        opacity={0.8}
      >
        ADMIT ONE • 2026
      </text>
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
        fontSize={10.5}
        fontFamily='"Oswald", "Arial Narrow", sans-serif'
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
        fontFamily='"Oswald", "Arial Narrow", sans-serif'
        fontWeight={500}
        letterSpacing="0.2em"
        opacity={0.8}
      >
        2026
      </text>
      <circle cx={-13} cy={4} r={1} fill="currentColor" />
      <circle cx={13} cy={4} r={1} fill="currentColor" />
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
      <circle cx={18} cy={10} r={1.5} fill="currentColor" />
      <circle cx={44} cy={15} r={1.5} fill="currentColor" />
      <circle cx={72} cy={19} r={1.5} fill="currentColor" />
      <circle cx={88} cy={19} r={1.5} fill="currentColor" />
      <circle cx={116} cy={15} r={1.5} fill="currentColor" />
      <circle cx={142} cy={10} r={1.5} fill="currentColor" />
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
      <path d="M32 10 C28 4, 36 4, 32 10 Z" fill="currentColor" opacity={0.7} />
      <circle cx={20} cy={82} r={1.5} fill="currentColor" />
      <circle cx={42} cy={61} r={1.5} fill="currentColor" />
      <circle cx={22} cy={41} r={1.5} fill="currentColor" />
    </svg>
  );
}

function BotanicalWreath({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 90 90" fill="none" stroke="currentColor" strokeWidth={1.3} className={className} style={style} aria-hidden="true">
      <path d="M45 80 C24 80 12 62 12 45 C12 28 24 10 45 10" strokeLinecap="round" />
      <path d="M45 80 C66 80 78 62 78 45 C78 28 66 10 45 10" strokeLinecap="round" />
      <ellipse cx={20} cy={66} rx={4.5} ry={8} transform="rotate(-30 20 66)" />
      <ellipse cx={12} cy={45} rx={4.5} ry={8} />
      <ellipse cx={20} cy={24} rx={4.5} ry={8} transform="rotate(30 20 24)" />
      <ellipse cx={70} cy={66} rx={4.5} ry={8} transform="rotate(30 70 66)" />
      <ellipse cx={78} cy={45} rx={4.5} ry={8} />
      <ellipse cx={70} cy={24} rx={4.5} ry={8} transform="rotate(-30 70 24)" />
      <circle cx={45} cy={80} r={2.5} fill="currentColor" />
      <path d="M45 80 Q38 88 34 86" strokeLinecap="round" />
      <path d="M45 80 Q52 88 56 86" strokeLinecap="round" />
      <path d="M45 4 L46 7 L49 8 L46 9 L45 12 L44 9 L41 8 L44 7 Z" fill="currentColor" />
      <circle cx={45} cy={45} r={3} fill="currentColor" opacity={0.3} />
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
      {petals.map((a) => (
        <circle key={`dot-${a}`} cx={0} cy={-13} r={1.2} fill="currentColor" transform={`rotate(${a + 36})`} />
      ))}
    </svg>
  );
}

function ShootingStarConstellation({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 100 60" fill="none" stroke="currentColor" strokeWidth={1.3} className={className} style={style} aria-hidden="true">
      <path d="M12 48 Q44 42 72 26" strokeLinecap="round" opacity={0.5} />
      <path d="M24 54 Q52 46 76 30" strokeDasharray="2 3" opacity={0.4} />
      <path d="M6 42 Q36 36 68 22" strokeDasharray="4 2" opacity={0.4} />
      <path d="M78 20 L80 26 L86 28 L80 30 L78 36 L76 30 L70 28 L76 26 Z" fill="currentColor" />
      <circle cx={78} cy={28} r={2} fill="white" />
      <circle cx={56} cy={34} r={1.5} fill="currentColor" opacity={0.7} />
      <circle cx={38} cy={42} r={1.3} fill="currentColor" opacity={0.6} />
      <circle cx={20} cy={48} r={1.1} fill="currentColor" opacity={0.5} />
    </svg>
  );
}

function TwirlingRibbon({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 60 140" fill="none" stroke="currentColor" strokeWidth={1.3} className={className} style={style} aria-hidden="true">
      <path
        d="M28 8 Q44 24 30 40 Q16 56 34 72 Q48 88 26 104 Q12 118 32 132"
        strokeLinecap="round"
      />
      <circle cx={42} cy={30} r={1.5} fill="currentColor" opacity={0.6} />
      <circle cx={18} cy={66} r={1.5} fill="currentColor" opacity={0.6} />
      <circle cx={40} cy={98} r={1.5} fill="currentColor" opacity={0.6} />
      <path d="M16 38 L17 41 L20 42 L17 43 L16 46 L15 43 L12 42 L15 41 Z" fill="currentColor" opacity={0.5} />
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
      <circle cx={30} cy={22} r={2.5} fill="currentColor" opacity={0.6} />
      <path d="M30 0 L31 3 L34 4 L31 5 L30 8 L29 5 L26 4 L29 3 Z" fill="currentColor" opacity={0.7} />
      <circle cx={8} cy={34} r={1.2} fill="currentColor" opacity={0.5} />
      <circle cx={52} cy={34} r={1.2} fill="currentColor" opacity={0.5} />
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

function SweetCandyBonbon({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 80 50" fill="none" stroke="currentColor" strokeWidth={1.3} strokeLinecap="round" strokeLinejoin="round" className={className} style={style} aria-hidden="true">
      <circle cx={40} cy={25} r={14} />
      <path d="M34 16 C38 22 42 28 46 34" opacity={0.6} />
      <path d="M30 22 C36 26 44 26 50 28" opacity={0.6} strokeDasharray="2 2" />
      <polygon points="26,25 10,12 12,38" fill="none" strokeLinejoin="round" />
      <line x1={26} y1={25} x2={16} y2={25} opacity={0.5} />
      <polygon points="54,25 70,12 68,38" fill="none" strokeLinejoin="round" />
      <line x1={54} y1={25} x2={64} y2={25} opacity={0.5} />
      <circle cx={40} cy={25} r={2} fill="currentColor" opacity={0.7} />
    </svg>
  );
}

function LollipopSwirl({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 70 100" fill="none" stroke="currentColor" strokeWidth={1.3} strokeLinecap="round" strokeLinejoin="round" className={className} style={style} aria-hidden="true">
      <circle cx={35} cy={35} r={22} />
      <circle cx={35} cy={35} r={16} strokeDasharray="3 2" opacity={0.7} />
      <circle cx={35} cy={35} r={10} />
      <circle cx={35} cy={35} r={4} fill="currentColor" opacity={0.4} />
      <line x1={35} y1={57} x2={35} y2={92} strokeWidth={2} />
      <path d="M30 64 C25 60 25 56 30 56 C35 56 35 64 40 64 C45 64 45 60 40 56" />
      <path d="M54 18 L55 21 L58 22 L55 23 L54 26 L53 23 L50 22 L53 21 Z" fill="currentColor" opacity={0.7} />
    </svg>
  );
}

function PartyHatConfetti({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 80 90" fill="none" stroke="currentColor" strokeWidth={1.3} strokeLinecap="round" strokeLinejoin="round" className={className} style={style} aria-hidden="true">
      <polygon points="40,18 18,72 62,72" strokeLinejoin="round" />
      <path d="M18 72 Q40 78 62 72" />
      <circle cx={40} cy={14} r={4} fill="currentColor" />
      <path d="M26 56 Q40 62 54 56" opacity={0.7} />
      <path d="M32 40 Q40 45 48 40" strokeDasharray="3 2" opacity={0.7} />
      <circle cx={30} cy={64} r={1.8} fill="currentColor" opacity={0.6} />
      <circle cx={50} cy={64} r={1.8} fill="currentColor" opacity={0.6} />
      <circle cx={40} cy={50} r={2} fill="currentColor" opacity={0.7} />
      <path d="M68 28 L69 31 L72 32 L69 33 L68 36 L67 33 L64 32 L67 31 Z" fill="currentColor" opacity={0.7} />
      <circle cx={14} cy={38} r={1.5} fill="currentColor" opacity={0.6} />
      <circle cx={66} cy={58} r={1.4} fill="currentColor" opacity={0.6} />
    </svg>
  );
}

function MagicWandSparkle({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth={1.3} strokeLinecap="round" strokeLinejoin="round" className={className} style={style} aria-hidden="true">
      <line x1={22} y1={68} x2={52} y2={32} strokeWidth={2} />
      <path d="M52 32 L56 22 L66 22 L58 14 L62 4 L52 10 L42 4 L46 14 L38 22 L48 22 Z" fill="currentColor" opacity={0.25} />
      <path d="M52 32 L56 22 L66 22 L58 14 L62 4 L52 10 L42 4 L46 14 L38 22 L48 22 Z" />
      <circle cx={52} cy={18} r={2.5} fill="currentColor" />
      <path d="M68 38 L69 40 L71 41 L69 42 L68 44 L67 42 L65 41 L67 40 Z" fill="currentColor" opacity={0.7} />
      <circle cx={34} cy={26} r={1.4} fill="currentColor" opacity={0.6} />
      <circle cx={24} cy={44} r={1.2} fill="currentColor" opacity={0.5} />
    </svg>
  );
}

function KeyToMyHeart({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 60 90" fill="none" stroke="currentColor" strokeWidth={1.3} strokeLinecap="round" strokeLinejoin="round" className={className} style={style} aria-hidden="true">
      <path d="M30 32 C22 24 16 18 16 12 C16 6 22 2 27 2 C29 2 30 4 30 5 C30 4 31 2 33 2 C38 2 44 6 44 12 C44 18 38 24 30 32 Z" />
      <circle cx={30} cy={12} r={3} fill="currentColor" opacity={0.4} />
      <line x1={30} y1={32} x2={30} y2={84} strokeWidth={2} />
      <line x1={30} y1={70} x2={40} y2={70} strokeWidth={1.8} />
      <line x1={30} y1={78} x2={42} y2={78} strokeWidth={1.8} />
      <line x1={38} y1={70} x2={38} y2={78} strokeWidth={1.2} />
      <path d="M12 48 L13 50.5 L15.5 51.5 L13 52.5 L12 55 L11 52.5 L8.5 51.5 L11 50.5 Z" fill="currentColor" opacity={0.7} />
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

function DiamondSparkle({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 70 70" fill="none" stroke="currentColor" strokeWidth={1.3} strokeLinecap="round" strokeLinejoin="round" className={className} style={style} aria-hidden="true">
      <polygon points="35,10 56,26 35,58 14,26" />
      <line x1={14} y1={26} x2={56} y2={26} />
      <line x1={35} y1={10} x2={26} y2={26} />
      <line x1={35} y1={10} x2={44} y2={26} />
      <line x1={26} y1={26} x2={35} y2={58} />
      <line x1={44} y1={26} x2={35} y2={58} />
      <path d="M58 8 L59 11 L62 12 L59 13 L58 16 L57 13 L54 12 L57 11 Z" fill="currentColor" opacity={0.7} />
      <circle cx={12} cy={44} r={1.4} fill="currentColor" opacity={0.6} />
    </svg>
  );
}

function BalloonsBouquetTrio({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 90 120" fill="none" stroke="currentColor" strokeWidth={1.3} strokeLinecap="round" strokeLinejoin="round" className={className} style={style} aria-hidden="true">
      <path d="M45 8 C34 8 28 20 28 32 C28 44 40 54 45 58 C50 54 62 44 62 32 C62 20 56 8 45 8 Z" />
      <ellipse cx={41} cy={24} rx={4} ry={9} strokeDasharray="2 2" opacity={0.5} />
      <polygon points="43,58 47,58 45,62" fill="currentColor" />
      <path d="M25 18 C16 18 10 28 10 38 C10 48 20 56 25 60 C30 56 40 48 40 38 C40 28 34 18 25 18 Z" opacity={0.7} />
      <polygon points="23,60 27,60 25,64" fill="currentColor" opacity={0.7} />
      <path d="M65 18 C56 18 50 28 50 38 C50 48 60 56 65 60 C70 56 80 48 80 38 C80 28 74 18 65 18 Z" opacity={0.7} />
      <polygon points="63,60 67,60 65,64" fill="currentColor" opacity={0.7} />
      <path d="M45 62 L45 84" />
      <path d="M25 64 Q35 74 45 84" opacity={0.7} />
      <path d="M65 64 Q55 74 45 84" opacity={0.7} />
      <circle cx={45} cy={84} r={3} fill="currentColor" />
      <path d="M45 84 Q38 98 42 112" opacity={0.7} />
      <path d="M45 84 Q52 98 48 112" opacity={0.7} />
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENT: NON-OVERLAPPING SPREAD DOODLES ACROSS ENTIRE VIEWPORT
// ─────────────────────────────────────────────────────────────────────────────

export default function LanyardDemo() {
  return (
    <div className="relative w-full h-full min-h-[100dvh] bg-white overflow-hidden select-none">
      {/* ── RICH BESPOKE CELEBRATION DOODLES (Non-overlapping, airy, balanced) ── */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
        
        {/* ================================================================= */}
        {/* 1. LEFT FLANK (3 staggered non-overlapping columns)                */}
        {/* ================================================================= */}

        {/* ── Outer Left Column L1 (x: 2% to 4%) ── */}
        <div className="absolute top-[2%] left-[2%] opacity-40">
          <LotusMandala className="w-[52px] sm:w-[78px] lg:w-[98px] text-[#9f773a] rotate-12" />
        </div>
        <div className="absolute top-[16%] left-[2.5%] opacity-45">
          <GiftBoxTall className="w-[36px] sm:w-[46px] lg:w-[54px] text-[#9f773a] -rotate-6" />
        </div>
        <div className="absolute top-[30%] left-[2%] opacity-40">
          <ButterflyDoodle className="w-[38px] sm:w-[50px] lg:w-[62px] text-[#9f773a] rotate-14" />
        </div>
        <div className="absolute top-[44%] left-[2.5%] opacity-45">
          <BirthdayCake className="w-[42px] sm:w-[54px] lg:w-[66px] text-[#9f773a]" />
        </div>
        <div className="absolute top-[58%] left-[2%] opacity-45">
          <ScrapbookCamera className="w-[40px] sm:w-[52px] lg:w-[64px] text-[#9f773a] -rotate-6" />
        </div>
        <div className="absolute top-[72%] left-[2.5%] opacity-45">
          <ChampagneBottlePop className="w-[38px] sm:w-[48px] lg:w-[58px] text-[#9f773a] -rotate-6" />
        </div>
        <div className="absolute top-[86%] left-[2%] opacity-40">
          <FloralCrest className="w-[52px] sm:w-[76px] lg:w-[96px] text-[#9f773a] -rotate-12" />
        </div>

        {/* ── Mid-Left Column L2 (x: 9% to 15%) ── */}
        <div className="absolute top-[9%] left-[9%] opacity-40">
          <PartyPennants className="w-[66px] sm:w-[92px] lg:w-[115px] text-[#9f773a] -rotate-3" />
        </div>
        <div className="absolute top-[23%] left-[10%] opacity-45">
          <PostageStamp className="w-[34px] sm:w-[44px] lg:w-[52px] text-[#9f773a] rotate-8" />
        </div>
        <div className="absolute top-[37%] left-[9.5%] opacity-45">
          <BirthdayCrown className="w-[40px] sm:w-[54px] lg:w-[66px] text-[#9f773a] rotate-4" />
        </div>
        <div className="absolute top-[51%] left-[10%] opacity-40">
          <StarMandala className="w-[46px] sm:w-[64px] lg:w-[82px] text-[#9f773a] rotate-15" />
        </div>
        <div className="absolute top-[65%] left-[9.5%] opacity-45">
          <SweetCandyBonbon className="w-[38px] sm:w-[48px] lg:w-[56px] text-[#9f773a] rotate-8" />
        </div>
        <div className="absolute top-[79%] left-[10%] opacity-45">
          <ToastingFlutes className="w-[38px] sm:w-[48px] lg:w-[58px] text-[#9f773a] rotate-8" />
        </div>
        <div className="absolute top-[92%] left-[9.5%] opacity-45">
          <PartyHatConfetti className="w-[36px] sm:w-[46px] lg:w-[54px] text-[#9f773a] -rotate-6" />
        </div>

        {/* ── Inner-Left Column L3 (x: 18% to 25%) ── */}
        <div className="absolute top-[4%] left-[18%] sm:left-[21%] opacity-40">
          <ShootingStarConstellation className="w-[44px] sm:w-[62px] lg:w-[76px] text-[#9f773a] rotate-6" />
        </div>
        <div className="absolute top-[18%] left-[19%] sm:left-[22%] opacity-45">
          <SweetBow className="w-[36px] sm:w-[48px] lg:w-[58px] text-[#9f773a] -rotate-6" />
        </div>
        <div className="absolute top-[32%] left-[18%] sm:left-[21%] opacity-40">
          <DaisyRosette className="w-[36px] sm:w-[48px] lg:w-[58px] text-[#9f773a] rotate-12" />
        </div>
        <div className="absolute top-[46%] left-[19%] sm:left-[22%] opacity-45">
          <MusicalMelody className="w-[36px] sm:w-[48px] lg:w-[58px] text-[#9f773a] -rotate-6" />
        </div>
        <div className="absolute top-[60%] left-[18%] sm:left-[21%] opacity-45">
          <HeartArrowDoodle className="w-[38px] sm:w-[50px] lg:w-[60px] text-[#9f773a] -rotate-8" />
        </div>
        <div className="absolute top-[74%] left-[19%] sm:left-[22%] opacity-45">
          <HeartSparkle className="w-[32px] sm:w-[42px] lg:w-[50px] text-[#9f773a] rotate-8" />
        </div>
        <div className="absolute top-[87%] left-[18%] sm:left-[21%] opacity-45">
          <CelebrationCupcake className="w-[34px] sm:w-[46px] lg:w-[54px] text-[#9f773a] -rotate-4" />
        </div>

        {/* ── Upper Strap Left Flank (Beside strap at x: ~30% to 37%, top: 4% to 28%) ── */}
        <div className="absolute top-[4%] left-[30%] sm:left-[33%] opacity-40">
          <FlowerBlossom className="w-[30px] sm:w-[38px] lg:w-[44px] text-[#9f773a] rotate-18" />
        </div>
        <div className="absolute top-[16%] left-[30%] sm:left-[34%] opacity-40">
          <BotanicalSprig className="w-[24px] sm:w-[30px] lg:w-[34px] h-[52px] sm:h-[68px] text-[#9f773a] -rotate-10" />
        </div>
        <div className="absolute top-[28%] left-[29%] sm:left-[33%] opacity-40">
          <KeyToMyHeart className="w-[24px] sm:w-[30px] lg:w-[36px] text-[#9f773a] rotate-8" />
        </div>


        {/* ================================================================= */}
        {/* 2. RIGHT FLANK (3 staggered non-overlapping columns)               */}
        {/* ================================================================= */}

        {/* ── Upper Strap Right Flank (Beside strap at right: ~30% to 37%, top: 4% to 28%) ── */}
        <div className="absolute top-[4%] right-[30%] sm:right-[33%] opacity-45">
          <DiamondSparkle className="w-[30px] sm:w-[38px] lg:w-[44px] text-[#9f773a] rotate-6" />
        </div>
        <div className="absolute top-[16%] right-[30%] sm:right-[34%] opacity-40">
          <TwirlingRibbon className="w-[24px] sm:w-[30px] lg:w-[34px] h-[56px] sm:h-[72px] text-[#9f773a] rotate-6" />
        </div>
        <div className="absolute top-[28%] right-[29%] sm:right-[33%] opacity-40">
          <BirthdayCandleSingle className="w-[24px] sm:w-[30px] lg:w-[34px] h-[52px] sm:h-[64px] text-[#9f773a] rotate-6" />
        </div>

        {/* ── Inner-Right Column R3 (right: 18% to 25%) ── */}
        <div className="absolute top-[4%] right-[18%] sm:right-[21%] opacity-45">
          <BespokeBirthdayDateSeal className="w-[42px] sm:w-[56px] lg:w-[68px] text-[#9f773a] rotate-6" />
        </div>
        <div className="absolute top-[18%] right-[19%] sm:right-[22%] opacity-45">
          <MagicWandSparkle className="w-[36px] sm:w-[48px] lg:w-[58px] text-[#9f773a] rotate-10" />
        </div>
        <div className="absolute top-[32%] right-[18%] sm:right-[21%] opacity-45">
          <PartyPopperCannon className="w-[38px] sm:w-[50px] lg:w-[60px] text-[#9f773a] -rotate-10" />
        </div>
        <div className="absolute top-[46%] right-[19%] sm:right-[22%] opacity-40">
          <PartyHornNoiseMaker className="w-[38px] sm:w-[50px] lg:w-[60px] text-[#9f773a] rotate-8" />
        </div>
        <div className="absolute top-[60%] right-[18%] sm:right-[21%] opacity-45">
          <VintageVipTicket className="w-[44px] sm:w-[58px] lg:w-[72px] text-[#9f773a] -rotate-6" />
        </div>
        <div className="absolute top-[74%] right-[19%] sm:right-[22%] opacity-45">
          <LollipopSwirl className="w-[30px] sm:w-[40px] lg:w-[48px] text-[#9f773a] rotate-6" />
        </div>
        <div className="absolute top-[87%] right-[18%] sm:right-[21%] opacity-45">
          <SealedLoveLetter className="w-[38px] sm:w-[50px] lg:w-[60px] text-[#9f773a] rotate-6" />
        </div>

        {/* ── Mid-Right Column R2 (right: 9% to 15%) ── */}
        <div className="absolute top-[9%] right-[9%] opacity-45">
          <CelebrationBalloonDuo className="w-[38px] sm:w-[52px] lg:w-[64px] text-[#9f773a] -rotate-6" />
        </div>
        <div className="absolute top-[23%] right-[10%] opacity-45">
          <BalloonsBouquetTrio className="w-[40px] sm:w-[54px] lg:w-[66px] text-[#9f773a] rotate-4" />
        </div>
        <div className="absolute top-[37%] right-[9.5%] opacity-45">
          <ChampagneCoupeDoodle className="w-[34px] sm:w-[46px] lg:w-[56px] text-[#9f773a] rotate-6" />
        </div>
        <div className="absolute top-[51%] right-[10%] opacity-40">
          <CrescentMoonMandala className="w-[44px] sm:w-[62px] lg:w-[76px] text-[#9f773a] -rotate-10" />
        </div>
        <div className="absolute top-[65%] right-[9.5%] opacity-45">
          <BotanicalWreath className="w-[42px] sm:w-[56px] lg:w-[68px] text-[#9f773a] rotate-12" />
        </div>
        <div className="absolute top-[79%] right-[10%] opacity-45">
          <SweetBow className="w-[36px] sm:w-[46px] lg:w-[56px] text-[#9f773a] -rotate-8" />
        </div>
        <div className="absolute top-[92%] right-[9.5%] opacity-45">
          <HeartSparkle className="w-[30px] sm:w-[40px] lg:w-[48px] text-[#9f773a] rotate-12" />
        </div>

        {/* ── Outer Right Column R1 (right: 2% to 4%) ── */}
        <div className="absolute top-[2%] right-[2%] opacity-40">
          <SunburstRosette className="w-[52px] sm:w-[78px] lg:w-[98px] text-[#9f773a] -rotate-15" />
        </div>
        <div className="absolute top-[16%] right-[2.5%] opacity-45">
          <GiftBoxClassic className="w-[36px] sm:w-[48px] lg:w-[58px] text-[#9f773a] rotate-8" />
        </div>
        <div className="absolute top-[30%] right-[2%] opacity-40">
          <FlowerBlossom className="w-[34px] sm:w-[44px] lg:w-[52px] text-[#9f773a] -rotate-15" />
        </div>
        <div className="absolute top-[44%] right-[2.5%] opacity-40">
          <ButterflyDoodle className="w-[38px] sm:w-[50px] lg:w-[62px] text-[#9f773a] -rotate-10" />
        </div>
        <div className="absolute top-[58%] right-[2%] opacity-40">
          <TwirlingRibbon className="w-[26px] sm:w-[34px] lg:w-[40px] h-[60px] sm:h-[80px] text-[#9f773a] rotate-8" />
        </div>
        <div className="absolute top-[72%] right-[2.5%] opacity-45">
          <PostageStamp className="w-[34px] sm:w-[44px] lg:w-[52px] text-[#9f773a] -rotate-6" />
        </div>
        <div className="absolute top-[86%] right-[2%] opacity-40">
          <Ornament className="w-[52px] sm:w-[76px] lg:w-[96px] text-[#9f773a] rotate-45" />
        </div>


        {/* ================================================================= */}
        {/* 3. BOTTOM ROW (Under floating badge, festive grounding)           */}
        {/* ================================================================= */}
        <div className="absolute bottom-[3%] left-[32%] sm:left-[35%] opacity-45">
          <SweetCandyBonbon className="w-[32px] sm:w-[44px] lg:w-[52px] text-[#9f773a] rotate-6" />
        </div>
        <div className="absolute bottom-[2%] left-1/2 -translate-x-1/2 opacity-35">
          <ShootingStarConstellation className="w-[56px] sm:w-[76px] lg:w-[92px] text-[#9f773a]" />
        </div>
        <div className="absolute bottom-[3%] right-[32%] sm:right-[35%] opacity-40">
          <DaisyRosette className="w-[32px] sm:w-[44px] lg:w-[52px] text-[#9f773a] -rotate-12" />
        </div>


        {/* ================================================================= */}
        {/* 4. AIRY STARDUST SPARKLES (Delicate champagne shimmer)            */}
        {/* ================================================================= */}
        {/* Left vertical channel sparkles */}
        <SparkleStar className="absolute top-[8%] left-[6%] w-3 h-3 text-[#9f773a]/35" />
        <SparkleStar className="absolute top-[22%] left-[6.5%] w-3.5 h-3.5 text-[#9f773a]/40" />
        <SparkleStar className="absolute top-[36%] left-[6%] w-3 h-3 text-[#9f773a]/30" />
        <SparkleStar className="absolute top-[50%] left-[6.5%] w-3.5 h-3.5 text-[#9f773a]/35" />
        <SparkleStar className="absolute top-[64%] left-[6%] w-3 h-3 text-[#9f773a]/30" />
        <SparkleStar className="absolute top-[78%] left-[6.5%] w-3.5 h-3.5 text-[#9f773a]/35" />
        <SparkleStar className="absolute top-[92%] left-[6%] w-3 h-3 text-[#9f773a]/35" />

        {/* Mid-Left seam sparkles */}
        <SparkleStar className="absolute top-[14%] left-[16%] w-3 h-3 text-[#9f773a]/35" />
        <SparkleStar className="absolute top-[28%] left-[16.5%] w-3.5 h-3.5 text-[#9f773a]/35" />
        <SparkleStar className="absolute top-[42%] left-[16%] w-3 h-3 text-[#9f773a]/30" />
        <SparkleStar className="absolute top-[56%] left-[16.5%] w-3.5 h-3.5 text-[#9f773a]/35" />
        <SparkleStar className="absolute top-[70%] left-[16%] w-3 h-3 text-[#9f773a]/30" />
        <SparkleStar className="absolute top-[84%] left-[16.5%] w-3 h-3 text-[#9f773a]/35" />

        {/* Right vertical channel sparkles */}
        <SparkleStar className="absolute top-[8%] right-[6%] w-3 h-3 text-[#9f773a]/35" />
        <SparkleStar className="absolute top-[22%] right-[6.5%] w-3.5 h-3.5 text-[#9f773a]/40" />
        <SparkleStar className="absolute top-[36%] right-[6%] w-3 h-3 text-[#9f773a]/30" />
        <SparkleStar className="absolute top-[50%] right-[6.5%] w-3.5 h-3.5 text-[#9f773a]/35" />
        <SparkleStar className="absolute top-[64%] right-[6%] w-3 h-3 text-[#9f773a]/30" />
        <SparkleStar className="absolute top-[78%] right-[6.5%] w-3.5 h-3.5 text-[#9f773a]/35" />
        <SparkleStar className="absolute top-[92%] right-[6%] w-3 h-3 text-[#9f773a]/35" />

        {/* Mid-Right seam sparkles */}
        <SparkleStar className="absolute top-[14%] right-[16%] w-3 h-3 text-[#9f773a]/35" />
        <SparkleStar className="absolute top-[28%] right-[16.5%] w-3.5 h-3.5 text-[#9f773a]/35" />
        <SparkleStar className="absolute top-[42%] right-[16%] w-3 h-3 text-[#9f773a]/30" />
        <SparkleStar className="absolute top-[56%] right-[16.5%] w-3.5 h-3.5 text-[#9f773a]/35" />
        <SparkleStar className="absolute top-[70%] right-[16%] w-3 h-3 text-[#9f773a]/30" />
        <SparkleStar className="absolute top-[84%] right-[16.5%] w-3.5 h-3.5 text-[#9f773a]/35" />

        {/* Top strap canopy sparkles */}
        <SparkleStar className="absolute top-[2%] left-[45%] w-3 h-3 text-[#9f773a]/30" />
        <SparkleStar className="absolute top-[2%] right-[45%] w-3 h-3 text-[#9f773a]/30" />
      </div>

      {/* ── 3D PHYSICAL LANYARD BADGE (Floating in center foreground) ── */}
      <div className="relative z-10 w-full h-full">
        <LanyardBadge />
      </div>
    </div>
  );
}
