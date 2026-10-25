import React, { useState } from 'react';

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);
  const phoneNumber = '2348160498340';
  const displayPhone = '+234 816 049 8340';
  const defaultMessage = encodeURIComponent('Hello Code Cinema Studios, I would like to discuss a project.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <aside 
      aria-label="Instant WhatsApp Contact"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Subtle Tooltip Label */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`hidden sm:flex items-center gap-2 bg-white/95 backdrop-blur-md border border-slate-200 text-slate-800 px-3.5 py-2 rounded-full text-xs font-medium transition-all duration-200 hover:text-slate-950 hover:border-slate-300 shadow-md ${
          isHovered ? 'opacity-100 translate-x-0' : 'opacity-85 translate-x-1'
        }`}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
        <span className="font-semibold text-slate-700">WhatsApp:</span>
        <span className="font-mono text-slate-600">{displayPhone}</span>
      </a>

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Chat with Code Cinema Studios on WhatsApp at ${displayPhone}`}
        className="relative flex items-center justify-center w-12 h-12 rounded-full bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 shadow-xl hover:scale-110 active:scale-95 transition-all duration-300"
      >
        {/* Soft Ambient Radar Ping Ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500/25 animate-ping -z-10" />

        {/* Subtle Live Dot */}
        <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-emerald-400 border border-slate-900 animate-pulse" />

        {/* Minimal WhatsApp Icon */}
        <svg
          className="w-5 h-5 fill-white group-hover:fill-emerald-400 transition-colors"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.24-.75-.67-1.25-1.49-1.4-1.74-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.49-.4-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.78 2.71 4.3 3.8.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.12-.23-.19-.48-.31z" />
        </svg>
      </a>
    </aside>
  );
}
