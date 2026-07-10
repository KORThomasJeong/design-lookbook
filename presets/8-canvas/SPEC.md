---
number: 8
codename: Canvas
inspired-by: Shopify Polaris (polaris.shopify.com) — 서술 참조만. 상표는 파일/클래스명에 쓰지 않으며, 이 문서의 모든 수치는 독립 해석이고 공식 값이 아니다
mood: 신뢰감 있는 커머스 어드민. 흰/회색 작업 표면, 카드로 나뉜 섹션, 초록 primary 액션, 밀도 있고 실용적인 판매자 대시보드
best-for: 커머스 어드민, SaaS 백오피스, 주문·상품·고객 관리 콘솔, 데이터 밀집 대시보드
variants: [a, b]
status: spec-draft
---

# 8 · Canvas

## §1. 첫인상 요약

1. **회색 작업대 위의 흰 카드.** 화면 배경은 회색(`#F1F1F1`), 콘텐츠는 흰 카드로 얹힌다. 카드의 경계와 침강/부상으로 정보 영역이 나뉜다 — 여백만으로 성기게 풀지 않는다.
2. **일하는 화면.** 한 화면에 요약 지표·필터·리소스 리스트·인덱스 테이블이 밀도 있게 공존한다. 판매자가 하루 종일 보는 도구답게 실용적이고 정보 밀도가 높다.
3. **초록은 행동, 회색은 구조.** 유일한 강조색은 primary 초록(`#008060`)이고, CTA·선택·링크에만 쓴다. 나머지는 전부 뉴트럴이다.
4. **상태는 색+아이콘+라벨.** 주문/재고 상태는 soft 배경 뱃지(초록=완료, 빨강=문제, 노랑=주의)로 한눈에. 색만으로 의미를 전달하지 않는다.
5. **절제된 모션.** 스프링·바운스 없음. 100~250ms의 즉각적이고 기능적인 전환. 화면은 튀지 않고 조용히 반응한다.

## §2. 색

### 2.1 팔레트

시맨틱 토큰 전체 표(a 변형 기준. b 변형은 §2.4 규칙으로 파생, 값은 tokens.css 참조):

| 토큰 | 역할 | a 라이트 | a 다크 |
|---|---|---|---|
| `--color-bg` | 작업 표면(워크스페이스 배경) | `#F1F1F1` | `#1A1A1A` |
| `--color-surface` | 카드 배경 | `#FFFFFF` | `#262626` |
| `--color-surface-sunken` | 테이블 헤더·침강 영역 | `#F6F6F7` | `#1F1F1F` |
| `--color-surface-raised` | 팝오버·모달(그림자로 부상) | `#FFFFFF` | `#2E2E2E` |
| `--color-surface-hover` | 행/버튼 hover 배경 | `#F6F6F7` | `#2E2E2E` |
| `--color-surface-pressed` | 행/버튼 press 배경 | `#EDEDED` | `#383838` |
| `--color-text` | 제목·본문 강조 | `#1A1A1A` | `#EBEBEB` |
| `--color-text-sub` | 보조 본문·라벨 | `#5C5F62` | `#B5B5B5` |
| `--color-text-tertiary` | 캡션·타임스탬프(제약 有, §2.3) | `#6D7175` | `#8E9196` |
| `--color-primary` | CTA·핵심 액션 배경(면 전용) | `#008060` | `#008060` |
| `--color-primary-text` | primary 위 텍스트 | `#FFFFFF` | `#FFFFFF` |
| `--color-primary-hover` | primary hover | `#006E52` | `#009E76` |
| `--color-primary-pressed` | primary press | `#005A43` | `#006E52` |
| `--color-primary-soft` | 선택·정보 배경 | `#E3F1ED` | `#0F2E26` |
| `--color-primary-soft-text` | soft 위 텍스트 | `#005A43` | `#45C9A5` |
| `--color-link` | 초록 텍스트·링크(텍스트 전용) | `#005A43` | `#45C9A5` |
| `--color-accent` | 데이터 2번째 계열(그래픽 전용) | `#2C6ECB` | `#6AA0F0` |
| `--color-danger` | 에러·삭제(면·텍스트 모두) | `#C70A24` | `#C70A24` |
| `--color-danger-soft` | 에러 배경 | `#FDECEA` | `#3A1D1F` |
| `--color-danger-soft-text` | 에러 soft 위 텍스트 | `#B00417` | `#FF9DA6` |
| `--color-success` | 성공·정상 상태 텍스트/아이콘 | `#0F7048` | `#5FD07C` |
| `--color-success-soft` | 완료 배경 | `#E7F4EC` | `#122E1A` |
| `--color-success-soft-text` | 완료 soft 위 텍스트 | `#0C5A3A` | `#5FD07C` |
| `--color-warning` | 주의 텍스트/아이콘 | `#8A5300` | `#E6A03C` |
| `--color-warning-soft` | 주의 배경 | `#FBF0DA` | `#33270F` |
| `--color-warning-soft-text` | 주의 soft 위 텍스트 | `#6E4200` | `#E6A03C` |
| `--color-border` | 장식 구분선·카드 테두리 | `#E1E3E5` | `#3D3D3D` |
| `--color-border-strong` | 강조 구분 | `#C9CCCF` | `#575757` |
| `--color-border-input` | 입력 경계(3:1) | `#85898E` | `#7A7D80` |
| `--color-focus` | 포커스 링 | `#005BD3` | `#4A9DF0` |
| `--color-overlay` | 모달 딤 | `rgba(26,26,26,0.55)` | `rgba(0,0,0,0.6)` |

### 2.2 라이트/다크

