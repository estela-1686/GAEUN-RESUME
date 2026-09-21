import React from 'react';
import { Language } from '../types';
import { personalInfo } from '../data/portfolioData';
import { Quote, Globe2, Leaf, Cpu, Compass, Sparkles } from 'lucide-react';

interface QuoteBannerProps {
  lang: Language;
}

export const QuoteBanner: React.FC<QuoteBannerProps> = ({ lang }) => {
  const keywordGroups = [
    {
      icon: Globe2,
      category: { en: 'International Dev & ODA', ko: '국제개발협력 & ODA' },
      tags: [
        { en: 'ODA Policy', ko: 'ODA 정책 기획' },
        { en: 'SDGs Action', ko: '지속가능발전(SDGs)' },
        { en: 'Community Dev', ko: '지역사회 자립' }
      ]
    },
    {
      icon: Leaf,
      category: { en: 'Climate & Clean Energy', ko: '기후 행동 & 청정에너지' },
      tags: [
        { en: 'Energy Transition', ko: '청정에너지 전환' },
        { en: 'Carbon Neutrality', ko: '탄소중립 거버넌스' },
        { en: 'Climate Adaptation', ko: '기후변화 대응' }
      ]
    },
    {
      icon: Cpu,
      category: { en: 'AI & Data Convergence', ko: 'AI 융합 & 데이터 분석' },
      tags: [
        { en: 'AI Tech Fusion', ko: 'AI 기술 융합' },
        { en: 'Data Decision-Making', ko: '데이터 기반 의사결정' },
        { en: 'Digital Impact', ko: '개발협력 디지털 솔루션' }
      ]
    },
    {
      icon: Compass,
      category: { en: 'Global Leadership & Policy', ko: '글로벌 리더십 & 다자협력' },
      tags: [
        { en: 'Youth Leadership', ko: '청년 자치 리더십' },
        { en: 'Multilateral Dialogue', ko: '국제 다자회의(LCOY)' },
        { en: 'MOU & Partnerships', ko: '대외 기관 협력(KOICA)' }
      ]
    }
  ];

  return (
    <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="rounded-2xl sm:rounded-3xl bg-stone-900 text-white p-6 sm:p-10 md:p-12 relative overflow-hidden shadow-2xl border border-stone-800">
        
        {/* Decorative subtle ambient lights */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-stone-800/80 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-stone-800/50 rounded-full blur-2xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
          
          {/* Left: Core Vision Quote & Signature */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-9 h-9 rounded-full bg-stone-800 border border-stone-700 flex items-center justify-center text-white">
                <Quote className="w-4 h-4" />
              </span>
              <span className="text-xs uppercase tracking-widest text-stone-300 font-semibold">
                {lang === 'en' ? 'Core Vision' : '핵심 지향 가치'}
              </span>
            </div>

            <blockquote className="font-serif text-2xl sm:text-3xl text-white font-medium leading-snug break-keep">
              {lang === 'en' ? (
                <>
                  "Bridging policy and technology to create tangible, sustainable change."
                </>
              ) : (
                <>
                  "정책과 기술을 융합하여 현장의 지속 가능한 변화를 만듭니다."
                </>
              )}
            </blockquote>

            <div className="flex items-center gap-3.5 pt-2">
              <div className="w-12 h-12 rounded-xl overflow-hidden border border-stone-600 shadow-sm shrink-0 bg-stone-800">
                <img 
                  src={personalInfo.avatarUrl} 
                  alt={lang === 'en' ? personalInfo.name.en : personalInfo.name.ko}
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <div className="text-base font-bold text-white tracking-wide">
                  {lang === 'en' ? personalInfo.name.en : personalInfo.name.ko}
                </div>
                <div className="text-xs text-stone-300 font-normal mt-0.5">
                  {lang === 'en' 
                    ? 'Student Body President, Dept. of International Development Cooperation'
                    : '부산외국어대학교 국제개발협력학부 학생회장'}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Focused Keyword Tags Grid (Clean, high-contrast, word-focused) */}
          <div className="lg:col-span-7 border-t lg:border-t-0 lg:border-l border-stone-800 pt-6 lg:pt-0 lg:pl-8">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-stone-300" />
                <span className="text-xs uppercase tracking-wider text-stone-200 font-semibold">
                  {lang === 'en' ? 'Core Focus Keywords' : '주요 탐구 및 관심 키워드'}
                </span>
              </div>
              <span className="text-[11px] text-stone-400 font-mono">
                {lang === 'en' ? '4 Pillars' : '4개 핵심 영역'}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {keywordGroups.map((group, idx) => {
                const IconComponent = group.icon;
                return (
                  <div 
                    key={idx}
                    className="p-4 rounded-xl bg-stone-800/80 border border-stone-700/80 shadow-xs hover:border-stone-500 transition-colors"
                  >
                    {/* Category Title */}
                    <div className="flex items-center gap-2 mb-2.5">
                      <span className="w-6 h-6 rounded-md bg-stone-700/80 flex items-center justify-center text-white shrink-0">
                        <IconComponent className="w-3.5 h-3.5" />
                      </span>
                      <span className="text-xs font-bold text-white tracking-tight">
                        {lang === 'en' ? group.category.en : group.category.ko}
                      </span>
                    </div>

                    {/* High-contrast Keyword Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {group.tags.map((tag, tagIdx) => (
                        <span 
                          key={tagIdx}
                          className="inline-block text-[11px] font-medium px-2 py-0.5 rounded-md bg-stone-900/90 text-stone-100 border border-stone-600/90 hover:text-white hover:border-stone-400 transition-colors"
                        >
                          #{lang === 'en' ? tag.en : tag.ko}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
