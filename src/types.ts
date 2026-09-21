export type Language = 'en' | 'ko';

export interface ProjectItem {
  id: string;
  title: { en: string; ko: string };
  role: { en: string; ko: string };
  organization: { en: string; ko: string };
  period: { en: string; ko: string };
  location: { en: string; ko: string };
  category: 'leadership' | 'climate' | 'global' | 'research';
  badge: { en: string; ko: string };
  description: { en: string; ko: string };
  highlights: { en: string[]; ko: string[] };
  skills: string[];
}

export interface WorkExperienceItem {
  id: string;
  role: { en: string; ko: string };
  department: { en: string; ko: string };
  organization: { en: string; ko: string };
  period: { en: string; ko: string };
  location: { en: string; ko: string };
  details: { en: string[]; ko: string[] };
  tag: { en: string; ko: string };
}

export interface AwardItem {
  id: string;
  title: { en: string; ko: string };
  organization: { en: string; ko: string };
  date: { en: string; ko: string };
  description: { en: string; ko: string };
  badge: { en: string; ko: string };
}

export interface ExtraExperienceItem {
  id: string;
  title: { en: string; ko: string };
  organization?: { en: string; ko: string };
  date: { en: string; ko: string };
  description?: { en: string; ko: string };
  category: 'global' | 'climate' | 'koica' | 'community';
}

export interface SkillItem {
  name: string;
  level?: string;
  tag?: string;
  percentage?: number;
  score?: number; // 1 to 5 scale
}

export interface SkillCategory {
  id: string;
  name: { en: string; ko: string };
  iconName: string;
  description: { en: string; ko: string };
  skills: SkillItem[];
}

export interface CertificateItem {
  id: string;
  title: { en: string; ko: string };
  issuer: { en: string; ko: string };
  date: { en: string; ko: string };
  category: { en: string; ko: string };
  status: { en: string; ko: string };
  description: { en: string; ko: string };
}

export interface FaqItem {
  question: { en: string; ko: string };
  answer: { en: string; ko: string };
}
