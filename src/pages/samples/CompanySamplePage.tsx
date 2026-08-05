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
  Download,
  Users,
  Briefcase,
  Layers,
  ArrowRight,
  CheckCircle2,
  FileCheck2
} from 'lucide-react';

type SubPage = 'home' | 'about' | 'business' | 'solutions' | 'cases' | 'contact';

export const CompanySamplePage: React.FC = () => {
  const [currentSubPage, setCurrentSubPage] = useState<SubPage>('home');
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

  const caseStudies = [
    {
      client: 'A 금융지주회사',
      category: '금융 IT',
      title: '하이브리드 클라우드 전환 및 실시간 잔액 조회 엔진',
      problem: '명절 및 이벤트 접속 폭주 시 온프레미스 레거시 서버 과부하 및 지연 발생',
      solution: '멀티 클라우드 오토스케일링 및 제로 트러스트 아키텍처 도입',
      result: '동시 접속자 10배 처리, 인프라 비용 32% 절감, 장애 0건 달성',
    },
    {
      client: 'B 글로벌 제조그룹',
      category: '스마트 팩토리',
      title: '공장 생산 라인 실시간 센서 빅데이터 파이프라인 구축',
      problem: '하루 5,000만 건 이상 발생하는 IoT 센서 데이터의 처리 속도 저하',
      solution: '초고속 데이터 레이크 및 이상 불량 탐지 AI 모듈 통합',
      result: '불량율 탐지 정확도 99.1% 향상, 설비 보수 비용 25% 감축',
    },
    {
      client: 'C 공공기관',
      category: '공공 SW',
      title: '사내 지식 기반 프라이빗 RAG 생성형 AI 검색 시스템',
      problem: '방대한 기획서 및 법률 규정 검색에 직원당 하루 평균 2시간 소요',
      solution: '온프레미스 기하학적 백터 데이터베이스 및 보안 LLM구축',
      result: '서류 검색 시간 90% 단축, 사내 정보보안 가이드라인 100% 준수',
    },
  ];

  return (
    <div className="min-h-screen bg-[#0F172A] text-slate-100 font-sans selection:bg-[#0284C7] selection:text-white">
      
      {/* Top Banner */}
      <SampleHeaderBanner
        sampleTitle="기업·B2B 다중 페이지 대표 홈페이지 샘플 ((주)다온클라우드)"
        colorSchemeClass="bg-[#0B132B] text-[#38BDF8] border-[#1C2541]"
      />

      {/* Main Header Nav (Multi-page switcher) */}
      <header className="px-6 py-4 border-b border-slate-800 bg-[#0F172A]/90 backdrop-blur-md sticky top-[41px] z-40">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button 
            onClick={() => setCurrentSubPage('home')}
            className="flex items-center gap-3 cursor-pointer text-left"
          >
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
          </button>

          {/* Multi-Page Navigation Tabs */}
          <nav className="hidden md:flex items-center gap-2 text-xs font-bold text-slate-300">
            {[
              { id: 'home', label: '메인' },
              { id: 'about', label: '회사소개' },
              { id: 'business', label: '사업영역' },
              { id: 'solutions', label: '솔루션' },
              { id: 'cases', label: '구축사례' },
              { id: 'contact', label: '문의하기' },
            ].map((page) => (
              <button
                key={page.id}
                onClick={() => setCurrentSubPage(page.id as SubPage)}
                className={`px-3.5 py-2 rounded-lg transition-all cursor-pointer ${
                  currentSubPage === page.id
                    ? 'bg-[#0284C7] text-white shadow-xs'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                {page.label}
              </button>
            ))}
          </nav>

          <button
            onClick={() => setCurrentSubPage('contact')}
            className="px-4 py-2 rounded-xl text-xs font-bold bg-[#38BDF8] hover:bg-[#7DD3FC] text-slate-950 transition-all shadow-md cursor-pointer"
          >
            B2B 프로젝트 견적 신청
          </button>
        </div>
      </header>

      {/* Subpage Breadcrumb Bar */}
      {currentSubPage !== 'home' && (
        <div className="bg-[#0B132B] border-b border-slate-800 px-6 py-3">
          <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-slate-400">
            <button onClick={() => setCurrentSubPage('home')} className="hover:text-white cursor-pointer">홈</button>
            <span>/</span>
            <span className="text-[#38BDF8] font-bold uppercase">
              {currentSubPage === 'about' && '회사소개'}
              {currentSubPage === 'business' && '사업영역'}
              {currentSubPage === 'solutions' && '솔루션 명세'}
              {currentSubPage === 'cases' && '구축사례 레퍼런스'}
              {currentSubPage === 'contact' && 'B2B 도입 문의'}
            </span>
          </div>
        </div>
      )}

      {/* VIEW 1: HOME PAGE */}
      {currentSubPage === 'home' && (
        <div>
          {/* Hero Section */}
          <section className="relative py-20 lg:py-28 px-6 overflow-hidden bg-gradient-to-b from-[#0B132B] via-[#0F172A] to-[#0F172A] text-left">
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
                <button
                  onClick={() => setCurrentSubPage('contact')}
                  className="px-7 py-3.5 rounded-xl font-bold text-xs text-slate-950 bg-[#38BDF8] hover:bg-[#7DD3FC] transition-all shadow-lg flex items-center gap-2 cursor-pointer"
                >
                  <span>사업 제안서 및 도입 문의</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setCurrentSubPage('about')}
                  className="px-6 py-3.5 rounded-xl font-bold text-xs text-slate-200 bg-slate-800/80 hover:bg-slate-700 border border-slate-700 transition-all cursor-pointer"
                >
                  <span>회사 소개 둘러보기</span>
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

          {/* Quick Business Overview */}
          <section className="py-20 px-6 max-w-6xl mx-auto text-left">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
              <div>
                <span className="text-xs font-bold text-[#38BDF8] uppercase tracking-wider block mb-1">
                  Core Competency
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  기업 핵심 기술 영역
                </h3>
              </div>
              <button 
                onClick={() => setCurrentSubPage('business')}
                className="text-xs font-bold text-[#38BDF8] hover:underline flex items-center gap-1 cursor-pointer"
              >
                <span>전체 사업영역 상세 보기</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { title: '클라우드 인프라', desc: 'AWS/GCP/GCP 멀티 클라우드 이중화 및 오토스케일링 구축' },
                { title: '빅데이터 엔진', desc: '초당 10만건 트랜잭션 실시간 수집 및 경영지표 대시보드' },
                { title: '한국어 AI RAG', desc: '기업 내부 지식 기반 프라이빗 LLM 업무 자동화' },
                { title: 'ISMS-P 보안 컨설팅', desc: '정부 보안 인증 및 24시간 실시간 무사고 관제' },
              ].map((item, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
                  <div className="w-8 h-8 rounded-lg bg-[#0284C7]/20 text-[#38BDF8] flex items-center justify-center font-bold text-sm">
                    0{idx+1}
                  </div>
                  <h4 className="font-extrabold text-base text-white">{item.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      )}

      {/* VIEW 2: ABOUT PAGE (회사소개) */}
      {currentSubPage === 'about' && (
        <div className="py-16 px-6 max-w-5xl mx-auto text-left space-y-16">
          <div className="space-y-4">
            <span className="text-xs font-bold text-[#38BDF8] uppercase tracking-wider block">
              About Daon Cloud
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              기업의 기술 혁신을 지탱하는 탄탄한 기술 파트너
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
              (주)다온클라우드는 2021년 설립 이래 국내 대기업, 금융기관, 공공기관의 클라우드 아키텍처 설계와 AI 업무 자동화 솔루션을 전문적으로 제공해 왔습니다.
            </p>
          </div>

          {/* Timeline Milestones */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white border-b border-slate-800 pb-3">연혁 및 성장 기록</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
              <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
                <span className="text-base font-black text-[#38BDF8] block">2026 ~ 현재</span>
                <p className="font-bold text-white">생성형 AI (RAG) 솔루션 론칭</p>
                <p className="text-slate-400">금융권 및 공공기관 전용 프라이빗 LLM RAG 파이프라인 수주</p>
              </div>
              <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
                <span className="text-base font-black text-[#38BDF8] block">2024</span>
                <p className="font-bold text-white">ISMS-P 인증 & GS 1등급 획득</p>
                <p className="text-slate-400">과학기술정보통신부 통합 보안 관리체계 인증 완료</p>
              </div>
              <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
                <span className="text-base font-black text-[#38BDF8] block">2021</span>
                <p className="font-bold text-white">(주)다온클라우드 법인 설립</p>
                <p className="text-slate-400">엔터프라이즈 클라우드 인프라 컨설팅 사업 개시</p>
              </div>
            </div>
          </div>

          {/* Organization & R&D */}
          <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-4">
            <h3 className="text-xl font-bold text-white">기업 조직 & 연구소 현황</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div className="p-4 bg-[#0B132B] rounded-xl border border-slate-800">
                <span className="font-bold text-[#38BDF8] block mb-1">클라우드 인프라 센터</span>
                <span className="text-slate-300">AWS / GCP / NCP 엔지니어 25명 보유</span>
              </div>
              <div className="p-4 bg-[#0B132B] rounded-xl border border-slate-800">
                <span className="font-bold text-[#38BDF8] block mb-1">AI & 데이터 연구소</span>
                <span className="text-slate-300">RAG 백터 데이터베이스 전담 석박사 팀</span>
              </div>
              <div className="p-4 bg-[#0B132B] rounded-xl border border-slate-800">
                <span className="font-bold text-[#38BDF8] block mb-1">24/7 통합 보안 관제</span>
                <span className="text-slate-300">365일 24시간 실시간 모니터링 팀</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* VIEW 3: BUSINESS PAGE (사업영역) */}
      {currentSubPage === 'business' && (
        <div className="py-16 px-6 max-w-6xl mx-auto text-left space-y-12">
          <div className="space-y-3">
            <span className="text-xs font-bold text-[#38BDF8] uppercase tracking-wider block">
              Business Scope
            </span>
            <h2 className="text-3xl font-extrabold text-white">엔터프라이즈 사업 영역</h2>
            <p className="text-xs text-slate-300">
              기업 규모와 산업군에 따라 완벽히 다르게 설계되는 custom B2B 솔루션입니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-4">
              <div className="flex items-center gap-3">
                <Globe2 className="w-7 h-7 text-[#38BDF8]" />
                <h3 className="text-lg font-bold text-white">1. 하이브리드 클라우드 인프라</h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                온프레미스 장비와 AWS, Google Cloud, NHN Cloud 등 퍼블릭 클라우드를 연결하는 초고속 전용 회선 구축 및 오토스케일링 자동화를 제공합니다.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-4">
              <div className="flex items-center gap-3">
                <BarChart3 className="w-7 h-7 text-[#38BDF8]" />
                <h3 className="text-lg font-bold text-white">2. 빅데이터 처리 엔진 & 대시보드</h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                분산 데이터 레이크를 기반으로 대용량 데이터를 실시간 가공하고 경영진을 위한 원클릭 데이터 시각화 대시보드를 구축합니다.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-4">
              <div className="flex items-center gap-3">
                <Cpu className="w-7 h-7 text-[#38BDF8]" />
                <h3 className="text-lg font-bold text-white">3. 한국어 프라이빗 AI (RAG)</h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                외부 유출 없는 사내 온프레미스 서버 기반 프라이빗 LLM을 연동하여 계약서, 사내 지식 검색, 법률 문서 자동 검토 시스템을 구현합니다.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-4">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-7 h-7 text-[#38BDF8]" />
                <h3 className="text-lg font-bold text-white">4. ISMS-P 정보보호 컨설팅</h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                과학기술정보통신부 공인 기준에 맞춘 정밀 취약점 점검 및 ISMS-P 인증 취득을 보증하는 1:1 보안 컨설팅 및 실시간 관제를 제공합니다.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* VIEW 4: SOLUTIONS PAGE (솔루션) */}
      {currentSubPage === 'solutions' && (
        <div className="py-16 px-6 max-w-6xl mx-auto text-left space-y-10">
          <div className="space-y-3">
            <span className="text-xs font-bold text-[#38BDF8] uppercase tracking-wider block">
              Solution Specifications
            </span>
            <h2 className="text-3xl font-extrabold text-white">솔루션 스펙 & SLA 품질 보증</h2>
          </div>

          {/* Interactive Selector */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              { id: 'cloud', name: '클라우드 인프라' },
              { id: 'data', name: '빅데이터 파이프라인' },
              { id: 'ai', name: '한국어 AI 업무자동화' },
              { id: 'security', name: 'ISMS-P 보안 컨설팅' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`p-4 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-[#0284C7] border-[#38BDF8] text-white shadow-md'
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:bg-slate-800'
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>

          <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-6">
            <h3 className="text-2xl font-bold text-white">{currentSol.title}</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{currentSol.desc}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs pt-4 border-t border-slate-800">
              <div>
                <span className="font-bold text-[#38BDF8] block mb-2">보장되는 SLA 메트릭스:</span>
                <ul className="space-y-1.5 text-slate-300">
                  {currentSol.metrics.map((m, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#38BDF8]" />
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <span className="font-bold text-[#38BDF8] block mb-2">주요 내장 기능:</span>
                <ul className="space-y-1.5 text-slate-300">
                  {currentSol.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#38BDF8]" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* VIEW 5: CASE STUDIES PAGE (구축사례) */}
      {currentSubPage === 'cases' && (
        <div className="py-16 px-6 max-w-6xl mx-auto text-left space-y-10">
          <div className="space-y-3">
            <span className="text-xs font-bold text-[#38BDF8] uppercase tracking-wider block">
              Case Studies
            </span>
            <h2 className="text-3xl font-extrabold text-white">B2B 수주 및 구축 사례 레퍼런스</h2>
            <p className="text-xs text-slate-300">
              국내 주요 기업 및 금융기관의 성공적인 시스템 전환 레퍼런스 시안입니다.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {caseStudies.map((cs, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                  <div>
                    <span className="text-[10px] font-bold text-[#38BDF8] bg-[#0284C7]/20 px-2.5 py-0.5 rounded border border-[#0284C7]/40 mr-2">
                      {cs.category}
                    </span>
                    <span className="font-extrabold text-white text-base">{cs.client}</span>
                  </div>
                  <span className="text-xs text-slate-400">구축 완료 레퍼런스</span>
                </div>

                <h3 className="text-lg font-bold text-white">{cs.title}</h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs pt-2">
                  <div className="p-4 bg-[#0B132B] rounded-xl border border-slate-800">
                    <span className="font-bold text-rose-400 block mb-1">도입 전 과제 (Problem)</span>
                    <span className="text-slate-300">{cs.problem}</span>
                  </div>
                  <div className="p-4 bg-[#0B132B] rounded-xl border border-slate-800">
                    <span className="font-bold text-[#38BDF8] block mb-1">적용 솔루션 (Solution)</span>
                    <span className="text-slate-300">{cs.solution}</span>
                  </div>
                  <div className="p-4 bg-[#0B132B] rounded-xl border border-slate-800">
                    <span className="font-bold text-emerald-400 block mb-1">성과 측정 (Result)</span>
                    <span className="text-slate-300">{cs.result}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* VIEW 6: CONTACT PAGE (문의하기) */}
      {currentSubPage === 'contact' && (
        <section className="py-16 px-6 max-w-4xl mx-auto text-left">
          <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl space-y-6">
            <div className="text-center space-y-2">
              <span className="text-xs font-bold text-[#38BDF8] tracking-widest uppercase block">
                B2B Contact Form
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
                    <label className="block font-bold text-slate-300 mb-1">이메일 주소</label>
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
      )}

      {/* Footer */}
      <footer className="py-8 px-6 bg-[#0B132B] text-slate-400 text-xs text-center border-t border-slate-800 space-y-2">
        <p className="font-bold text-slate-200">(주)다온클라우드 B2B 대표 홈페이지 샘플</p>
        <p>본 페이지는 민트클 웹스튜디오에서 커스텀 제작 가능한 국내 기업·B2B IT 솔루션 다중 페이지 웹사이트 시안입니다.</p>
        <p className="text-[11px] text-slate-500 pt-1">© 2026 Mintcle Web Studio Concept Work. All rights reserved.</p>
      </footer>

    </div>
  );
};
