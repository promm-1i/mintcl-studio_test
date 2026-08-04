import React, { useState, useEffect } from 'react';
import { SectionId } from '../types';
import { 
  Menu, 
  X, 
  FileText, 
  Send, 
  Sparkles,
  PhoneCall
} from 'lucide-react';

interface NavbarProps {
  activeSection: SectionId;
  onNavigate: (sectionId: SectionId) => void;
  onOpenPlanningModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  onOpenPlanningModal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: SectionId; label: string }[] = [
    { id: 'home', label: 'HOME' },
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
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-xs py-3'
          : 'bg-white/70 backdrop-blur-xs border-b border-slate-100 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          id="logo-button"
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2.5 text-left group cursor-pointer"
        >
          <div className="w-9 h-9 rounded-xl bg-teal-600 text-white flex items-center justify-center font-bold text-lg shadow-sm group-hover:bg-teal-700 transition-colors">
            M
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-slate-900 tracking-tight text-lg sm:text-xl font-sans">
                민트클 <span className="text-teal-600 font-semibold">웹스튜디오</span>
              </span>
              <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-teal-50 text-teal-700 border border-teal-200">
                Official
              </span>
            </div>
            <p className="text-[11px] text-slate-500 hidden sm:block">
              맞춤형 홈페이지 제작 & 상담
            </p>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav id="desktop-nav" className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                id={`nav-item-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                  isActive
                    ? 'text-teal-700 bg-teal-50/80 font-semibold border border-teal-200/60'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right CTA Area */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Detailed Planning Spec Drawer Button */}
          <button
            id="open-planning-doc-btn"
            onClick={onOpenPlanningModal}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold text-slate-700 bg-slate-100 border border-slate-200 hover:bg-slate-200/80 transition-all cursor-pointer"
            title="기획서 및 구성안 보기"
          >
            <FileText className="w-3.5 h-3.5 text-teal-600" />
            <span>상세 기획서</span>
          </button>

          {/* Quick Consultation CTA */}
          <button
            id="header-inquiry-cta"
            onClick={() => handleNavClick('inquiry')}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold text-white bg-teal-600 hover:bg-teal-700 shadow-xs transition-all cursor-pointer"
          >
            <Send className="w-3.5 h-3.5" />
            <span>제작 상담 문의</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            id="mobile-planning-btn"
            onClick={onOpenPlanningModal}
            className="p-2 rounded-lg text-slate-600 bg-slate-100 hover:bg-slate-200"
            title="상세 기획서"
          >
            <FileText className="w-4 h-4 text-teal-600" />
          </button>
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 cursor-pointer"
            aria-label="메뉴 열기"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div id="mobile-menu-drawer" className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-5 space-y-2 shadow-lg">
          <div className="grid grid-cols-2 gap-2 mb-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`mobile-nav-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-2.5 rounded-lg text-sm font-medium text-left transition-colors cursor-pointer ${
                  activeSection === item.id
                    ? 'bg-teal-50 text-teal-700 font-bold border border-teal-200'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <button
              id="mobile-drawer-planning-doc"
              onClick={() => {
                onOpenPlanningModal();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-slate-700 bg-slate-100 border border-slate-200"
            >
              <FileText className="w-4 h-4 text-teal-600" />
              <span>전체 사이트 상세 기획서 보기</span>
            </button>
            <button
              id="mobile-drawer-inquiry"
              onClick={() => handleNavClick('inquiry')}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-bold text-white bg-teal-600 hover:bg-teal-700 shadow-sm"
            >
              <Send className="w-4 h-4" />
              <span>실시간 견적 및 제작 상담 신청</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
