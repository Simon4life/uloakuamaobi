"use client";

import React from "react";

export default function ContactPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-gray-50 font-sans text-gray-800 dark:text-gray-200">
      {/* Main */}
      <main className="flex-grow">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          {/* Title */}
          <div className="text-center">
            <h2 className="text-4xl sm:text-5xl font-bold font-display text-gray-900 dark:text-white">
              Get in Touch
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              For any questions, comments or concerns, feel free to enter your name and contact information. Any input or feedback is greatly appreciated!
            </p>
          </div>

          {/* Grid */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white dark:bg-gray-900/50 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold font-display text-gray-900 dark:text-white">
                Contact Form
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Fill out the form and we'll get back to you as soon as possible.
              </p>
              <form className="mt-8 space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="mt-1 p-2 block w-full rounded-md border-gray-300 dark:border-gray-700 bg-background-light dark:bg-background-dark shadow-sm focus:border-[#3b82f6] focus:ring-[#3b82f6] sm:text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 bg-background-light dark:bg-background-dark shadow-sm focus:border-[#3b82f6] focus:ring-[#3b82f6] sm:text-sm p-2"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Inquiry Type
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="mt-1 p-2 block w-full rounded-md border-gray-300 dark:border-gray-700 bg-background-light dark:bg-background-dark shadow-sm focus:border-[#3b82f6] focus:ring-[#3b82f6] sm:text-sm"
                  >
                    <option>General Inquiry</option>
                    <option>Press & Media</option>
                    <option>Author Event Booking</option>
                    <option>Feedback</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 bg-background-light dark:bg-background-dark shadow-sm focus:border-[#3b82f6] focus:ring-[#3b82f6] sm:text-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#3b82f6] hover:bg-[#3b82f6]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3b82f6] dark:focus:ring-offset-background-dark transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info + Social */}
            <div className="space-y-8">
              <div className="bg-white dark:bg-gray-900/50 p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold font-display text-gray-900 dark:text-white">
                  Contact Information
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  For direct inquiries, you can reach us at:
                </p>
                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-4">
                    <span className="h-6 w-6 text-[#3b82f6]">📧</span>
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200">Email</h4>
                      <a href="mailto:contact@novelverse.com" className="text-[#3b82f6] hover:underline">
                        contact@.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="h-6 w-6 text-[#3b82f6]">📞</span>
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200">Phone (Press Only)</h4>
                      <a href="tel:+1234567890" className="text-[#3b82f6] hover:underline">
                        +1 (234) 567-890
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-900/50 p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold font-display text-gray-900 dark:text-white">
                  Follow Us
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Stay connected with us on social media.
                </p>
                <div className="mt-6 flex gap-6">
                  <a href="#" className="text-gray-500 hover:text-[#3b82f6] transition-colors">
                    Twitter
                  </a>
                  <a href="#" className="text-gray-500 hover:text-[#3b82f6] transition-colors">
                    Facebook
                  </a>
                  <a href="#" className="text-gray-500 hover:text-[#3b82f6] transition-colors">
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
