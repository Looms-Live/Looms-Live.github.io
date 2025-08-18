"use client";


"use client";
import Image from "next/image";
import { useState, useRef } from "react";

export default function Home() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [animating, setAnimating] = useState(false);
  const [wipeProgress, setWipeProgress] = useState(1); // 0 to 1
  const [wipeDirection, setWipeDirection] = useState<'left' | 'right'>('left');
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  let isLight = theme === 'light';
  // Tailwind classes for theme
  const navBgClass = isLight ? 'bg-[#F9FAFB] border-b border-[#E0E0E0]' : 'bg-[#121212] border-b border-[#222]';
  const navTextClass = isLight ? 'text-[#1F3C88]' : 'text-[#E0E0E0]';
  const btnBgClass = isLight ? 'bg-[#E0E0E0] text-[#1F3C88]' : 'bg-[#2EC4B6] text-[#121212]';
  const mainBgClass = isLight ? 'bg-[#F9FAFB]' : 'bg-[#121212]';
  const cardBgClass = isLight ? 'bg-[#2ec4b617]' : 'bg-[#2ec4b61a]';
  const textClass = isLight ? 'text-[#1F3C88]' : 'text-[#E0E0E0]';
  const linkBgClass = isLight ? 'bg-[#2EC4B6] text-[#1F3C88]' : 'bg-[#9B5DE5] text-[#E0E0E0]';

  // Wipe animation handler
  const handleThemeSwitch = () => {
    setWipeDirection(isLight ? 'left' : 'right');
    setAnimating(true);
    let start: number | null = null;
    const duration = 700;
    interface AnimateWipeParams {
      ts: number;
    }

    function animateWipe(ts: number): void {
      if (!start) start = ts;
      const elapsed: number = ts - (start as number);
      let progress: number = Math.min(elapsed / duration, 1);
      setWipeProgress(progress);
      if (progress < 1) {
      requestAnimationFrame(animateWipe);
      } else {
      setTheme(isLight ? 'dark' : 'light');
      setAnimating(false);
      setWipeProgress(1);
      }
    }
    setWipeProgress(0);
    requestAnimationFrame(animateWipe);
  };

  return (
    <>
  {/* No overlay needed, gradient animates in real time */}
      {/* Navbar */}
      <nav className={`w-full h-16 flex items-center justify-between px-10 fixed top-0 left-0 z-50 shadow-sm transition-all duration-700 ${navBgClass}`}>
        <div className="flex items-center gap-4">
          <Image src="/company.png" alt="Company Logo" width={40} height={40} className="rounded-lg" />
          <span className={`font-bold text-xl tracking-wide transition-colors duration-700 ${navTextClass}`}>Looms Live</span>
        </div>
        <button
          onClick={handleThemeSwitch}
          className={`rounded-full px-4 py-2 font-semibold text-base shadow transition-all duration-700 ${btnBgClass} hover:shadow-[0_0_16px_4px_#2EC4B6]`}
          aria-label={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
        >
          {isLight ? '🌙 Dark' : '☀️ Light'}
        </button>
      </nav>
      {/* Spacer for navbar */}
      <div style={{ height: '64px' }} />
  <main className={`min-h-screen flex flex-col items-center justify-center font-sans transition-all duration-700 ${mainBgClass} ${textClass}`}>
  <div className={`rounded-3xl shadow-lg px-8 py-12 max-w-lg text-center transition-all duration-700 ${cardBgClass}`}>
          <h1 className="text-4xl font-bold mb-4 text-[#2EC4B6] tracking-wide transition-colors duration-700">Looms Live</h1>
          <h2 className={`text-lg font-normal mb-8 transition-colors duration-700 ${textClass}`}>Empowering Businesses to Connect, Create, and Grow</h2>
          <p className={`text-base mb-10 transition-colors duration-700 ${textClass}`}>Looms Live is your partner in digital transformation. We deliver innovative solutions for modern companies, helping you reach new heights in engagement and productivity.</p>
          <a href="#contact" className={`inline-block font-semibold px-8 py-3 rounded-lg shadow transition-all duration-700 ${linkBgClass}`}>Get Started</a>
        </div>
        <footer className={`mt-12 text-sm opacity-70 transition-colors duration-700 ${textClass}`}>
          &copy; {new Date().getFullYear()} Looms Live. All rights reserved.
        </footer>
  </main>
    </>
  );
}
