import React, { useState } from 'react';
import { SampleHeaderBanner } from '../../components/SampleHeaderBanner';
import { 
  Building2, 
  ShieldCheck, 
  Cpu, 
  Globe2, 
  FileText, 
  Send, 
  Check, 
  ChevronRight,
  Award,
  BarChart3,
  Lock,
  Download
} from 'lucide-react';

export const CompanySamplePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'cloud' | 'data' | 'ai' | 'security'>('cloud');
  const [proposalSubmitted, setProposalSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    projectScope: 'cloud',
    details: '',
  });

  const solutionDetails = {
    cloud: {
      title: '하이브리드 멀티 클라우드 인프라 구축',
      desc: '국내 온프레미스 및 AWS/GCP/NHN 클라우드 환경의 워크로드를 일관되게 통합 관리하며, 장애율 0.001% 미만의 무중단 모니터링 체계를 설계합니다.',
      metrics: ['가동률 99.99%', '운영비용 35% 절감', '국내 전용 데이터센터'],
      features: ['실시간 서버 오토스케일링', '제로 트러스트 통합 모니터링', 'DR(재해복구) 삼중화 이중화 구축'],
    },
    data: {
      title: '실시간 빅데이터 파이프라인 & 시각화',
      desc: '초당 10만 건 이상의 데이터 트랜잭션을 실시간 수집·가공하여 경영진을 위한 시각화 뷰 및 분석 대시보드를 제공합니다.',
      metrics: ['초당 10만건 실시간 처리', '경영지표 시각화 리포트', 'ETL 파이프라인 자동화'],
      features: ['분산 데이터 레이크 구축', '실시간 이상 징후 탐지 엔진', 'BI 도구 자동 연동 API'],
    },
    ai: {
      title: '한국어 특화 생성형 AI 업무 자동화 (RAG)',
      desc: '기업 내부 보안 데이터베이스 기반의 프라이빗 RAG LLM을 구축하여 비대면 고객 응대, 계약서 자동 검토, 사내 지식 검색을 자동화합니다.',
      metrics: ['업무시간 60% 단축', '온프레미스 보안 완벽 보장', '답변 정확도 98.4%'],
      features: ['사내 보안 전용 프라이빗 LLM', '한국어 법률/계약 문서 특화 RAG', '전자결재 업무 워크플로우 연동'],
    },
    security: {
      title: '통합 ISMS-P 정보보호 컨설팅 & 구축',
      desc: '과학기술정보통신부 ISMS-P 및 ISO 27001 기준을 완벽 준수하는 엔드포인트 보안 체계 구축으로 데이터 유출을 근본 차단합니다.',
      metrics: ['ISMS-P 인증 보증', '취약점 0건 달성', '24시간 보안 관제'],
      features: ['권한 기반 계정 접근 관리(RBAC)', '데이터 전송/저장 구간 암호화', '모의 해킹 및 주기적 보안 점검'],
    },
  };

  const currentSol = solutionDetails[activeTab];

  const handleProposalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setProposalSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#0F172A] text-slate-100 font-sans selection:bg-[#0284C7] selection:text-white">
      
      {/* Top Banner */}
      <SampleHeaderBanner
        sampleTitle="기업·B2B IT 솔루션 대표 홈페이지 샘플 ((주)다온클라우드)"
        colorSchemeClass="bg-[#0B132B] text-[#38BDF8] border-[#1C2541]"
      />

      {/* Main Header Nav */}
      <header className="px-6 py-4 border-b border-slate-800 bg-[#0F172A]/90 backdrop-blur-md sticky top-[41px] z-40">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#0284C7] to-[#38BDF8] flex items-center justify-center font-black text-white text-base shadow-md">
              다온
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#38BDF8] block">
                B2B Enterprise Solution
              </span>
              <h1 className="text-base font-bold tracking-tight text-white">
                (주)다온클라우드 <span className="text-slate-400 text-xs font-normal">(샘플)</span>
              </h1>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-7 text-xs font-semibold text-slate-300">
            <a href="#about" className="hover:text-[#38BDF8] transition-colors">회사 소개</a>
            <a href="#solutions" className="hover:text-[#38BDF8] transition-colors">주요 사업</a>
            <a href="#tech" className="hover:text-[#38BDF8] transition-colors">기술 및 인증</a>
            <a href="#contact" className="hover:text-[#38BDF8] transition-colors">도입 문의</a>
          </nav>

          <a
            href="#contact"
            className="px-4 py-2 rounded-xl text-xs font-bold bg-[#38BDF8] hover:bg-[#7DD3FC] text-slate-950 transition-all shadow-md"
          >
            B2B 프로젝트 견적 신청
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 px-6 overflow-hidden bg-gradient-to-b from-[#0B132B] via-[#0F172A] to-[#0F172A] text-left">
        {/* Glowing Background */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#0284C7]/20 blur-[130px] rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto space-y-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#0284C7]/20 text-[#38BDF8] border border-[#38BDF8]/30">
            <ShieldCheck className="w-4 h-4 text-[#38BDF8]" />
            <span>과학기술정보통신부 ISMS-P & GS인증 1등급 획득</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15]">
            대한민국 기업을 위한 무중단<br />
            <span className="bg-gradient-to-r from-[#38BDF8] via-[#7DD3FC] to-white bg-clip-text text-transparent">
              클라우드 & AI 솔루션 파트너
            </span>
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            (주)다온클라우드는 국내 대기업, 금융기관, IT 스타트업을 위해 고성능 서버 구축, 한국어 생성형 AI 자동화 파이프라인, 정보보호 컨설팅을 직접 개발 및 운영합니다.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href="#contact"
              className="px-7 py-3.5 rounded-xl font-bold text-xs text-slate-950 bg-[#38BDF8] hover:bg-[#7DD3FC] transition-all shadow-lg flex items-center gap-2 cursor-pointer"
            >
              <span>사업 제안서 및 도입 문의</span>
              <ChevronRight className="w-4 h-4" />
            </a>
            <button
              onClick={() => alert('회사 소개서 PDF 다운로드 연동 샘플입니다.')}
              className="px-6 py-3.5 rounded-xl font-bold text-xs text-slate-200 bg-slate-800/80 hover:bg-slate-700 border border-slate-700 transition-all flex items-center gap-2 cursor-pointer"
            >
              <Download className="w-4 h-4 text-[#38BDF8]" />
              <span>회사 소개서 PDF</span>
            </button>
          </div>

          {/* Key Metrics Banner */}
          <div className="pt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-left">
            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
              <span className="text-2xl font-black text-[#38BDF8] block">99.99%</span>
              <span className="text-xs text-slate-400 font-medium">클라우드 가동률 보증</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
              <span className="text-2xl font-black text-[#38BDF8] block">150+</span>
              <span className="text-xs text-slate-400 font-medium">국내 B2B 레퍼런스</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
              <span className="text-2xl font-black text-[#38BDF8] block">35% 절감</span>
              <span className="text-xs text-slate-400 font-medium">평균 인프라 운영비용</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
              <span className="text-2xl font-black text-[#38BDF8] block">무사고</span>
              <span className="text-xs text-slate-400 font-medium">보안 관제 7년 연속</span>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Interactive Section */}
      <section id="solutions" className="py-20 px-6 max-w-6xl mx-auto text-left">
        <div className="space-y-2 mb-10">
          <span className="text-xs font-bold text-[#38BDF8] tracking-widest uppercase block">
            Business Areas
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            4대 핵심 B2B 기술 솔루션
          </h3>
          <p className="text-xs text-slate-400">
            귀사의 비즈니스 환경과 기업 규모에 가장 적합한 아키텍처를 확인해 보세요.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
          {[
            { id: 'cloud', name: '클라우드 인프라', icon: Globe2 },
            { id: 'data', name: '빅데이터 파이프라인', icon: BarChart3 },
            { id: 'ai', name: '한국어 AI 업무자동화', icon: Cpu },
            { id: 'security', name: 'ISMS-P 보안 컨설팅', icon: Lock },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id as any)}
                className={`p-4 rounded-xl text-left border transition-all cursor-pointer flex items-center gap-3 ${
                  activeTab === item.id
                    ? 'bg-[#0284C7] border-[#38BDF8] text-white shadow-lg'
                    : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:bg-slate-800'
                }`}
              >
                <Icon className={`w-5 h-5 shrink-0 ${activeTab === item.id ? 'text-white' : 'text-[#38BDF8]'}`} />
                <span className="text-xs font-bold">{item.name}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Tab Detail Box */}
        <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-bold text-[#38BDF8] uppercase tracking-wider block">
              Solution Details
            </span>
            <h4 className="text-xl sm:text-2xl font-bold text-white">
              {currentSol.title}
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {currentSol.desc}
            </p>

            <div className="space-y-2 pt-2">
              <span className="text-xs font-bold text-slate-200 block">핵심 기능 명세:</span>
              {currentSol.features.map((f, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                  <Check className="w-4 h-4 text-[#38BDF8]" />
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 p-6 rounded-xl bg-[#0B132B] border border-slate-800 space-y-4">
            <span className="text-xs font-bold text-slate-400 block border-b border-slate-800 pb-2">
              품질 보증 지표 (SLA)
            </span>
            <div className="space-y-2.5">
              {currentSol.metrics.map((m, i) => (
                <div key={i} className="p-3 bg-slate-900 rounded-lg border border-slate-800 flex items-center justify-between text-xs">
                  <span className="font-bold text-white">{m}</span>
                  <span className="text-[10px] font-bold text-[#38BDF8] bg-[#0284C7]/20 px-2 py-0.5 rounded">SLA</span>
                </div>
              ))}
            </div>
            <a
              href="#contact"
              className="w-full py-3 rounded-xl text-xs font-bold text-slate-950 bg-[#38BDF8] hover:bg-[#7DD3FC] transition-all flex items-center justify-center gap-2 block text-center"
            >
              <span>맞춤 견적 및 제안서 요청</span>
            </a>
          </div>
        </div>
      </section>

      {/* Tech Stack & Certifications Grid */}
      <section id="tech" className="py-16 px-6 bg-[#0B132B] border-y border-slate-800 text-left">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold text-[#38BDF8] tracking-widest uppercase">
              Certifications
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              공인 기술력 및 보안 인증
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-5 bg-[#0F172A] rounded-xl border border-slate-800 space-y-2">
              <ShieldCheck className="w-8 h-8 text-[#38BDF8] mx-auto" />
              <h5 className="font-bold text-sm text-white">ISMS-P 인증</h5>
              <p className="text-[11px] text-slate-400">과학기술정보통신부 정보보호 관리체계</p>
            </div>
            <div className="p-5 bg-[#0F172A] rounded-xl border border-slate-800 space-y-2">
              <Award className="w-8 h-8 text-[#38BDF8] mx-auto" />
              <h5 className="font-bold text-sm text-white">GS인증 1등급</h5>
              <p className="text-[11px] text-slate-400">한국정보통신기술협회 SW 품질인증</p>
            </div>
            <div className="p-5 bg-[#0F172A] rounded-xl border border-slate-800 space-y-2">
              <Building2 className="w-8 h-8 text-[#38BDF8] mx-auto" />
              <h5 className="font-bold text-sm text-white">ISO 27001</h5>
              <p className="text-[11px] text-slate-400">국제 정보보안 경영시스템</p>
            </div>
            <div className="p-5 bg-[#0F172A] rounded-xl border border-slate-800 space-y-2">
              <Lock className="w-8 h-8 text-[#38BDF8] mx-auto" />
              <h5 className="font-bold text-sm text-white">클라우드 품질인증</h5>
              <p className="text-[11px] text-slate-400">한국클라우드산업협회 최고 등급</p>
            </div>
          </div>
        </div>
      </section>

      {/* B2B Contact Form */}
      <section id="contact" className="py-20 px-6 max-w-4xl mx-auto text-left">
        <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl space-y-6">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold text-[#38BDF8] tracking-widest uppercase block">
              Contact Us
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              프로젝트 도입 문의 및 견적 신청
            </h3>
            <p className="text-xs text-slate-400">
              기업 요구사항을 남겨주시면 전담 엔지니어가 24시간 이내 사전 검토 후 안내해 드립니다.
            </p>
          </div>

          {proposalSubmitted ? (
            <div className="p-8 bg-[#0B132B] rounded-2xl border border-slate-800 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#38BDF8] text-slate-950 flex items-center justify-center mx-auto font-bold text-xl">
                ✓
              </div>
              <h4 className="font-bold text-lg text-white">B2B 문의가 성공적으로 전달되었습니다! (샘플)</h4>
              <p className="text-xs text-slate-300">
                {formData.companyName} ({formData.contactName} 님) 문의를 담당자에게 전달하였습니다.
              </p>
              <button
                onClick={() => setProposalSubmitted(false)}
                className="mt-2 px-4 py-2 rounded-xl text-xs font-bold bg-[#38BDF8] text-slate-950"
              >
                다른 문의 추가하기
              </button>
            </div>
          ) : (
            <form onSubmit={handleProposalSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-300 mb-1">회사/기관명</label>
                  <input
                    type="text"
                    required
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder="(주) 한국테크"
                    className="w-full px-4 py-3 rounded-xl bg-[#0B132B] border border-slate-800 text-white focus:outline-none focus:border-[#38BDF8]"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-300 mb-1">담당자 성함 / 직함</label>
                  <input
                    type="text"
                    required
                    value={formData.contactName}
                    onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                    placeholder="홍길동 팀장"
                    className="w-full px-4 py-3 rounded-xl bg-[#0B132B] border border-slate-800 text-white focus:outline-none focus:border-[#38BDF8]"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-[#CBD5E1] mb-1">이메일 주소</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="contact@company.co.kr"
                    className="w-full px-4 py-3 rounded-xl bg-[#0B132B] border border-slate-800 text-white focus:outline-none focus:border-[#38BDF8]"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-300 mb-1">연락처</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="02-1234-5678"
                    className="w-full px-4 py-3 rounded-xl bg-[#0B132B] border border-slate-800 text-white focus:outline-none focus:border-[#38BDF8]"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-300 mb-1">관심 솔루션 영역</label>
                <select
                  value={formData.projectScope}
                  onChange={(e) => setFormData({ ...formData, projectScope: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#0B132B] border border-slate-800 text-white focus:outline-none focus:border-[#38BDF8]"
                >
                  <option value="cloud">하이브리드 클라우드 인프라 구축</option>
                  <option value="data">실시간 빅데이터 파이프라인</option>
                  <option value="ai">한국어 AI 업무자동화 (RAG)</option>
                  <option value="security">ISMS-P 정보보호 컨설팅</option>
                </select>
              </div>

              <div>
                <label className="block font-bold text-slate-300 mb-1">상세 문의 내용 및 요구사항</label>
                <textarea
                  rows={4}
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  placeholder="구축 희망 시스템 목표, 현재 인프라 환경, 예상 착공 일정 등을 편하게 적어주세요."
                  className="w-full px-4 py-3 rounded-xl bg-[#0B132B] border border-slate-800 text-white focus:outline-none focus:border-[#38BDF8]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl font-bold text-sm text-slate-950 bg-[#38BDF8] hover:bg-[#7DD3FC] transition-all shadow-lg cursor-pointer flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>B2B 견적 및 도입 문의 제출</span>
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-[#0B132B] text-slate-400 text-xs text-center border-t border-slate-800 space-y-2">
        <p className="font-bold text-slate-200">(주)다온클라우드 B2B 대표 홈페이지 샘플</p>
        <p>본 페이지는 민트클 웹스튜디오에서 커스텀 제작 가능한 국내 기업·B2B IT 솔루션 웹사이트 시안입니다.</p>
        <p className="text-[11px] text-slate-500 pt-1">© 2026 Mintcle Web Studio Concept Work. All rights reserved.</p>
      </footer>

    </div>
  );
};
