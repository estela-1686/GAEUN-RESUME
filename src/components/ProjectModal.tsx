import React from 'react';
import { ProjectItem, Language } from '../types';
import { X, Calendar, MapPin, Building, Award, CheckCircle2, ArrowRight } from 'lucide-react';

interface ProjectModalProps {
  project: ProjectItem | null;
  lang: Language;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, lang, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-stone-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-[#FBF9F5] rounded-2xl sm:rounded-3xl border border-stone-300/80 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="p-6 border-b border-stone-200 flex items-start justify-between gap-4 bg-stone-50/50">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-stone-200/80 text-stone-700 border border-stone-300/60 inline-block mb-2">
              {project.badge[lang]}
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-medium text-stone-900 leading-snug">
              {project.title[lang]}
            </h3>
            <div className="flex flex-wrap items-center gap-y-1 gap-x-3 mt-2 text-xs text-stone-500">
              <span className="flex items-center gap-1">
                <Building className="w-3.5 h-3.5 text-stone-400" />
                {project.organization[lang]}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-stone-400" />
                {project.period[lang]}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-stone-400" />
                {project.location[lang]}
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-stone-500 hover:text-stone-900 hover:bg-stone-200/60 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-stone-700 text-sm">
          {/* Role pill */}
          <div className="p-3 rounded-xl bg-stone-100/90 border border-stone-200">
            <span className="text-xs uppercase tracking-wider text-stone-500 font-semibold block mb-1">
              {lang === 'en' ? 'Official Role & Mandate' : '공식 직책 및 역할'}
            </span>
            <span className="font-medium text-stone-900 text-sm">
              {project.role[lang]}
            </span>
          </div>

          {/* Overview description */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2">
              {lang === 'en' ? 'Executive Summary' : '개요 및 목적'}
            </h4>
            <p className="text-stone-700 leading-relaxed font-light">
              {project.description[lang]}
            </p>
          </div>

          {/* Key Achievements and Highlights */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-3">
              {lang === 'en' ? 'Key Actions & Accomplishments' : '주요 성과 및 실행 내역'}
            </h4>
            <div className="space-y-2.5">
              {project.highlights[lang].map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-white border border-stone-200/80 shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 text-stone-800 shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-light">
                    {highlight}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Core Competencies & Skills */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2.5">
              {lang === 'en' ? 'Competencies & Tools Applied' : '활용된 전문 역량 및 도구'}
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-stone-200/70 text-stone-800 border border-stone-300/50"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-stone-200 bg-stone-50/70 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full bg-stone-900 text-stone-50 text-xs font-medium hover:bg-stone-800 transition-colors"
          >
            {lang === 'en' ? 'Close' : '닫기'}
          </button>
        </div>
      </div>
    </div>
  );
};
