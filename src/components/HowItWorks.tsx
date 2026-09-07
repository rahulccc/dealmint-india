const steps = [
  {
    title: "Browse a category",
    body: "Start with Electronics, Fashion, Home & Kitchen, Beauty, or Books — whatever you need next.",
  },
  {
    title: "Read the why-buy note",
    body: "Every card includes a short, practical reason we think the product is worth considering.",
  },
  {
    title: "Buy on Amazon or Flipkart",
    body: "Compare and checkout on the retailer you prefer. Prices and stock are shown on their sites.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-2">
      <div className="mb-6">
        <h2 className="text-2xl font-bold tracking-tight text-ink-900">How it works</h2>
        <p className="mt-2 text-ink-600">Three simple steps from idea to checkout.</p>
      </div>
      <ol className="grid gap-4 sm:grid-cols-3">
        {steps.map((step, index) => (
          <li
            key={step.title}
            className="rounded-2xl border border-ink-200 bg-white p-5 shadow-sm"
          >
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-mint-600 text-sm font-bold text-white">
              {index + 1}
            </span>
            <h3 className="mt-3 text-lg font-semibold text-ink-900">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-600">{step.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
