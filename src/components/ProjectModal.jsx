import React, { useEffect } from 'react';
import { X, ArrowRight, Layers, Cpu } from 'lucide-react';

export default function ProjectModal({ isOpen, project, onClose, onDiscussSimilar }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-[#FAF8F5] dark:bg-[#1C1A18] w-full max-w-xl rounded-3xl p-6 sm:p-8 border border-[#E7E2DB] dark:border-[#2C2825] relative shadow-2xl transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-lg text-stone-400 hover:text-stone-900 dark:hover:text-white hover:bg-stone-100 dark:hover:bg-[#252220] transition-colors"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider mb-3 bg-[#F2EFE9] dark:bg-[#252220] text-stone-700 dark:text-stone-300 border border-[#E7E2DB] dark:border-[#2E2A27]">
          <Layers className="w-3 h-3 text-stone-500" />
          <span>{project.categoryLabel || project.subtitle}</span>
        </div>

        <h3 className="text-2xl font-bold text-stone-900 dark:text-stone-100 mb-2">
          {project.title}
        </h3>

        <p className="text-stone-600 dark:text-stone-300 text-sm leading-relaxed mb-6">
          {project.description}
        </p>

        {project.metrics && (
          <div className="mb-4 flex items-center gap-2 text-xs font-bold text-stone-900 dark:text-stone-100 bg-[#F2EFE9] dark:bg-[#252220] border border-[#E7E2DB] dark:border-[#2E2A27] rounded-xl px-3.5 py-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2A6F62]" />
            <span>{project.metrics}</span>
          </div>
        )}

        <div className="mb-6 p-4 rounded-xl bg-[#F2EFE9] dark:bg-[#252220] border border-[#E7E2DB] dark:border-[#2E2A27]">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-500 mb-1.5">
            <Cpu className="w-3.5 h-3.5 text-stone-600 dark:text-stone-400" />
            <span>Technical Architecture</span>
          </div>
          <p className="text-xs text-stone-800 dark:text-stone-200 font-medium">{project.stack}</p>
        </div>

        <div className="flex gap-3">
          <a
            href="#contact"
            onClick={() => {
              onClose();
              if (onDiscussSimilar) onDiscussSimilar(project);
            }}
            className="flex-1 py-3 text-center rounded-xl font-semibold text-xs text-stone-50 bg-stone-900 hover:bg-stone-800 dark:bg-[#C2613A] dark:hover:bg-[#A84F2E] dark:text-white transition-colors flex items-center justify-center gap-2 shadow-sm"
          >
            <span>Inquire About A Similar Deployment</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
          <button
            onClick={onClose}
            className="px-5 py-3 rounded-xl text-xs font-semibold text-stone-700 dark:text-stone-300 hover:text-stone-950 dark:hover:text-white border border-[#E7E2DB] dark:border-[#2C2825] hover:bg-white dark:hover:bg-[#252220] transition-colors"
          >
            Dismiss
          </button>
        </div>
      </div>
    </div>
  );
}
