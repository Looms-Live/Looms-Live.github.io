"use client";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full h-16 flex items-center justify-between px-4 md:px-10 fixed top-0 left-0 z-50 shadow-sm bg-[#23232ae6] backdrop-blur-md border-none">
      <div className="flex items-center gap-4">
        <Image
          src="/company.png"
          alt="Company Logo"
          width={40}
          height={40}
          className="rounded-lg"
        />
        <span className="font-bold text-xl tracking-wide text-[var(--color-primary)] dark:text-[var(--color-light)]">
          Looms Live
        </span>
      </div>
      <div className="hidden md:flex gap-6 items-center">
        <a href="#vision" className="hover:underline">
          Vision
        </a>
        <a href="#products" className="hover:underline">
          Products
        </a>
        <a href="#contact" className="hover:underline">
          Contact
        </a>
      </div>
      <button
        className="md:hidden flex items-center justify-center w-10 h-10"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className="block w-6 h-0.5 bg-[var(--color-primary)] mb-1"></span>
        <span className="block w-6 h-0.5 bg-[var(--color-primary)] mb-1"></span>
        <span className="block w-6 h-0.5 bg-[var(--color-primary)]"></span>
      </button>
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#23232ae6] backdrop-blur-md flex flex-col items-center py-4 md:hidden z-50">
          <a
            href="#products"
            className="py-2 text-lg w-full text-center hover:underline"
            onClick={() => setMenuOpen(false)}
          >
            Products
          </a>
          <a
            href="#vision"
            className="py-2 text-lg w-full text-center hover:underline"
            onClick={() => setMenuOpen(false)}
          >
            Vision
          </a>
          <a
            href="#contact"
            className="py-2 text-lg w-full text-center hover:underline"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}