양쪽 모두 지원하되 **라이트가 기본이자 주력**이다(판매자가 낮에 오래 보는 도구). 다크는 순검정(#000) 대신 `#1A1A1A`를 배경으로 쓰고, 카드는 배경보다 밝은 `#262626`으로 띄운다(라이트가 카드를 더 밝게 하는 것과 대칭). primary 초록(`#008060`)은 라이트·다크 동일 값으로 유지해 브랜드 인상을 고정하고, 텍스트로 쓰이는 초록만 다크에서 `#45C9A5`로 밝힌다. danger 솔리드(`#C70A24`)도 라이트/다크 공통(흰 텍스트 6.0:1). success·warning은 다크에서 밝은 톤(`#5FD07C`/`#E6A03C`)으로 교체해 어두운 카드 위 가독을 확보한다.

### 2.3 대비 규칙 (실측 계산값 명기)

기준: **본문 4.5:1 이상, 대형 텍스트(24px+ 또는 18.7px+/700+)·UI 그래픽·경계 3:1 이상.** 아래 값은 WCAG 2.x 상대휘도 공식(`L = 0.2126R'+0.7152G'+0.0722B'`, `c'=c/12.92 if c≤0.03928 else ((c+0.055)/1.055)^2.4`, `CR=(L1+0.05)/(L2+0.05)`)으로 계산한 실측 대비율이다.

| 쌍 | a 라이트 | a 다크 | 판정 |
|---|---|---|---|
| bg / text | **15.41:1** | **14.60:1** | ✓ 본문 |
| surface / text | **17.40:1** | **12.69:1** | ✓ 본문 |
| surface-sunken / text | **16.11:1** | **13.83:1** | ✓ 본문 |
| bg / text-sub | **5.69:1** | **8.49:1** | ✓ 본문 |
| surface / text-sub | **6.43:1** | **7.38:1** | ✓ 본문 |
| surface / text-tertiary | **4.92:1** | **4.79:1** | ✓ 본문(surface 위만) |
| surface-sunken / text-tertiary | **4.55:1** | — | ✓ 본문 |
| bg / text-tertiary | **4.36:1** | **5.50:1** | 라이트 4.5 미달 → 아래 제약 |
| primary / primary-text | **4.93:1** | **4.93:1** | ✓ 본문 |
| primary(면) / bg (그래픽) | **4.37:1** | **4.37:1** | ✓ 그래픽(3:1) — 텍스트로 쓰지 말 것 |
| link / surface | **8.26:1** | (soft-text) **7.32:1** | ✓ 본문 |
| link / bg | **7.16:1**(=#005A43) | (soft-text) **8.42:1** | ✓ 본문 |
| primary-soft / primary-soft-text | **7.10:1** | **7.05:1** | ✓ 본문 |
| danger / surface | **6.00:1** | (솔리드+흰텍) **6.00:1** | ✓ 본문 |
| danger-soft / danger-soft-text | **6.39:1** | **7.73:1** | ✓ 본문 |
| success / surface | **6.12:1** | **7.32:1** | ✓ 본문 |
| success-soft / success-soft-text | **7.31:1** | **7.54:1** | ✓ 본문 |
| warning / surface | **6.33:1** | **6.82:1** | ✓ 본문 |
| warning-soft / warning-soft-text | **7.61:1** | **6.58:1** | ✓ 본문 |
| accent / surface (그래픽) | **5.00:1** | **6.55:1** | ✓ 그래픽 — 본문 텍스트 금지 |
| border-input / surface (UI) | **3.52:1** | **3.66:1** | ✓ UI 경계(3:1) |
| border-input / bg (UI) | **3.12:1** | **4.20:1** | ✓ UI 경계(3:1) |
| focus / surface (UI) | **6.11:1** | **6.11:1** | ✓ 포커스 링 |

추가 제약(위 표에서 도출):
- **primary 초록은 "면(fill)" 색이다.** CTA 배경·선택 배경·아이콘·차트에만. **17px 이하 텍스트에 `--color-primary`(#008060)를 쓰면 위반**(bg 대비 4.37:1). 초록 텍스트/링크가 필요하면 `--color-link`(#005A43, 라이트) / `--color-primary-soft-text`(다크)를 쓴다.
- **`--color-text-tertiary`는 라이트에서 `--color-bg`(#F1F1F1) 위 본문 금지**(4.36:1). bg 위 캡션은 `--color-text-sub`로 올리거나, tertiary는 surface/sunken 위에서만 쓴다.
- **`--color-accent`는 그래픽 전용**(차트·데이터 시각화 2번째 계열). 텍스트 색으로 쓰지 않는다.
- **입력 필드·체크박스·토글의 경계선은 `--color-border-input`**(3:1 통과). 장식용 `--color-border`(#E1E3E5, 1.3:1)를 인터랙티브 요소 경계로 쓰면 위반.
- **상태는 색 단독으로 전달하지 않는다.** 뱃지는 항상 soft 배경 + 대응 텍스트 + 라벨 텍스트(필요 시 아이콘)를 함께 쓴다(§6.9, 색맹 대응).
- 새 색 조합은 이 표의 해당 행을 재계산해 4.5/3.0을 넘겨야 채택한다. 미달이면 폐기.

### 2.4 팔레트 생성 규칙 (변형·랜덤용)

**고정 (변형이 건드릴 수 없는 것):**
- 뉴트럴 램프 전체: bg/surface/surface-sunken/surface-raised/surface-hover/surface-pressed/text/text-sub/text-tertiary/border/border-strong/border-input/overlay의 정확한 hex.
- 시맨틱 상태색 3종의 의미와 값: danger(hue 353±5)·success(hue 150±10, grass green)·warning(hue 38±5). 완료=success, 문제=danger, 주의=warning 매핑 불변.
- 토큰 구조: primary 6종 세트(primary/text/hover/pressed/soft/soft-text) + link + accent를 반드시 전부 제공.
- 채도·명도 범위: 라이트 primary는 HSL 기준 **S 55~95%, L 24~40%**(흰 텍스트 4.5:1 확보 구간). soft는 동일 hue **S 20~45% / L 92~96%**(라이트), **S 35~55% / L 10~16%**(다크). link는 primary hue의 L 24~30%(라이트).

**자유 (변형이 바꾸는 것):**
- primary hue 0~360 자유. 단 success(150±10)·danger(353±5)·warning(38±5)·accent와 **±20° 이내로 겹치면 시맨틱과 혼동되므로 그 구간은 피해 다시 뽑는다.** (a 변형 #008060은 hue 165 — success grass(150)와 15° 차이지만, primary는 채도를 낮춘 spruce(S100/L25)로, success는 밝은 grass로 톤을 분리하고 success를 절대 솔리드 버튼에 쓰지 않아 의도적으로 채택한 정식 변형이다. b 변형은 hue 249 인디고로 완전히 분리.)
- accent(그래픽 2계열)는 primary와 **hue 60° 이상 떨어뜨린다**(대시보드 차트에서 두 계열이 구분되도록). a=blue(215), b=teal(186).
- 다크 primary는 라이트 값 유지 + 흰 텍스트(권장) 또는 L +15%p로 밝히고 흰 텍스트 유지 중 택1. 다크 link/soft-text는 같은 hue의 L 55~70%로 밝힌다.

**랜덤 명명 `8-r<hue>`** (예: `8-r249` = hue 249 인디고 = b와 동치):
1. hue h를 뽑는다(위 금지 구간이면 재추첨) → `primary = hsl(h, 78%, 30%)`에서 시작.
2. 흰 텍스트 대비 4.5:1 미달이면 L을 2%p씩 내려 **최초 통과값을 채택**(결정적 절차 — 같은 이름이면 항상 같은 색).
3. hover=primary L −6%p, pressed=L −11%p, link=L −4%p(라이트), soft=동일 h S 30%/L 94%(라이트)·S 45%/L 13%(다크), soft-text=h S 60%/L 26%(라이트)·L 66%(다크).
4. accent는 h+90°(±20° 시맨틱 회피)에서 §2.3 그래픽 3:1 통과할 때까지 L 조정.
5. §2.3 표 전 행을 재계산해 하나라도 미달이면 그 hue는 폐기하고 다시 뽑는다. 통과한 hue만 `8-r<h>`로 명명.

## §3. 타이포그래피

**폰트 스택** (외부 로드 금지 — 시각 참조는 Inter지만 시스템 폴백만 사용):

```css
--font-sans: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
             "Apple SD Gothic Neo", "Malgun Gothic", "Noto Sans KR", sans-serif;
--font-mono: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace;
```

**타입 스케일** — 이 8단계 외 font-size 사용 금지:

| 이름 | size | weight | line-height | letter-spacing | 용도 |
|---|---|---|---|---|---|
| display | 32px | 700 | 1.25 | -0.02em | 대형 지표 숫자(오늘 매출·총 주문) |
| mega | 28px | 700 | 1.25 | -0.02em | 보조 대형 지표, 빈 상태 히어로 숫자 |
| title-lg | 24px | 600 | 1.25 | -0.01em | 큰 페이지 제목(드물게) |
| title | 20px | 600 | 1.3 | -0.01em | 페이지 제목·카드 섹션 제목(기본) |
| heading | 16px | 600 | 1.35 | -0.005em | 카드 헤더, 소제목, 폼 그룹 라벨 |
| body | 14px | 400 | 1.5 | 0 | 본문·폼 값·테이블 셀(기본) |
| caption | 13px | 400 | 1.4 | 0 | 보조 텍스트, 필드 헬퍼, 타임스탬프 |
| micro | 12px | 500 | 1.35 | 0.01em | 뱃지, 테이블 헤더 라벨, 필터 칩 |

**위계 규칙:**
- 한 화면에 display/mega 계열은 **합쳐서 최대 2개**(대시보드 KPI 카드 예외 — KPI 타일은 mega로 통일). title(20px)는 페이지 제목 1개 + 카드 섹션 제목 여러 개 허용. 헤딩 레벨은 화면당 최대 4단계(title → heading → body → caption).
- **금액·수량·통계 숫자는 반드시 `font-variant-numeric: tabular-nums`.** 대형 지표는 700, 테이블/리스트 안의 금액은 body(14px)에 weight 600으로 본문(400)과 굵기로 분리.
- 사용 weight는 **400/500/600/700의 4종만.** 300 이하·800 이상 금지(시스템 폰트 폴백 일관성).
- 테이블 헤더는 micro(12px/500) + `text-transform: uppercase`는 쓰지 않는다(한글 미대응) — 대신 `--color-text-sub` 색으로 강등한다.

**금지:** 임의 font-size 사용 금지 — 위 스케일 8값(12·13·14·16·20·24·28·32px)만. rem/em 단위도 스케일 이탈로 간주(§12 V3).

## §4. 간격 · 레이아웃

**스페이싱 스케일** (4px 그리드) — 이 값 외 margin/padding/gap 사용 금지(0 제외):

```
4  8  12  16  20  24  32  40  48  64  (px)
```

| 항목 | 값 |
|---|---|
| 모바일 화면 좌우 패딩 | 16px |
| 카드 내부 패딩 | 16px(모바일) / 20px(데스크톱) |
| 카드 헤더↔본문 | 16px, 본문 문단 간 12px, 라벨↔값 4px |
| 섹션(카드) 간 간격 | 24px(모바일) / 20px(데스크톱 카드 스택) |
| 폼 필드 간 세로 간격 | 16px, 필드 라벨↔입력 4px |
| 리소스 리스트 행 높이 | min 44px, 상하 패딩 12px |
| 인덱스 테이블 행 높이 | 40px(밀집), 셀 좌우 패딩 12px |
| 데스크톱 톱바 높이 | 56px |
| 데스크톱 좌측 사이드바 폭 | 232px |
| 모바일 상단 앱바 | 56px |
| 본문 최대 폭 | 1000px(중앙 정렬, 좌우 20px 여백) |
| 터치 타깃 | 최소 44×44px |

**컨테이너·그리드:**
- **모바일(390px 기준)**: 단일 컬럼, 좌우 16px 패딩. 사이드바는 햄버거가 아니라 하단 탭바 또는 상단 스크롤 탭으로 접는다(§6.6). 테이블은 카드형 행으로 재배치(§6.4, §10-C4).
- **데스크톱(1024px+)**: 좌측 고정 사이드바 232px + 우측 콘텐츠 영역(max 1000px). 콘텐츠는 카드 세로 스택이 기본. 2열 배치는 KPI 타일 그리드(`repeat(auto-fit, minmax(200px, 1fr))`, gap 16px)와 "본문 카드 + 우측 사이드 카드(요약/메모)" 2열(콘텐츠:사이드 = 2:1, gap 20px)만 허용.
- KPI 타일 최대 4열. 그 외 3열 이상 균등 카드 그리드 금지(§10-C2).

## §5. 형태 (Shape)

**radius 스케일** — 이 값 외 border-radius 금지:

| 토큰 | 값 | 적용처 |
|---|---|---|
| `--radius-sm` | 4px | 뱃지, 체크박스, 작은 필터 칩, 썸네일 |
| `--radius-md` | 8px | 버튼, 입력, 셀렉트, 테이블 컨테이너 |
| `--radius-lg` | 12px | 카드, 팝오버, 드롭다운 메뉴 |
| `--radius-xl` | 16px | 모달, 모바일 바텀시트 상단 모서리 |
| `--radius-full` | 999px | 아바타, 필 뱃지, 토글, 상태 점 |

- 인터랙티브 요소 radius는 8px(버튼/입력) 또는 4px(칩/체크박스). **직각(0px) 금지, 20px 이상 둥근 버튼 금지**(Jelly가 아니다 — Canvas는 crisp하고 업무적).
- **border는 구조의 일부다**(Jelly와 반대). 카드는 `1px solid var(--color-border)` + `--shadow-sm`을 함께 쓴다. 입력·체크박스·토글 경계는 `var(--color-border-input)`(3:1). 테이블 행 구분선은 `1px solid var(--color-border)` 허용.
- border-width: 장식/구분 `1px`, 입력 경계 `1.5px`(--border-w-strong), 포커스 링 `2px`.

**shadow/elevation** (다크 값은 tokens.css에서 검정 기반 오버라이드):

| 토큰 | 라이트 값 | 용도 |
|---|---|---|
| `--shadow-0` | `none` | sunken 영역·평면 요소 |
| `--shadow-sm` | `0 1px 2px rgba(26,26,26,0.07), 0 0 0 1px rgba(26,26,26,0.04)` | 카드(기본), 스티키 톱바 |
| `--shadow-md` | `0 4px 12px rgba(26,26,26,0.12)` | 팝오버, 드롭다운, 토스트 |
| `--shadow-lg` | `0 12px 32px rgba(26,26,26,0.18)` | 모달, 우측 상세 드로어 |

- 카드는 **border + shadow-sm 조합이 정답**이다. shadow만(테두리 없이) 또는 테두리만(그림자 없이) 둘 다 허용하되, 프로젝트 내에서 하나로 통일한다. shadow-md/lg는 떠 있는 것(팝오버·모달·드로어)에만.

## §6. 핵심 컴포넌트 규칙

공통 상태: 인터랙티브 요소는 hover에서 배경/밝기 변화, `:active`에서 press 배경 + `translateY(0.5px)`(스케일·바운스 없음), `focus-visible`에서 `outline: 2px solid var(--color-focus); outline-offset: 1px`. 전환 `var(--motion-base) var(--ease-standard)`.

### 6.1 버튼 (primary / secondary / ghost / danger)

- **primary**: h 36px(기본)/32px(slim, 테이블 인라인), 패딩 좌우 16px, radius 8px, bg `--color-primary`, 라벨 14px/600 `--color-primary-text`. hover bg `--color-primary-hover`, press bg `--color-primary-pressed`. 페이지당 1개 원칙(§10-C5).
- **secondary**(기본 액션): 동일 치수, bg `--color-surface`, `1px solid var(--color-border-strong)`, 라벨 14px/500 `--color-text`. hover bg `--color-surface-hover`.
- **ghost/plain**: bg 투명, 라벨 14px/500 `--color-link`(텍스트 액션) 또는 `--color-text-sub`(부가). h 32px. 아이콘 버튼도 여기(32×32, 히트 44px).
- **danger**: bg `--color-danger`, 라벨 `#FFFFFF`. 삭제 등 파괴적 액션 전용. hover `--color-danger-hover`.
- disabled: bg `--color-surface-sunken`, 라벨 `--color-text-tertiary`, `cursor: not-allowed`.

```css
.btn { height: 36px; padding: 0 16px; border-radius: var(--radius-md);
  font-size: var(--fs-body); font-weight: var(--fw-semibold); border: 0;
  transition: background-color var(--motion-base) var(--ease-standard),
              transform var(--motion-fast) var(--ease-standard); }
.btn-primary { background: var(--color-primary); color: var(--color-primary-text); }
.btn-primary:hover { background: var(--color-primary-hover); }
.btn-primary:active { background: var(--color-primary-pressed); transform: translateY(0.5px); }
.btn:focus-visible { outline: var(--focus-w) solid var(--color-focus); outline-offset: 1px; }
.btn-primary:disabled { background: var(--color-surface-sunken); color: var(--color-text-tertiary); }
```

### 6.2 입력 필드 · 셀렉트

- h 36px, radius 8px, bg `--color-surface`, `1.5px solid var(--color-border-input)`, 값 14px/400 `--color-text`, 좌우 패딩 12px. focus 시 `border-color: var(--color-focus)` + `outline: 2px solid var(--color-focus); outline-offset: 0`.
- 라벨: 필드 위 caption(13px/500) `--color-text`, 간격 4px. 헬퍼 텍스트 caption `--color-text-sub`, 간격 4px.
- 에러: `border-color: var(--color-danger)`, 헬퍼를 `--color-danger` 13px로 교체(문구는 §8). 흔들림 애니메이션 없음 — 색+텍스트로만.
- 필수 표시는 라벨 뒤 "*" 대신 라벨 옆 "(필수)" caption 또는 "선택"을 명시(§8).

### 6.3 카드

- bg `--color-surface`, radius 12px, `1px solid var(--color-border)` + `--shadow-sm`, 패딩 16px(모바일)/20px(데스크톱).
- 카드 헤더: title(20px/600) 또는 heading(16px/600) + 우측 액션(ghost 버튼/셀렉트). 헤더↔본문 16px.
- 카드 안 섹션 구분은 `1px solid var(--color-border)` 풀블리드 구분선 허용(카드 좌우 패딩까지 확장). 카드 중첩 1단까지.
- sunken 서브영역(예: 코드/미리보기)은 bg `--color-surface-sunken`, radius 8px.

### 6.4 리소스 리스트 아이템 (모바일 테이블 대체)

- min-height 44px, 상하 패딩 12px, 좌우 카드 패딩 사용. 구조: [선택 체크박스(옵션) 18px] – [썸네일/아바타 32~40px radius 4px 또는 full] –12px– [주 텍스트 14px/600 + 보조 caption 13px `--color-text-sub`] – [우측: 상태 뱃지 + 금액 14px/600 tabular-nums].
- 행 사이 `1px solid var(--color-border)` 구분선 허용(리스트는 구조적으로 나눈다 — Jelly와 반대). hover bg `--color-surface-hover`, press bg `--color-surface-pressed`.
- 모바일에서 인덱스 테이블(§6.11)은 이 리소스 리스트 카드로 재배치한다(§10-C4).

### 6.5 상단 톱바 / 앱바

- 데스크톱 톱바: h 56px, bg `--color-surface`, 하단 `1px solid var(--color-border)`. 좌측 워드마크 16px/700, 중앙 검색 입력(max 480px), 우측 아이콘 액션(알림·도움말)+아바타.
- 모바일 앱바: h 56px, 좌측 뒤로가기/메뉴(히트 44px, 20px SVG stroke 1.75px), 중앙 타이틀 16px/600, 우측 액션 최대 2개.
- 스크롤 시 `--shadow-sm` 부여. 햄버거는 모바일에서만 허용(데스크톱은 상시 사이드바, §10-C6).

### 6.6 좌측 사이드바 내비 (데스크톱) / 하단 탭 (모바일)

- 사이드바: 폭 232px, bg `--color-bg`(콘텐츠 카드와 대비). 항목: h 32px, radius 8px, 좌우 패딩 8px, 아이콘 20px + 라벨 14px/500 `--color-text-sub`. hover bg `--color-surface-hover`. **활성**: bg `--color-surface`, 라벨 `--color-text` 600, 좌측 3px `--color-primary` 인디케이터(또는 아이콘 `--color-primary`). 그룹 헤더 micro(12px/500) `--color-text-tertiary`.
- 모바일 하단 탭: h 56px + safe-area, 탭 4~5개, 아이콘 22px + micro 라벨. 활성 `--color-text`(+아이콘 `--color-primary`), 비활성 `--color-text-tertiary`. 상단 `1px solid var(--color-border)`.

### 6.7 모달 / 드로어 / 바텀시트

- **중앙 모달**: 폭 min(560px, 100%-40px), radius 16px, bg `--color-surface-raised`, `--shadow-lg`. 헤더(title 20px + 닫기 X 아이콘 좌우 20px) – 본문 패딩 20px – 푸터(우측 정렬 버튼: secondary + primary, gap 8px, 상단 `1px solid var(--color-border)`). 딤 `--color-overlay`.
- **우측 상세 드로어**(주문/리소스 상세): 폭 min(480px, 100%), 우측 부착, 전체 높이, `--shadow-lg`. 진입 `translateX(100%)→0` 250ms `--ease-out`.
- **모바일 바텀시트**: 하단 부착, radius 16px 16px 0 0, 상단 그랩바 32×4px `--color-border-strong`. 진입 `translateY(100%)→0` 250ms `--ease-out`.

### 6.8 토스트 / 인라인 배너

- **토스트**: 하단 중앙(데스크톱)/하단(모바일), bg `--color-text` 텍스트 `--color-bg` 14px/500(다크 대비 확보), radius 8px, 패딩 12px 16px, `--shadow-md`. 진입 `translateY(8px)+opacity` 150ms, 4초 자동 소멸. 액션 링크는 우측.
- **인라인 배너**(폼/페이지 상단 알림): 카드 폭, radius 8px, 좌측 4px 컬러 스트립 + soft 배경. 종류별: 성공(success-soft), 주의(warning-soft), 위험(danger-soft), 정보(primary-soft). 아이콘 20px + 제목 14px/600 + 본문 14px/400 + 닫기.

### 6.9 뱃지 / 상태 필 / 칩

- **상태 뱃지**(주문/재고 상태): h 20px, 패딩 2px 8px, radius full, micro(12px/500). soft 배경 + 대응 soft-text 조합만: 완료/정상 `success-soft`+`success-soft-text`, 문제/취소 `danger-soft`+`danger-soft-text`, 주의/대기 `warning-soft`+`warning-soft-text`, 중립/초안 `surface-sunken`+`text-sub`, 정보 `primary-soft`+`primary-soft-text`. **앞에 8px 상태 점 또는 텍스트 라벨 필수**(색 단독 금지, §2.3).
- **필터 칩**: h 28px, 패딩 4px 12px, radius 4px, micro/13px, bg `--color-surface` + `1px solid var(--color-border-strong)`. 활성: bg `--color-primary-soft`, 텍스트 `--color-primary-soft-text`, 테두리 `--color-primary`. 제거 가능 칩은 우측 12px X.
- 순색 채도 배경 뱃지 금지(§10-C3) — 전부 soft 톤.

### 6.10 빈 상태 (empty state)

- 카드 내부 세로 중앙 정렬: 상단 여백 40px → 48×48 인라인 SVG 일러스트(2톤: `--color-border` 면 + `--color-primary` 포인트) → 16px → 제목 16px/600 → 8px → 설명 14px/400 `--color-text-sub`(max 320px 중앙) → 16px → primary 버튼 → 하단 40px.
- 카피는 §8: "아직 주문이 없어요" + 다음 행동 1줄 + CTA("첫 상품 추가하기"). 사과·경고 톤 금지.

### 6.11 인덱스 테이블 (데스크톱 전용)

- 컨테이너: 카드 안, radius 8px, `1px solid var(--color-border)`. 헤더 행: bg `--color-surface-sunken`, h 40px, 셀 micro(12px/500) `--color-text-sub`, 좌측 정렬(숫자/금액 열만 우측 정렬).
- 데이터 행: h 40px, `1px solid var(--color-border)` 하단 구분, 셀 14px/400, 좌우 패딩 12px. 좌측 선택 체크박스 열, hover bg `--color-surface-hover`, 행 클릭 시 상세 드로어(§6.7).
- 금액/수량 열: `tabular-nums`, 우측 정렬, weight 600. 정렬 가능 헤더는 라벨 옆 12px 화살표 아이콘. 선택 시 상단에 벌크 액션 바 등장.
- **모바일에서는 이 테이블을 §6.4 리소스 리스트 카드로 재배치**(가로 스크롤 테이블 금지, §10-C4).

### 6.12 KPI 타일 (대시보드)

- 카드(bg surface, radius 12px, border+shadow-sm, 패딩 20px). 구조: 라벨 caption(13px/500) `--color-text-sub` → 4px → 수치 mega(28px/700 tabular-nums) `--color-text` → 8px → 증감 caption(13px/600): 증가 `--color-success` "▲ 12%", 감소 `--color-danger` "▼ 3%" + 아이콘/기호. 하단 미니 스파크라인 SVG(`--color-primary` 선) 옵션.
- 그리드 `repeat(auto-fit, minmax(200px, 1fr))` gap 16px, 최대 4열.

## §7. 모션

**모션 성격 한 줄: "즉각적이고 절제됨 — 튀지 않고 기능적으로 반응한다. 스프링·바운스·오버슈트 없음."**

**토큰:**

```css
--motion-fast: 100ms;   /* hover/press 반응 */
--motion-base: 150ms;   /* 색·상태 전환 기본 */
--motion-slow: 250ms;   /* 드로어·모달 진입, 카운트업 */
--ease-standard: cubic-bezier(0.25, 0.1, 0.25, 1);  /* 기본 전환 */
--ease-out:      cubic-bezier(0.16, 1, 0.3, 1);     /* 진입 감속 */
--ease-in-out:   cubic-bezier(0.42, 0, 0.58, 1);    /* 위치 이동 */
```

**패턴별 규칙:**

| 패턴 | 규칙 |
|---|---|
| hover | 배경색/밝기 전환 100ms `--ease-standard`. 이동·확대 없음 |
| press | press 배경 + `translateY(0.5px)` 100ms. `scale()` 금지(§10-C7) |
| 진입(카드/리스트) | `opacity 0→1` + `translateY(4px)→0` 150ms `--ease-out`. 미세하게 |
| 리스트/테이블 로드 | 스켈레톤(sunken 배경 + 1.4s shimmer) → 콘텐츠 페이드 150ms. 행 스태거 금지(밀도 우선) |
| 드로어/모달 | 드로어 `translateX(100%)→0`, 시트 `translateY(100%)→0`, 모달 `opacity+scale(0.98→1)` 250ms `--ease-out`. 딤 페이드 150ms |
| KPI 카운트업 | 큰 수치 250ms `--ease-out` 카운트업(1회, 페이지 로드 시만). 갱신 시엔 즉시 |
| 탭/토글 전환 | 인디케이터 위치 150ms `--ease-in-out`. 토글 노브 이동 150ms |

**`prefers-reduced-motion` 대응 필수**(tokens.css 전역 블록): transform/애니메이션 제거, opacity·색 전환 100ms만 유지, 카운트업 즉시 최종값, shimmer 정지.

## §8. 보이스 & 톤 (마이크로카피)

- **정중한 해요체.** 판매자를 돕는 실무 도구의 어조 — 친근하되 과하지 않게. "~하십시오"·"~바랍니다" 격식체 금지, 반말 금지.
- 명확·간결. 액션은 동사로 시작("상품 추가", "주문 내보내기"). 사용자/객체가 주어("주문이", "상품이"), 시스템 주어("시스템이") 금지.
- 이모지: 업무 화면 기본 미사용. 빈 상태에서만 선택적으로 1개. 뱃지·버튼·에러 금지.
- 숫자·통화: 천 단위 콤마, "₩" 기호는 숫자 앞 붙임 또는 "원" 접미(프로젝트 내 택1 통일). 날짜는 "2026. 7. 10." 형식.

| 상황 | Canvas 카피 | 금지 예 |
|---|---|---|
| CTA(생성) | 상품 추가 | 확인, 제출, 등록하기 |
| CTA(저장) | 저장 | 저장하기, 확인 |
| CTA(파괴적) | 삭제 | 예 / 아니오 |
| 완료 토스트 | 상품을 저장했어요 | 저장이 완료되었습니다 |
| 에러(입력) | 상품명을 입력해 주세요 | 잘못된 입력입니다 |
| 에러(재고) | 재고는 0 이상이어야 해요 | 유효하지 않은 값 |
| 에러(네트워크) | 저장하지 못했어요. 잠시 후 다시 시도해 주세요 | 네트워크 오류(E-500) |
| 빈 상태 | 아직 주문이 없어요. 첫 주문이 들어오면 여기에 표시돼요 | 데이터가 존재하지 않습니다 |
| 로딩 | 불러오는 중이에요 | 로딩 중입니다. 기다려 주십시오 |
| 확인 다이얼로그 | 이 상품을 삭제할까요? 되돌릴 수 없어요 | 정말 삭제하시겠습니까? |
| 상태 뱃지 | 결제 완료 / 배송 준비 / 취소됨 | 상태1, PAID, N/A |
| 필수/선택 | 상품명 · SKU(선택) | 상품명* |

- 에러는 **[무슨 일인지] + [지금 할 수 있는 일]** 구조. 에러 코드·기술 용어 노출 금지.
- 금지 표현: "실패하였습니다", "유효하지 않은", 반복 "죄송합니다", 느낌표 2개 이상, 전각 "~하시겠습니까".

## §9. 레이아웃 레시피 — 데모 5화면 (가상 커머스 어드민 "상점 Sangjeom")

공통: 데스크톱은 좌측 사이드바 232px + 콘텐츠(max 1000px, 좌우 20px). 모바일 390px는 상단 앱바 + 하단 탭바(4탭: 홈·주문·상품·설정), 콘텐츠 카드 세로 스택, 좌우 16px. HTML은 만들지 않는다 — 아래는 조립 레시피다.

### screen-1 홈 (매출 요약 대시보드)
- 목적: 오늘 장사가 어떤지 5초 안에 파악.
- 위→아래: 페이지 제목 title("안녕하세요, 상점님") + 우측 기간 셀렉트(오늘/7일/30일) → 24px → **KPI 타일 4열**(§6.12: 오늘 매출 mega + ▲증감 / 주문 수 / 방문자 / 전환율) → 24px → 2열(2:1): 좌 "매출 추이" 카드(막대/선 SVG 차트, `--color-primary` + `--color-accent` 2계열, tabular-nums 축 라벨) · 우 "할 일" 카드(리소스 리스트: 배송 대기 3건, 재고 부족 2건 — 각 상태 뱃지) → 24px → "최근 주문" 카드(인덱스 테이블 §6.11 5행, 모바일은 리소스 리스트).
- 컴포넌트: 사이드바, KPI 타일, 카드, 차트, 리소스 리스트, 인덱스 테이블, 뱃지.

### screen-2 주문 목록 (인덱스 테이블 + 필터)
- 목적: 많은 주문을 빠르게 훑고 걸러낸다.
- 위→아래: 페이지 제목 title("주문") + 우측 secondary "내보내기" + primary "주문 생성" → 16px → 필터 바(검색 입력 + 필터 칩 §6.9: 전체/결제완료/배송준비/취소, 활성 1개 + "정렬" 셀렉트) → 16px → **인덱스 테이블 카드**(§6.11: 체크박스 · 주문번호 · 고객 · 날짜 · 상태 뱃지 · 금액(우측 정렬 tabular-nums) · 결제상태 뱃지). 헤더 sunken, 행 hover, 행 클릭→상세 드로어. 선택 시 상단 벌크 액션 바("3건 선택 · 배송 준비로 표시 · 태그 추가") → 하단 페이지네이션(caption "1–20 / 248").
- 모바일: 테이블→리소스 리스트 카드(주문번호+고객+날짜 좌측, 금액+상태 뱃지 우측). 필터는 상단 스크롤 칩.

### screen-3 주문 상세 (드로어/페이지)
- 목적: 한 주문의 전모와 처리 액션.
- 데스크톱은 목록 위 우측 드로어(§6.7, 480px), 모바일은 전체 페이지. 위→아래: 헤더(주문번호 title + 상태 뱃지 + 우측 X) → 20px → 2열(2:1): 좌 스택 카드들 · 우 사이드 카드. 좌: "상품" 카드(리소스 리스트: 썸네일+상품명+옵션+수량×단가+소계) → 금액 요약(소계/배송비/할인/합계 — 합계는 heading/600 tabular-nums, 카드 내 구분선) → "배송" 카드(주소 + 배송 상태 타임라인). 우 사이드: "고객" 카드(아바타+이름+이메일+주문 N건) · "메모" 카드(textarea). 하단 스티키 액션: secondary "환불" · primary "배송 준비 완료".
- 컴포넌트: 드로어, 카드, 리소스 리스트, 뱃지, 인라인 배너(예: "결제 대기 중"), 버튼.

### screen-4 상품 등록 폼
- 목적: 흩어지지 않게 카드로 그룹핑된 폼.
- 위→아래: 페이지 제목 title("상품 추가") + 좌측 뒤로가기 → 24px → 2열(2:1): 좌 폼 카드 스택 · 우 사이드 카드. 좌: "기본 정보" 카드(상품명 입력 + 설명 textarea) → "미디어" 카드(이미지 업로드 드롭존, sunken 배경 점선 border-strong) → "가격" 카드(가격/할인가/원가 입력 3, 통화 접두 tabular-nums) → "재고" 카드(SKU 입력 + 수량 입력 + "재고 추적" 토글). 우 사이드: "상태" 카드(셀렉트: 게시/초안 + 판매 채널 체크박스) · "분류" 카드(카테고리 셀렉트 + 태그 칩 입력). 하단 스티키 바(우측 정렬): ghost "취소" · primary "저장". 저장 성공 시 토스트("상품을 저장했어요").
- 컴포넌트: 카드, 입력/셀렉트/토글/체크박스, 칩, 인라인 배너(검증 에러 요약), 스티키 액션 바, 토스트.

### screen-5 설정
- 목적: 조용한 설정 서랍. 2단 레이아웃.
- 위→아래: 페이지 제목 title("설정") → 24px → 데스크톱 2열: 좌 설정 카테고리 리스트(일반/결제/배송/알림/사용자·권한 — 활성 항목 primary 인디케이터) · 우 선택된 카테고리 폼 카드들. 예("일반"): "스토어 정보" 카드(스토어명·이메일·주소 입력) → "지역" 카드(통화 셀렉트·시간대 셀렉트·단위) → "환경설정" 카드(다크 모드 토글·이메일 알림 토글 — 각 라벨 14px + 설명 caption sub + 우측 토글 44×24). 하단 카드별 우측 "저장" secondary. 위험 구역 카드("스토어 삭제" — danger 버튼 + 경고 인라인 배너).
- 모바일: 카테고리 리스트 → 탭 시 해당 폼 페이지로 이동(드릴다운).

## §10. 금지 규칙 (Anti-AI-look)

**공통 금지** (AI 흔한 실수 → 대신 할 것):
1. 보라→파랑 그라데이션 히어로 → Canvas에 그라데이션 배경은 없다. 면은 단색 뉴트럴 또는 soft 톤만.
2. 모든 카드에 크고 동일한 그림자 → 카드는 `--shadow-sm`(미세) + border. 큰 그림자는 팝오버·모달·드로어에만.
3. 3열 아이콘+제목+설명 카드 반복 → 균등 3열 카드 그리드 금지. 2열(2:1) 또는 KPI 타일(최대 4열)만.
4. `border: 1px solid #eee` 남발 → 토큰(`--color-border`/`--color-border-input`)만. 인터랙티브 경계는 반드시 `border-input`(3:1).
5. 이모지를 아이콘 대신 → 아이콘은 20px 인라인 SVG(stroke 1.75px). 이모지는 §8 규칙(빈 상태 1개)만.
6. 화면마다 다른 radius → §5 스케일 5값만. 같은 컴포넌트는 항상 같은 radius(버튼 항상 8px).

**Canvas 고유 금지** (C1~C8):
1. **C1 primary 초록을 본문 텍스트 색으로 쓰기 금지** → `--color-primary`(#008060)는 면(fill) 전용(bg 대비 4.37:1). 초록 텍스트/링크는 `--color-link`(#005A43)/다크 soft-text. 위반 시 §12 V1.
2. **C2 순색 채도 배경을 넓게 깔기 금지** → 초록 순색은 CTA 버튼·활성 아이콘·차트 선에만. 카드/섹션/배너 배경은 뉴트럴 surface 또는 soft 톤(L 92%+ 라이트)만. 컬러 히어로 배너 금지.
3. **C3 상태를 채도 높은 순색 뱃지로 표현 금지** → 뱃지는 soft 배경 + soft-text만(§6.9). 순색 초록/빨강 알약 금지.
4. **C4 모바일에서 가로 스크롤 데이터 테이블 금지** → 모바일은 인덱스 테이블을 리소스 리스트 카드(§6.4)로 재배치. `overflow-x` 테이블 금지.
5. **C5 한 화면 primary(초록) CTA 2개 이상 금지** → primary 버튼은 페이지/드로어당 1개. 나머지는 secondary/ghost/danger로 강등.
6. **C6 데스크톱 햄버거 메뉴로 주요 내비 숨기기 금지** → 데스크톱은 상시 좌측 사이드바(§6.6). 햄버거는 모바일 전용.
7. **C7 press에 `scale()`/바운스/스프링 금지** → Canvas 모션은 절제됨. press는 배경 변화 + `translateY(0.5px)`. `cubic-bezier`의 오버슈트(>1 제어점) 금지, 스태거 금지.
8. **C8 상태색 혼동 금지** → 완료=success(grass), 문제=danger, 주의=warning 매핑 고정. primary 초록을 "완료 상태"로 재사용하지 말 것(액션 색과 상태 색 분리).

## §11. Tailwind v4 / React 매핑 (부록)

```css
/* app.css — tokens.css를 불러온 뒤 Tailwind 토큰으로 매핑 */
@import "tailwindcss";
@import "../presets/8-canvas/tokens.css";

@theme inline {
  --color-bg: var(--color-bg);
  --color-surface: var(--color-surface);
  --color-surface-sunken: var(--color-surface-sunken);
  --color-text: var(--color-text);
  --color-text-sub: var(--color-text-sub);
  --color-primary: var(--color-primary);
  --color-primary-soft: var(--color-primary-soft);
  --color-link: var(--color-link);
  --color-danger: var(--color-danger);
  --color-success: var(--color-success);
  --color-warning: var(--color-warning);
  --color-border: var(--color-border);
  --color-border-input: var(--color-border-input);
  --radius-md: var(--radius-md);
  --radius-lg: var(--radius-lg);
  --font-sans: var(--font-sans);
  --ease-standard: var(--ease-standard);
  --ease-out: var(--ease-out);
}
```

```tsx
// primary 버튼 — 절제된 press (h-9 = 36px, rounded-md = 8px)
export function Button(props: React.ComponentProps<"button">) {
  return (
    <button
      className="h-9 rounded-[8px] bg-primary px-4 text-[14px] font-semibold text-white
                 transition-colors duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1)]
                 hover:bg-[var(--color-primary-hover)] active:translate-y-[0.5px]
                 active:bg-[var(--color-primary-pressed)]
                 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-focus)]
                 disabled:bg-surface-sunken disabled:text-[var(--color-text-tertiary)]"
      {...props}
    />
  );
}

// 상태 뱃지 — soft 배경 + 라벨(색 단독 금지)
export function StatusBadge({ tone, children }: { tone: "success" | "danger" | "warning" | "info"; children: React.ReactNode }) {
  const map = {
    success: "bg-[var(--color-success-soft)] text-[var(--color-success-soft-text)]",
    danger: "bg-[var(--color-danger-soft)] text-[var(--color-danger-soft-text)]",
    warning: "bg-[var(--color-warning-soft)] text-[var(--color-warning-soft-text)]",
    info: "bg-[var(--color-primary-soft)] text-[var(--color-primary-soft-text)]",
  };
  return (
    <span className={`inline-flex h-5 items-center rounded-full px-2 text-[12px] font-medium ${map[tone]}`}>
      <span className="mr-1 size-2 rounded-full bg-current opacity-70" aria-hidden />
      {children}
    </span>
  );
}
```

**StyleSeed 호환 메모:** tokens.css의 `--color-*`/`--radius-*`/`--motion-*`/`--ease-*`는 StyleSeed theme.css 동명 슬롯에 1:1 이식. 모션 시드는 "Snap/Silk" 계열(즉각 전환, 오버슈트 없음)에 대응. 타입 스케일 8단계(12·13·14·16·20·24·28·32)는 caption/body/heading/title/display 슬롯에 순서대로 매핑.

## §12. 채점 루브릭

합격선: **verifiable 9항목 전부 통과(65점 만점 중 65점) + subjective 5항목 평균 4.0 이상.** 하나라도 미달이면 불합격 — loop-runner는 미달 항목만 고쳐 재채점한다. 판정 대상 파일 집합을 `$F`(html/css/tsx 글롭)로 표기한다.

### verifiable 항목 (기계 판정, 65점)

| # | 항목 | 배점 | 판정 방법 |
|---|---|---|---|
| V1 | 대비율: 실사용 bg/text·surface/text·primary/primary-text 4.5:1↑, accent·border-input UI 쌍 3:1↑, **primary(#008060)가 17px 이하 텍스트 color로 안 쓰임** | 10 | hex 추출→WCAG 공식(`L=0.2126R'+0.7152G'+0.0722B'`, `c'=c/12.92 if c≤0.03928 else ((c+0.055)/1.055)^2.4`, `CR=(L1+0.05)/(L2+0.05)`)으로 계산, §2.3 표와 대조. 추가: `grep -rE 'color:\s*(var\(--color-primary\)\|#008060)' $F` 로 텍스트 사용 0건 확인. 토큰 무변경 사용 시 §2.3 표 인용으로 통과 |
| V2 | 스페이싱 스케일 외 값 0개 | 10 | `grep -rhoE '(margin\|padding\|gap\|inset)[a-z-]*:[^;]+' $F \| grep -oE '[0-9]+px' \| grep -vwE '(0\|4\|8\|12\|16\|20\|24\|32\|40\|48\|64)px'` → 0줄 |
| V3 | 타입 스케일 외 font-size 0개 | 10 | `grep -rhoE 'font-size:\s*[0-9.]+(px\|rem\|em)' $F \| grep -vE ':\s*(12\|13\|14\|16\|20\|24\|28\|32)px'` → 0줄(rem/em 사용 자체가 위반) |
| V4 | radius가 §5 스케일 값만 | 5 | `grep -rhoE 'border-radius:[^;]+' $F \| grep -oE '[0-9]+px' \| grep -vwE '(4\|8\|12\|16\|999)px'` → 0줄 |
| V5 | shadow가 §5 3단계와 일치 | 5 | `grep -rhoE 'box-shadow:[^;]+' $F` 의 모든 값이 `var(--shadow-(sm\|md\|lg))` 참조이거나 tokens.css의 `--shadow-*` 정의 문자열과 일치 → 불일치 0건 |
| V6 | `prefers-reduced-motion` 대응 존재 | 5 | `grep -rl 'prefers-reduced-motion' $F \| wc -l` ≥ 1 |
| V7 | 외부 리소스 0(CDN 폰트/스크립트/이미지) | 5 | `grep -rnE 'https?://[^"'"'"')( ]+\.(css\|js\|woff2?\|ttf\|png\|jpe?g\|webp\|svg)\|fonts\.googleapis\|fonts\.gstatic\|cdn\.\|unpkg\|jsdelivr' $F` → 0줄 |
| V8 | 절제된 모션: 오버슈트 easing·scale press 없음 | 10 | `grep -rniE 'cubic-bezier\([^)]*1\.[0-9]' $F` (제어점 >1 오버슈트) → 0줄 **그리고** `grep -rnE 'active[^{]*\{[^}]*scale\(' $F \| wc -l` = 0 (press에 scale 금지) |
| V9 | 모바일 가로 스크롤 테이블 금지 + 금액 tabular-nums | 5 | `grep -rniE '(overflow-x:\s*(auto\|scroll))[^;]*' $F` 가 `<table` 인근에 없을 것(테이블 래퍼 가로 스크롤 0건) **그리고** `grep -r 'tabular-nums' $F \| wc -l` ≥ 1 |

### subjective 항목 (AI/사람 채점, 5점 척도 ×5 — 평균 4.0 이상 합격)

| # | 항목 | 1점 앵커 | 3점 앵커 | 5점 앵커 |
|---|---|---|---|---|
| S1 | §1 첫인상 부합(회색 작업대·흰 카드·밀도) | 배경이 흰색이고 카드 경계가 없어 어디가 카드인지 모호, 성긴 소비자앱 느낌 | 카드는 있으나 배경 대비가 약하거나 정보 밀도가 낮다 | 회색 bg 위 흰 카드가 border+shadow-sm으로 또렷하고, KPI·리스트·테이블이 밀도 있게 공존한다 |
| S2 | §8 어조 준수 | "처리되었습니다"류 격식체·에러 코드 노출 | 해요체지만 액션 라벨이 명사형 아님·문장 장황 | 전 카피 정중한 해요체, 액션은 동사("상품 추가"), 에러가 [상황+다음 행동] |
| S3 | 색 규율(§2.3·C1·C2·C8) | primary 초록이 텍스트/넓은 배경에 남발, 상태색 혼동 | 규칙 위반은 없으나 순색 면적이 다소 넓다 | 초록은 CTA·아이콘·차트에만, 상태는 soft 뱃지, 완료/문제/주의 매핑 명확 |
| S4 | 절제된 모션(§7·C7) | 바운스/스프링/큰 스케일 press | press는 있으나 전환이 과하거나 스태거 존재 | hover·press가 즉각적이고 미세, 드로어/모달만 250ms 슬라이드, 오버슈트 없음 |
| S5 | 레이아웃 구조(§4·C3·C6) | 균등 3열 카드 반복 또는 데스크톱 햄버거 | 2열은 지켰으나 사이드바/톱바 위계가 약함 | 상시 사이드바 + 2:1 콘텐츠, KPI 최대 4열, 테이블은 카드 안에 정렬 |

**채점 절차:** verifiable은 판정 명령을 그대로 실행해 pass/fail 기록 → subjective는 5화면을 라이트/다크·데스크톱(1280px)/모바일(390px)에서 확인해 앵커 대조, 1~5점 부여 → 합산. 4.0 미만 항목은 5점 앵커 조건을 수정 지시문으로 변환해 다음 반복에 넘긴다.
