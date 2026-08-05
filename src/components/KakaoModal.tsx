import React from 'react';
import { X, MessageCircle, ExternalLink, Copy, Check, Phone, Mail, Clock, Send } from 'lucide-react';

interface KakaoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToInquiry: () => void;
  onShowToast: (msg: string) => void;
}

export const KakaoModal: React.FC<KakaoModalProps> = ({
  isOpen,
  onClose,
  onNavigateToInquiry,
  onShowToast,
}) => {
  const [copied, setCopied] = React.useState(false);

  if (!isOpen) return null;

  const kakaoId = 'mintcle_web';

  const handleCopyKakaoId = () => {
    navigator.clipboard.writeText(kakaoId);
    setCopied(true);
    onShowToast('카카오톡 아이디(mintcle_web)가 복사되었습니다!');
    setTimeout(() => setCopied(false), 2000);
  };

  const handleOpenKakaoTalk = () => {
    onShowToast('카카오톡 1:1 오픈채팅 상담으로 연결합니다.');
    // Simulated Open Kakao Link
    window.open('https://open.kakao.com', '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in">
      <div 
        className="bg-white rounded-3xl shadow-2xl border border-slate-200 w-full max-w-md overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header - Kakao Yellow Theme */}
        <div className="bg-[#FEE500] text-[#3C1E1E] p-6 text-left relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-black/10 transition-colors text-[#3C1E1E] cursor-pointer"
            aria-label="닫기"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 rounded-2xl bg-[#3C1E1E] text-[#FEE500] flex items-center justify-center font-black shadow-md">
              <MessageCircle className="w-7 h-7 fill-[#FEE500]" />
            </div>
            <div>
              <span className="text-xs font-bold bg-[#3C1E1E]/10 text-[#3C1E1E] px-2.5 py-0.5 rounded-full">
                실시간 1:1 빠른 상담
              </span>
              <h3 className="text-xl font-black text-[#3C1E1E] tracking-tight">
                카카오톡 문의하기
              </h3>
            </div>
          </div>
          <p className="text-xs text-[#3C1E1E]/80 font-medium">
            민트클 전문 디렉터와 1:1로 실시간 견적 및 제작 상담을 진행하세요.
          </p>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-5 text-left">
          
          {/* Main Action - Open Kakao */}
          <button
            onClick={handleOpenKakaoTalk}
            className="w-full py-3.5 px-4 rounded-2xl bg-[#FEE500] hover:bg-[#fada0a] text-[#3C1E1E] font-extrabold text-sm sm:text-base flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer border border-amber-300"
          >
            <MessageCircle className="w-5 h-5 fill-[#3C1E1E]" />
            <span>카카오톡 1:1 오픈채팅 시작하기</span>
            <ExternalLink className="w-4 h-4" />
          </button>

          {/* Copy ID Card */}
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex items-center justify-between text-xs">
            <div>
              <div className="text-slate-500 font-medium">카카오톡 ID 검색 상담</div>
              <div className="text-sm font-extrabold text-slate-900 font-mono mt-0.5">@{kakaoId}</div>
            </div>
            <button
              onClick={handleCopyKakaoId}
              className="px-3 py-2 rounded-xl bg-white hover:bg-slate-100 text-slate-800 font-bold border border-slate-200 transition-colors cursor-pointer flex items-center gap-1.5 shadow-2xs"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
              <span>{copied ? '복사됨' : 'ID 복사'}</span>
            </button>
          </div>

          {/* Operating Info */}
          <div className="space-y-2 text-xs text-slate-600 border-t border-slate-100 pt-4">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-teal-600 shrink-0" />
              <span>상담 가능 시간: <strong className="text-slate-900">평일 09:00 ~ 18:00 (주말/공휴일 순차 답변)</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-teal-600 shrink-0" />
              <span>직접 이메일 문의: <strong className="text-slate-900 font-mono">6gsmake@gmail.com</strong></span>
            </div>
          </div>

          {/* Alternative Form Action */}
          <div className="pt-2">
            <button
              onClick={() => {
                onClose();
                onNavigateToInquiry();
              }}
              className="w-full py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer border border-slate-200"
            >
              <Send className="w-4 h-4 text-teal-600" />
              <span>웹사이트 폼으로 실시간 무료 견적 신청하기</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
