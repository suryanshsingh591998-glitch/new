"use client";

import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import {
  FC,
  HTMLAttributes,
  memo,
  ReactNode,
  useEffect,
  useState,
} from "react";

const flipUnitContainerVariants = cva("relative select-none", {
  variants: {
    size: {
      sm: "w-10 min-w-10 h-14 text-3xl",
      md: "w-13 sm:w-15 min-w-13 sm:min-w-15 h-18 sm:h-22 text-4xl sm:text-5xl",
      lg: "w-14 sm:w-18 md:w-20 min-w-14 sm:min-w-18 md:min-w-20 h-20 sm:h-26 md:h-28 text-5xl sm:text-6xl md:text-7xl",
      xl: "w-18 sm:w-22 md:w-26 min-w-18 sm:min-w-22 md:min-w-26 h-26 sm:h-32 md:h-38 text-6xl sm:text-7xl md:text-8xl",
    },
  },
  defaultVariants: {
    size: "lg",
  },
});

interface FlipUnitProps
  extends HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof flipUnitContainerVariants> {
  digit: number | string;
}

// Upper card half with physical card borders and depth
const cardHalfTopStyle = cn(
  "absolute inset-x-0 top-0 h-1/2 overflow-hidden select-none",
  "rounded-t-xl border-t border-x border-[#8a6d40]",
  "bg-gradient-to-b from-[#2c1c11] via-[#1d120a] to-[#140c07]",
  "shadow-[inset_0_1px_0_rgba(243,230,207,0.22),inset_0_-2px_4px_rgba(0,0,0,0.5)]"
);

// Lower card half with physical card borders and depth (outer shadow is on container to prevent doubling)
const cardHalfBottomStyle = cn(
  "absolute inset-x-0 bottom-0 h-1/2 overflow-hidden select-none",
  "rounded-b-xl border-b border-x border-[#8a6d40]",
  "bg-gradient-to-b from-[#180f08] via-[#120a05] to-[#0b0603]",
  "shadow-[inset_0_2px_4px_rgba(255,255,255,0.06)]"
);

function DigitSpan({
  children,
  position,
}: {
  children: ReactNode;
  position: "top" | "bottom";
}) {
  return (
    <span
      className="absolute inset-x-0 w-full h-[200%] flex items-center justify-center font-bold select-none tracking-tight text-[#f7e8d0] antialiased leading-none"
      style={{
        top: position === "top" ? "0%" : "-100%",
        fontFamily: "'JetBrains Mono', 'Bebas Neue', monospace",
        textShadow:
          "0 2px 8px rgba(0,0,0,0.7), 0 0 16px rgba(240,168,60,0.18)",
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
      }}
    >
      {children}
    </span>
  );
}

