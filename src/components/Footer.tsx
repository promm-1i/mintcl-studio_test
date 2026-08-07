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
    <footer id="main-footer" className="bg-slate-900 text-slate-300 border-t border-slate-800 text-left pt-16 pb-20 sm:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-start">
          
          {/* Col 1: Brand Summary */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-teal-500 text-slate-950 font-extrabold flex items-center justify-center text-xl shadow-md">
                M
              </div>
              <span className="font-extrabold text-white text-2xl tracking-tight">
                민트클 <span className="text-teal-400 font-bold">웹스튜디오</span>
              </span>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              기업과 소상공인을 위한 맞춤형 홈페이지 제작 전문 스튜디오입니다. 거짓 없는 명확한 기획과 투명한 공정, 100% 반응형 웹표준 기술로 최고의 가치를 전달합니다.
            </p>

            <div className="pt-2 space-y-2 text-sm text-slate-300">
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-300 shrink-0" />
                <span>이메일 문의: <strong className="text-amber-300 font-mono">6gsmake@gmail.com</strong> <span className="text-xs text-slate-400 font-normal">(24시간 상시 접수)</span></span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-teal-400 shrink-0" />
                <span>카톡 실시간 상담: <strong className="text-white">평일 09:00 ~ 18:00</strong></span>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-extrabold text-teal-400 uppercase tracking-wider">
              빠른 메뉴 이동
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-amber-300 transition-colors font-medium cursor-pointer">
                  홈 (메인)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('portfolio')} className="hover:text-amber-300 transition-colors font-medium cursor-pointer">
                  포트폴리오 (독립 샘플 7종)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-amber-300 transition-colors font-medium cursor-pointer">
                  서비스 소개 (5가지 맞춤 유형)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('process')} className="hover:text-amber-300 transition-colors font-medium cursor-pointer">
                  제작 절차 & 작업 범위
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('faq')} className="hover:text-amber-300 transition-colors font-medium cursor-pointer">
                  자주 묻는 질문 (FAQ)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('inquiry')} className="hover:text-amber-300 transition-colors font-bold text-amber-400 cursor-pointer">
                  문의하기 (실시간 견적)
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Consult & Trust Guarantee */}
          <div className="lg:col-span-4 space-y-4 bg-slate-800/80 p-6 rounded-2xl border border-slate-700">
            <div className="flex items-center gap-2 text-teal-400 font-bold text-sm">
              <ShieldCheck className="w-5 h-5" />
              <span>투명 제작 원칙 약속</span>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              부풀린 실적 숫자를 표기하지 않으며, 단계를 투명하게 공유하고 모든 기기에서 완벽히 작동하는 반응형 웹사이트 구축을 보장합니다.
            </p>

            <button
              id="footer-open-inquiry"
              onClick={() => onNavigate('inquiry')}
              className="w-full py-3.5 rounded-xl font-extrabold text-sm text-slate-950 bg-amber-400 hover:bg-amber-300 transition-all cursor-pointer flex items-center justify-center gap-2 shadow-md"
            >
              <Send className="w-4 h-4" />
              <span>실시간 견적 산출 & 제작 상담 신청</span>
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © 2026 민트클 웹스튜디오 (Mintcle Web Studio). All rights reserved. | 문의: 6gsmake@gmail.com
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenAdminModal}
              className="text-slate-400 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer font-medium"
            >
              <Lock className="w-3.5 h-3.5" />
              <span>관리자 전용 로그인</span>
            </button>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors cursor-pointer flex items-center gap-1 font-bold"
              title="맨 위로"
            >
              <ArrowUp className="w-4 h-4" />
              <span>TOP</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

