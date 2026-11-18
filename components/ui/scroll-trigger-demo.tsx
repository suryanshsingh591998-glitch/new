'use client';

import * as React from 'react';
import { motion, useTransform } from 'motion/react';
import {
  ContainerScrollAnimation,
  ContainerScrollInsetX,
  ContainerScrollScale,
  ContainerScrollTranslate,
  useContainerScrollAnimationContext,
} from '@/components/ui/scroll-trigger-animations';

const IMAGES_1 = [
  '/ref/girl1.jpg',
  '/ref/girl2.jpg',
  '/ref/girl3.jpg',
  '/ref/girl4.jpg',
];
const IMAGES_2 = [
  '/ref/girl.jpg',
  '/ref/girl5.jpg',
  '/ref/girl6.jpg',
  '/ref/girl7.jpg',
];
const IMAGES_3 = [
  '/ref/girl8.jpg',
  '/ref/girl9.jpg',
  '/ref/girl10.jpg',
  '/ref/girl11.jpg',
];

function SmoothSideColumn({
  children,
  className = '',
  yRange = ['-10%', '0%'],
  opacityRange = [0, 0.45, 1],
}: {
  children: React.ReactNode;
  className?: string;
  yRange?: string[];
  opacityRange?: number[];
}) {
  const { scrollYProgress } = useContainerScrollAnimationContext();
  const y = useTransform(scrollYProgress, [0, 1], yRange);
  // Silky progressive fade in so the peripheral columns don't pop into view abruptly
  const opacity = useTransform(scrollYProgress, [0, 0.22, 0.65], opacityRange);

  return (
    <motion.div
      style={{ y, opacity, willChange: 'transform, opacity' }}
      className={`flex flex-col gap-2 flex-1 ${className}`}
    >
      {children}
    </motion.div>
  );
}

export default function ScrollTriggerDemo() {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <ContainerScrollAnimation
      className="relative w-full"
      spacerClass="h-[180vh]"
    >
      <div className="sticky top-0 h-dvh w-full overflow-hidden flex items-center justify-center bg-black">
        <ContainerScrollInsetX insetRange={[0, 0]} className="h-full w-full relative">
          <ContainerScrollScale
            inputRange={[0, 0.25, 0.7, 0.92]}
            scaleRange={isMobile ? [3.05, 2.25, 1.4, 1] : [3.45, 2.7, 1.35, 1]}
            style={{
              transformOrigin: 'center center',
              willChange: 'transform',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
            }}
            className="flex bg-black gap-1.5 sm:gap-2 overflow-hidden px-2 sm:px-4 md:px-6 h-full items-center justify-center w-full"
          >
            <SmoothSideColumn opacityRange={[0, 0.45, 1]} yRange={['-10%', '0%']}>
              {IMAGES_1.map((imageUrl, index) => (
                <img
                  key={index}
                  className="aspect-[3/4] md:aspect-[4/2.5] inline-block align-middle h-auto max-h-full w-full object-cover rounded-md"
                  src={imageUrl}
                  alt="Birthday Girl Sweety"
                />
              ))}
            </SmoothSideColumn>

            <ContainerScrollTranslate
              yRange={['0%', '0%']}
              className={`flex ${isMobile ? 'mt-[-12%]' : 'mt-[-20%]'} relative flex-col gap-1.5 sm:gap-2 flex-1`}
            >
              {IMAGES_2.map((imageUrl, index) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={index}
                  className="aspect-[3/4] md:aspect-[4/2.5] inline-block align-middle h-auto max-h-full w-full object-cover object-[center_20%] rounded-md"
                  src={imageUrl}
                  alt="Birthday Girl Sweety"
                />
              ))}
            </ContainerScrollTranslate>

            <SmoothSideColumn opacityRange={[0, 0.45, 1]} yRange={['-10%', '0%']}>
              {IMAGES_3.map((imageUrl, index) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={index}
                  className="aspect-[3/4] md:aspect-[4/2.5] inline-block align-middle h-auto max-h-full w-full object-cover rounded-md"
                  src={imageUrl}
                  alt="Birthday Girl Sweety"
                />
              ))}
            </SmoothSideColumn>
          </ContainerScrollScale>
        </ContainerScrollInsetX>
      </div>
    </ContainerScrollAnimation>
  );
}
