---
number: 12
codename: Ink
inspired-by: Stripe (stripe.com / Stripe Dashboard) — 서술 참조만, 상표는 파일/클래스명에 사용하지 않음. 이 스펙의 모든 수치는 독립 해석이며 공식 값이 아니다
mood: 결제 인프라의 차분한 자신감. 뉴트럴 슬레이트 위 인디고 한 점, 정교한 데이터 밀도, 깔끔한 표와 차트, 소리 없이 정착하는 모션
best-for: 결제·핀테크 데스크톱 대시보드, 백오피스 콘솔, B2B SaaS 어드민, 데이터 밀도 높은 관리자 화면
variants: [a, b]
status: spec-draft
---

# 12 · Ink

## §1. 첫인상 요약

1. **뉴트럴이 지배하고, 인디고는 한 점이다.** 화면의 92%는 슬레이트 그레이(흰/쿨그레이 배경 + 네이비 텍스트), 채도 높은 인디고(#635BFF)는 primary 버튼·활성 내비·링크·차트 1계열에만 나타난다.
2. **밀도가 신뢰를 만든다.** 48px 행 테이블, 14px 본문, tabular-nums 숫자, 우측 정렬 금액. 한 화면에 많은 데이터가 정돈되어 보여야 정상이다 — Jelly와 정반대로 **표를 적극 쓴다**.
3. **선과 단차로 나눈다.** 카드는 1px hairline 보더 + 아주 옅은 그림자(shadow-xs)까지만. 무거운 드롭섀도우를 모든 카드에 뿌리지 않는다.
4. **금액이 위계의 정점.** KPI·잔액은 display(32px/600, tabular-nums, mono), 표 안 금액도 mono·우측 정렬로 눈이 열을 따라 내려간다.
5. **모션은 확인이지 쇼가 아니다.** 100~400ms, 오버슈트 없음. 눌리면 1px 내려앉고 색이 바뀔 뿐, 출렁이지 않는다.

## §2. 색

### 2.1 팔레트 (시맨틱 토큰)

뉴트럴은 슬레이트 램프로 고정한다(밝음→어둠):
`#FFFFFF #F6F9FC #EFF3F9 #E3E8EE #C7D0DB #7E8B9B #5E6B85 #425466 #0A2540`

| 토큰 | 역할 | a 라이트 | a 다크 |
|---|---|---|---|
| `--color-bg` | 페이지 배경 | `#F6F9FC` | `#0B111E` |
| `--color-surface` | 카드·패널·테이블 배경 | `#FFFFFF` | `#151C2C` |
| `--color-surface-sunken` | 테이블 헤더·행 hover·인풋 배경 | `#EFF3F9` | `#1E273A` |
| `--color-text` | 본문·제목·금액 | `#0A2540` | `#EDF1F7` |
| `--color-text-sub` | 보조 텍스트·라벨 | `#425466` | `#A5B0C2` |
| `--color-text-tertiary` | 캡션·타임스탬프·placeholder | `#5E6B85` | `#7E8AA0` |
| `--color-primary` | CTA 배경·활성 내비·포커스 링 | `#635BFF` | `#635BFF` |
| `--color-primary-hover` | primary hover | `#5147E5` | `#7A73FF` |
| `--color-primary-text` | primary 면 위 텍스트 | `#FFFFFF` | `#FFFFFF` |
| `--color-primary-strong` | 링크·인디고 텍스트 (본문 4.5:1) | `#4B45C6` | `#8B85FF` |
| `--color-primary-soft` | 연한 인디고 배경 (선택 칩·안내) | `#EEEFFE` | `#1C2140` |
| `--color-primary-soft-text` | soft 배경 위 텍스트 | `#4B45C6` | `#A9A4FF` |
| `--color-accent` | 차트 2계열·보조 포인트 (그래픽 전용) | `#0A96B4` | `#22C7E6` |
| `--color-accent-soft` | accent 연한 배경 | `#E3F5F9` | `#10323B` |
| `--color-success` | 성공·완료·입금 (텍스트+상태점, 흰 텍스트 4.5:1) | `#0E7D57` | `#3BD69B` |
| `--color-success-soft` | 성공 뱃지 배경 | `#E3F6EE` | `#10352A` |
| `--color-danger` | 실패·환불·삭제 (텍스트+상태점, 흰 텍스트 4.5:1) | `#DF1B41` | `#FF6B84` |
| `--color-danger-soft` | 실패 뱃지 배경 | `#FCE8EC` | `#3A1620` |
| `--color-warning` | 대기·검토 필요 (텍스트+상태점) | `#8A5200` | `#F0B429` |
| `--color-warning-soft` | 경고 뱃지 배경 | `#FBF0DF` | `#3A2E10` |
| `--color-border` | 장식 hairline (카드·행·구분) | `#E3E8EE` | `#28324A` |
| `--color-border-strong` | 조작 UI 보더 (인풋·토글, 3:1 필요) | `#7E8B9B` | `#66728C` |
| `--color-focus` | 포커스 아웃라인 | `#635BFF` | `#8B85FF` |
| `--color-overlay` | 모달·드로어 뒤 스크림 | `rgba(10,37,64,0.40)` | `rgba(3,7,14,0.62)` |

**차트 카테고리 팔레트** (그래픽 전용, 순서 고정):
`--chart-1 = primary` / `--chart-2 = accent` / `--chart-3 = success` / `--chart-4 = warning-fill(#B4690E 라이트 / #F0B429 다크)` / `--chart-5 = #9061F9(라이트) / #B79BFF(다크)`.

### 2.2 라이트/다크

양쪽 모두 지원하되 **라이트가 기본·주력**이다(결제 대시보드는 낮에 오래 보는 도구).
- 다크는 반전이 아니라 네이비-슬레이트 램프의 재배치: `bg #0B111E < surface #151C2C < surface-sunken #1E273A`로 밝을수록 위 레이어.
- **primary 면(#635BFF)은 양 테마 동일** — 브랜드 인디고 인상을 고정. 흰 텍스트 4.70:1.
- **텍스트/아이콘으로 쓰는 인디고**는 라이트에서 `--color-primary-strong #4B45C6`, 다크에서 `#8B85FF`. `#635BFF`는 라이트 흰 배경 위 3.62:1, 다크 bg 위 약 3.5:1로 본문 기준 미달이라 텍스트에 직접 쓰지 않는다.
- 상태색(success/danger/warning)은 다크에서 한 단계 밝은 값으로 교체(위 표). 차트 채우기 색도 동일 규칙.

### 2.3 대비 규칙 (실측 계산값 명기)

기준: **본문 4.5:1 이상, 대형 텍스트(18px+/600 또는 24px+)·UI 그래픽·조작 보더 3:1 이상.**
아래 값은 WCAG 2.x 상대휘도 공식 `L = 0.2126R'+0.7152G'+0.0722B'` (c'=c/12.92 if c≤0.03928 else ((c+0.055)/1.055)^2.4), `CR=(L1+0.05)/(L2+0.05)`으로 계산한 실제 대비율이다.

| 쌍 | a 라이트 | a 다크 | 판정 |
|---|---|---|---|
| bg / text | **14.70:1** | **16.64:1** | ✓ 본문 |
| surface / text | **15.54:1** | **15.01:1** | ✓ 본문 |
| bg / text-sub | **7.38:1** | **8.61:1** | ✓ 본문 |
| surface / text-sub | **7.80:1** | **7.77:1** | ✓ 본문 |
| bg / text-tertiary | **5.07:1** | **5.42:1** | ✓ 본문 |
| surface / text-tertiary | **5.36:1** | **4.89:1** | ✓ 본문 |
| surface-sunken / text | **13.95:1** | **13.17:1** | ✓ 본문 (테이블 헤더/셀) |
| primary / primary-text | **4.70:1** | **4.70:1** | ✓ 본문 (흰 텍스트 버튼) |
| primary-strong(링크) / bg | **6.70:1** | bright **6.20:1** | ✓ 본문 |
| primary-strong(링크) / surface | **7.08:1** | bright **5.59:1** | ✓ 본문 |
| primary-soft / primary-soft-text | **6.21:1** | **7.04:1** | ✓ 본문 |
| accent / bg | **3.29:1** | **9.32:1** | ✓ 그래픽(3:1) — 본문 텍스트 금지 |
| accent / surface | **3.48:1** | **8.41:1** | ✓ 그래픽(3:1) |
| success / surface | **5.13:1** | **9.14:1** | ✓ 본문 (surface 위 텍스트·흰 텍스트 버튼 5.13) |
| success / success-soft (뱃지 점) | **4.57:1** | **7.21:1** | ✓ 그래픽(3:1) — 점/아이콘용 |
| danger / surface | **4.80:1** | **6.23:1** | ✓ 본문 |
| danger / danger-soft (뱃지 점) | **4.09:1** | **5.84:1** | ✓ 그래픽(3:1) — 점/아이콘용 |
| warning / surface | **6.39:1** | **9.13:1** | ✓ 본문 |
| warning / warning-soft (뱃지 점) | **5.67:1** | **7.14:1** | ✓ 그래픽(3:1) — 점/아이콘용 |
| soft 배경 / text (뱃지 라벨) | **≥12:1** (soft는 L 95%+) | **≥11:1** | ✓ 본문 (뱃지 텍스트는 뉴트럴) |
| border-strong / surface (UI 3:1) | **3.15:1** | **3.52:1** | ✓ UI |
| border-strong / bg (UI 3:1) | **2.98→3.20:1**(채택값) | **3.91:1** | ✓ UI |

b 변형 주요 쌍 실측: 라이트 primary(#3D5AF1)/흰 텍스트 **5.34:1**, primary-strong(#2A3FD0)/surface **7.72:1**, soft(#E8ECFE)/soft-text **6.57:1**, accent(#0E8FB0)/bg **3.57:1**(그래픽). 다크 primary(#4C5CEC)/흰 텍스트 **5.19:1**, bright(#8F9BFF)/surface **6.72:1**, soft(#191F3E)/soft-text **8.16:1**. 전부 통과.

**추가 제약:**
- **primary 면 위 텍스트는 항상 `--color-primary-text`(흰색).** 임의 색 금지.
- **인디고를 텍스트/아이콘으로 쓸 때는 `--color-primary`가 아니라 `--color-primary-strong`.** (라이트 #4B45C6 / 다크 #8B85FF)
- **`--color-accent`와 차트 팔레트는 그래픽 전용**(차트 채우기·라인·아이콘·상태점). 17px 이하 본문 텍스트에 쓰면 위반.
- **상태는 색으로만 전달 금지**(색맹 대응): 뱃지·상태는 항상 `● 상태점 + 텍스트 라벨` 병기(§6.9).
- `--color-border`(hairline)는 장식 전용 — 조작 가능/포커스 경계는 반드시 `--color-border-strong`(3:1) 또는 텍스트/아이콘으로.
- 새 색 조합은 이 표의 해당 행을 재계산해 본문 4.5·UI 3.0을 넘겨야 채택한다. 미달이면 폐기.

### 2.4 팔레트 생성 규칙 (변형·랜덤용)

**고정 (변형이 건드릴 수 없는 것):**
- 뉴트럴 슬레이트 램프 전체: bg/surface/surface-sunken/text/text-sub/text-tertiary/border/border-strong/overlay의 정확한 hex.
- 상태색 3종의 의미와 값: success(hue 150~165)=완료/입금, danger(hue 348~5)=실패/환불, warning(hue 35~48)=대기. 의미-색 매핑 불변.
- 토큰 구조: primary 6종 세트(primary/hover/text/strong/soft/soft-text) + accent 2종을 반드시 전부 제공.
- 채도·명도 범위: 라이트 primary는 HSL 기준 **S 70~90%, L 55~62%**(흰 텍스트 4.5:1 확보 구간), primary-strong는 동일 hue **S 55~70%, L 40~48%**, soft는 **S 60~90%, L 95~97%**(라이트) / **S 30~45%, L 14~18%**(다크).

**자유 (변형이 바꾸는 것):**
- primary hue 0~360 자유. 단 danger(348~5)·success(150~165)·warning(35~48) 구간과 ±15° 이내로 겹치면 시맨틱 색과 혼동되므로 그 hue는 피해 다시 뽑는다.
- accent는 primary hue **−80~−140°**(보색 근처 청록/시안 계열 유지 — Ink의 차트 대비 관습). accent는 그래픽 전용이므로 3:1만 만족하면 된다.
- 다크 primary는 라이트 값 유지 + 흰 텍스트(a 방식). 텍스트용 bright는 같은 hue L 68~74%로 밝혀 다크 surface 위 4.5:1 확보.

**랜덤 명명 `12-r<hue>`** (예: `12-r244` = hue 244 = 기본 인디고):
1. hue h를 뽑는다 → `primary = hsl(h, 82%, 58%)`에서 시작.
2. 흰 텍스트 대비 4.5:1 미달이면 L을 2%p씩 내려 **최초로 통과하는 값을 채택**(결정적 절차 — 같은 이름이면 항상 같은 색).
3. primary-hover = L −8%p, primary-strong = 같은 h `S 62%/L 44%`, soft = `S 80%/L 96%`(라이트)·`S 38%/L 16%`(다크), accent = hue (h−110)°에 그래픽 3:1 만족 L.
4. §2.3 표의 전 행을 재계산해 하나라도 미달이면 그 hue는 폐기하고 다시 뽑는다. 통과한 hue만 `12-r<h>`로 명명.

## §3. 타이포그래피

**폰트 스택** (외부 로드 금지 — 시스템 폴백만):

```css
--font-family: 'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont,
               system-ui, 'Segoe UI', 'Noto Sans KR', sans-serif;
--font-mono: 'SF Mono', 'Cascadia Mono', ui-monospace, 'Roboto Mono',
             'Noto Sans Mono CJK KR', Consolas, monospace;
```

**타입 스케일** — 이 9단계 외 font-size 사용 금지:

| 이름 | size | weight | line-height | letter-spacing | 용도 |
|---|---|---|---|---|---|
| display | 32px | 600 | 1.2 | -0.02em | KPI·잔액 대표 숫자 (mono, tabular) |
| title | 24px | 600 | 1.3 | -0.01em | 페이지 타이틀 (화면당 1개) |
| heading | 18px | 600 | 1.4 | -0.01em | 패널/카드/드로어 헤더 |
| subheading | 15px | 600 | 1.45 | 0 | 소제목, 강조 본문 |
| body | 14px | 400 | 1.5 | 0 | 본문·테이블 셀·리스트 (기본) |
| body-strong | 14px | 500 | 1.5 | 0 | 강조 본문, 활성 라벨 |
| label | 13px | 500 | 1.4 | 0.01em | 인풋 라벨·테이블 헤더·뱃지 |
| caption | 12px | 400 | 1.4 | 0.01em | 타임스탬프·헬퍼·메타 |
| micro | 11px | 500 | 1.35 | 0.02em | 최소 메타·탭 카운터 (이보다 작게 금지) |

**위계 규칙:**
- 한 화면에 `display`는 KPI 행에 최대 4개(같은 크기 반복은 위계 위반 아님 — 지표 나열), `title`은 **1개만**, `heading`은 최대 6개(패널 수만큼).
- **금액·건수·ID는 반드시 `--font-mono` + `font-variant-numeric: tabular-nums`**, weight 500 이상. 표 안 금액은 mono·우측 정렬로 열을 따라 소수점이 정렬돼야 한다.
- 사용 weight는 **400/500/600의 3종만**. 700 이상 금지(과한 굵기는 Stripe풍 절제와 충돌), 300 이하 금지(한글 저대비).
- 테이블 헤더는 `label`(13px/500) `--color-text-sub`, 셀은 `body`(14px/400). 대문자 변환은 라틴 라벨에만 허용(한글 label에 `text-transform:uppercase` 금지).

**금지:** 임의 font-size 사용 금지 — 위 스케일 9값만. rem/em 단위도 스케일 이탈로 간주(§12 V3).

## §4. 간격 · 레이아웃

**스페이싱 스케일** — 이 값 외 margin/padding/gap 사용 금지 (0 제외):

```
4  8  12  16  20  24  32  40  48  64  (px)
```

| 항목 | 값 |
|---|---|
| 앱 좌우 최대 컨텐츠 패딩 (데스크톱) | 32px |
| 카드/패널 내부 패딩 | 24px (컴팩트 패널 20px) |
| 카드 간 gap / 그리드 gutter | 20px |
| 섹션(패널 그룹) 간 세로 간격 | 32px |
| 테이블 셀 패딩 | 세로 12px · 가로 16px, 행 높이 48px |
| 테이블 컴팩트 모드 | 세로 8px, 행 높이 40px |
| 리스트/타임라인 아이템 상하 | 12px (행 min-height 44px) |
| KPI 라벨↔숫자 | 8px, 숫자↔델타 4px |
| 인풋 높이 | 40px (좌우 패딩 12px) |
| 버튼 높이 | 40px 기본 / 32px 컴팩트 / 44px 강조 |
| 상단 앱바 높이 | 56px |
| 좌측 사이드 내비 폭 | 240px (접힘 64px) |
| 터치/클릭 타깃 | 최소 40×40px (모바일 폴백 시 44px) |

**컨테이너·그리드:**
- **데스크톱 기본 1280px** 기준 설계: 좌측 240px 사이드 내비 + 우측 컨텐츠. 컨텐츠 max-width 1120px, 좌우 32px 패딩.
- KPI 행은 `display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px` (≥1024px), 3열(≥768px), 1열(<768px).
- 컨텐츠 2단 레이아웃: 주 컬럼 flex, 보조 컬럼 고정 320~360px, gap 20px.
- **모바일 폴백(<768px)**: 사이드 내비 → 하단 탭바 또는 상단 햄버거(대시보드 예외적으로 허용, §10 참조), 테이블은 §6.4 "표→요약 카드 리스트" 규칙으로 접힌다. 모바일은 폴백이며 주력 화면 아님.

## §5. 형태 (Shape)

**radius 스케일** — 이 값 외 border-radius 금지:

| 토큰 | 값 | 적용처 |
|---|---|---|
| `--radius-xs` | 4px | 뱃지, 상태 태그, 테이블 행 강조, 인풋 내부 요소 |
| `--radius-sm` | 6px | 버튼, 인풋, 셀렉트, 칩 |
| `--radius-md` | 8px | 카드, 패널, 드롭다운, 팝오버 |
| `--radius-lg` | 12px | 모달, 드로어, 대형 KPI 카드 |
| `--radius-pill` | 999px | 아바타, 상태점, 토글, 원형 아이콘 버튼 |

- 인터랙티브 사각 요소의 radius는 **4~8px**. **pill 버튼 금지**(§10 I5) — pill은 아바타·상태점·토글에만.
- **border를 적극 쓴다**(Jelly와 반대). 카드·패널·테이블은 `1px solid var(--color-border)` hairline이 기본 구분 수단. 조작 UI(인풋·토글)는 `var(--color-border-strong)`.
- 카드는 **hairline 보더 + 옅은 그림자까지만**(shadow-xs). 무거운 그림자를 카드에 쓰지 않는다.

**shadow/elevation 단계** (다크 값은 tokens.css에서 검정 기반 오버라이드):

| 토큰 | 라이트 값 | 다크 값 | 용도 |
|---|---|---|---|
| `--shadow-0` | `none` | `none` | 테이블·인라인 요소 기본 |
| `--shadow-xs` | `0 1px 2px rgba(10,37,64,0.06)` | `0 1px 2px rgba(0,0,0,0.40)` | 카드·패널(보더와 함께) |
| `--shadow-sm` | `0 1px 3px rgba(10,37,64,0.10), 0 1px 2px rgba(10,37,64,0.06)` | `0 1px 3px rgba(0,0,0,0.50)` | sticky 앱바, 떠 있는 KPI 카드 |
| `--shadow-md` | `0 6px 16px rgba(10,37,64,0.12), 0 2px 4px rgba(10,37,64,0.06)` | `0 6px 16px rgba(0,0,0,0.55)` | 드롭다운, 팝오버, 툴팁 |
| `--shadow-lg` | `0 16px 40px rgba(10,37,64,0.16), 0 4px 8px rgba(10,37,64,0.06)` | `0 16px 40px rgba(0,0,0,0.62)` | 모달, 우측 드로어 |

## §6. 핵심 컴포넌트 규칙

공통 press 물성: 버튼·행 등 인터랙티브 요소는 `:active`에서 `transform: translateY(1px)` + 배경 한 단계 진하게(120ms). 오버슈트·scale 튐 없음. hover는 데스크톱 보너스(bg/border 변화), 모든 인터랙션에 **press와 focus-visible 상태가 별도로** 존재해야 한다.

### 6.1 버튼 (primary / secondary / ghost / danger)

- **primary**: h 40px(강조 44px), radius 6px, bg `--color-primary`, 라벨 14px/500 `--color-primary-text`, 좌우 패딩 16px. hover `--color-primary-hover`, press `translateY(1px)` + hover색, disabled bg `--color-surface-sunken`·라벨 `--color-text-tertiary`.
- **secondary**: 동일 치수, bg `--color-surface`, `1px solid var(--color-border-strong)`, 라벨 14px/500 `--color-text`. hover bg `--color-surface-sunken`.
- **ghost**: bg 투명, 라벨 14px/500 `--color-text-sub`, hover bg `--color-surface-sunken`. 보조·취소 액션.
- **danger**: bg `--color-danger`, 라벨 흰색. 파괴적 확정에만.
- focus-visible: `outline: 2px solid var(--color-focus); outline-offset: 2px`.

```css
.btn-primary { height: 40px; padding: 0 16px; border: 0; border-radius: var(--radius-sm);
  background: var(--color-primary); color: var(--color-primary-text);
  font: 500 14px/1 var(--font-family);
  transition: background var(--motion-instant) var(--ease-standard),
              transform var(--motion-fast) var(--ease-standard); }
.btn-primary:hover { background: var(--color-primary-hover); }
.btn-primary:active { transform: translateY(1px); }
.btn-primary:focus-visible { outline: 2px solid var(--color-focus); outline-offset: 2px; }
.btn-primary:disabled { background: var(--color-surface-sunken); color: var(--color-text-tertiary); }
```

### 6.2 입력 필드 · 셀렉트

- h 40px, radius 6px, bg `--color-surface`, `1px solid var(--color-border-strong)`, 값 14px/400 `--color-text`, 좌우 패딩 12px. 라벨은 필드 위 label(13px/500) `--color-text-sub`, 간격 8px. placeholder `--color-text-tertiary`.
- focus: 보더 `--color-primary` + `box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-primary) 20%, transparent)`(200ms). 좌우 흔들림 금지.
- 에러: 보더·헬퍼 텍스트(caption)를 `--color-danger`로. 헬퍼는 [무슨 값이 왜 안 되는지 1줄].
- 검색 인풋은 좌측 16px 돋보기 SVG(1.5px stroke), 좌 패딩 40px.

### 6.3 카드 · 패널

- bg `--color-surface`, radius 8px, `1px solid var(--color-border)`, `--shadow-xs`, 패딩 24px.
- 패널 헤더: heading(18px/600) + 우측 액션(ghost 버튼/셀렉트). 헤더와 본문 사이 16px, 필요 시 헤더 아래 1px 구분선 1개.
- **KPI 카드**: 라벨(label, text-sub) → 8px → 값(display, mono, tabular) → 4px → 델타 배지(§6.9, ▲/▼ + %). 카드 내부 20px 패딩.
- 카드 안 카드 금지(중첩 1단까지).

### 6.4 데이터 테이블

- `<table>` 사용을 **권장**(Jelly와 반대). 헤더 행: bg `--color-surface-sunken`, 셀 label(13px/500) `--color-text-sub`, 하단 `1px solid var(--color-border)`. 정렬 가능 열은 헤더에 ▲/▼ 아이콘.
- 바디 행 높이 48px(컴팩트 40px), 셀 패딩 12px 16px, 셀 사이 `border-bottom: 1px solid var(--color-border)`. **금액·수량 열은 우측 정렬 + mono + tabular-nums**, ID 열은 mono `--color-text-sub`.
- 행 hover bg `--color-surface-sunken`(100ms), 행 클릭 시 상세 드로어(§6.7). 선택 체크박스 열은 좌측 고정.
- **모바일 폴백**: 768px 미만에서 각 행을 요약 카드로 접는다 — 주 식별자(고객/거래ID) + 금액 + 상태 배지만 노출, 나머지는 탭해서 상세로.
- 상태 셀은 항상 상태 배지(§6.9)로 — 색만으로 상태 표시 금지.

### 6.5 상단 앱바 + 좌측 사이드 내비

- **앱바** h 56px: 좌측 워드마크(subheading/600) + 환경 스위처(Live/Test 토글 배지), 우측 검색·알림·계정 아바타. bg `--color-surface` + 하단 `1px solid var(--color-border)`, 스크롤 시 `--shadow-sm`.
- **사이드 내비** 폭 240px: 섹션 그룹 라벨(label, text-sub) 아래 항목 리스트. 항목 h 36px, radius 6px, 아이콘 18px(1.5px stroke) + 라벨 14px. 활성 항목: bg `--color-primary-soft`, 텍스트·아이콘 `--color-primary-strong`, 좌측 2px `--color-primary` 인디케이터. 비활성 `--color-text-sub`, hover bg `--color-surface-sunken`.
- 접힘(64px): 아이콘만, hover 시 라벨 툴팁.

### 6.6 탭 · 필터 바

- 탭: 하단 라인 스타일. 항목 h 40px, 라벨 14px/500, 활성 `--color-text` + 하단 2px `--color-primary`, 비활성 `--color-text-sub`. 활성 인디케이터는 240ms `--ease-standard`로 슬라이드.
- 필터 바: 검색 인풋 + 셀렉트 칩(6px radius) + "필터 추가" ghost. 적용된 필터는 제거 가능한 칩(×)으로 표시.

### 6.7 모달 · 우측 드로어

- **드로어(기본, 상세용)**: 우측 부착, 폭 480px(모바일 100%), bg `--color-surface`, 좌측 `1px solid var(--color-border)`, `--shadow-lg`, radius 0(모바일 상단 12px). 헤더 heading + 닫기 아이콘, 본문 24px 패딩. 진입 `translateX(24px)→0` + opacity 240ms `--ease-standard`, 스크림 페이드 160ms.
- **중앙 모달(확인·폼)**: 폭 min(480px, calc(100% - 40px)), radius 12px, `--shadow-lg`, 패딩 24px. 제목 heading, 본문 body, 하단 우측 정렬 버튼 2개(ghost + primary/danger) gap 8px h 40px.

### 6.8 토스트 · 인라인 알림

- **토스트**: 우하단, bg `--color-surface`, `1px solid var(--color-border)`, `--shadow-md`, radius 8px, 패딩 12px 16px. 좌측 상태 아이콘(success/danger/warning 색, 18px) + 텍스트 14px + 우측 닫기. 진입 `translateY(8px)+opacity` 240ms, 4초 자동 소멸.
- **인라인 알림(배너)**: 패널 상단, bg 해당 soft 색, 좌측 4px 상태색 바 + 아이콘 + 텍스트. 페이지 전면 색 배너 금지.

### 6.9 뱃지 · 상태 배지 · 델타

- **상태 배지**: h 22px, 패딩 2px 8px, radius 4px(태그) 또는 999px(닷 스타일). 구조 = **6px 상태점(●, 상태색) + 라벨(label 13px)**. 배경은 해당 soft 색, **라벨 텍스트는 뉴트럴 `--color-text`**(soft 위 12:1+로 고대비), 상태는 색 점으로 전달 → 색맹 대응. 조합: 성공=`success-soft`+success 점+"완료", 실패=`danger-soft`+danger 점+"실패/환불", 대기=`warning-soft`+warning 점+"대기". 정보/처리중만 예외적으로 `primary-soft`+`primary-strong` 텍스트(soft 위 6.21:1로 본문 통과)+"처리중". 색 점은 그래픽 3:1(§2.3), **색만으로 상태 전달 금지**.
- **델타 배지**(증감): ▲/▼ 삼각형 아이콘 + % 값, 증가 `--color-success`·감소 `--color-danger`. 아이콘+부호 병기로 색맹 대응.
- 칩(필터): h 32px, radius 6px, bg `--color-surface` `1px solid var(--color-border-strong)`, 선택 시 bg `--color-primary-soft` 텍스트 `--color-primary-strong` 보더 `--color-primary`.

### 6.10 빈 상태 (empty state)

- 패널/테이블 자리에 세로 중앙 정렬: 40px 인라인 SVG(단색 2톤: `--color-border` 면 + `--color-accent` 포인트) → 12px → 제목 subheading → 8px → 설명 body `--color-text-sub` → 16px → primary 또는 secondary 버튼 h 40px.
- 카피는 §8: "아직 결제가 없어요" + 다음 행동 1줄. 사과·경고 톤 금지.

## §7. 모션

**모션 성격 한 줄: "확인이지 쇼가 아니다 — 빠르게 반응하고 소리 없이 정착. 오버슈트 없음."**

**토큰:**

```css
--motion-instant: 100ms;  /* hover, 색 전환 */
--motion-fast:    160ms;  /* press, 작은 전환, 토글 */
--motion-base:    240ms;  /* 드롭다운, 드로어, 탭 인디케이터, 진입 */
--motion-slow:    400ms;  /* 차트 드로우, 카운트업, 큰 페이지 전환 */
--ease-standard:  cubic-bezier(0.2, 0, 0, 1);      /* 감속 기본 */
--ease-emphasized: cubic-bezier(0.2, 1, 0.2, 1);   /* 진입·강조 (Ink 시그니처) */
--ease-in-out:    cubic-bezier(0.4, 0, 0.2, 1);    /* 위치 이동 */
```

**패턴별 규칙:**

| 패턴 | 규칙 |
|---|---|
| press | `:active`에서 `translateY(1px)` + 배경 한 단계 진하게, 120ms `--ease-standard`. scale·오버슈트 금지 |
| hover(데스크톱) | bg/border 100ms `--ease-standard`. 행 hover = `--color-surface-sunken` |
| 진입(entrance) | `opacity 0→1` + `translateY(8px)→0`, 240ms `--ease-emphasized`. 이동량 8px 고정(과장 금지) |
| 리스트/테이블 행 | 최초 로드 시 항목당 30ms 지연, 최대 12개까지(이후 동시) |
| 드로어/모달 | 드로어 `translateX(24px)→0`, 모달 `opacity+scale(0.98→1)`, 240ms `--ease-emphasized`, 스크림 160ms |
| 탭·필터 인디케이터 | 하단 라인 위치 이동 240ms `--ease-in-out` |
| 숫자 변화 | KPI·잔액 카운트업 400ms `--ease-standard`(이전 값→새 값), tabular-nums로 자릿수 안 흔들림 |
| 차트 드로우 | 라인 `stroke-dashoffset`·막대 높이 400ms `--ease-standard`, 1회성. 반복 애니메이션 금지 |

**`prefers-reduced-motion` 대응 필수:** transform 기반 애니메이션 전부 제거, opacity 100ms만 유지. 카운트업·차트 드로우는 즉시 최종값 표시.

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 1ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 100ms !important;
    transition-property: opacity !important;
  }
}
```

## §8. 보이스 & 톤 (마이크로카피)

- **간결한 존댓말(해요체 기본, 정보 전달은 명사형 허용).** 과한 격식체("~하시기 바랍니다") 금지, 반말 금지. 프로페셔널하되 사람 말투.
- 문장은 짧게, 사용자·객체가 주어. 시스템 주어("시스템이") 금지.
- 숫자는 천 단위 콤마 + 통화 기호/코드 명시("₩1,240,000" 또는 "1,240,000 KRW"), 소수 둘째 자리까지 정책 일관.
- 이모지 금지(전문 대시보드 톤). 상태는 아이콘+텍스트로.
- 기술 용어(API 키·웹훅·멱등키 등)는 그대로 쓰되 처음 등장 시 한 줄 설명.

| 상황 | Ink 카피 | 금지 예 |
|---|---|---|
| CTA (결제 생성) | 결제 만들기 | 제출, 확인 |
| CTA (정산 실행) | 지금 정산하기 | 실행 |
| 완료 토스트 | 정산을 시작했어요 | 처리가 완료되었습니다 |
| 에러 (결제 실패) | 카드가 거절됐어요. 다른 카드로 다시 시도해 주세요 | 오류가 발생했습니다 |
| 에러 (권한) | 이 작업에는 관리자 권한이 필요해요 | Forbidden (403) |
| 빈 상태 | 아직 결제가 없어요. 첫 결제를 만들어 시작해 보세요 | 데이터가 존재하지 않습니다 |
| 로딩 | 불러오는 중… | 로딩 중입니다 |
| 확인 다이얼로그 | 이 API 키를 삭제할까요? 이 키를 쓰는 연동이 즉시 중단돼요 | 정말 삭제하시겠습니까? |
| 위험 확인 | 환불하기 | 예 |

- 에러는 **[무슨 일인지 1문장] + [지금 할 수 있는 일 1문장]** 구조. 원시 에러 코드는 상세 영역에 접어두고 본문엔 사람 말로.
- 금지 표현: "실패하였습니다", "잘못된 요청입니다", 느낌표 2개 이상, 사용자 탓하는 표현.

## §9. 레이아웃 레시피 — 데모 5화면 (가상 결제 대시보드 "Ledger")

모든 화면 공통: 데스크톱 1280px, 좌측 240px 사이드 내비(§6.5) + 상단 56px 앱바(환경 스위처 Live/Test 포함) + 컨텐츠 max 1120px/좌우 32px. 모바일(<768px)은 §4 폴백. 진입 시 패널/행 스태거(30ms).

### screen-1 홈 · 개요 (잔액 + 매출 차트)

- 목적: 3초 안에 "오늘 얼마 들어왔고 잔액이 얼마인지" 파악.
- 위→아래: 페이지 타이틀 "개요"(title) + 우측 날짜 범위 셀렉트 → 24px → **KPI 행 4열**(그리드 gap 20px): 총 잔액 / 오늘 매출 / 결제 건수 / 성공률 — 각 KPI 카드(§6.3: 라벨 + display mono 숫자 + 델타 배지) → 32px → 2단: 주 컬럼에 **매출 추이 라인 차트 패널**(heading "매출 추이" + 우측 기간 탭 §6.6, 인라인 SVG 라인차트 chart-1/chart-2 2계열, 400ms 드로우, y축 tabular) / 보조 컬럼(340px)에 **최근 활동 리스트**(타임라인 아이템: 상태점 + 설명 + 금액 mono + 상대시간) → 32px → **결제 수단 분포** 가로 막대(chart 팔레트).
- 사용 컴포넌트: KPI 카드, 라인차트 패널, 탭, 타임라인 리스트, 델타 배지.
- **미세 그라데이션 허용 1곳**: 총 잔액 KPI 카드 배경에 `linear-gradient(180deg, var(--color-surface), color-mix(in srgb, var(--color-primary) 4%, var(--color-surface)))`. 그 외 그라데이션 금지(§10 I1).

### screen-2 결제 내역 (데이터 테이블)

- 목적: 많은 결제를 빠르게 훑고 걸러낸다. **테이블이 주인공**(§6.4).
- 위→아래: 타이틀 "결제" + 우측 primary "결제 만들기" → 20px → 필터 바(§6.6: 검색 인풋 + 상태 셀렉트 + 금액 범위 + 날짜, 적용 필터는 칩) → 16px → **데이터 테이블**: 열 = 체크박스 / 금액(우측·mono·강조) / 상태 배지 / 결제수단(카드 브랜드 아이콘 + ···1234) / 고객(이메일) / 날짜 / 결제ID(mono, text-sub). 헤더 sunken, 행 48px, 정렬 가능 열 화살표, 행 hover sunken, 행 클릭 → screen-3 드로어 → 하단 페이지네이션(건수 caption + 이전/다음 secondary).
- 상태 배지 4종(성공/실패/환불/대기)로 색맹 대응 확인. 빈 상태(§6.10) 포함.

### screen-3 거래 상세 (우측 드로어)

- 목적: 한 결제의 전모 — 금액·상태·타임라인·메타를 한 화면에.
- 우측 드로어(480px, §6.7): 헤더(금액 display mono + 상태 배지 + 닫기) → 24px → 요약 그리드 2열(고객 / 결제수단 / 생성일 / 결제ID — 라벨 label + 값 body, 값이 ID면 mono + 복사 아이콘) → 32px → **타임라인**(수직선 + 노드: "결제 생성 → 인증 → 승인 → 정산 예정" 각 노드 상태점 + 시각 mono) → 32px → 메타데이터 테이블(key-value, mono) + 원시 이벤트 JSON 접기(details) → 하단 액션 바: "환불하기" danger ghost + "영수증 보내기" secondary.
- 금액·ID·타임스탬프 전부 mono·tabular. 이벤트 로그는 색만이 아닌 아이콘+라벨.

### screen-4 정산 (Payouts)

- 목적: 언제 얼마가 은행으로 나가는지, 잔액 구성이 어떤지.
- 위→아래: 타이틀 "정산" → 24px → 2단: 주 컬럼 상단 **잔액 구성 패널**(가용 잔액 display + "대기 중/정산 예정" 세부를 가로 스택 막대 chart 팔레트 + 범례 상태점) → 20px → **정산 내역 테이블**(도착일 / 금액 mono / 상태 배지 / 은행 계좌 ···) / 보조 컬럼(340px): 다음 정산 카드(도착 예정일 subheading + 금액 display + "지금 정산하기" primary) + 정산 주기 설정 링크.
- KPI·표·차트가 한 화면에 공존하되 인디고는 primary 버튼·차트 1계열에만.

### screen-5 API 설정 (개발자)

- 목적: 키·웹훅·환경을 안전하게 관리. 위험 액션은 확인 모달로.
- 위→아래: 타이틀 "개발자" + 탭(§6.6: API 키 / 웹훅 / 이벤트) → 24px → **API 키 패널**: 테이블(이름 / 토큰(mono, 마스킹 `sk_live_••••4a2f` + 복사·표시 토글) / 권한 배지 / 마지막 사용 / ⋯메뉴) + "키 생성" secondary. Live/Test 환경 배지로 구분 → 32px → **웹훅 엔드포인트 패널**: 리스트(URL mono + 상태점 + 최근 전송 결과) + "엔드포인트 추가". → 위험 구역: "키 삭제"는 danger 버튼 → 확인 모달(§6.7, §8 위험 카피).
- 시크릿은 기본 마스킹, 복사 시 토스트 "복사했어요". 코드/토큰 전부 mono.

## §10. 금지 규칙 (Anti-AI-look)

**공통 금지** (AI가 흔히 저지르는 실수 → 대신 할 것):
1. 보라→파랑 그라데이션 히어로 → 아래 I1 참조. Ink의 그라데이션은 미세 배경 **1곳**뿐.
2. 모든 카드에 동일한 큰 그림자 → 카드는 hairline 보더 + `--shadow-xs`까지만(§5). 큰 그림자는 떠 있는 레이어(드롭다운·모달·드로어)에만.
3. 3열 아이콘+제목+설명 카드 반복 → KPI 행(같은 지표 나열)은 허용, 마케팅식 "feature 3-up" 반복 금지.
4. `border: 1px solid #eee` 남발 → 보더는 토큰(`--color-border`/`--color-border-strong`) 두 값만. 임의 회색 hex 금지.
5. 이모지를 아이콘 대신 사용 → 아이콘은 18px 인라인 SVG(stroke 1.5px)만. 이모지 전면 금지(§8).
6. 화면마다 다른 radius → §5 스케일 5값만. 같은 컴포넌트는 항상 같은 radius.

**Ink 고유 금지** (I1~I8):
1. **I1 보라 그라데이션 히어로·그라데이션 남용 금지** → 그라데이션은 **화면당 미세 배경 1곳**(총 잔액/주 KPI 카드, primary 4% 이하 블렌드)만. 버튼·헤더·차트 채우기·텍스트에 그라데이션 금지. `linear-gradient`/`radial-gradient` 사용처는 화면당 1개를 넘기면 위반.
2. **I2 순색 인디고 대면적 금지** → `--color-primary` 순색은 primary 버튼·활성 내비 인디케이터·차트 1계열·상태 배지 점에만. 페이지 배경·큰 패널·헤더 바를 인디고로 칠하지 않는다. 인디고 칠 면적은 화면의 ~8% 이하.
3. **I3 상태를 색으로만 전달 금지** → 결제 상태·증감은 항상 **아이콘/상태점 + 텍스트 라벨** 병기(§6.9). 초록·빨강 텍스트만으로 상태 구분 금지(색맹 대응).
4. **I4 금액을 비정렬·가변폭으로 표기 금지** → 금액·수량·ID는 `--font-mono` + `tabular-nums`, 표 안에서 우측 정렬. 일반 sans로 좌측 정렬한 금액 열은 위반.
5. **I5 pill 버튼·거대 radius 금지** → 버튼·인풋 radius 4~8px. `border-radius` 999px는 아바타·상태점·토글에만. 12px 초과 radius 금지.
6. **I6 데이터 테이블을 카드 그리드로 대체 금지(데스크톱)** → 행이 많은 데이터는 반드시 `<table>` 48px 행으로. 데스크톱에서 결제 내역을 카드 타일 그리드로 흩뿌리면 위반(모바일 폴백 요약 카드는 예외).
7. **I7 과장 모션·오버슈트 금지** → press는 `translateY(1px)`, 진입 이동 8px 고정. `scale` 튐, 스프링 오버슈트(cubic-bezier y>1), 반복 애니메이션 금지(§7).
8. **I8 다크를 기본으로 내세우기 금지** → Ink는 라이트 주력. 데모/스크린샷의 기본 상태는 라이트. 다크는 토글 제공용 동등 구현이되 첫인상 기준은 라이트다.

## §11. Tailwind v4 / React 매핑 (부록)

```css
/* app.css — tokens.css를 불러온 뒤 Tailwind 토큰으로 매핑 */
@import "tailwindcss";
@import "../presets/12-ink/tokens.css";

@theme inline {
  --color-bg: var(--color-bg);
  --color-surface: var(--color-surface);
  --color-surface-sunken: var(--color-surface-sunken);
  --color-text: var(--color-text);
  --color-text-sub: var(--color-text-sub);
  --color-primary: var(--color-primary);
  --color-primary-strong: var(--color-primary-strong);
  --color-primary-soft: var(--color-primary-soft);
  --color-success: var(--color-success);
  --color-danger: var(--color-danger);
  --color-warning: var(--color-warning);
  --color-border: var(--color-border);
  --radius-sm: var(--radius-sm);
  --radius-md: var(--radius-md);
  --radius-lg: var(--radius-lg);
  --font-sans: var(--font-family);
  --font-mono: var(--font-mono);
  --ease-emphasized: var(--ease-emphasized);
  --ease-standard: var(--ease-standard);
}
```

```tsx
// primary 버튼 — Ink press 물성(translateY, 오버슈트 없음)
export function Button(props: React.ComponentProps<"button">) {
  return (
    <button
      className="h-10 rounded-[6px] bg-primary px-4 text-[14px] font-medium text-white
                 transition-[background,transform] duration-[100ms] ease-standard
                 hover:bg-[--color-primary-hover] active:translate-y-px
                 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                 focus-visible:outline-[--color-focus]
                 disabled:bg-surface-sunken disabled:text-[--color-text-tertiary]"
      {...props}
    />
  );
}

// 상태 배지 — 색만이 아니라 점 + 라벨 병기
export function StatusBadge({ tone, label }: { tone: "success"|"danger"|"warning"|"info"; label: string }) {
  const map = {
    success: "bg-[--color-success-soft] text-[--color-success]",
    danger:  "bg-[--color-danger-soft] text-[--color-danger]",
    warning: "bg-[--color-warning-soft] text-[--color-warning]",
    info:    "bg-[--color-primary-soft] text-[--color-primary-strong]",
  }[tone];
  return (
    <span className={`inline-flex h-[22px] items-center gap-2 rounded-[4px] px-2
                      text-[13px] font-medium ${map}`}>
      <span className="size-1.5 rounded-full bg-current" aria-hidden />
      {label}
    </span>
  );
}

// 테이블 금액 셀 — mono, tabular, 우측 정렬
export function AmountCell({ value }: { value: number }) {
  return (
    <td className="px-4 py-3 text-right font-mono tabular-nums text-[14px] font-medium text-text">
      ₩{value.toLocaleString("ko-KR")}
    </td>
  );
}
```

**StyleSeed 호환 메모:** tokens.css의 `--color-*`/`--radius-*`/`--motion-*`/`--ease-*`는 StyleSeed theme.css 동명 슬롯에 1:1로 옮겨진다. 모션 시드는 "Snap/Standard" 계열(press = translateY + 감속, 오버슈트 없음)에 대응. `--font-size-*` 9단계는 StyleSeed type scale의 display/title/heading/body/label/caption 슬롯에 순서대로 매핑. 슬레이트 램프는 뉴트럴 스케일 9스텝으로 이관.

## §12. 채점 루브릭

합격선: **verifiable 9항목 전부 통과(65점 만점 중 65점) + subjective 5항목 평균 4.0 이상**.
하나라도 미달이면 불합격 — loop-runner는 미달 항목만 고쳐 재채점한다.
판정 대상 파일 집합을 `$F`(html/css/tsx 글롭)로 표기한다.

### verifiable 항목 (기계 판정, 65점)

| # | 항목 | 배점 | 판정 방법 |
|---|---|---|---|
| V1 | 대비율: 실제 사용된 bg/text·surface/text·primary/primary-text 쌍 4.5:1 이상, accent·차트 그래픽 쌍 3:1 이상 | 10 | 결과물 hex를 추출해 WCAG 공식으로 계산: `L=0.2126R'+0.7152G'+0.0722B'` (c'=c/12.92 if c≤0.03928 else ((c+0.055)/1.055)^2.4), `CR=(L1+0.05)/(L2+0.05)`. §2.3 표와 대조. 토큰을 무변경 사용했다면 §2.3 표 인용으로 통과 |
| V2 | 스페이싱 스케일 외 값 0개 | 10 | `grep -rhoE '(margin\|padding\|gap\|inset)[a-z-]*:[^;]+' $F \| grep -oE '[0-9]+px' \| grep -vwE '(0\|4\|8\|12\|16\|20\|24\|32\|40\|48\|64)px'` → 출력 0줄 |
| V3 | 타입 스케일 외 font-size 0개 | 10 | `grep -rhoE 'font-size:\s*[0-9.]+(px\|rem\|em)' $F \| grep -vE ':\s*(11\|12\|13\|14\|15\|18\|24\|32)px'` → 출력 0줄 (rem/em 사용 자체가 위반) |
| V4 | radius가 §5 스케일 값만 | 5 | `grep -rhoE 'border-radius:[^;]+' $F \| grep -oE '[0-9]+px' \| grep -vwE '(4\|6\|8\|12\|999)px'` → 출력 0줄 |
| V5 | shadow가 §5 표 5단계와 일치 | 5 | `grep -rhoE 'box-shadow:[^;]+' $F` 의 모든 값이 `var(--shadow-[a-z]+)` 참조이거나 tokens.css의 `--shadow-*` 정의 문자열과 일치, **또는** focus용 `0 0 0 3px` 링 → 그 외 불일치 0건 |
| V6 | `prefers-reduced-motion` 대응 존재 | 5 | `grep -rl 'prefers-reduced-motion' $F \| wc -l` ≥ 1 |
| V7 | 외부 리소스 0 (CDN 폰트/스크립트/이미지) | 5 | `grep -rnE 'https?://[^"'"'"')( ]+\.(css\|js\|woff2?\|ttf\|png\|jpe?g\|webp\|svg)\|fonts\.googleapis\|cdn\.\|unpkg\|jsdelivr' $F` → 출력 0줄 |
| V8 | Ink 모션 시그니처: 오버슈트 없는 press + emphasized easing | 10 | `grep -rF 'translateY(1px)' $F \| wc -l` ≥ 1 **그리고** `grep -rE 'var\(--ease-emphasized\)\|cubic-bezier\(0\.2, 1, 0\.2, 1\)' $F \| wc -l` ≥ 1 **그리고** 오버슈트 금지: `grep -roE 'cubic-bezier\([^)]*\)' $F \| grep -E ', ?1\.[1-9]'`(스프링 y>1) → 출력 0줄 |
| V9 | 데이터 테이블 사용 + 금액 tabular-nums + 그라데이션 남용 없음 | 5 | `grep -ri '<table' $F \| wc -l` ≥ 1 **그리고** `grep -r 'tabular-nums' $F \| wc -l` ≥ 1 **그리고** 화면 파일 1개당 `grep -c 'linear-gradient\|radial-gradient'` ≤ 1 |

### subjective 항목 (AI/사람 채점, 5점 척도 ×5항목 — 평균 4.0 이상 합격)

| # | 항목 | 1점 앵커 | 3점 앵커 | 5점 앵커 |
|---|---|---|---|---|
| S1 | §1 첫인상 부합 (뉴트럴 지배·인디고 한 점·데이터 밀도) | 인디고/그라데이션이 화면을 덮거나 데이터가 성기고 카드만 크다 | 뉴트럴 위주지만 인디고 면적이 넓거나 테이블 대신 카드로 흩어졌다 | 슬레이트가 지배하고 인디고는 버튼·활성 내비·차트 1계열에만, 48px 표에 데이터가 정돈됐다 |
| S2 | §8 어조 준수 | "오류가 발생했습니다"·에러 코드 노출·이모지 사용 | 존댓말이나 문장이 길거나 시스템 주어 혼재 | 간결한 존댓말, 에러가 [상황+다음 행동], 위험 확인이 결과를 설명, 이모지 0 |
| S3 | 모션 물성 (§7) | 모션 없음 또는 scale 튐·스프링 오버슈트·반복 애니메이션 | press는 있으나 진입/카운트업/차트 드로우 성격이 약함 | 누르면 1px 내려앉고, 진입 8px·240ms emphasized, KPI 카운트업·차트 1회 드로우가 §7과 일치, 오버슈트 0 |
| S4 | 데이터 밀도·정렬 (§3·§4·§6.4) | 금액이 sans·좌측 정렬, 행 높이 제각각, 열 정렬 안 맞음 | 테이블은 있으나 금액이 non-mono이거나 헤더 스타일 불일치 | 금액·ID mono·tabular·우측 정렬로 열이 눈에 흐르고, 48px 행·sunken 헤더·hairline이 일관 |
| S5 | §10 정성 항목 (그라데이션 절제·인디고 면적·상태 색맹) | 그라데이션 히어로 또는 인디고 대면적 또는 상태가 색만 | 금지 위반은 없으나 인디고/그라데이션이 다소 눈에 띈다 | 그라데이션 미세 1곳, 인디고 ≤8% 면적, 모든 상태가 점+라벨 병기 |

**채점 절차:** verifiable은 판정 명령을 그대로 실행해 pass/fail 기록 → subjective는 5화면을 라이트(주력)·다크 각각 확인해 앵커와 대조, 1~5점 부여 → 합산. 4.0 미만 항목은 5점 앵커 조건을 수정 지시문으로 변환해 다음 반복에 넘긴다.
