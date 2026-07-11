---
number: 11
codename: Asphalt
inspired-by: Uber Base (base.uber.com) — 서술 참조만, 상표는 파일/클래스명에 사용하지 않음. 이 문서의 모든 수치는 독립 해석이며 공식 값이 아니다
mood: 도시의 아스팔트. 흑백 대비를 끝까지 밀어붙인 대담함, 검정 pill 버튼, 큰 700 타이포, 지도 위 기능적 위계. 포인트색은 딱 하나
best-for: 모빌리티·온디맨드(호출/배달/물류), 지도 기반 실시간 서비스, 기능적 소비자 앱, 실서비스 운영 화면
variants: [a, b]
status: complete
---

# 11 · Asphalt

## §1. 첫인상 요약

1. **흑백이 지배한다.** 화면의 90%는 검정·흰색·회색이다. 색은 정보(경로선·선택·경고)일 때만 등장하고, 그 외에는 등장하지 않는다.
2. **검정이 곧 액션.** primary 버튼은 순검정(#000) pill이다. "지금 할 일"은 항상 검정 덩어리로 화면 하단에 박혀 있다.
3. **숫자가 크고 굵다.** 요금·ETA·거리는 display(32~52px/700, tabular). 나머지 텍스트는 그 숫자를 설명하는 조연이다.
4. **모든 인터랙션은 알약이다.** 버튼·칩·토글·아바타는 radius 999px. 카드만 16px. 이 두 형태의 대비가 시그니처다.
5. **기능적이고 즉각적.** 모션은 튀지 않는다(스프링·바운스 없음). 100~240ms의 절제된 전환. 화면은 도구지 장난감이 아니다.

## §2. 색

### 2.1 팔레트

시맨틱 토큰 전체 표 (a 변형 기준. b 변형은 §2.4 규칙으로 accent만 파생, 값은 tokens.css 참조):

| 토큰 | 역할 | a 라이트 | a 다크 |
|---|---|---|---|
| `--color-bg` | 캔버스·지도 배경 | `#FFFFFF` | `#0E0E0E` |
| `--color-surface` | 카드·채움 영역·입력 바닥 | `#F6F6F6` | `#1A1A1A` |
| `--color-surface-raised` | 바텀시트·모달·지도 오버레이 | `#FFFFFF` | `#242424` |
| `--color-surface-pressed` | 리스트/타일 press 채움 | `#E2E2E2` | `#2E2E2E` |
| `--color-text` | 잉크(본문·숫자) | `#000000` | `#FFFFFF` |
| `--color-text-sub` | 보조 본문 | `#5E5E5E` | `#ABABAB` |
| `--color-text-tertiary` | 캡션·타임스탬프 | `#6E6E6E` | `#8A8A8A` |
| `--color-text-on-dark` | 검정 면 위 텍스트 | `#FFFFFF` | `#FFFFFF` |
| `--color-primary` | 검정 CTA·핵심 액션 | `#000000` | `#FFFFFF` (반전) |
| `--color-primary-text` | primary 위 텍스트 | `#FFFFFF` | `#000000` |
| `--color-primary-pressed` | primary press | `#282828` | `#E2E2E2` |
| `--color-accent` | 포인트(경로선·선택·아이콘·채움) | `#276EF1` | `#276EF1` |
| `--color-accent-text` | 링크/텍스트용 포인트 | `#175FDB` | `#5B9BF7` |
| `--color-accent-soft` | 선택 칩·안내 배경 | `#E6EEFE` | `#12233F` |
| `--color-accent-soft-text` | soft 배경 위 텍스트 | `#0B4FCC` | `#6BA5FF` |
| `--color-danger` | 에러·취소 | `#E11900` | `#FF5B47` |
| `--color-danger-soft` / `-soft-text` | 에러 배경 / 그 위 텍스트 | `#FCE9E6` / `#B31400` | `#351512` / `#FF8A7A` |
| `--color-warning` | 주의(지연·요금 변동) | `#FFC043` | `#FFC043` |
| `--color-warning-soft` / `-soft-text` | 주의 배경 / 그 위 텍스트 | `#FFF3D9` / `#7A5200` | `#33270D` / `#FFCF6E` |
| `--color-success` | 완료·도착·결제 성공 | `#048848` | `#33C27A` |
| `--color-success-soft` / `-soft-text` | 성공 배경 / 그 위 텍스트 | `#E4F3EB` / `#036B39` | `#12291F` / `#4FD08E` |
| `--color-border` | 헤어라인·구분선·입력 테두리 | `#E2E2E2` | `#333333` |
| `--color-border-strong` | 강조 구분선(장식) | `#CFCFCF` | `#4A4A4A` |
| `--color-map` / `--color-map-road` | 회색조 지도 면 / 도로 | `#E8E8E8` / `#FFFFFF` | `#1F1F1F` / `#3A3A3A` |
| `--color-dim` | 시트/모달 뒤 딤 | `rgba(0,0,0,0.48)` | `rgba(0,0,0,0.64)` |

### 2.2 라이트/다크

양쪽 모두 지원(위 표). 핵심 규칙:

- **primary는 다크에서 반전한다.** 라이트=검정 버튼/흰 글자, 다크=흰 버튼/검정 글자. CTA가 항상 배경과 최대 대비를 이루도록 하는 의도된 반전(Uber 다크의 시그니처 해석).
- 다크 캔버스는 순검정(#000)이 아니라 `#0E0E0E`. surface 단계는 밝기만 올린다(`#1A1A1A`→`#242424`→`#2E2E2E`).
- **다크에서 부양(elevation)은 그림자가 아니라 surface 밝기 + 1px border로 표현한다.** 검정 위 그림자는 보이지 않기 때문. 그림자 토큰은 다크에서 존재하나 보조 역할.
- accent(#276EF1)는 라이트/다크 공통(브랜드 포인트 고정). 단 **텍스트로 쓸 때는** 라이트 `--color-accent-text`(#175FDB), 다크 `--color-accent-text`(#5B9BF7)로 교체한다(#276EF1은 다크 bg 대비 4.22:1로 대형/UI만 가능, 본문 텍스트 불가).
- danger/warning/success는 다크에서 밝은 톤으로 교체해 어두운 배경 위 가독 확보.

### 2.3 대비 규칙 (실측 계산값 명기)

기준: **본문 4.5:1 이상, 대형 텍스트(24px+ 또는 18.66px+/700)·UI 그래픽 3:1 이상.**
아래는 WCAG 2.x 상대휘도 공식(`L=0.2126R'+0.7152G'+0.0722B'`, `CR=(L1+0.05)/(L2+0.05)`)으로 계산한 실제 대비율.

| 쌍 | a 라이트 | a 다크 | 판정 |
|---|---|---|---|
| bg / text | **21.00:1** | **19.30:1** | ✓ 본문 |
| surface / text | **19.43:1** | **17.40:1** | ✓ 본문 |
| bg / text-sub | **6.48:1** | **8.41:1** | ✓ 본문 |
| surface / text-sub | **6.00:1** | **7.58:1** | ✓ 본문 |
| bg / text-tertiary | **5.10:1** | **5.59:1** | ✓ 본문 |
| surface / text-tertiary | **4.72:1** | **5.04:1** | ✓ 본문 |
| primary / primary-text | **21.00:1** | **21.00:1** | ✓ 본문 |
| accent-text / bg | **5.68:1** | **6.87:1** | ✓ 본문(링크) |
| accent-text / surface | **5.26:1** | **6.20:1** | ✓ 본문(링크) |
| accent / primary-text(흰, UI) | **4.58:1** | **4.58:1** | ✓ 본문+UI (accent 채움 버튼) |
| accent / bg (그래픽·경로선) | 4.58:1 | **4.22:1** | ✓ 그래픽(3:1) |
| accent-soft / accent-soft-text | **6.00:1** | **6.32:1** | ✓ 본문 |
| danger / bg | **4.84:1** | **6.29:1** | ✓ 본문 |
| danger / surface | 4.51:1 | **5.67:1** | ✓ 본문 |
| danger / 흰(UI, 채움) | **4.84:1** | (다크는 검정 텍스트 6.84:1) | ✓ |
| danger-soft / danger-soft-text | **5.95:1** | 5.6:1 | ✓ 본문 |
| warning / 검정 텍스트(뱃지) | **12.87:1** | **11.83:1** | ✓ 본문 |
| warning-soft / warning-soft-text | **6.29:1** | 6.0:1 | ✓ 본문 |
| success / bg | **4.55:1** | **8.40:1** | ✓ 본문 |
| success / surface | 4.22:1 | **7.57:1** | ✓ 본문(라이트는 bg 위·대형만, §추가제약) |
| success / 흰(UI, 채움) | **4.55:1** | — | ✓ |

b 변형(앰버, hue 18) 주요 쌍 실측 — 라이트: accent(#C2410C)/흰 텍스트 **5.18:1**, accent-text(#9A3200)/bg **7.42:1** · /surface **6.87:1**, soft(#FBEAE0)/soft-text(#9A3200) **6.34:1**. 다크: accent(#FF8355)/검정 텍스트 **8.63:1**, accent-text/bg **7.93:1** · /surface **7.15:1**, soft(#2E1A10)/soft-text(#FF8355) **6.79:1**. 전부 통과.

추가 제약 (위 표에서 도출):
- **primary 위 텍스트는 항상 `--color-primary-text`.** 라이트=흰, 다크=검정. 임의 색 금지.
- **accent(#276EF1)를 본문 텍스트로 쓰지 않는다.** 텍스트는 `--color-accent-text`. #276EF1은 (1) 흰 텍스트를 얹는 채움 버튼 배경, (2) 경로선·아이콘·선택 표시 등 그래픽에만.
- **`--color-success`(라이트)는 surface 위에서 4.22:1** → surface 위에서는 대형(24px+/700) 또는 아이콘/UI(3:1)만, 본문 크기는 bg(흰) 위에서만.
- 다크의 danger/accent 채움 버튼은 **검정 텍스트**(밝은 색상 위 흰 텍스트는 대비 미달). danger 다크 채움 배경 위 검정 6.84:1.
- 새 색 조합은 이 표의 해당 행을 재계산해 4.5/3.0을 넘겨야 채택. 미달이면 폐기.

### 2.4 팔레트 생성 규칙 (변형·랜덤용)

이 프리셋의 정체성은 **흑백 골격 + 포인트색 1개**다. 따라서 변형이 바꾸는 것은 오직 **accent(포인트) 계열**이다.

**고정 (변형이 건드릴 수 없는 것):**
- primary = 순검정(라이트 #000000) / 흰 반전(다크 #FFFFFF)과 그 text·pressed. **primary는 절대 유채색이 되지 않는다.**
- 뉴트럴 램프 전체: bg/surface/surface-raised/surface-pressed/text/text-sub/text-tertiary/border/border-strong/map/dim의 정확한 hex.
- 시맨틱 3색 danger(hue 8~12)·warning(hue 40~45)·success(hue 150~160)의 의미와 값.
- 토큰 구조: accent 4종 세트(accent/accent-text/accent-soft/accent-soft-text)를 라이트·다크 모두 제공.
- accent 채도·명도 범위: 라이트 accent는 HSL 기준 **S 70~95%, L 40~52%**(흰 텍스트 4.5:1 확보 구간). soft는 동일 hue **S 30~55%, L 92~96%**(라이트) / **S 30~50%, L 10~15%**(다크).

**자유 (변형이 바꾸는 것 = accent hue):**
- accent hue 0~360 자유. 단 danger(8~12)·warning(40~45)·success(150~160)와 **±15° 이내로 겹치면** 시맨틱 색과 혼동되므로 그 구간은 피해서 다시 뽑는다.
- accent-text는 accent와 **같은 hue, L −12~18%p** 낮춰 bg·surface 양쪽 4.5:1 확보.
- 다크 accent: (1) 라이트와 같은 값 유지 + 흰 텍스트(a=blue 방식) 또는 (2) L 60~70%로 밝힌 뒤 채움 버튼 텍스트를 검정으로(b=amber 방식). 채택한 방식에서 accent-text는 다크 bg 4.5:1을 넘겨야 함.

**랜덤 명명 `11-r<hue>`** (예: `11-r280` = hue 280 보라 포인트):
1. hue h를 뽑는다 → `accent = hsl(h, 82%, 46%)`에서 시작.
2. 흰 텍스트 대비 4.5:1 미달이면 L을 2%p씩 내려 **최초로 통과하는 값을 채택**(결정적 절차 — 같은 이름이면 항상 같은 색).
3. accent-text = accent에서 L −14%p, soft = 동일 h에 S 45%/L 94%(라이트)·S 40%/L 13%(다크)로 파생.
4. §2.3 표의 accent 관련 전 행을 재계산해 하나라도 미달이면 그 hue 폐기 후 다시. 통과한 hue만 `11-r<h>`로 명명. **뉴트럴·primary·시맨틱 3색은 그대로 둔다.**

## §3. 타이포그래피

**폰트 스택** (외부 로드 금지 — 지오메트릭 산세리프 시스템 폴백만. 숫자는 mono로 tabular 정렬):

```css
--font-display: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
                'Helvetica Neue', Arial, sans-serif;   /* 헤딩·대형 숫자 (항상 700) */
--font-text:    system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
                'Helvetica Neue', Arial, sans-serif;   /* 본문·라벨 */
--font-mono:    ui-monospace, 'SF Mono', 'Roboto Mono', Menlo, Consolas, monospace; /* 요금·거리·시각 */
```

**타입 스케일** — 이 10단계 외 font-size 사용 금지 (whitelist: 12·14·16·18·20·24·32·36·52px):

| 이름 | size | weight | line-height | letter-spacing | 용도 |
|---|---|---|---|---|---|
| display-1 | 52px | 700 | 1.23 | -0.02em | 랜딩 히어로 문장 |
| display-2 | 36px | 700 | 1.22 | -0.02em | 요금·ETA 대형 숫자 |
| display-3 | 32px | 700 | 1.25 | -0.01em | 화면 히어로 숫자 |
| title-1 | 24px | 700 | 1.33 | -0.01em | 화면 타이틀 |
| title-2 | 20px | 700 | 1.4 | -0.01em | 섹션 헤더·시트 제목 |
| body-lg | 18px | 500 | 1.33 | 0 | 강조 본문, 큰 버튼 라벨(button-large) |
| body | 16px | 400 | 1.5 | 0 | 기본 본문·리스트 주 텍스트 |
| label | 16px | 500 | 1.25 | 0 | 버튼 라벨·강조 라벨(굵기로 body와 분리) |
| body-sm | 14px | 400 | 1.43 | 0 | 보조 텍스트·리스트 보조 |
| caption | 12px | 400 | 1.33 | 0.01em | 캡션·뱃지·탭 라벨 (최소 크기, 이보다 작게 금지) |

**위계 규칙:**
- 한 화면에 display 계열은 **1개만**(요금·ETA 같은 그 화면의 주인공 숫자). title-1도 1개(앱바 타이틀 겸용). 헤딩 레벨 화면당 최대 3단계.
- **모든 헤딩(display·title)은 weight 700 고정.** 300/400 헤딩 금지(§10-A8). 얇은 대형 텍스트는 이 프리셋에 없다.
- **요금·거리·시각·ETA는 `--font-mono` + `font-variant-numeric: tabular-nums`.** 실시간으로 바뀌는 숫자가 좌우로 흔들리지 않게. 대형 숫자는 display size에 mono 적용.
- 사용 weight는 **400/500/700의 3종만**. 600·800·900 금지(Base의 400/500/700 구성 해석).
- 본문(body 16/400)과 라벨(label 16/500)은 같은 size를 굵기로만 분리한다.

**금지:** 임의 font-size 사용 금지 — 위 스케일 10값만. rem/em 단위도 스케일 이탈로 간주(§12 V3).

## §4. 간격 · 레이아웃

**스페이싱 스케일** (4px 베이스라인 그리드) — 이 값 외 margin/padding/gap 사용 금지 (0 제외):

```
4  8  12  16  20  24  32  40  48  64  (px)
```

| 항목 | 값 |
|---|---|
| 화면 좌우 기본 패딩 | 16px (기능적 밀도. Jelly보다 촘촘하게) |
| 섹션 간 간격 | 32px (큰 전환 48px) |
| 카드 내부 패딩 | 16px |
| 리스트 아이템 상하 패딩 | 12px (행 min-height 64px) |
| 리스트 아이콘↔텍스트 | 12px |
| 제목↔본문 | 8px, 본문↔보조 4px |
| 앱바 높이 | 56px |
| 하단 탭바 높이 | 56px + `env(safe-area-inset-bottom)` |
| 하단 고정 CTA | 버튼 높이 56px, 좌우 16px, 아래 12px + `env(safe-area-inset-bottom)` |
| 지도 오버레이 카드 | 화면 하단 부착, 좌우 12px 띄움, radius 16px |
| 터치 타깃 | 최소 48×48px |

**컨테이너·그리드:**
- 모바일 기준 폭 390px, 단일 컬럼. 지도 화면은 지도가 풀블리드(뷰포트 가장자리까지), 그 위 카드/시트가 얹힌다.
- **데스크톱(768px+)에서는 중앙 400px 프레임**: `max-width: 400px; margin: 0 auto;` 프레임 radius 16px, `--shadow-3`, 프레임 밖 배경 `--color-frame-backdrop`.
- 예외적 2열: 차량 옵션 등에서 gap 12px 2열까지. 3열 이상 아이콘 카드 반복 금지(§10).

## §5. 형태 (Shape)

**radius 스케일** — 이 값 외 border-radius 금지 (whitelist: 0·8·12·16·36·999px):

| 토큰 | 값 | 적용처 |
|---|---|---|
| `--radius-none` | 0 | 풀블리드 미디어·지도(뷰포트에 맞닿는 가장자리) |
| `--radius-sm` | 8px | 입력 내부 요소·작은 썸네일 |
| `--radius-md` | 12px | 입력 필드·작은 타일 |
| `--radius-lg` | 16px | **카드·바텀시트 상단·모달·지도 오버레이** |
| `--radius-tab` | 36px | 세그먼트 토글 트랙(오프셰이프) |
| `--radius-full` (`--radius-pill`) | 999px | **버튼·칩·아바타·FAB·토글 — 시그니처** |

- **시그니처 규칙: 인터랙티브 요소(버튼·칩·토글·FAB)는 전부 pill(999px). 카드는 16px. 이 두 형태의 대비가 Asphalt의 핵심.** 인터랙티브에 8/12/16px 라운드 버튼 금지, 카드에 pill 금지.
- 입력 필드만 예외적으로 12px(md) — 기능적 사각 입력(주소·검색). 입력 안의 검색 버튼은 pill.
- **border는 헤어라인 용도로 적극 사용한다**(Jelly와 반대). 카드 경계·리스트 구분·입력 테두리에 `1px solid var(--color-border)`. 다크에서는 border가 elevation의 주 수단.

**shadow/elevation 단계** (다크 값은 tokens.css에서 오버라이드):

| 토큰 | 라이트 값 | 다크 값 | 용도 |
|---|---|---|---|
| `--shadow-0` | `none` | `none` | 기본. 카드는 그림자 없음(surface·border로 구분) |
| `--shadow-1` | `0 2px 8px rgba(0,0,0,0.16)` | `0 2px 8px rgba(0,0,0,0.5)` | 플로팅 pill·sticky 바·FAB |
| `--shadow-2` | `0 4px 16px rgba(0,0,0,0.12)` | `0 4px 16px rgba(0,0,0,0.55)` | 부양 카드·드롭다운·지도 오버레이 |
| `--shadow-3` | `0 8px 32px rgba(0,0,0,0.20)` | `0 8px 32px rgba(0,0,0,0.65)` | 바텀시트·모달·데스크톱 프레임 |

## §6. 핵심 컴포넌트 규칙

공통 press 물성: 인터랙티브 요소는 `:active`에서 `transform: scale(0.98)`(100ms `--ease-standard`) + bg press 색. **바운스·오버슈트 없음**(§7) — 즉시 눌리고 즉시 복귀.

### 6.1 버튼 (primary / secondary / ghost / accent)

- **primary**: h 56px(하단 CTA)/48px(인라인), **radius 999px(pill)**, bg `--color-primary`(검정/다크는 흰색), 라벨 18px/500(body-lg) `--color-primary-text`. 하단 CTA 가로 꽉 참, 인라인은 내용 폭 + 좌우 24px.
- **secondary**: 동일 치수·pill, bg `--color-surface` + `1px solid var(--color-border)`, 라벨 16px/500 `--color-text`.
- **ghost**: bg 투명, 라벨 16px/500 `--color-text-sub`, h 48px. 취소·부가 액션.
- **accent**: 동일 치수·pill, bg `--color-accent`, 라벨 16px/500 `--color-primary-text`(다크 b는 검정). "지도에서 선택"처럼 포인트 강조 액션 한정.
- 상태: hover(데스크톱만) `filter: brightness(1.08)` / press bg `--color-primary-pressed` + `scale(0.98)` / disabled bg `--color-surface`, 라벨 `--color-text-tertiary`, `cursor: not-allowed` / focus-visible `outline: 2px solid var(--color-accent); outline-offset: 2px`.

```css
.btn-primary { height: 56px; width: 100%; border: 0; border-radius: var(--radius-pill);
  background: var(--color-primary); color: var(--color-primary-text);
  font-family: var(--font-text); font-size: 18px; font-weight: 500;
  transition: transform var(--motion-instant) var(--ease-standard),
              background var(--motion-fast) var(--ease-standard); }
.btn-primary:active { transform: scale(0.98); background: var(--color-primary-pressed); }
.btn-primary:disabled { background: var(--color-surface); color: var(--color-text-tertiary); cursor: not-allowed; }
```

### 6.2 입력 필드

- h 56px, radius 12px, bg `--color-surface` + `1px solid var(--color-border)`. 값 16px/400, placeholder `--color-text-tertiary`. 좌측 24px 인라인 SVG 아이콘(검색/핀) 허용, 아이콘↔값 12px.
- focus: border `--color-accent` 2px(색만 바뀌고 두께는 1→2px, 160ms). 라벨은 필드 위 14px/500 `--color-text-sub`, 간격 8px.
- 주소/검색 입력은 이 프리셋의 핵심 — 화면 상단 sticky, 탭하면 전체화면 검색 시트로 확장.
- 에러: border `--color-danger`, 헬퍼 14px `--color-danger`. 흔들림 애니메이션 없음(기능적 — 색과 텍스트로만).

### 6.3 카드

- bg `--color-surface`, **radius 16px**, 패딩 16px, `--shadow-0`(그림자 없음), 경계는 `1px solid var(--color-border)`(라이트는 생략 가능, 다크는 필수).
- 부양 카드(지도 오버레이·드롭다운)는 bg `--color-surface-raised` + `--shadow-2`.
- 카드 안에 카드 금지(중첩 1단). 카드 제목 title-2 또는 label.

### 6.4 리스트 아이템

- min-height 64px, 상하 패딩 12px(좌우 화면 패딩 16px). 구조: [아이콘 40×40, 원형 bg `--color-surface` 또는 사각 썸네일 radius 8px] –12px– [주 텍스트 16px/500 + 보조 14px/400 `--color-text-sub`] – [우측 값: 요금 16px/700 mono tabular / 또는 셰브론 SVG].
- **행 사이 구분선 `1px solid var(--color-border)` 허용**(Jelly와 반대 — Asphalt는 기능적 밀도, 헤어라인이 정보다). 단 그룹 헤더 아래 첫 행·마지막 행은 선 생략.
- press: 행 전체 bg `--color-surface-pressed` 100ms + `scale(0.99)`.

```css
.list-item { display: flex; align-items: center; gap: 12px; min-height: 64px; padding: 12px 0;
  border-bottom: 1px solid var(--color-border); }
.list-item .amount { margin-left: auto; font-family: var(--font-mono);
  font-size: 16px; font-weight: 700; font-variant-numeric: tabular-nums; }
```

### 6.5 상단 네비/앱바

- h 56px, 좌 뒤로가기(히트 48×48, 24px 인라인 SVG stroke 2px), 중앙/좌 타이틀 20px/700(title-2), 우측 보조 액션 최대 1개.
- 배경 `--color-bg`, 하단 `1px solid var(--color-border)`(스크롤 시작 시 나타남) 또는 지도 위에서는 투명 + 뒤로가기만 흰 원형 pill 버튼(`--shadow-1`).
- **햄버거 메뉴 금지**(§10). 내비게이션은 하단 탭바.

### 6.6 하단 탭바 (모바일)

- h 56px + safe-area, 탭 3~5개. 각 탭: 24px 인라인 SVG(stroke 2px, 활성 시 fill) + caption(12px/500) 라벨, 상하 8px, 히트 48px 이상.
- 활성 탭 `--color-text`, 비활성 `--color-text-tertiary`. 색 포인트 아님 — 흑백으로 활성 표시(굵기/명도). 전환 시 아이콘 `opacity`만 160ms(스케일 애니메이션 없음).
- bg `--color-bg` + 상단 `1px solid var(--color-border)`.

### 6.7 모달 / 바텀시트

- 기본은 **바텀시트**: 하단 부착, radius 16px 16px 0 0, bg `--color-surface-raised`, `--shadow-3`, 상단 그랩바 32×4px `--color-border` radius pill(상단 중앙, 위 8px), 내부 패딩 16px, 제목 title-2. 지도 서비스의 차량 선택·경로 상세가 이 형태.
- 진입 `translateY(100%)→0` 240ms `--ease-decel` + 딤 페이드 160ms. CTA는 시트 하단 56px pill.
- 파괴적 확인 모달: 중앙, 폭 `calc(100% - 32px)`, radius 16px, 본문 16px, 버튼 2개 세로 스택(pill, danger 채움 + ghost) 각 h 56px, gap 8px. 세로 스택으로 오탭 방지.

### 6.8 토스트 / 스낵바

- 하단 CTA(또는 탭바) 위 12px, bg `--color-text`(라이트=검정) / `--color-surface-raised`(다크), 텍스트 16px/500 `--color-bg`(라이트=흰) / `--color-text`(다크), radius pill, 패딩 12px 20px, `--shadow-2`. 액션 링크는 우측 `--color-accent-text`.
- 진입 `translateY(8px)+opacity 0→1` 160ms `--ease-decel`, 4초 후 자동 소멸(160ms 페이드). 성공은 앞에 20px 체크 SVG `--color-success`(다크 토스트 위 8.40:1).

### 6.9 뱃지 / 칩

- 뱃지: h 24px, 패딩 4px 8px, radius pill, caption(12px/500). soft 배경 + 대응 텍스트 조합(`--color-success-soft`+success-soft-text, danger-soft, warning-soft, accent-soft). 순색 채움 뱃지는 상태 뱃지("도착"=success 채움+흰)만.
- 선택 칩(세그먼트 아님): h 40px(히트 48px), 패딩 8px 16px, radius pill, 기본 bg `--color-surface` + `1px solid var(--color-border)` 텍스트 16px/500 `--color-text-sub` → 선택 시 bg `--color-text`(검정) 텍스트 `--color-bg`(흰) 또는 accent-soft. press `scale(0.98)`.
- **세그먼트 토글**(시그니처): 트랙 radius 36px bg `--color-surface`, 인디케이터 pill bg `--color-bg` + `--shadow-1`, 활성 라벨 16px/500 `--color-text`, 이동 200ms `--ease-standard`.

### 6.10 지도 오버레이 카드 (컨셉 고유)

- 지도 풀블리드 위 하단 부착 카드: bg `--color-surface-raised`, radius 16px(상단만 또는 전체), `--shadow-3`, 좌우 12px 띄움, 패딩 16px. 상단 그랩바로 드래그 확장(peek→full).
- 안에 목적지/차량/ETA/요금 요약 + 하단 primary pill CTA. 지도는 `--color-map` 회색조 단색(채색 지도 금지 §10-A7).

### 6.11 빈 상태 (empty state)

- 세로 중앙 정렬: 48×48 인라인 SVG(단색 2톤: `--color-border` 면 + `--color-text` 선) → 16px → 제목 18px/700 → 4px → 설명 14px/400 `--color-text-sub` → 24px → secondary pill 버튼 h 48px.
- 카피는 §8 규칙: "아직 이용 기록이 없어요" + 다음 행동 1줄. 사과·경고 톤 금지.

## §7. 모션

**모션 성격 한 줄: "즉각적이고 절제됨 — 도구는 튀지 않는다. 100~240ms, 바운스·오버슈트 없음."** (Jelly의 스프링과 정반대)

**토큰:**

```css
--motion-instant: 100ms;  /* press/tap 반응 */
--motion-fast:    160ms;  /* hover·색 전환·작은 전환 */
--motion-base:    240ms;  /* 진입·시트·페이지 전환 */
--motion-slow:    400ms;  /* 지도 카메라·큰 전환 */
--ease-standard:  cubic-bezier(0.4, 0, 0.2, 1);  /* 기본(양방향) */
--ease-decel:     cubic-bezier(0, 0, 0.2, 1);    /* 진입 */
--ease-accel:     cubic-bezier(0.4, 0, 1, 1);    /* 퇴장 */
```

**패턴별 규칙:**

| 패턴 | 규칙 |
|---|---|
| press | `:active`에서 `scale(0.98)` 100ms `--ease-standard` + bg press 색. 떼면 같은 곡선으로 복귀(스프링 금지). 리스트 행은 0.99 |
| 진입(entrance) | `opacity 0→1` + `translateY(8px)→0`, 240ms `--ease-decel`. 이동 거리 8px 고정(과장 금지) |
| 리스트 스태거 | 항목당 30ms 지연, 최대 8개(이후 동시) |
| 페이지 전환 | 나가는 화면 fade-out 160ms `--ease-accel` → 들어오는 화면 진입 패턴. 전체 좌우 슬라이드 금지 |
| 바텀시트 | `translateY(100%)→0` 240ms `--ease-decel`, 딤 fade 160ms |
| 세그먼트 인디케이터 | 위치 이동 200ms `--ease-standard` |
| 지도 카메라/경로 | 지도 팬·줌 400ms `--ease-standard`. 경로선 draw는 `stroke-dashoffset` 400ms |
| 실시간 숫자(ETA/요금) | 값 변경 시 crossfade 160ms(카운트업 없음 — 실시간 데이터는 즉시 정확히) |

**`prefers-reduced-motion` 대응 필수** (tokens.css 전역 블록): transform 기반 전부 제거, opacity 120ms만 유지.

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 1ms !important;
    transition-duration: 120ms !important;
    transition-property: opacity !important;
  }
}
```

## §8. 보이스 & 톤 (마이크로카피)

- **간결한 해요체 + 기능적 지시.** 한 호흡(15자 내외), 사용자가 주어. Jelly처럼 귀엽지 않고, 격식체처럼 딱딱하지도 않은 **실서비스의 명료함**.
- 숫자·시각·거리가 문장의 중심("3분 후 도착", "12,400원", "1.2km"). 숫자는 천 단위 콤마, "원"은 붙여 쓴다.
- 이모지: **사용 안 함**(기능적/도시적 톤). 상태는 아이콘과 색으로 표현.
- 시스템 주어("시스템이", "요청이") 금지. 사용자·차량·경로가 주어.

| 상황 | Asphalt 카피 | 금지 예 |
|---|---|---|
| CTA (호출) | 지금 요청 | 확인, 제출하기 |
| CTA (다음) | 다음 | 계속 진행하기 |
| CTA (결제) | 12,400원 결제 | 결제를 진행합니다 |
| 완료 | 도착했어요 | 처리가 완료되었습니다 |
| 상태(진행) | 3분 후 도착 · 김기사님 오는 중 | 배차 처리 중입니다 |
| 에러 (위치) | 위치를 못 찾았어요. GPS를 켜고 다시 시도해 주세요 | 오류가 발생했습니다 |
| 에러 (결제) | 카드가 승인되지 않았어요. 다른 카드로 시도해 주세요 | 결제 실패 (E-402) |
| 빈 상태 | 아직 이용 기록이 없어요 | 데이터가 존재하지 않습니다 |
| 로딩 | 주변 차량을 찾는 중 | 로딩 중입니다 |
| 확인 다이얼로그 | 요청을 취소할까요? | 취소하시겠습니까? |
| 주의(요금) | 지금은 수요가 많아 요금이 올라요 | 할증이 적용되었습니다 |

- 에러는 항상 **[무슨 일인지 1문장] + [지금 할 수 있는 일 1문장]**. 에러 코드·기술 용어 노출 금지.
- 금지 표현: "실패하였습니다", "잘못된 요청입니다", 느낌표 2개 이상, 이모지, "~하십시오".

## §9. 레이아웃 레시피 — 데모 5화면 (가상 이동 서비스 "대시 Dash")

모든 화면 공통: 모바일 390px 단일 컬럼, 화면 패딩 16px, 데스크톱은 중앙 400px 프레임(§4).
하단 탭바(§6.6) 3탭: 이동 / 기록 / 계정. screen-2·3·4는 탭바 대신 지도 오버레이 카드 또는 하단 고정 CTA.
지도는 전부 `--color-map` 회색조 단색 + `--color-accent` 경로선(§10-A7).

### screen-1 홈 (지도 + 목적지 입력)

- 목적: 앱을 열면 "어디로 갈지"만 묻는다. 지도가 주인공.
- 구성: **풀블리드 지도**(`--color-map`, 현재 위치 검정 점 + 흰 링) → 상단 sticky 검색 입력(§6.2: "어디로 갈까요?" placeholder, 좌측 검색 아이콘, radius 12px, `--shadow-1`) → 지도 위 우하단 FAB(현재위치, 48px pill `--shadow-1`) → 하단 오버레이 카드(§6.10: "최근 목적지" 리스트 아이템 2~3개 — 핀 아이콘 + 장소명 16px/500 + 주소 14px sub + 우측 거리 mono). 오버레이 카드 상단 그랩바로 확장.
- 사용: 지도, 검색 입력, FAB, 오버레이 카드, 리스트 아이템, 탭바. 진입 시 리스트 스태거(30ms).

### screen-2 차량 선택 (옵션 + 요금·ETA)

- 목적: 목적지 확정 후 차량 등급/요금을 고른다. **바텀시트**가 지도 위에 뜬다.
- 구성: 지도(출발→도착 `--color-accent` 경로선 draw) → 상단 앱바(투명, 흰 원형 뒤로가기 pill) → 하단 바텀시트(§6.7, peek 상태): 그랩바 → 제목 title-2 "차량 선택" → 차량 옵션 리스트 3행(선택 시 행 bg `--color-surface` + `1px solid var(--color-text)`): [차량 아이콘 40px] 등급명 16px/500 + "3분 · 김기사" 14px sub / 우측 요금 **18px/700 mono** → 하단 primary pill CTA "12,400원으로 요청"(선택 요금 반영). 수요 많으면 요금 위 warning 뱃지 "요금 인상".
- 사용: 지도+경로선, 앱바, 바텀시트, 선택 리스트, 뱃지, primary CTA.

### screen-3 이동 중 (실시간 트래킹)

- 목적: "차가 어디 있고 언제 도착하는지" 한눈에. 실시간.
- 구성: 지도(차량 마커 검정 원 + 경로선, 카메라 400ms 팬) → 상단 ETA 배너(pill `--shadow-1`: **"3분 후 도착"** 18px/700 mono) → 하단 오버레이 카드(§6.10): 기사 행(아바타 48px pill + "김기사 · 12가 3456" 16px/500 + 별점 14px + 차종 14px sub) → 액션 pill 2개 가로(연락 secondary + 취소 ghost, gap 8px) → 진행 상태 텍스트 "목적지로 이동 중" 14px sub. ETA/차량 위치는 crossfade로 갱신(§7, 카운트업 없음).
- 사용: 지도+마커+경로, ETA 배너 pill, 오버레이 카드, secondary/ghost pill.

### screen-4 결제 · 영수증 (요금 상세)

- 목적: 도착 후 요금을 투명하게 보여주고 결제. 숫자 위계 최상.
- 구성: 앱바(타이틀 "결제") → 24px → 중앙 **총액 display-2(36px/700 mono)** "12,400원" → 8px → "대시 스탠다드 · 4.2km · 14분" 14px sub → 32px → 요금 상세 카드(§6.3: 리스트 4행, 각 라벨 16px sub + 값 16px mono 우측 — 기본요금/거리요금/시간요금/할증, 마지막 구분선 위 합계 16px/700) → 24px → 결제수단 리스트 아이템(카드 아이콘 + "**** 3456" + 우측 셰브론, 탭하면 변경 시트) → 하단 CTA "12,400원 결제". 성공 시 §6.8 성공 토스트 "결제됐어요".
- 사용: 앱바, display 총액, 상세 카드, 결제수단 리스트, primary CTA, 토스트.

### screen-5 이용 기록 (트립 히스토리)

- 목적: 지난 이동을 리스트로 훑는다. 밀도 있는 정보.
- 구성: 앱바(타이틀 "이용 기록") → 16px → 세그먼트 토글(§6.9: "전체 / 이번 달", radius 36px) → 24px → 월 그룹 반복: 날짜 헤더 caption `--color-text-sub`("7월") → 리스트 아이템(§6.4, 구분선 있음): 좌측 40px 미니 지도 썸네일(radius 8px, `--color-map`) + 목적지명 16px/500 + "7월 8일 · 대시 스탠다드" 14px sub / 우측 요금 16px/700 mono + 상태 뱃지(완료=success-soft / 취소=danger-soft) → 탭하면 영수증(screen-4)로. 빈 상태는 §6.11.
- 스크롤 시 앱바 하단 border 나타남. 그룹 진입 스태거.

## §10. 금지 규칙 (Anti-AI-look)

**공통 금지** (AI가 흔히 저지르는 실수 → 대신 할 것):
1. 보라→파랑 그라데이션 히어로 → Asphalt에 그라데이션은 없다. 단색(검정/흰/회색/포인트 1색)만.
2. 모든 카드에 동일 그림자 → 카드는 `--shadow-0` + border. 그림자는 떠 있는 것(시트·오버레이·플로팅 pill)에만.
3. 3열 아이콘+제목+설명 카드 반복 → 최대 2열(차량 옵션 등). 3열 이상 금지.
4. `border: 1px solid #eee` 남발 → border는 쓰되 **토큰**(`--color-border`)으로. 임의 hex 회색 금지.
5. 이모지를 아이콘 대신 사용 → 아이콘은 24px 인라인 SVG(stroke 2px)만. 이모지 전면 금지(§8).
6. 화면마다 다른 radius → §5 스케일만. 인터랙티브=999, 카드=16으로 고정.

**Asphalt 고유 금지** (A1~A9):
1. **A1 인터랙티브에 pill 아닌 radius 금지** → 버튼·칩·토글·FAB는 999px, 카드는 16px. 8/12px 라운드 버튼 0개. (검증: 버튼류에 `border-radius: 999px`(또는 `--radius-pill`) 외 값 금지)
2. **A2 유채색 면적 남용 금지** → 화면 픽셀의 색(비뉴트럴) 비중은 낮게. 순색 채움은 (1) primary CTA(검정, 무채색), (2) accent 채움 버튼·경로선·선택 표시, (3) 상태 뱃지에만. 카드·섹션 배경을 유채색으로 칠하지 않는다.
3. **A3 primary를 유채색으로 만들기 금지** → primary는 무조건 검정(라이트)/흰(다크). "브랜드 컬러 버튼"이라며 파란 primary를 만들면 이 프리셋이 아니다. 파랑은 accent(포인트)일 뿐.
4. **A4 채색 지도 금지** → 지도는 `--color-map` 회색조 단색 + 경로선 1색(accent)만. 구글맵풍 컬러 지도·위성 이미지 금지.
5. **A5 얇은/작은 헤딩 금지** → 헤딩(display·title)은 전부 700. 요금·ETA 같은 핵심 숫자를 body(16px)에 묻지 않는다 — display로 키운다(§10 J2형 위반).
6. **A6 비-mono 숫자로 실시간 데이터 표시 금지** → 요금·ETA·거리·시각은 `--font-mono` + tabular-nums. 실시간 갱신 시 폭이 흔들리면 위반.
7. **A7 지도 없는 이동 화면 금지 & 스프링 모션 금지** → 이동 컨텍스트 화면(1·2·3)에는 지도가 있어야 한다. 그리고 `cubic-bezier(...1.56...)` 류 오버슈트/바운스 이징 0개 — Asphalt는 절제된 `ease-standard`만.
8. **A8 햄버거 메뉴·드로어 금지** → 내비게이션은 하단 탭바 3~5개 + 화면 안 리스트로만.
9. **A9 한 화면 primary CTA 2개 이상 금지** → primary(검정/흰) pill은 화면당 1개. 보조는 secondary/ghost/accent로 강등. 하단 고정 CTA 영역엔 항상 하나의 주액션.

## §11. Tailwind v4 / React 매핑 (부록)

```css
/* app.css — tokens.css를 불러온 뒤 Tailwind 토큰으로 매핑 */
@import "tailwindcss";
@import "../presets/11-asphalt/tokens.css";

@theme inline {
  --color-bg: var(--color-bg);
  --color-surface: var(--color-surface);
  --color-surface-raised: var(--color-surface-raised);
  --color-text: var(--color-text);
  --color-text-sub: var(--color-text-sub);
  --color-primary: var(--color-primary);
  --color-primary-text: var(--color-primary-text);
  --color-accent: var(--color-accent);
  --color-accent-text: var(--color-accent-text);
  --color-danger: var(--color-danger);
  --color-success: var(--color-success);
  --color-border: var(--color-border);
  --radius-lg: var(--radius-lg);       /* 16px 카드 */
  --radius-tab: var(--radius-tab);     /* 36px 세그먼트 */
  --radius-full: var(--radius-pill);   /* 999px pill */
  --font-sans: var(--font-text);
  --font-mono: var(--font-mono);
  --ease-standard: var(--ease-standard);
}
```

```tsx
// primary CTA — pill + 절제된 press (h-14 = 56px, rounded-full = 999px)
export function CtaButton(props: React.ComponentProps<"button">) {
  return (
    <button
      className="h-14 w-full rounded-full bg-primary text-[18px] font-medium text-[color:var(--color-primary-text)]
                 transition-transform duration-100 ease-[cubic-bezier(0.4,0,0.2,1)] active:scale-[0.98]
                 disabled:bg-surface disabled:text-text-tertiary disabled:cursor-not-allowed"
      {...props}
    />
  );
}

// 요금 리스트 아이템 (mono tabular 숫자, 헤어라인 구분선)
export function FareItem({ icon, name, sub, fare }: FareItemProps) {
  return (
    <div className="flex min-h-16 items-center gap-3 border-b border-border py-3
                    transition-transform active:scale-[0.99]">
      <div className="grid size-10 place-items-center rounded-full bg-surface">{icon}</div>
      <div>
        <p className="text-[16px] font-medium text-text">{name}</p>
        <p className="text-[14px] text-text-sub">{sub}</p>
      </div>
      <p className="ml-auto font-mono text-[16px] font-bold tabular-nums text-text">
        {fare.toLocaleString()}원
      </p>
    </div>
  );
}
```

**StyleSeed 호환 메모:** tokens.css의 `--color-*` / `--radius-*` / `--motion-*` / `--ease-*`는 StyleSeed theme.css의 동명 슬롯에 1:1로 옮겨진다. 모션 시드는 "Snap" 계열(즉각·바운스 없음, `ease-standard`)에 대응 — Jelly의 "Spring"과 정반대 축. `--font-size-*` 10단계는 display/title/body/label/caption 슬롯에 매핑하고, mono 슬롯을 별도로 둔다(숫자 tabular).

## §12. 채점 루브릭

합격선: **verifiable 9항목 전부 통과(65점 만점 중 65점) + subjective 5항목 평균 4.0 이상**.
하나라도 미달이면 불합격 — loop-runner는 미달 항목만 고쳐 재채점한다.
판정 대상 파일 집합을 `$F`(html/css/tsx 글롭)로 표기한다.

### verifiable 항목 (기계 판정, 65점)

| # | 항목 | 배점 | 판정 방법 |
|---|---|---|---|
| V1 | 대비율: 실제 사용된 bg/text·surface/text·primary/primary-text 쌍 4.5:1 이상, accent 그래픽·경로선 3:1 이상 | 10 | 결과물 hex 추출 → WCAG 공식 `L=0.2126R'+0.7152G'+0.0722B'`(c'=c/12.92 if c≤0.03928 else ((c+0.055)/1.055)^2.4), `CR=(L1+0.05)/(L2+0.05)`로 계산해 §2.3 표와 대조. 토큰 무변경 사용 시 §2.3 표 인용으로 통과 |
| V2 | 스페이싱 스케일 외 값 0개 | 10 | `grep -rhoE '(margin\|padding\|gap\|inset)[a-z-]*:[^;]+' $F \| grep -oE '[0-9]+px' \| grep -vwE '(0\|4\|8\|12\|16\|20\|24\|32\|40\|48\|64)px'` → 출력 0줄 |
| V3 | 타입 스케일 외 font-size 0개 | 10 | `grep -rhoE 'font-size:\s*[0-9.]+(px\|rem\|em)' $F \| grep -vE ':\s*(12\|14\|16\|18\|20\|24\|32\|36\|52)px'` → 출력 0줄 (rem/em 사용 자체가 위반) |
| V4 | radius가 §5 스케일 값만 | 5 | `grep -rhoE 'border-radius:[^;]+' $F \| grep -oE '[0-9]+px' \| grep -vwE '(0\|8\|12\|16\|36\|999)px'` → 출력 0줄 (`--radius-pill` 등 var 참조는 통과) |
| V5 | shadow가 §5 표 4단계와 일치 | 5 | `grep -rhoE 'box-shadow:[^;]+' $F` 의 모든 값이 `var(--shadow-[0-3])` 참조이거나 tokens.css의 `--shadow-*` 정의 문자열과 일치 → 불일치 0건 |
| V6 | `prefers-reduced-motion` 대응 존재 | 5 | `grep -rl 'prefers-reduced-motion' $F \| wc -l` ≥ 1 |
| V7 | 외부 리소스 0 (CDN 폰트/스크립트/이미지) | 5 | `grep -rnE 'https?://[^"'"'"')( ]+\.(css\|js\|woff2?\|ttf\|png\|jpe?g\|webp\|svg)\|fonts\.googleapis\|cdn\.\|unpkg\|jsdelivr' $F` → 출력 0줄 |
| V8 | 절제된 press: scale(0.98) 존재 + 오버슈트 이징 0개 | 10 | `grep -rF 'scale(0.98)' $F \| wc -l` ≥ 1 **그리고** `grep -rE 'cubic-bezier\([^)]*1\.[0-9]+' $F \| wc -l` = 0 (1보다 큰 y값=바운스 금지) |
| V9 | 인터랙티브 pill + mono 숫자 + 테이블 금지 | 5 | `grep -ri '<table' $F \| wc -l` = 0 **그리고** `grep -rE 'tabular-nums\|--font-mono\|font-mono' $F \| wc -l` ≥ 1 **그리고** `grep -rE 'border-radius:\s*(999px\|var\(--radius-pill\))' $F \| wc -l` ≥ 1 |

### subjective 항목 (AI/사람 채점, 5점 척도 ×5항목 — 평균 4.0 이상 합격)

| # | 항목 | 1점 앵커 | 3점 앵커 | 5점 앵커 |
|---|---|---|---|---|
| S1 | §1 첫인상 부합 (흑백 지배·pill·큰 숫자) | 유채색 카드가 넓고 버튼이 둥근 사각이며 숫자가 본문에 묻힌다 | 흑백 위주지만 pill이 일부만 적용되거나 핵심 숫자 위계가 약하다 | 화면이 흑백+포인트1색으로 지배되고 인터랙티브는 전부 pill, 핵심 숫자가 display로 즉시 읽힌다 |
| S2 | §8 어조 준수 | "처리되었습니다"류 격식체 또는 에러 코드·이모지 노출 | 해요체지만 문장이 길거나 숫자 중심성이 약하다 | 전 카피가 간결한 해요체, 숫자가 문장 중심, 에러가 [상황+다음 행동], 이모지 0 |
| S3 | 모션 물성 (§7) | 모션 없음 또는 스프링/바운스 이징 사용 | press는 있으나 절제감이 약하거나 전환이 과장됐다 | 100~240ms 절제된 전환, press=scale(0.98) 즉시 복귀, 바운스 0, 실시간 숫자 crossfade |
| S4 | 지도·레이아웃 (§9 리듬) | 이동 화면에 지도가 없거나 채색 지도·그라데이션 | 지도는 있으나 회색조 규칙이 흐트러지거나 오버레이 위계가 약하다 | 회색조 지도 + 1색 경로선, 오버레이 카드 위계 명확, 헤어라인이 정보로 기능 |
| S5 | §10 정성 항목 (유채색 면적·CTA 수·primary 무채색) | primary가 유채색이거나 CTA 2개 이상 또는 유채색 면적 과다 | 금지 위반은 없으나 색 포인트가 과해 산만 | primary는 검정/흰, CTA 1개, 색은 경로선·선택·상태에만, 흑백이 지배적 |

**채점 절차:** verifiable은 판정 명령을 그대로 실행해 pass/fail 기록 → subjective는 5화면을 라이트/다크 각각 확인해 앵커와 대조, 1~5점 부여 → 합산. 4.0 미만 항목은 5점 앵커 조건을 수정 지시문으로 변환해 다음 반복에 넘긴다.
