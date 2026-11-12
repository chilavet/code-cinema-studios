import React from 'react';
import { Sunset, Sunrise } from 'lucide-react';
import { useTheme } from '../context/useTheme';

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`group relative inline-flex items-center justify-center p-2 rounded-xl transition-all duration-300 cursor-pointer ${
        isDark
          ? 'bg-slate-900/90 text-amber-400 hover:text-amber-300 border border-amber-500/30 hover:border-amber-400/60 shadow-[0_0_14px_rgba(251,191,36,0.18)] hover:shadow-[0_0_20px_rgba(251,191,36,0.3)]'
          : 'bg-amber-50/90 text-amber-700 hover:text-amber-800 border border-amber-200/90 hover:border-amber-300 shadow-sm hover:shadow'
      }`}
      title={isDark ? 'Dawn (Click for Day Mode)' : 'Sunset (Click for Night Mode)'}
      aria-label={isDark ? 'Switch to Day Mode (Dawn)' : 'Switch to Night Mode (Sunset)'}
    >
      {isDark ? (
        <Sunrise className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-110" />
      ) : (
        <Sunset className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5 group-hover:scale-110" />
      )}
    </button>
  );
}

