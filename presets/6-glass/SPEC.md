---
number: 6
codename: Glass
inspired-by: Apple Human Interface Guidelines (iOS) — 서술 참조만, 상표는 파일/클래스명에 사용하지 않음. 이 문서의 모든 수치는 독립 해석이며 공식 값이 아니다
mood: 반투명 유리처럼 맑고 차분한 iOS 감성. 넉넉한 여백, 좌측 큰 타이틀, inset 그룹 리스트, 재질이 흐르듯 전환되는 절제된 스프링
best-for: 소비자용 iOS 스타일 앱, 설정·피트니스·헬스, 프리미엄 유틸리티, 온보딩 플로우
variants: [a, b]
status: spec-draft
---

# 6 · Glass

## §1. 첫인상 요약

1. **콘텐츠가 유리 위에 뜬다.** 네비바·탭바·시트는 반투명 재질(blur+채도 부스트)이라 뒤 콘텐츠가 은은히 비친다. 불투명 색면으로 화면을 막지 않는다.
2. **큰 타이틀이 좌측에서 맞이한다.** 화면 상단은 34px/700 좌측 정렬 large title. 스크롤하면 17px 인라인 타이틀로 부드럽게 접힌다.
3. **리스트는 하나의 둥근 카드다.** 개별 카드 나열이 아니라, inset grouped — 16px 인셋된 radius 16px 컨테이너 안에 셀이 쌓이고, 셀 사이만 leading-inset 헤어라인으로 나뉜다.
4. **채도는 아주 조금.** 화면 대부분은 뉴트럴 그레이. 색은 tint(작은 텍스트·아이콘·토글) 한 곳씩만. 다크는 순검정(#000) 바탕.
5. **누르면 흐르고 정착한다.** 전환은 iOS 기본 이징, 시트는 절제된 스프링으로 올라온다. 과장 없이 물처럼.

## §2. 색

### 2.1 팔레트

시맨틱 토큰 전체 표 (a 변형 기준. b 변형은 §2.4 규칙으로 파생, 값은 tokens.css 참조):

| 토큰 | 역할 | a 라이트 | a 다크 |
|---|---|---|---|
| `--color-bg` | 그룹 배경 | `#F2F2F7` | `#000000` |
| `--color-surface` | 카드·셀 면(글래스 불투명 등가) | `#FFFFFF` | `#1C1C1E` |
| `--color-surface-raised` | 시트·팝오버·네비 재질 등가 | `#FFFFFF` | `#2C2C2E` |
| `--color-fill` | systemFill: 키패드 키·세그먼트 트랙 | `#E3E3E8` | `#2C2C2E` |
| `--color-text` | label(본문·제목) | `#1C1C1E` | `#FFFFFF` |
| `--color-text-sub` | secondaryLabel(보조) | `#6C6C70` | `#AEAEB4` |
| `--color-text-tertiary` | tertiaryLabel(캡션·UI, 제약 有 §2.3) | `#8A8A8E` | `#8A8A8E` |
| `--color-primary` | tint 필·CTA·링크 | `#0068D6` | `#0A6EE0` |
| `--color-primary-text` | primary 위 텍스트 | `#FFFFFF` | `#FFFFFF` |
| `--color-primary-pressed` | press 상태 | `#0050A8` | `#0A5CC4` |
| `--color-primary-soft` | 선택 셀·정보 박스 배경 | `#E4F0FF` | `#0A2647` |
| `--color-primary-soft-text` | soft 위 텍스트·다크의 파란 텍스트 | `#0060C4` | `#5AB0FF` |
| `--color-primary-vivid` | 아이콘·글로우(그래픽 전용) | `#0A84FF` | `#0A84FF` |
| `--color-accent` | 인디고 보조 tint | `#5A4BD4` | `#9E93FF` |
| `--color-danger` | 파괴적·에러 | `#D70015` | `#FF6961` |
| `--color-danger-soft` | 에러 배경 | `#FFE5E7` | `#3A1D1D` |
| `--color-success` | 완료·긍정 | `#1C7A34` | `#32D158` |
| `--color-success-soft` | 성공 배경 | `#E3F5E9` | `#0D3A1E` |
| `--color-separator` | 헤어라인 구분선 | `#C6C6C8` | `#38383A` |
| `--color-dim` | 모달 뒤 딤 | `rgba(0,0,0,0.40)` | `rgba(0,0,0,0.50)` |

글래스 재질 토큰(§5): `--glass-surface`(카드) `rgba(255,255,255,0.72)`/dark `rgba(44,44,46,0.72)`,
`--glass-nav`(네비·탭바) `rgba(248,248,250,0.80)`/dark `rgba(28,28,30,0.80)`,
`--glass-blur` `saturate(180%) blur(20px)`, `--glass-blur-strong` `blur(40px)`.

### 2.2 라이트/다크

양쪽 모두 지원한다(위 표). 라이트는 그룹 배경 `#F2F2F7` 위에 흰 면이 뜨는 iOS grouped 구조.
**다크는 순검정 `#000000` 바탕**에 surface를 `#1C1C1E`→`#2C2C2E`로 밝기만 올린다(색조 없는 뉴트럴 그레이 램프).
primary는 라이트/다크에서 hue를 유지하되, 다크 CTA 필은 흰 텍스트 4.5:1을 확보하려고 라이트(#0068D6)보다 살짝 밝은 `#0A6EE0`을 쓴다.
텍스트로 쓰는 파랑은 다크에서 `--color-primary-soft-text`(#5AB0FF)로 밝히고, 아이콘 tint는 `--color-primary-vivid`(#0A84FF, 순검정 대비 5.76:1).
danger/success는 다크에서 밝은 톤(#FF6961/#32D158)으로 교체.

### 2.3 대비 규칙 (실측 계산값 명기)

기준: **본문 4.5:1 이상, 대형 텍스트(24px+ 또는 18.66px+/700+)·UI 그래픽 3:1 이상.**
아래는 WCAG 2.x 상대휘도 공식(`L=0.2126R'+0.7152G'+0.0722B'`, `c'=c/12.92 (c≤0.03928) else ((c+0.055)/1.055)^2.4`, `CR=(L1+0.05)/(L2+0.05)`)으로 계산한 실제 대비율이다.

| 쌍 | a 라이트 | a 다크 | 판정 |
|---|---|---|---|
| bg / text | **15.25:1** | **21.00:1** | ✓ 본문 |
| surface / text | **17.01:1** | **17.01:1** | ✓ 본문 |
| surface-raised / text | 17.01:1 | **13.94:1** | ✓ 본문 |
| bg / text-sub | **4.69:1** | **9.51:1** | ✓ 본문 |
| surface / text-sub | **5.23:1** | **7.71:1** | ✓ 본문 |
| bg / text-tertiary | **3.08:1** | **6.11:1** | 라이트 UI/대형만(본문 금지) |
| surface / text-tertiary | **3.44:1** | **4.95:1** | 라이트 UI/대형만 |
| primary / primary-text(흰) | **5.31:1** | **4.86:1** | ✓ 본문 |
| primary(텍스트) / bg | **4.76:1** | vivid **5.76:1** | ✓ 본문 |
| primary(텍스트) / surface | **4.70:1** | vivid **4.66:1** | ✓ 본문 |
| primary-soft / primary-soft-text | **5.25:1** | **6.58:1** | ✓ 본문 |
| primary-vivid / bg (그래픽) | **3.27:1** | **5.76:1** | ✓ 그래픽(3:1) — 본문 텍스트 금지 |
| accent / bg | **5.55:1** | **8.07:1** | ✓ 본문 |
| danger / bg | **4.83:1** | **7.45:1** | ✓ 본문 |
| danger-soft / danger | **4.52:1** | **5.42:1** | ✓ 본문 |
| success / bg | **4.85:1** | **10.40:1** | ✓ 본문 |
| success-soft / success | **4.77:1** | **6.34:1** | ✓ 본문 |

b 변형(틸) 실측: 라이트 primary(#007680)/흰 텍스트 **5.38:1**, bg 위 텍스트 **4.82:1**, soft(#DDF2F4)/soft-text(#006670) **5.77:1**, accent(#3A6EA5)/흰 **5.31:1** — 다크 primary(#00838F)/흰 **4.52:1**, soft(#052A30)/soft-text(#54C9DA) **7.78:1**, vivid(#40C8E0)/bg **10.56:1**. 전부 통과.

추가 제약 (위 표에서 도출):
- **primary 위 텍스트는 항상 `--color-primary-text`(흰색).** 임의 색 금지.
- **`--color-text-tertiary`는 본문 크기 텍스트 금지**(라이트 bg 3.08:1). 캡션이라도 3:1 UI/대형 규칙 안(18.66px+/700, 또는 아이콘·플레이스홀더)에서만. 본문 보조 텍스트는 `--color-text-sub`.
- **`--color-primary-vivid`는 그래픽 전용**(아이콘·글로우·차트, 라이트 3.27:1). 17px 이하 텍스트에 쓰면 위반. 라이트에서 링크/tint 텍스트는 `--color-primary`(#0068D6), 다크에서는 `--color-primary-vivid`(#0A84FF, 텍스트 가능 4.66:1↑) 또는 soft-text.
- **헤어라인 구분선(`--color-separator`)은 장식·비필수 요소**로 3:1을 면제한다. 정보는 절대 구분선만으로 전달하지 않고(간격+텍스트로도 구분), 셀 경계는 순전히 시각적 힌트다. iOS 헤어라인의 미묘함을 재현하기 위한 의도적 예외.
- **`--color-fill` 위 본문은 `--color-text`만.** text-sub는 fill 위 4.09:1로 본문 금지(대형/UI만).
- 새 색 조합은 이 표의 해당 행을 재계산해 4.5/3.0을 넘겨야 채택한다. 미달이면 폐기.

### 2.4 팔레트 생성 규칙 (변형·랜덤용)

**고정 (변형이 건드릴 수 없는 것):**
- 뉴트럴 램프 전체: bg/surface/surface-raised/fill/text/text-sub/text-tertiary/separator/dim의 정확한 hex. 라이트는 grouped 구조(#F2F2F7 위 흰 면), 다크는 순검정(#000) 기반.
- danger(hue 350~5)·success(hue 130~150)의 의미와 값. 파괴적=danger, 완료=success 매핑.
- 토큰 구조: primary 6종 세트(primary/text/pressed/soft/soft-text/vivid) + accent를 반드시 전부 제공.
- 글래스 재질 규약: 반투명 rgba 면 + `--glass-blur`, 그리고 그 **합성 불투명 등가**로 대비를 검증한다.
- 채도·명도 범위: 라이트 primary는 HSL 기준 **S 65~100%, L 40~48%**(흰 텍스트 4.5:1 + bg 위 텍스트 4.5:1 동시 확보 구간), soft는 동일 hue **S 15~40%, L 93~96%**(라이트)/**S 55~75%, L 12~18%**(다크).

**자유 (변형이 바꾸는 것):**
- primary hue 0~360 자유. 단 danger(345~10)·success(125~155)와 ±15° 이내로 겹치면 시맨틱 색과 혼동되므로 그 구간은 피해서 다시 뽑는다. (b 변형 #007680은 hue 187 틸.)
- accent는 primary hue **±25~60°** 이내 또는 뉴트럴 계열(스틸블루). 항상 텍스트 가능 대비(4.5:1)까지 확보.
- 다크 primary는 라이트 hue 유지 + L을 흰 텍스트 4.5:1 통과 최소치까지 밝힌다. vivid는 다크에서 순검정 대비 3:1↑ 밝은 톤.

**랜덤 명명 `6-r<hue>`** (예: `6-r210` = hue 210 변형):
1. hue h를 뽑는다 → 라이트 `primary = hsl(h, 82%, 44%)`에서 시작.
2. (a) 흰 텍스트 대비 4.5:1 **그리고** (b) bg(#F2F2F7) 위 텍스트 4.5:1 — 둘 다 미달이면 L을 1%p씩 내려 **최초로 둘 다 통과하는 값을 채택**(결정적 절차 — 같은 이름이면 항상 같은 색).
3. pressed는 primary에서 L −8%p, vivid는 L +10%p(그래픽 3:1만 확인), soft는 동일 h에 S 25%/L 94%(라이트)·S 65%/L 15%(다크), soft-text는 soft 위 4.5:1 통과 최소 L.
4. 다크 primary는 h 유지, 흰 텍스트 4.5:1 통과 최소 L까지 밝힘.
5. §2.3 표 전 행을 재계산해 하나라도 미달이면 그 hue는 폐기하고 다시 뽑는다. 통과한 hue만 `6-r<h>`로 명명.

## §3. 타이포그래피

**폰트 스택** (외부 로드 금지 — 시스템 폴백만. Apple 기기에서 SF, 그 외 system-ui):

```css
--font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', system-ui,
               'Segoe UI', Roboto, 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif;
```

**타입 스케일** — 이 10단계(px 값 9종) 외 font-size 사용 금지. iOS Dynamic Type(Large) 매핑:

| 이름 | size | weight | line-height | tracking | 용도 |
|---|---|---|---|---|---|
| large-title | 34px | 700 | 1.21 | +0.011em | 대시보드/화면 최상단 큰 타이틀 |
| title-1 | 28px | 700 | 1.21 | +0.007em | 상세 화면 큰 타이틀 |
| title-2 | 22px | 700 | 1.27 | +0.003em | 섹션 헤더 |
| title-3 | 20px | 600 | 1.25 | +0.002em | 카드·서브섹션 제목 |
| headline | 17px | 600 | 1.29 | -0.024em | 리스트 강조·버튼 라벨·셀 주 텍스트 강조 |
| body | 17px | 400 | 1.29 | -0.024em | 본문·리스트 주 텍스트 |
| subhead | 15px | 400 | 1.33 | -0.016em | 보조 본문·셀 보조 설명 |
| footnote | 13px | 400 | 1.38 | -0.006em | 그룹 헤더(대문자)·각주 |
| caption-1 | 12px | 400 | 1.33 | 0 | 캡션·타임스탬프·뱃지 |
| caption-2 | 11px | 500 | 1.18 | +0.006em | 탭바 라벨(최소, 이보다 작게 금지) |

**위계 규칙:**
- 한 화면에 large-title 또는 title-1은 **1개만**(둘을 동시에 쓰지 않음). 헤딩 레벨은 화면당 최대 3단계.
- **그룹 헤더는 footnote(13px)** — iOS grouped 리스트 관례상 대문자·자간 확대·`--color-text-sub`. 색면 헤더 금지.
- 숫자·통계는 `font-variant-numeric: tabular-nums`. 피트니스 수치 등 대형 숫자는 title-1/large-title + 700.
- 사용 weight는 **400/500/600/700의 4종만.** headline은 body와 동일 size(17px)를 weight(600 vs 400)로 분리한다. 800/900 금지.
- large title → 인라인 전환: 스크롤 시 large-title(34px)이 네비바 인라인 headline(17px/600)으로 접힌다(§7).

**금지:** 임의 font-size 사용 금지 — 위 스케일 9개 px 값(34/28/22/20/17/15/13/12/11)만. rem/em 단위도 스케일 이탈로 간주(§12 V3).

## §4. 간격 · 레이아웃

**스페이싱 스케일** — 이 값 외 margin/padding/gap 사용 금지 (0 제외):

```
4  8  12  16  20  24  32  40  48  64  (px)
```

| 항목 | 값 |
|---|---|
| 콘텐츠 좌우 마진 | 16px (iOS 표준 layout margin) |
| inset grouped 리스트 좌우 인셋 | 16px |
| 그룹(섹션) 간 간격 | 32px |
| 그룹 헤더 ↔ 리스트 컨테이너 | 8px |
| 셀·카드 내부 패딩 | 16px (상하 12px 허용) |
| 리스트 셀 상하 패딩 | 12px (셀 min-height 44px) |
| 셀 내 아이콘 ↔ 텍스트 | 12px |
| 제목 ↔ 본문 | 8px, 본문 ↔ 보조 4px |
| 네비바 높이 | 44px (large-title 확장 시 아래로 +52px 영역) |
| 탭바 높이 | 49px + `env(safe-area-inset-bottom)` |
| 하단 고정 CTA | 버튼 높이 50px, 좌우 16px, 아래 8px + `env(safe-area-inset-bottom)` |
| 터치 타깃 | 최소 44×44px |
| 헤어라인 | 0.5px (`--hairline`) |

**컨테이너·그리드:**
- 모바일 기준 폭 390~402px, 단일 컬럼. 세로 스택 + inset grouped 리스트가 기본. 자유 그리드 금지.
- **데스크톱(768px+)에서는 중앙 402px 프레임**: `max-width: 402px; margin: 0 auto;` 프레임 radius 28px, `--shadow-3`, 프레임 밖 배경 라이트 `#E3E3E8`/다크 `#000000`.
- 예외적 2열: 피트니스 지표 카드(활동 링 등)에서 gap 12px 2열까지. 3열 이상 금지.
- **safe-area 필수**: 네비바 상단 `env(safe-area-inset-top)`, 탭바·CTA 하단 `env(safe-area-inset-bottom)`.

## §5. 형태 (Shape)

**radius 스케일** — 이 값 외 border-radius 금지:

| 토큰 | 값 | 적용처 |
|---|---|---|
| `--radius-sm` | 8px | 칩·세그먼트 컨트롤·키패드 키·작은 뱃지 |
| `--radius-md` | 12px | 버튼·입력·리스트 셀(단독 셀) |
| `--radius-lg` | 16px | 카드·inset grouped 컨테이너·토스트 |
| `--radius-xl` | 20px | 큰 카드·알림 모달 |
| `--radius-2xl` | 28px | 바텀시트 상단 모서리·데스크톱 앱 프레임 |
| `--radius-full` | 999px | 필 버튼·칩·아바타·토글·활동 링 |

- iOS의 **연속 곡률(continuous corner)** 감성을 목표로 하되, 웹에서는 표준 `border-radius`로 근사한다(SVG squircle 불필요).
- **면 분리는 border가 아니라 (1) 글래스 재질/surface 색 차이, (2) 헤어라인 구분선으로 한다.** `border: 1px solid`로 카드를 감싸는 것 금지.
  허용 예외: (a) inset grouped 셀 사이 **leading-inset 헤어라인**(`0.5px`, 좌측 16px 들여쓰기, `--color-separator`), (b) 입력 필드 하단 헤어라인.
- **글래스 재질**: 네비바·탭바·바텀시트는 `background: var(--glass-nav/surface); backdrop-filter: var(--glass-blur);` + `-webkit-backdrop-filter`. blur 미지원 브라우저는 §2.3의 불투명 합성 등가로 폴백(대비 검증 완료).

**shadow/elevation 단계** (다크는 tokens.css에서 오버라이드):

| 토큰 | 라이트 값 | 다크 값 | 용도 |
|---|---|---|---|
| `--shadow-0` | `none` | `none` | 기본. 카드·셀은 그림자 없음 |
| `--shadow-1` | `0 1px 3px rgba(0,0,0,0.08)` | `0 1px 3px rgba(0,0,0,0.40)` | 살짝 뜬 필 버튼·팝오버 |
| `--shadow-2` | `0 8px 30px rgba(0,0,0,0.12)` | `0 8px 30px rgba(0,0,0,0.60)` | 바텀시트·팝오버·토스트 |
| `--shadow-3` | `0 20px 60px rgba(0,0,0,0.24)` | `0 20px 60px rgba(0,0,0,0.70)` | 데스크톱 앱 프레임·알림 모달 |

## §6. 핵심 컴포넌트 규칙

공통 press 물성: 탭 가능한 셀·버튼·카드는 `:active`에서 `transform: scale(0.97)`(200ms `--ease-standard`), 떼면 `--ease-spring`으로 복귀. 텍스트 전용(plain) 버튼은 scale 대신 `opacity: 0.4` 200ms.

### 6.1 버튼 (primary / secondary / plain)

- **primary(filled)**: h 50px(하단 CTA)/44px(인라인), radius 12px, bg `--color-primary`, 라벨 headline(17px/600) `--color-primary-text`. 하단 CTA는 가로 꽉 참, 인라인은 내용 폭 + 좌우 20px.
- **secondary(tinted)**: 동일 치수, bg `--color-primary-soft`, 라벨 17px/600 `--color-primary-soft-text`.
- **plain(text)**: bg 투명, 라벨 17px(취소)/17px 600(강조) `--color-primary`(라이트)·`--color-primary-vivid`(다크). h 44px. 네비바 액션·취소 전용.
- 상태: hover(데스크톱만) `filter: brightness(1.06)` / press bg `--color-primary-pressed` + `scale(0.97)`(plain은 opacity 0.4) / disabled `opacity: 0.35` / focus-visible `outline: 2px solid var(--color-primary); outline-offset: 2px`.

```css
.btn-primary { height: 50px; width: 100%; border: 0; border-radius: var(--radius-md);
  background: var(--color-primary); color: var(--color-primary-text);
  font-size: var(--font-size-headline); font-weight: 600; letter-spacing: -0.024em;
  transition: transform var(--motion-quick) var(--ease-standard), background var(--motion-quick) linear; }
.btn-primary:active { transform: scale(0.97); background: var(--color-primary-pressed); }
.btn-primary:disabled { opacity: 0.35; }
```

### 6.2 입력 필드

- **그룹 셀 안의 입력**이 기본: inset grouped 셀 내부, 라벨 좌측 body(17px) + 값 우측 body `--color-text`(또는 편집 중 커서). 셀 배경 surface, 셀 사이 헤어라인.
- 독립 입력: h 44px, 값 17px, 배경 `--color-fill` radius 12px 좌우 패딩 12px(검색창 스타일) 또는 하단 헤어라인 방식. focus 시 헤어라인/링을 `--color-primary`로 200ms 전환.
- 금액·수치 입력은 title-1(28px/700 tabular-nums) + 커스텀 키패드(§9 screen-…)일 때 시스템 키보드 억제(`inputmode="none"`+readonly).
- 에러: 하단 헬퍼 footnote(13px) `--color-danger`, 좌우 3px 흔들림 2회 200ms.

### 6.3 카드 / inset grouped 컨테이너

- **inset grouped 리스트**(핵심 패턴): 좌우 16px 인셋된 radius 16px 컨테이너, bg `--color-surface`(또는 글래스 재질), `--shadow-0`. 안에 셀을 쌓고 셀 사이만 leading-inset 헤어라인.
- **독립 카드**: bg `--color-surface`, radius 16px, 패딩 16px, `--shadow-0`. 그룹 배경(#F2F2F7) 위에서 surface 색 차이로 뜬다. 그림자로 띄우지 않는다.
- 카드 안에 카드 금지(중첩 1단까지). 카드 제목은 title-3 또는 footnote(그룹 헤더성).

### 6.4 리스트 셀 (list cell)

- min-height 44px, 상하 패딩 12px, 좌우 16px(컨테이너 내부). 구조: [아이콘 29×29 rounded-square(radius 8) 또는 원형, tint 배경 + 흰 SVG] –12px– [주 텍스트 body(17px) + 보조 subhead(15px) `--color-text-sub`] – [우측 값 subhead `--color-text-sub` 또는 컨트롤] – [셰브론 SVG 14px `--color-text-tertiary`].
- 셀 사이 구분선은 **leading-inset 헤어라인**(좌측 16px+아이콘 폭만큼 들여쓰기, `--color-separator` 0.5px). 컨테이너 첫/끝 셀엔 선 없음.
- press: 셀 전체 bg `--color-fill` 120ms + `scale(0.99)`.

```css
.cell { display: flex; align-items: center; gap: 12px; min-height: 44px; padding: 12px 16px; }
.cell + .cell { box-shadow: inset 0 var(--hairline) 0 var(--color-separator); } /* leading inset은 padding으로 */
.cell .value { margin-left: auto; font-size: var(--font-size-subhead); color: var(--color-text-sub);
  font-variant-numeric: tabular-nums; }
```

### 6.5 상단 네비바 (large title 포함)

- h 44px + safe-area-top, 글래스 재질(`--glass-nav` + `--glass-blur`). 좌 뒤로가기(‹ 셰브론 SVG + 라벨 17px `--color-primary`), 중앙 인라인 타이틀 17px/600(스크롤 전 투명), 우측 plain 액션 최대 2개.
- **large title 모드**: 네비바 아래 large-title(34px/700) 좌측 정렬 영역(높이 52px). 스크롤 다운 시 large-title이 위로 사라지며 네비바 인라인 타이틀이 페이드인(200ms `--ease-standard`), 네비바 하단 헤어라인 등장.
- 햄버거 메뉴·드로어 금지(§10 G8).

### 6.6 하단 탭바 (모바일)

- h 49px + safe-area, 탭 2~5개. 각 탭: 25px SF Symbols 스타일 SVG(fill/stroke) + caption-2(11px/500) 라벨, 세로 스택. 히트 영역 44px↑.
- 활성 탭 `--color-primary`(라이트)·`--color-primary-vivid`(다크) — 아이콘 fill + 라벨 동색. 비활성 `--color-text-tertiary`.
- bg 글래스 재질 `--glass-nav` + `--glass-blur`, 상단 헤어라인 0.5px `--color-separator`. 색면 배경 금지.

### 6.7 모달 / 바텀시트

- 기본은 **바텀시트**(sheet): 하단 부착, radius 28px 28px 0 0, bg `--color-surface-raised`(또는 `--glass-surface`+`--glass-blur-strong`), `--shadow-2`, 상단 그랩바 36×5px `--color-separator` radius full(상단 중앙, 위 8px), 내부 패딩 16px, 제목 title-2.
- 진입 `translateY(100%)→0` 500ms `--ease-spring`(절제된 오버슈트) + 딤(`--color-dim`) 페이드 300ms. 뒤 콘텐츠는 살짝 축소(scale 0.96)되며 뒤로 물러나는 iOS 카드 스택 느낌(선택).
- 파괴적 확인 **알림(alert)**: 중앙, 폭 270px, radius 20px, bg `--color-surface-raised`, 제목 headline 중앙 + 본문 footnote 중앙, 버튼 2개(취소 plain + 파괴 `--color-danger` 텍스트) 헤어라인으로 구분한 수평/수직 배치.

### 6.8 토스트 / 배너

- 상단 알림 배너 또는 하단 토스트: bg `--color-surface-raised` + `--shadow-2`, radius 16px, 패딩 12px 16px, 텍스트 subhead(15px) `--color-text`. 아이콘은 상태색 SVG(success/danger/primary tint).
- 진입 `translateY(-12px)+opacity 0→1`(상단) / `translateY(12px)`(하단) 400ms `--ease-out`, 3초 후 자동 소멸(300ms 페이드).

### 6.9 뱃지 / 칩 / 세그먼트 컨트롤

- **뱃지**: h 20px, 패딩 2px 8px, radius full 또는 8px, caption-1(12px). soft 배경 + 대응 텍스트 조합만(`--color-primary-soft`+soft-text, success-soft+success, danger-soft+danger). 알림 카운트는 `--color-danger` 필 + 흰 텍스트.
- **세그먼트 컨트롤**: 트랙 bg `--color-fill` radius 8px 패딩 2px, 선택 세그먼트 흰 알약(surface radius 8px + `--shadow-1`) 슬라이드 300ms `--ease-standard`, 라벨 subhead(15px)/600 선택 시 `--color-text`.
- **선택 칩**: h 32px(히트 44px), 패딩 6px 12px, radius full, 기본 bg `--color-fill` 텍스트 subhead `--color-text` → 선택 시 bg `--color-primary-soft` 텍스트 `--color-primary-soft-text`.

### 6.10 토글 / 컨트롤

- **스위치**: 51×31px, 트랙 radius full, off `--color-fill` / on `--color-success`(iOS 관례) 또는 `--color-primary`, 노브 흰 원 27px `--shadow-1`, 전환 300ms `--ease-standard`. 셀 우측에 배치.
- **슬라이더**: 트랙 4px radius full `--color-fill`, 채움 `--color-primary`, 노브 28px 흰 원 `--shadow-1`.

### 6.11 빈 상태 (empty state)

- 세로 중앙 정렬: 56px SF Symbols 스타일 단색 SVG(`--color-text-tertiary`) → 12px → 제목 title-3(20px/600) → 8px → 설명 subhead(15px) `--color-text-sub` 중앙 → 20px → primary 또는 tinted 버튼 h 44px.
- 카피는 §8 규칙. 사과·경고 톤 금지.

## §7. 모션

**모션 성격 한 줄: "물처럼 미끄러지고 절제된 스프링으로 정착 — 재질(blur)이 콘텐츠와 함께 흐른다."**

**토큰:**

```css
--motion-quick: 200ms;  /* press 반응 */
--motion-fast:  300ms;  /* fade·색 전환·네비 push·large title 접힘 */
--motion-base:  400ms;  /* 진입·배너 */
--motion-slow:  500ms;  /* 시트 프레젠트·성공 체크 */
--ease-standard: cubic-bezier(0.25, 0.1, 0.25, 1); /* iOS 기본 */
--ease-out:      cubic-bezier(0.22, 1, 0.36, 1);
--ease-spring:   cubic-bezier(0.34, 1.35, 0.64, 1); /* 절제된 오버슈트 */
```

**패턴별 규칙:**

| 패턴 | 규칙 |
|---|---|
| press | `:active`에서 `scale(0.97)` 200ms `--ease-standard`, 떼면 `--ease-spring` 복귀. 셀은 0.99 + `--color-fill`. plain 버튼은 opacity 0.4 |
| 진입(entrance) | `opacity 0→1` + `translateY(8px)→0`, 400ms `--ease-out` |
| 리스트 스태거 | 셀당 30ms 지연, 최대 10개(이후 동시) |
| 네비 push | 들어오는 화면 `translateX(24px)→0`+fade 300ms `--ease-standard`, 나가는 화면 `translateX(-12px)`+fade(패럴랙스). 전면 좌우 통짜 슬라이드는 push에서만 |
| large title 접힘 | 스크롤 진행도에 연동해 34px→17px, 인라인 타이틀 opacity 0→1, 네비 헤어라인 등장 — 300ms `--ease-standard` |
| 바텀시트 | `translateY(100%)→0` 500ms `--ease-spring`, 딤 fade 300ms, 뒤 콘텐츠 scale 0.96 |
| 세그먼트/토글 | 알약·노브 이동 300ms `--ease-standard` |
| 성공 체크 | 원 `scale(0)→1` 500ms `--ease-spring` + 체크 패스 `stroke-dashoffset` 300ms(100ms 지연) |

**`prefers-reduced-motion` 대응 필수:** transform·blur 전환 제거, opacity 150ms만 유지. 시트·large title 접힘은 즉시 상태 전환. tokens.css 하단 전역 블록으로 강제.

## §8. 보이스 & 톤 (마이크로카피)

- **간결한 해요체 기본.** 명료하고 차분하게. 과장·유행어·느낌표 남발 금지. iOS의 절제된 시스템 보이스.
- 문장은 짧게(20자 내외), 사용자·객체가 주어. 기능 이름은 명사로 또렷하게("건강 데이터", "알림").
- 이모지: **원칙적으로 사용 안 함**(SF Symbols 스타일 SVG로 대체). 성공 축하 등 극히 예외적 1개만.
- 숫자는 천 단위 콤마, 단위는 뒤에 공백 없이 또는 관례대로("1,240 kcal", "72 bpm").

| 상황 | Glass 카피 | 금지 예 |
|---|---|---|
| CTA (완료) | 완료 | 확인, 제출하기 |
| CTA (다음) | 계속 | 넘어가기, 진행 |
| CTA (저장) | 저장 | 저장하기를 눌러주세요 |
| 완료 토스트 | 저장했어요 | 저장이 정상적으로 완료되었습니다 |
| 에러 (연결) | 연결할 수 없어요. 네트워크를 확인하고 다시 시도해 주세요 | 네트워크 오류 (E-1024) |
| 에러 (입력) | 이메일 형식이 올바른지 확인해 주세요 | 잘못된 입력입니다 |
| 빈 상태 | 아직 기록이 없어요 | 데이터가 존재하지 않습니다 |
| 로딩 | 불러오는 중… | 로딩 중입니다. 잠시 기다려 주십시오 |
| 파괴적 확인 | 이 운동을 삭제할까요? 되돌릴 수 없어요 | 정말로 삭제하시겠습니까? |
| 권한 요청 | 활동을 기록하려면 동작 데이터 접근이 필요해요 | 권한을 허용하십시오 |

- 에러는 항상 **[무슨 일인지 1문장] + [지금 할 수 있는 일 1문장]** 구조. 에러 코드·기술 용어 노출 금지.
- 파괴적 확인의 실행 버튼 라벨은 동사("삭제")로 명확히. "예/아니오" 금지.
- 금지 표현: "~하십시오", "정상적으로 처리되었습니다", 반복되는 "죄송합니다", 느낌표 2개 이상, 시스템 주어("시스템이", "요청이").

## §9. 레이아웃 레시피 — 데모 5화면 (가상 설정·피트니스 앱 "Aura")

모든 화면 공통: 모바일 390~402px 단일 컬럼, 콘텐츠 마진 16px, inset grouped 리스트 인셋 16px, 데스크톱은 중앙 402px 프레임(§4). 네비바·탭바는 글래스 재질.
하단 탭바(§6.6) 4탭: 요약 / 운동 / 설정 / 알림(데모에서는 각 화면이 이 탭에 매핑).

### screen-1 대시보드 (요약)

- 목적: 오늘의 활동을 한눈에. large title로 맞이한다.
- 위→아래: 글래스 네비바(우측 프로필 아바타 plain) → **large-title "요약"(34px/700 좌측)** → 16px → 활동 링 카드(surface radius 16px 패딩 16px: 좌측 3중 원형 링 SVG `--color-primary-vivid`·`--color-accent`·`--color-success`, 우측 지표 3행 — 라벨 footnote + 값 title-3 tabular-nums) → 32px → "추세" 그룹 헤더(footnote 대문자 sub) → 8px → 2열 지표 카드(gap 12px: 걸음·심박, 각 surface radius 16px, 아이콘 25px vivid + 값 title-1/700 + 단위 subhead sub) → 32px → "오늘의 하이라이트" inset grouped 리스트(셀 3개, 아이콘 rounded-square tint + 텍스트 + 셰브론) → 탭바.
- 사용: 네비바(large title), 카드, 2열 지표, inset grouped 리스트, 탭바. 진입 시 링 카운트업 + 셀 스태거(30ms).

### screen-2 그룹 설정 리스트 (설정 홈)

- 목적: iOS 설정 앱 감성의 순수 inset grouped 리스트.
- 위→아래: 글래스 네비바 → **large-title "설정"** → 16px → 검색창(fill radius 12px, 돋보기 SVG + placeholder text-tertiary "검색") → 24px → 프로필 그룹(셀 1개: 아바타 44px + 이름 headline + "Apple 계정, iCloud…" subhead sub + 셰브론) → 32px → 그룹 1(footnote 헤더 "연결" + inset grouped: Wi‑Fi 값 우측 sub + 셰브론 / Bluetooth 토글 / 셀룰러) → 32px → 그룹 2("일반" + 셀들: 알림·소리·집중 모드, 각 아이콘 rounded-square tint) → 32px → 그룹 3("개인정보 보호" 단일 셀) → 탭바.
- 각 셀 아이콘은 29px rounded-square에 서로 다른 tint 배경(primary/accent/success/danger) + 흰 SVG. 셀 사이 leading-inset 헤어라인.

### screen-3 상세 (항목 상세 + 컨트롤)

- 목적: 한 설정 항목("알림")의 상세. 토글·세그먼트·슬라이더가 그룹으로.
- 위→아래: 네비바(‹ "설정" 뒤로 + 인라인 타이틀 "알림", 스크롤 시 등장) → title-1 "알림"(large title 축소형) → 16px → 그룹 헤더 "알림 스타일" + inset grouped(셀: "알림 허용" 스위치 on / "미리보기" 값 "항상" + 셰브론) → 8px 아래 그룹 설명 footnote sub("잠금 화면과 알림 센터에…") → 32px → 그룹 "배너" + 세그먼트 컨트롤 셀(임시/유지) → 32px → 그룹 "소리" + 슬라이더 셀(볼륨) + 스위치 셀(진동) → 32px → "이 앱 알림 끄기" 단독 셀(텍스트 `--color-danger` 중앙) → 하단 여백.
- 컨트롤 상태 변경 시 §7 토글/세그먼트 모션. 스크롤에 따라 large→인라인 타이틀 접힘 시연.

### screen-4 모달 시트 (바텀시트 편집)

- 목적: "새 운동 추가" 바텀시트. 시트 프레젠트 + 폼.
- 뒤 화면(운동 목록, 살짝 축소 scale 0.96 + 딤) 위로 **바텀시트**(radius 28px 상단, 글래스 `--glass-blur-strong`) 슬라이드업 500ms 스프링.
- 시트 구성: 그랩바 36×5px → 헤더 행(좌 plain "취소" `--color-primary` / 중앙 title-2 "새 운동" / 우 plain "추가" 600 강조) → 16px → 큰 수치 입력(title-1 28px/700 tabular-nums "0" placeholder tertiary "분") → 16px → inset grouped(셀: "종류" 값 "달리기" + 셰브론 / "강도" 세그먼트 낮음·보통·높음 / "위치 사용" 스위치) → 24px → primary CTA "저장"(h 50px) → safe-area.
- 취소/저장 시 시트 `translateY(100%)` 400ms `--ease-standard` + 딤 페이드, 뒤 화면 복귀. 저장 시 상단 배너 "운동을 추가했어요".

### screen-5 알림 (그룹 알림 + 빈 상태)

- 목적: 알림 센터. 시간 그룹 + 좌측 스와이프 삭제 힌트 + 빈 상태 대비.
- 위→아래: 글래스 네비바(우측 plain "편집") → large-title "알림" → 16px → 세그먼트 컨트롤(전체/읽지 않음) → 24px → 그룹 헤더 "오늘" footnote → inset grouped(알림 셀 3개: 앱 아이콘 29px rounded-square + 제목 headline + 본문 subhead sub 2줄 + 우측 시간 caption-1 tertiary) → 32px → 그룹 "이번 주"(셀 2개) → 탭바.
- 빈 상태 변형(읽지 않음 0건): 중앙 정렬 §6.11 — 종 SVG 56px tertiary + "새 알림이 없어요" title-3 + "확인할 알림이 오면 여기에 표시돼요" subhead sub.
- 셀 진입 스태거, 스크롤 시 large→인라인 접힘.

## §10. 금지 규칙 (Anti-AI-look)

**공통 금지** (AI가 흔히 저지르는 실수 → 대신 할 것):
1. 보라→파랑 그라데이션 히어로 → Glass에 장식 그라데이션 없음. vibrancy는 콘텐츠 위 blur로만 표현.
2. 모든 카드에 동일 그림자 → 카드·셀은 `--shadow-0`. 그림자는 떠 있는 것(시트·팝오버·토스트·데스크톱 프레임)에만.
3. 3열 아이콘+제목+설명 카드 반복 → 최대 2열(지표 카드 한 곳). 나머지는 inset grouped 리스트.
4. `border: 1px solid #eee` 남발 → 카드 외곽선 0개. 분리는 surface 색/글래스 재질 + leading-inset 헤어라인(0.5px) 예외 2곳만.
5. 이모지를 아이콘 대신 사용 → 아이콘은 SF Symbols 스타일 인라인 SVG(stroke 1.6~2px 또는 fill). 이모지는 §8 규칙(사실상 금지).
6. 화면마다 다른 radius → §5 스케일 6값만. 같은 컴포넌트는 항상 같은 radius.

**Glass 고유 금지** (G1~G8):
1. **G1 불투명 색면 네비/탭바 금지** → 네비바·탭바·시트는 반드시 글래스 재질(`--glass-*` + `backdrop-filter`). 통짜 흰/검정 바 금지(폴백 등가만 허용).
2. **G2 리스트를 개별 카드로 쪼개기 금지** → 관련 셀은 하나의 inset grouped 컨테이너(radius 16px) 안에 쌓고, 셀 사이만 leading-inset 헤어라인으로 나눈다. 셀마다 그림자 카드 금지.
3. **G3 진한 채도 대면적 금지** → 채도 높은 색은 tint(작은 아이콘 배경·토글·텍스트) 안에서만. 배경·카드는 뉴트럴 그레이. 화면 색면의 80%+가 뉴트럴이어야 정상.
4. **G4 헤어라인 이외의 구분선 금지** → 구분선은 0.5px `--color-separator` leading-inset만. 1px+ 진한 선, 카드 테두리 금지.
5. **G5 커스텀 그라데이션·네온·드롭섀도 텍스트 금지** → 깊이는 blur 재질과 미묘한 shadow 3단계로만. 발광·네온 효과 없음.
6. **G6 전부 중앙 정렬 금지** → 제목·리스트는 좌측 정렬 기본(large title 포함). 중앙 정렬은 빈 상태·알림 모달·성공 화면에만.
7. **G7 다크에서 회색(#1C1C1E 등) 바탕 오용 금지** → 다크 기본 바탕은 순검정 `#000000`. surface만 밝은 그레이로 뜬다. 전면 회색 배경 금지.
8. **G8 상단 햄버거·커스텀 FAB·5개 초과 탭 금지** → 내비게이션은 글래스 탭바(2~5개) + inset 리스트 셀 + 네비 push로만. 떠 있는 원형 FAB 금지.

## §11. Tailwind v4 / React 매핑 (부록)

```css
/* app.css — tokens.css를 불러온 뒤 Tailwind 토큰으로 매핑 */
@import "tailwindcss";
@import "../presets/6-glass/tokens.css";

@theme inline {
  --color-bg: var(--color-bg);
  --color-surface: var(--color-surface);
  --color-surface-raised: var(--color-surface-raised);
  --color-fill: var(--color-fill);
  --color-text: var(--color-text);
  --color-text-sub: var(--color-text-sub);
  --color-primary: var(--color-primary);
  --color-primary-soft: var(--color-primary-soft);
  --color-danger: var(--color-danger);
  --color-success: var(--color-success);
  --radius-md: var(--radius-md);
  --radius-lg: var(--radius-lg);
  --radius-2xl: var(--radius-2xl);
  --font-sans: var(--font-family);
  --ease-standard: var(--ease-standard);
  --ease-spring: var(--ease-spring);
}
```

```tsx
// 글래스 네비바 — backdrop-filter 재질
export function GlassNav({ title }: { title: string }) {
  return (
    <div className="sticky top-0 z-10 h-11 flex items-center justify-center px-4
                    [background:var(--glass-nav)] [backdrop-filter:var(--glass-blur)]
                    [-webkit-backdrop-filter:var(--glass-blur)]
                    [box-shadow:inset_0_-0.5px_0_var(--color-separator)]">
      <span className="text-[17px] font-semibold text-text">{title}</span>
    </div>
  );
}

// inset grouped 리스트 셀 (press 물성 포함)
export function Cell({ icon, title, value }: CellProps) {
  return (
    <button className="w-full flex items-center gap-3 min-h-11 px-4 py-3 text-left
                       transition-transform duration-200 ease-[var(--ease-standard)]
                       active:scale-[0.99] active:bg-fill">
      <span className="grid size-[29px] place-items-center rounded-[8px] bg-primary text-white">{icon}</span>
      <span className="text-[17px] text-text">{title}</span>
      {value && <span className="ml-auto text-[15px] text-text-sub tabular-nums">{value}</span>}
      <ChevronIcon className="size-3.5 text-[color:var(--color-text-tertiary)]" />
    </button>
  );
}
```

**StyleSeed 호환 메모:** tokens.css의 `--color-*` / `--radius-*` / `--motion-*` / `--ease-*`는 StyleSeed theme.css 동명 슬롯에 1:1로 옮겨진다. 글래스 재질(`--glass-*`)은 StyleSeed의 material/surface 슬롯에 대응하고, 폴백 불투명 등가로 대비를 보증한다. 모션 시드는 "Float/Silk" 계열(slide+blur 전환, 절제된 스프링)에 대응. `--font-size-*` 10단계는 type scale의 large-title/title/headline/body/caption 슬롯에 순서대로 매핑한다.

## §12. 채점 루브릭

합격선: **verifiable 9항목 전부 통과(65점 만점 중 65점) + subjective 5항목 평균 4.0 이상**.
하나라도 미달이면 불합격 — loop-runner는 미달 항목만 고쳐 재채점한다.
판정 대상 파일 집합을 `$F`(html/css/tsx 글롭)로 표기한다.

### verifiable 항목 (기계 판정, 65점)

| # | 항목 | 배점 | 판정 방법 |
|---|---|---|---|
| V1 | 대비율: 실제 사용된 bg/text·surface/text·primary/primary-text 쌍 4.5:1 이상, vivid·separator 등 그래픽/장식은 §2.3 규칙(3:1 또는 면제) 준수 | 10 | 결과물 hex를 추출해 WCAG 공식(`L=0.2126R'+0.7152G'+0.0722B'`, `c'=c/12.92 if c≤0.03928 else ((c+0.055)/1.055)^2.4`, `CR=(L1+0.05)/(L2+0.05)`)으로 계산해 §2.3 표와 대조. 토큰 무변경 사용 시 §2.3 표 인용으로 통과 |
| V2 | 스페이싱 스케일 외 값 0개 | 10 | `grep -rhoE '(margin\|padding\|gap\|inset)[a-z-]*:[^;]+' $F \| grep -oE '[0-9]+px' \| grep -vwE '(0\|4\|8\|12\|16\|20\|24\|32\|40\|48\|64)px'` → 0줄 (헤어라인 0.5px는 border/height이므로 미해당) |
| V3 | 타입 스케일 외 font-size 0개 | 10 | `grep -rhoE 'font-size:\s*[0-9.]+(px\|rem\|em)' $F \| grep -vE ':\s*(11\|12\|13\|15\|17\|20\|22\|28\|34)px'` → 0줄 (rem/em 사용 자체가 위반) |
| V4 | radius가 §5 스케일 값만 | 5 | `grep -rhoE 'border-radius:[^;]+' $F \| grep -oE '[0-9]+px' \| grep -vwE '(8\|12\|16\|20\|28\|999)px'` → 0줄 |
| V5 | shadow가 §5 표 4단계와 일치 | 5 | `grep -rhoE 'box-shadow:[^;]+' $F` 의 값이 `var(--shadow-[0-3])` 참조이거나 tokens.css `--shadow-*` 정의 문자열과 일치(단, leading-inset 헤어라인 `inset 0 0.5px 0 var(--color-separator)`는 허용) → 불일치 0건 |
| V6 | `prefers-reduced-motion` 대응 존재 | 5 | `grep -rl 'prefers-reduced-motion' $F \| wc -l` ≥ 1 |
| V7 | 외부 리소스 0 (CDN 폰트/스크립트/이미지) | 5 | `grep -rnE 'https?://[^"'"'"')( ]+\.(css\|js\|woff2?\|ttf\|png\|jpe?g\|webp\|svg)\|fonts\.googleapis\|cdn\.\|unpkg\|jsdelivr' $F` → 0줄 |
| V8 | 글래스 재질 + press 스프링 존재 | 10 | `grep -rE 'backdrop-filter\|var\(--glass' $F \| wc -l` ≥ 1 **그리고** `grep -rF 'scale(0.97)' $F \| wc -l` ≥ 1 **그리고** `grep -rE 'var\(--ease-spring\)\|cubic-bezier\(0\.34, 1\.35, 0\.64, 1\)' $F \| wc -l` ≥ 1 |
| V9 | 테이블 금지 + tabular-nums + safe-area | 5 | `grep -ri '<table' $F \| wc -l` = 0 **그리고** `grep -r 'tabular-nums' $F \| wc -l` ≥ 1 **그리고** `grep -r 'safe-area-inset' $F \| wc -l` ≥ 1 |

### subjective 항목 (AI/사람 채점, 5점 척도 ×5항목 — 평균 4.0 이상 합격)

| # | 항목 | 1점 앵커 | 3점 앵커 | 5점 앵커 |
|---|---|---|---|---|
| S1 | §1 첫인상 부합 (유리 재질·좌측 큰 타이틀·inset 그룹) | 불투명 색면 바에 중앙 타이틀, 카드가 그림자로 흩어져 있다 | 글래스 바는 있으나 large title이 없거나 리스트가 개별 카드로 쪼개져 있다 | 반투명 네비/탭바 위로 콘텐츠가 비치고, 좌측 large title이 스크롤에 접히며, 관련 셀이 하나의 inset grouped 컨테이너에 모여 있다 |
| S2 | §8 어조 준수 | "~하십시오"·"정상적으로 완료되었습니다"·에러 코드 노출 | 해요체이나 문장이 길거나 시스템 주어 혼재 | 간결한 해요체, 에러가 [상황+다음 행동] 구조, 파괴 버튼이 동사("삭제"), 이모지 없음 |
| S3 | 모션 물성 (§7) | 모션 없음 또는 linear/기본 ease만 | press·전환은 있으나 시트 스프링·large title 접힘·재질 전환이 없다 | 누르면 절제된 스프링, 시트가 스프링으로 올라오고, large→인라인 타이틀이 스크롤에 부드럽게 접힌다 |
| S4 | 여백·뉴트럴 지배 (§4·G3) | 요소가 빽빽하거나 채도 높은 색면이 넓다 | 간격은 스케일 값이나 그룹 리듬(32px)이 불규칙하거나 색면이 다소 넓다 | 화면 색면 80%+가 뉴트럴, 그룹 간 32px 리듬이 일정, 색은 tint에만 |
| S5 | §10 정성 항목 (재질·구분선·정렬) | 그라데이션/네온 또는 불투명 색면 바 또는 1px 카드 테두리 남발 | 금지 위반은 없으나 구분선이 과하거나 일부 중앙 정렬 오용 | 글래스 재질 일관, 구분선은 leading-inset 헤어라인만, 좌측 정렬 기본, 순검정 다크 |

**채점 절차:** verifiable은 판정 명령을 그대로 실행해 pass/fail 기록 → subjective는 5화면을 라이트/다크 각각 확인해 앵커와 대조, 1~5점 부여 → 합산. 4.0 미만 항목은 5점 앵커 조건을 수정 지시문으로 변환해 다음 반복에 넘긴다.
