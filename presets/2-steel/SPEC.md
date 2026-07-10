---
number: 2
codename: Steel
inspired-by: IBM Carbon — 서술 참조만, 상표는 파일/클래스명에 사용하지 않음. 이 스펙은 독립 해석이며 공식 값이 아님
mood: 산업적 정밀함. 8px 그리드 위의 고밀도 데이터 콘솔, 직각 모서리, 파랑 단일 포인트, 즉각적이고 절제된 모션
best-for: 엔터프라이즈 데이터 콘솔, 어드민/백오피스, 모니터링 대시보드, B2B SaaS 내부 도구
variants: [a, b]
status: complete
---

# 2 · Steel

## §1. 첫인상 요약

1. **도구다, 장식이 아니다.** 화면의 90%는 뉴트럴 그레이 10단계, 포인트는 파랑(#0f62fe) 단 하나.
2. **직각과 격자.** 모서리는 0~4px, 모든 치수는 8px 그리드(예외적으로 2·4px 미세 단위 허용)에 스냅.
3. **밀도가 곧 신뢰.** 행 높이 40px 테이블, 12~14px 본문, tabular-nums 숫자 — 한 화면에 많은 데이터가 정돈되어 보인다.
4. **그림자보다 선.** 구분은 1px 보더와 배경 단차로, 그림자는 떠 있는 레이어(드로어·드롭다운·토스트)에만.
5. **모션은 70~150ms.** 눈에 띄는 애니메이션이 아니라 "반응했다"는 확인. 튀거나 출렁이지 않는다.

## §2. 색

### 2.1 팔레트 (시맨틱 토큰)

뉴트럴 구조는 10단계 그레이 램프로 고정한다:
`#ffffff #f4f4f4 #e0e0e0 #c6c6c6 #8d8d8d #6f6f6f #525252 #393939 #262626 #161616`

| 토큰 | 라이트 (a) | 다크 (a) | 용도 |
|---|---|---|---|
| `--color-bg` | `#f4f4f4` | `#161616` | 페이지 배경 |
| `--color-surface` | `#ffffff` | `#262626` | 타일/카드/테이블 배경 |
| `--color-surface-2` | `#e0e0e0` | `#393939` | 테이블 헤더, hover 행, 인풋 배경 |
| `--color-text` | `#161616` | `#f4f4f4` | 본문 |
| `--color-text-sub` | `#525252` | `#a8a8a8` | 보조 텍스트, 라벨, 캡션 |
| `--color-primary` | `#0f62fe` | `#0f62fe` | 주 버튼, 선택 상태, 포커스 링 |
| `--color-primary-hover` | `#0043ce` | `#0353e9` | 주 버튼 hover |
| `--color-primary-text` | `#ffffff` | `#ffffff` | primary 위 텍스트 |
| `--color-accent` | `#0043ce` | `#78a9ff` | 링크, 선택된 텍스트류 인터랙션 |
| `--color-info` | `#0043ce` | `#4589ff` | 정보 상태 (뱃지/알림) |
| `--color-success` | `#24a148` | `#42be65` | 성공 상태 (뱃지/알림, UI 3:1용) |
| `--color-success-text` | `#198038` | `#42be65` | 성공 텍스트 (본문 4.5:1용) |
| `--color-warning` | `#f1c21b` | `#f1c21b` | 경고 상태 — 위 텍스트는 항상 `#161616` |
| `--color-warning-text` | `#8e6a00` | `#f1c21b` | 경고 텍스트 |
| `--color-danger` | `#da1e28` | `#fa4d56` | 위험/에러 (버튼·뱃지) |
| `--color-danger-text` | `#da1e28` | `#ff8389` | 에러 텍스트 |
| `--color-border` | `#e0e0e0` | `#393939` | 장식 보더 (타일 구분, 테이블 행선) |
| `--color-border-strong` | `#8d8d8d` | `#6f6f6f` | 인풋/토글 등 조작 UI 보더 (3:1 필요) |
| `--color-focus` | `#0f62fe` | `#ffffff` | 포커스 아웃라인 2px |
| `--color-overlay` | `rgba(22,22,22,0.5)` | `rgba(0,0,0,0.65)` | 드로어/모달 뒤 스크림 |

### 2.2 라이트/다크

양쪽 모두 지원한다(위 표). 원칙:
- 다크는 "라이트 반전"이 아니라 그레이 램프의 재배치다. `bg=#161616 < surface=#262626 < surface-2=#393939`로 밝을수록 위 레이어.
- primary 버튼 면은 양 테마 동일 `#0f62fe`(흰 텍스트 5.0:1). 단 **텍스트/아이콘으로 쓰는 파랑**은 다크에서 `#78a9ff`(링크)·`#4589ff`(아이콘/보더)로 밝힌다 — `#0f62fe`는 `#161616` 위에서 3.62:1로 본문 기준 미달이기 때문.
- 상태색도 다크에서 한 단계 밝은 값으로 교체(위 표). 이미지·차트 채우기 색도 동일 규칙.

### 2.3 대비 규칙

기준: 본문 텍스트 4.5:1 이상, 대형 텍스트(20px+ 또는 14px bold+)와 UI 컴포넌트 경계 3:1 이상.
아래는 **이 스펙 값으로 실제 계산한 대비율**(WCAG 상대휘도식). 전 항목 통과 확인됨.

| 쌍 | 라이트 | 다크 | 판정 기준 |
|---|---|---|---|
| bg / text | `#f4f4f4`/`#161616` = **16.45** | `#161616`/`#f4f4f4` = **16.45** | ≥ 4.5 |
| surface / text | `#ffffff`/`#161616` = **18.10** | `#262626`/`#f4f4f4` = **13.76** | ≥ 4.5 |
| surface / text-sub | `#ffffff`/`#525252` = **7.81** | `#262626`/`#a8a8a8` = **6.36** | ≥ 4.5 |
| primary / primary-text | `#0f62fe`/`#ffffff` = **5.00** | 동일 = **5.00** | ≥ 4.5 |
| surface / accent(링크) | `#ffffff`/`#0043ce` = **7.79** | `#262626`/`#78a9ff` = **6.43** | ≥ 4.5 |
| surface / danger-text | `#ffffff`/`#da1e28` = **5.00** | `#262626`/`#ff8389` = **6.38** | ≥ 4.5 |
| surface / success-text | `#ffffff`/`#198038` = **5.02** | `#262626`/`#42be65` = **6.33** | ≥ 4.5 |
| surface / warning-text | `#ffffff`/`#8e6a00` = **4.99** | `#262626`/`#f1c21b` = **8.99** | ≥ 4.5 |
| warning 면 / `#161616` 텍스트 | `#f1c21b`/`#161616` = **10.75** | 동일 | ≥ 4.5 |
| surface / border-strong (UI) | `#ffffff`/`#8d8d8d` = **3.32** | `#262626`/`#6f6f6f` = **3.01** | ≥ 3.0 |
| bg / primary (UI 경계) | `#f4f4f4`/`#0f62fe` = **4.55** | `#161616`/`#4589ff` = **5.41** | ≥ 3.0 |

추가 제약:
- primary 위 텍스트는 항상 `#ffffff`. warning 면 위 텍스트는 항상 `#161616`. 예외 없음.
- `--color-border`(#e0e0e0 등)는 장식 전용 — 상태 전달이나 조작 가능 여부 표시는 반드시 `--color-border-strong` 이상 또는 텍스트/아이콘으로.
- 상태를 색으로만 전달 금지: 뱃지는 항상 `● 점 + 텍스트 라벨` 병기.

### 2.4 팔레트 생성 규칙 (변형·랜덤용)

**고정 (모든 변형 공통, 절대 변경 금지):**
- 뉴트럴 10단계 램프와 bg/surface/text 계열 배치 전부 (§2.1 그대로)
- 상태색 4종(info/success/warning/danger)과 overlay, border 계열
- 대비 요건: primary/white ≥ 4.5, 라이트 accent/white ≥ 4.5, 다크 accent/#262626 ≥ 4.5, primary가 bg 위 UI로 쓰일 때 ≥ 3.0

**자유 (변형이 바꿀 수 있는 것):**
- primary의 hue만 0~360 자유. 채도는 HSL 기준 S ≥ 60%. 명도 L은 위 대비 요건을 만족할 때까지 조정(파랑 계열이면 대략 L 45~55%, 노랑·청록처럼 밝은 hue면 L 25~40%까지 낮아짐).
- 파생 토큰은 primary에서 기계적으로 유도: `primary-hover` = 같은 hue에서 L −8~−10%p, 라이트 `accent` = L −10~−15%p(텍스트 대비 확보), 다크 `accent` = 같은 hue에서 L +25~+35%p.
- accent hue는 primary와 동일 hue만 허용(±0°). Steel은 단일 포인트 컬러 시스템이다 — 보조 hue를 추가하면 변형이 아니라 다른 프리셋이다.

**랜덤 요청 처리:** 위 규칙 안에서 hue를 뽑고 결과를 `2-r<hue>`로 명명한다(예: `2-r212` = hue 212, 같은 이름 = 항상 같은 팔레트). §2.3 계산을 통과하지 못하는 조합은 폐기하고 다시 뽑는다.

**기존 변형:** `a` = hue 219 파랑(#0f62fe 계열, 기본). `b` = hue 178 청록(라이트 primary `#007d79`/white 4.99:1, 다크 accent `#3ddbd9`/#262626 8.89:1 — 계산 통과 확인됨).

## §3. 타이포그래피

**폰트 스택** (외부 로드 금지, 시스템 폴백만):
- 본문/UI: `"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Noto Sans KR", sans-serif`
- 숫자·코드·ID: `"SF Mono", "Cascadia Mono", Consolas, "Roboto Mono", "Noto Sans Mono CJK KR", monospace`

**타입 스케일** — 아래 6단계 외 font-size 사용 금지:

| 이름 | size | weight | line-height | letter-spacing | 용도 |
|---|---|---|---|---|---|
| `caption` | 12px | 400 | 16px | 0.32px | 캡션, 타임스탬프, 헬퍼 텍스트 |
| `label` | 12px | 500 | 16px | 0.32px | 인풋 라벨, 테이블 헤더, 뱃지 |
| `body` | 14px | 400 | 20px | 0.16px | 본문, 테이블 셀, 리스트 |
| `body-lg` | 16px | 400 | 24px | 0 | 강조 본문, 드로어 요약 |
| `heading` | 20px | 600 | 28px | 0 | 패널/드로어/모달 제목 |
| `title` | 28px | 600 | 36px | 0 | 페이지 제목 (화면당 1개) |
| `display` | 42px | 300 | 50px | 0 | KPI 숫자 전용 (mono, 아래 참조) |

**위계 규칙:**
- 한 화면에 `title` 1개, `heading` 최대 4개. 그 아래는 `label`(12px/500)로 소제목을 대신한다 — h5/h6 같은 중간 크기를 만들지 않는다.
- **숫자 전용 처리**: 금액·건수·퍼센트 등 데이터 숫자는 반드시 mono 스택 + `font-variant-numeric: tabular-nums`. KPI 큰 숫자는 `display`(42px/300) + 단위는 `body`(14px)로 분리 표기.
- weight는 300(display 전용)/400/500/600만. 700 이상 금지.
- 테이블 헤더는 `label`(12px/500) + `--color-text-sub`, 셀은 `body`(14px/400).

## §4. 간격 · 레이아웃

**스페이싱 스케일** — 이 값 외 사용 금지: `0 2 4 8 12 16 24 32 40 48 64` (px)
(2·4는 아이콘-텍스트 사이, 뱃지 내부 등 미세 단위 전용. 컴포넌트 간 간격은 8 이상.)

**그리드/컨테이너:**
- 데스크톱: 최대 폭 1584px, 기본 뷰포트 1280px 기준. 콘텐츠 영역 = 16컬럼 개념이되 구현은 CSS grid `repeat(16, 1fr)`, gutter 16px. 좌측 사이드 내비 폭 256px(축소 시 48px).
- 모바일(390px): 1컬럼, 좌우 패딩 16px. 사이드 내비는 하단 탭바로 전환.
- 화면 기본 패딩: 데스크톱 상하 24px·좌우 32px, 모바일 상하 16px·좌우 16px.
- 섹션 간 리듬: 페이지 제목 아래 24px, 섹션(타일 그룹) 사이 32px, 타일 사이 gap 16px, 타일 내부 패딩 16px, 폼 필드 사이 24px.
- 헤더(앱바) 높이 48px 고정. 테이블 툴바 높이 48px, 행 높이 기본 40px(밀집 32px, 여유 48px — 3단 중 택1, 한 테이블 안에서 혼용 금지).

**모바일 규칙:**
- 터치 타깃 최소 44×44px (테이블 행은 행 전체가 타깃이므로 행 높이 48px 모드 사용).
- 하단 고정 CTA: 사용 안 함(콘솔 성격). 대신 하단 탭바 높이 48px + `env(safe-area-inset-bottom)` 패딩.
- 가로 스크롤 테이블 허용 — 단 첫 열(식별자) `position: sticky; left: 0` 고정.

## §5. 형태 (Shape)

**radius 스케일:**

| 토큰 | 값 | 적용처 |
|---|---|---|
| `--radius-0` | 0 | 타일/카드, 테이블, 드로어, 모달, 사이드 내비, 앱바 |
| `--radius-1` | 2px | 버튼, 인풋, 셀렉트, 뱃지, 칩, 토스트 |
| `--radius-2` | 4px | 툴팁, 드롭다운 메뉴, 체크박스 |
| `--radius-full` | 999px | 토글 스위치 트랙·노브, 상태 점(dot) — 이 두 곳 외 사용 금지 |

**border:** 구분의 기본 수단. 두께는 1px 단일(포커스만 2px). 색은 장식 `--color-border`, 조작 UI `--color-border-strong`, 선택/활성 `--color-primary`. 인풋은 4면 보더 대신 **하단 1px 보더 + 배경 `--color-surface-2`** 스타일.

**shadow/elevation 단계 — 정확한 값:**

| 토큰 | 라이트 | 다크 | 적용처 |
|---|---|---|---|
| `--shadow-0` | `none` | `none` | 타일/카드/테이블 (보더로만 구분) |
| `--shadow-1` | `0 2px 6px rgba(22,22,22,0.20)` | `0 2px 6px rgba(0,0,0,0.60)` | 드롭다운, 툴팁, 토스트 |
| `--shadow-2` | `0 4px 16px rgba(22,22,22,0.28)` | `0 4px 16px rgba(0,0,0,0.70)` | 드로어, 모달 |

grid 위에 놓인 정적 요소(타일·테이블)에 그림자를 주지 않는다. 그림자 = "일시적으로 떠 있는 레이어"라는 신호로만.

## §6. 핵심 컴포넌트 규칙

공통: 모든 인터랙티브 요소는 `:focus-visible { outline: 2px solid var(--color-focus); outline-offset: -2px; }`. disabled는 `opacity` 대신 전용 색(`#c6c6c6` 텍스트/라이트, `#525252`/다크) + `cursor: not-allowed`.

### 6.1 버튼
- 높이 40px(기본) / 32px(테이블 내) / 48px(모바일 주 액션). 패딩 좌 16px·우 48px(**좌우 비대칭** — 우측 여백에 아이콘 자리, Steel 시그니처), 아이콘 없으면 좌우 16px 대칭 허용. radius 2px. `label` 대신 14px/400.
- primary: 면 `--color-primary`, 텍스트 흰색. hover `--color-primary-hover`(70ms), active에서 추가로 8% 어둡게, focus 2px 아웃라인 + 1px 흰 inset.
- secondary: 면 투명, 1px `--color-primary` 보더 + primary 텍스트. hover 시 면 `--color-primary` 10% 틴트(`color-mix(in srgb, var(--color-primary) 10%, transparent)`).
- ghost: 면·보더 없음, primary 텍스트. hover 시 면 `--color-surface-2`.
- danger: primary와 동형, 면 `--color-danger`.
```css
.btn-primary { height: 40px; padding: 0 48px 0 16px; border-radius: var(--radius-1);
  background: var(--color-primary); color: var(--color-primary-text);
  font-size: 14px; transition: background var(--motion-fast-1) var(--ease-standard); }
```

### 6.2 인풋 필드
- 높이 40px, 배경 `--color-surface-2`, 보더는 하단 1px `--color-border-strong`만, radius 2px 상단만(`2px 2px 0 0`). 라벨은 위 8px 간격, `label` 스타일 + text-sub. 헬퍼/에러 텍스트 아래 4px, `caption`.
- focus: 하단 보더 대신 전체 2px `--color-focus` 아웃라인(110ms). error: 하단 2px `--color-danger` + 에러 텍스트 `--color-danger-text`.

### 6.3 카드(타일)
- radius 0, 그림자 없음, 배경 `--color-surface`, 1px `--color-border`. 내부 패딩 16px. 제목 `label`+text-sub → 8px → 값/내용. 클릭 가능한 타일은 hover 시 배경 `--color-surface-2`(70ms) + 좌측 3px `--color-primary` 인셋 보더.

### 6.4 리스트 아이템
- 높이 48px(2줄이면 64px), 좌우 패딩 16px, 행 사이 1px `--color-border`. 좌: 텍스트(제목 body, 보조 caption), 우: 값(mono tabular-nums) 또는 chevron 16px 아이콘. hover 배경 `--color-surface-2`.

### 6.5 상단 앱바
- 높이 48px 고정, 배경은 라이트 `#161616`(**라이트 테마에서도 어두운 바** — 콘솔 시그니처), 다크 `#262626`. 텍스트 `#f4f4f4`. 하단 1px `#393939`. 좌: 제품명(14px/600, "관제 ▸ 콘솔"처럼 ▸ 구분), 우: 아이콘 버튼 48×48px 정사각.

### 6.6 하단 탭바 (모바일)
- 높이 48px + safe-area, 배경 앱바와 동일 어두운 면. 탭 4~5개, 아이콘 20px + `caption` 라벨. 활성 탭: 상단 2px `--color-primary` 보더 + 아이콘/라벨 흰색, 비활성 `#a8a8a8`.

### 6.7 모달
- radius 0, `--shadow-2`, 폭 480px(모바일 = 화면 − 32px). 헤더 패딩 16px + `heading`, 본문 16px, 푸터는 **전폭 버튼 2분할**(취소 = ghost, 확인 = primary, 각 50% 폭, 높이 64px, radius 0) — 푸터에 여백·둥근 버튼 금지. 진입: opacity 0→1 + translateY(-8px)→0, 150ms entrance easing.

### 6.8 토스트
- 우상단 고정(모바일은 상단 전폭 − 32px), 폭 320px, radius 2px, `--shadow-1`. 좌측 3px 상태색 보더 + 상태 아이콘 16px + 제목 `body`/600 + 본문 `caption`. 자동 소멸 5초(에러는 수동 닫기만). 진입 110ms translateX(16px)→0.

### 6.9 뱃지/칩 (상태 뱃지 — 이 프리셋의 핵심)
- 높이 20px, 패딩 좌우 8px, radius 2px(pill 금지). 구조: `● 8px 상태 점 + 4px 간격 + label 12px/500 텍스트`.
- 면 배색: 상태색 10% 틴트 배경 + 상태 텍스트색 텍스트 (예: 성공 = `color-mix(in srgb, var(--color-success) 10%, var(--color-surface))` + `--color-success-text`). 색만으로 상태 전달 금지 — 텍스트 라벨 필수.

### 6.10 빈 상태 (empty state)
- 타일/테이블 내부 중앙, 상하 패딩 48px. 인라인 SVG 아이콘 32px(단색 `--color-text-sub`, 일러스트 금지) → 12px → 제목 `body`/600 → 4px → 설명 `caption` → 16px → ghost 버튼 1개. 최대 폭 288px.

### 6.11 데이터 테이블 (데모 필수)
- 헤더 행: 높이 40px, 배경 `--color-surface-2`, `label` 12px/500. 정렬 가능 열은 헤더에 12px 화살표 아이콘, 클릭 시 즉시 재정렬(모션 없음).
- 바디 행: 높이 40px, 하단 1px `--color-border`, hover `--color-surface-2`(70ms), 선택 행은 배경 primary 10% 틴트 + 좌측 3px primary 보더. 숫자 열 우정렬 + mono tabular-nums. 첫 열 체크박스 폭 48px.
- 툴바(높이 48px): 좌 검색 인풋(폭 288px), 우 필터 칩·기본 버튼. 페이지네이션 바(높이 48px): 좌 "전체 1,240건 중 1–50", 우 페이지 셀렉트 + ‹ › 버튼 48×48px.

### 6.12 토글 스위치
- 트랙 48×24px radius-full, 노브 20px 원. off: 트랙 `--color-border-strong`, on: 트랙 `--color-success` + 노브 안 8px 체크 아이콘. 노브 이동 70ms standard easing. 우측 라벨 `body` 8px 간격.

### 6.13 진행률 바
- 높이 4px(인라인) / 8px(단독), radius 0, 트랙 `--color-border`, 채움 `--color-primary`(오류 시 `--color-danger`). 퍼센트 숫자는 우측 `caption` mono. 불확정(indeterminate)은 폭 30% 조각이 좌→우 반복 이동(1000ms linear — §7의 유일한 장주기 예외).

## §7. 모션

**성격 한 줄: "즉각적이고 절제됨 — 반응의 확인이지 연출이 아니다."**

| 토큰 | 값 | 용도 |
|---|---|---|
| `--motion-fast-1` | 70ms | hover, 배경/보더 색 전환, 토글 노브 |
| `--motion-fast-2` | 110ms | press, 포커스 링, 드롭다운·툴팁·토스트 진입 |
| `--motion-moderate` | 150ms | 드로어·모달 진입/퇴장, 패널 확장, 탭 전환 |
| `--ease-standard` | `cubic-bezier(0.2, 0, 0.38, 0.9)` | 화면 안에서 상태가 바뀔 때 |
| `--ease-entrance` | `cubic-bezier(0, 0, 0.38, 0.9)` | 화면 밖 → 안 (드로어, 토스트, 모달) |
| `--ease-exit` | `cubic-bezier(0.2, 0, 1, 0.9)` | 화면 안 → 밖 (퇴장은 진입보다 빠르게 느껴져야 함) |

패턴별 규칙:
- **진입(entrance)**: 드로어 = translateX(100%)→0 150ms entrance. 모달 = opacity+translateY(-8px) 150ms. 토스트 = translateX(16px)→0 110ms.
- **페이지 전환**: 콘텐츠 영역만 opacity 0→1 110ms. 좌우 슬라이드·스케일 금지.
- **hover/press**: 색 전환만 70ms. transform scale 금지(버튼이 커지거나 줄어들지 않는다).
- **리스트 스태거**: 사용 금지. 데이터는 한 번에 나타난다. 로딩은 스켈레톤(§10 참조)으로.
- 150ms 초과 duration 금지. 유일한 예외: indeterminate 진행률 바의 1000ms 반복(§6.13)과 스켈레톤 shimmer 2000ms.
- `prefers-reduced-motion: reduce` 대응 필수:
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important; animation-iteration-count: 1 !important; }
}
```

## §8. 보이스 & 톤 (마이크로카피)

- **어조**: 기술 문서의 정확함 + 동료의 간결함. 존댓말(합니다체), 감탄사·이모지 사용 금지. 문장은 짧게, 수치·대상·다음 행동을 명시.
- 데이터 콘솔이므로 "무엇이, 몇 건, 왜, 그래서 뭘 하면 되는가"가 카피의 전부다. 사과·과장·귀여움 금지.

| 상황 | 나쁜 예 (금지) | Steel 카피 |
|---|---|---|
| 주 버튼 | "시작하기!", "Go" | "파이프라인 실행", "저장" (동사+목적어, 2~6자 동사구) |
| 에러 | "앗! 오류가 발생했습니다 😢" | "연결에 실패했습니다. 네트워크를 확인한 뒤 다시 시도하세요. (오류 코드 ETL-504)" |
| 빈 상태 | "아직 아무것도 없네요~" | "표시할 잡이 없습니다. 필터를 해제하거나 새 잡을 등록하세요." |
| 로딩 | "잠시만 기다려주세요..." | "불러오는 중" (스켈레톤과 병기, 말줄임표 1개 이하) |
| 성공 토스트 | "완료되었어요! 🎉" | "권한 3건을 변경했습니다." (수치 포함) |
| 확인 다이얼로그 | "정말 삭제하시겠습니까?" | "잡 2건을 삭제합니다. 실행 이력은 30일간 보관됩니다." + 버튼 "삭제" / "취소" |
| 위험 액션 | "삭제하기" | "삭제" — 되돌릴 수 없으면 본문에 "이 작업은 되돌릴 수 없습니다." 1문장 추가 |

금지 표현: "앗/이런/오늘도/환영합니다" 류 감탄·인사, "~해보세요"의 남용(권유는 화면당 1회), 물음표 남발, 버튼 레이블의 "OK/확인"(무엇을 확인하는지 동사로 — "저장", "실행", "삭제").

## §9. 레이아웃 레시피 — 데모 5화면: 데이터 운영 콘솔 "관제(Gwanje)"

공통 프레임: 상단 앱바 48px(§6.5, 좌측 "관제 Gwanje ▸ 콘솔") + 데스크톱 좌측 사이드 내비 256px(대시보드/데이터셋/잡/권한 4항목, 활성 항목 좌측 3px primary 보더 + surface-2 배경) / 모바일 하단 탭바 48px(§6.6). 콘텐츠 패딩 데스크톱 24/32px, 모바일 16px.

### screen-1 대시보드
- 목적: 운영 상태 한눈 파악. 구성(위→아래):
  1. `title` 28px "대시보드" + 우측 caption "마지막 갱신 09:42:17" (mono) — 아래 24px
  2. KPI 타일 4개 (데스크톱 4열 grid gap 16px / 모바일 2×2): 각 타일 = §6.3, 내부에 `label` 지표명("처리 건수", "실패율", "평균 지연", "활성 잡") → 8px → `display` 42px mono 숫자 + `body` 단위 → 8px → 증감 caption(▲2.4% success-text / ▼ danger-text)
  3. 32px 아래 CSS 차트 타일 2개(데스크톱 2:1 비율): (a) 최근 24시간 처리량 — div 24개 flex 막대 차트(각 막대 `--color-primary`, hover 시 툴팁, 높이 160px), (b) 상태 분포 — 수평 누적 바(성공/경고/실패 3분할, 각 상태색) + 아래 범례(상태 점+라벨)
  4. 32px 아래 "최근 실패 잡" 컴팩트 테이블 5행(§6.11 밀집 32px 모드, 열: 잡 ID(mono)/데이터셋/상태 뱃지/시각)
- 컴포넌트: 타일, display 숫자, 상태 뱃지, 테이블. 차트는 순수 CSS(외부 라이브러리 금지).

### screen-2 데이터 테이블
- 목적: 데이터셋 1,240건 탐색. 구성:
  1. `title` "데이터셋" + 우측 primary 버튼 "데이터셋 등록"
  2. 24px 아래 테이블 툴바 48px: 검색 인풋 288px + 필터 칩("상태: 활성 ×", "리전: kr-1 ×" — §6.9 칩에 × 제거 버튼) + 우측 ghost "열 설정"
  3. 테이블(§6.11, 행 40px): 열 = 체크박스 48px / 이름 / 소유자 / 리전(mono) / 행 수(우정렬 mono) / 상태 뱃지 / 갱신 시각(mono). "이름·행 수·갱신 시각" 열 정렬 가능(화살표). 2행 이상 체크 시 툴바가 일괄 액션 바(primary 면, "3건 선택됨 — 내보내기 / 삭제")로 치환
  4. 페이지네이션 바 48px: "전체 1,240건 중 1–50" + 페이지 크기 셀렉트(50/100) + ‹ ›
- 모바일: 이름·상태만 남기고 나머지는 행 탭 → screen-3 드로어로.

### screen-3 행 상세 드로어
- 목적: 테이블 위에서 컨텍스트 유지한 채 상세 보기. 구성:
  1. screen-2 위에 우측 드로어: 데스크톱 폭 480px·전고, 모바일 전폭 시트. 진입 translateX(100%)→0 150ms entrance, 뒤에 `--color-overlay` 스크림(클릭 시 닫힘). radius 0, `--shadow-2`
  2. 드로어 헤더 48px: `heading` 데이터셋 이름 + mono caption ID + 우측 48×48 닫기(×) 버튼
  3. 본문(패딩 16px): 상태 뱃지 → 16px → 키-값 2열 정의 리스트 8행(키 = label text-sub, 값 = body, 숫자는 mono 우측정렬 아님·좌정렬) → 24px → `label` 소제목 "최근 실행" → 리스트 아이템 3개(§6.4: 실행 ID mono + 상태 뱃지 + 소요 시간)
  4. 하단 고정 푸터: 전폭 2분할 버튼(ghost "닫기" / primary "재실행", 각 50%, 높이 64px, radius 0)
- 포커스 트랩 + ESC 닫기 필수.

### screen-4 잡 모니터링
- 목적: 실행 중 잡의 상태·진행률 추적. 구성:
  1. `title` "잡 모니터링" + 우측 상태 필터 칩 그룹(전체/실행 중/대기/실패 — 선택 칩은 primary 10% 틴트+primary 텍스트)
  2. 24px 아래 상태 요약 스트립: 인라인 4항목(각 = 상태 점 8px + label + mono 숫자), 높이 48px 타일 1개에 수평 배치
  3. 32px 아래 잡 리스트: 각 행 높이 64px 타일(간격 0, 행간 1px 보더) = 좌측 잡 이름 body/600 + 아래 caption mono "job-7f3a · kr-1" / 중앙 진행률 바 8px(§6.13, 실행 중=primary+퍼센트, 실패=danger, 대기=indeterminate) / 우측 상태 뱃지 + ghost 아이콘 버튼(중지)
  4. 실패 행은 확장 가능: 클릭 시 아래로 에러 로그 pre 블록(mono 12px, 배경 라이트 `#161616`+텍스트 `#f4f4f4` — 로그는 테마 무관 다크 고정) 150ms 확장
- 실시간 갱신 연출: 숫자 변경 시 모션 없이 즉시 교체(카운트업 애니메이션 금지, §10).

### screen-5 권한 관리
- 목적: 역할·멤버별 권한 제어. 구성:
  1. `title` "권한 관리" + 탭 2개("역할" / "멤버", 활성 탭 하단 2px primary 보더, 전환 110ms opacity)
  2. 24px 아래 역할 테이블(§6.11, 행 48px — 토글이 있으므로 여유 밀도): 열 = 역할 이름 body/600 + caption 설명 / 멤버 수(mono 우정렬) / 권한 토글 3열(조회·실행·관리 — 각 §6.12 토글) / ghost "편집"
  3. 토글 변경 즉시 성공 토스트(§6.8) "‘운영자’ 역할의 실행 권한을 해제했습니다."
  4. 관리자 역할 행의 "관리" 토글 비활성(disabled) + 툴팁 "최소 1명의 관리자가 필요합니다."
  5. 하단 32px 아래 위험 구역 타일: 1px `--color-danger` 보더, 제목 body/600 "역할 삭제" + caption 설명 + danger 버튼 "삭제" — 클릭 시 확인 모달(§6.7, §8 카피 규칙)

## §10. 금지 규칙 (Anti-AI-look)

**공통 금지** (AI가 흔히 저지르는 실수 → 대신 할 것):
1. 보라→파랑 그라데이션 히어로 → 그라데이션 전면 금지. 면은 항상 단색, 강조는 `#0f62fe` 하나로.
2. 모든 카드에 동일한 `box-shadow` → 정적 요소는 그림자 0, 1px 보더로 구분(§5). 그림자는 드로어·드롭다운·토스트만.
3. 3열 아이콘+제목+설명 카드 반복 → 마케팅 그리드 금지. 데이터는 테이블·리스트·KPI 타일로.
4. `border: 1px solid #eee` 남발 → 보더 색은 `--color-border`/`--color-border-strong` 두 토큰만.
5. 이모지를 아이콘 대용으로 사용 → 인라인 SVG 16/20/32px 단색만.
6. 화면마다 다른 radius → 0/2/4/999px 스케일 밖 값 금지(§5).

**Steel 고유 금지 (7개):**
7. radius 8px 이상 라운드 카드·pill 버튼 → 이 프리셋의 물성 파괴. 최대 4px(§5), pill은 토글·상태점만.
8. 여백 넉넉한 저밀도 테이블(행 높이 56px+, 셀 패딩 24px+) → 행 32/40/48px 3단 중 택1(§4). 밀도가 정체성이다.
9. KPI 숫자에 카운트업 애니메이션·스프링 모션 → 데이터는 즉시 표시. duration 150ms 초과 전면 금지(§7 예외 2건뿐).
10. 프로포셔널 숫자로 표·금액 표기 → 데이터 숫자는 예외 없이 mono + `tabular-nums`(§3). 열이 흔들리면 실패.
11. 상태를 색으로만 표현(빨간 원만 있는 상태 표시) → 뱃지는 항상 점+텍스트 라벨(§6.9). 색맹 사용자 기준.
12. 센터 정렬 페이지 히어로·대형 일러스트 빈 상태 → 콘텐츠는 좌측 정렬 시작. 빈 상태 아이콘은 32px 단색 SVG(§6.10).
13. hover 시 카드 lift(translateY+그림자 확대)·scale 효과 → hover는 배경색 전환 70ms만(§7).

## §11. Tailwind v4 / React 매핑 (부록)

```css
/* app.css — tokens.css를 먼저 import한 뒤 Tailwind 토큰에 연결 */
@import "tailwindcss";
@import "../presets/2-steel/tokens.css";

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
  --text-caption: 12px; --text-body: 14px; --text-body-lg: 16px;
  --text-heading: 20px; --text-title: 28px; --text-display: 42px;
  --radius-1: 2px; --radius-2: 4px;
  --ease-standard: cubic-bezier(0.2, 0, 0.38, 0.9);
}
```

```tsx
// 상태 뱃지 (§6.9)
function StatusBadge({ kind, label }: { kind: "success" | "warning" | "danger" | "info"; label: string }) {
  return (
    <span className={`inline-flex h-5 items-center gap-1 rounded-[2px] px-2
      text-[12px] font-medium badge-${kind}`}>
      <span className="h-2 w-2 rounded-full bg-current" aria-hidden />
      {label}
    </span>
  );
}

// KPI 타일 (§6.3 + §3 display)
function KpiTile({ label, value, unit, delta }: { label: string; value: string; unit: string; delta?: string }) {
  return (
    <div className="border border-(--color-border) bg-(--color-surface) p-4">
      <div className="text-[12px] font-medium tracking-[0.32px] text-(--color-text-sub)">{label}</div>
      <div className="mt-2 font-mono text-[42px] font-light leading-[50px] tabular-nums">
        {value}<span className="ml-1 text-[14px] font-sans">{unit}</span>
      </div>
      {delta && <div className="mt-2 font-mono text-[12px] tabular-nums">{delta}</div>}
    </div>
  );
}
```

StyleSeed 호환 메모: tokens.css의 시맨틱 토큰명은 StyleSeed theme.css의 `--color-*` 관례와 동일 계열이라 그대로 복사 가능. `--color-surface-2` ↔ StyleSeed `--color-muted`, `--color-border-strong` ↔ `--color-input-border`로 대응시키면 된다. 모션 토큰은 StyleSeed "Snap" 시드(즉각·절제)와 가장 가깝다.

## §12. 채점 루브릭

loop-runner 합격 기준으로 그대로 사용한다. 대상: 이 프리셋을 따랐다고 주장하는 HTML/CSS 결과물 파일 집합 `$FILES`.

### verifiable (기계 판정, 70점)

| # | 항목 | 배점 | 판정 방법 |
|---|---|---|---|
| V1 | font-size가 타입 스케일 {12,14,16,20,28,42}px만 사용 | 10 | `grep -rhoE "font-size:\s*[0-9.]+(px|rem|em)" $FILES \| grep -vE ":\s*(12\|14\|16\|20\|28\|42)px"` → 출력 0줄이면 통과 |
| V2 | spacing이 스케일 {0,2,4,8,12,16,24,32,40,48,64}px만 사용 | 10 | `grep -rhoE "(margin\|padding\|gap)[a-z-]*:\s*[^;]+" $FILES \| grep -oE "[0-9.]+px" \| sort -u \| grep -vE "^(0\|2\|4\|8\|12\|16\|24\|32\|40\|48\|64)px$"` → 출력 0줄이면 통과 |
| V3 | border-radius가 {0,2px,4px,999px}만 사용 | 8 | `grep -rhoE "border-radius:\s*[^;]+" $FILES \| grep -vE ":\s*(0\|2px\|4px\|999px\|2px 2px 0 0)( ;\|;\|$)"` → 0줄 통과 |
| V4 | box-shadow가 §5 표의 3개 값(none/shadow-1/shadow-2 또는 var 참조)만 | 8 | `grep -rhoE "box-shadow:\s*[^;]+" $FILES \| grep -vE "(none\|var\(--shadow-[12]\)\|0 2px 6px\|0 4px 16px)"` → 0줄 통과 |
| V5 | transition/animation duration이 {70,110,150}ms(예외: 1000ms indeterminate, 2000ms shimmer)만 | 8 | `grep -rhoE "[0-9.]+m?s" $FILES`로 duration 추출 후 허용집합 {70ms,110ms,150ms,1000ms,2000ms,0.01ms} 밖 값 0개 |
| V6 | `prefers-reduced-motion` 블록 존재 | 6 | `grep -rl "prefers-reduced-motion" $FILES` → 1개 이상 통과 |
| V7 | 대비율: §2.3 표의 11개 쌍 전부 기준치 이상 | 10 | 사용된 실제 hex를 추출해 WCAG 식 `(L1+0.05)/(L2+0.05)` 계산(§2.3의 검증 스크립트 재사용). 본문쌍 ≥4.5, UI쌍 ≥3.0 |
| V8 | 데이터 숫자에 tabular-nums 적용 | 5 | `grep -rl "tabular-nums" $FILES` ≥ 1 그리고 테이블 숫자 셀·KPI에 mono 스택 클래스 적용 여부 grep |
| V9 | 외부 리소스 0건 | 5 | `grep -rhE "(src\|href)=[\"']https?://" $FILES` 및 `grep -rh "@import url(http" $FILES` → 0줄 통과 |
| V10 | 그라데이션 0건 (§10-1) | 0 (실격 조건) | `grep -rhi "gradient" $FILES` → 0줄. 1건이라도 있으면 총점 무관 불합격 |

### subjective (AI/사람 채점, 각 1~5점, 30점 환산)

| # | 항목 | 1점 앵커 | 3점 앵커 | 5점 앵커 |
|---|---|---|---|---|
| S1 | §1 첫인상 부합 (밀도·직각·단일 포인트) | 라운드 카드에 그림자, 색 3가지 이상 — SaaS 랜딩처럼 보임 | 구조는 콘솔인데 여백이 넓고 파랑 외 색이 간헐 사용 | 스크린샷만으로 "엔터프라이즈 콘솔"로 인식, 포인트색 파랑 1종 |
| S2 | §8 어조 준수 | 이모지·감탄사, "앗!" 류 에러 카피 | 존댓말이나 수치·다음 행동 없음 ("오류가 발생했습니다") | 모든 카피가 수치+대상+다음 행동, 버튼이 동사구 |
| S3 | 위계 (§3·§4 리듬) | 화면 전체가 같은 크기 텍스트, 제목 다수 | title/heading 구분은 있으나 섹션 간격 불규칙 | title 1개·heading ≤4, 24/32px 리듬 일정, 라벨-값 구조 명확 |
| S4 | 테이블·데이터 표현 품질 (§6.11) | 카드 나열로 테이블 회피, 숫자 좌정렬 | 테이블은 있으나 정렬 표시·hover·선택 상태 누락 | 정렬/hover/선택/페이지네이션 완비, 숫자 우정렬 mono |
| S5 | 모션 절제 (§7) | 카운트업, 스프링, 스태거 존재 | duration은 준수하나 불필요한 진입 애니메이션 다수 | 상태 변화 확인용 모션만, 즉각적 |
| S6 | §10 정성 항목 (좌측 정렬, 밀도, hover 규칙) | 센터 히어로·카드 lift 존재 | 대체로 준수, 빈 상태 일러스트 등 1~2건 위반 | 전 항목 무위반 |

### 합격선

- **V10 위반 시 즉시 불합격.**
- verifiable: V1~V9 합계 70점 만점 중 **핵심 4항목(V1·V2·V7·V9)은 만점 필수**, 총 60점 이상.
- subjective: 6항목 평균 **4.0 이상**, 어떤 항목도 2점 이하 없음.
- 위 세 조건 동시 충족 시 합격. 미달 시 최저 점수 항목부터 수정 후 재채점.
