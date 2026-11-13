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
          ? 'bg-[#1C1A18] text-[#E07A5F] hover:text-[#F4A261] border border-[#2E2A27] hover:border-[#E07A5F]/40 shadow-sm'
          : 'bg-[#FAF8F5] hover:bg-[#F2EFE9] text-[#C2613A] hover:text-[#9A4321] border border-[#E7E2DB] hover:border-[#D6D0C7] shadow-sm'
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
