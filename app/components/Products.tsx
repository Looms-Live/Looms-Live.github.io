export default function Products() {
  return (
    <section
      id="products"
      className="w-full py-24 px-0 flex flex-col items-center relative"
      style={{
        background: "rgba(35,35,42,0.7)",
        backdropFilter: "blur(2px)",
      }}
    >
      <h2 className="text-4xl font-bold mb-12 text-[var(--color-primary)] animate-fade-in">
        Products
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full px-4 md:px-16">
        <div className="rounded-2xl p-8 bg-[var(--color-light)] shadow-lg animate-slide-up">
          <h3 className="text-xl font-semibold mb-2 text-[var(--color-primary)]">
            Looms Agent Pro
          </h3>
          <p className="text-base text-[var(--color-primary)]">
            Our flagship AI agent for automating complex workflows and
            boosting productivity across your organization.
          </p>
        </div>
        <div className="rounded-2xl p-8 bg-[var(--color-accent)] shadow-lg animate-slide-up">
          <h3 className="text-xl font-semibold mb-2 text-[var(--color-dark)]">
            Looms Insights
          </h3>
          <p className="text-base text-[var(--color-dark)]">
            Advanced analytics and actionable insights powered by machine
            learning, tailored for your business needs.
          </p>
        </div>
        <div className="rounded-2xl p-8 bg-[var(--color-secondary)] shadow-lg animate-slide-up">
          <h3 className="text-xl font-semibold mb-2 text-[var(--color-light)]">
            Looms Engage
          </h3>
          <p className="text-base text-[var(--color-light)]">
            Personalized customer engagement at scale, driven by intelligent
            automation and real-time data.
          </p>
        </div>
      </div>
    </section>
  );
}