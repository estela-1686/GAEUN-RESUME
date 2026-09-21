import { ProjectItem, WorkExperienceItem, AwardItem, ExtraExperienceItem, SkillCategory, CertificateItem, FaqItem } from '../types';

export const personalInfo = {
  name: {
    en: "Gaeun Jeoung",
    ko: "정가은"
  },
  title: {
    en: "International Development Cooperation · Smart Energy & Environment · AI Agent Convergence",
    ko: "국제개발협력학 · 스마트에너지환경 · 스페인어 · AI Agent 융합"
  },
  headline: {
    en: "Building sustainable global futures through policy, clean energy, and AI innovation.",
    ko: "국제개발협력과 청정에너지, 그리고 AI 융합 기술로 지속 가능한 미래를 설계합니다."
  },
  bio: {
    en: "B.A. Candidate at Busan University of Foreign Studies with a cumulative GPA of 4.37 / 4.5. Student Body President of International Development Cooperation, Humanities 100 Years Scholar, and youth delegate with field experience spanning Laos, Rwanda TF, and national climate conferences.",
    ko: "부산외국어대학교 국제개발협력전공 재학 중(학점 4.37/4.5). 국제개발협력학부 학생회장 및 인문100년장학생으로서 라오스 해외 프론티어, 르완다 TF, LCOY Korea 기후 컨퍼런스 기획 등 글로벌 현장과 정책을 연결하고 있습니다."
  },
  email: "jeounggaeun@naver.com",
  phone: "(+82) 010-4822-3777",
  location: {
    en: "Busan & Seoul, South Korea",
    ko: "대한민국 부산 및 서울"
  },
  gpa: "4.37 / 4.5",
  education: {
    institution: {
      en: "Busan University of Foreign Studies (BUFS)",
      ko: "부산외국어대학교"
    },
    degree: {
      en: "B.A. Candidate — Multiple Majors",
      ko: "학사 과정 — 4개 다중전공 (복수/융합)"
    },
    majors: [
      {
        name: { en: "International Development Cooperation", ko: "국제개발협력학" },
        description: {
          en: "ODA policy frameworks, sustainable development goals (SDGs), project cycle management, and multilateral diplomacy.",
          ko: "공적개발원조(ODA) 정책 체계, 지속가능발전목표(SDGs), 사업 주기 관리(PCM) 및 다자간 외교 협력."
        },
        badge: "Primary Major"
      },
      {
        name: { en: "Spanish", ko: "스페인어학" },
        description: {
          en: "Language proficiency, Latin American regional studies, and intercultural diplomatic communication.",
          ko: "스페인어 어학 역량, 중남미 지역학 및 다문화 국제 커뮤니케이션."
        },
        badge: "Language Major"
      },
      {
        name: { en: "Smart Energy & Environment", ko: "스마트에너지·환경학" },
        description: {
          en: "Renewable energy systems, climate policy, carbon neutrality, and electrical engineering fundamentals.",
          ko: "신재생에너지 시스템, 기후변화 정책, 탄소중립 및 전기공학 기초 역량."
        },
        badge: "Convergence Major"
      },
      {
        name: { en: "AI Agent Convergence", ko: "AI Agent 융합전공" },
        description: {
          en: "Artificial intelligence models, prompt engineering, agentic workflow automation, and computational problem-solving.",
          ko: "인공지능 모델 활용, 프롬프트 엔지니어링, 에이전트 기반 자동화 워크플로우 및 데이터 기반 의사결정."
        },
        badge: "Emerging Tech"
      }
    ],
    period: {
      en: "Mar. 2024 – Feb. 2028 (Expected)",
      ko: "2024년 3월 – 2028년 2월 (졸업 예정)"
    },
    location: {
      en: "Busan, South Korea",
      ko: "부산"
    }
  },
  metrics: [
    {
      value: "4.37",
      suffix: "/ 4.5",
      label: { en: "Academic GPA", ko: "학부 누적 평점" },
      subtext: { en: "Top Percentile Excellence", ko: "최우수 성적 및 인문100년장학생" }
    },
    {
      value: "4",
      suffix: "Terms",
      label: { en: "Consecutive Leadership", ko: "학생회 4개 학기 연속 리더십" },
      subtext: { en: "Deputy Dir. → VP → President", ko: "기획차장 → 기획부장 → 부회장 → 학생회장" }
    },
    {
      value: "80+",
      suffix: "Delegates",
      label: { en: "Climate Conference Co-Lead", ko: "청년 기후 컨퍼런스 기획" },
      subtext: { en: "LCOY Korea Yeosu & Seoul", ko: "LCOY Korea 여수/서울 기획" }
    },
    {
      value: "10+",
      suffix: "Programs",
      label: { en: "Global & ODA Initiatives", ko: "국제협력 및 ODA 프로그램" },
      subtext: { en: "KOICA, UN, Ban Ki-moon Fdn", ko: "KOICA, 반기문재단, 굿네이버스 등" }
    }
  ],
  organizations: [
    { name: "KOICA", label: "Korea Int'l Cooperation Agency" },
    { name: "Ban Ki-moon Foundation", label: "Climate & Env Leaders" },
    { name: "LCOY Korea", label: "UNFCCC YOUNGO Platform" },
    { name: "Good Neighbors", label: "Laos Visit & Good Marketer" },
    { name: "BUFS", label: "Busan Univ of Foreign Studies" }
  ]
};

