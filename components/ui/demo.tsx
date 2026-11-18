"use client";

import { useCallback, useEffect, useState } from "react";
import Component from "@/components/ui/ink-reveal";

function drawCuteHeart(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  size: number,
  angleRad: number = 0
) {
  ctx.save();
  ctx.translate(cx, cy);
  if (angleRad !== 0) {
    ctx.rotate(angleRad);
  }
  ctx.beginPath();
  const topY = -size * 0.38;
  const bottomY = size * 0.42;
  const cuspY = -size * 0.12;
  const halfW = size * 0.52;

  ctx.moveTo(0, bottomY);
  // Left curve to left top lobe
  ctx.bezierCurveTo(
    -halfW * 0.9, bottomY * 0.3,
    -halfW * 1.05, topY + size * 0.12,
    -halfW * 0.52, topY
  );
  // Left lobe to center cusp
  ctx.bezierCurveTo(
    -halfW * 0.22, topY,
    0, cuspY - size * 0.05,
    0, cuspY
  );
  // Right lobe from center cusp
  ctx.bezierCurveTo(
    0, cuspY - size * 0.05,
    halfW * 0.22, topY,
    halfW * 0.52, topY
  );
  // Right lobe down to bottom point
  ctx.bezierCurveTo(
    halfW * 1.05, topY + size * 0.12,
    halfW * 0.9, bottomY * 0.3,
    0, bottomY
  );
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}

export default function DemoOne() {
  const [fontsReady, setFontsReady] = useState(false);

  useEffect(() => {
    if (typeof document !== "undefined" && document.fonts) {
      Promise.all([
        document.fonts.load("36px 'Aesthetic Script'"),
        document.fonts.load("36px 'Aesthetic'"),
        document.fonts.load("72px 'Maglite'"),
        document.fonts.load("28px 'Elegante Classica'"),
        document.fonts.load("28px 'Elegante'"),
        document.fonts.ready,
      ]).then(() => {
        setFontsReady(true);
      });
    }
  }, []);

  const drawBirthdayTypography = useCallback(
    (ctx: CanvasRenderingContext2D, w: number, h: number) => {
      const cx = w / 2;
      const cy = h / 2;

      ctx.save();
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      // Grand responsive font sizing:
      // Scales with both width and height so on desktop it's large and prominent (up to 125px),
      // while on mobile it scales comfortably (48px - 64px) without crowding.
      const titleSize = Math.max(48, Math.min(Math.round(w * 0.088), Math.round(h * 0.15), 125));
      const scriptSize = Math.max(22, Math.min(Math.round(titleSize * 0.38), 44));
      const quoteSize = Math.max(15, Math.min(Math.round(titleSize * 0.22), 23));

      // 1. Subtitle in Aesthetic Script modern calligraphy font
      ctx.font = `normal ${scriptSize}px 'Aesthetic Script', 'Aesthetic', cursive`;
      ctx.fillStyle = "#b5873e";
      if ("letterSpacing" in ctx) {
        (ctx as any).letterSpacing = "0px";
      }
      const subY = cy - titleSize * 0.98;
      const subtitleText = "Wishing you the best day";
      ctx.fillText(subtitleText, cx, subY);

      // Flanking cute hearts
      const metrics = ctx.measureText(subtitleText);
      const halfW = metrics.width / 2;
      const heartGap = Math.max(16, Math.round(scriptSize * 0.52));
      const heartSize = Math.max(12, Math.round(scriptSize * 0.46));

      ctx.fillStyle = "#c59a52";
      drawCuteHeart(ctx, cx - halfW - heartGap, subY, heartSize, -0.16);
      drawCuteHeart(ctx, cx + halfW + heartGap, subY, heartSize, 0.16);

      // 2. Main Title: Happy Birthday in Maglite
      ctx.font = `400 ${titleSize}px 'Maglite', Georgia, serif`;
      ctx.fillStyle = "#18120c";
      if ("letterSpacing" in ctx) {
        (ctx as any).letterSpacing = "-0.5px";
      }
      ctx.fillText("Happy Birthday", cx, cy);

      // 3. Luxurious golden divider rule with generous vertical space below descenders
      const heartY = cy + titleSize * 0.85;
      const lineLen = Math.max(50, Math.min(w * 0.22, 160));

      ctx.strokeStyle = "rgba(175, 138, 78, 0.45)";
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.moveTo(cx - lineLen - 18, heartY);
      ctx.lineTo(cx - 18, heartY);
      ctx.moveTo(cx + 18, heartY);
      ctx.lineTo(cx + lineLen + 18, heartY);
      ctx.stroke();

      ctx.fillStyle = "#c59a52";
      ctx.font = `${Math.max(12, Math.round(titleSize * 0.15))}px Georgia, serif`;
      if ("letterSpacing" in ctx) {
        (ctx as any).letterSpacing = "0px";
      }
      ctx.fillText("♦", cx, heartY);

      // 4. Poetic Dedication Message in Elegante Classica luxury modern serif font
      ctx.font = `normal 400 ${quoteSize}px 'Elegante Classica', 'Elegante', Georgia, serif`;
      ctx.fillStyle = "#5c4935";
      if ("letterSpacing" in ctx) {
        (ctx as any).letterSpacing = "0.6px";
      }
      const quoteY = heartY + Math.max(34, titleSize * 0.38);

      if (w < 600) {
        ctx.fillText("To the most beautiful soul,", cx, quoteY);
        ctx.fillText("may your year ahead shine", cx, quoteY + quoteSize * 1.45);
        ctx.fillText("as brightly as your smile.", cx, quoteY + quoteSize * 2.9);
      } else {
        ctx.fillText(
          "To the most beautiful soul, may your year ahead shine as brightly as your smile.",
          cx,
          quoteY
        );
      }

      ctx.restore();
    },
    []
  );

  return (
    <div className="relative w-full h-full min-h-[100dvh] overflow-hidden select-none bg-[#faf7f2]">
      {/* Font Preloader to ensure browser initiates font downloads immediately */}
      <span
        aria-hidden="true"
        className="sr-only select-none pointer-events-none opacity-0 fixed -top-9999 left-0"
        style={{ fontFamily: "'Aesthetic Script', cursive" }}
      >
        Wishing you the best day
      </span>
      <span
        aria-hidden="true"
        className="sr-only select-none pointer-events-none opacity-0 fixed -top-9999 left-0"
        style={{ fontFamily: "'Maglite', serif" }}
      >
        Happy Birthday
      </span>
      <span
        aria-hidden="true"
        className="sr-only select-none pointer-events-none opacity-0 fixed -top-9999 left-0"
        style={{ fontFamily: "'Elegante Classica', serif" }}
      >
        To the most beautiful soul, may your year ahead shine as brightly as your smile.
      </span>

      {/* Revealed Photo Layer */}
      <img
        src="/ref/girl.jpg"
        alt="Birthday Girl Sweety"
        className="absolute inset-0 w-full h-full object-cover object-[center_20%]"
      />

      {/* The Scratchable White Ink Mask with Text Painted Directly On It */}
      <Component
        key={fontsReady ? "fonts-ready" : "fonts-loading"}
        maskColor={[252, 250, 248]}
        brushSize={140}
        lifetime={900}
        onDrawMask={drawBirthdayTypography}
      />
    </div>
  );
}
