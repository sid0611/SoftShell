import React from "react";

const testimonials = [
  {
    name: "Anjali Mehta",
    role: "IT Manager",
    company: "TechNova Inc.",
    feedback:
      "SoftSell made it incredibly easy to turn our unused licenses into real value. Fast, secure, and totally seamless!",
  },
  {
    name: "Rahul Sharma",
    role: "Procurement Lead",
    company: "CodeSphere Solutions",
    feedback:
      "We had old software just sitting idle. Thanks to SoftSell, we recovered costs we thought were lost forever!",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-900 dark:text-gray-100">
          What Our Clients Say
        </h2>
        <div className="space-y-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 shadow-md p-6 rounded-lg border border-gray-200 dark:border-gray-700 max-w-2xl mx-auto"
            >
              <p className="text-gray-700 dark:text-gray-300 italic mb-4">“{t.feedback}”</p>
              <h4 className="font-semibold text-lg text-gray-900 dark:text-gray-100">
                {t.name}{" "}
                <span className="text-gray-500 dark:text-gray-400 text-sm">
                  — {t.role}, {t.company}
                </span>
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
