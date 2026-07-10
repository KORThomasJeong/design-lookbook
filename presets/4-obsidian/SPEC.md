---
number: 4
codename: Obsidian
inspired-by: Linear + Vercel — 서술 참조만, 상표는 파일/클래스명에 사용하지 않음. 이 스펙은 독립 해석이며 공식 값이 아님
mood: 다크 퍼스트 모던 SaaS. 잉크빛 배경 위 1px 알파 보더, 정밀한 13px 본문, 절제된 인디고 글로우, 즉각적 모션, 키보드 단축키 힌트
best-for: 개발자 도구, B2B SaaS 프로덕트+마케팅, 이슈 트래커, 배포/모니터링 콘솔, 기술 스타트업 랜딩
variants: [a, b]
status: complete
---

# 4 · Obsidian

**다크가 기본 테마다.** tokens.css의 `:root`가 다크 값이고, `[data-theme="light"]`가 라이트 오버라이드다.
아래 모든 표는 "다크(기본) / 라이트" 순서로 적는다.

## §1. 첫인상 요약

1. **잉크 위의 정밀 기계.** 배경 `#0a0a0c`, 순수 검정도 회색도 아닌 잉크빛. 구분선은 전부 화이트 8% 알파 1px.
2. **작고 또렷한 글자.** 본문 13px, 제목도 24px을 넘지 않는다(랜딩 히어로 44px만 예외). 밀도가 전문성을 만든다.
3. **빛은 한 곳에만.** 화면당 글로우(인디고 radial) 최대 1곳. 나머지는 무광 단색 — 그래서 그 한 점이 산다.
4. **키보드가 1급 시민.** 버튼·검색·메뉴 옆에 `⌘K` 같은 mono kbd 힌트, ID·타임스탬프·수치는 전부 모노스페이스.
5. **모션은 100~150ms.** 커서를 따라오는 즉각적 반응. 출렁임·스프링·카운트업 없음.

## §2. 색

### 2.1 팔레트 (시맨틱 토큰)

뉴트럴 구조는 잉크 램프로 고정한다(다크 기준 3레이어 + 텍스트 3단):
`#0a0a0c(bg) #141416(surface) #1e1e22(surface-2)` / `#f0f0f2(text) #a2a2ad(sub) #62626c(disabled)`

| 토큰 | 다크 (기본, a) | 라이트 (a) | 용도 |
|---|---|---|---|
| `--color-bg` | `#0a0a0c` | `#fafafa` | 페이지 배경 |
| `--color-surface` | `#141416` | `#ffffff` | 카드/패널/칸반 칼럼 배경 |
| `--color-surface-2` | `#1e1e22` | `#f0f0f3` | hover 행, 인풋 배경, kbd 배경 |
| `--color-text` | `#f0f0f2` | `#17171c` | 본문 (다크에서 순백 `#fff` 금지) |
| `--color-text-sub` | `#a2a2ad` | `#565660` | 보조 텍스트, 라벨, 타임스탬프 |
| `--color-text-disabled` | `#62626c` | `#b0b0b8` | 비활성 텍스트 |
| `--color-primary` | `#5e6ad2` | `#5e6ad2` | 주 버튼 면, 활성 상태, 선택 |
| `--color-primary-hover` | `#4f5abe` | `#4f5abe` | 주 버튼 hover |
| `--color-primary-text` | `#ffffff` | `#ffffff` | primary 위 텍스트 |
| `--color-accent` | `#8f9aec` | `#4a54c9` | 링크, 활성 아이콘/텍스트 |
| `--color-success` | `#30a46c` | `#30a46c` | 성공 면/점/진행바 |
| `--color-success-text` | `#5bd68d` | `#1a7f37` | 성공 텍스트 (본문 4.5:1) |
| `--color-warning` | `#f5a623` | `#f5a623` | 경고 면 — 위 텍스트는 항상 `#17171c` |
| `--color-warning-text` | `#f0b72f` | `#9a6700` | 경고 텍스트 |
| `--color-danger` | `#d13438` | `#d13438` | 위험 버튼 면 (흰 텍스트 4.93:1) |
| `--color-danger-text` | `#ff8589` | `#c62a30` | 에러 텍스트 |
| `--color-border` | `rgba(255,255,255,0.08)` | `rgba(0,0,0,0.09)` | 장식 보더 — 카드·구분선·kbd |
| `--color-border-strong` | `rgba(255,255,255,0.40)` | `rgba(0,0,0,0.45)` | 인풋·토글 등 조작 UI 보더 (3:1) |
| `--color-focus` | `#8f9aec` | `#5e6ad2` | 포커스 링 2px |
| `--color-overlay` | `rgba(0,0,0,0.60)` | `rgba(23,23,28,0.40)` | 모달/팔레트 뒤 스크림 |
| `--color-glow` | `rgba(94,106,210,0.25)` | `rgba(94,106,210,0.18)` | 히어로 radial 글로우 (화면당 1곳) |
| `--color-terminal-bg` | `#0a0a0c` | `#0a0a0c` | 터미널/로그 블록 — **테마 무관 다크 고정** |
| `--color-terminal-text` | `#d6d6dd` | `#d6d6dd` | 터미널 기본 텍스트 |
| `--color-terminal-ok` | `#5bd68d` | `#5bd68d` | 터미널 성공 라인 (10.78:1 on terminal-bg) |

### 2.2 라이트/다크

양쪽 모두 지원하되 **다크가 원본**이다. 원칙:

- 다크 레이어는 `bg #0a0a0c < surface #141416 < surface-2 #1e1e22` 3단뿐. 이보다 밝은 4번째 회색 레이어를 만들지 않는다 — 떠 있는 레이어(드롭다운·모달)는 밝기가 아니라 `--shadow-1/2`와 보더로 구분한다.
- primary 버튼 면은 양 테마 동일 `#5e6ad2`(흰 텍스트 4.70:1). 텍스트로 쓰는 인디고는 다크 `#8f9aec`, 라이트 `#4a54c9`로 나눈다 — `#5e6ad2`는 흰 배경 위 텍스트 4.70:1로 통과하지만 hover 링크가 어두워지는 방향을 확보하기 위해 라이트 accent를 별도 값으로 둔다.
- 상태 텍스트색은 테마별 값(위 표). 면색(success/warning/danger)은 양 테마 공통.
- 터미널/코드 블록은 라이트 테마에서도 `#0a0a0c` 고정 — 이 프리셋의 시그니처.

### 2.3 대비 규칙

기준: 본문 텍스트 4.5:1 이상, 대형 텍스트(20px+ 또는 14px bold+)·UI 컴포넌트 경계 3:1 이상.
아래는 **이 스펙 값으로 실제 계산한 대비율**(WCAG 상대휘도식 `(L1+0.05)/(L2+0.05)`). 전 항목 통과 확인됨.

