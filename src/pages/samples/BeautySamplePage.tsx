import React, { useState } from 'react';
import { SampleHeaderBanner } from '../../components/SampleHeaderBanner';
import { 
  Sparkles, 
  Scissors, 
  Calendar, 
  Clock, 
  Heart, 
  Star, 
  Check, 
  Phone, 
  Award,
  ChevronRight
} from 'lucide-react';

export const BeautySamplePage: React.FC = () => {
  const [selectedStylist, setSelectedStylist] = useState<string>('all');
  const [bookingSubmitted, setBookingSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    stylist: '김소연 대표원장',
    service: '퍼스널 레이어드 컷 & 케어',
    date: '2026-08-06',
    time: '11:00',
  });

  const stylists = [
    {
      id: 'soyeon',
      name: '김소연 대표원장',
      role: 'Personal Cut & Perm Director',
      desc: '얼굴형과 두상 라인에 최적화된 퍼스널 레이어드 컷 및 아윤채 프리미엄 수분 크리닉 전담',
      img: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=800&q=80',
      badge: '대표원장 지정',
      insta: '@soyeon_raon_hair',
    },
    {
      id: 'junsoo',
      name: '박준수 수석디자이너',
      role: 'Balayage & Color Specialist',
      desc: '손상 걱정 없는 프리미엄 탈색 및 피부 톤을 화사하게 밝혀주는 맞춤형 톤다운 퍼스널 컬러',
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
      badge: '컬러 전문',
      insta: '@junsoo_color_art',
    },
    {
      id: 'minho',
      name: '최민호 팀장',
      role: 'Men\'s Trend & Down Perm',
      desc: '남성 트렌드 시스루 댄디 컷, 가일 컷 및 두피 자극 없는 안심 아이롱 다운펌 매니아층 보유',
      img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
      badge: '맨즈 트렌드',
      insta: '@minho_mens_hair',
    },
  ];

  const serviceCategories = [
    {
      title: 'CUT & STYLING',
      items: [
        { name: '디자이너 퍼스널 컷', price: '35,000원', time: '45분' },
        { name: '대표원장 1:1 두상맞춤 컷', price: '45,000원', time: '60분' },
        { name: '앞머리 포인트 컷 / 뿌리 교정', price: '12,000원', time: '15분' },
      ],
    },
    {
      title: 'PERM & CLINIC',
      items: [
        { name: '아윤채 리페어 열펌 + 클리닉', price: '160,000원', time: '120분' },
        { name: '엘레강스 빌드펌 / 허쉬 펌', price: '180,000원', time: '150분' },
        { name: '뿌리 아이롱 펌 + 안심 다운펌', price: '90,000원', time: '60분' },
      ],
    },
    {
      title: 'COLOR & SPA',
      items: [
        { name: '퍼스널 톤다운 / 톤업 컬러', price: '120,000원', time: '90분' },
        { name: '프리미엄 무손상 탈색 (1회)', price: '140,000원', time: '90분' },
        { name: '두피 스파 & 헤어 디톡스 케어', price: '80,000원', time: '50분' },
      ],
    },
  ];

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#FFFDFB] text-[#4A2E35] font-sans selection:bg-[#FFE4E6] selection:text-[#9F1239]">
      
      {/* Top Banner */}
      <SampleHeaderBanner
        sampleTitle="뷰티·헤어숍 세련된 예약 사이트 샘플 (라온 헤어 아틀리에)"
        colorSchemeClass="bg-[#881337] text-[#FFE4E6] border-[#9F1239]"
      />

      {/* Main Header Nav */}
      <header className="px-6 py-4 border-b border-[#FFE4E6] bg-white/95 backdrop-blur-md sticky top-[41px] z-40">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#E11D48] to-[#FB7185] text-white flex items-center justify-center font-bold text-base shadow-xs">
              라온
            </div>
            <div>
              <span className="text-[10px] tracking-wider uppercase font-bold text-[#E11D48] block">
                홍대 연남동 헤어 살롱
              </span>
              <h1 className="text-base font-bold tracking-tight text-[#4A2E35]">
                라온 헤어 아틀리에 <span className="text-xs font-normal text-slate-400">(샘플)</span>
              </h1>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-7 text-xs font-bold text-[#881337]">
            <a href="#about" className="hover:text-[#E11D48] transition-colors">살롱 소개</a>
            <a href="#stylists" className="hover:text-[#E11D48] transition-colors">디자이너 프로필</a>
            <a href="#menu" className="hover:text-[#E11D48] transition-colors">정찰제 요금표</a>
            <a href="#booking" className="hover:text-[#E11D48] transition-colors">실시간 간편 예약</a>
          </nav>

          <a
            href="#booking"
            className="px-4 py-2 rounded-full text-xs font-bold bg-[#E11D48] hover:bg-[#BE123C] text-white transition-all shadow-xs"
          >
            첫방문 20% 할인예약
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 px-6 bg-gradient-to-b from-[#FFE4E6]/40 via-[#FFFDFB] to-[#FFFDFB] text-left">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#FFE4E6] text-[#9F1239] border border-[#FECDD3]">
              <Sparkles className="w-3.5 h-3.5 text-[#E11D48]" />
              <span>네이버 / 카카오 1:1 간편 예약 지원</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold text-[#4A2E35] leading-[1.2] tracking-tight">
              나다운 분위기를 완성하는<br />
              <span className="text-[#E11D48]">1:1 퍼스널 헤어 디렉팅</span>
            </h2>

            <p className="text-xs sm:text-sm text-[#7A525B] leading-relaxed max-w-lg">
              라온 헤어 아틀리에는 1:1 퍼스널컬러 진단과 두상 골격 분석을 기반으로 고객 개개인의 매력을 정밀하게 살려드리는 프리미엄 헤어 살롱입니다.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#booking"
                className="px-6 py-3 rounded-full text-xs font-bold text-white bg-[#E11D48] hover:bg-[#BE123C] transition-all shadow-md flex items-center gap-1.5"
              >
                <span>첫방문 할인 예약하기</span>
                <ChevronRight className="w-4 h-4" />
              </a>
              <a
                href="#menu"
                className="px-6 py-3 rounded-full text-xs font-bold text-[#881337] bg-white border border-[#FECDD3] hover:bg-[#FFE4E6]/50 transition-all"
              >
                시술 정찰제 요금표
              </a>
            </div>

            <div className="pt-6 border-t border-[#FECDD3] grid grid-cols-3 gap-4 text-xs font-sans">
              <div>
                <span className="font-extrabold text-[#E11D48] text-base block">4.95 ★</span>
                <span className="text-[#7A525B]">네이버 실사용자 평점</span>
              </div>
              <div>
                <span className="font-extrabold text-[#E11D48] text-base block">100%</span>
                <span className="text-[#7A525B]">투명 정찰제 시술</span>
              </div>
              <div>
                <span className="font-extrabold text-[#E11D48] text-base block">아윤채 전용</span>
                <span className="text-[#7A525B]">프리미엄 두피 케어</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80"
                alt="뷰티 살롱 시술 포토"
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end p-6 text-white">
                <div className="text-xs">
                  <span className="font-bold text-[#FFE4E6] block">2026 S/S 트렌드</span>
                  <p className="text-slate-200">레이어드 컷 & 피치 톤다운 컬러</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Stylist Section */}
      <section id="stylists" className="py-20 px-6 max-w-6xl mx-auto text-left">
        <div className="text-center space-y-2 mb-12">
          <span className="text-xs font-bold text-[#E11D48] uppercase tracking-widest block">
            Hair Designers
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#4A2E35]">
            전담 헤어 디자이너 프로필
          </h3>
          <p className="text-xs text-[#7A525B]">
            각 분야 전문 디자이너가 고객님의 첫 스타일 상담부터 전 과정을 1:1 전담합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stylists.map((st) => (
            <div key={st.id} className="bg-white rounded-3xl p-6 border border-[#FFE4E6] shadow-2xs space-y-4 text-center">
              <div className="w-24 h-24 rounded-full overflow-hidden mx-auto border-2 border-[#E11D48]">
                <img src={st.img} alt={st.name} loading="lazy" className="w-full h-full object-cover" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-[#E11D48] bg-[#FFE4E6] px-2.5 py-0.5 rounded-full">
                  {st.badge}
                </span>
                <h4 className="text-base font-bold text-[#4A2E35] mt-1.5">{st.name}</h4>
                <span className="text-xs text-[#881337] font-semibold block">{st.role}</span>
              </div>
              <p className="text-xs text-[#7A525B] leading-relaxed">
                {st.desc}
              </p>
              <button
                onClick={() => {
                  setFormData({ ...formData, stylist: st.name });
                  const el = document.getElementById('booking');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full py-2.5 rounded-xl font-bold text-xs text-[#E11D48] bg-[#FFFDFB] border border-[#FECDD3] hover:bg-[#FFE4E6] transition-colors cursor-pointer"
              >
                {st.name} 지정 예약
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Menu & Pricing */}
      <section id="menu" className="py-20 px-6 bg-white border-y border-[#FFE4E6] text-left">
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold text-[#E11D48] uppercase tracking-widest block">
              Price List
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#4A2E35]">
              투명 정찰제 시술 요금표
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceCategories.map((cat, idx) => (
              <div key={idx} className="bg-[#FFFDFB] p-6 rounded-3xl border border-[#FFE4E6] space-y-4">
                <h4 className="font-bold text-xs text-[#E11D48] tracking-wider border-b border-[#FECDD3] pb-2 uppercase">
                  {cat.title}
                </h4>
                <div className="space-y-4">
                  {cat.items.map((item, i) => (
                    <div key={i} className="space-y-1">
                      <div className="flex justify-between font-bold text-xs text-[#4A2E35]">
                        <span>{item.name}</span>
                        <span className="text-[#E11D48]">{item.price}</span>
                      </div>
                      <span className="text-[10px] text-slate-400 block">소요시간: {item.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section id="booking" className="py-20 px-6 max-w-3xl mx-auto text-left">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#FFE4E6] shadow-xl space-y-6">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold text-[#E11D48] uppercase tracking-widest block">
              Online Booking
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#4A2E35]">
              실시간 1:1 방문 예약
            </h3>
            <p className="text-xs text-[#7A525B]">
              희망하시는 디자이너와 날짜를 선택하시면 확인 문자를 발송해 드립니다.
            </p>
          </div>

          {bookingSubmitted ? (
            <div className="p-8 bg-[#FFFDFB] rounded-2xl border border-[#FECDD3] text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#E11D48] text-white flex items-center justify-center mx-auto font-bold text-xl">
                ✓
              </div>
              <h4 className="font-bold text-lg text-[#4A2E35]">예약 신청이 접수되었습니다! (샘플)</h4>
              <p className="text-xs text-[#7A525B]">
                {formData.name}님, [{formData.stylist}] {formData.date} {formData.time} 예약 신청이 전달되었습니다.
              </p>
              <button
                onClick={() => setBookingSubmitted(false)}
                className="mt-2 px-4 py-2 rounded-xl text-xs font-bold bg-[#E11D48] text-white"
              >
                다른 예약하기
              </button>
            </div>
          ) : (
            <form onSubmit={handleBookingSubmit} className="space-y-4 text-xs font-sans">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-[#4A2E35] mb-1">성함</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="김민지"
                    className="w-full px-4 py-3 rounded-xl border border-[#FECDD3] bg-[#FFFDFB] focus:outline-none focus:ring-2 focus:ring-[#E11D48]"
                  />
                </div>
                <div>
                  <label className="block font-bold text-[#4A2E35] mb-1">휴대폰 번호</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="010-0000-0000"
                    className="w-full px-4 py-3 rounded-xl border border-[#FECDD3] bg-[#FFFDFB] focus:outline-none focus:ring-2 focus:ring-[#E11D48]"
                  />
                </div>
                <div>
                  <label className="block font-bold text-[#4A2E35] mb-1">담당 디자이너</label>
                  <select
                    value={formData.stylist}
                    onChange={(e) => setFormData({ ...formData, stylist: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#FECDD3] bg-[#FFFDFB] focus:outline-none focus:ring-2 focus:ring-[#E11D48]"
                  >
                    <option value="김소연 대표원장">김소연 대표원장</option>
                    <option value="박준수 수석디자이너">박준수 수석디자이너</option>
                    <option value="최민호 팀장">최민호 팀장 (맨즈 트렌드)</option>
                  </select>
                </div>
                <div>
                  <label className="block font-bold text-[#4A2E35] mb-1">희망 시술</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#FECDD3] bg-[#FFFDFB] focus:outline-none focus:ring-2 focus:ring-[#E11D48]"
                  >
                    <option value="디자이너 퍼스널 컷">디자이너 퍼스널 컷 (3.5만)</option>
                    <option value="아윤채 리페어 열펌">아윤채 리페어 열펌 (16만)</option>
                    <option value="퍼스널 톤다운 컬러">퍼스널 톤다운/톤업 컬러 (12만)</option>
                    <option value="두피 스파 디톡스">두피 스파 디톡스 (8만)</option>
                  </select>
                </div>
                <div>
                  <label className="block font-bold text-[#4A2E35] mb-1">방문 희망 날짜</label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#FECDD3] bg-[#FFFDFB] focus:outline-none focus:ring-2 focus:ring-[#E11D48]"
                  />
                </div>
                <div>
                  <label className="block font-bold text-[#4A2E35] mb-1">방문 희망 시간</label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#FECDD3] bg-[#FFFDFB] focus:outline-none focus:ring-2 focus:ring-[#E11D48]"
                  >
                    <option value="11:00">오전 11:00</option>
                    <option value="13:00">오후 01:00</option>
                    <option value="15:00">오후 03:00</option>
                    <option value="17:00">오후 05:00</option>
                    <option value="19:00">오후 07:00</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl font-bold text-sm text-white bg-[#E11D48] hover:bg-[#BE123C] transition-all shadow-md cursor-pointer"
              >
                1:1 맞춤 방문 예약 신청
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 pb-24 md:pb-8 bg-[#4A2E35] text-[#FFE4E6] text-xs text-center space-y-2">
        <p className="font-bold">라온 헤어 아틀리에 (RAON Hair) 대표 샘플 웹사이트</p>
        <p className="text-[#FECDD3]">본 페이지는 민트클 웹스튜디오에서 커스텀 제작 가능한 국내 뷰티·헤어 분야 웹사이트 시안입니다.</p>
        <p className="text-[11px] text-[#FDA4AF] pt-1">© 2026 Mintcle Web Studio Concept Work. All rights reserved.</p>
      </footer>

      {/* Mobile Fixed CTA Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-[#FFE4E6] p-3 shadow-2xl flex items-center gap-2">
        <a
          href="tel:02-333-7788"
          className="flex-1 py-3 rounded-xl bg-[#FFFDFB] border border-[#FECDD3] text-[#881337] font-bold text-xs text-center flex items-center justify-center gap-1.5 shadow-2xs"
        >
          <Phone className="w-4 h-4 text-[#E11D48]" />
          <span>전화 예약 문의</span>
        </a>
        <a
          href="#booking"
          className="flex-1 py-3 rounded-xl bg-[#E11D48] text-white font-bold text-xs text-center flex items-center justify-center gap-1.5 shadow-md"
        >
          <Calendar className="w-4 h-4" />
          <span>1:1 빠른 예약</span>
        </a>
      </div>

    </div>
  );
};
