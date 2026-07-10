---
number: 3
codename: Jelly
inspired-by: Toss (toss.im) — 서술 참조만, 상표는 파일/클래스명에 사용하지 않음. 이 문서의 모든 수치는 독립 해석이며 공식 값이 아니다
mood: 친근한 한국 모바일 핀테크. 크고 대담한 숫자, 넓은 호흡, 말랑한 물성, 스프링감 있는 모션
best-for: 소비자용 모바일 앱, 핀테크, 커머스 결제 플로우
variants: [a, b]
status: complete
---

# 3 · Jelly

## §1. 첫인상 요약

1. **숫자가 주인공이다.** 화면에서 가장 큰 요소는 항상 금액(28~36px/700~800)이고, 나머지는 그 숫자를 보좌한다.
2. **여백이 UI다.** 구분선·테두리 대신 20px 이상의 간격과 surface 색 차이로 정보를 나눈다. 화면이 하얗고 성기게 보여야 정상이다.
3. **모든 것이 말랑하다.** 인터랙티브 요소는 radius 16px 이상, 누르면 `scale(0.97)`로 움푹 들어가고 스프링으로 돌아온다.
4. **친구 같은 말투.** "보낼게요", "다 됐어요!" — 해요체, 짧은 문장, 사용자를 주어로.
5. **한 화면 한 과업.** 하단 고정 CTA 하나로 다음 단계가 명확하다. 선택지를 늘어놓지 않는다.

## §2. 색

### 2.1 팔레트

시맨틱 토큰 전체 표 (a 변형 기준. b 변형은 §2.4 규칙으로 파생, 값은 tokens.css 참조):

| 토큰 | 역할 | a 라이트 | a 다크 |
|---|---|---|---|
| `--color-bg` | 화면 배경 | `#FFFFFF` | `#111317` |
| `--color-surface` | 카드·칩·키패드 키 배경 | `#F2F4F6` | `#1B1F27` |
| `--color-surface-raised` | 바텀시트·모달 배경 | `#FFFFFF` | `#232933` |
| `--color-text` | 본문·금액 | `#191F28` | `#E9EDF2` |
| `--color-text-sub` | 보조 본문 (계좌명·설명) | `#4E5968` | `#8B95A1` |
| `--color-text-tertiary` | 캡션·타임스탬프 (제약 有, §2.3) | `#6B7684` | `#7E8896` |
| `--color-primary` | CTA 배경·핵심 액션·링크 텍스트 | `#1C69E0` | `#1C69E0` |
| `--color-primary-text` | primary 위 텍스트 | `#FFFFFF` | `#FFFFFF` |
| `--color-primary-pressed` | CTA press 상태 | `#1554B8` | `#1554B8` |
| `--color-primary-soft` | 연한 파랑 배경 (선택 칩·안내 박스) | `#E8F3FF` | `#17253C` |
| `--color-primary-soft-text` | soft 배경 위 텍스트, 다크의 파란 텍스트 | `#1C69E0` | `#649BFA` |
| `--color-primary-vivid` | 대형 숫자 하이라이트·아이콘·그래프 (그래픽 전용) | `#3182F6` | `#4593FC` |
| `--color-accent` | 보조 포인트 (일러스트·차트 2번째 계열, 그래픽 전용) | `#0891A5` | `#22C3DE` |
| `--color-danger` | 지출·삭제·에러 | `#D22030` | `#FF6B75` |
| `--color-danger-soft` | 에러 배경 | `#FEECEE` | `#3A1D22` |
| `--color-success` | 입금·완료 | `#027A4A` | `#30C285` |
| `--color-success-soft` | 완료 배경 | `#E6F5EE` | `#12312A` |
| `--color-border` | 유일하게 허용되는 선 (입력 밑선·섹션 구분 1회) | `#E5E8EB` | `#2C323B` |
| `--color-dim` | 모달 뒤 딤 | `rgba(25,31,40,0.5)` | `rgba(0,0,0,0.6)` |

### 2.2 라이트/다크

