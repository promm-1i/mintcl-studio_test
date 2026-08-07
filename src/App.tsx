import React, { useState, useEffect } from 'react';
import { SectionId } from './types';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { ProcessSection } from './components/ProcessSection';
import { FaqSection } from './components/FaqSection';
import { InquirySection } from './components/InquirySection';
import { PlanningDocModal } from './components/PlanningDocModal';
import { AdminModal } from './components/AdminModal';
import { KakaoModal } from './components/KakaoModal';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';

// Sample Pages
import { CafeSamplePage } from './pages/samples/CafeSamplePage';
import { CompanySamplePage } from './pages/samples/CompanySamplePage';
import { InteriorSamplePage } from './pages/samples/InteriorSamplePage';
import { BeautySamplePage } from './pages/samples/BeautySamplePage';
import { AppSamplePage } from './pages/samples/AppSamplePage';
import { HospitalSamplePage } from './pages/samples/HospitalSamplePage';
import { RestaurantSamplePage } from './pages/samples/RestaurantSamplePage';
import { PORTFOLIO_SAMPLES } from './data/portfolioData';

const DEFAULT_TITLE = '민트클 웹스튜디오';
const DEFAULT_DESCRIPTION = '기업과 소상공인을 위한 홈페이지 제작, 반응형 웹사이트 및 랜딩페이지 제작 서비스';

function getRouteMeta(path: string): { title: string; description: string } {
  const sample = PORTFOLIO_SAMPLES.find((s) => s.samplePath === path);
  if (sample) {
    return {
      title: `${sample.title} | MintCL`,
      description: sample.description,
    };
  }
  return { title: DEFAULT_TITLE, description: DEFAULT_DESCRIPTION };
}

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [activeSection, setActiveSection] = useState<SectionId>('home');
  const [isPlanningModalOpen, setIsPlanningModalOpen] = useState(false);
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);
  const [isKakaoModalOpen, setIsKakaoModalOpen] = useState(false);
  const [preSelectedServiceTitle, setPreSelectedServiceTitle] = useState<string>('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Per-route SEO: document.title + meta description for home vs each /samples/* page
  useEffect(() => {
    const normalizedPath = currentPath.replace(/\/$/, '') || '/';
    const { title, description } = getRouteMeta(normalizedPath);
    document.title = title;

    const descriptionTag = document.querySelector('meta[name="description"]');
    if (descriptionTag) {
      descriptionTag.setAttribute('content', description);
    }
    const ogTitleTag = document.querySelector('meta[property="og:title"]');
    if (ogTitleTag) {
      ogTitleTag.setAttribute('content', title);
    }
    const ogDescriptionTag = document.querySelector('meta[property="og:description"]');
    if (ogDescriptionTag) {
      ogDescriptionTag.setAttribute('content', description);
    }
  }, [currentPath]);

  // Automatic ScrollSpy to sync activeSection with current visible section as user scrolls
  useEffect(() => {
    const normalizePath = currentPath.replace(/\/$/, '');
    if (normalizePath !== '') return;

    const sections: { id: SectionId; elementId: string }[] = [
      { id: 'home', elementId: 'home-section' },
      { id: 'portfolio', elementId: 'portfolio-section' },
      { id: 'services', elementId: 'services-section' },
      { id: 'process', elementId: 'process-section' },
      { id: 'faq', elementId: 'faq-section' },
      { id: 'inquiry', elementId: 'inquiry-section' },
    ];

    const handleScroll = () => {
      // Top of page
      if (window.scrollY < 80) {
        setActiveSection('home');
        return;
      }

      // Check if user reached near bottom of document
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight;

      if (windowHeight + scrollY >= totalHeight - 120) {
        setActiveSection('inquiry');
        return;
      }

      // Find section closest to top offset
      const scrollPosition = scrollY + 220;

      for (let i = sections.length - 1; i >= 0; i--) {
        const elem = document.getElementById(sections[i].elementId);
        if (elem) {
          const top = elem.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [currentPath]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const handleNavigate = (sectionId: SectionId) => {
    if (currentPath !== '/') {
      window.location.href = `/#${sectionId}-section`;
      return;
    }
    setActiveSection(sectionId);
    const element = document.getElementById(`${sectionId}-section`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSelectServiceForInquiry = (serviceTitle: string) => {
    setPreSelectedServiceTitle(serviceTitle);
  };

  // Route Dispatcher
  const normalizePath = currentPath.replace(/\/$/, '');

  if (normalizePath === '/samples/cafe') {
    return <CafeSamplePage />;
  }
  if (normalizePath === '/samples/hospital') {
    return <HospitalSamplePage />;
  }
  if (normalizePath === '/samples/company') {
    return <CompanySamplePage />;
  }
  if (normalizePath === '/samples/interior') {
    return <InteriorSamplePage />;
  }
  if (normalizePath === '/samples/beauty') {
    return <BeautySamplePage />;
  }
  if (normalizePath === '/samples/restaurant') {
    return <RestaurantSamplePage />;
  }
  if (normalizePath === '/samples/app') {
    return <AppSamplePage />;
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-teal-100 selection:text-teal-900">
      
      {/* Sticky Header Navigation */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenAdminModal={() => setIsAdminModalOpen(true)}
        onOpenKakaoModal={() => setIsKakaoModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="relative">
        
        {/* 1. HOME (Hero) */}
        <HeroSection
          onNavigate={handleNavigate}
        />

        {/* 2. 포트폴리오 (제작 가능 샘플 유형) — 서비스 설명보다 실제 결과물을 먼저 보여준다 */}
        <PortfolioSection
          onSelectServiceForInquiry={handleSelectServiceForInquiry}
          onNavigate={handleNavigate}
        />

        {/* 3. 서비스 소개 (Services) */}
        <ServicesSection
          onSelectServiceForInquiry={handleSelectServiceForInquiry}
          onNavigate={handleNavigate}
        />

        {/* 4. 제작 절차 (Process) */}
        <ProcessSection
          onNavigate={handleNavigate}
        />

        {/* 5. 자주 묻는 질문 (FAQ) */}
        <FaqSection
          onNavigate={handleNavigate}
        />

        {/* 6. 문의하기 (Inquiry & Real-Time Estimator) */}
        <InquirySection
          preSelectedServiceTitle={preSelectedServiceTitle}
          onShowToast={showToast}
        />

      </main>

      {/* Protected Interactive Detailed Planning Document Viewer */}
      <PlanningDocModal
        isOpen={isPlanningModalOpen}
        onClose={() => setIsPlanningModalOpen(false)}
        onShowToast={showToast}
      />

      {/* Admin Protected Control Panel (Inquiries & Planning Spec Editor) */}
      <AdminModal
        isOpen={isAdminModalOpen}
        onClose={() => setIsAdminModalOpen(false)}
        onShowToast={showToast}
        onOpenPlanningModal={() => setIsPlanningModalOpen(true)}
      />

      {/* KakaoTalk 1:1 Consultation Modal */}
      <KakaoModal
        isOpen={isKakaoModalOpen}
        onClose={() => setIsKakaoModalOpen(false)}
        onNavigateToInquiry={() => handleNavigate('inquiry')}
        onShowToast={showToast}
      />

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenAdminModal={() => setIsAdminModalOpen(true)}
      />

      {/* Toast Notification */}
      <Toast
        message={toastMessage}
        onClose={() => setToastMessage(null)}
      />

    </div>
  );
}
