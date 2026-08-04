import React from 'react';
import { SectionId } from '../types';
import { Send, ArrowUp, Mail, Clock, ShieldCheck, Lock } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: SectionId) => void;
  onOpenAdminModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenAdminModal,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-slate-900 text-slate-300 border-t border-slate-800 text-left pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-start">
          
          {/* Col 1: Brand Summary */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-teal-500 text-slate-950 font-extrabold flex items-center justify-center text-lg">
                M
              </div>
              <span className="font-extrabold text-white text-xl tracking-tight">
                민트클 <span className="text-teal-400 font-semibold">웹스튜디오</span>
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              기업과 소상공인을 위한 맞춤형 홈페이지 제작 스튜디오입니다. 거짓 없는 명확한 기획과 투명한 절차, 모바일 반응형 웹표준 기술로 최적의 가치를 전달합니다.
            </p>

            <div className="pt-2 space-y-1.5 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-teal-400" />
                <span>상담 문의: contact@mintcle.studio</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-teal-400" />
                <span>운영시간: 평일 09:30 ~ 18:30 (주말/공휴일 휴무)</span>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider text-teal-400">
              필수 메뉴
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-teal-300 transition-colors">
                  HOME
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-teal-300 transition-colors">
                  서비스 소개 (기업·소상공인·포트폴리오)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('portfolio')} className="hover:text-teal-300 transition-colors">
                  포트폴리오 (제작 가능 샘플)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('process')} className="hover:text-teal-300 transition-colors">
                  제작 절차 & 작업 범위
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('faq')} className="hover:text-teal-300 transition-colors">
                  자주 묻는 질문 (FAQ)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('inquiry')} className="hover:text-teal-300 transition-colors">
                  실시간 견적 & 상담 신청
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Consult & Trust Guarantee */}
          <div className="lg:col-span-4 space-y-4 bg-slate-800/60 p-5 rounded-2xl border border-slate-700/80">
            <div className="flex items-center gap-2 text-teal-400 font-bold text-xs">
              <ShieldCheck className="w-4 h-4" />
              <span>투명 제작 원칙</span>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              확인되지 않은 이력이나 과장된 숫자를 표기하지 않으며, 단계별 명확한 공정 안내와 완벽한 반응형 개발을 약속합니다.
            </p>

            <button
              id="footer-open-inquiry"
              onClick={() => onNavigate('inquiry')}
              className="w-full py-2.5 rounded-xl font-bold text-xs text-slate-900 bg-teal-400 hover:bg-teal-300 transition-colors cursor-pointer flex items-center justify-center gap-1.5 shadow-xs"
            >
              <Send className="w-4 h-4" />
              <span>실시간 견적 계산 & 맞춤 상담 신청</span>
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © 2026 민트클 웹스튜디오 (Mintcle Web Studio). All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenAdminModal}
              className="text-slate-500 hover:text-slate-300 flex items-center gap-1 transition-colors cursor-pointer"
            >
              <Lock className="w-3 h-3" />
              <span>관리자 전용 로그인</span>
            </button>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors cursor-pointer flex items-center gap-1"
              title="맨 위로"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>TOP</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
