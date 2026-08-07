import React, { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { SampleHeaderBanner } from '../../components/SampleHeaderBanner';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Calendar, 
  MapPin, 
  Phone,
  Maximize2
} from 'lucide-react';

export const InteriorSamplePage: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'apartment' | 'commercial' | 'office' | 'kitchen' | 'bathroom'>('all');
  const [consultSubmitted, setConsultSubmitted] = useState(false);
  const [pyung, setPyung] = useState(34);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    type: '아파트',
    location: '서울 마포구',
    budget: '5000만~8000만원',
    details: '',
  });

  const [beforeAfterState, setBeforeAfterState] = useState<{ [key: number]: boolean }>({});

  const toggleBeforeAfter = (id: number) => {
    setBeforeAfterState(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const projects = [
    {
      id: 1,
      category: 'apartment',
      spaceType: '주거 인테리어',
      title: '반포 자이 34평 모던 우드 리노베이션',
      description: '노후 아파트를 밝고 고급스러운 패밀리 하우스로 재구성',
      location: '서울 서초구 반포동',
      area: '34평 (112㎡)',
      style: '워밍 화이트 & 히든 도어 라인조명',
      img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      beforeImg: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
      tags: ['주거공간', '리모델링', '우드톤'],
    },
    {
      id: 2,
      category: 'commercial',
      spaceType: '상가 인테리어',
      title: '성수동 베이커리 카페 인테리어',
      description: '브랜드 분위기와 동선을 고려한 소형 상업공간 설계',
      location: '서울 성동구 성수동',
      area: '42평 (138㎡)',
      style: '노출 콘크리트 & 내추럴 목재 바',
      img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
      beforeImg: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80',
      tags: ['상업공간', '카페무드', '동선설계'],
    },
    {
      id: 3,
      category: 'office',
      spaceType: '사무공간',
      title: '판교 테크노밸리 IT 스튜디오 라운지',
      description: '직원 휴식과 미팅을 함께 고려한 복합 라운지 공간',
      location: '경기도 성남시 분당구',
      area: '65평 (214㎡)',
      style: '모듈러 스마트 오피스',
      img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
      beforeImg: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80',
      tags: ['오피스', '라운지', '모던'],
    },
    {
      id: 4,
      category: 'kitchen',
      spaceType: '주방 · 다이닝',
      title: '마포 프레스티지 자이 42평 아일랜드 키친',
      description: '수납, 조명, 동선을 함께 개선한 실용적인 주방 공간',
      location: '서울 마포구 염리동',
      area: '42평 (138㎡)',
      style: '미니멀 그레이 & 세라믹 아일랜드',
      img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1200&q=80',
      beforeImg: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
      tags: ['주방', '수납', '밝은톤'],
    },
    {
      id: 5,
      category: 'bathroom',
      spaceType: '욕실',
      title: '한남동 하이엔드 빌라 호텔형 욕실',
      description: '작은 공간에서도 고급감을 느낄 수 있는 욕실 리뉴얼',
      location: '서울 용산구 한남동',
      area: '3.5평 (11㎡)',
      style: '다크 포세린 타일 & 매입 조명',
      img: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1200&q=80',
      beforeImg: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80',
      tags: ['욕실', '타일', '호텔무드'],
    },
    {
      id: 6,
      category: 'commercial',
      spaceType: '상업시설',
      title: '홍대입구역 신축 상가 내부 마감',
      description: '입점 전 기본 마감부터 브랜드 적용까지 고려한 시공 사례',
      location: '서울 마포구 동교동',
      area: '28평 (92㎡)',
      style: '노출 천장 & 블랙 메탈 프레임',
      img: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&w=1200&q=80',
      beforeImg: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80',
      tags: ['상가', '마감공사', '실용설계'],
    },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  const handleConsultSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setConsultSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#141414] text-[#E5E5E5] font-sans selection:bg-[#D4B993] selection:text-[#141414]">
      
      {/* Top Banner */}
      <SampleHeaderBanner
        sampleTitle="하이엔드 인테리어·건축 디자인 샘플 (디자인 스튜디오 다올)"
        colorSchemeClass="bg-[#1C1C1C] text-[#D4B993] border-[#2A2A2A]"
      />

      {/* Main Header */}
      <header className="px-6 py-5 border-b border-[#2A2A2A] bg-[#141414]/90 backdrop-blur-md sticky top-[41px] z-40">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 border-2 border-[#D4B993] text-[#D4B993] flex items-center justify-center font-bold text-sm">
              다올
            </div>
            <div>
              <span className="text-[10px] tracking-wider font-bold text-[#D4B993] block">
                아파트 & 상공간 리모델링 전문
              </span>
              <h1 className="text-base font-bold tracking-tight text-white">
                디자인 스튜디오 다올 <span className="text-xs font-normal text-slate-500">(샘플)</span>
              </h1>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-xs tracking-wider font-semibold text-slate-300">
            <a href="#about" className="hover:text-[#D4B993] transition-colors">디자인 철학</a>
            <a href="#works" className="hover:text-[#D4B993] transition-colors">시공 포트폴리오</a>
            <a href="#process" className="hover:text-[#D4B993] transition-colors">5단계 직영공정</a>
            <a href="#estimate" className="hover:text-[#D4B993] transition-colors">평수별 실시간 견적</a>
          </nav>

          <a
            href="#estimate"
            className="px-4 py-2 text-xs font-bold text-[#141414] bg-[#D4B993] hover:bg-[#E5CB9F] transition-all"
          >
            1:1 시공 상담
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[75vh] flex items-center justify-center px-6 overflow-hidden bg-[#141414] text-left">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=80"
            alt="아파트 인테리어 거실 대표 이미지"
            loading="lazy"
            className="w-full h-full object-cover opacity-30 filter grayscale contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/60 to-[#141414]/80" />
        </div>

        <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
          <span className="inline-block border border-[#D4B993]/60 text-[#D4B993] px-3.5 py-1 text-xs font-bold tracking-wider">
            아파트 & 상업공간 맞춤 설계 및 직영 시공
          </span>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.2] tracking-tight">
            공간의 절제미와<br />
            삶의 오리지널리티를 담다
          </h2>

          <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto leading-relaxed">
            디자인 스튜디오 다올은 아파트 리모델링, 상가 인테리어의 정밀한 레이아웃 설계부터 수제 자재 피킹, 3D 가상 시뮬레이션 및 추가금 없는 정직한 직영 시공을 수행합니다.
          </p>

          <div className="pt-2 flex flex-wrap justify-center gap-3 text-xs">
            <a
              href="#works"
              className="px-7 py-3.5 bg-[#D4B993] text-[#141414] font-bold hover:bg-[#E5CB9F] transition-all"
            >
              시공 사례 포트폴리오
            </a>
            <a
              href="#estimate"
              className="px-7 py-3.5 border border-[#D4B993] text-[#D4B993] font-bold hover:bg-[#D4B993]/10 transition-all"
            >
              평수별 예상 견적 계산
            </a>
          </div>
        </div>
      </section>

      {/* Portfolio Works Grid */}
      <section id="works" className="py-20 px-6 max-w-7xl mx-auto text-left">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 border-b border-[#2A2A2A] pb-6">
          <div>
            <span className="text-xs text-[#D4B993] font-bold tracking-wider block mb-1">
              Portfolio
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              주요 시공 사례 포트폴리오
            </h3>
          </div>

          <div className="flex flex-wrap gap-2 text-xs">
            {[
              { id: 'all', label: '전체 보기' },
              { id: 'apartment', label: '아파트' },
              { id: 'commercial', label: '상가 / 카페' },
              { id: 'office', label: '사무실' },
              { id: 'kitchen', label: '주방 · 다이닝' },
              { id: 'bathroom', label: '욕실' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id as any)}
                className={`px-3.5 py-1.5 border transition-all cursor-pointer text-xs font-bold ${
                  selectedCategory === tab.id
                    ? 'border-[#D4B993] bg-[#D4B993] text-[#141414]'
                    : 'border-[#2A2A2A] text-slate-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((p, idx) => {
            const isBefore = !!beforeAfterState[p.id];
            return (
              <motion.div
                key={p.id}
                className="bg-[#1C1C1C] border border-[#2A2A2A] overflow-hidden group"
                initial={prefersReducedMotion ? undefined : { opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
                whileInView={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: (idx % 3) * 0.12 }}
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[#141414]">
                  <img
                    src={isBefore ? p.beforeImg : p.img}
                    alt={p.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#141414]/90 border border-[#D4B993]/40 text-[#D4B993] px-2.5 py-1 text-[10px] font-bold">
                    {p.area}
                  </div>

                  {/* Before / After Toggle Button */}
                  <div className="absolute bottom-3 right-3 flex items-center gap-1 bg-[#141414]/90 p-1 border border-[#2A2A2A] rounded">
                    <button
                      onClick={() => toggleBeforeAfter(p.id)}
                      className={`px-2.5 py-1 text-[10px] font-bold transition-colors cursor-pointer ${
                        !isBefore ? 'bg-[#D4B993] text-[#141414]' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      시공 후 (After)
                    </button>
                    <button
                      onClick={() => toggleBeforeAfter(p.id)}
                      className={`px-2.5 py-1 text-[10px] font-bold transition-colors cursor-pointer ${
                        isBefore ? 'bg-[#D4B993] text-[#141414]' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      시공 전 (Before)
                    </button>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-[11px] text-[#D4B993] font-bold uppercase tracking-wider block">
                      {p.spaceType}
                    </span>
                    <span className="text-[10px] text-slate-400 border border-slate-700 px-2 py-0.5">
                      {isBefore ? '⚠️ 철거 전 상태' : '✓ 완공 포트폴리오'}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-white group-hover:text-[#D4B993] transition-colors">
                    {p.title}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {p.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {p.tags.slice(0, 3).map((t, tagIdx) => (
                      <span key={tagIdx} className="text-[10px] bg-[#2A2A2A] text-slate-300 px-2 py-0.5 border border-slate-800">
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 px-6 bg-[#1A1A1A] border-y border-[#2A2A2A] text-left">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-2">
            <span className="text-xs text-[#D4B993] font-bold tracking-wider block">
              Workflow
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              투명하고 체계적인 5단계 직영 공정
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-xs">
            {[
              { step: '01', title: '현장 미팅 & 측정', desc: '고객 요구사항 및 예산, 라이프스타일 분석' },
              { step: '02', title: '3D 도면 & 자재', desc: '가상 시뮬레이션 및 포세린 타일/원목 샘플 피킹' },
              { step: '03', title: '투명 계약서 작성', desc: '세부 내역서 100% 공개 및 추가금 제로 보증' },
              { step: '04', title: '직영 시공 감리', desc: '일일 현장 사진 전송 및 소음 단속 준수' },
              { step: '05', title: '3년 무상 A/S', desc: '입주 후 하자 보수 사후 관리 전담팀 가동' },
            ].map((st, i) => (
              <div key={i} className="p-5 bg-[#141414] border border-[#2A2A2A] space-y-2">
                <span className="font-bold text-lg text-[#D4B993] block">{st.step}</span>
                <h5 className="font-bold text-white">{st.title}</h5>
                <p className="text-[11px] text-slate-400 leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Estimate Calculator & Consultation */}
      <section id="estimate" className="py-20 px-6 max-w-4xl mx-auto text-left">
        <div className="bg-[#1A1A1A] border border-[#2A2A2A] p-8 sm:p-12 shadow-2xl space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs text-[#D4B993] font-bold tracking-wider block">
              Cost Guide
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              평수별 예상 시공 견적 계산기
            </h3>
            <p className="text-xs text-slate-400">
              공급면적(평)을 설정하시면 개략적인 예산 가이드를 안내해 드립니다.
            </p>
          </div>

          {/* Pyung Slider */}
          <div className="p-6 bg-[#141414] border border-[#2A2A2A] space-y-4">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-slate-400">공간 공급 면적:</span>
              <span className="text-lg font-bold text-[#D4B993]">{pyung}평 ({Math.round(pyung * 3.3)}㎡)</span>
            </div>
            <input
              type="range"
              min="20"
              max="80"
              value={pyung}
              onChange={(e) => setPyung(Number(e.target.value))}
              className="w-full accent-[#D4B993] cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-mono">
              <span>24평 (소형 아파트)</span>
              <span>34평 (국민 평형)</span>
              <span>42평 (중대형)</span>
              <span>60평 이상 (대형)</span>
            </div>
            <div className="p-3.5 bg-[#1C1C1C] rounded text-xs text-slate-300 flex justify-between items-center border border-slate-800">
              <span>예상 시공 예산 가이드:</span>
              <strong className="text-[#D4B993] text-sm font-bold">약 {Math.round(pyung * 150)}만 ~ {Math.round(pyung * 220)}만원선</strong>
            </div>
          </div>

          {consultSubmitted ? (
            <div className="p-8 bg-[#141414] border border-[#D4B993]/50 text-center space-y-3">
              <div className="w-12 h-12 border border-[#D4B993] text-[#D4B993] flex items-center justify-center mx-auto font-bold text-xl">
                ✓
              </div>
              <h4 className="font-bold text-lg text-white">시공 상담 문의가 접수되었습니다! (샘플)</h4>
              <p className="text-xs text-slate-400">
                {formData.name}님 ({formData.type}, {pyung}평) 문의 내역을 확인하여 디자이너가 연락드리겠습니다.
              </p>
              <button
                onClick={() => setConsultSubmitted(false)}
                className="mt-2 px-4 py-2 text-xs font-bold bg-[#D4B993] text-[#141414]"
              >
                다른 문의 작성하기
              </button>
            </div>
          ) : (
            <form onSubmit={handleConsultSubmit} className="space-y-4 text-xs font-sans">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 mb-1 font-bold">성함</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="홍길동"
                    className="w-full px-4 py-3 bg-[#141414] border border-[#2A2A2A] text-white focus:outline-none focus:border-[#D4B993]"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 mb-1 font-bold">연락처</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="010-0000-0000"
                    className="w-full px-4 py-3 bg-[#141414] border border-[#2A2A2A] text-white focus:outline-none focus:border-[#D4B993]"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 mb-1 font-bold">공간 유형</label>
                  <select
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    className="w-full px-4 py-3 bg-[#141414] border border-[#2A2A2A] text-white focus:outline-none focus:border-[#D4B993]"
                  >
                    <option value="아파트">아파트 / 주거 공간</option>
                    <option value="상가/카페">상가 / 카페 / 디저트 숍</option>
                    <option value="오피스">사무실 / 스튜디오</option>
                    <option value="단독주택">단독주택 / 신축 리모델링</option>
                  </select>
                </div>
                <div>
                  <label className="block text-slate-300 mb-1 font-bold">희망 예산 범위</label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-4 py-3 bg-[#141414] border border-[#2A2A2A] text-white focus:outline-none focus:border-[#D4B993]"
                  >
                    <option value="3000만~5000만원">3,000만 ~ 5,000만원</option>
                    <option value="5000만~8000만원">5,000만 ~ 8,000만원</option>
                    <option value="8000만~1.2억원">8,000만 ~ 1.2억원</option>
                    <option value="1.5억원 이상">1.5억원 이상 (하이엔드)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-slate-300 mb-1 font-bold">희망 착공일 및 현장 위치</label>
                <textarea
                  rows={3}
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  placeholder="예: 마포구 염리동 아파트 34평 확장 예정, 9월 착공 희망"
                  className="w-full px-4 py-3 bg-[#141414] border border-[#2A2A2A] text-white focus:outline-none focus:border-[#D4B993]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 text-xs font-bold text-[#141414] bg-[#D4B993] hover:bg-[#E5CB9F] transition-all cursor-pointer"
              >
                1:1 시공 상담 및 견적 신청 제출
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-[#1A1A1A] border-t border-[#2A2A2A] text-[#888888] text-xs text-center space-y-2">
        <p className="font-bold text-slate-300">디자인 스튜디오 다올 (DAOL) 대표 샘플 웹사이트</p>
        <p>본 페이지는 민트클 웹스튜디오에서 커스텀 제작 가능한 국내 인테리어·건축 분야 웹사이트 시안입니다.</p>
        <p className="text-[11px] text-slate-600 pt-1">© 2026 Mintcle Web Studio Concept Work. All rights reserved.</p>
      </footer>

    </div>
  );
};
