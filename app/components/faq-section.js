export default function FAQSection() {
  const faqs = [
    {
      question: "Are the items washed?",
      answer:
        "All bundles are pre-sorted, but we recommend washing items before use.",
    },
    {
      question: "Can I choose individual items?",
      answer:
        "No, items are sold as bundle drops. Selection happens in-store per branch.",
    },
    {
      question: "Which branch has new arrivals?",
      answer:
        "New bundle arrivals vary per branch. Follow our updates to know where the latest drops are available.",
    },
    {
      question: "Do you accept reservations?",
      answer:
        "Reservations depend on availability. Please contact the branch directly.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept cash, GCash, and other available payment methods in-store.",
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-sm text-gray-500 uppercase tracking-wide">
            Questions
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group border rounded-xl p-5 cursor-pointer"
            >
              <summary className="flex justify-between items-center font-medium">
                {faq.question}
                <span className="transition group-open:rotate-45 text-xl">
                  +
                </span>
              </summary>

              <p className="mt-3 text-gray-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
