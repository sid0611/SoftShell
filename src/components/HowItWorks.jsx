import React from "react";

const steps = [
  {
    title: "Upload License",
    icon: "📤",
    description: "Submit your unused software licenses easily with our secure upload.",
  },
  {
    title: "Get Valuation",
    icon: "📈",
    description: "We assess your license’s value and send you a fair offer.",
  },
  {
    title: "Get Paid",
    icon: "💰",
    description: "Accept the offer and receive instant payment securely.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 px-4 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-900 dark:text-gray-100">
          How It Works
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <div className="text-5xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
                {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

