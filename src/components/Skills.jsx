import React, { useState } from 'react';
import { 
  Code, 
  Terminal, 
  Database, 
  GitBranch, 
  Layers, 
  Server, 
  Palette, 
  Cpu, 
  Boxes, 
  Sparkles
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const { categories } = portfolioData.skills;
  const [activeCategory, setActiveCategory] = useState('all');

  const getIcon = (name) => {
    switch (name.toLowerCase()) {
      case 'java':
        return <Terminal className="w-4 h-4 text-amber-600" />;
      case 'python':
        return <Terminal className="w-4 h-4 text-blue-600" />;
      case 'c++':
      case 'c':
        return <Code className="w-4 h-4 text-indigo-600" />;
      case 'javascript':
        return <Terminal className="w-4 h-4 text-yellow-600" />;
      case 'react.js':
      case 'react':
        return <Boxes className="w-4 h-4 text-cyan-600" />;
      case 'node.js':
      case 'express.js':
        return <Server className="w-4 h-4 text-emerald-600" />;
      case 'django':
        return <Cpu className="w-4 h-4 text-emerald-800" />;
      case 'tailwind css':
      case 'html5 / css3':
        return <Palette className="w-4 h-4 text-sky-600" />;
      case 'sql':
      case 'sqlite':
      case 'mongodb':
        return <Database className="w-4 h-4 text-orange-600" />;
      case 'git':
      case 'github':
        return <GitBranch className="w-4 h-4 text-red-600" />;
      default:
        return <Layers className="w-4 h-4 text-stone-600" />;
    }
  };

  const filteredCategories = activeCategory === 'all' 
    ? categories 
    : categories.filter(c => c.id === activeCategory);

  return (
    <section id="skills" className="py-20 md:py-28 border-t border-stone-200/80">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono-code text-xs font-semibold text-stone-500 uppercase tracking-widest">
            03 / Technical Proficiency
          </span>
          <div className="h-px bg-stone-200 flex-1" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-editorial font-bold text-stone-900 leading-tight mb-2">
              Skills & Developer Toolchain
            </h2>
            <p className="text-stone-600 text-sm max-w-xl">
              Languages, frameworks, and database technologies I utilize to build end-to-end software solutions.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeCategory === 'all'
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'bg-white text-stone-600 hover:text-stone-950 border border-stone-200'
              }`}
            >
              All Skills
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeCategory === cat.id
                    ? 'bg-stone-900 text-white shadow-xs'
                    : 'bg-white text-stone-600 hover:text-stone-950 border border-stone-200'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-stone-200 shadow-xs hover:border-stone-300 transition-all"
            >
              <div className="mb-4 pb-3 border-b border-stone-100 flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-stone-900 text-base">
                    {category.title}
                  </h3>
                  <p className="text-xs text-stone-400 mt-0.5 font-mono-code">
                    {category.description}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {category.items.map((skill, idx) => (
                  <div
                    key={idx}
                    className={`p-3 rounded-xl border transition-all flex flex-col justify-between ${
                      skill.highlight 
                        ? 'bg-stone-50/80 border-stone-300 shadow-2xs hover:border-stone-900' 
                        : 'bg-white border-stone-200 hover:border-stone-300'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="p-1.5 rounded-lg bg-white border border-stone-100 shadow-2xs">
                        {getIcon(skill.name)}
                      </div>
                      <span className="text-[10px] font-mono-code uppercase font-semibold text-stone-400">
                        {skill.level}
                      </span>
                    </div>

                    <div className="font-semibold text-stone-900 text-xs">
                      {skill.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Proficiency Summary Footnote */}
        <div className="mt-8 p-4 rounded-xl bg-stone-100/60 border border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-stone-600">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-stone-800" />
            <span>
              Primary focus areas: <strong className="text-stone-900">Object-Oriented Programming with Java</strong>, <strong className="text-stone-900">Backend Web with Python/Django</strong>, and <strong className="text-stone-900">MERN Stack</strong>.
            </span>
          </div>
          <span className="font-mono-code text-[11px] text-stone-400">
            Updated for 2026/2027 Academic Cycle
          </span>
        </div>
      </div>
    </section>
  );
}
