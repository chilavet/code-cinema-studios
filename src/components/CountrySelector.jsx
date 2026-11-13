import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';
import { useLanguage } from '../context/useLanguage';

export default function CountrySelector({ align = 'right' }) {
  const { country, countries, setCountryCode, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t.nav.selectCountry}
        className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-medium text-stone-700 dark:text-stone-200 hover:text-stone-950 dark:hover:text-white bg-[#F2EFE9] dark:bg-[#1E1C1A] hover:bg-[#EAE5DC] dark:hover:bg-[#282522] border border-[#E7E2DB] dark:border-[#2C2825] transition-all cursor-pointer"
      >
        <span className="text-base leading-none" aria-hidden="true">
          {country.flag}
        </span>
        <span className="text-xs font-semibold uppercase tracking-wide">
          {country.label}
        </span>
        <ChevronDown
          className={`w-3 h-3 text-stone-500 dark:text-stone-400 transition-transform duration-200 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>

      {open && (
        <div
          role="listbox"
          aria-label={t.nav.selectCountry}
          className={`absolute mt-2 w-56 rounded-2xl bg-[#FAF8F5]/95 dark:bg-[#1A1816]/95 backdrop-blur-md border border-[#E7E2DB] dark:border-[#2C2825] shadow-xl py-1.5 z-50 ${
            align === 'left' ? 'left-0' : 'right-0'
          }`}
        >
          <div className="max-h-72 overflow-y-auto py-1">
            {countries.map((c) => {
              const isSelected = c.code === country.code;
              return (
                <button
                  key={c.code}
                  type="button"
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => {
                    setCountryCode(c.code);
                    setOpen(false);
                  }}
                  className={`w-full px-3 py-2 text-left text-xs flex items-center justify-between gap-2 transition-colors cursor-pointer ${
                    isSelected
                      ? 'bg-stone-900 dark:bg-[#2A2623] text-stone-100 font-semibold'
                      : 'text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-[#24211E] hover:text-stone-950 dark:hover:text-white'
                  }`}
                >
                  <span className="flex items-center gap-2.5 min-w-0">
                    <span className="text-base leading-none shrink-0" aria-hidden="true">
                      {c.flag}
                    </span>
                    <span className="truncate">
                      {c.country}
                      <span
                        className={`ml-1.5 text-[11px] ${
                          isSelected ? 'text-stone-300' : 'text-stone-400 dark:text-stone-500'
                        }`}
                      >
                        · {c.nativeName}
                      </span>
                    </span>
                  </span>
                  {isSelected && <Check className="w-3.5 h-3.5 text-[#C2613A] dark:text-[#E07A5F] shrink-0" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
