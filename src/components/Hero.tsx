import React from 'react';
import { Language } from '../types';
import { personalInfo } from '../data/portfolioData';
import { ArrowDown, FileText, Sparkles, Award, Globe, Users } from 'lucide-react';

interface HeroProps {
  lang: Language;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onOpenResume }) => {
  return (
    <section id="about" className="relative pt-16 pb-12 sm:pt-24 sm:pb-16 overflow-hidden">
      {/* Subtle warm decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-stone-200/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        
        {/* Top Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-stone-300/80 bg-stone-100/80 backdrop-blur-xs mb-8">
          <Sparkles className="w-3.5 h-3.5 text-stone-600" />
          <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-stone-700">
            {lang === 'en' 
              ? 'International Development · Smart Energy · AI Agent Convergence' 
              : '국제개발협력학 · 스마트에너지환경 · 스페인어 · AI Agent 융합'}
          </span>
        </div>

        {/* Main Display Headline */}
        <h1 className="font-sans text-3xl sm:text-5xl md:text-6xl tracking-tight text-stone-900 leading-[1.18] max-w-3xl mx-auto font-bold break-keep">
          {lang === 'en' ? (
            <>
              International development & sustainability,{' '}
              <span className="text-stone-500 font-medium block sm:inline">
                connecting for a better future.
              </span>
            </>
          ) : (
            <>
              국제개발협력과 지속가능성,{' '}
              <span className="text-stone-500 font-medium block sm:inline">
                더 나은 미래를 향한 연결.
              </span>
            </>
          )}
        </h1>

        {/* Subtitle & Narrative */}
        <p className="mt-6 sm:mt-7 text-base sm:text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed font-sans font-light break-keep">
          {lang === 'en' ? (
            <>
              Undergraduate student at Busan University of Foreign Studies studying International Development Cooperation, Spanish, Smart Energy & Environment, and AI Convergence. Dedicated to sustainable global development through student leadership and field-based initiatives.
            </>
          ) : (
            <>
              부산외국어대학교에서 국제개발협력과 스페인어, 스마트에너지환경, AI 융합을 전공하고 있습니다. 학생회 리더십과 다양한 현장 프로젝트를 바탕으로, 지속 가능한 사회를 위한 실천적 해법을 고민합니다.
            </>
          )}
        </p>

        {/* Call to Action Buttons */}
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3.5">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-stone-900 text-stone-100 hover:bg-stone-800 text-sm font-medium transition-all shadow-sm hover:shadow-md group"
          >
            <span>{lang === 'en' ? 'Explore Projects & Leadership' : '프로젝트 및 리더십 탐색'}</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </a>

          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-stone-300 bg-[#FBF9F5]/80 hover:bg-white text-stone-800 text-sm font-medium transition-all shadow-xs hover:border-stone-400"
          >
            <FileText className="w-4 h-4 text-stone-600" />
            <span>{lang === 'en' ? 'Curriculum Vitae (PDF)' : '상세 이력서(CV) 보기'}</span>
          </button>
        </div>

        {/* Fast Credentials Pill Strip */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs text-stone-600 font-medium">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-100/90 border border-stone-200">
            <Award className="w-3.5 h-3.5 text-stone-700" />
            <span>{lang === 'en' ? 'GPA 4.37 / 4.5' : '누적 평점 4.37 / 4.5'}</span>
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-100/90 border border-stone-200">
            <Globe className="w-3.5 h-3.5 text-stone-700" />
            <span>{lang === 'en' ? 'Global Sustainability' : '글로벌 지속가능성'}</span>
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-100/90 border border-stone-200">
            <Users className="w-3.5 h-3.5 text-stone-700" />
            <span>{lang === 'en' ? 'Action-Oriented Leadership' : '실천적 학생 리더십'}</span>
          </span>
        </div>

        {/* Logos / Organizations Partner Strip */}
        <div className="mt-14 pt-8 border-t border-stone-200/80">
          <p className="text-[11px] uppercase tracking-widest text-stone-400 font-medium mb-5">
            {lang === 'en' ? 'Institutions, Collaborations & Delegations' : '협력 기관, 파견 및 대외 활동 네트워크'}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-stone-600 font-serif">
            {personalInfo.organizations.map((org) => (
              <div
                key={org.name}
                className="flex items-center gap-1.5 text-xs sm:text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors cursor-default"
                title={org.label}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-stone-300" />
                <span className="tracking-tight">{org.name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
