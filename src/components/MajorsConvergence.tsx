import React from 'react';
import { Language } from '../types';
import { personalInfo } from '../data/portfolioData';
import { Globe, Languages, Zap, Cpu, Sparkles, Check } from 'lucide-react';

interface MajorsConvergenceProps {
  lang: Language;
}

export const MajorsConvergence: React.FC<MajorsConvergenceProps> = ({ lang }) => {
  const majorIcons = [
    <Globe className="w-5 h-5 text-stone-800" />,
    <Languages className="w-5 h-5 text-stone-800" />,
    <Zap className="w-5 h-5 text-stone-800" />,
    <Cpu className="w-5 h-5 text-stone-800" />
  ];

  return (
    <section id="majors" className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-stone-300/80 bg-stone-100/80 text-[11px] font-semibold uppercase tracking-wider text-stone-600 mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{lang === 'en' ? 'Interdisciplinary Academic Matrix' : '4대 다중전공 융합 체계'}</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl tracking-tight text-stone-900 font-normal leading-tight">
          {lang === 'en' ? (
            <>Built at the intersection of <span className="italic">four vital disciplines</span></>
          ) : (
            <>글로벌 정책, 언어, 에너지, AI가 결합된 <br className="hidden sm:inline" /><span className="italic font-normal">융합적 전문성</span></>
          )}
        </h2>

        <p className="mt-4 text-stone-600 text-sm sm:text-base leading-relaxed">
          {lang === 'en'
            ? 'Combining multilateral ODA policy, bilingual Spanish communication, sustainable smart energy systems, and emerging AI agent tooling to drive modern socio-economic solutions.'
            : '공적개발원조(ODA) 정책과 중남미 스페인어 소통력, 신재생 스마트에너지 기술, 그리고 최신 AI 에이전트 시스템을 결합하여 현대 복합 위기에 대응합니다.'}
        </p>
      </div>

      {/* 4 Majors Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {personalInfo.education.majors.map((major, idx) => (
          <div
            key={major.name.en}
            className="rounded-2xl border border-stone-200/90 bg-white/80 p-6 flex flex-col justify-between hover:shadow-lg hover:border-stone-300 transition-all duration-300 group"
          >
            <div>
              {/* Card Top: Icon & Badge */}
              <div className="flex items-center justify-between mb-5">
                <div className="w-11 h-11 rounded-xl bg-stone-100 border border-stone-200 flex items-center justify-center group-hover:scale-105 transition-transform">
                  {majorIcons[idx]}
                </div>
                <span className="text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full bg-stone-100 text-stone-600 border border-stone-200">
                  {major.badge}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-serif text-xl font-medium text-stone-900 mb-2.5">
                {major.name[lang]}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
                {major.description[lang]}
              </p>
            </div>

            {/* Bottom Synergy Benefit */}
            <div className="mt-6 pt-4 border-t border-stone-100 text-[11px] text-stone-500 flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-stone-800 shrink-0" />
              <span>
                {idx === 0 && (lang === 'en' ? 'KOICA ODA & SDGs Alignment' : 'KOICA ODA 사업 및 SDGs 연계')}
                {idx === 1 && (lang === 'en' ? 'Field & Diplomatic Multilingualism' : '현장 및 외교 다국어 소통 역량')}
                {idx === 2 && (lang === 'en' ? 'Electrical & Clean Energy Bootcamp' : '전기기사 부트캠프 및 기후 정책')}
                {idx === 3 && (lang === 'en' ? 'Prompt Engineering & Agent Workflows' : 'AI 프롬프트 & 데이터 분석 자동화')}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Synthesis Insight Banner */}
      <div className="mt-8 rounded-2xl bg-[#F4F0E8] border border-stone-200/80 p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-full bg-stone-900 text-[#FBF9F5] flex items-center justify-center font-serif text-sm font-semibold shrink-0">
            Σ
          </div>
          <div>
            <h4 className="text-sm font-semibold text-stone-900">
              {lang === 'en' ? 'The Convergence Impact' : '다학제 융합의 시너지 효과'}
            </h4>
            <p className="text-xs text-stone-600">
              {lang === 'en'
                ? 'From designing solar mini-grid aid programs to automating development data analysis with AI agent workflows.'
                : '개도국 태양광 마이크로그리드 지원 설계부터 AI 에이전트를 통한 개발협력 데이터 자동화 분석까지 단절 없는 역량 구현.'}
            </p>
          </div>
        </div>

        <div className="shrink-0 flex items-center gap-2">
          <span className="text-xs font-mono font-medium text-stone-700 bg-white/80 px-3 py-1.5 rounded-full border border-stone-200">
            GPA: 4.37 / 4.5
          </span>
        </div>
      </div>
    </section>
  );
};
