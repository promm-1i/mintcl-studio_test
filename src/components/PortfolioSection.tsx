import React, { useState } from 'react';
import { PORTFOLIO_SAMPLES } from '../data/portfolioData';
import { PortfolioSample, SectionId } from '../types';
import { 
  Eye, 
  Smartphone, 
  Monitor, 
  Check, 
  X, 
  Send, 
  Sparkles,
  Info
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
  const [activeMockup, setActiveMockup] = useState<PortfolioSample | null>(null);
  const [deviceMode, setDeviceMode] = useState<'desktop' | 'mobile'>('desktop');

  const categories = [
    { id: 'all', label: '전체 보기' },
    { id: 'corporate', label: '기업 홈페이지' },
    { id: 'smallbiz', label: '소상공인 매장' },
    { id: 'portfolio', label: '포트폴리오' },
    { id: 'landing', label: '서비스 랜딩' },
    { id: 'renewal', label: '리뉴얼 시안' },
  ];

  const filteredSamples = selectedCategory === 'all'
    ? PORTFOLIO_SAMPLES
    : PORTFOLIO_SAMPLES.filter(s => s.category === selectedCategory);

  const handleInquiryForSample = (sampleType: string) => {
    setActiveMockup(null);
    onSelectServiceForInquiry(sampleType);
    onNavigate('inquiry');
  };

  return (
    <section id="portfolio-section" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-teal-50 text-teal-800 border border-teal-200">
            <span>제작 가능 샘플 시안</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-sans">
            제작 가능한 <span className="text-teal-600">웹사이트 유형별 레이아웃</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            민트클 웹스튜디오는 허위 실적이나 가짜 숫자를 만들지 않습니다.<br />
            대신 고객님의 비즈니스에 구현 가능한 레이아웃 시안과 정돈된 모바일 대응 구조를 투명하게 제시합니다.
          </p>

          {/* Honest Notice Banner */}
          <div className="p-3 bg-white rounded-xl border border-teal-200/80 shadow-2xs text-xs text-slate-600 flex items-center justify-center gap-2 max-w-xl mx-auto mt-2">
            <Info className="w-4 h-4 text-teal-600 shrink-0" />
            <span>모든 예시는 실제 커스텀 개발이 가능한 대표 레이아웃 프로토타입입니다.</span>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              id={`portfolio-filter-${cat.id}`}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-teal-600 text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Sample Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {filteredSamples.map((sample) => (
            <div
              key={sample.id}
              className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden hover:shadow-lg transition-all flex flex-col justify-between group"
            >
              {/* Card Header & Simulated Visual Thumbnail */}
              <div>
                <div className="p-5 bg-gradient-to-br from-slate-900 to-slate-800 text-white relative">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-bold bg-teal-500/30 text-teal-300 border border-teal-400/30 px-2.5 py-0.5 rounded-full">
                      {sample.type}
                    </span>
                    <span className="text-[10px] text-slate-300 bg-slate-800 px-2 py-0.5 rounded">
                      {sample.colorTheme}
                    </span>
                  </div>

                  {/* Wireframe Mockup Preview */}
                  <div className="bg-slate-950/80 rounded-lg p-3 border border-slate-700 space-y-2 mt-2">
                    <div className="h-2 w-1/3 bg-teal-400/80 rounded" />
                    <div className="h-1.5 w-3/4 bg-slate-600 rounded" />
                    <div className="h-1.5 w-1/2 bg-slate-600 rounded" />
                    <div className="pt-2 flex gap-1.5">
                      <div className="h-8 flex-1 bg-slate-800 rounded border border-slate-700 flex items-center justify-center text-[9px] text-slate-400">
                        {sample.mockupDetails.sections[0]?.name || 'Feature'}
                      </div>
                      <div className="h-8 flex-1 bg-slate-800 rounded border border-slate-700 flex items-center justify-center text-[9px] text-slate-400">
                        {sample.mockupDetails.sections[1]?.name || 'About'}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                      {sample.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      {sample.tagline}
                    </p>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {sample.description}
                  </p>

                  {/* Layout Features */}
                  <div className="space-y-1.5 pt-1">
                    <span className="text-[11px] font-bold text-slate-700 block">포함 주요 레이아웃:</span>
                    {sample.layoutFeatures.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 text-xs text-slate-600">
                        <Check className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="p-5 border-t border-slate-100 bg-slate-50/50 flex gap-2">
                <button
                  id={`view-mockup-btn-${sample.id}`}
                  onClick={() => setActiveMockup(sample)}
                  className="flex-1 py-2.5 rounded-xl font-bold text-xs text-slate-800 bg-white border border-slate-300 hover:bg-slate-100 hover:border-slate-400 transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                >
                  <Eye className="w-3.5 h-3.5 text-teal-600" />
                  <span>시안 미리보기</span>
                </button>
                <button
                  id={`sample-inquire-btn-${sample.id}`}
                  onClick={() => handleInquiryForSample(sample.type)}
                  className="px-3.5 py-2.5 rounded-xl font-bold text-xs text-white bg-teal-600 hover:bg-teal-700 transition-all cursor-pointer flex items-center justify-center"
                  title="이 유형으로 문의"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Interactive Mockup Preview Modal */}
      {activeMockup && (
        <div id="mockup-preview-modal" className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl border border-slate-200 text-left">
            
            {/* Modal Header */}
            <div className="p-4 sm:p-5 bg-slate-900 text-white flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-teal-400 bg-teal-900/60 px-2 py-0.5 rounded border border-teal-700/50">
                  {activeMockup.type} 시안 프로토타입
                </span>
                <h3 className="text-lg font-bold text-white mt-1">
                  {activeMockup.title}
                </h3>
              </div>

              {/* Device Mode Switcher */}
              <div className="flex items-center gap-3">
                <div className="bg-slate-800 p-1 rounded-lg flex items-center gap-1 border border-slate-700">
                  <button
                    onClick={() => setDeviceMode('desktop')}
                    className={`px-2.5 py-1 rounded text-xs font-semibold flex items-center gap-1 cursor-pointer ${
                      deviceMode === 'desktop'
                        ? 'bg-teal-600 text-white'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Monitor className="w-3.5 h-3.5" />
                    <span>PC 뷰</span>
                  </button>
                  <button
                    onClick={() => setDeviceMode('mobile')}
                    className={`px-2.5 py-1 rounded text-xs font-semibold flex items-center gap-1 cursor-pointer ${
                      deviceMode === 'mobile'
                        ? 'bg-teal-600 text-white'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Smartphone className="w-3.5 h-3.5" />
                    <span>모바일 뷰</span>
                  </button>
                </div>

                <button
                  onClick={() => setActiveMockup(null)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body: Interactive Device Simulator */}
            <div className="p-6 bg-slate-100 flex-1 overflow-y-auto flex justify-center">
              <div className={`transition-all duration-300 bg-white rounded-xl shadow-md border border-slate-300 overflow-hidden ${
                deviceMode === 'mobile' ? 'w-[360px] min-h-[600px]' : 'w-full max-w-3xl min-h-[500px]'
              }`}>
                
                {/* Browser Address Bar */}
                <div className="bg-slate-200 px-3 py-2 flex items-center gap-2 border-b border-slate-300 text-xs text-slate-600">
                  <div className="flex gap-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-400" />
                  </div>
                  <div className="bg-white rounded px-2.5 py-0.5 text-[11px] font-mono text-slate-500 flex-1 truncate">
                    https://mintcle.studio/demo/{activeMockup.id}
                  </div>
                </div>

                {/* Simulated Web View Page */}
                <div className="p-6 space-y-8 text-slate-800">
                  
                  {/* Hero Block */}
                  <div className="p-6 bg-slate-900 text-white rounded-xl space-y-3 text-center">
                    <span className="text-[10px] font-bold bg-teal-500 text-slate-950 px-2 py-0.5 rounded">
                      HERO SECTION
                    </span>
                    <h4 className="text-lg sm:text-xl font-extrabold text-white">
                      {activeMockup.mockupDetails.heroHeading}
                    </h4>
                    <p className="text-xs text-slate-300 max-w-md mx-auto">
                      {activeMockup.mockupDetails.heroSub}
                    </p>
                    <button className="px-4 py-2 rounded-lg bg-teal-500 text-slate-950 text-xs font-bold shadow-xs">
                      {activeMockup.mockupDetails.primaryCta}
                    </button>
                  </div>

                  {/* Sections Preview Grid */}
                  <div className="space-y-3">
                    <span className="text-xs font-bold text-slate-600 uppercase tracking-wider block">
                      주요 영역 구성 (Sections)
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {activeMockup.mockupDetails.sections.map((sec, i) => (
                        <div key={i} className="p-3 bg-slate-50 rounded-lg border border-slate-200 text-center space-y-1">
                          <span className="text-xs font-bold text-slate-800 block">{sec.name}</span>
                          <span className="text-[11px] text-slate-500 block">{sec.desc}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Mobile Call CTA Bar */}
                  <div className="p-3 bg-teal-50 rounded-lg border border-teal-200 flex items-center justify-between text-xs text-teal-900">
                    <span className="font-bold">모바일 터치 1초 전화/카톡 연결</span>
                    <span className="bg-teal-600 text-white px-2 py-1 rounded text-[10px]">기본 연동</span>
                  </div>

                </div>

              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-white border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-xs text-slate-500">
                타깃 고객: <strong className="text-slate-800">{activeMockup.targetAudience}</strong>
              </div>
              <div className="flex gap-2 w-full sm:w-auto">
                <button
                  onClick={() => setActiveMockup(null)}
                  className="flex-1 sm:flex-none px-4 py-2 rounded-lg text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200"
                >
                  닫기
                </button>
                <button
                  onClick={() => handleInquiryForSample(activeMockup.type)}
                  className="flex-1 sm:flex-none px-5 py-2 rounded-lg text-xs font-bold text-white bg-teal-600 hover:bg-teal-700 flex items-center justify-center gap-1.5 shadow-xs"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>이 구조로 상담 신청하기</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
