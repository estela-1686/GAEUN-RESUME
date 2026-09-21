import React, { useState } from 'react';
import { Language } from '../types';
import { workExperienceData, researchInterestsData, extraExperiencesData } from '../data/portfolioData';
import { 
  Briefcase, 
  Award, 
  Calendar, 
  MapPin, 
  Sparkles, 
  CheckCircle2, 
  BookOpen, 
  GraduationCap,
  ExternalLink,
  Compass,
  ArrowRight
} from 'lucide-react';

interface ExperienceTimelineProps {
  lang: Language;
}

export const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ lang }) => {
  const [filter, setFilter] = useState<'all' | 'work' | 'awards' | 'extra'>('all');

  return (
    <section id="experience" className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* 1. Research Interests Spotlight (관심 있는 연구 분야) */}
      <div id="research-interests" className="mb-16">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-stone-100 border border-stone-200 flex items-center justify-center text-stone-800">
              <Compass className="w-5 h-5 text-stone-900" />
            </div>
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-medium text-stone-900">
                {lang === 'en' ? 'Research Interests & Strategic Focus' : '관심 연구 분야 및 학문적 관심사'}
              </h3>
              <p className="text-xs text-stone-500 font-light mt-0.5">
                {lang === 'en'
                  ? 'Key thematic inquiries connecting renewable energy transition, global ODA, and AI data systems.'
                  : '신재생에너지 전환, 글로벌 개발원조(ODA), AI 데이터 시스템을 융합하는 핵심 학문 관심사입니다.'}
              </p>
            </div>
          </div>
          <span className="text-xs text-stone-500 font-mono self-start sm:self-auto bg-stone-100 px-2.5 py-1 rounded-full border border-stone-200/80">
            {lang === 'en' ? 'Academic Inquiries' : '연구 이니셔티브'}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {researchInterestsData.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl border border-stone-200/90 bg-[#FBF9F5] p-6 sm:p-7 relative overflow-hidden flex flex-col justify-between hover:shadow-md hover:border-stone-300 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-3.5">
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-stone-900 text-stone-50">
                    {item.badge[lang]}
                  </span>
                  <span className="text-[11px] font-mono text-stone-500">
                    {item.category[lang]}
                  </span>
                </div>

                <h4 className="font-serif text-lg font-medium text-stone-900 leading-snug mb-3 group-hover:text-stone-700 transition-colors">
                  {item.title[lang]}
                </h4>

                <p className="text-xs text-stone-600 font-light leading-relaxed mb-4 break-keep">
                  {item.description[lang]}
                </p>

                {/* Focus Keywords Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {item.focusKeywords.map((kw) => (
                    <span
                      key={kw}
                      className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-stone-100 text-stone-600 border border-stone-200/70"
                    >
                      #{kw}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-3.5 border-t border-stone-200/80">
                <div className="text-[10px] uppercase font-bold tracking-wider text-stone-400 mb-1">
                  {lang === 'en' ? 'Research Vision' : '연구 지향점 및 비전'}
                </div>
                <p className="text-[11px] text-stone-700 font-normal leading-relaxed break-keep">
                  {item.futureOutlook[lang]}
                </p>
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
