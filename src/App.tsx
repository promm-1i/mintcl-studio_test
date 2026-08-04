import React, { useState } from 'react';
import { SectionId } from './types';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { ProcessSection } from './components/ProcessSection';
import { FaqSection } from './components/FaqSection';
import { InquirySection } from './components/InquirySection';
import { PlanningDocModal } from './components/PlanningDocModal';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';

export default function App() {
  const [activeSection, setActiveSection] = useState<SectionId>('home');
  const [isPlanningModalOpen, setIsPlanningModalOpen] = useState(false);
  const [preSelectedServiceTitle, setPreSelectedServiceTitle] = useState<string>('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const handleNavigate = (sectionId: SectionId) => {
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

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-teal-100 selection:text-teal-900">
      
      {/* Sticky Header Navigation */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenPlanningModal={() => setIsPlanningModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="relative">
        
        {/* 1. HOME (Hero) */}
        <HeroSection
          onNavigate={handleNavigate}
          onOpenPlanningModal={() => setIsPlanningModalOpen(true)}
        />

        {/* 2. 서비스 소개 (Services) */}
        <ServicesSection
          onSelectServiceForInquiry={handleSelectServiceForInquiry}
          onNavigate={handleNavigate}
        />

        {/* 3. 포트폴리오 (제작 가능 샘플 유형) */}
        <PortfolioSection
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

      {/* Interactive Detailed Planning Document Viewer */}
      <PlanningDocModal
        isOpen={isPlanningModalOpen}
        onClose={() => setIsPlanningModalOpen(false)}
        onShowToast={showToast}
      />

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenPlanningModal={() => setIsPlanningModalOpen(true)}
      />

      {/* Toast Notification */}
      <Toast
        message={toastMessage}
        onClose={() => setToastMessage(null)}
      />

    </div>
  );
}
