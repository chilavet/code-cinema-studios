import React from 'react';
import { SERVICES } from '../data/services';
import { Code2, Smartphone, Film, ShieldCheck, Wrench, Headphones, ArrowRight, Check, Server } from 'lucide-react';

export default function Services({ onSelectService }) {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'gamepad':
        return <Smartphone className="w-5 h-5 text-amber-600" />;
      case 'code':
        return <Code2 className="w-5 h-5 text-sky-600" />;
      case 'server':
        return <Server className="w-5 h-5 text-sky-600" />;
      case 'clapperboard':
        return <Film className="w-5 h-5 text-purple-600" />;
      case 'wrench':
        return <Wrench className="w-5 h-5 text-slate-800" />;
      case 'clipboard':
        return <Headphones className="w-5 h-5 text-emerald-600" />;
      case 'shield':
        return <ShieldCheck className="w-5 h-5 text-indigo-600" />;
      default:
        return <Code2 className="w-5 h-5 text-slate-800" />;
    }
  };

  const handleInquire = (serviceTitle) => {
    if (onSelectService) {
      onSelectService(serviceTitle);
    }
  };

  return (
    <section id="services" className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-slate-500 uppercase tracking-widest mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
            <span>Studio Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Engineered for performance and endurance.
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            From mobile game production and distributed cloud software to round-the-clock website care and technical operations desks, our work is defined by precision.
          </p>
        </div>

        {/* 6 Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, index) => (
            <div
              key={s.id}
              className="card-minimal rounded-2xl p-7 flex flex-col justify-between group shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
            >
              <div>
                {/* Header: Icon & Track Index */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-200/90 flex items-center justify-center transition-all duration-300 group-hover:bg-slate-100 group-hover:scale-110 group-hover:-rotate-3 group-hover:shadow-sm">
                    {getIcon(s.icon)}
                  </div>
                  <span className="text-[11px] font-mono font-semibold text-slate-400 group-hover:text-slate-900 transition-colors">
                    0{index + 1}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-lg font-bold text-slate-900 mb-2.5 group-hover:text-sky-900 transition-colors">
                  {s.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                  {s.description}
                </p>

                {/* Highlights List */}
                {s.highlights && s.highlights.length > 0 && (
                  <div className="mb-6 pt-4 border-t border-slate-100 space-y-2">
                    {s.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {s.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <a
                  href="#contact"
                  onClick={() => handleInquire(s.title)}
                  className="font-semibold text-slate-900 hover:text-sky-700 transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Inquire Track</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href={`https://wa.me/2348160498340?text=${encodeURIComponent(
                    `Hello Code Cinema Studios, I am interested in your ${s.title} services.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-700 hover:text-emerald-800 font-mono font-semibold text-[11px] transition-colors"
                >
                  WhatsApp ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
