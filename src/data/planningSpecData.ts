import { PlanningDocSection } from '../types';

export interface BrandSpec {
  brandName: string;
  targetAudience: string;
  coreValue: string;
  designDirection: {
    colorPalette: { role: string; name: string; hex: string; desc: string }[];
    typography: { font: string; usage: string }[];
    layoutGrid: string;
    toneAndVoice: string;
  };
  siteMap: { id: string; name: string; subSections: string[] }[];
}

export const BRAND_SPECIFICATION: BrandSpec = {
  brandName: '민트클 웹스튜디오 (Mintcle Web Studio)',
  targetAudience: '신뢰감 있는 웹사이트가 필요한 기업, 브랜드, 소상공인, 프리랜서',
  coreValue: '과장 없는 투명함, 명확한 화면 기획, 직관적인 반응형 디자인과 높은 전달력',
  designDirection: {
    colorPalette: [
      { role: 'Primary Background', name: 'Clean Snow & Off-White', hex: '#F8FAFC / #FFFFFF', desc: '눈이 편안하고 여백이 돋보이는 모던 라이트 캔버스' },
      { role: 'Mint Accent (Point)', name: 'Fresh Emerald Mint', hex: '#0D9488 / #10B981', desc: '과도하지 않게 배지, CTA 버튼, 하이라이트에 포인트로만 사용' },
      { role: 'Text Primary', name: 'Deep Graphite', hex: '#0F172A', desc: '가독성이 높은 짙은 네이비 인디고 텍스트' },
      { role: 'Text Secondary', name: 'Cool Slate Gray', hex: '#475569', desc: '부드러운 설명글 및 보조 텍스트' },
      { role: 'Card & Border', name: 'Subtle Slate Border', hex: '#E2E8F0', desc: '1px 깔끔한 직선 경계선으로 구조 강조' },
    ],
    typography: [
      { font: 'Plus Jakarta Sans / Pretendard', usage: '메인 헤드라인 및 대표 타이틀 (Bold, 600-800)' },
      { font: 'System Modern UI Font Stack', usage: '본문 텍스트 (Regular/Medium 16px, 1.6 line-height)' },
    ],
    layoutGrid: '12-Column Responsive Grid, max-width 1280px (7xl), 16px~32px fluid padding',
    toneAndVoice: '과장된 미사여구(최고, No.1)를 지양하고, 명확하고 친절하며 신뢰감 주는 어조 사용',
  },
  siteMap: [
    { id: 'home', name: 'HOME', subSections: ['Hero Visual', 'Quick Stats & Values', 'Service Preview', 'Interactive Estimator'] },
    { id: 'services', name: '서비스 소개', subSections: ['5대 서비스 상세', '추천 대상', '제공 페이지', '핵심 기능', '예상 일정'] },
    { id: 'portfolio', name: '포트폴리오 (샘플)', subSections: ['제작 가능 유형 갤러리', '유형별 필터', '인터랙티브 시안 프로토타입'] },
    { id: 'process', name: '제작 절차', subSections: ['5단계 프로세스', '작업 범위 (포함/미포함)', '고객 준비 사항'] },
    { id: 'faq', name: '자주 묻는 질문', subSections: ['카테고리 필터', '비용/기간/유지보수 FAQ', '투명한 안내'] },
    { id: 'inquiry', name: '문의하기', subSections: ['실시간 자동 견적 계산기', '맞춤 상담 신청 폼', '신청 내역 확인'] },
  ],
};