| 쌍 | 다크 (기본) | 라이트 | 판정 기준 |
|---|---|---|---|
| bg / text | `#0a0a0c`/`#f0f0f2` = **17.38** | `#fafafa`/`#17171c` = **17.11** | ≥ 4.5 |
| surface / text | `#141416`/`#f0f0f2` = **16.17** | `#ffffff`/`#17171c` = **17.86** | ≥ 4.5 |
| surface-2 / text | `#1e1e22`/`#f0f0f2` = **14.60** | — (라이트 surface-2는 text와 17.0+) | ≥ 4.5 |
| surface / text-sub | `#141416`/`#a2a2ad` = **7.28** | `#ffffff`/`#565660` = **7.25** | ≥ 4.5 |
| surface-2 / text-sub | `#1e1e22`/`#a2a2ad` = **6.57** | `#f0f0f3`/`#565660` = **6.38** | ≥ 4.5 |
| primary / primary-text | `#5e6ad2`/`#ffffff` = **4.70** | 동일 = **4.70** | ≥ 4.5 |
| surface / accent(링크) | `#141416`/`#8f9aec` = **7.01** | `#ffffff`/`#4a54c9` = **6.17** | ≥ 4.5 |
| surface / danger-text | `#141416`/`#ff8589` = **7.86** | `#ffffff`/`#c62a30` = **5.56** | ≥ 4.5 |
| surface / success-text | `#141416`/`#5bd68d` = **10.03** | `#ffffff`/`#1a7f37` = **5.08** | ≥ 4.5 |
| surface / warning-text | `#141416`/`#f0b72f` = **10.09** | `#ffffff`/`#9a6700` = **4.87** | ≥ 4.5 |
| danger / white (버튼) | `#d13438`/`#ffffff` = **4.93** | 동일 = **4.93** | ≥ 4.5 |
| warning 면 / `#17171c` 텍스트 | `#f5a623`/`#17171c` = **8.81** | 동일 | ≥ 4.5 |
| bg / primary (UI 경계) | `#0a0a0c`/`#5e6ad2` = **4.21** | `#fafafa`/`#5e6ad2` = **4.50** | ≥ 3.0 |
| surface / border-strong (합성) | 합성 `#727273` = **3.83** | 합성 `#8c8c8c` = **3.36** | ≥ 3.0 |

추가 제약:
- primary·danger 위 텍스트는 항상 `#ffffff`, warning 면 위 텍스트는 항상 `#17171c`. 예외 없음.
- `--color-border`(8~9% 알파)는 장식 전용(대비 약 1.2:1) — 조작 가능한 UI의 경계는 반드시 `--color-border-strong` 이상 또는 배경 단차+포커스 링으로.
- 다크에서 본문 텍스트에 `#ffffff` 사용 금지(최대 `#f0f0f2`), 배경에 `#000000` 사용 금지(최저 `#0a0a0c`) — 명도 극단은 글로우·터미널 강조에만 남겨둔다.
- 상태를 색으로만 전달 금지: 상태 뱃지는 항상 `● 점 + 텍스트 라벨` 병기.

### 2.4 팔레트 생성 규칙 (변형·랜덤용)

**고정 (모든 변형 공통, 절대 변경 금지):**
- 잉크 뉴트럴 전부: bg/surface/surface-2/text 계열, 알파 보더 2종, overlay, 터미널 3종 (§2.1 그대로)
- 상태색 3종(success/warning/danger)과 그 텍스트색
- 대비 요건: primary/white ≥ 4.5, 다크 accent/`#141416` ≥ 4.5, 라이트 accent/white ≥ 4.5, primary가 bg 위 UI 경계로 쓰일 때 양 테마 ≥ 3.0

**자유 (변형이 바꿀 수 있는 것):**
- primary의 hue만 0~360 자유. 채도는 HSL 기준 S 45~85%. 명도 L은 흰 텍스트 4.5:1을 만족할 때까지 조정(인디고·블루 계열이면 대략 L 55~62%, 틸·그린처럼 휘도 높은 hue면 L 25~35%까지 낮아짐).
- 파생 토큰은 primary에서 기계적으로 유도: `primary-hover` = 같은 hue에서 L −5~−8%p(더 어둡게 — 다크 테마라도 hover는 어두워지는 방향, 흰 텍스트 대비가 오르기 때문), 다크 `accent` = 같은 hue에서 L +12~+20%p, 라이트 `accent` = L −5~−15%p, `focus` = 다크에선 accent, 라이트에선 primary, `glow` = `rgba(primary, 0.25)`(다크)/`0.18`(라이트).
- accent hue는 primary와 동일 hue만(±8° 이내). Obsidian은 단일 포인트 컬러 시스템이다 — 두 번째 hue가 필요하면 상태색 3종을 쓰고, 그래도 부족하면 그것은 변형이 아니라 다른 프리셋이다.

**랜덤 요청 처리:** 위 규칙 안에서 hue를 뽑고 결과를 `4-r<hue>`로 명명한다(예: `4-r212` = hue 212, 같은 이름 = 항상 같은 팔레트). §2.3 계산을 통과하지 못하는 조합은 폐기하고 다시 뽑는다.

**기존 변형:** `a` = hue 234 인디고(`#5e6ad2`, 기본). `b` = hue 173 틸(primary `#0e8577`/white 4.53:1, 다크 accent `#20b3a0`/`#141416` 7.02:1, 라이트 accent `#0b7568`/white 5.59:1, bg 위 UI 다크 4.37:1·라이트 4.34:1 — 계산 통과 확인됨).

## §3. 타이포그래피

**폰트 스택** (외부 로드 금지, 시스템 폴백만):
- 본문/UI: `"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Noto Sans KR", sans-serif`
- 코드·ID·타임스탬프·kbd·수치: `"SF Mono", "Cascadia Mono", Consolas, "Roboto Mono", "Noto Sans Mono CJK KR", monospace`

**타입 스케일** — 아래 7단계 외 font-size 사용 금지:

| 이름 | size | weight | line-height | letter-spacing | 용도 |
|---|---|---|---|---|---|
| `micro` | 11px | 500 | 16px | 0.4px | kbd 힌트, mono 메타 라벨(대문자), 칸반 카운트 |
| `caption` | 12px | 400 | 18px | 0.1px | 타임스탬프, 헬퍼 텍스트, 터미널 로그 |
| `body` | 13px | 400 | 20px | 0 | **앱 UI 기본 본문** — 리스트, 폼, 테이블 셀 |
| `body-lg` | 15px | 400 | 24px | -0.1px | 마케팅 문단, 이슈 본문(설명) |
| `heading` | 18px | 600 | 26px | -0.2px | 패널/섹션/모달 제목 |
| `title` | 24px | 600 | 32px | -0.5px | 페이지 제목 (화면당 1개) |
| `display` | 44px | 600 | 52px | -1.2px | **랜딩 히어로 전용** — 앱 화면 사용 금지 |