export const projectsData: ProjectItem[] = [
  {
    id: "student-council",
    title: {
      en: "Student Council Leadership & Strategic Department Operations",
      ko: "국제개발협력학부 학생회 총괄 및 학부 운영 혁신"
    },
    role: {
      en: "Student Body President (formerly VP, Planning Director, Deputy Director)",
      ko: "학부 학생회장 (전 부학생회장, 기획부장, 기획차장)"
    },
    organization: {
      en: "Student Council of International Development Cooperation, BUFS",
      ko: "부산외국어대학교 국제개발협력학부 학생회"
    },
    period: {
      en: "Sept. 2024 – Present",
      ko: "2024년 9월 – 현재"
    },
    location: {
      en: "Busan, South Korea",
      ko: "부산"
    },
    category: "leadership",
    badge: {
      en: "Department President",
      ko: "학부 학생회장 및 자치 리더십"
    },
    description: {
      en: "Serving as Student Body President after four consecutive terms of departmental leadership, directing strategic planning, budget management, inter-institutional MOUs, and career pathways for international development students.",
      ko: "기획차장, 기획부장, 부학생회장을 거쳐 학생회장에 이르기까지 4개 학기 동안 학부 공식 행사, KOICA 진로 콘서트, 대외 MOU 체결 및 학과 비전을 주도하고 있습니다."
    },
    highlights: {
      en: [
        "Served through four consecutive leadership terms: Deputy Planning Director (Fall 2024) → Planning Director (Spring 2025) → Vice President (Fall 2025) → Student Body President (2026).",
        "Orchestrated and directed semester opening and closing ceremonies for 4 consecutive terms, coordinating cross-department communications and logistics.",
        "Planned and hosted departmental KOICA career information sessions (2024–2025) connecting students with senior professionals at multilateral and public development agencies.",
        "Represented the department as chief student delegate in signing a formal Memorandum of Understanding (MOU) with KOICA Overseas Volunteers, opening new overseas deployment pathways.",
        "Organized and supervised departmental leadership retreats (MT) for 20+ members initially, subsequently directing two university-wide department retreats (Spring & Fall 2026) as President."
      ],
      ko: [
        "기획차장(2024 가을) → 기획부장(2025 봄) → 부학생회장(2025 가을) → 학부 학생회장(2026)으로 지속적인 신임 속에서 주요 직책 역임 및 학부 대표 수행.",
        "4개 학기 연속 개강총회 및 종강총회 총괄 기획·진행, 학부 내 원활한 소통 및 체계적인 행사 운영 총괄.",
        "KOICA(한국국제협력단) 진로 설명회(2024~2025)를 기획 및 개최하여 국제개발협력 공공기관 및 개발 컨설팅 진로 기회 제공.",
        "학생 대표단으로서 KOICA 해외봉사단과의 업무협약(MOU) 체결을 주도하여 재학생 해외봉사 및 글로벌 프로젝트 연계 구축.",
        "초기 20여 명 규모의 학부 MT 기획을 시작으로, 학생회장 취임 후 2026년 봄·가을 학부 전체 연합 MT 총괄 지휘."
      ]
    },
    skills: ["Strategic Planning", "MOU Negotiation", "KOICA Partnerships", "Budget Administration", "Public Speaking"]
  },
  {
    id: "lcoy-korea",
    title: {
      en: "LCOY Korea — Organizing Committee & National Youth Climate Conferences",
      ko: "LCOY Korea 조직위원회 기획팀 — 전국 청년 기후 컨퍼런스"
    },
    role: {
      en: "Organizing Committee Member, Planning Team",
      ko: "조직위원회 기획팀 위원"
    },
    organization: {
      en: "LCOY Korea (Local Conference of Youth under UNFCCC YOUNGO)",
      ko: "LCOY Korea (UN기후변화협약 청년공식대표부 YOUNGO 인가)"
    },
    period: {
      en: "Jan. 2026 – Jul. 2026",
      ko: "2026년 1월 – 2026년 7월"
    },
    location: {
      en: "Yeosu & Seoul, South Korea",
      ko: "여수 및 서울"
    },
    category: "climate",
    badge: {
      en: "UNFCCC YOUNGO Recognized",
      ko: "UNFCCC 공식 청년 기후회의"
    },
    description: {
      en: "Co-organized two large-scale youth climate conferences in Yeosu and Seoul, each gathering 80+ diverse participants to formulate youth climate policy statements and intergenerational dialogues.",
      ko: "UNFCCC 산하 청년 기후회의인 LCOY Korea 기획팀으로서 여수와 서울에서 각각 80명 이상의 청년들이 참가한 대규모 기후 컨퍼런스를 공동 기획·운영했습니다."
    },
    highlights: {
      en: [
        "Served on the national core planning team of LCOY (Local Conference of Youth) Korea under the UNFCCC youth constituency YOUNGO.",
        "Co-organized two comprehensive national youth climate conferences in Yeosu and Seoul, managing participant logistics for over 80 delegates per conference.",
        "Facilitated breakout policy discussions linking renewable energy transition, just development, and youth climate action resolutions.",
        "Coordinated with keynote speakers, government environmental officials, and civil society leaders."
      ],
      ko: [
        "UNFCCC 공식 청년 대표 기구 YOUNGO의 한국 청년 기후 컨퍼런스(LCOY Korea) 전국 기획팀 활동.",
        "여수와 서울 2개 주요 도시에서 회당 80명 이상 청년들이 참가한 국가 단위 청년 기후 컨퍼런스 성공적 기획 및 운영.",
        "신재생에너지 전환, 정의로운 기후 전환, 청년 정책 제안문 작성을 위한 라운드테이블 세션 설계.",
        "국내외 기후 전문가, 정책 관계자 및 환경 단체와의 커뮤니케이션 및 세션 조율."
      ]
    },
    skills: ["Climate Policy", "Conference Logistics", "Youth Advocacy", "Renewable Energy Transition", "Cross-team Coordination"]
  },
  {
    id: "rwanda-frontier",
    title: {
      en: "Overseas Frontier Program — Rwanda Task Force Team",
      ko: "해외 프론티어 프로그램 (르완다) 기획 태스크포스(TF)"
    },
    role: {
      en: "TF Program Planner & Outreach Coordinator",
      ko: "기획 TF 단원 (견학 일정 기획 및 기관 섭외)"
    },
    organization: {
      en: "Department of International Development Cooperation, BUFS",
      ko: "부산외국어대학교 국제개발협력학부"
    },
    period: {
      en: "Aug. 2025 – Dec. 2025",
      ko: "2025년 8월 – 2025년 12월"
    },
    location: {
      en: "Rwanda / Busan",
      ko: "르완다 현지 파견 기획 및 부산"
    },
    category: "global",
    badge: {
      en: "Itinerary Planning & Outreach",
      ko: "견학 일정 기획 및 기관 섭외"
    },
    description: {
      en: "Served on the Task Force (TF) for the Overseas Frontier Program, planning the field study itinerary, selecting key international organizations and institutions to contact, and coordinating overall schedules.",
      ko: "해외 프론티어 프로그램 TF팀으로서 현지 견학 일정을 기획하고, 전반적으로 컨텍할 국제기구 및 현지 기관을 선정하여 섭외 및 일정을 조율하는 역할을 수행했습니다."
    },
    highlights: {
      en: [
        "Structured and designed the comprehensive field study itinerary and schedule for the overseas frontier expedition.",
        "Researched, screened, and selected key international organizations and development partners to contact for institutional visits.",
        "Managed communication, outreach briefings, and schedule coordination with target agencies and field counterparts.",
        "Coordinated logistics frameworks, risk assessment guidelines, and orientation protocols for participating student delegates."
      ],
      ko: [
        "해외 프론티어 프로그램의 전반적인 현지 견학 일정 및 세부 동선 기획.",
        "현지에서 방문할 국제기구, 개발협력 유관 기구 및 기관을 사전 조사하여 선정하고 공식 컨텍 진행.",
        "선정된 기관들과의 미팅 일정 조율 및 견학·인터뷰 사전 커뮤니케이션 총괄.",
        "참여 학생 단원을 위한 안전 가이드라인 점검 및 현지 운영 세부 계획 수립."
      ]
    },
    skills: ["Itinerary Planning", "Institutional Outreach", "Schedule Coordination", "Stakeholder Communication", "Field Strategy"]
  },
  {
    id: "laos-frontier",
    title: {
      en: "Overseas Frontier Program — Laos Field Delegation",
      ko: "해외 프론티어 프로그램 (라오스) 현장 연수단"
    },
    role: {
      en: "Field Delegate & Researcher",
      ko: "현장 파견 단원"
    },
    organization: {
      en: "Good Neighbors Laos, UNICEF, UNESCO Field Offices",
      ko: "굿네이버스 라오스, 유니세프, 유네스코 현지 사무소"
    },
    period: {
      en: "Jul. 2024",
      ko: "2024년 7월"
    },
    location: {
      en: "Vientiane & Rural Districts, Laos",
      ko: "라오스 비엔티안 및 지역 사업장"
    },
    category: "global",
    badge: {
      en: "UN & NGO Fieldwork",
      ko: "국제기구 현지 사무소 현장 방문"
    },
    description: {
      en: "Participated in an intensive overseas frontier program to Laos, visiting the resident field offices of Good Neighbors Laos, UNICEF, and UNESCO to observe multilateral education and child protection projects.",
      ko: "라오스 해외 프론티어 프로그램에 참여하여 굿네이버스 라오스 지부, UNICEF, UNESCO 현지 사무소를 직접 방문하고 국제기구의 교육 및 아동 보호 사업 현장을 참관했습니다."
    },
    highlights: {
      en: [
        "Conducted professional consultations with international officers at UNICEF Laos and UNESCO regarding grassroots education development.",
        "Observed community health and education centers operated by Good Neighbors Laos, gaining firsthand insight into local NGO execution.",
        "Synthesized comparative findings on multilateral UN programs versus bilateral NGO interventions in Southeast Asian LDCs."
      ],
      ko: [
        "라오스 현지 UNICEF 및 UNESCO 사무국을 방문하여 현지 교육 인프라 및 아동보호 사업 브리핑 수강 및 질의응답 진행.",
        "굿네이버스 라오스 지역개발사업장(CDP) 현장을 답사하며 풀뿌리 NGO의 주민 참여형 개발 모델 체득.",
        "다자간 국제기구(UN)와 시민사회단체(NGO) 간의 접근 방식 차이와 상호 보완점에 대한 비교 분석 리포트 작성."
      ]
    },
    skills: ["Fieldwork Analysis", "Multilateral UN Agencies", "NGO Operations", "Southeast Asia Studies"]
  },
  {
    id: "ban-ki-moon-leaders",
    title: {
      en: "Climate & Environment Leaders Program (8th Cohort)",
      ko: "기후환경리더 양성과정 8기"
    },
    role: {
      en: "Fellow / Trainee",
      ko: "8기 리더과정 수료단원"
    },
    organization: {
      en: "Ban Ki-moon Foundation For a Better Future × Daejayeon",
      ko: "보다나은미래를위한 반기문재단 × 대자연"
    },
    period: {
      en: "Sept. 2025 – Feb. 2026",
      ko: "2025년 9월 – 2026년 2월"
    },
    location: {
      en: "Seoul, South Korea",
      ko: "서울"
    },
    category: "climate",
    badge: {
      en: "Ban Ki-moon Foundation",
      ko: "반기문재단 기후환경리더"
    },
    description: {
      en: "Completed an intensive six-month environmental leadership curriculum spearheaded by the 8th UN Secretary-General Ban Ki-moon's foundation, formulating carbon neutrality blueprints and youth climate solutions.",
      ko: "반기문 제8대 UN 사무총장의 재단과 국제환경단체 대자연이 공동 주관하는 6개월 기후환경리더 양성과정을 이수하며 탄소중립 실천 및 글로벌 기후 리더십을 함양했습니다."
    },
    highlights: {
      en: [
        "Analyzed international climate treaties, the Paris Agreement roadmap, and corporate ESG sustainability frameworks.",
        "Collaborated on youth-driven renewable energy action proposals aligned with the UN Sustainable Development Goals (SDG 7 & 13).",
        "Graduated with distinction from the 8th cohort under the mentorship of global environmental policymakers."
      ],
      ko: [
        "파리협정 탄소중립 이행 로드맵 및 글로벌 기업의 ESG 경영 및 지속가능발전 평가 체계 학습.",
        "UN 지속가능발전목표(SDGs 7번 저렴하고 깨끗한 에너지, 13번 기후변화 대응) 기반의 청년 환경 캠페인 기획 및 발표.",
        "국내외 환경 전문가들의 멘토링을 통해 기후 정책 제안 역량 강화."
      ]
    },
    skills: ["Paris Agreement", "SDGs 7 & 13", "Carbon Neutrality", "Environmental Leadership"]
  },
  {
    id: "weko-koica",
    title: {
      en: "KOICA WeKO Supporters (6th Cohort) & Pangyo Field Visit",
      ko: "KOICA WeKO 서포터즈 6기 및 판교 본사 견학 프로그램"
    },
    role: {
      en: "Official ODA Supporter / Ambassador",
      ko: "공식 ODA 홍보대사"
    },
    organization: {
      en: "Korea International Cooperation Agency (KOICA)",
      ko: "한국국제협력단 (KOICA)"
    },
    period: {
      en: "Aug. 2024 – Dec. 2024",
      ko: "2024년 8월 – 2024년 12월"
    },
    location: {
      en: "Pangyo & Busan, South Korea",
      ko: "판교 본부 및 전국"
    },
    category: "leadership",
    badge: {
      en: "Official KOICA Supporter",
      ko: "KOICA 공식 서포터즈"
    },
    description: {
      en: "Promoted South Korea's official development assistance (ODA) initiatives, participated in the exclusive Pangyo Headquarters field study program, and engaged diverse public audiences on sustainable development.",
      ko: "대한민국 개발원조 대표기관인 KOICA의 대국민 ODA 홍보 활동을 펼치고, 판교 본사 방문 프로그램을 통해 글로벌 연수 사업 및 해외 사무소 운영 메커니즘을 심층 학습했습니다."
    },
    highlights: {
      en: [
        "Produced multimedia campaigns introducing ODA projects in Southeast Asia, Africa, and Latin America.",
        "Participated in the KOICA Pangyo Headquarters Field Visit Program (Nov. 2024), engaging directly with project directors.",
        "Ranked among active cohorts in raising public awareness of Korea's multilateral contributions."
      ],
      ko: [
        "아시아, 아프리카, 중남미 지역의 한국 ODA 성과 및 지속가능발전 가치를 알리는 디지털 콘텐츠 제작.",
        "2024년 11월 KOICA 판교 본사 현장 방문 프로그램에 참가하여 개발협력 현업 실무자 및 연수센터 견학.",
        "청년 및 시민을 대상으로 ODA 사업 이해도 증진을 위한 온·오프라인 캠페인 주도."
      ]
    },
    skills: ["Public Diplomacy", "Digital Storytelling", "ODA Advocacy", "KOICA Infrastructure"]
  }
];

