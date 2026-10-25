import React, { useState } from 'react';
import { PROJECTS, CATEGORIES } from '../data/projects';
import { ArrowUpRight } from 'lucide-react';

export default function Showcase({ onSelectProject }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects =
    activeCategory === 'all'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="showcase" className="py-24 relative z-10 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header & Minimal Filters */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-slate-500 uppercase tracking-widest mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
              <span>Selected Deployments</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              Case studies & production work.
            </h2>
            <p className="mt-3 text-slate-600 text-sm leading-relaxed">
              Explore our mobile titles, distributed cloud microservices, and 24/7 client care fleets.
            </p>
          </div>

          {/* Minimal Filter Tabs */}
          <div className="flex flex-wrap gap-1 p-1 rounded-xl bg-slate-100 border border-slate-200">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                    isActive
                      ? 'bg-white text-slate-950 font-bold shadow-sm'
                      : 'text-slate-600 hover:text-slate-950'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid with Smooth Tab Enter Animation */}
        <div key={activeCategory} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-tab-enter">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="card-minimal rounded-2xl overflow-hidden cursor-pointer group flex flex-col justify-between shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
            >
              <div>
                {/* Visual Header Deck */}
                <div className="relative h-44 bg-slate-50 border-b border-slate-200 flex items-center justify-center overflow-hidden">
                  <div className="text-5xl opacity-60 group-hover:opacity-100 group-hover:scale-115 group-hover:-rotate-3 transition-all duration-300">
                    {project.icon}
                  </div>

                  {/* Category Chip */}
                  <span className="absolute top-3 right-3 text-[10px] font-mono font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-white text-slate-700 border border-slate-200 shadow-sm">
                    {project.categoryLabel}
                  </span>

                  {/* Metric Chip */}
                  {project.metrics && (
                    <span className="absolute bottom-3 left-3 text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-white text-slate-900 border border-slate-200 shadow-sm">
                      {project.metrics}
                    </span>
                  )}
                </div>

                {/* Body Content */}
                <div className="p-6">
                  <span className="text-[10px] font-mono font-medium text-slate-500 uppercase tracking-wider block mb-1">
                    {project.subtitle}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-900 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm mt-2 line-clamp-2 leading-relaxed">
                    {project.summary}
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <span className="text-[10px] font-mono text-slate-500 block mb-0.5">Stack</span>
                    <p className="text-xs font-mono font-medium text-slate-800 truncate">
                      {project.stack}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Bar */}
              <div className="px-6 py-3.5 bg-slate-50/70 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-700 group-hover:text-slate-950 transition-colors">
                <span>View Case Study Specs</span>
                <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
