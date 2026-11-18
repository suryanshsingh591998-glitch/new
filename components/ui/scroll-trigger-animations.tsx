'use client';
import * as React from 'react';
import { cn } from '@/lib/utils';
import {
  HTMLMotionProps,
  MapInputRange,
  motion,
  MotionValue,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from 'motion/react';
import Lenis from 'lenis';

interface UseSmoothScrollOptions {
  duration?: number;
  lerp?: number;
  smoothWheel?: boolean;
  touchMultiplier?: number;
  infinite?: boolean;
  orientation?: 'vertical' | 'horizontal';
  gestureOrientation?: 'vertical' | 'horizontal';
  easing?: (t: number) => number;
}
const defaultOptions: UseSmoothScrollOptions = {
  duration: 1.2,
  lerp: 0.08,
  smoothWheel: true,
  touchMultiplier: 1.2,
  infinite: false,
  orientation: 'vertical',
  gestureOrientation: 'vertical',
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
};

export function useSmoothScroll(options: UseSmoothScrollOptions = {}) {
  const lenisRef = React.useRef<Lenis | null>(null);

  React.useEffect(() => {
    // If a main scroll container exists on the page (e.g. home page snap container),
    // skip window Lenis so native container scroll snapping works smoothly
    if (typeof document !== 'undefined' && document.getElementById('main-scroll-container')) {
      return;
    }

    const mergedOptions = { ...defaultOptions, ...options };

    lenisRef.current = new Lenis({
      duration: mergedOptions.duration,
      lerp: mergedOptions.lerp,
      smoothWheel: mergedOptions.smoothWheel,
      touchMultiplier: mergedOptions.touchMultiplier,
      infinite: mergedOptions.infinite,
      orientation: mergedOptions.orientation,
      gestureOrientation: mergedOptions.gestureOrientation,
      easing: mergedOptions.easing,
    });

    function raf(time: number) {
      lenisRef.current?.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenisRef.current?.destroy();
      lenisRef.current = null;
    };
  }, [options]);

  return {
    lenis: lenisRef.current,
  };
}


interface ContainerScrollAnimationContextValue {
  scrollYProgress: MotionValue<number>;
}
const ContainerScrollAnimationContext = React.createContext<
  ContainerScrollAnimationContextValue | undefined
>(undefined);

export function useContainerScrollAnimationContext() {
  const context = React.useContext(ContainerScrollAnimationContext);
  if (!context) {
    throw new Error(
      'useContainerScrollAnimationContext must be used within a ContainerScrollAnimationContextProvider',
    );
  }
  return context;
}

export function ContainerScrollAnimation({
  spacerClass,
  className,
  children,
  smooth = true,
  ...props
}: React.ComponentProps<'div'> & { spacerClass?: string; smooth?: boolean }) {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const rawProgress = useMotionValue(0);

  React.useEffect(() => {
    const target = scrollRef.current;
    if (!target) return;

    const container =
      target.closest('#main-scroll-container') ||
      document.getElementById('main-scroll-container');

    const updateProgress = () => {
      const targetRect = target.getBoundingClientRect();
      // When the top of target reaches the top of the viewport, scrolled = 0.
      // As the user scrolls down, target moves up, so -targetRect.top increases.
      const scrolled = -targetRect.top;
      const maxScroll = targetRect.height - window.innerHeight;

      if (maxScroll <= 0) {
        rawProgress.set(0);
        return;
      }

      const p = Math.min(1, Math.max(0, scrolled / maxScroll));
      rawProgress.set(p);
    };

    updateProgress();

    window.addEventListener('scroll', updateProgress, { passive: true });
    document.addEventListener('scroll', updateProgress, { passive: true });
    if (container) {
      container.addEventListener('scroll', updateProgress, { passive: true });
    }
    window.addEventListener('resize', updateProgress, { passive: true });

    return () => {
      window.removeEventListener('scroll', updateProgress);
      document.removeEventListener('scroll', updateProgress);
      if (container) {
        container.removeEventListener('scroll', updateProgress);
      }
      window.removeEventListener('resize', updateProgress);
    };
  }, [rawProgress]);

  const springProgress = useSpring(rawProgress, {
    damping: 30,
    stiffness: 90,
    mass: 0.25,
    restDelta: 0.0001,
  });

  const scrollYProgress = smooth ? springProgress : rawProgress;

  return (
    <ContainerScrollAnimationContext.Provider value={{ scrollYProgress }}>
      <div
        ref={scrollRef}
        className={cn('relative w-full', spacerClass || 'h-[180vh]', className)}
        {...props}
      >
        {children}
      </div>
    </ContainerScrollAnimationContext.Provider>
  );
}

export function ContainerScrollInsetX({
  insetRange = [48, 0],
  inputRange = [0, 1],
  className,
  style,
  ...props
}: HTMLMotionProps<'div'> & { insetRange?: number[]; inputRange?: number[] }) {
  const { scrollYProgress } = useContainerScrollAnimationContext();
  const xInset = useTransform(scrollYProgress, inputRange, insetRange);
  const clipPath = useMotionTemplate`inset(0px ${xInset}px)`;
  return (
    <motion.div
      className={className}
      style={{ clipPath, ...style }}
      {...props}
    />
  );
}
export function ContainerScrollInsetY({
  insetRange = [48, 0],
  inputRange = [0, 1],
  className,
  style,
  ...props
}: HTMLMotionProps<'div'> & { insetRange?: number[]; inputRange?: number[] }) {
  const { scrollYProgress } = useContainerScrollAnimationContext();
  const yInset = useTransform(scrollYProgress, inputRange, insetRange);
  const clipPath = useMotionTemplate`inset(${yInset}px 0px)`;
  return (
    <motion.div
      className={className}
      style={{ clipPath, ...style }}
      {...props}
    />
  );
}

export function ContainerScrollInset({
  inputRange = [0, 1],
  insetRangeY = [45, 0],
  insetXRange = [45, 0],
  roundednessRange = [16, 16],
  className,
  style,
  ...props
}: HTMLMotionProps<'div'> & {
  inputRange?: MapInputRange;
  insetRangeY?: unknown[];
  insetXRange?: unknown[];
  roundednessRange?: unknown[];
}) {
  const { scrollYProgress } = useContainerScrollAnimationContext();
  const insetY = useTransform(scrollYProgress, inputRange, insetRangeY);
  const insetX = useTransform(scrollYProgress, inputRange, insetXRange);
  const roundedness = useTransform(
    scrollYProgress,
    inputRange,
    roundednessRange,
  );

  const clipPath = useMotionTemplate`inset(${insetY}% ${insetX}% ${insetY}% ${insetX}% round ${roundedness}px)`;
  return (
    <motion.div
      className={className}
      style={{ clipPath, ...style }}
      {...props}
    />
  );
}

export function ContainerScrollTranslate({
  yRange = [0, 384],
  inputRange = [0, 1],
  style,
  className,
  ...props
}: HTMLMotionProps<'div'> & { yRange?: unknown[]; inputRange?: number[] }) {
  const { scrollYProgress } = useContainerScrollAnimationContext();
  const y = useTransform(scrollYProgress, inputRange, yRange);
  return (
    <motion.div
      style={{ y, ...style }}
      className={cn('relative', className)}
      {...props}
    />
  );
}

export function ContainerScrollScale({
  scaleRange = [1.2, 1],
  inputRange = [0, 1],
  className,
  style,
  ...props
}: HTMLMotionProps<'div'> & { scaleRange?: unknown[]; inputRange?: number[] }) {
  const { scrollYProgress } = useContainerScrollAnimationContext();
  const scale = useTransform(scrollYProgress, inputRange, scaleRange);
  return (
    <motion.div className={className} style={{ scale, ...style }} {...props} />
  );
}
export function ContainerScrollRadius({
  radiusRange = [9999, 16],
  inputRange = [0, 1],
  className,
  style,
  ...props
}: HTMLMotionProps<'div'> & {
  radiusRange?: unknown[];
  inputRange?: number[];
}) {
  const { scrollYProgress } = useContainerScrollAnimationContext();
  const borderRadius = useTransform(scrollYProgress, inputRange, radiusRange);
  return (
    <motion.div
      layout
      className={className}
      style={{ borderRadius, ...style }}
      {...props}
    />
  );
}
