import React, { useState, useEffect } from 'react';
import { Language, CertificateItem } from '../types';
import { skillsCategories, certificatesList } from '../data/portfolioData';
import { Sparkles, Globe, Languages, Cpu, Zap, Award, CheckCircle2, Plus, X, Trash2, Calendar, Building2 } from 'lucide-react';

interface SkillsSectionProps {
  lang: Language;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ lang }) => {
  const [certs, setCerts] = useState<CertificateItem[]>(() => {
    try {
      const saved = localStorage.getItem('gaeun_portfolio_custom_certs');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          // Merge default certificates with user-added ones without duplicates
          const customOnly = parsed.filter(
            (c: CertificateItem) => !certificatesList.some((def) => def.id === c.id)
          );
          return [...certificatesList, ...customOnly];
        }
      }
    } catch {
      // ignore JSON parse error
    }
    return certificatesList;
  });

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newIssuer, setNewIssuer] = useState('');
  const [newDate, setNewDate] = useState('');
  const [newCategory, setNewCategory] = useState('');
  const [newDesc, setNewDesc] = useState('');

  // Persist custom certs
  useEffect(() => {
    try {
      const customOnly = certs.filter(
        (c) => !certificatesList.some((def) => def.id === c.id)
      );
      localStorage.setItem('gaeun_portfolio_custom_certs', JSON.stringify(customOnly));
    } catch {
      // ignore
    }
  }, [certs]);

  const handleAddCertificate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    const newCert: CertificateItem = {
      id: `custom-${Date.now()}`,
      title: {
        en: newTitle.trim(),
        ko: newTitle.trim()
      },
      issuer: {
        en: newIssuer.trim() || 'Accredited Institution',
        ko: newIssuer.trim() || '공인 발급 기관'
      },
      date: {
        en: newDate.trim() || '2026',
        ko: newDate.trim() || '2026년'
      },
      category: {
        en: newCategory.trim() || 'Professional Credential',
        ko: newCategory.trim() || '실무 공인 자격'
      },
      status: {
        en: 'Certified',
        ko: '자격 취득'
      },
      description: {
        en: newDesc.trim() || 'Certified competency credential.',
        ko: newDesc.trim() || '공인 검증 실무 자격 및 수료 이력.'
      }
    };

    setCerts((prev) => [...prev, newCert]);
    setIsAddModalOpen(false);
    setNewTitle('');
    setNewIssuer('');
    setNewDate('');
    setNewCategory('');
    setNewDesc('');
  };

  const handleDeleteCertificate = (id: string) => {
    setCerts((prev) => prev.filter((c) => c.id !== id));
  };

  const getSkillItemIcon = (name: string) => {
    const lower = name.toLowerCase();
    if (lower.includes('excel')) {
      return (
        <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white font-bold text-xs shadow-2xs shrink-0">
          <span className="font-mono text-[13px] font-black">X</span>
        </div>
      );
    }
    if (lower.includes('python')) {
      return (
        <div className="w-8 h-8 rounded-lg bg-sky-50 border border-sky-200 flex items-center justify-center shrink-0">
          <div className="flex flex-col items-center justify-center">
            <span className="text-[11px] font-extrabold text-sky-600 leading-none">Py</span>
          </div>
        </div>
      );
    }
    if (lower.includes('notion')) {
      return (
        <div className="w-8 h-8 rounded-lg bg-stone-900 flex items-center justify-center text-white shrink-0 shadow-2xs">
          <span className="font-serif font-black text-sm">N</span>
        </div>
      );
    }
    if (lower.includes('한국어') || lower.includes('korean')) {
      return (
        <div className="w-8 h-8 rounded-lg bg-stone-100 border border-stone-300 flex items-center justify-center text-stone-800 text-xs font-bold shrink-0">
          KO
        </div>
      );
    }
    if (lower.includes('스페인어') || lower.includes('español')) {
      return (
        <div className="w-8 h-8 rounded-lg bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-700 text-xs font-bold shrink-0">
          ES
        </div>
      );
    }
    if (lower.includes('영어') || lower.includes('english')) {
      return (
        <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700 text-xs font-bold shrink-0">
          EN
        </div>
      );
    }
    if (lower.includes('koica') || lower.includes('oda') || lower.includes('sdgs')) {
      return (
        <div className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-700 shrink-0">
          <Globe className="w-4 h-4" />
        </div>
      );
    }
    if (lower.includes('기후') || lower.includes('lcoy') || lower.includes('탄소')) {
      return (
        <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 shrink-0">
          <Zap className="w-4 h-4" />
        </div>
      );
    }
    if (lower.includes('전기') || lower.includes('에너지')) {
      return (
        <div className="w-8 h-8 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 shrink-0">
          <Zap className="w-4 h-4" />
        </div>
      );
    }
    if (lower.includes('ai') || lower.includes('prompt') || lower.includes('자동화')) {
      return (
        <div className="w-8 h-8 rounded-lg bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-700 shrink-0">
          <Cpu className="w-4 h-4" />
        </div>
      );
    }
    return (
      <div className="w-8 h-8 rounded-lg bg-stone-100 border border-stone-200 flex items-center justify-center text-stone-700 shrink-0">
        <Sparkles className="w-4 h-4" />
      </div>
    );
  };

  const getCategoryIcon = (name: string) => {
    switch (name) {
      case 'Globe':
        return <Globe className="w-5 h-5 text-stone-800" />;
      case 'Languages':
        return <Languages className="w-5 h-5 text-stone-800" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-stone-800" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-stone-800" />;
      default:
        return <Sparkles className="w-5 h-5 text-stone-800" />;
    }
  };

  return (
    <section id="skills" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-stone-300/80 bg-stone-100/80 text-[11px] font-semibold uppercase tracking-wider text-stone-600 mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{lang === 'en' ? 'Core Competencies & Tooling' : '전문 역량 및 기술 스택'}</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl tracking-tight text-stone-900 font-normal leading-tight">
          {lang === 'en' ? (
            <>Connect policy with <span className="italic">data & execution</span></>
          ) : (
            <>정책과 데이터, <span className="italic font-normal">글로벌 커뮤니케이션의 결합</span></>
          )}
        </h2>

        <p className="mt-4 text-stone-600 text-sm sm:text-base leading-relaxed break-keep">
          {lang === 'en'
            ? 'Skill proficiency rated on a 5-point block scale across languages, ODA policy, AI and data tooling, and smart energy systems.'
            : '어학, ODA 정책 기획, 비즈니스 엑셀 및 AI 도구, 스마트에너지 공학까지 5단계 블록 지표로 직관화된 역량 체계입니다.'}
        </p>
      </div>

      {/* 4 Category Matrix Cards with 5-Block Rating Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {skillsCategories.map((category) => (
          <div
            key={category.id}
            className="rounded-2xl border border-stone-200/90 bg-white p-6 shadow-xs hover:shadow-md hover:border-stone-300 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3.5 mb-5 pb-4 border-b border-stone-100">
                <div className="w-10 h-10 rounded-xl bg-stone-100 border border-stone-200 flex items-center justify-center shrink-0">
                  {getCategoryIcon(category.iconName)}
                </div>
                <div>
                  <h3 className="font-serif text-lg font-medium text-stone-900">
                    {category.name[lang]}
                  </h3>
                  <p className="text-xs text-stone-500 font-light">
                    {category.description[lang]}
                  </p>
                </div>
              </div>

              {/* Skills Grid Matching the Reference Image (Icon + Name + 5-Block Squares) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {category.skills.map((skill) => {
                  const score = skill.score ?? Math.min(5, Math.max(1, Math.round(((skill.percentage ?? 80) / 100) * 5)));
                  return (
                    <div
                      key={skill.name}
                      className="p-3.5 rounded-xl border border-stone-200/90 bg-stone-50/50 hover:bg-white hover:border-stone-400 hover:shadow-xs transition-all flex items-start gap-3"
                    >
                      {/* Left Icon */}
                      <div className="shrink-0 mt-0.5">
                        {getSkillItemIcon(skill.name)}
                      </div>

                      {/* Right Content */}
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-1.5">
                          <span className="text-xs sm:text-sm font-semibold text-stone-900 truncate">
                            {skill.name}
                          </span>
                          {skill.tag && (
                            <span className="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-stone-100 text-stone-600 border border-stone-200/80 shrink-0">
                              {skill.tag}
                            </span>
                          )}
                        </div>

                        {/* 5-Block Rating Squares (Exact match to user's screenshot) */}
                        <div className="flex items-center gap-1.5 mt-2">
                          {[1, 2, 3, 4, 5].map((boxIdx) => {
                            const isFilled = boxIdx <= score;
                            return (
                              <span
                                key={boxIdx}
                                className={`inline-block w-3.5 h-3.5 rounded-[1.5px] transition-colors ${
                                  isFilled
                                    ? 'bg-stone-900 border border-stone-900'
                                    : 'border-[1.5px] border-stone-900 bg-white'
                                }`}
                              />
                            );
                          })}
                          <span className="text-[11px] font-mono font-medium text-stone-500 ml-1">
                            {score}/5
                          </span>
                        </div>

                        {skill.level && (
                          <p className="text-[11px] text-stone-500 font-light mt-1.5 truncate">
                            {skill.level}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Certificates & Credentials Section */}
      <div className="rounded-2xl sm:rounded-3xl bg-stone-900 text-[#FBF9F5] p-6 sm:p-10 shadow-2xl relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-stone-800/80 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-stone-800">
            <div>
              <div className="flex items-center gap-2 text-stone-400 text-xs uppercase tracking-wider font-semibold mb-1">
                <Award className="w-4 h-4 text-stone-300" />
                <span>{lang === 'en' ? 'Verified Credentials' : '공인 자격 및 교육 수료'}</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white">
                {lang === 'en' ? 'Certificates & Professional Programs' : '자격증 및 전문 수료 이력'}
              </h3>
              <p className="text-xs sm:text-sm text-stone-400 mt-1">
                {lang === 'en'
                  ? 'Official certifications in KOICA programs, business analytics, and engineering.'
                  : 'KOICA Step-up 프로그램, 비즈니스 엑셀 2급 공인 자격, 전기기사 수료 이력'}
              </p>
            </div>

            <button
              onClick={() => setIsAddModalOpen(true)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-white text-xs font-medium border border-stone-700 transition-colors shadow-xs shrink-0 self-start sm:self-auto"
            >
              <Plus className="w-4 h-4" />
              <span>{lang === 'en' ? 'Add Certificate' : '추가 자격증 등록'}</span>
            </button>
          </div>

          {/* Certificates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-6">
            {certs.map((cert) => {
              const isCustom = !certificatesList.some((def) => def.id === cert.id);
              return (
                <div
                  key={cert.id}
                  className="rounded-xl bg-stone-800/60 border border-stone-700/70 p-5 flex flex-col justify-between hover:border-stone-500 transition-colors relative group"
                >
                  <div>
                    {/* Badge & Date */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-stone-700 text-stone-300 border border-stone-600">
                        {cert.category[lang]}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono text-stone-400 flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-stone-500" />
                          {cert.date[lang]}
                        </span>
                        {isCustom && (
                          <button
                            onClick={() => handleDeleteCertificate(cert.id)}
                            className="text-stone-500 hover:text-rose-400 transition-colors p-0.5"
                            title={lang === 'en' ? 'Delete' : '삭제'}
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Title */}
                    <h4 className="font-serif text-base font-semibold text-white tracking-tight leading-snug">
                      {cert.title[lang]}
                    </h4>

                    {/* Issuer */}
                    <div className="flex items-center gap-1.5 text-xs text-stone-400 mt-1.5">
                      <Building2 className="w-3.5 h-3.5 shrink-0 text-stone-400" />
                      <span className="line-clamp-1">{cert.issuer[lang]}</span>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-stone-400 mt-2.5 font-light leading-relaxed">
                      {cert.description[lang]}
                    </p>
                  </div>

                  {/* Status Pill */}
                  <div className="pt-4 mt-4 border-t border-stone-700/60 flex items-center justify-between">
                    <span className="text-[11px] text-stone-400">
                      {lang === 'en' ? 'Status' : '취득 상태'}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-700/80 text-emerald-300 text-xs font-medium">
                      <CheckCircle2 className="w-3 h-3" />
                      {cert.status[lang]}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Add Certificate Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="w-full max-w-lg rounded-2xl bg-white border border-stone-200 shadow-2xl p-6 text-stone-900 relative">
            <div className="flex items-center justify-between pb-4 border-b border-stone-200 mb-5">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-stone-800" />
                <h3 className="font-serif text-lg font-semibold text-stone-900">
                  {lang === 'en' ? 'Add New Certificate' : '추가 자격증 및 수료증 등록'}
                </h3>
              </div>
              <button
                onClick={() => setIsAddModalOpen(false)}
                className="w-8 h-8 rounded-full flex items-center justify-center text-stone-500 hover:bg-stone-100 hover:text-stone-800 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleAddCertificate} className="space-y-4 text-xs">
              <div>
                <label className="block font-medium text-stone-700 mb-1">
                  {lang === 'en' ? 'Certificate / Program Name' : '자격증 또는 수료 프로그램 명칭'} *
                </label>
                <input
                  type="text"
                  required
                  placeholder={lang === 'en' ? 'e.g., DELE B2, Computer Specialist' : '예: 비즈니스 엑셀 2급, ODA 전문가 3급'}
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-stone-300 focus:outline-hidden focus:ring-2 focus:ring-stone-900 text-stone-900"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-medium text-stone-700 mb-1">
                    {lang === 'en' ? 'Issuing Organization' : '발급 및 주관 기관'}
                  </label>
                  <input
                    type="text"
                    placeholder={lang === 'en' ? 'e.g., KOICA, Chamber of Commerce' : '예: 한국국제협력단, 대한상공회의소'}
                    value={newIssuer}
                    onChange={(e) => setNewIssuer(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-stone-300 focus:outline-hidden focus:ring-2 focus:ring-stone-900 text-stone-900"
                  />
                </div>

                <div>
                  <label className="block font-medium text-stone-700 mb-1">
                    {lang === 'en' ? 'Year / Date' : '취득 및 수료 시기'}
                  </label>
                  <input
                    type="text"
                    placeholder={lang === 'en' ? 'e.g., 2026 or 2025.10' : '예: 2025년 또는 2026년 3월'}
                    value={newDate}
                    onChange={(e) => setNewDate(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-stone-300 focus:outline-hidden focus:ring-2 focus:ring-stone-900 text-stone-900"
                  />
                </div>
              </div>

              <div>
                <label className="block font-medium text-stone-700 mb-1">
                  {lang === 'en' ? 'Category / Field' : '분야 / 카테고리'}
                </label>
                <input
                  type="text"
                  placeholder={lang === 'en' ? 'e.g., Data Analytics, Languages' : '예: 실무 데이터, 글로벌 ODA, 어학'}
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-stone-300 focus:outline-hidden focus:ring-2 focus:ring-stone-900 text-stone-900"
                />
              </div>

              <div>
                <label className="block font-medium text-stone-700 mb-1">
                  {lang === 'en' ? 'Brief Description / Key Competency' : '간단한 설명 및 주요 역량'}
                </label>
                <textarea
                  rows={2}
                  placeholder={lang === 'en' ? 'Brief summary of the competency or syllabus...' : '해당 자격 또는 교육 과정에서 습득한 주요 내용...'}
                  value={newDesc}
                  onChange={(e) => setNewDesc(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-stone-300 focus:outline-hidden focus:ring-2 focus:ring-stone-900 text-stone-900"
                />
              </div>

              <div className="pt-3 flex justify-end gap-2 border-t border-stone-200">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2 rounded-lg border border-stone-300 text-stone-700 font-medium hover:bg-stone-50"
                >
                  {lang === 'en' ? 'Cancel' : '취소'}
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-stone-900 text-white font-medium hover:bg-stone-800"
                >
                  {lang === 'en' ? 'Add to Profile' : '자격증 추가 완료'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
