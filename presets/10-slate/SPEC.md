---
number: 10
codename: Slate
inspired-by: GitHub Primer (primer.style) — 서술 참조만, 상표는 파일/클래스명에 사용하지 않음. 이 문서의 모든 수치는 독립 해석이며 공식 값이 아니다
mood: 개발자 협업 플랫폼. 뉴트럴 그레이 + 파란 링크, 초록 머지 버튼, 촘촘한 리스트·타임라인, 색 라벨과 mono 병기, 절제된 즉각 모션
best-for: 개발자 도구·코드 호스팅·이슈 트래커·관리 콘솔·정보 밀도 높은 협업 웹앱
variants: [a, b]
status: spec-draft
---

# 10 · Slate

## §1. 첫인상 요약

1. **밀도가 미덕이다.** 한 화면에 정보가 많다. 큰 여백 대신 8~16px의 촘촘한 리듬과 1px 구분선으로 리스트·행·메타를 빽빽하게 쌓는다. 성겨 보이면 실패다.
2. **뉴트럴이 지배하고 색은 신호다.** 화면의 90%는 회색조(흰/`#f6f8fa`/`#1f2328`). 색은 링크(파랑)·머지 버튼(초록)·상태 라벨(open/closed/merged)에만 점처럼 찍힌다.
3. **각지고 담백하다.** radius는 6px가 기본. pill(999px)은 아바타·카운터·라벨에만. 그림자는 떠 있는 것(드롭다운·다이얼로그)에만 있고 면 분리는 1px `--color-border`로 한다.
4. **개발자 말투.** 간결한 명사·동사, 기술 용어와 식별자(브랜치명·해시)는 mono로 그대로 노출한다. 감정 없이 사실을 적는다. 이모지·느낌표 없음.
5. **모션은 안 보여야 정상.** 누를 때 튀지 않는다. 색·배경·불투명도만 80~240ms로 전이한다. 스프링·scale·바운스 전면 금지.

## §2. 색

### 2.1 팔레트

시맨틱 토큰 전체 표 (a 변형 기준. b 변형은 §2.4 규칙으로 파생, 값은 tokens.css 참조):

| 토큰 | 역할 | a 라이트 | a 다크 |
|---|---|---|---|
| `--color-bg` | 화면 배경(canvas) | `#FFFFFF` | `#0D1117` |
| `--color-surface` | 박스 헤더·코드블록·행 hover·인셋 | `#F6F8FA` | `#161B22` |
| `--color-surface-raised` | 흰 박스 본문 | `#FFFFFF` | `#161B22` |
| `--color-surface-overlay` | 드롭다운·메뉴·팝오버 | `#FFFFFF` | `#1C2128` |
| `--color-text` | 본문·제목 | `#1F2328` | `#E6EDF3` |
| `--color-text-sub` | 보조 본문·메타(muted) | `#59636E` | `#9198A1` |
| `--color-text-tertiary` | 캡션·타임스탬프(subtle, §2.3 제약) | `#6E7781` | `#7D8590` |
| `--color-text-on-emphasis` | 순색 배경 위 텍스트 | `#FFFFFF` | `#FFFFFF` |
| `--color-primary` | primary(머지/확인) 버튼 배경 | `#1F883D` | `#238636` |
| `--color-primary-text` | primary 위 텍스트 | `#FFFFFF` | `#FFFFFF` |
| `--color-primary-hover` | primary hover(어두워짐) | `#1A7F37` | `#1F7A31` |
| `--color-primary-pressed` | primary press | `#197935` | `#1A6E2B` |
| `--color-accent` | 링크·포커스링·선택 강조 | `#0969DA` | `#4493F8` |
| `--color-accent-emphasis` | 파란 solid 버튼 배경 | `#0969DA` | `#1F6FEB` |
| `--color-accent-soft` | 선택 행·정보 배경 | `#DDF4FF` | `#12253F` |
| `--color-accent-soft-text` | soft 위 텍스트/다크 링크 | `#0969DA` | `#4493F8` |
| `--color-danger` | 위험 텍스트·아이콘·closed(문제) | `#D1242F` | `#F85149` |
| `--color-danger-emphasis` | 삭제 버튼 solid 배경 | `#CF222E` | `#DA3633` |
| `--color-danger-soft` | 에러 배경·삭제 diff | `#FFEBE9` | `#2D1214` |
| `--color-success` | 성공 텍스트·아이콘·open 상태 | `#1A7F37` | `#3FB950` |
| `--color-success-emphasis` | open 상태 solid 배지 | `#1F883D` | `#238636` |
| `--color-success-soft` | 완료 배경 | `#DAFBE1` | `#12261E` |
| `--color-attention` | 경고 텍스트(초안·대기) | `#9A6700` | `#D29922` |
| `--color-attention-soft` | 경고 배경 | `#FFF8C5` | `#272115` |
| `--color-done` | merged PR·완료(보라) | `#8250DF` | `#A371F7` |
| `--color-done-soft` | merged 배경 | `#FBEFFF` | `#2B1A4D` |
| `--color-border` | 박스·컨트롤 테두리 | `#D1D9E0` | `#30363D` |
| `--color-border-muted` | 리스트 행 구분선 | `#D8DEE4` | `#21262D` |
| `--color-overlay-backdrop` | 다이얼로그 뒤 딤 | `rgba(31,35,40,0.35)` | `rgba(1,4,9,0.5)` |
| `--color-diff-add-bg` | diff 추가 행 | `#E6FFEC` | `#0F2417` |
| `--color-diff-del-bg` | diff 삭제 행 | `#FFEBE9` | `#2D1214` |

### 2.2 라이트/다크

양쪽 모두 지원하며 **라이트가 기본**이다(개발 문서·코드 리뷰는 낮에 오래 본다). 다크는 순검정 대신 `#0D1117`(살짝 푸른 흑색)을 canvas로 쓰고, surface는 `#161B22`로 밝기만 올린다. 다크에서는 그림자 대신 **테두리(`#30363D`)로 면을 분리**한다(어두운 배경에서 그림자가 안 보이므로). primary(초록)·accent(파랑)·danger는 다크에서 한 단계 밝은 톤으로 교체해 대비를 확보한다: 파란 링크는 라이트 `#0969DA` → 다크 `#4493F8`, danger `#D1242F` → `#F85149`. 상태색(open/closed/merged)의 의미 매핑은 두 모드에서 동일하다.

### 2.3 대비 규칙 (실측 계산값 명기)

