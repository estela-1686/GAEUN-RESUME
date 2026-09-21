import React from 'react';
import { Language } from '../types';
import { personalInfo, projectsData, workExperienceData, researchInterestsData, awardsData, extraExperiencesData, certificatesList } from '../data/portfolioData';
import { X, Printer, Download, Mail, Phone, MapPin, GraduationCap, Award, Briefcase, FileText, Compass } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  lang: Language;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, lang, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-stone-900/70 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl bg-[#FBF9F5] rounded-2xl sm:rounded-3xl border border-stone-300 shadow-2xl overflow-hidden max-h-[95vh] flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Control Bar */}
        <div className="p-4 sm:p-5 border-b border-stone-200 flex items-center justify-between bg-stone-100/80 print:hidden">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-stone-700" />
            <span className="font-serif text-base font-semibold text-stone-900">
              {lang === 'en' ? 'Curriculum Vitae (Official Document)' : '공식 국·영문 이력서(CV)'}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-stone-900 text-stone-50 hover:bg-stone-800 text-xs font-medium transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'Print / Save as PDF' : '인쇄 / PDF로 저장'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-full text-stone-500 hover:text-stone-900 hover:bg-stone-200 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document Container */}
        <div className="p-6 sm:p-10 overflow-y-auto font-sans text-stone-800 space-y-8 bg-white print:p-0 print:m-0">
          
          {/* Header */}
          <div className="border-b-2 border-stone-900 pb-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border border-stone-300 shrink-0 bg-stone-100 shadow-2xs">
                  <img 
                    src={personalInfo.avatarUrl} 
                    alt={personalInfo.name.ko} 
                    className="w-full h-full object-cover object-center"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h1 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-stone-900">
                    {personalInfo.name.en}
                    <span className="text-lg font-normal text-stone-500 ml-2">
                      ({personalInfo.name.ko})
                    </span>
                  </h1>
                  <p className="text-xs text-stone-500 mt-1">
                    Busan, Republic of Korea · Student Body President, Dept. of International Development Cooperation
                  </p>
                </div>
              </div>

              <div className="text-xs text-stone-600 flex flex-col gap-1 sm:text-right">
                <span className="flex items-center sm:justify-end gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-stone-500" />
                  {personalInfo.phone}
                </span>
                <span className="flex items-center sm:justify-end gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-stone-500" />
                  {personalInfo.email}
                </span>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs uppercase tracking-widest font-bold text-stone-900 border-b border-stone-300 pb-1 mb-3">
              Education
            </h2>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
              <div>
                <span className="font-serif text-base font-bold text-stone-900">
                  {personalInfo.education.institution[lang]}
                </span>
                <span className="ml-2 font-mono text-xs font-semibold text-stone-800 bg-stone-100 px-2 py-0.5 rounded">
                  GPA: {personalInfo.gpa}
                </span>
              </div>
              <span className="text-xs text-stone-500 font-mono">
                {personalInfo.education.period[lang]}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-stone-700 mt-1 font-medium">
              {personalInfo.education.degree[lang]}
            </p>
            <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-600 bg-stone-50 p-3 rounded-lg border border-stone-200">
              {personalInfo.education.majors.map((m) => (
                <div key={m.name.en}>
                  <span className="font-semibold text-stone-800">• {m.name[lang]}: </span>
                  <span>{m.description[lang]}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xs uppercase tracking-widest font-bold text-stone-900 border-b border-stone-300 pb-1 mb-4">
              Projects & Leadership
            </h2>
            <div className="space-y-6">
              {projectsData.map((project) => (
                <div key={project.id} className="space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                    <div>
                      <span className="font-serif text-sm font-bold text-stone-900">
                        {project.title[lang]}
                      </span>
                      <span className="text-xs text-stone-600 font-medium ml-2">
                        — {project.role[lang]}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-stone-500">
                      {project.location[lang]} · {project.period[lang]}
                    </span>
                  </div>
                  <p className="text-xs text-stone-500 italic">
                    {project.organization[lang]}
                  </p>
                  <ul className="list-disc list-inside text-xs text-stone-700 space-y-1 pl-1">
                    {project.highlights[lang].map((highlight, idx) => (
                      <li key={idx} className="leading-relaxed">
                        <span className="font-normal">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Work Experience */}
          <div>
            <h2 className="text-xs uppercase tracking-widest font-bold text-stone-900 border-b border-stone-300 pb-1 mb-3">
              Work Experience
            </h2>
            <div className="space-y-4">
              {workExperienceData.map((work) => (
                <div key={work.id}>
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                    <div>
                      <span className="font-serif text-sm font-bold text-stone-900">
                        {work.role[lang]}
                      </span>
                      <span className="text-xs text-stone-600 ml-2">
                        — {work.department[lang]}, {work.organization[lang]}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-stone-500">
                      {work.period[lang]}
                    </span>
                  </div>
                  <ul className="list-disc list-inside text-xs text-stone-700 space-y-1 mt-1 pl-1">
                    {work.details[lang].map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Research Interests */}
          <div>
            <h2 className="text-xs uppercase tracking-widest font-bold text-stone-900 border-b border-stone-300 pb-1 mb-3">
              Research Interests & Academic Inquiries
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              {researchInterestsData.map((item) => (
                <div key={item.id} className="p-2.5 rounded-lg bg-stone-50 border border-stone-200">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-stone-900 leading-snug">{item.title[lang]}</span>
                  </div>
                  <span className="inline-block text-[10px] text-stone-500 font-mono mb-1">{item.category[lang]}</span>
                  <p className="text-stone-600 text-[11px] leading-relaxed">{item.description[lang]}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Awards & Honors */}
          <div>
            <h2 className="text-xs uppercase tracking-widest font-bold text-stone-900 border-b border-stone-300 pb-1 mb-3">
              Awards & Distinctions
            </h2>
            <div className="space-y-3">
              {awardsData.map((award) => (
                <div key={award.id} className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs">
                  <div>
                    <span className="font-semibold text-stone-900">{award.title[lang]}</span>
                    <span className="text-stone-600 ml-2">({award.organization[lang]})</span>
                    <p className="text-stone-500 text-[11px] mt-0.5">{award.description[lang]}</p>
                  </div>
                  <span className="font-mono text-stone-500 shrink-0">{award.date[lang]}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Extra Experiences */}
          <div>
            <h2 className="text-xs uppercase tracking-widest font-bold text-stone-900 border-b border-stone-300 pb-1 mb-3">
              Extra Experiences & Global Engagements
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {extraExperiencesData.map((item) => (
                <div key={item.id} className="border-b border-stone-100 pb-1.5">
                  <div className="flex justify-between items-baseline">
                    <span className="font-semibold text-stone-800">{item.title[lang]}</span>
                    <span className="text-[11px] font-mono text-stone-400">{item.date[lang]}</span>
                  </div>
                  {item.organization && (
                    <p className="text-[11px] text-stone-500">{item.organization[lang]}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Certificate & Credentials */}
          <div>
            <h2 className="text-xs uppercase tracking-widest font-bold text-stone-900 border-b border-stone-300 pb-1 mb-2">
              Certificates & Credentials
            </h2>
            <div className="space-y-2 text-xs">
              {certificatesList.map((cert) => (
                <div key={cert.id} className="flex justify-between items-baseline">
                  <div>
                    <span className="font-semibold text-stone-900">{cert.title[lang]}</span>
                    <span className="text-stone-600 ml-2">— {cert.issuer[lang]}</span>
                  </div>
                  <span className="font-mono text-stone-500 shrink-0 ml-4">{cert.date[lang]}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-stone-200 bg-stone-100/80 flex justify-between items-center print:hidden">
          <span className="text-xs text-stone-500 font-mono">
            {personalInfo.email} · (+82) 010-4822-3777
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-full bg-stone-900 text-stone-50 text-xs font-medium hover:bg-stone-800"
          >
            {lang === 'en' ? 'Close' : '닫기'}
          </button>
        </div>
      </div>
    </div>
  );
};