export const workExperienceData: WorkExperienceItem[] = [
  {
    id: "teaching-assistant",
    role: {
      en: "Teaching Assistant (TA)",
      ko: "전공 교과목 조교 (TA)"
    },
    department: {
      en: "Department of International Development Cooperation",
      ko: "국제개발협력학부"
    },
    organization: {
      en: "Busan University of Foreign Studies",
      ko: "부산외국어대학교"
    },
    period: {
      en: "Mar. 2025 – Dec. 2025",
      ko: "2025년 3월 – 2025년 12월"
    },
    location: {
      en: "Busan, South Korea",
      ko: "부산"
    },
    tag: {
      en: "Academic Administration",
      ko: "학사 및 강의 지원"
    },
    details: {
      en: [
        "Assisted department faculty with curriculum preparation, course syllabi coordination, and academic lecture materials throughout both spring and fall semesters.",
        "Managed classroom learning management systems (LMS), student inquiries, and grading rubric administration for foundational development cooperation courses.",
        "Organized supplemental study sessions and facilitated communication between the professorial staff and over 60 enrolled students."
      ],
      ko: [
        "1년(봄/가을 2개 학기) 동안 담당 교수님의 전공 강의 준비, 강의 교안 작성 및 수업 보조 자료 체계적 관리.",
        "학습관리시스템(LMS) 운영 보조, 학생 질의응답 응대 및 과제 평가 가이드라인 행정 지원.",
        "전공 입문 수강생 60여 명을 대상으로 전공 기초 개념 학습 가이드 및 교수-학생 간 원활한 학사 소통 지원."
      ]
    }
  },
  {
    id: "research-assistant",
    role: {
      en: "Research Assistant (RA)",
      ko: "연구 보조원 (RA)"
    },
    department: {
      en: "Institute for Migration and Multicultural Studies",
      ko: "이주·다문화연구소"
    },
    organization: {
      en: "Busan University of Foreign Studies",
      ko: "부산외국어대학교"
    },
    period: {
      en: "Jun. 2025 – Jul. 2025",
      ko: "2025년 6월 – 2025년 7월"
    },
    location: {
      en: "Busan, South Korea",
      ko: "부산"
    },
    tag: {
      en: "Policy Research",
      ko: "정책 연구 및 데이터 분석"
    },
    details: {
      en: [
        "Conducted secondary literature reviews and policy document synthesis concerning immigrant integration policies, multicultural education, and refugee frameworks in East Asia.",
        "Processed and indexed multilingual statistical data from Korean and international agencies.",
        "Supported the editorial review and compilation of research papers published by the Institute."
      ],
      ko: [
        "동아시아 및 국내 이주민 사회통합 정책, 다문화 청소년 교육, 난민 지원 체계 관련 국내외 학술 문헌 조사 및 요약.",
        "국내 공공데이터 및 국제기구의 다문화·이주 관련 통계 자료 분류 및 데이터베이스 구축 지원.",
        "연구소 학술지 발간을 위한 논문 교정 및 참고문헌 실증 검증 보조."
      ]
    }
  }
];