const FlipUnit: FC<FlipUnitProps> = memo(function FlipUnit({
  digit,
  size,
  className,
}: FlipUnitProps) {
  const [currentDigit, setCurrentDigit] = useState(digit);
  const [prevDigit, setPrevDigit] = useState(digit);
  const [flipping, setFlipping] = useState(false);

  // Synchronous render-phase adjustment: Mounts the old top flap in the
  // exact paint frame digit changes, eliminating any pre-flip flash.
  if (digit !== currentDigit) {
    setPrevDigit(currentDigit);
    setCurrentDigit(digit);
    setFlipping(true);
  }

  // Safety fallback timer in case of window background throttling
  useEffect(() => {
    if (flipping) {
      const timer = setTimeout(() => {
        setFlipping(false);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [flipping]);

  return (
    <div
      className={cn(
        flipUnitContainerVariants({ size }),
        "relative select-none rounded-xl shadow-[0_8px_25px_rgba(0,0,0,0.85)]",
        className,
      )}
      style={{
        perspective: "1000px",
        WebkitPerspective: "1000px",
      }}
    >
      {/* 1. Background Top Card (Static): Displays incoming currentDigit */}
      <div className={cardHalfTopStyle}>
        <DigitSpan position="top">{currentDigit}</DigitSpan>
      </div>

      {/* 2. Background Bottom Card (Static): Displays prevDigit while flipping, currentDigit when settled */}
      <div className={cardHalfBottomStyle}>
        <DigitSpan position="bottom">
          {flipping ? prevDigit : currentDigit}
        </DigitSpan>
      </div>

      {/* 3. Top Flap Card: Folds down from 0deg to -90deg, seamlessly revealing Layer 1 underneath */}
      {flipping && (
        <div
          className={cn(
            cardHalfTopStyle,
            "z-20 animate-card-flip-top pointer-events-none",
          )}
          style={{
            transformOrigin: "bottom center",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          <DigitSpan position="top">{prevDigit}</DigitSpan>
          <div className="absolute inset-0 bg-black pointer-events-none animate-flap-shade-top" />
        </div>
      )}

      {/* 4. Bottom Flap Card: Folds down from 90deg to 0deg, frame-perfect unmount via onAnimationEnd */}
      {flipping && (
        <div
          className={cn(
            cardHalfBottomStyle,
            "z-10 animate-card-flip-bottom pointer-events-none",
          )}
          style={{
            transformOrigin: "top center",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
          onAnimationEnd={(e) => {
            if (e.animationName === "flap-bottom-land" || e.animationName === "bottom-flap-land") {
              setFlipping(false);
            }
          }}
        >
          <DigitSpan position="bottom">{currentDigit}</DigitSpan>
          <div className="absolute inset-0 bg-black pointer-events-none animate-flap-shade-bottom" />
        </div>
      )}

      {/* 5. Center Split Seam & Axle Crease */}
      <div className="absolute top-1/2 left-0 w-full h-[2px] -translate-y-1/2 bg-black/95 shadow-[0_1px_0_rgba(255,255,255,0.08)] z-30 pointer-events-none" />

      {/* 6. Physical Mechanical Flap Hinge Clips on Left & Right */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3.5px] h-3 bg-[#0a0604] rounded-r z-40 pointer-events-none border-r border-[#8a6d40] shadow-md" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[3.5px] h-3 bg-[#0a0604] rounded-l z-40 pointer-events-none border-l border-[#8a6d40] shadow-md" />
    </div>
  );
});

export interface FlipClockProps
  extends VariantProps<typeof flipUnitContainerVariants>,
  HTMLAttributes<HTMLDivElement> {
  countdown?: boolean;
  targetDate?: Date;
  showDays?: "auto" | "always" | "never";
  showLabels?: boolean;
  variant?: string;
  onComplete?: () => void;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

type FlipClockSize = NonNullable<
  VariantProps<typeof flipUnitContainerVariants>["size"]
>;

const separatorHeightMap: Record<FlipClockSize, string> = {
  sm: "h-14",
  md: "h-18 sm:h-22",
  lg: "h-20 sm:h-26 md:h-28",
  xl: "h-26 sm:h-32 md:h-38",
};

export const FlipClock = ({
  countdown = false,
  targetDate,
  size = "lg",
  showDays = "auto",
  showLabels = true,
  onComplete,
  className,
  ...props
}: FlipClockProps) => {
  const [time, setTime] = useState<TimeLeft>(() =>
    getTime(countdown, targetDate),
  );

  useEffect(() => {
    const timer = setInterval(() => {
      const nextTime = getTime(countdown, targetDate);

      if (countdown && targetDate && targetDate.getTime() <= Date.now()) {
        onComplete?.();
      }

      setTime((prev) => {
        if (
          prev.seconds === nextTime.seconds &&
          prev.minutes === nextTime.minutes &&
          prev.hours === nextTime.hours &&
          prev.days === nextTime.days
        ) {
          return prev;
        }
        return nextTime;
      });
    }, 250);

    return () => clearInterval(timer);
  }, [countdown, targetDate, onComplete]);

  const daysStr = String(time.days).padStart(2, "0");
  const hoursStr = String(time.hours).padStart(2, "0");
  const minutesStr = String(time.minutes).padStart(2, "0");
  const secondsStr = String(time.seconds).padStart(2, "0");

  const shouldShowDays =
    countdown &&
    (showDays === "always" || (showDays === "auto" && time.days > 0));

  return (
    <div
      className={cn(
        "relative flex justify-center items-start gap-1.5 sm:gap-3",
        className,
      )}
      aria-live="polite"
      {...props}
    >
      <span className="sr-only absolute">
        {`${time.days}d ${time.hours}:${time.minutes}:${time.seconds}`}
      </span>

      {/* Days Block */}
      {shouldShowDays && (
        <div className="flex flex-col items-center">
          <div className="flex space-x-1 sm:space-x-1.5">
            {daysStr.split("").map((digit, i) => (
              <FlipUnit
                key={`d-${i}`}
                digit={digit}
                size={size}
              />
            ))}
          </div>
          {showLabels && (
            <span className="text-[10px] sm:text-xs tracking-[0.25em] uppercase mt-2.5 font-mono font-semibold text-[#d4af6a]/90 select-none">
              Days
            </span>
          )}
        </div>
      )}

      {/* Days - Hours Separator */}
      {shouldShowDays && (
        <div className="flex flex-col items-center">
          <div
            className={cn(
              "flex items-center justify-center",
              separatorHeightMap[size || "lg"],
            )}
          >
            <span className="font-mono font-bold text-xl sm:text-3xl md:text-4xl text-[#f0a83c] opacity-80 drop-shadow-[0_0_8px_rgba(240,168,60,0.55)] select-none">
              :
            </span>
          </div>
          {showLabels && (
            <span className="text-[10px] sm:text-xs mt-2.5 invisible select-none font-mono">
              _
            </span>
          )}
        </div>
      )}

      {/* Hours Block */}
      <div className="flex flex-col items-center">
        <div className="flex space-x-1 sm:space-x-1.5">
          {hoursStr.split("").map((digit, index) => (
            <FlipUnit
              key={`hour-${index}`}
              digit={digit}
              size={size}
            />
          ))}
        </div>
        {showLabels && (
          <span className="text-[10px] sm:text-xs tracking-[0.25em] uppercase mt-2.5 font-mono font-semibold text-[#d4af6a]/90 select-none">
            Hours
          </span>
        )}
      </div>

      {/* Hours - Minutes Separator */}
      <div className="flex flex-col items-center">
        <div
          className={cn(
            "flex items-center justify-center",
            separatorHeightMap[size || "lg"],
          )}
        >
          <span className="font-mono font-bold text-xl sm:text-3xl md:text-4xl text-[#f0a83c] opacity-80 drop-shadow-[0_0_8px_rgba(240,168,60,0.55)] select-none">
            :
          </span>
        </div>
        {showLabels && (
          <span className="text-[10px] sm:text-xs mt-2.5 invisible select-none font-mono">
            _
          </span>
        )}
      </div>

      {/* Minutes Block */}
      <div className="flex flex-col items-center">
        <div className="flex space-x-1 sm:space-x-1.5">
          {minutesStr.split("").map((digit, index) => (
            <FlipUnit
              key={`minute-${index}`}
              digit={digit}
              size={size}
            />
          ))}
        </div>
        {showLabels && (
          <span className="text-[10px] sm:text-xs tracking-[0.25em] uppercase mt-2.5 font-mono font-semibold text-[#d4af6a]/90 select-none">
            Mins
          </span>
        )}
      </div>

      {/* Minutes - Seconds Separator */}
      <div className="flex flex-col items-center">
        <div
          className={cn(
            "flex items-center justify-center",
            separatorHeightMap[size || "lg"],
          )}
        >
          <span className="font-mono font-bold text-xl sm:text-3xl md:text-4xl text-[#f0a83c] opacity-80 drop-shadow-[0_0_8px_rgba(240,168,60,0.55)] select-none">
            :
          </span>
        </div>
        {showLabels && (
          <span className="text-[10px] sm:text-xs mt-2.5 invisible select-none font-mono">
            _
          </span>
        )}
      </div>

      {/* Seconds Block */}
      <div className="flex flex-col items-center">
        <div className="flex space-x-1 sm:space-x-1.5">
          {secondsStr.split("").map((digit, index) => (
            <FlipUnit
              key={`second-${index}`}
              digit={digit}
              size={size}
            />
          ))}
        </div>
        {showLabels && (
          <span className="text-[10px] sm:text-xs tracking-[0.25em] uppercase mt-2.5 font-mono font-semibold text-[#d4af6a]/90 select-none">
            Secs
          </span>
        )}
      </div>

      {/* Precise, Zero-Flicker Mechanical Split-Flap Animations */}
      <style>{`
        @keyframes flap-top-fall {
          0% {
            transform: rotateX(0deg);
          }
          100% {
            transform: rotateX(-90deg);
          }
        }

        @keyframes flap-bottom-land {
          0% {
            transform: rotateX(90deg);
          }
          100% {
            transform: rotateX(0deg);
          }
        }

        @keyframes flap-top-shade {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 0.65;
          }
        }

        @keyframes flap-bottom-shade {
          0% {
            opacity: 0.65;
          }
          100% {
            opacity: 0;
          }
        }

        .animate-card-flip-top {
          transform-origin: bottom center !important;
          animation: flap-top-fall 0.28s cubic-bezier(0.35, 0, 0.65, 0.15) forwards !important;
          backface-visibility: hidden !important;
          -webkit-backface-visibility: hidden !important;
          will-change: transform;
        }

        .animate-card-flip-bottom {
          transform-origin: top center !important;
          animation: flap-bottom-land 0.28s cubic-bezier(0.15, 0.85, 0.35, 1) 0.26s both !important;
          backface-visibility: hidden !important;
          -webkit-backface-visibility: hidden !important;
          will-change: transform;
        }

        .animate-flap-shade-top {
          animation: flap-top-shade 0.28s cubic-bezier(0.35, 0, 0.65, 0.15) forwards !important;
        }

        .animate-flap-shade-bottom {
          animation: flap-bottom-shade 0.28s cubic-bezier(0.15, 0.85, 0.35, 1) 0.26s both !important;
        }
      `}</style>
    </div>
  );
};

function getTime(countdown: boolean, targetDate?: Date): TimeLeft {
  const now = new Date();

  // Real-time Clock Mode
  if (!countdown) {
    return {
      days: 0,
      hours: now.getHours(),
      minutes: now.getMinutes(),
      seconds: now.getSeconds(),
    };
  }

  // Countdown Mode: Default to November 11, 2026 IST
  const target = targetDate || new Date("2026-11-11T00:00:00+05:30");
  const diff = Math.max(0, target.getTime() - now.getTime());

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default FlipClock;
