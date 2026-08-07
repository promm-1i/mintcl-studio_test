import React, { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { PORTFOLIO_SAMPLES } from '../data/portfolioData';
import { SectionId } from '../types';
import {
  ArrowUpRight,
  Send,
  Layout,
  Coffee,
  Stethoscope,
  Building2,
  Layers,
  Scissors,
  Flame,
  Smartphone,
} from 'lucide-react';

interface PortfolioSectionProps {
  onSelectServiceForInquiry: (serviceTitle: string) => void;
  onNavigate: (sectionId: SectionId) => void;
}

const CATEGORY_ACCENT: Record<string, string> = {
  cafe: 'text-amber-700',
  hospital: 'text-sky-700',
  security: 'text-cyan-800',
  interior: 'text-slate-900',
  beauty: 'text-rose-700',
  restaurant: 'text-red-700',
  app: 'text-indigo-700',
};

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  onSelectServiceForInquiry,
  onNavigate,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const prefersReducedMotion = useReducedMotion();

  const categories = [
    { id: 'all', label: '전체', count: PORTFOLIO_SAMPLES.length, icon: Layout },
    { id: 'cafe', label: '카페 · 베이커리', count: 1, icon: Coffee },
    { id: 'hospital', label: '병원 · 의원', count: 1, icon: Stethoscope },
    { id: 'security', label: '기업 · B2B IT', count: 1, icon: Building2 },
    { id: 'interior', label: '건설 · 인테리어', count: 1, icon: Layers },
    { id: 'beauty', label: '뷰티 · 헤어숍', count: 1, icon: Scissors },
    { id: 'restaurant', label: '한식 · 고깃집', count: 1, icon: Flame },
    { id: 'app', label: '모바일 앱 · SaaS', count: 1, icon: Smartphone },
  ];

  const filteredSamples = selectedCategory === 'all'
    ? PORTFOLIO_SAMPLES
    : PORTFOLIO_SAMPLES.filter(s => s.category === selectedCategory);

  const handleInquiryForSample = (sampleType: string) => {
    onSelectServiceForInquiry(sampleType);
    onNavigate('inquiry');
  };

  const handleOpenSamplePage = (path: string) => {
    window.open(path, '_blank');
  };

  const isAsymmetric = selectedCategory === 'all';

  return (
    <section id="portfolio-section" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header — editorial, left-aligned, not centered/badge-heavy */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12 border-b border-slate-200 pb-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-mint-600">
              Selected Works
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              최근 제작 프로젝트
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              업종별로 직접 제작한 샘플 웹사이트입니다. 카드를 눌러 실제 동작하는 페이지를 확인하세요.
            </p>
          </div>

          {/* Category filter — plain text list, not pill-button wall */}
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`font-bold transition-colors cursor-pointer pb-1 border-b-2 ${
                    isSelected
                      ? 'text-slate-900 border-mint-500'
                      : 'text-slate-400 border-transparent hover:text-slate-700'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Editorial asymmetric grid: first item featured (all-filter only) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredSamples.map((sample, idx) => {
            const featured = isAsymmetric && idx === 0;
            const accent = CATEGORY_ACCENT[sample.category] ?? 'text-mint-700';

            return (
              <motion.article
                key={sample.id}
                className={`group ${featured ? 'lg:col-span-2 lg:row-span-2' : 'lg:col-span-1'}`}
                initial={prefersReducedMotion ? undefined : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: Math.min(idx, 4) * 0.08 }}
              >
                <button
                  onClick={() => handleOpenSamplePage(sample.samplePath)}
                  className="block w-full text-left cursor-pointer"
                  title={`${sample.title} — 새 창에서 열기`}
                >
                  <div className={`relative overflow-hidden bg-slate-950 ${featured ? 'aspect-[16/10]' : 'aspect-[4/3]'}`}>
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                      style={{ backgroundImage: `url('${sample.coverImage}')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/10 to-transparent" />
                    <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/15 transition-colors duration-300" />

                    <span className="absolute top-4 left-4 text-[10px] font-bold tracking-widest uppercase text-white/80 bg-white/10 backdrop-blur-sm px-2.5 py-1 rounded">
                      Sample Project
                    </span>

                    <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 flex items-end justify-between gap-3">
                      <div>
                        <span className="text-[11px] font-bold text-mint-300 uppercase tracking-wider block mb-1">
                          {sample.type}
                        </span>
                        <h3 className={`font-extrabold text-white leading-snug ${featured ? 'text-xl sm:text-2xl' : 'text-base sm:text-lg'}`}>
                          {sample.title}
                        </h3>
                      </div>
                      <span className="shrink-0 w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center transition-all duration-300 group-hover:bg-mint-400 group-hover:border-mint-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                        <ArrowUpRight className="w-4 h-4 text-white group-hover:text-charcoal" />
                      </span>
                    </div>
                  </div>
                </button>

                <div className="pt-4 space-y-3">
                  <p className={`text-sm text-slate-600 leading-relaxed ${featured ? '' : 'line-clamp-2'}`}>
                    {sample.description}
                  </p>

                  {featured && (
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-xs text-slate-600 pt-1">
                      {sample.layoutFeatures.slice(0, 4).map((feat, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className={`font-bold ${accent}`}>·</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="flex items-center gap-4 pt-1 text-xs font-bold">
                    <button
                      onClick={() => handleOpenSamplePage(sample.samplePath)}
                      className={`inline-flex items-center gap-1 cursor-pointer ${accent} hover:underline underline-offset-4`}
                    >
                      View Project
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => handleInquiryForSample(sample.type)}
                      className="inline-flex items-center gap-1 text-slate-500 hover:text-slate-800 cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                      이 스타일로 문의
                    </button>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

      </div>
    </section>
  );
};
