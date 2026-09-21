/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Language } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AcademicConsole } from './components/AcademicConsole';
import { QuoteBanner } from './components/QuoteBanner';
import { MajorsConvergence } from './components/MajorsConvergence';
import { ProjectsSection } from './components/ProjectsSection';
import { FeaturedInitiative } from './components/FeaturedInitiative';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [lang, setLang] = useState<Language>('ko');
  const [resumeOpen, setResumeOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-stone-900 selection:bg-stone-900 selection:text-stone-100 flex flex-col font-sans antialiased">
      {/* Top Navigation */}
      <Navbar
        lang={lang}
        setLang={setLang}
        onOpenResume={() => setResumeOpen(true)}
      />

      <main className="flex-1">
        {/* 1. Hero Section with Headline, Subtitle, CTA and Partner Logos */}
        <Hero
          lang={lang}
          onOpenResume={() => setResumeOpen(true)}
        />

        {/* 2. Interactive Academic & Leadership Dashboard Console */}
        <AcademicConsole lang={lang} />

        {/* 3. Leadership Quote Banner & Key Metrics */}
        <QuoteBanner lang={lang} />

        {/* 4. 4 Multiple Majors Matrix & Synergy */}
        <MajorsConvergence lang={lang} />

        {/* 5. Landmark Initiative Spotlight: KOICA MOU & Student Council */}
        <FeaturedInitiative lang={lang} />

        {/* 6. Projects & Initiatives Grid with Filter & Details Modal */}
        <ProjectsSection lang={lang} />

        {/* 7. Skills, Multilingual Tools, AI Agent & Electrical Certificate */}
        <SkillsSection lang={lang} />

        {/* 8. Professional Experience, Honors, and Extra Engagements Timeline */}
        <ExperienceTimeline lang={lang} />

        {/* 9. Clearing Doubts & FAQ Accordion */}
        <FaqSection lang={lang} />

        {/* 10. Direct Inquiry & Contact Details */}
        <ContactSection lang={lang} />
      </main>

      {/* Footer */}
      <Footer
        lang={lang}
        onOpenResume={() => setResumeOpen(true)}
      />

      {/* Full Official Curriculum Vitae (Printable PDF Modal) */}
      <ResumeModal
        isOpen={resumeOpen}
        lang={lang}
        onClose={() => setResumeOpen(false)}
      />
    </div>
  );
}