**위계 규칙:**
- 한 화면에 `title` 1개, `heading` 최대 3개. 그 아래 소제목은 `micro`(11px/500, mono, `text-transform: uppercase`, `--color-text-sub`)로 — 개발자 도구의 섹션 라벨 관례.
- **음수 letter-spacing은 18px 이상에만.** 큰 글자는 조이고(−0.2 ~ −1.2px), 작은 글자는 그대로 두거나 살짝 벌린다(micro +0.4px).
- **mono 처리 대상**: 이슈 ID(`GWD-142`), 커밋 해시, 브랜치명, API 키, 타임스탬프, 소요 시간, 카운트 숫자. 반드시 mono 스택 + `font-variant-numeric: tabular-nums`.
- weight는 400/500/600만. 700 이상 금지 — display도 600.
- 앱 화면(screen-2~5)의 기본 본문은 13px 고정. 15px(`body-lg`)는 이슈 설명·마케팅 문단에만.

## §4. 간격 · 레이아웃

**스페이싱 스케일** — 이 값 외 사용 금지: `0 2 4 8 12 16 24 32 48 64 96` (px)
(2·4는 kbd 내부, 점-라벨 사이 등 미세 단위 전용. 96은 랜딩 섹션 사이 전용.)

**그리드/컨테이너:**
- 마케팅(랜딩): 콘텐츠 최대 폭 1080px 중앙 정렬, 좌우 패딩 24px(모바일 16px). 섹션 사이 96px, 히어로 상하 패딩 96px/64px.
- 앱 프레임: 상단 앱바 48px 고정 + 데스크톱 좌측 사이드바 240px(축소 시 64px) + 콘텐츠 영역(최대 1280px). 콘텐츠 패딩 데스크톱 상하 24px·좌우 32px, 모바일 16px.
- 칸반: 칼럼 폭 320px 고정, 칼럼 사이 gap 16px, 칼럼 내 카드 사이 8px. 데스크톱 3열 수평, 모바일 수평 스크롤(스냅) 1열씩.
- 섹션 간 리듬: 페이지 제목 아래 24px, 섹션 사이 32px, 카드 내부 패딩 16px, 폼 필드 사이 16px(라벨-인풋 사이 8px), 사이드 메타 패널 폭 280px.
- 리스트/테이블 행 높이: 데스크톱 36px(밀집)·44px(기본), 모바일 48px. 한 화면에서 혼용 금지.

**모바일 규칙:**
- 터치 타깃 최소 44×44px — 데스크톱 36px 행은 모바일에서 48px로 승격.
- 하단 고정 CTA: 랜딩(screen-1)만 사용 — 높이 48px 버튼 + 하단 여백 16px + `env(safe-area-inset-bottom)`. 앱 화면은 하단 탭바 56px(§6.6)로 대체.
- 사이드 메타 패널(280px)은 모바일에서 하단 시트(§6.7 변형)로 전환.

## §5. 형태 (Shape)

**radius 스케일:**

| 토큰 | 값 | 적용처 |
|---|---|---|
| `--radius-1` | 4px | kbd, 뱃지, 체크박스, 인라인 코드 |
| `--radius-2` | 6px | 버튼, 인풋, 셀렉트, 칩, 칸반 카드 |
| `--radius-3` | 10px | 카드/패널, 모달, 커맨드 팔레트, 토스트, 터미널 블록 |
| `--radius-full` | 999px | 아바타, 상태 점(dot), 토글 트랙·노브 — 이 세 곳 외 사용 금지 |

**border:** 구분의 기본 수단. 두께 1px 단일(포커스만 2px). 장식은 `--color-border`(화이트 8%/블랙 9% 알파), 조작 UI는 `--color-border-strong`, 선택/활성은 `--color-primary`. `#eee`, `#333` 같은 하드코딩 회색 보더 금지 — 보더는 반드시 알파 토큰이다(레이어 위에서도 자연스럽게 겹치기 위해).

**shadow/elevation 단계 — 정확한 값:**

| 토큰 | 다크 (기본) | 라이트 | 적용처 |
|---|---|---|---|
| `--shadow-0` | `none` | `none` | 카드/패널/칸반 카드 (보더로만 구분) |
| `--shadow-1` | `0 1px 2px rgba(0,0,0,0.50), 0 4px 12px rgba(0,0,0,0.35)` | `0 1px 2px rgba(23,23,28,0.06), 0 4px 12px rgba(23,23,28,0.08)` | 드롭다운, 팝오버, 토스트 |
| `--shadow-2` | `0 8px 32px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.08)` | `0 8px 32px rgba(23,23,28,0.16), 0 0 0 1px rgba(0,0,0,0.06)` | 모달, 커맨드 팔레트 |
| `--shadow-glow` | `0 0 0 1px rgba(94,106,210,0.45), 0 0 24px 0 rgba(94,106,210,0.25)` | `0 0 0 1px rgba(94,106,210,0.45), 0 0 24px 0 rgba(94,106,210,0.18)` | **화면당 1곳** — 히어로 CTA 또는 활성 강조 |

정적 요소(카드·칸반 카드·테이블)에 그림자를 주지 않는다. 다크에서 그림자는 잘 안 보인다 — 떠 있는 레이어는 그림자 + 1px 알파 보더(`shadow-2`에 내장)의 조합으로 구분한다. `--shadow-glow`는 화면당 1곳 초과 사용 금지(§10-9).

## §6. 핵심 컴포넌트 규칙

공통: 모든 인터랙티브 요소는 `:focus-visible { outline: 2px solid var(--color-focus); outline-offset: 2px; }`. disabled는 `opacity` 대신 전용 색(`--color-text-disabled`) + `cursor: not-allowed`. hover/press는 색 전환 100ms만 — transform scale/translateY 금지.

### 6.1 버튼
- 높이: 32px(앱 기본) / 40px(마케팅·폼 제출) / 48px(모바일 주 CTA). 패딩 좌우 12px(32px)·16px(40px+). radius 6px. 텍스트 13px/500. 아이콘은 16px, 텍스트와 간격 8px.
- primary: 면 `--color-primary`, 텍스트 흰색. hover `--color-primary-hover`(100ms). 랜딩 히어로의 주 CTA 1개에만 `--shadow-glow` 허용.
- secondary: 면 `--color-surface-2`, 1px `--color-border`, 텍스트 `--color-text`. hover 시 보더가 `--color-border-strong`으로.
- ghost: 면·보더 없음, 텍스트 `--color-text-sub`. hover 시 면 `--color-surface-2` + 텍스트 `--color-text`.
- danger: primary와 동형, 면 `--color-danger`.
- 버튼 우측에 kbd 힌트(§6.11)를 붙일 수 있다: 텍스트와 간격 8px, 데스크톱 전용(모바일 숨김).
```css
.btn-primary { height: 32px; padding: 0 12px; border-radius: var(--radius-2);
  background: var(--color-primary); color: var(--color-primary-text);
  font-size: 13px; font-weight: 500;
  transition: background var(--motion-fast) var(--ease-out); }
```

