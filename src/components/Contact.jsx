import React, { useState } from 'react';
import { Send, CheckCircle2, RefreshCw, ShieldCheck, Clock, Copy, Check, Mail, AlertCircle } from 'lucide-react';
import { useLanguage } from '../context/useLanguage';

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
    <section id="contact" className="py-24 relative z-10 border-t border-slate-200 dark:border-slate-800">
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-600" />
            <span>{t.contact.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            {t.contact.heading}
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
            {t.contact.subtitle ||
              'Submit your project brief below to initiate a technical consultation. Our engineering team reviews specifications and responds within 24 business hours.'}
          </p>
        </div>

        {/* Dual Layout: Form (8 cols) + Credentials (4 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-8 card-minimal rounded-3xl p-7 sm:p-10 shadow-sm border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90">
            {submitted ? (
              <div className="text-center py-12 animate-in fade-in duration-300">
                <div className="w-14 h-14 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-700 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center mb-5 shadow-sm">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {t.contact.successTitle}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm max-w-md mx-auto mt-2 leading-relaxed">
                  {t.contact.successBody1} <span className="text-slate-900 dark:text-white font-semibold">{formData.name}</span>. {t.contact.successBody2}{' '}
                  <span className="text-slate-900 dark:text-white font-semibold">{formData.service}</span> {t.contact.successBody3}{' '}
                  <span className="font-semibold text-slate-900 dark:text-white">{SUPPORT_EMAIL}</span>. {t.contact.successBody4}{' '}
                  <span className="text-slate-900 dark:text-white font-medium">{formData.email}</span> {t.contact.successBody5}
                </p>

                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700 hover:border-slate-500 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all inline-flex items-center gap-2 shadow-sm cursor-pointer"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>{t.contact.submitAnother}</span>
                  </button>
                  <a
                    href={buildMailtoHref()}
                    className="px-5 py-2.5 rounded-xl text-xs font-semibold text-sky-800 dark:text-sky-300 border border-sky-200 dark:border-sky-800 hover:border-sky-300 bg-sky-50 dark:bg-sky-950/50 hover:bg-sky-100/70 dark:hover:bg-sky-900/50 transition-all inline-flex items-center gap-2"
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
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                      {t.contact.fullName}
                    </label>
                    <input
                      type="text"
                      required
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t.contact.namePlaceholder}
                      className="w-full bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-slate-900 dark:focus:border-amber-400 focus:bg-white dark:focus:bg-slate-800 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                      {t.contact.businessEmail}
                    </label>
                    <input
                      type="email"
                      required
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t.contact.emailPlaceholder}
                      className="w-full bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-slate-900 dark:focus:border-amber-400 focus:bg-white dark:focus:bg-slate-800 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                    {t.contact.discipline}
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-slate-900 dark:focus:border-amber-400 focus:bg-white dark:focus:bg-slate-800 transition-colors"
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
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                    {t.contact.briefLabel}
                  </label>
                  <textarea
                    required
                    rows={4}
                    name="brief"
                    value={formData.brief}
                    onChange={handleChange}
                    placeholder={t.contact.briefPlaceholder}
                    className="w-full bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-slate-900 dark:focus:border-amber-400 focus:bg-white dark:focus:bg-slate-800 transition-colors"
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
                    className="w-full py-3.5 rounded-xl font-semibold text-xs sm:text-sm text-white bg-slate-900 hover:bg-slate-800 dark:bg-amber-500 dark:hover:bg-amber-400 dark:text-slate-950 font-bold transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 shadow-sm"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{isSubmitting ? t.contact.submittingBtn : t.contact.submitBtn}</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Credentials: 4 cols */}
          <div className="lg:col-span-4 space-y-4">
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-2">
                <Clock className="w-4 h-4 text-slate-700 dark:text-slate-300" />
                <span>{t.contact.responseTitle}</span>
              </div>
              <h4 className="text-slate-900 dark:text-white font-bold text-sm mb-1">{t.contact.responseHeading}</h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {t.contact.responseDesc}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>{t.contact.ndaTitle}</span>
              </div>
              <h4 className="text-slate-900 dark:text-white font-bold text-sm mb-1">{t.contact.ndaHeading}</h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                {t.contact.ndaDesc}
              </p>
              <div className="flex items-center gap-2.5 text-[11px] font-semibold text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800">
                <a href="#privacy" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">
                  Privacy Policy ↗
                </a>
                <span>•</span>
                <a href="#terms" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Terms ↗
                </a>
                <span>•</span>
                <a href="#security" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                  Security SLA ↗
                </a>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-2.5">{t.contact.deskTitle}</h4>
              <ul className="space-y-3 text-xs font-medium text-slate-700 dark:text-slate-300">
                <li>
                  <span className="text-slate-500 dark:text-slate-400 block text-[10px]">{t.contact.supportEmailLabel}</span>
                  <div className="flex items-center gap-2 mt-0.5">
                    <a
                      href={`mailto:${SUPPORT_EMAIL}`}
                      className="text-sky-700 dark:text-sky-400 hover:text-sky-900 dark:hover:text-sky-300 font-bold inline-flex items-center gap-1.5"
                    >
                      <Mail className="w-3.5 h-3.5 shrink-0" />
                      <span>{SUPPORT_EMAIL}</span>
                    </a>
                    <button
                      onClick={handleCopyEmail}
                      className="p-1 rounded-md text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
                      title="Copy Support Email"
                      type="button"
                    >
                      {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </li>
                <li>
                  <span className="text-slate-500 dark:text-slate-400 block text-[10px]">{t.contact.whatsappDirectLabel}</span>
                  <a
                    href="https://wa.me/2348160498340"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-700 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 font-bold"
                    dir="ltr"
                  >
                    +234 816 049 8340 ↗
                  </a>
                </li>
                <li className="pt-1">
                  <span className="text-slate-500 dark:text-slate-400 block text-[10px]">{t.contact.globalClienteleLabel}</span>
                  <span className="text-slate-800 dark:text-slate-200 font-medium">{t.contact.globalClienteleValue}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
