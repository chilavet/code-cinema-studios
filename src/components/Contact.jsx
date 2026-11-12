import React, { useState } from 'react';
import { Send, CheckCircle2, RefreshCw, MessageSquare, ShieldCheck, Clock, Copy, Check, Mail, AlertCircle } from 'lucide-react';
import { useLanguage } from '../context/useLanguage';

const SUPPORT_EMAIL = 'support@codescinema.com';
const FORMSUBMIT_ENDPOINT = `https://formsubmit.co/ajax/${SUPPORT_EMAIL}`;

export default function Contact({ initialBrief = '', initialService = 'Custom Software Engineering' }) {
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
  const [copiedPhone, setCopiedPhone] = useState(false);
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

    try {
      const response = await fetch(FORMSUBMIT_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          service: formData.service,
          brief: formData.brief,
          _subject: `[Codes Cinema Inquiry] ${formData.service} — ${formData.name}`,
          _replyto: formData.email,
          _template: 'table'
        })
      });

      const data = await response.json().catch(() => null);
      if (!response.ok || (data && (data.success === 'false' || data.success === false))) {
        throw new Error(data?.message || 'Unable to transmit brief automatically.');
      }

      setSubmitted(true);
    } catch (err) {
      setSubmitError(
        err?.message ||
          `Could not reach the mail relay automatically. You can send your brief directly to ${SUPPORT_EMAIL}.`
      );
    } finally {
      setIsSubmitting(false);
    }
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

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('+2348160498340');
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(SUPPORT_EMAIL);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-24 relative z-10 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-slate-500 uppercase tracking-widest mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
            <span>{t.contact.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            {t.contact.heading}
          </h2>
          <p className="mt-3 text-slate-600 text-sm leading-relaxed">
            {t.contact.subtitleBefore}
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="font-mono font-semibold text-slate-900 underline decoration-slate-300 hover:decoration-slate-900 transition-colors"
            >
              {SUPPORT_EMAIL}
            </a>
            {t.contact.subtitleAfter}
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
                  {t.contact.whatsappTitle}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
              </div>
              <div className="flex items-center gap-2.5 mt-0.5 justify-center sm:justify-start">
                <span className="text-slate-900 font-mono text-lg font-bold" dir="ltr">
                  +234 816 049 8340
                </span>
                <button
                  onClick={handleCopyPhone}
                  className="p-1 rounded-md text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
                  title="Copy Phone Number"
                  type="button"
                >
                  {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
              <p className="text-emerald-800 text-xs mt-0.5">
                {t.contact.whatsappDesc}
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/2348160498340?text=Hello%20Codes%20Cinema%2C%20I%20would%20like%20to%20discuss%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto px-5 py-3 rounded-xl text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 transition-all flex items-center justify-center gap-2 whitespace-nowrap shrink-0 shadow-sm"
          >
            <span>{t.contact.whatsappBtn}</span>
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
                  {t.contact.successTitle}
                </h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto mt-2 leading-relaxed">
                  {t.contact.successBody1} <span className="text-slate-900 font-semibold">{formData.name}</span>. {t.contact.successBody2}{' '}
                  <span className="text-slate-900 font-semibold">{formData.service}</span> {t.contact.successBody3}{' '}
                  <span className="font-mono font-semibold text-slate-900">{SUPPORT_EMAIL}</span>. {t.contact.successBody4}{' '}
                  <span className="text-slate-900 font-medium">{formData.email}</span> {t.contact.successBody5}
                </p>

                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-700 border border-slate-300 hover:border-slate-500 bg-white hover:bg-slate-50 transition-all inline-flex items-center gap-2 shadow-sm cursor-pointer"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>{t.contact.submitAnother}</span>
                  </button>
                  <a
                    href={buildMailtoHref()}
                    className="px-5 py-2.5 rounded-xl text-xs font-semibold text-sky-800 border border-sky-200 hover:border-sky-300 bg-sky-50 hover:bg-sky-100/70 transition-all inline-flex items-center gap-2"
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
                    <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-slate-500 mb-2">
                      {t.contact.fullName}
                    </label>
                    <input
                      type="text"
                      required
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t.contact.namePlaceholder}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-slate-900 focus:bg-white transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-slate-500 mb-2">
                      {t.contact.businessEmail}
                    </label>
                    <input
                      type="email"
                      required
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t.contact.emailPlaceholder}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-slate-900 focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-slate-500 mb-2">
                    {t.contact.discipline}
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-slate-900 focus:bg-white transition-colors"
                  >
                    <option value="AI Advert Videos & Cinematic Production">{t.contact.options.ai}</option>
                    <option value="Mobile Game Development">{t.contact.options.mobile}</option>
                    <option value="Custom Software Engineering">{t.contact.options.software}</option>
                    <option value="DevOps & Server Management">{t.contact.options.devops}</option>
                    <option value="Website Maintenance & Care">{t.contact.options.maintenance}</option>
                    <option value="Admin & Operations Desk">{t.contact.options.admin}</option>
                    <option value="Technology Consulting">{t.contact.options.consulting}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-slate-500 mb-2">
                    {t.contact.briefLabel}
                  </label>
                  <textarea
                    required
                    rows={4}
                    name="brief"
                    value={formData.brief}
                    onChange={handleChange}
                    placeholder={t.contact.briefPlaceholder}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-slate-900 focus:bg-white transition-colors"
                  />
                </div>

                {submitError && (
                  <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-900 text-xs space-y-2.5">
                    <div className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                      <span>{submitError}</span>
                    </div>
                    <a
                      href={buildMailtoHref()}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-rose-200 text-rose-800 hover:bg-rose-100/60 font-mono font-semibold transition-colors"
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
                    className="w-full py-3.5 rounded-xl font-semibold text-xs sm:text-sm text-white bg-slate-900 hover:bg-slate-800 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 shadow-sm"
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
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-slate-500 uppercase tracking-wider mb-2">
                <Clock className="w-4 h-4 text-slate-700" />
                <span>{t.contact.responseTitle}</span>
              </div>
              <h4 className="text-slate-900 font-bold text-sm mb-1">{t.contact.responseHeading}</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {t.contact.responseDesc}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-slate-500 uppercase tracking-wider mb-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>{t.contact.ndaTitle}</span>
              </div>
              <h4 className="text-slate-900 font-bold text-sm mb-1">{t.contact.ndaHeading}</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {t.contact.ndaDesc}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500 mb-2.5">{t.contact.deskTitle}</h4>
              <ul className="space-y-3 text-xs font-mono text-slate-700">
                <li>
                  <span className="text-slate-500 block text-[10px]">{t.contact.supportEmailLabel}</span>
                  <div className="flex items-center gap-2 mt-0.5">
                    <a
                      href={`mailto:${SUPPORT_EMAIL}`}
                      className="text-sky-700 hover:text-sky-900 font-bold inline-flex items-center gap-1.5"
                    >
                      <Mail className="w-3.5 h-3.5 shrink-0" />
                      <span>{SUPPORT_EMAIL}</span>
                    </a>
                    <button
                      onClick={handleCopyEmail}
                      className="p-1 rounded-md text-slate-400 hover:text-slate-900 transition-colors cursor-pointer"
                      title="Copy Support Email"
                      type="button"
                    >
                      {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </li>
                <li>
                  <span className="text-slate-500 block text-[10px]">{t.contact.whatsappDirectLabel}</span>
                  <a
                    href="https://wa.me/2348160498340"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-700 hover:text-emerald-800 font-bold"
                    dir="ltr"
                  >
                    +234 816 049 8340 ↗
                  </a>
                </li>
                <li className="pt-1">
                  <span className="text-slate-500 block text-[10px]">{t.contact.globalClienteleLabel}</span>
                  <span className="text-slate-800 font-medium">{t.contact.globalClienteleValue}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
