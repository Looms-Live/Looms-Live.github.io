export default function Contact() {
  return (
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
  );
}