"use client";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Vision from "./components/Vision";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main
      className="min-h-screen font-sans relative"
      style={{ background: "#23232a", color: "var(--foreground)" }}
    >
      {/* Subtle color overlay for hero background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(circle at 30% 40%, var(--color-accent) 0%, transparent 60%)," +
            "radial-gradient(circle at 70% 60%, var(--color-secondary) 0%, transparent 60%)," +
            "radial-gradient(circle at 50% 80%, var(--color-primary) 0%, transparent 70%)",
          opacity: 0.18,
          width: "100%",
          height: "100%",
        }}
      />
      <Navbar />
      {/* Hero Section */}
      <section
        className="w-full min-h-[80vh] flex flex-col items-center justify-center text-center pt-24 pb-16 px-4 bg-[#23232a]"
        style={{ color: "var(--color-light)" }}
      >
        <h1
          className="text-6xl font-extrabold mb-6 tracking-tight animate-fade-in"
          style={{ color: "var(--color-accent)" }}
        >
          AI Agents for Modern Business
        </h1>
        <h2
          className="text-2xl font-medium mb-8 animate-fade-in"
          style={{ color: "var(--color-light)" }}
        >
          Supercharge your workflow with Looms Live
        </h2>
        <p
          className="max-w-xl mb-10 text-lg animate-fade-in"
          style={{ color: "var(--color-light)" }}
        >
          Looms Live delivers advanced SaaS AI agents to automate, optimize, and
          elevate your business operations. Experience the future of
          productivity and customer engagement.
        </p>
        <a
          href="#contact"
          className="inline-block font-semibold px-8 py-3 rounded-lg shadow bg-[var(--color-accent)] text-[var(--color-primary)] hover:shadow-[0_0_16px_4px_var(--color-accent)] transition animate-fade-in"
        >
          Get Started
        </a>
      </section>
      <Vision />
      <Products />
      <Contact />
      {/* Footer */}
      <footer className="w-full py-8 text-center text-sm opacity-70 text-[var(--color-primary)] bg-[#23232a] border-t border-[var(--color-light)]">
        &copy; {new Date().getFullYear()} Looms Live. All rights reserved. |{" "}
        <a href="/privacy" className="underline">
          Privacy Policy
        </a>
      </footer>
      {/* Animations */}
      <style>{`
        .animate-fade-in {
          animation: fadeIn 1s ease;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-up {
          animation: slideUp 1s cubic-bezier(.77,0,.175,1);
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(48px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </main>
  );
}
