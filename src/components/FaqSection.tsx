import React, { useState } from 'react';
import { FAQ_DATA } from '../data/faqData';
import { SectionId } from '../types';
import { 
  ChevronDown, 
  Search, 
  HelpCircle, 
  Send, 
  MessageSquare,
  Sparkles
} from 'lucide-react';

interface FaqSectionProps {
  onNavigate: (sectionId: SectionId) => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedId, setExpandedId] = useState<string | null>('faq-1');

  const categories = [
    { id: 'all', label: '전체' },
    { id: 'cost', label: '비용 & 견적' },
    { id: 'timeline', label: '제작 기간' },
    { id: 'trust', label: '신뢰 & 절차' },
    { id: 'preparation', label: '준비 사항' },
    { id: 'maintenance', label: '유지보수' },
  ];

  const filteredFaqs = FAQ_DATA.filter((faq) => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch = 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleAccordion = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="faq-section" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-teal-50 text-teal-800 border border-teal-200">
            <span>자주 묻는 질문 (FAQ)</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-sans">
            제작 전 궁금하신 점을 <span className="text-teal-600">명확하게 해소해 드립니다</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            비용, 제작 기간, 준비 자료부터 오픈 후 관리까지 가장 자주 하시는 질문 모음입니다.
          </p>
        </div>

        {/* Search Bar & Category Controls */}
        <div className="space-y-4 mb-8">
          
          {/* Search Input */}
          <div className="relative max-w-xl mx-auto">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              id="faq-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="궁금한 키워드를 입력해보세요 (예: 기간, 비용, 도메인, 수정을...)"
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-white border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100 transition-all shadow-2xs"
            />
          </div>

          {/* Category Filter Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                id={`faq-filter-${cat.id}`}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-teal-600 text-white shadow-2xs'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3 text-left">
          {filteredFaqs.length === 0 ? (
            <div className="p-8 bg-white rounded-2xl border border-slate-200 text-center space-y-3">
              <HelpCircle className="w-8 h-8 text-slate-300 mx-auto" />
              <p className="text-sm font-semibold text-slate-700">검색어와 일치하는 질문이 없습니다.</p>
              <button
                onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
                className="text-xs font-bold text-teal-700 hover:underline"
              >
                전체 검색 결과 보기
              </button>
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isExpanded = expandedId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`bg-white rounded-xl border transition-all overflow-hidden ${
                    isExpanded ? 'border-teal-400 shadow-xs ring-1 ring-teal-100' : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <button
                    id={`faq-toggle-${faq.id}`}
                    onClick={() => toggleAccordion(faq.id)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-lg bg-teal-50 text-teal-700 text-xs font-bold flex items-center justify-center shrink-0 border border-teal-200/60">
                        Q
                      </span>
                      <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                        {faq.question}
                      </span>
                    </div>

                    <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-200 shrink-0 ${
                      isExpanded ? 'rotate-180 text-teal-600' : ''
                    }`} />
                  </button>

                  {isExpanded && (
                    <div className="px-5 pb-5 pt-1 border-t border-slate-100 bg-slate-50/50">
                      <div className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-lg bg-slate-200 text-slate-700 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                          A
                        </span>
                        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Bottom Contact Prompt Box */}
        <div className="mt-12 p-6 bg-white rounded-2xl border border-slate-200/90 shadow-2xs text-center space-y-3">
          <MessageSquare className="w-7 h-7 text-teal-600 mx-auto" />
          <h3 className="text-base font-bold text-slate-900">
            원하시는 질문의 답변을 찾지 못하셨나요?
          </h3>
          <p className="text-xs text-slate-600">
            민트클 웹스튜디오 담당자가 고객님의 프로젝트에 맞는 답변을 1:1로 친절히 답변드립니다.
          </p>
          <button
            id="faq-direct-inquiry-btn"
            onClick={() => onNavigate('inquiry')}
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-teal-600 hover:bg-teal-700 transition-all cursor-pointer shadow-2xs"
          >
            <Send className="w-3.5 h-3.5" />
            <span>1:1 맞춤 상담 신청하기</span>
          </button>
        </div>

      </div>
    </section>
  );
};