양쪽 모두 지원한다(위 표). 다크는 순검정(#000) 대신 `#111317`(살짝 푸른 흑색)을 쓰고,
surface 단계는 밝기만 올린다(`#1B1F27` → `#232933`). primary·pressed는 라이트와 동일 값을 유지해
CTA의 브랜드 인상을 고정하고, 텍스트로 쓰이는 파랑만 `--color-primary-soft-text`(#649BFA)로 밝힌다.
danger/success는 다크에서 한 단계 밝은 톤(#FF6B75/#30C285)으로 교체해 어두운 배경 위 가독을 확보한다.

### 2.3 대비 규칙 (실측 계산값 명기)

기준: **본문 4.5:1 이상, 대형 텍스트(24px+ 또는 18.7px+/700+)·UI 그래픽 3:1 이상.**
아래 값은 WCAG 2.x 상대휘도 공식으로 계산한 실제 대비율이다.

| 쌍 | a 라이트 | a 다크 | 판정 |
|---|---|---|---|
| bg / text | **16.56:1** | **15.81:1** | ✓ 본문 |
| surface / text | **15.02:1** | **14.04:1** | ✓ 본문 |
| bg / text-sub | **7.11:1** | **6.12:1** | ✓ 본문 |
| surface / text-sub | **6.45:1** | **5.43:1** | ✓ 본문 |
| bg / text-tertiary | **4.62:1** | **5.18:1** | ✓ 본문 |
| surface / text-tertiary | **4.19:1** | **4.60:1** | 라이트 4.5 미달 → 아래 제약으로 통제 |
| primary / primary-text | **5.06:1** | **5.06:1** | ✓ 본문 |
| primary(텍스트로) / bg | **5.06:1** | soft-text 기준 **6.74:1** | ✓ 본문 |
| primary(텍스트로) / surface | **4.59:1** | soft-text 기준 **5.98:1** | ✓ 본문 |
| primary-soft / primary-soft-text | **4.51:1** | **5.57:1** | ✓ 본문 |
| danger / bg | **5.26:1** | **6.74:1** | ✓ 본문 |
| danger / surface | **4.77:1** | **5.98:1** | ✓ 본문 |
| success / bg | **5.41:1** | **8.13:1** | ✓ 본문 |
| success / surface | **4.90:1** | **7.22:1** | ✓ 본문 |
| primary-vivid / bg | **3.71:1** | **6.05:1** | ✓ 그래픽(3:1) — 본문 텍스트 금지 |
| accent / bg | **3.75:1** | **8.79:1** | ✓ 그래픽(3:1) — 본문 텍스트 금지 |

b 변형(민트) 주요 쌍 실측: 라이트 primary(#00805A)/흰 텍스트 **4.96:1**, primary/surface **4.50:1**,
soft(#E5F6EF)/soft-text(#006B4B) **5.85:1**, accent(#0B7D74)/bg **5.00:1** —
다크 primary(#2BB98A)/primary-text(#06281C) **6.33:1**, soft(#122B22)/soft-text(#3DC495) **6.83:1**. 전부 통과.

추가 제약 (위 표에서 도출):
- **primary 위 텍스트는 항상 `--color-primary-text`.** 임의 색 금지.
- **`--color-text-tertiary`는 라이트 모드에서 surface 위 본문 금지**(4.19:1). bg(흰색) 위에서만 본문 크기 허용, surface 위에서는 20px+/700 대형만.
- **`--color-primary-vivid`와 `--color-accent`는 그래픽 전용**(아이콘·차트·24px+/700+ 대형 숫자). 17px 이하 텍스트에 쓰면 위반.
- 다크에서 파란 텍스트는 `--color-primary`가 아니라 `--color-primary-soft-text`를 쓴다(#1C69E0은 다크 bg 대비 약 2.2:1로 텍스트 불가).
- 새 색 조합은 이 표의 해당 행을 재계산해 4.5/3.0을 넘겨야 채택한다. 미달이면 폐기.

### 2.4 팔레트 생성 규칙 (변형·랜덤용)

**고정 (변형이 건드릴 수 없는 것):**
- 뉴트럴 램프 전체: bg/surface/surface-raised/text/text-sub/text-tertiary/border/dim의 정확한 hex 값.
- danger(hue 350~5)·success(hue 150~165)의 의미와 값. 지출=danger, 입금=success 매핑.
- 토큰 구조: primary 6종 세트(primary/text/pressed/soft/soft-text/vivid) + accent를 반드시 전부 제공.
- 채도·명도 범위: 라이트 primary는 HSL 기준 **S 55~95%, L 38~48%** (흰 텍스트 4.5:1 확보 구간),
  soft는 동일 hue에 **S 15~40%, L 93~97%**(라이트) / **S 35~55%, L 12~18%**(다크).

**자유 (변형이 바꾸는 것):**
- primary hue 0~360 자유. 단 danger(350~5)·success(150~165)와 ±15° 이내로 겹치면 시맨틱 색과 혼동되므로 그 구간은 피해서 다시 뽑는다. (b 변형 #00805A는 hue 162로 success 구간과 겹치지만, success보다 채도를 100%로 올리고 soft 톤을 분리해 의도적으로 채택한 정식 변형 — 랜덤에는 이 예외 없음.)
- accent는 primary hue **±25~40°** 이내.
- 다크 primary는 (1) 라이트 값 유지 + 흰 텍스트(a 방식) 또는 (2) L 55~65%로 밝힌 뒤 primary-text를 같은 hue의 L 8~12% 짙은 색으로 교체(b 방식) 중 택1.

**랜덤 명명 `3-r<hue>`** (예: `3-r212` = hue 212 변형):
1. hue h를 뽑는다 → `primary = hsl(h, 82%, 44%)`에서 시작.
2. 흰 텍스트 대비 4.5:1 미달이면 L을 2%p씩 내려 **최초로 통과하는 값을 채택** (결정적 절차 — 같은 이름이면 항상 같은 색).
3. pressed는 primary에서 L −10%p, vivid는 L +8%p, soft는 동일 h에 S 25%/L 95%(라이트)·S 45%/L 15%(다크)로 파생.
4. §2.3 표의 전 행을 재계산해 하나라도 미달이면 그 hue는 폐기하고 다시 뽑는다. 통과한 hue만 `3-r<h>`로 명명.

## §3. 타이포그래피

**폰트 스택** (외부 로드 금지 — 시스템 폴백만):

```css
--font-family: 'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont,
               system-ui, 'Segoe UI', sans-serif;
```

**타입 스케일** — 이 8단계 외 font-size 사용 금지:

| 이름 | size | weight | line-height | letter-spacing | 용도 |
|---|---|---|---|---|---|
| display-1 | 36px | 800 | 1.25 | -0.02em | 송금 입력 금액, 완료 화면 금액 |
| display-2 | 28px | 700 | 1.3 | -0.02em | 홈 총자산, 월 소비 합계 |
| title-1 | 24px | 700 | 1.35 | -0.01em | 화면 타이틀 ("얼마나 보낼까요?") |
| title-2 | 20px | 700 | 1.4 | -0.01em | 섹션 헤더, 바텀시트 제목 |
| body-1 | 17px | 500 | 1.5 | -0.01em | 리스트 주 텍스트, 본문. 버튼 라벨은 이 크기에 700 |
| body-2 | 15px | 500 | 1.47 | -0.01em | 리스트 보조 텍스트, 설명 |
| caption | 13px | 500 | 1.4 | 0 | 라벨, 타임스탬프, 약관 |
| micro | 12px | 600 | 1.35 | 0 | 뱃지·칩·탭바 라벨 (최소 크기, 이보다 작게 금지) |

**위계 규칙:**
- 한 화면에 display 계열은 **1개만**. title-1도 1개만(앱바 타이틀 겸용 가능). 헤딩 레벨은 화면당 최대 3단계.
- **금액·통계 숫자는 반드시 `font-variant-numeric: tabular-nums`** + weight 700 이상. 리스트 안의 금액도 15px/700(본문 500과 굵기로 분리).
- 사용 weight는 **500/600/700/800의 4종만**. 400은 한글 저대비로 금지, 900 금지.
- 금액 뒤 "원"은 숫자와 같은 size, weight는 한 단계 낮게 (예: 36px/800 숫자 + 36px/700 "원").

**금지:** 임의 font-size 사용 금지 — 위 스케일 8값만. rem/em 단위도 스케일 이탈로 간주(§12 V3).

## §4. 간격 · 레이아웃

**스페이싱 스케일** — 이 값 외 margin/padding/gap 사용 금지 (0 제외):

```
4  8  12  16  20  24  32  40  48  64  (px)
```

| 항목 | 값 |
|---|---|
| 화면 좌우 기본 패딩 | 20px |
| 섹션 간 간격 | 32px (큰 전환은 48px) |
| 카드 내부 패딩 | 20px |
| 리스트 아이템 상하 패딩 | 16px (행 min-height 56px) |
| 리스트 아이템 내 아이콘↔텍스트 | 12px |
| 제목↔본문 | 8px, 본문↔보조설명 4px |
| 앱바 높이 | 56px |
| 하단 탭바 높이 | 64px + `env(safe-area-inset-bottom)` |
| 하단 고정 CTA | 버튼 높이 56px, 좌우 20px, 아래 8px + `env(safe-area-inset-bottom)` |
| 터치 타깃 | 최소 44×44px (시각 크기가 작아도 히트 영역 확보) |

**컨테이너·그리드:**
- 모바일 기준 폭 390px, 단일 컬럼. 그리드 금지 — 세로 스택 + 리스트가 기본.
- **데스크톱(768px+)에서는 중앙 420px 프레임**으로 표시: `max-width: 420px; margin: 0 auto;`
  프레임은 radius 24px, `--shadow-3`, 프레임 밖 배경은 라이트 `#E9ECEF` / 다크 `#0B0D10`.
- 예외적 2열: 혜택 카드 등에서 gap 12px 2열까지 허용. 3열 이상 금지.

## §5. 형태 (Shape)

**radius 스케일** — 이 값 외 border-radius 금지:

| 토큰 | 값 | 적용처 |
|---|---|---|
| `--radius-sm` | 8px | 인풋 내부 요소, 작은 썸네일, 뱃지 |
| `--radius-md` | 12px | 키패드 키, 사각 칩 |
| `--radius-lg` | 16px | 버튼, 입력 필드, 토스트 |
| `--radius-xl` | 20px | 카드, 안내 박스, 확인 모달 |
| `--radius-2xl` | 24px | 바텀시트 상단 모서리, 데스크톱 앱 프레임 |
| `--radius-full` | 999px | 필 칩, 아바타, 아이콘 원, 토글 |

- 인터랙티브 요소의 radius는 **최소 12px**. 직각·4px 모서리 금지.
- **border는 원칙적으로 쓰지 않는다.** 면 분리는 surface 색 차이와 간격으로. 허용 예외 2가지:
  (1) 입력 필드 밑선 `border-bottom: 2px solid var(--color-border)` (focus 시 `--color-primary`),
  (2) 섹션 구분선 화면당 최대 1개 `1px solid var(--color-border)`.

**shadow/elevation 단계** (다크 값은 tokens.css에서 검정 기반으로 오버라이드):

| 토큰 | 라이트 값 | 다크 값 | 용도 |
|---|---|---|---|
| `--shadow-0` | `none` | `none` | 기본. 카드도 그림자 없음 (surface 색으로 구분) |
| `--shadow-1` | `0 2px 8px rgba(2,32,71,0.06)` | `0 2px 8px rgba(0,0,0,0.35)` | sticky 앱바·하단 CTA 바 |
| `--shadow-2` | `0 6px 24px rgba(2,32,71,0.10)` | `0 6px 24px rgba(0,0,0,0.50)` | 바텀시트, 모달, 토스트 |
| `--shadow-3` | `0 16px 48px rgba(2,32,71,0.16)` | `0 16px 48px rgba(0,0,0,0.60)` | 데스크톱 420px 앱 프레임 |

## §6. 핵심 컴포넌트 규칙

공통 press 물성: 모든 인터랙티브 요소는 `:active`에서 `transform: scale(0.97)`(120ms), 떼면 300ms 스프링 복귀(§7).

### 6.1 버튼 (primary / secondary / ghost)

- **primary**: h 56px(하단 CTA)/48px(인라인), radius 16px, bg `--color-primary`, 라벨 17px/700 `--color-primary-text`. 하단 CTA는 가로 꽉 참, 인라인은 내용 폭 + 좌우 패딩 24px.
- **secondary**: 동일 치수, bg `--color-primary-soft`, 라벨 17px/700 `--color-primary-soft-text`.
- **ghost**: bg 투명, 라벨 15px/600 `--color-text-sub`, h 44px. 취소·부가 액션 전용.
- 상태: hover(데스크톱만) `filter: brightness(1.05)` / press bg `--color-primary-pressed` + `scale(0.97)` / disabled bg `--color-surface`, 라벨 `--color-text-tertiary` / focus-visible `outline: 2px solid var(--color-primary); outline-offset: 2px`.

```css
.btn-primary { height: 56px; width: 100%; border: 0; border-radius: var(--radius-lg);
  background: var(--color-primary); color: var(--color-primary-text);
  font-size: 17px; font-weight: 700;
  transition: transform var(--motion-quick) var(--ease-out-soft), background var(--motion-quick) linear; }
.btn-primary:active { transform: scale(0.97); background: var(--color-primary-pressed); }
.btn-primary:disabled { background: var(--color-surface); color: var(--color-text-tertiary); }
```

### 6.2 입력 필드

- h 56px, 라벨 13px/500 `--color-text-sub`(필드 위, 간격 4px), 값 17px/600, 밑선 2px `--color-border` → focus 시 `--color-primary`(200ms 전환). 좌우 테두리·박스 배경 없음.
- 금액 입력은 예외적으로 display-1(36px/800) + 커스텀 키패드(§9 screen-2) 조합. 시스템 키보드를 띄우지 않는다(`inputmode="none"` + readonly).
- 에러: 밑선·헬퍼 텍스트(13px)를 `--color-danger`로, 좌우 4px 흔들림 2회 200ms.

### 6.3 카드

- bg `--color-surface`, radius 20px, 패딩 20px, 그림자 없음(`--shadow-0`).
- 흰 카드가 필요하면 bg `--color-surface-raised`로 하되 반드시 surface 색 영역 위에서만 사용.
- 카드 안에 카드 금지(중첩 1단까지). 카드 제목은 title-2 또는 caption(라벨성).

### 6.4 리스트 아이템

- min-height 56px, 상하 패딩 16px(좌우는 부모의 화면 패딩 20px 사용). 구조: [아이콘 40×40 원형 bg `--color-surface`] –12px– [주 텍스트 17px/500 + 보조 15px/500 `--color-text-sub`] – [우측 금액 15px/700 tabular-nums].
- 지출 금액 `--color-text`, 입금 금액 `--color-success` + "+" 접두. **행 사이 구분선 금지** — 간격으로만 분리.
- press: 행 전체 bg `--color-surface`(라이트)/`--color-surface-raised`(다크) 120ms + `scale(0.99)`.

```css
.list-item { display: flex; align-items: center; gap: 12px; min-height: 56px; padding: 16px 0; }
.list-item .amount { margin-left: auto; font-size: 15px; font-weight: 700;
  font-variant-numeric: tabular-nums; }
```

### 6.5 상단 네비/앱바

- h 56px, 좌 뒤로가기(히트 44×44, 24px 인라인 SVG 화살표 stroke 1.8px), 중앙 비움 또는 타이틀 17px/700, 우측 보조 액션 최대 1개.
- 배경 `--color-bg`. 스크롤 시작 시 `--shadow-1` + 타이틀 페이드인(200ms). 햄버거 메뉴 금지(§10).

### 6.6 하단 탭바 (모바일)

- h 64px + safe-area, 탭 4~5개. 각 탭: 24px 인라인 SVG 아이콘 + micro(12px/600) 라벨, 상하 패딩 8px, 히트 영역 44px 이상.
- 활성 탭 `--color-text`(아이콘 fill 포함), 비활성 `--color-text-tertiary`. 탭 전환 시 아이콘 `scale(0.9)→1` 스프링 300ms.
- bg `--color-bg` + 위쪽 그림자 `--shadow-1`. 상단 구분선 금지.

### 6.7 모달 / 바텀시트

- 기본은 **바텀시트**(중앙 모달은 파괴적 확인 전용): 하단 부착, radius 24px 24px 0 0, bg `--color-surface-raised`, `--shadow-2`, 상단 그랩바 36×4px `--color-border` radius full(상단 중앙, 위 8px), 내부 패딩 20px, 제목 title-2.
- 진입 `translateY(100%)→0` 300ms `--ease-out-soft` + 딤(`--color-dim`) 페이드 200ms. CTA는 시트 안 하단 56px 버튼.
- 파괴적 확인 모달: 중앙, 폭 `calc(100% - 40px)`, radius 20px, 본문 15px, 버튼 2개 가로 배치(ghost + danger bg 버튼) 각 h 48px, gap 8px.

### 6.8 토스트

- 하단 CTA(또는 탭바) 위 8px, bg `--color-text`(라이트)/`--color-surface-raised`(다크), 텍스트 15px/600 `--color-bg`(라이트)/`--color-text`(다크), radius 16px, 패딩 16px 20px, `--shadow-2`.
- 진입 `translateY(12px)+opacity 0→1` 300ms `--ease-spring`, 3초 후 자동 소멸(200ms 페이드). 성공 토스트는 텍스트 앞 20px 체크 SVG `--color-success`(다크 토스트 위 8.13:1).

### 6.9 뱃지 / 칩

- 뱃지: h 24px, 패딩 4px 8px, radius 8px, micro(12px/600). 색은 soft 배경 + 대응 텍스트 조합만(`--color-primary-soft`+soft-text, `--color-success-soft`+success, `--color-danger-soft`+danger). 채도 높은 순색 배경 금지.
- 선택 칩: h 36px(히트 44px), 패딩 8px 16px, radius full, 기본 bg `--color-surface` 텍스트 15px/600 `--color-text-sub` → 선택 시 bg `--color-primary-soft` 텍스트 `--color-primary-soft-text`. 테두리 없음. press `scale(0.97)`.

### 6.10 빈 상태 (empty state)

- 세로 중앙 정렬: 64×64 인라인 SVG 일러스트(단색 2톤: `--color-border` 면 + `--color-primary-vivid` 포인트) → 16px → 제목 17px/700 → 4px → 설명 15px/500 `--color-text-sub` → 24px → secondary 버튼 h 48px.
- 카피는 §8 규칙: "아직 내역이 없어요" + 다음 행동 제안 1줄. 사과·경고 톤 금지.

## §7. 모션

**모션 성격 한 줄: "젤리처럼 눌리고 스프링처럼 돌아온다 — 빠르게 반응하고 부드럽게 정착."**

**토큰:**

```css
--motion-quick: 120ms;  /* press 반응 */
--motion-fast:  200ms;  /* fade, 색 전환, 페이지 전환 */
--motion-base:  300ms;  /* 진입, 시트, 스프링 복귀 */
--motion-slow:  500ms;  /* 성공 체크·카운트업 등 1회성 강조 */
--ease-out-soft: cubic-bezier(0.22, 1, 0.36, 1);    /* 진입·전환 기본 */
--ease-spring:   cubic-bezier(0.34, 1.56, 0.64, 1); /* 오버슈트 복귀·강조 */
--ease-in-out:   cubic-bezier(0.65, 0, 0.35, 1);    /* 위치 이동 */
```

**패턴별 규칙:**

| 패턴 | 규칙 |
|---|---|
| press | `:active`에서 `scale(0.97)` 120ms `--ease-out-soft`, 떼면 300ms `--ease-spring` 복귀. 리스트 행은 0.99 |
| 진입(entrance) | `opacity 0→1` + `translateY(12px)→0`, 300ms `--ease-out-soft` |
| 리스트 스태거 | 항목당 40ms 지연, 최대 8개까지(이후 동시 표시) |
| 페이지 전환 | 나가는 화면 fade-out 200ms → 들어오는 화면 진입 패턴. 전체 화면 좌우 슬라이드 금지 |
| 숫자 변화 | 총자산 등 큰 숫자는 카운트업 500ms `--ease-out-soft` (0부터가 아니라 이전 값부터) |
| 성공 체크 | 원 `scale(0)→1` 500ms `--ease-spring` + 체크 패스 `stroke-dashoffset` 300ms(100ms 지연) |
| 바텀시트 | `translateY(100%)→0` 300ms `--ease-out-soft`, 딤 fade 200ms |

**`prefers-reduced-motion` 대응 필수:** transform 기반 애니메이션 전부 제거, opacity 150ms만 유지. 카운트업은 즉시 최종값 표시.

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 1ms !important;
    transition-duration: 150ms !important;
    transition-property: opacity !important;
  }
}
```

## §8. 보이스 & 톤 (마이크로카피)

- **해요체 고정.** "~하십시오"·"~바랍니다" 금지. 반말 금지.
- 문장은 한 호흡(20자 내외), 사용자가 주어("내 계좌", "보낼 금액"). 시스템 주어("시스템이", "요청이") 금지.
- 이모지: **화면당 최대 1개**, 성공·빈 상태에서만. 버튼·에러에는 금지.
- 숫자는 천 단위 콤마 필수, "원"은 붙여 쓴다("50,000원").

| 상황 | Jelly 카피 | 금지 예 |
|---|---|---|
| CTA (송금) | 보낼게요 | 확인, 제출 |
| CTA (다음 단계) | 다음 | 계속하기, 진행 |
| 완료 | 다 됐어요! | 처리가 완료되었습니다 |
| 에러 (잔액 부족) | 잔액이 부족해요. 30,000원까지 보낼 수 있어요 | 오류가 발생했습니다 |
| 에러 (네트워크) | 연결이 불안정해요. 잠시 후 다시 시도해 주세요 | 네트워크 오류 (E-1024) |
| 빈 상태 | 아직 내역이 없어요 | 데이터가 존재하지 않습니다 |
| 로딩 | 잠시만요… | 로딩 중입니다. 기다려 주십시오 |
| 확인 다이얼로그 | 김지원님에게 50,000원을 보낼까요? | 송금을 실행하시겠습니까? |
| 성공 토스트 | 저장했어요 | 저장이 완료되었습니다 |

- 에러는 항상 **[무슨 일인지 1문장] + [지금 할 수 있는 일 1문장]** 구조. 에러 코드·기술 용어 노출 금지.
- 금지 표현: "실패하였습니다", "잘못된 입력입니다", 반복되는 "죄송합니다", 느낌표 2개 이상.

## §9. 레이아웃 레시피 — 데모 5화면 (가상 개인 금융 앱 "지갑 Jigap")

모든 화면 공통: 모바일 390px 단일 컬럼, 화면 패딩 20px, 데스크톱은 중앙 420px 프레임(§4).
하단 탭바(§6.6) 4탭: 홈 / 송금 / 내역 / 전체. screen-2·3은 탭바 대신 하단 고정 CTA.

### screen-1 홈 (총자산 + 계좌 리스트)

- 목적: 3초 안에 "내 돈이 얼마인지" 각인.
- 위→아래: 앱바(좌측 워드마크 17px/800, 우측 알림 벨 SVG 24px) → 24px → 인사 캡션 13px `--color-text-sub`("지원님의 자산") → 8px → **총자산 display-2(28px/700, tabular-nums) + 카운트업 모션(§7)** → 4px → 전월 대비 13px `--color-success`("+120,000원") → 32px → 계좌 카드(surface, radius 20px, 패딩 20px: 계좌 리스트 아이템 3개 — 은행 이니셜 아이콘 40px 원형 / 계좌명 15px + 별칭 13px sub / 우측 잔액 15px/700) + 카드 하단 "송금" secondary 버튼 48px → 32px → "이번 달 소비" 섹션(title-2 + 금액 20px/700 + 카테고리 미니 막대 SVG, `--color-primary-vivid`·`--color-accent` 2계열) → 탭바.
- 사용 컴포넌트: 앱바, 카드, 리스트 아이템, secondary 버튼, 탭바. 진입 시 리스트 스태거(40ms).

### screen-2 송금 입력 (금액 커스텀 키패드)

- 목적: 금액 입력에만 집중. 그 외 요소 전부 제거.
- 위→아래: 앱바(뒤로가기만) → 24px → 받는 사람 행(아바타 40px + "김지원 · 지갑뱅크 1234" 15px) → 32px → 타이틀 title-1("얼마나 보낼까요?") → 16px → **금액 display-1(36px/800, tabular-nums; 비어 있으면 placeholder `--color-text-tertiary` "0원")** → 8px → 잔액 캡션 13px `--color-text-sub`("잔액 1,240,000원") → 유동 공간(flex) → 금액 칩 3개(+1만 / +5만 / 전액, §6.9 선택 칩) → 16px → **커스텀 키패드**: 3×4 그리드(1-9, 00, 0, ⌫), 키 h 56px radius 12px, 숫자 20px/600, gap 8px, 키 press 시 bg `--color-surface` + `scale(0.97)` → 하단 CTA "다음" 56px(금액 0이면 disabled).
- 에러: 잔액 초과 시 금액 색 `--color-danger` + 좌우 4px 흔들림 2회, 캡션을 §8 에러 카피로 교체.

### screen-3 송금 확인 → 완료 (성공 체크 모션)

- 목적: 확인은 신중하게, 완료는 기쁘게.
- 확인 단계: 앱바(뒤로가기) → 세로 중앙 블록: 아바타 64px → 16px → "김지원님에게" body-1 → 8px → **금액 display-1** → 24px → 상세 카드(surface, radius 20px: "출금 계좌 / 수수료 0원 / 도착 즉시" 리스트 3행 — 라벨 15px `--color-text-sub` + 값 15px/600) → 하단 CTA "보낼게요".
- 완료 단계(같은 화면에서 전환): 확인 뷰 fade-out 200ms → 중앙 **성공 체크: 원 80px bg `--color-success-soft`, 체크 SVG stroke `--color-success` — §7 성공 체크 모션** → 16px → "다 됐어요!" title-1 → 8px → "김지원님에게 50,000원을 보냈어요" body-2 `--color-text-sub` → 하단 CTA "확인"(홈으로).

### screen-4 소비 내역 (월 요약 + 일별 리스트)

- 목적: 이번 달 소비를 리스트로 훑는다. **테이블 금지(§10-J1).**
- 위→아래: 앱바(타이틀 "소비") → 16px → 월 선택 칩 행(가로 스크롤, §6.9 칩, "7월" 선택 상태) → 24px → 월 합계 카드(surface radius 20px: "7월에 쓴 돈" caption + display-2 금액 + 전월 대비 13px `--color-success` 또는 `--color-danger`) → 32px → 일별 그룹 반복: 날짜 헤더 caption `--color-text-sub`("7월 10일 목요일") → 8px → 리스트 아이템들(§6.4: 카테고리 아이콘 40px 원형, 상호명 17px, 카테고리 13px sub, 우측 금액 15px/700 — 지출 `--color-text`, 입금 `--color-success` "+") → 그룹 간 24px → 탭바.
- 스크롤 시 앱바에 현재 월 페이드인(200ms). 그룹 진입 시 스태거.

### screen-5 혜택 · 설정

- 목적: 부가 기능의 조용한 서랍. 화려함 금지.
- 위→아래: 앱바(타이틀 "전체") → 16px → 프로필 행(아바타 48px + 이름 17px/700 + "내 정보" caption sub, press 가능) → 24px → 혜택 카드 2열(gap 12px, 각: surface radius 20px 패딩 20px, 아이콘 32px SVG `--color-primary-vivid` + 제목 15px/700 + 설명 13px sub — 예: "친구 초대", "이번 주 미션") → 32px → 섹션 구분선(§5 예외 — 화면 유일의 1px 선) → 24px → 설정 리스트(§6.4 변형: 아이콘 24px SVG + 라벨 17px + 우측 셰브론 SVG 또는 토글 51×31px radius full): 알림 설정 / 화면 잠금 / 다크 모드 토글 / 고객센터 → 24px → "로그아웃" ghost 버튼 → 탭바.

## §10. 금지 규칙 (Anti-AI-look)

**공통 금지** (AI가 흔히 저지르는 실수 → 대신 할 것):
1. 보라→파랑 그라데이션 히어로 → Jelly에 그라데이션은 존재하지 않는다. 단색 soft 배경만.
2. 모든 카드에 동일 그림자 → 카드는 `--shadow-0`(없음). 그림자는 떠 있는 것(시트·토스트·sticky 바)에만.
3. 3열 아이콘+제목+설명 카드 반복 → 최대 2열, 그것도 혜택 카드 한 곳만(§9 screen-5).
4. `border: 1px solid #eee` 남발 → border 허용 예외 2곳(§5) 외 전부 금지.
5. 이모지를 아이콘 대신 사용 → 아이콘은 24px 인라인 SVG(stroke 1.8px)만. 이모지는 §8 규칙(화면당 1개, 성공·빈 상태)만.
6. 화면마다 다른 radius → §5 스케일 6값만. 같은 컴포넌트는 항상 같은 radius.

**Jelly 고유 금지** (J1~J8):
1. **J1 촘촘한 데이터 테이블 금지** → `<table>` 사용 0개. 모든 데이터는 56px 리스트 아이템으로 푼다. 열 정렬이 필요하면 우측 정렬 금액 1열만.
2. **J2 금액을 본문 크기로 묻어버리기 금지** → 화면 핵심 금액은 display(28~36px/700+), 리스트 금액도 700으로 본문(500)과 분리. 금액이 안 튀는 핀테크 화면은 실패다.
3. **J3 회색 1px 구분선으로 리스트 나누기 금지** → 행 사이 선 0개. 간격 16px·그룹 간 24px로만 분리. 구분선은 화면당 최대 1개(§5 예외).
4. **J4 hover에만 의존하는 인터랙션 금지** → 모바일 퍼스트. 모든 인터랙션에 press 상태(`scale(0.97)` + bg 변화) 필수. hover는 데스크톱 보너스.
5. **J5 격식체·시스템 말투 금지** → "~하십시오", "처리되었습니다", 에러 코드 노출 전부 금지. §8 표의 패턴만.
6. **J6 채도 높은 배경색 면적 남용 금지** → 순색 배경은 CTA 버튼과 40px 아이콘 원 안에서만. 카드·섹션 배경은 뉴트럴 surface 또는 soft 톤(라이트 L 93%+)만.
7. **J7 상단 햄버거 메뉴·드로어 금지** → 내비게이션은 하단 탭바 + 화면 안 리스트로만.
8. **J8 한 화면 primary CTA 2개 이상 금지** → primary 버튼은 화면당 1개. 보조 액션은 secondary/ghost로 강등.

## §11. Tailwind v4 / React 매핑 (부록)

```css
/* app.css — tokens.css를 불러온 뒤 Tailwind 토큰으로 매핑 */
@import "tailwindcss";
@import "../presets/3-jelly/tokens.css";

@theme inline {
  --color-bg: var(--color-bg);
  --color-surface: var(--color-surface);
  --color-surface-raised: var(--color-surface-raised);
  --color-text: var(--color-text);
  --color-text-sub: var(--color-text-sub);
  --color-primary: var(--color-primary);
  --color-primary-soft: var(--color-primary-soft);
  --color-danger: var(--color-danger);
  --color-success: var(--color-success);
  --radius-lg: var(--radius-lg);
  --radius-xl: var(--radius-xl);
  --radius-2xl: var(--radius-2xl);
  --font-sans: var(--font-family);
  --ease-spring: var(--ease-spring);
  --ease-out-soft: var(--ease-out-soft);
}
```

```tsx
// CTA 버튼 — press 물성 포함 (h-14 = 56px, rounded-2xl = 16px 매핑 확인)
export function CtaButton(props: React.ComponentProps<"button">) {
  return (
    <button
      className="h-14 w-full rounded-[16px] bg-primary text-[17px] font-bold text-white
                 transition-transform duration-[120ms] ease-out-soft active:scale-[0.97]
                 disabled:bg-surface disabled:text-text-sub"
      {...props}
    />
  );
}

// 거래 리스트 아이템
export function TxItem({ icon, name, category, amount, income }: TxItemProps) {
  return (
    <div className="flex min-h-14 items-center gap-3 py-4 transition-transform active:scale-[0.99]">
      <div className="grid size-10 place-items-center rounded-full bg-surface">{icon}</div>
      <div>
        <p className="text-[17px] font-medium text-text">{name}</p>
        <p className="text-[13px] text-text-sub">{category}</p>
      </div>
      <p className={`ml-auto text-[15px] font-bold tabular-nums
                     ${income ? "text-success" : "text-text"}`}>
        {income ? "+" : ""}{amount.toLocaleString()}원
      </p>
    </div>
  );
}
```

**StyleSeed 호환 메모:** tokens.css의 `--color-*` / `--radius-*` / `--motion-*` / `--ease-*`는
StyleSeed theme.css의 동명 슬롯에 1:1로 옮겨진다. 모션 시드는 "Spring" 계열(press = scale + 스프링 복귀)에 대응.
`--font-size-*` 8단계는 StyleSeed type scale의 display/title/body/caption 슬롯에 순서대로 매핑한다.

## §12. 채점 루브릭

합격선: **verifiable 9항목 전부 통과(65점 만점 중 65점) + subjective 5항목 평균 4.0 이상**.
하나라도 미달이면 불합격 — loop-runner는 미달 항목만 고쳐 재채점한다.
판정 대상 파일 집합을 `$F`(html/css/tsx 글롭)로 표기한다.

### verifiable 항목 (기계 판정, 65점)

| # | 항목 | 배점 | 판정 방법 |
|---|---|---|---|
| V1 | 대비율: 실제 사용된 bg/text·surface/text·primary/primary-text 쌍 4.5:1 이상, vivid·accent 그래픽 쌍 3:1 이상 | 10 | 결과물의 hex를 추출해 WCAG 공식으로 계산: `L = 0.2126R' + 0.7152G' + 0.0722B'` (c'=c/12.92 if c≤0.03928 else ((c+0.055)/1.055)^2.4), `CR=(L1+0.05)/(L2+0.05)`. §2.3 표와 대조. 토큰을 무변경 사용했다면 §2.3 표 인용으로 통과 |
| V2 | 스페이싱 스케일 외 값 0개 | 10 | `grep -rhoE '(margin\|padding\|gap\|inset)[a-z-]*:[^;]+' $F \| grep -oE '[0-9]+px' \| grep -vwE '(0\|4\|8\|12\|16\|20\|24\|32\|40\|48\|64)px'` → 출력 0줄 |
| V3 | 타입 스케일 외 font-size 0개 | 10 | `grep -rhoE 'font-size:\s*[0-9.]+(px\|rem\|em)' $F \| grep -vE ':\s*(12\|13\|15\|17\|20\|24\|28\|36)px'` → 출력 0줄 (rem/em 사용 자체가 위반) |
| V4 | radius가 §5 스케일 값만 | 5 | `grep -rhoE 'border-radius:[^;]+' $F \| grep -oE '[0-9]+px' \| grep -vwE '(8\|12\|16\|20\|24\|999)px'` → 출력 0줄 |
| V5 | shadow가 §5 표 4단계와 일치 | 5 | `grep -rhoE 'box-shadow:[^;]+' $F` 의 모든 값이 `var(--shadow-[0-3])` 참조이거나 tokens.css의 `--shadow-*` 정의 문자열과 일치 → 불일치 0건 |
| V6 | `prefers-reduced-motion` 대응 존재 | 5 | `grep -rl 'prefers-reduced-motion' $F \| wc -l` ≥ 1 |
| V7 | 외부 리소스 0 (CDN 폰트/스크립트/이미지) | 5 | `grep -rnE 'https?://[^"'"'"')( ]+\.(css\|js\|woff2?\|ttf\|png\|jpe?g\|webp\|svg)\|fonts\.googleapis\|cdn\.\|unpkg\|jsdelivr' $F` → 출력 0줄 |
| V8 | press 물성: scale(0.97)과 스프링 easing 존재 | 10 | `grep -rF 'scale(0.97)' $F \| wc -l` ≥ 1 **그리고** `grep -rE 'var\(--ease-spring\)\|cubic-bezier\(0\.34, 1\.56, 0\.64, 1\)' $F \| wc -l` ≥ 1 |
| V9 | 테이블 금지 + 금액 tabular-nums | 5 | `grep -ri '<table' $F \| wc -l` = 0 **그리고** `grep -r 'tabular-nums' $F \| wc -l` ≥ 1 |

### subjective 항목 (AI/사람 채점, 5점 척도 ×5항목 — 평균 4.0 이상 합격)

| # | 항목 | 1점 앵커 | 3점 앵커 | 5점 앵커 |
|---|---|---|---|---|
| S1 | §1 첫인상 부합 (숫자 주인공·말랑함) | 금액이 본문 크기에 묻혀 있고 직각 요소가 보인다 | 금액은 크지만 위계가 하나뿐이거나 radius가 일부만 말랑하다 | 3초 안에 핵심 금액이 읽히고 모든 인터랙티브 요소가 12px+ radius로 일관된다 |
| S2 | §8 어조 준수 | "처리되었습니다"류 격식체 또는 에러 코드 노출 | 해요체이지만 문장이 길거나 시스템 주어 문장이 혼재 | 전 카피가 해요체 한 호흡, 에러가 [상황+다음 행동] 구조, CTA가 동사형("보낼게요") |
| S3 | 모션 물성 (§7) | 모션 없음 또는 linear/기본 ease만 | press는 있으나 스프링 복귀·스태거 등 성격이 안 느껴진다 | 누르면 눌리고 스프링으로 돌아오며, 진입·성공 모션이 §7 표와 일치한다 |
| S4 | 여백 호흡 (§4 리듬) | 요소가 빽빽하고 구분선으로 나눠져 있다 | 간격은 스케일 값이지만 섹션 리듬(32px)이 불규칙하다 | 선 없이 간격만으로 그룹이 읽히고, 화면이 성긴데도 위계가 명확하다 |
| S5 | §10 정성 항목 (그라데이션·CTA 수·색 면적) | 그라데이션 히어로 또는 primary CTA 2개 이상 | 금지 위반은 없으나 순색 면적이 넓어 산만하다 | 순색은 CTA·아이콘 원에만, 화면당 CTA 1개, 뉴트럴이 지배적 |

**채점 절차:** verifiable은 판정 명령을 그대로 실행해 pass/fail 기록 → subjective는 5화면을 라이트/다크 각각 확인해 앵커와 대조, 1~5점 부여 → 합산. 4.0 미만 항목은 5점 앵커 조건을 수정 지시문으로 변환해 다음 반복에 넘긴다.
