import React, { useState } from 'react';
import { Language, ProjectItem } from '../types';
import { projectsData } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { 
  Sparkles, 
  ArrowUpRight, 
  Calendar, 
  MapPin, 
  ChevronLeft, 
  ChevronRight,
  Globe2,
  Users,
  Compass,
  FileCheck2
} from 'lucide-react';

interface ProjectsSectionProps {
  lang: Language;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ lang }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'leadership' | 'climate' | 'global'>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects = projectsData.filter((p) => {
    if (activeFilter === 'all') return true;
    return p.category === activeFilter;
  });

  return (
    <section id="projects" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Top Heading */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-stone-300/80 bg-stone-100/80 text-[11px] font-semibold uppercase tracking-wider text-stone-600 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{lang === 'en' ? 'Featured Leadership & Initiatives' : '주요 프로젝트 및 리더십'}</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl tracking-tight text-stone-900 font-normal leading-tight">
            {lang === 'en' ? (
              <>Built to lead with <span className="italic">precision & empathy</span></>
            ) : (
              <>책임과 통찰로 이끈 <br className="hidden sm:inline" /><span className="italic font-normal">글로벌 및 학부 리더십 프로젝트</span></>
            )}
          </h2>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {[
            { id: 'all', label: { en: 'All Projects', ko: '전체' } },
            { id: 'leadership', label: { en: 'Council & Leadership', ko: '학생회 및 리더십' } },
            { id: 'climate', label: { en: 'Climate & Policy', ko: '기후 및 환경' } },
            { id: 'global', label: { en: 'Global & Fieldwork', ko: '해외 현장 연수' } },
          ].map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id as any)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                activeFilter === filter.id
                  ? 'bg-stone-900 text-stone-50 shadow-xs'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200/80'
              }`}
            >
              {filter.label[lang]}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid (Styled directly from the user's reference image cards) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="group cursor-pointer rounded-2xl border border-stone-200/90 bg-white p-5 sm:p-6 flex flex-col justify-between hover:shadow-xl hover:border-stone-300 transition-all duration-300"
          >
            <div>
              {/* Card Graphical Header Container (Resembling the preview cards in the screenshot) */}
              <div className="w-full h-44 rounded-xl bg-gradient-to-br from-[#F4F0E8] to-[#EAE4D8] p-4 flex flex-col justify-between relative overflow-hidden border border-stone-200/70 mb-5 group-hover:scale-[1.01] transition-transform">
                {/* Background watermarked iconography */}
                <div className="absolute right-2 -bottom-4 opacity-10 text-stone-900 pointer-events-none">
                  {project.category === 'leadership' && <Users className="w-28 h-28" />}
                  {project.category === 'climate' && <Globe2 className="w-28 h-28" />}
                  {project.category === 'global' && <Compass className="w-28 h-28" />}
                </div>

                <div className="flex items-center justify-between z-10">
                  <span className="text-[10px] uppercase font-semibold tracking-wider px-2.5 py-0.5 rounded-full bg-white/90 text-stone-700 shadow-2xs border border-stone-200/80">
                    {project.badge[lang]}
                  </span>
                  <span className="text-[11px] font-mono text-stone-500 bg-stone-100/80 px-2 py-0.5 rounded">
                    {project.period[lang]}
                  </span>
                </div>

                {/* Card Graphical Preview simulation */}
                <div className="z-10 bg-white/95 backdrop-blur-xs rounded-lg p-2.5 shadow-sm border border-stone-200/70">
                  <div className="flex items-center justify-between text-[11px] text-stone-500 mb-1">
                    <span className="font-medium text-stone-700 truncate max-w-[170px]">
                      {project.organization[lang]}
                    </span>
                    <span className="text-emerald-700 font-semibold text-[10px]">
                      {lang === 'en' ? 'ACTIVE / COMPLETED' : '검증 완료'}
                    </span>
                  </div>
                  <p className="text-xs font-medium text-stone-900 line-clamp-1">
                    {project.role[lang]}
                  </p>
                </div>
              </div>

              {/* Title & Organization */}
              <h3 className="font-serif text-xl font-medium text-stone-900 group-hover:text-stone-700 transition-colors leading-snug mb-2">
                {project.title[lang]}
              </h3>

              <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed line-clamp-3 mb-4">
                {project.description[lang]}
              </p>
            </div>

            {/* Bottom Skills & Action */}
            <div className="pt-4 border-t border-stone-100 flex items-center justify-between mt-2">
              <div className="flex flex-wrap gap-1.5 max-w-[80%]">
                {project.skills.slice(0, 2).map((skill) => (
                  <span
                    key={skill}
                    className="text-[10px] font-medium text-stone-600 bg-stone-100 px-2 py-0.5 rounded-md"
                  >
                    {skill}
                  </span>
                ))}
                {project.skills.length > 2 && (
                  <span className="text-[10px] text-stone-400">
                    +{project.skills.length - 2}
                  </span>
                )}
              </div>

              <div className="w-7 h-7 rounded-full bg-stone-100 group-hover:bg-stone-900 group-hover:text-stone-50 text-stone-600 flex items-center justify-center transition-colors">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        lang={lang}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
