import React, { useState } from "react";

const faqList = [
  {
    question: "How are You?",
    answer: "I am good! What about you? I am here to help you with your queries.",
  },
  {
    question: "Is SoftSell safe to use?",
    answer:
      "Yes, SoftSell uses secure transactions and verifies every license to ensure trust and safety.",
  },
  {
    question: "Hey?",
    answer: "Hello User!",
  },
  {
    question: "How do I get paid?",
    answer:
      "Once your license is verified and sold, the payment will be processed to your registered UPI or bank account within 3-5 business days.",
  },
];

const getAnswer = (msg) => {
  const found = faqList.find(
    (faq) => faq.question.toLowerCase() === msg.toLowerCase().trim()
  );
  return found ? found.answer : "Sorry, I don't have an answer for that.";
};

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-4 right-4 w-80 h-96 flex flex-col bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg">
      <header className="bg-blue-600 dark:bg-blue-700 text-white p-4 rounded-t-lg flex justify-between items-center">
        <h3 className="font-semibold">Chat with us</h3>
        <button
          aria-label="Close chat"
          className="text-white hover:text-gray-200 cursor-pointer"
          onClick={() => setIsOpen(false)}
        >
          Close
        </button>
      </header>

      <div className="flex-grow p-4 overflow-y-auto text-gray-900 dark:text-gray-100">
      </div>

      <form className="p-4 border-t border-gray-300 dark:border-gray-700 flex space-x-2">
        <input
          type="text"
          placeholder="Type your message..."
          className="flex-grow rounded border border-gray-300 dark:border-gray-600 p-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-600 dark:bg-blue-700 text-white px-4 rounded hover:bg-blue-700 dark:hover:bg-blue-800"
        >
          Send
        </button>
      </form>
    </div>
  );
}
