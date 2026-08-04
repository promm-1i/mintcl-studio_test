import React, { useState, useEffect } from 'react';
import { BRAND_SPECIFICATION, PLANNING_SECTIONS_SPEC, BrandSpec } from '../data/planningSpecData';
import { PlanningDocSection, InquiryFormData } from '../types';
import { 
  ShieldCheck, 
  Lock, 
  X, 
  Save, 
  RotateCcw, 
  FileText, 
  Inbox, 
  Key, 
  CheckCircle2, 
  Trash2, 
  ExternalLink,
  Edit3,
  Copy,
  Check,
  Search,
  Eye
} from 'lucide-react';

interface AdminModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShowToast: (msg: string) => void;
  onOpenPlanningModal: () => void;
}

export const AdminModal: React.FC<AdminModalProps> = ({
  isOpen,
  onClose,
  onShowToast,
  onOpenPlanningModal,
}) => {
  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [passwordInput, setPasswordInput] = useState<string>('');
  const [authError, setAuthError] = useState<string | null>(null);

  // Admin Password Management
  const [currentPwSetting, setCurrentPwSetting] = useState<string>('admin1234');
  const [newPassword, setNewPassword] = useState<string>('');

  // Active Admin Tab
  const [activeTab, setActiveTab] = useState<'inquiries' | 'planning' | 'security'>('inquiries');

  // Saved Inquiries Data
  const [inquiries, setInquiries] = useState<InquiryFormData[]>([]);
  const [inquirySearch, setInquirySearch] = useState<string>('');
  const [selectedInquiry, setSelectedInquiry] = useState<InquiryFormData | null>(null);

  // Editable Planning Data
  const [brandData, setBrandData] = useState<BrandSpec>(BRAND_SPECIFICATION);
  const [sectionsData, setSectionsData] = useState<PlanningDocSection[]>(PLANNING_SECTIONS_SPEC);
  const [selectedSectionId, setSelectedSectionId] = useState<string>(PLANNING_SECTIONS_SPEC[0].sectionId);
  const [copiedInquiry, setCopiedInquiry] = useState<boolean>(false);

  // Load Saved Admin Data on Mount / Open
  useEffect(() => {
    if (isOpen) {
      // Load PW
      const savedPw = localStorage.getItem('mintcle_admin_password');
      if (savedPw) {
        setCurrentPwSetting(savedPw);
      } else {
        localStorage.setItem('mintcle_admin_password', 'admin1234');
      }

      // Load Login Auth Status
      const authed = sessionStorage.getItem('mintcle_admin_session');
      if (authed === 'true') {
        setIsAuthenticated(true);
      }

      // Load Inquiries
      loadInquiries();

      // Load Custom Planning Spec if edited
      loadCustomPlanning();
    }
  }, [isOpen]);

  const loadInquiries = () => {
    try {
      const raw = localStorage.getItem('mintcle_inquiries');
      if (raw) {
        const parsed = JSON.parse(raw);
        setInquiries(parsed);
      } else {
        setInquiries([]);
      }
    } catch (err) {
      console.error(err);
      setInquiries([]);
    }
  };

  const loadCustomPlanning = () => {
    try {
      const rawBrand = localStorage.getItem('mintcle_custom_brand_spec');
      if (rawBrand) {
        setBrandData(JSON.parse(rawBrand));
      }
      const rawSections = localStorage.getItem('mintcle_custom_sections_spec');
      if (rawSections) {
        setSectionsData(JSON.parse(rawSections));
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === currentPwSetting) {
      setIsAuthenticated(true);
      sessionStorage.setItem('mintcle_admin_session', 'true');
      setAuthError(null);
      setPasswordInput('');
      onShowToast('관리자로 인증되었습니다.');
    } else {
      setAuthError('비밀번호가 올바르지 않습니다.');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('mintcle_admin_session');
    onShowToast('관리자 세션이 종료되었습니다.');
  };

  const handleChangePassword = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPassword.trim() || newPassword.length < 4) {
      alert('비밀번호는 최소 4자 이상이어야 합니다.');
      return;
    }
    localStorage.setItem('mintcle_admin_password', newPassword);
    setCurrentPwSetting(newPassword);
    setNewPassword('');
    onShowToast('관리자 비밀번호가 성공적으로 변경되었습니다.');
  };

  // Delete single inquiry
  const handleDeleteInquiry = (id: string) => {
    if (!confirm('해당 상담 문의 내역을 삭제하시겠습니까?')) return;
    const updated = inquiries.filter(item => item.id !== id);
    setInquiries(updated);
    localStorage.setItem('mintcle_inquiries', JSON.stringify(updated));
    if (selectedInquiry?.id === id) setSelectedInquiry(null);
    onShowToast('문의 내역이 삭제되었습니다.');
  };

  // Clear all inquiries
  const handleClearAllInquiries = () => {
    if (!confirm('모든 접수 내역을 정말로 초기화/삭제하시겠습니까?')) return;
    setInquiries([]);
    localStorage.removeItem('mintcle_inquiries');
    setSelectedInquiry(null);
    onShowToast('모든 상담 문의 내역이 초기화되었습니다.');
  };

  // Save Custom Planning Edits
  const handleSavePlanningEdits = () => {
    try {
      localStorage.setItem('mintcle_custom_brand_spec', JSON.stringify(brandData));
      localStorage.setItem('mintcle_custom_sections_spec', JSON.stringify(sectionsData));
      onShowToast('상세 기획서 수정 사항이 성공적으로 저장되었습니다.');
    } catch (err) {
      console.error(err);
      onShowToast('기획서 저장 중 오류가 발생했습니다.');
    }
  };

  // Reset Planning Edits to Default
  const handleResetPlanningToDefault = () => {
    if (!confirm('모든 기획서 내용을 초기 원본 상태로 복원하시겠습니까?')) return;
    setBrandData(BRAND_SPECIFICATION);
    setSectionsData(PLANNING_SECTIONS_SPEC);
    localStorage.removeItem('mintcle_custom_brand_spec');
    localStorage.removeItem('mintcle_custom_sections_spec');
    onShowToast('기획서가 원본 기본값으로 복원되었습니다.');
  };

  // Update specific section detail
  const handleUpdateSection = (field: keyof PlanningDocSection, value: string) => {
    setSectionsData(prev =>
      prev.map(sec => sec.sectionId === selectedSectionId ? { ...sec, [field]: value } : sec)
    );
  };

  const filteredInquiries = inquiries.filter(inq => 
    inq.name.includes(inquirySearch) || 
    inq.phone.includes(inquirySearch) || 
    inq.email.includes(inquirySearch) ||
    inq.serviceType.includes(inquirySearch)
  );

  const currentEditingSection = sectionsData.find(s => s.sectionId === selectedSectionId) || sectionsData[0];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-5xl w-full max-h-[92vh] overflow-hidden flex flex-col shadow-2xl border border-slate-200 text-left">
        
        {/* Modal Header */}
        <div className="p-4 sm:p-5 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold bg-teal-500/20 text-teal-300 px-2 py-0.5 rounded border border-teal-500/30">
                  웹스튜디오 통합 관리자 시스템
                </span>
                {isAuthenticated && (
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/30 font-bold">
                    인증됨
                  </span>
                )}
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-white mt-0.5">
                민트클 관리자 전용 패널 (Admin Panel)
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {isAuthenticated && (
              <button
                onClick={handleLogout}
                className="px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 transition-colors"
              >
                로그아웃
              </button>
            )}
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* NOT AUTHENTICATED - CLEAN PASSWORD POPUP DIALOG */}
        {!isAuthenticated ? (
          <div className="p-8 sm:p-10 max-w-sm mx-auto w-full my-auto text-center space-y-5">
            <div className="w-14 h-14 bg-teal-50 rounded-2xl border border-teal-200 flex items-center justify-center mx-auto text-teal-600 shadow-2xs">
              <Lock className="w-7 h-7" />
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-slate-900">관리자 인증</h3>
              <p className="text-xs text-slate-500 mt-1">
                관리자 전용 기능에 접근하려면 비밀번호를 입력해주세요.
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4 text-left">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  비밀번호
                </label>
                <input
                  type="password"
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  placeholder="비밀번호 입력"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 font-mono"
                  autoFocus
                />
              </div>

              {authError && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-600 font-medium text-center">
                  {authError}
                </div>
              )}

              <button
                type="submit"
                className="w-full py-3 rounded-xl font-bold text-sm text-white bg-teal-600 hover:bg-teal-700 shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>확인 및 로그인</span>
              </button>
            </form>
          </div>
        ) : (
          /* AUTHENTICATED ADMIN DASHBOARD */
          <div className="flex-1 flex flex-col overflow-hidden">
            
            {/* Top Navigation Tabs */}
            <div className="px-6 py-3 bg-slate-100 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs font-bold">
              <div className="flex gap-2">
                <button
                  onClick={() => setActiveTab('inquiries')}
                  className={`px-3.5 py-2 rounded-xl cursor-pointer flex items-center gap-2 transition-all ${
                    activeTab === 'inquiries' ? 'bg-teal-600 text-white shadow-xs' : 'bg-white text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  <Inbox className="w-4 h-4" />
                  <span>수집된 고객 문의 ({inquiries.length}건)</span>
                </button>
                
                <button
                  onClick={() => setActiveTab('planning')}
                  className={`px-3.5 py-2 rounded-xl cursor-pointer flex items-center gap-2 transition-all ${
                    activeTab === 'planning' ? 'bg-teal-600 text-white shadow-xs' : 'bg-white text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  <Edit3 className="w-4 h-4" />
                  <span>상세 기획서 나만 보기 & 수정</span>
                </button>

                <button
                  onClick={() => setActiveTab('security')}
                  className={`px-3.5 py-2 rounded-xl cursor-pointer flex items-center gap-2 transition-all ${
                    activeTab === 'security' ? 'bg-teal-600 text-white shadow-xs' : 'bg-white text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  <Key className="w-4 h-4" />
                  <span>비밀번호 설정</span>
                </button>
              </div>

              {/* View Full Planning Spec Modal trigger */}
              <button
                onClick={onOpenPlanningModal}
                className="px-3 py-1.5 rounded-lg text-xs font-bold text-teal-800 bg-teal-50 border border-teal-200 hover:bg-teal-100 cursor-pointer flex items-center gap-1.5"
              >
                <Eye className="w-3.5 h-3.5 text-teal-600" />
                <span>기획서 문서 뷰어 열기</span>
              </button>
            </div>

            {/* TAB 1: INQUIRIES MANAGEMENT */}
            {activeTab === 'inquiries' && (
              <div className="p-6 overflow-y-auto flex-1 space-y-5 bg-slate-50/50">
                
                {/* Search & Actions Bar */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-white p-4 rounded-xl border border-slate-200">
                  <div className="relative w-full sm:w-72">
                    <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                    <input
                      type="text"
                      value={inquirySearch}
                      onChange={(e) => setInquirySearch(e.target.value)}
                      placeholder="이름, 전화번호, 이메일 검색..."
                      className="w-full pl-9 pr-3 py-1.5 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>

                  <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                    <a
                      href="https://formspree.io/f/xbgrrkee"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg text-xs font-bold text-slate-700 bg-slate-100 border border-slate-200 hover:bg-slate-200 flex items-center gap-1"
                    >
                      <span>Formspree 대시보드 바로가기</span>
                      <ExternalLink className="w-3 h-3 text-slate-500" />
                    </a>
                    {inquiries.length > 0 && (
                      <button
                        onClick={handleClearAllInquiries}
                        className="px-3 py-1.5 rounded-lg text-xs font-bold text-red-700 bg-red-50 border border-red-200 hover:bg-red-100 flex items-center gap-1 cursor-pointer"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        <span>전체 초기화</span>
                      </button>
                    )}
                  </div>
                </div>

                {/* Inquiries Table & Detail */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                  
                  {/* Left List */}
                  <div className="lg:col-span-1 bg-white rounded-xl border border-slate-200 overflow-hidden flex flex-col max-h-[500px]">
                    <div className="p-3 bg-slate-100 border-b border-slate-200 text-xs font-bold text-slate-700 flex justify-between items-center">
                      <span>접수 내역 ({filteredInquiries.length}건)</span>
                      <span className="text-[10px] text-teal-700 font-mono">Formspree & Local</span>
                    </div>

                    <div className="divide-y divide-slate-100 overflow-y-auto flex-1">
                      {filteredInquiries.length === 0 ? (
                        <div className="p-8 text-center text-xs text-slate-400 space-y-2">
                          <Inbox className="w-8 h-8 mx-auto text-slate-300" />
                          <p>접수된 상담 문의가 없습니다.</p>
                        </div>
                      ) : (
                        filteredInquiries.map((inq) => (
                          <button
                            key={inq.id}
                            onClick={() => setSelectedInquiry(inq)}
                            className={`w-full p-3.5 text-left transition-colors cursor-pointer block ${
                              selectedInquiry?.id === inq.id
                                ? 'bg-teal-50/80 border-l-4 border-teal-600'
                                : 'hover:bg-slate-50'
                            }`}
                          >
                            <div className="flex items-center justify-between text-xs mb-1">
                              <span className="font-bold text-slate-900">{inq.name}</span>
                              <span className="text-[10px] text-slate-400">{inq.createdAt}</span>
                            </div>
                            <div className="text-[11px] text-teal-700 font-semibold mb-1">
                              {inq.serviceType}
                            </div>
                            <p className="text-[11px] text-slate-500 line-clamp-1">
                              {inq.phone} • {inq.email}
                            </p>
                          </button>
                        ))
                      )}
                    </div>
                  </div>

                  {/* Right Detail Pane */}
                  <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 p-5 overflow-y-auto max-h-[500px]">
                    {selectedInquiry ? (
                      <div className="space-y-4 text-xs">
                        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                          <div>
                            <span className="text-[10px] font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
                              상담 신청서 상세
                            </span>
                            <h3 className="text-base font-bold text-slate-900 mt-1">
                              {selectedInquiry.name} 님의 문의
                            </h3>
                          </div>
                          <button
                            onClick={() => handleDeleteInquiry(selectedInquiry.id)}
                            className="px-2.5 py-1.5 rounded-lg text-xs font-bold text-red-600 bg-red-50 hover:bg-red-100 flex items-center gap-1 cursor-pointer"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                            <span>삭제</span>
                          </button>
                        </div>

                        <div className="grid grid-cols-2 gap-3 text-xs">
                          <div className="p-3 bg-slate-50 rounded-lg">
                            <span className="text-[10px] text-slate-400 block font-bold">성함 / 회사명</span>
                            <span className="font-semibold text-slate-800">{selectedInquiry.name} ({selectedInquiry.companyName || '미입력'})</span>
                          </div>
                          <div className="p-3 bg-slate-50 rounded-lg">
                            <span className="text-[10px] text-slate-400 block font-bold">연락처</span>
                            <span className="font-semibold text-slate-800">{selectedInquiry.phone}</span>
                          </div>
                          <div className="p-3 bg-slate-50 rounded-lg">
                            <span className="text-[10px] text-slate-400 block font-bold">이메일</span>
                            <span className="font-semibold text-slate-800">{selectedInquiry.email}</span>
                          </div>
                          <div className="p-3 bg-slate-50 rounded-lg">
                            <span className="text-[10px] text-slate-400 block font-bold">희망 제작 유형</span>
                            <span className="font-semibold text-teal-700">{selectedInquiry.serviceType}</span>
                          </div>
                          <div className="p-3 bg-slate-50 rounded-lg">
                            <span className="text-[10px] text-slate-400 block font-bold">예산 및 산출 견적</span>
                            <span className="font-semibold text-slate-800">
                              희망: {selectedInquiry.estimatedBudget} / 산출: {selectedInquiry.estimatedPrice ? `${selectedInquiry.estimatedPrice.toLocaleString()}원` : '미산출'}
                            </span>
                          </div>
                          <div className="p-3 bg-slate-50 rounded-lg">
                            <span className="text-[10px] text-slate-400 block font-bold">접수 시각</span>
                            <span className="font-semibold text-slate-800">{selectedInquiry.createdAt}</span>
                          </div>
                        </div>

                        <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                          <span className="text-[10px] text-slate-400 font-bold uppercase block">상세 요청 사항</span>
                          <p className="text-slate-700 leading-relaxed whitespace-pre-wrap text-xs">
                            {selectedInquiry.details || '내용 없음'}
                          </p>
                        </div>

                        <div className="p-3 bg-teal-50 border border-teal-200 rounded-xl text-[11px] text-teal-800 flex items-center justify-between">
                          <span>Formspree 수집 URL: <strong>https://formspree.io/f/xbgrrkee</strong></span>
                          <a
                            href={`mailto:${selectedInquiry.email}`}
                            className="px-3 py-1 bg-teal-600 text-white rounded-lg font-bold text-xs hover:bg-teal-700"
                          >
                            이메일 답장 보내기
                          </a>
                        </div>
                      </div>
                    ) : (
                      <div className="h-full min-h-[300px] flex items-center justify-center text-center text-xs text-slate-400">
                        좌측 항목을 선택하면 상세 내용을 확인하실 수 있습니다.
                      </div>
                    )}
                  </div>

                </div>

              </div>
            )}

            {/* TAB 2: PLANNING SPEC EDITOR (ADMIN ONLY) */}
            {activeTab === 'planning' && (
              <div className="p-6 overflow-y-auto flex-1 space-y-6 bg-slate-50/50">
                
                <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <Edit3 className="w-4 h-4 text-amber-700 shrink-0" />
                    <span>
                      <strong>관리자 전용 상세 기획서 편집기:</strong> 일반 유저에게는 기획서가 노출되지 않으며, 이곳에서 직접 수정한 내용은 즉시 브라우저에 반영됩니다.
                    </span>
                  </div>
                  <div className="flex gap-2 shrink-0">
                    <button
                      onClick={handleResetPlanningToDefault}
                      className="px-3 py-1.5 rounded-lg text-xs font-bold text-slate-700 bg-white border border-slate-300 hover:bg-slate-100 cursor-pointer flex items-center gap-1"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>원본 복원</span>
                    </button>
                    <button
                      onClick={handleSavePlanningEdits}
                      className="px-3.5 py-1.5 rounded-lg text-xs font-bold text-white bg-teal-600 hover:bg-teal-700 cursor-pointer flex items-center gap-1 shadow-xs"
                    >
                      <Save className="w-3.5 h-3.5" />
                      <span>기획서 저장</span>
                    </button>
                  </div>
                </div>

                {/* Brand Spec Summary Edit */}
                <div className="bg-white rounded-xl p-5 border border-slate-200 space-y-4 text-xs">
                  <h3 className="font-bold text-slate-900 text-sm border-b border-slate-100 pb-2">
                    1. 브랜드 핵심 정의 수정
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">브랜드명</label>
                      <input
                        type="text"
                        value={brandData.brandName}
                        onChange={(e) => setBrandData({ ...brandData, brandName: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">타깃 고객군</label>
                      <input
                        type="text"
                        value={brandData.targetAudience}
                        onChange={(e) => setBrandData({ ...brandData, targetAudience: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">핵심 가치 약속</label>
                      <input
                        type="text"
                        value={brandData.coreValue}
                        onChange={(e) => setBrandData({ ...brandData, coreValue: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs"
                      />
                    </div>
                  </div>
                </div>

                {/* Section Copywriting Edit */}
                <div className="bg-white rounded-xl p-5 border border-slate-200 space-y-4 text-xs">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
                    <h3 className="font-bold text-slate-900 text-sm">
                      2. 섹션별 명세 문구 수정 (Select Section)
                    </h3>
                    
                    {/* Select Section Pill Buttons */}
                    <div className="flex flex-wrap gap-1">
                      {sectionsData.map((sec, idx) => (
                        <button
                          key={sec.sectionId}
                          onClick={() => setSelectedSectionId(sec.sectionId)}
                          className={`px-2.5 py-1 rounded-lg text-[11px] font-bold cursor-pointer ${
                            selectedSectionId === sec.sectionId
                              ? 'bg-teal-600 text-white'
                              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                          }`}
                        >
                          {idx + 1}. {sec.sectionTitle.split('-')[0]}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Edit Form for Selected Section */}
                  {currentEditingSection && (
                    <div className="space-y-4 pt-2">
                      <div className="p-3 bg-teal-50/60 rounded-xl border border-teal-200 font-bold text-teal-900 text-xs">
                        현재 수정 중인 섹션: {currentEditingSection.sectionTitle}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block font-bold text-slate-700 mb-1">섹션 목적</label>
                          <input
                            type="text"
                            value={currentEditingSection.purpose}
                            onChange={(e) => handleUpdateSection('purpose', e.target.value)}
                            className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs"
                          />
                        </div>

                        <div>
                          <label className="block font-bold text-slate-700 mb-1">레이아웃 구조</label>
                          <input
                            type="text"
                            value={currentEditingSection.layoutType}
                            onChange={(e) => handleUpdateSection('layoutType', e.target.value)}
                            className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs"
                          />
                        </div>

                        <div className="md:col-span-2">
                          <label className="block font-bold text-slate-700 mb-1">메인 타이틀 (Headline)</label>
                          <input
                            type="text"
                            value={currentEditingSection.headline}
                            onChange={(e) => handleUpdateSection('headline', e.target.value)}
                            className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs font-bold text-slate-900"
                          />
                        </div>

                        <div className="md:col-span-2">
                          <label className="block font-bold text-slate-700 mb-1">서브 타이틀 (Sub-headline)</label>
                          <input
                            type="text"
                            value={currentEditingSection.subheadline}
                            onChange={(e) => handleUpdateSection('subheadline', e.target.value)}
                            className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs"
                          />
                        </div>

                        <div className="md:col-span-2">
                          <label className="block font-bold text-slate-700 mb-1">본문 문구 (Body Copy)</label>
                          <textarea
                            rows={3}
                            value={currentEditingSection.bodyText}
                            onChange={(e) => handleUpdateSection('bodyText', e.target.value)}
                            className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs"
                          />
                        </div>

                        <div>
                          <label className="block font-bold text-slate-700 mb-1">버튼/CTA 문구</label>
                          <input
                            type="text"
                            value={currentEditingSection.buttonText}
                            onChange={(e) => handleUpdateSection('buttonText', e.target.value)}
                            className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs font-bold text-teal-700"
                          />
                        </div>

                        <div>
                          <label className="block font-bold text-slate-700 mb-1">디자인 가이드 노하우</label>
                          <input
                            type="text"
                            value={currentEditingSection.designNotes}
                            onChange={(e) => handleUpdateSection('designNotes', e.target.value)}
                            className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs"
                          />
                        </div>
                      </div>

                      <div className="pt-3 flex justify-end">
                        <button
                          onClick={handleSavePlanningEdits}
                          className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-teal-600 hover:bg-teal-700 flex items-center gap-1.5 cursor-pointer shadow-xs"
                        >
                          <Save className="w-4 h-4" />
                          <span>기획서 수정본 저장하기</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>

              </div>
            )}

            {/* TAB 3: ADMIN SECURITY & PASSWORD SETTINGS */}
            {activeTab === 'security' && (
              <div className="p-8 max-w-lg mx-auto w-full my-auto space-y-6">
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
                  <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                    <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center font-bold">
                      <Key className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm">관리자 비밀번호 변경</h3>
                      <p className="text-xs text-slate-500">새로운 관리자 접근 비밀번호를 설정합니다.</p>
                    </div>
                  </div>

                  <form onSubmit={handleChangePassword} className="space-y-4 text-xs">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">현재 상태</label>
                      <input
                        type="password"
                        disabled
                        value="••••••••••••"
                        className="w-full px-3 py-2.5 rounded-xl border border-slate-200 bg-slate-100 text-slate-500 font-mono"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">변경할 새 비밀번호</label>
                      <input
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        placeholder="새 비밀번호 입력 (4자 이상)"
                        className="w-full px-3 py-2.5 rounded-xl border border-slate-300 font-mono focus:outline-none focus:ring-2 focus:ring-teal-500"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 rounded-xl font-bold text-xs text-white bg-teal-600 hover:bg-teal-700 shadow-xs transition-all cursor-pointer"
                    >
                      비밀번호 변경 적용
                    </button>
                  </form>
                </div>
              </div>
            )}

          </div>
        )}

        {/* Modal Footer */}
        <div className="p-4 bg-slate-100 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <span>관리자 패널: Formspree 데이터 수집 & 기획서 관리</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl font-semibold text-slate-700 bg-white border border-slate-300 hover:bg-slate-200 cursor-pointer"
          >
            닫기
          </button>
        </div>

      </div>
    </div>
  );
};
