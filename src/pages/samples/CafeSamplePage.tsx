import React, { useState } from 'react';
import { SampleHeaderBanner } from '../../components/SampleHeaderBanner';
import { 
  Coffee, 
  Clock, 
  MapPin, 
  Phone, 
  Calendar, 
  Users, 
  Check, 
  Sparkles, 
  ChevronRight,
  Heart,
  Utensils
} from 'lucide-react';

export const CafeSamplePage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'bread' | 'coffee' | 'dessert'>('all');
  const [reservationSubmitted, setReservationSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '2026-08-05',
    time: '14:00',
    guests: '2',
    request: '',
  });

  const menuItems = [
    {
      id: 1,
      category: 'bread',
      name: '연남동 시그니처 고메 소금빵',
      price: '3,800원',
      desc: '프랑스산 최고급 버터와 신안 천일염으로 골든 브라운하게 구워낸 대표 인기 빵',
      img: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80',
      badge: '대표 인기',
    },
    {
      id: 2,
      category: 'bread',
      name: '국산 팥 앙버터 유기농 스콘',
      price: '4,500원',
      desc: '국산 100% 팥으로 만든 달지 않은 통팥소와 두툼한 앵커 버터의 고소한 조화',
      img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
      badge: '당일 한정',
    },
    {
      id: 3,
      category: 'coffee',
      name: '달다래 시그니처 흑임자 크림라떼',
      price: '6,500원',
      desc: '직접 방앗간에서 빻아온 국산 고소한 흑임자 크림과 진한 에스프레소의 만남',
      img: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
      badge: '추천',
    },
    {
      id: 4,
      category: 'coffee',
      name: '연남 아침 다크 스페셜티 아메리카노',
      price: '4,800원',
      desc: '고소한 묵직함과 다크 초콜릿의 향미가 돋보이는 달다래 자체 로스팅 원두',
      img: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=800&q=80',
      badge: '데일리',
    },
    {
      id: 5,
      category: 'dessert',
      name: '제주 유기농 말차 숲 타르트',
      price: '7,500원',
      desc: '제주 산지 직송 말차 파우더와 화이트 초콜릿 가나슈의 진하고 쌉싸름한 맛',
      img: 'https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=800&q=80',
      badge: '신메뉴',
    },
    {
      id: 6,
      category: 'dessert',
      name: '수제 논산 생딸기 듬뿍 케이크',
      price: '8,200원',
      desc: '논산 농장에서 매일 아침 배송받은 신선한 생딸기와 100% 우유 생크림',
      img: 'https://images.unsplash.com/photo-1603532648955-039310d9ed75?auto=format&fit=crop&w=800&q=80',
      badge: '시즌 한정',
    },
  ];

  const filteredMenu = selectedCategory === 'all'
    ? menuItems
    : menuItems.filter(m => m.category === selectedCategory);

  const handleReservationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setReservationSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#FAFAF7] text-[#2C2623] font-sans selection:bg-[#EFE9DF] selection:text-[#2C2623]">
      
      {/* Top Banner indicating Sample Project */}
      <SampleHeaderBanner
        sampleTitle="카페·베이커리 감성 홈페이지 샘플 (달다래 베이커리 & 카페)"
        colorSchemeClass="bg-[#2C2623] text-[#F3ECE0] border-[#3D3531]"
      />

      {/* Main Nav */}
      <header className="px-6 py-4 border-b border-[#EADFCF] bg-[#FAFAF7]/95 backdrop-blur-md sticky top-[41px] z-40">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#8B5E3C] text-[#FAFAF7] flex items-center justify-center font-bold text-base shadow-xs">
              달다
            </div>
            <div>
              <span className="text-[11px] font-bold tracking-wider text-[#8B5E3C] block">
                연남동 감성 아티장 베이커리
              </span>
              <h1 className="text-lg font-extrabold tracking-tight text-[#2C2623]">
                달다래 베이커리 & 카페 <span className="text-[#A07855] text-xs font-normal">(샘플)</span>
              </h1>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-7 text-xs font-bold text-[#5C4F48]">
            <a href="#about" className="hover:text-[#8B5E3C] transition-colors">브랜드 이야기</a>
            <a href="#menu" className="hover:text-[#8B5E3C] transition-colors">대표 메뉴</a>
            <a href="#location" className="hover:text-[#8B5E3C] transition-colors">오시는 길 & 주차</a>
            <a href="#reservation" className="hover:text-[#8B5E3C] transition-colors">테이블 예약</a>
          </nav>

          <a
            href="#reservation"
            className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#8B5E3C] hover:bg-[#6D482E] transition-all shadow-xs"
          >
            온라인 예약
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 px-6 bg-gradient-to-b from-[#F5EFE6] to-[#FAFAF7] text-left">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#EADFCF] text-[#5C4F48]">
              <Sparkles className="w-3.5 h-3.5 text-[#8B5E3C]" />
              <span>매일 아침 08:30 / 14:00 갓 구운 빵 나오는 시간</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#2C2623] leading-[1.25] tracking-tight">
              매일 아침 구워내는<br />
              <span className="text-[#8B5E3C]">정갈한 소금빵과 유기농 베이커리</span>
            </h2>

            <p className="text-xs sm:text-sm text-[#6C5E57] leading-relaxed max-w-xl">
              달다래는 화학 첨가물 없이 천연 효모종과 당일 생산 원칙을 지키는 연남동 감성 베이커리입니다. 따뜻한 한 잔의 스페셜티 커피와 속 편한 유기농 빵을 선물합니다.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#menu"
                className="px-6 py-3 rounded-xl text-xs font-bold bg-[#8B5E3C] text-white hover:bg-[#6D482E] transition-all shadow-sm flex items-center gap-2"
              >
                <span>오늘의 대표 메뉴 보기</span>
                <ChevronRight className="w-4 h-4" />
              </a>
              <a
                href="#reservation"
                className="px-6 py-3 rounded-xl text-xs font-bold bg-white text-[#2C2623] border border-[#DCD0C0] hover:bg-[#EADFCF]/50 transition-all"
              >
                테이블 사전 예약
              </a>
            </div>

            <div className="pt-6 border-t border-[#EADFCF] grid grid-cols-3 gap-4 text-xs font-sans">
              <div>
                <span className="font-extrabold text-[#8B5E3C] text-base block">100% 당일생산</span>
                <span className="text-[#7A6B63]">당일 구워 당일 판매</span>
              </div>
              <div>
                <span className="font-extrabold text-[#8B5E3C] text-base block">천연효모종</span>
                <span className="text-[#7A6B63]">속 편한 유기농 발효</span>
              </div>
              <div>
                <span className="font-extrabold text-[#8B5E3C] text-base block">자체 로스팅</span>
                <span className="text-[#7A6B63]">스페셜티 고소한 원두</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white aspect-[4/3] lg:aspect-[3/4]">
              <img
                src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80"
                alt="카페 베이커리 메인 이미지"
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6 text-white">
                <div>
                  <span className="text-[11px] font-bold text-[#EADFCF] block">연남동 본점</span>
                  <p className="text-xs font-medium text-slate-100">이정우 제과기능장 디렉팅 베이커리</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Story Section */}
      <section id="about" className="py-16 px-6 bg-white border-y border-[#EADFCF] text-left">
        <div className="max-w-4xl mx-auto text-center space-y-3">
          <span className="text-xs font-bold tracking-widest text-[#8B5E3C] uppercase block">
            Brand Story
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#2C2623]">
            "좋은 재료로 정성껏 구운 빵 한 조각의 힘"
          </h3>
          <p className="text-xs sm:text-sm text-[#6C5E57] leading-relaxed max-w-2xl mx-auto">
            인공 보존제나 첨가물을 넣지 않고, 좋은 버터와 국내산 유기농 밀가루, 신안 천일염만으로 완성합니다. 마포 연남동 골목길에서 매일 구수한 빵 향기와 정겨운 인사를 나눕니다.
          </p>
        </div>
      </section>

      {/* Fresh Baking Time Schedule Section (Design Enhancement) */}
      <section className="py-14 px-6 bg-[#F8F4EE] border-b border-[#EADFCF] text-left">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-[#8B5E3C] uppercase tracking-wider block mb-1">
                Fresh Baking Time
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#2C2623]">
                당일 갓 구운 빵 출하 시간표
              </h3>
            </div>
            <div className="text-xs text-[#7A6B63] bg-white px-3.5 py-2 rounded-xl border border-[#EADFCF] shadow-2xs flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#8B5E3C]" />
              <span>실시간 오븐 출하 상태 연동</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-white p-6 rounded-2xl border border-[#EADFCF] shadow-2xs space-y-3 relative overflow-hidden">
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold text-[#8B5E3C] bg-[#F5EFE6] px-3 py-1 rounded-full">
                  1차 출하 08:30
                </span>
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  갓 구워짐
                </span>
              </div>
              <h4 className="font-extrabold text-base text-[#2C2623]">시그니처 고메 소금빵 & 우유 식빵</h4>
              <p className="text-xs text-[#6C5E57] leading-relaxed">
                출근길을 채우는 따뜻한 고소함. 천일염 버터 풍미가 가장 깊은 시간대입니다.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#EADFCF] shadow-2xs space-y-3 relative overflow-hidden">
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold text-[#8B5E3C] bg-[#F5EFE6] px-3 py-1 rounded-full">
                  2차 출하 11:30
                </span>
                <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                  판매 진행 중
                </span>
              </div>
              <h4 className="font-extrabold text-base text-[#2C2623]">앙버터 스콘 & 크루아상 라인</h4>
              <p className="text-xs text-[#6C5E57] leading-relaxed">
                점심시간 디저트로 인기 높은 바삭한 결의 페이스트리와 프리미엄 스콘입니다.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#EADFCF] shadow-2xs space-y-3 relative overflow-hidden">
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold text-[#8B5E3C] bg-[#F5EFE6] px-3 py-1 rounded-full">
                  3차 출하 14:30
                </span>
                <span className="text-[10px] font-bold text-sky-700 bg-sky-50 px-2 py-0.5 rounded border border-sky-200">
                  오픈 대기중
                </span>
              </div>
              <h4 className="font-extrabold text-base text-[#2C2623]">제주 말차 타르트 & 딸기 케이크</h4>
              <p className="text-xs text-[#6C5E57] leading-relaxed">
                오후 티타임을 완성하는 수제 케이크 및 선물용 디저트 라인업입니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 px-6 max-w-6xl mx-auto text-left">
        <div className="text-center space-y-3 mb-10">
          <span className="text-xs font-bold text-[#8B5E3C] uppercase tracking-wider block">
            Signature Menu
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#2C2623]">시그니처 메뉴 안내</h3>
          <p className="text-xs text-[#7A6B63]">
            달다래에서 가장 인기가 높은 베이커리와 음료 라인업입니다.
          </p>

          {/* Filter Tabs */}
          <div className="flex justify-center gap-2 pt-3 text-xs">
            {[
              { id: 'all', label: '전체 메뉴' },
              { id: 'bread', label: '대표 베이커리' },
              { id: 'coffee', label: '스페셜티 커피' },
              { id: 'dessert', label: '수제 디저트' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id as any)}
                className={`px-4 py-2 rounded-xl font-bold transition-all cursor-pointer ${
                  selectedCategory === tab.id
                    ? 'bg-[#8B5E3C] text-white shadow-xs'
                    : 'bg-white text-[#5C4F48] hover:bg-[#EADFCF]/40 border border-[#DCD0C0]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMenu.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl overflow-hidden border border-[#EADFCF] shadow-2xs hover:shadow-md transition-all group flex flex-col justify-between">
              <div>
                <div className="relative aspect-[4/3] overflow-hidden bg-[#F5EFE6]">
                  <img
                    src={item.img}
                    alt={item.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-[#2C2623] text-white text-[10px] font-bold px-2.5 py-1 rounded-lg uppercase shadow-xs">
                    {item.badge}
                  </span>
                </div>
                <div className="p-5 space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-[#2C2623] text-sm group-hover:text-[#8B5E3C] transition-colors">
                      {item.name}
                    </h4>
                    <span className="font-extrabold text-[#8B5E3C] text-sm shrink-0">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-xs text-[#6C5E57] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
              <div className="px-5 pb-5 pt-1">
                <button
                  onClick={() => alert(`'${item.name}' 당일 예약/포장 문의 샘플입니다.`)}
                  className="w-full py-2 rounded-xl text-xs font-bold text-[#2C2623] bg-[#F5EFE6] hover:bg-[#EADFCF] transition-colors cursor-pointer"
                >
                  포장/수령 문의
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Location & Operating Hours */}
      <section id="location" className="py-16 px-6 bg-white border-t border-[#EADFCF] text-left">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <span className="text-xs font-bold text-[#8B5E3C] uppercase tracking-wider block">
              Location & Hours
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#2C2623]">
              매장 오시는 길 및 영업시간
            </h3>

            <div className="space-y-3 text-xs text-[#5C4F48]">
              <div className="flex items-start gap-3 p-4 bg-[#FAFAF7] rounded-xl border border-[#EADFCF]">
                <MapPin className="w-5 h-5 text-[#8B5E3C] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-sm text-[#2C2623] mb-1">매장 주소</strong>
                  <span>서울특별시 마포구 연남로 48길 12 (홍대입구역 3번 출구 도보 7분)</span>
                  <span className="block text-[11px] text-[#7A6B63] mt-1">* 매장 앞 전용 주차 공간 3대 가능</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-[#FAFAF7] rounded-xl border border-[#EADFCF]">
                <Clock className="w-5 h-5 text-[#8B5E3C] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-sm text-[#2C2623] mb-1">영업시간</strong>
                  <span>매일 08:00 ~ 21:30 (라스트 오더 21:00)</span>
                  <span className="block text-[11px] text-[#7A6B63] mt-1">* 갓 구운 소금빵 출하: 오전 08:30 / 오후 14:00</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-[#FAFAF7] rounded-xl border border-[#EADFCF]">
                <Phone className="w-5 h-5 text-[#8B5E3C] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-sm text-[#2C2623] mb-1">매장 전화</strong>
                  <span>02-334-5678 (단체 예약 및 단체 빵 주문 가능)</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#F5EFE6] rounded-2xl p-6 border border-[#EADFCF] flex flex-col items-center justify-center min-h-[300px] text-center space-y-3">
            <MapPin className="w-12 h-12 text-[#8B5E3C]" />
            <h4 className="font-bold text-base text-[#2C2623]">카카오맵 & 네이버 지도 연동</h4>
            <p className="text-xs text-[#6C5E57] max-w-xs">
              실제 웹사이트 제작 시 카카오 지도 API 또는 네이버 지도 API를 실시간 연동해 드립니다.
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => alert('네이버 지도로 길찾기 연결 샘플입니다.')}
                className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#03C75A] hover:opacity-90"
              >
                네이버 길찾기
              </button>
              <button
                onClick={() => alert('카카오맵으로 길찾기 연결 샘플입니다.')}
                className="px-4 py-2 rounded-xl text-xs font-bold text-[#191919] bg-[#FEE500] hover:opacity-90"
              >
                카카오맵 연결
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Reservation Form */}
      <section id="reservation" className="py-20 px-6 max-w-3xl mx-auto text-left">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#EADFCF] shadow-lg space-y-6">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold text-[#8B5E3C] uppercase tracking-wider block">
              Reservation
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#2C2623]">
              테이블 및 단체 예약 신청
            </h3>
            <p className="text-xs text-[#7A6B63]">
              방문 희망 날짜와 인원을 남겨주시면 확인 후 안내 문자를 발송해 드립니다.
            </p>
          </div>

          {reservationSubmitted ? (
            <div className="p-8 bg-[#FAFAF7] rounded-2xl border border-[#EADFCF] text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#8B5E3C] text-white flex items-center justify-center mx-auto font-bold text-xl">
                ✓
              </div>
              <h4 className="font-bold text-lg text-[#2C2623]">예약 요청이 성공적으로 접수되었습니다! (샘플)</h4>
              <p className="text-xs text-[#6C5E57]">
                {formData.name}님, {formData.date} {formData.time} ({formData.guests}인) 예약 신청이 전달되었습니다.
              </p>
              <button
                onClick={() => setReservationSubmitted(false)}
                className="mt-2 px-4 py-2 rounded-xl text-xs font-bold bg-[#8B5E3C] text-white"
              >
                다른 예약 신청하기
              </button>
            </div>
          ) : (
            <form onSubmit={handleReservationSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-[#2C2623] mb-1">예약자 성함</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="홍길동"
                    className="w-full px-4 py-3 rounded-xl border border-[#DCD0C0] focus:outline-none focus:ring-2 focus:ring-[#8B5E3C]"
                  />
                </div>
                <div>
                  <label className="block font-bold text-[#2C2623] mb-1">휴대폰 번호</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="010-0000-0000"
                    className="w-full px-4 py-3 rounded-xl border border-[#DCD0C0] focus:outline-none focus:ring-2 focus:ring-[#8B5E3C]"
                  />
                </div>
                <div>
                  <label className="block font-bold text-[#2C2623] mb-1">방문 희망 날짜</label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#DCD0C0] focus:outline-none focus:ring-2 focus:ring-[#8B5E3C]"
                  />
                </div>
                <div>
                  <label className="block font-bold text-[#2C2623] mb-1">방문 시간</label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#DCD0C0] focus:outline-none focus:ring-2 focus:ring-[#8B5E3C]"
                  >
                    <option value="10:00">오전 10:00</option>
                    <option value="12:00">오후 12:00</option>
                    <option value="14:00">오후 02:00</option>
                    <option value="16:00">오후 04:00</option>
                    <option value="18:00">오후 06:00</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-bold text-[#2C2623] mb-1">방문 인원</label>
                <select
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-[#DCD0C0] focus:outline-none focus:ring-2 focus:ring-[#8B5E3C]"
                >
                  <option value="1">1인 (바 창가석)</option>
                  <option value="2">2인</option>
                  <option value="3-4">3~4인</option>
                  <option value="5+">5인 이상 (단체 룸석)</option>
                </select>
              </div>

              <div>
                <label className="block font-bold text-[#2C2623] mb-1">요청 및 유의사항</label>
                <textarea
                  rows={3}
                  value={formData.request}
                  onChange={(e) => setFormData({ ...formData, request: e.target.value })}
                  placeholder="창가 자리 희망, 아기 의자 필요, 주차 문의 등"
                  className="w-full px-4 py-3 rounded-xl border border-[#DCD0C0] focus:outline-none focus:ring-2 focus:ring-[#8B5E3C]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl font-bold text-sm text-white bg-[#8B5E3C] hover:bg-[#6D482E] transition-all shadow-md cursor-pointer"
              >
                테이블 온라인 예약 신청하기
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-[#2C2623] text-[#F3ECE0] text-xs text-center space-y-2">
        <p className="font-bold">달다래 베이커리 & 카페 (Daldarae) 샘플 웹사이트</p>
        <p className="text-[#A09289]">
          본 페이지는 민트클 웹스튜디오에서 커스텀 제작 가능한 국내 카페·베이커리 분야 웹사이트 시안입니다.
        </p>
        <p className="text-[11px] text-[#7A6B63] pt-1">© 2026 Mintcle Web Studio Concept Work. All rights reserved.</p>
      </footer>

    </div>
  );
};
