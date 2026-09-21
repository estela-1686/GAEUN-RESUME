import React, { useState } from 'react';
import { Language } from '../types';
import { faqData } from '../data/portfolioData';
import { Sparkles, Plus, Minus } from 'lucide-react';

interface FaqSectionProps {
  lang: Language;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ lang }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-stone-300/80 bg-stone-100/80 text-[11px] font-semibold uppercase tracking-wider text-stone-600 mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{lang === 'en' ? 'Frequently Asked Questions' : '자주 묻는 질문'}</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl tracking-tight text-stone-900 font-normal leading-tight">
          {lang === 'en' ? (
            <>Clearing doubts and <span className="italic">background details</span></>
          ) : (
            <>학문적 지향과 <span className="italic font-normal">비전에 대한 질의응답</span></>
          )}
        </h2>
        
        <p className="mt-4 text-stone-600 text-sm sm:text-base leading-relaxed">
          {lang === 'en'
            ? 'Key insights into Gaeun\'s academic convergence, leadership philosophy, and future pathways.'
            : '전공 융합의 취지, 학생회 리더십 성과 및 향후 연구/진로 계획에 대한 핵심 정리입니다.'}
        </p>
      </div>

      {/* Accordion list */}
      <div className="space-y-3">
        {faqData.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="rounded-2xl border border-stone-200/90 bg-white transition-all overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-stone-50/70 transition-colors"
                aria-expanded={isOpen}
              >
                <span className="font-serif text-base sm:text-lg font-medium text-stone-900">
                  {item.question[lang]}
                </span>
                <span className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center text-stone-600 shrink-0 transition-transform">
                  {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </span>
              </button>

              {isOpen && (
                <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-stone-600 text-xs sm:text-sm leading-relaxed font-light border-t border-stone-100 pt-4">
                  {item.answer[lang]}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
