import React, { useState } from 'react';
import { Send, CheckCircle2, RefreshCw, ShieldCheck, Clock, Copy, Check, Mail, AlertCircle } from 'lucide-react';
import { useLanguage } from '../context/useLanguage';
import useScrollReveal from '../hooks/useScrollReveal';

const SUPPORT_EMAIL = 'contact@codescinema.com';
const FORMSUBMIT_ENDPOINT = `https://formsubmit.co/ajax/${SUPPORT_EMAIL}`;

export default function Contact({ initialBrief = '', initialService = 'Full-Stack Web Development' }) {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: initialService,
    brief: initialBrief
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [revealRef] = useScrollReveal({ threshold: 0.08 });

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
    if (submitError) setSubmitError('');
  };

  const buildMailtoHref = () => {
    const subject = `[Codes Cinema Inquiry] ${formData.service} — ${formData.name || 'New Client'}`;
    const body = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Discipline: ${formData.service}`,
      '',
      'Project Brief & Objectives:',
      formData.brief
    ].join('\n');
    return `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    const submissionPayload = {
      name: formData.name,
      email: formData.email,
      service: formData.service,
      brief: formData.brief,
      _subject: `[Codes Cinema Inquiry] ${formData.service} — ${formData.name}`,
      _replyto: formData.email,
      _captcha: 'false',
      _template: 'table'
    };

    // Asynchronously dispatch to mail relay in background with keepalive
    // This decouples client feedback from third-party SMTP relay latency (~20s)
    try {
      fetch(FORMSUBMIT_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(submissionPayload),
        keepalive: true
      }).catch((err) => {
        console.warn('Background transmission logged:', err);
      });
    } catch (err) {
      console.warn('Transmission dispatch:', err);
    }

    // High-response tactile 450ms transition for instant feedback
    await new Promise((resolve) => setTimeout(resolve, 450));

    setIsSubmitting(false);
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      service: 'Custom Software Engineering',
      brief: ''
    });
    setSubmitError('');
    setSubmitted(false);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(SUPPORT_EMAIL);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" ref={revealRef} className="py-24 relative z-10 border-t border-[#E7E2DB] dark:border-[#2C2825] overflow-hidden">
      {/* Ambient Moving Orbs */}
      <div className="absolute top-1/3 -left-40 w-96 h-96 rounded-full bg-gradient-to-tr from-[#C2613A]/10 via-[#D97706]/5 to-transparent blur-3xl pointer-events-none animate-orb-1 -z-10" />
      <div className="absolute bottom-10 -right-40 w-96 h-96 rounded-full bg-gradient-to-bl from-[#2A6F62]/10 via-[#52B788]/5 to-transparent blur-3xl pointer-events-none animate-orb-2 -z-10" />

      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 reveal-init">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-stone-500 dark:text-stone-400 uppercase tracking-wider mb-3 animate-float-subtle">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C2613A]" />
            <span>{t.contact.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-100">
            {t.contact.heading}
          </h2>
          <p className="mt-3 text-stone-600 dark:text-stone-300 text-sm leading-relaxed">
            {t.contact.subtitle ||
              'Submit your project brief below to initiate a technical consultation. Our engineering team reviews specifications and responds within 24 business hours.'}
          </p>
        </div>

        {/* Dual Layout: Form (8 cols) + Credentials (4 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-8 card-minimal rounded-3xl p-7 sm:p-10 shadow-sm border border-[#E7E2DB] dark:border-[#2C2825] bg-[#FAF8F5] dark:bg-[#1C1A18] reveal-left">
            {submitted ? (
              <div className="text-center py-12 animate-tab-enter">
                <div className="w-14 h-14 rounded-full bg-[#2A6F62]/10 border border-[#2A6F62]/30 text-[#2A6F62] dark:text-[#52B788] mx-auto flex items-center justify-center mb-5 shadow-xs animate-float-subtle">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-stone-900 dark:text-stone-100">
                  {t.contact.successTitle}
                </h3>
                <p className="text-stone-600 dark:text-stone-300 text-sm max-w-md mx-auto mt-2 leading-relaxed">
                  {t.contact.successBody1} <span className="text-stone-900 dark:text-stone-100 font-semibold">{formData.name}</span>. {t.contact.successBody2}{' '}
                  <span className="text-stone-900 dark:text-stone-100 font-semibold">{formData.service}</span> {t.contact.successBody3}{' '}
                  <span className="font-semibold text-stone-900 dark:text-stone-100">{SUPPORT_EMAIL}</span>. {t.contact.successBody4}{' '}
                  <span className="text-stone-900 dark:text-stone-100 font-medium">{formData.email}</span> {t.contact.successBody5}
                </p>

                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-5 py-2.5 rounded-xl text-xs font-semibold text-stone-700 dark:text-stone-300 border border-[#E7E2DB] dark:border-[#2C2825] hover:border-stone-400 bg-white dark:bg-[#252220] hover:bg-[#F2EFE9] transition-all inline-flex items-center gap-2 shadow-xs cursor-pointer hover:scale-103"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>{t.contact.submitAnother}</span>
                  </button>
                  <a
                    href={buildMailtoHref()}
                    className="px-5 py-2.5 rounded-xl text-xs font-semibold text-[#C2613A] dark:text-[#E07A5F] border border-[#C2613A]/30 bg-[#C2613A]/10 hover:bg-[#C2613A]/15 transition-all inline-flex items-center gap-2 hover:scale-103"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>{t.contact.openEmailCopy}</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-2">
                      {t.contact.fullName}
                    </label>
                    <input
                      type="text"
                      required
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t.contact.namePlaceholder}
                      className="w-full bg-white dark:bg-[#252220] border border-[#E7E2DB] dark:border-[#2C2825] rounded-xl px-4 py-3 text-sm text-stone-900 dark:text-stone-100 focus:outline-none focus:border-[#C2613A] focus:ring-2 focus:ring-[#C2613A]/20 transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-2">
                      {t.contact.businessEmail}
                    </label>
                    <input
                      type="email"
                      required
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t.contact.emailPlaceholder}
                      className="w-full bg-white dark:bg-[#252220] border border-[#E7E2DB] dark:border-[#2C2825] rounded-xl px-4 py-3 text-sm text-stone-900 dark:text-stone-100 focus:outline-none focus:border-[#C2613A] focus:ring-2 focus:ring-[#C2613A]/20 transition-all duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-2">
                    {t.contact.discipline}
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-white dark:bg-[#252220] border border-[#E7E2DB] dark:border-[#2C2825] rounded-xl px-4 py-3 text-sm text-stone-900 dark:text-stone-100 focus:outline-none focus:border-[#C2613A] focus:ring-2 focus:ring-[#C2613A]/20 transition-all duration-200"
                  >
                    <option value="Full-Stack Web Development">
                      {t.contact.options?.fullstack || 'Full-Stack Web Development (End-to-End Platform)'}
                    </option>
                    <option value="Front-End Web Development">
                      {t.contact.options?.frontend || 'Front-End Web Development (UI/UX & React Only)'}
                    </option>
                    <option value="Back-End & API Engineering">
                      {t.contact.options?.backend || 'Back-End & API Engineering (Server & DB Only)'}
                    </option>
                    <option value="Mobile Game Development">{t.contact.options.mobile}</option>
                    <option value="DevOps & Server Management">{t.contact.options.devops}</option>
                    <option value="Website Maintenance & Care">{t.contact.options.maintenance}</option>
                    <option value="Admin & Operations Desk">{t.contact.options.admin}</option>
                    <option value="AI Advert Videos & Cinematic Production">{t.contact.options.ai}</option>
                    <option value="Technology Consulting">{t.contact.options.consulting}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-2">
                    {t.contact.briefLabel}
                  </label>
                  <textarea
                    required
                    rows={4}
                    name="brief"
                    value={formData.brief}
                    onChange={handleChange}
                    placeholder={t.contact.briefPlaceholder}
                    className="w-full bg-white dark:bg-[#252220] border border-[#E7E2DB] dark:border-[#2C2825] rounded-xl px-4 py-3 text-sm text-stone-900 dark:text-stone-100 focus:outline-none focus:border-[#C2613A] focus:ring-2 focus:ring-[#C2613A]/20 transition-all duration-200"
                  />
                </div>

                {submitError && (
                  <div className="p-4 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 text-rose-900 dark:text-rose-200 text-xs space-y-2.5">
                    <div className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5" />
                      <span>{submitError}</span>
                    </div>
                    <a
                      href={buildMailtoHref()}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900 border border-rose-200 dark:border-rose-800 text-rose-800 dark:text-rose-300 hover:bg-rose-100/60 font-semibold transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>{t.contact.sendViaEmail} ({SUPPORT_EMAIL})</span>
                    </a>
                  </div>
                )}

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="relative overflow-hidden w-full py-3.5 rounded-xl font-bold text-xs sm:text-sm text-stone-50 bg-stone-900 hover:bg-stone-800 dark:bg-stone-100 dark:hover:bg-white dark:text-stone-950 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 shadow-sm hover:shadow hover:scale-102 group"
                  >
                    <Send className="w-3.5 h-3.5 relative z-10 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                    <span className="relative z-10">{isSubmitting ? t.contact.submittingBtn : t.contact.submitBtn}</span>
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 dark:via-stone-900/15 to-transparent -translate-x-full group-hover:animate-btn-shimmer pointer-events-none" />
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Credentials: 4 cols */}
          <div className="lg:col-span-4 space-y-4 reveal-right">
            <div className="p-6 rounded-2xl bg-[#FAF8F5] dark:bg-[#1C1A18] border border-[#E7E2DB] dark:border-[#2C2825] shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
              <div className="flex items-center gap-2 text-xs font-semibold text-stone-500 dark:text-stone-400 uppercase tracking-wide mb-2">
                <Clock className="w-4 h-4 text-[#C2613A] transition-transform group-hover:rotate-45" />
                <span>{t.contact.responseTitle}</span>
              </div>
              <h4 className="text-stone-900 dark:text-stone-100 font-bold text-sm mb-1">{t.contact.responseHeading}</h4>
              <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                {t.contact.responseDesc}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF8F5] dark:bg-[#1C1A18] border border-[#E7E2DB] dark:border-[#2C2825] shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
              <div className="flex items-center gap-2 text-xs font-semibold text-stone-500 dark:text-stone-400 uppercase tracking-wide mb-2">
                <ShieldCheck className="w-4 h-4 text-[#2A6F62] dark:text-[#52B788] transition-transform group-hover:scale-120" />
                <span>{t.contact.ndaTitle}</span>
              </div>
              <h4 className="text-stone-900 dark:text-stone-100 font-bold text-sm mb-1">{t.contact.ndaHeading}</h4>
              <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                {t.contact.ndaDesc}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF8F5] dark:bg-[#1C1A18] border border-[#E7E2DB] dark:border-[#2C2825] shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <h4 className="text-xs font-semibold uppercase tracking-wide text-stone-500 dark:text-stone-400 mb-2.5">{t.contact.deskTitle}</h4>
              <ul className="space-y-3 text-xs font-medium text-stone-700 dark:text-stone-300">
                <li>
                  <span className="text-stone-500 dark:text-stone-400 block text-[10px]">{t.contact.supportEmailLabel}</span>
                  <div className="flex items-center gap-2 mt-0.5">
                    <a
                      href={`mailto:${SUPPORT_EMAIL}`}
                      className="text-[#C2613A] dark:text-[#E07A5F] hover:underline font-bold inline-flex items-center gap-1.5 transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5 shrink-0" />
                      <span>{SUPPORT_EMAIL}</span>
                    </a>
                    <button
                      onClick={handleCopyEmail}
                      className="p-1 rounded-md text-stone-400 hover:text-stone-900 dark:hover:text-white transition-all cursor-pointer hover:scale-120"
                      title="Copy Support Email"
                      type="button"
                    >
                      {copiedEmail ? <Check className="w-3.5 h-3.5 text-[#2A6F62] dark:text-[#52B788] animate-ping-radar" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </li>
                <li>
                  <span className="text-stone-500 dark:text-stone-400 block text-[10px]">{t.contact.whatsappDirectLabel}</span>
                  <a
                    href="https://wa.me/2348160498340"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#2A6F62] dark:text-[#52B788] hover:underline font-bold inline-flex items-center gap-1 hover:translate-x-0.5 transition-transform"
                    dir="ltr"
                  >
                    +234 816 049 8340 ↗
                  </a>
                </li>
                <li className="pt-1">
                  <span className="text-stone-500 dark:text-stone-400 block text-[10px]">{t.contact.globalClienteleLabel}</span>
                  <span className="text-stone-800 dark:text-stone-200 font-medium">{t.contact.globalClienteleValue}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
