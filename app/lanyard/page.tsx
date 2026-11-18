"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Sparkles, RotateCw, Hand, ShieldCheck, Ticket } from "lucide-react";
import LanyardBadge from "@/components/ui/lanyard-badge";

export default function LanyardPage() {
  const [badgeTheme, setBadgeTheme] = useState<"noir" | "velvet" | "cream">("noir");

  const themes = {
    noir: {
      strapColor: "#141312",
      inkColor: "#d4af6a",
      cardColor: "#1a1612",
      strapText: "VIP ALL ACCESS PASS · CINEMA",
      strapLabel: "BIRTHDAY PREMIERE 2026",
      title: "SWEETY'S SPECIAL GUEST",
      subtitle: "FRONT ROW ACCESS · NOV 11, 2026",
      name: "Alex Morgan",
      role: "Honored Guest",
    },
    velvet: {
      strapColor: "#591418",
      inkColor: "#f3e6cf",
      cardColor: "#2b0a0d",
      strapText: "EXCLUSIVE INVITATION · VELVET LOUNGE",
      strapLabel: "THEATRE ROYAL",
      title: "SHOWTIME PREMIERE",
      subtitle: "MIDNIGHT CURTAIN CALL · IST",
      name: "Alex Morgan",
      role: "VIP Passholder",
    },
    cream: {
      strapColor: "#2a221b",
      inkColor: "#9c7c4c",
      cardColor: "#f4ede2",
      strapText: "THE FUTURE IS HANDMADE",
      strapLabel: "DESIGN WEEK 2026",
      title: "THE FUTURE IS HANDMADE",
      subtitle: "Design Week · Vol. 2 · 2026",
      name: "Alex Morgan",
      role: "Documentation",
    },
  };

  const current = themes[badgeTheme];

  // Custom front featuring a clean VIP portrait design with authentic Unsplash image
  const customFront = (
    <div className="relative h-full w-full bg-[#16120e] text-[#f3e6cf] flex flex-col justify-between p-5 border border-[#d4af6a]/30">
      {/* Top Bar */}
      <div className="flex items-center justify-between border-b border-[#d4af6a]/20 pb-2">
        <div className="flex items-center gap-1.5 text-[9px] uppercase tracking-widest text-[#d4af6a] font-mono">
          <Ticket className="w-3 h-3 text-[#f0a83c]" />
          <span>VIP Pass</span>
        </div>
        <span className="text-[9px] font-mono text-[#d4af6a]/70">#0011-2026</span>
      </div>

      {/* Center Photo & Name */}
      <div className="flex flex-col items-center text-center my-auto space-y-2.5">
        <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-[#d4af6a] shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
            alt="VIP Guest Portrait"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h3 className="font-serif text-lg font-bold text-[#fff9f0] leading-tight tracking-wide">
            {current.name}
          </h3>
          <p className="text-[10px] text-[#f0a83c] uppercase tracking-widest font-mono mt-0.5">
            {current.role}
          </p>
        </div>
      </div>

      {/* Bottom Access Ribbon */}
      <div className="bg-[#241a10] rounded-lg p-2.5 text-center border border-[#d4af6a]/20 space-y-1">
        <div className="text-[11px] font-serif font-bold text-[#f7dfa5] tracking-wider uppercase">
          {current.title}
        </div>
        <div className="flex items-center justify-center gap-1 text-[8px] text-[#a8957a] tracking-wider uppercase">
          <ShieldCheck className="w-3 h-3 text-[#22c55e]" />
          <span>Verified Access Granted</span>
        </div>
      </div>
    </div>
  );

  return (
    <main className="min-h-screen w-full bg-[#0d0907] text-[#f3e6cf] flex flex-col">
      {/* Top Navbar */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-[#8a6d40]/30 bg-[#120d0a]/80 backdrop-blur-md z-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#d4af6a] hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#8a6d40]/40 bg-[#1b140d] text-xs text-[#d4af6a]">
          <Sparkles className="w-3.5 h-3.5 text-[#f0a83c]" />
          <span>Physics Rope & 3D Tilt Badge</span>
        </div>
      </header>

      {/* Main Interactive Stage */}
      <div className="flex-1 flex flex-col items-center justify-center relative overflow-hidden">
        {/* Floating Instruction Chips */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 z-10 flex flex-wrap items-center justify-center gap-2 px-4 pointer-events-none">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 border border-white/10 text-[11px] text-[#eed8b0] backdrop-blur-sm shadow-md">
            <Hand className="w-3 h-3 text-[#f0a83c]" /> Drag card to pull lanyard
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 border border-white/10 text-[11px] text-[#eed8b0] backdrop-blur-sm shadow-md">
            <RotateCw className="w-3 h-3 text-[#f0a83c]" /> Flick sideways to spin
          </span>
        </div>

        {/* Lanyard Badge Stage */}
        <div className="w-full h-[76vh] max-h-[850px] relative">
          <LanyardBadge
            key={badgeTheme}
            strapColor={current.strapColor}
            inkColor={current.inkColor}
            cardColor={current.cardColor}
            strapText={current.strapText}
            strapLabel={current.strapLabel}
            title={current.title}
            subtitle={current.subtitle}
            name={current.name}
            role={current.role}
            front={badgeTheme === "noir" ? customFront : undefined}
            height="100%"
            cardWidth={240}
            flipButton={true}
          />
        </div>

        {/* Bottom Theme Controls */}
        <div className="pb-8 pt-2 z-10 flex items-center gap-3">
          <span className="text-xs font-mono uppercase tracking-widest text-[#a8957a]">
            Theme Preset:
          </span>
          <div className="inline-flex rounded-full p-1 bg-[#1a120b] border border-[#8a6d40]/40 shadow-inner">
            <button
              type="button"
              onClick={() => setBadgeTheme("noir")}
              className={`px-3 py-1 text-xs rounded-full transition-all ${
                badgeTheme === "noir"
                  ? "bg-[#f0a83c] text-black font-semibold shadow"
                  : "text-[#d4af6a] hover:text-white"
              }`}
            >
              VIP Noir
            </button>
            <button
              type="button"
              onClick={() => setBadgeTheme("velvet")}
              className={`px-3 py-1 text-xs rounded-full transition-all ${
                badgeTheme === "velvet"
                  ? "bg-[#f0a83c] text-black font-semibold shadow"
                  : "text-[#d4af6a] hover:text-white"
              }`}
            >
              Velvet Royal
            </button>
            <button
              type="button"
              onClick={() => setBadgeTheme("cream")}
              className={`px-3 py-1 text-xs rounded-full transition-all ${
                badgeTheme === "cream"
                  ? "bg-[#f0a83c] text-black font-semibold shadow"
                  : "text-[#d4af6a] hover:text-white"
              }`}
            >
              Artisanal Cream
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
