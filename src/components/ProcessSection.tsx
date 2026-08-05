import React from 'react';
import { motion } from 'motion/react';
import { WORK_SCOPE_SUMMARY } from '../data/processData';
import { SectionId } from '../types';
import { 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  Send,
  ShieldCheck,
  Sparkles
} from 'lucide-react';

interface ProcessSectionProps {
  onNavigate: (sectionId: SectionId) => void;
}

const PROCESS_SUMMARY_STEPS = [
  {
    step: '01',
    title: '상담 & 견적',
    duration: '1~2일',
    desc: '제작 목적과 필요한 페이지를 파악하고, 명확한 예상 견적과 일정을 안내해 드립니다.',
    result: '견적서 및 일정 안내',
  },
  {
    step: '02',
    title: '기획 & 원고',
    duration: '2~3일',
    desc: '사이트 구조(IA)를 설계하고, 필요한 로고·텍스트·이미지 등 자료를 정리합니다.',
    result: '화면 구조도(와이어프레임)',
  },
  {
    step: '03',
    title: '디자인 확정',
    duration: '3~5일',
    desc: '브랜드 컬러에 맞춘 PC 및 모바일 화면 시안을 제작하여 고객님과 검토합니다.',
    result: '디자인 시안',
  },
  {
    step: '04',
    title: '반응형 개발',
    duration: '3~5일',
    desc: '모바일 반응형 웹 개발, 검색엔진(SEO) 수집 설정 및 문의폼을 연동합니다.',
    result: '테스트 연결 링크',
  },
  {
    step: '05',
    title: '오픈 & A/S',
    duration: '1~2일',
    desc: '고객 도메인 연결 및 최종 검수를 진행하며, 오픈 후 1개월간 무상 A/S를 지원합니다.',
    result: '정식 오픈 & 보증 시작',
  },
];

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onNavigate }) => {
  return (
    <section id="process-section" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Motion */}
        <motion.div 
          className="text-center max-w-3xl mx-auto space-y-3 mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-teal-100/80 text-teal-900 border border-teal-200">
            <Sparkles className="w-3.5 h-3.5 text-teal-600" />
            <span>제작 절차</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-sans">
            5단계 제작 프로세스
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            상담부터 디자인, 개발, 최종 오픈까지 간결하고 예측 가능한 5단계로 진행됩니다.
          </p>
        </motion.div>

        {/* Streamlined 5-Step Flow Grid with Motion */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-14 text-left">
          {PROCESS_SUMMARY_STEPS.map((step, idx) => (
            <motion.div
              key={step.step}
              className="bg-white rounded-2xl p-5 border border-slate-200 shadow-2xs flex flex-col justify-between space-y-4 hover:border-teal-500 hover:shadow-md transition-all relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <div className="space-y-2">
                {/* Step Header */}
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-black text-teal-600 tracking-tight">
                    {step.step}
                  </span>
                  <span className="text-xs font-bold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-full border border-slate-200">
                    {step.duration}
                  </span>
                </div>

                {/* Step Title */}
                <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-teal-700 transition-colors">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-sm text-slate-700 leading-relaxed font-normal">
                  {step.desc}
                </p>
              </div>

              {/* Step Result */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500 font-medium">산출물</span>
                <span className="font-bold text-teal-800">{step.result}</span>
              </div>

              {/* Desktop Arrow Indicator for steps 1-4 */}
              {idx < 4 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-slate-300">
                  <ArrowRight className="w-5 h-5 text-slate-300" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Work Scope Breakdown with Motion */}
        <motion.div 
          className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6 text-left shadow-2xs"
          initial={{ opacity: 0, y: 35, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-teal-600 shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  기본 제작 범위 안내
                </h3>
                <p className="text-sm text-slate-600 font-medium">
                  기본 포함 사항과 실비 항목을 정직하게 안내합니다.
                </p>
              </div>
            </div>

            <button
              id="process-inquire-cta"
              onClick={() => onNavigate('inquiry')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm text-white bg-teal-600 hover:bg-teal-700 shadow-2xs cursor-pointer shrink-0 transition-all"
            >
              <Send className="w-4 h-4" />
              <span>견적 및 문의하기</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Included Scope Box */}
            <div className="bg-emerald-50/80 rounded-xl p-5 border border-emerald-200 space-y-3">
              <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm sm:text-base border-b border-emerald-200 pb-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>제작비 포함 사항 (추가금 없음)</span>
              </div>
              <ul className="space-y-2.5 text-sm font-medium text-slate-800">
                {WORK_SCOPE_SUMMARY.included.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Excluded Scope Box */}
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 space-y-3">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-sm sm:text-base border-b border-slate-200 pb-2">
                <XCircle className="w-5 h-5 text-slate-400 shrink-0" />
                <span>실비 별도 및 직접 준비 항목</span>
              </div>
              <ul className="space-y-2.5 text-sm font-medium text-slate-700">
                {WORK_SCOPE_SUMMARY.excluded.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-slate-400 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-2 text-xs sm:text-sm text-slate-600 font-medium">
                💡 도메인 및 호스팅은 고객님 직접 명의로 개설하여 소유권을 100% 보장합니다.
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};


