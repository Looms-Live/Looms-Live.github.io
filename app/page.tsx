"use client";


"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const isLight = theme === 'light';
  const bgColor = isLight ? '#F9FAFB' : '#121212';
  const textColor = isLight ? '#1F3C88' : '#E0E0E0';
  const cardBg = isLight ? 'rgba(46,196,182,0.08)' : 'rgba(46,196,182,0.1)';
  const mainGradient = isLight
    ? 'linear-gradient(135deg, #F9FAFB 60%, #2EC4B6 100%)'
    : 'linear-gradient(135deg, #121212 60%, #2EC4B6 100%)';

  return (
    <>
      <div style={{
        position: 'absolute',
        top: 24,
        right: 32,
        zIndex: 10,
      }}>
        <button
          onClick={() => setTheme(isLight ? 'dark' : 'light')}
          style={{
            background: isLight ? '#E0E0E0' : '#2EC4B6',
            color: isLight ? '#1F3C88' : '#121212',
            border: 'none',
            borderRadius: '20px',
            padding: '0.5rem 1.2rem',
            fontWeight: 600,
            fontSize: '1rem',
            cursor: 'pointer',
            boxShadow: '0 2px 8px 0 rgba(46,196,182,0.10)',
            transition: 'background 0.2s',
          }}
          aria-label={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
        >
          {isLight ? '🌙 Dark' : '☀️ Light'}
        </button>
      </div>
      <main style={{
        minHeight: '100vh',
        background: mainGradient,
        color: textColor,
        fontFamily: 'Segoe UI, Arial, sans-serif',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0',
        transition: 'background 0.3s, color 0.3s',
      }}>
        <div style={{
          background: cardBg,
          borderRadius: '24px',
          boxShadow: '0 8px 32px 0 rgba(31,60,136,0.2)',
          padding: '48px 32px',
          maxWidth: '480px',
          textAlign: 'center',
        }}>
          <h1 style={{
            fontSize: '2.8rem',
            fontWeight: 700,
            marginBottom: '1rem',
            color: isLight ? '#2EC4B6' : '#2EC4B6',
            letterSpacing: '2px',
          }}>
            Looms Live
          </h1>
          <h2 style={{
            fontSize: '1.4rem',
            fontWeight: 400,
            marginBottom: '2rem',
            color: textColor,
          }}>
            Empowering Businesses to Connect, Create, and Grow
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: textColor,
            marginBottom: '2.5rem',
          }}>
            Looms Live is your partner in digital transformation. We deliver innovative solutions for modern companies, helping you reach new heights in engagement and productivity.
          </p>
          <a href="#contact" style={{
            display: 'inline-block',
            background: isLight ? '#2EC4B6' : '#9B5DE5',
            color: isLight ? '#1F3C88' : '#E0E0E0',
            fontWeight: 600,
            padding: '0.75rem 2rem',
            borderRadius: '8px',
            textDecoration: 'none',
            fontSize: '1.1rem',
            boxShadow: '0 2px 8px 0 rgba(46,196,182,0.15)',
            transition: 'background 0.2s',
          }}
          >
            Get Started
          </a>
        </div>
        <footer style={{
          marginTop: '3rem',
          color: textColor,
          fontSize: '0.95rem',
          opacity: 0.7,
        }}>
          &copy; {new Date().getFullYear()} Looms Live. All rights reserved.
        </footer>
  </main>
      <div className="flex gap-4 items-center flex-col sm:flex-row">
        <a
          className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="dark:invert"
            src="/vercel.svg"
            alt="Vercel logomark"
            width={20}
            height={20}
          />
          Deploy now
        </a>
        <a
          className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read our docs
        </a>
      </div>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </>
  );
}
