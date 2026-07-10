---
number: 7
codename: Quartz
inspired-by: Ant Design (ant.design) — 서술 참조만. 상표는 파일/클래스명에 쓰지 않으며, 이 문서의 모든 수치는 독립 해석이고 공식 값이 아니다
mood: 정보 밀도 높은 엔터프라이즈 콘솔. 파랑 primary, 6px 각진 라운드, border로 나눈 촘촘하지만 부드러운 밀도, 폼·테이블·태그가 주인공
best-for: B2B 관리자 콘솔·대시보드, 데이터 CRUD, 다단계 폼, 설정 화면, 사내 운영 툴
variants: [a, b]
status: spec-draft
---

# 7 · Quartz

## §1. 첫인상 요약

1. **컴포넌트가 주인공이다.** 화면은 여백이 아니라 폼·테이블·태그·카드로 꽉 차 있다. 정보 밀도가 높되 border와 8px 리듬으로 정돈돼 답답하지 않다.
2. **선으로 나눈다.** 면 분리는 그림자가 아니라 1px border(`#F0F0F0` 분할선 / `#D9D9D9` 컨트롤 테두리)와 회색 캔버스(`#F5F5F5`) 위 흰 surface로 한다.
3. **파랑은 액션의 색.** `#1268E6` primary는 주 버튼·활성 탭·선택된 행에만. 나머지는 뉴트럴이 지배하고, 상태는 태그(soft 배경+아이콘+텍스트)로 표현한다.
4. **각진 6px.** 모든 컨트롤은 radius 6px로 통일. 둥글둥글하지 않고 단정하다. 32px 컨트롤 높이가 기본 리듬.
5. **모션은 기능이다.** 100~300ms, 과장 없이 즉각적. 드롭다운·모달이 조용히 나타났다 사라진다. 스프링 바운스 없음.

## §2. 색

### 2.1 팔레트

시맨틱 토큰 전체 표 (a 변형 기준. b 변형은 §2.4 규칙으로 파생, 값은 tokens.css 참조):

| 토큰 | 역할 | a 라이트 | a 다크 |
|---|---|---|---|
| `--color-bg` | 앱 캔버스(레이아웃 배경) | `#F5F5F5` | `#141414` |
| `--color-surface` | 카드·테이블·패널 | `#FFFFFF` | `#1F1F1F` |
| `--color-surface-raised` | 모달·드롭다운·팝오버(그림자로 부상) | `#FFFFFF` | `#262626` |
| `--color-surface-sunken` | 테이블 헤더·비활성 입력·hover 스트립 | `#FAFAFA` | `#171717` |
| `--color-hover` | 행/메뉴 hover 채움 | `#F5F5F5` | `#262626` |
| `--color-selected` | 선택된 행/메뉴(= primary-soft) | `#E6F0FD` | `#15243B` |
| `--color-text` | 본문·제목 | `#1F1F1F` | `#E6E6E6` |
| `--color-text-sub` | 보조 본문·라벨 | `#595959` | `#A6A6A6` |
| `--color-text-tertiary` | 캡션·메타(흰 surface 위 전용, §2.3) | `#737373` | `#8C8C8C` |
| `--color-text-disabled` | 비활성·placeholder (WCAG 예외) | `#BFBFBF` | `#595959` |
| `--color-primary` | CTA·주요 액션·링크 | `#1268E6` | `#1668DC` |
| `--color-primary-text` | primary 위 텍스트 | `#FFFFFF` | `#FFFFFF` |
| `--color-primary-hover` | 버튼 hover | `#4088EE` | `#4088EE` |
| `--color-primary-pressed` | 버튼 active | `#0A4FC0` | `#0E4FA8` |
| `--color-primary-soft` | 선택행·안내박스·태그 배경 | `#E6F0FD` | `#15243B` |
| `--color-primary-soft-text` | soft 위 텍스트, 다크의 링크 | `#0958D9` | `#4096FF` |
| `--color-primary-vivid` | 대형 숫자·차트1·활성 아이콘·포커스(그래픽 전용) | `#1677FF` | `#4096FF` |
| `--color-accent` | 차트2·보조 포인트(그래픽 전용, 변형 불변) | `#0E9488` | `#36CFC9` |
| `--color-danger` | 삭제·에러 텍스트/솔리드 | `#D92D20` | `#FF4D4F` |
| `--color-danger-soft` | 에러 배경·태그 | `#FFF1F0` | `#2A1215` |
| `--color-danger-soft-text` | danger-soft 위 텍스트 | `#A8071A` | `#FF7875` |
| `--color-warning` | 경고 아이콘·테두리·대형(그래픽/UI) | `#C17D00` | `#FAAD14` |
| `--color-warning-soft` | 경고 배경·태그 | `#FFF7E6` | `#2B2111` |
| `--color-warning-soft-text` | warning-soft 위 텍스트 | `#874D00` | `#FFC53D` |
| `--color-success` | 완료·정상 텍스트/솔리드 | `#237804` | `#52C41A` |
| `--color-success-soft` | 성공 배경·태그 | `#F6FFED` | `#162312` |
| `--color-success-soft-text` | success-soft 위 텍스트 | `#237804` | `#73D13D` |
| `--color-border` | 컨트롤 테두리(입력·버튼·카드) | `#D9D9D9` | `#424242` |
| `--color-border-secondary` | 테이블 행선·카드 내부 분할선 | `#F0F0F0` | `#303030` |
| `--color-border-strong` | 강조 구분·헤더 하단선 | `#8C8C8C` | `#5C5C5C` |
| `--color-dim` | 모달·드로어 뒤 딤 | `rgba(0,0,0,0.45)` | `rgba(0,0,0,0.65)` |
| `--color-focus-ring` | 포커스 아웃라인 | `rgba(22,119,255,0.35)` | `rgba(64,150,255,0.4)` |

### 2.2 라이트/다크

양쪽 모두 지원한다(위 표). 핵심 규칙:

