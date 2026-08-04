import React, { useState } from 'react';
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
  CheckCircle2
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
    { id: 'all', label: '전체 샘플 보기 (6종)' },
    { id: 'cafe', label: '카페·디저트' },
    { id: 'hospital', label: '병원·클리닉' },
    { id: 'interior', label: '건설·인테리어' },
    { id: 'security', label: '보안·출입통제' },
    { id: 'beauty', label: '뷰티·패션' },
    { id: 'restaurant', label: '소상공인·식당' },
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

  // Badge color helper
  const getCategoryThemeClass = (category: string) => {
    switch (category) {
      case 'cafe':
        return {
          badgeBg: 'bg-amber-100 text-amber-900 border-amber-300',
          accentBtn: 'bg-amber-600 hover:bg-amber-700 text-white',
          tagBg: 'bg-amber-50 text-amber-800 border-amber-200/80',
        };
      case 'hospital':
        return {
          badgeBg: 'bg-sky-100 text-sky-900 border-sky-300',
          accentBtn: 'bg-sky-600 hover:bg-sky-700 text-white',
          tagBg: 'bg-sky-50 text-sky-800 border-sky-200/80',
        };
      case 'interior':
        return {
          badgeBg: 'bg-slate-800 text-slate-100 border-slate-700',
          accentBtn: 'bg-slate-900 hover:bg-slate-800 text-white',
          tagBg: 'bg-slate-100 text-slate-800 border-slate-300',
        };
      case 'security':
        return {
          badgeBg: 'bg-slate-900 text-cyan-300 border-cyan-500/40',
          accentBtn: 'bg-slate-900 hover:bg-slate-800 text-white',
          tagBg: 'bg-slate-100 text-slate-800 border-slate-300',
        };
      case 'beauty':
        return {
          badgeBg: 'bg-rose-100 text-rose-900 border-rose-300',
          accentBtn: 'bg-rose-600 hover:bg-rose-700 text-white',
          tagBg: 'bg-rose-50 text-rose-800 border-rose-200/80',
        };
      case 'restaurant':
        return {
          badgeBg: 'bg-red-100 text-red-900 border-red-300',
          accentBtn: 'bg-red-700 hover:bg-red-800 text-white',
          tagBg: 'bg-red-50 text-red-800 border-red-200/80',
        };
      default:
        return {
          badgeBg: 'bg-teal-100 text-teal-900 border-teal-300',
          accentBtn: 'bg-teal-600 hover:bg-teal-700 text-white',
          tagBg: 'bg-teal-50 text-teal-800 border-teal-200/80',
        };
    }
  };

  return (
    <section id="portfolio-section" className="py-20 lg:py-28 bg-slate-50/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold bg-amber-50 text-amber-900 border border-amber-200/90 shadow-2xs">
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span>독립 가상 홈페이지 포트폴리오</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-sans">
            실제 동작하는 <span className="text-teal-600">업종별 커스텀 샘플 홈페이지</span>
          </h2>
          <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
            민트클 웹스튜디오는 말뿐인 실적을 제시하지 않습니다.<br />
            아래의 각 포트폴리오를 크게 확인하시고, 클릭하여 <strong>독립 샘플 사이트</strong>를 경험해 보세요.
          </p>

          {/* Large Visual Notice Banner */}
          <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-2xs text-xs sm:text-sm text-slate-700 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-3xl mx-auto mt-4">
            <div className="flex items-center gap-2 text-teal-700 font-bold shrink-0">
              <Info className="w-5 h-5 text-teal-600" />
              <span>사진 & 화면 크기 대폭 확대 안내</span>
            </div>
            <span className="text-slate-600">
              각 시안 이미지는 실제 홈페이지 레이아웃 목업이며, <strong>[샘플 보기 (독립 페이지)]</strong>를 누르면 완벽한 동작 페이지로 연결됩니다.
            </span>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              id={`portfolio-filter-${cat.id}`}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Spacious 2-Column Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 text-left">
          {filteredSamples.map((sample) => {
            const theme = getCategoryThemeClass(sample.category);

            return (
              <div
                key={sample.id}
                className="bg-white rounded-3xl border border-slate-200/90 shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col justify-between group"
              >
                <div>
                  
                  {/* Browser Chrome Header Frame */}
                  <div className="bg-slate-900 px-4 py-3 flex items-center justify-between border-b border-slate-800">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                      <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                      <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                      <span className="text-xs font-mono font-medium text-slate-300 ml-2 hidden sm:inline">
                        mintcle.studio{sample.samplePath}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold border ${theme.badgeBg}`}>
                        {sample.type}
                      </span>
                      <button
                        onClick={() => setPreviewModalSample(sample)}
                        className="text-xs text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 px-2.5 py-1 rounded-md transition-colors flex items-center gap-1 cursor-pointer"
                        title="크게 확대 미리보기"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">확대</span>
                      </button>
                    </div>
                  </div>

                  {/* PROMINENT LARGE IMAGE FRAME (Aspect 16:9 / 16:10 for High Impact) */}
                  <div 
                    onClick={() => handleOpenSamplePage(sample.samplePath)}
                    className="relative aspect-[16/10] sm:aspect-[16/9] bg-slate-950 overflow-hidden cursor-pointer group/img"
                  >
                    <img
                      src={sample.coverImage}
                      alt={`${sample.title} 대형 메인 시안 이미지`}
                      loading="lazy"
                      className="w-full h-full object-cover object-top group-hover/img:scale-105 transition-transform duration-700"
                    />

                    {/* Hover Overlay Badge */}
                    <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                      <div className="bg-slate-900/90 text-white backdrop-blur-md px-5 py-3 rounded-2xl border border-white/20 font-bold text-sm sm:text-base flex items-center gap-2 shadow-2xl">
                        <Eye className="w-5 h-5 text-teal-400" />
                        <span>독립 샘플 웹사이트 직접 체험하기</span>
                        <ExternalLink className="w-4 h-4 text-slate-300" />
                      </div>
                    </div>

                    <div className="absolute bottom-3 left-3 bg-slate-900/90 text-teal-300 border border-teal-500/40 px-3 py-1 rounded-lg text-xs font-bold shadow-md">
                      Concept Work (실제 동작 독립시안)
                    </div>
                  </div>

                  {/* Card Content Description Area */}
                  <div className="p-6 sm:p-8 space-y-5">
                    
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 group-hover:text-teal-700 transition-colors">
                          {sample.title}
                        </h3>
                      </div>
                      <p className="text-sm sm:text-base font-semibold text-teal-700">
                        {sample.tagline}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {sample.description}
                    </p>

                    {/* Explicit Metadata Specs Grid */}
                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/90 text-xs text-slate-700 space-y-2">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <div>
                          <span className="font-extrabold text-slate-900">ㆍ업종: </span>
                          <span className="font-semibold text-teal-800">{sample.type}</span>
                        </div>
                        <div>
                          <span className="font-extrabold text-slate-900">ㆍ제작 기간: </span>
                          <span className="font-semibold text-slate-800">{sample.productionPeriod}</span>
                        </div>
                      </div>

                      <div>
                        <span className="font-extrabold text-slate-900">ㆍ제작 범위: </span>
                        <span className="text-slate-800">{sample.scopeOfWork}</span>
                      </div>

                      <div>
                        <span className="font-extrabold text-slate-900">ㆍ반응형 지원: </span>
                        <span className="font-semibold text-slate-800">{sample.responsiveSupport}</span>
                      </div>
                    </div>

                    {/* Feature Tags List */}
                    <div className="space-y-2.5 pt-1">
                      <span className="text-xs font-extrabold text-slate-900 uppercase tracking-wider block">
                        주요 핵심 기능:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {sample.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className={`text-xs font-semibold px-3 py-1.5 rounded-lg border ${theme.tagBg}`}
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
                    className={`flex-1 py-3.5 px-4 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm ${theme.accentBtn}`}
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>샘플 보기 (독립 페이지)</span>
                  </button>

                  <button
                    id={`sample-inquire-btn-${sample.id}`}
                    onClick={() => handleInquiryForSample(sample.type)}
                    className="py-3.5 px-5 rounded-xl font-bold text-sm text-slate-800 bg-white border border-slate-300 hover:bg-slate-100 transition-all cursor-pointer flex items-center justify-center gap-1.5 shadow-2xs"
                    title="이 서비스 스타일로 견적 문의"
                  >
                    <Send className="w-4 h-4 text-teal-600" />
                    <span>제작 문의</span>
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Live Preview Enlarged Modal */}
        {previewModalSample && (
          <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 shadow-2xl text-left p-6 sm:p-8 space-y-6 relative">
              
              <button
                onClick={() => setPreviewModalSample(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200 cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="space-y-2">
                <span className="px-3 py-1 rounded-md text-xs font-bold bg-teal-100 text-teal-800">
                  {previewModalSample.type}
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900">
                  {previewModalSample.title}
                </h3>
                <p className="text-sm font-medium text-slate-600">
                  {previewModalSample.tagline}
                </p>
              </div>

              {/* Large Image View */}
              <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-900">
                <img
                  src={previewModalSample.coverImage}
                  alt={previewModalSample.title}
                  className="w-full h-auto max-h-[500px] object-cover"
                />
              </div>

              <div className="space-y-3 text-sm text-slate-700 leading-relaxed">
                <h4 className="font-bold text-slate-900 text-base">시안 상세 개요</h4>
                <p>{previewModalSample.description}</p>
              </div>

              {/* Layout Features */}
              <div className="space-y-2 bg-slate-50 p-4 rounded-xl border border-slate-200">
                <h4 className="font-bold text-slate-900 text-xs uppercase">포함된 주요 레이아웃 구조</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                  {previewModalSample.layoutFeatures.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex gap-3">
                <button
                  onClick={() => {
                    handleOpenSamplePage(previewModalSample.samplePath);
                    setPreviewModalSample(null);
                  }}
                  className="flex-1 py-3.5 rounded-xl font-bold text-sm text-white bg-teal-600 hover:bg-teal-700 flex items-center justify-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>독립 샘플 웹사이트 새 창으로 열기</span>
                </button>
                <button
                  onClick={() => {
                    handleInquiryForSample(previewModalSample.type);
                    setPreviewModalSample(null);
                  }}
                  className="px-6 py-3.5 rounded-xl font-bold text-sm text-slate-800 bg-slate-100 hover:bg-slate-200"
                >
                  제작 문의하기
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};

