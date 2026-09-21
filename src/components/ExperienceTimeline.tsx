import React, { useState } from 'react';
import { Language } from '../types';
import { workExperienceData, awardsData, extraExperiencesData } from '../data/portfolioData';
import { 
  Briefcase, 
  Award, 
  Calendar, 
  MapPin, 
  Sparkles, 
  CheckCircle2, 
  Trophy, 
  GraduationCap,
  ExternalLink
} from 'lucide-react';

interface ExperienceTimelineProps {
  lang: Language;
}

export const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ lang }) => {
  const [filter, setFilter] = useState<'all' | 'work' | 'awards' | 'extra'>('all');

  return (
    <section id="experience" className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* 1. Awards Spotlight (Styled like the prominent cards in the user reference image) */}
      <div id="honors" className="mb-16">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Trophy className="w-5 h-5 text-amber-700" />
            <h3 className="font-serif text-xl sm:text-2xl font-medium text-stone-900">
              {lang === 'en' ? 'Honors & National Scholarships' : '수상 및 장학 내역'}
            </h3>
          </div>
          <span className="text-xs text-stone-500 font-mono">
            {lang === 'en' ? 'Verified Distinctions' : '공식 수훈 기록'}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {awardsData.map((award) => (
            <div
              key={award.id}
              className="rounded-2xl border border-stone-200/90 bg-[#F4F0E8]/50 p-6 sm:p-7 relative overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-stone-900 text-stone-50">
                    {award.badge[lang]}
                  </span>
                  <span className="text-xs font-mono text-stone-500">
                    {award.date[lang]}
                  </span>
                </div>

                <h4 className="font-serif text-xl font-medium text-stone-900 leading-snug mb-2">
                  {award.title[lang]}
                </h4>

                <p className="text-xs font-semibold text-stone-600 mb-3">
                  {award.organization[lang]}
                </p>

                <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
                  {award.description[lang]}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-stone-200/80 flex items-center justify-between text-[11px] text-stone-500">
                <span>{lang === 'en' ? 'Official Distinction' : '공식 수여'}</span>
                <span className="font-medium text-stone-900">
                  {award.id === 'humanities-100-scholarship' 
                    ? (lang === 'en' ? 'Full Tuition & Living Grant' : '전액 장학금 및 학업장려비 지원') 
                    : (lang === 'en' ? 'Top Delegation Honor' : '외교 협상 우수 표창')}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Work Experience (Teaching Assistant & Research Assistant) */}
      <div className="mb-16">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-stone-800" />
            <h3 className="font-serif text-xl sm:text-2xl font-medium text-stone-900">
              {lang === 'en' ? 'Academic & Research Experience' : '교내 학사 및 연구 경력'}
            </h3>
          </div>
          <span className="text-xs text-stone-500 font-mono">
            {lang === 'en' ? 'Busan University of Foreign Studies' : '부산외국어대학교'}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {workExperienceData.map((work) => (
            <div
              key={work.id}
              className="rounded-2xl border border-stone-200/90 bg-white p-6 sm:p-7 flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] uppercase font-semibold tracking-wider px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-700 border border-stone-200">
                    {work.tag[lang]}
                  </span>
                  <span className="text-xs font-mono text-stone-500">
                    {work.period[lang]}
                  </span>
                </div>

                <h4 className="font-serif text-xl font-medium text-stone-900 leading-snug">
                  {work.role[lang]}
                </h4>

                <div className="text-xs text-stone-500 mt-1 mb-4">
                  {work.department[lang]} · {work.organization[lang]}
                </div>

                <div className="space-y-2.5">
                  {work.details[lang].map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-stone-600 font-light leading-relaxed">
                      <CheckCircle2 className="w-3.5 h-3.5 text-stone-700 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-500">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-stone-400" />
                  {work.location[lang]}
                </span>
                <span className="font-medium text-stone-700">
                  {work.id === 'teaching-assistant' 
                    ? (lang === 'en' ? '2 Consecutive Semesters' : '1년(2개 학기) 연속 임용')
                    : (lang === 'en' ? 'Institute Research' : '학술 연구 지원')}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Extra Experiences List (Clean 2-Column List) */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-stone-800" />
            <h3 className="font-serif text-xl sm:text-2xl font-medium text-stone-900">
              {lang === 'en' ? 'Extracurricular & Global Engagements' : '대외 활동 및 글로벌 연수'}
            </h3>
          </div>
          <span className="text-xs text-stone-500">
            {lang === 'en' ? 'Chronological Archive' : '활동 연혁'}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {extraExperiencesData.map((item) => (
            <div
              key={item.id}
              className="p-4 rounded-xl border border-stone-200/80 bg-stone-50/60 hover:bg-white hover:border-stone-300 transition-all flex items-start justify-between gap-3"
            >
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-stone-900">
                    {item.title[lang]}
                  </span>
                </div>
                {item.organization && (
                  <p className="text-[11px] text-stone-500 mt-0.5 font-medium">
                    {item.organization[lang]}
                  </p>
                )}
                {item.description && (
                  <p className="text-xs text-stone-600 font-light mt-1.5 leading-relaxed">
                    {item.description[lang]}
                  </p>
                )}
              </div>

              <span className="text-[11px] font-mono text-stone-500 shrink-0 bg-white px-2 py-0.5 rounded border border-stone-200/80">
                {item.date[lang]}
              </span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};
