---
number: 5
codename: Clay
inspired-by: Google Material 3 (Material You) — 서술 참조만, 상표는 파일/클래스명에 사용하지 않음. 이 문서의 모든 수치·hex는 하나의 소스 컬러에서 파생한 독립 해석이며 공식 값이 아니다
mood: 하나의 소스 컬러가 화면 전체에 스며든 톤 팔레트. 부드러운 큰 라운드, 채워진·토널 버튼, 표현적으로 감속하는 모션
best-for: 안드로이드풍 소비자 앱, 생산성·노트·미디어 앱, 톤 기반 브랜드 컬러가 필요한 제품
variants: [a, b]
status: complete
---

# 5 · Clay

## §1. 첫인상 요약

1. **한 색이 화면 전체에 스며 있다.** 배경·카드·입력의 뉴트럴이 소스 컬러(바이올렛) 쪽으로 미세하게 물들어 있고(surface tint), 강조는 전부 그 색의 톤 파생이다. 무채색 회색이 아니라 "색을 머금은 회색"이다.
2. **계층은 그림자가 아니라 톤으로.** 떠오른 면일수록 surface-container 톤이 한 단계 밝아진다(라이트) / 밝아진다(다크). 그림자는 진짜 떠 있는 것(FAB·메뉴·다이얼로그)에만.
3. **모든 것이 크게 둥글다.** 버튼·칩은 full pill(999px), 카드는 12px, 시트·다이얼로그는 28px. 직각·4px 미만 모서리는 없다.
4. **누르면 색이 번진다.** 인터랙션은 색 변화가 아니라 on-color를 8~10% 얹는 state layer(리플)로 표현한다. hover도 press도 focus도 모두 이 레이어다.
5. **표현적으로 감속한다.** 요소는 emphasized easing으로 빠르게 출발해 길게 감속하며 정착한다. 화면은 튀지 않고 "무겁고 부드럽게" 자리 잡는다.

## §2. 색

### 2.1 팔레트

소스 컬러(a=바이올렛 hue 262) 하나에서 primary/secondary/tertiary 톤과 뉴트럴 램프를 파생한 톤 시스템. b 변형은 §2.4 규칙으로 소스 컬러만 교체. 값 원본은 tokens.css.

| 토큰 | 역할 | a 라이트 | a 다크 |
|---|---|---|---|
| `--color-bg` | 배경/기본 surface | `#FDF8FF` | `#141218` |
| `--color-surface-low` | 컨테이너 elevation +1 | `#F8F2FE` | `#1D1B20` |
| `--color-surface` | 카드 기본 컨테이너 | `#F3EDFA` | `#211F26` |
| `--color-surface-high` | 메뉴·시트 컨테이너 | `#EDE7F4` | `#2B2930` |
| `--color-surface-highest` | filled 입력 배경 | `#E7E0EE` | `#36343B` |
| `--color-text` | 본문·제목 (on-surface) | `#1C1B22` | `#E7E0E9` |
| `--color-text-sub` | 보조 본문 (on-surface-variant) | `#48454E` | `#CAC4D0` |
| `--color-text-tertiary` | 캡션·비활성 라벨 | `#605A6B` | `#A39DAC` |
| `--color-primary` | 채워진 버튼·FAB·활성 아이콘·링크 | `#6B4FA1` | `#CFBCFF` |
| `--color-primary-text` | primary 위 텍스트 (on-primary) | `#FFFFFF` | `#37206B` |
| `--color-primary-pressed` | primary pressed 합성색 | `#553B87` | `#E0D3FF` |
| `--color-primary-container` | 톤 컨테이너(넓은 강조면) | `#E9DDFF` | `#523B8C` |
| `--color-on-primary-container` | 그 위 텍스트 | `#23005C` | `#EADDFF` |
| `--color-secondary-container` | 하단 내비 active indicator pill | `#E8DEF8` | `#4A4458` |
| `--color-on-secondary-container` | 그 위 아이콘·라벨 | `#1D192B` | `#E8DEF8` |
| `--color-accent` | tertiary 포인트(태그·강조 텍스트) | `#9C4368` | `#FFB0CB` |
| `--color-accent-text` | accent 위 텍스트 | `#FFFFFF` | `#5E1138` |
| `--color-accent-container` | accent 톤 컨테이너 | `#FFD9E5` | `#7C2E4F` |
| `--color-on-accent-container` | 그 위 텍스트 | `#3E0021` | `#FFD9E5` |
| `--color-danger` | 에러·삭제 | `#B3261E` | `#F2B8B5` |
| `--color-danger-container` / `-on` | 에러 톤 면 / 그 위 텍스트 | `#F9DEDC` / `#410E0B` | `#8C1D18` / `#F9DEDC` |
| `--color-success` | 완료·저장됨 (독립 추가) | `#2E6A45` | `#7ED9A4` |
| `--color-success-container` / `-on` | 완료 톤 면 / 그 위 텍스트 | `#B6F0C9` / `#00210F` | `#0D4527` / `#B6F0C9` |
| `--color-outline` | 기능적 경계(outlined 버튼·입력) | `#79747E` | `#948F9E` |
| `--color-border` | 장식용 얇은 구분선 전용(비대비) | `#CAC4D0` | `#49454F` |
| `--color-surface-tint` | 톤 elevation 오버레이 색 = primary | `#6B4FA1` | `#CFBCFF` |
| `--color-scrim` | 모달·시트 뒤 딤 | `rgba(20,18,24,0.4)` | `rgba(0,0,0,0.6)` |
| `--color-inverse-surface` / `-on` | 스낵바 배경 / 텍스트 | `#322F35` / `#F5EFF7` | `#E7E0E9` / `#322F35` |

**상태 레이어 불투명도(공통):** hover `--state-hover: 0.08`, focus `--state-focus: 0.10`, pressed `--state-pressed: 0.10`, dragged `--state-dragged: 0.16`. 인터랙션은 이 알파의 on-color 오버레이로 표현한다(§6 공통).

### 2.2 라이트/다크

