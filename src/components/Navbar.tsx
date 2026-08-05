import React, { useState, useEffect } from 'react';
import { SectionId } from '../types';
import { 
  Menu, 
  X, 
  Lock, 
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
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  onOpenAdminModal,
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
    window.addEventListener('scroll', handleScroll);
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
              const isActive = activeSection === item.id;
              const isInquiry = item.id === 'inquiry';

              if (isInquiry) {
                return (
                  <button
                    key={item.id}
                    id={`nav-item-${item.id}`}
                    onClick={() => handleNavClick('inquiry')}
                    className="ml-2 px-4 py-2 rounded-xl text-sm font-extrabold text-white bg-amber-500 hover:bg-amber-600 shadow-sm transition-all cursor-pointer flex items-center gap-1.5"
                  >
                    <Send className="w-4 h-4 text-white" />
                    <span>문의하기</span>
                  </button>
                );
              }

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

          {/* Right Area Controls */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Admin Panel Entry Button */}
            <button
              id="open-admin-panel-btn"
              onClick={onOpenAdminModal}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 hover:text-slate-900 transition-all cursor-pointer border border-slate-200/90"
              title="관리자 전용 로그인 (기획서 관리 & 접수 내역)"
            >
              <Lock className="w-4 h-4 text-slate-600" />
              <span>관리자</span>
            </button>

            {/* Main Inquiry CTA */}
            <button
              id="header-inquiry-cta"
              onClick={() => handleNavClick('inquiry')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-extrabold text-white bg-teal-600 hover:bg-teal-700 shadow-md transition-all cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>제작 상담 문의</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              id="mobile-admin-btn"
              onClick={onOpenAdminModal}
              className="p-2.5 rounded-xl text-slate-700 bg-slate-100 hover:bg-slate-200"
              title="관리자 전용"
            >
              <Lock className="w-5 h-5 text-slate-600" />
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-slate-800 hover:bg-slate-100 cursor-pointer"
              aria-label="메뉴 열기"
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>

        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div id="mobile-menu-drawer" className="lg:hidden bg-white border-b border-slate-200 px-5 pt-4 pb-6 space-y-3 shadow-xl">
            <div className="grid grid-cols-2 gap-2 mb-3">
              {navItems.map((item) => (
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
              ))}
            </div>

            <div className="pt-3 border-t border-slate-200 flex flex-col gap-2.5">
              <button
                id="mobile-drawer-admin"
                onClick={() => {
                  onOpenAdminModal();
                  setMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-bold text-slate-800 bg-slate-100 border border-slate-200"
              >
                <Lock className="w-4 h-4 text-slate-600" />
                <span>관리자 전용 로그인 (기획서 & 문의 관리)</span>
              </button>
              <button
                id="mobile-drawer-inquiry"
                onClick={() => handleNavClick('inquiry')}
                className="w-full flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl text-base font-extrabold text-white bg-amber-500 hover:bg-amber-600 shadow-md"
              >
                <Send className="w-5 h-5 text-white" />
                <span>문의하기 (실시간 견적 & 제작 상담)</span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* PERSISTENT FLOATING QUICK NAVIGATION BANNER (Visible on scroll - Sleek Single Column Vertical Bar) */}
      {isScrolled && (
        <div className="fixed right-2 sm:right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center">
          <div className="bg-slate-900/95 text-white backdrop-blur-md p-2 rounded-2xl border border-slate-700/90 shadow-2xl flex flex-col items-center gap-1.5 w-14 sm:w-16 select-none">
            
            {/* Top Brand Indicator */}
            <div className="flex flex-col items-center gap-0.5 pb-1.5 border-b border-slate-800 w-full text-center">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
              <span className="text-[9px] font-extrabold text-teal-300 tracking-tighter">민트클</span>
            </div>

            {/* Quick Nav Items - Single Vertical Column */}
            <div className="flex flex-col gap-1 w-full text-center">
              {navItems.map((item) => {
                if (item.id === 'inquiry') return null;
                // Shorten labels for vertical bar
                const displayLabel = item.id === 'home' ? '홈' :
                                   item.id === 'services' ? '서비스' :
                                   item.id === 'portfolio' ? '샘플' :
                                   item.id === 'process' ? '절차' :
                                   item.id === 'faq' ? 'FAQ' : item.label;

                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full py-1.5 rounded-lg transition-all cursor-pointer text-[11px] font-bold text-center ${
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

            {/* Compact Highlighted Vertical '문의' CTA Button */}
            <button
              id="floating-banner-inquiry-btn"
              onClick={() => handleNavClick('inquiry')}
              className="w-full py-2.5 px-0.5 rounded-xl text-[11px] font-extrabold text-slate-950 bg-gradient-to-b from-amber-400 via-amber-300 to-amber-500 hover:brightness-110 transition-all shadow-md cursor-pointer flex flex-col items-center justify-center leading-tight mt-1"
            >
              <Send className="w-3.5 h-3.5 text-slate-950 mb-0.5" />
              <span>견적</span>
              <span>문의</span>
            </button>

          </div>
        </div>
      )}
    </>
  );
};