export const awardsData: AwardItem[] = [
  {
    id: "aimun",
    title: {
      en: "Award of Excellence — AIMUN (Asian International Model United Nations)",
      ko: "우수상 — AIMUN (모의 유엔 회의)"
    },
    organization: {
      en: "AIMUN Secretariat",
      ko: "AIMUN 사무국"
    },
    date: {
      en: "Nov. 2025",
      ko: "2025년 11월"
    },
    description: {
      en: "Awarded top delegation honors for exceptional multilateral negotiation, resolution drafting, and diplomatic advocacy during simulated international development committee sessions.",
      ko: "모의 유엔 대회에서 다자간 외교 협상, 결의안 입안 및 국제개발 이슈 변론 역량의 우수성을 인정받아 우수상 수상."
    },
    badge: {
      en: "Excellence Award",
      ko: "모의UN 우수상"
    }
  },
  {
    id: "humanities-100-scholarship",
    title: {
      en: "Humanities 100 Years Scholarship Recipient",
      ko: "한국장학재단 '인문100년장학금' 장학생 선발"
    },
    organization: {
      en: "Korea Student Aid Foundation (KOSAF)",
      ko: "한국장학재단"
    },
    date: {
      en: "Jun. 2026",
      ko: "2026년 6월"
    },
    description: {
      en: "Selected for South Korea's premier national government merit scholarship recognizing top undergraduate scholars in the humanities and social sciences, covering full tuition and academic allowances.",
      ko: "인문사회계열 최고 권위의 대한민국 국가 우수 장학 프로그램으로, 탁월한 학업 성적(4.37/4.5)과 전공 발전 잠재력을 인정받아 전액 장학생으로 최종 선발."
    },
    badge: {
      en: "National Merit Scholar",
      ko: "국가 최고 권위 장학금"
    }
  }
];