### 6.2 인풋 필드
- 높이 32px(앱)/40px(폼), 배경 `--color-surface-2`, 1px `--color-border-strong`, radius 6px, 내부 좌우 패딩 12px, 텍스트 13px.
- 라벨: 위 8px 간격, 13px/500. 헬퍼/에러: 아래 4px, `caption` 12px.
- focus: 보더 `--color-primary` + `box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-primary) 20%, transparent)`(100ms). error: 보더 `--color-danger` + 에러 텍스트 `--color-danger-text`.
- 검색 인풋은 좌측 16px 돋보기 SVG + 우측 kbd `⌘K`(§6.11) 내장.

### 6.3 카드/패널
- radius 10px, 배경 `--color-surface`, 1px `--color-border`, 그림자 없음, 내부 패딩 16px.
- 제목 구조: `micro` mono 대문자 라벨(text-sub) → 8px → 내용. 클릭 가능한 카드는 hover 시 보더만 `--color-border-strong`으로(100ms) — 배경·그림자·transform 변화 없음.

### 6.4 리스트 아이템 (이슈 행)
- 높이 44px(모바일 48px), 좌우 패딩 12px, 행 사이 1px `--color-border`. 구조(좌→우): 우선순위 아이콘 16px → 8px → 이슈 ID `micro` mono text-sub(`GWD-142`) → 12px → 제목 13px/400(1줄 말줄임) → 우측: 상태 뱃지 + 아바타 20px + 날짜 `caption` mono.
- hover: 배경 `--color-surface-2`(100ms). 선택: 배경 `color-mix(in srgb, var(--color-primary) 12%, transparent)` + 좌측 2px primary 보더.

### 6.5 상단 앱바
- 높이 48px, 배경 `--color-bg`(투명 아님), 스크롤 시에만 하단 1px `--color-border` 표시. 좌: 로고(16px 인라인 SVG) + 브레드크럼(13px, 구분자 `/` text-sub) / 우: 검색 트리거(secondary 버튼형, kbd `⌘K` 병기) + 아바타 24px.
- 랜딩용 변형: 중앙 내비 링크 4개(13px/500, text-sub → hover 시 text, 100ms), 우측 ghost "로그인" + primary 32px "시작하기".

### 6.6 하단 탭바 (모바일)
- 높이 56px + `env(safe-area-inset-bottom)`, 배경 `--color-bg`, 상단 1px `--color-border`. 탭 4개(보드/이슈/배포/설정), 아이콘 20px + `micro` 라벨. 활성: 아이콘·라벨 `--color-accent`, 비활성 `--color-text-sub`. 인디케이터 바·pill 배경 금지.

### 6.7 모달 / 커맨드 팔레트
- 모달: 폭 480px(모바일 = 화면 − 32px), radius 10px, `--shadow-2`, 배경 `--color-surface`. 헤더 패딩 16px + `heading` 18px, 본문 16px, 푸터 우측 정렬 버튼 2개(ghost "취소" + primary, 각 32px, 간격 8px). 진입: opacity 0→1 + scale(0.98)→1, 150ms `--ease-out`. 뒤 스크림 `--color-overlay`.
- 커맨드 팔레트(⌘K): 폭 560px, 상단에서 15vh, radius 10px, `--shadow-2`. 상단 검색 인풋 48px(보더 없음, 하단 1px `--color-border`) → 결과 리스트(행 36px: 아이콘 16px + 13px 텍스트 + 우측 kbd 힌트) → 하단 스트립 32px(`micro` mono: `↑↓ 이동 · ↵ 실행 · esc 닫기`). 진입 150ms, ESC·스크림 클릭으로 닫기, 포커스 트랩 필수.
- 모바일 하단 시트 변형: 전폭, 상단 radius 10px만, translateY(100%)→0 200ms `--ease-out`.

### 6.8 토스트
- 우하단 고정(모바일 하단 전폭 − 32px, 탭바 위 8px), 폭 320px, radius 10px, `--shadow-1`, 배경 `--color-surface` + 1px `--color-border`. 구조: 상태 점 8px + 제목 13px/500 + 본문 `caption` + 우측 ghost 닫기(×) 24px. 자동 소멸 5초(에러는 수동 닫기만). 진입: translateY(8px)+opacity 0→1, 150ms `--ease-out`.

### 6.9 뱃지/칩 (상태·우선순위)
- 높이 20px, 패딩 좌우 8px, radius 4px, `micro` 11px/500. 구조: `● 8px 상태 점 + 4px 간격 + 텍스트 라벨`. 색만으로 상태 전달 금지.
- 면 배색: 상태색 12% 틴트 + 상태 텍스트색 (예: 성공 = `background: color-mix(in srgb, var(--color-success) 12%, transparent); color: var(--color-success-text);`). 원색 면 뱃지 금지.
- 상태 어휘 고정: `백로그(text-sub)` `진행 중(accent)` `검토(warning-text)` `완료(success-text)` `실패(danger-text)`.
- 필터 칩: 높이 24px, radius 6px, 배경 `--color-surface-2`, 1px `--color-border`, × 제거 버튼 16px.

### 6.10 빈 상태 (empty state)
- 패널 내부 중앙, 상하 패딩 48px, 최대 폭 288px. 인라인 SVG 아이콘 24px 단색(`--color-text-sub`, 일러스트·이모지 금지) → 12px → 제목 13px/500 → 4px → 설명 `caption` text-sub → 16px → secondary 버튼 1개 + kbd 힌트 병기(예: 버튼 "이슈 만들기" + `C`).

### 6.11 kbd 단축키 힌트 (Obsidian 시그니처)
- 인라인 요소. 높이 18px, 최소 폭 18px, 패딩 좌우 4px, radius 4px, 배경 `--color-surface-2`, 1px `--color-border`, `micro` 11px mono `--color-text-sub`. 예: `⌘K`, `C`, `⇧⏎`.
- 배치: 검색 인풋 우측, 버튼 레이블 우측 8px, 커맨드 팔레트 행 우측, 빈 상태 버튼. 데스크톱 전용 — 뷰포트 768px 미만에서 `display: none`.
```css
.kbd { display: inline-flex; align-items: center; height: 18px; min-width: 18px;
  padding: 0 4px; border-radius: var(--radius-1); background: var(--color-surface-2);
  border: 1px solid var(--color-border); font-family: var(--font-mono);
  font-size: 11px; color: var(--color-text-sub); }
```

### 6.12 아바타
- 20px(리스트)/24px(앱바)/32px(상세) 원형. 이미지 대신 이니셜 1자 + 배경 `--color-surface-2` + 1px `--color-border`, 11px/500. 스택은 −4px 겹침 + 2px `--color-bg` 링, 최대 3개 + `+N`.

### 6.13 탭/세그먼트
- 텍스트 탭: 높이 32px, 13px/500, 비활성 text-sub. 활성: text + 하단 1px `--color-text`(primary 아님 — 절제). 전환 100ms opacity.
- 세그먼트 컨트롤: 높이 28px 트랙(배경 `--color-surface-2`, radius 6px), 활성 조각은 배경 `--color-surface` + 1px `--color-border`, 이동 150ms `--ease-out`.

