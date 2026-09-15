const faqs = [
  {
    q: "Where is 1066 Ruppert Rd located?",
    a: "1066 Ruppert Rd is in the heart of Marco Island, Florida (34145), with quick and direct access to the Gulf of Mexico by boat.",
  },
  {
    q: "How many bedrooms and bathrooms does the home have?",
    a: "The home has 5 bedrooms and 3 full bathrooms across approximately 3,307 square feet of living space.",
  },
  {
    q: "Does the home have solar power?",
    a: "Yes — the property includes a solar-panel system with battery backup, providing added energy resilience and efficiency for Florida homeowners.",
  },
  {
    q: "How do I schedule a private showing?",
    a: "Contact Manuela Schinagl of Manuela Realty International at 239-450-5622 or manuelarealty@gmail.com, or use the inquiry form on this page.",
  },
  {
    q: "What is the Marco Island lifestyle like near this home?",
    a: "Residents enjoy quick proximity to white-sand beaches, boating and direct gulf access, golf courses, fine dining, shopping, and the natural beauty of the Gulf Coast.",
  },
];

export function Faq() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: {
        "@type": "Answer",
        text: a,
      },
    })),
  };

  return (
    <section className="bg-slate-50 px-6 py-20 md:px-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
          Frequently Asked Questions
        </p>
        <h2 className="mt-2 font-serif text-3xl text-slate-900 md:text-4xl">
          Common questions about this Marco Island home
        </h2>

        <dl className="mt-8 divide-y divide-slate-200">
          {faqs.map(({ q, a }) => (
            <div key={q} className="py-6">
              <dt className="text-lg font-semibold text-slate-900">{q}</dt>
              <dd className="mt-2 text-slate-600">{a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
