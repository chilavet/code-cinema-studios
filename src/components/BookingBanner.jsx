import React from 'react';
import { Sparkles, ArrowRight, MessageSquare, Video, Smartphone, Server, Code2, ShieldCheck } from 'lucide-react';

export default function BookingBanner({ onBookService }) {
  const whatsappAiAdvertsUrl = `https://wa.me/2348160498340?text=${encodeURIComponent(
    'Hello Code Cinema Studios, I would like to book you for an AI Advert Video and discuss your production packages.'
  )}`;

  const handleGeneralInquiry = () => {
    if (onBookService) {
      onBookService(
        'AI Advert Videos & Cinematic Production',
        'Requesting immediate booking for AI Advert Video production and full-stack technical services.'
      );
    } else {
      const contactSection = document.getElementById('contact');
      if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const servicesOffered = [
    { icon: Video, name: 'AI Advert Videos', desc: 'Viral reels, product ads & 4K AI commercials', highlight: true },
    { icon: Smartphone, name: 'Mobile Game Dev', desc: 'Native Unity 120 FPS for iOS & Android' },
    { icon: Server, name: 'DevOps & Servers', desc: 'Linux hardening, CI/CD & 99.99% uptime' },
    { icon: Code2, name: 'Custom Software', desc: 'Cloud microservices, APIs & web apps' },
    { icon: ShieldCheck, name: '24/7 Site Care', desc: 'Continuous security patching & backups' }
  ];

  return (
    <section className="py-16 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white p-8 sm:p-12 lg:p-14 overflow-hidden border border-slate-800 shadow-2xl">
          {/* Subtle Ambient Radial Glows */}
          <div className="absolute -top-24 -left-24 w-80 h-80 bg-amber-500/15 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
          <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-sky-500/15 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Pitch & Catchy Line: 7 cols */}
            <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-300 text-xs font-mono font-semibold tracking-wide">
                <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                <span>HIGH-CONVERSION PRODUCTION DESK</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
                Stop scrolling. Start converting.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-sky-300">
                  Book us for high-impact AI Advert Videos
                </span>{' '}
                and end-to-end engineering.
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
                Turn passive viewers into paying customers. We produce cinematic AI advert videos with viral hooks and photorealistic visuals — backed by studio-grade mobile games, custom software, and rock-solid DevOps server infrastructure.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3.5">
                <a
                  href={whatsappAiAdvertsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-slate-950 bg-amber-400 hover:bg-amber-300 transition-all flex items-center gap-2 shadow-lg shadow-amber-500/20 hover:scale-[1.02]"
                >
                  <Video className="w-4 h-4 text-slate-950" />
                  <span>Book AI Advert Video</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <button
                  type="button"
                  onClick={handleGeneralInquiry}
                  className="px-6 py-3.5 rounded-xl font-semibold text-xs sm:text-sm text-white bg-slate-800/80 hover:bg-slate-700 border border-slate-700 transition-all flex items-center gap-2 cursor-pointer hover:border-slate-500"
                >
                  <span>Book All Services</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href="https://wa.me/2348160498340?text=Hello%20Code%20Cinema%20Studios%2C%20I%20would%20like%20to%20discuss%20a%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3.5 rounded-xl font-mono text-xs text-emerald-400 hover:text-emerald-300 bg-emerald-950/60 border border-emerald-800/80 transition-all flex items-center gap-2"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                  <span>WhatsApp: +234 816 049 8340</span>
                </a>
              </div>
            </div>

            {/* Right Mini Services Matrix: 5 cols */}
            <div className="lg:col-span-5 grid grid-cols-1 gap-2.5">
              {servicesOffered.map((svc, idx) => {
                const IconComponent = svc.icon;
                return (
                  <div
                    key={idx}
                    className={`p-3.5 rounded-2xl border transition-all flex items-center justify-between gap-3 ${
                      svc.highlight
                        ? 'bg-amber-500/10 border-amber-500/40 shadow-sm'
                        : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                          svc.highlight
                            ? 'bg-amber-400 text-slate-950 shadow-sm'
                            : 'bg-slate-800 text-slate-300'
                        }`}
                      >
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <div className="text-left">
                        <span className="text-xs font-bold text-white block">
                          {svc.name}
                        </span>
                        <span className="text-[11px] text-slate-400 block">
                          {svc.desc}
                        </span>
                      </div>
                    </div>

                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded font-semibold shrink-0 ${
                        svc.highlight
                          ? 'bg-amber-400/20 text-amber-300 border border-amber-400/40'
                          : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      {svc.highlight ? '🔥 Book Now' : 'Available'}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
