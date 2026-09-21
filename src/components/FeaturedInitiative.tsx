import React from 'react';
import { Language } from '../types';
import { personalInfo } from '../data/portfolioData';
import { Quote, FileCheck, Award, Handshake, Users, CheckCircle2 } from 'lucide-react';

interface FeaturedInitiativeProps {
  lang: Language;
}

export const FeaturedInitiative: React.FC<FeaturedInitiativeProps> = ({ lang }) => {
  return (
    <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-stone-200/90 bg-[#F4F0E8]/70 backdrop-blur-sm p-6 sm:p-10 lg:p-12 shadow-sm">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Visual Showcase Card */}
          <div className="lg:col-span-6 relative">
            <div className="rounded-2xl bg-white border border-stone-200/90 p-6 sm:p-8 shadow-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-stone-100 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center justify-between pb-4 border-b border-stone-100 mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-stone-900 text-stone-50 flex items-center justify-center font-serif text-sm">
                    K
                  </span>
                  <div>
                    <h4 className="text-xs font-semibold text-stone-900">
                      KOICA Overseas Volunteers
                    </h4>
                    <span className="text-[10px] text-stone-400 font-mono">
                      Memorandum of Understanding (MOU)
                    </span>
                  </div>
                </div>

                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200">
                  {lang === 'en' ? 'Official Student Signatory' : '학생 대표 서명'}
                </span>
              </div>

              {/* Graphical representation of the partnership */}
              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200/70 flex items-start gap-3">
                  <Handshake className="w-4 h-4 text-stone-800 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-semibold text-stone-900">
                      {lang === 'en' ? 'Direct Overseas Volunteer Pathways' : '글로벌 해외봉사 파견 트랙 구축'}
                    </div>
                    <p className="text-[11px] text-stone-500 mt-0.5">
                      {lang === 'en'
                        ? 'Institutionalized pipeline for undergraduate students to join KOICA global field projects.'
                        : '재학생들의 공적개발원조(ODA) 현장 활동 및 해외봉사 지원 공식 연계.'}
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200/70 flex items-start gap-3">
                  <Users className="w-4 h-4 text-stone-800 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-semibold text-stone-900">
                      {lang === 'en' ? '4 Consecutive Leadership Terms' : '4개 학기 연속 학생회 활동 및 신임'}
                    </div>
                    <p className="text-[11px] text-stone-500 mt-0.5">
                      {lang === 'en'
                        ? 'Deputy Planning Director → Planning Director → Vice President → President (2026).'
                        : '기획차장(2024)에서 시작해 2026년 학부 학생회장으로 만장일치 신임 추대.'}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-500">
                <span>{lang === 'en' ? 'BUFS Student Council' : '부산외대 국제개발협력학부'}</span>
                <span className="font-medium text-stone-800">2024 – 2026</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Quote & Impact */}
          <div className="lg:col-span-6 space-y-6">
            <div className="w-10 h-10 rounded-full bg-stone-200 text-stone-800 flex items-center justify-center">
              <Quote className="w-5 h-5" />
            </div>

            <blockquote className="font-serif text-xl sm:text-2xl md:text-3xl text-stone-900 font-normal leading-snug break-keep">
              {lang === 'en' ? (
                <>
                  "I believe the true significance lies in connecting international development students beyond classroom theory to tangible, real-world opportunities like KOICA overseas volunteering."
                </>
              ) : (
                <>
                  "개발협력전공의 학생들이 단순한 강의실에서 배우는 이론을 넘어 KOICA 해외봉사라는 실제적 기회로 연결하는 데 의의가 있다고 생각합니다."
                </>
              )}
            </blockquote>

            <p className="text-stone-600 text-sm sm:text-base font-light leading-relaxed break-keep">
              {lang === 'en' ? (
                <>
                  Serving in the Student Council of International Development Cooperation, Gaeun organized regular KOICA career sessions and helped realize an institutional partnership (MOU) with KOICA Overseas Volunteers—creating a direct pathway for undergraduate students to expand classroom knowledge into hands-on global field experience.
                </>
              ) : (
                <>
                  국제개발협력학부 학생회 활동을 이어오며 KOICA 진로 설명회를 정례화하고, 학부 차원의 KOICA 해외봉사단 업무협약(MOU) 체결을 함께 이끌어냈습니다. 학우들이 강의실에서 배운 개발협력 이론을 실제 글로벌 현장 경험으로 확장할 수 있는 탄탄한 발판을 마련하는 데 집중했습니다.
                </>
              )}
            </p>

            <div className="pt-2 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-stone-900 text-stone-50 font-serif flex items-center justify-center text-sm font-medium">
                GJ
              </div>
              <div>
                <div className="text-sm font-semibold text-stone-900">
                  {lang === 'en' ? personalInfo.name.en : personalInfo.name.ko}
                </div>
                <div className="text-xs text-stone-500">
                  {lang === 'en' 
                    ? 'Student Body President, Dept. of International Development Cooperation'
                    : '부산외국어대학교 국제개발협력학부 학생회장'}
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
