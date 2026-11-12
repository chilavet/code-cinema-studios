import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/useTheme';

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`group relative inline-flex items-center justify-center p-2 rounded-xl transition-all duration-300 cursor-pointer ${
        isDark
          ? 'bg-slate-900 text-amber-400 hover:text-amber-300 border border-slate-800 hover:border-amber-500/40 shadow-[0_0_14px_rgba(251,191,36,0.18)] hover:shadow-[0_0_20px_rgba(251,191,36,0.3)]'
          : 'bg-white hover:bg-slate-100 text-amber-500 hover:text-amber-600 border border-slate-200/90 hover:border-slate-300 shadow-sm hover:shadow'
      }`}
      title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      aria-label={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    >
      {isDark ? (
        <Moon className="w-4 h-4 transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110" />
      ) : (
        <Sun className="w-4 h-4 transition-transform duration-300 group-hover:rotate-45 group-hover:scale-110" />
      )}
    </button>
  );
}
