import React from 'react';
import { Mail, MapPin, Send } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="h-auto py-16 md:py-24 bg-gray-50 dark:bg-dark-bg/50 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white dark:bg-dark-card rounded-3xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-800">
          <div className="grid md:grid-cols-5">

            {/* Contact Info */}
            <div className="md:col-span-2 bg-slate-900 p-10 text-white flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold font-display mb-6">Let's Connect</h3>
                <p className="text-slate-300 mb-8 text-sm leading-relaxed">
                  Open to internship opportunities and collaborative projects. Feel free to reach out!
                </p>

                <div className="space-y-6">
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-start gap-3 hover:opacity-80 transition-opacity">
                    <Mail className="shrink-0 text-brand-400" size={20} />
                    <span className="text-sm text-slate-300">{PERSONAL_INFO.email}</span>
                  </a>
                  <div className="flex items-start gap-3">
                    <MapPin className="shrink-0 text-brand-400" size={20} />
                    <span className="text-sm text-slate-300">{PERSONAL_INFO.location}</span>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <p className="text-xs text-slate-500">© 2025 Milakshi. All rights reserved.</p>
              </div>
            </div>

            {/* Form */}
            <div className="md:col-span-3 p-10">
              <form
                action="https://formspree.io/f/xbjnqkol" // Replace with real ID
                method="POST"
                className="space-y-6"
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-brand-500 outline-none transition-all dark:text-white"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-brand-500 outline-none transition-all dark:text-white"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-brand-500 outline-none transition-all dark:text-white resize-none"
                    placeholder="Hi, I'd like to discuss an opportunity..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  Send Message
                  <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;