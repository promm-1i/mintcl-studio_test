import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PORTFOLIO_SAMPLES } from '../data/portfolioData';
import { PortfolioSample, SectionId } from '../types';
import { 
  Eye, 
  ExternalLink, 
  Check, 
  Send, 
  Info,
  Sparkles,
  Maximize2,
  X,
  Layers,
  Layout,
  CheckCircle2,
  Coffee,
  Stethoscope,
  Building2,
  ShieldCheck,
  Scissors,
  Flame,
  Globe,
  Laptop,
  Smartphone,
  Search,
  Lock,
  ArrowLeft,
  ArrowRight,
  RotateCw
} from 'lucide-react';

interface PortfolioSectionProps {
  onSelectServiceForInquiry: (serviceTitle: string) => void;
  onNavigate: (sectionId: SectionId) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  onSelectServiceForInquiry,
  onNavigate,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [previewModalSample, setPreviewModalSample] = useState<PortfolioSample | null>(null);

  const categories = [
    { id: 'all', label: '전체 샘플 시안', count: 5, icon: Layout },
    { id: 'cafe', label: '카페 · 베이커리', count: 1, icon: Coffee },
    { id: 'security', label: '기업 · B2B IT', count: 1, icon: Building2 },
    { id: 'interior', label: '건설 · 인테리어', count: 1, icon: Layers },
    { id: 'beauty', label: '뷰티 · 헤어숍', count: 1, icon: Scissors },
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

  // Badge theme color helper
  const getCategoryThemeClass = (category: string) => {
    switch (category) {
      case 'cafe':
        return {
          badgeBg: 'bg-amber-100 text-amber-900 border-amber-300',
          accentBtn: 'bg-amber-700 hover:bg-amber-800 text-white',
          tagBg: 'bg-amber-50 text-amber-800 border-amber-200',
          accentColor: 'text-amber-700',
        };
      case 'hospital':
        return {
          badgeBg: 'bg-sky-100 text-sky-900 border-sky-300',
          accentBtn: 'bg-sky-700 hover:bg-sky-800 text-white',
          tagBg: 'bg-sky-50 text-sky-800 border-sky-200',
          accentColor: 'text-sky-700',
        };
      case 'interior':
        return {
          badgeBg: 'bg-slate-800 text-slate-100 border-slate-700',
          accentBtn: 'bg-slate-900 hover:bg-slate-800 text-white',
          tagBg: 'bg-slate-100 text-slate-800 border-slate-300',
          accentColor: 'text-slate-900',
        };
      case 'security':
        return {
          badgeBg: 'bg-cyan-100 text-cyan-900 border-cyan-300',
          accentBtn: 'bg-slate-900 hover:bg-slate-800 text-white',
          tagBg: 'bg-slate-100 text-slate-800 border-slate-300',
          accentColor: 'text-cyan-800',
        };
      case 'beauty':
        return {
          badgeBg: 'bg-rose-100 text-rose-900 border-rose-300',
          accentBtn: 'bg-rose-700 hover:bg-rose-800 text-white',
          tagBg: 'bg-rose-50 text-rose-800 border-rose-200',
          accentColor: 'text-rose-700',
        };
      case 'app':
        return {
          badgeBg: 'bg-indigo-100 text-indigo-900 border-indigo-300',
          accentBtn: 'bg-indigo-700 hover:bg-indigo-800 text-white',
          tagBg: 'bg-indigo-50 text-indigo-800 border-indigo-200',
          accentColor: 'text-indigo-700',
        };
      case 'restaurant':
        return {
          badgeBg: 'bg-red-100 text-red-900 border-red-300',
          accentBtn: 'bg-red-700 hover:bg-red-800 text-white',
          tagBg: 'bg-red-50 text-red-800 border-red-200',
          accentColor: 'text-red-700',
        };
      default:
        return {
          badgeBg: 'bg-teal-100 text-teal-900 border-teal-300',
          accentBtn: 'bg-teal-700 hover:bg-teal-800 text-white',
          tagBg: 'bg-teal-50 text-teal-800 border-teal-200',
          accentColor: 'text-teal-700',
        };
    }
  };

  return (
    <section id="portfolio-section" className="py-20 lg:py-28 bg-slate-50/70 border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Motion */}
        <motion.div 
          className="text-center max-w-3xl mx-auto space-y-3 mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold bg-teal-50 text-teal-800 border border-teal-200">
            <Sparkles className="w-4 h-4 text-teal-600" />
            <span>실제 제작 샘플 구경하기</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-sans">
            업종별 맞춤 웹사이트 샘플
          </h2>
          <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
            스마트폰과 컴퓨터에서 똑같이 잘 보이는 실제 웹사이트 샘플입니다.<br />
            아래의 <strong>[샘플 보기]</strong> 버튼을 누르시면 준비된 홈페이지를 직접 눌러보며 구경하실 수 있습니다.
          </p>
        </motion.div>

        {/* Enhanced High-Contrast Filter Category Tabs with Motion */}
        <motion.div 
          className="bg-white p-2.5 rounded-2xl border border-slate-200 shadow-sm max-w-5xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => {
              const IconComp = cat.icon;
              const isSelected = selectedCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  id={`portfolio-filter-${cat.id}`}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer flex items-center gap-2 ${
                    isSelected
                      ? 'bg-slate-900 text-white shadow-md scale-102 ring-2 ring-slate-900'
                      : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200/80 hover:text-slate-900'
                  }`}
                >
                  <IconComp className={`w-4 h-4 ${isSelected ? 'text-teal-400' : 'text-slate-500'}`} />
                  <span>{cat.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                    isSelected ? 'bg-teal-500 text-slate-950' : 'bg-slate-200 text-slate-700'
                  }`}>
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Spacious 2-Column Showcase Grid with Staggered Motion */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 text-left">
          {filteredSamples.map((sample, idx) => {
            const theme = getCategoryThemeClass(sample.category);

            return (
              <motion.div
                key={sample.id}
                className="bg-white rounded-3xl border border-slate-200/90 shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col justify-between group"
                initial={{ opacity: 0, y: 40, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
              >
                <div>
                  
                  {/* REALISTIC BROWSER CHROME HEADER (Desktop Web Screengrab Window) */}
                  <div className="bg-slate-900 px-4 py-2.5 flex items-center justify-between border-b border-slate-800 gap-2">
                    <div className="flex items-center gap-1.5 shrink-0">
                      <span className="w-3 h-3 rounded-full bg-red-500/90 inline-block" />
                      <span className="w-3 h-3 rounded-full bg-yellow-500/90 inline-block" />
                      <span className="w-3 h-3 rounded-full bg-green-500/90 inline-block" />
                    </div>

                    {/* Browser Address Bar */}
                    <div className="flex-1 max-w-md bg-slate-950/90 border border-slate-700/80 rounded-lg px-3 py-1 flex items-center justify-between text-[11px] font-mono text-slate-200 mx-2 shadow-inner">
                      <div className="flex items-center gap-1.5 truncate">
                        <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
                        <span className="text-slate-400 text-[10px]">https://</span>
                        <span className="text-slate-100 font-bold truncate">mintcle.studio{sample.samplePath}</span>
                      </div>
                      <span className="text-[10px] text-teal-300 bg-teal-950 px-1.5 py-0.2 rounded border border-teal-800 shrink-0 font-bold">LIVE</span>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <span className={`hidden sm:inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${theme.badgeBg}`}>
                        {sample.type}
                      </span>
                      <button
                        onClick={() => setPreviewModalSample(sample)}
                        className="text-xs text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 px-2.5 py-1 rounded-lg transition-colors flex items-center gap-1 cursor-pointer border border-slate-700"
                        title="시안 크게 보기"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">확대</span>
                      </button>
                    </div>
                  </div>

                  {/* REALISTIC WEBPAGE CAPTURE CANVAS */}
                  <div 
                    onClick={() => handleOpenSamplePage(sample.samplePath)}
                    className="relative aspect-[16/10] sm:aspect-[16/9] bg-slate-950 overflow-hidden cursor-pointer group/img select-none border-b border-slate-200"
                  >
                    {/* Web Page Photo Hero Background */}
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover/img:scale-105" 
                      style={{ backgroundImage: `url('${sample.coverImage}')` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-slate-950/30" />
                    </div>

                    {/* Web Page Navigation Bar Overlay (Simulating real website header) */}
                    <div className="absolute top-0 left-0 right-0 p-3 bg-slate-900/90 backdrop-blur-md border-b border-slate-800/80 flex items-center justify-between text-white z-10">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-md bg-teal-500 text-slate-950 flex items-center justify-center font-black text-xs">
                          {sample.title.slice(0, 1)}
                        </div>
                        <span className="text-xs font-extrabold text-slate-100">{sample.title.split(' ')[0]} Official</span>
                      </div>
                      <div className="flex items-center gap-3 text-[11px] text-slate-300 font-semibold">
                        <span className="hidden sm:inline hover:text-white">메인</span>
                        <span className="hidden sm:inline hover:text-white">브랜드 소개</span>
                        <span className="hidden sm:inline hover:text-white">서비스/메뉴</span>
                        <span className="bg-teal-500 text-slate-950 px-2.5 py-0.5 rounded-full font-bold text-[10px]">온라인 예약</span>
                      </div>
                    </div>

                    {/* Web Page Hero Title Capture Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 z-10 p-4 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-slate-700/80 text-left shadow-2xl">
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <span className="inline-flex items-center gap-1 text-[10px] font-extrabold text-teal-300 bg-teal-950/90 px-2.5 py-0.5 rounded border border-teal-800">
                          <Globe className="w-3 h-3 text-teal-400" />
                          <span>독립 웹사이트 실제 구현 화면</span>
                        </span>
                        <span className="text-[10px] font-bold text-amber-300 bg-amber-950/80 px-2 py-0.5 rounded border border-amber-800">
                          모바일/PC 지원
                        </span>
                      </div>
                      <h4 className="text-sm sm:text-base font-extrabold text-white leading-tight">
                        "{sample.mockupDetails.heroHeading}"
                      </h4>
                      <p className="text-[11px] text-slate-300 mt-1 line-clamp-1">
                        {sample.mockupDetails.heroSub}
                      </p>
                    </div>

                    {/* Hover Full Screen Overlay Badge */}
                    <div className="absolute inset-0 bg-slate-950/75 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4 z-20 backdrop-blur-xs">
                      <div className="bg-gradient-to-r from-teal-500 to-teal-400 text-slate-950 font-black px-6 py-3.5 rounded-2xl shadow-2xl text-xs sm:text-sm flex items-center gap-2 transform group-hover/img:scale-105 transition-transform">
                        <Eye className="w-5 h-5 text-slate-950" />
                        <span>독립 샘플 웹사이트 새 창으로 열기</span>
                        <ExternalLink className="w-4 h-4 text-slate-950" />
                      </div>
                    </div>
                  </div>

                  {/* Card Content Description Area */}
                  <div className="p-6 sm:p-8 space-y-6">
                    
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 group-hover:text-teal-700 transition-colors">
                          {sample.title}
                        </h3>
                      </div>
                      <p className="text-sm sm:text-base font-bold text-teal-700">
                        {sample.tagline}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                      {sample.description}
                    </p>

                    {/* HIGH-VISIBILITY LIGHT THEME CONCEPT & SECTION BREAKDOWN */}
                    <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/90 space-y-3.5">
                      <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-200">
                        <span className="font-extrabold text-slate-900 flex items-center gap-1.5 text-xs sm:text-sm">
                          <Sparkles className="w-4 h-4 text-teal-600" />
                          <span>주요 구성 섹션 (6개 모듈)</span>
                        </span>
                        <span className="text-[11px] font-extrabold bg-teal-100 text-teal-900 px-2.5 py-0.5 rounded-md border border-teal-200">
                          {sample.mockupDetails.primaryCta}
                        </span>
                      </div>

                      {/* Section Chips in High-Contrast White Cards */}
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-1">
                        {sample.mockupDetails.sections.map((sec, idx) => (
                          <div key={idx} className="bg-white p-2.5 rounded-xl border border-slate-200 text-left shadow-2xs">
                            <div className="text-xs sm:text-sm font-extrabold text-slate-900 truncate">{sec.name}</div>
                            <div className="text-xs text-slate-600 truncate mt-0.5">{sec.desc}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Explicit Metadata Specs Grid */}
                    <div className="bg-white p-4.5 rounded-2xl border border-slate-200 text-sm text-slate-800 space-y-2.5 shadow-2xs">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <div>
                          <span className="font-extrabold text-slate-900">ㆍ업종 카테고리: </span>
                          <span className="font-bold text-teal-800">{sample.type}</span>
                        </div>
                        <div>
                          <span className="font-extrabold text-slate-900">ㆍ예상 제작 기간: </span>
                          <span className="font-bold text-slate-800">{sample.productionPeriod}</span>
                        </div>
                      </div>

                      <div>
                        <span className="font-extrabold text-slate-900">ㆍ주요 제작 범위: </span>
                        <span className="text-slate-800 font-medium">{sample.scopeOfWork}</span>
                      </div>

                      <div>
                        <span className="font-extrabold text-slate-900">ㆍ반응형 웹 지원: </span>
                        <span className="font-bold text-emerald-800">{sample.responsiveSupport}</span>
                      </div>
                    </div>

                    {/* Feature Tags List */}
                    <div className="space-y-2 pt-1">
                      <span className="text-xs font-extrabold text-slate-900 uppercase tracking-wider block">
                        핵심 구성 요소:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {sample.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className={`text-xs font-bold px-3 py-1.5 rounded-lg border ${theme.tagBg}`}
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>

                </div>

                {/* Bottom Action Footer */}
                <div className="p-5 sm:px-8 border-t border-slate-100 bg-slate-50/70 flex flex-col sm:flex-row gap-3">
                  <button
                    id={`view-sample-btn-${sample.id}`}
                    onClick={() => handleOpenSamplePage(sample.samplePath)}
                    className={`flex-1 py-3.5 px-4 rounded-xl font-extrabold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm ${theme.accentBtn}`}
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>독립 샘플 웹사이트 열기</span>
                  </button>

                  <button
                    id={`sample-inquire-btn-${sample.id}`}
                    onClick={() => handleInquiryForSample(sample.type)}
                    className="py-3.5 px-5 rounded-xl font-extrabold text-sm text-slate-800 bg-white border border-slate-300 hover:bg-slate-100 transition-all cursor-pointer flex items-center justify-center gap-1.5 shadow-2xs"
                    title="이 서비스 스타일로 견적 문의"
                  >
                    <Send className="w-4 h-4 text-teal-600" />
                    <span>맞춤 견적 문의</span>
                  </button>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Live Preview Enlarged Modal (High-Contrast Clean Light Theme) */}
        {previewModalSample && (
          <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 shadow-2xl text-left p-6 sm:p-8 space-y-6 relative">
              
              <button
                onClick={() => setPreviewModalSample(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200 cursor-pointer transition-colors"
                title="닫기"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="space-y-2">
                <span className="px-3 py-1 rounded-md text-xs font-extrabold bg-teal-100 text-teal-900 border border-teal-200">
                  {previewModalSample.type}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  {previewModalSample.title}
                </h3>
                <p className="text-sm font-bold text-teal-700">
                  {previewModalSample.tagline}
                </p>
              </div>

              {/* Large Image View in Browser Capture Frame */}
              <div className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 shadow-xl">
                <div className="bg-slate-900 px-4 py-2.5 flex items-center justify-between border-b border-slate-800">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/90 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/90 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/90 inline-block" />
                  </div>
                  <div className="bg-slate-950 border border-slate-700 rounded px-3 py-0.5 text-[11px] font-mono text-slate-200 flex items-center gap-1.5">
                    <Lock className="w-3 h-3 text-emerald-400" />
                    <span>https://mintcle.studio{previewModalSample.samplePath}</span>
                  </div>
                  <span className="text-[10px] text-teal-300 bg-teal-950 border border-teal-800 px-2 py-0.5 rounded font-bold">100% LIVE</span>
                </div>
                <img
                  src={previewModalSample.coverImage}
                  alt={previewModalSample.title}
                  className="w-full h-auto max-h-[480px] object-cover"
                />
              </div>

              <div className="space-y-2 text-sm text-slate-800 leading-relaxed">
                <h4 className="font-extrabold text-slate-900 text-base">시안 개요 및 기획 의도</h4>
                <p className="text-slate-600">{previewModalSample.description}</p>
              </div>

              {/* Layout Features */}
              <div className="space-y-3 bg-slate-50 p-5 rounded-2xl border border-slate-200">
                <h4 className="font-extrabold text-slate-900 text-xs uppercase tracking-wider">
                  포함된 핵심 레이아웃 구조
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs font-semibold text-slate-800">
                  {previewModalSample.layoutFeatures.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 bg-white p-2.5 rounded-xl border border-slate-200 shadow-2xs">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => {
                    handleOpenSamplePage(previewModalSample.samplePath);
                    setPreviewModalSample(null);
                  }}
                  className="flex-1 py-3.5 rounded-xl font-extrabold text-sm text-white bg-teal-600 hover:bg-teal-700 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>독립 샘플 웹사이트 새 창으로 열기</span>
                </button>
                <button
                  onClick={() => {
                    handleInquiryForSample(previewModalSample.type);
                    setPreviewModalSample(null);
                  }}
                  className="px-6 py-3.5 rounded-xl font-extrabold text-sm text-slate-800 bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer"
                >
                  맞춤 제작 문의하기
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};

