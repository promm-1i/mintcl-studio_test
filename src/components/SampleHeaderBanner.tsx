import React from 'react';
import { ArrowLeft, Send, Sparkles, CheckCircle2 } from 'lucide-react';

interface SampleHeaderBannerProps {
  sampleTitle: string;
  colorSchemeClass?: string;
  onInquiryClick?: () => void;
}

export const SampleHeaderBanner: React.FC<SampleHeaderBannerProps> = ({
  sampleTitle,
  colorSchemeClass = 'bg-slate-900 text-white border-slate-800',
  onInquiryClick,
}) => {
  const handleGoHome = () => {
    window.location.href = '/#portfolio-section';
  };

  const handleInquire = () => {
    if (onInquiryClick) {
      onInquiryClick();
    } else {
      window.location.href = '/#inquiry-section';
    }
  };

  return (
    <div className={`sticky top-0 z-50 px-4 py-2.5 border-b backdrop-blur-md ${colorSchemeClass} shadow-md`}>
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs">
        {/* Left Badge */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleGoHome}
            className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 transition-colors flex items-center gap-1 font-bold text-white shrink-0 cursor-pointer"
            title="민트클 메인으로 이동"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">민트클 메인</span>
          </button>
          <div className="h-4 w-px bg-white/20 hidden sm:block" />
          <div className="flex items-center gap-1.5">
            <span className="px-2 py-0.5 rounded font-mono font-bold text-[10px] bg-teal-500/20 text-teal-300 border border-teal-500/40">
              Concept Work
            </span>
            <span className="font-bold tracking-tight text-white/90 truncate max-w-[200px] sm:max-w-xs">
              {sampleTitle}
            </span>
          </div>
        </div>

        {/* Center Notice */}
        <div className="hidden lg:flex items-center gap-1.5 text-slate-300 text-[11px]">
          <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
          <span>본 페이지는 민트클 웹스튜디오에서 커스텀제작 가능한 실제 동작 샘플 프로젝트입니다.</span>
        </div>

        {/* Right Action */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={handleInquire}
            className="px-3 py-1.5 rounded-lg font-bold text-xs bg-teal-500 hover:bg-teal-400 text-slate-950 transition-all flex items-center gap-1.5 shadow-xs cursor-pointer"
          >
            <Send className="w-3.5 h-3.5" />
            <span>이 스타일로 제작 문의</span>
          </button>
        </div>
      </div>
    </div>
  );
};
