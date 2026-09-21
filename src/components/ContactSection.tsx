import React, { useState } from 'react';
import { Language } from '../types';
import { personalInfo } from '../data/portfolioData';
import { Mail, Phone, MapPin, Copy, Check, Send, Sparkles, ArrowUpRight } from 'lucide-react';

interface ContactSectionProps {
  lang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ lang }) => {
  const [copied, setCopied] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-stone-200/90 bg-[#F4F0E8]/80 p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-sm">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-stone-300/80 bg-white text-[11px] font-semibold uppercase tracking-wider text-stone-600">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'Get in Touch' : '문의 및 협업 제안'}</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl tracking-tight text-stone-900 font-normal leading-tight">
              {lang === 'en' ? (
                <>Let's discuss future <span className="italic">collaborations & policy initiatives</span></>
              ) : (
                <>국제개발 및 지속가능성 프로젝트, <br /><span className="italic font-normal">언제든 연락을 환영합니다.</span></>
              )}
            </h2>

            <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-light">
              {lang === 'en'
                ? 'Open to global fellowships, international development research, climate policy roundtables, and public sector opportunities.'
                : '국제기구 및 ODA 연구 과제, 기후 환경 정책 포럼, 청년 다자외교 프로젝트 등 의미 있는 협업 기회에 열려 있습니다.'}
            </p>

            {/* Direct Contact Cards */}
            <div className="space-y-3 pt-2">
              {/* Email */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-stone-200/80 shadow-2xs">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-stone-100 flex items-center justify-center text-stone-700">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-stone-400 font-mono uppercase">
                      {lang === 'en' ? 'Primary Email' : '공식 이메일'}
                    </div>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-xs sm:text-sm font-medium text-stone-900 hover:underline"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-stone-200 hover:bg-stone-50 text-xs font-medium text-stone-700 transition-colors"
                  title="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-semibold">{lang === 'en' ? 'Copied' : '복사됨'}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-stone-500" />
                      <span>{lang === 'en' ? 'Copy' : '복사'}</span>
                    </>
                  )}
                </button>
              </div>

              {/* Phone */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-stone-200/80 shadow-2xs">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-stone-100 flex items-center justify-center text-stone-700">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-stone-400 font-mono uppercase">
                      {lang === 'en' ? 'Mobile Contact' : '연락처'}
                    </div>
                    <a
                      href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`}
                      className="text-xs sm:text-sm font-medium text-stone-900 hover:underline"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                <span className="text-[11px] font-mono text-stone-400 px-2 py-1 bg-stone-50 rounded">
                  GMT+9 (Korea)
                </span>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-stone-200/80 shadow-2xs text-xs">
                <div className="w-9 h-9 rounded-lg bg-stone-100 flex items-center justify-center text-stone-700 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] text-stone-400 font-mono uppercase">
                    {lang === 'en' ? 'Base of Operations' : '활동 거점'}
                  </div>
                  <div className="font-medium text-stone-900">
                    {personalInfo.location[lang]}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Message Form */}
          <div className="lg:col-span-6 bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-sm">
            {formSent ? (
              <div className="py-10 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-medium text-stone-900">
                  {lang === 'en' ? 'Message Sent Successfully' : '메시지가 성공적으로 전송되었습니다'}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 max-w-sm mx-auto font-light">
                  {lang === 'en'
                    ? 'Thank you for reaching out. Gaeun will respond via email as soon as possible.'
                    : '소중한 연락 감사드립니다. 남겨주신 이메일 주소로 빠른 시일 내에 회신드리겠습니다.'}
                </p>
                <button
                  onClick={() => setFormSent(false)}
                  className="mt-4 px-4 py-2 rounded-full border border-stone-300 text-xs font-medium text-stone-700 hover:bg-stone-50"
                >
                  {lang === 'en' ? 'Send another note' : '새로운 메시지 작성'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <h3 className="font-serif text-lg font-medium text-stone-900">
                    {lang === 'en' ? 'Send a Direct Inquiry' : '간편 문의 보내기'}
                  </h3>
                  <p className="text-xs text-stone-500 mt-0.5 font-light">
                    {lang === 'en'
                      ? 'Inquiries are sent directly to jeounggaeun@naver.com'
                      : '입력하신 내용은 정가은 학생회장의 네이버 메일로 전달됩니다.'}
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    {lang === 'en' ? 'Your Name or Organization' : '성함 또는 소속 기관'}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={lang === 'en' ? 'e.g., KOICA Program Officer, Professor Kim' : '예: 한국국제협력단 실무관, 김교수'}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-stone-900/20 text-xs text-stone-900 bg-[#FBF9F5]/40"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    {lang === 'en' ? 'Your Email Address' : '회신받으실 이메일'}
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@organization.org"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-stone-900/20 text-xs text-stone-900 bg-[#FBF9F5]/40"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    {lang === 'en' ? 'Message / Proposal' : '문의 또는 제안 내용'}
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={lang === 'en' ? 'Briefly describe your project, timeline, or request...' : '프로젝트 내용, 일정, 또는 협업 제안을 적어주세요...'}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-stone-900/20 text-xs text-stone-900 bg-[#FBF9F5]/40"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-stone-900 text-stone-50 hover:bg-stone-800 text-xs font-medium flex items-center justify-center gap-2 transition-colors shadow-xs"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{lang === 'en' ? 'Transmit Inquiry' : '문의 전송하기'}</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