export const PLANNING_SECTIONS_SPEC: PlanningDocSection[] = [
  {
    sectionId: 'home-hero',
    sectionTitle: 'HOME - 히어로 섹션 (Main Banner)',
    purpose: '방문자에게 스튜디오의 핵심 가치(명확함, 투명함)를 직관적으로 전달하고 견적 문의 유도',
    layoutType: '2-Column Split Layout (좌측: 텍스트 & CTA / 우측: 실시간 견적 프리뷰 카드)',
    headline: '투명한 기획과 정돈된 디자인으로 만드는 웹사이트',
    subheadline: '기업과 소상공인의 목적에 꼭 맞춘 모듈형 웹사이트. 불필요한 거품 없이 명확한 프로세스로 완성합니다.',
    bodyText: '민트클 웹스튜디오는 과장된 홍보 대신 명확한 화면 구성, 100% 반응형 웹 표준 개발, 쉬운 운영 가이드를 약속합니다.',
    buttonText: '실시간 견적 계산하기 | 서비스 둘러보기',
    designNotes: '배경은 가벼운 백색/슬레이트 톤, 강조 배지에는 민트 보더와 살짝 비치는 민트 백그라운드 사용. CTA 버튼은 민트 에메랄드 메인 적용.',
  },
  {
    sectionId: 'services-detail',
    sectionTitle: '서비스 소개 - 5대 핵심 라인업',
    purpose: '고객의 비즈니스 형태에 가장 적합한 제작 유형을 선택할 수 있도록 구분',
    layoutType: '5-Tab System & Detailed Interactive Cards',
    headline: '비즈니스 성장에 맞춰 선택하는 5가지 맞춤 서비스',
    subheadline: '기업 브랜드, 소상공인 매장, 개인 포트폴리오, 랜딩페이지, 기존 사이트 리뉴얼까지 비즈니스 목적별 맞춤 제작을 제공합니다.',
    bodyText: '각 유형별 제공 페이지, 핵심 구현 기능, 추천 대상, 예상 소요 기간을 한눈에 비교할 수 있습니다.',
    buttonText: '이 서비스로 문의하기',
    designNotes: '상단 탭 선택 시 가벼운 모션 페이드 애니메이션 적용, 각 서비스 카드 내에는 포함 페이지 목록과 핵심 혜택을 체크리스트로 배치.',
  },
  {
    sectionId: 'portfolio-samples',
    sectionTitle: '포트폴리오 - 제작 가능 웹사이트 샘플 유형',
    purpose: '외주 실적을 허위 작성하지 않고, 제작 가능한 레이아웃과 디자인 품질을 투명하게 시증',
    layoutType: 'Filterable Grid (All / Corporate / SmallBiz / Portfolio / Landing / Renewal)',
    headline: '민트클 웹스튜디오가 제작 가능한 레이아웃 시안',
    subheadline: '실제 제작 가능한 디자인 구조와 반응형 인터페이스 시안을 카테고리별로 확인해 보세요.',
    bodyText: '모든 샘플 시안은 모바일 화면 및 데스크톱 환경에 최적화된 화면 구성을 갖추고 있습니다.',
    buttonText: '시안 미리보기 (인터랙티브 뷰어)',
    designNotes: '인터랙티브 모달로 라이브 데모 프레임 시뮬레이션 지원. 거짓 실적 표기를 전면 배제하여 높은 신뢰감 제공.',
  },
  {
    sectionId: 'process-scope',
    sectionTitle: '제작 절차 - 5단계 명확한 공정 & 작업 범위',
    purpose: '제작 시작부터 오픈까지 고객이 불안해하지 않도록 구체적인 단계와 준비사항 제시',
    layoutType: 'Numbered Step Cards + Scope Table (포함/미포함 구분)',
    headline: '체계적이고 예측 가능한 5단계 제작 프로세스',
    subheadline: '상담부터 도메인 연결까지 모든 단계에서 진행 상황을 명확하게 공유합니다.',
    bodyText: '고객님이 준비해 주실 사항과 스튜디오에서 진행하는 업무를 명확히 구분하여 착오 없는 결과를 만들어 냅니다.',
    buttonText: '자세한 작업 범위 보기',
    designNotes: '1~5번 숫자는 민트 컬러 원형 배지로 강조, 아래쪽에 고객 준비사항(로고, 원고)과 스튜디오 제공사항을 카드형 표로 구분.',
  },
  {
    sectionId: 'faq-transparency',
    sectionTitle: '자주 묻는 질문 - 투명한 안내',
    purpose: '비용, 기간, 신생 스튜디오에 대한 불안감 해결 및 궁금증 해소',
    layoutType: 'Category Filtered Accordion List',
    headline: '궁금하신 점을 사전에 명확하게 안내해 드립니다',
    subheadline: '비용 산정 방식부터 제작 기간, 유지보수 가이드까지 가장 많이 물으시는 답변을 정리했습니다.',
    bodyText: '원하시는 질문이 없다면 직관적인 1:1 상담 문의를 이용해 주세요.',
    buttonText: '1:1 맞춤 상담 신청하기',
    designNotes: '아코디언 토글 시 부드러운 개폐 모션 적용. 신생 스튜디오의 신뢰감 관련 질문에 정직한 답변 배치.',
  },
  {
    sectionId: 'inquiry-calculator',
    sectionTitle: '문의하기 - 실시간 자동 견적 계산기 & 맞춤 상담 폼',
    purpose: '방문자가 바로 예상 비용을 알아보고 직관적으로 제작 상담을 신청하도록 유도',
    layoutType: 'Interactive Form & Calculator (Side-by-side or Tabbed Toggle)',
    headline: '부담 없는 실시간 자동 견적산출 & 맞춤 상담',
    subheadline: '제작할 홈페이지 유형과 필요 옵션을 선택하면 즉시 예상 금액대를 확인하실 수 있습니다.',
    bodyText: '상담 신청을 남겨주시면 24시간 이내에 담당자가 검토 후 친절하고 구체적인 안내를 드립니다.',
    buttonText: '상담 신청 제출하기 | 실시간 계산하기',
    designNotes: '실시간으로 견적이 합산되어 표시되며, 제출 시 로컬 스토리지에 저장되어 내 신청 이력에서 확인 가능하도록 구현.',
  },
];
