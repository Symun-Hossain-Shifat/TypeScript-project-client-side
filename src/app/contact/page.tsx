'use client'
import React, { FC, useState, FormEvent, ChangeEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactPage: FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., API route call)
    console.log('Form data submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      {/* Hero Header */}
      <section className="bg-neutral-900 text-white py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-3">
            Contact <span className="text-orange-500">Trendy Haat</span>
          </h1>
          <p className="text-gray-300 max-w-xl mx-auto text-base">
            Got questions, feedback, or business inquiries? We're here to help you navigate the marketplace.
          </p>
        </div>
      </section>

      {/* Main Grid Content */}
      <section className="max-w-6xl mx-auto py-12 px-6 grid md:grid-cols-5 gap-12">
        {/* Left Column: Info cards */}
        <div className="md:col-span-2 space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-neutral-900 mb-2">Get in Touch</h2>
            <p className="text-gray-600 text-sm">
              Reach out through any of these channels, and our support team will get back to you within 24 hours.
            </p>
          </div>

          <div className="space-y-4">
            {/* Email Box */}
            <div className="p-5 bg-white rounded-xl border border-gray-100 shadow-sm flex items-start gap-4">
              <span className="text-2xl text-orange-500">✉</span>
              <div>
                <h3 className="font-semibold text-neutral-950 text-sm">Email Us</h3>
                <p className="text-xs text-gray-500 mb-1">For support or inquiries:</p>
                <a href="mailto:support@trendyhaat.com" className="text-orange-600 hover:underline font-medium text-sm">
                  support@trendyhaat.com
                </a>
              </div>
            </div>

            {/* Location Box */}
            <div className="p-5 bg-white rounded-xl border border-gray-100 shadow-sm flex items-start gap-4">
              <span className="text-2xl text-orange-500">📍</span>
              <div>
                <h3 className="font-semibold text-neutral-950 text-sm">Our Hub</h3>
                <p className="text-xs text-gray-500 mb-1">Operating digitally from:</p>
                <p className="text-gray-600 text-sm font-medium">Dhaka, Bangladesh</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Form */}
        <div className="md:col-span-3 bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm">
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                ✓
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">Message Sent!</h3>
              <p className="text-gray-600 text-sm max-w-sm mx-auto mb-6">
                Thank you for messaging Trendy Haat. We have received your query and will reply shortly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-orange-600 hover:text-orange-700 font-medium text-sm border border-orange-200 px-4 py-2 rounded-lg"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-orange-500"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-orange-500"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-semibold text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-orange-500"
                  placeholder="Order Inquiry / Vendor Request"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-orange-500 resize-none"
                  placeholder="Write your message here..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium text-sm py-2.5 rounded-lg shadow-sm transition-colors"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};

export default ContactPage;