export const extraExperiencesData: ExtraExperienceItem[] = [
  {
    id: "ex-10",
    title: {
      en: "Good Marketer Program (English Track, 3rd Cohort)",
      ko: "굿네이버스 '굿마케터' 영어 트랙 3기"
    },
    organization: {
      en: "Good Neighbors",
      ko: "굿네이버스"
    },
    date: {
      en: "Mar. 2026 – Apr. 2026",
      ko: "2026년 3월 – 2026년 4월"
    },
    description: {
      en: "English-medium international non-profit marketing and fundraising strategy development.",
      ko: "글로벌 NGO 모금 및 캠페인 전략을 100% 영어로 기획·수행하는 마케터 과정 수료."
    },
    category: "global"
  },
  {
    id: "ex-9",
    title: {
      en: "Climate & Environment Leaders Program (8th Cohort)",
      ko: "기후환경리더 양성과정 8기"
    },
    organization: {
      en: "Ban Ki-moon Foundation For a Better Future × Daejayeon",
      ko: "보다나은미래를위한 반기문재단 × 대자연"
    },
    date: {
      en: "Sept. 2025 – Feb. 2026",
      ko: "2025년 9월 – 2026년 2월"
    },
    description: {
      en: "Intensive 6-month carbon neutrality and environmental policy fellowship.",
      ko: "6개월 간의 탄소중립 및 환경 정책 수립 리더십 프로그램."
    },
    category: "climate"
  },
  {
    id: "ex-8",
    title: {
      en: "BGCF Training Program — Supporter",
      ko: "BGCF 교육 프로그램 — 서포터"
    },
    organization: {
      en: "Busan Global Climate Forum / Partner Foundation",
      ko: "부산 글로벌 기후 포럼 협력 재단"
    },
    date: {
      en: "Jul. 2025 & Aug. 2025",
      ko: "2025년 7월 & 8월"
    },
    description: {
      en: "Facilitated training logistics and international attendee support across summer cohorts.",
      ko: "글로벌 기후 교육 프로그램 운영 지원 및 참가자 멘토링."
    },
    category: "climate"
  },
  {
    id: "ex-7",
    title: {
      en: "BGCF Training Program — Liaison Officer",
      ko: "BGCF 교육 프로그램 — 의전 및 대외협력(Liaison)"
    },
    organization: {
      en: "Busan Global Climate Forum",
      ko: "부산 글로벌 기후 포럼"
    },
    date: {
      en: "Jun. 2025",
      ko: "2025년 6월"
    },
    description: {
      en: "Served as liaison coordinating protocol, communications, and scheduling for foreign delegates.",
      ko: "해외 초청 인사 및 글로벌 연수단 통역·의전 및 일정 조율 총괄."
    },
    category: "global"
  },
  {
    id: "ex-6",
    title: {
      en: "KOICA Pangyo Headquarters Field Visit Program",
      ko: "KOICA 판교 본사 현장 견학 프로그램"
    },
    organization: {
      en: "Korea International Cooperation Agency",
      ko: "한국국제협력단"
    },
    date: {
      en: "Nov. 2024",
      ko: "2024년 11월"
    },
    description: {
      en: "Specialized briefing and facility visit to the headquarters of South Korea's ODA executive agency.",
      ko: "KOICA 본사 방문을 통한 ODA 글로벌 연수사업 및 해외봉사단 파견 시스템 실무 교육."
    },
    category: "koica"
  },
  {
    id: "ex-5",
    title: {
      en: "KOICA WeKO Supporters (6th Cohort)",
      ko: "KOICA WeKO 서포터즈 6기"
    },
    organization: {
      en: "Korea International Cooperation Agency",
      ko: "한국국제협력단"
    },
    date: {
      en: "Aug. 2024 – Dec. 2024",
      ko: "2024년 8월 – 2024년 12월"
    },
    description: {
      en: "Advocated national awareness of ODA and SDGs through digital campaigns and regional events.",
      ko: "대국민 ODA 인식 제고 및 지속가능발전목표(SDGs) 홍보 서포터즈 활동."
    },
    category: "koica"
  },
  {
    id: "ex-4",
    title: {
      en: "Overseas Frontier Program — Laos Field Study",
      ko: "해외 프론티어 프로그램 (라오스 현장 연수)"
    },
    organization: {
      en: "Good Neighbors Laos · UNICEF · UNESCO Field Offices",
      ko: "굿네이버스 라오스 · 유니세프 · 유네스코 지부"
    },
    date: {
      en: "Jul. 2024",
      ko: "2024년 7월"
    },
    description: {
      en: "Field inspections of education, child protection, and community development projects.",
      ko: "국제기구 및 NGO의 라오스 현지 교육·지역개발 현장 실사."
    },
    category: "global"
  },
  {
    id: "ex-3",
    title: {
      en: "Korea–Africa Education Cooperation Forum Participant",
      ko: "한-아프리카 교육협력 포럼 참가"
    },
    organization: {
      en: "Ministry of Education & Partner International Agencies",
      ko: "교육부 및 아프리카 협력 유관기관"
    },
    date: {
      en: "Jun. 2024",
      ko: "2024년 6월"
    },
    description: {
      en: "Participated in high-level discussions on higher education expansion, vocational training, and Korea-Africa ODA.",
      ko: "한-아프리카 고등교육 역량 강화 및 직업훈련 ODA 모델 정책 토론 참여."
    },
    category: "global"
  },
  {
    id: "ex-2",
    title: {
      en: "Supporter, Migration and Refugees Studies Association",
      ko: "이주난민연구회 서포터즈"
    },
    organization: {
      en: "Migration & Refugees Studies Association",
      ko: "이주난민연구회"
    },
    date: {
      en: "Jun. 2024",
      ko: "2024년 6월"
    },
    description: {
      en: "Supported human rights advocacy forums and research dissemination on refugee resettlement.",
      ko: "국내 체류 난민 및 이주민 인권 세미나 지원 및 연구 자료 배포 활동."
    },
    category: "community"
  }
];