### 6.14 터미널/로그 블록 (배포 로그 필수)
- 배경 `--color-terminal-bg`(테마 무관 `#0a0a0c`), 1px `--color-border`, radius 10px, 패딩 16px. 텍스트 `caption` 12px mono `--color-terminal-text`, 줄 간격 18px.
- 줄 구조: 타임스탬프 `[09:42:17]` text-sub급(`#62626c`) → 8px → 메시지. 성공 줄은 `--color-terminal-ok`, 에러 줄은 `#ff8589`. prompt 기호는 `$`(text-sub).
- 진행 중 마지막 줄에 블록 커서 `▍` 800ms step 점멸(§7 예외). 신규 줄 추가는 애니메이션 없이 즉시.

### 6.15 칸반 칼럼/카드
- 칼럼: 폭 320px, 배경 투명(bg 그대로), 헤더 = 상태 점 8px + `micro` mono 대문자 상태명 + 카운트 mono(text-sub) + 우측 ghost `+` 24px. 헤더 아래 12px.
- 카드: 배경 `--color-surface`, 1px `--color-border`, radius 6px, 패딩 12px, 그림자 없음. 구조: 이슈 ID `micro` mono text-sub → 4px → 제목 13px/400 2줄 말줄임 → 8px → 하단 행(우선순위 아이콘 16px + 라벨 뱃지 + 우측 아바타 20px). 카드 사이 8px.
- 드래그 중: 1px `--color-primary` 보더 + `--shadow-1`, 기울임·scale 금지. 드롭 자리는 2px 대시 `--color-border-strong`.

### 6.16 테이블 (멤버 테이블)
- 헤더 행 36px, `micro` 11px/500 mono 대문자 text-sub, 하단 1px `--color-border`. 바디 행 44px, 행 사이 1px `--color-border`, hover `--color-surface-2`(100ms).
- 숫자·날짜 열은 우정렬 + mono tabular-nums. 행 끝 액션은 ghost 아이콘 버튼 24px(hover 시에만 표시, 모바일은 항상 표시).
- 모바일: 열 2개(이름+역할)로 축소, 행 탭 → 상세 시트.

### 6.17 토글 스위치
- 트랙 36×20px radius-full, 노브 16px 원. off: 트랙 `--color-surface-2` + 1px `--color-border-strong`, on: 트랙 `--color-primary` + 노브 흰색. 노브 이동 150ms `--ease-out`. 우측 라벨 13px, 간격 8px.

## §7. 모션

**성격 한 줄: "즉각적 반응, 최소 이동 — 인터페이스는 커서보다 빨라야 한다."**

| 토큰 | 값 | 용도 |
|---|---|---|
| `--motion-fast` | 100ms | hover/press 색·보더 전환, 탭 전환, 포커스 링 |
| `--motion-base` | 150ms | 드롭다운·팝오버·토스트·모달 진입, 세그먼트 이동 |
| `--motion-slow` | 200ms | 사이드 패널·하단 시트 슬라이드 (허용 최대치) |
| `--ease-out` | `cubic-bezier(0.16, 1, 0.3, 1)` | 진입·이동 전부 (급출발 후 정착) |
| `--ease-in-out` | `cubic-bezier(0.65, 0, 0.35, 1)` | 세그먼트·토글처럼 왕복하는 요소 |
| `--ease-exit` | `cubic-bezier(0.4, 0, 1, 1)` | 퇴장 (duration은 진입의 값에서 한 단계 아래) |

