"use client";

import Image from "next/image";
export default function Home() {
  // ...existing code...

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
      {/* Navbar */}
      <nav className="w-full h-16 flex items-center justify-between px-10 fixed top-0 left-0 z-50 shadow-sm bg-[#23232a] border-b border-[var(--color-light)]">
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
        <div className="flex gap-6 items-center">
          <a href="#features" className="hover:underline">
            Features
          </a>
          <a href="#testimonials" className="hover:underline">
            Testimonials
          </a>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
          {/* Theme switcher removed */}
        </div>
      </nav>
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
      {/* Features Section */}
      <section
        id="features"
        className="w-full py-24 px-4 flex flex-col items-center bg-[#23232a]"
      >
        <h2 className="text-4xl font-bold mb-12 text-[var(--color-primary)] animate-fade-in">
          Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
          <div className="rounded-2xl p-8 bg-[var(--color-light)] shadow-lg animate-slide-up">
            <h3 className="text-xl font-semibold mb-2 text-[var(--color-primary)]">
              Automated Workflows
            </h3>
            <p className="text-base text-[var(--color-primary)]">
              Let AI handle repetitive tasks and free your team for creative
              work.
            </p>
          </div>
          <div className="rounded-2xl p-8 bg-[var(--color-accent)] shadow-lg animate-slide-up">
            <h3 className="text-xl font-semibold mb-2 text-[var(--color-dark)]">
              Intelligent Insights
            </h3>
            <p className="text-base text-[var(--color-dark)]">
              Get actionable analytics and recommendations powered by machine
              learning.
            </p>
          </div>
          <div className="rounded-2xl p-8 bg-[var(--color-secondary)] shadow-lg animate-slide-up">
            <h3 className="text-xl font-semibold mb-2 text-[var(--color-light)]">
              Personalized Experiences
            </h3>
            <p className="text-base text-[var(--color-light)]">
              Deliver tailored interactions to every customer, at scale.
            </p>
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="w-full py-24 px-4 flex flex-col items-center bg-[#23232a]"
      >
        <h2 className="text-4xl font-bold mb-12 text-[var(--color-primary)] animate-fade-in">
          Testimonials
        </h2>
        <div className="space-y-8 w-full max-w-3xl">
          <blockquote className="rounded-xl p-8 bg-[var(--color-accent)] shadow animate-fade-in">
            <p className="text-lg italic text-[var(--color-dark)]">
              “Looms Live’s AI agents have revolutionized our workflow. We’re
              faster, smarter, and more responsive than ever.”
            </p>
            <footer className="mt-2 text-sm text-[var(--color-primary)]">
              — Happy Client
            </footer>
          </blockquote>
          <blockquote className="rounded-xl p-8 bg-[var(--color-secondary)] shadow animate-fade-in">
            <p className="text-lg italic text-[var(--color-light)]">
              “The automation and insights are game-changing. Highly
              recommended!”
            </p>
            <footer className="mt-2 text-sm text-[var(--color-light)]">
              — Satisfied Customer
            </footer>
          </blockquote>
        </div>
      </section>
      {/* Contact Section */}
      <section
        id="contact"
        className="w-full py-24 px-4 flex flex-col items-center bg-[#23232a]"
      >
        <h2 className="text-4xl font-bold mb-8 text-[var(--color-primary)] animate-fade-in">
          Contact Us
        </h2>
        <form className="flex flex-col gap-4 w-full max-w-md mx-auto animate-fade-in">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 rounded border border-[var(--color-light)] bg-white text-[var(--color-primary)]"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded border border-[var(--color-light)] bg-white text-[var(--color-primary)]"
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            className="p-3 rounded border border-[var(--color-light)] bg-white text-[var(--color-primary)]"
          />
          <button
            type="submit"
            className="mt-4 px-6 py-3 rounded-lg font-semibold bg-[var(--color-primary)] text-[var(--color-light)] hover:shadow-[0_0_16px_4px_var(--color-primary)] transition"
          >
            Send Message
          </button>
        </form>
        <div className="mt-8 text-sm text-[var(--color-primary)] animate-fade-in">
          <p>Email: contact@loomslive.com</p>
          <p>
            Follow us:
            <a href="https://twitter.com/loomslive" className="ml-2 underline">
              Twitter
            </a>
            <a
              href="https://linkedin.com/company/loomslive"
              className="ml-2 underline"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </section>
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
