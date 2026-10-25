import React, { useState } from 'react';
import { Send, CheckCircle2, RefreshCw, MessageSquare, ShieldCheck, Clock, Copy, Check } from 'lucide-react';

export default function Contact({ initialBrief = '', initialService = 'Custom Software Engineering' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: initialService,
    brief: initialBrief
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const [prevProps, setPrevProps] = useState({ initialBrief, initialService });
  if (prevProps.initialBrief !== initialBrief || prevProps.initialService !== initialService) {
    setPrevProps({ initialBrief, initialService });
    if (initialBrief) {
      setFormData((prev) => ({
        ...prev,
        brief: initialBrief,
        service: initialService || prev.service
      }));
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      service: 'Custom Software Engineering',
      brief: ''
    });
    setSubmitted(false);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('+2348160498340');
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="contact" className="py-24 relative z-10 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-slate-500 uppercase tracking-widest mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
            <span>Direct Engagement</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Let's discuss your project.
          </h2>
          <p className="mt-3 text-slate-600 text-sm leading-relaxed">
            Reach out via our inquiry form or connect directly with our technical desk via WhatsApp for rapid scoping.
          </p>
        </div>

        {/* Minimal WhatsApp Fast-Track Concierge */}
        <div className="mb-10 p-6 rounded-2xl bg-emerald-50/80 border border-emerald-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-700 shrink-0 shadow-sm">
              <MessageSquare className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <span className="text-xs font-mono font-bold text-emerald-800 uppercase tracking-wider">
                  Direct WhatsApp Technical Desk
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
              </div>
              <div className="flex items-center gap-2.5 mt-0.5 justify-center sm:justify-start">
                <span className="text-slate-900 font-mono text-lg font-bold">
                  +234 816 049 8340
                </span>
                <button
                  onClick={handleCopyPhone}
                  className="p-1 rounded-md text-slate-500 hover:text-slate-900 transition-colors"
                  title="Copy Phone Number"
                  type="button"
                >
                  {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
              <p className="text-emerald-800 text-xs mt-0.5">
                Fast-track AI advert video bookings, mobile game production, DevOps setups, and technical queries.
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/2348160498340?text=Hello%20Code%20Cinema%20Studios%2C%20I%20would%20like%20to%20discuss%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto px-5 py-3 rounded-xl text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 transition-all flex items-center justify-center gap-2 whitespace-nowrap shrink-0 shadow-sm"
          >
            <span>Chat on WhatsApp</span>
            <span className="font-mono text-xs">↗</span>
          </a>
        </div>

        {/* Dual Layout: Form (8 cols) + Credentials (4 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-8 card-minimal rounded-3xl p-7 sm:p-10 shadow-sm">
            {submitted ? (
              <div className="text-center py-12 animate-in fade-in duration-300">
                <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-600 mx-auto flex items-center justify-center mb-5 shadow-sm">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Consultation Brief Received
                </h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto mt-2 leading-relaxed">
                  Thank you, <span className="text-slate-900 font-semibold">{formData.name}</span>. Our technical director is reviewing your parameters for <span className="text-slate-900 font-semibold">{formData.service}</span>. We will follow up via email at <span className="text-slate-900">{formData.email}</span> within 24 business hours.
                </p>

                <div className="mt-8 flex justify-center">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-700 border border-slate-300 hover:border-slate-500 bg-white hover:bg-slate-50 transition-all inline-flex items-center gap-2 shadow-sm"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Submit Another Brief</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-slate-500 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Alex Mercer"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-slate-900 focus:bg-white transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-slate-500 mb-2">
                      Business Email *
                    </label>
                    <input
                      type="email"
                      required
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="alex@company.com"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-slate-900 focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-slate-500 mb-2">
                    Primary Discipline *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-slate-900 focus:bg-white transition-colors"
                  >
                    <option value="AI Advert Videos & Cinematic Production">AI Advert Videos & Cinematic Commercials (Viral / High-Conversion)</option>
                    <option value="Mobile Game Development">Mobile Game Development (iOS & Android)</option>
                    <option value="Custom Software Engineering">Custom Software Engineering</option>
                    <option value="DevOps & Server Management">DevOps & Server Management</option>
                    <option value="Website Maintenance & Care">Website Maintenance & Care (24/7 SLA)</option>
                    <option value="Admin & Operations Desk">Admin & Operations Desk</option>
                    <option value="Technology Consulting">Technology Consulting & Architecture</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-slate-500 mb-2">
                    Project Brief & Objectives *
                  </label>
                  <textarea
                    required
                    rows={4}
                    name="brief"
                    value={formData.brief}
                    onChange={handleChange}
                    placeholder="Describe your requirements, mobile platform targets, maintenance scope, or delivery milestones..."
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-slate-900 focus:bg-white transition-colors"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl font-semibold text-xs sm:text-sm text-white bg-slate-900 hover:bg-slate-800 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 shadow-sm"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{isSubmitting ? 'Transmitting Brief...' : 'Transmit Consultation Brief'}</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Credentials: 4 cols */}
          <div className="lg:col-span-4 space-y-4">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-slate-500 uppercase tracking-wider mb-2">
                <Clock className="w-4 h-4 text-slate-700" />
                <span>Response Guarantee</span>
              </div>
              <h4 className="text-slate-900 font-bold text-sm mb-1">Within 24 Business Hours</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Direct triage by senior engineers and studio directors.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-slate-500 uppercase tracking-wider mb-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Strict Confidentiality</span>
              </div>
              <h4 className="text-slate-900 font-bold text-sm mb-1">Mutual NDA Upon Request</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                All game IP, codebases, and systems remain 100% confidential.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500 mb-2.5">Studio Desk</h4>
              <ul className="space-y-2 text-xs font-mono text-slate-700">
                <li>
                  <span className="text-slate-500 block text-[10px]">WHATSAPP DIRECT</span>
                  <a
                    href="https://wa.me/2348160498340"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-700 hover:text-emerald-800 font-bold"
                  >
                    +234 816 049 8340 ↗
                  </a>
                </li>
                <li className="pt-1">
                  <span className="text-slate-500 block text-[10px]">GLOBAL CLIENTELE</span>
                  <span className="text-slate-800 font-medium">Remote Operations (UTC+1)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
