import React from 'react';
import { PROCESS_STEPS, WORK_SCOPE_SUMMARY } from '../data/processData';
import { SectionId } from '../types';
import { 
  CheckCircle2, 
  XCircle, 
  Clock, 
  ArrowRight, 
  UserCheck, 
  Code2, 
  FileCheck,
  Send
} from 'lucide-react';

interface ProcessSectionProps {
  onNavigate: (sectionId: SectionId) => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onNavigate }) => {
  return (
    <section id="process-section" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-teal-50 text-teal-800 border border-teal-200">
            <span>투명한 공정 체계</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-sans">
            예측 가능한 <span className="text-teal-600">5단계 제작 절차</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            민트클 웹스튜디오는 시작부터 오픈까지 매 단계에서 고객과 명확히 소통하며, 검수 승인 후 다음 단계로 진행합니다.
          </p>
        </div>

        {/* 5-Step Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 relative mb-16 text-left">
          {PROCESS_STEPS.map((proc) => (
            <div
              key={proc.step}
              className="bg-slate-50 rounded-2xl p-5 border border-slate-200/90 hover:border-teal-400 hover:shadow-md transition-all flex flex-col justify-between space-y-4 relative group"
            >
              <div className="space-y-3">
                {/* Step Number Badge */}
                <div className="flex items-center justify-between">
                  <span className="w-8 h-8 rounded-xl bg-teal-600 text-white font-extrabold text-sm flex items-center justify-center shadow-xs">
                    0{proc.step}
                  </span>
                  <span className="text-[10px] font-bold text-teal-800 bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
                    <Clock className="w-3 h-3 inline mr-1" />
                    {proc.duration}
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                    {proc.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {proc.subtitle}
                  </p>
                </div>

                {/* Studio Actions */}
                <div className="space-y-1 pt-2 border-t border-slate-200/60">
                  <span className="text-[11px] font-bold text-slate-700 flex items-center gap-1">
                    <Code2 className="w-3.5 h-3.5 text-teal-600" />
                    스튜디오 진행:
                  </span>
                  <ul className="space-y-1">
                    {proc.studioActions.map((act, idx) => (
                      <li key={idx} className="text-[11px] text-slate-600 leading-snug flex items-start gap-1">
                        <span className="text-teal-600 shrink-0">•</span>
                        <span>{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Client Actions */}
                <div className="space-y-1 pt-2 border-t border-slate-200/60">
                  <span className="text-[11px] font-bold text-slate-700 flex items-center gap-1">
                    <UserCheck className="w-3.5 h-3.5 text-slate-500" />
                    고객 준비 사항:
                  </span>
                  <ul className="space-y-1">
                    {proc.clientActions.map((act, idx) => (
                      <li key={idx} className="text-[11px] text-slate-500 leading-snug flex items-start gap-1">
                        <span className="text-slate-400 shrink-0">•</span>
                        <span>{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Step Output Deliverable */}
              <div className="p-2.5 bg-white rounded-xl border border-slate-200/80 text-[11px] text-slate-700 font-medium flex items-center gap-1.5">
                <FileCheck className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                <span>결과물: <strong>{proc.deliverables[0]}</strong></span>
              </div>
            </div>
          ))}
        </div>

        {/* Work Scope Breakdown (포함 / 미포함 범위) */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200/90 p-6 sm:p-8 lg:p-10 space-y-8 text-left">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-200 pb-5">
            <div>
              <h3 className="text-xl font-bold text-slate-900">
                기본 명확 작업 범위 (Work Scope Declaration)
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                계약 후 오해가 없도록 기본 제작 포함 사항과 고객 준비/별도 항목을 명확히 안내해 드립니다.
              </p>
            </div>

            <button
              id="process-inquire-cta"
              onClick={() => onNavigate('inquiry')}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl font-bold text-xs text-white bg-teal-600 hover:bg-teal-700 shadow-xs cursor-pointer shrink-0"
            >
              <Send className="w-3.5 h-3.5" />
              <span>상담 신청하기</span>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Included Scope Box */}
            <div className="bg-white rounded-xl p-6 border border-emerald-200 shadow-2xs space-y-4">
              <div className="flex items-center gap-2 text-emerald-800 font-extrabold text-sm border-b border-emerald-100 pb-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <span>기본 제작비 포함 사항 (No Hidden Cost)</span>
              </div>
              <ul className="space-y-2.5">
                {WORK_SCOPE_SUMMARY.included.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="leading-relaxed font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Excluded Scope Box */}
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-2xs space-y-4">
              <div className="flex items-center gap-2 text-slate-700 font-extrabold text-sm border-b border-slate-100 pb-3">
                <XCircle className="w-5 h-5 text-slate-400" />
                <span>실비 별도 및 고객 직접 준비 항목</span>
              </div>
              <ul className="space-y-2.5">
                {WORK_SCOPE_SUMMARY.excluded.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-2 text-[11px] text-slate-500 bg-slate-50 p-3 rounded-lg border border-slate-100">
                💡 도메인 및 호스팅은 가이드에 따라 고객님 계정으로 직접 구매하시도록 도와드려 유일한 소유권을 보장합니다.
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