export const certificatesList: CertificateItem[] = [
  {
    id: "koica-stepup",
    title: {
      en: "KOICA Step-Up Program Certification",
      ko: "KOICA Step-up 프로그램 수료"
    },
    issuer: {
      en: "Korea International Cooperation Agency (KOICA)",
      ko: "한국국제협력단 (KOICA)"
    },
    date: {
      en: "2025",
      ko: "2025년"
    },
    category: {
      en: "Global ODA Competency",
      ko: "글로벌 ODA 전문 역량"
    },
    status: {
      en: "Completed",
      ko: "수료 완료"
    },
    description: {
      en: "Specialized international development practitioner training covering ODA project formulation, Project Cycle Management (PCM), and multilateral cooperation frameworks.",
      ko: "KOICA 주관 국제개발협력 실무자 양성 과정으로 사업 기획(PCM), 성과 관리 체계 및 국제개발협력 현장 실무 교육 이수."
    }
  },
  {
    id: "business-excel",
    title: {
      en: "Business Excel Certification (Level 2)",
      ko: "비즈니스 엑셀 2급 자격증"
    },
    issuer: {
      en: "Korea Chamber of Commerce & Industry / KMIA",
      ko: "대한상공회의소 / 한국경영정보학회 공인"
    },
    date: {
      en: "2025",
      ko: "2025년"
    },
    category: {
      en: "Data & Office Automation",
      ko: "실무 데이터 분석 및 전산"
    },
    status: {
      en: "Certified",
      ko: "자격 취득"
    },
    description: {
      en: "Certified practical competency in spreadsheet statistical modeling, data visualization, pivot table analytics, and business reporting automation.",
      ko: "스프레드시트 데이터 분석, 피벗 테이블 심화, 고급 통계 함수 연산 및 실무 행정·기획 데이터 시각화 전문 자격 취득."
    }
  },
  {
    id: "electrical-bootcamp",
    title: {
      en: "Electrical Engineer Certification Preparation Bootcamp",
      ko: "전기기사 자격 취득 대비 부트캠프"
    },
    issuer: {
      en: "Smart Energy & Environment Major Scholarship Program, BUFS",
      ko: "스마트에너지·환경전공 장학 프로그램 지원"
    },
    date: {
      en: "Jun. 2026",
      ko: "2026년 6월"
    },
    category: {
      en: "Clean Energy Engineering",
      ko: "청정에너지 공학"
    },
    status: {
      en: "Completed",
      ko: "수료 완료"
    },
    description: {
      en: "Completed rigorous engineering training in electrical circuits, electromagnetics, and power systems engineering as part of the specialized Smart Energy & Environment scholarship cohort.",
      ko: "스마트에너지환경 전공 장학 프로그램의 일환으로 전기자기학, 회로이론, 전력공학 등 전기기사 국가자격 체계에 기반한 공학 기초 역량을 수료."
    }
  }
];

