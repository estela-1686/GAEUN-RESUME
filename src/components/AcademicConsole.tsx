import React, { useState } from 'react';
import { Language } from '../types';
import { personalInfo } from '../data/portfolioData';
import { 
  GraduationCap, 
  Users, 
  Globe2, 
  Award, 
  TrendingUp, 
  CheckCircle2, 
  ArrowUpRight,
  Sparkles,
  Zap,
  BookOpen
} from 'lucide-react';

interface AcademicConsoleProps {
  lang: Language;
}

export const AcademicConsole: React.FC<AcademicConsoleProps> = ({ lang }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'academics' | 'leadership' | 'fieldwork'>('overview');

  return (
    <section className="py-8 sm:py-12 max-w-6xl mx-auto px-4 sm:px-6">
      {/* Console Frame with warm shadow, resembling the user image's featured dashboard */}
      <div className="relative rounded-2xl sm:rounded-3xl border border-stone-200/90 bg-[#F4F0E8]/70 backdrop-blur-md p-3 sm:p-5 shadow-xl shadow-stone-900/5">
        
        {/* Subtle decorative inner header */}
        <div className="flex items-center justify-between px-3 py-2 border-b border-stone-300/60 pb-3 mb-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-stone-300" />
            <div className="w-3 h-3 rounded-full bg-stone-300" />
            <div className="w-3 h-3 rounded-full bg-stone-300" />
            <span className="ml-2 text-xs font-mono text-stone-500 hidden sm:inline">
              portfolio-console.gaeun.bu.edu · 2024–2028
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-emerald-100 text-emerald-800 border border-emerald-200">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
              {lang === 'en' ? 'Active Scholar & President' : '학부 학생회장 & 우수장학생 재임 중'}
            </span>
          </div>
        </div>

        {/* Console Body: 2 Columns (Sidebar + Dashboard Canvas) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          
          {/* Left Console Nav */}
          <div className="lg:col-span-3 bg-white/70 rounded-xl p-3 sm:p-4 border border-stone-200/80 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 pb-4 mb-4 border-b border-stone-200">
                <div className="w-10 h-10 rounded-full bg-stone-900 text-[#FBF9F5] font-serif flex items-center justify-center text-lg font-medium shadow-sm">
                  GJ
                </div>
                <div>
                  <h3 className="font-serif text-sm font-semibold text-stone-900 leading-tight">
                    {lang === 'en' ? personalInfo.name.en : personalInfo.name.ko}
                  </h3>
                  <p className="text-[11px] text-stone-500">
                    {lang === 'en' ? 'BUFS B.A. Candidate' : '부산외대 학사과정'}
                  </p>
                </div>
              </div>

              <div className="space-y-1 text-xs">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-left font-medium transition-all ${
                    activeTab === 'overview'
                      ? 'bg-stone-900 text-stone-50 shadow-xs'
                      : 'text-stone-600 hover:bg-stone-100'
                  }`}
                >
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>{lang === 'en' ? 'Executive Overview' : '종합 성과 대시보드'}</span>
                </button>

                <button
                  onClick={() => setActiveTab('academics')}
                  className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-left font-medium transition-all ${
                    activeTab === 'academics'
                      ? 'bg-stone-900 text-stone-50 shadow-xs'
                      : 'text-stone-600 hover:bg-stone-100'
                  }`}
                >
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span>{lang === 'en' ? 'Academic (GPA 4.37)' : '학업 성적 (4.37 / 4.5)'}</span>
                </button>

                <button
                  onClick={() => setActiveTab('leadership')}
                  className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-left font-medium transition-all ${
                    activeTab === 'leadership'
                      ? 'bg-stone-900 text-stone-50 shadow-xs'
                      : 'text-stone-600 hover:bg-stone-100'
                  }`}
                >
                  <Users className="w-3.5 h-3.5" />
                  <span>{lang === 'en' ? 'Student Council Leadership' : '학생회 활동 및 리더십'}</span>
                </button>

                <button
                  onClick={() => setActiveTab('fieldwork')}
                  className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-left font-medium transition-all ${
                    activeTab === 'fieldwork'
                      ? 'bg-stone-900 text-stone-50 shadow-xs'
                      : 'text-stone-600 hover:bg-stone-100'
                  }`}
                >
                  <Globe2 className="w-3.5 h-3.5" />
                  <span>{lang === 'en' ? 'Global Field & Climate' : '글로벌 현장 및 기후 협약'}</span>
                </button>
              </div>
            </div>

            {/* Quick Contact snippet at bottom of sidebar */}
            <div className="pt-4 mt-4 border-t border-stone-200 text-[11px] text-stone-500 space-y-1">
              <div className="flex items-center justify-between">
                <span>{lang === 'en' ? 'Status' : '학적 상태'}</span>
                <span className="font-medium text-stone-800">{lang === 'en' ? 'Enrolled' : '재학 중'}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>{lang === 'en' ? 'Graduation' : '졸업 예정'}</span>
                <span className="font-medium text-stone-800">2028.02</span>
              </div>
            </div>
          </div>

          {/* Right Main Console Canvas */}
          <div className="lg:col-span-9 bg-white/90 rounded-xl p-4 sm:p-6 border border-stone-200/80">
            
            {/* Top Bar inside Canvas */}
            <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-stone-100 mb-5">
              <div>
                <h4 className="font-serif text-lg sm:text-xl font-medium text-stone-900">
                  {lang === 'en' ? 'Welcome to Gaeun Jeoung\'s Portfolio' : '정가은 학부 학생회장 종합 포트폴리오'}
                </h4>
                <p className="text-xs text-stone-500 mt-0.5">
                  {lang === 'en' 
                    ? '4 Interdisciplinary Majors · International Development · Smart Energy · AI Agent Convergence'
                    : '4개 융합 전공 이수 · 국제개발협력학 · 스마트에너지환경 · 스페인어 · AI Agent 융합'}
                </p>
              </div>

              <div className="text-right">
                <span className="text-xs font-serif italic text-stone-500">
                  {lang === 'en' ? 'National Merit Awardee' : '국가 우수 인재'}
                </span>
                <div className="text-xs font-semibold text-stone-800">
                  {lang === 'en' ? 'Humanities 100 Years Scholar' : '인문100년장학금 선발'}
                </div>
              </div>
            </div>

            {/* Dynamic Content based on active tab */}
            {activeTab === 'overview' && (
              <div className="space-y-5">
                {/* Recent Milestones Table (Replicating the exact "Recent reports" section from image) */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                      {lang === 'en' ? 'Recent Key Milestones' : '최근 주요 마일스톤 및 성과'}
                    </span>
                    <span className="text-[11px] text-stone-400">
                      {lang === 'en' ? 'Verified records' : '공식 인증 기록'}
                    </span>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="flex items-center justify-between p-2.5 rounded-lg bg-stone-50 hover:bg-stone-100/80 transition-colors border border-stone-200/60">
                      <div className="flex items-center gap-3">
                        <span className="text-stone-400 font-mono text-[11px]">2026.06</span>
                        <span className="font-medium text-stone-900">
                          {lang === 'en' ? 'Humanities 100 Years Scholarship Recipient (KOSAF)' : '한국장학재단 인문100년장학생 최종 선발 (국가 전액 장학금)'}
                        </span>
                      </div>
                      <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-100 text-emerald-800 uppercase tracking-wider">
                        {lang === 'en' ? 'Awarded' : '최종 선발'}
                      </span>
                    </div>

                    <div className="flex items-center justify-between p-2.5 rounded-lg bg-stone-50 hover:bg-stone-100/80 transition-colors border border-stone-200/60">
                      <div className="flex items-center gap-3">
                        <span className="text-stone-400 font-mono text-[11px]">2026</span>
                        <span className="font-medium text-stone-900">
                          {lang === 'en' ? 'Student Body President & KOICA Overseas Volunteers MOU Signing' : '국제개발협력학부 학생회장 취임 및 KOICA 해외봉사단 공식 MOU 체결'}
                        </span>
                      </div>
                      <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-blue-100 text-blue-800 uppercase tracking-wider">
                        {lang === 'en' ? 'Active' : '진행 중'}
                      </span>
                    </div>

                    <div className="flex items-center justify-between p-2.5 rounded-lg bg-stone-50 hover:bg-stone-100/80 transition-colors border border-stone-200/60">
                      <div className="flex items-center gap-3">
                        <span className="text-stone-400 font-mono text-[11px]">2026.01</span>
                        <span className="font-medium text-stone-900">
                          {lang === 'en' ? 'LCOY Korea Organizing Committee (Yeosu & Seoul Youth Conferences)' : 'LCOY Korea 기획팀 — 전국 청년 기후 컨퍼런스(여수·서울 80+명 참가) 기획'}
                        </span>
                      </div>
                      <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-stone-200 text-stone-800 uppercase tracking-wider">
                        {lang === 'en' ? 'Completed' : '성료'}
                      </span>
                    </div>

                    <div className="flex items-center justify-between p-2.5 rounded-lg bg-stone-50 hover:bg-stone-100/80 transition-colors border border-stone-200/60">
                      <div className="flex items-center gap-3">
                        <span className="text-stone-400 font-mono text-[11px]">2025.11</span>
                        <span className="font-medium text-stone-900">
                          {lang === 'en' ? 'AIMUN (Model United Nations) Award of Excellence' : 'AIMUN 모의유엔대회 우수상 수상 (외교 협상 및 결의안 입안)'}
                        </span>
                      </div>
                      <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-amber-100 text-amber-800 uppercase tracking-wider">
                        {lang === 'en' ? 'Excellence' : '우수상'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* 6 Metric Blocks (Exactly styled like the 6 stat blocks in the user's dashboard image!) */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                  <div className="p-3 rounded-lg bg-stone-50 border border-stone-200/70">
                    <span className="text-[11px] text-stone-500 block">
                      {lang === 'en' ? 'Cumulative GPA' : '누적 학업 평점'}
                    </span>
                    <div className="flex items-baseline gap-1.5 mt-1">
                      <span className="text-xl font-serif font-bold text-stone-900">4.37</span>
                      <span className="text-[11px] text-stone-400">/ 4.5</span>
                    </div>
                    <span className="text-[10px] text-emerald-700 font-medium mt-1 inline-block">
                      {lang === 'en' ? 'Top 1% Honor' : '학부 최우수 성적'}
                    </span>
                  </div>

                  <div className="p-3 rounded-lg bg-stone-50 border border-stone-200/70">
                    <span className="text-[11px] text-stone-500 block">
                      {lang === 'en' ? 'Council Terms' : '학생회 활동 임기'}
                    </span>
                    <div className="flex items-baseline gap-1.5 mt-1">
                      <span className="text-xl font-serif font-bold text-stone-900">4</span>
                      <span className="text-[11px] text-stone-400">Terms</span>
                    </div>
                    <span className="text-[10px] text-stone-600 font-medium mt-1 inline-block">
                      {lang === 'en' ? 'Deputy → VP → Pres.' : '기획차장→부장→부회장→회장'}
                    </span>
                  </div>

                  <div className="p-3 rounded-lg bg-stone-50 border border-stone-200/70">
                    <span className="text-[11px] text-stone-500 block">
                      {lang === 'en' ? 'Multiple Majors' : '융합 전공 트랙'}
                    </span>
                    <div className="flex items-baseline gap-1.5 mt-1">
                      <span className="text-xl font-serif font-bold text-stone-900">4</span>
                      <span className="text-[11px] text-stone-400">Tracks</span>
                    </div>
                    <span className="text-[10px] text-stone-600 font-medium mt-1 inline-block">
                      {lang === 'en' ? 'Dev, Spanish, Energy, AI' : '개발협력·스페인어·에너지·AI'}
                    </span>
                  </div>

                  <div className="p-3 rounded-lg bg-stone-50 border border-stone-200/70">
                    <span className="text-[11px] text-stone-500 block">
                      {lang === 'en' ? 'Youth Delegates' : '컨퍼런스 총괄 참가자'}
                    </span>
                    <div className="flex items-baseline gap-1.5 mt-1">
                      <span className="text-xl font-serif font-bold text-stone-900">80+</span>
                      <span className="text-[11px] text-stone-400">× 2 Sessions</span>
                    </div>
                    <span className="text-[10px] text-stone-600 font-medium mt-1 inline-block">
                      {lang === 'en' ? 'Yeosu & Seoul (LCOY)' : 'LCOY Korea 여수 및 서울'}
                    </span>
                  </div>

                  <div className="p-3 rounded-lg bg-stone-50 border border-stone-200/70">
                    <span className="text-[11px] text-stone-500 block">
                      {lang === 'en' ? 'Global Engagements' : '대외 및 글로벌 프로그램'}
                    </span>
                    <div className="flex items-baseline gap-1.5 mt-1">
                      <span className="text-xl font-serif font-bold text-stone-900">10+</span>
                      <span className="text-[11px] text-stone-400">Programs</span>
                    </div>
                    <span className="text-[10px] text-stone-600 font-medium mt-1 inline-block">
                      {lang === 'en' ? 'UN, KOICA, Daejayeon' : 'KOICA, 유니세프, 반기문재단 등'}
                    </span>
                  </div>

                  <div className="p-3 rounded-lg bg-stone-50 border border-stone-200/70">
                    <span className="text-[11px] text-stone-500 block">
                      {lang === 'en' ? 'Research & TA' : '학사 조교 및 연구보조'}
                    </span>
                    <div className="flex items-baseline gap-1.5 mt-1">
                      <span className="text-xl font-serif font-bold text-stone-900">2</span>
                      <span className="text-[11px] text-stone-400">Roles</span>
                    </div>
                    <span className="text-[10px] text-stone-600 font-medium mt-1 inline-block">
                      {lang === 'en' ? 'TA (2 terms) & RA (Inst.)' : '학부 조교(2학기) & 이주연구소 RA'}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Academics Tab */}
            {activeTab === 'academics' && (
              <div className="space-y-4 text-xs">
                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/80">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-serif text-base font-semibold text-stone-900">
                      {lang === 'en' ? 'Busan University of Foreign Studies' : '부산외국어대학교'}
                    </span>
                    <span className="font-mono text-stone-500">Mar. 2024 – Feb. 2028 (Expected)</span>
                  </div>
                  <p className="text-stone-600 mb-3">
                    {lang === 'en' 
                      ? 'B.A. Candidate pursuing simultaneous multi-major convergence in International Development, Spanish, Smart Energy & Environment, and AI Agent Systems.'
                      : '국제개발협력학, 스페인어학, 스마트에너지환경학, AI Agent 융합전공을 동시에 이수하며 다학제 융합 역량을 구축하고 있습니다.'}
                  </p>
                  <div className="flex items-center gap-4 text-stone-800 font-medium">
                    <span className="px-2.5 py-1 rounded bg-stone-200/70">
                      {lang === 'en' ? 'GPA: 4.37 / 4.5' : '누적 평점: 4.37 / 4.5'}
                    </span>
                    <span className="px-2.5 py-1 rounded bg-amber-100 text-amber-900">
                      {lang === 'en' ? 'Humanities 100 Years Scholar' : '국가 우수 인문100년장학생'}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3 rounded-lg border border-stone-200 bg-white">
                    <span className="font-semibold text-stone-900 block mb-1">
                      {lang === 'en' ? '1. International Development' : '1. 국제개발협력학 (제1전공)'}
                    </span>
                    <p className="text-stone-500 text-[11px]">
                      {lang === 'en'
                        ? 'ODA policy, SDGs, development finance, project cycle management, KOICA frameworks.'
                        : 'ODA 정책, SDGs, 개발재원, 프로젝트 사이클 관리(PCM), KOICA 사업 체계.'}
                    </p>
                  </div>
                  <div className="p-3 rounded-lg border border-stone-200 bg-white">
                    <span className="font-semibold text-stone-900 block mb-1">
                      {lang === 'en' ? '2. Spanish' : '2. 스페인어학 (언어 및 지역학)'}
                    </span>
                    <p className="text-stone-500 text-[11px]">
                      {lang === 'en'
                        ? 'Advanced Spanish linguistics, Latin American regional politics and cultural diplomacy.'
                        : '스페인어 어학 심화, 중남미 지역 정치·사회 이해 및 다자간 외교 커뮤니케이션.'}
                    </p>
                  </div>
                  <div className="p-3 rounded-lg border border-stone-200 bg-white">
                    <span className="font-semibold text-stone-900 block mb-1">
                      {lang === 'en' ? '3. Smart Energy & Environment' : '3. 스마트에너지·환경학 (융합전공)'}
                    </span>
                    <p className="text-stone-500 text-[11px]">
                      {lang === 'en'
                        ? 'Renewable energy systems, microgrid distribution, Electrical Engineer bootcamp, carbon policy.'
                        : '신재생에너지 발전, 마이크로그리드, 전기기사 취득 부트캠프, 탄소중립 정책.'}
                    </p>
                  </div>
                  <div className="p-3 rounded-lg border border-stone-200 bg-white">
                    <span className="font-semibold text-stone-900 block mb-1">
                      {lang === 'en' ? '4. AI Agent Convergence' : '4. AI Agent 융합전공 (신기술)'}
                    </span>
                    <p className="text-stone-500 text-[11px]">
                      {lang === 'en'
                        ? 'Agentic LLM workflows, automated data analysis, algorithmic decision modeling for public policy.'
                        : '에이전트 기반 AI 워크플로우, 데이터 자동화 분석, 공공 정책 모델링 및 최적화.'}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Leadership Tab */}
            {activeTab === 'leadership' && (
              <div className="space-y-3 text-xs">
                <div className="p-3 rounded-lg bg-stone-50 border border-stone-200/80">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-stone-900">
                      {lang === 'en' ? '4 Consecutive Leadership Terms' : '4개 학기 연속 학생회 주요 직책 역임'}
                    </span>
                    <span className="text-stone-400 font-mono">2024.09 – Present</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 mt-2 text-[11px]">
                    <span className="px-2 py-1 rounded bg-stone-200 text-stone-700">1. Deputy Planning Director</span>
                    <span className="text-stone-400">→</span>
                    <span className="px-2 py-1 rounded bg-stone-200 text-stone-700">2. Planning Director</span>
                    <span className="text-stone-400">→</span>
                    <span className="px-2 py-1 rounded bg-stone-200 text-stone-700">3. Vice President</span>
                    <span className="text-stone-400">→</span>
                    <span className="px-2 py-1 rounded bg-stone-900 text-stone-50 font-medium">4. Student Body President</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="p-2.5 rounded-lg border border-stone-200 bg-white flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium text-stone-900">
                        {lang === 'en' ? 'MOU Signing with KOICA Overseas Volunteers' : 'KOICA 해외봉사단과의 공식 MOU 체결 주도'}
                      </span>
                      <p className="text-stone-500 text-[11px]">
                        {lang === 'en'
                          ? 'Led student representation to secure partnership opening direct global volunteer opportunities.'
                          : '학생 대표단으로서 KOICA 해외봉사단과의 업무협약 체결을 주도하여 재학생의 글로벌 현장 파견 기회 확장.'}
                      </p>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-lg border border-stone-200 bg-white flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium text-stone-900">
                        {lang === 'en' ? 'KOICA Career Information Sessions (2024–2025)' : 'KOICA 진로설명회 기획 및 개최 (2024~2025)'}
                      </span>
                      <p className="text-stone-500 text-[11px]">
                        {lang === 'en'
                          ? 'Hosted professional career panels introducing students to public agency careers.'
                          : '국제개발 공공기관 및 개발 컨설팅 분야 취업 기회를 소개하는 진로 토크콘서트 기획 및 정례화.'}
                      </p>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-lg border border-stone-200 bg-white flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium text-stone-900">
                        {lang === 'en' ? '4 Consecutive Ceremonies & Department Retreats' : '4개 학기 연속 개·종강 총회 및 대규모 학부 MT 총괄'}
                      </span>
                      <p className="text-stone-500 text-[11px]">
                        {lang === 'en'
                          ? 'Directed semester ceremonies and expanded leadership retreats to department-wide scale.'
                          : '4개 학기 총회 기획 및 2026년 봄·가을 학부 전체 연합 MT 총괄 지휘.'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Fieldwork Tab */}
            {activeTab === 'fieldwork' && (
              <div className="space-y-3 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3 rounded-lg border border-stone-200 bg-white">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-stone-900">
                        {lang === 'en' ? 'Overseas Frontier Rwanda (TF)' : '해외 프론티어 르완다 기획 TF'}
                      </span>
                      <span className="text-[10px] text-stone-400 font-mono">2025</span>
                    </div>
                    <p className="text-stone-500 text-[11px]">
                      {lang === 'en'
                        ? 'Planned overseas field itinerary, selected target international organizations, and coordinated liaison schedules.'
                        : '현지 견학 일정 기획, 방문 국제기구 및 유관 기관 선정, 사전 섭외 및 일정 조율 총괄.'}
                    </p>
                  </div>

                  <div className="p-3 rounded-lg border border-stone-200 bg-white">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-stone-900">
                        {lang === 'en' ? 'Overseas Frontier Laos Field Visit' : '해외 프론티어 라오스 현장 연수'}
                      </span>
                      <span className="text-[10px] text-stone-400 font-mono">2024.07</span>
                    </div>
                    <p className="text-stone-500 text-[11px]">
                      {lang === 'en'
                        ? 'Good Neighbors Laos, UNICEF, and UNESCO field offices inspection.'
                        : '굿네이버스 라오스 지부, UNICEF, UNESCO 현지 사무소 방문 및 국제기구 현장 실사.'}
                    </p>
                  </div>

                  <div className="p-3 rounded-lg border border-stone-200 bg-white">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-stone-900">
                        {lang === 'en' ? 'LCOY Korea Climate Conferences' : 'LCOY Korea 기획팀 (기후회의)'}
                      </span>
                      <span className="text-[10px] text-stone-400 font-mono">2026</span>
                    </div>
                    <p className="text-stone-500 text-[11px]">
                      {lang === 'en'
                        ? 'Co-organized Yeosu and Seoul conferences for 80+ youth climate delegates.'
                        : 'UNFCCC 산하 공식 청년 기후회의 여수 및 서울 컨퍼런스(80+명 참가) 기획 운영.'}
                    </p>
                  </div>

                  <div className="p-3 rounded-lg border border-stone-200 bg-white">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-stone-900">
                        {lang === 'en' ? 'Ban Ki-moon Fdn Climate Leaders' : '반기문재단 기후환경리더 8기'}
                      </span>
                      <span className="text-[10px] text-stone-400 font-mono">2025–2026</span>
                    </div>
                    <p className="text-stone-500 text-[11px]">
                      {lang === 'en'
                        ? '6-month environmental policy curriculum by 8th UN Sec-Gen foundation.'
                        : '반기문재단 × 대자연 주관 6개월 탄소중립 및 글로벌 환경 리더십 프로그램 수료.'}
                    </p>
                  </div>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