패턴별 규칙:
- **진입(entrance)**: 모달 = opacity+scale(0.98→1) 150ms. 팝오버·토스트 = opacity+translateY(8px→0) 150ms. 사이드 패널 = translateX(100%→0) 200ms. 이동 거리는 8px을 넘지 않는다(패널 제외).
- **페이지 전환**: 콘텐츠 영역 opacity 0→1 150ms만. 슬라이드·스케일·블러 전환 금지.
- **hover/press**: background/border/color 전환 100ms만. `transform: scale()`·`translateY()` lift 금지.
- **리스트 스태거**: 금지. 데이터는 한 번에 나타난다. 로딩은 스켈레톤 shimmer(1800ms 반복)로.
- 200ms 초과 duration 금지. 예외 3건만: 터미널 커서 점멸 800ms(§6.14), 스피너 회전 800ms linear, 스켈레톤 shimmer 1800ms.
- 카운트업·스프링·바운스·패럴랙스 전면 금지(§10).
- `prefers-reduced-motion: reduce` 대응 필수:
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important; animation-iteration-count: 1 !important; }
}
```

## §8. 보이스 & 톤 (마이크로카피)

- **어조**: 동료 개발자의 코드 리뷰 코멘트. 짧은 존댓말(합니다체), 감탄사·이모지·느낌표 금지. 기술 용어는 억지 번역 없이 그대로(배포, 커밋, 롤백, API 키).
- 마케팅 카피도 같은 온도: 과장 형용사("혁신적인", "강력한") 대신 **수치와 동작**("평균 40ms 응답", "푸시하면 30초 안에 배포").
- 단축키가 있으면 카피에 병기한다: "이슈 만들기 `C`".

| 상황 | 나쁜 예 (금지) | Obsidian 카피 |
|---|---|---|
| 주 버튼 | "지금 바로 시작하세요!" | "무료로 시작", "이슈 만들기" (동사구 2~6자) |
| 에러 | "앗! 문제가 발생했어요 😢" | "배포에 실패했습니다. 로그를 확인하세요. (exit code 1)" |
| 빈 상태 | "아직 아무것도 없네요~" | "진행 중인 이슈가 없습니다. `C`를 눌러 첫 이슈를 만드세요." |
| 로딩 | "잠시만 기다려주세요..." | 스켈레톤만. 3초 초과 시 "불러오는 중" 1회 |
| 성공 토스트 | "완료되었어요! 🎉" | "v1.4.2를 배포했습니다. (빌드 42초)" (수치 포함) |
| 확인 다이얼로그 | "정말 삭제하시겠습니까?" | "API 키 `gw_prod_…3f2a`를 폐기합니다. 이 키를 쓰는 요청은 즉시 거부됩니다." + 버튼 "폐기" / "취소" |
| 위험 액션 | "삭제하기" | "폐기", "삭제" — 되돌릴 수 없으면 본문에 "이 작업은 되돌릴 수 없습니다." 1문장 |

금지 표현: "앗/이런/환영합니다/여러분" 류 감탄·호명, 물음표·느낌표 남발(느낌표 0개 원칙), "~해보세요" 남용(권유는 화면당 1회), 버튼 레이블 "확인/OK"(무엇을 하는지 동사로), 마케팅의 최상급("최고의", "가장 빠른" — 대신 측정치).

## §9. 레이아웃 레시피 — 데모 5화면: 개발자 SaaS "궤도(Gwedo)"

공통(앱 화면 2~5): 상단 앱바 48px(§6.5, 좌 "궤도 Gwedo / 프로젝트명") + 데스크톱 좌측 사이드바 240px(보드/이슈/배포/설정 4항목, 각 행 32px, 활성 = 배경 `--color-surface-2` + 텍스트 `--color-text`, 비활성 text-sub. 하단에 kbd 안내 `⌘K 커맨드`) / 모바일 하단 탭바 56px(§6.6). 콘텐츠 패딩 데스크톱 24/32px, 모바일 16px.

### screen-1 마케팅 랜딩
- 목적: "궤도"의 첫 화면 — 다크 잉크 위 정밀함으로 신뢰를 만든다. **보라→파랑 그라데이션 히어로 금지(§10-1)**: 히어로 배경은 `--color-bg` 단색 + radial 글로우 **1곳만**(`radial-gradient(ellipse 600px 320px at 50% 0%, var(--color-glow), transparent 70%)` — 전체 파일에서 radial-gradient는 이 1건이 상한).
- 구성(위→아래):
  1. 랜딩 앱바 48px(§6.5 변형)
  2. 히어로(상하 패딩 96px/64px, 중앙 정렬, 최대 폭 720px): `micro` mono 대문자 배지("GWEDO 1.4 — 배포 롤백 출시") → 16px → `display` 44px 2줄 이내 "이슈에서 배포까지, 한 궤도로" → 16px → `body-lg` 15px 부제(수치 포함: "푸시하면 30초 안에 배포됩니다") → 32px → CTA 행: primary 40px "무료로 시작"(+`--shadow-glow`, 화면 유일) + secondary 40px "라이브 데모" + kbd `D`
  3. 96px 아래 제품 프레임: 실제 UI 미리보기 — screen-2 칸반을 축소해 카드(§6.3, radius 10px, 1px 보더) 안에 CSS로 재현. 스크린샷 이미지 금지, 전부 DOM
  4. 96px 아래 기능 섹션 — **3열 아이콘 카드 반복 금지(§10-3)**: 비대칭 2단 구성. (a) 좌 텍스트(heading 18px + body-lg) + 우 터미널 블록(§6.14, 배포 로그 6줄 재생) / (b) 반전: 좌 kbd 데모 패널(커맨드 팔레트 §6.7 정적 재현) + 우 텍스트. 각 단 사이 64px
  5. 64px 아래 지표 스트립: 인라인 4항목(mono 24px 숫자 + `caption` 라벨 — "42s 평균 빌드 · 99.98% 가동률 · 1.2k 팀 · 40ms p50"), 항목 사이 1px 보더
  6. 96px 아래 마지막 CTA 밴드(중앙, heading + primary 버튼) → 푸터(caption, 3열 링크)
- 모바일: 히어로 패딩 48px, display 유지 44px(2줄), 기능 섹션 1열 스택, 하단 고정 CTA 48px(§4).

### screen-2 이슈 보드 (칸반 3열)
- 목적: 팀의 진행 상황 파악과 이슈 이동. 구성:
  1. 헤더 행: `title` 24px "보드" + 우측 필터 칩 2개("담당: 나 ×", "라벨: bug ×") + primary 32px "이슈 만들기" + kbd `C`
  2. 24px 아래 칸반 3열(§6.15): `백로그(8) / 진행 중(3) / 완료(12)` — 각 칼럼 320px, gap 16px. 카드 6~4~5장, 카드마다 이슈 ID(`GWD-140`~) mono + 제목 + 우선순위 아이콘(긴급=danger 계열 SVG, 높음/중간/낮음 막대 아이콘) + 라벨 뱃지 + 아바타
  3. "진행 중" 칼럼의 카드 1장은 선택 상태(1px primary 보더) — screen-3으로 이어지는 연출
  4. 빈 칼럼 데모: 4번째 상태 "검토(0)"를 데스크톱에서만 노출, §6.10 빈 상태("검토할 이슈가 없습니다.")
- 모바일: 칼럼 수평 스크롤 + scroll-snap, 상단에 칼럼 인디케이터(세그먼트 §6.13).

### screen-3 이슈 상세 (사이드 메타 패널)
- 목적: 이슈 하나의 전체 맥락. 구성(데스크톱 2단: 본문 1fr + 우측 메타 패널 280px):
  1. 본문 영역: 브레드크럼(`보드 / GWD-142`, mono ID) → 8px → `title` 24px 이슈 제목 → 16px → 설명 `body-lg` 15px 3~4문단(인라인 코드 `--radius-1` 배경 surface-2) → 32px → `micro` mono 소제목 "활동" → 활동 타임라인: 좌측 2px 세로선(`--color-border`) + 항목별 점 8px, 각 항목 = 아바타 20px + 13px 텍스트 + `caption` mono 시각. 마지막에 댓글 인풋(§6.2, 40px) + primary 32px "댓글" + kbd `⇧⏎`
  2. 메타 패널(280px, 좌측 1px `--color-border`, 패딩 16px): `micro` mono 소제목 "속성" → 키-값 행 8개(행 높이 32px, 키 = `caption` text-sub, 값 = 13px — 상태 뱃지 / 우선순위 / 담당 아바타+이름 / 라벨 칩 / 마일스톤 / 브랜치명 mono `feat/gwd-142` / 생성·수정 시각 mono)
  3. 헤더 우측: ghost 아이콘 버튼 2개(링크 복사, 더보기) + 상태 변경 secondary 32px "완료로 이동" + kbd `S`
- 모바일: 메타 패널이 상단 접이식 섹션(세그먼트 "본문/속성" §6.13) 또는 하단 시트로.

### screen-4 배포 로그 (터미널풍 타임라인)
- 목적: 배포 이력 추적과 실패 진단. 구성:
  1. `title` 24px "배포" + 우측 환경 세그먼트(§6.13: production / preview) + secondary 32px "재배포" + kbd `R`
  2. 24px 아래 현재 상태 카드(§6.3): 상태 점 + "v1.4.2 — production 가동 중" 13px/500 + mono 메타(`빌드 42s · 배포 09:41:12 · 커밋 8f3ac21`) + 우측 ghost "롤백"
  3. 32px 아래 배포 타임라인: 행 높이 44px 리스트(§6.4 변형) — 좌측 상태 점(성공 success / 실패 danger / 진행 중 accent 점멸 800ms) + 버전 mono 13px `v1.4.2` + 커밋 메시지 13px 말줄임 + 브랜치 mono `caption` + 우측 소요 시간 mono + 시각 mono
  4. 실패 행(1개 포함)은 클릭 시 아래로 확장(200ms `--ease-out`): 터미널 블록(§6.14) 8줄 — `[09:38:02] $ pnpm build` … 에러 줄 `#ff8589` `ERR! exit code 1` → 하단 secondary "로그 전체 복사"
  5. 진행 중 행(맨 위 1개): 마지막 줄 커서 `▍` 점멸, 신규 줄 즉시 추가(스태거·타이핑 연출 금지)
- 모바일: 우측 mono 메타를 2줄째로 내림(행 높이 유지 48px+확장).

