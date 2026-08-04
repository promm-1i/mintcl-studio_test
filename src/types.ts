export type SectionId = 'home' | 'services' | 'portfolio' | 'process' | 'faq' | 'inquiry';

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  target: string;
  description: string;
  recommendedPages: string[];
  keyFeatures: string[];
  estimatedDays: string;
  recommendedFor: string;
  color: string;
  iconName: string;
}

export interface PortfolioSample {
  id: string;
  title: string;
  type: string;
  category: 'cafe' | 'company' | 'interior' | 'beauty' | 'app';
  tagline: string;
  description: string;
  colorTheme: string;
  layoutFeatures: string[];
  targetAudience: string;
  coverImage: string;
  samplePath: string;
  isConceptWork: boolean;
  tags: string[];
  mockupDetails: {
    heroHeading: string;
    heroSub: string;
    primaryCta: string;
    sections: { name: string; desc: string }[];
  };
}

export interface ProcessStep {
  step: number;
  title: string;
  subtitle: string;
  duration: string;
  clientActions: string[];
  studioActions: string[];
  deliverables: string[];
}

export interface FaqItem {
  id: string;
  category: 'all' | 'cost' | 'timeline' | 'maintenance' | 'preparation' | 'trust';
  question: string;
  answer: string;
}

export interface InquiryFormData {
  id?: string;
  name: string;
  companyName?: string;
  phone: string;
  email: string;
  serviceType: string;
  estimatedBudget: string;
  targetDeadline: string;
  hasDomainHosting: 'yes' | 'no' | 'need_advice';
  details: string;
  createdAt?: string;
  selectedFeatures?: string[];
  estimatedPrice?: number;
}

export interface FeatureOption {
  id: string;
  name: string;
  desc: string;
  price: number;
}

export interface PlanningDocSection {
  sectionId: string;
  sectionTitle: string;
  purpose: string;
  layoutType: string;
  headline: string;
  subheadline: string;
  bodyText: string;
  buttonText: string;
  designNotes: string;
}
