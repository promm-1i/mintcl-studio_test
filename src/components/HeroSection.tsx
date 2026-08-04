import React from 'react';
import { SectionId } from '../types';
import { 
  ArrowRight, 
  Calculator, 
  CheckCircle2, 
  ShieldCheck, 
  Smartphone, 
  Clock, 
  Layout, 
  Sparkles,
  Search
} from 'lucide-react';

interface HeroSectionProps {
  onNavigate: (sectionId: SectionId) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onNavigate,
}) => {
  return (
    <section id="home-section" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-100 overflow-hidden">
      {/* Background Decorative Mint Accent Lines */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-96 h-96 bg-teal-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/4 w-80 h-80 bg-emerald-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Text Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Trust Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-teal-50 text-teal-800 border border-teal-200/80 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
              <span>기업 & 소상공인 맞춤 웹스튜디오</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight font-sans">
              과장 없이 명확한 기획,<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 via-teal-600 to-emerald-600">
                투명한 공정의 홈페이지 제작
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl">
              민트클 웹스튜디오는 불필요한 거품을 뺀 명확한 화면 설계와 100% 반응형 웹표준 기술로 기업과 소상공인의 가치를 온전히 전달합니다.
            </p>

            {/* Key Value Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 pb-2">
              {[
                { title: '100% 반응형 웹표준 개발', desc: 'PC, 태블릿, 모바일 완벽 대응' },
                { title: '투명한 5단계 공정', desc: '단계별 검수 및 명확한 일정 공유' },
                { title: '네이버/구글 SEO 기본 설정', desc: '검색엔진 수집 최적화 태그' },
                { title: '오픈 후 1개월 무상 보증', desc: '오탈자 및 텍스트 무료 수정' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-sm font-bold text-slate-800 block">{item.title}</span>
                    <span className="text-xs text-slate-500">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Hero CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4">
              <button
                id="hero-estimate-cta"
                onClick={() => onNavigate('inquiry')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-teal-600 hover:bg-teal-700 shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                <Calculator className="w-4 h-4" />
                <span>실시간 예상 견적 계산하기</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>

              <button
                id="hero-services-cta"
                onClick={() => onNavigate('services')}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 hover:border-slate-400 transition-all cursor-pointer shadow-2xs"
              >
                <Layout className="w-4 h-4 text-teal-600" />
                <span>제작 가능 서비스 보기</span>
              </button>
            </div>

            {/* Document Spec link */}
            <div className="pt-2 text-xs text-slate-500 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-teal-600" />
              <span>검증된 표준 제작 규격과 투명한 공정 가이드가 적용되어 있습니다.</span>
            </div>

          </div>

          {/* Right Hero Interactive Preview Card */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xl p-5 sm:p-6 space-y-5 relative">
              
              {/* Header Badge */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-400 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-green-400 inline-block" />
                  <span className="text-xs font-mono font-bold text-slate-600 ml-2">mintcle.studio/quick-preview</span>
                </div>
                <span className="text-[11px] font-semibold text-teal-700 bg-teal-50 px-2.5 py-1 rounded-md border border-teal-200/60">
                  실시간 맞춤 가이드
                </span>
              </div>

              {/* Quick Estimator Snapshot Card */}
              <div className="bg-slate-50/80 rounded-xl p-4 border border-slate-200/70 space-y-3">
                <div className="flex items-center justify-between text-xs font-bold text-slate-800">
                  <span>추천 제작 유형 빠른 선택</span>
                  <span className="text-teal-600">투명 산정</span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {[
                    { name: '기업 홈페이지', time: '10-15일', price: '표준형' },
                    { name: '소상공인 사이트', time: '5-7일', price: '실속형' },
                    { name: '포트폴리오', time: '5-7일', price: '맞춤형' },
                    { name: '서비스 랜딩', time: '3-5일', price: '원페이지' },
                  ].map((item, idx) => (
                    <div 
                      key={idx}
                      onClick={() => onNavigate('inquiry')}
                      className="p-2.5 bg-white rounded-lg border border-slate-200 hover:border-teal-400 hover:shadow-xs transition-all cursor-pointer text-left group"
                    >
                      <div className="text-xs font-bold text-slate-800 group-hover:text-teal-700 flex items-center justify-between">
                        <span>{item.name}</span>
                        <span className="text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded">{item.price}</span>
                      </div>
                      <div className="text-[11px] text-slate-500 mt-1 flex items-center gap-1">
                        <Clock className="w-3 h-3 text-teal-600" />
                        <span>예상 {item.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visual Layout Mockup Snippet */}
              <div className="space-y-2 text-left">
                <div className="text-xs font-bold text-slate-700 flex items-center justify-between">
                  <span>민트클 제공 기본 포함 혜택</span>
                  <span className="text-[11px] text-slate-400">추가비용 없음</span>
                </div>
                <div className="space-y-1.5">
                  <div className="p-2 bg-slate-50 rounded-lg text-xs text-slate-700 flex items-center justify-between border border-slate-100">
                    <span className="flex items-center gap-1.5 font-medium">
                      <Smartphone className="w-3.5 h-3.5 text-teal-600" />
                      모바일 1초 카카오톡 / 전화 연결 버튼
                    </span>
                    <span className="text-teal-600 font-bold text-[11px]">기본 탑재</span>
                  </div>
                  <div className="p-2 bg-slate-50 rounded-lg text-xs text-slate-700 flex items-center justify-between border border-slate-100">
                    <span className="flex items-center gap-1.5 font-medium">
                      <Search className="w-3.5 h-3.5 text-teal-600" />
                      네이버·구글 지도 & 위치 검색 등록 가이드
                    </span>
                    <span className="text-teal-600 font-bold text-[11px]">기본 제공</span>
                  </div>
                </div>
              </div>

              {/* Direct Quick Button */}
              <button
                id="hero-quick-consult-btn"
                onClick={() => onNavigate('inquiry')}
                className="w-full py-2.5 rounded-lg text-xs font-bold text-teal-800 bg-teal-50 hover:bg-teal-100 border border-teal-200 transition-colors cursor-pointer flex items-center justify-center gap-1.5"
              >
                <span>내 프로젝트 예상 비용 바로 산출하기</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
