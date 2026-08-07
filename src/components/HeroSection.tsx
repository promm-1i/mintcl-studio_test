import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { SectionId } from '../types';
import { PORTFOLIO_SAMPLES } from '../data/portfolioData';
import {
  ArrowRight,
  Layout,
  Lock,
  Globe,
  CheckCircle2,
} from 'lucide-react';

interface HeroSectionProps {
  onNavigate: (sectionId: SectionId) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onNavigate,
}) => {
  const prefersReducedMotion = useReducedMotion();
  const featured = PORTFOLIO_SAMPLES.find((s) => s.category === 'interior') ?? PORTFOLIO_SAMPLES[0];

  return (
    <section id="home-section" className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 bg-charcoal text-white border-b border-white/10 overflow-hidden">
      {/* Single restrained ambient accent — no blob/particle stack */}
      <div className="absolute -top-40 right-0 w-[560px] h-[560px] bg-mint-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">

          {/* Left: direct, non-abstract copy */}
          <motion.div
            className="lg:col-span-5 space-y-7 text-left"
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
          >
            <span className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-mint-400">
              Web Design Studio
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold leading-[1.25] tracking-tight">
              민트클은 소상공인과 기업의<br />
              홈페이지를 제작하는 스튜디오입니다
            </h1>

            <p className="text-sm sm:text-base text-white/70 leading-relaxed max-w-md">
              업종에 맞는 구조와 디자인으로 직접 만든 결과물을 포트폴리오로 먼저 보여드립니다.
              아래 샘플을 실제로 눌러보고, 원하는 스타일로 견적을 문의하세요.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                id="hero-portfolio-cta"
                onClick={() => onNavigate('portfolio')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-bold text-sm text-charcoal bg-mint-400 hover:bg-mint-300 transition-colors cursor-pointer"
              >
                <Layout className="w-4 h-4" />
                <span>Portfolio 보기</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-inquiry-cta"
                onClick={() => onNavigate('inquiry')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-bold text-sm text-white bg-transparent border border-white/25 hover:bg-white/10 transition-colors cursor-pointer"
              >
                <span>제작 문의하기</span>
              </button>
            </div>

            <div className="pt-4 flex items-center gap-2 text-xs text-white/50">
              <CheckCircle2 className="w-4 h-4 text-mint-400 shrink-0" />
              <span>투명한 견적과 1:1 기획 안내로 진행합니다</span>
            </div>
          </motion.div>

          {/* Right: real sample preview, not an abstract mockup */}
          <motion.div
            className="lg:col-span-7 relative"
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          >
            <button
              onClick={() => window.open(featured.samplePath, '_blank')}
              className="group relative block w-full text-left rounded-xl overflow-hidden border border-white/15 bg-charcoal-800 shadow-2xl cursor-pointer"
              title={`${featured.title} — 새 창에서 열기`}
            >
              {/* Browser chrome */}
              <div className="bg-charcoal-700 px-4 py-2.5 flex items-center gap-2 border-b border-white/10">
                <div className="flex items-center gap-1.5 shrink-0">
                  <span className="w-2.5 h-2.5 rounded-full bg-white/20 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white/20 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white/20 inline-block" />
                </div>
                <div className="flex-1 bg-charcoal px-3 py-1 rounded text-[11px] font-mono text-white/50 flex items-center gap-1.5 mx-2">
                  <Lock className="w-3 h-3 text-mint-400" />
                  <span>mintcle.studio{featured.samplePath}</span>
                </div>
                <Globe className="w-3.5 h-3.5 text-white/30 shrink-0" />
              </div>

              {/* Sample screen */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.03]"
                  style={{ backgroundImage: `url('${featured.coverImage}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                  <span className="text-[11px] font-bold text-mint-300 uppercase tracking-wider">
                    {featured.type}
                  </span>
                  <h3 className="text-lg sm:text-xl font-extrabold text-white mt-1">
                    {featured.title}
                  </h3>
                </div>
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/30 transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity px-4 py-2 rounded-lg bg-white text-charcoal text-xs font-bold flex items-center gap-1.5">
                    샘플 사이트 열기
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </button>

            <p className="mt-3 text-xs text-white/40 text-right">
              실제 제작 가능한 {PORTFOLIO_SAMPLES.length}개 업종 샘플 중 하나입니다 — 클릭 시 새 창에서 열립니다
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
