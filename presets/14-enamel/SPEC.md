---
number: 14
codename: Enamel
inspired-by: 배달의민족 (Baemin) — 서술 참조만, 상표는 파일/클래스명에 사용하지 않음. 이 문서의 모든 수치는 독립 해석이며 공식 값이 아니다
mood: 크림 종이 위 밝은 민트 큰 버튼과 먹색 굵은 글씨. 뉴트로 간판(을지로 법랑) 감성에 장난기와 위트를 얹은 따뜻한 대중 배달앱
best-for: 소비자용 모바일 배달·주문·커머스 앱, 로컬 서비스, 친근한 대중 브랜드
variants: [a, b]
status: complete
---

# 14 · Enamel

## §1. 첫인상 요약

1. **간판처럼 크고 굵다.** 화면 제목과 대표 숫자는 800 굵기의 큰 글씨(24~40px)로, 오래된 을지로 법랑 간판의 손글씨 같은 존재감을 시스템 폰트로 낸다.
2. **크림 종이 위 민트 한 방.** 배경은 순백이 아니라 따뜻한 크림(`#FBF7EF`). 그 위에서 밝은 민트(`#2AC1BC`)는 CTA·활성 상태에만 큰 면적으로 등장하고, 민트 버튼 글씨는 흰색이 아니라 먹색이다.
3. **버튼이 크고 손이 편하다.** 하단 CTA는 높이 54px에 꽉 찬 폭, radius 8px의 각진 듯 둥근 모서리. 모바일 한 손 조작이 기준.
4. **말투에 장난기가 있다.** "뭐 먹을까요?", "5분 뒤 도착!", "장바구니가 텅 비었어요 🥲" — 해요체에 위트 한 스푼, 이모지는 아껴서 한 번.
5. **따뜻하고 대중적이다.** 차갑고 미니멀한 SaaS가 아니라, 누구나 편한 동네 가게 느낌. 주홍(`#E5451F`) 포인트가 가격·할인에서 톡 튄다.

## §2. 색

### 2.1 팔레트

시맨틱 토큰 전체 표 (a 변형 기준. b 변형은 §2.4 규칙으로 파생, 값은 tokens.css 참조):

| 토큰 | 역할 | a 라이트 | a 다크 |
|---|---|---|---|
| `--color-bg` | 화면 배경 (크림 종이) | `#FBF7EF` | `#17150F` |
| `--color-surface` | 카드·칩·검색바 배경 | `#F1EADB` | `#221F17` |
| `--color-surface-raised` | 바텀시트·모달·플로팅 카드 | `#FFFFFF` | `#2B2820` |
| `--color-text` | 본문·제목 먹색 | `#1A1712` | `#F4EFE3` |
| `--color-text-sub` | 보조 본문 (설명·배달정보) | `#57514A` | `#B4AC9C` |
| `--color-text-tertiary` | 캡션·타임스탬프 (제약 有, §2.3) | `#736C60` | `#8D8676` |
| `--color-primary` | CTA·활성 탭 FILL, 선택 하이라이트 | `#2AC1BC` | `#2AC1BC` |
| `--color-primary-text` | primary 위 텍스트 (먹색) | `#12100C` | `#0A0906` |
| `--color-primary-pressed` | CTA press 상태 | `#1EA6A1` | `#1EA6A1` |
| `--color-primary-soft` | 연한 민트 배경 (선택 칩·안내) | `#DFF5F3` | `#103330` |
| `--color-primary-soft-text` | soft 위 텍스트·bg 위 링크 텍스트 | `#0B6B66` | `#4FD6D0` |
| `--color-primary-vivid` | 아이콘·차트·큰 숫자 (그래픽 전용) | `#0B8C85` | `#33D6CE` |
| `--color-accent` | 가격·할인·포인트 (뉴트로 주홍, 그래픽 전용) | `#E5451F` | `#FF7A57` |
| `--color-accent-soft` | accent 뱃지 배경 | `#FFE7DE` | `#3A201A` |
| `--color-accent-soft-text` | accent-soft 위 텍스트 | `#B23A1E` | `#FF8E6E` |
| `--color-danger` | 에러·삭제·품절 | `#CF2A26` | `#FF6B63` |
| `--color-danger-soft` | 에러 배경 | `#FCE6E4` | `#3A1D1B` |
| `--color-danger-soft-text` | danger-soft 위 텍스트 | `#B8241F` | `#FF8781` |
| `--color-success` | 주문 완료·도착·+포인트 | `#1B7D32` | `#51C265` |
| `--color-success-soft` | 완료 배경 | `#E4F4E7` | `#14321C` |
| `--color-success-soft-text` | success-soft 위 텍스트 | `#1B7A31` | `#63CE77` |
| `--color-border` | 제한적 경계선 (§5) | `#E6DECE` | `#332F25` |
| `--color-dim` | 모달 뒤 딤 | `rgba(26,23,18,0.55)` | `rgba(0,0,0,0.6)` |
| `--color-frame-backdrop` | 데스크톱 프레임 밖 배경 | `#E7DECB` | `#0C0B08` |

### 2.2 라이트/다크