export const certificateData = certificatesList[0];

export const skillsCategories: SkillCategory[] = [
  {
    id: "languages",
    name: {
      en: "Languages & Regional Communication",
      ko: "어학 및 글로벌 커뮤니케이션"
    },
    iconName: "Languages",
    description: {
      en: "Multilingual capability bridging Korean, Spanish, and English across diplomatic and field contexts.",
      ko: "국제회의, 모의유엔, 현장 연수를 통해 검증된 3개 국어 소통 역량."
    },
    skills: [
      { name: "한국어 (Korean Native)", level: "원어민 수준 (Native)", tag: "Native", score: 5, percentage: 100 },
      { name: "스페인어 (Español)", level: "전공 학업 및 지역학 심화", tag: "Major", score: 4, percentage: 88 },
      { name: "영어 (English Professional)", level: "국제회의 소통 및 실무 회화", tag: "Working Fluency", score: 4, percentage: 90 },
      { name: "다문화 외교 소통 & 의전", level: "국제교류 실무 역량", tag: "Protocol", score: 5, percentage: 95 }
    ]
  },
  {
    id: "dev-coop",
    name: {
      en: "Development Cooperation & Policy",
      ko: "국제개발협력 및 정책 기획"
    },
    iconName: "Globe",
    description: {
      en: "Comprehensive understanding of international development cooperation, ODA architectures, and institutional partnerships.",
      ko: "공적개발원조(ODA) 사업 기획, 국제기구 파트너십 및 정책 분석 역량."
    },
    skills: [
      { name: "KOICA ODA Project Cycle (PCM)", level: "사업 기획 및 평가 심화", score: 5, percentage: 95 },
      { name: "지속가능발전목표 (UN SDGs)", level: "지속가능발전목표 분석", score: 5, percentage: 95 },
      { name: "국제 다자회의 총괄 기획", level: "국제행사 총괄 기획", score: 5, percentage: 92 },
      { name: "기관 협약(MOU) & 대외 협상", level: "기관 협약 및 실무 협상", score: 4, percentage: 90 },
      { name: "사업 예산 편성 및 집행 관리", level: "예산 편성 및 집행 관리", score: 4, percentage: 86 }
    ]
  },
  {
    id: "ai-tech",
    name: {
      en: "AI Agent & Digital Tooling",
      ko: "AI Agent 융합 및 실무 데이터 도구"
    },
    iconName: "Cpu",
    description: {
      en: "Modern AI agent systems, prompt engineering, data analysis, and workflow automation.",
      ko: "최신 AI 에이전트 도구, 프롬프트 엔지니어링, 데이터 분석 및 자동화 역량."
    },
    skills: [
      { name: "EXCEL (비즈니스 엑셀 2급)", level: "스프레드시트 데이터 모델링", tag: "Certified", score: 4, percentage: 90 },
      { name: "Notion & 문서화 협업", level: "정보 아카이빙 및 워크플로우", score: 5, percentage: 95 },
      { name: "AI Agent & LLM Prompting", level: "에이전트 워크플로우 탐구 및 활용", tag: "Major", score: 2, percentage: 45 },
      { name: "Python (데이터 가공·분석)", level: "기초 문법 및 환경 설정", score: 1, percentage: 25 },
      { name: "업무 자동화 & 웹 도구", level: "협업 툴 및 디지털 자동화", score: 4, percentage: 84 }
    ]
  },
  {
    id: "climate-energy",
    name: {
      en: "Smart Energy & Climate Policy",
      ko: "스마트에너지 및 기후환경"
    },
    iconName: "Zap",
    description: {
      en: "Renewable energy integration, electrical engineering principles, and national climate conference leadership.",
      ko: "신재생에너지 전환, 기후 협약 이행, 전기공학 기초 및 정책 제안."
    },
    skills: [
      { name: "스마트에너지·환경 전공", level: "전공 학문 기초 및 이론 이수", tag: "Major", score: 3, percentage: 65 },
      { name: "LCOY Korea 기후 리더십", level: "전국 기획 총괄", score: 5, percentage: 95 },
      { name: "전기기사 자격 취득 부트캠프", level: "전기공학 기초 교육 수료", score: 4, percentage: 88 },
      { name: "탄소중립 & ESG 정책 분석", level: "탄소중립 정책 분석", score: 4, percentage: 85 }
    ]
  }
];

