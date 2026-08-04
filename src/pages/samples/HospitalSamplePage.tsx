import React, { useState } from 'react';
import { SampleHeaderBanner } from '../../components/SampleHeaderBanner';
import { 
  Building2, 
  Clock, 
  MapPin, 
  Phone, 
  Calendar, 
  CheckCircle2, 
  Award, 
  ShieldCheck, 
  Stethoscope, 
  Users, 
  Activity, 
  FileText, 
  Sparkles,
  ChevronRight,
  X,
  Send
} from 'lucide-react';

export const HospitalSamplePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'depts' | 'doctors' | 'equip' | 'booking' | 'location'>('depts');
  const [selectedDoctor, setSelectedDoctor] = useState<string>('김진우 대표원장');
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [bookingData, setBookingData] = useState({
    name: '',
    phone: '',
    dept: '척추·관절 센터',
    doctor: '김진우 대표원장 (정형외과 전문의)',
    date: '2026-08-10',
    time: '10:00',
    symptom: '',
  });

  const departments = [
    {
      id: 'spine',
      title: '척추·관절 센터',
      subtitle: '비수술 맞춤 주사치료 및 정밀 진단',
      desc: '허리디스크, 목디스크, 퇴행성 관절염, 오십견 대상 1:1 비수술 맞춤 치료를 진행합니다.',
      features: ['C-arm 실시간 영상유도 주사', '체외충격파(ESWT)', '고주파 열치료'],
      badge: '대표 센터',
      icon: Stethoscope
    },
    {
      id: 'rehab',
      title: '비수술 도수·재활센터',
      subtitle: '전문 도수치료사의 1:1 맞춤 교정',
      desc: '체형 분석 시스템 결과를 바탕으로 전문 도수치료사가 근골격계 불균형을 다스립니다.',
      features: ['3D 체형/보행 분석', '1:1 전담 도수치료실', '슬링 및 운동재활'],
      badge: '1:1 전담제',
      icon: Activity
    },
    {
      id: 'internal',
      title: '건강검진 & 내과 센터',
      subtitle: '국민건강보험 공단검진 및 정밀 내시경',
      desc: '위·대장 소화기 내시경 및 당뇨, 고혈압, 만성질환 케어를 꼼꼼하게 진행합니다.',
      features: ['당일 수면 내시경', '5대암 정밀 검진', '만성질환 맞춤 처방'],
      badge: '공단 지정',
      icon: ShieldCheck
    },
    {
      id: 'pain',
      title: '통증의학과 & 수액 클리닉',
      subtitle: '만성 피로 회복 및 신경 블록 치료',
      desc: '급성 통증 및 수면 부족, 만성 피로를 회복하는 1:1 맞춤 영양 수액실을 갖추고 있습니다.',
      features: ['1인 프라이빗 수액실', '마늘/메가비타민 수액', '대상포진 신경치료'],
      badge: '프라이빗 룸',
      icon: Award
    },
  ];

  const doctors = [
    {
      name: '김진우 대표원장',
      title: '정형외과 전문의 / 의학박사',
      dept: '척추·관절 센터 책임원장',
      careers: [
        '서울대학교 의과대학 졸업',
        '서울대학교병원 정형외과 전공의 및 전임의',
        '대한정형외과학회 정회원',
        '대한척추외과학회 정회원',
        '前 연세바른병원 척추센터 원장'
      ],
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80',
      days: '월 / 화 / 수 / 금 / 토'
    },
    {
      name: '박서연 원장',
      title: '재활의학과 전문의',
      dept: '비수술 도수재활 센터장',
      careers: [
        '연세대학교 의과대학 졸업',
        '세브란스병원 재활의학과 전공의',
        '대한재활의학회 정회원',
        '대한도수치료학회 인증의',
        '前 강남세브란스 스포츠재활센터 교수'
      ],
      image: 'https://images.unsplash.com/photo-1594824813566-88855ce783d1?auto=format&fit=crop&w=800&q=80',
      days: '월 / 수 / 목 / 금 / 토'
    }
  ];

  const handleSubmitBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingData.name || !bookingData.phone) {
      alert('성함과 연락처를 입력해 주세요.');
      return;
    }
    setBookingSuccess(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      
      {/* Top Floating Control Banner */}
      <SampleHeaderBanner sampleTitle="병원·클리닉 (신뢰 중심)" />

      {/* Top Clinical Utility Info Bar */}
      <div className="bg-sky-900 text-sky-100 py-2.5 px-4 text-xs font-medium border-b border-sky-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Phone className="w-3.5 h-3.5 text-sky-300" />
              <span>대표 진료 예약 문의: <strong className="text-white font-mono">02-888-7575</strong></span>
            </span>
            <span className="hidden md:inline text-sky-400">|</span>
            <span className="hidden md:flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-sky-300" />
              <span>평일 09:00~19:00 (월/목 야간진료 ~20:30)</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="px-2 py-0.5 rounded bg-sky-800 text-sky-200 text-[11px] font-bold">
              보건복지부 인증 의료기관
            </span>
            <span className="text-sky-300">토요일 점심시간 없이 14:00까지 진료</span>
          </div>
        </div>
      </div>

      {/* Hospital Navbar */}
      <header className="bg-white border-b border-slate-200 sticky top-12 z-30 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-600 text-white flex items-center justify-center font-bold text-xl shadow-md">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight font-sans">
                  연세바른 <span className="text-sky-600 font-extrabold">마디의원</span>
                </span>
                <span className="text-xs bg-sky-100 text-sky-800 px-2 py-0.5 rounded-full font-bold">
                  재활의학과·정형외과
                </span>
              </div>
              <p className="text-xs text-slate-500 hidden sm:block">
                척추·관절 비수술 치료 & 정밀 도수재활 센터
              </p>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-1">
            {[
              { id: 'depts', label: '진료과목 안내' },
              { id: 'doctors', label: '의료진 소개' },
              { id: 'equip', label: '첨단 장비' },
              { id: 'booking', label: '온라인 진료예약' },
              { id: 'location', label: '오시는 길' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-sm font-bold transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-sky-600 text-white shadow-xs'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>

          <button
            onClick={() => setActiveTab('booking')}
            className="px-5 py-2.5 rounded-xl font-extrabold text-sm text-white bg-sky-600 hover:bg-sky-700 shadow-md transition-all cursor-pointer flex items-center gap-1.5"
          >
            <Calendar className="w-4 h-4" />
            <span>온라인 빠른 예약</span>
          </button>

        </div>
      </header>

      {/* Hospital Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 text-white py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-sky-500/20 text-sky-300 border border-sky-400/30">
              <ShieldCheck className="w-4 h-4 text-sky-400" />
              <span>보건복지부 인증 전문의 1:1 직접 진료</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              정밀한 원인 진단과<br />
              <span className="text-sky-400">비수술 맞춤 치료</span>로 바른 척추를 찾아드립니다
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal max-w-2xl">
              불필요한 수술 권유 없이, 대학병원급 첨단 MRI 및 C-arm 영상 장비를 활용해 정확한 원인을 찾아 치료합니다.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {[
                { label: '누적 환자수', val: '45,000+' },
                { label: '비수술 주사치료', val: '98.4%' },
                { label: '도수재활 치료실', val: '12개 룸' },
                { label: '무료 주차', val: '2시간 지원' },
              ].map((m, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-xs p-3.5 rounded-2xl border border-white/10 text-center">
                  <div className="text-sky-300 font-extrabold text-xl">{m.val}</div>
                  <div className="text-slate-300 text-xs mt-0.5">{m.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              <button
                onClick={() => setActiveTab('booking')}
                className="px-6 py-3.5 rounded-xl font-extrabold text-sm bg-sky-500 hover:bg-sky-400 text-slate-950 transition-all shadow-lg cursor-pointer flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>실시간 진료 예약 신청</span>
              </button>
              <a
                href="tel:02-888-7575"
                className="px-5 py-3.5 rounded-xl font-bold text-sm bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all cursor-pointer flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-sky-300" />
                <span>전화 상담: 02-888-7575</span>
              </a>
            </div>
          </div>

          {/* Hero Right Doctor Image Frame */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border border-sky-400/30 shadow-2xl bg-slate-900 aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80"
                alt="연세바른마디의원 진료 환경"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md p-4 rounded-2xl border border-white/10 text-left">
                <div className="text-sky-300 font-bold text-xs">쾌적하고 위생적인 1:1 도수재활실</div>
                <div className="text-white text-sm font-semibold mt-0.5">최첨단 3D 체형분석기 & C-arm 영상유도 주사치료기 완비</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Main Content Tabs */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-12">
        
        {/* Tab Buttons bar for Mobile */}
        <div className="flex lg:hidden overflow-x-auto gap-2 pb-2">
          {[
            { id: 'depts', label: '진료과목' },
            { id: 'doctors', label: '의료진 약력' },
            { id: 'equip', label: '첨단 장비' },
            { id: 'booking', label: '온라인 예약' },
            { id: 'location', label: '오시는 길' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold shrink-0 ${
                activeTab === tab.id ? 'bg-sky-600 text-white' : 'bg-white text-slate-700 border border-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab 1: Departments */}
        {activeTab === 'depts' && (
          <div className="space-y-8">
            <div className="space-y-2">
              <span className="text-xs font-bold text-sky-600 uppercase tracking-wider">SPECIALIZED MEDICAL CENTERS</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">맞춤형 전문 진료 과목</h2>
              <p className="text-slate-600 text-sm">증상에 따른 맞춤 진단과 비수술 중심의 치료 프로세스를 제공합니다.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {departments.map((dept) => {
                const IconComponent = dept.icon;
                return (
                  <div key={dept.id} className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-sky-100 text-sky-800">
                        {dept.badge}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-slate-900">{dept.title}</h3>
                      <p className="text-xs font-bold text-sky-600 mt-0.5">{dept.subtitle}</p>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">{dept.desc}</p>

                    <div className="pt-3 border-t border-slate-100 space-y-1.5">
                      <span className="text-[11px] font-bold text-slate-700 block">주요 적용 시술:</span>
                      <div className="flex flex-wrap gap-1.5">
                        {dept.features.map((f, idx) => (
                          <span key={idx} className="text-[11px] bg-slate-100 text-slate-700 px-2.5 py-1 rounded-lg border border-slate-200">
                            ✓ {f}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Tab 2: Doctors */}
        {activeTab === 'doctors' && (
          <div className="space-y-8">
            <div className="space-y-2">
              <span className="text-xs font-bold text-sky-600 uppercase tracking-wider">MEDICAL TEAM</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">전문의 의료진 약력</h2>
              <p className="text-slate-600 text-sm">풍부한 수술 및 비수술 풍부한 임상 경험을 보유한 전문의진이 정성껏 진료합니다.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {doctors.map((doc, idx) => (
                <div key={idx} className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm flex flex-col sm:flex-row">
                  <div className="sm:w-2/5 aspect-[3/4] bg-slate-100 relative">
                    <img src={doc.image} alt={doc.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="sm:w-3/5 p-6 space-y-4 flex flex-col justify-between">
                    <div className="space-y-1">
                      <span className="text-xs font-bold text-sky-600">{doc.dept}</span>
                      <h3 className="text-2xl font-bold text-slate-900">{doc.name}</h3>
                      <p className="text-xs font-medium text-slate-500">{doc.title}</p>
                    </div>

                    <div className="space-y-1.5">
                      <span className="text-xs font-bold text-slate-800 block">주요 약력 및 학회:</span>
                      <ul className="text-xs text-slate-600 space-y-1">
                        {doc.careers.map((c, cIdx) => (
                          <li key={cIdx} className="flex items-start gap-1.5">
                            <span className="text-sky-500 font-bold">•</span>
                            <span>{c}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-3 border-t border-slate-100 text-xs text-slate-500 flex items-center justify-between">
                      <span>진료요일: <strong className="text-slate-800">{doc.days}</strong></span>
                      <button 
                        onClick={() => {
                          setBookingData(prev => ({ ...prev, doctor: doc.name }));
                          setActiveTab('booking');
                        }}
                        className="text-sky-600 font-bold hover:underline"
                      >
                        지정 예약 &gt;
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Equipment */}
        {activeTab === 'equip' && (
          <div className="space-y-8">
            <div className="space-y-2">
              <span className="text-xs font-bold text-sky-600 uppercase tracking-wider">DIAGNOSTIC EQUIPMENT</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">대학병원급 정밀 진단 장비</h2>
              <p className="text-slate-600 text-sm">정확한 원인을 파악하여 안전하고 오차 없는 치료를 시행합니다.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: '독일 Siemens 1.5T MRI', desc: '고해상도 신경 및 관절 연골 정밀 영상 촬영', tag: '정밀 진단' },
                { title: '실시간 C-arm C형간 X-선', desc: '주사 바늘 위치를 1mm 오차 없이 조준하는 미세 영상 디스플레이', tag: '주사 치료' },
                { title: '3D 체형 및 보행 분석 시스템', desc: '골반 불균형, 척추 측만증 및 거북목 체형 데이터 분석', tag: '도수 재활' },
              ].map((eq, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200 space-y-3">
                  <span className="px-2.5 py-1 rounded bg-sky-100 text-sky-800 text-[11px] font-bold">
                    {eq.tag}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900">{eq.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{eq.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 4: Booking */}
        {activeTab === 'booking' && (
          <div className="max-w-2xl mx-auto bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md space-y-6">
            <div className="text-center space-y-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-sky-100 text-sky-800">ONLINE RESERVATION</span>
              <h2 className="text-2xl font-extrabold text-slate-900">실시간 온라인 진료 예약 신청</h2>
              <p className="text-xs text-slate-600">원하시는 날짜와 진료과목을 지정해 주시면 담당 간호사가 확정 전화를 드립니다.</p>
            </div>

            {bookingSuccess ? (
              <div className="p-6 bg-sky-50 rounded-2xl border border-sky-200 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-sky-600 mx-auto" />
                <h3 className="text-xl font-bold text-slate-900">진료 예약 신청이 완료되었습니다!</h3>
                <p className="text-xs text-slate-600">
                  {bookingData.name}님 ({bookingData.phone})<br />
                  신청일시: <strong>{bookingData.date} {bookingData.time}</strong> ({bookingData.dept})<br />
                  병원에서 확인 후 순차적으로 안내 전화를 드리겠습니다.
                </p>
                <button
                  onClick={() => setBookingSuccess(false)}
                  className="px-5 py-2 rounded-xl bg-sky-600 text-white font-bold text-xs"
                >
                  새로 예약하기
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmitBooking} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">환자 성함 *</label>
                    <input
                      type="text"
                      required
                      placeholder="홍길동"
                      value={bookingData.name}
                      onChange={e => setBookingData({ ...bookingData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-sky-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">연락처 *</label>
                    <input
                      type="tel"
                      required
                      placeholder="010-1234-5678"
                      value={bookingData.phone}
                      onChange={e => setBookingData({ ...bookingData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-sky-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">진료 과목 선택</label>
                    <select
                      value={bookingData.dept}
                      onChange={e => setBookingData({ ...bookingData, dept: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-sky-500"
                    >
                      <option value="척추·관절 센터">척추·관절 센터</option>
                      <option value="비수술 도수·재활센터">비수술 도수·재활센터</option>
                      <option value="건강검진 & 내과">건강검진 & 내과</option>
                      <option value="통증의학과 & 수액">통증의학과 & 수액</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">희망 의료진</label>
                    <select
                      value={bookingData.doctor}
                      onChange={e => setBookingData({ ...bookingData, doctor: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-sky-500"
                    >
                      <option value="김진우 대표원장 (정형외과 전문의)">김진우 대표원장 (정형외과 전문의)</option>
                      <option value="박서연 원장 (재활의학과 전문의)">박서연 원장 (재활의학과 전문의)</option>
                      <option value="지정 안함 (빠른 진료)">지정 안함 (빠른 진료)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">희망 진료 날짜</label>
                    <input
                      type="date"
                      value={bookingData.date}
                      onChange={e => setBookingData({ ...bookingData, date: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-sky-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">희망 방문 시간</label>
                    <select
                      value={bookingData.time}
                      onChange={e => setBookingData({ ...bookingData, time: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-sky-500"
                    >
                      <option value="10:00">오전 10:00</option>
                      <option value="11:30">오전 11:30</option>
                      <option value="14:00">오후 02:00</option>
                      <option value="16:00">오후 04:00</option>
                      <option value="18:00 (야간)">오후 06:00 (월/목 야간)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">불편하신 부위 및 증상 요약</label>
                  <textarea
                    rows={2}
                    placeholder="예: 허리 통증이 2주 전부터 심하고 오른쪽 다리가 져립니다."
                    value={bookingData.symptom}
                    onChange={e => setBookingData({ ...bookingData, symptom: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-sky-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl font-extrabold text-sm text-white bg-sky-600 hover:bg-sky-700 shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>진료 예약 신청 완료하기</span>
                </button>
              </form>
            )}
          </div>
        )}

        {/* Tab 5: Location */}
        {activeTab === 'location' && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold text-sky-600 uppercase tracking-wider">LOCATION & HOURS</span>
              <h2 className="text-2xl font-extrabold text-slate-900">오시는 길 및 주차 안내</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4 text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block">주소</strong>
                    <span>서울특별시 서초구 강남대로 381 두산베어스빌딩 3층 (강남역 5번 출구 도보 1분)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block">진료 시간</strong>
                    <span>평일: 09:00 ~ 19:00 (월/목 야간진료 ~20:30)</span><br />
                    <span>토요일: 09:00 ~ 14:00 (점심시간 없음)</span><br />
                    <span className="text-xs text-slate-500">점심시간: 13:00 ~ 14:00 (일요일/공휴일 휴진)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block">주차 안내</strong>
                    <span>건물 지하 2층~5층 자주식 주차장 (진료시 2시간 무료 주차권 제공)</span>
                  </div>
                </div>
              </div>

              {/* Map Placeholder Card */}
              <div className="bg-slate-100 rounded-2xl h-64 border border-slate-200 flex flex-col items-center justify-center p-6 text-center space-y-2">
                <MapPin className="w-10 h-10 text-sky-600" />
                <div className="font-bold text-slate-900 text-base">네이버 지도 / 카카오 맵 연동 위치</div>
                <div className="text-xs text-slate-500">지하철 2호선/신분당선 강남역 5번 출구 바로 앞</div>
                <button
                  onClick={() => alert('네이버 지도로 연결됩니다.')}
                  className="px-4 py-2 bg-sky-600 text-white font-bold text-xs rounded-xl shadow-2xs mt-2"
                >
                  네이버 길찾기 열기
                </button>
              </div>
            </div>
          </div>
        )}

      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-10 px-4 border-t border-slate-800 text-xs text-center space-y-2">
        <p className="text-slate-200 font-bold">연세바른마디의원 | 대표원장: 김진우 | 사업자등록번호: 214-90-88877</p>
        <p>서울특별시 서초구 강남대로 381 | 대표전화: 02-888-7575</p>
        <p className="text-slate-500">© 2026 연세바른마디의원. All rights reserved. 본 샘플은 민트클 웹스튜디오에서 제공하는 독립 시안입니다.</p>
      </footer>

    </div>
  );
};
