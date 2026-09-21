import React from 'react';
import { Language } from '../types';
import { personalInfo } from '../data/portfolioData';
import { Github, Globe, ArrowUp, CheckCircle, ExternalLink } from 'lucide-react';

interface FooterProps {
  lang: Language;
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-stone-200 bg-[#FBF9F5] py-12 text-stone-600 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-stone-200">
          
          {/* Brand Info */}
          <div className="flex items-center gap-3 text-center md:text-left">
            <span className="w-8 h-8 rounded-full bg-stone-900 text-[#FBF9F5] flex items-center justify-center font-serif text-sm font-semibold">
              G
            </span>
            <div>
              <div className="font-serif text-base font-semibold text-stone-900">
                {lang === 'en' ? personalInfo.name.en : personalInfo.name.ko}
              </div>
              <p className="text-[11px] text-stone-500">
                {lang === 'en'
                  ? 'Busan University of Foreign Studies · Student Body President'
                  : '부산외국어대학교 국제개발협력학부 학생회장'}
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-stone-600 font-medium uppercase tracking-wider">
            <a href="#about" className="hover:text-stone-900 transition-colors">
              {lang === 'en' ? 'About' : '소개'}
            </a>
            <a href="#majors" className="hover:text-stone-900 transition-colors">
              {lang === 'en' ? '4 Majors' : '융합전공'}
            </a>
            <a href="#projects" className="hover:text-stone-900 transition-colors">
              {lang === 'en' ? 'Projects' : '프로젝트'}
            </a>
            <a href="#experience" className="hover:text-stone-900 transition-colors">
              {lang === 'en' ? 'Experience' : '경력'}
            </a>
            <button onClick={onOpenResume} className="hover:text-stone-900 transition-colors uppercase">
              {lang === 'en' ? 'Curriculum Vitae' : '이력서(CV)'}
            </button>
            <a href="#contact" className="hover:text-stone-900 transition-colors">
              {lang === 'en' ? 'Contact' : '연락처'}
            </a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 px-3 py-1.5 rounded-full border border-stone-300 hover:bg-stone-100 text-stone-700 transition-colors"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>{lang === 'en' ? 'Top' : '맨 위로'}</span>
          </button>
        </div>

        {/* Bottom Bar: Copyright & Vercel / GitHub notice */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-500">
          <div>
            © {new Date().getFullYear()} {personalInfo.name.en} ({personalInfo.name.ko}). All rights reserved.
          </div>

          {/* Deployment target badge explicitly honoring user's intent */}
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-stone-100 border border-stone-200 text-stone-700 font-mono text-[10px]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              GitHub & Vercel Deployment Ready
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
