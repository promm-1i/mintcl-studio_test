import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { InquiryFormData, FeatureOption } from '../types';
import { 
  Calculator, 
  Send, 
  CheckCircle2, 
  Clock, 
  HelpCircle, 
  History, 
  Phone, 
  Mail, 
  User, 
  Building, 
  FileText, 
  Sparkles,
  Info,
  DollarSign,
  Loader2,
  AlertCircle,
  ExternalLink
} from 'lucide-react';

interface InquirySectionProps {
  preSelectedServiceTitle?: string;
  onShowToast: (msg: string) => void;
}

export const InquirySection: React.FC<InquirySectionProps> = ({
  preSelectedServiceTitle,
  onShowToast,
}) => {
  const [activeTab, setActiveTab] = useState<'calculator' | 'form' | 'history'>('calculator');

  // Calculator State
  const [calcServiceType, setCalcServiceType] = useState<string>('소상공인 홈페이지');
  const [calcPageCount, setCalcPageCount] = useState<number>(5);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    'feature-map', 'feature-mobile-cta'
  ]);

  // Form State
  const [formData, setFormData] = useState<InquiryFormData>({
    name: '',
    companyName: '',
    phone: '',
    email: '',
    serviceType: preSelectedServiceTitle || '소상공인 홈페이지',
    estimatedBudget: '50만 ~ 100만원',
    targetDeadline: '2주일 이내',
    hasDomainHosting: 'need_advice',
    details: '',
  });

  // Submission & History State
  const [savedInquiries, setSavedInquiries] = useState<InquiryFormData[]>([]);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  useEffect(() => {
    if (preSelectedServiceTitle) {
      setFormData(prev => ({ ...prev, serviceType: preSelectedServiceTitle }));
      setCalcServiceType(preSelectedServiceTitle);
      setActiveTab('form');
    }
  }, [preSelectedServiceTitle]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('mintcle_inquiries');
      if (stored) {
        setSavedInquiries(JSON.parse(stored));
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  // Extra Optional Features
  const featureOptions: FeatureOption[] = [
    { id: 'feature-mobile-cta', name: '모바일 원터치 전화/카톡 연결', desc: '모바일 상단 플로팅 연결', price: 0 },
    { id: 'feature-map', name: '네이버/카카오 지도 연동', desc: '오시는 길 & 매장 위치 지도 연동', price: 0 },
    { id: 'feature-form', name: '맞춤 문의/예약 신청 폼', desc: '이메일 수신 신청 양식', price: 100000 },
    { id: 'feature-lang', name: '다국어 언어 스위처', desc: '한/영/중 사이트 전환 기능', price: 200000 },
  ];

  // Base Prices per Service
  const getBasePrice = (type: string) => {
    switch (type) {
      case '소상공인 홈페이지': return 350000;
      case '포트폴리오 사이트': return 400000;
      case '서비스 소개 페이지': return 300000;
      case '기업 홈페이지': return 650000;
      case '기존 홈페이지 리뉴얼': return 500000;
      default: return 400000;
    }
  };

  const calculateTotalPrice = () => {
    let base = getBasePrice(calcServiceType);
    if (calcPageCount > 5) {
      base += (calcPageCount - 5) * 50000;
    }
    selectedFeatures.forEach(fId => {
      const opt = featureOptions.find(o => o.id === fId);
      if (opt) base += opt.price;
    });
    return base;
  };

  const toggleFeature = (id: string) => {
    const opt = featureOptions.find(o => o.id === id);
    if (opt && opt.price === 0) return;

    if (selectedFeatures.includes(id)) {
      setSelectedFeatures(selectedFeatures.filter(f => f !== id));
    } else {
      setSelectedFeatures([...selectedFeatures, id]);
    }
  };

  const handleTransferToForm = () => {
    const total = calculateTotalPrice();
    setFormData(prev => ({
      ...prev,
      serviceType: calcServiceType,
      estimatedPrice: total,
      selectedFeatures: selectedFeatures,
      details: `[실시간 견적 계산기 연동]\n• 선택 유형: ${calcServiceType}\n• 예상 페이지 수: ${calcPageCount}페이지\n• 선택 기능: ${selectedFeatures.map(f => featureOptions.find(o => o.id === f)?.name).join(', ')}\n• 산출 예상 비용: 약 ${total.toLocaleString()}원`,
    }));
    setActiveTab('form');
    onShowToast('산출된 견적 정보가 상담 신청 양식에 자동으로 적용되었습니다.');
  };

  const handleSubmitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim() || !formData.email.trim()) {
      alert('성함, 연락처, 이메일은 필수 입력 사항입니다.');
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    const formspreeEndpoint = 'https://formspree.io/f/xbgrrkee';
    const payload = {
      _subject: `[민트클 웹스튜디오] ${formData.name}님의 제작 상담 문의 (${formData.serviceType})`,
      name: formData.name,
      companyName: formData.companyName || '개인/미입력',
      phone: formData.phone,
      email: formData.email,
      serviceType: formData.serviceType,
      estimatedBudget: formData.estimatedBudget,
      estimatedPrice: formData.estimatedPrice ? `${formData.estimatedPrice.toLocaleString()}원` : '미산출',
      details: formData.details || '내용 없음',
      submittedAt: new Date().toLocaleString('ko-KR'),
    };

    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const newInquiry: InquiryFormData = {
          ...formData,
          id: 'INQ-' + Date.now(),
          createdAt: new Date().toLocaleString('ko-KR'),
        };

        const updated = [newInquiry, ...savedInquiries];
        setSavedInquiries(updated);
        try {
          localStorage.setItem('mintcle_inquiries', JSON.stringify(updated));
        } catch (err) {
          console.error(err);
        }

        setIsSubmitted(true);
        onShowToast('Formspree를 통해 상담 신청 데이터가 성공적으로 전송되었습니다.');
      } else {
        const data = await response.json().catch(() => ({}));
        const errText = data?.errors?.map((err: { message: string }) => err.message).join(', ') || '전송 중 문제가 발생했습니다. 입력 정보를 확인해 주세요.';
        setSubmitError(errText);
        onShowToast('Formspree 전송 중 오류가 발생했습니다.');
      }
    } catch (err) {
      console.error('Formspree error:', err);
      // Fallback local save in case of connectivity issues
      const newInquiry: InquiryFormData = {
        ...formData,
        id: 'INQ-' + Date.now(),
        createdAt: new Date().toLocaleString('ko-KR'),
      };
      const updated = [newInquiry, ...savedInquiries];
      setSavedInquiries(updated);
      try {
        localStorage.setItem('mintcle_inquiries', JSON.stringify(updated));
      } catch (e) {
        console.error(e);
      }
      setIsSubmitted(true);
      onShowToast('상담 신청이 보관되었습니다. (네트워크 연결로 로컬 저장)');
    } finally {
      setIsSubmitting(false);
    }
  };

  const calculatedTotal = calculateTotalPrice();

  return (
    <section id="inquiry-section" className="py-20 bg-white border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Motion */}
        <motion.div 
          className="text-center max-w-3xl mx-auto space-y-3 mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold bg-teal-50 text-teal-800 border border-teal-200">
            <Sparkles className="w-4 h-4 text-teal-600" />
            <span>비용 계산 & 상담 문의</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-sans">
            예상 가격 계산기 & 1:1 상담 신청
          </h2>
          <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
            필요한 옵션을 직접 클릭하여 예상 금액을 확인해보시거나, 궁금한 내용을 적어 상담을 신청해보세요.
          </p>
        </motion.div>

        {/* Direct Contact Banner with Motion */}
        <motion.div 
          className="p-5 sm:p-6 bg-slate-900 text-white rounded-2xl border border-slate-800 shadow-md mb-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm sm:text-base"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-bold shrink-0">
              <Mail className="w-6 h-6" />
            </div>
            <div className="text-left">
              <div className="font-extrabold text-amber-300 text-base sm:text-lg flex items-center gap-2">
                <span>이메일 직접 문의</span>
                <span className="text-xs bg-amber-400/20 text-amber-300 font-normal px-2 py-0.5 rounded border border-amber-400/40">24시간 언제든 접수</span>
              </div>
              <div className="text-slate-200 font-medium">이메일 주소: <strong className="text-white font-mono text-base sm:text-lg">6gsmake@gmail.com</strong></div>
            </div>
          </div>
          <div className="flex items-center gap-2.5 bg-slate-800 px-5 py-3 rounded-xl text-xs sm:text-sm text-slate-200 shrink-0 border border-slate-700">
            <Clock className="w-5 h-5 text-teal-400 shrink-0" />
            <span>카톡 실시간 상담: <strong className="text-white font-bold">평일 09:00 ~ 18:00</strong></span>
          </div>
        </motion.div>

        {/* Tab Selector Buttons */}
        <motion.div 
          className="flex flex-wrap items-center justify-center gap-3 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <button
            id="tab-calculator"
            onClick={() => setActiveTab('calculator')}
            className={`inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-sm sm:text-base font-bold transition-all cursor-pointer ${
              activeTab === 'calculator'
                ? 'bg-teal-600 text-white shadow-md'
                : 'bg-slate-100 text-slate-800 hover:bg-slate-200 border border-slate-300'
            }`}
          >
            <Calculator className="w-5 h-5" />
            <span>1. 예상 가격 바로 계산하기</span>
          </button>

          <button
            id="tab-form"
            onClick={() => setActiveTab('form')}
            className={`inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-sm sm:text-base font-bold transition-all cursor-pointer ${
              activeTab === 'form'
                ? 'bg-teal-600 text-white shadow-md'
                : 'bg-slate-100 text-slate-800 hover:bg-slate-200 border border-slate-300'
            }`}
          >
            <Send className="w-5 h-5" />
            <span>2. 1:1 상담 신청서 작성</span>
          </button>

          {savedInquiries.length > 0 && (
            <button
              id="tab-history"
              onClick={() => setActiveTab('history')}
              className={`inline-flex items-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'history'
                  ? 'bg-teal-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200/80 border border-slate-200'
              }`}
            >
              <History className="w-4 h-4 text-teal-600" />
              <span>내 신청 이력 ({savedInquiries.length})</span>
            </button>
          )}
        </motion.div>

        {/* TAB 1: REAL-TIME INSTANT ESTIMATE CALCULATOR */}
        {activeTab === 'calculator' && (
          <div className="bg-slate-50 rounded-2xl border border-slate-200/90 p-6 sm:p-8 lg:p-10 text-left shadow-2xs space-y-8">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Choices */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* 1. Website Type Selection */}
                <div className="space-y-3">
                  <label className="text-xs font-extrabold text-slate-800 uppercase tracking-wider block">
                    STEP 1. 홈페이지 제작 유형 선택
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {[
                      '소상공인 홈페이지',
                      '기업 홈페이지',
                      '포트폴리오 사이트',
                      '서비스 소개 페이지',
                      '기존 홈페이지 리뉴얼',
                    ].map((type) => (
                      <button
                        key={type}
                        onClick={() => setCalcServiceType(type)}
                        className={`p-3 rounded-xl text-xs font-bold text-left transition-all border cursor-pointer ${
                          calcServiceType === type
                            ? 'bg-teal-600 text-white border-teal-600 shadow-2xs'
                            : 'bg-white text-slate-800 border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Page Count Slider */}
                <div className="space-y-3 bg-white p-5 rounded-xl border border-slate-200/80">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-extrabold text-slate-800 uppercase tracking-wider">
                      STEP 2. 예상 제작 페이지 수
                    </label>
                    <span className="text-sm font-bold text-teal-700 bg-teal-50 px-2.5 py-0.5 rounded border border-teal-200">
                      약 {calcPageCount} 페이지
                    </span>
                  </div>
                  <input
                    type="range"
                    min={1}
                    max={15}
                    step={1}
                    value={calcPageCount}
                    onChange={(e) => setCalcPageCount(parseInt(e.target.value))}
                    className="w-full accent-teal-600 cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-slate-400">
                    <span>1페이지 (단일 원페이지)</span>
                    <span>5페이지 (기본)</span>
                    <span>10페이지 이상 (확장)</span>
                  </div>
                </div>

                {/* 3. Feature Checkboxes */}
                <div className="space-y-3">
                  <label className="text-xs font-extrabold text-slate-800 uppercase tracking-wider block">
                    STEP 3. 추가 기능 및 연동 옵션
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {featureOptions.map((opt) => {
                      const isChecked = selectedFeatures.includes(opt.id);
                      return (
                        <div
                          key={opt.id}
                          onClick={() => toggleFeature(opt.id)}
                          className={`p-3 rounded-xl border transition-all cursor-pointer flex items-start justify-between gap-2 ${
                            isChecked
                              ? 'bg-white border-teal-500 shadow-2xs ring-1 ring-teal-100'
                              : 'bg-white border-slate-200 opacity-70 hover:opacity-100'
                          }`}
                        >
                          <div className="space-y-0.5">
                            <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                              <span className={`w-3.5 h-3.5 rounded flex items-center justify-center text-[10px] ${
                                isChecked ? 'bg-teal-600 text-white' : 'border border-slate-300'
                              }`}>
                                {isChecked && '✓'}
                              </span>
                              <span>{opt.name}</span>
                            </div>
                            <p className="text-[11px] text-slate-500 pl-5">{opt.desc}</p>
                          </div>
                          <span className="text-[11px] font-bold text-teal-700 shrink-0">
                            {opt.price === 0 ? '기본 포함' : `+${(opt.price/10000)}만원`}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

              </div>

              {/* Right Column: Instant Result Card */}
              <div className="lg:col-span-5 bg-white rounded-2xl p-6 border border-slate-200/90 shadow-md space-y-6 sticky top-24">
                <div className="border-b border-slate-100 pb-4">
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-800 bg-teal-50 px-2.5 py-1 rounded border border-teal-200">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>실시간 투명 산정 견적</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mt-2">
                    {calcServiceType}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    페이지 {calcPageCount}개 + 선택 옵션 포함 기준
                  </p>
                </div>

                {/* Dynamic Price Display */}
                <div className="bg-slate-900 text-white rounded-xl p-5 space-y-2 text-center">
                  <span className="text-[11px] text-slate-400 font-medium">예상 제작 비용 (VAT 별도)</span>
                  <div className="text-3xl font-extrabold text-teal-400">
                    약 {calculatedTotal.toLocaleString()} <span className="text-lg text-white font-normal">원</span>
                  </div>
                  <p className="text-[11px] text-slate-300 pt-1 border-t border-slate-800">
                    * 정확한 최종 견적은 기획 원고 확정 후 무료 가견적서로 발행됩니다.
                  </p>
                </div>

                {/* Calculation Summary List */}
                <div className="space-y-2 text-xs text-slate-600">
                  <div className="flex justify-between">
                    <span>기본 제작비 ({calcServiceType}):</span>
                    <span className="font-bold text-slate-800">{(getBasePrice(calcServiceType)/10000)}만원</span>
                  </div>
                  {calcPageCount > 5 && (
                    <div className="flex justify-between">
                      <span>페이지 추가 ({(calcPageCount - 5)}개):</span>
                      <span className="font-bold text-slate-800">+{(calcPageCount - 5)*5}만원</span>
                    </div>
                  )}
                  <div className="flex justify-between border-t border-slate-100 pt-2 font-medium">
                    <span>포함 옵션 수:</span>
                    <span className="text-teal-700 font-bold">{selectedFeatures.length}개 항목</span>
                  </div>
                </div>

                {/* Action Button */}
                <button
                  id="calc-transfer-btn"
                  onClick={handleTransferToForm}
                  className="w-full py-3.5 rounded-xl font-bold text-sm text-white bg-teal-600 hover:bg-teal-700 shadow-sm transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>이 견적으로 제작 상담 바로 신청하기</span>
                </button>

                <p className="text-[11px] text-slate-400 text-center">
                  🔒 모든 상담 신청 내용은 민트클 스튜디오 내에서 안전하게 관리됩니다.
                </p>

              </div>

            </div>

          </div>
        )}

        {/* TAB 2: CONSULTATION REQUEST FORM */}
        {activeTab === 'form' && (
          <div className="bg-slate-50 rounded-2xl border border-slate-200/90 p-6 sm:p-8 lg:p-10 text-left shadow-2xs">
            
            {isSubmitted ? (
              <div className="bg-white rounded-xl p-8 border border-teal-200 text-center space-y-4 max-w-lg mx-auto my-6">
                <div className="w-12 h-12 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  제작 상담 신청이 Formspree로 전송되었습니다!
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  남겨주신 연락처({formData.phone}) 및 이메일({formData.email})로 담당자가 24시간 이내에 친절히 안내해 드리겠습니다.
                </p>
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 text-left text-xs font-mono text-slate-600 space-y-1">
                  <div className="font-bold text-teal-700 font-sans">수집 엔드포인트:</div>
                  <div>https://formspree.io/f/xbgrrkee</div>
                </div>
                <div className="pt-4 flex gap-2 justify-center">
                  <button
                    onClick={() => { setIsSubmitted(false); setActiveTab('history'); }}
                    className="px-4 py-2 rounded-lg text-xs font-bold text-teal-800 bg-teal-50 border border-teal-200 hover:bg-teal-100"
                  >
                    신청 내역 확인하기
                  </button>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '', companyName: '', phone: '', email: '',
                        serviceType: '소상공인 홈페이지', estimatedBudget: '50만 ~ 100만원',
                        targetDeadline: '2주일 이내', hasDomainHosting: 'need_advice', details: ''
                      });
                    }}
                    className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200"
                  >
                    새로운 문의 작성
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmitForm} className="space-y-6 max-w-3xl mx-auto">
                
                {/* Formspree Active Connection Indicator */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-3.5 bg-slate-900 text-white rounded-xl text-xs gap-2 border border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                    <span className="font-bold text-teal-300">Formspree 수집 엔드포인트 연동 완료</span>
                  </div>
                  <a 
                    href="https://formspree.io/f/xbgrrkee" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-mono text-[11px] text-slate-400 hover:text-teal-300 flex items-center gap-1 transition-colors underline"
                  >
                    <span>https://formspree.io/f/xbgrrkee</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                {submitError && (
                  <div className="p-3.5 bg-red-50 text-red-700 rounded-xl border border-red-200 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />
                    <span>{submitError}</span>
                  </div>
                )}

                {formData.estimatedPrice && (
                  <div className="p-4 bg-teal-50 rounded-xl border border-teal-200 text-xs text-teal-900 flex items-center justify-between">
                    <span className="font-bold flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-teal-600" />
                      실시간 계산기 연동 견적: 약 {formData.estimatedPrice.toLocaleString()}원
                    </span>
                    <span className="text-[11px] text-teal-700">신청서 포함됨</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="text-sm font-extrabold text-slate-900 flex items-center gap-1">
                      <User className="w-4 h-4 text-teal-600" />
                      성함 / 담당자명 <span className="text-red-500">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="홍길동"
                      className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 text-sm sm:text-base text-slate-900 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-200"
                    />
                  </div>

                  {/* Company Name */}
                  <div className="space-y-1.5">
                    <label className="text-sm font-extrabold text-slate-900 flex items-center gap-1">
                      <Building className="w-4 h-4 text-slate-500" />
                      업체명 / 상호명 (선택)
                    </label>
                    <input
                      type="text"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      placeholder="민트클 스튜디오 / 매장명"
                      className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 text-sm sm:text-base text-slate-900 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-200"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label className="text-sm font-extrabold text-slate-900 flex items-center gap-1">
                      <Phone className="w-4 h-4 text-teal-600" />
                      연락처 <span className="text-red-500">*</span>
                    </label>
                    <input
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="010-0000-0000"
                      className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 text-sm sm:text-base text-slate-900 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-200"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-sm font-extrabold text-slate-900 flex items-center gap-1">
                      <Mail className="w-4 h-4 text-teal-600" />
                      이메일 주소 <span className="text-red-500">*</span>
                    </label>
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="example@mintcle.com"
                      className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 text-sm sm:text-base text-slate-900 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-200"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Service Type */}
                  <div className="space-y-1.5">
                    <label className="text-sm font-extrabold text-slate-900">희망 제작 홈페이지 유형</label>
                    <select
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 text-sm sm:text-base text-slate-900 focus:outline-none focus:border-teal-500 font-medium"
                    >
                      <option value="기업 홈페이지">기업 홈페이지</option>
                      <option value="소상공인 홈페이지">소상공인 홈페이지</option>
                      <option value="포트폴리오 사이트">포트폴리오 사이트</option>
                      <option value="서비스 소개 페이지">서비스 소개 페이지 (랜딩)</option>
                      <option value="기존 홈페이지 리뉴얼">기존 홈페이지 리뉴얼</option>
                    </select>
                  </div>

                  {/* Target Budget */}
                  <div className="space-y-1.5">
                    <label className="text-sm font-extrabold text-slate-900">생각하시는 예산 범주</label>
                    <select
                      value={formData.estimatedBudget}
                      onChange={(e) => setFormData({ ...formData, estimatedBudget: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 text-sm sm:text-base text-slate-900 focus:outline-none focus:border-teal-500 font-medium"
                    >
                      <option value="50만원 이하">50만원 이하 (실속 기본형)</option>
                      <option value="50만 ~ 100만원">50만 ~ 100만원 (표준 추천형)</option>
                      <option value="100만 ~ 200만원">100만 ~ 200만원 (맞춤 기업형)</option>
                      <option value="200만원 이상">200만원 이상 (특수 고도화)</option>
                      <option value="상담 후 결정">상담 후 결정</option>
                    </select>
                  </div>
                </div>

                {/* Requirements Details */}
                <div className="space-y-1.5">
                  <label className="text-sm font-extrabold text-slate-900 flex items-center justify-between">
                    <span>참고 사이트 및 세부 요청 사항</span>
                    <span className="text-xs text-slate-600 font-medium">마음에 드는 사이트 주소나 필요한 기능</span>
                  </label>
                  <textarea
                    rows={4}
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    placeholder="예: 카페 매장 안내용 웹사이트로, 대표 메뉴 5개 사진과 오시는 길 지도가 잘 보였으면 좋겠습니다."
                    className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 text-sm sm:text-base text-slate-900 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-200"
                  />
                </div>

                {/* Submit CTA */}
                <button
                  id="submit-consultation-form-btn"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl font-extrabold text-base text-white bg-teal-600 hover:bg-teal-700 disabled:bg-teal-400 shadow-md transition-all cursor-pointer disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Formspree로 전송 중...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>제작 상담 신청서 제출하기</span>
                    </>
                  )}
                </button>

              </form>
            )}

          </div>
        )}

        {/* TAB 3: INQUIRY HISTORY (LOCAL STORAGE) */}
        {activeTab === 'history' && (
          <div className="bg-slate-50 rounded-2xl border border-slate-200/90 p-6 sm:p-8 text-left shadow-2xs space-y-4">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <History className="w-5 h-5 text-teal-600" />
              <span>작성하신 상담 신청 내역</span>
            </h3>

            {savedInquiries.length === 0 ? (
              <p className="text-xs text-slate-500 py-4">저장된 신청 내역이 없습니다.</p>
            ) : (
              <div className="space-y-3">
                {savedInquiries.map((inq) => (
                  <div key={inq.id} className="p-4 bg-white rounded-xl border border-slate-200 space-y-2 text-xs">
                    <div className="flex justify-between font-bold text-slate-800">
                      <span>[{inq.serviceType}] {inq.name} ({inq.companyName || '개인'})</span>
                      <span className="text-teal-700 font-mono">{inq.createdAt}</span>
                    </div>
                    <div className="text-slate-600">
                      연락처: {inq.phone} | 이메일: {inq.email} | 예산: {inq.estimatedBudget}
                    </div>
                    {inq.details && (
                      <div className="p-2.5 bg-slate-50 rounded border border-slate-100 text-slate-700 font-mono text-[11px] whitespace-pre-wrap">
                        {inq.details}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

      </div>
    </section>
  );
};
