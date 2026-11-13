import React from 'react';
import { Sparkles, ArrowRight, MessageSquare, Video, Smartphone, Server, Code2, ShieldCheck } from 'lucide-react';

export default function BookingBanner({ onBookService }) {
  const whatsappAiAdvertsUrl = `https://wa.me/2348160498340?text=${encodeURIComponent(
    'Hello Codes Cinema, I would like to book you for an AI Advert Video and discuss your production packages.'
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
        <div className="relative rounded-3xl bg-gradient-to-br from-[#1C1A18] via-[#171513] to-[#12100E] text-stone-100 p-8 sm:p-12 lg:p-14 overflow-hidden border border-[#2C2825] shadow-2xl">
          {/* Subtle Ambient Radial Glows */}
          <div className="absolute -top-24 -left-24 w-80 h-80 bg-[#C2613A]/15 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
          <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-[#2A6F62]/15 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Pitch & Catchy Line: 7 cols */}
            <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C2613A]/15 border border-[#C2613A]/30 text-[#E07A5F] text-xs font-semibold tracking-wide">
                <Sparkles className="w-3.5 h-3.5 text-[#E07A5F] animate-pulse" />
                <span>HIGH-CONVERSION PRODUCTION DESK</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
                Stop scrolling. Start converting.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E07A5F] via-[#F4A261] to-[#E7E2DB]">
                  Book us for high-impact AI Advert Videos
                </span>{' '}
                and end-to-end engineering.
              </h2>

              <p className="text-stone-300 text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
                Turn passive viewers into paying customers. We produce cinematic AI advert videos with viral hooks and photorealistic visuals — backed by studio-grade mobile games, custom software, and rock-solid DevOps server infrastructure.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3.5">
                <a
                  href={whatsappAiAdvertsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-[#C2613A] hover:bg-[#A84F2E] transition-all flex items-center gap-2 shadow-lg shadow-[#C2613A]/25 hover:scale-[1.02]"
                >
                  <Video className="w-4 h-4 text-white" />
                  <span>Book AI Advert Video</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <button
                  type="button"
                  onClick={handleGeneralInquiry}
                  className="px-6 py-3.5 rounded-xl font-semibold text-xs sm:text-sm text-stone-200 bg-[#252220] hover:bg-[#2E2A27] border border-[#3A3530] transition-all flex items-center gap-2 cursor-pointer hover:border-stone-500"
                >
                  <span>Book All Services</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href="https://wa.me/2348160498340?text=Hello%20Codes%20Cinema%2C%20I%20would%20like%20to%20discuss%20a%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3.5 rounded-xl font-semibold text-xs text-[#52B788] hover:text-[#6AD1A1] bg-[#2A6F62]/20 border border-[#2A6F62]/40 transition-all flex items-center gap-2"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#52B788]" />
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
                        ? 'bg-[#C2613A]/15 border-[#C2613A]/40 shadow-sm'
                        : 'bg-[#181614]/80 border-[#2C2825] hover:border-[#3A3530]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                          svc.highlight
                            ? 'bg-[#C2613A] text-white shadow-sm'
                            : 'bg-[#252220] text-stone-400'
                        }`}
                      >
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <div className="text-left">
                        <span className="text-xs font-bold text-white block">
                          {svc.name}
                        </span>
                        <span className="text-[11px] text-stone-400 block">
                          {svc.desc}
                        </span>
                      </div>
                    </div>

                    <span
                      className={`text-[10px] px-2 py-0.5 rounded font-semibold shrink-0 ${
                        svc.highlight
                          ? 'bg-[#C2613A]/25 text-[#E07A5F] border border-[#C2613A]/40'
                          : 'bg-[#22201D] text-stone-400'
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
