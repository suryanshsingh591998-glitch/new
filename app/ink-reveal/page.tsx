"use client";

import Link from "next/link";
import { Sparkles, Brush, Layers, ArrowLeft, MousePointerClick } from "lucide-react";
import InkReveal from "@/components/ui/ink-reveal";

export default function InkRevealPage() {
  return (
    <main className="min-h-screen w-full bg-[#0a0705] text-[#f7e8d0] px-4 py-10 md:py-16 selection:bg-[#f0a83c]/30">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Header Navigation */}
        <div className="flex items-center justify-between border-b border-[#8a6d40]/30 pb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-[#d4af6a] hover:text-[#fff] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#8a6d40]/40 bg-[#1f140c]/60 text-xs text-[#d4af6a]">
            <Sparkles className="w-3.5 h-3.5 text-[#f0a83c]" />
            <span>Interactive Ink Canvas</span>
          </div>
        </div>

        {/* Hero Title */}
        <div className="text-center space-y-3">
          <h1 className="text-4xl md:text-5xl font-serif text-[#fff9f0] tracking-tight">
            Ink Reveal Component
          </h1>
          <p className="text-sm md:text-base text-[#a8957a] max-w-xl mx-auto">
            Hover or drag your cursor across the masked canvas to carve organic, fading ink stamps and reveal the visual layer underneath.
          </p>
          <div className="flex items-center justify-center gap-2 text-xs text-[#d4af6a]/80 pt-2">
            <MousePointerClick className="w-3.5 h-3.5" />
            <span>Move your mouse across any panel below</span>
          </div>
        </div>

        {/* Main Showcase Panel */}
        <div className="relative rounded-2xl overflow-hidden border border-[#8a6d40]/40 shadow-[0_16px_50px_rgba(0,0,0,0.8)] h-[440px] md:h-[500px]">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80"
            alt="Scenic Yosemite Valley Landscape"
            className="absolute inset-0 w-full h-full object-cover select-none"
          />
          {/* Subtle under-overlay text that also gets revealed */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center select-none pointer-events-none z-0">
            <span className="text-xs uppercase tracking-[0.3em] text-white/90 drop-shadow-md">
              Secret Hidden View
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-white font-bold drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              Yosemite Valley
            </h2>
          </div>

          {/* The Ink Reveal Layer */}
          <InkReveal
            maskColor={[22, 16, 12]}
            brushSize={140}
            lifetime={800}
            rStart={14}
            rVary={0.4}
            className="z-10"
          />
        </div>

        {/* Secondary Variations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          {/* Card 1: Starry Night */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm font-medium text-[#d4af6a]">
              <Brush className="w-4 h-4 text-[#f0a83c]" />
              <span>Cream Mask Variation</span>
            </div>
            <div className="relative rounded-xl overflow-hidden border border-[#8a6d40]/30 shadow-lg h-[300px]">
              <img
                src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80"
                alt="Starry Night Mountain"
                className="absolute inset-0 w-full h-full object-cover select-none"
              />
              <InkReveal
                maskColor={[250, 244, 235]}
                brushSize={110}
                lifetime={650}
                className="z-10"
              />
            </div>
          </div>

          {/* Card 2: Aurora */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm font-medium text-[#d4af6a]">
              <Layers className="w-4 h-4 text-[#f0a83c]" />
              <span>Velvet Noir Mask Variation</span>
            </div>
            <div className="relative rounded-xl overflow-hidden border border-[#8a6d40]/30 shadow-lg h-[300px]">
              <img
                src="https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=80"
                alt="Aurora Borealis"
                className="absolute inset-0 w-full h-full object-cover select-none"
              />
              <InkReveal
                maskColor={[14, 10, 8]}
                brushSize={120}
                lifetime={750}
                className="z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
