import React, { useState, useEffect } from 'react';
import { SectionId } from '../types';
import { 
  Menu, 
  X, 
  Send,
  Phone,
  MessageSquare,
  Sparkles,
  ChevronUp
} from 'lucide-react';

interface NavbarProps {
  activeSection: SectionId;
  onNavigate: (sectionId: SectionId) => void;
  onOpenAdminModal: () => void;
  onOpenKakaoModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  onOpenAdminModal,
  onOpenKakaoModal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: SectionId; label: string }[] = [
    { id: 'home', label: '홈' },
    { id: 'services', label: '서비스 소개' },
    { id: 'portfolio', label: '포트폴리오' },
    { id: 'process', label: '제작 절차' },
    { id: 'faq', label: '자주 묻는 질문' },
    { id: 'inquiry', label: '문의하기' },
  ];

  const handleNavClick = (id: SectionId) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Sticky Top Navigation Header */}
      <header
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-md py-2.5'
            : 'bg-white/90 backdrop-blur-sm border-b border-slate-100 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo */}
          <button
            id="logo-button"
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-700 via-teal-600 to-emerald-500 text-white flex items-center justify-center font-extrabold text-xl shadow-sm group-hover:scale-105 transition-transform">
              M
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-slate-900 tracking-tight text-xl sm:text-2xl font-sans">
                  민트클 <span className="text-teal-600 font-bold">웹스튜디오</span>
                </span>
                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-bold bg-amber-100 text-amber-900 border border-amber-300">
                  Official
                </span>
              </div>
              <p className="text-xs text-slate-600 hidden sm:block font-medium">
                맞춤형 홈페이지 제작 & 실시간 무료 견적
              </p>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav id="desktop-nav" className="hidden lg:flex items-center gap-1.5">
            {navItems.map((item) => {
              if (item.id === 'inquiry') return null;
              const isActive = activeSection === item.id;

              return (
                <button
                  key={item.id}
                  id={`nav-item-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3.5 py-2 rounded-xl text-sm sm:text-base font-bold transition-all cursor-pointer ${
                    isActive
                      ? 'text-teal-800 bg-teal-50 font-extrabold border border-teal-200'
                      : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Area Controls: KakaoTalk & Green Estimate Inquiry */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* KakaoTalk Consult Button */}
            <button
              id="header-kakao-btn"
              onClick={onOpenKakaoModal}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-extrabold text-[#3C1E1E] bg-[#FEE500] hover:bg-[#fada0a] shadow-xs transition-all cursor-pointer border border-amber-300"
              title="카카오톡 1:1 실시간 상담"
            >
              <MessageSquare className="w-4 h-4 fill-[#3C1E1E]" />
              <span>카톡상담</span>
            </button>

            {/* Main Estimate Inquiry CTA (Teal/Green) */}
            <button
              id="header-inquiry-cta"
              onClick={() => handleNavClick('inquiry')}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold text-white shadow-md transition-all cursor-pointer ${
                activeSection === 'inquiry'
                  ? 'bg-teal-700 ring-2 ring-teal-400 font-black scale-102'
                  : 'bg-teal-600 hover:bg-teal-700'
              }`}
            >
              <Send className="w-4 h-4" />
              <span>견적문의</span>
            </button>
          </div>

          {/* Mobile Menu Toggle & Kakao Button */}
          <div className="flex items-center gap-1.5 lg:hidden">
            <button
              id="mobile-kakao-btn"
              onClick={onOpenKakaoModal}
              className="p-2 rounded-xl text-[#3C1E1E] bg-[#FEE500] hover:bg-[#fada0a] border border-amber-300"
              title="카카오톡 1:1 상담"
            >
              <MessageSquare className="w-5 h-5 fill-[#3C1E1E]" />
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-800 hover:bg-slate-100 cursor-pointer"
              aria-label="메뉴 열기"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div id="mobile-menu-drawer" className="lg:hidden bg-white border-b border-slate-200 px-5 pt-4 pb-6 space-y-3 shadow-xl">
            <div className="grid grid-cols-2 gap-2 mb-3">
              {navItems.map((item) => {
                if (item.id === 'inquiry') return null;
                return (
                  <button
                    key={item.id}
                    id={`mobile-nav-${item.id}`}
                    onClick={() => handleNavClick(item.id)}
                    className={`px-4 py-3 rounded-xl text-base font-bold text-left transition-colors cursor-pointer ${
                      activeSection === item.id
                        ? 'bg-teal-50 text-teal-800 font-extrabold border border-teal-200'
                        : 'text-slate-800 hover:bg-slate-100'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>

            <div className="pt-3 border-t border-slate-200 flex flex-col gap-2">
              <button
                id="mobile-drawer-kakao"
                onClick={() => {
                  onOpenKakaoModal();
                  setMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-extrabold text-[#3C1E1E] bg-[#FEE500] hover:bg-[#fada0a] border border-amber-300 shadow-xs"
              >
                <MessageSquare className="w-4 h-4 fill-[#3C1E1E]" />
                <span>카카오톡 1:1 실시간 상담</span>
              </button>

              <button
                id="mobile-drawer-inquiry"
                onClick={() => handleNavClick('inquiry')}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-extrabold text-white bg-teal-600 hover:bg-teal-700 shadow-md"
              >
                <Send className="w-4 h-4 text-white" />
                <span>견적문의 (무료 산출 & 상담)</span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* PERSISTENT FLOATING QUICK NAVIGATION BANNER (Visible on scroll - Hidden on mobile, visible on desktop) */}
      {isScrolled && (
        <div className="fixed right-2 sm:right-4 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-center">
          <div className="bg-slate-900/95 text-white backdrop-blur-md p-1.5 sm:p-2 rounded-2xl border border-slate-700/90 shadow-2xl flex flex-col items-center gap-1.5 w-13 sm:w-15 select-none">
            
            {/* Top Brand Indicator */}
            <div className="flex flex-col items-center gap-0.5 pb-1 border-b border-slate-800 w-full text-center">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
              <span className="text-[9px] font-extrabold text-teal-300 tracking-tighter">민트클</span>
            </div>

            {/* Quick Nav Items - Single Vertical Column */}
            <div className="flex flex-col gap-1 w-full text-center">
              {navItems.map((item) => {
                if (item.id === 'inquiry') return null;
                const displayLabel = item.id === 'home' ? '홈' :
                                   item.id === 'services' ? '서비스' :
                                   item.id === 'portfolio' ? '샘플' :
                                   item.id === 'process' ? '절차' :
                                   item.id === 'faq' ? 'FAQ' : item.label;

                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full py-1 rounded-lg transition-all cursor-pointer text-[10px] sm:text-[11px] font-bold text-center ${
                      activeSection === item.id
                        ? 'bg-teal-500 text-slate-950 font-extrabold shadow-xs'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
                    }`}
                  >
                    {displayLabel}
                  </button>
                );
              })}
            </div>

            <div className="w-full border-t border-slate-800 my-0.5" />

            {/* 1. Kakao Button */}
            <button
              id="floating-kakao-btn"
              onClick={onOpenKakaoModal}
              className="w-full py-1.5 px-0.5 rounded-xl text-[10px] font-extrabold text-[#3C1E1E] bg-[#FEE500] hover:bg-[#fada0a] transition-all shadow-xs cursor-pointer flex flex-col items-center justify-center leading-tight border border-amber-300"
              title="카카오톡 상담"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-[#3C1E1E] mb-0.5" />
              <span>카톡</span>
            </button>

            {/* 2. Green Estimate Inquiry Button */}
            <button
              id="floating-banner-inquiry-btn"
              onClick={() => handleNavClick('inquiry')}
              className={`w-full py-1.5 px-0.5 rounded-xl text-[10px] font-extrabold transition-all shadow-xs cursor-pointer flex flex-col items-center justify-center leading-tight ${
                activeSection === 'inquiry'
                  ? 'text-white bg-teal-500 ring-2 ring-teal-300 font-black shadow-md'
                  : 'text-white bg-teal-600 hover:bg-teal-500'
              }`}
              title="견적 문의"
            >
              <Send className="w-3.5 h-3.5 text-white mb-0.5" />
              <span>견적</span>
            </button>

          </div>
        </div>
      )}
    </>
  );
};