- **라이트는 "회색 캔버스 + 흰 카드"** 구조다. `--color-bg`(#F5F5F5)가 배경, `--color-surface`(#FFFFFF)가 카드·테이블. 이 명도 차이 + border가 레이아웃을 만든다. Jelly처럼 흰 배경에 회색 카드가 아니라, **반대로** 회색 위에 흰 카드다.
- **다크는 순검정(#000) 대신 `#141414` 캔버스**를 쓰고 surface를 `#1F1F1F` → `#262626`으로 계단식으로 밝힌다. border도 `#424242`(컨트롤)/`#303030`(분할)로 낮춰 눈부심을 막는다.
- **primary는 라이트/다크에서 서로 다른 값**을 쓴다(라이트 #1268E6 / 다크 #1668DC). 둘 다 흰 텍스트 4.5:1을 넘기는 선에서 각 배경에 맞춰 조정한 값이다.
- **텍스트로 쓰이는 파랑**은 다크에서 `--color-primary`가 아니라 `--color-primary-soft-text`(#4096FF)를 쓴다(#1668DC는 다크 캔버스 대비 3.55:1로 본문 불가).
- danger/success/warning은 다크에서 원래의 밝은 톤(#FF4D4F/#52C41A/#FAAD14)으로 되돌려 어두운 배경 위 가독을 확보한다(라이트에서는 텍스트 4.5:1을 위해 어둡게 눌렀던 값).

### 2.3 대비 규칙 (실측 계산값 명기)

기준: **본문 4.5:1 이상, 대형 텍스트(18.66px+/700 또는 24px+)·아이콘/그래픽 3:1 이상.**
아래는 WCAG 2.x 상대휘도 공식으로 계산한 실제 대비율이다 (`L = 0.2126R'+0.7152G'+0.0722B'`, `CR=(L1+0.05)/(L2+0.05)`).

| 쌍 | a 라이트 | a 다크 | 판정 |
|---|---|---|---|
| bg / text | **15.12:1** | **14.76:1** | ✓ 본문 |
| surface / text | **16.48:1** | **13.21:1** | ✓ 본문 |
| surface / text-sub | **7.01:1** | **6.77:1** | ✓ 본문 |
| bg / text-sub | **6.43:1** | **7.57:1** | ✓ 본문 |
| surface / text-tertiary | **4.74:1** | **4.90:1** | ✓ 본문 |
| bg / text-tertiary | **4.35:1** | **5.48:1** | 라이트는 캔버스 위 본문 금지(아래 제약) |
| primary / primary-text (흰) | **5.06:1** | **5.19:1** | ✓ 본문 |
| primary(링크로) / surface | **5.06:1** | soft-text 기준 **5.51:1** | ✓ 본문 |
| primary(링크로) / bg | **4.64:1** | soft-text 기준 **6.16:1** | ✓ 본문 |
| primary-soft / primary-soft-text | **5.35:1** | **5.21:1** | ✓ 본문 |
| primary-pressed / 흰 텍스트 | **7.71:1** | **6.85:1** | ✓ 본문 |
| danger / surface (텍스트/솔리드) | **4.83:1** | **5.04:1** | ✓ 본문 |
| danger-soft / danger-soft-text | **7.04:1** | 소프트 위 **4.6:1** | ✓ 본문 |
| success / surface (텍스트/솔리드) | **5.59:1** | **7.28:1** | ✓ 본문 |
| success-soft / success-soft-text | **5.44:1** | **6.5:1** | ✓ 본문 |
| warning / surface (아이콘/대형) | **3.39:1** | **9.15:1** | ✓ 그래픽(3:1) — 라이트 본문 금지 |
| warning-soft / warning-soft-text | **6.37:1** | 소프트 위 **6.8:1** | ✓ 본문 |
| primary-vivid / bg (그래픽) | **4.64:1** | **6.16:1** | ✓ 그래픽·대형 |
| accent / surface (그래픽) | **3.74:1** | **9.59:1** | ✓ 그래픽(3:1) — 본문 금지 |

b 변형(긱블루 hue 230) 주요 쌍 실측: 라이트 primary(#2F54EB)/흰 텍스트 **5.85:1**, soft(#EDEFFD)/soft-text(#1D39C4) **7.54:1**, pressed(#1D39C4)/흰 텍스트 **8.63:1** — 다크 primary(#2F54EB)/흰 텍스트 **5.85:1**, soft(#1A1F3C)/soft-text(#7A9BFF) **6.10:1**. 전부 통과.

추가 제약 (위 표에서 도출):

- **primary 위 텍스트는 항상 `--color-primary-text`(#FFFFFF).** 임의 색 금지.
- **`--color-text-tertiary`는 흰 `--color-surface` 위에서만 본문 크기 허용**(라이트 4.74:1). 회색 캔버스(#F5F5F5) 위에서는 4.35:1로 미달 → 캔버스 위 캡션은 `--color-text-sub`를 쓴다.
- **`--color-primary-vivid`·`--color-accent`·라이트 `--color-warning`은 그래픽/대형 전용**(아이콘·차트·18.66px+/700 이상). 14px 본문에 쓰면 위반. 본문 크기 파랑 텍스트는 `--color-primary`(#1268E6, 5.06:1), 파란 링크가 회색 캔버스 위면 여전히 4.64:1로 통과.
- **`--color-text-disabled`(#BFBFBF, 2.06:1)와 `--color-border`(#D9D9D9)는 대비 대상에서 제외**한다. disabled 텍스트는 WCAG 예외(1.4.3 비활성 요소), 컨트롤 테두리(#D9D9D9)는 인접색 장식적 그룹핑이다. 컨트롤의 식별 가능성(WCAG 1.4.11)은 **상단 라벨 + hover/focus 시 primary 테두리(#1268E6, surface 대비 5.06:1) + focus-ring**로 확보한다. 테두리만으로 컨트롤을 식별시키지 않는다.
- 상태를 색으로만 전달하지 않는다(§10 Q7): danger/success/warning 태그는 반드시 아이콘 또는 텍스트 라벨을 동반.
- 새 색 조합은 이 표의 해당 행을 재계산해 4.5/3.0을 넘겨야 채택한다. 미달이면 폐기.

### 2.4 팔레트 생성 규칙 (변형·랜덤용)

**고정 (변형이 건드릴 수 없는 것):**

- 뉴트럴 램프 전체: bg/surface/surface-raised/surface-sunken/hover/text/text-sub/text-tertiary/text-disabled/border/border-secondary/border-strong/dim의 정확한 hex. 라이트는 "회색 캔버스+흰 surface", 다크는 #141414→#1F1F1F→#262626 계단.
- 의미 색 danger(hue 3~10)·success(hue 100~110)·warning(hue 38~45)·accent(teal hue 175~180)의 값과 의미. accent는 차트 2번째 계열을 고정하기 위해 **변형 간 불변**(primary hue에 종속되지 않는 유일한 유채색).
- 토큰 구조: primary 7종(primary/text/hover/pressed/soft/soft-text/vivid)을 반드시 전부 제공.
- 채도·명도 범위: 라이트 primary는 HSL 기준 **S 70~90%, L 40~48%**(흰 텍스트 4.5:1 확보 구간). soft는 동일 hue **S 60~90%, L 94~96%**(라이트) / **S 40~55%, L 14~18%**(다크).

**자유 (변형이 바꾸는 것):**

- primary hue 0~360 자유. 단 danger(3~10)·success(100~110)·warning(38~45)·accent(175~180)와 ±15° 이내로 겹치면 시맨틱 색과 혼동되므로 그 구간은 피해서 다시 뽑는다.
- primary-hover는 primary에서 L +12%p, pressed는 L −12%p, soft-text는 pressed와 동일하거나 −2%p, vivid는 hue 유지 S +5%p L +6%p.
- 다크 primary는 라이트 hue 유지 + L을 배경에 맞춰 재조정하되 흰 텍스트 4.5:1을 넘기는 최댓값을 쓴다. 다크 링크(soft-text)는 같은 hue L 62~68%로 밝혀 캔버스 대비 4.5:1을 확보.

**랜덤 명명 `7-r<hue>`** (예: `7-r265` = hue 265 인디고 변형):

1. hue h를 뽑는다 → `primary = hsl(h, 82%, 44%)`에서 시작.
2. 흰 텍스트 대비 4.5:1 미달이면 L을 2%p씩 내려 **최초로 통과하는 값을 채택**(결정적 절차 — 같은 이름이면 항상 같은 색).
3. hover = primary L +12%p, pressed = primary L −12%p, soft = hsl(h,85%,95%)(라이트)/hsl(h,48%,16%)(다크), soft-text = pressed, vivid = hsl(h,88%,50%).
4. §2.3 표의 primary 관련 전 행을 재계산해 하나라도 미달이면 그 hue는 폐기하고 다시 뽑는다. 통과한 hue만 `7-r<h>`로 명명.
5. danger/success/warning/accent/뉴트럴은 절대 재생성하지 않는다(고정).

## §3. 타이포그래피

**폰트 스택** (외부 로드 금지 — 시스템 폴백만):

```css
--font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
               'Helvetica Neue', Arial, 'Apple SD Gothic Neo', 'Malgun Gothic',
               'Noto Sans KR', system-ui, sans-serif;
--font-family-code: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace;
```

**타입 스케일** — 이 7단계 외 font-size 사용 금지:

| 이름 | size | weight | line-height | letter-spacing | 용도 |
|---|---|---|---|---|---|
| display | 38px | 600 | 1.21 | -0.01em | 로그인·랜딩 큰 제목 (화면당 최대 1개, 드물게) |
| stat | 30px | 600 | 1.27 | -0.01em | 대시보드 KPI 숫자 (tabular-nums) |
| title | 24px | 600 | 1.33 | -0.01em | 페이지 타이틀 |
| heading | 20px | 600 | 1.40 | 0 | 카드·섹션 제목, 모달 제목 |
| subhead | 16px | 600 | 1.50 | 0 | 서브섹션·폼 그룹 제목, 강조 본문 |
| body | 14px | 400 | 1.5714 | 0 | 본문·폼·테이블·버튼 라벨(기본) |
| caption | 12px | 400 | 1.50 | 0 | 보조 텍스트·태그·메타·헬퍼·타임스탬프 |

**위계 규칙:**

- 한 화면에 title은 **1개**(페이지 타이틀). heading은 카드마다 1개까지, 화면당 헤딩 레벨 최대 3단계(title→heading→subhead).
- 본문 기본은 **14px/400**. 강조는 크기가 아니라 weight 600(subhead) 또는 색으로. 임의 15px·13px·17px 금지 — Jelly와 달리 본문은 14px 고정이다.
- **숫자(KPI·금액·테이블 수치)는 `font-variant-numeric: tabular-nums`** 필수. 대시보드 KPI는 stat(30px/600), 테이블 셀 수치는 body(14px)에 우측 정렬 + tabular-nums.
- 사용 weight는 **400/500/600의 3종만**. 400=본문, 500=테이블 헤더·라벨 강조, 600=제목·버튼·활성. 700 이상 금지(엔터프라이즈 절제), 300 이하 금지.
- 버튼 라벨은 14px/400(large 버튼도 14px). 작은 컨트롤·태그는 caption(12px).

**금지:** 임의 font-size 사용 금지 — 위 스케일 7값(12/14/16/20/24/30/38px)만. rem/em 단위도 스케일 이탈로 간주(§12 V3).

## §4. 간격 · 레이아웃

**스페이싱 스케일** — 이 값 외 margin/padding/gap 사용 금지 (0 제외):

```
4  8  12  16  20  24  32  40  48  64  (px)   — 4의 배수(sizeStep 4) 기반
```

| 항목 | 값 |
|---|---|
| 콘텐츠 영역 패딩 | 24px (모바일 16px) |
| 섹션·카드 간 간격 | 24px |
| 카드 내부 패딩 | 24px (compact 카드 16px) |
| 폼 아이템 하단 간격(라벨↔필드 8px, 아이템 간 24px) | 24px |
| 테이블 셀 패딩 | 세로 12px / 가로 16px (compact 8/12) |
| 리스트/테이블 행 최소 높이 | 44px |
| 라벨↔입력 | 8px, 헬퍼/에러↔입력 4px |
| 아이콘↔텍스트 | 8px |
| 헤더 높이 | 56px(모바일) / 64px(데스크톱) |
| 컨트롤 높이 | 32px 기본 / 40px large(주 CTA·폼) / 24px small |
| 터치 타깃 | 최소 44×44px(모바일 히트 영역; 시각 크기 32px여도 히트 확보) |
| 사이드 내비 폭 | 224px (접힘 64px) |

**컨테이너·그리드:**

- **데스크톱은 사이드바 레이아웃**: 좌측 사이드 내비 224px + 상단 헤더 64px + 콘텐츠(패딩 24px). 콘텐츠 최대 폭 1200px, 폼은 640px 단일 컬럼로 좁힌다.
- **모바일(≤768px)은 단일 컬럼**: 사이드 내비는 접혀 상단 헤더의 햄버거 → 드로어(§6.11)로. 콘텐츠 패딩 16px. 테이블은 가로 스크롤 컨테이너로 감싼다(카드 변환 금지, §10 Q2).
- 그리드: 대시보드 KPI 카드는 데스크톱 4열(gap 24px) / 태블릿 2열 / 모바일 1열. 폼은 최대 2열(라벨 상단형)까지, 좁은 화면에서 1열로 접힘.
- 데모 프레임(갤러리): 데스크톱 중앙 1120px 프레임, radius 8px, `--shadow-3`, 프레임 밖 배경 라이트 `#E4E6EB` / 다크 `#000000`.

## §5. 형태 (Shape)

**radius 스케일** — 이 값 외 border-radius 금지:

| 토큰 | 값 | 적용처 |
|---|---|---|
| `--radius-xs` | 2px | 태그 닫기 버튼, 작은 인디케이터, 프로그레스 바 |
| `--radius-sm` | 4px | 태그, 뱃지, 체크박스, 작은 썸네일 |
| `--radius-md` | 6px | **기본**: 버튼, 입력, 셀렉트, 드롭다운, 세그먼티드 |
| `--radius-lg` | 8px | 카드, 모달, 팝오버, 드로어, 알림 |
| `--radius-full` | 999px | 아바타, 스위치, 필터 필칩, 상태 점 |

- 컨트롤의 기본 radius는 **6px 고정**. 16px+ 둥근 카드 금지(§10 Q5). 같은 종류 컴포넌트는 항상 같은 radius.
- **border는 1급 시민이다.** Jelly와 정반대 — 면 분리·컨트롤 경계·테이블 격자를 border로 그린다.
  - 컨트롤 테두리: `1px solid var(--color-border)`(#D9D9D9), hover 시 `--color-primary-hover`, focus 시 `--color-primary` + focus-ring.
  - 분할선: `1px solid var(--color-border-secondary)`(#F0F0F0) — 테이블 행선·카드 내부·리스트 구분.
  - 강조선: `1px solid var(--color-border-strong)`(#8C8C8C) 또는 활성 탭 하단 `2px solid var(--color-primary)`.

**shadow/elevation 단계** (다크 값은 tokens.css에서 오버라이드):

| 토큰 | 라이트 값 | 용도 |
|---|---|---|
| `--shadow-0` | `none` | 기본. 카드·테이블·패널은 그림자 없음(border로 구분) |
| `--shadow-1` | `0 1px 2px rgba(0,0,0,.03), 0 1px 6px -1px rgba(0,0,0,.02), 0 2px 4px rgba(0,0,0,.02)` | 카드 hover, sticky 헤더 |
| `--shadow-2` | `0 6px 16px rgba(0,0,0,.08), 0 3px 6px -4px rgba(0,0,0,.12), 0 9px 28px 8px rgba(0,0,0,.05)` | 드롭다운, 팝오버, 토스트 |
| `--shadow-3` | `0 6px 16px rgba(0,0,0,.08), 0 3px 6px -4px rgba(0,0,0,.12), 0 12px 48px 16px rgba(0,0,0,.10)` | 모달, 드로어, 데모 프레임 |

**그림자는 "떠 있는 것"에만.** 카드·테이블은 `--shadow-0`(§10 Q1). 그림자로 카드를 구분하지 않는다.

## §6. 핵심 컴포넌트 규칙

공통: 컨트롤 기본 높이 32px, radius 6px, 전환 `--motion-fast`(100ms). focus-visible는 전부 `box-shadow: 0 0 0 2px var(--color-focus-ring)` + `border-color: var(--color-primary)`. press는 스케일 금지 — 색(pressed 토큰)으로만 반응(§10 Q3).

### 6.1 버튼 (primary / default / dashed / text / link, + danger)

- **primary(solid)**: h 32px(large 40px), 패딩 0 16px, radius 6px, bg `--color-primary`, 라벨 14px/400 `--color-primary-text`. hover bg `--color-primary-hover`, active bg `--color-primary-pressed`. 화면당 1개(§10 Q4).
- **default(outline)**: bg `--color-surface`, `1px solid var(--color-border)`, 라벨 14px/400 `--color-text`. hover `border-color`·라벨 `--color-primary-hover`. 가장 흔한 버튼.
- **dashed**: default와 동일하나 `border-style: dashed`. "행 추가"·"항목 추가" 전용.
- **text**: bg 투명, 라벨 `--color-text-sub`, hover bg `--color-hover`. 테이블 행 액션·부가 액션.
- **link**: bg 투명, 라벨 `--color-primary`, hover `--color-primary-hover`, 밑줄 없음. 인라인 이동.
- **danger 변형**: solid는 bg `--color-danger`+흰 텍스트, default는 border·라벨 `--color-danger`. 삭제 확인.
- 상태: disabled bg `--color-surface-sunken` border `--color-border` 라벨 `--color-text-disabled`(예외). loading은 라벨 앞 12px 스피너(회전 `--motion-slow` linear 무한).

```css
.btn { height: 32px; padding: 0 16px; border-radius: var(--radius-md);
  font-size: 14px; font-weight: 400; border: 1px solid transparent;
  transition: background-color var(--motion-fast) var(--ease-out),
              border-color var(--motion-fast) var(--ease-out),
              color var(--motion-fast) var(--ease-out); }
.btn-primary { background: var(--color-primary); color: var(--color-primary-text); }
.btn-primary:hover { background: var(--color-primary-hover); }
.btn-primary:active { background: var(--color-primary-pressed); }
.btn-default { background: var(--color-surface); border-color: var(--color-border); color: var(--color-text); }
.btn-default:hover { border-color: var(--color-primary-hover); color: var(--color-primary-hover); }
.btn:focus-visible { outline: none; border-color: var(--color-primary);
  box-shadow: 0 0 0 2px var(--color-focus-ring); }
```

### 6.2 입력 · 셀렉트 · 폼 아이템

- **입력**: h 32px(large 40px), 패딩 0 12px, `1px solid var(--color-border)`, radius 6px, 값 14px/400 `--color-text`, placeholder `--color-text-disabled`. hover `border-color: var(--color-primary-hover)`, focus `border-color: var(--color-primary)` + focus-ring.
- **폼 아이템 구조**: [라벨 14px/500 `--color-text` (필수는 앞에 `--color-danger` `*`)] –8px– [입력] –4px– [헬퍼/에러 caption 12px]. 아이템 간 24px. **라벨은 항상 상단, placeholder로 대체 금지(§10 Q6).**
- **셀렉트**: 입력과 동일 외형 + 우측 12px 셰브론 SVG. 열림 시 드롭다운 패널(surface-raised, `--shadow-2`, radius 6px), 옵션 h 32px, hover bg `--color-hover`, 선택 bg `--color-selected` + 라벨 `--color-primary`.
- **에러 상태**: border·헬퍼 텍스트 `--color-danger`, 흔들림 없음(조용히 색만). 검증은 blur 또는 제출 시.
- **비활성**: bg `--color-surface-sunken`, 라벨/값 `--color-text-disabled`, cursor not-allowed.

### 6.3 카드

- bg `--color-surface`, `1px solid var(--color-border-secondary)`, radius 8px, 패딩 24px(compact 16px), 그림자 없음(`--shadow-0`).
- 헤더 있는 카드: 상단 [제목 16px/600 + 우측 액션(text/link 버튼)] –하단 `1px solid var(--color-border-secondary)`– 본문. 헤더 패딩 16px 24px.
- hover 상호작용 카드만 `--shadow-1` + `border-color: transparent`(150ms). 정적 카드는 hover 효과 없음.
- 카드 안에 카드 금지(중첩 1단까지). KPI 카드는 [caption 라벨 12px `--color-text-sub` → 4px → stat 숫자 30px/600 tabular-nums → 8px → 증감 태그].

### 6.4 테이블 (핵심 컴포넌트)

- 진짜 `<table>`. bg `--color-surface`, 바깥 `1px solid var(--color-border-secondary)` + radius 8px(overflow hidden).
- **헤더**: bg `--color-surface-sunken`, 셀 12px 16px, 텍스트 14px/500 `--color-text`, 하단 `1px solid var(--color-border-secondary)`. 정렬 가능 열은 우측 정렬 화살표 아이콘, 활성 정렬은 `--color-primary`.
- **바디 행**: 셀 12px 16px, 텍스트 14px/400, 하단 행선 `1px solid var(--color-border-secondary)`(마지막 행 제외). hover bg `--color-hover`(100ms). 선택 행 bg `--color-selected`.
- 수치 열은 우측 정렬 + tabular-nums. 상태 열은 태그(§6.9). 액션 열은 text 버튼(우측 고정).
- 행 선택 체크박스(첫 열 40px), 헤더에 전체 선택. 선택 시 상단에 벌크 액션 바(bg `--color-selected`, "3개 선택됨" + 액션 버튼).
- **모바일**: 가로 스크롤 컨테이너(`overflow-x:auto`)로 감싸 컬럼 유지. 카드 리스트로 바꾸지 않는다(§10 Q2). 페이지네이션(§6.12) 하단.

```css
.table { width: 100%; border-collapse: collapse; background: var(--color-surface); }
.table th { background: var(--color-surface-sunken); padding: 12px 16px;
  font-size: 14px; font-weight: 500; text-align: left;
  border-bottom: 1px solid var(--color-border-secondary); }
.table td { padding: 12px 16px; font-size: 14px;
  border-bottom: 1px solid var(--color-border-secondary); }
.table tbody tr:hover { background: var(--color-hover); }
.table td.num { text-align: right; font-variant-numeric: tabular-nums; }
```

### 6.5 리스트 아이템 (설정·메뉴 행)

- min-height 44px, 패딩 12px 16px, 하단 분할선 `1px solid var(--color-border-secondary)`. 구조: [아이콘 16px `--color-text-sub`] –8px– [라벨 14px + 보조 caption 12px `--color-text-sub`] – [우측 값/스위치/셰브론].
- hover bg `--color-hover`. 클릭형 행은 우측 셰브론 SVG.

### 6.6 상단 헤더 / 브레드크럼

- h 64px(모바일 56px), bg `--color-surface`, 하단 `1px solid var(--color-border-secondary)`, sticky + 스크롤 시 `--shadow-1`. 구조: [모바일 햄버거 44px / 데스크톱 로고] – [브레드크럼 또는 페이지 타이틀] – 우측 [검색·알림 벨·아바타(full)].
- 브레드크럼: caption~body 14px, 항목 `--color-text-sub`, 구분자 `/` `--color-text-tertiary`, 마지막(현재) `--color-text`. 링크 hover `--color-primary`.

### 6.7 사이드 내비 (데스크톱) / 드로어 (모바일)

- **데스크톱 사이드**: 폭 224px, bg `--color-surface`, 우측 `1px solid var(--color-border-secondary)`. 메뉴 항목 h 40px, 패딩 0 16px, 아이콘 16px + 라벨 14px. hover bg `--color-hover`, **활성 항목 bg `--color-selected` + 라벨/아이콘 `--color-primary` + 좌측 `3px` 인디케이터 `--color-primary`**. 그룹 헤더 caption 12px `--color-text-tertiary`(surface 위 4.74:1).
- 접힘(64px): 아이콘만, 라벨은 hover 툴팁. 하단 접기 토글.
- **모바일 드로어**: 좌측에서 슬라이드(폭 280px, `--shadow-3`, 딤). 햄버거로 열고, 항목 탭 시 닫힘. 진입 `translateX(-100%)→0` 300ms `--ease-out`.

### 6.8 모달 / 드로어

- **모달(중앙)**: 폭 520px(large 720, 모바일 `calc(100% - 32px)`), bg `--color-surface-raised`, radius 8px, `--shadow-3`. 구조: [헤더 22px 24px: 제목 16px/600 + 우측 닫기 X 44px] – [본문 패딩 24px, body 14px] – [푸터 패딩 12px 24px, 하단 정렬 default+primary 버튼 gap 8px]. 딤 `--color-dim`.
- 진입 모달 `opacity 0→1` + `scale(0.98)→1` 200ms `--ease-out`, 딤 fade 200ms. 파괴적 확인은 헤더에 `--color-danger` 경고 아이콘 16px + 본문 + danger 버튼.
- **드로어(우측 패널)**: 상세·필터 편집용. 우측에서 폭 480px(모바일 100%) 슬라이드, `--shadow-3`, 헤더/본문/푸터 동일 구조. 진입 `translateX(100%)→0` 300ms `--ease-out`.

### 6.9 태그 / 뱃지 / 상태 (핵심)

- **태그**: h 24px, 패딩 0 8px, radius 4px, caption 12px, soft 배경 + 대응 soft-text. 조합만 허용: `primary-soft`+soft-text / `success-soft`+success-soft-text / `warning-soft`+warning-soft-text / `danger-soft`+danger-soft-text / 뉴트럴 `surface-sunken`+text-sub. **순색 배경 태그 금지.**
- **상태 태그는 색+표식 병기**(§10 Q7): 앞에 상태 점(6px `--radius-full`) 또는 아이콘 12px + 텍스트. 예: `● 정상`(success), `● 대기`(warning), `● 실패`(danger).
- 닫기 가능 태그: 우측 X 12px(`--radius-xs`), hover `--color-text`.
- **뱃지(카운트)**: 원형 min 16px, bg `--color-danger`, 흰 caption 12px, 아이콘 우상단. 점 뱃지는 6px `--radius-full`.

### 6.10 토스트(message) / 알림(notification)

- **message(간단 피드백)**: 화면 상단 중앙, bg `--color-surface-raised`, `1px solid var(--color-border-secondary)`, radius 8px, `--shadow-2`, 패딩 12px 16px, body 14px. 앞에 상태 아이콘 16px(success/danger/warning/info=primary-vivid). 진입 `translateY(-8px)+opacity` 200ms, 3초 후 페이드.
- **notification(우상단 카드)**: 폭 384px, 제목 16px/600 + 설명 14px `--color-text-sub` + 닫기 X. 4.5초 자동 소멸. 액션 링크 하단.

### 6.11 탭 / 세그먼티드

- **탭**: 항목 패딩 12px 16px, body 14px `--color-text-sub`, 하단 공유선 `1px solid var(--color-border-secondary)`. **활성 탭 라벨 `--color-primary` + 하단 `2px solid var(--color-primary)` 인디케이터**(슬라이드 200ms `--ease-in-out`). hover 라벨 `--color-primary-hover`.
- **세그먼티드 컨트롤**: bg `--color-surface-sunken`, radius 6px, 패딩 2px. 선택 세그먼트 bg `--color-surface` + `--shadow-1` + 라벨 `--color-text`, 비선택 라벨 `--color-text-sub`. 필터·뷰 전환용.

### 6.12 페이지네이션 · 빈 상태 · 스텝

- **페이지네이션**: 항목 min 32×32px, radius 6px, body 14px. 현재 페이지 `1px solid var(--color-primary)` + 라벨 `--color-primary`, 나머지 hover border `--color-primary-hover`. 우측 "n개 중 x–y" caption + 페이지 크기 셀렉트.
- **빈 상태**: 세로 중앙, 64px 인라인 SVG 일러스트(단색 2톤: `--color-border` 면 + `--color-primary-vivid` 포인트) → 16px → 제목 16px/600 → 4px → 설명 14px `--color-text-sub` → 16px → primary 버튼(주 행동). 카피는 §8(사실 서술 + 다음 행동).
- **스텝(다단계 폼)**: 가로 스텝바. 각 스텝 [번호 원 24px `--radius-full` + 라벨 14px]. 완료 bg `--color-primary` 흰 체크, 현재 border `2px --color-primary` 라벨 `--color-primary`, 예정 bg `--color-surface-sunken` `--color-text-tertiary`. 연결선 `1px --color-border`(완료 구간 `--color-primary`).

## §7. 모션

**모션 성격 한 줄: "즉각적이고 절제됨 — 100ms 반응, 상태 전환은 색으로, 오버레이만 부드럽게 나타났다 사라진다. 바운스 없음."**

**토큰:**

```css
--motion-fast: 100ms;   /* hover·색 전환·press */
--motion-mid: 200ms;    /* 드롭다운·탭 인디케이터·아코디언·페이지 전환 */
--motion-slow: 300ms;   /* 모달·드로어·컬랩스 */
--ease-in-out: cubic-bezier(0.645, 0.045, 0.355, 1);  /* 위치 이동·기본 */
--ease-out:    cubic-bezier(0.215, 0.61, 0.355, 1);   /* 진입·펼침 */
--ease-in:     cubic-bezier(0.755, 0.05, 0.855, 0.06);/* 퇴장 */
--ease-out-back: cubic-bezier(0.12, 0.4, 0.29, 1.46); /* 드롭다운·팝오버 살짝 스케일(절제된 back) */
```

**패턴별 규칙:**

| 패턴 | 규칙 |
|---|---|
| hover/press | 색 전환만 100ms `--ease-out`. **scale 변형 금지**(엔터프라이즈 밀도에서 튐 방지). |
| 드롭다운·팝오버·셀렉트 | `opacity 0→1` + `scale(0.96)→1`(원점 top) 200ms `--ease-out-back`, 퇴장 `--ease-in` 100ms |
| 모달 | `opacity 0→1` + `scale(0.98)→1` 200ms `--ease-out` + 딤 fade 200ms |
| 드로어 | `translateX(±100%)→0` 300ms `--ease-out` + 딤 fade 200ms |
| 탭 인디케이터 | 밑줄이 `--motion-mid` `--ease-in-out`로 슬라이드 이동 |
| 아코디언·컬랩스 | height/opacity 200ms `--ease-in-out` |
| 페이지 전환 | 콘텐츠 `opacity 0→1` + `translateY(4px)→0` 200ms `--ease-out`. 전체 화면 슬라이드 금지 |
| 스켈레톤 로딩 | `--color-surface-sunken`↔`--color-hover` shimmer 1.4s ease infinite (테이블·카드 로딩) |
| 스피너 | 360° 회전 `--motion-slow`(≈300ms×N) linear 무한, 버튼 loading·페이지 로딩 |

**`prefers-reduced-motion` 대응 필수:** transform/scale/shimmer 전부 제거, opacity·색 전환 120ms만 유지(tokens.css 전역 블록). 스피너는 무한 회전 대신 정적 표시 권장.

## §8. 보이스 & 톤 (마이크로카피)

- **명료한 합니다체 고정.** 전문적이고 간결. 반말·과한 친근체("~할게요")·이모지 금지. Jelly의 "보낼게요"와 정반대로, 여기선 명사형/동사 원형 버튼("저장", "삭제", "적용")을 쓴다.
- 문장은 짧고 사실 중심. 시스템 상태를 정확히 알린다. 오류는 원인 + 해결을 명시하되 사과 남발 금지.
- 필드 검증 메시지 허용(폼 중심 UI). 예: "이메일 형식이 올바르지 않습니다."
- 숫자는 천 단위 콤마, 날짜는 `YYYY-MM-DD` 또는 `2026-07-10 14:30`. 상태는 태그 라벨("정상/대기/실패")로 통일.

| 상황 | Quartz 카피 | 금지 예 |
|---|---|---|
| 주 버튼(저장) | 저장 | 저장할게요, 확인하기 |
| 주 버튼(생성) | 만들기 / 추가 | 새로 만들어볼까요 |
| 취소 | 취소 | 그만두기 |
| 삭제 확인 제목 | 항목을 삭제할까요? | 정말 삭제하시겠습니까?! |
| 삭제 확인 본문 | 삭제하면 되돌릴 수 없습니다. | 이 작업은 위험합니다 |
| 필드 에러 | 이메일 형식이 올바르지 않습니다 | 잘못된 입력입니다 |
| 저장 실패 | 저장하지 못했습니다. 잠시 후 다시 시도해 주세요 | 오류가 발생했습니다 (E-500) |
| 권한 없음 | 이 작업을 수행할 권한이 없습니다. 관리자에게 문의하세요 | 접근 거부됨 |
| 빈 상태 | 아직 등록된 항목이 없습니다 | 데이터가 존재하지 않습니다 |
| 로딩 | 불러오는 중 | 로딩 중입니다. 기다려 주십시오 |
| 성공 토스트 | 저장했습니다 | 저장이 완료되었습니다!! |
| 벌크 선택 | 3개 선택됨 | 3 items selected |

- 에러는 **[무슨 일인지] + [다음 행동]** 구조. 에러 코드는 접힘 영역/툴팁에만(본문 노출 금지).
- 금지 표현: "~하십시오"의 명령형 남발, 느낌표 2개 이상, 영문 혼용 라벨(한국어 UI에서), "실패하였습니다"류 수동태 과잉.

## §9. 레이아웃 레시피 — 데모 5화면 (가상 관리자 콘솔 "Quartz 콘솔")

모든 화면 공통: 데스크톱은 사이드 내비 224px + 헤더 64px + 콘텐츠(패딩 24px, 최대 1200px). 모바일은 헤더 56px + 햄버거 드로어, 콘텐츠 패딩 16px. 사이드 내비 4항목: 대시보드 / 사용자 / 주문 / 설정.

### screen-1 대시보드 (KPI + 차트 + 최근 활동)

- 목적: 운영 지표를 한눈에. 정보 밀도 높되 border로 정돈.
- 위→아래: 헤더(브레드크럼 "대시보드", 우측 검색·알림·아바타) → 24px → 페이지 타이틀 title(24px/600) + 우측 기간 세그먼티드("오늘/7일/30일") → 24px → **KPI 카드 4열**(gap 24px, 각 카드: caption 라벨 + stat 30px/600 tabular-nums + 증감 태그 `●+12.4%` success/danger) → 24px → 2열 영역: 좌 큰 카드(제목 heading + 라인 차트 SVG, `--color-primary-vivid`·`--color-accent` 2계열) / 우 카드("최근 활동" 리스트 §6.5, 5행) → 24px → 최근 주문 테이블(§6.4, 5행 + "전체 보기" link).
- 사용 컴포넌트: 헤더, 세그먼티드, KPI 카드, 차트, 리스트, 테이블, 태그. 진입 시 카드 페이지 전환 모션.

### screen-2 사용자 만들기 (다단계 폼)

- 목적: 스텝으로 나눈 폼 입력. 폼 컴포넌트의 정석.
- 위→아래: 헤더(브레드크럼 "사용자 / 새 사용자") → 24px → 스텝바(§6.12: 계정 → 권한 → 확인, 3스텝) → 24px → 폼 카드(최대 640px): **스텝1 "계정"** — 폼 아이템 세로 스택(이름*, 이메일*, 부서 셀렉트, 전화)/각 라벨 상단 14px/500 + 입력 40px large + 헬퍼 caption → 스텝2 "권한" — 역할 라디오 그룹 + 권한 체크박스 리스트 + 접근 범위 셀렉트 → 스텝3 "확인" — 입력 요약 리스트(라벨/값 2열) → 카드 하단 푸터(우측 정렬: "이전" default + "다음"/"만들기" primary). 
- 검증: 필수 미입력 시 필드 border·헬퍼 `--color-danger`, 다음 스텝 진행 차단. 완료 시 성공 message + 목록으로.

### screen-3 사용자 목록 (테이블 + 필터)

- 목적: 대량 데이터 CRUD. 테이블이 주인공(§10 Q2 금지 확인).
- 위→아래: 헤더(브레드크럼 "사용자") → 24px → 타이틀 + 우측 "사용자 추가" primary → 16px → 필터 바(카드: 검색 입력 + 상태 셀렉트 + 역할 셀렉트 + 기간 + "필터" default / "초기화" text, 가로 배치·모바일 접힘) → 16px → 테이블(§6.4: 체크박스·이름(아바타+이메일 2줄)·역할 태그·상태 태그(●)·가입일 tabular-nums·액션 text 버튼 "편집/삭제"). 행 선택 시 상단 벌크 액션 바 → 하단 페이지네이션(§6.12).
- 삭제는 확인 모달(§6.8 파괴적). 편집은 우측 드로어(§6.8).

### screen-4 사용자 상세 (탭 + 정보 패널)

- 목적: 한 레코드의 상세를 탭으로 조직.
- 위→아래: 헤더(브레드크럼 "사용자 / 김이현") → 24px → 상세 헤더 카드(아바타 64px full + 이름 title + 이메일 caption sub + 상태 태그 + 우측 "편집" default·"비활성화" danger-default) → 24px → 탭(§6.11: 개요 / 활동 / 권한 / 청구) → **개요 탭**: 2열 정보 카드(라벨 caption sub + 값 14px, "기본 정보"·"조직" 그룹, 카드 내부 분할선) + 하단 "최근 세션" 테이블 → **활동 탭**: 타임라인 리스트(좌측 점 + 시각 tabular-nums + 설명).
- 탭 전환 시 콘텐츠 페이지 전환 모션(200ms). 탭 인디케이터 슬라이드.

### screen-5 계정 설정

- 목적: 설정 항목의 정돈된 서랍. 폼 + 스위치 + 위험 구역.
- 위→아래: 헤더(브레드크럼 "설정") → 24px → 좌측 설정 하위 내비(세로 탭: 프로필/보안/알림/청구/위험) + 우측 패널(최대 640px) → **프로필 패널**: 폼 카드(아바타 업로드 + 이름·이메일·언어 셀렉트·타임존) + 하단 "변경사항 저장" primary → **알림 패널**: 설정 리스트(§6.5, 각 행: 라벨 + 설명 caption + 우측 스위치 full) → **위험 구역**: `1px solid var(--color-danger)` 카드, 제목 `--color-danger`, "계정 삭제" danger 버튼(확인 모달).
- 저장 시 성공 message "저장했습니다". 미저장 이탈 시 확인 모달.

## §10. 금지 규칙 (Anti-AI-look)

**공통 금지** (AI가 흔히 저지르는 실수 → 대신 할 것):

1. 보라→파랑 그라데이션 히어로 → Quartz에 장식 그라데이션 없음. 배경은 뉴트럴 캔버스(#F5F5F5)/surface, 차트만 데이터 색.
2. 모든 카드에 동일 그림자 → 카드는 `--shadow-0`(그림자 없음, border로 구분). 그림자는 오버레이(드롭다운·모달·토스트)에만.
3. 3열 아이콘+제목+설명 카드 반복 → KPI 카드(숫자 중심)나 데이터 테이블로. 마케팅식 feature 카드 금지.
4. `border: 1px solid #eee` 남발 → border는 1급 시민이되 **토큰만** 쓴다(`--color-border`/`--color-border-secondary`/`--color-border-strong`). 임의 #eee/#ddd 금지.
5. 이모지를 아이콘 대신 사용 → 16px 인라인 SVG(stroke 1.6~2px). 이모지 UI 금지(§8).
6. 화면마다 다른 radius → §5 스케일 5값만. 컨트롤은 6px 고정.

**Quartz 고유 금지** (Q1~Q8):

1. **Q1 그림자로 카드를 구분하기 금지** → 면 분리는 border(#F0F0F0/#D9D9D9) + 회색 캔버스 위 흰 surface로. 카드에 box-shadow 상시 적용 금지(hover 시 `--shadow-1`만 예외).
2. **Q2 테이블을 카드 그리드로 대체 금지** → 표 형식 데이터는 진짜 `<table>`로. 모바일에서도 가로 스크롤로 컬럼을 유지한다. 정보 밀도를 버리고 카드 리스트로 흩뿌리지 않는다(Jelly의 J1과 정반대).
3. **Q3 과장된 스프링/바운스 모션 금지** → press에 scale 금지, 색 전환(100ms)만. 오버레이는 200~300ms subtle. `--ease-spring` 같은 오버슈트 곡선 금지(팝오버의 절제된 `--ease-out-back`만 예외).
4. **Q4 primary 버튼 남용 금지** → solid primary는 화면당 1개(주 액션). 나머지는 default(outline)/text/link로 강등. 툴바에 파란 버튼 여러 개 금지.
5. **Q5 radius 16px+ 둥근 카드 금지** → 6px(컨트롤)/8px(카드) 고정. pill 버튼·둥근 카드로 "친근하게" 만들지 않는다. 엔터프라이즈는 각지다.
6. **Q6 폼 라벨을 placeholder로 대체 금지** → 모든 입력은 상단 라벨 + 필수 표시. placeholder는 예시/힌트 전용이며 라벨을 대신하지 않는다.
7. **Q7 색으로만 상태 전달 금지** → 상태 태그는 항상 색 + (점/아이콘/텍스트 라벨) 병기. "빨간 점"만으로 실패를 표현하지 않는다(색맹 접근성).
8. **Q8 유채색 대면적 채움 금지** → primary/success/danger 대면적 배경 금지. 유채색은 버튼·활성 탭 인디케이터·선택 행(soft)·태그(soft)·차트에만. 나머지는 뉴트럴 + border가 지배.

## §11. Tailwind v4 / React 매핑 (부록)

```css
/* app.css — tokens.css를 불러온 뒤 Tailwind 토큰으로 매핑 */
@import "tailwindcss";
@import "../presets/7-quartz/tokens.css";

@theme inline {
  --color-bg: var(--color-bg);
  --color-surface: var(--color-surface);
  --color-surface-sunken: var(--color-surface-sunken);
  --color-text: var(--color-text);
  --color-text-sub: var(--color-text-sub);
  --color-primary: var(--color-primary);
  --color-primary-soft: var(--color-primary-soft);
  --color-selected: var(--color-selected);
  --color-danger: var(--color-danger);
  --color-success: var(--color-success);
  --color-border: var(--color-border);
  --color-border-secondary: var(--color-border-secondary);
  --radius-md: var(--radius-md);
  --radius-lg: var(--radius-lg);
  --font-sans: var(--font-family);
  --ease-out-back: var(--ease-out-back);
  --ease-in-out: var(--ease-in-out);
}
```

```tsx
// 버튼 — 색 전환만(스케일 금지). h-8 = 32px, rounded-md = 6px
export function Button({ variant = "default", ...props }: BtnProps) {
  const base = "h-8 px-4 rounded-md text-[14px] border transition-colors " +
    "duration-100 ease-out focus-visible:outline-none " +
    "focus-visible:border-primary focus-visible:shadow-[0_0_0_2px_var(--color-focus-ring)]";
  const styles = {
    primary: "bg-primary text-white border-transparent hover:bg-[var(--color-primary-hover)]",
    default: "bg-surface text-text border-border hover:border-[var(--color-primary-hover)] hover:text-[var(--color-primary-hover)]",
    text:    "bg-transparent border-transparent text-text-sub hover:bg-[var(--color-hover)]",
  }[variant];
  return <button className={`${base} ${styles}`} {...props} />;
}

// 테이블 행 — hover는 배경색만, tabular-nums 수치 열
export function Row({ name, email, role, status, joined }: RowProps) {
  return (
    <tr className="hover:bg-[var(--color-hover)] transition-colors duration-100">
      <td className="px-4 py-3 text-[14px]">
        <div className="font-medium text-text">{name}</div>
        <div className="text-[12px] text-text-sub">{email}</div>
      </td>
      <td className="px-4 py-3"><Tag tone="neutral">{role}</Tag></td>
      <td className="px-4 py-3"><StatusTag status={status} /></td>
      <td className="px-4 py-3 text-right text-[14px] tabular-nums">{joined}</td>
    </tr>
  );
}
```

**StyleSeed 호환 메모:** tokens.css의 `--color-*`/`--radius-*`/`--motion-*`/`--ease-*`는 StyleSeed theme.css의 동명 슬롯에 1:1로 옮겨진다. 모션 시드는 "Snap" 계열(빠른 색 전환, 오버레이만 짧은 진입)에 대응. `--font-size-*` 7단계는 StyleSeed type scale의 display/stat/title/heading/subhead/body/caption 슬롯에 순서대로 매핑한다. border-first 설계이므로 `--color-border-*` 3종을 반드시 함께 옮긴다.

## §12. 채점 루브릭

합격선: **verifiable 10항목 전부 통과(65점 만점 중 65점) + subjective 5항목 평균 4.0 이상**.
하나라도 미달이면 불합격 — loop-runner는 미달 항목만 고쳐 재채점한다.
판정 대상 파일 집합을 `$F`(html/css/tsx 글롭)로 표기한다.

### verifiable 항목 (기계 판정, 65점)

| # | 항목 | 배점 | 판정 방법 |
|---|---|---|---|
| V1 | 대비율: 실제 사용된 bg/text·surface/text·primary/primary-text 쌍 4.5:1 이상, vivid·accent·warning 그래픽 쌍 3:1 이상 | 10 | 결과물 hex를 추출해 WCAG 공식으로 계산: `L=0.2126R'+0.7152G'+0.0722B'` (c'=c/12.92 if c≤0.03928 else ((c+0.055)/1.055)^2.4), `CR=(L1+0.05)/(L2+0.05)`. §2.3 표와 대조. 토큰 무변경 사용 시 §2.3 표 인용으로 통과 |
| V2 | 스페이싱 스케일 외 값 0개 | 8 | `grep -rhoE '(margin\|padding\|gap\|inset)[a-z-]*:[^;]+' $F \| grep -oE '[0-9]+px' \| grep -vwE '(0\|4\|8\|12\|16\|20\|24\|32\|40\|48\|64)px'` → 출력 0줄 |
| V3 | 타입 스케일 외 font-size 0개 | 8 | `grep -rhoE 'font-size:\s*[0-9.]+(px\|rem\|em)' $F \| grep -vE ':\s*(12\|14\|16\|20\|24\|30\|38)px'` → 출력 0줄 (rem/em 사용 자체가 위반) |
| V4 | radius가 §5 스케일 값만 | 5 | `grep -rhoE 'border-radius:[^;]+' $F \| grep -oE '[0-9]+px' \| grep -vwE '(2\|4\|6\|8\|999)px'` → 출력 0줄 |
| V5 | shadow가 §5 표 4단계와 일치 | 5 | `grep -rhoE 'box-shadow:[^;]+' $F` 의 모든 값이 `var(--shadow-[0-3])` 참조이거나 focus-ring(`0 0 0 2px var(--color-focus-ring)`)이거나 tokens.css의 `--shadow-*` 정의 문자열과 일치 → 불일치 0건 |
| V6 | `prefers-reduced-motion` 대응 존재 | 5 | `grep -rl 'prefers-reduced-motion' $F \| wc -l` ≥ 1 |
| V7 | 외부 리소스 0 (CDN 폰트/스크립트/이미지) | 5 | `grep -rnE 'https?://[^"'"'"')( ]+\.(css\|js\|woff2?\|ttf\|png\|jpe?g\|webp\|svg)\|fonts\.googleapis\|cdn\.\|unpkg\|jsdelivr' $F` → 출력 0줄 |
| V8 | border-first: 진짜 테이블 존재 + 카드에 상시 box-shadow 없음 | 5 | `grep -riE '<table' $F \| wc -l` ≥ 1 **그리고** 정적 카드 클래스에 `box-shadow:` 상시 선언이 `var(--shadow-1~3)` hover 외에 없어야 함(수동 확인: 카드 규칙에 `--shadow-0`/none) |
| V9 | press 스케일 없음 + 모션 easing 토큰 사용 | 7 | `grep -rE 'active:scale\|:active[^}]*scale\(' $F \| wc -l` = 0 (§10 Q3) **그리고** `grep -rE 'var\(--ease-(out\|in-out\|out-back\|in)\)\|cubic-bezier\(0\.645, 0\.045\|cubic-bezier\(0\.215, 0\.61\|cubic-bezier\(0\.12, 0\.4' $F \| wc -l` ≥ 1 |
| V10 | 수치 tabular-nums + 폼 라벨 존재(placeholder 대체 아님) | 7 | `grep -r 'tabular-nums' $F \| wc -l` ≥ 1 **그리고** 폼이 있으면 `<label` 개수 ≥ 입력 개수(placeholder만 있는 입력 0개; `grep -oE '<input' \| wc -l` ≤ `grep -oE '<label' \| wc -l`) |

### subjective 항목 (AI/사람 채점, 5점 척도 ×5항목 — 평균 4.0 이상 합격)

| # | 항목 | 1점 앵커 | 3점 앵커 | 5점 앵커 |
|---|---|---|---|---|
| S1 | §1 첫인상 부합 (밀도·border·각진 6px) | 여백 위주로 성기고 radius가 16px+로 둥글며 그림자로 카드를 나눈다 | 밀도는 있으나 border 대신 그림자를 쓰거나 radius가 일부만 6px | 회색 캔버스+흰 카드+border로 밀도 높게 정돈되고 모든 컨트롤이 6px로 각지다 |
| S2 | §8 어조 준수 (합니다체·명사형 버튼) | 친근체("~할게요")·이모지·느낌표 남발 | 합니다체이나 버튼이 문장형이거나 에러가 원인만/해결만 | 전 카피 명료한 합니다체, 버튼 명사/동사원형("저장"), 에러 [원인+다음 행동] |
| S3 | 모션 절제 (§7) | 모션 없음 또는 press에 bounce/scale 튐 | 색 전환은 있으나 오버레이 진입/탭 인디케이터 성격이 약함 | press는 색만, 드롭다운·모달 subtle 진입, 탭 밑줄 슬라이드 — §7 표와 일치 |
| S4 | 정보 밀도 & border 리듬 (§4·§5) | 테이블을 카드로 흩뿌리거나 임의 여백으로 성김/빽빽 불규칙 | 밀도는 맞으나 셀/행 간격이 스케일 이탈 또는 border 색 임의 | 진짜 테이블, 8px 배수 리듬, 토큰 border 3종으로 위계가 선으로 읽힘 |
| S5 | §10 정성 항목 (유채색 면적·CTA 수·상태 표식) | 그라데이션/대면적 유채색 또는 primary CTA 여러 개 | 위반은 없으나 primary 면적이 넓거나 상태를 색으로만 전달 | 유채색은 버튼·태그·차트에만, 화면당 primary 1개, 상태는 색+표식 병기, 뉴트럴 지배 |

**채점 절차:** verifiable은 판정 명령을 그대로 실행해 pass/fail 기록 → subjective는 5화면을 라이트/다크 각각 확인해 앵커와 대조, 1~5점 부여 → 합산. 4.0 미만 항목은 5점 앵커 조건을 수정 지시문으로 변환해 다음 반복에 넘긴다.