### screen-5 팀 설정 (멤버 테이블 + API 키)
- 목적: 멤버 권한과 API 키 관리. 구성:
  1. `title` 24px "팀 설정" + 탭(§6.13: 멤버 / API 키 / 결제 — "멤버" 활성)
  2. 24px 아래 멤버 섹션: `micro` mono 소제목 "멤버 6" + 우측 secondary 32px "초대" → 8px → 멤버 테이블(§6.16): 열 = 아바타+이름 13px / 이메일 `caption` mono / 역할 셀렉트(§6.2 32px: 소유자·관리자·멤버) / 마지막 활동 mono 우정렬 / 행 끝 ghost 더보기(hover 표시). 소유자 행의 역할 셀렉트는 disabled + 툴팁 "소유자는 1명 이상 필요합니다."
  3. 32px 아래 API 키 섹션: `micro` mono 소제목 "API 키" → 키 카드 리스트(행 44px): 키 이름 13px/500 + 마스킹 mono `gw_prod_••••3f2a` + 발급일 mono + 우측 ghost "복사" + danger ghost "폐기". "폐기" 클릭 → 확인 모달(§6.7, §8 카피: 마스킹 키 명시 + "이 작업은 되돌릴 수 없습니다.")
  4. "새 키 발급" secondary 32px → 발급 직후 1회만 전체 키 노출 카드: 터미널 블록(§6.14) 1줄 + "지금 복사하세요. 다시 표시되지 않습니다." `caption` warning-text
  5. 하단 32px 아래 위험 구역 카드: 1px `color-mix(in srgb, var(--color-danger) 40%, transparent)` 보더, 제목 13px/500 "팀 삭제" + `caption` 설명 + danger 32px "삭제"
- 모바일: 테이블 2열 축소(§6.16), API 키 행은 카드 스택으로.

## §10. 금지 규칙 (Anti-AI-look)

**공통 금지** (AI가 흔히 저지르는 실수 → 대신 할 것):
1. **보라→파랑 그라데이션 히어로** → `linear-gradient` 전면 금지. 히어로는 `--color-bg` 단색 + `--color-glow` radial 1곳(§9 screen-1의 정확한 값)만.
2. 모든 카드에 동일 `box-shadow` → 정적 요소는 그림자 0, 1px 알파 보더로 구분(§5). 그림자는 드롭다운·모달·토스트만.
3. 3열 아이콘+제목+설명 카드 반복 → 기능 소개는 비대칭 2단(텍스트+실물 UI 데모)으로(§9 screen-1-4).
4. `border: 1px solid #eee`(하드코딩 회색 보더) → 보더는 알파 토큰 `--color-border`/`--color-border-strong` 두 개만.
5. 이모지를 아이콘 대용으로 사용 → 인라인 SVG 16/20/24px 단색만.
6. 화면마다 다른 radius → 4/6/10/999px 스케일 밖 값 금지(§5).

**Obsidian 고유 금지 (7개):**
7. **순수 `#000` 배경·순백 `#fff` 본문** → 배경 최저 `#0a0a0c`, 본문 텍스트 최대 `#f0f0f2`(§2.3). `#ffffff`는 primary/danger 버튼 위 텍스트 전용.
8. **다크에서 밝은 회색 레이어 점프**(`#2a2a2e` 이상의 카드 배경) → 레이어는 bg/surface/surface-2 3단만(§2.2). 더 띄우려면 그림자+보더, 밝기가 아니라.
9. **글로우 남발** → `--shadow-glow`와 radial 글로우 합산 화면당 1곳(§5). 버튼마다 네온 테두리를 두르는 순간 이 프리셋은 죽는다.
10. **앱 UI에 16px+ 본문·`display` 사용** → 앱 화면(screen-2~5) 본문은 13px, `body-lg`(15px)는 이슈 설명만, `display`(44px)는 랜딩 히어로 전용(§3).
11. **hover 시 lift/scale**(translateY·scale·그림자 확대) → hover는 배경/보더 색 전환 100ms만(§7). 칸반 카드 드래그 중에도 기울임 금지(§6.15).
12. **원색 면 뱃지·파스텔 다색 라벨** → 뱃지는 상태색 12% 틴트 + 상태 텍스트색, hue는 primary+상태색 3종 밖 사용 금지(§6.9).
13. **마케팅 과장 카피**(느낌표, "혁신적인", "최고의") → 수치·동작 서술만(§8). ID·시간·수치에 프로포셔널 폰트 금지 — 예외 없이 mono+tabular-nums(§3).

## §11. Tailwind v4 / React 매핑 (부록)

```css
/* app.css — tokens.css를 먼저 import한 뒤 Tailwind 토큰에 연결 */
@import "tailwindcss";
@import "../presets/4-obsidian/tokens.css";

@theme inline {
  --color-bg: var(--color-bg);
  --color-surface: var(--color-surface);
  --color-surface-2: var(--color-surface-2);
  --color-text: var(--color-text);
  --color-text-sub: var(--color-text-sub);
  --color-primary: var(--color-primary);
  --color-primary-text: var(--color-primary-text);
  --color-accent: var(--color-accent);
  --color-danger: var(--color-danger);
  --color-success: var(--color-success);
  --color-border: var(--color-border);
  --font-sans: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", sans-serif;
  --font-mono: "SF Mono", "Cascadia Mono", Consolas, "Roboto Mono", monospace;
  --text-micro: 11px; --text-caption: 12px; --text-body: 13px; --text-body-lg: 15px;
  --text-heading: 18px; --text-title: 24px; --text-display: 44px;
  --radius-1: 4px; --radius-2: 6px; --radius-3: 10px;
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
}
```

```tsx
// kbd 단축키 힌트 (§6.11 — Obsidian 시그니처)
function Kbd({ children }: { children: string }) {
  return (
    <kbd className="hidden md:inline-flex h-[18px] min-w-[18px] items-center rounded-[4px]
      border border-(--color-border) bg-(--color-surface-2) px-1
      font-mono text-[11px] text-(--color-text-sub)">
      {children}
    </kbd>
  );
}

// 이슈 행 (§6.4)
function IssueRow({ id, title, status, date }: { id: string; title: string; status: string; date: string }) {
  return (
    <div className="flex h-11 items-center gap-3 border-b border-(--color-border) px-3
      transition-colors duration-100 hover:bg-(--color-surface-2)">
      <span className="font-mono text-[11px] font-medium text-(--color-text-sub)">{id}</span>
      <span className="flex-1 truncate text-[13px]">{title}</span>
      <StatusBadge label={status} />
      <time className="font-mono text-[12px] tabular-nums text-(--color-text-sub)">{date}</time>
    </div>
  );
}

// 상태 뱃지 (§6.9)
function StatusBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex h-5 items-center gap-1 rounded-[4px] px-2 text-[11px] font-medium
      bg-[color-mix(in_srgb,var(--color-success)_12%,transparent)] text-(--color-success-text)">
      <span className="h-2 w-2 rounded-full bg-current" aria-hidden />
      {label}
    </span>
  );
}
```