양쪽 모두 지원(위 표). 라이트는 **크림 종이 톤**(`#FBF7EF`)을 캔버스로 써 뉴트로 인쇄물 감성을 낸다 — 순백 배경 금지. 다크는 순검정(#000)이 아닌 **따뜻한 먹색**(`#17150F`)을 쓰고 surface는 밝기만 올린다. primary(민트)·pressed는 라이트/다크 동일 값을 유지해 브랜드 인상을 고정하고, primary 위 텍스트는 양쪽 모두 먹색이다(민트가 밝아 흰 텍스트 대비 미달, §2.3). 다크에서 텍스트로 쓰는 민트·주홍은 밝은 톤(`--color-primary-soft-text` `#4FD6D0`, `--color-accent` `#FF7A57`)으로 교체한다. danger/success도 다크에서 한 단계 밝힌다.

### 2.3 대비 규칙 (실측 계산값 명기)

기준: **본문 4.5:1 이상, 대형 텍스트(24px+ 또는 18.7px+/700+)·UI 그래픽 3:1 이상.**
아래 값은 WCAG 2.x 상대휘도 공식(`L = 0.2126R' + 0.7152G' + 0.0722B'`, `c' = c/12.92 if c≤0.03928 else ((c+0.055)/1.055)^2.4`, `CR = (L1+0.05)/(L2+0.05)`)으로 계산한 실제 대비율이다.

| 쌍 | a 라이트 | a 다크 | 판정 |
|---|---|---|---|
| bg / text | **16.72:1** | **15.91:1** | ✓ 본문 |
| surface / text | **14.92:1** | **14.34:1** | ✓ 본문 |
| surface-raised / text | **17.87:1** | — | ✓ 본문 |
| bg / text-sub | **7.33:1** | **8.10:1** | ✓ 본문 |
| surface / text-sub | **6.54:1** | **7.30:1** | ✓ 본문 |
| bg / text-tertiary | **4.86:1** | **5.04:1** | ✓ 본문 |
| surface / text-tertiary | **4.34:1** | **4.55:1** | 라이트 4.5 미달 → 아래 제약으로 통제 |
| primary / primary-text | **8.55:1** | **8.96:1** | ✓ 본문 |
| primary / 흰 텍스트 | **2.22:1** | 2.22:1 | ✗ 금지 — 민트 위 흰 텍스트 사용 불가 |
| primary-pressed / primary-text | **6.36:1** | **6.66:1** | ✓ 본문 |
| primary-soft / primary-soft-text | **5.59:1** | **7.71:1** | ✓ 본문 |
| primary-soft-text(링크) / bg | **5.94:1** | **10.31:1** | ✓ 본문 |
| primary-soft-text(링크) / surface | **5.30:1** | — | ✓ 본문 |
| primary-vivid / bg | **3.85:1** | **10.13:1** | ✓ 그래픽(3:1) — 본문 텍스트 금지 |
| primary-vivid / surface | **3.43:1** | — | ✓ 그래픽(3:1) |
| accent / bg | **3.78:1** | **7.10:1** | ✓ 그래픽(3:1) — 소형 본문 금지 |
| accent / surface | **3.37:1** | **6.40:1** | ✓ 그래픽(3:1) |
| accent-soft / accent-soft-text | **5.04:1** | **6.67:1** | ✓ 본문(뱃지) |
| danger / bg | **4.90:1** | **6.55:1** | ✓ 본문 |
| danger / surface | **4.37:1** | **5.90:1** | 라이트 4.5 미달 → 아래 제약 |
| danger-soft / danger-soft-text | **5.31:1** | **6.59:1** | ✓ 본문(뱃지) |
| success / bg | **4.88:1** | **8.04:1** | ✓ 본문 |
| success / surface | **4.35:1** | **7.25:1** | 라이트 4.5 미달 → 아래 제약 |
| success-soft / success-soft-text | **4.75:1** | **7.07:1** | ✓ 본문(뱃지) |

b 변형(마리골드+틸) 주요 쌍 실측: 라이트 primary(#F5B301)/먹 텍스트 **8.82:1**, soft(#FFF3D1)/soft-text(#7A5A00) **5.77:1**, soft-text/bg **5.97:1**, vivid(#B98700)/bg **3.01:1**, accent(#0B8C85)/bg **3.78:1** — 다크 primary(#F5C542)/먹 텍스트 **10.08:1**, soft(#332703)/soft-text(#F5C542) **9.04:1**, accent(#33D6CE)/bg **10.13:1**. 전부 통과.

추가 제약 (위 표에서 도출):
- **primary(민트) 위 텍스트·아이콘은 항상 `--color-primary-text`(먹색).** 흰 텍스트는 2.22:1로 금지. 이것이 이 프리셋을 배민풍으로 만드는 핵심 규칙이다.
- **`--color-text-tertiary`는 라이트에서 surface 위 본문 금지**(4.34:1). bg(크림) 위에서만 본문 크기 허용, surface 위에서는 20px+/700 대형만.
- **`--color-primary-vivid`와 `--color-accent`는 그래픽 전용**(아이콘·차트·태그 면·24px+/700+ 큰 가격 숫자). 16px 이하 소형 텍스트 색으로 쓰면 위반 — 텍스트로 강조가 필요하면 `--color-accent-soft-text`/`--color-primary-soft-text`를 쓴다.
- **danger·success 본문 텍스트는 bg(크림) 위에서만**(각 4.90:1·4.88:1). surface 위 danger/success 텍스트는 대형(18.7px+/700+) 또는 soft 뱃지 조합(soft+soft-text)으로 처리한다.
- 새 색 조합은 이 표의 해당 행을 재계산해 4.5/3.0을 넘겨야 채택한다. 미달이면 폐기.

### 2.4 팔레트 생성 규칙 (변형·랜덤용)

**고정 (변형이 건드릴 수 없는 것):**
- 뉴트럴 램프 전체: bg/surface/surface-raised/text/text-sub/text-tertiary/border/dim/frame-backdrop의 정확한 hex 값. **크림 톤 캔버스는 이 프리셋의 정체성** — 순백/순회색 배경으로 바꾸면 그건 다른 프리셋이다.
- danger(hue 2~8)·success(hue 130~145)의 의미와 값. 에러=danger, 완료/입금=success 매핑.
- 토큰 구조: primary 6종 세트(primary/text/pressed/soft/soft-text/vivid) + accent 3종(accent/soft/soft-text)을 반드시 전부 제공.
- **primary 위 텍스트 = 먹색 원칙.** 변형의 primary는 반드시 "밝은 채색"이어서 먹색 텍스트가 4.5:1을 넘어야 한다(흰 텍스트 방식 금지).

**자유 (변형이 바꾸는 것):**
- primary hue 0~360 자유. 단 danger(2~8)·success(130~145)와 ±15° 이내로 겹치면 시맨틱 색과 혼동되므로 피한다. (b 변형 #F5B301은 hue 44 마리골드로 시맨틱과 무충돌 — 정식 채택.)
- accent는 primary hue **±120~180°**(보색 근처)로 뽑아 뉴트로 2색 간판 대비를 만든다. a(민트 primary/주홍 accent), b(마리골드 primary/틸 accent)가 예시.
- primary는 **밝은 채색**을 유지: HSL 기준 **S 70~100%, L 48~62%**(먹색 텍스트 4.5:1 확보 구간). soft는 동일 hue에 **S 30~60%/L 90~96%**(라이트) / **S 45~70%/L 10~16%**(다크).

**랜덤 명명 `14-r<hue>`** (예: `14-r320` = hue 320 변형):
1. hue h를 뽑는다 → `primary = hsl(h, 85%, 55%)`에서 시작.
2. 먹색 텍스트(`#12100C`) 대비 4.5:1 미달이면 L을 2%p씩 올려 **최초로 통과하는 값을 채택**(결정적 절차 — 같은 이름이면 항상 같은 색).
3. pressed는 primary에서 L −10%p, vivid는 먹색 유지가 어려우면 L을 내려 bg 대비 3:1 통과 지점, soft는 동일 h에 S 45%/L 93%(라이트)·S 55%/L 13%(다크).
4. accent = hue (h+150)%360, 같은 절차로 bg 대비 3:1 통과 지점 채택.
5. §2.3 표의 전 행을 재계산해 하나라도 미달이면 그 hue는 폐기하고 다시 뽑는다. 통과한 hue만 `14-r<h>`로 명명.

## §3. 타이포그래피

**폰트 스택** (외부 로드 금지 — 시스템 폴백만). 배민의 뉴트로 간판 한글 폰트(한나체·주아체·도현체·을지로체 등)는 로드하지 않고, **큰 굵기(800)와 큰 사이즈**로 그 개성을 시스템 폰트에서 재현한다:

```css
--font-family: 'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont,
               system-ui, 'Apple SD Gothic Neo', 'Malgun Gothic', 'Segoe UI', sans-serif;
```

**타입 스케일** — 이 8단계 외 font-size 사용 금지:

| 이름 | size | weight | line-height | letter-spacing | 용도 |
|---|---|---|---|---|---|
| display-1 | 40px | 800 | 1.15 | -0.03em | 홈 히어로, 주문 완료 큰 글씨, 결제 총액 |
| display-2 | 30px | 800 | 1.2 | -0.02em | 화면 대표 숫자, 가게명 강조 |
| title-1 | 24px | 800 | 1.3 | -0.02em | 화면 타이틀 ("뭐 먹을까요?") |
| title-2 | 20px | 700 | 1.35 | -0.01em | 섹션 헤더, 바텀시트 제목 |
| body-1 | 16px | 500 | 1.5 | -0.01em | 리스트 주 텍스트, 본문. 버튼 라벨은 이 크기에 700 |
| body-2 | 14px | 500 | 1.5 | -0.01em | 리스트 보조 텍스트, 설명 |
| caption | 13px | 500 | 1.45 | 0 | 라벨, 배달 정보, 타임스탬프 |
| micro | 12px | 700 | 1.35 | 0 | 뱃지·칩·탭바 라벨 (최소, 이보다 작게 금지) |

**위계 규칙:**
- 한 화면에 display 계열은 **1개만**. title-1도 1개만(앱바 타이틀 겸용 가능). 헤딩 레벨은 화면당 최대 3단계.
- **가격·수량 숫자는 반드시 `font-variant-numeric: tabular-nums`.** 화면 핵심 가격은 display 또는 title-2/800, 리스트 안 가격은 16px/700(본문 500과 굵기로 분리).
- 사용 weight는 **500/700/800의 3종 중심**(600은 뱃지·칩 등 UI 라벨 보조로만). 400 금지(한글 저대비), 900 금지.
- **큰 제목(title-1·display)에는 letter-spacing 음수**(-0.02~-0.03em)를 줘 간판 글씨처럼 조인다. 본문은 -0.01em.
- 가격 뒤 "원", 시간 뒤 "분"은 숫자와 같은 size, weight는 한 단계 낮게.

**금지:** 임의 font-size 사용 금지 — 위 스케일 8값만. rem/em 단위도 스케일 이탈로 간주(§12 V3).

## §4. 간격 · 레이아웃

**스페이싱 스케일** — 이 값 외 margin/padding/gap 사용 금지 (0 제외):

```
4  8  12  16  20  24  32  40  48  64  (px)   /* 8px 베이스 그리드 */
```

| 항목 | 값 |
|---|---|
| 화면 좌우 기본 패딩 | 20px |
| 섹션 간 간격 | 32px (큰 전환은 48px) |
| 카드 내부 패딩 | 16px (배민풍 밀도) |
| 리스트 아이템 상하 패딩 | 16px (행 min-height 56px) |
| 리스트 아이템 내 썸네일↔텍스트 | 12px |
| 제목↔본문 | 8px, 본문↔보조설명 4px |
| 앱바 높이 | 56px |
| 하단 탭바 높이 | 64px + `env(safe-area-inset-bottom)` |
| 하단 고정 CTA | 버튼 높이 54px, 좌우 20px, 아래 8px + `env(safe-area-inset-bottom)` |
| 터치 타깃 | 최소 44×44px (시각 크기가 작아도 히트 영역 확보) |

**컨테이너·그리드:**
- 모바일 기준 폭 390px, 단일 컬럼. 세로 스택 + 리스트가 기본.
- **데스크톱(768px+)에서는 중앙 420px 프레임**으로 표시: `max-width: 420px; margin: 0 auto;` 프레임은 radius 20px, `--shadow-3`, 프레임 밖 배경은 `--color-frame-backdrop`.
- **카테고리 그리드 예외**: 홈 카테고리 아이콘은 4열(gap 12px)까지 허용(§9 screen-1). 그 외 콘텐츠 카드는 2열까지, 3열 이상 금지.

## §5. 형태 (Shape)

**radius 스케일** — 이 값 외 border-radius 금지:

| 토큰 | 값 | 적용처 |
|---|---|---|
| `--radius-sm` | 4px | 뱃지, 작은 태그, 인풋 내부 요소 |
| `--radius-md` | 8px | 버튼, 입력 필드, 사각 칩 |
| `--radius-lg` | 12px | 카드, 가게 카드, 메뉴 썸네일, 토스트 |
| `--radius-xl` | 16px | 안내 박스, 확인 모달 |
| `--radius-2xl` | 20px | 바텀시트 상단, 검색바, 데스크톱 앱 프레임 |
| `--radius-full` | 9999px | 필 칩, 아바타, 플로팅 장바구니, 토글, 카테고리 원 |

- 버튼·입력의 radius는 **8px 고정**(각진 듯 둥근 간판 모서리). 직각(0px)·과도한 라운드(버튼에 999px) 금지.
- **border는 절제해서 쓴다.** 면 분리는 우선 surface 색 차이와 간격으로. 허용:
  (1) surface-raised 카드가 크림 bg와 대비가 약할 때 `1px solid var(--color-border)` 1겹,
  (2) 입력 필드 테두리 `1px solid var(--color-border)`(focus 시 `2px var(--color-primary)`),
  (3) 섹션 구분선 화면당 최대 1개 `1px solid var(--color-border)`.
  같은 화면에서 카드마다 border를 두르지 않는다(§10 공통2).

**shadow/elevation 단계** (다크 값은 tokens.css에서 검정 기반 오버라이드):

| 토큰 | 라이트 값 | 다크 값 | 용도 |
|---|---|---|---|
| `--shadow-0` | `none` | `none` | 기본. 카드는 그림자 없음 (surface 색·border로 구분) |
| `--shadow-1` | `0 1px 3px rgba(26,23,18,0.06)` | `0 1px 3px rgba(0,0,0,0.4)` | sticky 앱바·탭바·CTA 바 |
| `--shadow-2` | `0 2px 8px rgba(26,23,18,0.10)` | `0 2px 8px rgba(0,0,0,0.5)` | 플로팅 장바구니·sticky 요약 바 |
| `--shadow-3` | `0 8px 24px rgba(26,23,18,0.16)` | `0 8px 24px rgba(0,0,0,0.6)` | 바텀시트·모달·토스트·데스크톱 프레임 |

## §6. 핵심 컴포넌트 규칙

공통 press 물성: 모든 인터랙티브 요소는 `:active`에서 `transform: scale(0.97)`(150ms `--ease-exit`), 떼면 300ms `--ease-bounce`로 복귀(§7). 리스트 행은 `scale(0.99)` + bg 변화.

### 6.1 버튼 (primary / secondary / ghost)

- **primary**: h 54px(하단 CTA)/48px(인라인), radius 8px, bg `--color-primary`(민트), 라벨 16px/700 `--color-primary-text`(먹색). 하단 CTA는 가로 꽉 참, 인라인은 내용 폭 + 좌우 패딩 20px. **민트 위 흰 글씨 금지.**
- **secondary**: 동일 치수, bg `--color-primary-soft`, 라벨 16px/700 `--color-primary-soft-text`.
- **ghost**: bg 투명, 라벨 14px/700 `--color-text-sub`, h 44px. 취소·부가 액션 전용.
- 상태: hover(데스크톱만) `filter: brightness(0.97)` / press bg `--color-primary-pressed` + `scale(0.97)` / disabled bg `--color-surface`, 라벨 `--color-text-tertiary` / focus-visible `outline: 2px solid var(--color-primary); outline-offset: 2px`.

```css
.btn-primary { height: 54px; width: 100%; border: 0; border-radius: var(--radius-md);
  background: var(--color-primary); color: var(--color-primary-text);
  font-size: 16px; font-weight: 700;
  transition: transform var(--motion-quick) var(--ease-exit), background var(--motion-quick) linear; }
.btn-primary:active { transform: scale(0.97); background: var(--color-primary-pressed); }
.btn-primary:disabled { background: var(--color-surface); color: var(--color-text-tertiary); }
```

### 6.2 입력 필드

- h 52px, 라벨 13px/500 `--color-text-sub`(필드 위, 간격 4px), 값 16px/500, 배경 `--color-surface-raised`, `1px solid var(--color-border)` radius 8px → focus 시 `2px solid var(--color-primary)`(200ms 전환).
- **검색바**는 예외: bg `--color-surface`, radius 20px, h 44px, 좌측 20px 돋보기 SVG(stroke 1.8px) + placeholder 14px `--color-text-tertiary`.
- 에러: 테두리·헬퍼 텍스트(13px)를 `--color-danger`로, 좌우 4px 흔들림 2회 200ms.

### 6.3 카드

- bg `--color-surface`, radius 12px, 패딩 16px, 그림자 없음(`--shadow-0`).
- 흰 카드가 필요하면 bg `--color-surface-raised` + `1px solid var(--color-border)`(크림 bg와 대비 확보). 카드마다 border 남발 금지 — surface 톤 카드가 기본.
- 카드 안에 카드 금지(중첩 1단까지). 카드 제목은 title-2 또는 caption(라벨성).

### 6.4 리스트 아이템 (가게·메뉴 행)

- min-height 56px(메뉴 썸네일 행은 88px), 상하 패딩 16px. 구조: [썸네일 64×64 radius 12px 또는 아이콘 40×40 원형 bg `--color-surface`] –12px– [주 텍스트 16px/700 + 보조 13px/500 `--color-text-sub`(배달비·시간·별점)] – [우측 가격 16px/700 tabular-nums].
- 할인 가격은 원가 13px `--color-text-tertiary` 취소선 + 할인가 16px/700 `--color-accent-soft-text`. **행 사이 구분선 금지** — 간격으로만 분리.
- press: 행 전체 bg `--color-surface`(라이트)/`--color-surface-raised`(다크) 150ms + `scale(0.99)`.

```css
.list-item { display: flex; align-items: center; gap: 12px; min-height: 56px; padding: 16px 0; }
.list-item .price { margin-left: auto; font-size: 16px; font-weight: 700;
  font-variant-numeric: tabular-nums; }
```

### 6.5 상단 네비/앱바

- h 56px, 좌 뒤로가기(히트 44×44, 24px 인라인 SVG 화살표 stroke 1.8px), 중앙 타이틀 18px/800 또는 워드마크, 우측 보조 액션 최대 2개(검색·장바구니 아이콘).
- 배경 `--color-bg`. 스크롤 시작 시 `--shadow-1` + 타이틀 페이드인(200ms). **햄버거 메뉴·드로어 금지**(§10 E5). 내비는 하단 탭바.

### 6.6 하단 탭바 (모바일)

- h 64px + safe-area, 탭 4~5개. 각 탭: 24px 인라인 SVG 아이콘 + micro(12px/700) 라벨, 상하 패딩 8px, 히트 영역 44px 이상.
- 활성 탭 `--color-primary-soft-text`(아이콘 stroke·라벨), 비활성 `--color-text-tertiary`. **활성 탭 배경 민트 알약 금지** — 색으로만 구분. 탭 전환 시 아이콘 `scale(0.9)→1` 바운스 300ms.
- bg `--color-bg` + 위쪽 그림자 `--shadow-1`. 상단 구분선 금지.

### 6.7 모달 / 바텀시트

- 기본은 **바텀시트**(중앙 모달은 파괴적 확인 전용): 하단 부착, radius 20px 20px 0 0, bg `--color-surface-raised`, `--shadow-3`, 상단 그랩바 36×4px `--color-border` radius full(상단 중앙, 위 8px), 내부 패딩 20px, 제목 title-2.
- 진입 `translateY(100%)→0` 300ms `--ease-enter` + 딤(`--color-dim`) 페이드 250ms. CTA는 시트 안 하단 54px 버튼.
- 파괴적 확인 모달: 중앙, 폭 `calc(100% - 40px)`, radius 16px, 본문 14px, 버튼 2개 가로 배치(ghost + danger bg 버튼) 각 h 48px, gap 8px. danger 버튼은 bg `--color-danger` + 흰 텍스트(danger는 어두워 흰 텍스트 통과).

### 6.8 토스트

- 하단 CTA(또는 탭바) 위 8px, bg `--color-text`(라이트)/`--color-surface-raised`(다크), 텍스트 14px/700 `--color-bg`(라이트)/`--color-text`(다크), radius 12px, 패딩 16px 20px, `--shadow-3`.
- 진입 `translateY(12px)+opacity 0→1` 300ms `--ease-bounce`, 3초 후 자동 소멸(250ms 페이드). 성공 토스트는 텍스트 앞 20px 체크 SVG `--color-success`.

### 6.9 뱃지 / 칩

- 뱃지: h 24px, 패딩 4px 8px, radius 4px, micro(12px/700). 색은 soft 배경 + 대응 soft-text 조합만(`--color-primary-soft`+soft-text, `--color-accent-soft`+accent-soft-text, `--color-danger-soft`+danger-soft-text, `--color-success-soft`+success-soft-text). **채도 높은 순색 배경 뱃지 금지.** 예외: "할인"·"신규" 강조 뱃지는 bg `--color-accent` + 흰 텍스트(accent는 흰 텍스트 3:1 이상 확인된 대형/굵은 micro만).
- 선택 칩(카테고리 필터): h 36px(히트 44px), 패딩 8px 16px, radius full, 기본 bg `--color-surface` 텍스트 14px/700 `--color-text-sub` → 선택 시 bg `--color-primary` 텍스트 `--color-primary-text`(먹색). press `scale(0.97)`.

### 6.10 빈 상태 (empty state)

- 세로 중앙 정렬: 72×72 인라인 SVG 일러스트(단색 2톤: `--color-border` 면 + `--color-primary-vivid` 포인트) → 16px → 제목 18px/800 → 4px → 설명 14px/500 `--color-text-sub` → 24px → primary 또는 secondary 버튼 h 48px.
- 카피는 §8 규칙: "장바구니가 텅 비었어요 🥲" + 다음 행동 제안 1줄. 이모지는 여기서만 1개 허용. 사과·경고 톤 금지.

## §7. 모션

**모션 성격 한 줄: "탁 눌리고 통 튄다 — 배달 오토바이처럼 경쾌하게 반응하고 살짝 오버슈트로 착지."**

**토큰:**

```css
--motion-quick: 150ms;  /* press 반응 */
--motion-fast:  250ms;  /* fade·색 전환 */
--motion-base:  300ms;  /* 진입·시트·페이지 전환 */
--motion-slow:  400ms;  /* 성공 체크·카운트업·바운스 강조 */
--motion-stagger: 40ms; /* 리스트 스태거 간격(최대 8개) */
--ease-standard: cubic-bezier(0.4, 0, 0.2, 1);      /* 위치 이동·색 전환 기본 */
--ease-enter:    cubic-bezier(0, 0, 0.2, 1);        /* 진입 */
--ease-exit:     cubic-bezier(0.4, 0, 1, 1);        /* 퇴장 */
--ease-bounce:   cubic-bezier(0.34, 1.56, 0.64, 1); /* press 복귀·카테고리·하트·완료 강조 전용 */
```

**패턴별 규칙:**

| 패턴 | 규칙 |
|---|---|
| press | `:active`에서 `scale(0.97)` 150ms `--ease-exit`, 떼면 300ms `--ease-bounce` 복귀. 리스트 행은 0.99 |
| 진입(entrance) | `opacity 0→1` + `translateY(12px)→0`, 300ms `--ease-enter` |
| 리스트 스태거 | 항목당 40ms 지연, 최대 8개까지(이후 동시 표시) |
| 페이지 전환 | 나가는 화면 fade-out 250ms → 들어오는 화면 진입 패턴. 전체 화면 좌우 슬라이드 금지 |
| 장바구니 담기 | 담기 버튼 `scale(0.97)→1.05→1` 400ms `--ease-bounce` + 플로팅 장바구니 카운트 뱃지 `scale(0)→1` 300ms `--ease-bounce` |
| 숫자 변화 | 총액·수량은 카운트업 400ms `--ease-standard`(이전 값부터) |
| 성공 체크 | 원 `scale(0)→1` 400ms `--ease-bounce` + 체크 패스 `stroke-dashoffset` 300ms(100ms 지연) |
| 배달 추적 | 상태 스텝 점등 시 점 `scale(1)→1.2→1` 400ms `--ease-bounce`, 연결선 채우기 `--ease-standard` |
| 바텀시트 | `translateY(100%)→0` 300ms `--ease-enter`, 딤 fade 250ms |

**`prefers-reduced-motion` 대응 필수:** transform 기반 애니메이션 전부 제거, opacity 150ms만 유지. 카운트업·바운스는 즉시 최종값/상태 표시. (tokens.css 전역 블록 참조.)

## §8. 보이스 & 톤 (마이크로카피)

- **해요체 + 위트 한 스푼.** "~하십시오"·"~바랍니다" 격식체 금지, 반말 금지. 친구가 옆에서 거드는 말투.
- 문장은 한 호흡(20자 내외), 사용자가 주어("내 장바구니", "고른 메뉴"). 시스템 주어("시스템이", "요청이") 금지.
- 이모지: **화면당 최대 1개**, 성공·빈 상태·즐거운 순간에만. 버튼·에러에는 금지.
- 숫자는 천 단위 콤마 필수, "원"은 붙여 쓴다("14,000원"). 시간은 "약 25분", "5분 뒤 도착".

| 상황 | Enamel 카피 | 금지 예 |
|---|---|---|
| CTA (담기) | 담기 | 장바구니에 추가 |
| CTA (주문) | 주문할게요 | 결제 진행, 제출 |
| CTA (다음) | 다음 | 계속하기 |
| 완료 | 주문 완료! 맛있게 드세요 | 주문이 정상 처리되었습니다 |
| 에러 (품절) | 방금 품절됐어요. 다른 메뉴는 어때요? | 해당 상품은 재고가 없습니다 |
| 에러 (네트워크) | 연결이 잠깐 끊겼어요. 다시 해볼까요? | 네트워크 오류 (E-1024) |
| 에러 (최소주문) | 3,000원만 더 담으면 주문할 수 있어요 | 최소 주문 금액 미달 |
| 빈 상태 (장바구니) | 장바구니가 텅 비었어요 🥲 | 데이터가 존재하지 않습니다 |
| 로딩 | 맛집 찾는 중… | 로딩 중입니다. 기다려 주십시오 |
| 확인 다이얼로그 | 이 가게 장바구니를 비울까요? | 장바구니를 초기화하시겠습니까? |
| 성공 토스트 | 장바구니에 담았어요 | 담기가 완료되었습니다 |
| 배달 상태 | 사장님이 요리하고 있어요 | 조리 상태: 진행 중 |

- 에러는 항상 **[무슨 일인지 1문장] + [지금 할 수 있는 일 1문장]** 구조. 에러 코드·기술 용어 노출 금지.
- 금지 표현: "처리되었습니다", "실패하였습니다", "잘못된 입력입니다", 반복되는 "죄송합니다", 느낌표 2개 이상 연달아.

## §9. 레이아웃 레시피 — 데모 5화면 (가상 배달 앱 "먹깨비 Meokkkaebi")

모든 화면 공통: 모바일 390px 단일 컬럼, 화면 패딩 20px, 데스크톱은 중앙 420px 프레임(§4).
하단 탭바(§6.6) 4탭: 홈 / 검색 / 주문내역 / 마이. screen-3·4는 탭바 대신 하단 고정 CTA(또는 플로팅 장바구니).

### screen-1 홈 (카테고리 + 추천)

- 목적: "지금 뭐 먹지"를 3초 안에 좁혀준다.
- 위→아래: 앱바(좌측 워드마크 20px/800 민트 아님·먹색, 우측 알림 벨 24px SVG) → 16px → 위치 행(핀 SVG + "우리집 · 역삼동" 14px/700, 셰브론) → 16px → **검색바**(§6.2, "먹고 싶은 메뉴 검색" placeholder) → 24px → **카테고리 4열 그리드**(gap 12px, 각: 56px 원형 bg `--color-primary-soft` 안에 32px SVG 아이콘 `--color-primary-vivid` + 아래 caption 라벨 — 치킨/피자/한식/분식/카페/야식… 2줄 8칸) → 32px → 프로모 배너(surface-raised 카드 radius 12px, 좌측 title-2 카피 "첫 주문 3,000원 할인 🎉" + accent 뱃지) → 32px → "우리 동네 인기" 섹션(title-2) → 8px → 가게 카드 리스트(§9 가게 카드 형식 2~3개): 16:9 썸네일 자리(radius 12px, 단색 `--color-surface` placeholder + 중앙 SVG), 하단 가게명 18px/800 + 별점★ `--color-accent`·배달시간·배달비 caption + "쿠폰" 뱃지 → 탭바.
- 사용 컴포넌트: 앱바, 검색바, 카테고리 그리드, 카드, 뱃지, 탭바. 진입 시 카테고리·리스트 스태거(40ms).

### screen-2 가게 목록 (카테고리 결과 + 필터)

- 목적: 한 카테고리 안에서 가게를 비교해 고른다.
- 위→아래: 앱바(뒤로가기 + 타이틀 "치킨" 18px/800) → 8px → **필터 칩 행**(가로 스크롤, §6.9 선택 칩: "정렬·기본순" / "배달비 무료" / "별점 4.5+" / "쿠폰") → 16px → 결과 수 caption("근처 42곳") → 8px → **가게 카드 리스트 반복**(각: surface 톤 카드 아님, 행형 — 좌측 88×88 썸네일 radius 12px, 우측 가게명 18px/800 + 별점·리뷰수 caption + 배달시간·배달비 caption + 대표메뉴 13px `--color-text-tertiary`, 우상단 "찜" 하트 SVG 히트 44px). 최소주문·할인 정보는 accent-soft 뱃지) → 그룹 간 20px → 탭바.
- 정렬 바텀시트(§6.7): 필터 칩 "정렬" 탭 시 라디오 리스트(기본순/별점순/배달빠른순/가까운순).

### screen-3 메뉴 · 장바구니 (메뉴 상세 + 담기 + 플로팅 장바구니)

- 목적: 메뉴를 고르고 장바구니를 키운다. 담는 재미(모션).
- 위→아래: 히어로 이미지 자리(전체 폭, 높이 200px, `--color-surface` placeholder + 중앙 SVG, 위 뒤로가기 플로팅 원형 44px `--color-surface-raised`) → 카드형 정보(surface-raised, 상단 -20px 겹침, radius 20px 상단: 가게명 title-1 + 별점·배달정보 caption) → 24px → "대표 메뉴" title-2 → 메뉴 리스트(§6.4 썸네일 행 88px: 메뉴명 16px/700 + 설명 13px sub 2줄 말줄임 + 가격 16px/700, 우측 64px 썸네일. 할인 메뉴는 취소선 원가 + accent-soft-text 할인가) → 하단 **플로팅 장바구니 바**(sticky, `--shadow-2`, bg `--color-primary` 먹색 텍스트: 좌측 "3개 담음" 14px/700 + 우측 "14,000원 · 장바구니 보기" 16px/700, radius 12px, 좌우 20px 마진). 담기 시 §7 장바구니 담기 모션 + 토스트 "장바구니에 담았어요".
- 메뉴 옵션 바텀시트(§6.7): 메뉴 탭 시 수량 스텝퍼(− 44px / 수 20px/800 tabular / + 44px) + 옵션 체크 + 하단 CTA "N,000원 담기".

### screen-4 주문 / 결제

- 목적: 장바구니를 확인하고 결제까지 한 번에.
- 위→아래: 앱바(뒤로가기 + "주문하기") → 16px → 배달지 카드(surface radius 12px: 핀 SVG + "우리집 · 역삼동 …" 16px/700 + "변경" ghost) → 20px → 주문 메뉴 요약 리스트(§6.4: 메뉴명·수량 + 우측 금액, 행 사이 선 없음) → 20px → 요청사항 입력(§6.2, "문 앞에 놓아주세요" placeholder) → 24px → 결제 금액 블록(surface-raised 카드: "메뉴 금액 / 배달비 / 할인" 3행 라벨 14px sub + 값 14px/700, 구분선 1개(§5 예외) 아래 "총 결제금액" title-2 + **display-2 총액** `--color-accent` 강조) → 24px → 결제수단 선택 칩 → 하단 고정 CTA "17,000원 주문할게요"(§6.1).
- 최소주문 미달 시 CTA disabled + 상단 안내 "3,000원만 더 담으면 주문할 수 있어요"(§8).

### screen-5 주문 현황 (실시간 배달 추적)

- 목적: "내 음식이 어디쯤"을 한눈에. 기다림을 즐겁게.
- 위→아래: 앱바(뒤로가기 + "주문 현황") → 24px → **상태 히어로**(중앙: 큰 상태 일러스트 96px SVG 2톤 + display-2 "요리하고 있어요" + caption "약 25분 뒤 도착 예정") → 32px → **진행 스텝 인디케이터**(4단계 세로 또는 가로: 주문 접수 → 조리 중(현재, `--color-primary-vivid` 점 + 굵게) → 배달 출발 → 도착 완료. 완료 단계 `--color-success`, 대기 `--color-border`. §7 배달 추적 모션) → 32px → 가게·주문 요약 카드(surface: 가게명 16px/700 + 주문 메뉴 caption + 주문번호) → 24px → 도움 액션(secondary "가게에 전화" / ghost "주문 취소") → 하단 여백.
- 도착 완료 전환 시: 상태 히어로가 §7 성공 체크 모션 + 카피 "주문 완료! 맛있게 드세요"(이모지 1개 허용).

## §10. 금지 규칙 (Anti-AI-look)

**공통 금지** (AI가 흔히 저지르는 실수 → 대신 할 것):
1. 보라→파랑 그라데이션 히어로 → Enamel에 그라데이션은 없다. 단색 크림 bg + 단색 민트/주홍 면만.
2. 모든 카드에 동일 그림자 + border → 카드는 `--shadow-0`. 그림자는 떠 있는 것(시트·토스트·플로팅 장바구니·sticky 바)에만. border는 §5 허용 3곳만.
3. 3열 아이콘+제목+설명 카드 반복 → 콘텐츠 카드는 최대 2열. (카테고리 아이콘 4열 그리드는 §9 screen-1 예외로만.)
4. `border: 1px solid #eee` 남발 → §5 border 규칙 밖 전부 금지.
5. 이모지를 아이콘 대신 사용 → 아이콘은 24px 인라인 SVG(stroke 1.8px)만. 이모지는 §8 규칙(화면당 1개, 성공·빈 상태)만.
6. 화면마다 다른 radius → §5 스케일 6값만. 버튼·입력은 항상 8px.

**Enamel 고유 금지** (E1~E7):
1. **E1 민트 위 흰 글씨 금지** → primary(민트) 버튼·칩·활성 요소의 텍스트/아이콘은 항상 `--color-primary-text`(먹색). 흰 글씨는 2.22:1로 대비 미달이며 이 프리셋의 정체성에 반한다.
2. **E2 순백 배경 금지** → 화면 캔버스는 크림(`#FBF7EF`). `background:#fff`/`#ffffff`를 화면 bg로 쓰면 위반(surface-raised 카드·시트에만 흰색 허용).
3. **E3 민트 대면적 배경 금지** → 민트(`--color-primary`)는 CTA·활성 칩·플로팅 장바구니·선택 하이라이트 등 "액션 표면"에만. 섹션 배경·히어로 전체를 민트로 칠하지 않는다(soft 톤 안내 박스는 허용).
4. **E4 촘촘한 데이터 테이블 금지** → `<table>` 사용 0개. 메뉴·주문·가게는 56~88px 리스트 아이템으로 푼다. 정렬이 필요하면 우측 정렬 가격 1열만.
5. **E5 상단 햄버거 메뉴·드로어 금지** → 내비게이션은 하단 탭바 + 화면 안 리스트·카테고리로만. 앱바 우측은 검색·장바구니·알림 아이콘까지.
6. **E6 격식체·시스템 말투 금지** → "처리되었습니다", "재고가 없습니다", 에러 코드 노출 전부 금지. §8 표의 위트 있는 해요체만.
7. **E7 얇은 제목·400 굵기 금지** → 화면 제목과 큰 숫자는 800(간판 굵기). title/display에 400·500을 쓰면 뉴트로 간판 인상이 무너진다. 본문만 500.

## §11. Tailwind v4 / React 매핑 (부록)

```css
/* app.css — tokens.css를 불러온 뒤 Tailwind 토큰으로 매핑 */
@import "tailwindcss";
@import "../presets/14-enamel/tokens.css";

@theme inline {
  --color-bg: var(--color-bg);
  --color-surface: var(--color-surface);
  --color-surface-raised: var(--color-surface-raised);
  --color-text: var(--color-text);
  --color-text-sub: var(--color-text-sub);
  --color-primary: var(--color-primary);
  --color-primary-text: var(--color-primary-text);
  --color-primary-soft: var(--color-primary-soft);
  --color-accent: var(--color-accent);
  --color-danger: var(--color-danger);
  --color-success: var(--color-success);
  --radius-md: var(--radius-md);
  --radius-lg: var(--radius-lg);
  --radius-2xl: var(--radius-2xl);
  --font-sans: var(--font-family);
  --ease-bounce: var(--ease-bounce);
  --ease-enter: var(--ease-enter);
}
```

```tsx
// CTA 버튼 — 민트 위 먹색 텍스트 (h-[54px], rounded-lg = 8px 매핑 확인)
export function CtaButton(props: React.ComponentProps<"button">) {
  return (
    <button
      className="h-[54px] w-full rounded-[8px] bg-primary text-[16px] font-bold text-primary-text
                 transition-transform duration-[150ms] ease-[cubic-bezier(0.4,0,1,1)]
                 active:scale-[0.97] disabled:bg-surface disabled:text-text-tertiary"
      {...props}
    />
  );
}

// 가게 카드 (행형)
export function StoreRow({ thumb, name, rating, eta, fee }: StoreRowProps) {
  return (
    <div className="flex min-h-[88px] items-center gap-3 py-4 transition-transform active:scale-[0.99]">
      <div className="size-[88px] shrink-0 rounded-[12px] bg-surface">{thumb}</div>
      <div className="min-w-0">
        <p className="truncate text-[18px] font-extrabold text-text">{name}</p>
        <p className="text-[13px] text-text-sub tabular-nums">★ {rating} · {eta}분 · 배달 {fee}</p>
      </div>
    </div>
  );
}
```

**StyleSeed 호환 메모:** tokens.css의 `--color-*` / `--radius-*` / `--motion-*` / `--ease-*`는 StyleSeed theme.css의 동명 슬롯에 1:1로 옮겨진다. 모션 시드는 "Snap+Pulse" 계열(press = scale + bounce 복귀, 담기 = pop)에 대응. `--font-size-*` 8단계는 StyleSeed type scale의 display/title/body/caption 슬롯에 순서대로 매핑한다. **primary-text가 먹색인 점**은 StyleSeed on-primary 슬롯에 그대로 옮겨 대비를 유지한다.

## §12. 채점 루브릭

합격선: **verifiable 10항목 전부 통과(65점 만점 중 65점) + subjective 5항목 평균 4.0 이상**.
하나라도 미달이면 불합격 — loop-runner는 미달 항목만 고쳐 재채점한다.
판정 대상 파일 집합을 `$F`(html/css/tsx 글롭)로 표기한다.

### verifiable 항목 (기계 판정, 65점)

| # | 항목 | 배점 | 판정 방법 |
|---|---|---|---|
| V1 | 대비율: 실제 사용된 bg/text·surface/text·primary/primary-text 쌍 4.5:1 이상, vivid·accent 그래픽 쌍 3:1 이상 | 10 | 결과물의 hex를 추출해 WCAG 공식으로 계산: `L=0.2126R'+0.7152G'+0.0722B'` (c'=c/12.92 if c≤0.03928 else ((c+0.055)/1.055)^2.4), `CR=(L1+0.05)/(L2+0.05)`. §2.3 표와 대조. 토큰을 무변경 사용했다면 §2.3 표 인용으로 통과 |
| V2 | 민트 위 흰 텍스트 0개 (E1) | 8 | primary/민트 계열 bg를 쓰는 요소의 `color`가 `#fff`/`#ffffff`/`white`가 아님. `grep -rniE 'background[^;]*(--color-primary\b\|#2AC1BC\|#F5B301)' $F` 로 잡힌 규칙 블록에 `color:\s*(#fff\|#ffffff\|white)` 동반 0건. 예외: accent bg 뱃지 |
| V3 | 스페이싱 스케일 외 값 0개 | 8 | `grep -rhoE '(margin\|padding\|gap\|inset)[a-z-]*:[^;]+' $F \| grep -oE '[0-9]+px' \| grep -vwE '(0\|4\|8\|12\|16\|20\|24\|32\|40\|48\|64)px'` → 0줄 |
| V4 | 타입 스케일 외 font-size 0개 | 8 | `grep -rhoE 'font-size:\s*[0-9.]+(px\|rem\|em)' $F \| grep -vE ':\s*(12\|13\|14\|16\|20\|24\|30\|40)px'` → 0줄 (rem/em 사용 자체가 위반) |
| V5 | radius가 §5 스케일 값만 | 5 | `grep -rhoE 'border-radius:[^;]+' $F \| grep -oE '[0-9]+px' \| grep -vwE '(4\|8\|12\|16\|20\|9999)px'` → 0줄 |
| V6 | shadow가 §5 표 4단계와 일치 | 4 | `grep -rhoE 'box-shadow:[^;]+' $F` 의 모든 값이 `var(--shadow-[0-3])` 참조이거나 tokens.css의 `--shadow-*` 정의 문자열과 일치 → 불일치 0건 |
| V7 | `prefers-reduced-motion` 대응 존재 | 4 | `grep -rl 'prefers-reduced-motion' $F \| wc -l` ≥ 1 |
| V8 | 외부 리소스 0 (CDN 폰트/스크립트/이미지) | 5 | `grep -rnE 'https?://[^"'"'"')( ]+\.(css\|js\|woff2?\|ttf\|png\|jpe?g\|webp\|svg)\|fonts\.googleapis\|cdn\.\|unpkg\|jsdelivr' $F` → 0줄 |
| V9 | press 물성: scale(0.97) + bounce easing 존재 | 8 | `grep -rF 'scale(0.97)' $F \| wc -l` ≥ 1 **그리고** `grep -rE 'var\(--ease-bounce\)\|cubic-bezier\(0\.34, 1\.56, 0\.64, 1\)' $F \| wc -l` ≥ 1 |
| V10 | 테이블 금지 + 가격 tabular-nums + 순백 bg 금지(E2) | 5 | `grep -ri '<table' $F \| wc -l` = 0 **그리고** `grep -r 'tabular-nums' $F \| wc -l` ≥ 1 **그리고** 화면 최상위(body/.screen) `background`가 `#fff`/`#ffffff`/`white` 직접 지정 0건(`--color-bg` 사용) |

### subjective 항목 (AI/사람 채점, 5점 척도 ×5항목 — 평균 4.0 이상 합격)

| # | 항목 | 1점 앵커 | 3점 앵커 | 5점 앵커 |
|---|---|---|---|---|
| S1 | §1 첫인상 부합 (간판 굵기·크림·민트 한 방) | 배경이 순백이고 제목이 얇으며 민트가 안 보이거나 사방에 칠해져 있다 | 크림 배경과 굵은 제목은 있으나 민트 사용이 과하거나 부족해 균형이 어긋난다 | 크림 캔버스 위 800 굵기 큰 제목, 민트는 CTA·활성에만 큰 면적으로 딱 등장 |
| S2 | §8 어조 준수 (위트 있는 해요체) | "처리되었습니다"류 격식체 또는 에러 코드 노출 | 해요체이나 밋밋하거나 시스템 주어 문장 혼재 | 전 카피가 위트 있는 해요체 한 호흡, 에러가 [상황+다음 행동], CTA가 동사형("주문할게요") |
| S3 | 모션 물성 (§7) | 모션 없음 또는 linear/기본 ease만 | press는 있으나 bounce 복귀·담기 pop·스태거가 안 느껴진다 | 탁 눌리고 통 튀며(bounce), 담기·완료·추적 모션이 §7 표와 일치 |
| S4 | 여백·밀도 리듬 (§4) | 요소가 빽빽하거나 구분선으로 나뉘어 있다 | 간격은 스케일 값이나 섹션 리듬(32px)이 불규칙하다 | 선 없이 간격만으로 그룹이 읽히고, 배달앱다운 적당한 밀도에 위계가 명확하다 |
| S5 | §10 정성 항목 (민트 위 흰글씨·순백bg·민트 대면적·CTA 색) | 민트 위 흰 글씨 또는 순백 배경 또는 민트 대면적 히어로 | 금지 위반은 없으나 순색 면적이 넓어 산만하다 | 민트 위 먹색·크림 캔버스·민트는 액션 표면에만, 주홍은 가격 포인트에만 |

**채점 절차:** verifiable은 판정 명령을 그대로 실행해 pass/fail 기록 → subjective는 5화면을 라이트/다크·a/b 각각 확인해 앵커와 대조, 1~5점 부여 → 합산. 4.0 미만 항목은 5점 앵커 조건을 수정 지시문으로 변환해 다음 반복에 넘긴다.
