import { HeroSection } from "../components/sections/HeroSection";
import LoveGallery from "@/components/LoveGallery";
import DoodleBackgroundDemo from "@/components/DoodleBg";
import FloatingNotes from "@/components/Butterfly";
import ShowtimeCountdown from "@/components/Curtain";
import DemoOne from "@/components/ui/demo";
import LanyardDemo from "@/components/ui/lanyard-demo";
import ScrollTriggerDemo from "@/components/ui/scroll-trigger-demo";


export default function Home() {
  return (
    <ShowtimeCountdown
      tickerText="HAPPY BIRTHDAY SWEETY ·"
      marqueeSub="forever yours, made with all my love for Sweety ❤️"
      showPreviewButton={true}
    >
      <div id="main-scroll-container" className="w-full max-w-[100vw] overflow-x-clip bg-zinc-50 dark:bg-black select-none">
        {/* Section 1: Intro Counter & Watermark Reveal */}
        <section id="section-1" className="h-[100dvh] min-h-[100dvh] w-full snap-start snap-always shrink-0 overflow-hidden relative z-10">
          <iframe
            src="/birthday.html"
            title="Birthday Reveal"
            className="w-full h-full border-none block"
            allow="autoplay"
          />
        </section>

        {/* Section 2: Hero Section */}
        <section id="section-2" className="h-[100dvh] min-h-[100dvh] w-full snap-start snap-always shrink-0 overflow-hidden relative z-10">
          <HeroSection />
        </section>

        {/* Section 3: Floating Notes & Draggable Love Gallery */}
        <section id="section-3" className="h-[100dvh] min-h-[100dvh] w-full snap-start snap-always shrink-0 overflow-hidden relative z-10">
          <FloatingNotes />
          <LoveGallery />
        </section>

        {/* Section 4: Scrapbook Album & Ambient Doodles */}
        <section id="section-4" className="h-[100dvh] min-h-[100dvh] w-full snap-start snap-always shrink-0 overflow-hidden relative z-10">
          <DoodleBackgroundDemo />
        </section>

        {/* Section 5: Perspective Zoom Gallery */}
        <section id="section-5" className="w-full shrink-0 relative z-10 bg-black">
          <ScrollTriggerDemo />
        </section>

        {/* Section 6: Ink Reveal */}
        <section id="section-6" className="h-[100dvh] min-h-[100dvh] w-full snap-start snap-always shrink-0 overflow-hidden relative z-10">
          <DemoOne />
        </section>

        {/* Section 7: Lanyard Badge */}
        <section id="section-7" className="h-[100dvh] min-h-[100dvh] w-full snap-start snap-always shrink-0 overflow-hidden relative z-10">
          <LanyardDemo />
        </section>

        {/* Section 8: iMessage Finale */}
        <section id="section-8" className="h-[100dvh] min-h-[100dvh] w-full snap-start snap-always shrink-0 overflow-hidden relative z-10">
          <iframe
            src="/last.html"
            title="Birthday Finale Message"
            className="w-full h-full border-none block"
            allow="autoplay"
          />
        </section>
      </div>
    </ShowtimeCountdown>
  );
}
