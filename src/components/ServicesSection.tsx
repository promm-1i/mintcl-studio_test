import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/servicesData';
import { ServiceItem, SectionId } from '../types';
import { 
  Building2, 
  Store, 
  Briefcase, 
  Sparkles, 
  RefreshCw, 
  Clock, 
  Check, 
  ArrowRight, 
  Layers, 
  Users,
  Send
} from 'lucide-react';

interface ServicesSectionProps {
  onSelectServiceForInquiry: (serviceId: string) => void;
  onNavigate: (sectionId: SectionId) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectServiceForInquiry,
  onNavigate,
}) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(SERVICES_DATA[0].id);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2': return <Building2 className="w-5 h-5 text-teal-600" />;
      case 'Store': return <Store className="w-5 h-5 text-teal-600" />;
      case 'Briefcase': return <Briefcase className="w-5 h-5 text-teal-600" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-teal-600" />;
      case 'RefreshCw': return <RefreshCw className="w-5 h-5 text-teal-600" />;
      default: return <Layers className="w-5 h-5 text-teal-600" />;
    }
  };

  const activeService = SERVICES_DATA.find(s => s.id === selectedServiceId) || SERVICES_DATA[0];

  const handleInquiryClick = (serviceTitle: string) => {
    onSelectServiceForInquiry(serviceTitle);
    onNavigate('inquiry');
  };

  return (
    <section id="services-section" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-teal-50 text-teal-800 border border-teal-200">
            <span>제공 서비스 안내</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-sans">
            목적과 규모에 꼭 맞춘 <span className="text-teal-600">5가지 홈페이지 유형</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            민트클 웹스튜디오는 불필요한 기능을 강요하지 않으며, 귀사의 비즈니스 특성에 가장 적합한 명확하고 실속 있는 화면을 구성합니다.
          </p>
        </div>

        {/* Desktop Tab Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {SERVICES_DATA.map((service) => {
            const isSelected = service.id === selectedServiceId;
            return (
              <button
                key={service.id}
                id={`service-tab-${service.id}`}
                onClick={() => setSelectedServiceId(service.id)}
                className={`flex items-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-teal-600 text-white shadow-md'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200/80 border border-slate-200/60'
                }`}
              >
                {getIcon(service.iconName)}
                <span>{service.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Service Detailed View Card */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200/80 p-6 sm:p-8 lg:p-10 shadow-xs transition-all">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Overview Column */}
            <div className="lg:col-span-5 space-y-5 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-bold bg-teal-100 text-teal-800">
                {activeService.badge}
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                {activeService.title}
              </h3>

              <p className="text-sm font-semibold text-teal-700">
                {activeService.subtitle}
              </p>

              <p className="text-sm text-slate-600 leading-relaxed">
                {activeService.description}
              </p>

              {/* Target Audience Box */}
              <div className="p-4 bg-white rounded-xl border border-slate-200/80 space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
                  <Users className="w-4 h-4 text-teal-600" />
                  <span>주요 추천 대상</span>
                </div>
                <p className="text-xs text-slate-600 pl-5">
                  {activeService.target}
                </p>
              </div>

              {/* Estimated Timeline */}
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-teal-50/80 p-3 rounded-lg border border-teal-200/60">
                <Clock className="w-4 h-4 text-teal-600" />
                <span>예상 제작 소요 기간: <strong className="text-teal-800">{activeService.estimatedDays}</strong></span>
              </div>

              {/* Primary Action Button */}
              <button
                id={`inquire-service-btn-${activeService.id}`}
                onClick={() => handleInquiryClick(activeService.title)}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-teal-600 hover:bg-teal-700 shadow-sm transition-all cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>'{activeService.title}' 제작 상담 신청하기</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </div>

            {/* Right Specifications Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              {/* Recommended Pages Included */}
              <div className="bg-white rounded-xl p-5 border border-slate-200/80 space-y-3">
                <h4 className="text-xs font-extrabold text-slate-800 uppercase tracking-wider flex items-center gap-2">
                  <Layers className="w-4 h-4 text-teal-600" />
                  추천 구성 페이지 (기본 표준 범위)
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeService.recommendedPages.map((page, idx) => (
                    <span 
                      key={idx} 
                      className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 text-slate-800 border border-slate-200"
                    >
                      {page}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Features List */}
              <div className="bg-white rounded-xl p-5 border border-slate-200/80 space-y-3">
                <h4 className="text-xs font-extrabold text-slate-800 uppercase tracking-wider flex items-center gap-2">
                  <Check className="w-4 h-4 text-teal-600" />
                  제공되는 핵심 기능 & 개발 내용
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeService.keyFeatures.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 p-2 rounded-lg bg-slate-50 text-xs text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-1.5 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Value Guarantee Notice */}
              <div className="p-4 rounded-xl bg-teal-50/50 border border-teal-200/60 text-xs text-teal-900 leading-relaxed">
                💡 <strong>민트클 웹스튜디오 약속:</strong> 모든 서비스는 제작 착수 전 화면 구조도(IA)와 필수 텍스트 원고 가이드를 명확히 확정한 후 작업을 진행합니다.
              </div>

            </div>

          </div>
        </div>

        {/* All Services Quick Grid Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {SERVICES_DATA.map((srv) => (
            <div
              key={srv.id}
              onClick={() => setSelectedServiceId(srv.id)}
              className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                srv.id === selectedServiceId
                  ? 'border-teal-500 bg-teal-50/40 shadow-xs'
                  : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                {getIcon(srv.iconName)}
                <span className="text-[10px] text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded">
                  {srv.badge.split(' ')[0]}
                </span>
              </div>
              <h5 className="text-sm font-bold text-slate-900 mb-1">{srv.title}</h5>
              <p className="text-[11px] text-slate-500 line-clamp-2">{srv.subtitle}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
