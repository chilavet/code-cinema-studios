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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-xl rounded-3xl p-6 sm:p-8 border border-slate-200 relative shadow-2xl transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-lg text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono font-semibold uppercase tracking-wider mb-3 bg-slate-100 text-slate-700 border border-slate-200">
          <Layers className="w-3 h-3 text-slate-500" />
          <span>{project.categoryLabel || project.subtitle}</span>
        </div>

        <h3 className="text-2xl font-bold text-slate-900 mb-2">
          {project.title}
        </h3>

        <p className="text-slate-600 text-sm leading-relaxed mb-6">
          {project.description}
        </p>

        {project.metrics && (
          <div className="mb-4 flex items-center gap-2 text-xs font-mono font-bold text-slate-900 bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>{project.metrics}</span>
          </div>
        )}

        <div className="mb-6 p-4 rounded-xl bg-slate-50 border border-slate-200">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-slate-500 mb-1.5">
            <Cpu className="w-3.5 h-3.5 text-slate-600" />
            <span>Technical Architecture</span>
          </div>
          <p className="text-xs text-slate-800 font-mono font-medium">{project.stack}</p>
        </div>

        <div className="flex gap-3">
          <a
            href="#contact"
            onClick={() => {
              onClose();
              if (onDiscussSimilar) onDiscussSimilar(project);
            }}
            className="flex-1 py-3 text-center rounded-xl font-semibold text-xs text-white bg-slate-900 hover:bg-slate-800 transition-colors flex items-center justify-center gap-2 shadow-sm"
          >
            <span>Inquire About A Similar Deployment</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
          <button
            onClick={onClose}
            className="px-5 py-3 rounded-xl text-xs font-semibold text-slate-700 hover:text-slate-950 border border-slate-200 hover:bg-slate-50 transition-colors"
          >
            Dismiss
          </button>
        </div>
      </div>
    </div>
  );
}