기준: **본문 4.5:1 이상, 대형 텍스트(24px+ 또는 18.66px+/600+)·UI 그래픽 3:1 이상.**
아래 값은 WCAG 2.x 상대휘도 공식으로 계산한 실제 대비율이다.
`L = 0.2126·R' + 0.7152·G' + 0.0722·B'` (c'=c/12.92 if c≤0.03928 else ((c+0.055)/1.055)^2.4), `CR = (L1+0.05)/(L2+0.05)`.

| 쌍 | a 라이트 | a 다크 | 판정 |
|---|---|---|---|
| bg / text | **15.80:1** | **16.02:1** | ✓ 본문 |
| surface / text | **14.84:1** | **14.64:1** | ✓ 본문 |
| bg / text-sub | **6.11:1** | **6.50:1** | ✓ 본문 |
| surface / text-sub | **5.74:1** | **5.94:1** | ✓ 본문 |
| bg / text-tertiary | **4.55:1** | **5.07:1** | ✓ 본문 |
| surface / text-tertiary | **4.27:1** | **4.64:1** | 라이트 4.5 미달 → 아래 제약으로 통제 |
| primary / primary-text | **4.52:1** | **4.63:1** | ✓ 본문 |
| primary-hover / primary-text | **5.08:1** | **5.40:1** | ✓ 본문 |
| accent(링크) / bg | **5.19:1** | **6.11:1** | ✓ 본문 |
| accent(링크) / surface | **4.88:1** | **5.58:1** | ✓ 본문 |
| accent-emphasis / on-emphasis(흰) | **5.19:1** | **4.63:1** | ✓ 본문 |
| accent-soft / accent-soft-text | **4.56:1** | **4.97:1** | ✓ 본문 |
| danger / bg | **5.24:1** | **5.65:1** | ✓ 본문 |
| danger / surface | **4.93:1** | **5.16:1** | ✓ 본문 |
| danger-emphasis / 흰 텍스트 | **5.36:1** | **4.61:1** | ✓ 본문 |
| success / bg | **5.08:1** | **7.45:1** | ✓ 본문 |
| success / surface | **4.77:1** | **6.81:1** | ✓ 본문 |
| attention / bg | **4.87:1** | **7.50:1** | ✓ 본문 |
| done / bg | **5.05:1** | **5.64:1** | ✓ 본문 |
| 라벨 soft: success-soft / success | **4.56:1** | **6.25:1** | ✓ 본문 |
| 라벨 soft: danger-soft / danger | **4.67:1** | **5.18:1** | ✓ 본문 |

b 변형(바이올렛) 주요 쌍 실측: 라이트 primary(#8250DF)/흰 텍스트 **5.05:1**, 링크/bg **5.05:1**, 링크/surface **4.74:1**, soft(#FBEFFF)/soft-text **4.54:1** — 다크 primary(#8957E5)/흰 텍스트 **4.61:1**, 링크(#A371F7)/bg **5.64:1**, soft(#2B1A4D)/soft-text **4.61:1**. 전부 통과.

추가 제약 (위 표에서 도출):
- **순색 배경 위 텍스트는 항상 `--color-text-on-emphasis`(흰색).** primary/danger/accent-emphasis 버튼·배지 위 임의 색 금지.
- **`--color-text-tertiary`는 라이트에서 surface 위 본문 금지**(4.27:1). bg(흰색) 위에서만 본문 크기 허용, surface 위에서는 캡션이라도 `--color-text-sub`로 올린다.
- **`--color-border`(1.4:1)·`--color-border-muted`는 구조용 저대비 선**이다. 상태를 전달하는 필수 컨트롤 경계가 아니므로 3:1 면제. 대신 인터랙티브 컨트롤의 **포커스는 반드시 `--color-accent` 2px 링**으로 3:1 이상을 만든다.
- **라벨(Label)의 색 텍스트는 항상 대응 soft 배경 위에서만** 쓴다(순색 hue 텍스트를 흰 배경에 직접 X). soft/텍스트 쌍은 위 표에서 4.5:1 검증됨.
- 새 색 조합은 이 표의 해당 행을 재계산해 4.5/3.0을 넘겨야 채택한다. 미달이면 폐기.

### 2.4 팔레트 생성 규칙 (변형·랜덤용)

**고정 (변형이 건드릴 수 없는 것):**
- 뉴트럴 램프 전체: bg/surface/surface-raised/surface-overlay/text/text-sub/text-tertiary/border/border-muted의 정확한 hex 값. Slate의 정체성은 이 회색조에 있다.
- 상태 시맨틱과 값: danger(hue 355~5, 지출·삭제·에러·closed), success(hue 130~150, open·성공), attention(hue 40~50, 초안·대기). 이 셋의 의미·hex는 변형이 못 바꾼다.
- 토큰 구조: primary 4종(primary/text/hover/pressed) + accent 4종(accent/emphasis/soft/soft-text) + done 2종을 반드시 전부 제공.
- 채도·명도 범위: 라이트 primary/accent는 HSL 기준 **S 60~95%, L 38~48%**(흰 텍스트 4.5:1 확보 구간). soft는 동일 hue에 **S 100%·L 93~97%**(라이트) / **S 40~60%·L 12~18%**(다크).
- radius/spacing/type/motion은 절대 불변(색이 아니므로 변형 대상 아님).

**자유 (변형이 바꾸는 것):**
- accent(링크·포커스) hue 0~360 자유. 단 danger/success/attention 구간과 ±15° 이내로 겹치면 상태색과 혼동되므로 피해 다시 뽑는다.
- primary 버튼 hue: (a처럼) 초록 `#1F883D` 유지하거나, (b처럼) accent와 같은 hue로 통일한다. 둘 중 택1을 선언한다.
- done(merged) 색: accent와 hue가 겹치면 done을 다른 hue로 옮겨 open/closed/merged 3색이 서로 구별되게 한다(b는 done을 파랑으로 이동).
- 다크 accent는 라이트 hue를 유지하되 L +12~18%p로 밝힌다.

**랜덤 명명 `10-r<hue>`** (예: `10-r270` = accent hue 270 변형):
1. accent hue h를 뽑는다 → `accent = hsl(h, 78%, 44%)`에서 시작. primary도 같은 h로 통일(b 방식).
2. 흰 텍스트 대비 4.5:1 미달이면 L을 2%p씩 내려 **최초로 통과하는 값을 채택**(결정적 절차 — 같은 이름이면 항상 같은 색).
3. hover=L −6%p, pressed=L −11%p, soft=동일 h에 S 100%/L 96%(라이트)·S 50%/L 15%(다크), done=h+120° 방향으로 회전해 accent와 분리.
4. §2.3 표의 전 행을 재계산해 하나라도 미달이면 그 hue는 폐기하고 다시 뽑는다. 통과한 hue만 `10-r<h>`로 명명. success/danger/attention·뉴트럴은 그대로 둔다.

## §3. 타이포그래피

**폰트 스택** (외부 로드 금지 — 시스템 폰트만):

```css
--font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Apple SD Gothic Neo",
               "Noto Sans KR", "Malgun Gothic", Roboto, Helvetica, Arial, sans-serif;
--font-mono: ui-monospace, "SFMono-Regular", "SF Mono", "Menlo", "Consolas",
             "Liberation Mono", "D2Coding", monospace;
```

**타입 스케일** — 이 6단계 외 font-size 사용 금지:

| 이름 | size | weight | line-height | letter-spacing | 용도 |
|---|---|---|---|---|---|
| display | 32px | 600 | 1.25 | -0.01em | 페이지 히어로, blankslate 제목 (화면당 1개) |
| title-1 | 24px | 600 | 1.25 | -0.01em | 저장소명, 페이지 타이틀 |
| title-2 | 20px | 600 | 1.25 | 0 | 섹션 헤더 |
| title-3 | 16px | 600 | 1.25 | 0 | 박스 헤더, 카드 제목, 이슈 제목 |
| body | 14px | 400 | 1.5 | 0 | 기본 본문·대부분의 텍스트(밀도 기준) |
| body-strong | 14px | 500/600 | 1.5 | 0 | 버튼 라벨(500)·강조 인라인(600) |
| small | 12px | 400 | 1.5 | 0 | 메타·타임스탬프·카운터·라벨 |
| small-strong | 12px | 500 | 1.5 | 0 | 라벨 텍스트·상태 배지 |
| code | 12px | 400 | 1.45 | 0 | 인라인/블록 코드·식별자 (`--font-mono`) |

(size는 6값 `12/14/16/20/24/32`만 존재. body/body-strong/small/small-strong/code는 같은 size를 weight·family로 분화한 것.)

**위계 규칙:**
- 한 화면에 display 계열은 **최대 1개**. title-1도 1개(페이지 제목). 헤딩 레벨은 화면당 최대 4단계(display→title-1→title-2→title-3).
- **기본 본문은 14px/400.** 16px는 이슈 본문 등 읽기 밀도가 필요할 때만. Slate의 밀도는 이 14px 기준에서 온다.
- **식별자·수치는 mono.** 브랜치명·커밋 해시·파일 경로·PR 번호·라인 번호는 `--font-mono`로 표기하고, 정렬이 필요한 수치(카운트·라인 번호)는 `font-variant-numeric: tabular-nums`.
- 사용 weight는 **400/500/600의 3종만**. 400은 한글에서도 14px 이상 뉴트럴 텍스트에 충분한 대비(6:1+)를 확보하므로 허용. **700 이상 전면 금지**(§10 G6) — 강조는 600 semibold가 상한.

**금지:** 임의 font-size 사용 금지 — 위 6값만. rem/em 단위도 스케일 이탈로 간주(§12 V3).

## §4. 간격 · 레이아웃

**스페이싱 스케일** — 이 값 외 margin/padding/gap 사용 금지 (0 제외):

```
4  8  12  16  20  24  32  40  48  64  (px)
```

Slate는 스케일 하단(**4·8·12·16**)을 주로 쓴다. Jelly가 20~32을 기본 리듬으로 쓰는 것과 정반대로, Slate의 기본 리듬은 8·16이다.

| 항목 | 값 |
|---|---|
| 화면 좌우 기본 패딩 (모바일) | 16px |
| 박스/카드 내부 패딩 | 16px |
| 박스 헤더 패딩 | 8px 16px |
| 리스트 행 패딩 | 8px 16px (행 min-height 40px) |
| 리스트 행 내 아이콘↔텍스트 | 8px |
| 제목↔본문 | 8px, 본문 문단 간 16px |
| 섹션 간 간격 | 24px (큰 전환 32px) |
| 인라인 컨트롤 사이 gap | 8px |
| 상단 글로벌 헤더 높이 | 64px |
| 언더라인 탭 바 높이 | 48px |
| 컨트롤 높이 | sm 28 / md 32(기본) / lg 40px |
| 터치 타깃 | 시각 32px여도 히트 영역 최소 44×44px 확보 |

**컨테이너·그리드:**
- 데스크톱 최대 폭 `--container-max: 1280px`, 중앙 정렬. 이슈 상세 등 읽기 화면은 `--container-narrow: 768px`.
- 데스크톱 레이아웃은 **본문 + 우측 메타 사이드바(256~296px)** 2열이 기본(이슈·PR·저장소 홈). 사이드바는 라벨·담당자·마일스톤 같은 메타를 담는다.
- 모바일(<768px)에서는 사이드바가 본문 위/아래로 접히고 단일 컬럼. 좌우 패딩 16px.
- 데이터가 격자형이면 **`<table>` 사용 권장**(§10 G5 — Jelly와 정반대). 컬럼 헤더 surface 배경, 행 구분 `--color-border-muted` 1px.

## §5. 형태 (Shape)

**radius 스케일** — 이 값 외 border-radius 금지:

| 토큰 | 값 | 적용처 |
|---|---|---|
| `--radius-sm` | 4px | 작은 배지, 코드 인라인 배경 |
| `--radius-md` | 6px | 버튼·입력·박스·카드·다이얼로그 내부(기본) |
| `--radius-lg` | 8px | 큰 박스·탭 컨테이너·코드블록 |
| `--radius-xl` | 12px | 다이얼로그·모바일 바텀시트 |
| `--radius-full` | 999px | 아바타·카운터·필 라벨·상태 배지·토글 |

- 인터랙티브 요소의 기본 radius는 **6px**. 4px 미만 직각/8px 초과는 위 표 용도 외 금지. **화면마다 다른 radius 금지**(§10 G2).
- **border는 Slate의 주 분리 수단이다**(Jelly와 정반대). 박스·카드·입력·버튼(secondary)·테이블에 `1px solid var(--color-border)`, 리스트 행 사이 `1px solid var(--color-border-muted)`를 적극 사용한다.

**shadow/elevation 단계** (다크 값은 tokens.css에서 검정 기반으로 오버라이드):

| 토큰 | 라이트 값 | 다크 값 | 용도 |
|---|---|---|---|
| `--shadow-0` | `none` | `none` | 기본. 박스·카드는 그림자 없음(테두리로 분리) |
| `--shadow-1` | `0 1px 0 rgba(31,35,40,0.04)` | `0 1px 0 rgba(1,4,9,0.20)` | 버튼 resting(미세) |
| `--shadow-2` | `0 3px 6px rgba(31,35,40,0.15)` | `0 3px 6px rgba(1,4,9,0.30)` | 드롭다운·메뉴·팝오버·툴팁 |
| `--shadow-3` | `0 8px 24px rgba(31,35,40,0.20)` | `0 8px 24px rgba(1,4,9,0.40)` | 다이얼로그·오버레이 |
| `--shadow-field` | `inset 0 1px 0 rgba(31,35,40,0.06)` | `inset 0 1px 0 rgba(1,4,9,0.20)` | 입력 필드 내부 |

**그림자는 떠 있는 것에만.** 정적인 박스·카드·리스트에 그림자를 얹으면 위반(§10 G1). 다크에서는 그림자가 약하므로 오버레이도 `1px solid var(--color-border)`를 함께 준다.

## §6. 핵심 컴포넌트 규칙

공통 인터랙션: 모든 컨트롤은 hover/press에서 **배경·테두리·색만** 전이한다(`--motion-instant` 80ms). **transform scale·바운스 금지**(§7·§10 G4). focus-visible는 `outline: 2px solid var(--color-accent); outline-offset: -1px`(또는 2px) 공통.

### 6.1 버튼 (default / primary / danger / invisible)

- **default(중립, 가장 흔함)**: h 32px(md), radius 6px, bg `--color-bg`, `1px solid var(--color-border)`, 라벨 14px/500 `--color-text`, 좌우 패딩 12px. hover bg `--color-surface`. active bg 한 단계 더 어둡게. resting `--shadow-1`.
- **primary(초록, 확인·머지)**: 동일 치수, bg `--color-primary`, `1px solid rgba(27,31,36,0.15)`, 라벨 14px/500 `--color-primary-text`. hover bg `--color-primary-hover`, active `--color-primary-pressed`.
- **danger**: 기본은 default 스타일 + 라벨/아이콘 `--color-danger`. hover 시 bg `--color-danger-emphasis` + 라벨 흰색으로 전환(파괴적 확정 직전에만 solid).
- **invisible(ghost)**: bg 투명·테두리 없음, 라벨 14px/500 `--color-accent`(링크성) 또는 `--color-text-sub`(부가). hover bg `--color-surface`.
- 크기: sm 28 / md 32 / lg 40px. disabled: bg `--color-surface`, 라벨 `--color-text-tertiary`, 테두리 `--color-border`, cursor not-allowed.

```css
.btn { height: var(--control-md); border-radius: var(--radius-md);
  border: 1px solid var(--color-border); background: var(--color-bg);
  color: var(--color-text); font: 500 14px/1 var(--font-family); padding: 0 12px;
  box-shadow: var(--shadow-1);
  transition: background-color var(--motion-instant) var(--ease-standard),
              border-color var(--motion-instant) var(--ease-standard); }
.btn:hover { background: var(--color-surface); }
.btn-primary { background: var(--color-primary); color: var(--color-primary-text);
  border-color: rgba(27,31,36,0.15); }
.btn-primary:hover { background: var(--color-primary-hover); }
.btn:focus-visible { outline: 2px solid var(--color-accent); outline-offset: -1px; }
```

### 6.2 입력 필드

- h 32px, radius 6px, bg `--color-bg`, `1px solid var(--color-border)`, `--shadow-field`, 값 14px/400 `--color-text`, 좌우 패딩 12px. 라벨은 필드 위 14px/600, 간격 8px.
- focus: 테두리 `--color-accent` + `outline: 2px solid var(--color-accent); outline-offset: -1px`(200ms 이내 border-color 전이). placeholder `--color-text-tertiary`.
- 에러: 테두리 `--color-danger` + 아래 헬퍼 텍스트 12px `--color-danger`. 흔들림·애니메이션 없음(§7 절제).
- 검색 입력(lg 40px)은 좌측 16px 인라인 SVG 돋보기.

### 6.3 박스 / 카드 (Box)

- Slate의 핵심 컨테이너. `1px solid var(--color-border)`, radius 6px, `--shadow-0`. 헤더(선택): bg `--color-surface`, 패딩 8px 16px, 제목 title-3(16px/600), 아래 `1px solid var(--color-border)` 구분.
- 본문 패딩 16px. 리스트를 담을 때는 각 행을 `1px solid var(--color-border-muted)`로 구분(§6.4).
- 카드 안에 카드 금지(중첩 1단). 그림자 금지 — 면 분리는 테두리로.

### 6.4 리스트 행 (이슈/PR/파일/커밋 행)

- min-height 40px, 패딩 8px 16px. 구조: [상태 아이콘 16px SVG(open=success·closed=danger·merged=done)] –8px– [제목 링크 14px/600 `--color-accent`(hover underline) + 메타 12px `--color-text-sub`("#42 · 3일 전 · 작성자")] – [우측: 담당자 아바타 20px + 코멘트 카운터].
- 행 사이 `1px solid var(--color-border-muted)`(**구분선을 적극 사용** — Jelly와 정반대). hover 시 행 bg `--color-surface`(80ms). 마지막 행은 아래 테두리 없음.
- press: 배경만 한 단계 더 어둡게. scale 없음.

```css
.row { display: flex; align-items: center; gap: 8px; min-height: 40px;
  padding: 8px 16px; border-bottom: 1px solid var(--color-border-muted);
  transition: background-color var(--motion-instant) var(--ease-standard); }
.row:hover { background: var(--color-surface); }
.row .meta { color: var(--color-text-sub); font-size: 12px; }
.row .count { margin-left: auto; font-variant-numeric: tabular-nums; }
```

### 6.5 상단 글로벌 헤더 (앱바)

- h 64px, bg **다크 상수** `#1F2328`(라이트 모드에서도 어두운 헤더 — 개발자 툴 관례) 또는 테마 `--color-bg`+하단 테두리 중 택1(데모는 후자로 통일: bg `--color-bg`, 하단 `1px solid var(--color-border)`). 좌: 워드마크 16px/600 + 조직/저장소 경로(mono 14px, `/`로 구분). 중앙~우: 검색 입력(lg 40px, 폭 유동) + 아이콘 버튼(알림·+·아바타 20px).
- 스크롤해도 그림자 안 씀(테두리로 고정 분리). 햄버거는 모바일에서만 허용(데스크톱은 인라인 탭).

### 6.6 언더라인 탭 (레포 서브내비)

- h 48px, 탭: 아이콘 16px + 라벨 14px/500 + 선택적 카운터 배지. 패딩 8px 8px, gap 8px. 활성 탭: 텍스트 `--color-text`(600) + **하단 2px `--color-attention-emphasis`**(주황 언더라인) 또는 `--color-accent`(데모는 텍스트색 + 하단 2px `--color-text`로 뉴트럴 유지). 비활성 `--color-text-sub`.
- hover: 하단 2px `--color-border`. 컨테이너 하단 `1px solid var(--color-border)`. 모바일에서는 가로 스크롤.

### 6.7 다이얼로그 / 바텀시트

- 데스크톱은 **중앙 다이얼로그**: 폭 최대 448px, radius 12px, bg `--color-surface-overlay`, `1px solid var(--color-border)`, `--shadow-3`. 헤더(title-3 + 닫기 X 16px) / 본문(패딩 16px, body 14px) / 푸터(우측 정렬 버튼들, gap 8px: invisible "취소" + primary/danger 확정).
- 진입: `opacity 0→1` + `translateY(4px)→0` 240ms `--ease-out`. 딤 `--color-overlay-backdrop` 페이드 160ms. 오버슈트·scale 금지.
- 모바일(<768px)은 하단 부착 시트: radius 12px 12px 0 0, 상단 그랩바 없음(닫기 X만).

### 6.8 플래시 / 토스트

- **플래시(인라인 배너)**가 기본: 컨텐츠 폭 꽉, radius 6px, `1px solid`, soft 배경 + 대응 텍스트. 정보=`--color-accent-soft`+accent-soft-text, 성공=`--color-success-soft`+success, 경고=`--color-attention-soft`+attention, 오류=`--color-danger-soft`+danger. 좌측 16px 상태 아이콘 + 본문 14px + 우측 닫기 X. 패딩 8px 16px.
- **토스트(플로팅)**: 화면 하단 좌측 16px, 폭 최대 360px, bg `--color-surface-overlay`, `1px solid var(--color-border)`, radius 6px, `--shadow-2`, 본문 14px. 진입 `opacity 0→1`+`translateY(8px)→0` 160ms. 4초 후 페이드 소멸.

### 6.9 라벨 / 배지 / 카운터

- **라벨(Label, 이슈 태그)**: h 20px, 패딩 0 8px, radius `--radius-full`(pill), small-strong(12px/500). soft 배경 + 대응 색 텍스트 + 동색 1px 테두리(예: `--color-accent-soft` bg / `--color-accent-soft-text` 텍스트). 순색 배경 위 흰 텍스트 라벨도 허용(상태 라벨).
- **상태 배지(Open/Closed/Merged)**: h 24~28px, 패딩 4px 12px, radius full, 순색 배경 + 흰 텍스트 + 좌측 16px 아이콘. open=`--color-success-emphasis`, closed=`--color-danger-emphasis`, merged=`--color-done`, draft=`--color-text-sub` 배경.
- **카운터**: h 20px, 패딩 0 8px, radius full, bg `--color-surface`(또는 `rgba` 뉴트럴), 텍스트 12px/500 `--color-text-sub`, tabular-nums. 탭 옆 개수 표시.

### 6.10 코드 블록 / diff (Slate 고유)

- 인라인 코드: bg `--color-code-bg`, radius 4px, 패딩 0 4px, `--font-mono` 12px, 색 `--color-text`.
- 코드 블록: bg `--color-code-bg`, radius 8px, `1px solid var(--color-border)`, 패딩 16px, mono 12px/1.45. 좌측 라인 번호 열 `--color-text-tertiary` tabular-nums.
- **diff 행**: 추가 행 bg `--color-diff-add-bg` + 좌측 `+` 마커, 삭제 행 bg `--color-diff-del-bg` + `−` 마커. 라인 번호 2열(old/new). 파일 헤더는 surface 배경 + mono 파일 경로.

### 6.11 타임라인 아이템 (이슈/PR 대화)

- 좌측 세로선 `2px solid var(--color-border)`(아바타를 관통). 노드: 아바타 24px(코멘트) 또는 16px 아이콘 원(이벤트: 라벨 추가·상태 변경 등).
- 코멘트 카드: `1px solid var(--color-border)`, radius 6px. 헤더 bg `--color-surface`(패딩 8px 16px): 작성자 14px/600 + "3일 전" 12px `--color-text-sub`. 본문 패딩 16px, body 14px.
- 이벤트 행(카드 아님): 16px 아이콘 + 14px 텍스트 `--color-text-sub` + 상대 시각. 간격 8px, 이벤트 사이 세로선만.

### 6.12 빈 상태 (Blankslate)

- 세로 중앙 정렬: 48px 인라인 SVG 아이콘 `--color-text-tertiary`(단색 stroke 1.5px) → 16px → 제목 title-3(16px/600) → 8px → 설명 14px `--color-text-sub`(최대 2줄) → 16px → default 또는 primary 버튼(md). 사과·경고 톤 금지.

## §7. 모션

**모션 성격 한 줄: "즉각적이고 절제됨 — 색·배경·불투명도만 전이하고, 크기 변형·바운스·스프링은 없다."** (Jelly의 정반대 축.)

**토큰:**

```css
--motion-instant: 80ms;   /* hover 색/배경/테두리 */
--motion-fast:    160ms;  /* 메뉴·툴팁·토스트 페이드, 토글 */
--motion-base:    240ms;  /* 다이얼로그·패널 슬라이드 */
--ease-standard: cubic-bezier(0.25, 0.1, 0.25, 1);  /* 기본 */
--ease-out:      cubic-bezier(0.33, 1, 0.68, 1);    /* 진입 감속 */
```

**패턴별 규칙:**

| 패턴 | 규칙 |
|---|---|
| hover | 배경/테두리/색 `--motion-instant` 80ms `--ease-standard`. transform 없음 |
| press | 배경만 한 단계 더 어둡게(pressed 토큰). **scale·translate 금지** |
| focus | `outline: 2px solid var(--color-accent)` 즉시(전이 없음) |
| 메뉴/드롭다운 | `opacity 0→1` 160ms `--ease-out`, `translateY(-4px)→0` 동반 가능. 페이드아웃 80ms |
| 다이얼로그 | `opacity 0→1`+`translateY(4px)→0` 240ms `--ease-out`, 딤 페이드 160ms |
| 토글/체크박스 | 손잡이 이동 160ms `--ease-standard`. 색 전이 동반 |
| 로딩 | 스피너 회전(등속 linear, 1회전 ~1s) 또는 상단 진행 바. 스켈레톤 shimmer는 opacity 펄스만 |
| 리스트 갱신 | 새 행 `opacity 0→1` 160ms. 스태거·슬라이드인 금지 |

**금지:** `transform: scale()`을 hover/active에 쓰는 것, `cubic-bezier(...,1.56,...)`류 오버슈트, 전체 화면 슬라이드 전환, 카운트업. Slate의 모션은 "있는지 모르게" 작동한다.

**`prefers-reduced-motion` 대응 필수:** transform 기반 전이 제거, opacity·배경·색만 80ms 유지(tokens.css 전역 블록 참조).

## §8. 보이스 & 톤 (마이크로카피)

- **간결한 합니다체/명사형.** 감정을 싣지 않고 사실을 적는다. 해요체의 친근함(Jelly)도, 격식체의 장황함도 아닌 **중립·간결**이 목표. "저장", "이슈 열기", "변경 사항 커밋".
- 버튼은 **동사 또는 동사+목적어**로 짧게("병합", "리뷰 요청", "브랜치 삭제"). 문장형 버튼 금지.
- **기술 용어·식별자를 그대로 노출**(Jelly와 정반대). 브랜치명·커밋 해시·상태·PR 번호를 숨기지 않고 mono로 병기. 에러에 코드·기술 원인을 적어도 된다(오히려 권장).
- 시간은 상대 표기("3일 전", "방금") + hover 시 절대 시각 툴팁. 숫자는 천 단위 콤마, tabular-nums.
- 이모지·느낌표 금지. 대문자 강조·과장 형용사("놀라운", "완벽한") 금지.

| 상황 | Slate 카피 | 금지 예 |
|---|---|---|
| CTA (병합) | 병합 | 지금 바로 합쳐요! |
| CTA (생성) | 이슈 열기 | 새로운 이슈를 만들어볼까요? |
| CTA (커밋) | 변경 사항 커밋 | 저장하기 |
| 완료 토스트 | main에 병합됨 | 성공적으로 완료되었어요! |
| 에러 (충돌) | 병합 충돌 3건 · src/app.ts 외 2개 파일 | 오류가 발생했습니다 |
| 에러 (권한) | 이 저장소에 쓰기 권한이 없습니다 | 접근 불가 |
| 에러 (실패) | 빌드 실패 · 종료 코드 1 · 로그 보기 | 작업에 실패했어요 |
| 빈 상태 | 아직 이슈가 없습니다 | 텅 비었네요! |
| 로딩 | 불러오는 중 | 잠시만 기다려주세요 |
| 확인 다이얼로그 | 브랜치 `feat/login`을 삭제할까요? 되돌릴 수 없습니다. | 정말 삭제하시겠습니까?? |

- 에러는 **[무슨 일 + 구체 원인/식별자] (+ [다음 행동 링크])** 구조. 기술 세부(코드·파일·해시)를 감추지 않는다.
- 금지 표현: 반복되는 "죄송합니다"·이모지·느낌표 2개 이상·과장 형용사·불필요한 존대("~해주시겠어요").

## §9. 레이아웃 레시피 — 데모 5화면 (가상 코드 협업 플랫폼, 샘플 저장소 `octo/starship`)

모든 화면 공통: 데스크톱 1280px 컨테이너, 상단 글로벌 헤더(§6.5) 64px + 언더라인 탭(§6.6) 48px. 본문은 라이트 기본, 다크 토글 지원. 모바일(<768px)은 단일 컬럼·좌우 16px·사이드바 접힘. HTML은 만들지 않고 레시피만 기술한다.

### screen-1 저장소 홈

- 목적: 저장소의 정체성과 진입점을 한눈에.
- 위→아래: 글로벌 헤더(경로 `octo / starship` mono) → 저장소 헤더 행(저장소명 title-1 + "Public" 라벨 + 우측 Watch/Fork/Star default 버튼 3개 + 카운터) → 언더라인 탭(Code·Issues 42·PRs 7·Actions·Settings) → 24px → **2열 레이아웃**: [좌 본문] 브랜치 선택 default 버튼(mono `main`) + 파일 목록 박스(§6.3: 헤더에 최근 커밋 메시지+해시 mono+상대시각, 본문은 §6.4 파일 행들 — 폴더/파일 아이콘 16px + 이름 + 우측 "마지막 변경" 12px sub) + 그 아래 README 박스(title-3 헤더 + 본문 body 16px) / [우 사이드바 296px] About 설명 + 토픽 라벨(pill) + 언어 막대 + Releases.
- 사용 컴포넌트: 헤더, 탭, default 버튼, 박스, 파일 리스트 행, 라벨, 카운터.

### screen-2 이슈 목록

- 목적: 열린 이슈를 밀도 있게 훑고 필터한다.
- 위→아래: 탭(Issues 활성) → 필터 바(검색 입력 lg 40px `is:issue is:open` mono placeholder + 우측 "이슈 열기" primary 버튼) → 24px → 이슈 박스(§6.3): 헤더 행에 "42 Open / 128 Closed" 토글(success/누트럴 아이콘 16px) + 우측 정렬 드롭다운(Author·Label·Sort) → 본문은 **이슈 행 리스트**(§6.4): 각 행 open 아이콘(success) + 제목 링크 14px/600 + 라벨 pill 0~3개 + 메타 "#123 · 2일 전 · alice" 12px sub + 우측 담당자 아바타 20px + 코멘트 카운터.
- 강조: 행 사이 1px 구분선, hover 시 surface 배경. 빈 필터 결과는 blankslate(§6.12).

### screen-3 이슈 상세 (타임라인)

- 목적: 대화 맥락을 시간순으로 따라간다.
- 위→아래: 이슈 제목 title-1 + `#123`(mono, text-sub) → 상태 배지 행(Open success 배지 + "alice가 2일 전 열었습니다 · 코멘트 8" 12px sub) → 하단 1px 구분선 → 24px → **2열**: [좌 본문 768px 폭] 타임라인(§6.11): 최초 코멘트 카드 → 이벤트 행("bob가 `bug` 라벨을 추가했습니다 · 1일 전") → 코멘트 카드들 → 하단 새 코멘트 입력(§6.2 textarea + "코멘트" primary 버튼) / [우 사이드바] Assignees·Labels(pill)·Projects·Milestone 메타 박스들(각 title-3 헤더 + 값).
- 모션: 새 코멘트 등록 시 카드 opacity 페이드인 160ms(슬라이드 없음).

### screen-4 PR diff

- 목적: 코드 변경을 라인 단위로 리뷰한다.
- 위→아래: PR 제목 title-1 + `#88` mono + Merged 배지(done 보라) → 서브탭(Conversation·Commits·Files changed 활성 + 카운터 "3") → 파일 변경 요약 바("3 files · +42 −12" mono, success/danger 색) → 24px → **파일별 diff 블록 반복**(§6.10): 파일 헤더(surface, mono 경로 `src/auth.ts` + "+20 −4" + 접기 셰브론) → diff 본문(라인 번호 2열 tabular-nums + 추가/삭제 행 배경색 + mono 코드) → 특정 라인 hover 시 코멘트 추가 `+` 버튼. → 하단 sticky 리뷰 바(default "변경 요청" + primary "승인").
- 강조: `<table>`로 diff 정렬(라인번호|기호|코드). 색은 추가/삭제 행 배경에만.

### screen-5 설정 (Settings)

- 목적: 저장소 옵션을 항목별로 조정. 위험 동작은 분리.
- 위→아래: 탭(Settings 활성) → **2열**: [좌 사이드바 256px] 설정 섹션 내비 리스트(General·Access·Branches·Webhooks — §6.4 행, 활성 행 bg surface + 좌측 2px accent) / [우 본문] 섹션들: 저장소명 입력(§6.2) + "이름 변경" default 버튼 → 1px 구분 → 기능 토글 리스트(Issues·Wiki·Discussions — 라벨 14px + 설명 12px sub + 우측 토글 §6 토글) → 32px → **Danger Zone 박스**: `1px solid var(--color-danger)` 테두리, 헤더 title-3 `--color-danger`, 각 위험 항목 행(설명 + 우측 danger 버튼 "저장소 삭제") → 클릭 시 확인 다이얼로그(§6.7, 저장소명 재입력 요구).
- 강조: 위험 동작만 danger 색, 나머지는 뉴트럴. 토글·구분선으로 밀도 유지.

## §10. 금지 규칙 (Anti-AI-look)

**공통 금지** (AI가 흔히 저지르는 실수 → 대신 할 것):
1. 보라→파랑 그라데이션 히어로 → Slate에 그라데이션은 없다. 단색 뉴트럴 배경 + 테두리만.
2. 모든 카드에 동일 그림자 → 정적 박스·카드는 `--shadow-0`. 그림자는 떠 있는 것(드롭다운·다이얼로그·토스트)에만.
3. 3열 아이콘+제목+설명 카드 반복 → 정보는 리스트·테이블·타임라인으로 밀도 있게. 마케팅식 3열 특징 카드 금지.
4. `border: 1px solid #eee` 임의 남발 → 테두리는 쓰되 **토큰**(`--color-border`/`--color-border-muted`)만. 임의 회색 hex 금지.
5. 이모지를 아이콘 대신 사용 → 아이콘은 16px 인라인 SVG(octicon류, stroke 1.5px)만.
6. 화면마다 다른 radius → §5 스케일 5값만. 기본은 6px.

**Slate 고유 금지** (G1~G8):
1. **G1 정적 요소에 그림자·떠 있는 카드 남발 금지** → 면 분리는 1px 테두리로. 그림자는 오버레이 전용. 카드에 `box-shadow`가 보이면 위반.
2. **G2 큰 radius·pill 버튼 금지** → 버튼·입력·박스는 6px 고정. `--radius-full`은 아바타·카운터·라벨·토글에만. 16px+ radius 버튼은 위반.
3. **G3 순색 배경 면적 남용 금지** → 순색(초록/파랑/빨강)은 primary·danger 버튼, 상태 배지, 라벨 안에서만. 큰 배경·섹션·카드에 순색 채우기 금지 — 배경은 뉴트럴 또는 soft(L 93%+).
4. **G4 bounce/scale press 모션 금지**(Jelly의 정반대) → `:active`나 hover에 `transform: scale()`·`cubic-bezier(...1.56...)` 사용 시 위반. 반응은 배경·색 전이로만.
5. **G5 정보를 카드로 흩뿌리기 금지** → 격자형 데이터는 `<table>`로, 목록은 촘촘한 리스트 행(40px·1px 구분)으로. 각 데이터를 독립 카드에 담아 여백으로 띄우면 위반. (Jelly의 "테이블 금지"와 정반대.)
6. **G6 700 이상 굵은 폰트 금지** → weight는 400/500/600만. 강조 상한은 600 semibold. `font-weight: 700`(bold) 이상 등장 시 위반.
7. **G7 친근·과장 카피 금지** → 이모지, 느낌표, "~해볼까요?", 과장 형용사 금지. §8 표의 간결·중립 톤만. 에러는 기술 세부를 감추지 말 것.
8. **G8 식별자를 본문 폰트로 뭉개기 금지** → 브랜치명·커밋 해시·파일 경로·PR 번호·코드는 반드시 `--font-mono`. 이들을 sans로 쓰면 위반.

## §11. Tailwind v4 / React 매핑 (부록)

```css
/* app.css — tokens.css를 불러온 뒤 Tailwind 토큰으로 매핑 */
@import "tailwindcss";
@import "../presets/10-slate/tokens.css";

@theme inline {
  --color-bg: var(--color-bg);
  --color-surface: var(--color-surface);
  --color-surface-overlay: var(--color-surface-overlay);
  --color-text: var(--color-text);
  --color-text-sub: var(--color-text-sub);
  --color-primary: var(--color-primary);
  --color-accent: var(--color-accent);
  --color-danger: var(--color-danger);
  --color-success: var(--color-success);
  --color-border: var(--color-border);
  --color-border-muted: var(--color-border-muted);
  --radius-md: var(--radius-md);
  --radius-lg: var(--radius-lg);
  --font-sans: var(--font-family);
  --font-mono: var(--font-mono);
  --ease-standard: var(--ease-standard);
}
```

```tsx
// default 버튼 — Slate의 가장 흔한 버튼(중립, 배경 전이만)
export function Button({ variant = "default", ...props }: BtnProps) {
  const base =
    "inline-flex h-8 items-center rounded-md border px-3 text-[14px] font-medium " +
    "transition-colors duration-[80ms] " +
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent";
  const styles = {
    default: "border-border bg-bg text-text hover:bg-surface",
    primary: "border-black/15 bg-primary text-white hover:brightness-95",
    danger:  "border-border text-danger hover:bg-danger hover:text-white",
  }[variant];
  return <button className={`${base} ${styles}`} {...props} />;
}

// 이슈 리스트 행 — 촘촘한 밀도 + 1px 구분선 + mono 식별자
export function IssueRow({ title, num, when, author, comments }: IssueRowProps) {
  return (
    <div className="flex min-h-10 items-center gap-2 border-b border-border-muted
                    px-4 py-2 transition-colors duration-[80ms] hover:bg-surface">
      <OpenIcon className="size-4 text-success" />
      <div className="min-w-0">
        <a className="text-[14px] font-semibold text-accent hover:underline">{title}</a>
        <p className="text-[12px] text-text-sub">
          <span className="font-mono">#{num}</span> · {when} · {author}
        </p>
      </div>
      <span className="ml-auto font-mono text-[12px] tabular-nums text-text-sub">
        {comments}
      </span>
    </div>
  );
}
```

**StyleSeed 호환 메모:** tokens.css의 `--color-*` / `--radius-*` / `--motion-*` / `--ease-*`는 StyleSeed theme.css의 동명 슬롯에 1:1로 옮겨진다. 모션 시드는 "Snap"·"Silk" 계열(즉각 색 전이, 오버슈트 없음)에 대응한다. `--text-*` 6단계는 StyleSeed type scale의 display/title/body/caption 슬롯에 순서대로 매핑하고, `--font-mono`는 code 슬롯에 연결한다.

## §12. 채점 루브릭

합격선: **verifiable 9항목 전부 통과(65점 만점 중 65점) + subjective 5항목 평균 4.0 이상**.
하나라도 미달이면 불합격 — loop-runner는 미달 항목만 고쳐 재채점한다.
판정 대상 파일 집합을 `$F`(html/css/tsx 글롭)로 표기한다.

### verifiable 항목 (기계 판정, 65점)

| # | 항목 | 배점 | 판정 방법 |
|---|---|---|---|
| V1 | 대비율: 실제 사용된 bg/text·surface/text·primary/primary-text 쌍 4.5:1 이상, 링크·상태색 쌍 4.5:1, 저대비 border는 면제 | 10 | 결과물의 hex를 추출해 WCAG 공식으로 계산: `L=0.2126R'+0.7152G'+0.0722B'` (c'=c/12.92 if c≤0.03928 else ((c+0.055)/1.055)^2.4), `CR=(L1+0.05)/(L2+0.05)`. §2.3 표와 대조. 토큰 무변경 사용 시 §2.3 표 인용으로 통과 |
| V2 | 스페이싱 스케일 외 값 0개 | 10 | `grep -rhoE '(margin\|padding\|gap\|inset)[a-z-]*:[^;]+' $F \| grep -oE '[0-9]+px' \| grep -vwE '(0\|4\|8\|12\|16\|20\|24\|32\|40\|48\|64)px'` → 출력 0줄 |
| V3 | 타입 스케일 외 font-size 0개 | 10 | `grep -rhoE 'font-size:\s*[0-9.]+(px\|rem\|em)' $F \| grep -vE ':\s*(12\|14\|16\|20\|24\|32)px'` → 출력 0줄 (rem/em 사용 자체가 위반) |
| V4 | radius가 §5 스케일 값만 | 5 | `grep -rhoE 'border-radius:[^;]+' $F \| grep -oE '[0-9]+px' \| grep -vwE '(4\|6\|8\|12\|999)px'` → 출력 0줄 |
| V5 | shadow가 §5 표 값과 일치 | 5 | `grep -rhoE 'box-shadow:[^;]+' $F` 의 모든 값이 `var(--shadow-[0-3])`/`var(--shadow-field)` 참조이거나 tokens.css의 `--shadow-*` 정의 문자열과 일치 → 불일치 0건 |
| V6 | `prefers-reduced-motion` 대응 존재 | 5 | `grep -rl 'prefers-reduced-motion' $F \| wc -l` ≥ 1 |
| V7 | 외부 리소스 0 (CDN 폰트/스크립트/이미지) | 5 | `grep -rnE 'https?://[^"'"'"')( ]+\.(css\|js\|woff2?\|ttf\|png\|jpe?g\|webp\|svg)\|fonts\.googleapis\|cdn\.\|unpkg\|jsdelivr' $F` → 출력 0줄 |
| V8 | 모션 절제: press·hover에 scale 없음 + 오버슈트 easing 없음 + mono 사용 | 10 | `grep -rE 'scale\(' $F` → 출력 0줄 **그리고** `grep -rE 'cubic-bezier\([^)]*1\.[0-9]' $F`(오버슈트=1.0 초과 계수) → 0줄 **그리고** `grep -rE 'var\(--font-mono\)\|monospace' $F \| wc -l` ≥ 1 |
| V9 | 굵기 상한 600 + 테두리 분리 사용 | 5 | `grep -rhoE 'font-weight:\s*[0-9]+' $F \| grep -vwE '(400\|500\|600)'` → 0줄 **그리고** `grep -rE 'var\(--color-border(-muted)?\)' $F \| wc -l` ≥ 1 |

### subjective 항목 (AI/사람 채점, 5점 척도 ×5항목 — 평균 4.0 이상 합격)

| # | 항목 | 1점 앵커 | 3점 앵커 | 5점 앵커 |
|---|---|---|---|---|
| S1 | §1 첫인상 부합 (밀도·뉴트럴 지배·각진 형태) | 여백이 넓고 색면이 크며 radius가 둥글다(SaaS 마케팅 느낌) | 밀도는 있으나 색이 과하거나 pill 버튼이 섞였다 | 회색조가 지배하고 색은 신호로만, 6px 각진 컨트롤과 1px 구분선으로 정보가 촘촘하다 |
| S2 | §8 어조 준수 (간결·기술 노출·mono) | 이모지/느낌표/과장 카피 또는 식별자를 sans로 뭉갬 | 중립적이나 문장이 장황하거나 mono 병기가 빠졌다 | 버튼이 동사형, 에러가 [원인+식별자] 구조, 브랜치·해시·번호가 mono로 노출된다 |
| S3 | 모션 절제 (§7) | scale/bounce/스프링이 보인다 | 색 전이는 있으나 과한 슬라이드·스태거가 섞였다 | 누르면 배경만 바뀌고, 메뉴·다이얼로그는 짧은 페이드/미세 이동만. 있는지 모르게 작동 |
| S4 | 밀도와 위계 (§4·§5 테두리 분리) | 데이터가 카드로 흩뿌려져 성기거나, 구분선 없이 뭉쳐 안 읽힌다 | 리스트/테이블은 있으나 리듬(8·16)이 불규칙하다 | 1px 구분선·테이블·타임라인으로 촘촘한데도 위계가 또렷하다 |
| S5 | §10 정성 항목 (순색 면적·그림자·radius 일관) | 그라데이션/떠있는 카드/큰 순색면 또는 pill 버튼 | 금지 위반은 없으나 순색 면적이 넓거나 그림자가 정적 요소에 있다 | 순색은 버튼·배지·라벨에만, 그림자는 오버레이에만, radius 6px 일관 |

**채점 절차:** verifiable은 판정 명령을 그대로 실행해 pass/fail 기록 → subjective는 5화면을 라이트/다크 각각 확인해 앵커와 대조, 1~5점 부여 → 합산. 4.0 미만 항목은 5점 앵커 조건을 수정 지시문으로 변환해 다음 반복에 넘긴다.
