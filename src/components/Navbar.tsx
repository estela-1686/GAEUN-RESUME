import React, { useState } from 'react';
import { Language } from '../types';
import { personalInfo } from '../data/portfolioData';
import { Globe, FileText, Mail, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, setLang, onOpenResume }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: { en: "About", ko: "소개" } },
    { href: "#majors", label: { en: "4 Majors", ko: "4대 전공 융합" } },
    { href: "#projects", label: { en: "Projects", ko: "프로젝트" } },
    { href: "#skills", label: { en: "Skills", ko: "전문 역량" } },
    { href: "#experience", label: { en: "Experience", ko: "경력 및 대외활동" } },
    { href: "#honors", label: { en: "Honors", ko: "수상 및 장학" } },
    { href: "#faq", label: { en: "FAQ", ko: "FAQ" } },
  ];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#FBF9F5]/90 border-b border-stone-200/70 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <span className="w-8 h-8 rounded-full bg-stone-900 text-[#FBF9F5] flex items-center justify-center font-serif text-base font-medium group-hover:scale-105 transition-transform">
            G
          </span>
          <div className="flex flex-col">
            <span className="font-serif text-lg tracking-tight font-medium text-stone-900 leading-tight">
              {lang === 'en' ? personalInfo.name.en : personalInfo.name.ko}
            </span>
            <span className="text-[11px] text-stone-500 font-sans tracking-wide uppercase">
              {lang === 'en' ? 'Portfolio' : '포트폴리오'}
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs tracking-wider uppercase font-medium text-stone-600 hover:text-stone-950 transition-colors"
            >
              {link.label[lang]}
            </a>
          ))}
        </nav>

        {/* Actions & Language Switcher */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Language Toggle Button */}
          <button
            onClick={() => setLang(lang === 'en' ? 'ko' : 'en')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-stone-300/80 bg-stone-100/70 hover:bg-stone-200/80 text-xs font-medium text-stone-700 transition-colors"
            title={lang === 'en' ? "한국어로 변경" : "Switch to English"}
          >
            <Globe className="w-3.5 h-3.5 text-stone-500" />
            <span className={lang === 'en' ? 'font-bold text-stone-900' : 'text-stone-500'}>EN</span>
            <span className="text-stone-300">/</span>
            <span className={lang === 'ko' ? 'font-bold text-stone-900' : 'text-stone-500'}>KR</span>
          </button>

          {/* View Resume Button */}
          <button
            onClick={onOpenResume}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-stone-300/80 hover:border-stone-400 bg-white/60 hover:bg-white text-xs font-medium text-stone-800 transition-all shadow-xs"
          >
            <FileText className="w-3.5 h-3.5 text-stone-600" />
            <span>{lang === 'en' ? 'Resume' : '이력서 보기'}</span>
          </button>

          {/* Contact Button */}
          <a
            href="#contact"
            className="flex items-center gap-1 px-4 py-1.5 rounded-full bg-stone-900 text-stone-50 hover:bg-stone-800 text-xs font-medium transition-all shadow-xs"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>{lang === 'en' ? 'Contact' : '연락처'}</span>
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={() => setLang(lang === 'en' ? 'ko' : 'en')}
            className="px-2.5 py-1 rounded-full border border-stone-300 bg-stone-100 text-xs font-medium text-stone-700"
          >
            {lang.toUpperCase()}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-stone-700 hover:bg-stone-200/60"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-stone-200 bg-[#FBF9F5] px-4 pt-2 pb-6 space-y-3">
          <div className="grid grid-cols-2 gap-2 pt-2 pb-3 border-b border-stone-200">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs uppercase font-medium text-stone-700 py-1.5 px-2 hover:bg-stone-100 rounded-md"
              >
                {link.label[lang]}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-2 pt-1">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 py-2 rounded-full border border-stone-300 text-xs font-medium text-stone-800"
            >
              <FileText className="w-4 h-4" />
              {lang === 'en' ? 'View Curriculum Vitae (PDF)' : '이력서(CV) 전문 보기'}
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-2 rounded-full bg-stone-900 text-stone-50 text-xs font-medium"
            >
              <Mail className="w-4 h-4" />
              {lang === 'en' ? 'Get in Touch' : '문의하기'}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
