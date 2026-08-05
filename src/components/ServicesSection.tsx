import React, { useState } from 'react';
import { motion } from 'motion/react';
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
    <section id="services-section" className="py-20 bg-slate-50/60 border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Motion Animation */}
        <motion.div 
          className="text-center max-w-3xl mx-auto space-y-3 mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold bg-teal-50 text-teal-800 border border-teal-200">
            <span>맞춤 홈페이지 유형</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-sans">
            어떤 웹사이트가 필요하신가요?
          </h2>
          <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
            상황과 필요에 맞는 유형을 클릭하시면 추천 기능과 상세 내용을 확인하실 수 있습니다.
          </p>
        </motion.div>

        {/* Desktop Tab Buttons */}
        <motion.div 
          className="flex flex-wrap items-center justify-center gap-2.5 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {SERVICES_DATA.map((service) => {
            const isSelected = service.id === selectedServiceId;
            return (
              <button
                key={service.id}
                id={`service-tab-${service.id}`}
                onClick={() => setSelectedServiceId(service.id)}
                className={`flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm sm:text-base font-bold transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-teal-600 text-white shadow-md'
                    : 'bg-white text-slate-800 hover:bg-slate-100 border border-slate-300'
                }`}
              >
                {getIcon(service.iconName)}
                <span>{service.title}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Active Service Detailed View Card with Motion */}
        <motion.div 
          className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 lg:p-10 shadow-sm transition-all"
          initial={{ opacity: 0, y: 35, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Overview Column */}
            <div className="lg:col-span-5 space-y-5 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-bold bg-teal-100 text-teal-800">
                {activeService.badge}
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                {activeService.title}
              </h3>

              <p className="text-base font-bold text-teal-700">
                {activeService.subtitle}
              </p>

              <p className="text-base text-slate-700 leading-relaxed font-normal">
                {activeService.description}
              </p>

              {/* Target Audience Box */}
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/80 space-y-1">
                <div className="flex items-center gap-1.5 text-sm font-bold text-slate-800">
                  <Users className="w-4 h-4 text-teal-600" />
                  <span>주요 추천 대상</span>
                </div>
                <p className="text-sm text-slate-700 font-medium pl-5">
                  {activeService.target}
                </p>
              </div>

              {/* Estimated Timeline */}
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-800 bg-teal-50 p-3.5 rounded-lg border border-teal-200">
                <Clock className="w-5 h-5 text-teal-600" />
                <span>예상 제작 소요 기간: <strong className="text-teal-900 font-extrabold">{activeService.estimatedDays}</strong></span>
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
              <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 space-y-3">
                <h4 className="text-sm sm:text-base font-extrabold text-slate-800 uppercase tracking-wider flex items-center gap-2">
                  <Layers className="w-5 h-5 text-teal-600" />
                  추천 구성 페이지 (기본 표준 범위)
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeService.recommendedPages.map((page, idx) => (
                    <span 
                      key={idx} 
                      className="px-3.5 py-2 rounded-lg text-sm font-semibold bg-white text-slate-800 border border-slate-200"
                    >
                      {page}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Features List */}
              <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 space-y-3">
                <h4 className="text-sm sm:text-base font-extrabold text-slate-800 uppercase tracking-wider flex items-center gap-2">
                  <Check className="w-5 h-5 text-teal-600" />
                  제공되는 핵심 기능 & 개발 내용
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeService.keyFeatures.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 p-2.5 rounded-lg bg-white text-sm font-medium text-slate-800 border border-slate-200/60">
                      <span className="w-2 h-2 rounded-full bg-teal-500 mt-1.5 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Value Guarantee Notice */}
              <div className="p-4 rounded-xl bg-teal-50 border border-teal-200 text-sm text-teal-900 leading-relaxed font-medium">
                💡 <strong>민트클 웹스튜디오 약속:</strong> 모든 서비스는 제작 착수 전 화면 구조도(IA)와 원고 가이드를 확정한 후 일관되게 작업을 진행합니다.
              </div>

            </div>

          </div>
        </motion.div>

        {/* All Services Quick Grid Cards with staggered motion */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {SERVICES_DATA.map((srv, idx) => (
            <motion.div
              key={srv.id}
              onClick={() => setSelectedServiceId(srv.id)}
              className={`p-5 rounded-xl border text-left transition-all cursor-pointer ${
                srv.id === selectedServiceId
                  ? 'border-teal-500 bg-teal-50/50 shadow-xs'
                  : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
            >
              <div className="flex items-center justify-between mb-2">
                {getIcon(srv.iconName)}
                <span className="text-xs font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                  {srv.badge.split(' ')[0]}
                </span>
              </div>
              <h5 className="text-base font-bold text-slate-900 mb-1">{srv.title}</h5>
              <p className="text-xs sm:text-sm text-slate-600 line-clamp-2">{srv.subtitle}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
