---
number: 9
codename: Prism
inspired-by: Adobe Spectrum (spectrum.adobe.com) — 서술 참조만, 상표는 파일/클래스명에 사용하지 않음. 이 문서의 모든 수치는 독립 해석이며 공식 값이 아니다
mood: 크리에이티브 프로 툴. 뉴트럴 그레이 캔버스 위 절제된 UI, 정밀한 t-shirt 스케일, 파랑 accent, 다크가 기본인 작업 환경
best-for: 디자인/편집 데스크톱 툴, 크리에이티브 워크스페이스, 밀집 컨트롤 패널·툴바·트레이 중심 앱
variants: [a, b]
status: spec-draft
---

# 9 · Prism

## §1. 첫인상 요약

1. **캔버스가 주인공, UI는 도구다.** 화면 중앙은 작업물(캔버스)이 차지하고, 뉴트럴 그레이 크롬(툴 레일·툴바·속성 패널)이 그것을 감싼다. 색은 크롬이 아니라 작업물과 선택 상태에만 쓴다.
2. **정밀하고 밀집됐다.** 컨트롤 높이 32px, 리스트 행 32px, 폰트 14px가 기본. radius는 4~8px로 낮고, 간격은 2·4·8px 단위로 촘촘하다. 말랑함이 아니라 정확함이다.
3. **파랑 하나로 말한다.** accent 파랑(#3B63FB)은 선택·포커스·주 액션에만. 나머지 크롬은 무채색 그레이라 파랑이 어디를 가리키는지 즉시 읽힌다.
4. **다크가 자연스럽다.** 어두운 캔버스가 기본 작업 환경(라이트도 완비). 페이스트보드 → 패널 → 팝오버로 갈수록 밝기가 한 단계씩 오르는 elevation 위계.
5. **즉각적이고 조용한 모션.** 도구는 지체 없이 반응하고 표면은 짧게(130~300ms) 미끄러진다. 바운스·오버슈트·스케일 튐 없음.

## §2. 색

### 2.1 팔레트

시맨틱 토큰 전체 표 (a 변형 기준. b 변형은 §2.4 규칙으로 파생, 값은 tokens.css 참조):

| 토큰 | 역할 | a 라이트 | a 다크 |
|---|---|---|---|
| `--color-bg` | 앱 셸/툴바 바닥 | `#F4F4F4` | `#1E1E1E` |
| `--color-surface` | 패널·트레이·카드·인풋 | `#FFFFFF` | `#262626` |
| `--color-surface-raised` | 팝오버·모달 (그림자 분리) | `#FFFFFF` | `#303030` |
| `--color-surface-sunken` | 인풋 트랙·비활성 탭·눌린 well | `#E9E9E9` | `#161616` |
| `--color-canvas` | 아트보드 페이스트보드 (그래픽 배경, 텍스트 금지) | `#C9C9C9` | `#101010` |
| `--color-text` | 본문·주 텍스트 | `#1F1F1F` | `#F2F2F2` |
| `--color-text-sub` | 보조 라벨 | `#545454` | `#B8B8B8` |
| `--color-text-tertiary` | 캡션·플레이스홀더 (제약 有, §2.3) | `#707070` | `#8A8A8A` |
| `--color-border` | 장식용 구분선 (대비 요구 없음) | `#D5D5D5` | `#393939` |
| `--color-border-strong` | 컨트롤 외곽선 (UI 3:1) | `#7E7E7E` | `#7A7A7A` |
| `--color-primary` | 인터랙티브 채움·선택·포커스 | `#3B63FB` | `#3B63FB` |
| `--color-primary-text` | primary 위 텍스트 | `#FFFFFF` | `#FFFFFF` |
| `--color-primary-hover` | hover·press 채움 | `#274DEA` | `#274DEA` |
| `--color-primary-soft` | 선택 틴트·quiet 버튼 배경 | `#E6ECFF` | `#1B2A5C` |
| `--color-primary-soft-text` | soft 위 텍스트·링크 | `#1D3ECF` | `#9BB6FF` |
| `--color-accent` | 2차 그래픽·차트 2계열 (그래픽 전용) | `#0E8B80` | `#1FC7B6` |
| `--color-danger` | 파괴적 액션·에러 | `#D73220` | `#FF6756` |
| `--color-danger-soft` | 에러 배경 | `#FDECEA` | `#3A1D1A` |
| `--color-success` | 완료·유효 | `#05834E` | `#14BE70` |
| `--color-success-soft` | 완료 배경 | `#E6F5EC` | `#10281E` |
| `--color-warning` | 주의·비파괴 경고 | `#C24E00` | `#F37500` |
| `--color-warning-soft` | 경고 배경 | `#FBEDE2` | `#3A2410` |
| `--color-overlay` | 모달 뒤 스크림 | `rgba(20,20,20,0.55)` | `rgba(0,0,0,0.6)` |

### 2.2 라이트/다크

양쪽 모두 지원하되 **다크가 기본 작업 환경**이다. elevation은 밝기 단차로 표현한다:
페이스트보드(`#101010`) → 셸(`#1E1E1E`) → 패널(`#262626`) → 팝오버/모달(`#303030`)로 한 단계씩 밝아진다.
라이트는 반대로 셸(`#F4F4F4`)이 회색이고 패널(`#FFFFFF`)이 밝다 — "그레이 캔버스 위 흰 패널".
`--color-primary`(#3B63FB)와 hover(#274DEA)는 **라이트/다크 동일 값**으로 고정해 브랜드 인상을 유지하고,
다크에서 텍스트로 쓰는 파랑만 `--color-primary-soft-text`(#9BB6FF)로 밝힌다(#3B63FB는 다크 bg 대비 3.46:1로 본문 텍스트 불가, UI/그래픽만 가능).
danger/success/warning은 다크에서 밝은 톤으로 교체(#FF6756/#14BE70/#F37500)해 어두운 표면 위 가독을 확보한다.

### 2.3 대비 규칙 (실측 계산값 명기)

기준: **본문 4.5:1 이상, 대형 텍스트(24px+ 또는 18.7px+/700)·UI 그래픽 3:1 이상.**
아래 값은 WCAG 2.x 상대휘도 공식(`L=0.2126R'+0.7152G'+0.0722B'`, `CR=(L1+0.05)/(L2+0.05)`)으로 계산한 실제 대비율이다.

| 쌍 | a 라이트 | a 다크 | 판정 |
|---|---|---|---|
| bg / text | **14.99:1** | **14.89:1** | ✓ 본문 |
| surface / text | **16.48:1** | **13.52:1** | ✓ 본문 |
| surface-raised / text | **16.48:1** | **11.79:1** | ✓ 본문 |
| sunken / text | **13.58:1** | **16.16:1** | ✓ 본문 |
| bg / text-sub | **6.89:1** | **8.40:1** | ✓ 본문 |
| surface / text-sub | **7.57:1** | **7.63:1** | ✓ 본문 |
| bg / text-tertiary | **4.50:1** | **4.83:1** | ✓ 본문(bg 위 한정) |
| surface / text-tertiary | **4.95:1** | **4.38:1** | 다크 surface 4.38 → 아래 제약 |
| primary / primary-text | **4.81:1** | **4.81:1** | ✓ 본문 |
| primary-hover / primary-text | **6.30:1** | **6.30:1** | ✓ 본문 |
| primary-soft / primary-soft-text | **6.74:1** | **6.87:1** | ✓ 본문 |
| primary-soft-text(링크) / surface | **7.95:1** | **7.59:1** | ✓ 본문 |
| primary-soft-text(링크) / bg | **7.23:1** | **8.36:1** | ✓ 본문 |
| primary / surface (UI·선택) | **4.81:1** | **3.14:1** | ✓ UI(3:1) |
| primary / bg (UI·선택) | **4.38:1** | **3.46:1** | ✓ UI(3:1) |
| danger / surface | **4.81:1** | **5.28:1** | ✓ 본문(surface 위) |
| danger / bg | **4.37:1** | **5.82:1** | 라이트 bg 4.37 → 아래 제약 |
| danger / primary-text (흰 텍스트) | **4.81:1** | (다크 채움은 어두운 텍스트 사용) | ✓ 본문 |
| success / surface | **4.81:1** | **6.22:1** | ✓ 본문(surface 위) |
| warning / surface | **4.79:1** | **5.30:1** | ✓ 본문(surface 위) |
| accent / bg | **3.80:1** | **7.86:1** | ✓ 그래픽(3:1) — 본문 텍스트 금지 |
| border-strong / surface (UI) | **4.06:1** | **3.53:1** | ✓ UI(3:1) |
| border-strong / bg (UI) | **3.69:1** | **3.88:1** | ✓ UI(3:1) |

b 변형(바이올렛) 주요 쌍 실측: 라이트 primary(#6E3FE0)/흰 텍스트 **6.09:1**, hover(#5A28C4)/흰 텍스트 **8.28:1**,
soft(#EDE7FD)/soft-text(#5320B0) **7.93:1** — 다크 soft(#2A1D5C)/soft-text(#C3B0FF) **7.68:1**, soft-text/bg **8.71:1**. 전부 통과.

추가 제약 (위 표에서 도출):
- **primary 위 텍스트는 항상 `--color-primary-text`(흰색).** 임의 색 금지.
- **`--color-text-tertiary`는 다크 surface 위 본문 금지**(4.38:1). 라이트는 bg/surface 위 본문 허용, 다크는 bg 위(4.83:1)에서만 본문, surface 위에서는 18px+/700 대형 또는 아이콘/UI로만.
- **status 색을 본문 텍스트로 쓸 때: danger는 surface(흰 패널) 위에서만**(라이트 bg 4.37:1 미달). success/warning도 surface 위 사용을 기본으로 한다. 셸(bg) 위 status는 3:1 UI/아이콘 크기로만.
- **`--color-accent`는 그래픽 전용**(차트·데이터 2계열·아이콘·18px+/700 대형). 14px 본문 텍스트에 쓰면 위반.
- **다크에서 `--color-primary`(#3B63FB)는 본문 텍스트 금지**(bg 3.46:1). 채움·아이콘·선택 표시(UI 3:1)만. 파란 텍스트는 `--color-primary-soft-text`(#9BB6FF).
- 새 색 조합은 이 표의 해당 행을 재계산해 4.5/3.0을 넘겨야 채택한다. 미달이면 폐기.

### 2.4 팔레트 생성 규칙 (변형·랜덤용)

**고정 (변형이 건드릴 수 없는 것):**
- 뉴트럴 그레이 램프 전체: bg/surface/surface-raised/surface-sunken/canvas/text/text-sub/text-tertiary/border/border-strong/overlay의 정확한 hex 값. Prism의 정체성은 무채색 크롬이므로 뉴트럴은 절대 색을 입히지 않는다(warm/cool 그레이 금지).
- danger(hue 8~12)·success(hue 150~158)·warning(hue 24~30)의 의미와 값. 파괴적=danger, 완료=success, 비파괴 경고=warning 매핑.
- 토큰 구조: primary 5종 세트(primary/text/hover/soft/soft-text) + accent를 반드시 전부 제공.
- 채도·명도 범위: 라이트 primary는 HSL 기준 **S 65~95%, L 55~62%** (흰 텍스트 4.5:1 확보 구간),
  soft는 동일 hue에 **S 60~90%/L 94~97%**(라이트) / **S 45~60%/L 20~26%**(다크).

**자유 (변형이 바꾸는 것):**
- primary hue 0~360 자유. 단 danger(8~12)·success(150~158)·warning(24~30)와 ±15° 이내로 겹치면 시맨틱 색과 혼동되므로 그 구간은 피해서 다시 뽑는다.
- accent는 그래픽 2계열이므로 primary hue와 **±120~180°(보색 계열)**로 벌린다. Prism은 데이터/채널 구분을 위해 primary와 대비되는 hue를 쓴다(a 변형: 파랑 227° + 청록 174°).
- 다크 primary는 라이트 값을 그대로 유지하고 흰 텍스트를 얹는다(a·b 공통 방식). primary가 다크 bg 대비 3:1 미만이면 UI 전용으로 강등하고 파란 텍스트는 별도 soft-text(밝은 톤)로 뽑는다.

**랜덤 명명 `9-r<hue>`** (예: `9-r330` = hue 330 변형):
1. hue h를 뽑는다 → `primary = hsl(h, 88%, 60%)`에서 시작.
2. 흰 텍스트 대비 4.5:1 미달이면 L을 2%p씩 내려 **최초로 통과하는 값을 채택**(결정적 절차 — 같은 이름이면 항상 같은 색).
3. hover는 primary에서 L −7%p, soft는 동일 h에 S 80%/L 95%(라이트)·S 52%/L 23%(다크), soft-text는 h에 S 80%/L 40%(라이트)·S 100%/L 80%(다크)로 파생. accent는 h+150°에 S 85%/L 30%(라이트)·L 60%(다크).
4. §2.3 표의 전 행을 재계산해 하나라도 미달이면 그 hue는 폐기하고 다시 뽑는다. 통과한 hue만 `9-r<h>`로 명명.

## §3. 타이포그래피

**폰트 스택** (외부 로드 금지 — 시스템 폴백만. Adobe Clean 대신 OS UI 폰트 스택으로 "네이티브 툴" 인상):

```css
--font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui,
               'Helvetica Neue', Arial, 'Apple SD Gothic Neo', 'Noto Sans KR',
               'Malgun Gothic', sans-serif;
--font-family-mono: ui-monospace, 'SF Mono', 'Cascadia Code', 'Roboto Mono',
                    Menlo, Consolas, monospace;
```

**타입 스케일** — 이 8단계 외 font-size 사용 금지:

| 이름 | size | weight | line-height | letter-spacing | 용도 |
|---|---|---|---|---|---|
| display | 36px | 700 | 1.2 | -0.01em | 온보딩·빈 캔버스 큰 안내 (화면당 최대 1개) |
| heading-l | 28px | 700 | 1.25 | -0.01em | 모달 제목, 환경설정 페이지 제목 |
| heading-m | 22px | 700 | 1.3 | -0.01em | 섹션 헤더 |
| heading-s | 18px | 600 | 1.35 | 0 | 패널 그룹 제목, 다이얼로그 제목 |
| body-lg | 16px | 500 | 1.5 | 0 | 강조 본문, 리스트 주 텍스트 |
| body | 14px | 400 | 1.5 | 0 | 기본 UI 텍스트(base). 버튼 라벨은 이 크기에 600 |
| caption | 12px | 500 | 1.35 | 0 | 필드 라벨·값, 탭 라벨 |
| micro | 11px | 600 | 1.3 | 0.01em | 툴 라벨, 상태바, 최소 크기(이보다 작게 금지) |

**위계 규칙:**
- 기본 UI 텍스트는 **14px/400**(Adobe Clean 감성의 밀집 UI). 패널 라벨은 12px/500, 값은 12px/500 또는 14px/400.
- 한 화면(패널)에 heading 계열은 각 레벨 최대 1~2개. display는 화면당 1개(빈 상태·온보딩 전용).
- **수치 값(좌표·치수·%·색상 hex·타임코드)은 반드시 `font-variant-numeric: tabular-nums`**. 필드 값은 mono 또는 tabular-nums로 자릿수 정렬.
- 사용 weight는 **400/500/600/700의 4종만**. 300 이하(저대비)·800 이상(과대) 금지.
- 라벨은 대문자 강제(`text-transform: uppercase`) 금지 — Prism은 sentence-case 라벨(예: "Opacity", "불투명도").

**금지:** 임의 font-size 사용 금지 — 위 스케일 8값만. rem/em 단위도 스케일 이탈로 간주(§12 V3).

## §4. 간격 · 레이아웃

**스페이싱 스케일** — 이 값 외 margin/padding/gap 사용 금지 (0 제외):

```
2  4  6  8  12  16  20  24  32  40  48  64  (px)
```

작은 값(2·4·6·8)은 컨트롤 내부·아이콘 간격에, 큰 값(24·32·48)은 패널 그룹·모달 여백에 쓴다.

| 항목 | 값 |
|---|---|
| 모바일 화면 좌우 패딩 | 16px |
| 패널 내부 패딩 | 12px |
| 패널 내 그룹(row) 간 간격 | 8px, 그룹 섹션 간 24px |
| 라벨↔컨트롤 | 4px, 아이콘↔라벨 6px |
| 데스크톱 좌측 툴 레일 폭 | 48px |
| 데스크톱 우측 속성 패널 폭 | 264px |
| 상단 메뉴바/앱바 높이 | 48px |
| 컨텍스트 툴바 높이 | 48px |
| 하단 상태바 높이 | 24px |
| 모바일 하단 탭바 | 48px + `env(safe-area-inset-bottom)` |
| 리스트 행 min-height | 32px(데스크톱 밀집) / 44px(모바일 터치) |
| 터치 타깃 | 최소 44×44px (밀집 UI라도 모바일 히트 영역 확보) |

**컨테이너·그리드:**
- **데스크톱(1024px+): 3존 레이아웃** — `[좌 툴 레일 48px] [중앙 캔버스 flex] [우 속성 패널 264px]` + 상단 메뉴바 48px + 하단 상태바 24px. 패널은 `--color-surface`, 사이는 1px `--color-border`로 분리(그림자 없음).
- **모바일(390px): 캔버스 전체 + 하단 탭바**, 속성/에셋은 바텀 트레이(§6.7)로 승격. 좌측 레일은 하단 탭바로, 우측 패널은 "속성" 트레이로 접힌다.
- 태블릿(768~1023px): 좌 레일 + 캔버스, 우 패널은 오버레이 드로어(캔버스 위에 떠서 열림).
- 컨트롤은 8px 그리드에 정렬. 폼 필드는 라벨-값 2열(라벨 좌측 고정폭 96px + 값 flex) 또는 라벨 상단 스택.

## §5. 형태 (Shape)

**radius 스케일** — 이 값 외 border-radius 금지 (0=날카로운 캔버스/구분면 허용):

| 토큰 | 값 | 적용처 |
|---|---|---|
| `--radius-sm` | 4px | 인풋, 스와치, 작은 버튼, 태그, 체크박스 |
| `--radius-md` | 6px | 기본 버튼, 셀렉트, 리스트 아이템, 툴 버튼 |
| `--radius-lg` | 8px | 패널, 팝오버, 카드, 툴바 그룹 |
| `--radius-xl` | 16px | 모달, 바텀 트레이, 온보딩 카드 |
| `--radius-full` | 999px | 아바타, 토글 노브, 컬러 휠, 라디오 |

- 인터랙티브 요소의 radius는 **4~8px로 낮게**. 필 버튼(999px 가로 버튼) 금지 — full은 원형 요소(토글/아바타/스와치)에만.
- **border를 적극적으로 쓴다.** Jelly와 반대로 Prism은 컨트롤·패널을 1px 선으로 명확히 구획한다:
  - 컨트롤 외곽선 `1px solid var(--color-border-strong)`(인풋·셀렉트·quiet 버튼).
  - 패널 분리선·리스트 그룹 구분 `1px solid var(--color-border)`.
  - focus는 `--focus-ring`(2px 갭 + 2px primary 링, box-shadow).

**shadow/elevation 단계** — 그림자는 **떠 있는 것에만**. 도킹된 패널은 그림자 없이 bg 단차+1px 보더로 분리:

| 토큰 | 라이트 값 | 다크 값 | 용도 |
|---|---|---|---|
| `--shadow-0` | `none` | `none` | 도킹 패널·툴바·카드 (elevation은 색 단차로) |
| `--shadow-1` | `0 1px 4px rgba(0,0,0,.12), 0 4px 12px rgba(0,0,0,.10)` | `0 1px 4px rgba(0,0,0,.40), 0 4px 12px rgba(0,0,0,.36)` | 팝오버·드롭다운·툴팁 |
| `--shadow-2` | `0 8px 32px rgba(0,0,0,.20)` | `0 8px 32px rgba(0,0,0,.55)` | 모달·바텀 트레이 |

## §6. 핵심 컴포넌트 규칙

공통 상호작용: 모든 인터랙티브 요소는 hover/press에서 **배경·보더 색만** 전환(80~130ms, `--ease-in-out`). **scale 변형·바운스 금지**(§7·§10 P2). focus-visible는 `--focus-ring`.

### 6.1 버튼 (primary / secondary / quiet / negative)

- **primary(accent, "cta" 성격)**: h 32px(기본)/40px(강조)/48px(모바일), radius 6px, bg `--color-primary`, 라벨 14px/600 `--color-primary-text`, 좌우 패딩 16px. hover bg `--color-primary-hover`.
- **secondary(outline)**: 동일 치수, bg `--color-surface`, 1px `--color-border-strong`, 라벨 14px/600 `--color-text`. hover bg `--color-surface-sunken`.
- **quiet(텍스트)**: bg 투명, 라벨 14px/600 `--color-primary-soft-text`, h 32px. 보더 없음, hover bg `--color-primary-soft`.
- **negative**: bg `--color-danger`, 라벨 `--color-primary-text`. 파괴적 확인 전용.
- 상태: hover(위) / press bg 한 단계 더 어둡게(`filter: brightness(0.94)`) / disabled `opacity: 0.4; pointer-events: none` / focus-visible `--focus-ring`.

```css
.btn-primary { height: 32px; padding: 0 16px; border: 0; border-radius: var(--radius-md);
  background: var(--color-primary); color: var(--color-primary-text);
  font-size: 14px; font-weight: 600;
  transition: background var(--motion-micro) var(--ease-in-out); }
.btn-primary:hover { background: var(--color-primary-hover); }
.btn-primary:active { filter: brightness(0.94); }
.btn-primary:focus-visible { outline: 0; box-shadow: var(--focus-ring); }
.btn-primary:disabled { opacity: 0.4; pointer-events: none; }
```

### 6.2 입력 필드 (text field / number stepper)

- h 32px(기본)/40px(모바일), radius 4px, bg `--color-surface`, 1px `--color-border-strong`, 값 14px/400, 좌우 패딩 8px. focus 시 보더 `--color-primary` + `--focus-ring`(150ms).
- 라벨은 필드 위 12px/500 `--color-text-sub`(간격 4px) 또는 좌측 96px 고정폭.
- **number stepper**(치수·좌표·% 입력): 우측에 위/아래 캐럿 16px, 값은 `tabular-nums`. 드래그로 스크럽 가능(라벨을 좌우 드래그해 증감) — 크리에이티브 툴 관용.
- 에러: 보더 `--color-danger`, 헬퍼 텍스트 12px `--color-danger`(surface 위). 흔들림 애니메이션 금지(§10 P2).

### 6.3 패널 · 카드

- **패널**(도킹): bg `--color-surface`, radius 0(엣지 도킹) 또는 8px(플로팅), `--shadow-0`, 1px `--color-border`로 이웃과 분리. 헤더 h 32px(제목 12px/600 대문자 아님 + 접기 캐럿 + 우측 오버플로 메뉴).
- **카드**(에셋·프리셋): bg `--color-surface`, radius 8px, 1px `--color-border`, 내부 패딩 12px. 그림자 없음. 선택 시 2px `--color-primary` 보더 + `--color-primary-soft` 살짝.
- 패널 안 그룹은 24px 간격 섹션 + 8px row 간격. 카드 중첩 금지.

### 6.4 리스트 아이템 (레이어·에셋·설정 행)

- min-height 32px(데스크톱)/44px(모바일), 좌우 패딩 8px. 구조: [아이콘/썸네일 16~24px] –6px– [주 텍스트 14px/400] – [우측 메타 12px/500 `--color-text-sub` 또는 컨트롤].
- 행 사이 구분선 없이 hover bg `--color-surface-sunken`로 구분. 선택 행 bg `--color-primary-soft` + 좌측 2px `--color-primary` 인디케이터.
- 값(수치)은 `tabular-nums` 우측 정렬. 밀집 리스트 허용(테이블성 데이터 OK — Jelly와 반대).

```css
.list-item { display: flex; align-items: center; gap: 6px; min-height: 32px; padding: 0 8px;
  border-radius: var(--radius-md); font-size: 14px;
  transition: background var(--motion-micro) var(--ease-in-out); }
.list-item:hover { background: var(--color-surface-sunken); }
.list-item[aria-selected="true"] { background: var(--color-primary-soft);
  box-shadow: inset 2px 0 0 var(--color-primary); }
.list-item .meta { margin-left: auto; font-size: 12px; font-variant-numeric: tabular-nums;
  color: var(--color-text-sub); }
```

### 6.5 상단 메뉴바 / 툴바

- **메뉴바** h 48px, bg `--color-surface`, 하단 1px `--color-border`. 좌: 앱 아이콘 + 메뉴(파일/편집/보기, 각 14px). 중앙: 문서명 14px/500 + 저장 상태 dot. 우: 공유/내보내기 버튼.
- **컨텍스트 툴바** h 48px: 현재 도구의 옵션(정렬·크기·색 스와치 등)을 아이콘 버튼 32px 정사각(radius 6px)으로 나열, 그룹 사이 8px + 1px 세로 구분선.
- **좌측 툴 레일** 폭 48px: 도구 아이콘 버튼 32px 정사각 세로 스택. 활성 도구 bg `--color-primary-soft` + 아이콘 `--color-primary`.

### 6.6 하단 탭바 (모바일) / 상태바 (데스크톱)

- **모바일 탭바** h 48px + safe-area, 탭 4~5개: 20px 라인 아이콘 + micro(11px/600) 라벨. 활성 `--color-primary`, 비활성 `--color-text-sub`. bg `--color-surface` + 상단 1px `--color-border`.
- **데스크톱 상태바** h 24px, bg `--color-bg`, 상단 1px `--color-border`: 좌측 줌 레벨(%, tabular-nums) + 캔버스 크기, 우측 커서 좌표 X/Y(tabular-nums), 11px/500 `--color-text-sub`.

### 6.7 모달 / 바텀 트레이 / 팝오버

- **팝오버**(색 선택기·드롭다운·컨텍스트 메뉴): bg `--color-surface-raised`, radius 8px, `--shadow-1`, 1px `--color-border`, 내부 패딩 8px. 트리거에 앵커되어 나타남(위치 이동 없이 opacity+2px 슬라이드 130ms).
- **모달**(내보내기·환경설정): 중앙, 폭 최대 560px, radius 16px, bg `--color-surface-raised`, `--shadow-2`, `--color-overlay` 스크림. 헤더(heading-s 18px + 닫기 X 24px) / 본문 / 푸터(우측 정렬 secondary+primary 버튼, gap 8px). 진입 opacity 0→1 190ms(스크림 130ms).
- **바텀 트레이**(모바일 속성/에셋): 하단 부착, radius 16px 16px 0 0, bg `--color-surface-raised`, `--shadow-2`, 상단 그랩바 32×4px `--color-border-strong` radius full. 진입 `translateY(100%)→0` 300ms `--ease-out`.

### 6.8 토스트 / 인라인 알림

- **토스트**: 하단 중앙(모바일)/우하단(데스크톱), bg `--color-surface-raised`, 1px `--color-border`, radius 8px, `--shadow-1`, 텍스트 14px/500 `--color-text`, 좌측 상태 아이콘 20px(success/danger/warning 색). 진입 opacity+4px 슬라이드 190ms, 4초 후 소멸.
- **인라인 알림(배너)**: 패널 상단 폭 꽉 참, bg `--color-*-soft`, 좌측 4px 색 바 + 아이콘 + 12px 텍스트. 정보성=`primary-soft`, 경고=`warning-soft`, 에러=`danger-soft`.

### 6.9 뱃지 / 칩 / 스와치 / 토글

- **뱃지**: h 20px, 패딩 2px 6px, radius 4px, micro(11px/600). soft 배경+대응 텍스트 조합만. 순색 배경 금지.
- **칩(필터·선택)**: h 24px, 패딩 4px 8px, radius 4px, 12px/500. 선택 시 bg `--color-primary-soft` + 텍스트 `--color-primary-soft-text` + 1px `--color-primary`.
- **컬러 스와치**: 정사각 20px 또는 원형(radius full), 1px `--color-border` 테두리(밝은 색 가시성). 선택 시 2px `--color-primary` 링.
- **토글 스위치**: 트랙 28×16px radius full, off bg `--color-border-strong` / on bg `--color-primary`, 노브 12px 원형 흰색, 이동 130ms `--ease-in-out`.

### 6.10 빈 상태 (empty state)

- 세로 중앙 정렬: 48px 라인 아이콘(`--color-text-tertiary`) → 12px → 제목 heading-s(18px/600) → 4px → 설명 14px/400 `--color-text-sub`(최대 2줄) → 16px → primary 버튼 h 32px.
- 카피는 §8 규칙: "레이어가 없어요. 도형을 추가해 시작하세요" 같이 상태+다음 행동. 사과 톤 금지. 캔버스 빈 상태는 중앙에 얇은 안내만.

## §7. 모션

**모션 성격 한 줄: "즉각적이고 절제됨 — 도구는 지체 없이 반응하고 표면은 짧게 미끄러진다. 바운스·오버슈트·스케일 튐 없음."**

**토큰:**

```css
--motion-micro: 80ms;   /* hover·press 상태 색 전환 */
--motion-fast: 130ms;   /* 탭·토글·아코디언·팝오버 */
--motion-base: 190ms;   /* 패널·모달 진입 */
--motion-slow: 300ms;   /* 바텀 트레이·큰 표면 슬라이드 */

--ease-in-out: cubic-bezier(0.45, 0, 0.40, 1); /* 기본 — 위치/표면 이동 */
--ease-out: cubic-bezier(0, 0, 0.40, 1);       /* 진입 */
--ease-in: cubic-bezier(0.50, 0, 1, 1);        /* 퇴장 */
```

**패턴별 규칙:**

| 패턴 | 규칙 |
|---|---|
| hover/press | 배경·보더 **색만** 전환 80ms `--ease-in-out`. press는 `brightness(0.94)`. transform/scale 금지 |
| 팝오버·드롭다운 | opacity 0→1 + `translateY(2px)→0`, 130ms `--ease-out`. 앵커 고정 |
| 모달 | 스크림 fade 130ms → 본문 opacity 0→1 190ms `--ease-out`. 위치 이동·확대 없음 |
| 바텀 트레이 | `translateY(100%)→0` 300ms `--ease-out`, 스크림 130ms |
| 탭 전환 | 활성 밑줄 2px가 `translateX`로 130ms `--ease-in-out` 미끄러짐. 콘텐츠는 즉시 교체 |
| 아코디언·패널 접기 | height/opacity 130ms `--ease-in-out` |
| 드래그(레이어·핸들) | 실시간 추적, 이징 없음(1:1). 놓으면 스냅은 즉시 |
| 값 스크럽(stepper) | 즉시 반영, 애니메이션 없음 |

**금지:** 스프링/바운스 easing(오버슈트 계수 > 1), scale 진입, 전체 화면 좌우 슬라이드, 카운트업·타이핑 애니메이션.

**`prefers-reduced-motion` 대응 필수** (tokens.css 전역 블록): transform/슬라이드 제거, opacity·색 전환 80ms만 유지.

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 1ms !important;
    transition-duration: 80ms !important;
    transition-property: opacity, background-color, border-color, color, box-shadow !important;
  }
}
```

## §8. 보이스 & 톤 (마이크로카피)

- **간결한 도구 언어.** 명령형 동사 + 대상. 존댓말은 해요체로 부드럽게, 그러나 짧고 기능적으로.
- 라벨은 명사/명사구("불투명도", "내보내기 형식"), 액션은 동사("추가", "복제", "내보내기"). 불필요한 조사·감탄사 제거.
- 이모지 사용 금지(전 화면). 아이콘은 20px/16px 라인 아이콘(stroke 1.5~2px).
- 수치는 단위 붙여 표기("100%", "1920×1080px", "24pt"). 좌표·치수는 tabular-nums.

| 상황 | Prism 카피 | 금지 예 |
|---|---|---|
| 주 액션 (내보내기) | 내보내기 | 확인, 제출, OK |
| 보조 액션 (취소) | 취소 | 닫기, 아니요 |
| 파괴적 확인 | 레이어 3개를 삭제할까요? 되돌릴 수 없어요 | 정말 삭제하시겠습니까? |
| 완료 토스트 | PNG로 내보냈어요 | 내보내기가 완료되었습니다 |
| 에러 (파일 형식) | 이 형식은 열 수 없어요. PNG·SVG·PDF를 지원해요 | 오류: 지원하지 않는 파일 |
| 빈 상태 (레이어) | 레이어가 없어요. 도형을 추가해 시작하세요 | 데이터가 없습니다 |
| 로딩 | 렌더링 중… | 처리 중입니다. 잠시만 기다려 주십시오 |
| 저장 상태 | 저장됨 · 방금 / 저장 안 됨 | — |
| 툴팁 | 정렬 (Cmd+Shift+A) | 이 버튼을 누르면 정렬됩니다 |

- 에러는 **[무슨 일인지 1문장] + [지금 할 수 있는 일/지원 범위 1문장]** 구조. 에러 코드는 상세 영역(접힌 "자세히")에만.
- 단축키를 툴팁에 병기(크리에이티브 툴 관용). 금지 표현: "실패하였습니다", "~하십시오", 느낌표 남발, 사과 반복.

## §9. 레이아웃 레시피 — 데모 5화면 (가상 디자인 툴 "Prism Studio")

모든 화면 공통: 데스크톱 3존(메뉴바 48 / 좌 레일 48 · 캔버스 · 우 패널 264 / 상태바 24), 모바일은 캔버스+하단 탭바+바텀 트레이(§4). 기본 테마는 다크.

### screen-1 캔버스 + 패널 (에디터 홈)

- 목적: 작업물 중심의 3존 에디터 첫인상. 캔버스가 대부분을 차지하고 크롬은 조용히 감싼다.
- 구성: 상단 메뉴바(§6.5: 좌 앱 아이콘+파일/편집/보기, 중앙 "무제-1 · 저장됨", 우 공유·내보내기 primary) → 좌측 툴 레일(§6.5: 선택·도형·펜·텍스트·손 도구 아이콘 8개, 활성 도구 하이라이트) → 중앙 캔버스(`--color-canvas` 페이스트보드 위 흰 아트보드 1개 + 선택된 사각형에 2px `--color-primary` 핸들 8개) → 우측 속성 패널(레이어 리스트 §6.4 5행 + "정렬" 섹션 stepper X/Y/W/H + "모양" 섹션 채움 스와치·불투명도 슬라이더) → 하단 상태바(줌 100% · 1920×1080 · X 240 Y 160).
- 사용 컴포넌트: 메뉴바, 툴 레일, 리스트 아이템, number stepper, 스와치, 토글, 상태바.

### screen-2 에셋 라이브러리 (그리드 브라우저)

- 목적: 컴포넌트·이미지·아이콘을 훑고 캔버스로 드래그.
- 구성: 좌측 카테고리 트리(컴포넌트/아이콘/이미지/색상, §6.4 리스트) → 상단 필터 바(검색 인풋 + 정렬 셀렉트 + 뷰 토글) → 중앙 에셋 그리드(카드 §6.3, 4~6열, 각 썸네일 + 이름 caption + 태그 뱃지, 선택 시 2px primary 보더) → 우측 미리보기 패널(선택 에셋 큰 미리보기 + 메타데이터 리스트 + "삽입" primary 버튼). 모바일: 2열 그리드 + 하단 트레이 미리보기.
- 사용 컴포넌트: 카드 그리드, 칩/필터, 셀렉트, 뱃지, 검색 인풋.

### screen-3 속성 편집 (인스펙터 집중)

- 목적: 선택 객체의 모든 속성을 밀집 패널에서 정밀 조정.
- 구성: 캔버스에 텍스트 객체 선택 상태 → 우측 속성 패널 확장(폭 264px): "텍스트" 섹션(폰트 셀렉트 + 크기 stepper + 정렬 세그먼트) / "레이아웃" 섹션(X/Y/W/H stepper 2열 + 회전 stepper) / "모양" 섹션(채움 스와치+불투명도, 선 색+두께 stepper, 그림자 토글+수치) / "효과" 아코디언(블러·노이즈). 각 섹션은 접기 헤더 §6.3. 값은 전부 tabular-nums.
- 사용 컴포넌트: 셀렉트, number stepper, 세그먼트 컨트롤, 스와치, 슬라이더, 토글, 아코디언.

### screen-4 내보내기 모달 (export dialog)

- 목적: 형식·배율·범위를 정하고 내보내기. 확인은 한 번에 명확하게.
- 구성: `--color-overlay` 스크림 + 중앙 모달(폭 560px, radius 16px, §6.7): 헤더("내보내기" heading-s + 닫기 X) → 본문(좌: 미리보기 이미지 + 파일 크기 추정 / 우: "형식" 세그먼트[PNG·SVG·PDF·JPG], "배율" 칩[1×·2×·3×], "범위" 라디오[아트보드 전체·선택 항목], 파일명 인풋) → 푸터(우측 정렬: "취소" secondary + "내보내기" primary). 내보내기 후 성공 토스트 "PNG로 내보냈어요".
- 사용 컴포넌트: 모달, 세그먼트, 칩, 라디오, 인풋, 버튼, 토스트.

### screen-5 환경설정 (preferences)

- 목적: 앱 전역 설정. 조용하고 밀집된 설정 페이지.
- 구성: 좌측 설정 카테고리 내비(일반·모양·단축키·성능·계정, §6.4 리스트, 선택 행 하이라이트) → 우측 설정 폼(각 항목 라벨 좌측 96px + 컨트롤 우측): "모양" 카테고리 예 — 테마 세그먼트[라이트·다크·시스템], accent 색상 스와치 행(variant a/b 선택), UI 밀도 셀렉트, 캔버스 배경 스와치, 그리드 표시 토글, 자동 저장 토글+간격 stepper. 상단 검색 인풋으로 설정 필터. 하단 "기본값으로 재설정" quiet 버튼.
- 사용 컴포넌트: 리스트 내비, 세그먼트, 스와치, 셀렉트, 토글, stepper, 검색 인풋.

## §10. 금지 규칙 (Anti-AI-look)

**공통 금지** (AI가 흔히 저지르는 실수 → 대신 할 것):
1. 보라→파랑 그라데이션 히어로 → Prism 크롬에 그라데이션 없음. 크롬은 무채색 그레이 단색, 색은 선택·accent·상태·스와치에만.
2. 모든 카드에 동일 그림자 → 도킹 패널·카드는 `--shadow-0`. 그림자는 떠 있는 것(팝오버·모달·트레이)에만.
3. 3열 아이콘+제목+설명 마케팅 카드 반복 → Prism은 랜딩이 아니라 도구다. 에셋 그리드(§9 screen-2)의 균일 카드만 허용.
4. `border: 1px solid #eee` 남발 → 보더는 의미 있게(컨트롤 외곽선 `border-strong`, 패널 분리 `border`). 색은 토큰만.
5. 이모지를 아이콘 대신 사용 → 20px/16px 라인 아이콘(stroke 1.5~2px)만. 이모지 전면 금지(§8).
6. 화면마다 다른 radius → §5 스케일 5값만. 같은 컴포넌트는 항상 같은 radius.

**Prism 고유 금지** (P1~P8):
1. **P1 크롬에 색 칠하기 금지** → 툴바·패널·메뉴바 배경은 뉴트럴 그레이만. 색(파랑/청록/상태색)은 선택 표시·accent·스와치·아이콘 상태에만. 색 면적이 크롬을 지배하면 실패.
2. **P2 말랑한 스프링/바운스 모션 금지** → press에 `scale(0.97)`·오버슈트 easing 금지. Prism 모션은 색 전환 80ms + 짧은 슬라이드(§7). 크리에이티브 툴은 지체 없이 반응한다.
3. **P3 큰 radius·필 버튼 금지** → 가로 버튼에 radius 999px 금지. 컨트롤은 4~8px. full은 원형 요소(토글·아바타·스와치)만.
4. **P4 모바일 화면을 그대로 늘린 데스크톱 금지** → 데스크톱은 반드시 3존(레일·캔버스·패널). 단일 컬럼 중앙 정렬 랜딩 레이아웃으로 도구를 만들지 않는다.
5. **P5 도킹 패널에 그림자 금지** → 나란한 패널은 1px 보더 + bg 단차로 분리. 여러 패널에 drop-shadow를 겹쳐 "카드 더미"처럼 만들지 않는다.
6. **P6 넓은 여백·큰 폰트로 성기게 만들기 금지** → Prism은 밀집 UI다. 기본 14px, 컨트롤 32px, 간격 8px. 핀테크식 40px+ 여백·36px 본문 금지(display는 빈 상태/온보딩만).
7. **P7 수치 필드에 proportional 폰트 금지** → 좌표·치수·%·hex는 `tabular-nums`(또는 mono). 자릿수가 흔들리면 위반.
8. **P8 대문자 강제 라벨·마케팅 카피 금지** → `text-transform: uppercase` 라벨, "당신의 창의력을 펼치세요" 류 감성 카피 금지. 기능적 명사/동사 라벨(§8)만.

## §11. Tailwind v4 / React 매핑 (부록)

```css
/* app.css — tokens.css를 불러온 뒤 Tailwind 토큰으로 매핑 */
@import "tailwindcss";
@import "../presets/9-prism/tokens.css";

@theme inline {
  --color-bg: var(--color-bg);
  --color-surface: var(--color-surface);
  --color-surface-raised: var(--color-surface-raised);
  --color-surface-sunken: var(--color-surface-sunken);
  --color-text: var(--color-text);
  --color-text-sub: var(--color-text-sub);
  --color-primary: var(--color-primary);
  --color-primary-soft: var(--color-primary-soft);
  --color-accent: var(--color-accent);
  --color-danger: var(--color-danger);
  --color-success: var(--color-success);
  --color-warning: var(--color-warning);
  --color-border: var(--color-border);
  --color-border-strong: var(--color-border-strong);
  --radius-sm: var(--radius-sm);
  --radius-md: var(--radius-md);
  --radius-lg: var(--radius-lg);
  --radius-xl: var(--radius-xl);
  --font-sans: var(--font-family);
  --font-mono: var(--font-family-mono);
  --ease-in-out: var(--ease-in-out);
  --ease-out: var(--ease-out);
}
```

```tsx
// 툴바 아이콘 버튼 — 색 전환만, 스케일 없음 (h-8 = 32px, rounded-md = 6px)
export function ToolButton({ active, ...props }: { active?: boolean } & React.ComponentProps<"button">) {
  return (
    <button
      aria-pressed={active}
      className={`grid size-8 place-items-center rounded-md
                  transition-colors duration-[80ms] ease-in-out
                  ${active ? "bg-primary-soft text-primary"
                           : "text-text-sub hover:bg-surface-sunken"}
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary`}
      {...props}
    />
  );
}

// 수치 입력 필드 (number stepper) — tabular-nums 필수
export function NumberField({ label, value, unit }: { label: string; value: number; unit?: string }) {
  return (
    <label className="flex items-center gap-1.5 text-[12px] text-text-sub">
      <span className="w-24 shrink-0">{label}</span>
      <span className="flex h-8 flex-1 items-center rounded-sm border border-border-strong
                       bg-surface px-2 text-[14px] text-text tabular-nums focus-within:border-primary">
        {value.toLocaleString()}{unit}
      </span>
    </label>
  );
}
```

**StyleSeed 호환 메모:** tokens.css의 `--color-*` / `--radius-*` / `--motion-*` / `--ease-*`는
StyleSeed theme.css의 동명 슬롯에 1:1로 옮겨진다. 모션 시드는 "Snap"(즉각 반응, 오버슈트 없음) 계열에 대응하며 "Spring" 시드는 금지(§10 P2).
`--font-size-*` 8단계는 StyleSeed type scale의 display/heading/body/caption 슬롯에 순서대로 매핑한다.

## §12. 채점 루브릭

합격선: **verifiable 9항목 전부 통과(65점 만점 중 65점) + subjective 5항목 평균 4.0 이상**.
하나라도 미달이면 불합격 — loop-runner는 미달 항목만 고쳐 재채점한다.
판정 대상 파일 집합을 `$F`(html/css/tsx 글롭)로 표기한다.

### verifiable 항목 (기계 판정, 65점)

| # | 항목 | 배점 | 판정 방법 |
|---|---|---|---|
| V1 | 대비율: 사용된 bg/text·surface/text·primary/primary-text 쌍 4.5:1 이상, accent·primary(UI)·border-strong 그래픽/UI 쌍 3:1 이상 | 10 | 결과물의 hex를 추출해 WCAG 공식으로 계산: `L=0.2126R'+0.7152G'+0.0722B'` (c'=c/12.92 if c≤0.03928 else ((c+0.055)/1.055)^2.4), `CR=(L1+0.05)/(L2+0.05)`. §2.3 표와 대조. 토큰을 무변경 사용했다면 §2.3 표 인용으로 통과 |
| V2 | 스페이싱 스케일 외 값 0개 | 10 | `grep -rhoE '(margin\|padding\|gap\|inset)[a-z-]*:[^;]+' $F \| grep -oE '[0-9]+px' \| grep -vwE '(0\|2\|4\|6\|8\|12\|16\|20\|24\|32\|40\|48\|64)px'` → 출력 0줄 |
| V3 | 타입 스케일 외 font-size 0개 | 10 | `grep -rhoE 'font-size:\s*[0-9.]+(px\|rem\|em)' $F \| grep -vE ':\s*(11\|12\|14\|16\|18\|22\|28\|36)px'` → 출력 0줄 (rem/em 사용 자체가 위반) |
| V4 | radius가 §5 스케일 값만 | 5 | `grep -rhoE 'border-radius:[^;]+' $F \| grep -oE '[0-9]+px' \| grep -vwE '(0\|4\|6\|8\|16)px'` → 출력 0줄 (999px는 `--radius-full`/`50%` 참조만 허용) |
| V5 | shadow가 §5 표 3단계와 일치 | 5 | `grep -rhoE 'box-shadow:[^;]+' $F` 의 모든 값이 `var(--shadow-[0-2])`/`var(--focus-ring)` 참조이거나 tokens.css의 `--shadow-*` 정의 문자열과 일치 → 불일치 0건 |
| V6 | `prefers-reduced-motion` 대응 존재 | 5 | `grep -rl 'prefers-reduced-motion' $F \| wc -l` ≥ 1 |
| V7 | 외부 리소스 0 (CDN 폰트/스크립트/이미지) | 5 | `grep -rnE 'https?://[^"'"'"')( ]+\.(css\|js\|woff2?\|ttf\|png\|jpe?g\|webp\|svg)\|fonts\.googleapis\|cdn\.\|unpkg\|jsdelivr' $F` → 출력 0줄 |
| V8 | 절제된 모션: `--ease-in-out`/`--ease-out` 사용 + 스프링/바운스 부재 | 10 | `grep -rE 'var\(--ease-(in-out\|out\|in)\)' $F \| wc -l` ≥ 1 **그리고** 오버슈트 easing 부재: `grep -rhoE 'cubic-bezier\([^)]*\)' $F \| grep -oE '[0-9.]+' \| awk '$1>1.01{c++} END{exit c>0}'` (계수 >1 인 값 존재 시 실패) **그리고** `grep -rF 'scale(0.9' $F \| wc -l` = 0 |
| V9 | 밀집 데이터 지원 + 수치 tabular-nums | 5 | `grep -r 'tabular-nums' $F \| wc -l` ≥ 1 **그리고** 이모지 아이콘 부재: `grep -roP '[\x{1F300}-\x{1FAFF}\x{2600}-\x{27BF}]' $F \| wc -l` = 0 |

### subjective 항목 (AI/사람 채점, 5점 척도 ×5항목 — 평균 4.0 이상 합격)

| # | 항목 | 1점 앵커 | 3점 앵커 | 5점 앵커 |
|---|---|---|---|---|
| S1 | §1 첫인상 부합 (캔버스 주인공·밀집·정밀) | 중앙 정렬 랜딩형 레이아웃에 큰 여백, 도구가 안 보인다 | 3존은 있으나 여백이 넓거나 컨트롤이 커서 밀집감이 약하다 | 캔버스가 화면을 지배하고 크롬이 조용히 감싸며, 32px 컨트롤·14px 텍스트로 정밀·밀집하다 |
| S2 | §8 어조·라벨 준수 | 마케팅 카피/대문자 라벨/이모지 노출 | 기능적이나 문장이 길거나 단축키/단위 병기가 없다 | 명사·동사 라벨, 에러가 [상황+지원범위], 단축키·단위 병기, 이모지 0 |
| S3 | 모션 절제 (§7) | 스프링/바운스/scale 튐 또는 카운트업 | 색 전환은 있으나 슬라이드가 과하거나 easing이 기본 ease뿐 | hover는 색만 80ms, 표면은 130~300ms 짧은 슬라이드, 오버슈트 0 |
| S4 | 크롬 색 절제 (§10 P1·P5) | 툴바·패널에 색 배경/그라데이션, 패널마다 그림자 | 크롬은 대체로 그레이지만 색 면적이 넓거나 도킹 패널에 그림자 | 크롬 완전 무채색, 색은 선택·accent·상태·스와치에만, 도킹 패널은 보더로만 분리 |
| S5 | 형태·위계 정밀 (§4·§5) | radius 제각각·필 버튼, 컨트롤 정렬이 8px 그리드를 벗어남 | 스케일 값은 쓰나 컨트롤 높이/간격 리듬이 불규칙 | 4~8px radius 일관, 컨트롤 32px·간격 8px 그리드 정렬, 수치 tabular-nums |

**채점 절차:** verifiable은 판정 명령을 그대로 실행해 pass/fail 기록 → subjective는 5화면을 라이트/다크 각각 확인해 앵커와 대조, 1~5점 부여 → 합산. 4.0 미만 항목은 5점 앵커 조건을 수정 지시문으로 변환해 다음 반복에 넘긴다.
