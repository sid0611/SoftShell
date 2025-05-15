import React from "react";

const reasons = [
  {
    icon: "🔒",
    title: "Secure & Trusted",
    description: "Your license data is encrypted and handled with care.",
  },
  {
    icon: "⚡",
    title: "Fast Payouts",
    description: "We process payments quickly after license approval.",
  },
  {
    icon: "💼",
    title: "Business-Friendly",
    description: "Ideal for companies with extra licenses to monetize.",
  },
  {
    icon: "🧑‍💻",
    title: "Support On-Demand",
    description: "Got questions? Our team is always here to help.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-900 dark:text-gray-100">
          Why Choose SoftSell?
        </h2>
        <div className="grid gap-8 md:grid-cols-4 sm:grid-cols-2">
          {reasons.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-lg shadow-md hover:shadow-xl transition border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
