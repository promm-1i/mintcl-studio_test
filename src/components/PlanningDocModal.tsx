import React, { useState } from 'react';
import { BRAND_SPECIFICATION, PLANNING_SECTIONS_SPEC } from '../data/planningSpecData';
import { 
  FileText, 
  X, 
  Copy, 
  Check, 
  Palette, 
  Layout, 
  Layers, 
  Type, 
  Compass, 
  Download,
  Sparkles
} from 'lucide-react';

interface PlanningDocModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShowToast: (msg: string) => void;
}

export const PlanningDocModal: React.FC<PlanningDocModalProps> = ({
  isOpen,
  onClose,
  onShowToast,
}) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'all' | 'sections' | 'design' | 'sitemap'>('all');

  if (!isOpen) return null;

  const handleCopyText = () => {
    let fullText = `=========================================\n`;
    fullText += `민트클 웹스튜디오 (Mintcle Web Studio) - 상세 기획서\n`;
    fullText += `=========================================\n\n`;

    fullText += `[1. 브랜드 핵심 정의]\n`;
    fullText += `• 브랜드명: ${BRAND_SPECIFICATION.brandName}\n`;
    fullText += `• 타깃 고객: ${BRAND_SPECIFICATION.targetAudience}\n`;
    fullText += `• 핵심 가치: ${BRAND_SPECIFICATION.coreValue}\n\n`;

    fullText += `[2. 디자인 시스템 및 톤앤매너]\n`;
    fullText += `• 컬러 팔레트:\n`;
    BRAND_SPECIFICATION.designDirection.colorPalette.forEach(c => {
      fullText += `  - ${c.role}: ${c.name} (${c.hex}) - ${c.desc}\n`;
    });
    fullText += `• 타이포그래피: ${BRAND_SPECIFICATION.designDirection.typography[0].font}\n`;
    fullText += `• 레이아웃 그리드: ${BRAND_SPECIFICATION.designDirection.layoutGrid}\n`;
    fullText += `• 톤앤매너: ${BRAND_SPECIFICATION.designDirection.toneAndVoice}\n\n`;

    fullText += `[3. 전체 사이트 구성 및 정보 구조(Sitemap)]\n`;
    BRAND_SPECIFICATION.siteMap.forEach((m, idx) => {
      fullText += `${idx + 1}. ${m.name}: ${m.subSections.join(', ')}\n`;
    });
    fullText += `\n[4. 섹션별 명세 (Headlines, Body, Buttons, Design Notes)]\n\n`;

    PLANNING_SECTIONS_SPEC.forEach((sec, idx) => {
      fullText += `-----------------------------------------\n`;
      fullText += `섹션 ${idx + 1}: ${sec.sectionTitle}\n`;
      fullText += `-----------------------------------------\n`;
      fullText += `• 목적: ${sec.purpose}\n`;
      fullText += `• 레이아웃: ${sec.layoutType}\n`;
      fullText += `• 메인 타이틀: ${sec.headline}\n`;
      fullText += `• 서브 타이틀: ${sec.subheadline}\n`;
      fullText += `• 본문 설명: ${sec.bodyText}\n`;
      fullText += `• 버튼 문구: ${sec.buttonText}\n`;
      fullText += `• 디자인 가이드: ${sec.designNotes}\n\n`;
    });

    navigator.clipboard.writeText(fullText);
    setCopied(true);
    onShowToast('전체 상세 기획서 내용이 클립보드에 복사되었습니다.');
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div id="planning-spec-modal-overlay" className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-5xl w-full max-h-[92vh] overflow-hidden flex flex-col shadow-2xl border border-slate-200 text-left">
        
        {/* Modal Header */}
        <div className="p-4 sm:p-6 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center font-bold">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold bg-teal-500/20 text-teal-300 px-2 py-0.5 rounded border border-teal-500/30">
                  웹스튜디오 기획 문서
                </span>
                <span className="text-xs text-slate-400">Ver 1.0</span>
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-white mt-0.5">
                민트클 웹스튜디오 전체 상세 기획서 (Specification)
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              id="copy-planning-spec-btn"
              onClick={handleCopyText}
              className="px-3 py-2 rounded-xl text-xs font-bold bg-teal-600 hover:bg-teal-700 text-white flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs"
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? '복사 완료' : '기획서 텍스트 복사'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Navigation Tabs inside Modal */}
        <div className="px-6 py-3 bg-slate-100 border-b border-slate-200 flex flex-wrap gap-2 text-xs font-bold">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-3 py-1.5 rounded-lg cursor-pointer ${
              activeTab === 'all' ? 'bg-teal-600 text-white' : 'bg-white text-slate-700 hover:bg-slate-200'
            }`}
          >
            전체 문서 보기
          </button>
          <button
            onClick={() => setActiveTab('sections')}
            className={`px-3 py-1.5 rounded-lg cursor-pointer ${
              activeTab === 'sections' ? 'bg-teal-600 text-white' : 'bg-white text-slate-700 hover:bg-slate-200'
            }`}
          >
            섹션별 상세 문구 명세
          </button>
          <button
            onClick={() => setActiveTab('design')}
            className={`px-3 py-1.5 rounded-lg cursor-pointer ${
              activeTab === 'design' ? 'bg-teal-600 text-white' : 'bg-white text-slate-700 hover:bg-slate-200'
            }`}
          >
            디자인 시스템 가이드
          </button>
          <button
            onClick={() => setActiveTab('sitemap')}
            className={`px-3 py-1.5 rounded-lg cursor-pointer ${
              activeTab === 'sitemap' ? 'bg-teal-600 text-white' : 'bg-white text-slate-700 hover:bg-slate-200'
            }`}
          >
            정보 구조 (Sitemap)
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 bg-slate-50/50 text-slate-800 font-sans">
          
          {/* BRAND SUMMARY */}
          {(activeTab === 'all' || activeTab === 'design') && (
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs space-y-4">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
                <Compass className="w-5 h-5 text-teal-600" />
                <span>1. 브랜드 수립 방향 및 기본 컨셉</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-800 block">브랜드 명칭</span>
                  <span className="text-slate-600 font-medium">{BRAND_SPECIFICATION.brandName}</span>
                </div>
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-800 block">타깃 고객군</span>
                  <span className="text-slate-600 font-medium">{BRAND_SPECIFICATION.targetAudience}</span>
                </div>
                <div className="p-3.5 bg-teal-50/60 rounded-xl border border-teal-200">
                  <span className="font-bold text-teal-900 block">핵심 가치 약속</span>
                  <span className="text-teal-800 font-medium">{BRAND_SPECIFICATION.coreValue}</span>
                </div>
              </div>
            </div>
          )}

          {/* DESIGN SYSTEM SPECIFICATION */}
          {(activeTab === 'all' || activeTab === 'design') && (
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs space-y-4">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
                <Palette className="w-5 h-5 text-teal-600" />
                <span>2. 디자인 방향 및 색상 가이드</span>
              </h3>

              {/* Color Palette Table */}
              <div className="space-y-2">
                <span className="text-xs font-bold text-slate-700 block">컬러 팔레트 (Color Tokens):</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {BRAND_SPECIFICATION.designDirection.colorPalette.map((col, idx) => (
                    <div key={idx} className="p-3 rounded-xl border border-slate-200 bg-slate-50 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg shrink-0 border border-slate-300 shadow-2xs" style={{
                        backgroundColor: col.hex.includes('#0D9488') ? '#0D9488' : col.hex.includes('#0F172A') ? '#0F172A' : '#F8FAFC'
                      }} />
                      <div className="text-xs">
                        <span className="font-bold text-slate-800 block">{col.role}</span>
                        <span className="text-[11px] text-slate-500 font-mono">{col.hex}</span>
                        <p className="text-[10px] text-slate-400 mt-0.5">{col.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tone of voice */}
              <div className="p-3.5 bg-slate-100 rounded-xl text-xs text-slate-700 leading-relaxed">
                <strong>톤앤매너 원칙:</strong> {BRAND_SPECIFICATION.designDirection.toneAndVoice}
              </div>
            </div>
          )}

          {/* SITEMAP SPECIFICATION */}
          {(activeTab === 'all' || activeTab === 'sitemap') && (
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs space-y-4">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
                <Layers className="w-5 h-5 text-teal-600" />
                <span>3. 정보 구조 및 네비게이션 맵 (Site Map)</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {BRAND_SPECIFICATION.siteMap.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl border border-slate-200 bg-slate-50/70 space-y-2 text-xs">
                    <span className="font-extrabold text-teal-800 bg-teal-100 px-2 py-0.5 rounded text-[10px]">
                      {idx + 1}. {item.name}
                    </span>
                    <ul className="space-y-1 pl-1">
                      {item.subSections.map((sub, sIdx) => (
                        <li key={sIdx} className="text-slate-600 flex items-center gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-teal-500" />
                          <span>{sub}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SECTION-BY-SECTION COPYWRITING SPECIFICATION */}
          {(activeTab === 'all' || activeTab === 'sections') && (
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <Layout className="w-5 h-5 text-teal-600" />
                <span>4. 섹션별 명확한 타이틀, 본문, 버튼 문구 기획서</span>
              </h3>

              <div className="space-y-4">
                {PLANNING_SECTIONS_SPEC.map((sec, idx) => (
                  <div key={sec.sectionId} className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-2xs space-y-4 text-xs">
                    
                    {/* Section Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-lg bg-teal-600 text-white font-bold flex items-center justify-center text-xs shrink-0">
                          {idx + 1}
                        </span>
                        <h4 className="text-sm font-bold text-slate-900">
                          {sec.sectionTitle}
                        </h4>
                      </div>
                      <span className="text-[11px] text-teal-700 bg-teal-50 px-2.5 py-0.5 rounded border border-teal-200 font-medium">
                        레이아웃: {sec.layoutType}
                      </span>
                    </div>

                    {/* Section Content Details */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      
                      <div className="space-y-3">
                        <div>
                          <span className="font-bold text-slate-500 text-[10px] uppercase block">목적 및 서술 방향</span>
                          <p className="text-slate-800 font-medium">{sec.purpose}</p>
                        </div>

                        <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                          <span className="font-bold text-teal-800 text-[10px] uppercase block">메인 타이틀 (Headline)</span>
                          <p className="text-sm font-extrabold text-slate-900">{sec.headline}</p>
                        </div>

                        <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                          <span className="font-bold text-slate-600 text-[10px] uppercase block">서브 타이틀 (Sub-headline)</span>
                          <p className="text-xs font-semibold text-slate-700">{sec.subheadline}</p>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                          <span className="font-bold text-slate-600 text-[10px] uppercase block">본문 설명 문구 (Body Copy)</span>
                          <p className="text-slate-700 leading-relaxed">{sec.bodyText}</p>
                        </div>

                        <div className="p-3 bg-teal-50/80 rounded-xl border border-teal-200 space-y-1">
                          <span className="font-bold text-teal-900 text-[10px] uppercase block">버튼/CTA 문구 (Button Copy)</span>
                          <p className="text-xs font-extrabold text-teal-800">{sec.buttonText}</p>
                        </div>

                        <div className="p-3 bg-slate-100 rounded-xl space-y-1">
                          <span className="font-bold text-slate-500 text-[10px] uppercase block">디자인 및 스타일 노하우</span>
                          <p className="text-slate-600 text-[11px]">{sec.designNotes}</p>
                        </div>
                      </div>

                    </div>

                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-100 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <span className="text-slate-500">
            민트클 웹스튜디오 기획서가 브라우저에 실시간 반영되어 적용되었습니다.
          </span>
          <div className="flex gap-2">
            <button
              onClick={handleCopyText}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-teal-600 text-white hover:bg-teal-700 cursor-pointer flex items-center gap-1.5"
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>기획서 텍스트 복사</span>
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl font-semibold text-slate-700 bg-white border border-slate-300 hover:bg-slate-200 cursor-pointer"
            >
              닫기
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
