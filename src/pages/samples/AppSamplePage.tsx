import React, { useState } from 'react';
import { SampleHeaderBanner } from '../../components/SampleHeaderBanner';
import { 
  Smartphone, 
  Sparkles, 
  Download, 
  CheckCircle, 
  Star, 
  Zap, 
  Bell, 
  Clock, 
  ChevronRight,
  ShieldCheck,
  MessageSquare,
  Share2
} from 'lucide-react';

export const AppSamplePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'ai' | 'kakao' | 'habit' | 'voice'>('ai');
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const featureDetails = {
    ai: {
      title: 'AI가 스스로 정돈하는 오늘 하루 타임블록',
      desc: '복잡한 할 일 목록을 입력만 하면, AI가 우선순위와 소요 시간을 계산하여 가장 몰입하기 좋은 시간에 일정을 자동 배치해 드립니다.',
      points: ['업무 / 개인 일정 자동 우선순위 분류', '집중력 최고조 시간대(Deep Work) 맞춤 추천', '지연된 일정 원클릭 재배치 지원'],
      screenDesc: 'AI 스케줄 추천 알고리즘 작동 화면',
    },
    kakao: {
      title: '카카오톡 & 네이버 달력 양방향 실시간 동기화',
      desc: '따로 앱을 열지 않아도 카카오톡 챗봇으로 "오늘 오후 3시 팀 미팅"이라고 보내면 네이버 달력과 오늘하루 앱에 즉시 등록됩니다.',
      points: ['카카오톡 챗봇 음성/텍스트 즉시 일정 등록', '네이버 / 구글 캘린더 양방향 연동', '팀원 간 카톡 일정 공유 카드 발송'],
      screenDesc: '카카오톡 일정 연동 및 메세지봇 전송 화면',
    },
    habit: {
      title: '직장인 & 대학생 필수 습관 트래커',
      desc: '영양제 먹기, 매일 30분 독서, 운동 등 작은 습관을 시각적 잔디 그래프와 알림으로 형성하도록 도와줍니다.',
      points: ['연속 달성 릴레이 스티커 지급', '위젯 지원 (iOS / 안드로이드 홈화면)', '목표 달성 시 리워드 뱃지 수집'],
      screenDesc: '습관 달성률 잔디 그래프 & 홈 화면 위젯',
    },
    voice: {
      title: '회의록 & 음성 메모 1초 핵심 요약',
      desc: '갑작스러운 대화나 아이디어를 음성으로 남기면, AI가 텍스트로 변환하고 실행할 할 일(Action Item)만 추출해 줍니다.',
      points: ['한국어 발음 및 전문 용어 99% 인식', '핵심 요약 3줄 자동 생성', '담당자 지정 및 카톡 공유'],
      screenDesc: '음성 텍스트 변환 및 실행 과제 추출 화면',
    },
  };

  const currentFeat = featureDetails[activeTab];

  return (
    <div className="min-h-screen bg-[#0F172A] text-slate-100 font-sans selection:bg-[#6366F1] selection:text-white">
      
      {/* Top Banner */}
      <SampleHeaderBanner
        sampleTitle="모바일 앱 프로모션 랜딩페이지 샘플 (오늘하루 - AI 일정관리)"
        colorSchemeClass="bg-[#1E1B4B] text-[#A5B4FC] border-[#312E81]"
      />

      {/* Main Header Nav */}
      <header className="px-6 py-4 border-b border-slate-800 bg-[#0F172A]/90 backdrop-blur-md sticky top-[41px] z-40">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#6366F1] to-[#818CF8] text-white flex items-center justify-center font-black text-lg shadow-md">
              오늘
            </div>
            <div>
              <span className="text-[10px] tracking-widest uppercase font-bold text-[#818CF8] block">
                스마트 AI 일정 플래너
              </span>
              <h1 className="text-base font-bold tracking-tight text-white">
                오늘하루 (HoleDay) <span className="text-xs font-normal text-slate-400">(샘플)</span>
              </h1>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-7 text-xs font-bold text-slate-300">
            <a href="#features" className="hover:text-[#818CF8] transition-colors">주요 기능</a>
            <a href="#preview" className="hover:text-[#818CF8] transition-colors">실제 앱 화면</a>
            <a href="#reviews" className="hover:text-[#818CF8] transition-colors">사용자 후기</a>
            <a href="#download" className="hover:text-[#818CF8] transition-colors">앱 다운로드</a>
          </nav>

          <button
            onClick={() => setDownloadSuccess(true)}
            className="px-4 py-2 rounded-xl text-xs font-bold bg-[#6366F1] hover:bg-[#4F46E5] text-white transition-all shadow-md"
          >
            앱 무료 설치
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 px-6 overflow-hidden bg-gradient-to-b from-[#1E1B4B] via-[#0F172A] to-[#0F172A] text-left">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#6366F1]/20 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#6366F1]/20 text-[#A5B4FC] border border-[#6366F1]/30">
              <Sparkles className="w-4 h-4 text-[#818CF8]" />
              <span>구글 플레이 & 앱스토어 피처드 선정 생산성 1위</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.15] tracking-tight">
              생각을 흐름으로 바꾸는<br />
              <span className="bg-gradient-to-r from-[#A5B4FC] via-[#C7D2FE] to-white bg-clip-text text-transparent">
                스마트 올인원 일정관리
              </span>
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-lg">
              오늘하루 앱은 바쁜 직장인과 대학생을 위해 카카오톡 연동, AI 자동 타임블록 배치, 음성 요약을 한곳에서 제공하는 생산성 앱 시안입니다.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => setDownloadSuccess(true)}
                className="px-7 py-3.5 rounded-xl font-bold text-xs text-white bg-[#6366F1] hover:bg-[#4F46E5] transition-all shadow-lg flex items-center gap-2 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>무료 앱 다운로드</span>
              </button>
              <a
                href="#features"
                className="px-6 py-3.5 rounded-xl font-bold text-xs text-slate-200 bg-slate-800/80 hover:bg-slate-700 border border-slate-700 transition-all"
              >
                기능 살펴보기
              </a>
            </div>

            {/* Badges & Trust */}
            <div className="pt-6 border-t border-slate-800 flex items-center gap-6 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                <span className="font-bold text-white">4.9 / 5.0</span>
                <span>(리뷰 1.2만개)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#818CF8]" />
                <span>카카오 공식 연동</span>
              </div>
            </div>
          </div>

          {/* Smartphone Mockup */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-[280px] sm:w-[320px] rounded-[40px] border-8 border-slate-800 bg-slate-900 shadow-2xl p-4 overflow-hidden relative space-y-4">
              {/* Phone Speaker & Notch */}
              <div className="w-24 h-4 bg-slate-800 rounded-full mx-auto" />
              
              {/* App UI Header Inside Phone */}
              <div className="p-3 bg-gradient-to-r from-[#312E81] to-[#4338CA] rounded-2xl space-y-1">
                <div className="flex justify-between items-center text-[10px] text-slate-300">
                  <span>8월 5일 (화)</span>
                  <span className="bg-[#818CF8]/30 text-[#A5B4FC] px-1.5 py-0.5 rounded font-bold">달성률 85%</span>
                </div>
                <h4 className="font-bold text-xs text-white">오늘의 타임블록</h4>
              </div>

              {/* Mock Timeline Tasks */}
              <div className="space-y-2 text-[11px]">
                <div className="p-2.5 rounded-xl bg-slate-800/90 border border-slate-700 flex justify-between items-center">
                  <div>
                    <span className="font-bold text-white block">09:30 주간 디자이너 회의</span>
                    <span className="text-[9px] text-[#818CF8]">카카오톡 자동 등록</span>
                  </div>
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                </div>

                <div className="p-2.5 rounded-xl bg-[#6366F1]/20 border border-[#6366F1]/40 flex justify-between items-center">
                  <div>
                    <span className="font-bold text-white block">14:00 민트클 프로젝트 시안 전달</span>
                    <span className="text-[9px] text-[#A5B4FC]">AI 추천 몰림 시간</span>
                  </div>
                  <Clock className="w-4 h-4 text-[#818CF8]" />
                </div>

                <div className="p-2.5 rounded-xl bg-slate-800/90 border border-slate-700 flex justify-between items-center">
                  <div>
                    <span className="font-bold text-white block">18:30 유산소 운동 30분</span>
                    <span className="text-[9px] text-slate-400">습관 트래커</span>
                  </div>
                  <div className="w-4 h-4 rounded-full border border-slate-600" />
                </div>
              </div>

              <div className="p-3 bg-slate-800/60 rounded-2xl text-center space-y-1">
                <span className="text-[10px] text-slate-400 block">AI 한줄 조언:</span>
                <p className="text-[11px] font-bold text-[#A5B4FC]">
                  "오후 2시 몰입 시간이 가장 효율적입니다!"
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Interactive Features */}
      <section id="features" className="py-20 px-6 max-w-6xl mx-auto text-left">
        <div className="text-center space-y-2 mb-10">
          <span className="text-xs font-bold text-[#818CF8] tracking-widest uppercase block">
            Core Features
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            왜 '오늘하루' 앱을 선택할까요?
          </h3>
          <p className="text-xs text-slate-400">
            한국 사용자의 일상 습관에 맞춘 4가지 시그니처 기능을 경험해보세요.
          </p>
        </div>

        {/* Feature Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {[
            { id: 'ai', label: 'AI 타임블록' },
            { id: 'kakao', label: '카카오톡 연동' },
            { id: 'habit', label: '습관 트래커' },
            { id: 'voice', label: '음성 메모 요약' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`p-3.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-[#6366F1] border-[#818CF8] text-white shadow-lg'
                  : 'bg-slate-900 border-slate-800 text-slate-400 hover:bg-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Feature Display Box */}
        <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-bold text-[#818CF8] uppercase tracking-wider block">
              Feature Details
            </span>
            <h4 className="text-xl sm:text-2xl font-bold text-white">
              {currentFeat.title}
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {currentFeat.desc}
            </p>

            <div className="space-y-2 pt-2">
              {currentFeat.points.map((pt, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle className="w-4 h-4 text-[#818CF8]" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#1E1B4B] p-6 rounded-2xl border border-slate-800 text-center space-y-3">
            <Smartphone className="w-10 h-10 text-[#818CF8] mx-auto" />
            <h5 className="font-bold text-sm text-white">{currentFeat.screenDesc}</h5>
            <p className="text-xs text-slate-400">
              실제 개발 시 위 기능 모듈을 모바일 앱 및 웹 서비스로 구현해 드립니다.
            </p>
          </div>
        </div>
      </section>

      {/* 3-Step Usage Flow Section */}
      <section className="py-16 px-6 bg-[#131B2E] border-t border-slate-800 text-left">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold text-[#818CF8] tracking-widest uppercase block">
              3-Step Workflow
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              단 3초 만에 완료되는 지혜로운 일정 관리
            </h3>
            <p className="text-xs text-slate-400">
              복잡한 수동 입력 없이 말 한마디, 메세지 한 줄로 하루가 정리됩니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
            <div className="p-6 bg-slate-900/90 rounded-2xl border border-slate-800 space-y-3 relative">
              <div className="w-8 h-8 rounded-xl bg-[#6366F1]/20 text-[#818CF8] flex items-center justify-center font-black text-sm">
                01
              </div>
              <h4 className="text-base font-bold text-white">카톡/음성으로 일정 전달</h4>
              <p className="text-slate-400 leading-relaxed">
                "내일 3시 팀 미팅"이라고 카카오톡 챗봇이나 음성으로 편하게 남기세요.
              </p>
            </div>

            <div className="p-6 bg-slate-900/90 rounded-2xl border border-slate-800 space-y-3 relative">
              <div className="w-8 h-8 rounded-xl bg-[#6366F1]/20 text-[#818CF8] flex items-center justify-center font-black text-sm">
                02
              </div>
              <h4 className="text-base font-bold text-white">AI 자동 타임블록 배치</h4>
              <p className="text-slate-400 leading-relaxed">
                AI 알고리즘이 사용자의 집중 골든타임을 계산해 일정을 자동 배치해 줍니다.
              </p>
            </div>

            <div className="p-6 bg-slate-900/90 rounded-2xl border border-slate-800 space-y-3 relative">
              <div className="w-8 h-8 rounded-xl bg-[#6366F1]/20 text-[#818CF8] flex items-center justify-center font-black text-sm">
                03
              </div>
              <h4 className="text-base font-bold text-white">달력 동기화 & 리워드</h4>
              <p className="text-slate-400 leading-relaxed">
                네이버/구글 캘린더에 즉시 연동되며 완료 시 습관 스티커를 지급받습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* User Reviews */}
      <section id="reviews" className="py-20 px-6 bg-[#181825] border-y border-slate-800 text-left">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold text-[#818CF8] tracking-widest uppercase block">
              User Reviews
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              실제 사용자들의 생생한 후기
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
            <div className="p-6 bg-slate-900 rounded-2xl border border-slate-800 space-y-3">
              <div className="flex gap-1 text-amber-400">★★★★★</div>
              <p className="text-slate-300 leading-relaxed">
                "카카오톡 챗봇으로 일정 남기면 자동으로 네이버 달력이랑 앱에 뜨는 게 진짜 사기적입니다. 출퇴근길에 오늘 할 일 바로 정돈돼요!"
              </p>
              <div className="pt-2 border-t border-slate-800">
                <span className="font-bold text-white block">이현우 님</span>
                <span className="text-[10px] text-slate-500">IT 기획자 (30대 직장인)</span>
              </div>
            </div>

            <div className="p-6 bg-slate-900 rounded-2xl border border-slate-800 space-y-3">
              <div className="flex gap-1 text-amber-400">★★★★★</div>
              <p className="text-slate-300 leading-relaxed">
                "시험기간에 공부 계획 짤 때 AI가 타임블록으로 시간 배분해 주는 기능 덕에 집중도가 확 올랐습니다. 대학생 강추 앱이에요."
              </p>
              <div className="pt-2 border-t border-slate-800">
                <span className="font-bold text-white block">박서연 님</span>
                <span className="text-[10px] text-slate-500">연세대학교 재학생</span>
              </div>
            </div>

            <div className="p-6 bg-slate-900 rounded-2xl border border-slate-800 space-y-3">
              <div className="flex gap-1 text-amber-400">★★★★★</div>
              <p className="text-slate-300 leading-relaxed">
                "회의 때 말로 주고받은 내용 음성 메모로 남기면 알아서 할 일만 깔끔하게 요약해 줘서 팀장님 보고할 때 시간 엄청 아꼈습니다."
              </p>
              <div className="pt-2 border-t border-slate-800">
                <span className="font-bold text-white block">김동현 님</span>
                <span className="text-[10px] text-slate-500">마케팅 팀장</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20 px-6 max-w-4xl mx-auto text-center space-y-6">
        <div className="p-10 rounded-3xl bg-gradient-to-r from-[#312E81] via-[#4338CA] to-[#312E81] border border-indigo-500/30 space-y-4">
          <h3 className="text-2xl sm:text-4xl font-black text-white">
            오늘 하루를 더 지혜롭게 시작하세요
          </h3>
          <p className="text-xs sm:text-sm text-indigo-200 max-w-lg mx-auto">
            지금 앱을 설치하시고 14일 무료 프리미엄 AI 타임블록체험을 시작해 보세요.
          </p>

          <div className="flex flex-wrap justify-center gap-3 pt-4">
            <button
              onClick={() => setDownloadSuccess(true)}
              className="px-6 py-3.5 rounded-xl font-bold text-xs text-slate-950 bg-white hover:bg-slate-100 transition-all flex items-center gap-2 cursor-pointer shadow-lg"
            >
              <Download className="w-4 h-4 text-[#6366F1]" />
              <span>App Store 다운로드</span>
            </button>
            <button
              onClick={() => setDownloadSuccess(true)}
              className="px-6 py-3.5 rounded-xl font-bold text-xs text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 transition-all flex items-center gap-2 cursor-pointer"
            >
              <Download className="w-4 h-4 text-emerald-400" />
              <span>Google Play 다운로드</span>
            </button>
          </div>

          {downloadSuccess && (
            <div className="p-4 bg-emerald-500/20 border border-emerald-500/40 rounded-xl text-emerald-200 text-xs font-bold mt-4 animate-fade-in">
              ✓ 오늘하루 앱 다운로드 링크 안내 문자가 전송되었습니다! (샘플 프로젝트)
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-[#0F172A] border-t border-slate-800 text-slate-400 text-xs text-center space-y-2">
        <p className="font-bold text-slate-200">오늘하루 (HoleDay) 모바일 앱 프로모션 샘플 웹사이트</p>
        <p>본 페이지는 민트클 웹스튜디오에서 커스텀 제작 가능한 국내 스타트업·앱 소개 랜딩페이지 시안입니다.</p>
        <p className="text-[11px] text-slate-500 pt-1">© 2026 Mintcle Web Studio Concept Work. All rights reserved.</p>
      </footer>

    </div>
  );
};
