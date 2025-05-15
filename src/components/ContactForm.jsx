import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    licenseType: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.includes("@")) newErrors.email = "Valid email required";
    if (!formData.company.trim()) newErrors.company = "Company is required";
    if (!formData.licenseType) newErrors.licenseType = "Select a license type";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted, have a happy day!");
      console.log(formData);
      setFormData({
        name: "",
        email: "",
        company: "",
        licenseType: "",
        message: "",
      });
      setErrors({});
    }
  };

return (
    <section className="py-16 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-gray-100">
          Get in Touch
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded p-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-700"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>
          <div>
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded p-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-700"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>
          <div>
            <input
              name="company"
              type="text"
              placeholder="Your Company"
              value={formData.company}
              onChange={handleChange}
              className="w-full border rounded p-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-700"
            />
            {errors.company && (
              <p className="text-red-500 text-sm">{errors.company}</p>
            )}
          </div>
          <div>
            <select
              name="licenseType"
              value={formData.licenseType}
              onChange={handleChange}
              className="w-full border rounded p-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-700"
            >
              <option value="">Select License Type</option>
              <option value="Operating System">Operating System</option>
              <option value="Antivirus">Antivirus</option>
              <option value="Productivity Suite">Productivity Suite</option>
              <option value="Other">Other</option>
            </select>
            {errors.licenseType && (
              <p className="text-red-500 text-sm">{errors.licenseType}</p>
            )}
          </div>
          <div>
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border rounded p-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-700"
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="bg-blue-600 dark:bg-blue-700 text-white px-6 py-3 rounded hover:bg-blue-700 dark:hover:bg-blue-800 w-full"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
