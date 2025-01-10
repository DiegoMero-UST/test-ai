'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    error: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ submitted: false, submitting: true, error: false });

    try {
      // Replace with your actual API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to submit');
      
      setStatus({ submitted: true, submitting: false, error: false });
      setFormData({ name: '', email: '', message: '' });
    }catch {
      setStatus({ submitted: false, submitting: false, error: true });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  return (
    <section className="pb-20 pt-64 px-5">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-blue-800 text-transparent bg-clip-text lg:text-6xl">
          Get in Touch
        </h2>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Name Input */}
          <div>
            <label 
              htmlFor="name" 
              className="block text-gray-700 text-sm font-medium mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
              placeholder="Your name"
            />
          </div>

          {/* Email Input */}
          <div>
            <label 
              htmlFor="email" 
              className="block text-gray-700 text-sm font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
              placeholder="your@email.com"
            />
          </div>

          {/* Message Input */}
          <div>
            <label 
              htmlFor="message" 
              className="block text-gray-700 text-sm font-medium mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              required
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none resize-none"
              placeholder="How can we help you?"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status.submitting}
            className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {status.submitting ? 'Sending...' : 'Send Message'}
          </button>

          {/* Status Messages */}
          {status.submitted && (
            <p className="text-green-600 text-center">
              Thank you for your message! We&apos;ll get back to you soon.
            </p>
          )}
          {status.error && (
            <p className="text-red-600 text-center">
              Something went wrong. Please try again later.
            </p>
          )}
        </form>
      </div>
    </section>
  );
} 