export const faqData: FaqItem[] = [
  {
    question: {
      en: "How does Gaeun connect International Development with AI and Smart Energy?",
      ko: "국제개발협력학과 AI Agent, 스마트에너지는 어떻게 융합되나요?"
    },
    answer: {
      en: "Contemporary global challenges cannot be solved in disciplinary silos. By synthesizing international development policy with smart energy technologies and modern AI agent systems, Gaeun designs sustainable, data-driven solutions for developing communities — such as renewable microgrid planning and algorithmic resource distribution.",
      ko: "현대 국제사회의 난제는 단일 학문만으로 해결하기 어렵습니다. ODA 정책 체계 위에 신재생 스마트에너지 기술과 데이터 기반 AI 에이전트 분석 도구를 결합하여, 개도국 현장에 즉시 적용 가능한 실용적이고 지속 가능한 개발 모델을 연구하고 기획합니다."
    }
  },
  {
    question: {
      en: "What were the key achievements during Gaeun's 4-term student council leadership?",
      ko: "학생회 4학기 연속 리더십 기간 동안 어떤 성과를 거두었나요?"
    },
    answer: {
      en: "Starting as Deputy Planning Director and ascending to Student Body President, Gaeun formalized the departmental partnership with KOICA Overseas Volunteers through a historic MOU, hosted KOICA career sessions, orchestrated four consecutive semester ceremonies, and successfully managed department retreats.",
      ko: "기획차장으로 시작하여 부장, 부학생회장을 거쳐 학생회장에 오르기까지 KOICA 해외봉사단과의 학부 공식 MOU 체결, KOICA 진로설명회 정례화, 4개 학기 연속 총회 지휘, 연합 MT 및 학부 예산 건전성 강화를 완수했습니다."
    }
  },
  {
    question: {
      en: "What is the Humanities 100 Years Scholarship?",
      ko: "한국장학재단 '인문100년장학금'은 어떤 장학금인가요?"
    },
    answer: {
      en: "The Humanities 100 Years Scholarship (인문100년장학금) is South Korea's highest government merit honor administered by the Korea Student Aid Foundation (KOSAF). Awarded only to top-tier university students demonstrating outstanding academic performance (4.37/4.5) and immense future leadership potential in social sciences and humanities.",
      ko: "한국장학재단이 미래 인문·사회계열 핵심 인재를 육성하기 위해 선발하는 국가 최우수 장학 프로그램입니다. 전 학기 최우수 성적(4.37/4.5)과 탁월한 대외 활동 역량을 인정받아 등록금 전액 및 학업 장려금을 지원받는 국가 영예입니다."
    }
  },
  {
    question: {
      en: "What roles or opportunities is Gaeun currently seeking?",
      ko: "현재 어떤 프로젝트, 인턴십 및 협력 기회를 모색하고 있나요?"
    },
    answer: {
      en: "Gaeun is open to research assistantships, international organization internships (UN, KOICA, multilateral NGOs), climate policy task forces, and global collaborative projects in sustainable development, energy transition, and AI-enabled social impact.",
      ko: "UN, KOICA, 글로벌 NGO의 인턴십 및 리서치 어시스턴트, 기후변화 및 신재생에너지 정책 TF, 국제개발과 인공지능을 결합하는 소셜 임팩트 프로젝트 참여에 열려 있습니다."
    }
  }
];
