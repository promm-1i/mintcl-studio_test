import React from 'react';
import { motion } from 'motion/react';
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
  Search,
  Monitor,
  Phone,
  MessageCircle,
  Globe
} from 'lucide-react';

interface HeroSectionProps {
  onNavigate: (sectionId: SectionId) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onNavigate,
}) => {
  return (
    <section id="home-section" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 bg-slate-900 text-white border-b border-slate-800 overflow-hidden bg-grid-dark animate-grid-move">
      {/* High Quality Hero Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20 pointer-events-none mix-blend-overlay"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1920&q=80')` }}
      />

      {/* Dynamic Ambient Background Glows & Animated Motion Blobs */}
      <div className="absolute top-1/4 -right-10 w-96 h-96 sm:w-[500px] sm:h-[500px] bg-teal-500/25 rounded-full blur-3xl pointer-events-none animate-float-slow" />
      <div className="absolute bottom-5 -left-10 w-96 h-96 sm:w-[450px] sm:h-[450px] bg-indigo-500/20 rounded-full blur-3xl pointer-events-none animate-float-reverse" />
      <div className="absolute top-10 left-1/3 w-80 h-80 bg-amber-500/15 rounded-full blur-3xl pointer-events-none animate-pulse-glow" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none animate-float-slow" style={{ animationDelay: '4s' }} />

      {/* Floating Animated Accent Particles */}
      <div className="absolute top-20 left-1/4 w-3 h-3 bg-teal-400/60 rounded-full blur-xs animate-float-slow" />
      <div className="absolute top-40 right-1/3 w-2 h-2 bg-amber-400/70 rounded-full blur-xs animate-float-reverse" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-24 left-1/5 w-2.5 h-2.5 bg-emerald-400/50 rounded-full blur-xs animate-pulse-glow" style={{ animationDelay: '3s' }} />
      <div className="absolute bottom-32 right-12 w-3.5 h-3.5 bg-cyan-400/60 rounded-full blur-xs animate-float-slow" style={{ animationDelay: '2.5s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Hero Text Column with Motion Scroll Animation */}
          <motion.div 
            className="lg:col-span-6 space-y-6 text-left"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            
            {/* Trust Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold bg-teal-500/20 text-teal-300 border border-teal-500/40">
              <Sparkles className="w-4 h-4 text-teal-400" />
              <span>원하는 기능만 쏙 담아 신뢰감을 주는 웹스튜디오</span>
            </div>

            {/* Main Headline - Balanced Font Sizing & Clean Line Break */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-snug sm:leading-snug tracking-tight font-sans">
              식당 · 기업 · 가게에 필요한 웹사이트<br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-emerald-300 to-amber-300">
                깔끔하고 똑똑하게 잘 만들어 드립니다
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal max-w-xl">
              스마트폰과 PC 컴퓨터 어디서나 완벽하게 맞춰지는 100% 반응형 웹표준 홈페이지를 신속하고 합리적인 비용으로 구축합니다.
            </p>

            {/* Key Value Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 pb-1">
              {[
                { title: 'PC · 모바일 자동 반응형', desc: '화면 크기에 따라 글자와 사진이 깔끔하게 맞춰집니다.' },
                { title: '투명한 5단계 체계', desc: '상담부터 오픈까지 추가금 걱정 없이 진행됩니다.' },
                { title: '네이버 지도 & 전화 연결', desc: '손님이 매장 위치 확인과 1초 전화 연결을 바로 합니다.' },
                { title: '오타 무상 A/S 무료 수정', desc: '납품 후 텍스트 및 이미지 변경을 지원해 드립니다.' },
              ].map((item, idx) => (
                <motion.div 
                  key={idx} 
                  className="flex items-start gap-2.5 bg-slate-800/80 p-3 rounded-xl border border-slate-700"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.15 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                >
                  <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-sm sm:text-base font-bold text-white block">{item.title}</span>
                    <span className="text-xs sm:text-sm text-slate-300 font-medium">{item.desc}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Hero CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                id="hero-estimate-cta"
                onClick={() => onNavigate('inquiry')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-extrabold text-sm sm:text-base text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-lg transition-all cursor-pointer"
              >
                <Calculator className="w-5 h-5 text-slate-950" />
                <span>예상 제작 비용 확인하기</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </button>

              <button
                id="hero-portfolio-cta"
                onClick={() => onNavigate('portfolio')}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-bold text-sm sm:text-base text-slate-800 bg-white border border-slate-300 hover:bg-slate-100 transition-all cursor-pointer shadow-sm"
              >
                <Layout className="w-4 h-4 text-teal-600" />
                <span>제작 샘플 구경하기</span>
              </button>
            </div>

            {/* Spec Note */}
            <div className="pt-1 text-xs text-slate-300 flex items-center gap-2 font-medium">
              <ShieldCheck className="w-4 h-4 text-teal-400 shrink-0" />
              <span>투명한 견적과 친절한 1:1 기획 안내로 끝까지 안심하고 제작을 진행합니다.</span>
            </div>

          </motion.div>

          {/* Right Hero Column: Responsive Device Showcase (PC Monitor & Mobile Phone Mockups) */}
          <motion.div 
            className="lg:col-span-6 relative"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            <div className="bg-slate-800/90 rounded-2xl border border-slate-700/80 shadow-2xl p-4 sm:p-6 space-y-4 relative backdrop-blur-md">
              
              {/* Header Badge */}
              <div className="flex items-center justify-between border-b border-slate-700 pb-3">
                <div className="flex items-center gap-2">
                  <Monitor className="w-4 h-4 text-teal-400" />
                  <Smartphone className="w-4 h-4 text-amber-400" />
                  <span className="text-xs font-bold text-slate-200">100% 반응형 디바이스 맞춤 지원</span>
                </div>
                <span className="text-[11px] font-bold text-teal-300 bg-teal-950 px-2.5 py-1 rounded border border-teal-800">
                  PC + 모바일 동시 구현
                </span>
              </div>

              {/* Device Showcase Container */}
              <div className="relative pt-2 pb-6 px-1 flex flex-col items-center">
                
                {/* 1. PC Monitor Mockup */}
                <div className="w-full bg-slate-950 rounded-xl border-2 border-slate-700 shadow-xl overflow-hidden group">
                  {/* Browser Top Bar */}
                  <div className="bg-slate-900 px-3 py-2 border-b border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
                    </div>
                    <div className="bg-slate-950 px-3 py-0.5 rounded-md text-[10px] text-slate-400 font-mono flex items-center gap-1.5 border border-slate-800">
                      <Globe className="w-3 h-3 text-teal-400" />
                      <span>https://mintcle.studio/responsive-web</span>
                    </div>
                    <div className="text-[10px] text-slate-500 font-bold">DESKTOP</div>
                  </div>

                  {/* Desktop Website Preview Content */}
                  <div className="bg-slate-900 text-slate-200 p-3.5 space-y-3 text-left">
                    {/* Website Header */}
                    <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                      <div className="flex items-center gap-1.5">
                        <div className="w-5 h-5 rounded bg-teal-500 text-slate-950 font-black flex items-center justify-center text-[10px]">M</div>
                        <span className="font-extrabold text-white text-xs tracking-tight">BUSINESS<span className="text-teal-400">STUDIO</span></span>
                      </div>
                      <div className="hidden sm:flex items-center gap-2.5 text-[10px] text-slate-300 font-medium">
                        <span>회사소개</span>
                        <span>주요사업</span>
                        <span>제작포트폴리오</span>
                        <span>CS센터</span>
                      </div>
                    </div>

                    {/* Website Hero Banner Inside Monitor */}
                    <div className="bg-gradient-to-r from-teal-900/90 via-slate-800 to-indigo-900/90 p-4 rounded-lg border border-teal-500/30 text-center space-y-1.5 relative overflow-hidden">
                      <span className="inline-block text-[10px] font-bold text-teal-300 bg-teal-950/80 px-2 py-0.5 rounded border border-teal-800">
                        반응형 홈페이지 제작 전문
                      </span>
                      <h4 className="text-xs sm:text-sm font-extrabold text-white">
                        어떤 디바이스에서도 완벽한 가치 전달
                      </h4>
                      <p className="text-[10px] text-slate-300 line-clamp-1 font-normal">
                        고객의 컨텐츠에 맞춘 1:1 맞춤형 기획 및 디자인
                      </p>
                    </div>

                    {/* 3 Grid Boxes inside Desktop Mockup */}
                    <div className="grid grid-cols-3 gap-2 pt-0.5">
                      <div className="bg-slate-800/90 p-2 rounded border border-slate-700 space-y-1">
                        <div className="text-[10px] font-bold text-teal-300">BUSINESS</div>
                        <div className="text-[9px] text-slate-400 line-clamp-1">기업 맞춤형 솔루션</div>
                      </div>
                      <div className="bg-slate-800/90 p-2 rounded border border-slate-700 space-y-1">
                        <div className="text-[10px] font-bold text-amber-300">PORTFOLIO</div>
                        <div className="text-[9px] text-slate-400 line-clamp-1">100% 모바일 연동</div>
                      </div>
                      <div className="bg-slate-800/90 p-2 rounded border border-slate-700 space-y-1">
                        <div className="text-[10px] font-bold text-emerald-300">CS CENTER</div>
                        <div className="text-[9px] text-slate-400 line-clamp-1">010-0000-0000</div>
                      </div>
                    </div>
                  </div>

                  {/* Monitor Stand */}
                  <div className="bg-slate-800 h-2 w-full border-t border-slate-700" />
                </div>

                {/* 2. Mobile Phone Overlaid Mockup (Bottom-Right Floating device) */}
                <div className="absolute -bottom-2 right-2 sm:right-4 w-36 sm:w-44 bg-slate-950 rounded-2xl border-2 border-teal-400/80 shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-300 z-20">
                  {/* Phone Speaker Notch */}
                  <div className="bg-slate-900 px-2 py-1 flex items-center justify-between border-b border-slate-800">
                    <span className="w-8 h-1 rounded-full bg-slate-700 mx-auto block" />
                  </div>

                  {/* Phone Screen Content */}
                  <div className="bg-slate-900 p-2.5 space-y-2 text-left">
                    <div className="flex items-center justify-between text-[9px] text-white font-bold border-b border-slate-800 pb-1">
                      <span>MINTCLE MOBILE</span>
                      <span className="text-[8px] bg-teal-950 text-teal-300 px-1 rounded">모바일 최적화</span>
                    </div>

                    <div className="bg-teal-950/80 p-2 rounded border border-teal-800/60 space-y-1 text-center">
                      <div className="text-[10px] font-bold text-teal-300">반응형 제작 전문</div>
                      <p className="text-[8px] text-slate-300">스마트폰 1초 전화연결</p>
                    </div>

                    <div className="space-y-1 text-[8px] text-slate-300">
                      <div className="bg-slate-800 p-1 rounded flex items-center justify-between">
                        <span>오시는 길 지도</span>
                        <span className="text-teal-400">연동완료</span>
                      </div>
                      <div className="bg-slate-800 p-1 rounded flex items-center justify-between">
                        <span>카카오톡 1:1 상담</span>
                        <span className="text-amber-300">클릭 즉시</span>
                      </div>
                    </div>

                    {/* Mobile Bottom Action Bar */}
                    <div className="grid grid-cols-2 gap-1 pt-1">
                      <div className="bg-amber-400 text-slate-950 text-[8px] font-bold py-1 rounded text-center flex items-center justify-center gap-0.5">
                        <Phone className="w-2.5 h-2.5" />
                        <span>전화걸기</span>
                      </div>
                      <div className="bg-[#FEE500] text-[#3C1E1E] text-[8px] font-bold py-1 rounded text-center flex items-center justify-center gap-0.5">
                        <MessageCircle className="w-2.5 h-2.5" />
                        <span>카톡상담</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Included Scope Badges & Action */}
              <div className="pt-2 border-t border-slate-700 space-y-2.5 text-left">
                <div className="flex items-center justify-between text-xs text-slate-200 font-bold">
                  <span>민트클 제공 반응형 기본 포함</span>
                  <span className="text-amber-300 font-extrabold text-[11px]">추가 비용 0원</span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="p-2.5 bg-slate-900/90 rounded-lg border border-slate-700 text-xs text-slate-200 flex items-center gap-2">
                    <Smartphone className="w-4 h-4 text-teal-400 shrink-0" />
                    <span>모바일 1초 카톡·전화 연결</span>
                  </div>
                  <div className="p-2.5 bg-slate-900/90 rounded-lg border border-slate-700 text-xs text-slate-200 flex items-center gap-2">
                    <Search className="w-4 h-4 text-teal-400 shrink-0" />
                    <span>네이버·카카오 지도 연동</span>
                  </div>
                </div>

                <button
                  id="hero-quick-consult-btn"
                  onClick={() => onNavigate('inquiry')}
                  className="w-full py-3 rounded-xl text-xs sm:text-sm font-extrabold text-slate-950 bg-teal-400 hover:bg-teal-300 transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-md"
                >
                  <Calculator className="w-4 h-4" />
                  <span>내 매장/기업 반응형 홈페이지 견적 계산하기</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

