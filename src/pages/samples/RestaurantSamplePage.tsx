import React, { useState, useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { SampleHeaderBanner } from '../../components/SampleHeaderBanner';
import { 
  Utensils, 
  Clock, 
  MapPin, 
  Phone, 
  Calendar, 
  Users, 
  Sparkles, 
  CheckCircle2, 
  Flame, 
  Award,
  Send,
  Heart
} from 'lucide-react';

const SAMPLE_REVIEWS = [
  { text: '숯불 향이 진하고 룸이 조용해서 회식하기 좋았어요.', tag: '회식 방문' },
  { text: '가족 모임으로 방문했는데 아이 의자도 바로 챙겨주셨습니다.', tag: '가족 모임' },
  { text: '주차가 편해서 부담 없이 갈 수 있는 고깃집이에요.', tag: '주차 편의' },
];

export const RestaurantSamplePage: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroParallaxY = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const [activeCategory, setActiveCategory] = useState<'beef' | 'pork' | 'lunch' | 'drink'>('beef');
  const [reservationDone, setReservationDone] = useState(false);
  const [resData, setResData] = useState({
    name: '',
    phone: '',
    guests: '4명 (룸 희망)',
    date: '2026-08-08',
    time: '18:30',
    memo: '',
  });

  const menuItems = [
    {
      cat: 'beef',
      name: '한강 명품 참숯 생갈비 (200g)',
      price: '45,000원',
      desc: '1++ 최상급 한우 갈빗살만을 엄선하여 굵은 천일염과 함께 당일 한정 숯불 직화 구이',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
      badge: '시그니처 대표',
    },
    {
      cat: 'beef',
      name: '비법 양념 한우 특갈비 (220g)',
      price: '42,000원',
      desc: '30년 전통 꿀과 배즙 특제 간장 양념에 48시간 숙성시킨 육즙 가득 대표 갈비',
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80',
      badge: '인기',
    },
    {
      cat: 'pork',
      name: '지리산 흑돼지 참숯 삼겹살 (180g)',
      price: '21,000원',
      desc: '청정 지리산에서 자란 고소하고 쫄깃한 흑돼지와 멜젓의 감칠맛 조화',
      image: 'https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?auto=format&fit=crop&w=800&q=80',
      badge: '추천',
    },
    {
      cat: 'lunch',
      name: '자가제면 함흥 자작 물냉면 / 비빔냉면',
      price: '12,000원',
      desc: '매일 아침 직접 반죽하여 뽑아내는 얇고 쫄깃한 고구마 전분 면발과 진한 육수',
      image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80',
      badge: '점심 인기',
    },
  ];

  const handleResSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!resData.name || !resData.phone) {
      alert('성함과 연락처를 입력해주세요.');
      return;
    }
    setReservationDone(true);
  };

  return (
    <div className="min-h-screen bg-amber-50/40 text-slate-900 font-sans">
      
      {/* Sample Control Top Banner */}
      <SampleHeaderBanner sampleTitle="소상공인·식당 (메뉴 & 위치·예약 중심)" />

      {/* Top Korean Traditional Red Header Bar */}
      <div className="bg-red-950 text-amber-200 py-2.5 px-4 text-xs border-b border-red-900">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>전화 예약 및 단체 문의: <strong className="text-white font-mono text-sm">02-544-9292</strong></span>
            </span>
            <span className="hidden md:inline text-red-800">|</span>
            <span className="hidden md:inline text-amber-100">발렛파킹 무료 주차 지원 (독립 룸 12개 완비)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-amber-500/20 text-amber-300 border border-amber-400/30 px-2 py-0.5 rounded text-[11px] font-bold">
              ★ 30년 전통 백년가게 선정
            </span>
          </div>
        </div>
      </div>

      {/* Restaurant Header Navigation */}
      <header className="bg-amber-900 text-amber-50 border-b border-amber-950 sticky top-12 z-30 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-red-700 to-amber-600 text-white flex items-center justify-center font-extrabold text-xl shadow-lg border border-amber-400/30">
              <Utensils className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl sm:text-2xl font-extrabold text-white tracking-tight font-sans">
                  한강 기와집 <span className="text-amber-400 font-extrabold">숯불갈비</span>
                </span>
              </div>
              <p className="text-xs text-amber-200 hidden sm:block">
                30년 가업 참숯 직화 한우 갈비 & 자가제면 냉면 전문점
              </p>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-6 text-sm font-bold">
            <a href="#menu-section" className="hover:text-amber-300 transition-colors">시그니처 메뉴판</a>
            <a href="#room-section" className="hover:text-amber-300 transition-colors">단체 룸 & 시설</a>
            <a href="#location-section" className="hover:text-amber-300 transition-colors">위치 & 발렛 주차</a>
            <a href="#reservation-section" className="hover:text-amber-300 transition-colors">온라인 예약</a>
          </nav>

          <a
            href="tel:02-544-9292"
            className="px-5 py-2.5 rounded-xl font-extrabold text-xs sm:text-sm text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-md transition-all cursor-pointer flex items-center gap-1.5"
          >
            <Phone className="w-4 h-4 text-slate-950" />
            <span>빠른 전화 예약</span>
          </a>

        </div>
      </header>

      {/* Main Hero Section — soft bounded parallax on the food photography */}
      <section ref={heroRef} className="relative bg-slate-950 text-white py-16 lg:py-24 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center opacity-40 scale-110"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1600&q=80')`,
            y: prefersReducedMotion ? 0 : heroParallaxY,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />

        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6"
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold bg-amber-500/20 text-amber-300 border border-amber-400/40">
            <Flame className="w-4 h-4 text-amber-400" />
            <span>국산 최상급 참숯과 1++ 한우 직화 구이</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            깊은 손맛과 숯향 가득한<br />
            <span className="text-amber-400">한강 기와집 명품 갈비</span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto font-normal">
            가족 모임, 비즈니스 접대, 연회용 프라이빗 룸 12개 보유.<br />
            정성 어린 밑반찬과 직영 농장 유기농 채소로 모십니다.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <motion.a
              href="#reservation-section"
              whileTap={{ scale: 0.97 }}
              className="px-8 py-4 rounded-xl font-extrabold text-sm sm:text-base text-slate-950 bg-amber-400 hover:bg-amber-300 shadow-xl transition-all flex items-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              <span>실시간 룸 & 테이블 예약</span>
            </motion.a>
            <a
              href="#menu-section"
              className="px-6 py-4 rounded-xl font-bold text-sm sm:text-base text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all flex items-center gap-2"
            >
              <Utensils className="w-5 h-5 text-amber-300" />
              <span>대표 메뉴판 확인</span>
            </a>
          </div>
        </motion.div>
      </section>

      {/* Menu Section */}
      <section id="menu-section" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-10">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xs font-bold text-red-700 uppercase tracking-wider">SIGNATURE MENU</span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">대표 시그니처 메뉴판</h2>
          <p className="text-slate-600 text-sm">최상급 육류와 엄선된 재료만을 직영 농장에서 당일 공수합니다.</p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center gap-2">
          {[
            { id: 'beef', label: '한우 생/양념갈비' },
            { id: 'pork', label: '지리산 흑돼지' },
            { id: 'lunch', label: '점심 정식 & 냉면' },
          ].map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveCategory(c.id as any)}
              className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all cursor-pointer ${
                activeCategory === c.id
                  ? 'bg-red-800 text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Menu Cards — 2-column on mobile, hover reveals detail over the image */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {menuItems.filter(m => activeCategory === 'beef' ? (m.cat === 'beef') : (m.cat === activeCategory)).map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
              initial={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1], delay: (idx % 3) * 0.08 }}
            >
              <div className="relative aspect-square sm:aspect-[4/3] bg-slate-900 overflow-hidden">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 to-transparent p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-[10px] sm:text-xs text-slate-200 leading-relaxed line-clamp-2">{item.desc}</p>
                </div>
                <span className="absolute top-2.5 left-2.5 text-[10px] font-bold px-2 py-0.5 rounded-full bg-red-100 text-red-800">
                  {item.badge}
                </span>
              </div>
              <div className="p-3 sm:p-5 space-y-1.5">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-sm sm:text-lg font-bold text-slate-900 truncate">{item.name}</h3>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm sm:text-lg font-extrabold text-red-700">{item.price}</span>
                  <a
                    href="#reservation-section"
                    className="text-[10px] sm:text-xs font-bold text-red-800 hover:underline shrink-0"
                  >
                    지정예약 &gt;
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Room & Facilities Section */}
      <section id="room-section" className="py-16 bg-red-950 text-white text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-bold text-amber-400 uppercase">PRIVATE ROOMS</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">프라이빗 단체 룸 완비 (4인 ~ 32인)</h2>
            <p className="text-amber-100 text-sm">격식 있는 비즈니스 접대부터 소중한 가족 모임까지 아늑하게 모십니다.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: '수련 룸 (4인~6인)', desc: '가족 외식 및 조용한 맞춤 식사 공간', tag: '가족 모임' },
              { title: '국화 룸 (8인~12인)', desc: '소규모 회식 및 임원 비즈니스 모임', tag: '비즈니스 룸' },
              { title: '대청마루 대형 룸 (16인~32인)', desc: '동창회, 대형 기업 연회 및 잔치 전용', tag: '대형 연회' },
            ].map((room, idx) => (
              <div key={idx} className="bg-white/10 p-6 rounded-2xl border border-white/10 space-y-3">
                <span className="px-3 py-1 bg-amber-400 text-slate-950 font-extrabold text-xs rounded-full inline-block">
                  {room.tag}
                </span>
                <h3 className="text-xl font-bold text-white">{room.title}</h3>
                <p className="text-xs text-slate-300">{room.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Review Mood — illustrative example cards, explicitly labeled (not real reviews) */}
      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="flex items-center justify-between gap-3 mb-8">
          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">방문 후기 분위기 (예시)</h3>
          <span className="text-[10px] font-bold text-slate-400 border border-slate-200 px-2 py-1 rounded shrink-0">실제 후기 아님 · 연출 예시</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {SAMPLE_REVIEWS.map((r, idx) => (
            <motion.div
              key={idx}
              className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2"
              initial={prefersReducedMotion ? undefined : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1], delay: idx * 0.1 }}
            >
              <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full">{r.tag}</span>
              <p className="text-sm text-slate-700 leading-relaxed">"{r.text}"</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Reservation Form */}
      <section id="reservation-section" className="py-16 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl space-y-6">
          <div className="text-center space-y-2">
            <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-red-100 text-red-800">TABLE & ROOM RESERVATION</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">온라인 테이블 & 룸 간편 예약</h2>
            <p className="text-xs text-slate-600">신청 후 10분 이내 담당 매니저가 확인 전화를 드립니다.</p>
          </div>

          {reservationDone ? (
            <div className="p-8 bg-amber-50 rounded-2xl border border-amber-300 text-center space-y-4">
              <CheckCircle2 className="w-14 h-14 text-amber-600 mx-auto" />
              <h3 className="text-2xl font-extrabold text-slate-900">예약 신청이 성공적으로 접수되었습니다!</h3>
              <p className="text-sm text-slate-700">
                예약자: <strong>{resData.name}님</strong> ({resData.phone})<br />
                방문예정일: <strong>{resData.date} {resData.time}</strong> ({resData.guests})
              </p>
              <button
                onClick={() => setReservationDone(false)}
                className="px-6 py-2.5 rounded-xl bg-red-800 text-white font-bold text-sm"
              >
                추가 예약하기
              </button>
            </div>
          ) : (
            <form onSubmit={handleResSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">예약자 성함 *</label>
                  <input
                    type="text"
                    required
                    placeholder="홍길동"
                    value={resData.name}
                    onChange={e => setResData({ ...resData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-red-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">연락처 *</label>
                  <input
                    type="tel"
                    required
                    placeholder="010-1234-5678"
                    value={resData.phone}
                    onChange={e => setResData({ ...resData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-red-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">방문 인원</label>
                  <select
                    value={resData.guests}
                    onChange={e => setResData({ ...resData, guests: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-red-600"
                  >
                    <option value="2명 (홀 테이블)">2명 (홀 테이블)</option>
                    <option value="4명 (룸 희망)">4명 (독립 룸 희망)</option>
                    <option value="6명~8명 (단체 룸)">6명~8명 (단체 룸)</option>
                    <option value="10명 이상 (연회)">10명 이상 (연회 룸)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">방문 날짜</label>
                  <input
                    type="date"
                    value={resData.date}
                    onChange={e => setResData({ ...resData, date: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-red-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">방문 시간</label>
                  <select
                    value={resData.time}
                    onChange={e => setResData({ ...resData, time: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-red-600"
                  >
                    <option value="12:00">점심 12:00</option>
                    <option value="13:00">점심 13:00</option>
                    <option value="18:00">저녁 18:00</option>
                    <option value="19:00">저녁 19:00</option>
                    <option value="20:00">저녁 20:00</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">요청 사항 (예: 아기의자 필요, 주류 미리 준비 등)</label>
                <textarea
                  rows={2}
                  placeholder="요청 사항을 적어주세요."
                  value={resData.memo}
                  onChange={e => setResData({ ...resData, memo: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-red-600"
                />
              </div>

              <motion.button
                type="submit"
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 rounded-xl font-extrabold text-base text-white bg-red-800 hover:bg-red-700 shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                <span>예약 신청 완료하기</span>
              </motion.button>
            </form>
          )}
        </div>
      </section>

      {/* Location CTA */}
      <section id="location-section" className="py-12 bg-white border-t border-slate-200 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-slate-900">위치 및 발렛 파킹 안내</h3>
            <p className="text-xs text-slate-600">서울특별시 서초구 반포대로 144 | 매일 11:30~22:00 (명절 당일만 휴무)</p>
          </div>
          <div className="flex flex-wrap gap-2.5">
            <a href="tel:02-544-9292" className="px-4 py-2.5 rounded-lg text-xs font-bold bg-slate-900 text-white hover:bg-slate-800 transition-colors flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5" /> 전화 문의
            </a>
            <a href="#reservation-section" className="px-4 py-2.5 rounded-lg text-xs font-bold bg-[#FEE500] text-[#3C1E1E] hover:opacity-90 transition-opacity flex items-center gap-1.5">
              카카오톡 문의
            </a>
            <a href="#" onClick={(e) => { e.preventDefault(); alert('네이버 지도로 연결됩니다.'); }} className="px-4 py-2.5 rounded-lg text-xs font-bold bg-[#03C75A] text-white hover:opacity-90 transition-opacity flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" /> 네이버 지도
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 text-center text-xs">
        <p>© 2026 한강 기와집 숯불갈비 | 본 시안은 민트클 웹스튜디오에서 구축한 독립 포트폴리오 샘플입니다.</p>
      </footer>

    </div>
  );
};