양쪽 완비. 핵심 규칙:
- **뉴트럴은 순회색이 아니라 소스 hue가 미세하게 스민 톤**이다(라이트 bg `#FDF8FF`는 순백이 아니라 보라 끼, 다크 bg `#141218`은 보라 끼 흑색). 순검정(#000)·순백(#FFF)을 배경으로 쓰지 않는다.
- **elevation은 톤으로.** 라이트/다크 모두 떠오른 면일수록 surface-container 값이 밝아진다(surface-low→surface→high→highest). 이 톤 차이가 그림자를 대체한다.
- **다크에서 primary/accent는 밝은 톤으로 교체**(#CFBCFF/#FFB0CB)하고 그 위 텍스트를 짙은 톤으로 뒤집는다(on-primary `#37206B`). 라이트의 어두운 primary를 다크 배경에 그대로 쓰지 않는다(대비 붕괴).
- danger/success도 다크에서 밝은 톤으로 교체(#F2B8B5/#7ED9A4).

### 2.3 대비 규칙 (실측 계산값 명기)

기준: **본문 4.5:1 이상, 대형 텍스트(24px+ 또는 18.7px+/700+)·UI 그래픽 3:1 이상.** 아래는 WCAG 2.x 상대휘도 공식(`L=0.2126R'+0.7152G'+0.0722B'`, `CR=(L1+0.05)/(L2+0.05)`)으로 계산한 실측 대비율.

| 쌍 | a 라이트 | a 다크 | 판정 |
|---|---|---|---|
| bg / text | **16.31:1** | **14.38:1** | ✓ 본문 |
| surface / text | **14.89:1** | **12.60:1** | ✓ 본문 |
| surface-highest / text | **13.26:1** | **9.49:1** | ✓ 본문 |
| bg / text-sub | **8.96:1** | **10.91:1** | ✓ 본문 |
| surface / text-sub | **8.18:1** | **9.56:1** | ✓ 본문 |
| bg / text-tertiary | **6.32:1** | **7.06:1** | ✓ 본문 |
| surface / text-tertiary | **5.77:1** | **6.19:1** | ✓ 본문 |
| primary / primary-text | **6.45:1** | **7.77:1** | ✓ 본문 |
| primary(텍스트로) / bg | **6.15:1** | **10.88:1** | ✓ 본문 |
| primary(텍스트로) / surface | **5.62:1** | **9.54:1** | ✓ 본문 |
| primary-container / on-primary-container | **13.26:1** | **6.89:1** | ✓ 본문 |
| secondary-container / on- | **13.24:1** | **7.19:1** | ✓ 본문 |
| accent / accent-text | **6.15:1** | **7.64:1** | ✓ 본문 |
| accent(텍스트로) / bg | **5.87:1** | **10.91:1** | ✓ 본문 |
| accent-container / on- | **13.29:1** | **6.91:1** | ✓ 본문 |
| danger / danger-text | **6.54:1** | **7.66:1** | ✓ 본문 |
| danger(텍스트로) / bg | **6.24:1** | **10.89:1** | ✓ 본문 |
| danger-container / on- | **12.77:1** | **7.17:1** | ✓ 본문 |
| success / success-text | **6.43:1** | (텍스트로 bg **10.93:1**) | ✓ 본문 |
| success(텍스트로) / bg | **6.14:1** | **10.93:1** | ✓ 본문 |
| success-container / on- | **13.31:1** | **8.59:1** | ✓ 본문 |
| inverse-surface / inverse-on (스낵바) | **11.65:1** | **10.19:1** | ✓ 본문 |
| outline / bg (UI 경계) | **4.35:1** | **5.92:1** | ✓ UI 3:1 |
| outline / surface (UI 경계) | **3.97:1** | **5.19:1** | ✓ UI 3:1 |

b 변형(틸 hue 184) 주요 쌍 실측: 라이트 primary(#00696E)/흰 텍스트 **6.47:1**, primary/surface(텍스트) **5.64:1**, container/on **13.19:1**, accent(#4C6358)/bg **6.20:1** — 다크 primary(#4DD9DF)/on(#00373A) **7.66:1**, primary/bg(텍스트) **10.90:1**, container/on **7.24:1**. 전부 통과.

추가 제약:
- **`--color-primary` 위 텍스트는 항상 `--color-primary-text`.** 다크에서는 짙은 톤(#37206B)이며 흰색이 아니다.
- **`--color-border`(outline-variant)는 텍스트·기능 경계 금지 — 얇은 장식 구분선 전용.** 대비 3:1을 넘지 않으므로(라이트 1.49:1) 정보 전달 경계에는 `--color-outline`을 쓴다.
- **넓은 강조 면적은 순 primary가 아니라 `--color-primary-container`(톤)**을 쓴다. 순 primary는 버튼·FAB·활성 아이콘 등 작은 면적에만(§10 C1).
- 새 색 조합은 이 표의 해당 행을 재계산해 4.5/3.0을 넘겨야 채택. 미달이면 폐기.

### 2.4 팔레트 생성 규칙 (변형·랜덤용)

**고정 (변형이 건드릴 수 없는 것):**
- 뉴트럴 램프 구조: bg/surface-low/surface/high/highest/text/text-sub/text-tertiary가 소스 hue를 미세하게 머금은 톤이라는 성질. 변형은 소스 hue가 바뀌면 뉴트럴 tint 방향도 같이 바뀌지만, **명도 단계(L 값)와 대비 관계는 이 표를 그대로 유지**한다.
- danger(hue 356±6)·success(hue 150±10)의 의미와 값. 삭제·에러=danger, 완료=success.
- 토큰 구조: primary 5종(primary/text/pressed/container/on-container) + secondary-container 2종 + accent 4종 + surface-tint를 반드시 전부 제공.
- 채도·명도 범위: 라이트 primary는 HSL 기준 **S 30~55%, L 40~50%**(흰 텍스트 4.5:1 확보 구간), container는 동일 hue **S 45~100%, L 90~95%**. 다크 primary는 **L 75~85%**로 밝히고 on-primary는 같은 hue **L 25~35%**.

**자유 (변형이 바꾸는 것):**
- 소스 컬러 hue 0~360 자유. 단 danger(350~2)·success(140~160)와 ±15° 이내로 겹치면 시맨틱 색과 혼동되므로 그 구간은 피해 다시 뽑는다.
- accent(tertiary)는 소스 hue **+60° 전후**(Material의 tertiary 파생 관례)로 자동 산출. secondary-container는 소스 hue의 저채도 톤.
- 뉴트럴 tint: 소스 hue를 뉴트럴에 **채도 4~8%**로 섞는다(그 이상은 회색이 물들어 보이므로 금지).

**랜덤 명명 `5-r<hue>`** (예: `5-r262` = 소스 hue 262, `5-r184` = b와 동일한 틸):
1. hue h를 뽑는다 → `primary = hsl(h, 42%, 45%)`(라이트)에서 시작.
2. 흰 텍스트 대비 4.5:1 미달이면 L을 2%p씩 내려 **최초로 통과하는 값을 채택**(결정적 절차 — 같은 이름이면 항상 같은 색).
3. pressed는 primary에서 L −10%p, container는 hsl(h, 60%, 92%)(라이트)·hsl(h, 45%, 38%)(다크), accent hue는 h+60°로 같은 절차 반복.
4. 다크 primary는 hsl(h, 90%, 80%), on-primary는 hsl(h, 70%, 28%).
5. §2.3 표의 전 행을 재계산해 하나라도 미달이면 그 hue는 폐기하고 다시 뽑는다. 통과한 hue만 `5-r<h>`로 명명.

## §3. 타이포그래피

**폰트 스택** (외부 로드 금지 — Roboto가 없으면 시스템 산세리프로 폴백):

```css
--font-family: Roboto, 'Roboto Flex', 'Noto Sans KR', 'Apple SD Gothic Neo',
               -apple-system, BlinkMacSystemFont, system-ui, 'Segoe UI', sans-serif;
```

**타입 스케일** — 이 9단계(font-size 7개 고유값: 45/28/22/16/14/12/11px) 외 font-size 사용 금지:

| 이름 | size | weight | line-height | letter-spacing | 용도 |
|---|---|---|---|---|---|
| display | 45px | 400 | 1.16 | 0 | 표현적 대형 헤드라인(홈 인사·온보딩·프로필 상단) |
| headline | 28px | 400 | 1.29 | 0 | 화면 타이틀(라지 앱바 확장 상태) |
| title-lg | 22px | 400 | 1.27 | 0 | 앱바 타이틀, 카드 큰 제목 |
| title | 16px | 500 | 1.5 | 0.01em | 리스트 섹션 헤더, 다이얼로그 제목 |
| body | 16px | 400 | 1.5 | 0.03em | 본문 주 텍스트, 노트 본문 |
| body-sm | 14px | 400 | 1.43 | 0.02em | 보조 본문, 리스트 2번째 줄 |
| label | 14px | 500 | 1.43 | 0.007em | 버튼 라벨, 칩, 탭 라벨(넓은 폭) |
| label-sm | 12px | 500 | 1.33 | 0.04em | 캡션, 뱃지, 헬퍼 텍스트 |
| label-xs | 11px | 500 | 1.45 | 0.04em | 하단 내비 라벨(최소, 이보다 작게 금지) |

**위계 규칙:**
- **display·headline은 weight 400의 큰 글씨** — Material의 시그니처. 크게 하되 굵히지 않는다. 헤딩을 굵게 만들고 싶으면 크기를 올리지 700을 쓰지 않는다.
- weight는 **400/500의 2종이 기본**. 700(bold)은 emphasized 강조(선택된 탭 라벨, 금액 강조) 1화면 3곳 이하로 절제.
- 한 화면에 display 또는 headline 계열은 **1개만**. title-lg 1~2개.
- **버튼·칩·탭 라벨은 label(14px/500)**, letter-spacing 0.007em로 살짝 벌린다(Material 라벨 특징).
- 숫자(카운트·날짜)는 `font-variant-numeric: tabular-nums`.

**금지:** 임의 font-size 사용 금지 — 위 7개 고유값만. rem/em 단위도 스케일 이탈로 간주(§12 V3).

## §4. 간격 · 레이아웃

**스페이싱 스케일** — 8dp 그리드 기반, 이 값 외 margin/padding/gap 사용 금지 (0 제외):

```
4  8  12  16  24  32  40  48  64  (px)
```

(Jelly의 20px가 없다 — Clay는 8dp 그리드에 충실해 16→24로 건너뛴다. 이 리듬 차이가 두 프리셋을 구분한다.)

| 항목 | 값 |
|---|---|
| 화면 좌우 기본 패딩 | 16px |
| 섹션 간 간격 | 24px (큰 전환은 32px) |
| 카드·컨테이너 내부 패딩 | 16px |
| 리스트 아이템 상하 패딩 | 8px (1줄 행 min-height 56px / 2줄 72px) |
| 리스트 아이콘↔텍스트 | 16px |
| 제목↔본문 | 8px, 본문↔보조 4px |
| 상단 앱바 높이 | 64px |
| 하단 내비게이션 바 | 80px + `env(safe-area-inset-bottom)` |
| FAB | 56×56px, 화면 우하단 16px 여백 |
| 표준 버튼 높이 | 40px (프로미넌트 CTA 56px) |
| 터치 타깃 | 최소 48×48px (Material 48dp — Jelly의 44보다 크다) |

**컨테이너·그리드:**
- 모바일 기준 폭 390px, 단일 컬럼. 세로 스택 + 리스트가 기본.
- **데스크톱(840px+)에서는 중앙 420px 프레임**: `max-width: 420px; margin: 0 auto;` 프레임 radius 28px, `--shadow-4`, 밖 배경 라이트 `#E5E0EB` / 다크 `#0B0A0F`.
- 노트 카드 목록은 예외적으로 2열(gap 16px) staggered 그리드 허용(§9 screen-1). 3열 이상 금지.

## §5. 형태 (Shape)

**radius 스케일 (Material shape scale)** — 이 값 외 border-radius 금지:

| 토큰 | 값 | 적용처 |
|---|---|---|
| `--radius-xs` | 4px | 스낵바 내부 요소, 리니어 인디케이터 |
| `--radius-sm` | 8px | 칩 외 작은 카드, 스니펫 |
| `--radius-md` | 12px | 카드, filled 입력 상단 모서리 |
| `--radius-lg` | 16px | FAB(표준), 큰 카드, 이미지 썸네일 |
| `--radius-xl` | 28px | 바텀시트 상단, 다이얼로그, extended FAB |
| `--radius-full` | 999px | 버튼·칩 pill, 아바타, switch, 내비 active indicator |

- **인터랙티브 요소의 최소 radius는 8px, 버튼·칩은 full pill.** 직각·4px 미만 모서리 금지(스낵바 내부 xs 제외).
- **border는 outlined 컴포넌트에만.** outlined 버튼·입력·카드는 `1px solid var(--color-outline)`. 그 외 면 분리는 surface-container 톤 차이로. `--color-border`(outline-variant)는 리스트 그룹 사이 얇은 장식 구분선(1px)에만, 화면당 절제.

**elevation** — 1차 신호는 **톤(surface-container 단계)**, shadow는 떠 있는 요소 전용:

| 토큰 | 라이트 값 | 다크 값 | 용도 |
|---|---|---|---|
| `--shadow-0` | `none` | `none` | 기본. 카드는 그림자 없이 surface 톤으로 구분 |
| `--shadow-1` | `0 1px 2px rgba(0,0,0,.30), 0 1px 3px 1px rgba(0,0,0,.15)` | (검정 강화) | elevated 카드, 스크롤된 앱바 |
| `--shadow-2` | `0 1px 2px rgba(0,0,0,.30), 0 2px 6px 2px rgba(0,0,0,.15)` | (검정 강화) | FAB, 드롭다운 메뉴 |
| `--shadow-3` | `0 4px 8px 3px rgba(0,0,0,.15), 0 1px 3px rgba(0,0,0,.30)` | (검정 강화) | 다이얼로그, 바텀시트 |
| `--shadow-4` | `0 6px 10px 4px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.30)` | (검정 강화) | 데스크톱 프레임, FAB press |

**톤 elevation 규칙:** 컨테이너를 한 단계 올릴 때 그림자를 더하는 게 아니라 surface-low→surface→high→highest로 배경 톤을 올린다. 이것이 Material의 핵심 차별점(§10 C2).

## §6. 핵심 컴포넌트 규칙

**공통 상태 레이어(state layer):** 모든 인터랙티브 요소는 색을 바꾸는 대신 **on-color를 알파로 얹어** 상태를 표현한다.
- hover(데스크톱): on-color @ `--state-hover`(8%) 오버레이
- focus-visible: on-color @ `--state-focus`(10%) + `outline: none`(레이어로 표현) 또는 3:1 링
- press: on-color @ `--state-pressed`(10%) — 중심에서 퍼지는 리플 400ms `--ease-legacy`(§7). reduced-motion 시 리플 없이 즉시 오버레이.

예: filled 버튼의 press는 `background`를 바꾸지 않고 `::after`에 `background: var(--color-primary-text); opacity: 0.10`를 얹는다.

### 6.1 버튼 (Filled / Tonal / Outlined / Text)

- **Filled(primary)**: h 40px(CTA 56px), radius full, bg `--color-primary`, 라벨 label(14px/500) `--color-primary-text`, 좌우 패딩 24px. 주요 단일 액션.
- **Tonal**: 동일 치수, bg `--color-secondary-container`, 라벨 `--color-on-secondary-container`. Filled보다 한 단계 약한 강조(예: "취소" 옆 "저장").
- **Outlined**: bg 투명, `1px solid var(--color-outline)`, 라벨 `--color-primary`. 중립 보조 액션.
- **Text**: bg 투명, 라벨 `--color-primary`, 좌우 패딩 12px. 앱바·다이얼로그 안 저강조 액션.
- 상태: 전부 §6 공통 state layer. disabled는 on-surface @ 12% bg + 38% 라벨(`color-mix` 또는 `--color-text-tertiary`).

```css
.btn-filled { position: relative; height: 40px; border: 0; border-radius: var(--radius-full);
  padding: 0 24px; background: var(--color-primary); color: var(--color-primary-text);
  font-size: var(--font-size-label); font-weight: 500; letter-spacing: 0.007em; overflow: hidden;
  transition: box-shadow var(--motion-short2) var(--ease-standard); }
.btn-filled::after { content: ""; position: absolute; inset: 0;
  background: var(--color-primary-text); opacity: 0; transition: opacity var(--motion-short1) linear; }
.btn-filled:hover::after { opacity: var(--state-hover); }
.btn-filled:active::after { opacity: var(--state-pressed); }
```

### 6.2 FAB (Floating Action Button)

- 표준 FAB 56×56px radius 16px(`--radius-lg`), bg `--color-primary-container`, 아이콘 24px `--color-on-primary-container`, `--shadow-2`. 화면 우하단 고정, 하단 내비 위 16px.
- Extended FAB: h 56px radius 16px, 아이콘 24px + 라벨 label, 좌우 패딩 16/20px.
- press: `--shadow-4`로 상승 + state layer. 스크롤 다운 시 라벨 접힘(extended→표준) 300ms `--ease-emphasized`.
- **주요 생성 액션은 FAB로 노출**한다. 앱바 텍스트 버튼에 숨기지 않는다(§10 C8).

### 6.3 입력 필드 (Filled / Outlined)

- **Filled**(기본): h 56px, bg `--color-surface-highest`, radius 12px 12px 0 0(상단만), 하단 인디케이터 `1px solid var(--color-outline)` → focus 시 `2px solid var(--color-primary)`. 라벨은 필드 안 위쪽에서 focus/값 입력 시 label-sm로 축소 이동(floating label) 200ms `--ease-standard`.
- **Outlined**: h 56px, `1px solid var(--color-outline)` 4면 radius 4px→ 실제 `--radius-xs`는 금지이므로 outlined 입력은 radius 8px, focus 시 `2px solid var(--color-primary)`, 라벨이 상단 경계선에 걸침.
- 값 16px(body), 라벨 축소 시 12px, 헬퍼/에러 텍스트 12px 하단 4px.
- 에러: 인디케이터·라벨·헬퍼를 `--color-danger`로. 흔들림 없음(Material은 색·아이콘으로만).

### 6.4 카드 (Filled / Elevated / Outlined)

- **Filled**(기본): bg `--color-surface`, radius 12px, 패딩 16px, `--shadow-0`. 톤으로만 배경과 분리.
- **Elevated**: bg `--color-surface-low`, `--shadow-1`. 목록에서 개별적으로 떠야 할 때만.
- **Outlined**: bg `--color-bg`, `1px solid var(--color-outline)`, `--shadow-0`.
- 카드 안 카드 금지(중첩 1단). 제목 title 또는 title-lg.

### 6.5 리스트 아이템

- 1줄 min-height 56px / 2줄 72px, 상하 패딩 8px(좌우 화면 패딩 16px). 구조: [leading 아이콘 24px 또는 아바타 40px] –16px– [주 텍스트 body(16/400) + 보조 body-sm(14/400) `--color-text-sub`] – [trailing: 메타 label-sm / switch / 셰브론 24px].
- **행 사이 구분선 금지** — 톤과 간격으로 분리. 그룹 사이에만 `--color-border` 1px 허용.
- press: 행 전체에 on-surface state layer 10%(리플). 선택 상태(멀티선택)는 `--color-secondary-container` 배경.

### 6.6 상단 앱바 (Top App Bar)

- Small: h 64px, 좌 내비 아이콘(뒤로/메뉴 24px, 히트 48px), 타이틀 title-lg(22/400) 좌측 정렬 또는 중앙, 우측 액션 아이콘 최대 2개 + 오버플로 메뉴.
- 배경 `--color-bg`. 스크롤 시 `--color-surface` 톤으로 전환 + `--shadow-0` 유지(톤으로만). Large 앱바는 확장 시 headline(28/400), 스크롤하면 title-lg로 축소.
- **햄버거 드로어는 태블릿+에서만**, 모바일 주 내비는 하단 바(§10 C-nav).

### 6.7 하단 내비게이션 바 (Navigation Bar)

- h 80px + safe-area, 3~5개 대상. 각 항목: 세로 스택 = [active indicator pill 64×32px radius full] 안의 아이콘 24px + 아래 라벨 label-xs(11/500).
- **활성 표시는 색이 아니라 pill**: 활성 항목만 아이콘 뒤에 `--color-secondary-container` pill이 나타난다. 활성 아이콘·라벨 `--color-on-secondary-container`(아이콘)·`--color-text`, 비활성 `--color-text-sub`.
- pill 등장: `scaleX(0.6)→1` + opacity 200ms `--ease-standard-decelerate`. bg `--color-surface`(톤으로 본문과 분리, 상단 구분선 없음).

### 6.8 바텀시트 / 다이얼로그

- **바텀시트**(기본 오버레이): 하단 부착, radius 28px 28px 0 0, bg `--color-surface-high`, `--shadow-3`, 상단 그랩바(drag handle) 32×4px `--color-text-tertiary` radius full 위 8px, 내부 패딩 16px. 진입 `translateY(100%)→0` 400ms `--ease-emphasized-decelerate` + scrim fade 200ms.
- **다이얼로그**(파괴적 확인·집중 입력): 중앙, 폭 `min(100%-48px, 360px)`, radius 28px, bg `--color-surface-high`, `--shadow-3`, 패딩 24px. 제목 title-lg, 본문 body-sm, 하단 우측 Text 버튼 2개(취소 + 확정). 진입 opacity + `scale(0.9)→1` 300ms `--ease-emphasized`.

### 6.9 스낵바 (Snackbar)

- 하단 내비 위 16px(또는 FAB 위), bg `--color-inverse-surface`, 텍스트 body-sm `--color-inverse-on-surface`, radius 4px(`--radius-xs`), 패딩 16px, `--shadow-3`, 선택적 액션은 Text 버튼(라벨 `--color-primary` 계열의 inverse-primary — 여기선 `--color-primary` 대신 밝은 톤).
- 진입 opacity + `translateY(8px)→0` 200ms `--ease-emphasized-decelerate`, 4초 자동 소멸. 한 번에 1개만.

### 6.10 칩 (Assist / Filter / Input)

- h 32px, radius 8px(`--radius-sm`), 패딩 0 16px(아이콘 있으면 좌 8px), 라벨 label(14/500).
- **Assist/Suggestion**: bg `--color-bg`, `1px solid var(--color-outline)`, 라벨 `--color-text`.
- **Filter(선택형)**: 미선택 outlined → 선택 시 bg `--color-secondary-container`, 라벨 `--color-on-secondary-container`, 좌측 체크 18px 등장(border 제거). 토글은 state layer + 300ms.
- **Input(제거 가능)**: 우측 x 18px.

### 6.11 스위치 (Switch)

- 트랙 52×32px radius full, thumb 원. **off**: 트랙 bg `--color-surface-highest` + `2px solid var(--color-outline)`, thumb 16px `--color-outline`(안쪽). **on**: 트랙 bg `--color-primary`, thumb 24px `--color-primary-text`(체크 아이콘 선택) 오른쪽 이동.
- thumb 이동·크기 변화 `--motion-medium2`(300ms) `--ease-emphasized`. 히트 영역 48px. 설정 토글의 기본 컨트롤(§9 screen-4).

### 6.12 뱃지 & 빈 상태

- **뱃지**: 작은 점 6px 또는 숫자 뱃지 h 16px 패딩 0 4px radius full, bg `--color-danger`, 텍스트 label-xs `--color-danger-text`. 아이콘 우상단.
- **빈 상태**: 세로 중앙 = 아이콘 원 64px bg `--color-primary-container`(아이콘 32px `--color-on-primary-container`) → 16px → 제목 title-lg(22/400) → 8px → 설명 body-sm `--color-text-sub` → 24px → Tonal 또는 Filled 버튼 1개. 카피는 §8("아직 노트가 없어요" + 다음 행동).

## §7. 모션

**모션 성격 한 줄: "표현적으로 감속한다 — emphasized easing으로 빠르게 출발해 길게 정착하고, 상태 변화는 리플로 번진다."**

**토큰:**

```css
--motion-short1: 50ms;    /* 상태 레이어 페이드 */
--motion-short2: 100ms;   /* 색·아이콘 전환 */
--motion-short4: 200ms;   /* 리플·소형 전환·시트 scrim */
--motion-medium2: 300ms;  /* FAB 모프·칩 선택·스위치·다이얼로그 */
--motion-medium4: 400ms;  /* 컨테이너 트랜스폼·바텀시트·페이지 */
--motion-long2: 500ms;    /* 대형 공유축 전환 */

--ease-emphasized: cubic-bezier(0.2, 0, 0, 1);
--ease-emphasized-decelerate: cubic-bezier(0.05, 0.7, 0.1, 1);
--ease-emphasized-accelerate: cubic-bezier(0.3, 0, 0.8, 0.15);
--ease-standard: cubic-bezier(0.2, 0, 0, 1);
--ease-standard-decelerate: cubic-bezier(0, 0, 0, 1);
--ease-standard-accelerate: cubic-bezier(0.3, 0, 1, 1);
--ease-legacy: cubic-bezier(0.4, 0, 0.2, 1);
```

**패턴별 규칙:**

| 패턴 | 규칙 |
|---|---|
| press(리플) | 클릭 지점에서 on-color @ 10% 원이 `scale(0→1)` 400ms `--ease-legacy`로 퍼진 뒤 페이드. 떼면 200ms 페이드아웃 |
| hover/focus | state layer opacity 50ms `--ease-standard` (transform 없음) |
| 진입(entrance) | `opacity 0→1` + `translateY(12px)→0`, 400ms `--ease-emphasized-decelerate` |
| 퇴장 | opacity + translateY, 200ms `--ease-emphasized-accelerate` (진입보다 빠르게) |
| 리스트 스태거 | 항목당 30ms 지연, 최대 8개 |
| 페이지 전환 | 공유축(shared-axis): 나가는 화면 `translateX(-30px)`+fade-out 200ms accelerate → 들어오는 화면 `translateX(30px)→0`+fade-in 300ms decelerate |
| FAB 모프 | 스크롤 시 extended↔표준 폭 변화 300ms `--ease-emphasized`. 화면 전환 시 FAB→시트 컨테이너 트랜스폼 400ms |
| 바텀시트 | `translateY(100%)→0` 400ms `--ease-emphasized-decelerate`, scrim fade 200ms |
| 스위치 | thumb 위치·크기 300ms `--ease-emphasized` |
| 내비 pill | `scaleX(0.6)→1`+opacity 200ms `--ease-standard-decelerate` |

**`prefers-reduced-motion` 대응 필수:** transform/스케일/모프/리플 전부 제거, opacity·background-color 전환만 100ms 유지(tokens.css 전역 블록 참조). 리플은 즉시 오버레이로 대체.

## §8. 보이스 & 톤 (마이크로카피)

- **해요체 고정.** "~하십시오"·"~바랍니다" 금지. 반말 금지. Material 제품군의 담백하고 명료한 톤을 한국어 해요체로 옮긴다.
- 문장은 한 호흡(20자 내외), 사용자가 주어. 시스템 주어("시스템이", "요청이") 금지.
- 이모지: **화면당 최대 1개**, 성공·빈 상태에서만. 버튼·에러 금지.
- 버튼 라벨은 **동사 원형/명령형 간결체**("저장", "삭제", "보관")를 기본으로 하되, 확정 CTA는 해요체("저장할게요")도 허용.

| 상황 | Clay 카피 | 금지 예 |
|---|---|---|
| 주요 CTA(생성) | 새 노트 | 추가하기, 생성 |
| 저장 | 저장 | 제출, 확인 |
| 다이얼로그 확정 | 삭제할게요 | 실행, 예 |
| 다이얼로그 취소 | 취소 | 아니오, 닫기 |
| 완료(스낵바) | 저장했어요 | 저장이 완료되었습니다 |
| 실행 취소 액션 | 실행 취소 | 되돌리기(Undo) |
| 에러(저장 실패) | 저장하지 못했어요. 잠시 후 다시 시도해 주세요 | 오류가 발생했습니다 |
| 에러(네트워크) | 연결이 끊겼어요. 네트워크를 확인해 주세요 | 네트워크 오류 (E-1024) |
| 빈 상태 | 아직 노트가 없어요 | 데이터가 존재하지 않습니다 |
| 로딩 | 불러오는 중이에요 | 로딩 중입니다. 기다려 주십시오 |
| 검색 없음 | '회의' 검색 결과가 없어요 | 검색 결과 없음 |

- 에러는 **[무슨 일인지 1문장] + [지금 할 수 있는 일 1문장]** 구조. 에러 코드·기술 용어 노출 금지.
- 스낵바는 사실을 짧게 알리고(예: "노트를 보관했어요") 되돌릴 수 있으면 "실행 취소" 액션을 붙인다.
- 금지 표현: "실패하였습니다", "잘못된 입력입니다", 반복되는 "죄송합니다", 느낌표 2개 이상.

## §9. 레이아웃 레시피 — 데모 5화면 (가상 노트 앱 "Slate")

모든 화면 공통: 모바일 390px 단일 컬럼, 화면 패딩 16px, 데스크톱은 중앙 420px 프레임(§4). 하단 내비게이션 바(§6.7) 3탭: 노트 / 검색 / 설정. screen-2(편집)는 내비 대신 앱바 액션 + FAB. 진입 시 리스트 스태거 30ms.

### screen-1 홈 목록 (노트 카드 + FAB)

- 목적: 노트를 한눈에 훑고 바로 새로 쓴다.
- 위→아래: Large 앱바(확장 상태 headline "노트", 좌 없음, 우 검색·오버플로 아이콘) → 스크롤하면 title-lg로 축소 + 톤 전환 → 16px → 필터 칩 행(가로 스크롤, §6.10 Filter: "전체" 선택 / "즐겨찾기" / "태그") → 24px → **노트 카드 2열 staggered 그리드(gap 16px)**: 각 Filled 카드(surface, radius 12px, 패딩 16px) = 제목 title(16/500) + 본문 미리보기 body-sm 3줄 clamp `--color-text-sub` + 하단 날짜 label-sm `--color-text-tertiary`; 즐겨찾기는 우상단 별 아이콘 `--color-accent` → 우하단 고정 **Extended FAB "새 노트"**(primary-container) → 하단 내비.
- 사용 컴포넌트: Large 앱바, Filter 칩, Filled 카드, Extended FAB, 내비 바. 빈 상태면 §6.12.

### screen-2 노트 편집 (제목 + 본문 + 서식 툴바)

- 목적: 쓰기에만 집중. 크롬 최소화.
- 위→아래: Small 앱바(좌 뒤로 화살표, 우 실행취소·오버플로, 저장은 자동) → 16px → **제목 입력**(무테 filled 없이 텍스트, placeholder "제목" title-lg) → 8px → 본문 입력(body 16/400, 무테, 멀티라인, placeholder "내용을 입력하세요") → 하단 고정 **서식 툴바**(bg `--color-surface`, 아이콘 버튼 5개 24px: 굵게/목록/체크박스/사진/더보기, 각 히트 48px, press 리플) → 저장 시 스낵바 "저장했어요".
- 컴포넌트: Small 앱바, 텍스트 입력, 아이콘 버튼, 스낵바. 삭제는 오버플로 → 다이얼로그(§6.8) "이 노트를 삭제할까요? / 취소 · 삭제할게요".

### screen-3 검색 (docked search + 최근 + 결과)

- 목적: 빠르게 찾는다.
- 위→아래: **검색 바**(h 56px, bg `--color-surface-highest`, radius full, 좌 검색 아이콘 24px + placeholder body "노트 검색", 우 마이크/닫기) → 입력 전: 24px → "최근 검색" title(16/500) → 8px → 최근어 Input 칩 행(제거 가능) + "태그로 찾기" Assist 칩들 → 입력 후: 결과 리스트(§6.5 2줄 아이템: 매칭 제목 body + 스니펫 body-sm, 검색어 하이라이트 `--color-primary-container` 배경) → 결과 없음: 빈 상태 "'회의' 검색 결과가 없어요".
- 컴포넌트: 검색 바, 칩, 리스트 아이템, 빈 상태, 내비 바.

### screen-4 설정 (섹션 리스트 + 스위치)

- 목적: 조용한 설정 서랍.
- 위→아래: Small 앱바(타이틀 "설정") → 8px → 계정 행(§6.5 2줄: 아바타 40px + 이름 body + 이메일 body-sm, press → 프로필) → 그룹 구분 `--color-border` 1px → 섹션 헤더 title(16/500) `--color-primary`("표시") → 리스트: "다크 모드"(trailing **Switch** §6.11) / "글자 크기"(trailing 값 label-sm + 셰브론) → 24px → 섹션 "알림": "푸시 알림"(Switch) / "리마인더"(Switch) → 24px → 섹션 "정보": "버전"(trailing label-sm) / "오픈소스 라이선스"(셰브론) → 24px → "로그아웃" Text 버튼(라벨 `--color-danger`) → 내비 바.
- 컴포넌트: 앱바, 리스트 아이템, Switch, 섹션 헤더, Text 버튼.

### screen-5 프로필 (표현적 헤더 + 톤 액션)

- 목적: 나를 보여주는 화면. 유일하게 표현적 대형 타이포·톤 면적을 크게 쓴다.
- 위→아래: Small 앱바(좌 뒤로) → **프로필 헤더 블록**(bg `--color-primary-container`, radius 28px, 패딩 24px, 상단 여백 16px): 아바타 72px → 16px → 이름 display 축소형(여기선 headline 28/400) `--color-on-primary-container` → 4px → 이메일 body-sm → 24px → 통계 3칸(노트 수·태그 수·보관함, 각 숫자 title-lg tabular-nums + 라벨 label-sm) → 24px → 액션 행: "프로필 편집" Tonal 버튼 + "공유" Outlined 버튼 → 24px → 활동 리스트(§6.5: "최근 편집한 노트" 그룹, 아이템 3개) → 32px → "계정 삭제" Text 버튼(danger).
- 컴포넌트: 앱바, primary-container 헤더, Tonal/Outlined/Text 버튼, 리스트. 이모지는 여기 성공/환영 문구에만 1개 허용.

## §10. 금지 규칙 (Anti-AI-look)

**공통 금지** (AI가 흔히 저지르는 실수 → 대신 할 것):
1. 보라→파랑 그라데이션 히어로 → Clay에 그라데이션 히어로는 없다. 넓은 면은 단일 `--color-primary-container` 톤.
2. 모든 카드에 동일 그림자 → 카드는 `--shadow-0`, 계층은 surface-container 톤으로. 그림자는 FAB·메뉴·다이얼로그·시트에만.
3. 3열 아이콘+제목+설명 카드 반복 → 최대 2열(노트 카드 그리드), 그 외 리스트.
4. `border: 1px solid #eee` 남발 → border는 outlined 컴포넌트와 `--color-outline`에만. `--color-border`는 얇은 그룹 구분선 전용.
5. 이모지를 아이콘 대신 사용 → 아이콘은 24px 인라인 SVG(Material Symbols 계열, 2px stroke 또는 filled)만. 이모지는 §8 규칙만.
6. 화면마다 다른 radius → §5 스케일 6값만. 버튼·칩은 항상 full pill.

**Clay 고유 금지** (C1~C8):
1. **C1 순 primary 대면적 남용 금지** → 순 `--color-primary`는 채워진 버튼·FAB·활성 아이콘·인디케이터 등 작은 면적에만. 헤더·카드·섹션의 넓은 강조면은 `--color-primary-container`(톤) 또는 secondary-container로. (예: 프로필 헤더는 primary가 아니라 primary-container.)
2. **C2 그림자로 모든 계층 표현 금지** → elevation의 1차 신호는 surface-container 톤 단계. 카드에 그림자를 얹어 띄우지 말고 surface 톤으로 분리한다.
3. **C3 state layer 없는 인터랙션 금지** → 모든 인터랙티브 요소는 hover 8%·press 10% on-color 오버레이(리플)가 있어야 한다. 색만 바꾸거나 아무 피드백 없는 클릭 금지.
4. **C4 하단 내비 활성 표시를 색만으로 하기 금지** → 활성 항목은 `--color-secondary-container` pill active indicator가 필수. 아이콘 색만 바꾸는 탭바는 위반.
5. **C5 사각·소반경 인터랙티브 요소 금지** → 버튼·칩 full pill, 카드 12px, 시트·다이얼로그 28px. 0~4px 모서리의 버튼/칩/카드 금지(스낵바 내부 xs 제외).
6. **C6 filled 입력에 4면 박스 테두리 금지** → filled 입력은 하단 인디케이터만. 4면 테두리가 필요하면 outlined variant를 명시적으로 쓰고 둘을 한 화면에 섞지 않는다.
7. **C7 주요 생성 액션을 앱바에 숨기기 금지** → 주 화면의 "새로 만들기"는 FAB로 노출. 앱바 우측 작은 +아이콘으로 대체 금지.
8. **C8 순백/순검정 배경 금지** → bg는 소스 hue가 스민 톤(`#FDF8FF`/`#141218`). `#FFFFFF`·`#000000`을 화면 배경으로 쓰지 않는다(순백은 카드 위 텍스트 색으로만).

## §11. Tailwind v4 / React 매핑 (부록)

```css
/* app.css — tokens.css를 불러온 뒤 Tailwind 토큰으로 매핑 */
@import "tailwindcss";
@import "../presets/5-clay/tokens.css";

@theme inline {
  --color-bg: var(--color-bg);
  --color-surface: var(--color-surface);
  --color-surface-high: var(--color-surface-high);
  --color-text: var(--color-text);
  --color-text-sub: var(--color-text-sub);
  --color-primary: var(--color-primary);
  --color-primary-container: var(--color-primary-container);
  --color-secondary-container: var(--color-secondary-container);
  --color-accent: var(--color-accent);
  --color-danger: var(--color-danger);
  --color-success: var(--color-success);
  --radius-md: var(--radius-md);
  --radius-lg: var(--radius-lg);
  --radius-xl: var(--radius-xl);
  --radius-full: var(--radius-full);
  --font-sans: var(--font-family);
  --ease-emphasized: var(--ease-emphasized);
  --ease-emphasized-decelerate: var(--ease-emphasized-decelerate);
}
```

```tsx
// Filled 버튼 — state layer(리플) 포함. h-10 = 40px, rounded-full = pill
export function FilledButton(props: React.ComponentProps<"button">) {
  return (
    <button
      className="relative h-10 overflow-hidden rounded-full bg-primary px-6
                 text-[14px] font-medium tracking-[0.007em] text-white
                 transition-shadow duration-100
                 after:absolute after:inset-0 after:bg-white after:opacity-0
                 after:transition-opacity hover:after:opacity-[0.08] active:after:opacity-[0.10]"
      {...props}
    />
  );
}

// 하단 내비 항목 — active indicator pill
export function NavItem({ icon, label, active }: NavItemProps) {
  return (
    <button className="flex w-16 flex-col items-center gap-1 py-3">
      <span className={`grid h-8 w-16 place-items-center rounded-full transition-transform
        duration-200 ${active ? "bg-secondary-container" : "bg-transparent"}`}>
        {icon}
      </span>
      <span className={`text-[11px] font-medium tracking-[0.04em]
        ${active ? "text-text" : "text-text-sub"}`}>{label}</span>
    </button>
  );
}
```

**StyleSeed 호환 메모:** tokens.css의 `--color-*`(container 계열 포함) / `--radius-*` / `--motion-*` / `--ease-*`는 StyleSeed theme.css의 동명 슬롯에 옮긴다. 모션 시드는 "Float/Silk" 계열(진입 emphasized-decelerate, 리플 press)에 대응. `--font-size-*` 9단계는 StyleSeed type scale의 display/headline/title/body/label 슬롯에 순서대로 매핑. 상태 레이어(`--state-*`)는 StyleSeed의 interaction-overlay 토큰으로.

## §12. 채점 루브릭

합격선: **verifiable 10항목 전부 통과(70점 만점 중 70점) + subjective 5항목 평균 4.0 이상.** 하나라도 미달이면 불합격 — loop-runner는 미달 항목만 고쳐 재채점한다. 판정 대상 파일 집합을 `$F`(html/css/tsx 글롭)로 표기한다.

### verifiable 항목 (기계 판정, 70점)

| # | 항목 | 배점 | 판정 방법 |
|---|---|---|---|
| V1 | 대비율: 실제 사용된 bg/text·surface/text·primary/primary-text·container/on-container 쌍 4.5:1 이상, outline UI 쌍 3:1 이상 | 10 | 결과물 hex 추출 → WCAG 공식 `L=0.2126R'+0.7152G'+0.0722B'`(c'=c/12.92 if c≤0.03928 else ((c+0.055)/1.055)^2.4), `CR=(L1+0.05)/(L2+0.05)`으로 계산해 §2.3 표와 대조. 토큰 무변경 사용 시 §2.3 인용으로 통과 |
| V2 | 스페이싱 스케일 외 값 0개 | 10 | `grep -rhoE '(margin\|padding\|gap\|inset)[a-z-]*:[^;]+' $F \| grep -oE '[0-9]+px' \| grep -vwE '(0\|4\|8\|12\|16\|24\|32\|40\|48\|64)px'` → 0줄 |
| V3 | 타입 스케일 외 font-size 0개 | 10 | `grep -rhoE 'font-size:\s*[0-9.]+(px\|rem\|em)' $F \| grep -vE ':\s*(11\|12\|14\|16\|22\|28\|45)px'` → 0줄 (rem/em 사용 자체가 위반) |
| V4 | radius가 §5 스케일 값만 | 5 | `grep -rhoE 'border-radius:[^;]+' $F \| grep -oE '[0-9]+px' \| grep -vwE '(4\|8\|12\|16\|28\|999)px'` → 0줄 |
| V5 | shadow가 §5 표 5단계와 일치 | 5 | `grep -rhoE 'box-shadow:[^;]+' $F` 의 모든 값이 `var(--shadow-[0-4])` 참조이거나 tokens.css의 `--shadow-*` 정의 문자열과 일치 → 불일치 0건 |
| V6 | `prefers-reduced-motion` 대응 존재 | 5 | `grep -rl 'prefers-reduced-motion' $F \| wc -l` ≥ 1 |
| V7 | 외부 리소스 0 (CDN 폰트/스크립트/이미지) | 5 | `grep -rnE 'https?://[^"'"'"')( ]+\.(css\|js\|woff2?\|ttf\|png\|jpe?g\|webp\|svg)\|fonts\.googleapis\|cdn\.\|unpkg\|jsdelivr' $F` → 0줄 |
| V8 | 상태 레이어 존재 (hover/press 오버레이) | 10 | `grep -rE 'state-(hover\|pressed\|focus)\|::after' $F \| wc -l` ≥ 1 **그리고** press에 opacity 오버레이 또는 리플 규칙 존재(`grep -rE 'opacity:\s*(var\(--state\|0\.0?8\|0\.1)' $F` ≥ 1) |
| V9 | emphasized easing 사용 | 5 | `grep -rE 'var\(--ease-emphasized\|cubic-bezier\(0\.2, ?0, ?0, ?1\)\|cubic-bezier\(0\.05, ?0\.7, ?0\.1, ?1\)' $F \| wc -l` ≥ 1 |
| V10 | full-pill 버튼 + 하단 내비 active indicator pill | 5 | 버튼에 `border-radius: var(--radius-full)`/`999px` 사용 ≥ 1 **그리고** 하단 내비 활성 항목에 `--color-secondary-container` 배경 pill 규칙 존재 (`grep -rF 'secondary-container' $F` ≥ 1) |

### subjective 항목 (AI/사람 채점, 5점 척도 ×5항목 — 평균 4.0 이상 합격)

| # | 항목 | 1점 앵커 | 3점 앵커 | 5점 앵커 |
|---|---|---|---|---|
| S1 | §1 첫인상 부합 (톤 시스템·큰 라운드) | 순회색 배경에 직각 요소, 강조색이 primary 하나뿐 | 색은 톤 파생이나 뉴트럴이 순회색이거나 라운드가 일부만 크다 | bg·카드가 소스 hue를 머금은 톤이고, 버튼 pill·시트 28px 등 라운드가 일관되며 강조가 톤 파생으로 통일 |
| S2 | 톤 elevation (§5 C2) | 모든 면에 같은 그림자로 계층 표현 | surface 톤 단계와 그림자가 혼재 | 계층이 surface-container 톤으로 읽히고 그림자는 FAB·시트·메뉴에만 |
| S3 | 상태 레이어·모션 (§6·§7) | 인터랙션 피드백 없음 또는 linear 전환만 | press는 있으나 리플·emphasized 감속이 안 느껴진다 | 누르면 리플이 번지고 진입이 emphasized-decelerate로 길게 정착, 내비 pill이 스케일로 등장 |
| S4 | §8 어조 준수 | "처리되었습니다"류 격식체 또는 에러 코드 노출 | 해요체이나 문장이 길거나 시스템 주어 혼재 | 전 카피 해요체 한 호흡, 에러가 [상황+다음 행동], 스낵바에 실행취소, 버튼 간결체 |
| S5 | §10 정성 항목 (순색 면적·FAB·내비) | 그라데이션 헤더 또는 순 primary 대면적, 주요 생성 액션이 앱바에 숨음 | 금지 위반은 없으나 순색 면적이 넓거나 FAB가 없다 | 넓은 면은 primary-container 톤, 주 생성은 FAB, 내비 active pill 존재, 순백/순검정 배경 없음 |

**채점 절차:** verifiable은 판정 명령을 그대로 실행해 pass/fail 기록 → subjective는 5화면을 라이트/다크 각각 확인해 앵커와 대조, 1~5점 부여 → 합산. 4.0 미만 항목은 5점 앵커 조건을 수정 지시문으로 변환해 다음 반복에 넘긴다.
