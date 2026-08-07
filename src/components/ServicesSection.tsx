import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { SERVICES_DATA } from '../data/servicesData';
import { SectionId } from '../types';
import {
  Building2,
  Store,
  Sparkles,
  RefreshCw,
  Layers,
  Send,
  ChevronDown,
  Check,
} from 'lucide-react';
import { staggerDelay } from '../lib/motionVariants';

interface ServicesSectionProps {
  onSelectServiceForInquiry: (serviceId: string) => void;
  onNavigate: (sectionId: SectionId) => void;
}

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'Building2': return <Building2 className="w-6 h-6 text-teal-600" />;
    case 'Store': return <Store className="w-6 h-6 text-teal-600" />;
    case 'Sparkles': return <Sparkles className="w-6 h-6 text-teal-600" />;
    case 'RefreshCw': return <RefreshCw className="w-6 h-6 text-teal-600" />;
    default: return <Layers className="w-6 h-6 text-teal-600" />;
  }
};

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectServiceForInquiry,
  onNavigate,
}) => {
  const prefersReducedMotion = useReducedMotion();
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const handleInquiryClick = (serviceTitle: string) => {
    onSelectServiceForInquiry(serviceTitle);
    onNavigate('inquiry');
  };

  return (
    <section id="services-section" className="py-20 bg-slate-50/60 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          className="text-left max-w-2xl space-y-3 mb-10"
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-mint-600">Service</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight break-keep">
            어떤 웹사이트가 필요하신가요?
          </h2>
        </motion.div>

        {/* 4-card grid — each card carries only icon + name + 1-line + button */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES_DATA.map((service, idx) => {
            const isExpanded = expandedId === service.id;
            return (
              <motion.div
                key={service.id}
                layout
                className={`bg-white rounded-2xl border p-6 text-left flex flex-col gap-4 transition-colors ${
                  isExpanded ? 'border-teal-400 shadow-md' : 'border-slate-200'
                } ${isExpanded ? 'sm:col-span-2 lg:col-span-2' : ''}`}
                initial={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                {...staggerDelay(idx, 0.1)}
              >
                <div className="w-11 h-11 rounded-xl bg-teal-50 flex items-center justify-center">
                  {getIcon(service.iconName)}
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-lg font-bold text-slate-900">{service.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed break-keep">{service.subtitle}</p>
                </div>

                <div className="mt-auto flex flex-col sm:flex-row items-stretch gap-2 pt-1">
                  <button
                    id={`service-expand-${service.id}`}
                    onClick={() => setExpandedId(isExpanded ? null : service.id)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-2.5 py-2.5 rounded-lg text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer whitespace-nowrap"
                  >
                    <span className="whitespace-nowrap">자세히 보기</span>
                    <ChevronDown className={`w-3.5 h-3.5 shrink-0 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                  </button>
                  <button
                    id={`service-inquire-${service.id}`}
                    onClick={() => handleInquiryClick(service.title)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-lg text-xs font-bold text-white bg-teal-600 hover:bg-teal-700 transition-colors cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>상담하기</span>
                  </button>
                </div>

                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={prefersReducedMotion ? undefined : { opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={prefersReducedMotion ? undefined : { opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 border-t border-slate-100 space-y-3 text-left">
                        <p className="text-sm text-slate-600 leading-relaxed break-keep">{service.description}</p>
                        <div className="flex flex-wrap gap-1.5">
                          {service.recommendedPages.map((page, i) => (
                            <span key={i} className="px-2.5 py-1 rounded-md text-xs font-semibold bg-slate-50 text-slate-700 border border-slate-200">
                              {page}
                            </span>
                          ))}
                        </div>
                        <div className="space-y-1.5">
                          {service.keyFeatures.map((feat, i) => (
                            <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                              <Check className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                              <span>{feat}</span>
                            </div>
                          ))}
                        </div>
                        <div className="text-xs font-semibold text-teal-800 bg-teal-50 px-3 py-2 rounded-lg border border-teal-200">
                          예상 제작 기간: {service.estimatedDays}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
