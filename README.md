# Gaeun Jeoung — Official Portfolio Website
> **국제개발협력학 · 스마트에너지환경 · 스페인어 · AI Agent 융합**  
> Busan University of Foreign Studies · Student Body President · Humanities 100 Years Scholar

---

## 🌟 Overview (개요)
부산외국어대학교 국제개발협력학부 학생회장이자 인문100년 국가장학생인 **정가은(Gaeun Jeoung)**의 공식 학술 및 리더십 포트폴리오 웹사이트입니다.

- **Warm Editorial Aesthetic**: 종이의 온기가 느껴지는 미색 캔버스(`bg-[#FBF9F5]`), 우아한 `Newsreader` 세리프 타이포그래피, `Plus Jakarta Sans` 본문 폰트 적용
- **Interactive Academic Console**: 학업 성적(GPA 4.37/4.5), 4학기 연속 학생회 승진, KOICA MOU 서명, LCOY Korea 기후회의 등 실시간 지표 대시보드
- **Bilingual Support (한국어 / English)**: 상단 토글 버튼을 통해 모든 프로필, 프로젝트, 경력, FAQ를 원클릭 전환
- **Interactive Project Modal**: 각 프로젝트 카드를 클릭하면 세부 실행 내역, 협력 기관, 활용 역량이 담긴 상세 팝업 표시
- **Curriculum Vitae (PDF)**: 브라우저 인쇄(`Ctrl+P` / `Cmd+P`) 및 PDF 저장에 최적화된 공식 국·영문 이력서 뷰어 내장
- **Direct Contact Channel**: 원클릭 이메일 복사(`jeounggaeun@naver.com`) 및 문의 폼 지원

---

## 🚀 GitHub 저장 및 Vercel 배포 가이드

본 프로젝트는 순수 클라이언트 사이드 **Vite + React 19 + TypeScript + Tailwind CSS** 스택으로 제작되어, 외부 서버 환경변수 없이 Vercel에 단 1분 만에 배포할 수 있습니다.

### 1. GitHub에 코드 저장하기 (Git Push)

터미널(또는 로컬 개발환경)에서 다음 명령어를 실행합니다:

```bash
# 1. git 저장소 초기화 (아직 안 되어 있는 경우)
git init

# 2. 모든 파일 스테이징
git add .

# 3. 커밋 생성
git commit -m "feat: Initial commit for Gaeun Jeoung portfolio website"

# 4. 기본 브랜치를 main으로 설정
git branch -M main

# 5. 생성하신 GitHub 저장소 주소 연결
git remote add origin https://github.com/[YOUR-GITHUB-USERNAME]/[YOUR-REPO-NAME].git

# 6. 원격 저장소로 푸시
git push -u origin main
```

---

### 2. Vercel에 1분 배포하기

1. **[Vercel](https://vercel.com)** 에 로그인합니다 (GitHub 계정으로 연동 권장).
2. 대시보드 우측 상단의 **`Add New...`** → **`Project`** 를 클릭합니다.
3. 위에서 푸시한 GitHub 저장소를 찾아 **`Import`** 버튼을 누릅니다.
4. 배포 설정 화면에서 Vercel이 프로젝트를 자동으로 감지합니다:
   - **Framework Preset**: `Vite` (자동 감지)
   - **Root Directory**: `./`
   - **Build Command**: `vite build` (또는 `npm run build`)
   - **Output Directory**: `dist`
5. 별도의 환경 변수 입력 없이 **`Deploy`** 버튼을 클릭합니다.
6. 약 30초 후 배포가 완료되며, 전 세계 어디서든 접속 가능한 고유 URL(`https://[your-project].vercel.app`)이 발급됩니다!

---

## 💻 로컬 개발 환경 실행 방법

```bash
# 의존성 패키지 설치
npm install

# 로컬 개발 서버 실행 (포트 3000)
npm run dev

# 프로덕션 빌드 테스트
npm run build

# 타입 및 린트 검사
npm run lint
```

---

## 📂 프로젝트 구조

```
├── index.html                  # 메타 태그, Google Fonts (Newsreader, Plus Jakarta Sans)
├── package.json                # Vite, React, Tailwind, Lucide React, Motion
├── src/
│   ├── main.tsx                # React 엔트리포인트
│   ├── App.tsx                 # 메인 페이지 및 전체 컴포넌트 통합
│   ├── index.css               # Tailwind CSS 설정 및 커스텀 폰트 테마
│   ├── types.ts                # TypeScript 데이터 모델 및 인터페이스
│   ├── data/
│   │   └── portfolioData.ts    # 정가은 학생회장의 이력서 원문 및 국/영문 데이터셋
│   └── components/
│       ├── Navbar.tsx          # 브랜드 로고, 네비게이션, 국/영문 언어 스위처
│       ├── Hero.tsx            # 헤드라인, 핵심 직함, 파트너 로고 바
│       ├── AcademicConsole.tsx # 인터랙티브 학업 및 리더십 통계 대시보드
│       ├── QuoteBanner.tsx     # 리더십 철학 인용구 및 4대 핵심 지표
│       ├── MajorsConvergence.tsx # 4대 융합전공(개발협력, 스페인어, 에너지, AI)
│       ├── FeaturedInitiative.tsx # KOICA 해외봉사단 MOU 및 학생회 이정표
│       ├── ProjectsSection.tsx # 6대 프로젝트 카드(카테고리 필터링)
│       ├── ProjectModal.tsx    # 프로젝트 세부 내용 팝업 모달
│       ├── SkillsSection.tsx   # 다국어, AI 에이전트, 스마트에너지, 전기기사 부트캠프
│       ├── ExperienceTimeline.tsx # TA, RA, 인문100년장학금, 모의유엔 수상, 9개 대외활동
│       ├── FaqSection.tsx      # 자주 묻는 질문 아코디언
│       ├── ContactSection.tsx  # 이메일 복사, 직통 전화, 간편 문의 양식
│       ├── Footer.tsx          # 저작권 표기 및 배포 안내
│       └── ResumeModal.tsx     # 인쇄 및 PDF 저장이 가능한 국·영문 이력서
```