StyleSeed 호환 메모: 시맨틱 토큰명이 StyleSeed theme.css의 `--color-*` 관례와 동일 계열이라 그대로 복사 가능. `--color-surface-2` ↔ StyleSeed `--color-muted`, `--color-border-strong` ↔ `--color-input-border`. 단 **다크가 기본**이므로 StyleSeed로 옮길 때 `:root` 값을 dark 테마 슬롯에, `[data-theme="light"]` 값을 light 슬롯에 매핑한다. 모션은 StyleSeed "Snap" 시드(즉각·절제)에 대응.

## §12. 채점 루브릭

loop-runner 합격 기준으로 그대로 사용한다. 대상: 이 프리셋을 따랐다고 주장하는 HTML/CSS 결과물 파일 집합 `$FILES`.

### verifiable (기계 판정, 70점)

| # | 항목 | 배점 | 판정 방법 |
|---|---|---|---|
| V1 | font-size가 타입 스케일 {11,12,13,15,18,24,44}px만 사용 | 10 | `grep -rhoE "font-size:\s*[0-9.]+(px\|rem\|em)" $FILES \| grep -vE ":\s*(11\|12\|13\|15\|18\|24\|44)px"` → 출력 0줄이면 통과 |
| V2 | spacing이 스케일 {0,2,4,8,12,16,24,32,48,64,96}px만 사용 | 10 | `grep -rhoE "(margin\|padding\|gap)[a-z-]*:\s*[^;]+" $FILES \| grep -oE "[0-9.]+px" \| sort -u \| grep -vE "^(0\|2\|4\|8\|12\|16\|24\|32\|48\|64\|96)px$"` → 출력 0줄이면 통과 |
| V3 | border-radius가 {0,4px,6px,10px,999px}만 사용 | 8 | `grep -rhoE "border-radius:\s*[^;]+" $FILES \| grep -vE ":\s*(0\|4px\|6px\|10px\|999px\|10px 10px 0 0\|var\(--radius-(1\|2\|3\|full)\))( ;\|;\|$)"` → 0줄 통과 |
| V4 | box-shadow가 §5 표의 값(none/shadow-1/shadow-2/shadow-glow 또는 var 참조, 인풋 focus 링 `0 0 0 3px` 포함)만 | 8 | `grep -rhoE "box-shadow:\s*[^;]+" $FILES \| grep -vE "(none\|var\(--shadow-(0\|1\|2\|glow)\)\|0 1px 2px\|0 8px 32px\|0 0 0 1px\|0 0 0 3px\|0 0 24px)"` → 0줄 통과 |
| V5 | transition/animation duration이 {100,150,200}ms(예외: 800ms 커서·스피너, 1800ms shimmer, 0.01ms reduced)만 | 8 | `grep -rhoE "(transition\|animation)[^;]*[0-9.]+m?s" $FILES`에서 duration 추출 → 허용집합 {100ms,150ms,200ms,800ms,1800ms,0.01ms} 밖 값 0개 |
| V6 | `prefers-reduced-motion` 블록 존재 | 6 | `grep -rl "prefers-reduced-motion" $FILES` → 1개 이상 통과 |
| V7 | 대비율: §2.3 표의 14개 쌍 전부 기준치 이상 (다크·라이트 모두) | 10 | 사용된 실제 hex를 추출해 WCAG 식 `(L1+0.05)/(L2+0.05)` 계산. 본문쌍 ≥4.5, UI쌍 ≥3.0. 알파 보더는 배경과 합성 후 계산 |
| V8 | 이슈 ID·타임스탬프·수치에 mono + tabular-nums 적용 | 5 | `grep -rl "tabular-nums" $FILES` ≥ 1 그리고 `grep -rhoE "class=\"[^\"]*mono" $FILES` ≥ 1 — ID/시각 요소에 mono 클래스(또는 `font-family:.*mono`) 적용 여부 확인 |
| V9 | 외부 리소스 0건 | 5 | `grep -rhE "(src\|href)=[\"']https?://" $FILES` 및 `grep -rh "@import url(http" $FILES` → 0줄 통과 |
| V10 | 그라데이션 통제 (§10-1·§10-9) | 0 (실격 조건) | `grep -rhi "linear-gradient" $FILES` → 0줄 **그리고** `grep -rhoi "radial-gradient" $FILES \| wc -l` ≤ 1 (허용된 1건은 screen-1 히어로 글로우, 색은 `var(--color-glow)` 또는 `rgba(94,106,210,`). 위반 시 총점 무관 불합격 |

### subjective (AI/사람 채점, 각 1~5점, 30점 환산)

| # | 항목 | 1점 앵커 | 3점 앵커 | 5점 앵커 |
|---|---|---|---|---|
| S1 | §1 첫인상 부합 (잉크빛·정밀·다크 퍼스트) | 밝은 회색 카드가 떠 있는 "다크 모드 씌운 라이트 디자인", 글로우가 여러 곳 | 잉크 배경·보더는 맞으나 글자가 크고 성겨서 밀도가 없음 | 스크린샷만으로 "개발자 도구"로 인식, 13px 밀도 + 글로우 1점 + 알파 보더 |
| S2 | §8 어조 준수 | 이모지·느낌표, "앗!" 류 카피, 과장 형용사 | 존댓말이나 수치·다음 행동 없음 | 모든 카피가 수치+동작, 단축키 병기, 느낌표 0개 |
| S3 | 위계 (§3 스케일·§4 리듬) | 제목 다수·본문 16px+, 간격 임의 | title/heading 구분은 있으나 mono 소제목 부재, 리듬 불규칙 | title 1개·heading ≤3, micro mono 소제목, 24/32/96px 리듬 일정 |
| S4 | 개발자 디테일 (§6.11 kbd·§6.14 터미널·mono 메타) | kbd·터미널·mono 전무 — 일반 SaaS 템플릿 | 일부만 있고 배치가 장식적(기능과 무관한 위치) | 검색 ⌘K, 버튼 단축키, 터미널 로그, mono ID가 유기적으로 배치 |
| S5 | 모션 절제 (§7) | 스태거·카운트업·lift·패럴랙스 존재 | duration은 준수하나 불필요한 진입 애니메이션 다수 | 상태 확인용 모션만, 8px 이내 이동, 즉각적 |
| S6 | §10 정성 항목 (레이어 3단·글로우 1곳·비대칭 기능 섹션) | 센터 3열 아이콘 카드 + 네온 테두리 남발 | 대체로 준수, 1~2건 위반(예: 카드 hover lift) | 전 항목 무위반 |

### 합격선

- **V10 위반 시 즉시 불합격.**
- verifiable: V1~V9 합계 70점 만점 중 **핵심 4항목(V1·V2·V7·V9)은 만점 필수**, 총 60점 이상.
- subjective: 6항목 평균 **4.0 이상**, 어떤 항목도 2점 이하 없음.
- 위 세 조건 동시 충족 시 합격. 미달 시 최저 점수 항목부터 수정 후 재채점.
